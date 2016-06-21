import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super(...arguments);
    Ember.$.getScript(this.get("sketch.sketchFile"));
  },
  willDestroyElement() {
    this._super(...arguments);
    eval(this.get("sketch.sketchRemove"));
  },
});
