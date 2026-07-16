/**
 * Entry point.
 */

function doGet(e) {

  return Pulse.Application.handleRequest(e);

}

function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();
}