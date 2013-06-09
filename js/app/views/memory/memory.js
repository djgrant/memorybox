mb.Views.memory = mb.Views.base.extend({

  template: JST['templates/memory.html'],

  initialize: function() {
    var view = new mb.Views.title({back: true});
    $('#js-title').html(view.render().el);
  },
  
  render: function() {
    var template = this.template;
    var model = this.model.toJSON();
    var html = template(model);
    this.$el.html(html);
    return this;
  }
});