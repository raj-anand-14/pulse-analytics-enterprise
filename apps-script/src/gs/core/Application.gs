/**
 * ============================================================================
 * Application Module
 * ============================================================================
 */

'use strict';

Pulse.Application = (() => {

  /**
   * Handles every web request.
   *
   * @param {Object} e
   * @returns {HtmlOutput}
   */
  function handleRequest(e) {

    Pulse.ApplicationBootstrap.initialize();

    return Pulse.Router.render('Index');

  }

  return Object.freeze({

    handleRequest

  });

})();