/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*
 AngularJS v1.2.0-rc.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Y,T,s){'use strict';function P(a){return function(){var b=arguments[0],c,b="["+(a?a+":":"")+b+"] http://errors.angularjs.org/undefined/"+(a?a+"/":"")+b;for(c=1;c<arguments.length;c++)b=b+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(b)}}function kb(a){if(null==a||va(a))return!1;
var b=a.length;return 1===a.nodeType&&b?!0:D(a)||!B(a)&&(0===b||"number"===typeof b&&0<b&&b-1 in a)}function q(a,b,c){var d;if(a)if(B(a))for(d in a)"prototype"!=d&&("length"!=d&&"name"!=d&&a.hasOwnProperty(d))&&b.call(c,a[d],d);else if(a.forEach&&a.forEach!==q)a.forEach(b,c);else if(kb(a))for(d=0;d<a.length;d++)b.call(c,a[d],d);else for(d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d);return a}function Fb(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort()}function Bc(a,b,c){for(var d=
Fb(a),e=0;e<d.length;e++)b.call(c,a[d[e]],d[e]);return d}function Gb(a){return function(b,c){a(c,b)}}function Ta(){for(var a=ha.length,b;a;){a--;b=ha[a].charCodeAt(0);if(57==b)return ha[a]="A",ha.join("");if(90==b)ha[a]="0";else return ha[a]=String.fromCharCode(b+1),ha.join("")}ha.unshift("0");return ha.join("")}function Hb(a,b){b?a.$$hashKey=b:delete a.$$hashKey}function E(a){var b=a.$$hashKey;q(arguments,function(b){b!==a&&q(b,function(b,c){a[c]=b})});Hb(a,b);return a}function V(a){return parseInt(a,
10)}function Cc(a,b){return E(new (E(function(){},{prototype:a})),b)}function A(){}function wa(a){return a}function $(a){return function(){return a}}function M(a){return"undefined"==typeof a}function z(a){return"undefined"!=typeof a}function U(a){return null!=a&&"object"==typeof a}function H(a){return"string"==typeof a}function lb(a){return"number"==typeof a}function Ea(a){return"[object Date]"==Ua.apply(a)}function D(a){return"[object Array]"==Ua.apply(a)}function B(a){return"function"==typeof a}
function mb(a){return"[object RegExp]"==Ua.apply(a)}function va(a){return a&&a.document&&a.location&&a.alert&&a.setInterval}function Dc(a){return a&&(a.nodeName||a.on&&a.find)}function Ec(a,b,c){var d=[];q(a,function(a,g,h){d.push(b.call(c,a,g,h))});return d}function Va(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1}function Fa(a,b){var c=Va(a,b);0<=c&&a.splice(c,1);return b}function da(a,b){if(va(a)||a&&a.$evalAsync&&a.$watch)throw Wa("cpws");if(b){if(a===
b)throw Wa("cpi");if(D(a))for(var c=b.length=0;c<a.length;c++)b.push(da(a[c]));else{c=b.$$hashKey;q(b,function(a,c){delete b[c]});for(var d in a)b[d]=da(a[d]);Hb(b,c)}}else(b=a)&&(D(a)?b=da(a,[]):Ea(a)?b=new Date(a.getTime()):mb(a)?b=RegExp(a.source):U(a)&&(b=da(a,{})));return b}function Fc(a,b){b=b||{};for(var c in a)a.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(b[c]=a[c]);return b}function xa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var c=typeof a,d;if(c==typeof b&&
"object"==c)if(D(a)){if(!D(b))return!1;if((c=a.length)==b.length){for(d=0;d<c;d++)if(!xa(a[d],b[d]))return!1;return!0}}else{if(Ea(a))return Ea(b)&&a.getTime()==b.getTime();if(mb(a)&&mb(b))return a.toString()==b.toString();if(a&&a.$evalAsync&&a.$watch||b&&b.$evalAsync&&b.$watch||va(a)||va(b)||D(b))return!1;c={};for(d in a)if("$"!==d.charAt(0)&&!B(a[d])){if(!xa(a[d],b[d]))return!1;c[d]=!0}for(d in b)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&b[d]!==s&&!B(b[d]))return!1;return!0}return!1}function nb(a,
b){var c=2<arguments.length?ta.call(arguments,2):[];return!B(b)||b instanceof RegExp?b:c.length?function(){return arguments.length?b.apply(a,c.concat(ta.call(arguments,0))):b.apply(a,c)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Gc(a,b){var c=b;/^\$+/.test(a)?c=s:va(b)?c="$WINDOW":b&&T===b?c="$DOCUMENT":b&&(b.$evalAsync&&b.$watch)&&(c="$SCOPE");return c}function oa(a,b){return"undefined"===typeof a?s:JSON.stringify(a,Gc,b?"  ":null)}function Ib(a){return H(a)?JSON.parse(a):
a}function Ga(a){a&&0!==a.length?(a=J(""+a),a=!("f"==a||"0"==a||"false"==a||"no"==a||"n"==a||"[]"==a)):a=!1;return a}function ia(a){a=w(a).clone();try{a.html("")}catch(b){}var c=w("<div>").append(a).html();try{return 3===a[0].nodeType?J(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(b,a){return"<"+J(a)})}catch(d){return J(c)}}function Jb(a){try{return decodeURIComponent(a)}catch(b){}}function Kb(a){var b={},c,d;q((a||"").split("&"),function(a){a&&(c=a.split("="),d=Jb(c[0]),z(d)&&(a=z(c[1])?
Jb(c[1]):!0,b[d]?D(b[d])?b[d].push(a):b[d]=[b[d],a]:b[d]=a))});return b}function Lb(a){var b=[];q(a,function(a,d){D(a)?q(a,function(a){b.push(ua(d,!0)+(!0===a?"":"="+ua(a,!0)))}):b.push(ua(d,!0)+(!0===a?"":"="+ua(a,!0)))});return b.length?b.join("&"):""}function ob(a){return ua(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}
function Hc(a,b){function c(a){a&&d.push(a)}var d=[a],e,g,h=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(h,function(b){h[b]=!0;c(T.getElementById(b));b=b.replace(":","\\:");a.querySelectorAll&&(q(a.querySelectorAll("."+b),c),q(a.querySelectorAll("."+b+"\\:"),c),q(a.querySelectorAll("["+b+"]"),c))});q(d,function(b){if(!e){var a=f.exec(" "+b.className+" ");a?(e=b,g=(a[2]||"").replace(/\s+/g,",")):q(b.attributes,function(a){!e&&h[a.name]&&(e=b,g=a.value)})}});
e&&b(e,g?[g]:[])}function Mb(a,b){var c=function(){a=w(a);if(a.injector()){var c=a[0]===T?"document":ia(a);throw Wa("btstrpd",c);}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);b.unshift("ng");c=Nb(b);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(b,a,c,d,e){b.$apply(function(){a.data("$injector",d);c(a)(b)});e.enabled(!0)}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(Y&&!d.test(Y.name))return c();Y.name=Y.name.replace(d,"");Ha.resumeBootstrap=
function(a){q(a,function(a){b.push(a)});c()}}function pb(a,b){b=b||"_";return a.replace(Ic,function(a,d){return(d?b:"")+a.toLowerCase()})}function qb(a,b,c){if(!a)throw Wa("areq",b||"?",c||"required");return a}function Ia(a,b,c){c&&D(a)&&(a=a[a.length-1]);qb(B(a),b,"not a function, got "+(a&&"object"==typeof a?a.constructor.name||"Object":typeof a));return a}function rb(a,b,c){if(!b)return a;b=b.split(".");for(var d,e=a,g=b.length,h=0;h<g;h++)d=b[h],a&&(a=(e=a)[d]);return!c&&B(a)?nb(e,a):a}function Jc(a){function b(a,
b,e){return a[b]||(a[b]=e())}return b(b(a,"angular",Object),"module",function(){var a={};return function(d,e,g){e&&a.hasOwnProperty(d)&&(a[d]=null);return b(a,d,function(){function a(c,d,e){return function(){b[e||"push"]([c,d,arguments]);return m}}if(!e)throw P("$injector")("nomod",d);var b=[],c=[],l=a("$injector","invoke"),m={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),
constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:l,run:function(a){c.push(a);return this}};g&&l(g);return m})}})}function Ja(a){return a.replace(Kc,function(a,c,d,e){return e?d.toUpperCase():d}).replace(Lc,"Moz$1")}function sb(a,b,c,d){function e(a){var e=c&&a?[this.filter(a)]:[this],k=b,l,m,p,n,t,r;if(!d||null!=a)for(;e.length;)for(l=
e.shift(),m=0,p=l.length;m<p;m++)for(n=w(l[m]),k?n.triggerHandler("$destroy"):k=!k,t=0,n=(r=n.children()).length;t<n;t++)e.push(ya(r[t]));return g.apply(this,arguments)}var g=ya.fn[a],g=g.$original||g;e.$original=g;ya.fn[a]=e}function S(a){if(a instanceof S)return a;if(!(this instanceof S)){if(H(a)&&"<"!=a.charAt(0))throw tb("nosel");return new S(a)}if(H(a)){var b=T.createElement("div");b.innerHTML="<div>&#160;</div>"+a;b.removeChild(b.firstChild);ub(this,b.childNodes);w(T.createDocumentFragment()).append(this)}else ub(this,
a)}function vb(a){return a.cloneNode(!0)}function Ka(a){Ob(a);var b=0;for(a=a.childNodes||[];b<a.length;b++)Ka(a[b])}function Pb(a,b,c,d){if(z(d))throw tb("offargs");var e=ja(a,"events");ja(a,"handle")&&(M(b)?q(e,function(b,c){wb(a,c,b);delete e[c]}):q(b.split(" "),function(b){M(c)?(wb(a,b,e[b]),delete e[b]):Fa(e[b]||[],c)}))}function Ob(a,b){var c=a[Xa],d=La[c];d&&(b?delete La[c].data[b]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Pb(a)),delete La[c],a[Xa]=s))}function ja(a,b,c){var d=
a[Xa],d=La[d||-1];if(z(c))d||(a[Xa]=d=++Mc,d=La[d]={}),d[b]=c;else return d&&d[b]}function Qb(a,b,c){var d=ja(a,"data"),e=z(c),g=!e&&z(b),h=g&&!U(b);d||h||ja(a,"data",d={});if(e)d[b]=c;else if(g){if(h)return d&&d[b];E(d,b)}else return d}function Ya(a,b){return-1<(" "+a.className+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" ")}function Rb(a,b){b&&q(b.split(" "),function(b){a.className=aa((" "+a.className+" ").replace(/[\n\t]/g," ").replace(" "+aa(b)+" "," "))})}function Sb(a,b){b&&q(b.split(" "),function(b){Ya(a,
b)||(a.className=aa(a.className+" "+aa(b)))})}function ub(a,b){if(b){b=b.nodeName||!z(b.length)||va(b)?[b]:b;for(var c=0;c<b.length;c++)a.push(b[c])}}function Tb(a,b){return Za(a,"$"+(b||"ngController")+"Controller")}function Za(a,b,c){a=w(a);for(9==a[0].nodeType&&(a=a.find("html"));a.length;){if((c=a.data(b))!==s)return c;a=a.parent()}}function Ub(a,b){var c=$a[b.toLowerCase()];return c&&Vb[a.nodeName]&&c}function Nc(a,b){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=
!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||T);if(M(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1==c.returnValue};q(b[e||c.type],function(b){b.call(a,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};
c.elem=a;return c}function za(a){var b=typeof a,c;"object"==b&&null!==a?"function"==typeof(c=a.$$hashKey)?c=a.$$hashKey():c===s&&(c=a.$$hashKey=Ta()):c=a;return b+":"+c}function Ma(a){q(a,this.put,this)}function Wb(a){var b,c;"function"==typeof a?(b=a.$inject)||(b=[],a.length&&(c=a.toString().replace(Oc,""),c=c.match(Pc),q(c[1].split(Qc),function(a){a.replace(Rc,function(a,c,d){b.push(d)})})),a.$inject=b):D(a)?(c=a.length-1,Ia(a[c],"fn"),b=a.slice(0,c)):Ia(a,"fn",!0);return b}function Nb(a){function b(a){return function(b,
c){if(U(b))q(b,Gb(a));else return a(b,c)}}function c(a,b){if(B(b)||D(b))b=p.instantiate(b);if(!b.$get)throw Na("pget",a);return m[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];q(a,function(a){if(!l.get(a)){l.put(a,!0);try{if(H(a)){var c=Oa(a);b=b.concat(e(c.requires)).concat(c._runBlocks);for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var k=d[c],g=p.get(k[0]);g[k[1]].apply(g,k[2])}}else B(a)?b.push(p.invoke(a)):D(a)?b.push(p.invoke(a)):Ia(a,"module")}catch(h){throw D(a)&&(a=
a[a.length-1]),h.message&&(h.stack&&-1==h.stack.indexOf(h.message))&&(h=h.message+"\n"+h.stack),Na("modulerr",a,h.stack||h.message||h);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===h)throw Na("cdep",k.join(" <- "));return a[d]}try{return k.unshift(d),a[d]=h,a[d]=b(d)}finally{k.shift()}}function d(a,b,e){var k=[],f=Wb(a),g,p,h;p=0;for(g=f.length;p<g;p++){h=f[p];if("string"!==typeof h)throw Na("itkn",h);k.push(e&&e.hasOwnProperty(h)?e[h]:c(h))}a.$inject||(a=a[g]);switch(b?
-1:k.length){case 0:return a();case 1:return a(k[0]);case 2:return a(k[0],k[1]);case 3:return a(k[0],k[1],k[2]);case 4:return a(k[0],k[1],k[2],k[3]);case 5:return a(k[0],k[1],k[2],k[3],k[4]);case 6:return a(k[0],k[1],k[2],k[3],k[4],k[5]);case 7:return a(k[0],k[1],k[2],k[3],k[4],k[5],k[6]);case 8:return a(k[0],k[1],k[2],k[3],k[4],k[5],k[6],k[7]);case 9:return a(k[0],k[1],k[2],k[3],k[4],k[5],k[6],k[7],k[8]);case 10:return a(k[0],k[1],k[2],k[3],k[4],k[5],k[6],k[7],k[8],k[9]);default:return a.apply(b,
k)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(D(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return U(e)?e:c},get:c,annotate:Wb,has:function(b){return m.hasOwnProperty(b+f)||a.hasOwnProperty(b)}}}var h={},f="Provider",k=[],l=new Ma,m={$provide:{provider:b(c),factory:b(d),service:b(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:b(function(a,b){return d(a,$(b))}),constant:b(function(a,b){m[a]=b;n[a]=b}),decorator:function(a,
b){var c=p.get(a+f),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},p=m.$injector=g(m,function(){throw Na("unpr",k.join(" <- "));}),n={},t=n.$injector=g(n,function(a){a=p.get(a+f);return t.invoke(a.$get,a)});q(e(a),function(a){t.invoke(a||A)});return t}function Sc(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==J(a.nodeName)||(b=a)});return b}
function g(){var a=c.hash(),d;a?(d=h.getElementById(a))?d.scrollIntoView():(d=e(h.getElementsByName(a)))?d.scrollIntoView():"top"===a&&b.scrollTo(0,0):b.scrollTo(0,0)}var h=b.document;a&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function Tc(a,b,c,d){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(r--,0===r)for(;y.length;)try{y.pop()()}catch(b){c.error(b)}}}function g(a,b){(function ab(){q(x,function(a){a()});R=b(ab,a)})()}function h(){N!=f.url()&&
(N=f.url(),q(F,function(a){a(f.url())}))}var f=this,k=b[0],l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,t={};f.isMock=!1;var r=0,y=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){r++};f.notifyWhenNoOutstandingRequests=function(a){q(x,function(a){a()});0===r?a():y.push(a)};var x=[],R;f.addPollFn=function(a){M(R)&&g(100,p);x.push(a);return a};var N=l.href,u=b.find("base"),v=null;f.url=function(a,b){if(a){if(N!=a)return N=a,d.history?b?m.replaceState(null,"",
a):(m.pushState(null,"",a),u.attr("href",u.attr("href"))):b?(l.replace(a),v=a):(l.href=a,v=null),f}else return v||l.href.replace(/%27/g,"'")};var F=[],I=!1;f.onUrlChange=function(b){if(!I){if(d.history)w(a).on("popstate",h);if(d.hashchange)w(a).on("hashchange",h);else f.addPollFn(h);I=!0}F.push(b);return b};f.baseHref=function(){var a=u.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var Z={},ba="",W=f.baseHref();f.cookies=function(a,b){var d,e,f,g;if(a)b===s?k.cookie=escape(a)+"=;path="+
W+";expires=Thu, 01 Jan 1970 00:00:00 GMT":H(b)&&(d=(k.cookie=escape(a)+"="+escape(b)+";path="+W).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==ba)for(ba=k.cookie,d=ba.split("; "),Z={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=unescape(e.substring(0,g)),Z[a]===s&&(Z[a]=unescape(e.substring(g+1))));return Z}};f.defer=function(a,b){var c;r++;c=p(function(){delete t[c];e(a)},b||0);t[c]=!0;return c};
f.defer.cancel=function(a){return t[a]?(delete t[a],n(a),e(A),!0):!1}}function Vc(){this.$get=["$window","$log","$sniffer","$document",function(a,b,c,d){return new Tc(a,d,b,c)}]}function Wc(){this.$get=function(){function a(a,d){function e(a){a!=p&&(n?n==a&&(n=a.n):n=a,g(a.n,a.p),g(a,p),p=a,p.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw P("$cacheFactory")("iid",a);var h=0,f=E({},d,{id:a}),k={},l=d&&d.capacity||Number.MAX_VALUE,m={},p=null,n=null;return b[a]={put:function(a,
b){var c=m[a]||(m[a]={key:a});e(c);if(!M(b))return a in k||h++,k[a]=b,h>l&&this.remove(n.key),b},get:function(a){var b=m[a];if(b)return e(b),k[a]},remove:function(a){var b=m[a];b&&(b==p&&(p=b.p),b==n&&(n=b.n),g(b.n,b.p),delete m[a],delete k[a],h--)},removeAll:function(){k={};h=0;m={};p=n=null},destroy:function(){m=f=k=null;delete b[a]},info:function(){return E({},f,{size:h})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}
function Xc(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xb(a){var b={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g=/^\s*(https?|ftp|mailto|file):/,h=/^\s*(https?|ftp|file):|data:image\//,f=/^(on[a-z]*|formaction)$/;this.directive=function l(d,e){H(d)?(qb(e,"directiveFactory"),b.hasOwnProperty(d)||(b[d]=[],a.factory(d+c,["$injector","$exceptionHandler",function(a,c){var e=[];q(b[d],function(b){try{var f=a.invoke(b);B(f)?
f={compile:$(f)}:!f.compile&&f.link&&(f.compile=$(f.link));f.priority=f.priority||0;f.name=f.name||d;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(g){c(g)}});return e}])),b[d].push(e)):q(d,Gb(l));return this};this.aHrefSanitizationWhitelist=function(a){return z(a)?(g=a,this):g};this.imgSrcSanitizationWhitelist=function(a){return z(a)?(h=a,this):h};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope",
"$document","$sce","$$urlUtils","$animate",function(a,m,p,n,t,r,y,x,R,N,u,v){function F(a,b,c,d){a instanceof w||(a=w(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var e=Z(a,b,a,c,d);return function(b,c){qb(b,"scope");for(var d=c?Pa.clone.call(a):a,f=0,g=d.length;f<g;f++){var p=d[f];1!=p.nodeType&&9!=p.nodeType||d.eq(f).data("$scope",b)}I(d,"ng-scope");c&&c(d,b);e&&e(b,d,d);return d}}function I(a,b){try{a.addClass(b)}catch(c){}}function Z(a,
b,c,d,e){function f(a,c,d,e){var p,h,m,l,n,t,r,C=[];n=0;for(t=c.length;n<t;n++)C.push(c[n]);r=n=0;for(t=g.length;n<t;r++)h=C[r],c=g[n++],p=g[n++],c?(c.scope?(m=a.$new(U(c.scope)),w(h).data("$scope",m)):m=a,(l=c.transclude)||!e&&b?c(p,m,h,d,function(b){return function(c){var d=a.$new();d.$$transcluded=!0;return b(d,c).on("$destroy",nb(d,d.$destroy))}}(l||b)):c(p,m,h,s,e)):p&&p(a,h.childNodes,s,e)}for(var g=[],p,h,l,m=0;m<a.length;m++)h=new xb,p=ba(a[m],[],h,0==m?d:s,e),h=(p=p.length?ka(p,a[m],h,b,
c):null)&&p.terminal||!a[m].childNodes||!a[m].childNodes.length?null:Z(a[m].childNodes,p?p.transclude:b),g.push(p),g.push(h),l=l||p||h;return l?f:null}function ba(a,b,c,f,g){var p=c.$attr,h;switch(a.nodeType){case 1:G(b,la(Aa(a).toLowerCase()),"E",f,g);var m,l,n;h=a.attributes;for(var t=0,r=h&&h.length;t<r;t++){var C,y,Z;m=h[t];if(!Q||8<=Q||m.specified)l=m.name,n=la(l),A.test(n)&&(l=n.substr(6).toLowerCase()),-1!=(Z=n.lastIndexOf("Start"))&&Z==n.length-5&&(C=l,y=l.substr(0,l.length-5)+"end",l=l.substr(0,
l.length-6)),n=la(l.toLowerCase()),p[n]=l,c[n]=m=aa(Q&&"href"==l?decodeURIComponent(a.getAttribute(l,2)):m.value),Ub(a,n)&&(c[n]=!0),pa(a,b,m,n),G(b,n,"A",f,g,C,y)}a=a.className;if(H(a)&&""!==a)for(;h=e.exec(a);)n=la(h[2]),G(b,n,"C",f,g)&&(c[n]=aa(h[3])),a=a.substr(h.index+h[0].length);break;case 3:K(b,a.nodeValue);break;case 8:try{if(h=d.exec(a.nodeValue))n=la(h[1]),G(b,n,"M",f,g)&&(c[n]=aa(h[2]))}catch(I){}}b.sort(L);return b}function W(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",
b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function ea(a,b,c){return function(d,e,f,g){e=W(e[0],b,c);return a(d,e,f,g)}}function ka(a,b,c,d,e,f){function g(a,b,c,d){a&&(c&&(a=ea(a,c,d)),a.require=u.require,t.push(a));b&&(c&&(b=ea(b,c,d)),b.require=u.require,Z.push(b))}function h(a,b){var c,d="data",e=!1;if(H(a)){for(;"^"==(c=a.charAt(0))||"?"==c;)a=a.substr(1),"^"==c&&(d="inheritedData"),e=e||"?"==c;c=b[d]("$"+
a+"Controller");if(!c&&!e)throw ga("ctreq",a,R);}else D(a)&&(c=[],q(a,function(a){c.push(h(a,b))}));return c}function l(a,d,e,f,g){var n,C,u,I,x;n=b===e?c:Fc(c,new xb(w(e),c.$attr));C=n.$$element;if(v){var K=/^\s*([@=&])(\??)\s*(\w*)\s*$/,F=d.$parent||d;q(v.scope,function(a,b){var c=a.match(K)||[],e=c[3]||b,f="?"==c[2],c=c[1],g,h,p;d.$$isolateBindings[b]=c+e;switch(c){case "@":n.$observe(e,function(a){d[b]=a});n.$$observers[e].$$scope=F;n[e]&&(d[b]=m(n[e])(F));break;case "=":if(f&&!n[e])break;h=r(n[e]);
p=h.assign||function(){g=d[b]=h(F);throw ga("nonassign",n[e],v.name);};g=d[b]=h(F);d.$watch(function(){var a=h(F);a!==d[b]&&(a!==g?g=d[b]=a:p(F,a=g=d[b]));return a});break;case "&":h=r(n[e]);d[b]=function(a){return h(F,a)};break;default:throw ga("iscp",v.name,b,a);}})}pa&&q(pa,function(a){var b={$scope:d,$element:C,$attrs:n,$transclude:g},c;x=a.controller;"@"==x&&(x=n[a.name]);c=y(x,b);C.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(u=t.length;f<u;f++)try{I=
t[f],I(d,C,n,I.require&&h(I.require,C))}catch(G){p(G,ia(C))}a&&a(d,e.childNodes,s,g);f=0;for(u=Z.length;f<u;f++)try{I=Z[f],I(d,C,n,I.require&&h(I.require,C))}catch(ba){p(ba,ia(C))}}for(var n=-Number.MAX_VALUE,t=[],Z=[],x=null,v=null,G=null,K=c.$$element=w(b),u,R,O,N,qa=d,pa,ka,L=0,ma=a.length;L<ma;L++){u=a[L];var A=u.$$start,z=u.$$end;A&&(K=W(b,A,z));O=s;if(n>u.priority)break;if(O=u.scope)C("isolated scope",v,u,K),U(O)&&(I(K,"ng-isolate-scope"),v=u),I(K,"ng-scope"),x=x||u;R=u.name;if(O=u.controller)pa=
pa||{},C("'"+R+"' controller",pa[R],u,K),pa[R]=u;if(O=u.transclude)C("transclusion",N,u,K),N=u,n=u.priority,"element"==O?(O=W(b,A,z),K=c.$$element=w(T.createComment(" "+R+": "+c[R]+" ")),b=K[0],bb(e,w(ta.call(O,0)),b),qa=F(O,d,n,f&&f.name)):(O=w(vb(b)).contents(),K.html(""),qa=F(O,d));if(u.template)if(C("template",G,u,K),G=u,O=B(u.template)?u.template(K,c):u.template,O=Yb(O),u.replace){f=u;O=w("<div>"+aa(O)+"</div>").contents();b=O[0];if(1!=O.length||1!==b.nodeType)throw ga("tplrt",R,"");bb(e,K,b);
ma={$attr:{}};a=a.concat(ba(b,a.splice(L+1,a.length-(L+1)),ma));ab(c,ma);ma=a.length}else K.html(O);if(u.templateUrl)C("template",G,u,K),G=u,u.replace&&(f=u),l=Uc(a.splice(L,a.length-L),l,K,c,e,qa),ma=a.length;else if(u.compile)try{ka=u.compile(K,c,qa),B(ka)?g(null,ka,A,z):ka&&g(ka.pre,ka.post,A,z)}catch(E){p(E,ia(K))}u.terminal&&(l.terminal=!0,n=Math.max(n,u.priority))}l.scope=x&&x.scope;l.transclude=N&&qa;return l}function G(d,e,f,g,h,n,m){if(e===h)return null;h=null;if(b.hasOwnProperty(e)){var t;
e=a.get(e+c);for(var r=0,C=e.length;r<C;r++)try{t=e[r],(g===s||g>t.priority)&&-1!=t.restrict.indexOf(f)&&(n&&(t=Cc(t,{$$start:n,$$end:m})),d.push(t),h=t)}catch(u){p(u)}}return h}function ab(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(I(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?e.attr("style",e.attr("style")+";"+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||
(a[f]=b,d[f]=c[f])})}function Uc(a,b,c,d,e,f){var g=[],h,p,l=c[0],m=a.shift(),r=E({},m,{controller:null,templateUrl:null,transclude:null,scope:null,replace:null}),C=B(m.templateUrl)?m.templateUrl(c,d):m.templateUrl;c.html("");n.get(N.getTrustedResourceUrl(C),{cache:t}).success(function(n){var t;n=Yb(n);if(m.replace){n=w("<div>"+aa(n)+"</div>").contents();t=n[0];if(1!=n.length||1!==t.nodeType)throw ga("tplrt",m.name,C);n={$attr:{}};bb(e,c,t);ba(t,a,n);ab(d,n)}else t=l,c.html(n);a.unshift(r);h=ka(a,
t,d,f,c,m);q(e,function(a,b){a==t&&(e[b]=c[0])});for(p=Z(c[0].childNodes,f);g.length;){n=g.shift();var u=g.shift(),y=g.shift(),I=g.shift(),x=c[0];u!==l&&(x=vb(t),bb(y,w(u),x));h(b(p,n,x,e,I),n,x,e,I)}g=null}).error(function(a,b,c,d){throw ga("tpload",d.url);});return function(a,c,d,e,f){g?(g.push(c),g.push(d),g.push(e),g.push(f)):h(function(){b(p,c,d,e,f)},c,d,e,f)}}function L(a,b){return b.priority-a.priority}function C(a,b,c,d){if(b)throw ga("multidir",b.name,c.name,a,ia(d));}function K(a,b){var c=
m(b,!0);c&&a.push({priority:0,compile:$(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);I(d.data("$binding",e),"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function O(a,b){if("xlinkHref"==b||"IMG"!=Aa(a)&&("src"==b||"ngSrc"==b))return N.RESOURCE_URL}function pa(a,b,c,d){var e=m(c,!0);if(e){if("multiple"===d&&"SELECT"===Aa(a))throw ga("selmulti",ia(a));b.push({priority:100,compile:$(function(b,c,g){c=g.$$observers||(g.$$observers={});if(f.test(d))throw ga("nodomevents");
if(e=m(g[d],!0,O(a,d)))g[d]=e(b),(c[d]||(c[d]=[])).$$inter=!0,(g.$$observers&&g.$$observers[d].$$scope||b).$watch(e,function(a){g.$set(d,a)})})})}}function bb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var p=a.length;g<p;g++,h++)h<p?a[g]=a[h]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=T.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)f=b[d],w(f).remove(),a.appendChild(f),
delete b[d];b[0]=c;b.length=1}var xb=function(a,b){this.$$element=a;this.$attr=b||{}};xb.prototype={$normalize:la,$addClass:function(a){a&&0<a.length&&v.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&v.removeClass(this.$$element,a)},$set:function(a,b,c,d){function e(a,b){var c=[],d=a.split(/\s+/),f=b.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var h=d[g],p=0;p<f.length;p++)if(h==f[p])continue a;c.push(h)}return c}if("class"==a)b=b||"",c=this.$$element.attr("class")||"",this.$removeClass(e(c,
b).join(" ")),this.$addClass(e(b,c).join(" "));else{var f=Ub(this.$$element[0],a);f&&(this.$$element.prop(a,b),d=f);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=pb(a,"-"));f=Aa(this.$$element);if("A"===f&&"href"===a||"IMG"===f&&"src"===a)if(!Q||8<=Q)f=u.resolve(b),""!==f&&("href"===a&&!f.match(g)||"src"===a&&!f.match(h))&&(this[a]=b="unsafe:"+f);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b))}(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){p(c)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){e.$$inter||b(c[a])});return b}};R[0].createElement("a");var ma=m.startSymbol(),qa=m.endSymbol(),Yb="{{"==ma||"}}"==qa?wa:function(a){return a.replace(/\{\{/g,ma).replace(/}}/g,qa)},A=/^ngAttr[A-Z]/;return F}]}function la(a){return Ja(a.replace(Yc,""))}function Zc(){var a={},b=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(b,d){U(b)?E(a,b):a[b]=d};this.$get=["$injector","$window",
function(c,d){return function(e,g){var h,f,k;H(e)&&(h=e.match(b),f=h[1],k=h[3],e=a.hasOwnProperty(f)?a[f]:rb(g.$scope,f,!0)||rb(d,f,!0),Ia(e,f,!0));h=c.instantiate(e,g);if(k){if(!g||"object"!=typeof g.$scope)throw P("$controller")("noscp",f||e.name,k);g.$scope[k]=h}return h}}]}function $c(){this.$get=["$window",function(a){return w(a.document)}]}function ad(){this.$get=["$log",function(a){return function(b,c){a.error.apply(a,arguments)}}]}function Zb(a){var b={},c,d,e;if(!a)return b;q(a.split("\n"),
function(a){e=a.indexOf(":");c=J(aa(a.substr(0,e)));d=aa(a.substr(e+1));c&&(b[c]=b[c]?b[c]+(", "+d):d)});return b}function $b(a){var b=U(a)?a:s;return function(c){b||(b=Zb(a));return c?b[J(c)]||null:b}}function ac(a,b,c){if(B(c))return c(a,b);q(c,function(c){a=c(a,b)});return a}function bd(){var a=/^\s*(\[|\{[^\{])/,b=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){H(d)&&(d=d.replace(c,""),a.test(d)&&b.test(d)&&(d=Ib(d)));
return d}],transformRequest:[function(a){return U(a)&&"[object File]"!==Ua.apply(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],h=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector","$$urlUtils",function(a,b,c,d,p,n,t){function r(a){function c(a){var b=E({},a,{data:ac(a.data,a.headers,d.transformResponse)});return 200<=
a.status&&300>a.status?b:p.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;q(a,function(b,d){B(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=E({},a.headers),f,g,c=E({},c.common,c[J(a.method)]);b(c);b(d);a:for(f in c){a=J(f);for(g in d)if(J(g)===a)continue a;d[f]=c[f]}return d}(a);E(d,a);d.headers=f;d.method=Ba(d.method);(a=t.isSameOrigin(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||
e.xsrfHeaderName]=a);var g=[function(a){f=a.headers;var b=ac(a.data,$b(f),a.transformRequest);M(a.data)&&q(f,function(a,b){"content-type"===J(b)&&delete f[b]});M(a.withCredentials)&&!M(e.withCredentials)&&(a.withCredentials=e.withCredentials);return y(a,b,f).then(c,c)},s],h=p.when(d);for(q(N,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var n=g.shift(),h=h.then(a,n)}h.success=
function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function y(b,c,g){function k(a,b,c){y&&(200<=a&&300>a?y.put(s,[a,b,Zb(c)]):y.remove(s));h(b,a,c);d.$$phase||d.$apply()}function h(a,c,d){c=Math.max(c,0);(200<=c&&300>c?l.resolve:l.reject)({data:a,status:c,headers:$b(d),config:b})}function n(){var a=Va(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var l=p.defer(),t=l.promise,
y,q,s=x(b.url,b.params);r.pendingRequests.push(b);t.then(n,n);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(y=U(b.cache)?b.cache:U(e.cache)?e.cache:R);if(y)if(q=y.get(s),z(q)){if(q.then)return q.then(n,n),q;D(q)?h(q[1],q[0],da(q[2])):h(q,200,{})}else y.put(s,t);M(q)&&a(b.method,s,c,k,g,b.timeout,b.withCredentials,b.responseType);return t}function x(a,b){if(!b)return a;var c=[];Bc(b,function(a,b){null!=a&&a!=s&&(D(a)||(a=[a]),q(a,function(a){U(a)&&(a=oa(a));c.push(ua(b)+"="+ua(a))}))});return a+
(-1==a.indexOf("?")?"?":"&")+c.join("&")}var R=c("$http"),N=[];q(g,function(a){N.unshift(H(a)?n.get(a):n.invoke(a))});q(h,function(a,b){var c=H(a)?n.get(a):n.invoke(a);N.splice(b,0,{response:function(a){return c(p.when(a))},responseError:function(a){return c(p.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(E(d||{},
{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function cd(){this.$get=["$browser","$window","$document",function(a,b,c){return dd(a,ed,a.defer,b.angular.callbacks,c[0],b.location.protocol.replace(":",""))}]}function dd(a,b,c,d,e,g){function h(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;Q?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c);return d}
return function(e,k,l,m,p,n,t,r){function y(){R=-1;u&&u();v&&v.abort()}function x(b,d,e,f){var h=(k.match(bc)||["",g])[1];F&&c.cancel(F);u=v=null;d="file"==h?e?200:404:d;b(1223==d?204:d,e,f);a.$$completeOutstandingRequest(A)}var R;a.$$incOutstandingRequestCount();k=k||a.url();if("jsonp"==J(e)){var s="_"+(d.counter++).toString(36);d[s]=function(a){d[s].data=a};var u=h(k.replace("JSON_CALLBACK","angular.callbacks."+s),function(){d[s].data?x(m,200,d[s].data):x(m,R||-2);delete d[s]})}else{var v=new b;
v.open(e,k,!0);q(p,function(a,b){a&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(4==v.readyState){var a=v.getAllResponseHeaders(),b="Cache-Control Content-Language Content-Type Expires Last-Modified Pragma".split(" ");a||(a="",q(b,function(b){var c=v.getResponseHeader(b);c&&(a+=b+": "+c+"\n")}));x(m,R||v.status,v.responseType?v.response:v.responseText,a)}};t&&(v.withCredentials=!0);r&&(v.responseType=r);v.send(l||"")}if(0<n)var F=c(y,n);else n&&n.then&&n.then(y)}}function fd(){var a=
"{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,l,m){for(var p,n,t=0,r=[],y=g.length,x=!1,q=[];t<y;)-1!=(p=g.indexOf(a,t))&&-1!=(n=g.indexOf(b,p+h))?(t!=p&&r.push(g.substring(t,p)),r.push(t=c(x=g.substring(p+h,n))),t.exp=x,t=n+f,x=!0):(t!=y&&r.push(g.substring(t)),t=y);(y=r.length)||(r.push(""),y=1);if(m&&1<r.length)throw cc("noconcat",g);if(!l||x)return q.length=
y,t=function(a){try{for(var b=0,c=y,f;b<c;b++)"function"==typeof(f=r[b])&&(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null==f||f==s?f="":"string"!=typeof f&&(f=oa(f))),q[b]=f;return q.join("")}catch(h){a=cc("interr",g,h.toString()),d(a)}},t.exp=g,t.parts=r,t}var h=a.length,f=b.length;g.startSymbol=function(){return a};g.endSymbol=function(){return b};return g}]}function gd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,
posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM",
"PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(a){return 1===a?"one":"other"}}}}function dc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=ob(a[b]);return a.join("/")}function ec(a,b){var c=bc.exec(a);b.$$protocol=c[1];b.$$host=c[3];b.$$port=V(c[5])||hd[c[1]]||null}function fc(a,b){var c=gc.exec(a);b.$$path=decodeURIComponent(c[1]);b.$$search=
Kb(c[3]);b.$$hash=decodeURIComponent(c[5]||"");b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function na(a,b,c){return 0==b.indexOf(a)?b.substr(a.length):c}function Qa(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function yb(a){return a.substr(0,Qa(a).lastIndexOf("/")+1)}function hc(a,b){this.$$html5=!0;b=b||"";var c=yb(a);this.$$parse=function(a){var b={};ec(a,b);var g=na(c,a);if(!H(g))throw zb("ipthprfx",a,c);fc(g,b);E(this,b);this.$$path||(this.$$path="/");this.$$compose()};
this.$$compose=function(){var a=Lb(this.$$search),b=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=dc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(a,d))!==s)return d=e,(e=na(b,e))!==s?c+(na("/",e)||e):a+d;if((e=na(c,d))!==s)return c+e;if(c==d+"/")return c}}function Ab(a,b){var c=yb(a);ec(a,this);this.$$parse=function(d){var e=na(a,d)||na(c,d),e="#"==e.charAt(0)?na(b,e):this.$$html5?e:"";if(!H(e))throw zb("ihshprfx",d,b);fc(e,this);this.$$compose()};
this.$$compose=function(){var c=Lb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=dc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=a+(this.$$url?b+this.$$url:"")};this.$$rewrite=function(b){if(Qa(a)==Qa(b))return b}}function ic(a,b){this.$$html5=!0;Ab.apply(this,arguments);var c=yb(a);this.$$rewrite=function(d){var e;if(a==Qa(d))return d;if(e=na(c,d))return a+b+e;if(c===d+"/")return c}}function cb(a){return function(){return this[a]}}function jc(a,b){return function(c){if(M(c))return this[a];
this[a]=b(c);this.$$compose();return this}}function id(){var a="",b=!1;this.hashPrefix=function(b){return z(b)?(a=b,this):a};this.html5Mode=function(a){return z(a)?(b=a,this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function h(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,k=d.baseHref(),l=d.url();b?(k=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(k||"/"),e=e.history?hc:ic):(k=Qa(l),e=Ab);f=new e(k,"#"+a);f.$$parse(f.$$rewrite(l));g.on("click",
function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=w(a.target);"a"!==J(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href"),h=f.$$rewrite(e);e&&(!b.attr("target")&&h&&!a.isDefaultPrevented())&&(a.preventDefault(),h!=d.url()&&(f.$$parse(h),c.$apply(),Y.angular["ff-684208-preventDefault"]=!0))}});f.absUrl()!=l&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,f.absUrl()).defaultPrevented?d.url(f.absUrl()):(c.$evalAsync(function(){var b=
f.absUrl();f.$$parse(a);h(b)}),c.$$phase||c.$digest()))});var m=0;c.$watch(function(){var a=d.url(),b=f.$$replace;m&&a==f.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?f.$$parse(a):(d.url(f.absUrl(),b),h(a))}));f.$$replace=!1;return m});return f}]}function jd(){var a=!0,b=this;this.debugEnabled=function(b){return z(b)?(a=b,this):a};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?
"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||A;return e.apply?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function ra(a,b){if("constructor"===a)throw Ra("isecfld",b);return a}function kc(a,
b){if(a&&a.constructor===a)throw Ra("isecfn",b);return a}function kd(a,b){function c(a){return-1!=a.indexOf(x)}function d(b){b=b||1;return r+b<a.length?a.charAt(r+b):!1}function e(a){return"0"<=a&&"9">=a}function g(a){return" "==a||"\r"==a||"\t"==a||"\n"==a||"\v"==a||"\u00a0"==a}function h(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"==a||"$"==a}function f(a){return"-"==a||"+"==a||e(a)}function k(b,c,d){d=d||r;c=z(c)?"s "+c+"-"+r+" ["+a.substring(c,d)+"]":" "+d;throw Ra("lexerr",b,c,a);}function l(){for(var b=
"",c=r;r<a.length;){var g=J(a.charAt(r));if("."==g||e(g))b+=g;else{var h=d();if("e"==g&&f(h))b+=g;else if(f(g)&&h&&e(h)&&"e"==b.charAt(b.length-1))b+=g;else if(!f(g)||h&&e(h)||"e"!=b.charAt(b.length-1))break;else k("Invalid exponent")}r++}b*=1;n.push({index:c,text:b,json:!0,fn:function(){return b}})}function m(){for(var c="",d=r,f,k,p,m;r<a.length;){m=a.charAt(r);if("."==m||h(m)||e(m))"."==m&&(f=r),c+=m;else break;r++}if(f)for(k=r;k<a.length;){m=a.charAt(k);if("("==m){p=c.substr(f-d+1);c=c.substr(0,
f-d);r=k;break}if(g(m))k++;else break}d={index:d,text:c};if(Sa.hasOwnProperty(c))d.fn=d.json=Sa[c];else{var l=lc(c,b,a);d.fn=E(function(a,b){return l(a,b)},{assign:function(b,d){return db(b,c,d,a)}})}n.push(d);p&&(n.push({index:f,text:".",json:!1}),n.push({index:f+1,text:p,json:!1}))}function p(b){var c=r;r++;for(var d="",e=b,f=!1;r<a.length;){var g=a.charAt(r),e=e+g;if(f)"u"==g?(g=a.substring(r+1,r+5),g.match(/[\da-f]{4}/i)||k("Invalid unicode escape [\\u"+g+"]"),r+=4,d+=String.fromCharCode(parseInt(g,
16))):d=(f=ld[g])?d+f:d+g,f=!1;else if("\\"==g)f=!0;else{if(g==b){r++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=g}r++}k("Unterminated quote",c)}for(var n=[],t,r=0,y=[],x,q=":";r<a.length;){x=a.charAt(r);if(c("\"'"))p(x);else if(e(x)||c(".")&&e(d()))l();else if(h(x))m(),-1!="{,".indexOf(q)&&("{"==y[0]&&(t=n[n.length-1]))&&(t.json=-1==t.text.indexOf("."));else if(c("(){}[].,;:?"))n.push({index:r,text:x,json:-1!=":[,".indexOf(q)&&c("{[")||c("}]:,")}),c("{[")&&y.unshift(x),
c("}]")&&y.shift(),r++;else if(g(x)){r++;continue}else{var s=x+d(),u=s+d(2),v=Sa[x],F=Sa[s],I=Sa[u];I?(n.push({index:r,text:u,fn:I}),r+=3):F?(n.push({index:r,text:s,fn:F}),r+=2):v?(n.push({index:r,text:x,fn:v,json:-1!="[,:".indexOf(q)&&c("+-")}),r+=1):k("Unexpected next character ",r,r+1)}q=x}return n}function md(a,b,c,d){function e(b,c){throw Ra("syntax",c.text,b,c.index+1,a,a.substring(c.index));}function g(){if(0===ea.length)throw Ra("ueoe",a);return ea[0]}function h(a,b,c,d){if(0<ea.length){var e=
ea[0],f=e.text;if(f==a||f==b||f==c||f==d||!(a||b||c||d))return e}return!1}function f(a,c,d,f){return(a=h(a,c,d,f))?(b&&!a.json&&e("is not valid json",a),ea.shift(),a):!1}function k(a){f(a)||e("is unexpected, expecting ["+a+"]",h())}function l(a,b){return E(function(c,d){return a(c,d,b)},{constant:b.constant})}function m(a,b,c){return E(function(d,e){return a(d,e)?b(d,e):c(d,e)},{constant:a.constant&&b.constant&&c.constant})}function p(a,b,c){return E(function(d,e){return b(d,e,a,c)},{constant:a.constant&&
c.constant})}function n(){for(var a=[];;)if(0<ea.length&&!h("}",")",";","]")&&a.push(L()),!f(";"))return 1==a.length?a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}}function t(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(z());else{var e=function(a,c,e){e=[e];for(var f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}function r(){var a=y(),b,c;if(f("?")){b=r();if(c=f(":"))return m(a,b,r());e("expected :",c)}else return a}
function y(){for(var a=x(),b;;)if(b=f("||"))a=p(a,b.fn,x());else return a}function x(){var a=q(),b;if(b=f("&&"))a=p(a,b.fn,x());return a}function q(){var a=N(),b;if(b=f("==","!=","===","!=="))a=p(a,b.fn,q());return a}function N(){var a;a=u();for(var b;b=f("+","-");)a=p(a,b.fn,u());if(b=f("<",">","<=",">="))a=p(a,b.fn,N());return a}function u(){for(var a=v(),b;b=f("*","/","%");)a=p(a,b.fn,v());return a}function v(){var a;return f("+")?F():(a=f("-"))?p(ba,a.fn,v()):(a=f("!"))?l(a.fn,v()):F()}function F(){var a;
if(f("("))a=L(),k(")");else if(f("["))a=I();else if(f("{"))a=w();else{var b=f();(a=b.fn)||e("not a primary expression",b);b.json&&(a.constant=a.literal=!0)}for(var c;b=f("(","[",".");)"("===b.text?(a=G(a,c),c=null):"["===b.text?(c=a,a=D(a)):"."===b.text?(c=a,a=H(a)):e("IMPOSSIBLE");return a}function I(){var a=[],b=!0;if("]"!=g().text){do{var c=z();a.push(c);c.constant||(b=!1)}while(f(","))}k("]");return E(function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d},{literal:!0,constant:b})}
function w(){var a=[],b=!0;if("}"!=g().text){do{var c=f(),c=c.string||c.text;k(":");var d=z();a.push({key:c,value:d});d.constant||(b=!1)}while(f(","))}k("}");return E(function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e];d[f.key]=f.value(b,c)}return d},{literal:!0,constant:b})}var ba=$(0),W,ea=kd(a,d),z=function(){var b=r(),c,d;return(d=f("="))?(b.assign||e("implies assignment but ["+a.substring(0,d.index)+"] can not be assigned to",d),c=r(),function(a,d){return b.assign(a,c(a,d),d)}):b},G=function(a,
b){var c=[];if(")"!=g().text){do c.push(z());while(f(","))}k(")");return function(d,e){for(var f=[],g=b?b(d,e):d,h=0;h<c.length;h++)f.push(c[h](d,e));h=a(d,e,g)||A;if((f=h.apply?h.apply(g,f):h(f[0],f[1],f[2],f[3],f[4]))&&f.then){var k=f;"$$v"in f||(k.$$v=s,k.then(function(a){k.$$v=a}));f=f.$$v}return f}},H=function(b){var c=f().text,e=lc(c,d,a);return E(function(a,c,d){return e(d||b(a,c),c)},{assign:function(d,e,f){return db(b(d,f),c,e,a)}})},D=function(b){var c=z();k("]");return E(function(d,e){var f=
b(d,e),g=c(d,e),h;if(!f)return s;(f=kc(f[g],a))&&f.then&&(h=f,"$$v"in f||(h.$$v=s,h.then(function(a){h.$$v=a})),f=f.$$v);return f},{assign:function(d,e,f){var g=c(d,f);return kc(b(d,f),a)[g]=e}})},L=function(){for(var a=z(),b;;)if(b=f("|"))a=p(a,b.fn,t());else return a};b?(z=y,G=H=D=L=function(){e("is not valid json",{text:a,index:0})},W=F()):W=n();0!==ea.length&&e("is an unexpected token",ea[0]);W.literal=!!W.literal;W.constant=!!W.constant;return W}function db(a,b,c,d){b=b.split(".");for(var e,
g=0;1<b.length;g++){e=ra(b.shift(),d);var h=a[e];h||(h={},a[e]=h);a=h;a.then&&("$$v"in a||function(a){a.then(function(b){a.$$v=b})}(a),a.$$v===s&&(a.$$v={}),a=a.$$v)}e=ra(b.shift(),d);return a[e]=c}function mc(a,b,c,d,e,g){ra(a,g);ra(b,g);ra(c,g);ra(d,g);ra(e,g);return function(g,f){var k=f&&f.hasOwnProperty(a)?f:g,l;if(null===k||k===s)return k;(k=k[a])&&k.then&&("$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!b||null===k||k===s)return k;(k=k[b])&&k.then&&("$$v"in k||(l=k,l.$$v=
s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c||null===k||k===s)return k;(k=k[c])&&k.then&&("$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d||null===k||k===s)return k;(k=k[d])&&k.then&&("$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e||null===k||k===s)return k;(k=k[e])&&k.then&&("$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);return k}}function lc(a,b,c){if(Bb.hasOwnProperty(a))return Bb[a];var d=a.split("."),e=d.length;if(b)b=6>e?mc(d[0],d[1],
d[2],d[3],d[4],c):function(a,b){var g=0,l;do l=mc(d[g++],d[g++],d[g++],d[g++],d[g++],c)(a,b),b=s,a=l;while(g<e);return l};else{var g="var l, fn, p;\n";q(d,function(a,b){ra(a,c);g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";b=Function("s","k",g);b.toString=function(){return g}}return Bb[a]=
b}function nd(){var a={};this.$get=["$filter","$sniffer",function(b,c){return function(d){switch(typeof d){case "string":return a.hasOwnProperty(d)?a[d]:a[d]=md(d,!1,b,c.csp);case "function":return d;default:return A}}}]}function od(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return pd(function(b){a.$evalAsync(b)},b)}]}function pd(a,b){function c(a){return a}function d(a){return h(a)}var e=function(){var f=[],k,l;return l={resolve:function(b){if(f){var c=f;f=s;k=g(b);c.length&&a(function(){for(var a,
b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(b){if(f){var c=f;f.length&&a(function(){for(var a,d=0,e=c.length;d<e;d++)a=c[d],a[2](b)})}},promise:{then:function(a,g,h){var l=e(),r=function(d){try{l.resolve((B(a)?a:c)(d))}catch(e){l.reject(e),b(e)}},y=function(a){try{l.resolve((B(g)?g:d)(a))}catch(c){l.reject(c),b(c)}},x=function(a){try{l.notify((B(h)?h:c)(a))}catch(d){b(d)}};f?f.push([r,y,x]):k.then(r,y,x);return l.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&B(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(b){return b&&B(b.then)?b:{then:function(c){var d=e();a(function(){d.resolve(c(b))});return d.promise}}},h=function(c){return{then:function(g,h){var m=e();a(function(){try{m.resolve((B(h)?
h:d)(c))}catch(a){m.reject(a),b(a)}});return m.promise}}};return{defer:e,reject:h,when:function(f,k,l,m){var p=e(),n,t=function(a){try{return(B(k)?k:c)(a)}catch(d){return b(d),h(d)}},r=function(a){try{return(B(l)?l:d)(a)}catch(c){return b(c),h(c)}},y=function(a){try{return(B(m)?m:c)(a)}catch(d){b(d)}};a(function(){g(f).then(function(a){n||(n=!0,p.resolve(g(a).then(t,r,y)))},function(a){n||(n=!0,p.resolve(r(a)))},function(a){n||p.notify(y(a))})});return p.promise},all:function(a){var b=e(),c=0,d=D(a)?
[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function qd(){var a=10,b=P("$rootScope");this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(c,d,e,g){function h(){this.$id=Ta();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$isolateBindings={}}function f(a){if(m.$$phase)throw b("inprog",m.$$phase);m.$$phase=a}function k(a,b){var c=e(a);Ia(c,b);return c}function l(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Ta());a["this"]=a;a.$$listeners=
{};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=k(a,"watch"),e=this.$$watchers,f={fn:b,last:l,get:d,exp:a,eq:!!c};if(!B(b)){var g=k(b||A,"listener");f.fn=function(a,b,c){g(c)}}if("string"==typeof a&&d.constant){var h=f.fn;f.fn=function(a,b,c){h.call(this,a,b,c);Fa(e,f)}}e||(e=this.$$watchers=[]);
e.unshift(f);return function(){Fa(e,f)}},$watchCollection:function(a,b){var c=this,d,f,g=0,h=e(a),k=[],l={},m=0;return this.$watch(function(){f=h(c);var a,b;if(U(f))if(kb(f))for(d!==k&&(d=k,m=d.length=0,g++),a=f.length,m!==a&&(g++,d.length=m=a),b=0;b<a;b++)d[b]!==f[b]&&(g++,d[b]=f[b]);else{d!==l&&(d=l={},m=0,g++);a=0;for(b in f)f.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==f[b]&&(g++,d[b]=f[b]):(m++,d[b]=f[b],g++));if(m>a)for(b in g++,d)d.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(m--,delete d[b])}else d!==
f&&(d=f,g++);return g},function(){b(f,d,c)})},$digest:function(){var c,e,g,h,k=this.$$asyncQueue,q=this.$$postDigestQueue,s,N,u=a,v,F=[],I,z;f("$digest");do{N=!1;for(v=this;k.length;)try{v.$eval(k.shift())}catch(ba){d(ba)}do{if(h=v.$$watchers)for(s=h.length;s--;)try{(c=h[s])&&((e=c.get(v))!==(g=c.last)&&!(c.eq?xa(e,g):"number"==typeof e&&"number"==typeof g&&isNaN(e)&&isNaN(g)))&&(N=!0,c.last=c.eq?da(e):e,c.fn(e,g===l?e:g,v),5>u&&(I=4-u,F[I]||(F[I]=[]),z=B(c.exp)?"fn: "+(c.exp.name||c.exp.toString()):
c.exp,z+="; newVal: "+oa(e)+"; oldVal: "+oa(g),F[I].push(z)))}catch(W){d(W)}if(!(h=v.$$childHead||v!==this&&v.$$nextSibling))for(;v!==this&&!(h=v.$$nextSibling);)v=v.$parent}while(v=h);if(N&&!u--)throw m.$$phase=null,b("infdig",a,oa(F));}while(N||k.length);for(m.$$phase=null;q.length;)try{q.shift()()}catch(w){d(w)}},$destroy:function(){if(m!=this&&!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==
this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null}},$eval:function(a,b){return e(a)(this,b)},$evalAsync:function(a){m.$$phase||m.$$asyncQueue.length||g.defer(function(){m.$$asyncQueue.length&&m.$digest()});this.$$asyncQueue.push(a)},$$postDigest:function(a){this.$$postDigestQueue.push(a)},
$apply:function(a){try{return f("$apply"),this.$eval(a)}catch(b){d(b)}finally{m.$$phase=null;try{m.$digest()}catch(c){throw d(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[Va(c,b)]=null}},$emit:function(a,b){var c=[],e,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ta.call(arguments,1)),l,m;do{e=f.$$listeners[a]||c;h.currentScope=
f;l=0;for(m=e.length;l<m;l++)if(e[l])try{if(e[l].apply(null,k),g)return h}catch(q){d(q)}else e.splice(l,1),l--,m--;f=f.$parent}while(f);return h},$broadcast:function(a,b){var c=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ta.call(arguments,1)),h,k;do{c=e;f.currentScope=c;e=c.$$listeners[a]||[];h=0;for(k=e.length;h<k;h++)if(e[h])try{e[h].apply(null,g)}catch(l){d(l)}else e.splice(h,1),h--,k--;if(!(e=c.$$childHead||c!==this&&
c.$$nextSibling))for(;c!==this&&!(e=c.$$nextSibling);)c=c.$parent}while(c=e);return f}};var m=new h;return m}]}function rd(){this.SCE_CONTEXTS=fa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=b);return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=a);return b};this.$get=["$log","$document","$injector","$$urlUtils",function(c,d,e,g){function h(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=
function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};e.has("$sanitize")&&(f=e.get("$sanitize"));var k=h(),l={};l[fa.HTML]=h(k);l[fa.CSS]=h(k);l[fa.URL]=h(k);l[fa.JS]=h(k);l[fa.RESOURCE_URL]=h(l[fa.URL]);return{trustAs:function(a,b){var c=l.hasOwnProperty(a)?l[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},
getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var e=l.hasOwnProperty(c)?l[c]:null;if(e&&d instanceof e)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var e=g.resolve(d.toString(),!0),h,k,q=!1;h=0;for(k=a.length;h<k;h++)if("self"===a[h]?g.isSameOrigin(e):e.href.match(a[h])){q=!0;break}if(q)for(h=0,k=b.length;h<k;h++)if("self"===b[h]?g.isSameOrigin(e):e.href.match(b[h])){q=!1;break}if(q)return d;throw Ca("insecurl",d.toString());}if(c===fa.HTML)return f(d);throw Ca("unsafe");
},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function sd(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$document","$sceDelegate",function(b,c,d){if(a&&Q&&(c=c[0].documentMode,c!==s&&8>c))throw Ca("iequirks");var e=da(fa);e.isEnabled=function(){return a};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;a||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=wa);e.parseAs=function(a,c){var d=b(c);return d.literal&&
d.constant?d:function(b,c){return e.getTrusted(a,d(b,c))}};var g=e.parseAs,h=e.getTrusted,f=e.trustAs;Ha.forEach(fa,function(a,b){var c=J(b);e[Ja("parse_as_"+c)]=function(b){return g(a,b)};e[Ja("get_trusted_"+c)]=function(b){return h(a,b)};e[Ja("trust_as_"+c)]=function(b){return f(a,b)}});return e}]}function td(){this.$get=["$window","$document",function(a,b){var c={},d=V((/android (\d+)/.exec(J((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,f=/^(Moz|webkit|O|ms)(?=[A-Z])/,
k=g.body&&g.body.style,l=!1,m=!1;if(k){for(var p in k)if(l=f.exec(p)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);m=!!("animation"in k||h+"Animation"in k);!d||l&&m||(l=H(g.body.style.webkitTransition),m=H(g.body.style.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>d||e),hashchange:"onhashchange"in a&&(!g.documentMode||7<g.documentMode),hasEvent:function(a){if("input"==a&&9==Q)return!1;
if(M(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:g.securityPolicy?g.securityPolicy.isActive:!1,vendorPrefix:h,transitions:l,animations:m}}]}function ud(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(a,b,c,d){function e(e,f,k){var l=c.defer(),m=l.promise,p=z(k)&&!k;f=b.defer(function(){try{l.resolve(e())}catch(b){l.reject(b),d(b)}finally{delete g[m.$$timeoutId]}p||a.$apply()},f);m.$$timeoutId=f;g[f]=l;return m}var g={};e.cancel=function(a){return a&&
a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return e}]}function vd(){this.$get=[function(){function a(a,c){var g=a;11>=Q&&(b.setAttribute("href",g),g=b.href);b.setAttribute("href",g);return c?{href:b.href,protocol:b.protocol,host:b.host}:b.href}var b=T.createElement("a"),c=a(Y.location.href,!0);return{resolve:a,isSameOrigin:function(b){b="string"===typeof b?a(b,!0):b;return b.protocol===c.protocol&&b.host===c.host}}}]}function wd(){this.$get=
$(Y)}function nc(a){function b(b,e){return a.factory(b+c,e)}var c="Filter";this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];b("currency",oc);b("date",pc);b("filter",xd);b("json",yd);b("limitTo",zd);b("lowercase",Ad);b("number",qc);b("orderBy",rc);b("uppercase",Bd)}function xd(){return function(a,b,c){if(!D(a))return a;var d=[];d.check=function(a){for(var b=0;b<d.length;b++)if(!d[b](a))return!1;return!0};switch(typeof c){case "function":break;case "boolean":if(!0==
c){c=function(a,b){return Ha.equals(a,b)};break}default:c=function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)}}var e=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!e(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&e(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(e(a[d],b))return!0;return!1;default:return!1}};
switch(typeof b){case "boolean":case "number":case "string":b={$:b};case "object":for(var g in b)"$"==g?function(){if(b[g]){var a=g;d.push(function(c){return e(c,b[a])})}}():function(){if("undefined"!=typeof b[g]){var a=g;d.push(function(c){return e(rb(c,a),b[a])})}}();break;case "function":d.push(b);break;default:return a}for(var h=[],f=0;f<a.length;f++){var k=a[f];d.check(k)&&h.push(k)}return h}}function oc(a){var b=a.NUMBER_FORMATS;return function(a,d){M(d)&&(d=b.CURRENCY_SYM);return sc(a,b.PATTERNS[1],
b.GROUP_SEP,b.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function qc(a){var b=a.NUMBER_FORMATS;return function(a,d){return sc(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,d)}}function sc(a,b,c,d,e){if(isNaN(a)||!isFinite(a))return"";var g=0>a;a=Math.abs(a);var h=a+"",f="",k=[],l=!1;if(-1!==h.indexOf("e")){var m=h.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?h="0":(f=h,l=!0)}if(l)0<e&&(-1<a&&1>a)&&(f=a.toFixed(e));else{h=(h.split(tc)[1]||"").length;M(e)&&(e=Math.min(Math.max(b.minFrac,h),b.maxFrac));
h=Math.pow(10,e);a=Math.round(a*h)/h;a=(""+a).split(tc);h=a[0];a=a[1]||"";var l=0,m=b.lgSize,p=b.gSize;if(h.length>=m+p)for(var l=h.length-m,n=0;n<l;n++)0===(l-n)%p&&0!==n&&(f+=c),f+=h.charAt(n);for(n=l;n<h.length;n++)0===(h.length-n)%m&&0!==n&&(f+=c),f+=h.charAt(n);for(;a.length<e;)a+="0";e&&"0"!==e&&(f+=d+a.substr(0,e))}k.push(g?b.negPre:b.posPre);k.push(f);k.push(g?b.negSuf:b.posSuf);return k.join("")}function Cb(a,b,c){var d="";0>a&&(d="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;c&&(a=a.substr(a.length-
b));return d+a}function X(a,b,c,d){c=c||0;return function(e){e=e["get"+a]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Cb(e,b,d)}}function eb(a,b){return function(c,d){var e=c["get"+a](),g=Ba(b?"SHORT"+a:a);return d[g][e]}}function pc(a){function b(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,h=0,f=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=V(b[9]+b[10]),h=V(b[9]+b[11]));f.call(a,V(b[1]),V(b[2])-1,V(b[3]));g=V(b[4]||0)-g;h=V(b[5]||0)-h;f=V(b[6]||0);b=Math.round(1E3*
parseFloat("0."+(b[7]||0)));k.call(a,g,h,f,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",h=[],f,k;e=e||"mediumDate";e=a.DATETIME_FORMATS[e]||e;H(c)&&(c=Cd.test(c)?V(c):b(c));lb(c)&&(c=new Date(c));if(!Ea(c))return c;for(;e;)(k=Dd.exec(e))?(h=h.concat(ta.call(k,1)),e=h.pop()):(h.push(e),e=null);q(h,function(b){f=Ed[b];g+=f?f(c,a.DATETIME_FORMATS):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}
function yd(){return function(a){return oa(a,!0)}}function zd(){return function(a,b){if(!D(a)&&!H(a))return a;b=V(b);if(H(a))return b?0<=b?a.slice(0,b):a.slice(b,a.length):"";var c=[],d,e;b>a.length?b=a.length:b<-a.length&&(b=-a.length);0<b?(d=0,e=b):(d=a.length+b,e=a.length);for(;d<e;d++)c.push(a[d]);return c}}function rc(a){return function(b,c,d){function e(a,b){return Ga(b)?function(b,c){return a(c,b)}:a}if(!D(b)||!c)return b;c=D(c)?c:[c];c=Ec(c,function(b){var c=!1,d=b||wa;if(H(b)){if("+"==b.charAt(0)||
"-"==b.charAt(0))c="-"==b.charAt(0),b=b.substring(1);d=a(b)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var g=[],h=0;h<b.length;h++)g.push(b[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return $(a)}function uc(a,b){function c(b,c){c=c?"-"+pb(c,
"-"):"";a.removeClass((b?fb:gb)+c).addClass((b?gb:fb)+c)}var d=this,e=a.parent().controller("form")||hb,g=0,h=d.$error={},f=[];d.$name=b.name||b.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);a.addClass(Da);c(!0);d.$addControl=function(a){f.push(a);a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(h,function(b,c){d.$setValidity(c,!0,a)});Fa(f,a)};d.$setValidity=function(a,b,f){var p=h[a];if(b)p&&
(Fa(p,f),p.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),h[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||c(b);if(p){if(-1!=Va(p,f))return}else h[a]=p=[],g++,c(!1,a),e.$setValidity(a,!1,d);p.push(f);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){a.removeClass(Da).addClass(ib);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){a.removeClass(ib).addClass(Da);d.$dirty=!1;d.$pristine=!0;q(f,function(a){a.$setPristine()})}}function ca(a){return M(a)||""===a||null===a||a!==a}function jb(a,
b,c,d,e,g){var h=function(){var e=b.val();Ga(c.ngTrim||"T")&&(e=aa(e));d.$viewValue!==e&&a.$apply(function(){d.$setViewValue(e)})};if(e.hasEvent("input"))b.on("input",h);else{var f,k=function(){f||(f=g.defer(function(){h();f=null}))};b.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});b.on("change",h);if(e.hasEvent("paste"))b.on("paste cut",k)}d.$render=function(){b.val(ca(d.$viewValue)?"":d.$viewValue)};var l=c.ngPattern,m=function(a,b){if(ca(b)||a.test(b))return d.$setValidity("pattern",
!0),b;d.$setValidity("pattern",!1);return s};l&&((e=l.match(/^\/(.*)\/([gim]*)$/))?(l=RegExp(e[1],e[2]),e=function(a){return m(l,a)}):e=function(c){var d=a.$eval(l);if(!d||!d.test)throw P("ngPattern")("noregexp",l,d,ia(b));return m(d,c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=V(c.ngMinlength);e=function(a){if(!ca(a)&&a.length<p)return d.$setValidity("minlength",!1),s;d.$setValidity("minlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var n=
V(c.ngMaxlength);e=function(a){if(!ca(a)&&a.length>n)return d.$setValidity("maxlength",!1),s;d.$setValidity("maxlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}}function Db(a,b){a="ngClass"+a;return function(){return{restrict:"AC",link:function(c,d,e){function g(a){if(!0===b||c.$index%2===b)f&&!xa(a,f)&&e.$removeClass(h(f)),e.$addClass(h(a));f=da(a)}function h(a){if(D(a))return a.join(" ");if(U(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var f=s;c.$watch(e[a],
g,!0);e.$observe("class",function(b){g(c.$eval(e[a]))});"ngClass"!==a&&c.$watch("$index",function(d,f){var g=d&1;g!==f&1&&(g===b?(g=c.$eval(e[a]),e.$addClass(h(g))):(g=c.$eval(e[a]),e.$removeClass(h(g))))})}}}}var J=function(a){return H(a)?a.toLowerCase():a},Ba=function(a){return H(a)?a.toUpperCase():a},Q,w,ya,ta=[].slice,Fd=[].push,Ua=Object.prototype.toString,Wa=P("ng"),Ha=Y.angular||(Y.angular={}),Oa,Aa,ha=["0","0","0"];Q=V((/msie (\d+)/.exec(J(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=V((/trident\/.*; rv:(\d+)/.exec(J(navigator.userAgent))||
[])[1]));A.$inject=[];wa.$inject=[];var aa=function(){return String.prototype.trim?function(a){return H(a)?a.trim():a}:function(a){return H(a)?a.replace(/^\s*/,"").replace(/\s*$/,""):a}}();Aa=9>Q?function(a){a=a.nodeName?a:a[0];return a.scopeName&&"HTML"!=a.scopeName?Ba(a.scopeName+":"+a.nodeName):a.nodeName}:function(a){return a.nodeName?a.nodeName:a[0].nodeName};var Ic=/[A-Z]/g,Gd={full:"1.2.0-rc.2",major:1,minor:2,dot:0,codeName:"barehand-atomsplitting"},La=S.cache={},Xa=S.expando="ng-"+(new Date).getTime(),
Mc=1,vc=Y.document.addEventListener?function(a,b,c){a.addEventListener(b,c,!1)}:function(a,b,c){a.attachEvent("on"+b,c)},wb=Y.document.removeEventListener?function(a,b,c){a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent("on"+b,c)},Kc=/([\:\-\_]+(.))/g,Lc=/^moz([A-Z])/,tb=P("jqLite"),Pa=S.prototype={ready:function(a){function b(){c||(c=!0,a())}var c=!1;"complete"===T.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),S(Y).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+
b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?w(this[a]):w(this[this.length+a])},length:0,push:Fd,sort:[].sort,splice:[].splice},$a={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){$a[J(a)]=a});var Vb={};q("input select option textarea button form details".split(" "),function(a){Vb[Ba(a)]=!0});q({data:Qb,inheritedData:Za,scope:function(a){return Za(a,"$scope")},controller:Tb,injector:function(a){return Za(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},
hasClass:Ya,css:function(a,b,c){b=Ja(b);if(z(c))a.style[b]=c;else{var d;8>=Q&&(d=a.currentStyle&&a.currentStyle[b],""===d&&(d="auto"));d=d||a.style[b];8>=Q&&(d=""===d?s:d);return d}},attr:function(a,b,c){var d=J(b);if($a[d])if(z(c))c?(a[b]=!0,a.setAttribute(b,d)):(a[b]=!1,a.removeAttribute(d));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?d:s;else if(z(c))a.setAttribute(b,c);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?s:a},prop:function(a,b,c){if(z(c))a[b]=c;else return a[b]},
text:function(){function a(a,d){var e=b[a.nodeType];if(M(d))return e?a[e]:"";a[e]=d}var b=[];9>Q?(b[1]="innerText",b[3]="nodeValue"):b[1]=b[3]="textContent";a.$dv="";return a}(),val:function(a,b){if(M(b)){if("SELECT"===Aa(a)&&a.multiple){var c=[];q(a.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return a.value}a.value=b},html:function(a,b){if(M(b))return a.innerHTML;for(var c=0,d=a.childNodes;c<d.length;c++)Ka(d[c]);a.innerHTML=b}},function(a,b){S.prototype[b]=
function(b,d){var e,g;if((2==a.length&&a!==Ya&&a!==Tb?b:d)===s){if(U(b)){for(e=0;e<this.length;e++)if(a===Qb)a(this[e],b);else for(g in b)a(this[e],g,b[g]);return this}e=a.$dv;g=e==s?Math.min(this.length,1):this.length;for(var h=0;h<g;h++){var f=a(this[h],b,d);e=e?e+f:f}return e}for(e=0;e<this.length;e++)a(this[e],b,d);return this}});q({removeData:Ob,dealoc:Ka,on:function b(c,d,e,g){if(z(g))throw tb("onargs");var h=ja(c,"events"),f=ja(c,"handle");h||ja(c,"events",h={});f||ja(c,"handle",f=Nc(c,h));
q(d.split(" "),function(d){var g=h[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var m=T.body.contains||T.body.compareDocumentPosition?function(b,c){var d=9===b.nodeType?b.documentElement:b,e=c&&c.parentNode;return b===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):b.compareDocumentPosition&&b.compareDocumentPosition(e)&16))}:function(b,c){if(c)for(;c=c.parentNode;)if(c===b)return!0;return!1};h[d]=[];b(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(b){var c=b.relatedTarget;c&&(c===
this||m(this,c))||f(b,d)})}else vc(c,d,f),h[d]=[];g=h[d]}g.push(e)})},off:Pb,replaceWith:function(b,c){var d,e=b.parentNode;Ka(b);q(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,b);d=c})},children:function(b){var c=[];q(b.childNodes,function(b){1===b.nodeType&&c.push(b)});return c},contents:function(b){return b.childNodes||[]},append:function(b,c){q(new S(c),function(c){1!==b.nodeType&&11!==b.nodeType||b.appendChild(c)})},prepend:function(b,c){if(1===b.nodeType){var d=b.firstChild;
q(new S(c),function(c){b.insertBefore(c,d)})}},wrap:function(b,c){c=w(c)[0];var d=b.parentNode;d&&d.replaceChild(c,b);c.appendChild(b)},remove:function(b){Ka(b);var c=b.parentNode;c&&c.removeChild(b)},after:function(b,c){var d=b,e=b.parentNode;q(new S(c),function(b){e.insertBefore(b,d.nextSibling);d=b})},addClass:Sb,removeClass:Rb,toggleClass:function(b,c,d){M(d)&&(d=!Ya(b,c));(d?Sb:Rb)(b,c)},parent:function(b){return(b=b.parentNode)&&11!==b.nodeType?b:null},next:function(b){if(b.nextElementSibling)return b.nextElementSibling;
for(b=b.nextSibling;null!=b&&1!==b.nodeType;)b=b.nextSibling;return b},find:function(b,c){return b.getElementsByTagName(c)},clone:vb,triggerHandler:function(b,c,d){c=(ja(b,"events")||{})[c];d=d||{preventDefault:A,stopPropagation:A};q(c,function(c){c.call(b,d)})}},function(b,c){S.prototype[c]=function(c,e,g){for(var h,f=0;f<this.length;f++)h==s?(h=b(this[f],c,e,g),h!==s&&(h=w(h))):ub(h,b(this[f],c,e,g));return h==s?this:h};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});Ma.prototype=
{put:function(b,c){this[za(b)]=c},get:function(b){return this[za(b)]},remove:function(b){var c=this[b=za(b)];delete this[b];return c}};var Pc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Qc=/,/,Rc=/^\s*(_?)(\S+?)\1\s*$/,Oc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Na=P("$injector"),Hd=P("$animate"),Id=["$provide",function(b){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Hd("notcsel",c);this.$$selectors[c.substr(1)]=e;b.factory(e,d)};this.$get=["$timeout",function(b){return{enter:function(d,
e,g,h){g=g&&g[g.length-1];var f=e&&e[0]||g&&g.parentNode,k=g&&g.nextSibling||null;q(d,function(b){f.insertBefore(b,k)});h&&b(h,0,!1)},leave:function(d,e){d.remove();e&&b(e,0,!1)},move:function(b,c,g,h){this.enter(b,c,g,h)},addClass:function(d,e,g){e=H(e)?e:D(e)?e.join(" "):"";d.addClass(e);g&&b(g,0,!1)},removeClass:function(d,e,g){e=H(e)?e:D(e)?e.join(" "):"";d.removeClass(e);g&&b(g,0,!1)},enabled:A}}]}],ga=P("$compile");Xb.$inject=["$provide"];var Yc=/^(x[\:\-_]|data[\:\-_])/i,ed=Y.XMLHttpRequest||
function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(b){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw P("$httpBackend")("noxhr");},cc=P("$interpolate"),bc=/^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,gc=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hd={http:80,https:443,ftp:21},zb=P("$location");ic.prototype=Ab.prototype=hc.prototype={$$html5:!1,$$replace:!1,absUrl:cb("$$absUrl"),
url:function(b,c){if(M(b))return this.$$url;var d=gc.exec(b);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:cb("$$protocol"),host:cb("$$host"),port:cb("$$port"),path:jc("$$path",function(b){return"/"==b.charAt(0)?b:"/"+b}),search:function(b,c){switch(arguments.length){case 0:return this.$$search;case 1:if(H(b))this.$$search=Kb(b);else if(U(b))this.$$search=b;else throw zb("isrcharg");break;default:c==s||null==c?delete this.$$search[b]:
this.$$search[b]=c}this.$$compose();return this},hash:jc("$$hash",wa),replace:function(){this.$$replace=!0;return this}};var Ra=P("$parse"),Sa={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:A,"+":function(b,c,d,e){d=d(b,c);e=e(b,c);return z(d)?z(e)?d+e:d:z(e)?e:s},"-":function(b,c,d,e){d=d(b,c);e=e(b,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(b,c,d,e){return d(b,c)*e(b,c)},"/":function(b,c,d,e){return d(b,c)/e(b,c)},"%":function(b,c,d,e){return d(b,
c)%e(b,c)},"^":function(b,c,d,e){return d(b,c)^e(b,c)},"=":A,"===":function(b,c,d,e){return d(b,c)===e(b,c)},"!==":function(b,c,d,e){return d(b,c)!==e(b,c)},"==":function(b,c,d,e){return d(b,c)==e(b,c)},"!=":function(b,c,d,e){return d(b,c)!=e(b,c)},"<":function(b,c,d,e){return d(b,c)<e(b,c)},">":function(b,c,d,e){return d(b,c)>e(b,c)},"<=":function(b,c,d,e){return d(b,c)<=e(b,c)},">=":function(b,c,d,e){return d(b,c)>=e(b,c)},"&&":function(b,c,d,e){return d(b,c)&&e(b,c)},"||":function(b,c,d,e){return d(b,
c)||e(b,c)},"&":function(b,c,d,e){return d(b,c)&e(b,c)},"|":function(b,c,d,e){return e(b,c)(b,c,d(b,c))},"!":function(b,c,d){return!d(b,c)}},ld={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Bb={},Ca=P("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"};nc.$inject=["$provide"];oc.$inject=["$locale"];qc.$inject=["$locale"];var tc=".",Ed={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:eb("Month"),MMM:eb("Month",!0),MM:X("Month",2,1),M:X("Month",
1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:eb("Day"),EEE:eb("Day",!0),a:function(b,c){return 12>b.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(b){b=-1*b.getTimezoneOffset();return b=(0<=b?"+":"")+(Cb(Math[0<b?"floor":"ceil"](b/60),2)+Cb(Math.abs(b%60),2))}},Dd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Cd=
/^\d+$/;pc.$inject=["$locale"];var Ad=$(J),Bd=$(Ba);rc.$inject=["$parse"];var Jd=$({restrict:"E",compile:function(b,c){8>=Q&&(c.href||c.name||c.$set("href",""),b.append(T.createComment("IE fix")));return function(b,c){c.on("click",function(b){c.attr("href")||b.preventDefault()})}}}),Eb={};q($a,function(b,c){if("multiple"!=b){var d=la("ng-"+c);Eb[d]=function(){return{priority:100,compile:function(){return function(b,g,h){b.$watch(h[d],function(b){h.$set(c,!!b)})}}}}}});q(["src","srcset","href"],function(b){var c=
la("ng-"+b);Eb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(b,c),Q&&e.prop(b,g[b]))})}}}});var hb={$addControl:A,$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A};uc.$inject=["$element","$attrs","$scope"];var wc=function(b){return["$timeout",function(c){var d={name:"form",restrict:"E",controller:uc,compile:function(){return{pre:function(b,d,h,f){if(!h.action){var k=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1};vc(d[0],"submit",
k);d.on("$destroy",function(){c(function(){wb(d[0],"submit",k)},0,!1)})}var l=d.parent().controller("form"),m=h.name||h.ngForm;m&&db(b,m,f,m);if(l)d.on("$destroy",function(){l.$removeControl(f);m&&db(b,m,s,m);E(f,hb)})}}}};return b?E(da(d),{restrict:"EAC"}):d}]},Kd=wc(),Ld=wc(!0),Md=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Nd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,Od=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,xc={text:jb,number:function(b,c,d,e,
g,h){jb(b,c,d,e,g,h);e.$parsers.push(function(b){var c=ca(b);if(c||Od.test(b))return e.$setValidity("number",!0),""===b?null:c?b:parseFloat(b);e.$setValidity("number",!1);return s});e.$formatters.push(function(b){return ca(b)?"":""+b});if(d.min){var f=parseFloat(d.min);b=function(b){if(!ca(b)&&b<f)return e.$setValidity("min",!1),s;e.$setValidity("min",!0);return b};e.$parsers.push(b);e.$formatters.push(b)}if(d.max){var k=parseFloat(d.max);d=function(b){if(!ca(b)&&b>k)return e.$setValidity("max",!1),
s;e.$setValidity("max",!0);return b};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(b){if(ca(b)||lb(b))return e.$setValidity("number",!0),b;e.$setValidity("number",!1);return s})},url:function(b,c,d,e,g,h){jb(b,c,d,e,g,h);b=function(b){if(ca(b)||Md.test(b))return e.$setValidity("url",!0),b;e.$setValidity("url",!1);return s};e.$formatters.push(b);e.$parsers.push(b)},email:function(b,c,d,e,g,h){jb(b,c,d,e,g,h);b=function(b){if(ca(b)||Nd.test(b))return e.$setValidity("email",!0),
b;e.$setValidity("email",!1);return s};e.$formatters.push(b);e.$parsers.push(b)},radio:function(b,c,d,e){M(d.name)&&c.attr("name",Ta());c.on("click",function(){c[0].checked&&b.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(b,c,d,e){var g=d.ngTrueValue,h=d.ngFalseValue;H(g)||(g=!0);H(h)||(h=!1);c.on("click",function(){b.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=
e.$viewValue};e.$formatters.push(function(b){return b===g});e.$parsers.push(function(b){return b?g:h})},hidden:A,button:A,submit:A,reset:A},yc=["$browser","$sniffer",function(b,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,h){h&&(xc[J(g.type)]||xc.text)(d,e,g,h,c,b)}}}],gb="ng-valid",fb="ng-invalid",Da="ng-pristine",ib="ng-dirty",Pd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(b,c,d,e,g){function h(b,c){c=c?"-"+pb(c,"-"):"";e.removeClass((b?fb:gb)+c).addClass((b?
gb:fb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var f=g(d.ngModel),k=f.assign;if(!k)throw P("ngModel")("nonassign",d.ngModel,ia(e));this.$render=A;var l=e.inheritedData("$formController")||hb,m=0,p=this.$error={};e.addClass(Da);h(!0);this.$setValidity=function(b,c){p[b]!==!c&&(c?(p[b]&&m--,m||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=
!0,this.$valid=!1,m++),p[b]=!c,h(c,b),l.$setValidity(b,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(ib).addClass(Da)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,e.removeClass(Da).addClass(ib),l.$setDirty());q(this.$parsers,function(b){d=b(d)});this.$modelValue!==d&&(this.$modelValue=d,k(b,d),q(this.$viewChangeListeners,function(b){try{b()}catch(d){c(d)}}))};var n=this;b.$watch(function(){var c=f(b);if(n.$modelValue!==
c){var d=n.$formatters,e=d.length;for(n.$modelValue=c;e--;)c=d[e](c);n.$viewValue!==c&&(n.$viewValue=c,n.$render())}})}],Qd=function(){return{require:["ngModel","^?form"],controller:Pd,link:function(b,c,d,e){var g=e[0],h=e[1]||hb;h.$addControl(g);c.on("$destroy",function(){h.$removeControl(g)})}}},Rd=$({require:"ngModel",link:function(b,c,d,e){e.$viewChangeListeners.push(function(){b.$eval(d.ngChange)})}}),zc=function(){return{require:"?ngModel",link:function(b,c,d,e){if(e){d.required=!0;var g=function(b){if(d.required&&
(ca(b)||!1===b))e.$setValidity("required",!1);else return e.$setValidity("required",!0),b};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Sd=function(){return{require:"ngModel",link:function(b,c,d,e){var g=(b=/\/(.*)\//.exec(d.ngList))&&RegExp(b[1])||d.ngList||",";e.$parsers.push(function(b){var c=[];b&&q(b.split(g),function(b){b&&c.push(aa(b))});return c});e.$formatters.push(function(b){return D(b)?b.join(", "):s})}}},Td=/^(true|false|\d+)$/,Ud=
function(){return{priority:100,compile:function(b,c){return Td.test(c.ngValue)?function(b,c,g){g.$set("value",b.$eval(g.ngValue))}:function(b,c,g){b.$watch(g.ngValue,function(b){g.$set("value",b)})}}}},Vd=sa(function(b,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);b.$watch(d.ngBind,function(b){c.text(b==s?"":b)})}),Wd=["$interpolate",function(b){return function(c,d,e){c=b(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(b){d.text(b)})}}],
Xd=["$sce",function(b){return function(c,d,e){d.addClass("ng-binding").data("$binding",e.ngBindHtml);c.$watch(e.ngBindHtml,function(c){d.html(b.getTrustedHtml(c)||"")})}}],Yd=Db("",!0),Zd=Db("Odd",0),$d=Db("Even",1),ae=sa({compile:function(b,c){c.$set("ngCloak",s);b.removeClass("ng-cloak")}}),be=[function(){return{scope:!0,controller:"@"}}],ce=["$sniffer",function(b){return{priority:1E3,compile:function(){b.csp=!0}}}],Ac={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur".split(" "),
function(b){var c=la("ng-"+b);Ac[c]=["$parse",function(d){return function(e,g,h){var f=d(h[c]);g.on(J(b),function(b){e.$apply(function(){f(e,{$event:b})})})}}]});var de=["$animate",function(b){return{transclude:"element",priority:1E3,terminal:!0,restrict:"A",compile:function(c,d,e){return function(c,d,f){var k,l;c.$watch(f.ngIf,function(f){k&&(b.leave(k),k=s);l&&(l.$destroy(),l=s);Ga(f)&&(l=c.$new(),e(l,function(c){k=c;b.enter(c,d.parent(),d)}))})}}}}],ee=["$http","$templateCache","$anchorScroll",
"$compile","$animate","$sce",function(b,c,d,e,g,h){return{restrict:"ECA",terminal:!0,transclude:"element",compile:function(f,k,l){var m=k.ngInclude||k.src,p=k.onload||"",n=k.autoscroll;return function(f,k){var q=0,s,w,A=function(){s&&(s.$destroy(),s=null);w&&(g.leave(w),w=null)};f.$watch(h.parseAsResourceUrl(m),function(h){var m=++q;h?(b.get(h,{cache:c}).success(function(b){if(m===q){var c=f.$new();l(c,function(h){A();s=c;w=h;w.html(b);g.enter(w,null,k);e(w.contents())(s);!z(n)||n&&!f.$eval(n)||d();
s.$emit("$includeContentLoaded");f.$eval(p)})}}).error(function(){m===q&&A()}),f.$emit("$includeContentRequested")):A()})}}}}],fe=sa({compile:function(){return{pre:function(b,c,d){b.$eval(d.ngInit)}}}}),ge=sa({terminal:!0,priority:1E3}),he=["$locale","$interpolate",function(b,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,h){var f=h.count,k=h.$attr.when&&g.attr(h.$attr.when),l=h.offset||0,m=e.$eval(k)||{},p={},n=c.startSymbol(),t=c.endSymbol(),r=/^when(Minus)?(.+)$/;q(h,function(b,c){r.test(c)&&
(m[J(c.replace("when","").replace("Minus","-"))]=g.attr(h.$attr[c]))});q(m,function(b,e){p[e]=c(b.replace(d,n+f+"-"+l+t))});e.$watch(function(){var c=parseFloat(e.$eval(f));if(isNaN(c))return"";c in m||(c=b.pluralCat(c-l));return p[c](e,g,!0)},function(b){g.text(b)})}}}],ie=["$parse","$animate",function(b,c){var d=P("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,compile:function(e,g,h){return function(e,g,l){var m=l.ngRepeat,p=m.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
n,t,r,s,x,z,A,u={$id:za};if(!p)throw d("iexp",m);l=p[1];x=p[2];(p=p[4])?(n=b(p),t=function(b,c,d){A&&(u[A]=b);u[z]=c;u.$index=d;return n(e,u)}):(r=function(b,c){return za(c)},s=function(b){return b});p=l.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!p)throw d("iidexp",l);z=p[3]||p[1];A=p[2];var v={};e.$watchCollection(x,function(b){var l,n,p=g[0],u,x={},H,G,D,E,L,C,K=[];if(kb(b))L=b,t=t||r;else{t=t||s;L=[];for(D in b)b.hasOwnProperty(D)&&"$"!=D.charAt(0)&&L.push(D);L.sort()}H=L.length;
n=K.length=L.length;for(l=0;l<n;l++)if(D=b===L?l:L[l],E=b[D],u=t(D,E,l),v.hasOwnProperty(u))C=v[u],delete v[u],x[u]=C,K[l]=C;else{if(x.hasOwnProperty(u))throw q(K,function(b){b&&b.startNode&&(v[b.id]=b)}),d("dupes",m,u);K[l]={id:u};x[u]=!1}for(D in v)v.hasOwnProperty(D)&&(C=v[D],c.leave(C.elements),q(C.elements,function(b){b.$$NG_REMOVED=!0}),C.scope.$destroy());l=0;for(n=L.length;l<n;l++){D=b===L?l:L[l];E=b[D];C=K[l];if(C.startNode){G=C.scope;u=p;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);C.startNode!=
u&&c.move(C.elements,null,w(p));p=C.endNode}else G=e.$new();G[z]=E;A&&(G[A]=D);G.$index=l;G.$first=0===l;G.$last=l===H-1;G.$middle=!(G.$first||G.$last);G.$odd=!(G.$even=0==l%2);C.startNode||h(G,function(b){c.enter(b,null,w(p));p=b;C.scope=G;C.startNode=b[0];C.elements=b;C.endNode=b[b.length-1];x[C.id]=C})}v=x})}}}}],je=["$animate",function(b){return function(c,d,e){c.$watch(e.ngShow,function(c){b[Ga(c)?"removeClass":"addClass"](d,"ng-hide")})}}],ke=["$animate",function(b){return function(c,d,e){c.$watch(e.ngHide,
function(c){b[Ga(c)?"addClass":"removeClass"](d,"ng-hide")})}}],le=sa(function(b,c,d){b.$watch(d.ngStyle,function(b,d){d&&b!==d&&q(d,function(b,d){c.css(d,"")});b&&c.css(b)},!0)}),me=["$animate",function(b){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var h,f,k=[];c.$watch(e.ngSwitch||e.on,function(d){for(var m=0,p=k.length;m<p;m++)k[m].$destroy(),b.leave(f[m]);f=[];k=[];if(h=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(h,function(d){var e=
c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;f.push(c);b.enter(c,e.parent(),e)})})})}}}],ne=sa({transclude:"element",priority:500,require:"^ngSwitch",compile:function(b,c,d){return function(b,g,h,f){f.cases["!"+c.ngSwitchWhen]=f.cases["!"+c.ngSwitchWhen]||[];f.cases["!"+c.ngSwitchWhen].push({transclude:d,element:g})}}}),oe=sa({transclude:"element",priority:500,require:"^ngSwitch",compile:function(b,c,d){return function(b,c,h,f){f.cases["?"]=f.cases["?"]||[];f.cases["?"].push({transclude:d,
element:c})}}}),pe=sa({controller:["$transclude",function(b){this.$transclude=b}],link:function(b,c,d,e){e.$transclude(function(b){c.html("");c.append(b)})}}),qe=["$templateCache",function(b){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&b.put(d.id,c[0].text)}}}],re=$({terminal:!0}),se=["$compile","$parse",function(b,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(b,c,d){var k=this,l={},m=e,p;k.databound=d.ngModel;k.init=function(b,c,d){m=b;p=d};k.addOption=function(c){l[c]=!0;m.$viewValue==c&&(b.val(c),p.parent()&&p.remove())};k.removeOption=function(b){this.hasOption(b)&&(delete l[b],m.$viewValue==b&&this.renderUnknownOption(b))};k.renderUnknownOption=function(c){c="? "+za(c)+" ?";p.val(c);b.prepend(p);b.val(c);p.prop("selected",!0)};k.hasOption=
function(b){return l.hasOwnProperty(b)};c.$on("$destroy",function(){k.renderUnknownOption=A})}],link:function(e,h,f,k){function l(b,c,d,e){d.$render=function(){var b=d.$viewValue;e.hasOption(b)?(v.parent()&&v.remove(),c.val(b),""===b&&A.prop("selected",!0)):M(b)&&A?c.val(""):e.renderUnknownOption(b)};c.on("change",function(){b.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function m(b,c,d){var e;d.$render=function(){var b=new Ma(d.$viewValue);q(c.find("option"),function(c){c.selected=
z(b.get(c.value))})};b.$watch(function(){xa(e,d.$viewValue)||(e=da(d.$viewValue),d.$render())});c.on("change",function(){b.$apply(function(){var b=[];q(c.find("option"),function(c){c.selected&&b.push(c.value)});d.$setViewValue(b)})})}function p(e,f,g){function h(){var b={"":[]},c=[""],d,k,w,z,y;w=g.$modelValue;z=t(e)||[];var E=n?Fb(z):z,I,B,F;B={};y=!1;var G,J;if(r)if(v&&D(w))for(y=new Ma([]),k=0;k<w.length;k++)B[m]=w[k],y.put(v(e,B),w[k]);else y=new Ma(w);for(F=0;I=E.length,F<I;F++)B[m]=z[n?B[n]=
E[F]:F],d=p(e,B)||"",(k=b[d])||(k=b[d]=[],c.push(d)),r?d=y.remove(v?v(e,B):q(e,B))!=s:(v?(d={},d[m]=w,d=v(e,d)===v(e,B)):d=w===q(e,B),y=y||d),G=l(e,B),G=G===s?"":G,k.push({id:v?v(e,B):n?E[F]:F,label:G,selected:d});r||(x||null===w?b[""].unshift({id:"",label:"",selected:!y}):y||b[""].unshift({id:"?",label:"",selected:!0}));B=0;for(E=c.length;B<E;B++){d=c[B];k=b[d];A.length<=B?(w={element:u.clone().attr("label",d),label:k.label},z=[w],A.push(z),f.append(w.element)):(z=A[B],w=z[0],w.label!=d&&w.element.attr("label",
w.label=d));G=null;F=0;for(I=k.length;F<I;F++)d=k[F],(y=z[F+1])?(G=y.element,y.label!==d.label&&G.text(y.label=d.label),y.id!==d.id&&G.val(y.id=d.id),G[0].selected!==d.selected&&G.prop("selected",y.selected=d.selected)):(""===d.id&&x?J=x:(J=H.clone()).val(d.id).attr("selected",d.selected).text(d.label),z.push({element:J,label:d.label,id:d.id,selected:d.selected}),G?G.after(J):w.element.append(J),G=J);for(F++;z.length>F;)z.pop().element.remove()}for(;A.length>B;)A.pop()[0].element.remove()}var k;if(!(k=
y.match(d)))throw P("ngOptions")("iexp",y,ia(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),t=c(k[7]),v=k[8]?c(k[8]):null,A=[[{element:f,label:""}]];x&&(b(x)(e),x.removeClass("ng-scope"),x.remove());f.html("");f.on("change",function(){e.$apply(function(){var b,c=t(e)||[],d={},h,k,l,p,u,x;if(r)for(k=[],p=0,x=A.length;p<x;p++)for(b=A[p],l=1,u=b.length;l<u;l++){if((h=b[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(v)for(var w=0;w<c.length&&(d[m]=c[w],v(e,d)!=h);w++);else d[m]=
c[h];k.push(q(e,d))}}else if(h=f.val(),"?"==h)k=s;else if(""==h)k=null;else if(v)for(w=0;w<c.length;w++){if(d[m]=c[w],v(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(k[1]){var n=k[0],t=k[1],r=f.multiple,y=f.ngOptions,x=!1,A,H=w(T.createElement("option")),u=w(T.createElement("optgroup")),v=H.clone();k=0;for(var E=h.children(),I=E.length;k<I;k++)if(""==E[k].value){A=x=E.eq(k);break}n.init(t,x,v);if(r&&(f.required||f.ngRequired)){var B=
function(b){t.$setValidity("required",!f.required||b&&b.length);return b};t.$parsers.push(B);t.$formatters.unshift(B);f.$observe("required",function(){B(t.$viewValue)})}y?p(e,h,t):r?m(e,h,t):l(e,h,t,n)}}}}],te=["$interpolate",function(b){var c={addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(M(e.value)){var g=b(d.text(),!0);g||e.$set("value",d.text())}return function(b,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&
m.databound?d.prop("selected",!1):m=c;g?b.$watch(g,function(b,c){e.$set("value",b);b!==c&&m.removeOption(c);m.addOption(b)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],ue=$({restrict:"E",terminal:!0});(ya=Y.jQuery)?(w=ya,E(ya.fn,{scope:Pa.scope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),sb("remove",!0,!0,!1),sb("empty",!1,!1,!1),sb("html",!1,!1,!0)):w=S;Ha.element=w;(function(b){E(b,{bootstrap:Mb,copy:da,extend:E,equals:xa,element:w,
forEach:q,injector:Nb,noop:A,bind:nb,toJson:oa,fromJson:Ib,identity:wa,isUndefined:M,isDefined:z,isString:H,isFunction:B,isObject:U,isNumber:lb,isElement:Dc,isArray:D,$$minErr:P,version:Gd,isDate:Ea,lowercase:J,uppercase:Ba,callbacks:{counter:0}});Oa=Jc(Y);try{Oa("ngLocale")}catch(c){Oa("ngLocale",[]).provider("$locale",gd)}Oa("ng",["ngLocale"],["$provide",function(b){b.provider("$compile",Xb).directive({a:Jd,input:yc,textarea:yc,form:Kd,script:qe,select:se,style:ue,option:te,ngBind:Vd,ngBindHtml:Xd,
ngBindTemplate:Wd,ngClass:Yd,ngClassEven:$d,ngClassOdd:Zd,ngCsp:ce,ngCloak:ae,ngController:be,ngForm:Ld,ngHide:ke,ngIf:de,ngInclude:ee,ngInit:fe,ngNonBindable:ge,ngPluralize:he,ngRepeat:ie,ngShow:je,ngStyle:le,ngSwitch:me,ngSwitchWhen:ne,ngSwitchDefault:oe,ngOptions:re,ngTransclude:pe,ngModel:Qd,ngList:Sd,ngChange:Rd,required:zc,ngRequired:zc,ngValue:Ud}).directive(Eb).directive(Ac);b.provider({$anchorScroll:Sc,$animate:Id,$browser:Vc,$cacheFactory:Wc,$controller:Zc,$document:$c,$exceptionHandler:ad,
$filter:nc,$interpolate:fd,$http:bd,$httpBackend:cd,$location:id,$log:jd,$parse:nd,$rootScope:qd,$q:od,$sce:sd,$sceDelegate:rd,$sniffer:td,$templateCache:Xc,$timeout:ud,$window:wd,$$urlUtils:vd})}])})(Ha);w(T).ready(function(){Hc(T,Mb)})})(window,document);angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
/*
//@ sourceMappingURL=angular.min.js.map
*/

/**
 * @license AngularJS v1.2.0-rc.3
 * (c) 2010-2012 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

var $resourceMinErr = angular.$$minErr('$resource');

/**
 * @ngdoc overview
 * @name ngResource
 * @description
 *
 * # ngResource
 *
 * `ngResource` is the name of the optional Angular module that adds support for interacting with
 * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.
 * `ngResource` provides the {@link ngResource.$resource `$resource`} service.
 *
 * {@installModule resource}
 *
 * See {@link ngResource.$resource `$resource`} for usage.
 */

/**
 * @ngdoc object
 * @name ngResource.$resource
 * @requires $http
 *
 * @description
 * A factory which creates a resource object that lets you interact with
 * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.
 *
 * The returned resource object has action methods which provide high-level behaviors without
 * the need to interact with the low level {@link ng.$http $http} service.
 *
 * Requires the {@link ngResource `ngResource`} module to be installed.
 *
 * @param {string} url A parametrized URL template with parameters prefixed by `:` as in
 *   `/user/:username`. If you are using a URL with a port number (e.g.
 *   `http://example.com:8080/api`), it will be respected.
 *
 *   If you are using a url with a suffix, just add the suffix, like this:
 *   `$resource('http://example.com/resource.json')` or `$resource('http://example.com/:id.json')`
 *   or even `$resource('http://example.com/resource/:resource_id.:format')`
 *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be
 *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you
 *   can escape it with `/\.`.
 *
 * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in
 *   `actions` methods. If any of the parameter value is a function, it will be executed every time
 *   when a param value needs to be obtained for a request (unless the param was overridden).
 *
 *   Each key value in the parameter object is first bound to url template if present and then any
 *   excess keys are appended to the url search query after the `?`.
 *
 *   Given a template `/path/:verb` and parameter `{verb:'greet', salutation:'Hello'}` results in
 *   URL `/path/greet?salutation=Hello`.
 *
 *   If the parameter value is prefixed with `@` then the value of that parameter is extracted from
 *   the data object (useful for non-GET operations).
 *
 * @param {Object.<Object>=} actions Hash with declaration of custom action that should extend the
 *   default set of resource actions. The declaration should be created in the format of {@link
 *   ng.$http#Parameters $http.config}:
 *
 *       {action1: {method:?, params:?, isArray:?, headers:?, ...},
 *        action2: {method:?, params:?, isArray:?, headers:?, ...},
 *        ...}
 *
 *   Where:
 *
 *   - **`action`** – {string} – The name of action. This name becomes the name of the method on your
 *     resource object.
 *   - **`method`** – {string} – HTTP request method. Valid methods are: `GET`, `POST`, `PUT`, `DELETE`,
 *     and `JSONP`.
 *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of the
 *     parameter value is a function, it will be executed every time when a param value needs to be
 *     obtained for a request (unless the param was overridden).
 *   - **`url`** – {string} – action specific `url` override. The url templating is supported just like
 *     for the resource-level urls.
 *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array, see
 *     `returns` section.
 *   - **`transformRequest`** – `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     request body and headers and returns its transformed (typically serialized) version.
 *   - **`transformResponse`** – `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     response body and headers and returns its transformed (typically deserialized) version.
 *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the
 *     GET request, otherwise if a cache instance built with
 *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for
 *     caching.
 *   - **`timeout`** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise} that
 *     should abort the request when resolved.
 *   - **`withCredentials`** - `{boolean}` - whether to set the `withCredentials` flag on the
 *     XHR object. See {@link https://developer.mozilla.org/en/http_access_control#section_5
 *     requests with credentials} for more information.
 *   - **`responseType`** - `{string}` - see {@link
 *     https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType requestType}.
 *   - **`interceptor`** - `{Object=}` - The interceptor object has two optional methods -
 *     `response` and `responseError`. Both `response` and `responseError` interceptors get called
 *     with `http response` object. See {@link ng.$http $http interceptors}.
 *
 * @returns {Object} A resource "class" object with methods for the default set of resource actions
 *   optionally extended with custom `actions`. The default set contains these actions:
 *
 *       { 'get':    {method:'GET'},
 *         'save':   {method:'POST'},
 *         'query':  {method:'GET', isArray:true},
 *         'remove': {method:'DELETE'},
 *         'delete': {method:'DELETE'} };
 *
 *   Calling these methods invoke an {@link ng.$http} with the specified http method,
 *   destination and parameters. When the data is returned from the server then the object is an
 *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it
 *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,
 *   read, update, delete) on server-side data like this:
 *   <pre>
        var User = $resource('/user/:userId', {userId:'@id'});
        var user = User.get({userId:123}, function() {
          user.abc = true;
          user.$save();
        });
     </pre>
 *
 *   It is important to realize that invoking a $resource object method immediately returns an
 *   empty reference (object or array depending on `isArray`). Once the data is returned from the
 *   server the existing reference is populated with the actual data. This is a useful trick since
 *   usually the resource is assigned to a model which is then rendered by the view. Having an empty
 *   object results in no rendering, once the data arrives from the server then the object is
 *   populated with the data and the view automatically re-renders itself showing the new data. This
 *   means that in most case one never has to write a callback function for the action methods.
 *
 *   The action methods on the class object or instance object can be invoked with the following
 *   parameters:
 *
 *   - HTTP GET "class" actions: `Resource.action([parameters], [success], [error])`
 *   - non-GET "class" actions: `Resource.action([parameters], postData, [success], [error])`
 *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`
 *
 *   Success callback is called with (value, responseHeaders) arguments. Error callback is called
 *   with (httpResponse) argument.
 *
 *   Class actions return empty instance (with additional properties below).
 *   Instance actions return promise of the action.
 *
 *   The Resource instances and collection have these additional properties:
 *
 *   - `$promise`: the {@link ng.$q promise} of the original server interaction that created this
 *     instance or collection.
 *
 *     On success, the promise is resolved with the same resource instance or collection object,
 *     updated with data from server. This makes it easy to use in
 *     {@link ngRoute.$routeProvider resolve section of $routeProvider.when()} to defer view rendering
 *     until the resource(s) are loaded.
 *
 *     On failure, the promise is resolved with the {@link ng.$http http response} object,
 *     without the `resource` property.
 *
 *   - `$resolved`: `true` after first server interaction is completed (either with success or rejection),
 *     `false` before that. Knowing if the Resource has been resolved is useful in data-binding.
 *
 * @example
 *
 * # Credit card resource
 *
 * <pre>
     // Define CreditCard class
     var CreditCard = $resource('/user/:userId/card/:cardId',
      {userId:123, cardId:'@id'}, {
       charge: {method:'POST', params:{charge:true}}
      });

     // We can retrieve a collection from the server
     var cards = CreditCard.query(function() {
       // GET: /user/123/card
       // server returns: [ {id:456, number:'1234', name:'Smith'} ];

       var card = cards[0];
       // each item is an instance of CreditCard
       expect(card instanceof CreditCard).toEqual(true);
       card.name = "J. Smith";
       // non GET methods are mapped onto the instances
       card.$save();
       // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
       // server returns: {id:456, number:'1234', name: 'J. Smith'};

       // our custom method is mapped as well.
       card.$charge({amount:9.99});
       // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
     });

     // we can create an instance as well
     var newCard = new CreditCard({number:'0123'});
     newCard.name = "Mike Smith";
     newCard.$save();
     // POST: /user/123/card {number:'0123', name:'Mike Smith'}
     // server returns: {id:789, number:'01234', name: 'Mike Smith'};
     expect(newCard.id).toEqual(789);
 * </pre>
 *
 * The object returned from this function execution is a resource "class" which has "static" method
 * for each action in the definition.
 *
 * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and `headers`.
 * When the data is returned from the server then the object is an instance of the resource type and
 * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD
 * operations (create, read, update, delete) on server-side data.

   <pre>
     var User = $resource('/user/:userId', {userId:'@id'});
     var user = User.get({userId:123}, function() {
       user.abc = true;
       user.$save();
     });
   </pre>
 *
 * It's worth noting that the success callback for `get`, `query` and other method gets passed
 * in the response that came from the server as well as $http header getter function, so one
 * could rewrite the above example and get access to http headers as:
 *
   <pre>
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(u, getResponseHeaders){
       u.abc = true;
       u.$save(function(u, putResponseHeaders) {
         //u => saved user object
         //putResponseHeaders => $http header getter
       });
     });
   </pre>

 * # Buzz client

   Let's look at what a buzz client created with the `$resource` service looks like:
    <doc:example>
      <doc:source jsfiddle="false">
       <script>
         function BuzzController($resource) {
           this.userId = 'googlebuzz';
           this.Activity = $resource(
             'https://www.googleapis.com/buzz/v1/activities/:userId/:visibility/:activityId/:comments',
             {alt:'json', callback:'JSON_CALLBACK'},
             {get:{method:'JSONP', params:{visibility:'@self'}}, replies: {method:'JSONP', params:{visibility:'@self', comments:'@comments'}}}
           );
         }

         BuzzController.prototype = {
           fetch: function() {
             this.activities = this.Activity.get({userId:this.userId});
           },
           expandReplies: function(activity) {
             activity.replies = this.Activity.replies({userId:this.userId, activityId:activity.id});
           }
         };
         BuzzController.$inject = ['$resource'];
       </script>

       <div ng-controller="BuzzController">
         <input ng-model="userId"/>
         <button ng-click="fetch()">fetch</button>
         <hr/>
         <div ng-repeat="item in activities.data.items">
           <h1 style="font-size: 15px;">
             <img src="{{item.actor.thumbnailUrl}}" style="max-height:30px;max-width:30px;"/>
             <a href="{{item.actor.profileUrl}}">{{item.actor.name}}</a>
             <a href ng-click="expandReplies(item)" style="float: right;">Expand replies: {{item.links.replies[0].count}}</a>
           </h1>
           {{item.object.content | html}}
           <div ng-repeat="reply in item.replies.data.items" style="margin-left: 20px;">
             <img src="{{reply.actor.thumbnailUrl}}" style="max-height:30px;max-width:30px;"/>
             <a href="{{reply.actor.profileUrl}}">{{reply.actor.name}}</a>: {{reply.content | html}}
           </div>
         </div>
       </div>
      </doc:source>
      <doc:scenario>
      </doc:scenario>
    </doc:example>
 */
angular.module('ngResource', ['ng']).
  factory('$resource', ['$http', '$parse', '$q', function($http, $parse, $q) {
    var DEFAULT_ACTIONS = {
      'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    };
    var noop = angular.noop,
        forEach = angular.forEach,
        extend = angular.extend,
        copy = angular.copy,
        isFunction = angular.isFunction,
        getter = function(obj, path) {
          return $parse(path)(obj);
        };

    /**
     * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
     * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
     * segments:
     *    segment       = *pchar
     *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
     *    pct-encoded   = "%" HEXDIG HEXDIG
     *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
     *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
     *                     / "*" / "+" / "," / ";" / "="
     */
    function encodeUriSegment(val) {
      return encodeUriQuery(val, true).
        replace(/%26/gi, '&').
        replace(/%3D/gi, '=').
        replace(/%2B/gi, '+');
    }


    /**
     * This method is intended for encoding *key* or *value* parts of query component. We need a custom
     * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
     * encoded per http://tools.ietf.org/html/rfc3986:
     *    query       = *( pchar / "/" / "?" )
     *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
     *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
     *    pct-encoded   = "%" HEXDIG HEXDIG
     *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
     *                     / "*" / "+" / "," / ";" / "="
     */
    function encodeUriQuery(val, pctEncodeSpaces) {
      return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
    }

    function Route(template, defaults) {
      this.template = template;
      this.defaults = defaults || {};
      this.urlParams = {};
    }

    Route.prototype = {
      setUrlParams: function(config, params, actionUrl) {
        var self = this,
            url = actionUrl || self.template,
            val,
            encodedVal;

        var urlParams = self.urlParams = {};
        forEach(url.split(/\W/), function(param){
          if (param === 'hasOwnProperty') {
            throw $resourceMinErr('badname', "hasOwnProperty is not a valid parameter name.");
          }
          if (!(new RegExp("^\\d+$").test(param)) && param && (new RegExp("(^|[^\\\\]):" + param + "(\\W|$)").test(url))) {
              urlParams[param] = true;
          }
        });
        url = url.replace(/\\:/g, ':');

        params = params || {};
        forEach(self.urlParams, function(_, urlParam){
          val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
          if (angular.isDefined(val) && val !== null) {
            encodedVal = encodeUriSegment(val);
            url = url.replace(new RegExp(":" + urlParam + "(\\W|$)", "g"), encodedVal + "$1");
          } else {
            url = url.replace(new RegExp("(\/?):" + urlParam + "(\\W|$)", "g"), function(match,
                leadingSlashes, tail) {
              if (tail.charAt(0) == '/') {
                return tail;
              } else {
                return leadingSlashes + tail;
              }
            });
          }
        });

        // strip trailing slashes and set the url
        url = url.replace(/\/+$/, '');
        // then replace collapse `/.` if found in the last URL path segment before the query
        // E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`
        url = url.replace(/\/\.(?=\w+($|\?))/, '.');
        // replace escaped `/\.` with `/.`
        config.url = url.replace(/\/\\\./, '/.');


        // set params - delegate param encoding to $http
        forEach(params, function(value, key){
          if (!self.urlParams[key]) {
            config.params = config.params || {};
            config.params[key] = value;
          }
        });
      }
    };


    function ResourceFactory(url, paramDefaults, actions) {
      var route = new Route(url);

      actions = extend({}, DEFAULT_ACTIONS, actions);

      function extractParams(data, actionParams){
        var ids = {};
        actionParams = extend({}, paramDefaults, actionParams);
        forEach(actionParams, function(value, key){
          if (isFunction(value)) { value = value(); }
          ids[key] = value && value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
        });
        return ids;
      }

      function defaultResponseInterceptor(response) {
        return response.resource;
      }

      function Resource(value){
        copy(value || {}, this);
      }

      forEach(actions, function(action, name) {
        var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method);

        Resource[name] = function(a1, a2, a3, a4) {
          var params = {}, data, success, error;

          switch(arguments.length) {
          case 4:
            error = a4;
            success = a3;
            //fallthrough
          case 3:
          case 2:
            if (isFunction(a2)) {
              if (isFunction(a1)) {
                success = a1;
                error = a2;
                break;
              }

              success = a2;
              error = a3;
              //fallthrough
            } else {
              params = a1;
              data = a2;
              success = a3;
              break;
            }
          case 1:
            if (isFunction(a1)) success = a1;
            else if (hasBody) data = a1;
            else params = a1;
            break;
          case 0: break;
          default:
            throw $resourceMinErr('badargs',
              "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length);
          }

          var isInstanceCall = data instanceof Resource;
          var value = isInstanceCall ? data : (action.isArray ? [] : new Resource(data));
          var httpConfig = {};
          var responseInterceptor = action.interceptor && action.interceptor.response || defaultResponseInterceptor;
          var responseErrorInterceptor = action.interceptor && action.interceptor.responseError || undefined;

          forEach(action, function(value, key) {
            if (key != 'params' && key != 'isArray' && key != 'interceptor') {
              httpConfig[key] = copy(value);
            }
          });

          if (hasBody) httpConfig.data = data;
          route.setUrlParams(httpConfig, extend({}, extractParams(data, action.params || {}), params), action.url);

          var promise = $http(httpConfig).then(function(response) {
            var data = response.data,
                promise = value.$promise;

            if (data) {
              if ( angular.isArray(data) != !!action.isArray ) {
                throw $resourceMinErr('badcfg', 'Error in resource configuration. Expected response' +
                  ' to contain an {0} but got an {1}',
                  action.isArray?'array':'object', angular.isArray(data)?'array':'object');
              }
              if (action.isArray) {
                value.length = 0;
                forEach(data, function(item) {
                  value.push(new Resource(item));
                });
              } else {
                copy(data, value);
                value.$promise = promise;
              }
            }

            value.$resolved = true;

            response.resource = value;

            return response;
          }, function(response) {
            value.$resolved = true;

            (error||noop)(response);

            return $q.reject(response);
          });

          promise = promise.then(
              function(response) {
                var value = responseInterceptor(response);
                (success||noop)(value, response.headers);
                return value;
              },
              responseErrorInterceptor);

          if (!isInstanceCall) {
            // we are creating instance / collection
            // - set the initial promise
            // - return the instance / collection
            value.$promise = promise;
            value.$resolved = false;

            return value;
          }

          // instance call
          return promise;
        };


        Resource.prototype['$' + name] = function(params, success, error) {
          if (isFunction(params)) {
            error = success; success = params; params = {};
          }
          var result = Resource[name](params, this, success, error);
          return result.$promise || result;
        };
      });

      Resource.bind = function(additionalParamDefaults){
        return ResourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
      };

      return Resource;
    }

    return ResourceFactory;
  }]);


})(window, window.angular);

/**
 * @license AngularJS v1.2.0-rc.3
 * (c) 2010-2012 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * {@installModule route}
 *
 */

var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider);

/**
 * @ngdoc object
 * @name ngRoute.$routeProvider
 * @function
 *
 * @description
 *
 * Used for configuring routes. See {@link ngRoute.$route $route} for an example.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider(){
  function inherit(parent, extra) {
    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name ngRoute.$routeProvider#when
   * @methodOf ngRoute.$routeProvider
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *      * `path` can contain named groups starting with a colon (`:name`). All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *      * `path` can contain named groups starting with a colon and ending with a star (`:name*`).
   *        All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *      * `path` can contain optional named groups with a question mark (`:name?`).
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashs/edit` and extract:
   *
   *      * `color: brown`
   *      * `largecode: code/with/slashs`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with newly
   *      created scope or the name of a {@link angular.Module#controller registered controller}
   *      if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, they will be
   *      resolved and converted to a value before the controller is instantiated and the
   *      `$routeChangeSuccess` event is fired. The map object is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link api/AUTO.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is resolved
   *        before its value is injected into the controller. Be aware that `ngRoute.$routeParams` will
   *        still refer to the previous route within these resolve functions.  Use `$route.current.params`
   *        to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = angular.extend(
      {reloadOnSearch: true},
      route,
      path && pathRegExp(path, route)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
            ? path.substr(0, path.length-1)
            : path +'/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, route)
      );
    }

    return this;
  };

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?|\*])?/g, function(_, slash, key, option){
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name ngRoute.$routeProvider#otherwise
   * @methodOf ngRoute.$routeProvider
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope', '$location', '$routeParams', '$q', '$injector', '$http', '$templateCache', '$sce',
      function( $rootScope,   $location,   $routeParams,   $q,   $injector,   $http,   $templateCache,   $sce) {

    /**
     * @ngdoc object
     * @name ngRoute.$route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Array.<Object>} routes Array of all configured routes.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the {@link ngRoute.directive:ngView `ngView`}
     * directive and the {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
       This example shows how changing the URL hash causes the `$route` to match a route against the
       URL, and the `ngView` pulls in the partial.

       Note that this example is using {@link ng.directive:script inlined templates}
       to get it working on jsfiddle as well.

     <example module="ngView" deps="angular-route.js">
       <file name="index.html">
         <div ng-controller="MainCntl">
           Choose:
           <a href="Book/Moby">Moby</a> |
           <a href="Book/Moby/ch/1">Moby: Ch1</a> |
           <a href="Book/Gatsby">Gatsby</a> |
           <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
           <a href="Book/Scarlet">Scarlet Letter</a><br/>

           <div ng-view></div>
           <hr />

           <pre>$location.path() = {{$location.path()}}</pre>
           <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
           <pre>$route.current.params = {{$route.current.params}}</pre>
           <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
           <pre>$routeParams = {{$routeParams}}</pre>
         </div>
       </file>

       <file name="book.html">
         controller: {{name}}<br />
         Book Id: {{params.bookId}}<br />
       </file>

       <file name="chapter.html">
         controller: {{name}}<br />
         Book Id: {{params.bookId}}<br />
         Chapter Id: {{params.chapterId}}
       </file>

       <file name="script.js">
         angular.module('ngView', ['ngRoute']).config(function($routeProvider, $locationProvider) {
           $routeProvider.when('/Book/:bookId', {
             templateUrl: 'book.html',
             controller: BookCntl,
             resolve: {
               // I will cause a 1 second delay
               delay: function($q, $timeout) {
                 var delay = $q.defer();
                 $timeout(delay.resolve, 1000);
                 return delay.promise;
               }
             }
           });
           $routeProvider.when('/Book/:bookId/ch/:chapterId', {
             templateUrl: 'chapter.html',
             controller: ChapterCntl
           });

           // configure html5 to get links working on jsfiddle
           $locationProvider.html5Mode(true);
         });

         function MainCntl($scope, $route, $routeParams, $location) {
           $scope.$route = $route;
           $scope.$location = $location;
           $scope.$routeParams = $routeParams;
         }

         function BookCntl($scope, $routeParams) {
           $scope.name = "BookCntl";
           $scope.params = $routeParams;
         }

         function ChapterCntl($scope, $routeParams) {
           $scope.name = "ChapterCntl";
           $scope.params = $routeParams;
         }
       </file>

       <file name="scenario.js">
         it('should load and compile correct template', function() {
           element('a:contains("Moby: Ch1")').click();
           var content = element('.doc-example-live [ng-view]').text();
           expect(content).toMatch(/controller\: ChapterCntl/);
           expect(content).toMatch(/Book Id\: Moby/);
           expect(content).toMatch(/Chapter Id\: 1/);

           element('a:contains("Scarlet")').click();
           sleep(2); // promises are not part of scenario waiting
           content = element('.doc-example-live [ng-view]').text();
           expect(content).toMatch(/controller\: BookCntl/);
           expect(content).toMatch(/Book Id\: Scarlet/);
         });
       </file>
     </example>
     */

    /**
     * @ngdoc event
     * @name ngRoute.$route#$routeChangeStart
     * @eventOf ngRoute.$route
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occurs.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name ngRoute.$route#$routeChangeSuccess
     * @eventOf ngRoute.$route
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is first route entered.
     */

    /**
     * @ngdoc event
     * @name ngRoute.$route#$routeChangeError
     * @eventOf ngRoute.$route
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name ngRoute.$route#$routeUpdate
     * @eventOf ngRoute.$route
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name ngRoute.$route#reload
           * @methodOf ngRoute.$route
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = 'string' == typeof m[i]
              ? decodeURIComponent(m[i])
              : m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && angular.equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        angular.copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (angular.isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = angular.extend({}, next.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ? $injector.get(value) : $injector.invoke(value);
              });

              if (angular.isDefined(template = next.template)) {
                if (angular.isFunction(template)) {
                  template = template(next.params);
                }
              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(next.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  next.loadedTemplateUrl = templateUrl;
                  template = $http.get(templateUrl, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                angular.copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string||'').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc object
 * @name ngRoute.$routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * <pre>
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:1, sectionId:2, search:'moby'}
 * </pre>
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);

/**
 * @ngdoc directive
 * @name ngRoute.directive:ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @example
    <example module="ngViewExample" deps="angular-route.js" animations="true">
      <file name="index.html">
        <div ng-controller="MainCntl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="example-animate-container">
            <div ng-view class="view-example"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .example-animate-container {
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .example-animate-container > div {
          padding:10px;
        }

        .view-example.ng-enter, .view-example.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          -moz-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          -o-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .example-animate-container {
          position:relative;
          height:100px;
        }

        .view-example.ng-enter {
          left:100%;
        }
        .view-example.ng-enter.ng-enter-active {
          left:0;
        }

        .view-example.ng-leave { }
        .view-example.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'], function($routeProvider, $locationProvider) {
          $routeProvider.when('/Book/:bookId', {
            templateUrl: 'book.html',
            controller: BookCntl,
            controllerAs: 'book'
          });
          $routeProvider.when('/Book/:bookId/ch/:chapterId', {
            templateUrl: 'chapter.html',
            controller: ChapterCntl,
            controllerAs: 'chapter'
          });

          // configure html5 to get links working on jsfiddle
          $locationProvider.html5Mode(true);
        });

        function MainCntl($route, $routeParams, $location) {
          this.$route = $route;
          this.$location = $location;
          this.$routeParams = $routeParams;
        }

        function BookCntl($routeParams) {
          this.name = "BookCntl";
          this.params = $routeParams;
        }

        function ChapterCntl($routeParams) {
          this.name = "ChapterCntl";
          this.params = $routeParams;
        }
      </file>

      <file name="scenario.js">
        it('should load and compile correct template', function() {
          element('a:contains("Moby: Ch1")').click();
          var content = element('.doc-example-live [ng-view]').text();
          expect(content).toMatch(/controller\: ChapterCntl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element('a:contains("Scarlet")').click();
          content = element('.doc-example-live [ng-view]').text();
          expect(content).toMatch(/controller\: BookCntl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngRoute.directive:ngView#$viewContentLoaded
 * @eventOf ngRoute.directive:ngView
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$compile', '$controller', '$animate'];
function ngViewFactory(   $route,   $anchorScroll,   $compile,   $controller,   $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    compile: function(element, attr, linker) {
      return function(scope, $element, attr) {
        var currentScope,
            currentElement,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if(currentElement) {
            $animate.leave(currentElement);
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (template) {
            var newScope = scope.$new();
            linker(newScope, function(clone) {
              cleanupLastView();

              clone.html(template);
              $animate.enter(clone, null, $element);

              var link = $compile(clone.contents()),
                  current = $route.current;

              currentScope = current.scope = newScope;
              currentElement = clone;

              if (current.controller) {
                locals.$scope = currentScope;
                var controller = $controller(current.controller, locals);
                if (current.controllerAs) {
                  currentScope[current.controllerAs] = controller;
                }
                clone.data('$ngControllerController', controller);
                clone.children().data('$ngControllerController', controller);
              }

              link(currentScope);
              currentScope.$emit('$viewContentLoaded');
              currentScope.$eval(onloadExp);

              // $anchorScroll might listen on event...
              $anchorScroll();
            });
          } else {
            cleanupLastView();
          }
        }
      }
    }
  };
}


})(window, window.angular);

/**
 * @license AngularJS v1.2.0-rc.3
 * (c) 2010-2012 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name ngTouch
 * @description
 *
 * # ngTouch
 *
 * `ngTouch` is the name of the optional Angular module that provides touch events and other
 * helpers for touch-enabled devices.
 * The implementation is based on jQuery Mobile touch event handling
 * ([jquerymobile.com](http://jquerymobile.com/))
 *
 * {@installModule touch}
 *
 * See {@link ngTouch.$swipe `$swipe`} for usage.
 */

// define ngTouch module
var ngTouch = angular.module('ngTouch', []);

/**
     * @ngdoc object
     * @name ngTouch.$swipe
     *
     * @description
     * The `$swipe` service is a service that abstracts the messier details of hold-and-drag swipe
     * behavior, to make implementing swipe-related directives more convenient.
     *
     * Requires the {@link ngTouch `ngTouch`} module to be installed.
     *
     * `$swipe` is used by the `ngSwipeLeft` and `ngSwipeRight` directives in `ngTouch`, and by
     * `ngCarousel` in a separate component.
     *
     * # Usage
     * The `$swipe` service is an object with a single method: `bind`. `bind` takes an element
     * which is to be watched for swipes, and an object with four handler functions. See the
     * documentation for `bind` below.
     */

ngTouch.factory('$swipe', [function() {
  // The total distance in any direction before we make the call on swipe vs. scroll.
  var MOVE_BUFFER_RADIUS = 10;

  function getCoordinates(event) {
    var touches = event.touches && event.touches.length ? event.touches : [event];
    var e = (event.changedTouches && event.changedTouches[0]) ||
        (event.originalEvent && event.originalEvent.changedTouches &&
            event.originalEvent.changedTouches[0]) ||
        touches[0].originalEvent || touches[0];

    return {
      x: e.clientX,
      y: e.clientY
    };
  }

  return {
    /**
     * @ngdoc method
     * @name ngTouch.$swipe#bind
     * @methodOf ngTouch.$swipe
     *
     * @description
     * The main method of `$swipe`. It takes an element to be watched for swipe motions, and an
     * object containing event handlers.
     *
     * The four events are `start`, `move`, `end`, and `cancel`. `start`, `move`, and `end`
     * receive as a parameter a coordinates object of the form `{ x: 150, y: 310 }`.
     *
     * `start` is called on either `mousedown` or `touchstart`. After this event, `$swipe` is
     * watching for `touchmove` or `mousemove` events. These events are ignored until the total
     * distance moved in either dimension exceeds a small threshold.
     *
     * Once this threshold is exceeded, either the horizontal or vertical delta is greater.
     * - If the horizontal distance is greater, this is a swipe and `move` and `end` events follow.
     * - If the vertical distance is greater, this is a scroll, and we let the browser take over.
     *   A `cancel` event is sent.
     *
     * `move` is called on `mousemove` and `touchmove` after the above logic has determined that
     * a swipe is in progress.
     *
     * `end` is called when a swipe is successfully completed with a `touchend` or `mouseup`.
     *
     * `cancel` is called either on a `touchcancel` from the browser, or when we begin scrolling
     * as described above.
     *
     */
    bind: function(element, eventHandlers) {
      // Absolute total movement, used to control swipe vs. scroll.
      var totalX, totalY;
      // Coordinates of the start position.
      var startCoords;
      // Last event's position.
      var lastPos;
      // Whether a swipe is active.
      var active = false;

      element.on('touchstart mousedown', function(event) {
        startCoords = getCoordinates(event);
        active = true;
        totalX = 0;
        totalY = 0;
        lastPos = startCoords;
        eventHandlers['start'] && eventHandlers['start'](startCoords, event);
      });

      element.on('touchcancel', function(event) {
        active = false;
        eventHandlers['cancel'] && eventHandlers['cancel'](event);
      });

      element.on('touchmove mousemove', function(event) {
        if (!active) return;

        // Android will send a touchcancel if it thinks we're starting to scroll.
        // So when the total distance (+ or - or both) exceeds 10px in either direction,
        // we either:
        // - On totalX > totalY, we send preventDefault() and treat this as a swipe.
        // - On totalY > totalX, we let the browser handle it as a scroll.

        if (!startCoords) return;
        var coords = getCoordinates(event);

        totalX += Math.abs(coords.x - lastPos.x);
        totalY += Math.abs(coords.y - lastPos.y);

        lastPos = coords;

        if (totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS) {
          return;
        }

        // One of totalX or totalY has exceeded the buffer, so decide on swipe vs. scroll.
        if (totalY > totalX) {
          // Allow native scrolling to take over.
          active = false;
          eventHandlers['cancel'] && eventHandlers['cancel'](event);
          return;
        } else {
          // Prevent the browser from scrolling.
          event.preventDefault();
          eventHandlers['move'] && eventHandlers['move'](coords, event);
        }
      });

      element.on('touchend mouseup', function(event) {
        if (!active) return;
        active = false;
        eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
      });
    }
  };
}]);

/**
 * @ngdoc directive
 * @name ngTouch.directive:ngClick
 *
 * @description
 * A more powerful replacement for the default ngClick designed to be used on touchscreen
 * devices. Most mobile browsers wait about 300ms after a tap-and-release before sending
 * the click event. This version handles them immediately, and then prevents the
 * following click event from propagating.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * This directive can fall back to using an ordinary click event, and so works on desktop
 * browsers as well as mobile.
 *
 * This directive also sets the CSS class `ng-click-active` while the element is being held
 * down (by a mouse click or touch) so you can restyle the depressed element if you wish.
 *
 * @element ANY
 * @param {expression} ngClick {@link guide/expression Expression} to evaluate
 * upon tap. (Event object is available as `$event`)
 *
 * @example
    <doc:example>
      <doc:source>
        <button ng-click="count = count + 1" ng-init="count=0">
          Increment
        </button>
        count: {{ count }}
      </doc:source>
    </doc:example>
 */

ngTouch.config(['$provide', function($provide) {
  $provide.decorator('ngClickDirective', ['$delegate', function($delegate) {
    // drop the default ngClick directive
    $delegate.shift();
    return $delegate;
  }]);
}]);

ngTouch.directive('ngClick', ['$parse', '$timeout', '$rootElement',
    function($parse, $timeout, $rootElement) {
  var TAP_DURATION = 750; // Shorter than 750ms is a tap, longer is a taphold or drag.
  var MOVE_TOLERANCE = 12; // 12px seems to work in most mobile browsers.
  var PREVENT_DURATION = 2500; // 2.5 seconds maximum from preventGhostClick call to click
  var CLICKBUSTER_THRESHOLD = 25; // 25 pixels in any dimension is the limit for busting clicks.

  var ACTIVE_CLASS_NAME = 'ng-click-active';
  var lastPreventedTime;
  var touchCoordinates;


  // TAP EVENTS AND GHOST CLICKS
  //
  // Why tap events?
  // Mobile browsers detect a tap, then wait a moment (usually ~300ms) to see if you're
  // double-tapping, and then fire a click event.
  //
  // This delay sucks and makes mobile apps feel unresponsive.
  // So we detect touchstart, touchmove, touchcancel and touchend ourselves and determine when
  // the user has tapped on something.
  //
  // What happens when the browser then generates a click event?
  // The browser, of course, also detects the tap and fires a click after a delay. This results in
  // tapping/clicking twice. So we do "clickbusting" to prevent it.
  //
  // How does it work?
  // We attach global touchstart and click handlers, that run during the capture (early) phase.
  // So the sequence for a tap is:
  // - global touchstart: Sets an "allowable region" at the point touched.
  // - element's touchstart: Starts a touch
  // (- touchmove or touchcancel ends the touch, no click follows)
  // - element's touchend: Determines if the tap is valid (didn't move too far away, didn't hold
  //   too long) and fires the user's tap handler. The touchend also calls preventGhostClick().
  // - preventGhostClick() removes the allowable region the global touchstart created.
  // - The browser generates a click event.
  // - The global click handler catches the click, and checks whether it was in an allowable region.
  //     - If preventGhostClick was called, the region will have been removed, the click is busted.
  //     - If the region is still there, the click proceeds normally. Therefore clicks on links and
  //       other elements without ngTap on them work normally.
  //
  // This is an ugly, terrible hack!
  // Yeah, tell me about it. The alternatives are using the slow click events, or making our users
  // deal with the ghost clicks, so I consider this the least of evils. Fortunately Angular
  // encapsulates this ugly logic away from the user.
  //
  // Why not just put click handlers on the element?
  // We do that too, just to be sure. The problem is that the tap event might have caused the DOM
  // to change, so that the click fires in the same position but something else is there now. So
  // the handlers are global and care only about coordinates and not elements.

  // Checks if the coordinates are close enough to be within the region.
  function hit(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) < CLICKBUSTER_THRESHOLD && Math.abs(y1 - y2) < CLICKBUSTER_THRESHOLD;
  }

  // Checks a list of allowable regions against a click location.
  // Returns true if the click should be allowed.
  // Splices out the allowable region from the list after it has been used.
  function checkAllowableRegions(touchCoordinates, x, y) {
    for (var i = 0; i < touchCoordinates.length; i += 2) {
      if (hit(touchCoordinates[i], touchCoordinates[i+1], x, y)) {
        touchCoordinates.splice(i, i + 2);
        return true; // allowable region
      }
    }
    return false; // No allowable region; bust it.
  }

  // Global click handler that prevents the click if it's in a bustable zone and preventGhostClick
  // was called recently.
  function onClick(event) {
    if (Date.now() - lastPreventedTime > PREVENT_DURATION) {
      return; // Too old.
    }

    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    // Work around desktop Webkit quirk where clicking a label will fire two clicks (on the label
    // and on the input element). Depending on the exact browser, this second click we don't want
    // to bust has either (0,0) or negative coordinates.
    if (x < 1 && y < 1) {
      return; // offscreen
    }

    // Look for an allowable region containing this click.
    // If we find one, that means it was created by touchstart and not removed by
    // preventGhostClick, so we don't bust it.
    if (checkAllowableRegions(touchCoordinates, x, y)) {
      return;
    }

    // If we didn't find an allowable region, bust the click.
    event.stopPropagation();
    event.preventDefault();

    // Blur focused form elements
    event.target && event.target.blur();
  }


  // Global touchstart handler that creates an allowable region for a click event.
  // This allowable region can be removed by preventGhostClick if we want to bust it.
  function onTouchStart(event) {
    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    touchCoordinates.push(x, y);

    $timeout(function() {
      // Remove the allowable region.
      for (var i = 0; i < touchCoordinates.length; i += 2) {
        if (touchCoordinates[i] == x && touchCoordinates[i+1] == y) {
          touchCoordinates.splice(i, i + 2);
          return;
        }
      }
    }, PREVENT_DURATION, false);
  }

  // On the first call, attaches some event handlers. Then whenever it gets called, it creates a
  // zone around the touchstart where clicks will get busted.
  function preventGhostClick(x, y) {
    if (!touchCoordinates) {
      $rootElement[0].addEventListener('click', onClick, true);
      $rootElement[0].addEventListener('touchstart', onTouchStart, true);
      touchCoordinates = [];
    }

    lastPreventedTime = Date.now();

    checkAllowableRegions(touchCoordinates, x, y);
  }

  // Actual linking function.
  return function(scope, element, attr) {
    var clickHandler = $parse(attr.ngClick),
        tapping = false,
        tapElement,  // Used to blur the element after a tap.
        startTime,   // Used to check if the tap was held too long.
        touchStartX,
        touchStartY;

    function resetState() {
      tapping = false;
      element.removeClass(ACTIVE_CLASS_NAME);
    }

    element.on('touchstart', function(event) {
      tapping = true;
      tapElement = event.target ? event.target : event.srcElement; // IE uses srcElement.
      // Hack for Safari, which can target text nodes instead of containers.
      if(tapElement.nodeType == 3) {
        tapElement = tapElement.parentNode;
      }

      element.addClass(ACTIVE_CLASS_NAME);

      startTime = Date.now();

      var touches = event.touches && event.touches.length ? event.touches : [event];
      var e = touches[0].originalEvent || touches[0];
      touchStartX = e.clientX;
      touchStartY = e.clientY;
    });

    element.on('touchmove', function(event) {
      resetState();
    });

    element.on('touchcancel', function(event) {
      resetState();
    });

    element.on('touchend', function(event) {
      var diff = Date.now() - startTime;

      var touches = (event.changedTouches && event.changedTouches.length) ? event.changedTouches :
          ((event.touches && event.touches.length) ? event.touches : [event]);
      var e = touches[0].originalEvent || touches[0];
      var x = e.clientX;
      var y = e.clientY;
      var dist = Math.sqrt( Math.pow(x - touchStartX, 2) + Math.pow(y - touchStartY, 2) );

      if (tapping && diff < TAP_DURATION && dist < MOVE_TOLERANCE) {
        // Call preventGhostClick so the clickbuster will catch the corresponding click.
        preventGhostClick(x, y);

        // Blur the focused element (the button, probably) before firing the callback.
        // This doesn't work perfectly on Android Chrome, but seems to work elsewhere.
        // I couldn't get anything to work reliably on Android Chrome.
        if (tapElement) {
          tapElement.blur();
        }

        if (!angular.isDefined(attr.disabled) || attr.disabled === false) {
          element.triggerHandler('click', [event]);
        }
      }

      resetState();
    });

    // Hack for iOS Safari's benefit. It goes searching for onclick handlers and is liable to click
    // something else nearby.
    element.onclick = function(event) { };

    // Actual click handler.
    // There are three different kinds of clicks, only two of which reach this point.
    // - On desktop browsers without touch events, their clicks will always come here.
    // - On mobile browsers, the simulated "fast" click will call this.
    // - But the browser's follow-up slow click will be "busted" before it reaches this handler.
    // Therefore it's safe to use this directive on both mobile and desktop.
    element.on('click', function(event, touchend) {
      scope.$apply(function() {
        clickHandler(scope, {$event: (touchend || event)});
      });
    });

    element.on('mousedown', function(event) {
      element.addClass(ACTIVE_CLASS_NAME);
    });

    element.on('mousemove mouseup', function(event) {
      element.removeClass(ACTIVE_CLASS_NAME);
    });

  };
}]);

/**
 * @ngdoc directive
 * @name ngTouch.directive:ngSwipeLeft
 *
 * @description
 * Specify custom behavior when an element is swiped to the left on a touchscreen device.
 * A leftward swipe is a quick, right-to-left slide of the finger.
 * Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag too.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeLeft {@link guide/expression Expression} to evaluate
 * upon left swipe. (Event object is available as `$event`)
 *
 * @example
    <doc:example>
      <doc:source>
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </doc:source>
    </doc:example>
 */

/**
 * @ngdoc directive
 * @name ngTouch.directive:ngSwipeRight
 *
 * @description
 * Specify custom behavior when an element is swiped to the right on a touchscreen device.
 * A rightward swipe is a quick, left-to-right slide of the finger.
 * Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag too.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeRight {@link guide/expression Expression} to evaluate
 * upon right swipe. (Event object is available as `$event`)
 *
 * @example
    <doc:example>
      <doc:source>
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </doc:source>
    </doc:example>
 */

function makeSwipeDirective(directiveName, direction, eventName) {
  ngTouch.directive(directiveName, ['$parse', '$swipe', function($parse, $swipe) {
    // The maximum vertical delta for a swipe should be less than 75px.
    var MAX_VERTICAL_DISTANCE = 75;
    // Vertical distance should not be more than a fraction of the horizontal distance.
    var MAX_VERTICAL_RATIO = 0.3;
    // At least a 30px lateral motion is necessary for a swipe.
    var MIN_HORIZONTAL_DISTANCE = 30;

    return function(scope, element, attr) {
      var swipeHandler = $parse(attr[directiveName]);

      var startCoords, valid;

      function validSwipe(coords) {
        // Check that it's within the coordinates.
        // Absolute vertical distance must be within tolerances.
        // Horizontal distance, we take the current X - the starting X.
        // This is negative for leftward swipes and positive for rightward swipes.
        // After multiplying by the direction (-1 for left, +1 for right), legal swipes
        // (ie. same direction as the directive wants) will have a positive delta and
        // illegal ones a negative delta.
        // Therefore this delta must be positive, and larger than the minimum.
        if (!startCoords) return false;
        var deltaY = Math.abs(coords.y - startCoords.y);
        var deltaX = (coords.x - startCoords.x) * direction;
        return valid && // Short circuit for already-invalidated swipes.
            deltaY < MAX_VERTICAL_DISTANCE &&
            deltaX > 0 &&
            deltaX > MIN_HORIZONTAL_DISTANCE &&
            deltaY / deltaX < MAX_VERTICAL_RATIO;
      }

      $swipe.bind(element, {
        'start': function(coords, event) {
          startCoords = coords;
          valid = true;
        },
        'cancel': function(event) {
          valid = false;
        },
        'end': function(coords, event) {
          if (validSwipe(coords)) {
            scope.$apply(function() {
              element.triggerHandler(eventName);
              swipeHandler(scope, {$event: event});
            });
          }
        }
      });
    };
  }]);
}

// Left is negative X-coordinate, right is positive.
makeSwipeDirective('ngSwipeLeft', -1, 'swipeleft');
makeSwipeDirective('ngSwipeRight', 1, 'swiperight');



})(window, window.angular);

/**
 * @license AngularJS v1.2.0-rc.3
 * (c) 2010-2012 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name ngAnimate
 * @description
 *
 * # ngAnimate
 *
 * `ngAnimate` is an optional module that provides CSS and JavaScript animation hooks.
 *
 * {@installModule animate}
 *
 * # Usage
 *
 * To see animations in action, all that is required is to define the appropriate CSS classes
 * or to register a JavaScript animation via the $animation service. The directives that support animation automatically are:
 * `ngRepeat`, `ngInclude`, `ngSwitch`, `ngShow`, `ngHide` and `ngView`. Custom directives can take advantage of animation
 * by using the `$animate` service.
 *
 * Below is a more detailed breakdown of the supported animation events provided by pre-existing ng directives:
 *
 * | Directive                                                 | Supported Animations                               |
 * |---------------------------------------------------------- |----------------------------------------------------|
 * | {@link ng.directive:ngRepeat#animations ngRepeat}         | enter, leave and move                              |
 * | {@link ngRoute.directive:ngView#animations ngView}        | enter and leave                                    |
 * | {@link ng.directive:ngInclude#animations ngInclude}       | enter and leave                                    |
 * | {@link ng.directive:ngSwitch#animations ngSwitch}         | enter and leave                                    |
 * | {@link ng.directive:ngIf#animations ngIf}                 | enter and leave                                    |
 * | {@link ng.directive:ngClass#animations ngClass}           | add and remove                                     |
 * | {@link ng.directive:ngShow#animations ngShow & ngHide}    | add and remove (the ng-hide class value)           |
 *
 * You can find out more information about animations upon visiting each directive page.
 *
 * Below is an example of how to apply animations to a directive that supports animation hooks:
 *
 * <pre>
 * <style type="text/css">
 * .slide.ng-enter > div,
 * .slide.ng-leave > div {
 *   -webkit-transition:0.5s linear all;
 *   -moz-transition:0.5s linear all;
 *   -o-transition:0.5s linear all;
 *   transition:0.5s linear all;
 * }
 *
 * .slide.ng-enter { }        /&#42; starting animations for enter &#42;/
 * .slide.ng-enter-active { } /&#42; terminal animations for enter &#42;/
 * .slide.ng-leave { }        /&#42; starting animations for leave &#42;/
 * .slide.ng-leave-active { } /&#42; terminal animations for leave &#42;/
 * </style>
 *
 * <!--
 * the animate service will automatically add .ng-enter and .ng-leave to the element
 * to trigger the CSS transition/animations
 * -->
 * <ANY class="slide" ng-include="..."></ANY>
 * </pre>
 *
 * Keep in mind that if an animation is running, any child elements cannot be animated until the parent element's
 * animation has completed.
 *
 * <h2>CSS-defined Animations</h2>
 * The animate service will automatically apply two CSS classes to the animated element and these two CSS classes
 * are designed to contain the start and end CSS styling. Both CSS transitions and keyframe animations are supported
 * and can be used to play along with this naming structure.
 *
 * The following code below demonstrates how to perform animations using **CSS transitions** with Angular:
 *
 * <pre>
 * <style type="text/css">
 * /&#42;
 *  The animate class is apart of the element and the ng-enter class
 *  is attached to the element once the enter animation event is triggered
 * &#42;/
 * .reveal-animation.ng-enter {
 *  -webkit-transition: 1s linear all; /&#42; Safari/Chrome &#42;/
 *  -moz-transition: 1s linear all; /&#42; Firefox &#42;/
 *  -o-transition: 1s linear all; /&#42; Opera &#42;/
 *  transition: 1s linear all; /&#42; IE10+ and Future Browsers &#42;/
 *
 *  /&#42; The animation preparation code &#42;/
 *  opacity: 0;
 * }
 *
 * /&#42;
 *  Keep in mind that you want to combine both CSS
 *  classes together to avoid any CSS-specificity
 *  conflicts
 * &#42;/
 * .reveal-animation.ng-enter.ng-enter-active {
 *  /&#42; The animation code itself &#42;/
 *  opacity: 1;
 * }
 * </style>
 *
 * <div class="view-container">
 *   <div ng-view class="reveal-animation"></div>
 * </div>
 * </pre>
 *
 * The following code below demonstrates how to perform animations using **CSS animations** with Angular:
 *
 * <pre>
 * <style type="text/css">
 * .reveal-animation.ng-enter {
 *   -webkit-animation: enter_sequence 1s linear; /&#42; Safari/Chrome &#42;/
 *   -moz-animation: enter_sequence 1s linear; /&#42; Firefox &#42;/
 *   -o-animation: enter_sequence 1s linear; /&#42; Opera &#42;/
 *   animation: enter_sequence 1s linear; /&#42; IE10+ and Future Browsers &#42;/
 * }
 * &#64-webkit-keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * &#64-moz-keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * &#64-o-keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * &#64keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * </style>
 *
 * <div class="view-container">
 *   <div ng-view class="reveal-animation"></div>
 * </div>
 * </pre>
 *
 * Both CSS3 animations and transitions can be used together and the animate service will figure out the correct duration and delay timing.
 *
 * Upon DOM mutation, the event class is added first (something like `ng-enter`), then the browser prepares itself to add
 * the active class (in this case `ng-enter-active`) which then triggers the animation. The animation module will automatically
 * detect the CSS code to determine when the animation ends. Once the animation is over then both CSS classes will be
 * removed from the DOM. If a browser does not support CSS transitions or CSS animations then the animation will start and end
 * immediately resulting in a DOM element that is at its final state. This final state is when the DOM element
 * has no CSS transition/animation classes applied to it.
 *
 * <h2>JavaScript-defined Animations</h2>
 * In the event that you do not want to use CSS3 transitions or CSS3 animations or if you wish to offer animations on browsers that do not
 * yet support CSS transitions/animations, then you can make use of JavaScript animations defined inside of your AngularJS module.
 *
 * <pre>
 * //!annotate="YourApp" Your AngularJS Module|Replace this or ngModule with the module that you used to define your application.
 * var ngModule = angular.module('YourApp', []);
 * ngModule.animation('.my-crazy-animation', function() {
 *   return {
 *     enter: function(element, done) {
 *       //run the animation
 *       //!annotate Cancel Animation|This function (if provided) will perform the cancellation of the animation when another is triggered
 *       return function(element, done) {
 *         //cancel the animation
 *       }
 *     }
 *     leave: function(element, done) { },
 *     move: function(element, done) { },
 *     show: function(element, done) { },
 *     hide: function(element, done) { },
 *     addClass: function(element, className, done) { },
 *     removeClass: function(element, className, done) { },
 *   }
 * });
 * </pre>
 *
 * JavaScript-defined animations are created with a CSS-like class selector and a collection of events which are set to run
 * a javascript callback function. When an animation is triggered, $animate will look for a matching animation which fits
 * the element's CSS class attribute value and then run the matching animation event function (if found).
 * In other words, if the CSS classes present on the animated element match any of the JavaScript animations then the callback function
 * be executed. It should be also noted that only simple class selectors are allowed.
 *
 * Within a JavaScript animation, an object containing various event callback animation functions is expected to be returned.
 * As explained above, these callbacks are triggered based on the animation event. Therefore if an enter animation is run,
 * and the JavaScript animation is found, then the enter callback will handle that animation (in addition to the CSS keyframe animation
 * or transition code that is defined via a stylesheet).
 *
 */

angular.module('ngAnimate', ['ng'])

  /**
   * @ngdoc object
   * @name ngAnimate.$animateProvider
   * @description
   *
   * The `$AnimationProvider` allows developers to register and access custom JavaScript animations directly inside
   * of a module. When an animation is triggered, the $animate service will query the $animation function to find any
   * animations that match the provided name value.
   *
   * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
   *
   * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
   *
   */
  .config(['$provide', '$animateProvider', function($provide, $animateProvider) {
    var noop = angular.noop;
    var forEach = angular.forEach;
    var selectors = $animateProvider.$$selectors;

    var NG_ANIMATE_STATE = '$$ngAnimateState';
    var NG_ANIMATE_CLASS_NAME = 'ng-animate';
    var rootAnimateState = {running:true};
    $provide.decorator('$animate', ['$delegate', '$injector', '$sniffer', '$rootElement', '$timeout', '$rootScope',
                            function($delegate,   $injector,   $sniffer,   $rootElement,   $timeout,   $rootScope) {
        
      $rootElement.data(NG_ANIMATE_STATE, rootAnimateState);

      function lookup(name) {
        if (name) {
          var matches = [],
              flagMap = {},
              classes = name.substr(1).split('.');

          //the empty string value is the default animation
          //operation which performs CSS transition and keyframe
          //animations sniffing. This is always included for each
          //element animation procedure if the browser supports
          //transitions and/or keyframe animations
          if ($sniffer.transitions || $sniffer.animations) {
            classes.push('');
          }

          for(var i=0; i < classes.length; i++) {
            var klass = classes[i],
                selectorFactoryName = selectors[klass];
            if(selectorFactoryName && !flagMap[klass]) {
              matches.push($injector.get(selectorFactoryName));
              flagMap[klass] = true;
            }
          }
          return matches;
        }
      }

      /**
       * @ngdoc object
       * @name ngAnimate.$animate
       * @requires $timeout, $sniffer, $rootElement
       * @function
       *
       * @description
       * The `$animate` service provides animation detection support while performing DOM operations (enter, leave and move)
       * as well as during addClass and removeClass operations. When any of these operations are run, the $animate service
       * will examine any JavaScript-defined animations (which are defined by using the $animateProvider provider object)
       * as well as any CSS-defined animations against the CSS classes present on the element once the DOM operation is run.
       *
       * The `$animate` service is used behind the scenes with pre-existing directives and animation with these directives
       * will work out of the box without any extra configuration.
       *
       * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
       *
       * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
       *
       */
      return {
        /**
         * @ngdoc function
         * @name ngAnimate.$animate#enter
         * @methodOf ngAnimate.$animate
         * @function
         *
         * @description
         * Appends the element to the parent element that resides in the document and then runs the enter animation. Once
         * the animation is started, the following CSS classes will be present on the element for the duration of the animation:
         *
         * Below is a breakdown of each step that occurs during enter animation:
         *
         * | Animation Step                                                                               | What the element class attribute looks like   |
         * |----------------------------------------------------------------------------------------------|-----------------------------------------------|
         * | 1. $animate.enter(...) is called                                                             | class="my-animation"                          |
         * | 2. element is inserted into the parent element or beside the after element                   | class="my-animation"                          |
         * | 3. $animate runs any JavaScript-defined animations on the element                            | class="my-animation"                          |
         * | 4. the .ng-enter class is added to the element                                               | class="my-animation ng-enter"                 |
         * | 5. $animate scans the element styles to get the CSS transition/animation duration and delay  | class="my-animation ng-enter"                 |
         * | 6. the .ng-enter-active class is added (this triggers the CSS transition/animation)          | class="my-animation ng-enter ng-enter-active" |
         * | 7. $animate waits for X milliseconds for the animation to complete                           | class="my-animation ng-enter ng-enter-active" |
         * | 8. The animation ends and both CSS classes are removed from the element                      | class="my-animation"                          |
         * | 9. The done() callback is fired (if provided)                                                | class="my-animation"                          |
         *
         * @param {jQuery/jqLite element} element the element that will be the focus of the enter animation
         * @param {jQuery/jqLite element} parent the parent element of the element that will be the focus of the enter animation
         * @param {jQuery/jqLite element} after the sibling element (which is the previous element) of the element that will be the focus of the enter animation
         * @param {function()=} done callback function that will be called once the animation is complete
        */
        enter : function(element, parent, after, done) {
          this.enabled(false, element);
          $delegate.enter(element, parent, after);
          $rootScope.$$postDigest(function() {
            performAnimation('enter', 'ng-enter', element, parent, after, function() {
              done && $timeout(done, 0, false);
            });
          });
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#leave
         * @methodOf ngAnimate.$animate
         * @function
         *
         * @description
         * Runs the leave animation operation and, upon completion, removes the element from the DOM. Once
         * the animation is started, the following CSS classes will be added for the duration of the animation:
         *
         * Below is a breakdown of each step that occurs during enter animation:
         *
         * | Animation Step                                                                               | What the element class attribute looks like  |
         * |----------------------------------------------------------------------------------------------|----------------------------------------------|
         * | 1. $animate.leave(...) is called                                                             | class="my-animation"                         |
         * | 2. $animate runs any JavaScript-defined animations on the element                            | class="my-animation"                         |
         * | 3. the .ng-leave class is added to the element                                               | class="my-animation ng-leave"                |
         * | 4. $animate scans the element styles to get the CSS transition/animation duration and delay  | class="my-animation ng-leave"                |
         * | 5. the .ng-leave-active class is added (this triggers the CSS transition/animation)          | class="my-animation ng-leave ng-leave-active |
         * | 6. $animate waits for X milliseconds for the animation to complete                           | class="my-animation ng-leave ng-leave-active |
         * | 7. The animation ends and both CSS classes are removed from the element                      | class="my-animation"                         |
         * | 8. The element is removed from the DOM                                                       | ...                                          |
         * | 9. The done() callback is fired (if provided)                                                | ...                                          |
         *
         * @param {jQuery/jqLite element} element the element that will be the focus of the leave animation
         * @param {function()=} done callback function that will be called once the animation is complete
        */
        leave : function(element, done) {
          cancelChildAnimations(element);
          this.enabled(false, element);
          $rootScope.$$postDigest(function() {
            performAnimation('leave', 'ng-leave', element, null, null, function() {
              $delegate.leave(element, done);
            });
          });
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#move
         * @methodOf ngAnimate.$animate
         * @function
         *
         * @description
         * Fires the move DOM operation. Just before the animation starts, the animate service will either append it into the parent container or
         * add the element directly after the after element if present. Then the move animation will be run. Once
         * the animation is started, the following CSS classes will be added for the duration of the animation:
         *
         * Below is a breakdown of each step that occurs during move animation:
         *
         * | Animation Step                                                                               | What the element class attribute looks like |
         * |----------------------------------------------------------------------------------------------|---------------------------------------------|
         * | 1. $animate.move(...) is called                                                              | class="my-animation"                        |
         * | 2. element is moved into the parent element or beside the after element                      | class="my-animation"                        |
         * | 3. $animate runs any JavaScript-defined animations on the element                            | class="my-animation"                        |
         * | 4. the .ng-move class is added to the element                                                | class="my-animation ng-move"                |
         * | 5. $animate scans the element styles to get the CSS transition/animation duration and delay  | class="my-animation ng-move"                |
         * | 6. the .ng-move-active class is added (this triggers the CSS transition/animation)           | class="my-animation ng-move ng-move-active" |
         * | 7. $animate waits for X milliseconds for the animation to complete                           | class="my-animation ng-move ng-move-active" |
         * | 8. The animation ends and both CSS classes are removed from the element                      | class="my-animation"                        |
         * | 9. The done() callback is fired (if provided)                                                | class="my-animation"                        |
         *
         * @param {jQuery/jqLite element} element the element that will be the focus of the move animation
         * @param {jQuery/jqLite element} parent the parent element of the element that will be the focus of the move animation
         * @param {jQuery/jqLite element} after the sibling element (which is the previous element) of the element that will be the focus of the move animation
         * @param {function()=} done callback function that will be called once the animation is complete
        */
        move : function(element, parent, after, done) {
          cancelChildAnimations(element);
          this.enabled(false, element);
          $delegate.move(element, parent, after);
          $rootScope.$$postDigest(function() {
            performAnimation('move', 'ng-move', element, null, null, function() {
              done && $timeout(done, 0, false);
            });
          });
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#addClass
         * @methodOf ngAnimate.$animate
         *
         * @description
         * Triggers a custom animation event based off the className variable and then attaches the className value to the element as a CSS class.
         * Unlike the other animation methods, the animate service will suffix the className value with {@type -add} in order to provide
         * the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if no CSS transitions
         * or keyframes are defined on the -add CSS class).
         *
         * Below is a breakdown of each step that occurs during addClass animation:
         *
         * | Animation Step                                                                                 | What the element class attribute looks like |
         * |------------------------------------------------------------------------------------------------|---------------------------------------------|
         * | 1. $animate.addClass(element, 'super') is called                                               | class=""                                    |
         * | 2. $animate runs any JavaScript-defined animations on the element                              | class=""                                    |
         * | 3. the .super-add class is added to the element                                                | class="super-add"                           |
         * | 4. $animate scans the element styles to get the CSS transition/animation duration and delay    | class="super-add"                           |
         * | 5. the .super-add-active class is added (this triggers the CSS transition/animation)           | class="super-add super-add-active"          |
         * | 6. $animate waits for X milliseconds for the animation to complete                             | class="super-add super-add-active"          |
         * | 7. The animation ends and both CSS classes are removed from the element                        | class=""                                    |
         * | 8. The super class is added to the element                                                     | class="super"                               |
         * | 9. The done() callback is fired (if provided)                                                  | class="super"                               |
         *
         * @param {jQuery/jqLite element} element the element that will be animated
         * @param {string} className the CSS class that will be animated and then attached to the element
         * @param {function()=} done callback function that will be called once the animation is complete
        */
        addClass : function(element, className, done) {
          performAnimation('addClass', className, element, null, null, function() {
            $delegate.addClass(element, className, done);
          });
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#removeClass
         * @methodOf ngAnimate.$animate
         *
         * @description
         * Triggers a custom animation event based off the className variable and then removes the CSS class provided by the className value
         * from the element. Unlike the other animation methods, the animate service will suffix the className value with {@type -remove} in
         * order to provide the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if
         * no CSS transitions or keyframes are defined on the -remove CSS class).
         *
         * Below is a breakdown of each step that occurs during removeClass animation:
         *
         * | Animation Step                                                                                | What the element class attribute looks like     |
         * |-----------------------------------------------------------------------------------------------|-------------------------------------------------|
         * | 1. $animate.removeClass(element, 'super') is called                                           | class="super"                                   |
         * | 2. $animate runs any JavaScript-defined animations on the element                             | class="super"                                   |
         * | 3. the .super-remove class is added to the element                                            | class="super super-remove"                      |
         * | 4. $animate scans the element styles to get the CSS transition/animation duration and delay   | class="super super-remove"                      |
         * | 5. the .super-remove-active class is added (this triggers the CSS transition/animation)       | class="super super-remove super-remove-active"  |
         * | 6. $animate waits for X milliseconds for the animation to complete                            | class="super super-remove super-remove-active"  |
         * | 7. The animation ends and both CSS all three classes are removed from the element             | class=""                                        |
         * | 8. The done() callback is fired (if provided)                                                 | class=""                                        |
         *
         * @param {jQuery/jqLite element} element the element that will be animated
         * @param {string} className the CSS class that will be animated and then removed from the element
         * @param {function()=} done callback function that will be called once the animation is complete
        */
        removeClass : function(element, className, done) {
          performAnimation('removeClass', className, element, null, null, function() {
            $delegate.removeClass(element, className, done);
          });
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#enabled
         * @methodOf ngAnimate.$animate
         * @function
         *
         * @param {boolean=} value If provided then set the animation on or off.
         * @return {boolean} Current animation state.
         *
         * @description
         * Globally enables/disables animations.
         *
        */
        enabled : function(value, element) {
          switch(arguments.length) {
            case 2:
              if(value) {
                cleanup(element);
              }
              else {
                var data = element.data(NG_ANIMATE_STATE) || {};
                data.structural = true;
                data.running = true;
                element.data(NG_ANIMATE_STATE, data);
              }
            break;

            case 1:
              rootAnimateState.running = !value;
            break;

            default:
              value = !rootAnimateState.running
            break;
          }
          return !!value;
         }
      };

      /*
        all animations call this shared animation triggering function internally.
        The event variable refers to the JavaScript animation event that will be triggered
        and the className value is the name of the animation that will be applied within the
        CSS code. Element, parent and after are provided DOM elements for the animation
        and the onComplete callback will be fired once the animation is fully complete.
      */
      function performAnimation(event, className, element, parent, after, onComplete) {
        var classes = (element.attr('class') || '') + ' ' + className;
        var animationLookup = (' ' + classes).replace(/\s+/g,'.'),
            animations = [];
        forEach(lookup(animationLookup), function(animation, index) {
          animations.push({
            start : animation[event]
          });
        });

        if (!parent) {
          parent = after ? after.parent() : element.parent();
        }
        var disabledAnimation = { running : true };

        //skip the animation if animations are disabled, a parent is already being animated
        //or the element is not currently attached to the document body.
        if ((parent.inheritedData(NG_ANIMATE_STATE) || disabledAnimation).running || animations.length == 0) {
          done();
          return;
        }

        var ngAnimateState = element.data(NG_ANIMATE_STATE) || {};

        var isClassBased = event == 'addClass' || event == 'removeClass';
        if(ngAnimateState.running) {
          if(isClassBased && ngAnimateState.structural) {
            onComplete && onComplete();
            return;
          }

          //if an animation is currently running on the element then lets take the steps
          //to cancel that animation and fire any required callbacks
          $timeout.cancel(ngAnimateState.flagTimer);
          cancelAnimations(ngAnimateState.animations);
          (ngAnimateState.done || noop)();
        }

        element.data(NG_ANIMATE_STATE, {
          running:true,
          structural:!isClassBased,
          animations:animations,
          done:done
        });

        //the ng-animate class does nothing, but it's here to allow for
        //parent animations to find and cancel child animations when needed
        element.addClass(NG_ANIMATE_CLASS_NAME);

        forEach(animations, function(animation, index) {
          var fn = function() {
            progress(index);
          };

          if(animation.start) {
            animation.endFn = isClassBased ?
              animation.start(element, className, fn) :
              animation.start(element, fn);
          } else {
            fn();
          }
        });

        function progress(index) {
          animations[index].done = true;
          (animations[index].endFn || noop)();
          for(var i=0;i<animations.length;i++) {
            if(!animations[i].done) return;
          }
          done();
        }

        function done() {
          if(!done.hasBeenRun) {
            done.hasBeenRun = true;
            var data = element.data(NG_ANIMATE_STATE);
            if(data) {
              /* only structural animations wait for reflow before removing an
                 animation, but class-based animations don't. An example of this
                 failing would be when a parent HTML tag has a ng-class attribute
                 causing ALL directives below to skip animations during the digest */
              if(isClassBased) {
                cleanup(element);
              } else {
                data.flagTimer = $timeout(function() {
                  cleanup(element);
                }, 0, false);
                element.data(NG_ANIMATE_STATE, data);
              }
            }
            (onComplete || noop)();
          }
        }
      }

      function cancelChildAnimations(element) {
        angular.forEach(element[0].querySelectorAll('.' + NG_ANIMATE_CLASS_NAME), function(element) {
          element = angular.element(element);
          var data = element.data(NG_ANIMATE_STATE);
          if(data) {
            cancelAnimations(data.animations);
            cleanup(element);
          }
        });
      }

      function cancelAnimations(animations) {
        var isCancelledFlag = true;
        forEach(animations, function(animation) {
          (animation.endFn || noop)(isCancelledFlag);
        });
      }

      function cleanup(element) {
        element.removeClass(NG_ANIMATE_CLASS_NAME);
        element.removeData(NG_ANIMATE_STATE);
      }
    }]);

    $animateProvider.register('', ['$window', '$sniffer', '$timeout', function($window, $sniffer, $timeout) {
      var forEach = angular.forEach;

      // Detect proper transitionend/animationend event names.
      var transitionProp, transitionendEvent, animationProp, animationendEvent;

      // If unprefixed events are not supported but webkit-prefixed are, use the latter.
      // Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
      // Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
      // but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
      // Register both events in case `window.onanimationend` is not supported because of that,
      // do the same for `transitionend` as Safari is likely to exhibit similar behavior.
      // Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
      // therefore there is no reason to test anymore for other vendor prefixes: http://caniuse.com/#search=transition
      if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
        transitionProp = 'WebkitTransition';
        transitionendEvent = 'webkitTransitionEnd transitionend';
      } else {
        transitionProp = 'transition';
        transitionendEvent = 'transitionend';
      }

      if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
        animationProp = 'WebkitAnimation';
        animationendEvent = 'webkitAnimationEnd animationend';
      } else {
        animationProp = 'animation';
        animationendEvent = 'animationend';
      }

      var durationKey = 'Duration',
          propertyKey = 'Property',
          delayKey = 'Delay',
          animationIterationCountKey = 'IterationCount',
          ELEMENT_NODE = 1;

      var NG_ANIMATE_PARENT_KEY = '$ngAnimateKey';
      var lookupCache = {};
      var parentCounter = 0;

      var animationReflowQueue = [], animationTimer, timeOut = false;
      function afterReflow(callback) {
        animationReflowQueue.push(callback);
        $timeout.cancel(animationTimer);
        animationTimer = $timeout(function() {
          angular.forEach(animationReflowQueue, function(fn) {
            fn();
          });
          animationReflowQueue = [];
          animationTimer = null;
          lookupCache = {};
        }, 10, false); 
      }

      function getElementAnimationDetails(element, cacheKey, onlyCheckTransition) {
        var data = lookupCache[cacheKey];
        if(!data) {
          var transitionDuration = 0, transitionDelay = 0,
              animationDuration = 0, animationDelay = 0;

          //we want all the styles defined before and after
          forEach(element, function(element) {
            if (element.nodeType == ELEMENT_NODE) {
              var elementStyles = $window.getComputedStyle(element) || {};

              transitionDuration = Math.max(parseMaxTime(elementStyles[transitionProp + durationKey]), transitionDuration);

              if(!onlyCheckTransition) {
                transitionDelay  = Math.max(parseMaxTime(elementStyles[transitionProp + delayKey]), transitionDelay);

                animationDelay   = Math.max(parseMaxTime(elementStyles[animationProp + delayKey]), animationDelay);

                var aDuration  = parseMaxTime(elementStyles[animationProp + durationKey]);

                if(aDuration > 0) {
                  aDuration *= parseInt(elementStyles[animationProp + animationIterationCountKey]) || 1;
                }

                animationDuration = Math.max(aDuration, animationDuration);
              }
            }
          });
          data = {
            transitionDelay : transitionDelay,
            animationDelay : animationDelay,
            transitionDuration : transitionDuration,
            animationDuration : animationDuration
          };
          lookupCache[cacheKey] = data;
        }
        return data;
      }

      function parseMaxTime(str) {
        var total = 0, values = angular.isString(str) ? str.split(/\s*,\s*/) : [];
        forEach(values, function(value) {
          total = Math.max(parseFloat(value) || 0, total);
        });
        return total;
      }

      function getCacheKey(element) {
        var parent = element.parent();
        var parentID = parent.data(NG_ANIMATE_PARENT_KEY);
        if(!parentID) {
          parent.data(NG_ANIMATE_PARENT_KEY, ++parentCounter);
          parentID = parentCounter;
        }
        return parentID + '-' + element[0].className;
      }

      function animate(element, className, done) {

        var cacheKey = getCacheKey(element);
        if(getElementAnimationDetails(element, cacheKey, true).transitionDuration > 0) {

          done();
          return;
        }

        element.addClass(className);

        var timings = getElementAnimationDetails(element, cacheKey + ' ' + className);

        /* there is no point in performing a reflow if the animation
           timeout is empty (this would cause a flicker bug normally
           in the page. There is also no point in performing an animation
           that only has a delay and no duration */
        var maxDuration = Math.max(timings.transitionDuration, timings.animationDuration);
        if(maxDuration > 0) {
          var maxDelayTime = Math.max(timings.transitionDelay, timings.animationDelay) * 1000,
              startTime = Date.now(),
              node = element[0];

          //temporarily disable the transition so that the enter styles
          //don't animate twice (this is here to avoid a bug in Chrome/FF).
          if(timings.transitionDuration > 0) {
            node.style[transitionProp + propertyKey] = 'none';
          }

          var activeClassName = '';
          forEach(className.split(' '), function(klass, i) {
            activeClassName += (i > 0 ? ' ' : '') + klass + '-active';
          });

          // This triggers a reflow which allows for the transition animation to kick in.
          var css3AnimationEvents = animationendEvent + ' ' + transitionendEvent;

          afterReflow(function() {
            if(timings.transitionDuration > 0) {
              node.style[transitionProp + propertyKey] = '';
            }
            element.addClass(activeClassName);
          });

          element.on(css3AnimationEvents, onAnimationProgress);

          // This will automatically be called by $animate so
          // there is no need to attach this internally to the
          // timeout done method.
          return function onEnd(cancelled) {
            element.off(css3AnimationEvents, onAnimationProgress);
            element.removeClass(className);
            element.removeClass(activeClassName);

            // Only when the animation is cancelled is the done()
            // function not called for this animation therefore
            // this must be also called.
            if(cancelled) {
              done();
            }
          }
        }
        else {
          element.removeClass(className);
          done();
        }

        function onAnimationProgress(event) {
          event.stopPropagation();
          var ev = event.originalEvent || event;
          var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();
          /* $manualTimeStamp is a mocked timeStamp value which is set
           * within browserTrigger(). This is only here so that tests can
           * mock animations properly. Real events fallback to event.timeStamp,
           * or, if they don't, then a timeStamp is automatically created for them.
           * We're checking to see if the timeStamp surpasses the expected delay,
           * but we're using elapsedTime instead of the timeStamp on the 2nd
           * pre-condition since animations sometimes close off early */
          if(Math.max(timeStamp - startTime, 0) >= maxDelayTime && ev.elapsedTime >= maxDuration) {
            done();
          }
        }

      }

      return {
        enter : function(element, done) {
          return animate(element, 'ng-enter', done);
        },
        leave : function(element, done) {
          return animate(element, 'ng-leave', done);
        },
        move : function(element, done) {
          return animate(element, 'ng-move', done);
        },
        addClass : function(element, className, done) {
          return animate(element, suffixClasses(className, '-add'), done);
        },
        removeClass : function(element, className, done) {
          return animate(element, suffixClasses(className, '-remove'), done);
        }
      };

      function suffixClasses(classes, suffix) {
        var className = '';
        classes = angular.isArray(classes) ? classes : classes.split(/\s+/);
        forEach(classes, function(klass, i) {
          if(klass && klass.length > 0) {
            className += (i > 0 ? ' ' : '') + klass + suffix;
          }
        });
        return className;
      }
    }]);
  }]);


})(window, window.angular);
