import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('../sketchs.json').then(function(response) {
      return response;
    });
  },
});
