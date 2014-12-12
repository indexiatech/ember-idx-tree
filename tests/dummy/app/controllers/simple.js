import Em from "ember";
import TreeNode from 'ember-idx-tree/node'

export default Em.ObjectController.extend({
  init: function() {
    var family, gaya, josh, lud, moses, suz, verdi;
    family = TreeNode.create({
      title: 'Family'
    });
    suz = family.createChild({
      title: 'Susan'
    });
    lud = family.createChild({
      title: 'Luda'
    });
    josh = suz.createChild({
      title: 'Josh'
    });
    moses = suz.createChild({
      title: 'Moses'
    });
    verdi = lud.createChild({
      title: 'Verdi'
    });
    gaya = lud.createChild({
      title: 'Gaya'
    });
    return this.set('model', family);
  },
  actions: {
    expand: function() {
      this.get('selected').toggleProperty('expanded');
      return null;
    }
  }
});
