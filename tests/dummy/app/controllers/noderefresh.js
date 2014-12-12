import Em from "ember";

export default Em.ObjectController.extend({
  words: ['Foo', 'Bar', 'Baz', 'Qux'],
  randomWord: function() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  },
  actions: {
    addAndRefresh: function() {
      return this.get('selected').createChild({
        title: this.randomWord()
      });
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
              title: this.randomWord()
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
