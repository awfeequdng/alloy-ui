if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-datatable-text-area-cell-editor/aui-datatable-text-area-cell-editor.js']) {
   __coverage__['build/aui-datatable-text-area-cell-editor/aui-datatable-text-area-cell-editor.js'] = {"path":"build/aui-datatable-text-area-cell-editor/aui-datatable-text-area-cell-editor.js","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":47},"end":{"line":1,"column":66}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":44,"column":84}},"2":{"start":{"line":3,"column":0},"end":{"line":4,"column":69}},"3":{"start":{"line":15,"column":0},"end":{"line":39,"column":3}},"4":{"start":{"line":41,"column":0},"end":{"line":41,"column":42}}},"branchMap":{},"code":["(function () { YUI.add('aui-datatable-text-area-cell-editor', function (A, NAME) {","","var CSS_FORM_CONTROL = A.getClassName('form', 'control'),","    CSS_CELLEDITOR_ELEMENT = A.getClassName('celleditor', 'element');","","/**"," * TextAreaCellEditor class."," *"," * @class A.TextAreaCellEditor"," * @extends A.BaseCellEditor"," * @param {Object} config Object literal specifying widget configuration"," * properties."," * @constructor"," */","var TextAreaCellEditor = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'textAreaCellEditor',","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.BaseCellEditor,","","    prototype: {","        ELEMENT_TEMPLATE: '<textarea class=\"' + [CSS_CELLEDITOR_ELEMENT, CSS_FORM_CONTROL].join(' ') +","            '\"></textarea>'","    }","});","","A.TextAreaCellEditor = TextAreaCellEditor;","","","}, '3.0.3-deprecated.74', {\"requires\": [\"aui-datatable-base-options-cell-editor\"]});","","}());"]};
}
var __cov_i2y9fqywnbWKc5q2_yd87A = __coverage__['build/aui-datatable-text-area-cell-editor/aui-datatable-text-area-cell-editor.js'];
__cov_i2y9fqywnbWKc5q2_yd87A.s['1']++;YUI.add('aui-datatable-text-area-cell-editor',function(A,NAME){__cov_i2y9fqywnbWKc5q2_yd87A.f['1']++;__cov_i2y9fqywnbWKc5q2_yd87A.s['2']++;var CSS_FORM_CONTROL=A.getClassName('form','control'),CSS_CELLEDITOR_ELEMENT=A.getClassName('celleditor','element');__cov_i2y9fqywnbWKc5q2_yd87A.s['3']++;var TextAreaCellEditor=A.Component.create({NAME:'textAreaCellEditor',EXTENDS:A.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<textarea class="'+[CSS_CELLEDITOR_ELEMENT,CSS_FORM_CONTROL].join(' ')+'"></textarea>'}});__cov_i2y9fqywnbWKc5q2_yd87A.s['4']++;A.TextAreaCellEditor=TextAreaCellEditor;},'3.0.3-deprecated.74',{'requires':['aui-datatable-base-options-cell-editor']});
