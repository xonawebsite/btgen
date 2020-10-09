module.exports = {
  expressPackageJson: (title)=>{
  return `{
    "name": "${title}",
    "version": "1.0.0",
    "private": true,
    "scripts": {
      "start": "node ./bin/www"
    },
    "dependencies": {
      "cookie-parser": "~1.4.4",
      "debug": "~2.6.9",
      "express": "~4.16.1",
      "morgan": "~1.9.1"
    }
  `;
},
  phaserPackageJson: (title)=>{
  return `{
  "name": "${title}",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "serve": "http-server -d -i -c-1 ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "http-server": "^0.12.3",
    "phaser": "^3.24.1"
  }
}
  `;
}
}