import Em from 'ember';

export default Em.ArrayController.extend({
  needs: ['application'],
  model: [
    {route: 'gettingstarted', text: 'Getting Started'},
    {route: 'simple', text: 'Simple'},
    {route: 'emberdata', text: 'Ember Data'},
    {route: 'async', text: 'Async'},
    {route: 'hoveredactions', text: 'Hovered Actions'},
    {route: 'expand', text: 'Expand'},
    {route: 'multiselection', text: 'Multi Selection'},
    {route: 'noderefresh', text: 'Node Refresh'}
  ]
});