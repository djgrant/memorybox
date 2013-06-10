mb.Views.memory = mb.Views.base.extend({

  template: JST['templates/memory.html'],

  initialize: function() {
  },
  
  render: function() {  
    var that = this;
    var tags = this.model.get("tags");

    var viewTitle = new mb.Views.title({back: true});
    $('#js-title').html(viewTitle.render().el);

    var template = this.template;
    var html = template();
    this.$el.html(html);

    setTimeout(function() {

      var viewMain = new mb.Views.memoryMain({model:that.model});
      that.$el.find('#js-memory-main').html(
        viewMain.render().el
      )

      var collection = new mb.Collections.Memories();
      collection.fetch({
        success: function() {
          var viewRelated = new mb.Views.memoryRelated({
            collection: collection,
            tags: tags
          });
          that.$el.find('#js-memory-related').html(
            viewRelated.render().el
          );
        }
      });
      
    }, 0);

    return this;
  }
});