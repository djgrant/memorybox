mb.Collections.Memories = Backbone.Collection.extend({

  model: mb.Models.Memory,

  url: '/content.json'

  // filterByTag:function(tag){
  //   var filtered = this.models.filter(function(model){
  //     return model.isTag(tag)
  //   })
  //   return new this(filtered)
  // },

  // tags: function(){
  //   return _.uniq(_.flatten(this.pluck("tags")))
  // }
});