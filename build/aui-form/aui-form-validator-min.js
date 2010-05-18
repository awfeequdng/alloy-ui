AUI.add("aui-form-validator",function(W){var N=W.Lang,K=W.Object,s=N.isBoolean,k=N.isDate,b=K.isEmpty,X=N.isFunction,AB=N.isObject,R=N.isString,B=N.trim,m="-",j=".",T="",S="form-validator",f="Invalid Date",n="|",AJ="blurHandlers",AM="boundingBox",H="checkbox",E="container",AK="containerErrorClass",w="containerValidClass",u="error",AN="errorClass",AL="extractCssPrefix",AP="extractRules",V="field",AH="fieldContainer",F="inputHandlers",AA="message",c="messages",C="messageContainer",t="name",z="radio",U="rules",AC="selectText",AG="showAllMessages",d="showMessages",q="stack",P="stackErrorContainer",Y="type",AF="valid",h="validateOnBlur",y="validateOnInput",x="validClass",Q="blur",r="errorField",AD="input",l="reset",e="submit",i="submitError",J="validateField",g="validField",I=W.ClassNameManager.getClassName,AO=I(S,u),a=I(S,u,E),G=I(S,AF),AE=I(S,AF,E),o=I(V),D=I(S,AA),Z=I(S,q,u),AI='<div class="'+D+'"></div>',v='<label class="'+Z+'"></label>',M=[AP,h,y];var p=W.Component.create({NAME:S,ATTRS:{containerErrorClass:{value:a,validator:R},containerValidClass:{value:AE,validator:R},errorClass:{value:AO,validator:R},extractCssPrefix:{value:o+m,validator:R},extractRules:{value:true,validator:s},fieldContainer:{value:j+o,validator:R},messages:{value:{},validator:AB},messageContainer:{getter:function(A){return W.Node.create(A).cloneNode(true);},value:AI},render:{value:true},rules:{validator:AB,value:{}},selectText:{value:true,validator:s},showMessages:{value:true,validator:s},showAllMessages:{value:false,validator:s},stackErrorContainer:{getter:function(A){return W.Node.create(A).cloneNode(true);},value:v},validateOnBlur:{value:true,validator:s},validateOnInput:{value:false,validator:s},validClass:{value:G,validator:R}},MESSAGES:{DEFAULT:"Please fix this field.",acceptFiles:"Please enter a value with a valid extension ({0}).",alpha:"Please enter only apha characters.",alphanum:"Please enter only aphanumeric characters.",date:"Please enter a valid date.",digits:"Please enter only digits.",email:"Please enter a valid email address.",equalTo:"Please enter the same value again.",max:"Please enter a value less than or equal to {0}.",maxLength:"Please enter no more than {0} characters.",min:"Please enter a value greater than or equal to {0}.",minLength:"Please enter at least {0} characters.",number:"Please enter a valid number.",range:"Please enter a value between {0} and {1}.",rangeLength:"Please enter a value between {0} and {1} characters long.",required:"This field is required.",url:"Please enter a valid URL."},REGEX:{alpha:/^[a-z_]+$/i,alphanum:/^\w+$/,digits:/^\d+$/,number:/^[+\-]?(\d+([.,]\d+)?)+$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i},RULES:{acceptFiles:function(AQ,O,AR){var L=null;if(R(AR)){var A=AR.split(/,\s*|\b\s*/).join(n);L=new RegExp("[.]("+A+")$","i");}return L&&L.test(AQ);},date:function(O,L,AQ){var A=new Date(O);return(k(A)&&(A!=f)&&!isNaN(A));},equalTo:function(O,L,AQ){var A=W.one(AQ);return A&&(B(A.val())==O);},max:function(L,A,O){return(p.toNumber(L)<=O);},maxLength:function(L,A,O){return(L.length<=O);},min:function(L,A,O){return(p.toNumber(L)>=O);},minLength:function(L,A,O){return(L.length>=O);},range:function(O,L,AQ){var A=p.toNumber(O);return(A>=AQ[0])&&(A<=AQ[1]);},rangeLength:function(O,L,AQ){var A=O.length;return(A>=AQ[0])&&(A<=AQ[1]);},required:function(AR,O,AS){var A=this;if(W.FormValidator.isCheckable(O)){var L=O.get(t);var AQ=A.getElementsByName(L);return(AQ.filter(":checked").size()>0);}else{return !!AR;}}},isCheckable:function(L){var A=L.get(Y).toLowerCase();return(A==H||A==z);},toNumber:function(A){return parseFloat(A)||0;},EXTENDS:W.Widget,UI_ATTRS:M,prototype:{CONTENT_TEMPLATE:null,UI_EVENTS:{},blurHandlers:[],errors:{},inputHandlers:[],stackErrorContainers:{},bindUI:function(){var A=this;A._createEvents();A._bindValidation();},addFieldError:function(AQ,O){var A=this;var AR=A.errors;var L=AQ.get(t);if(!AR[L]){AR[L]=[];}AR[L].push(O);},clearFieldError:function(L){var A=this;
delete A.errors[L.get(t)];},eachRule:function(L){var A=this;W.each(A.get(U),function(O,AQ){if(X(L)){L.apply(A,[O,AQ]);}});},findFieldContainer:function(L){var A=this;return L.ancestor(A.get(AH));},focusInvalidField:function(){var A=this;var L=A.get(AM);var O=L.one(j+AO);if(O){if(A.get(AC)){O.selectText();}O.focus();}},getElementsByName:function(L){var A=this;return A.get(AM).all('[name="'+L+'"]');},getField:function(L){var A=this;if(R(L)){L=A.getElementsByName(L).item(0);}return L;},getFieldError:function(L){var A=this;return A.errors[L.get(t)];},getFieldStackErrorContainer:function(AQ){var A=this;var L=AQ.get(t);var O=A.stackErrorContainers;if(!O[L]){O[L]=A.get(P);}return O[L];},getFieldErrorMessage:function(AT,AS){var AU=this;var AV=AT.get(t);var O=AU.get(c)[AV]||{};var A=AU.get(U)[AV];var L=p.MESSAGES;var AR={};if(AS in A){var AQ=W.Array(A[AS]);W.each(AQ,function(AY,AX){AR[AX]=[AY].join(T);});}var AW=(O[AS]||L[AS]||L.DEFAULT);return W.substitute(AW,AR);},hasErrors:function(){var A=this;return !b(A.errors);},highlight:function(O,L){var A=this;var AQ=A.findFieldContainer(O);A._highlightHelper(O,A.get(AN),A.get(x),L);A._highlightHelper(AQ,A.get(AK),A.get(w),L);},unhighlight:function(L){var A=this;A.highlight(L,true);},printStackError:function(O,L,AQ){var A=this;if(!A.get(AG)){AQ=AQ.slice(0,1);}L.empty();W.each(AQ,function(AS,AR){var AT=A.getFieldErrorMessage(O,AS);var AU=A.get(C).addClass(AS);L.append(AU.html(AT));});},resetAllFields:function(){var A=this;A.eachRule(function(O,AQ){var L=A.getField(AQ);A.resetField(L);});},resetField:function(O){var A=this;var L=A.getFieldStackErrorContainer(O);L.remove();A.resetFieldCss(O);A.clearFieldError(O);},resetFieldCss:function(O){var L=this;var AQ=L.findFieldContainer(O);var A=function(AS,AR){if(AS){W.each(AR,function(AT){AS.removeClass(L.get(AT));});}};A(O,[x,AN]);A(AQ,[w,AK]);},validatable:function(O){var A=this;var AR=A.get(U)[O.get(t)];var AQ=AR.required;var L=p.RULES.required.apply(A,[O.val(),O]);return(AQ||(!AQ&&L));},validate:function(){var A=this;A.eachRule(function(L,O){A.validateField(O);});A.focusInvalidField();},validateField:function(AQ){var A=this;var O=A.getField(AQ);if(O){var L=A.validatable(O);A.resetField(O);if(L){A.fire(J,{validator:{field:O}});}}},_bindValidation:function(){var A=this;var L=A.get(AM);L.on(l,W.bind(A._onFormReset,A));L.on(e,W.bind(A._onFormSubmit,A));},_createEvents:function(){var A=this;var L=function(O,AQ){A.publish(O,{defaultFn:AQ});};L(r,A._defErrorFieldFn);L(g,A._defValidFieldFn);L(J,A._defValidateFieldFn);},_defErrorFieldFn:function(AQ){var A=this;var L=AQ.validator;var AR=L.field;A.highlight(AR);if(A.get(d)){var O=A.getFieldStackErrorContainer(AR);AR.placeBefore(O);A.printStackError(AR,O,L.errors);}},_defValidFieldFn:function(L){var A=this;var O=L.validator.field;A.unhighlight(O);},_defValidateFieldFn:function(O){var L=this;var AQ=O.validator.field;var AR=L.get(U)[AQ.get(t)];W.each(AR,function(AV,AT){var AU=p.RULES[AT];var AS=B(AQ.val());if(X(AU)&&!AU.apply(L,[AS,AQ,AV])){L.addFieldError(AQ,AT);}});var A=L.getFieldError(AQ);if(A){L.fire(r,{validator:{field:AQ,errors:A}});}else{L.fire(g,{validator:{field:AQ}});}},_highlightHelper:function(AR,L,O,AQ){var A=this;if(AR){if(AQ){AR.removeClass(L).addClass(O);}else{AR.removeClass(O).addClass(L);}}},_onBlurField:function(L){var A=this;var O=L.currentTarget.get(t);A.validateField(O);},_onFieldInputChange:function(L){var A=this;A.validateField(L.currentTarget);},_onFormSubmit:function(L){var A=this;var O={validator:{formEvent:L}};A.validate();if(A.hasErrors()){O.validator.errors=A.errors;A.fire(i,O);L.halt();}else{A.fire(e,O);}},_onFormReset:function(L){var A=this;A.resetAllFields();},_bindValidateHelper:function(AR,AQ,O,L){var A=this;A._unbindHandlers(L);if(AR){A.eachRule(function(AT,AU){var AS=A.getElementsByName(AU);A[L].push(AS.on(AQ,W.bind(O,A)));});}},_uiSetExtractRules:function(AR){var A=this;if(AR){var L=A.get(AM);var AQ=A.get(U);var O=A.get(AL);W.each(p.RULES,function(AU,AT){var AS=[j,O,AT].join(T);L.all(AS).each(function(AV){if(AV.get(Y)){var AW=AV.get(t);if(!AQ[AW]){AQ[AW]={};}if(!(AT in AQ[AW])){AQ[AW][AT]=true;}}});});}},_uiSetValidateOnInput:function(L){var A=this;A._bindValidateHelper(L,AD,A._onFieldInputChange,F);},_uiSetValidateOnBlur:function(L){var A=this;A._bindValidateHelper(L,Q,A._onBlurField,AJ);},_unbindHandlers:function(L){var A=this;W.each(A[L],function(O){O.detach();});A[L]=[];}}});W.each(p.REGEX,function(L,A){p.RULES[A]=function(AQ,O,AR){return p.REGEX[A].test(AQ);};});W.FormValidator=p;},"@VERSION@",{requires:["aui-base","aui-event-input","selector-css3","substitute"]});