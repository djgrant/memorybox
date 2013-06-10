mb.Views.memoryRelated = mb.Views.base.extend({

  template: JST['templates/memoryRelated.html'],

  i: 0,

  renderModel: function(model) {
    var mainTags = this.options.tags;
    var modelTags = model.toJSON().tags;
    
    if(this.i<2) {
      for (var ii = 0; ii < mainTags.length; ii++) {
          if(modelTags.indexOf(mainTags[ii])) {
            var view = new mb.Views.memoryRelatedItem({model:model});
            this.$el.append(view.render().el);  
            break;
          }
      }  
    }
    this.i++
  },

  render: function() {
    var collection = this.collection;
    collection.reset(collection.shuffle());
    console.log(collection);
    collection.each(this.renderModel, this);
    return this;
  }
});