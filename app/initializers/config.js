import Em from 'ember';
import Config from 'ember-idx-utils/config'

export default {
  name: 'ember-idx-tree',
  initialize: function() {
    if (!Em.Config) {
        Em.Config = Config = Config.create()
    }

    var defaultConfig = Config.getConfig('default');
    if (!defaultConfig) {
        Config.addConfig('default');
        defaultConfig = Config.getConfig('default');
    }

    defaultConfig['tree'] = {
        classes: ['em-tree-branch', 'em-tree', 'fa-ul'],
            branchClasses: ['em-tree-branch', 'fa-ul'],
            nodeClasses: ['em-tree-node'],
            nodeOpenClasses: [],
            nodeCloseClasses: [],
            nodeOpenIconClasses: ['fa-li', 'fa', 'fa-minus-square-o'],
            nodeCloseIconClasses: ['fa-li', 'fa', 'fa-plus-square-o'],
            nodeLeafClasses: ['leaf'],
            nodeLeafIconClasses: ['fa-li', 'fa','fa-square-o'],
            nodeLoadingIconClasses: ['fa-li', 'fa', 'fa-spinner', 'fa-spin'],
            nodeSelectedClasses: ['em-tree-node-active']
    }
  }
};