mb.Router = Backbone.Router.extend({

  routes: {
    '': 'home',
    'memories': 'home',
    'memories/:id': 'memory',
  },

  home: function() {
    var collection = new mb.Collections.Home();
    collection.fetch({
      success: function() {
        var view = new mb.Views.home({
          collection: collection
        });
        $('#js-main').html(view.render().el);
      }
    });
  },

  memory: function(id) {
    var collection = new mb.Collections.Memories();
    collection.fetch({
      success: function() {
        var model = collection.get(id);
        var view = new mb.Views.memory({
          model: model
        }); 
        $('#js-main').html(view.render().el);
      }
    })
  }
});