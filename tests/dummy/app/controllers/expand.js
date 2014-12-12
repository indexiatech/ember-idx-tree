import Ember from "ember";

export default Ember.Controller.extend({
  expandDepth: 99,
  actions: {
    anotherLevel: function() {
      return this.set('expandDepth', this.get('expandDepth') + 1);
    }
  }
});