/**
 * ============================================================================
 * Pulse Analytics Enterprise (Phoenix)
 * ============================================================================
 * File        : AppConfig.gs
 * Description : Central application configuration.
 * Author      : Anand Raj
 * Version     : 1.0.0
 * ============================================================================
 */

'use strict';

// ============================================================================
// Namespace
// ============================================================================

var Pulse = Pulse || {};

// ============================================================================
// Application Configuration
// ============================================================================

Pulse.Config = (() => {
  /**
   * Immutable application configuration.
   * @type {Object}
   */
  const CONFIG = Object.freeze({

    APP: Object.freeze({
      NAME: 'Pulse Analytics Enterprise',
      CODENAME: 'Phoenix',
      VERSION: '1.0.0',
      AUTHOR: 'Anand Raj',
      TIMEZONE: 'Asia/Kolkata',
      DEBUG_MODE: true
    }),

    UI: Object.freeze({
      THEME: 'dark',
      SIDEBAR_WIDTH: 280,
      SIDEBAR_COLLAPSED_WIDTH: 90,
      PAGE_SIZE: 25
    }),

    CACHE: Object.freeze({
      ENABLED: true,
      DURATION_SECONDS: 300
    }),

    RANKING: Object.freeze({
      BRONZE_MAX: 100,
      SILVER_MIN: 101,
      GOLD_MIN: 120
    }),

    FEATURES: Object.freeze({
      EXPORT: true,
      DARK_MODE: true,
      NOTIFICATIONS: true,
      AI: false
    })

  });

  /**
   * Returns complete configuration.
   *
   * @returns {Object}
   */
  function getAll() {
    return CONFIG;
  }

  /**
   * Returns configuration section.
   *
   * Example:
   * Pulse.Config.get('APP')
   *
   * @param {string} key
   * @returns {*}
   */
  function get(key) {
    return CONFIG[key];
  }

  /**
   * Returns application version.
   *
   * @returns {string}
   */
  function version() {
    return CONFIG.APP.VERSION;
  }

  /**
   * Returns application name.
   *
   * @returns {string}
   */
  function name() {
    return CONFIG.APP.NAME;
  }

  /**
   * Returns current theme.
   *
   * @returns {string}
   */
  function theme() {
    return CONFIG.UI.THEME;
  }

  return Object.freeze({
    get,
    getAll,
    name,
    theme,
    version
  });

})();
