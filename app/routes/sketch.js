import Ember from 'ember';

export default Ember.Route.extend({

  model(sketch) {
    return Ember.$.getJSON('../sketchs.json').then(function(response) {
      console.log(sketch);
      console.log(response.sketchs[sketch.sketch_id]);
      return response.sketchs[sketch.sketch_id];
    });
  },
});
