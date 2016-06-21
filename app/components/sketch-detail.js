import Ember from 'ember';

export default Ember.Component.extend({
  loadPlugin: function () {
    Ember.run.scheduleOnce('afterRender', this, function () {
      Ember.$.getScript('/assets/josh-sketch.js').then(function () {
        console.log("done");
        Ember.$.getScript('//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.2/p5.js');
      });
    })
  }.on('init')

});
