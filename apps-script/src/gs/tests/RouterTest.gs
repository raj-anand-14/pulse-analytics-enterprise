function testRouter() {

  const html = Pulse.Router.render('Index');

  Logger.log(html.getTitle());

}