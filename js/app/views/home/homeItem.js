mb.Views.homeItem = mb.Views.base.extend({

  template: JST['templates/homeItem.html'],

  render: function() {
    var template = this.template;
    var model = this.model.toJSON();
    var html = template(model);
    
    this.$el.html(html);
    return this;
  }
});