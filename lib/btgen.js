class BTGen {
	constructor() {
		this.depManager = require('./src/depManager');
		this.dirManager = require('./src/dirManager');
		this.fileManager = require('./src/fileManager');
		this.genManager = require('./src/genManager');
		this.gitManager = require('./src/gitManager');
		this.tplManager = require('./src/tplManager');
	}

	get dependency() {
		return this.depManager
	}

	get directory() {
		return this.dirManager
	}

	get file() {
		return this.fileManager
	}

	get generator() {
		return this.genManager
	}

	get git() {
		return this.gitManager
	}

	get template() {
		return this.tplManager
	}
}

module.exports = new BTGen();
