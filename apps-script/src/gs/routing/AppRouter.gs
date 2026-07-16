/**
 * ============================================================================
 * Application Router
 * ============================================================================
 */

'use strict';

Pulse.Router = (() => {

  /**
   * Renders an HTML page.
   *
   * @param {string} page
   * @returns {HtmlOutput}
   */
  function render(page) {

    const output = HtmlService
      .createTemplateFromFile(page)
      .evaluate();

    output
      .setTitle(Pulse.Config.name())
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

    return output;

  }

  return Object.freeze({

    render

  });

})();