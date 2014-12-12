import DS from 'ember-data';
var Tag;

Tag = DS.Model.extend({
  title: DS.attr('string'),
  children: DS.hasMany('tag', {
    async: true, inverse: 'parent'
  }),
  parent: DS.belongsTo('tag', {async: true, inverse: 'children'})
});



Tag.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Family',
      children: [10, 11]
    }, {
      id: 10,
      title: 'Susan',
      parent: 1,
      children: [100, 101]
    }, {
      id: 11,
      title: 'Luda',
      parent: 1,
      children: [102, 103]
    }, {
      id: 100,
      title: 'Josh',
      parent: 10,
      children: [1000]
    }, {
      id: 101,
      title: 'Moses',
      parent: 10,
      children: [1001]
    }, {
      id: 102,
      title: 'Verdi',
      parent: 11,
      children: [1002]
    }, {
      id: 103,
      title: 'Gaya',
      parent: 11,
      children: []
    }, {
      id: 1000,
      title: 'Zuares',
      parent: 100,
      children: []
    }, {
      id: 1001,
      title: 'Romen',
      parent: 101,
      children: []
    }, {
      id: 1002,
      title: 'Flole',
      parent: 102,
      children: []
    }
  ]
});

export default Tag;