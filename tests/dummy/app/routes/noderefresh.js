import Em from 'ember';
import TreeNode from 'ember-idx-tree/node';

export default Em.Route.extend({
  model: function() {
    var root;
    root = TreeNode.create({
      title: 'Family'
    });
    return root;
  }
});