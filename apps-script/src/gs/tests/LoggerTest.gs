/**
 * Tests the logger module.
 */
function testLogger() {

  Pulse.Logger.info(
    'ConfigTest',
    'Logger initialized successfully.'
  );

  Pulse.Logger.warn(
    'ConfigTest',
    'Warning message.'
  );

  Pulse.Logger.error(
    'ConfigTest',
    'Error message.'
  );

  Pulse.Logger.debug(
    'ConfigTest',
    'Debug mode is enabled.'
  );

}