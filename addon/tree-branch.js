import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';

/**
 * A branch of a tree.
 *
 * @class TreeBranch
 */

export default Em.Component.extend(WithConfigMixin, {

  /**
   * The model to render its children within this branch
   * this property is set during component markup creation
   */
  model: undefined,

  /**
   * A list of {{#crossLink "TreeNode"}}nodes{{/crossLink}} instances.
   */
  children: Em.computed.alias('model.children'),

  /**
   * True if node's children should be loaded asynchronously
   * This gives the opportunity to the user to invoke an async call to the server to retrieve data for the current
   * branch being opened
   */
  async: false,
  tagName: 'ul',
  layoutName: 'em-tree-branch',
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.tree.branchClasses')) != null ? _ref.join(" ") : void 0;
  }).property()
});