module.exports = {
  expressPackageJson: (title = 'btgen-project')=>{
  return `{
    "name": "${title.toLowerCase()}",
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
  phaserPackageJson: (title = 'btgen-project')=>{
  return `{
  "name": "${title.toLowerCase()}",
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
},
electronJson: (title= 'btgen-project')=>{ 
  return `{
  "name": "${title.toLowerCase()}",
  "version": "1.0.0",
  "description": "",
  "main": "app/index.js",
  "scripts": {
    "start": "electron .",
    "serve": "http-server -i -d -c-1 ./app/" ,
    "build:mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --out=build",
    "build:win": "electron-packager . --overwrite --platform=win32 --arch=ia32 --out=build",
    "build:win64": "electron-packager . --overwrite --platform=win32 --arch=x64 --out=build",
    "build:linux": "electron-packager . --overwrite --platform=linux --arch=ia32 --out=build",
    "build:linux64": "electron-packager . --overwrite --platform=linux --arch=x64 --out=build"
  },
  "keywords": [],
  "author": "",
  "repository": "",
  "license": "ISC",
  "dependencies": {
    "electron-packager": "^15.0.0",
    "http-server": "^0.12.3"
  },
  "devDependencies": {
    "electron": "^9.1.1"
  }
}`;
}
}