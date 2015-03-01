
var App = {};
App.EventsHub = {};
_.extend(App.EventsHub, Backbone.Events);


PopupView = Backbone.View.extend({
  el: '#popup_placeholder',

  initialize: function() {
    this.base_template = $('#popup_template').html();
    this.context = { title: 'Some title' };
    this.save_function = null;
  },
  events: {
    'click #popup_save_button': 'save',
    'click .closing_button': 'close'
  },
  close: function() {
    this.remove();
  },
  save: function() {
    if (typeof(this.save_function) == "function") {
      this.save_function();
    }
  },
  render: function() {
    $(this.el).append(_.template(this.base_template, this.context));
    this.contents_el = $(this.el).find('.popup_contents');
  },
  render_content: function(content) {
    if (content)
      this.contents_el.html(content);
  }
});
