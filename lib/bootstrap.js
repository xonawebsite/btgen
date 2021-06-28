const path = require('path');
const {
  readFileSync,
  promises
} = require('fs');

class Bootstrap {
  constructor() {
    this.requirements = {
      default: [],
      extends: [],
      plugins: []
    }
  }

  async getContent(dir) {
    const content = [];

    for await (const dirent of dir) {
      if (dirent.isFile()) {
        content.push({
          name: dirent.name,
          type: 'file'
        });
      }
    }

    return content;
  }

  async listContent(dir) {
    const self = this;
    const content = {};

    for await (const dirent of dir) {
      if (dirent.isDirectory()) {
        const dir = await promises.opendir(path.resolve(__dirname, `../lib/requirements/${dirent.name}`));
        content[dirent.name] = await self.getContent(dir);
      }
    }

    return content;
  }

  async parseRequirements(content) {
    const requirements = [];
    const contentDirs = [];
    for (const c in content) {
      contentDirs.push(c);
    }
    for await (const cont of contentDirs) {
      content[cont].forEach(c => {
        requirements.push(JSON.parse(readFile(path.resolve(__dirname, `../lib/requirements/${cont}/${c}`))));
      })
    }
  }

  async loadRequirements() {
    const folder = path.resolve(__dirname, '../lib/requirements');
    const dir = await promises.opendir(folder);
    this.requirements = this.parseRequirements(await this.listContent(dir));
    console.log(requirements);
  }

  boot() {
    this.ready();
    this.loadRequirements();
  }
}

module.exports = new Bootstrap();