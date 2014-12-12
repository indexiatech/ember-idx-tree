import Ember from "ember";

export default Ember.Controller.extend({
  multi: Ember.A(),
  multiNames: (function() {
    var s;
    s = "";
    this.multi.forEach(function(r) {
      return s += " " + r.get('title');
    });
    return s;
  }).property('multi.length')
});