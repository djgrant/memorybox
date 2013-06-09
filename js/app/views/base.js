mb.Views.base = Backbone.View.extend({

  // clean up before removing the view
  unset: function() {

      // turn off all bindings on the view
      this.off();

      // remove self from the page
      this.remove();
  }
});