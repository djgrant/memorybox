window.mb = {
  Models: {},
  Collections: {},
  Views: {},
  Events: $({}),
  Router: {},
  init: function() {
    mb.router = new mb.Router();
    Backbone.history.start();
  }
}

$(function() {
  mb.init();
});