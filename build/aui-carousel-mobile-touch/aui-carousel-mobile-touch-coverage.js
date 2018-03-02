if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-carousel-mobile-touch/aui-carousel-mobile-touch.js']) {
   __coverage__['build/aui-carousel-mobile-touch/aui-carousel-mobile-touch.js'] = {"path":"build/aui-carousel-mobile-touch/aui-carousel-mobile-touch.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":37},"end":{"line":1,"column":56}}},"2":{"name":"CarouselMobileTouch","line":11,"loc":{"start":{"line":11,"column":0},"end":{"line":11,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":34,"column":72}},"2":{"start":{"line":11,"column":0},"end":{"line":11,"column":33}},"3":{"start":{"line":13,"column":0},"end":{"line":15,"column":2}},"4":{"start":{"line":17,"column":0},"end":{"line":29,"column":2}},"5":{"start":{"line":31,"column":0},"end":{"line":31,"column":46}}},"branchMap":{},"code":["(function () { YUI.add('aui-carousel-mobile-touch', function (A, NAME) {","","/**"," * The Carousel should work a little differently on mobile touch devices,"," * changing the menu contents for example."," * This module will be mixed into the Carousel automatically when loaded."," *"," * @module aui-carousel-touch"," */","","function CarouselMobileTouch() {}","","CarouselMobileTouch.prototype = {","    TPL_MENU: '<div class=\"carousel-menu\"><menu>{items}</menu></div>'","};","","CarouselMobileTouch.ATTRS = {","    /**","     * Position of the menu.","     *","     * @attribute nodeMenuPosition","     * @default 'outside'","     * @type String","     */","    nodeMenuPosition: {","        value: 'outside',","        validator: '_validateNodeMenuPosition'","    }","};","","A.Base.mix(A.Carousel, [CarouselMobileTouch]);","","","}, '3.0.3-deprecated.74', {\"requires\": [\"base-build\", \"aui-carousel\"]});","","}());"]};
}
var __cov_fkFCQbLkGId0EDN6wFqzWA = __coverage__['build/aui-carousel-mobile-touch/aui-carousel-mobile-touch.js'];
__cov_fkFCQbLkGId0EDN6wFqzWA.s['1']++;YUI.add('aui-carousel-mobile-touch',function(A,NAME){__cov_fkFCQbLkGId0EDN6wFqzWA.f['1']++;__cov_fkFCQbLkGId0EDN6wFqzWA.s['2']++;function CarouselMobileTouch(){__cov_fkFCQbLkGId0EDN6wFqzWA.f['2']++;}__cov_fkFCQbLkGId0EDN6wFqzWA.s['3']++;CarouselMobileTouch.prototype={TPL_MENU:'<div class="carousel-menu"><menu>{items}</menu></div>'};__cov_fkFCQbLkGId0EDN6wFqzWA.s['4']++;CarouselMobileTouch.ATTRS={nodeMenuPosition:{value:'outside',validator:'_validateNodeMenuPosition'}};__cov_fkFCQbLkGId0EDN6wFqzWA.s['5']++;A.Base.mix(A.Carousel,[CarouselMobileTouch]);},'3.0.3-deprecated.74',{'requires':['base-build','aui-carousel']});
