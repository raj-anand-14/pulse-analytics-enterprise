/**
 * Tests the configuration module.
 */
function testConfig() {

  Logger.log(Pulse.Config.name());

  Logger.log(Pulse.Config.version());

  Logger.log(Pulse.Config.app().DEBUG_MODE);

  Logger.log(Pulse.Config.cache().DURATION_SECONDS);

}