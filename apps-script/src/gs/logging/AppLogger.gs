/**
 * ============================================================================
 * Pulse Analytics Enterprise (Phoenix)
 * ============================================================================
 * File        : AppLogger.gs
 * Description : Centralized enterprise logging.
 * Author      : Anand Raj
 * Version     : 1.0.0
 * ============================================================================
 */

'use strict';

Pulse.Logger = (() => {

  /**
   * Returns formatted timestamp.
   *
   * @returns {string}
   */
  function timestamp() {

    return Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      'yyyy-MM-dd HH:mm:ss'
    );

  }

  /**
   * Writes a log entry.
   *
   * @param {string} level
   * @param {string} module
   * @param {string} message
   */
  function write(level, module, message) {

    Logger.log(
      `[${timestamp()}] [${level}] [${module}] ${message}`
    );

  }

  function info(module, message) {
    write('INFO', module, message);
  }

  function warn(module, message) {
    write('WARN', module, message);
  }

  function error(module, message) {
    write('ERROR', module, message);
  }

  function debug(module, message) {

    if (Pulse.Config.app().DEBUG_MODE) {
      write('DEBUG', module, message);
    }

  }

  return Object.freeze({

    info,
    warn,
    error,
    debug

  });

})();