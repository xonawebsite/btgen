const {
  access,
  constants,
  open,
  readFile,
  rm,
  writeFile,
} = require('fs');
const https = require('https');

class FileManager {
  constructor() {
    this._access = access;
    this._constants = constants;
    this._https = https;
    this._open = open;
    this._read = readFile;
    this._rm = rm;
    this._write = writeFile;
  }

  exists(path, callback) {
    this._access(path, this._constants.F_OK, err => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }

  create(file, content, callback) {
    const self = this;
    if (typeof file === 'string') {
      this._open(file, 'wx', (err, fd) => {
        if (err) {
          callback(err);
        } else {
          self._write(file, content, callback);
        }
      });
    } else {
      if (file && file.name && file.ext) {
        this._open(`${file.name}.${file.ext}`, 'wx', (err, fd) => {
          if (err) {
            callback(err);
          } else {
            self._write(`${file.name}.${file.ext}`, content, callback);
          }
        });
      }
    }
  }

  createEmpty(file, callback) {
    const self = this;
    const content = new Unit8Array(Buffer.from(''));
    if (typeof file === 'string') {
      this._open(file, 'wx', (err, fd) => {
        if (err) {
          callback(err);
        } else {
          self._write(file, content, callback);
        }
      });
    } else {
      if (file && file.name && file.ext) {
        this._open(`${file.name}.${file.ext}`, 'wx', (err, fd) => {
          if (err) {
            callback(err);
          } else {
            self._write(`${file.name}.${file.ext}`, content, callback);
          }
        });
      }
    }
  }

  download(url, save_path, callback) {
    const self = this;
    this._https.get(url).on('response', function (response) {
      let body = '';
      response.on('data', function (chunk) {
          body += chunk;
      });
      response.on('end', function () {
        self.create(save_path, body, callback);
      });
      response.on('error', err => {
        callback(err);
      });
    });
  }

  read(file, callback) {
    this._open(file, 'r', (err, fd) => {
      if (err) {
        callback(err);
      } else {
        callback(null, fd);
      }
    });
  }

  remove(path, callback) {
    this._rm(path, { force: true }, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }

  update(file, content, callback) {
  }
}

module.exports = new FileManager();