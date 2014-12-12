import Em from "ember";
import TreeNode from 'ember-idx-tree/node';

export default Em.ObjectController.extend({
  message: void 0,
  actionsMeta: [
    {
      classes: ['fa fa-eye'],
      action: 'eye',
      types: ['male']
    }, {
      classes: ['fa fa-edit'],
      action: 'edit',
      types: ['female']
    }, {
      classes: ['fa fa-trash-o'],
      action: 'delete'
    }
  ],
  init: function() {
    var family, lud, suz;
    family = TreeNode.create({
      title: 'Family'
    }, {
      nodeType: 'family'
    });
    suz = family.createChild({
      title: 'Susan',
      nodeType: 'male'
    });
    lud = family.createChild({
      title: 'Luda',
      nodeType: 'female'
    });
    return this.set('model', family);
  },
  actions: {
    edit: function(actionView) {
      return this.set('message', "Editing " + (actionView.get('model.title')));
    },
    "delete": function(actionView) {
      return this.set('message', "Deleting " + (actionView.get('model.title')));
    },
    eye: function(actionView) {
      this.set('message', "Looking at " + (actionView.get('model.title')));
      return actionView.toggleProperty('sticky');
    }
  }
});