mb.Views.title = mb.Views.base.extend({

  template: JST['templates/title.html'],

  events: {
    'click #back': 'back'
  },

  back: function() {
    history.go(-1)
  },

  render: function() {
    var template = this.template;
    var html = template(this.options);
    this.$el.html(html);
    return this;
  }
})