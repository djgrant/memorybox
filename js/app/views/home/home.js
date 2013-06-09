mb.Views.home = mb.Views.base.extend({

  template: '',
  className: '',

  initialize: function() {
    var view = new mb.Views.title();
    $('#js-title').html(view.render().el);
  },

  events: {
  },

  renderModel: function(model) {
    var view = new mb.Views.homeItem({model: model});
    this.$el.append(view.render().el);
  },

  render: function() {
    var collection = this.collection;
    collection.each(this.renderModel, this);
    return this;
  }

});