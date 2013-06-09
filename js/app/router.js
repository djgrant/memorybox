mb.Router = Backbone.Router.extend({

  routes: {
    '': 'home',
    'memory/:id': 'memory',
    'memory/tag/:tag': 'memory',
    'memory/location/:location': 'location',
    'memory/person/:person': 'person',
    'new': 'newMemory'
  },

  initialize: function() {
  },

  home: function() {
    var collection = new mb.Collections.Memories();
    collection.fetch({
      success: function() {
        var view = new mb.Views.home({
          collection: collection
        });
        $('.main').html(view.render().el);
      }
    });
  },

  memory: function(id) {
    console.log('memory route id: '+id)
  },

  newMemory: function() {
    console.log('new memory');
  }

});