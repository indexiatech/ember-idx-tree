import Em from "ember";

export default Em.ObjectController.extend({
  expandDepth: 1,
  iconSet: {
    type0: {
      nodeOpenIconClasses: ['fa-li', 'fa', 'fa-minus-square-o'],
      nodeCloseIconClasses: ['fa-li', 'fa', 'fa-plus-square-o']
    },
    type1: {
      nodeOpenIconClasses: ['fa-li', 'fa', 'fa-tag'],
      nodeCloseIconClasses: ['fa-li', 'fa', 'fa-tags']
    }
  },
  words: ['Foo', 'Bar', 'Baz', 'Qux'],
  randomWord: function() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  },
  actions: {
    anotherLevel: function() {
      return this.set('expandDepth', this.get('expandDepth') + 1);
    },
    getChildren: function(node, c) {
      return Em.run.later(this, function() {
        var i, o, _results;
        c.set('loading', false);
        o = Math.floor(Math.random() * this.words.length) + 1;
        if (node.get('level') < 4) {
          i = 0;
          _results = [];
          while (i < o) {
            node.createChild({
              title: this.randomWord(),
              nodeType: "type" + (Math.floor(Math.random() * 2))
            });
            _results.push(i++);
          }
          return _results;
        } else {
          return node.emptyChildren();
        }
      }, 500);
    }
  }
});