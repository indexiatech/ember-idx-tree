import Em from 'ember';
import delay from 'ember-idx-utils/utils/delay';
import Node from 'ember-idx-tree/node';

export default Em.Route.extend({
  model: function() {
    var root;
    root = Node.create({
      title: 'Family'
    });
    return root;
  }
});