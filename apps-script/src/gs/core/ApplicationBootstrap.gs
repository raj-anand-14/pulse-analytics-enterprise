/**
 * ============================================================================
 * Pulse Analytics Enterprise (Phoenix)
 * ============================================================================
 * File        : ApplicationBootstrap.gs
 * Description : Initializes application services.
 * ============================================================================
 */

'use strict';

Pulse.ApplicationBootstrap = (() => {

  let initialized = false;

  /**
   * Initializes the application once.
   */
  function initialize() {

    if (initialized) return;

    Pulse.Logger.info(
      'Bootstrap',
      `${Pulse.Config.name()} v${Pulse.Config.version()} initialized`
    );

    initialized = true;

  }

  return Object.freeze({
    initialize
  });

})();