const fs = require('fs');

class Btgen {
  /**
   * Options passed by user in command line
   * @readonly
   * @member {string[]} options
   */
  #_options;

  /**
   * Template creation status
   * @readonly
   * @member {string} status
   */
  #_status;

  /**
   * Btgen configuration
   * @readonly
   * @member {BtgenConfiguration} config
   */
  #_config;

  /**
   * Installed Plugins
   * @readonly
   * @member {BtgenPlugin[]} plugins
   */
  #_plugins;

  /**
   * Template object
   * @member {BtgenTemplate} template
   */
  template;

  /**
   * Creates a new Btgen Template or Help instance
   * @class Btgen
   * @param {string[]} options
   */
  constructor(options) {
    this._options = options;
    this._status = 'pending';
    this.init();
  }

  async init() {
    if (await this.start()) {
      if (await this.create()) {
        if (await this.destroy()) {
          this.finish()
        }
      }
    }
  }

  async loadConfig() {
    const self = this;
    await fs.readFile('btgen.config.json', function(err, data) {
      if (err) {
        self.reportError(err);
      } else {
        self._config = JSON.parse(data.toString());
        self._plugins = JSON.parse(data.toString()).plugins;
      }
    });
  }

  /**
   * Prints main help in console
   * @method printHelp
   * @returns {void}
   */
  async printHelp() {
    const self = this;
    await fs.readFile('doc/help.md', (err, data) => {
      if (err) {
        self.reportError(err);
      }
      console.log(data.toString());
    })
  }

  /**
   * Prints btgen installed version in console
   * @method printVersion
   * @returns {void}
   */
  async printVersion() {
    const self = this;
    await fs.readFile('package.json', (err, data) => {
      if (err) {
        self.reportError(err);
      }
      console.log('Btgen version %s', JSON.parse(data.toString()).version);
    })
  }

  /**
   * Actions to perform in the script initialization
   * @method onStart
   * @returns {void}
   */
  onStart() {
    this.status = 'starting';
  }

  /**
   * Start getting info for the new template
   * @method start
   * @returns {0 | 1 | Error}
   */
  async start() {
    await this.onStart();
    this.status = 'started';
    if (this._options.find(opt => opt === '--help' || opt === '-h')) {
      await this.printHelp();
      this.status = 'stopped';
      return 0;
    } else if (this._options.find(opt => opt === '--version' || opt === '-v')) {
      await this.printVersion();
      this.status = 'stopped';
      return 0;
    }else {
      await this.loadConfig();
      return 1;
    }
  }

  /**
   * Actions to perform during creating the template
   * @method onCreate
   * @returns {void}
   */
  onCreate() {
    this.status = 'calculating';
  }

  /**
   * Actions to create a template instance and initialize it
   * @method create
   * @returns {0 | 1 | Error}
   */
  create() {
    this.onCreate();
    this.status = 'writing';
  }

  /**
   * Actions to perform to destroy the template instance
   * @method onDestroy
   * @returns {void}
   */
  onDestroy() {
    this.status = 'wrote';
  }

  /**
   * Template instance desconstruction
   * @method destroy
   * @returns {0 | 1 | Error}
   */
  destroy() {
    this.onDestroy();
    this.status = 'saved';
  }

  /**
   * Actions to perform to finish the work
   * @method onFinish
   * @returns {0 | 1 | Error}
   */
  onFinish() {
    this.status = 'cleaning';
  }

  /**
   * Final action block, executed after onFinish actions
   * @method finish
   * @returns {void | error}
   */
  finish() {
    this.onFinish();
    this.status = 'done';
  }

  /**
   * Process and return errors
   * @method onError
   * @returns {Error}
   */
  onError() {}

  /**
   * Status change processor
   * @method onStatusChange
   * @returns {string}
   */
  onStatusChange() {}

  /**
   * Throws errors
   * @method reportError
   * @param {Error} error - Error to process and print/log
   * @returns {void}
   */
  reportError(error) {
    this.status = 'stopped';
    throw error;
  }

  reportStatus(status) {
    this.onStatusChange();
    return this._status;
  }

  /**
   * Options passed by user in command line
   * @readonly
   * @member {string[]} options
   */
  get options() {
    return this._options;
  }

  /**
   * Template creation status
   * @readonly
   * @member {string} status
   */
  get status() {
    return this._status;
  }

  get config() {
    return this._config;
  }

  get plugins() {
    return this._plugins;
  }

  set status(stat) {
    (this._status = stat && this.reportStatus(this._status)) ||
      this.reportError(new Error('imposible set status'));
  }
}

module.exports = Btgen;
