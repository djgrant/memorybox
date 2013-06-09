mb.Views.homeItem = mb.Views.base.extend({

  template: JST['templates/homeItem.html'],

  // events: {
  //   'click': 'open'
  // },

  // open: function() {
  //   mb.router.navigate('memories/' + this.model.get('id'), {
  //     trigger: true
  //   });
  // },

  render: function() {
    var template = this.template;
    var model = this.model.toJSON();
    var html = template(model);
    
    this.$el.html(html);
    return this;
  }
});