(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function qb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ed={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function Hb(){if(b_)return wt;b_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,rt={};function W(D,X,it){this.props=D,this.context=X,this.refs=rt,this.updater=it||H}W.prototype.isReactComponent={},W.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function St(){}St.prototype=W.prototype;function ft(D,X,it){this.props=D,this.context=X,this.refs=rt,this.updater=it||H}var ct=ft.prototype=new St;ct.constructor=ft,Z(ct,W.prototype),ct.isPureReactComponent=!0;var It=Array.isArray,_t={H:null,A:null,T:null,S:null,V:null},Ct=Object.prototype.hasOwnProperty;function M(D,X,it,J,ht,Rt){return it=Rt.ref,{$$typeof:r,type:D,key:X,ref:it!==void 0?it:null,props:Rt}}function b(D,X){return M(D.type,X,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function O(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(it){return X[it]})}var V=/\/+/g;function P(D,X){return typeof D=="object"&&D!==null&&D.key!=null?O(""+D.key):X.toString(36)}function I(){}function Ee(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ee(D,X,it,J,ht){var Rt=typeof D;(Rt==="undefined"||Rt==="boolean")&&(D=null);var vt=!1;if(D===null)vt=!0;else switch(Rt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(D.$$typeof){case r:case t:vt=!0;break;case T:return vt=D._init,ee(vt(D._payload),X,it,J,ht)}}if(vt)return ht=ht(D),vt=J===""?"."+P(D,0):J,It(ht)?(it="",vt!=null&&(it=vt.replace(V,"$&/")+"/"),ee(ht,X,it,"",function(gt){return gt})):ht!=null&&(R(ht)&&(ht=b(ht,it+(ht.key==null||D&&D.key===ht.key?"":(""+ht.key).replace(V,"$&/")+"/")+vt)),X.push(ht)),1;vt=0;var de=J===""?".":J+":";if(It(D))for(var tt=0;tt<D.length;tt++)J=D[tt],Rt=de+P(J,tt),vt+=ee(J,X,it,Rt,ht);else if(tt=C(D),typeof tt=="function")for(D=tt.call(D),tt=0;!(J=D.next()).done;)J=J.value,Rt=de+P(J,tt++),vt+=ee(J,X,it,Rt,ht);else if(Rt==="object"){if(typeof D.then=="function")return ee(Ee(D),X,it,J,ht);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return vt}function j(D,X,it){if(D==null)return D;var J=[],ht=0;return ee(D,J,"","",function(Rt){return X.call(it,Rt,ht++)}),J}function nt(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(it){(D._status===0||D._status===-1)&&(D._status=1,D._result=it)},function(it){(D._status===0||D._status===-1)&&(D._status=2,D._result=it)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var lt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function kt(){}return wt.Children={map:j,forEach:function(D,X,it){j(D,function(){X.apply(this,arguments)},it)},count:function(D){var X=0;return j(D,function(){X++}),X},toArray:function(D){return j(D,function(X){return X})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},wt.Component=W,wt.Fragment=n,wt.Profiler=o,wt.PureComponent=ft,wt.StrictMode=s,wt.Suspense=p,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_t,wt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return _t.H.useMemoCache(D)}},wt.cache=function(D){return function(){return D.apply(null,arguments)}},wt.cloneElement=function(D,X,it){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=Z({},D.props),ht=D.key,Rt=void 0;if(X!=null)for(vt in X.ref!==void 0&&(Rt=void 0),X.key!==void 0&&(ht=""+X.key),X)!Ct.call(X,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&X.ref===void 0||(J[vt]=X[vt]);var vt=arguments.length-2;if(vt===1)J.children=it;else if(1<vt){for(var de=Array(vt),tt=0;tt<vt;tt++)de[tt]=arguments[tt+2];J.children=de}return M(D.type,ht,void 0,void 0,Rt,J)},wt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},wt.createElement=function(D,X,it){var J,ht={},Rt=null;if(X!=null)for(J in X.key!==void 0&&(Rt=""+X.key),X)Ct.call(X,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ht[J]=X[J]);var vt=arguments.length-2;if(vt===1)ht.children=it;else if(1<vt){for(var de=Array(vt),tt=0;tt<vt;tt++)de[tt]=arguments[tt+2];ht.children=de}if(D&&D.defaultProps)for(J in vt=D.defaultProps,vt)ht[J]===void 0&&(ht[J]=vt[J]);return M(D,Rt,void 0,void 0,null,ht)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(D){return{$$typeof:g,render:D}},wt.isValidElement=R,wt.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:nt}},wt.memo=function(D,X){return{$$typeof:y,type:D,compare:X===void 0?null:X}},wt.startTransition=function(D){var X=_t.T,it={};_t.T=it;try{var J=D(),ht=_t.S;ht!==null&&ht(it,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(kt,lt)}catch(Rt){lt(Rt)}finally{_t.T=X}},wt.unstable_useCacheRefresh=function(){return _t.H.useCacheRefresh()},wt.use=function(D){return _t.H.use(D)},wt.useActionState=function(D,X,it){return _t.H.useActionState(D,X,it)},wt.useCallback=function(D,X){return _t.H.useCallback(D,X)},wt.useContext=function(D){return _t.H.useContext(D)},wt.useDebugValue=function(){},wt.useDeferredValue=function(D,X){return _t.H.useDeferredValue(D,X)},wt.useEffect=function(D,X,it){var J=_t.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,X)},wt.useId=function(){return _t.H.useId()},wt.useImperativeHandle=function(D,X,it){return _t.H.useImperativeHandle(D,X,it)},wt.useInsertionEffect=function(D,X){return _t.H.useInsertionEffect(D,X)},wt.useLayoutEffect=function(D,X){return _t.H.useLayoutEffect(D,X)},wt.useMemo=function(D,X){return _t.H.useMemo(D,X)},wt.useOptimistic=function(D,X){return _t.H.useOptimistic(D,X)},wt.useReducer=function(D,X,it){return _t.H.useReducer(D,X,it)},wt.useRef=function(D){return _t.H.useRef(D)},wt.useState=function(D){return _t.H.useState(D)},wt.useSyncExternalStore=function(D,X,it){return _t.H.useSyncExternalStore(D,X,it)},wt.useTransition=function(){return _t.H.useTransition()},wt.version="19.1.0",wt}var S_;function hm(){return S_||(S_=1,Ed.exports=Hb()),Ed.exports}var Ke=hm();const $=qb(Ke);var Td={exports:{}},gl={},Ad={exports:{}},bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function jb(){return w_||(w_=1,function(r){function t(j,nt){var lt=j.length;j.push(nt);t:for(;0<lt;){var kt=lt-1>>>1,D=j[kt];if(0<o(D,nt))j[kt]=nt,j[lt]=D,lt=kt;else break t}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var nt=j[0],lt=j.pop();if(lt!==nt){j[0]=lt;t:for(var kt=0,D=j.length,X=D>>>1;kt<X;){var it=2*(kt+1)-1,J=j[it],ht=it+1,Rt=j[ht];if(0>o(J,lt))ht<D&&0>o(Rt,J)?(j[kt]=Rt,j[ht]=lt,kt=ht):(j[kt]=J,j[it]=lt,kt=it);else if(ht<D&&0>o(Rt,lt))j[kt]=Rt,j[ht]=lt,kt=ht;else break t}}return nt}function o(j,nt){var lt=j.sortIndex-nt.sortIndex;return lt!==0?lt:j.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],y=[],T=1,S=null,C=3,H=!1,Z=!1,rt=!1,W=!1,St=typeof setTimeout=="function"?setTimeout:null,ft=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;function It(j){for(var nt=n(y);nt!==null;){if(nt.callback===null)s(y);else if(nt.startTime<=j)s(y),nt.sortIndex=nt.expirationTime,t(p,nt);else break;nt=n(y)}}function _t(j){if(rt=!1,It(j),!Z)if(n(p)!==null)Z=!0,Ct||(Ct=!0,P());else{var nt=n(y);nt!==null&&ee(_t,nt.startTime-j)}}var Ct=!1,M=-1,b=5,R=-1;function O(){return W?!0:!(r.unstable_now()-R<b)}function V(){if(W=!1,Ct){var j=r.unstable_now();R=j;var nt=!0;try{t:{Z=!1,rt&&(rt=!1,ft(M),M=-1),H=!0;var lt=C;try{e:{for(It(j),S=n(p);S!==null&&!(S.expirationTime>j&&O());){var kt=S.callback;if(typeof kt=="function"){S.callback=null,C=S.priorityLevel;var D=kt(S.expirationTime<=j);if(j=r.unstable_now(),typeof D=="function"){S.callback=D,It(j),nt=!0;break e}S===n(p)&&s(p),It(j)}else s(p);S=n(p)}if(S!==null)nt=!0;else{var X=n(y);X!==null&&ee(_t,X.startTime-j),nt=!1}}break t}finally{S=null,C=lt,H=!1}nt=void 0}}finally{nt?P():Ct=!1}}}var P;if(typeof ct=="function")P=function(){ct(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Ee=I.port2;I.port1.onmessage=V,P=function(){Ee.postMessage(null)}}else P=function(){St(V,0)};function ee(j,nt){M=St(function(){j(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(j){switch(C){case 1:case 2:case 3:var nt=3;break;default:nt=C}var lt=C;C=nt;try{return j()}finally{C=lt}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(j,nt){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var lt=C;C=j;try{return nt()}finally{C=lt}},r.unstable_scheduleCallback=function(j,nt,lt){var kt=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?kt+lt:kt):lt=kt,j){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=lt+D,j={id:T++,callback:nt,priorityLevel:j,startTime:lt,expirationTime:D,sortIndex:-1},lt>kt?(j.sortIndex=lt,t(y,j),n(p)===null&&j===n(y)&&(rt?(ft(M),M=-1):rt=!0,ee(_t,lt-kt))):(j.sortIndex=D,t(p,j),Z||H||(Z=!0,Ct||(Ct=!0,P()))),j},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(j){var nt=C;return function(){var lt=C;C=nt;try{return j.apply(this,arguments)}finally{C=lt}}}}(bd)),bd}var R_;function Fb(){return R_||(R_=1,Ad.exports=jb()),Ad.exports}var Sd={exports:{}},Ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function Gb(){if(I_)return Ge;I_=1;var r=hm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,y,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:y,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ge.createPortal=function(p,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,T)},Ge.flushSync=function(p){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=T,s.d.f()}},Ge.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Ge.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ge.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var T=y.as,S=g(T,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,H=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:C,fetchPriority:H}):T==="script"&&s.d.X(p,{crossOrigin:S,integrity:C,fetchPriority:H,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ge.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=g(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Ge.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,S=g(T,y.crossOrigin);s.d.L(p,T,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ge.preloadModule=function(p,y){if(typeof p=="string")if(y){var T=g(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Ge.requestFormReset=function(p){s.d.r(p)},Ge.unstable_batchedUpdates=function(p,y){return p(y)},Ge.useFormState=function(p,y,T){return f.H.useFormState(p,y,T)},Ge.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ge.version="19.1.0",Ge}var C_;function Qb(){if(C_)return Sd.exports;C_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sd.exports=Gb(),Sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function Kb(){if(D_)return gl;D_=1;var r=Fb(),t=hm(),n=Qb();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===l)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),rt=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),ft=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),It=Symbol.for("react.forward_ref"),_t=Symbol.for("react.suspense"),Ct=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case W:return"Profiler";case rt:return"StrictMode";case _t:return"Suspense";case Ct:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case ct:return(e.displayName||"Context")+".Provider";case ft:return(e._context.displayName||"Context")+".Consumer";case It:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:Ee(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return Ee(e(i))}catch{}}return null}var ee=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},kt=[],D=-1;function X(e){return{current:e}}function it(e){0>D||(e.current=kt[D],kt[D]=null,D--)}function J(e,i){D++,kt[D]=e.current,e.current=i}var ht=X(null),Rt=X(null),vt=X(null),de=X(null);function tt(e,i){switch(J(vt,i),J(Rt,e),J(ht,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Zy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Zy(i),e=Wy(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(ht),J(ht,e)}function gt(){it(ht),it(Rt),it(vt)}function Ce(e){e.memoizedState!==null&&J(de,e);var i=ht.current,a=Wy(i,e.type);i!==a&&(J(Rt,e),J(ht,a))}function Ze(e){Rt.current===e&&(it(ht),it(Rt)),de.current===e&&(it(de),cl._currentValue=lt)}var vi=Object.prototype.hasOwnProperty,Ei=r.unstable_scheduleCallback,er=r.unstable_cancelCallback,Kr=r.unstable_shouldYield,Xn=r.unstable_requestPaint,En=r.unstable_now,vh=r.unstable_getCurrentPriorityLevel,oo=r.unstable_ImmediatePriority,Fs=r.unstable_UserBlockingPriority,Yr=r.unstable_NormalPriority,Eh=r.unstable_LowPriority,Gs=r.unstable_IdlePriority,lo=r.log,Gl=r.unstable_setDisableYieldValue,ae=null,Gt=null;function cn(e){if(typeof lo=="function"&&Gl(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(ae,e)}catch{}}var je=Math.clz32?Math.clz32:Xr,Ql=Math.log,Th=Math.LN2;function Xr(e){return e>>>=0,e===0?32:31-(Ql(e)/Th|0)|0}var $r=256,Zr=4194304;function Pn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Pn(l):(v&=E,v!==0?h=Pn(v):a||(a=E&~e,a!==0&&(h=Pn(a))))):(E=l&~d,E!==0?h=Pn(E):v!==0?h=Pn(v):a||(a=l&~e,a!==0&&(h=Pn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Wr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function uo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var e=$r;return $r<<=1,($r&4194048)===0&&($r=256),e}function ho(){var e=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),e}function Ti(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ai(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-je(a),Q=1<<F;E[F]=0,w[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~Q}l!==0&&$n(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function $n(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-je(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function mo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-je(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function nr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ir(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:y_(e.type))}function Kl(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ne=Math.random().toString(36).slice(2),Te="__reactFiber$"+ne,me="__reactProps$"+ne,Tn="__reactContainer$"+ne,go="__reactEvents$"+ne,Ah="__reactListeners$"+ne,rr="__reactHandles$"+ne,Yl="__reactResources$"+ne,Jr="__reactMarker$"+ne;function sr(e){delete e[Te],delete e[me],delete e[go],delete e[Ah],delete e[rr]}function bi(e){var i=e[Te];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Tn]||a[Te]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=n_(e);e!==null;){if(a=e[Te])return a;e=n_(e)}return i}e=a,a=e.parentNode}return null}function Zn(e){if(e=e[Te]||e[Tn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Wn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function We(e){var i=e[Yl];return i||(i=e[Yl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ue(e){e[Jr]=!0}var po=new Set,Ys={};function kn(e,i){Si(e,i),Si(e+"Capture",i)}function Si(e,i){for(Ys[e]=i,e=0;e<i.length;e++)po.add(i[e])}var Xl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$l={},ts={};function Zl(e){return vi.call(ts,e)?!0:vi.call($l,e)?!1:Xl.test(e)?ts[e]=!0:($l[e]=!0,!1)}function ar(e,i,a){if(Zl(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Jn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Pe(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var es,Wl;function wi(e){if(es===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);es=i&&i[1]||"",Wl=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+es+e+Wl}var Xs=!1;function $s(e,i){if(!e||Xs)return"";Xs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(B){var z=B}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(B){z=B}e.call(Q.prototype)}}else{try{throw Error()}catch(B){z=B}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var w=v.split(`
`),L=E.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===L.length)for(l=w.length-1,h=L.length-1;1<=l&&0<=h&&w[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==L[h]){var F=`
`+w[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{Xs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wi(a):""}function yo(e){switch(e.tag){case 26:case 27:case 5:return wi(e.type);case 16:return wi("Lazy");case 13:return wi("Suspense");case 19:return wi("SuspenseList");case 0:case 15:return $s(e.type,!1);case 11:return $s(e.type.render,!1);case 1:return $s(e.type,!0);case 31:return wi("Activity");default:return""}}function Zs(e){try{var i="";do i+=yo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _o(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function bh(e){var i=_o(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ws(e){e._valueTracker||(e._valueTracker=bh(e))}function vo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=_o(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sh=/[\n"\\]/g;function ge(e){return e.replace(Sh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hn(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Je(i)):e.value!==""+Je(i)&&(e.value=""+Je(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?or(e,v,Je(i)):a!=null?or(e,v,Je(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Je(E):e.removeAttribute("name")}function is(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Je(a):"",i=i!=null?""+Je(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function or(e,i,a){i==="number"&&ns(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ri(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Je(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Yt(e,i,a){if(i!=null&&(i=""+Je(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Je(a):""}function rs(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ee(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Je(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function An(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ss=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jl(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||ss.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Eo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Jl(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Jl(e,d,i[d])}function To(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Js(e){return Rh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ii=null;function bn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,Di=null;function Ao(e){var i=Zn(e);if(i&&(e=i.stateNode)){var a=e[me]||null;t:switch(e=i.stateNode,i.type){case"input":if(hn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[me]||null;if(!h)throw Error(s(90));hn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&vo(l)}break t;case"textarea":Yt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ri(e,!!a.multiple,i,!1)}}}var ti=!1;function tu(e,i,a){if(ti)return e(i,a);ti=!0;try{var l=e(i);return l}finally{if(ti=!1,(Ci!==null||Di!==null)&&(Ku(),Ci&&(i=Ci,e=Di,Di=Ci=null,Ao(i),e)))for(i=0;i<e.length;i++)Ao(e[i])}}function as(e,i){var a=e.stateNode;if(a===null)return null;var l=a[me]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sn=!1;if(Un)try{var os={};Object.defineProperty(os,"passive",{get:function(){Sn=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Sn=!1}var ei=null,lr=null,Ni=null;function bo(){if(Ni)return Ni;var e,i=lr,a=i.length,l,h="value"in ei?ei.value:ei.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ni=h.slice(e,1<l?1-l:void 0)}function ni(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function So(){return!1}function De(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ii:So,this.isPropagationStopped=So,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=De(jt),ls=T({},jt,{view:0,detail:0}),eu=De(ls),ea,na,ri,us=T({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(ea=e.screenX-ri.screenX,na=e.screenY-ri.screenY):na=ea=0,ri=e),ea)},movementY:function(e){return"movementY"in e?e.movementY:na}}),wn=De(us),nu=T({},us,{dataTransfer:0}),Ih=De(nu),cs=T({},ls,{relatedTarget:0}),ia=De(cs),wo=T({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),ra=De(wo),iu=T({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sa=De(iu),Ch=T({},jt,{data:0}),Ro=De(Ch),hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Io(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=su[e])?!!i[e]:!1}function fs(){return Io}var au=T({},ls,{key:function(e){if(e.key){var i=hs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aa=De(au),ou=T({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=De(ou),Oi=T({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),lu=De(Oi),uu=T({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),cu=De(uu),hu=T({},us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oa=De(hu),tn=T({},jt,{newState:0,oldState:0}),fu=De(tn),du=[9,13,27,32],si=Un&&"CompositionEvent"in window,u=null;Un&&"documentMode"in document&&(u=document.documentMode);var m=Un&&"TextEvent"in window&&!u,_=Un&&(!si||u&&8<u&&11>=u),A=" ",k=!1;function q(e,i){switch(e){case"keyup":return du.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function et(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Ae(e,i){switch(e){case"compositionend":return et(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return e=i.data,e===A&&k?null:e;default:return null}}function Lt(e,i){if(Ut)return e==="compositionend"||!si&&q(e,i)?(e=bo(),Ni=lr=ei=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ne={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function be(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ne[e.type]:i==="textarea"}function Mi(e,i,a,l){Ci?Di?Di.push(l):Di=[l]:Ci=l,i=Ju(i,"onChange"),0<i.length&&(a=new ta("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var ke=null,ai=null;function Do(e){Qy(e,0)}function mu(e){var i=Wn(e);if(vo(i))return e}function dg(e,i){if(e==="change")return i}var mg=!1;if(Un){var Dh;if(Un){var Nh="oninput"in document;if(!Nh){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Nh=typeof gg.oninput=="function"}Dh=Nh}else Dh=!1;mg=Dh&&(!document.documentMode||9<document.documentMode)}function pg(){ke&&(ke.detachEvent("onpropertychange",yg),ai=ke=null)}function yg(e){if(e.propertyName==="value"&&mu(ai)){var i=[];Mi(i,ai,e,bn(e)),tu(Do,i)}}function yA(e,i,a){e==="focusin"?(pg(),ke=i,ai=a,ke.attachEvent("onpropertychange",yg)):e==="focusout"&&pg()}function _A(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mu(ai)}function vA(e,i){if(e==="click")return mu(i)}function EA(e,i){if(e==="input"||e==="change")return mu(i)}function TA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fn=typeof Object.is=="function"?Object.is:TA;function No(e,i){if(fn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!vi.call(i,h)||!fn(e[h],i[h]))return!1}return!0}function _g(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vg(e,i){var a=_g(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_g(a)}}function Eg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Eg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Tg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ns(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ns(e.document)}return i}function Oh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var AA=Un&&"documentMode"in document&&11>=document.documentMode,la=null,Mh=null,Oo=null,Vh=!1;function Ag(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vh||la==null||la!==ns(l)||(l=la,"selectionStart"in l&&Oh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Oo&&No(Oo,l)||(Oo=l,l=Ju(Mh,"onSelect"),0<l.length&&(i=new ta("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=la)))}function ds(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var ua={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},xh={},bg={};Un&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function ms(e){if(xh[e])return xh[e];if(!ua[e])return e;var i=ua[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in bg)return xh[e]=i[a];return e}var Sg=ms("animationend"),wg=ms("animationiteration"),Rg=ms("animationstart"),bA=ms("transitionrun"),SA=ms("transitionstart"),wA=ms("transitioncancel"),Ig=ms("transitionend"),Cg=new Map,Ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ph.push("scrollEnd");function Ln(e,i){Cg.set(e,i),kn(i,[e])}var Dg=new WeakMap;function Rn(e,i){if(typeof e=="object"&&e!==null){var a=Dg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Zs(i)},Dg.set(e,i),i)}return{value:e,source:i,stack:Zs(i)}}var In=[],ca=0,kh=0;function gu(){for(var e=ca,i=kh=ca=0;i<e;){var a=In[i];In[i++]=null;var l=In[i];In[i++]=null;var h=In[i];In[i++]=null;var d=In[i];if(In[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Ng(a,h,d)}}function pu(e,i,a,l){In[ca++]=e,In[ca++]=i,In[ca++]=a,In[ca++]=l,kh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Uh(e,i,a,l){return pu(e,i,a,l),yu(e)}function ha(e,i){return pu(e,null,null,i),yu(e)}function Ng(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-je(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function yu(e){if(50<nl)throw nl=0,Ff=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var fa={};function RA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,i,a,l){return new RA(e,i,a,l)}function Lh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,i){var a=e.alternate;return a===null?(a=dn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Og(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function _u(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Lh(e)&&(v=1);else if(typeof e=="string")v=Cb(e,a,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=dn(31,a,i,h),e.elementType=R,e.lanes=d,e;case Z:return gs(a.children,h,d,i);case rt:v=8,h|=24;break;case W:return e=dn(12,a,i,h|2),e.elementType=W,e.lanes=d,e;case _t:return e=dn(13,a,i,h),e.elementType=_t,e.lanes=d,e;case Ct:return e=dn(19,a,i,h),e.elementType=Ct,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case St:case ct:v=10;break t;case ft:v=9;break t;case It:v=11;break t;case M:v=14;break t;case b:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=dn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function gs(e,i,a,l){return e=dn(7,e,l,i),e.lanes=a,e}function zh(e,i,a){return e=dn(6,e,null,i),e.lanes=a,e}function Bh(e,i,a){return i=dn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var da=[],ma=0,vu=null,Eu=0,Cn=[],Dn=0,ps=null,xi=1,Pi="";function ys(e,i){da[ma++]=Eu,da[ma++]=vu,vu=e,Eu=i}function Mg(e,i,a){Cn[Dn++]=xi,Cn[Dn++]=Pi,Cn[Dn++]=ps,ps=e;var l=xi;e=Pi;var h=32-je(l)-1;l&=~(1<<h),a+=1;var d=32-je(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,xi=1<<32-je(i)+h|a<<h|l,Pi=d+e}else xi=1<<d|a<<h|l,Pi=e}function qh(e){e.return!==null&&(ys(e,1),Mg(e,1,0))}function Hh(e){for(;e===vu;)vu=da[--ma],da[ma]=null,Eu=da[--ma],da[ma]=null;for(;e===ps;)ps=Cn[--Dn],Cn[Dn]=null,Pi=Cn[--Dn],Cn[Dn]=null,xi=Cn[--Dn],Cn[Dn]=null}var en=null,oe=null,Ht=!1,_s=null,oi=!1,jh=Error(s(519));function vs(e){var i=Error(s(418,""));throw xo(Rn(i,e)),jh}function Vg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Te]=e,i[me]=l,a){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(a=0;a<rl.length;a++)Vt(rl[a],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":Vt("invalid",i),is(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ws(i);break;case"select":Vt("invalid",i);break;case"textarea":Vt("invalid",i),rs(i,l.value,l.defaultValue,l.children),Ws(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||$y(i.textContent,a)?(l.popover!=null&&(Vt("beforetoggle",i),Vt("toggle",i)),l.onScroll!=null&&Vt("scroll",i),l.onScrollEnd!=null&&Vt("scrollend",i),l.onClick!=null&&(i.onclick=tc),i=!0):i=!1,i||vs(e)}function xg(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:en=en.return}}function Mo(e){if(e!==en)return!1;if(!Ht)return xg(e),Ht=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ad(e.type,e.memoizedProps)),a=!a),a&&oe&&vs(e),xg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){oe=Bn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}oe=null}}else i===27?(i=oe,Sr(e.type)?(e=cd,cd=null,oe=e):oe=i):oe=en?Bn(e.stateNode.nextSibling):null;return!0}function Vo(){oe=en=null,Ht=!1}function Pg(){var e=_s;return e!==null&&(an===null?an=e:an.push.apply(an,e),_s=null),e}function xo(e){_s===null?_s=[e]:_s.push(e)}var Fh=X(null),Es=null,ki=null;function ur(e,i,a){J(Fh,i._currentValue),i._currentValue=a}function Ui(e){e._currentValue=Fh.current,it(Fh)}function Gh(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function Qh(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Gh(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Gh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Po(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;fn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===de.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}h=h.return}e!==null&&Qh(i,e,a,l),i.flags|=262144}function Tu(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ts(e){Es=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return kg(Es,e)}function Au(e,i){return Es===null&&Ts(e),kg(e,i)}function kg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ki=ki.next=i;return a}var IA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},CA=r.unstable_scheduleCallback,DA=r.unstable_NormalPriority,Se={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kh(){return{controller:new IA,data:new Map,refCount:0}}function ko(e){e.refCount--,e.refCount===0&&CA(DA,function(){e.controller.abort()})}var Uo=null,Yh=0,ga=0,pa=null;function NA(e,i){if(Uo===null){var a=Uo=[];Yh=0,ga=Zf(),pa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Yh++,i.then(Ug,Ug),i}function Ug(){if(--Yh===0&&Uo!==null){pa!==null&&(pa.status="fulfilled");var e=Uo;Uo=null,ga=0,pa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function OA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Lg=j.S;j.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&NA(e,i),Lg!==null&&Lg(e,i)};var As=X(null);function Xh(){var e=As.current;return e!==null?e:Jt.pooledCache}function bu(e,i){i===null?J(As,As.current):J(As,i.pool)}function zg(){var e=Xh();return e===null?null:{parent:Se._currentValue,pool:e}}var Lo=Error(s(460)),Bg=Error(s(474)),Su=Error(s(542)),$h={then:function(){}};function qg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wu(){}function Hg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(wu,wu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Fg(e),e;default:if(typeof i.status=="string")i.then(wu,wu);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Fg(e),e}throw zo=i,Lo}}var zo=null;function jg(){if(zo===null)throw Error(s(459));var e=zo;return zo=null,e}function Fg(e){if(e===Lo||e===Su)throw Error(s(483))}var cr=!1;function Zh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=yu(e),Ng(e,null,a),i}return pu(e,l,i,a),yu(e)}function Bo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,mo(e,a)}}function Jh(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var tf=!1;function qo(){if(tf){var e=pa;if(e!==null)throw e}}function Ho(e,i,a,l){tf=!1;var h=e.updateQueue;cr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==v&&(E===null?F.firstBaseUpdate=L:E.next=L,F.lastBaseUpdate=w))}if(d!==null){var Q=h.baseState;v=0,F=L=w=null,E=d;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(zt&z)===z:(l&z)===z){z!==0&&z===ga&&(tf=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Et=e,mt=E;z=i;var Zt=a;switch(mt.tag){case 1:if(Et=mt.payload,typeof Et=="function"){Q=Et.call(Zt,Q,z);break t}Q=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=mt.payload,z=typeof Et=="function"?Et.call(Zt,Q,z):Et,z==null)break t;Q=T({},Q,z);break t;case 2:cr=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(L=F=B,w=Q):F=F.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(w=Q),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),Er|=v,e.lanes=v,e.memoizedState=Q}}function Gg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Qg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gg(a[e],i)}var ya=X(null),Ru=X(0);function Kg(e,i){e=Fi,J(Ru,e),J(ya,i),Fi=e|i.baseLanes}function ef(){J(Ru,Fi),J(ya,ya.current)}function nf(){Fi=Ru.current,it(ya),it(Ru)}var dr=0,Dt=null,Xt=null,pe=null,Iu=!1,_a=!1,bs=!1,Cu=0,jo=0,va=null,MA=0;function ce(){throw Error(s(321))}function rf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!fn(e[a],i[a]))return!1;return!0}function sf(e,i,a,l,h,d){return dr=d,Dt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,j.H=e===null||e.memoizedState===null?Np:Op,bs=!1,d=a(l,h),bs=!1,_a&&(d=Xg(i,a,l,h)),Yg(e),d}function Yg(e){j.H=xu;var i=Xt!==null&&Xt.next!==null;if(dr=0,pe=Xt=Dt=null,Iu=!1,jo=0,va=null,i)throw Error(s(300));e===null||Oe||(e=e.dependencies,e!==null&&Tu(e)&&(Oe=!0))}function Xg(e,i,a,l){Dt=e;var h=0;do{if(_a&&(va=null),jo=0,_a=!1,25<=h)throw Error(s(301));if(h+=1,pe=Xt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}j.H=zA,d=i(a,l)}while(_a);return d}function VA(){var e=j.H,i=e.useState()[0];return i=typeof i.then=="function"?Fo(i):i,e=e.useState()[0],(Xt!==null?Xt.memoizedState:null)!==e&&(Dt.flags|=1024),i}function af(){var e=Cu!==0;return Cu=0,e}function of(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function lf(e){if(Iu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Iu=!1}dr=0,pe=Xt=Dt=null,_a=!1,jo=Cu=0,va=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?Dt.memoizedState=pe=e:pe=pe.next=e,pe}function ye(){if(Xt===null){var e=Dt.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var i=pe===null?Dt.memoizedState:pe.next;if(i!==null)pe=i,Xt=e;else{if(e===null)throw Dt.alternate===null?Error(s(467)):Error(s(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},pe===null?Dt.memoizedState=pe=e:pe=pe.next=e}return pe}function uf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var i=jo;return jo+=1,va===null&&(va=[]),e=Hg(va,e,i),i=Dt,(pe===null?i.memoizedState:pe.next)===null&&(i=i.alternate,j.H=i===null||i.memoizedState===null?Np:Op),e}function Du(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fo(e);if(e.$$typeof===ct)return Fe(e)}throw Error(s(438,String(e)))}function cf(e){var i=null,a=Dt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=uf(),Dt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=O;return i.index++,a}function Li(e,i){return typeof i=="function"?i(e):i}function Nu(e){var i=ye();return hf(i,Xt,e)}function hf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,w=null,L=i,F=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(zt&Q)===Q:(dr&Q)===Q){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===ga&&(F=!0);else if((dr&z)===z){L=L.next,z===ga&&(F=!0);continue}else Q={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=Q,v=d):w=w.next=Q,Dt.lanes|=z,Er|=z;Q=L.action,bs&&a(d,Q),d=L.hasEagerState?L.eagerState:a(d,Q)}else z={lane:Q,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=z,v=d):w=w.next=z,Dt.lanes|=Q,Er|=Q;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=E,!fn(d,e.memoizedState)&&(Oe=!0,F&&(a=pa,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ff(e){var i=ye(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(Oe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function $g(e,i,a){var l=Dt,h=ye(),d=Ht;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn((Xt||h).memoizedState,a);v&&(h.memoizedState=a,Oe=!0),h=h.queue;var E=Jg.bind(null,l,h,e);if(Go(2048,8,E,[e]),h.getSnapshot!==i||v||pe!==null&&pe.memoizedState.tag&1){if(l.flags|=2048,Ea(9,Ou(),Wg.bind(null,l,h,a,i),null),Jt===null)throw Error(s(349));d||(dr&124)!==0||Zg(l,i,a)}return a}function Zg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Dt.updateQueue,i===null?(i=uf(),Dt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Wg(e,i,a,l){i.value=a,i.getSnapshot=l,tp(i)&&ep(e)}function Jg(e,i,a){return a(function(){tp(i)&&ep(e)})}function tp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!fn(e,a)}catch{return!0}}function ep(e){var i=ha(e,2);i!==null&&_n(i,e,2)}function df(e){var i=rn();if(typeof e=="function"){var a=e;if(e=a(),bs){cn(!0);try{a()}finally{cn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},i}function np(e,i,a,l){return e.baseState=a,hf(e,Xt,typeof l=="function"?l:Li)}function xA(e,i,a,l,h){if(Vu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};j.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,ip(i,d)):(d.next=a.next,i.pending=a.next=d)}}function ip(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=j.T,v={};j.T=v;try{var E=a(h,l),w=j.S;w!==null&&w(v,E),rp(e,i,E)}catch(L){mf(e,i,L)}finally{j.T=d}}else try{d=a(h,l),rp(e,i,d)}catch(L){mf(e,i,L)}}function rp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){sp(e,i,l)},function(l){return mf(e,i,l)}):sp(e,i,a)}function sp(e,i,a){i.status="fulfilled",i.value=a,ap(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,ip(e,a)))}function mf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,ap(i),i=i.next;while(i!==l)}e.action=null}function ap(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function op(e,i){return i}function lp(e,i){if(Ht){var a=Jt.formState;if(a!==null){t:{var l=Dt;if(Ht){if(oe){e:{for(var h=oe,d=oi;h.nodeType!==8;){if(!d){h=null;break e}if(h=Bn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){oe=Bn(h.nextSibling),l=h.data==="F!";break t}}vs(l)}l=!1}l&&(i=a[0])}}return a=rn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:op,lastRenderedState:i},a.queue=l,a=Ip.bind(null,Dt,l),l.dispatch=a,l=df(!1),d=vf.bind(null,Dt,!1,l.queue),l=rn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=xA.bind(null,Dt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function up(e){var i=ye();return cp(i,Xt,e)}function cp(e,i,a){if(i=hf(e,i,op)[0],e=Nu(Li)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Fo(i)}catch(v){throw v===Lo?Su:v}else l=i;i=ye();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Dt.flags|=2048,Ea(9,Ou(),PA.bind(null,h,a),null)),[l,d,e]}function PA(e,i){e.action=i}function hp(e){var i=ye(),a=Xt;if(a!==null)return cp(i,a,e);ye(),i=i.memoizedState,a=ye();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Ea(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Dt.updateQueue,i===null&&(i=uf(),Dt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Ou(){return{destroy:void 0,resource:void 0}}function fp(){return ye().memoizedState}function Mu(e,i,a,l){var h=rn();l=l===void 0?null:l,Dt.flags|=e,h.memoizedState=Ea(1|i,Ou(),a,l)}function Go(e,i,a,l){var h=ye();l=l===void 0?null:l;var d=h.memoizedState.inst;Xt!==null&&l!==null&&rf(l,Xt.memoizedState.deps)?h.memoizedState=Ea(i,d,a,l):(Dt.flags|=e,h.memoizedState=Ea(1|i,d,a,l))}function dp(e,i){Mu(8390656,8,e,i)}function mp(e,i){Go(2048,8,e,i)}function gp(e,i){return Go(4,2,e,i)}function pp(e,i){return Go(4,4,e,i)}function yp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function _p(e,i,a){a=a!=null?a.concat([e]):null,Go(4,4,yp.bind(null,i,e),a)}function gf(){}function vp(e,i){var a=ye();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&rf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Ep(e,i){var a=ye();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&rf(i,l[1]))return l[0];if(l=e(),bs){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l}function pf(e,i,a){return a===void 0||(dr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=by(),Dt.lanes|=e,Er|=e,a)}function Tp(e,i,a,l){return fn(a,i)?a:ya.current!==null?(e=pf(e,a,l),fn(e,i)||(Oe=!0),e):(dr&42)===0?(Oe=!0,e.memoizedState=a):(e=by(),Dt.lanes|=e,Er|=e,i)}function Ap(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=j.T,E={};j.T=E,vf(e,!1,i,a);try{var w=h(),L=j.S;if(L!==null&&L(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var F=OA(w,l);Qo(e,i,F,yn(e))}else Qo(e,i,l,yn(e))}catch(Q){Qo(e,i,{then:function(){},status:"rejected",reason:Q},yn())}finally{nt.p=d,j.T=v}}function kA(){}function yf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=bp(e).queue;Ap(e,h,i,lt,a===null?kA:function(){return Sp(e),a(l)})}function bp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:lt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Sp(e){var i=bp(e).next.queue;Qo(e,i,{},yn())}function _f(){return Fe(cl)}function wp(){return ye().memoizedState}function Rp(){return ye().memoizedState}function UA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=yn();e=hr(a);var l=fr(i,e,a);l!==null&&(_n(l,i,a),Bo(l,i,a)),i={cache:Kh()},e.payload=i;return}i=i.return}}function LA(e,i,a){var l=yn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Vu(e)?Cp(i,a):(a=Uh(e,i,a,l),a!==null&&(_n(a,e,l),Dp(a,i,l)))}function Ip(e,i,a){var l=yn();Qo(e,i,a,l)}function Qo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))Cp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,fn(E,v))return pu(e,i,h,0),Jt===null&&gu(),!1}catch{}finally{}if(a=Uh(e,i,h,l),a!==null)return _n(a,e,l),Dp(a,i,l),!0}return!1}function vf(e,i,a,l){if(l={lane:2,revertLane:Zf(),action:l,hasEagerState:!1,eagerState:null,next:null},Vu(e)){if(i)throw Error(s(479))}else i=Uh(e,a,l,2),i!==null&&_n(i,e,2)}function Vu(e){var i=e.alternate;return e===Dt||i!==null&&i===Dt}function Cp(e,i){_a=Iu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Dp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,mo(e,a)}}var xu={readContext:Fe,use:Du,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce},Np={readContext:Fe,use:Du,useCallback:function(e,i){return rn().memoizedState=[e,i===void 0?null:i],e},useContext:Fe,useEffect:dp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Mu(4194308,4,yp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Mu(4194308,4,e,i)},useInsertionEffect:function(e,i){Mu(4,2,e,i)},useMemo:function(e,i){var a=rn();i=i===void 0?null:i;var l=e();if(bs){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=rn();if(a!==void 0){var h=a(i);if(bs){cn(!0);try{a(i)}finally{cn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=LA.bind(null,Dt,e),[l.memoizedState,e]},useRef:function(e){var i=rn();return e={current:e},i.memoizedState=e},useState:function(e){e=df(e);var i=e.queue,a=Ip.bind(null,Dt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,i){var a=rn();return pf(a,e,i)},useTransition:function(){var e=df(!1);return e=Ap.bind(null,Dt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Dt,h=rn();if(Ht){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Jt===null)throw Error(s(349));(zt&124)!==0||Zg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,dp(Jg.bind(null,l,d,e),[e]),l.flags|=2048,Ea(9,Ou(),Wg.bind(null,l,d,a,i),null),a},useId:function(){var e=rn(),i=Jt.identifierPrefix;if(Ht){var a=Pi,l=xi;a=(l&~(1<<32-je(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Cu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=MA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:_f,useFormState:lp,useActionState:lp,useOptimistic:function(e){var i=rn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=vf.bind(null,Dt,!0,a),a.dispatch=i,[e,i]},useMemoCache:cf,useCacheRefresh:function(){return rn().memoizedState=UA.bind(null,Dt)}},Op={readContext:Fe,use:Du,useCallback:vp,useContext:Fe,useEffect:mp,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:pp,useMemo:Ep,useReducer:Nu,useRef:fp,useState:function(){return Nu(Li)},useDebugValue:gf,useDeferredValue:function(e,i){var a=ye();return Tp(a,Xt.memoizedState,e,i)},useTransition:function(){var e=Nu(Li)[0],i=ye().memoizedState;return[typeof e=="boolean"?e:Fo(e),i]},useSyncExternalStore:$g,useId:wp,useHostTransitionStatus:_f,useFormState:up,useActionState:up,useOptimistic:function(e,i){var a=ye();return np(a,Xt,e,i)},useMemoCache:cf,useCacheRefresh:Rp},zA={readContext:Fe,use:Du,useCallback:vp,useContext:Fe,useEffect:mp,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:pp,useMemo:Ep,useReducer:ff,useRef:fp,useState:function(){return ff(Li)},useDebugValue:gf,useDeferredValue:function(e,i){var a=ye();return Xt===null?pf(a,e,i):Tp(a,Xt.memoizedState,e,i)},useTransition:function(){var e=ff(Li)[0],i=ye().memoizedState;return[typeof e=="boolean"?e:Fo(e),i]},useSyncExternalStore:$g,useId:wp,useHostTransitionStatus:_f,useFormState:hp,useActionState:hp,useOptimistic:function(e,i){var a=ye();return Xt!==null?np(a,Xt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:Rp},Ta=null,Ko=0;function Pu(e){var i=Ko;return Ko+=1,Ta===null&&(Ta=[]),Hg(Ta,e,i)}function Yo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ku(e,i){throw i.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Mp(e){var i=e._init;return i(e._payload)}function Vp(e){function i(x,N){if(e){var U=x.deletions;U===null?(x.deletions=[N],x.flags|=16):U.push(N)}}function a(x,N){if(!e)return null;for(;N!==null;)i(x,N),N=N.sibling;return null}function l(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function h(x,N){return x=Vi(x,N),x.index=0,x.sibling=null,x}function d(x,N,U){return x.index=U,e?(U=x.alternate,U!==null?(U=U.index,U<N?(x.flags|=67108866,N):U):(x.flags|=67108866,N)):(x.flags|=1048576,N)}function v(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function E(x,N,U,G){return N===null||N.tag!==6?(N=zh(U,x.mode,G),N.return=x,N):(N=h(N,U),N.return=x,N)}function w(x,N,U,G){var ot=U.type;return ot===Z?F(x,N,U.props.children,G,U.key):N!==null&&(N.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===b&&Mp(ot)===N.type)?(N=h(N,U.props),Yo(N,U),N.return=x,N):(N=_u(U.type,U.key,U.props,null,x.mode,G),Yo(N,U),N.return=x,N)}function L(x,N,U,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=Bh(U,x.mode,G),N.return=x,N):(N=h(N,U.children||[]),N.return=x,N)}function F(x,N,U,G,ot){return N===null||N.tag!==7?(N=gs(U,x.mode,G,ot),N.return=x,N):(N=h(N,U),N.return=x,N)}function Q(x,N,U){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=zh(""+N,x.mode,U),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case C:return U=_u(N.type,N.key,N.props,null,x.mode,U),Yo(U,N),U.return=x,U;case H:return N=Bh(N,x.mode,U),N.return=x,N;case b:var G=N._init;return N=G(N._payload),Q(x,N,U)}if(ee(N)||P(N))return N=gs(N,x.mode,U,null),N.return=x,N;if(typeof N.then=="function")return Q(x,Pu(N),U);if(N.$$typeof===ct)return Q(x,Au(x,N),U);ku(x,N)}return null}function z(x,N,U,G){var ot=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ot!==null?null:E(x,N,""+U,G);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===ot?w(x,N,U,G):null;case H:return U.key===ot?L(x,N,U,G):null;case b:return ot=U._init,U=ot(U._payload),z(x,N,U,G)}if(ee(U)||P(U))return ot!==null?null:F(x,N,U,G,null);if(typeof U.then=="function")return z(x,N,Pu(U),G);if(U.$$typeof===ct)return z(x,N,Au(x,U),G);ku(x,U)}return null}function B(x,N,U,G,ot){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return x=x.get(U)||null,E(N,x,""+G,ot);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return x=x.get(G.key===null?U:G.key)||null,w(N,x,G,ot);case H:return x=x.get(G.key===null?U:G.key)||null,L(N,x,G,ot);case b:var Ot=G._init;return G=Ot(G._payload),B(x,N,U,G,ot)}if(ee(G)||P(G))return x=x.get(U)||null,F(N,x,G,ot,null);if(typeof G.then=="function")return B(x,N,U,Pu(G),ot);if(G.$$typeof===ct)return B(x,N,U,Au(N,G),ot);ku(N,G)}return null}function Et(x,N,U,G){for(var ot=null,Ot=null,ut=N,pt=N=0,Ve=null;ut!==null&&pt<U.length;pt++){ut.index>pt?(Ve=ut,ut=null):Ve=ut.sibling;var qt=z(x,ut,U[pt],G);if(qt===null){ut===null&&(ut=Ve);break}e&&ut&&qt.alternate===null&&i(x,ut),N=d(qt,N,pt),Ot===null?ot=qt:Ot.sibling=qt,Ot=qt,ut=Ve}if(pt===U.length)return a(x,ut),Ht&&ys(x,pt),ot;if(ut===null){for(;pt<U.length;pt++)ut=Q(x,U[pt],G),ut!==null&&(N=d(ut,N,pt),Ot===null?ot=ut:Ot.sibling=ut,Ot=ut);return Ht&&ys(x,pt),ot}for(ut=l(ut);pt<U.length;pt++)Ve=B(ut,x,pt,U[pt],G),Ve!==null&&(e&&Ve.alternate!==null&&ut.delete(Ve.key===null?pt:Ve.key),N=d(Ve,N,pt),Ot===null?ot=Ve:Ot.sibling=Ve,Ot=Ve);return e&&ut.forEach(function(Dr){return i(x,Dr)}),Ht&&ys(x,pt),ot}function mt(x,N,U,G){if(U==null)throw Error(s(151));for(var ot=null,Ot=null,ut=N,pt=N=0,Ve=null,qt=U.next();ut!==null&&!qt.done;pt++,qt=U.next()){ut.index>pt?(Ve=ut,ut=null):Ve=ut.sibling;var Dr=z(x,ut,qt.value,G);if(Dr===null){ut===null&&(ut=Ve);break}e&&ut&&Dr.alternate===null&&i(x,ut),N=d(Dr,N,pt),Ot===null?ot=Dr:Ot.sibling=Dr,Ot=Dr,ut=Ve}if(qt.done)return a(x,ut),Ht&&ys(x,pt),ot;if(ut===null){for(;!qt.done;pt++,qt=U.next())qt=Q(x,qt.value,G),qt!==null&&(N=d(qt,N,pt),Ot===null?ot=qt:Ot.sibling=qt,Ot=qt);return Ht&&ys(x,pt),ot}for(ut=l(ut);!qt.done;pt++,qt=U.next())qt=B(ut,x,pt,qt.value,G),qt!==null&&(e&&qt.alternate!==null&&ut.delete(qt.key===null?pt:qt.key),N=d(qt,N,pt),Ot===null?ot=qt:Ot.sibling=qt,Ot=qt);return e&&ut.forEach(function(Bb){return i(x,Bb)}),Ht&&ys(x,pt),ot}function Zt(x,N,U,G){if(typeof U=="object"&&U!==null&&U.type===Z&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:t:{for(var ot=U.key;N!==null;){if(N.key===ot){if(ot=U.type,ot===Z){if(N.tag===7){a(x,N.sibling),G=h(N,U.props.children),G.return=x,x=G;break t}}else if(N.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===b&&Mp(ot)===N.type){a(x,N.sibling),G=h(N,U.props),Yo(G,U),G.return=x,x=G;break t}a(x,N);break}else i(x,N);N=N.sibling}U.type===Z?(G=gs(U.props.children,x.mode,G,U.key),G.return=x,x=G):(G=_u(U.type,U.key,U.props,null,x.mode,G),Yo(G,U),G.return=x,x=G)}return v(x);case H:t:{for(ot=U.key;N!==null;){if(N.key===ot)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(x,N.sibling),G=h(N,U.children||[]),G.return=x,x=G;break t}else{a(x,N);break}else i(x,N);N=N.sibling}G=Bh(U,x.mode,G),G.return=x,x=G}return v(x);case b:return ot=U._init,U=ot(U._payload),Zt(x,N,U,G)}if(ee(U))return Et(x,N,U,G);if(P(U)){if(ot=P(U),typeof ot!="function")throw Error(s(150));return U=ot.call(U),mt(x,N,U,G)}if(typeof U.then=="function")return Zt(x,N,Pu(U),G);if(U.$$typeof===ct)return Zt(x,N,Au(x,U),G);ku(x,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,N!==null&&N.tag===6?(a(x,N.sibling),G=h(N,U),G.return=x,x=G):(a(x,N),G=zh(U,x.mode,G),G.return=x,x=G),v(x)):a(x,N)}return function(x,N,U,G){try{Ko=0;var ot=Zt(x,N,U,G);return Ta=null,ot}catch(ut){if(ut===Lo||ut===Su)throw ut;var Ot=dn(29,ut,null,x.mode);return Ot.lanes=G,Ot.return=x,Ot}finally{}}}var Aa=Vp(!0),xp=Vp(!1),Nn=X(null),li=null;function mr(e){var i=e.alternate;J(we,we.current&1),J(Nn,e),li===null&&(i===null||ya.current!==null||i.memoizedState!==null)&&(li=e)}function Pp(e){if(e.tag===22){if(J(we,we.current),J(Nn,e),li===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(li=e)}}else gr()}function gr(){J(we,we.current),J(Nn,Nn.current)}function zi(e){it(Nn),li===e&&(li=null),it(we)}var we=X(0);function Uu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ud(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Ef(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=yn(),h=hr(l);h.payload=i,a!=null&&(h.callback=a),i=fr(e,h,l),i!==null&&(_n(i,e,l),Bo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=yn(),h=hr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=fr(e,h,l),i!==null&&(_n(i,e,l),Bo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=yn(),l=hr(a);l.tag=2,i!=null&&(l.callback=i),i=fr(e,l,a),i!==null&&(_n(i,e,a),Bo(i,e,a))}};function kp(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!No(a,l)||!No(h,d):!0}function Up(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Tf.enqueueReplaceState(i,i.state,null)}function Ss(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lp(e){Lu(e)}function zp(e){console.error(e)}function Bp(e){Lu(e)}function zu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function qp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Af(e,i,a){return a=hr(a),a.tag=3,a.payload={element:null},a.callback=function(){zu(e,i)},a}function Hp(e){return e=hr(e),e.tag=3,e}function jp(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){qp(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){qp(i,a,l),typeof h!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function BA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Po(i,a,h,!0),a=Nn.current,a!==null){switch(a.tag){case 13:return li===null?Qf():a.alternate===null&&le===0&&(le=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===$h?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Yf(e,l,h)),!1;case 22:return a.flags|=65536,l===$h?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Yf(e,l,h)),!1}throw Error(s(435,a.tag))}return Yf(e,l,h),Qf(),!1}if(Ht)return i=Nn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==jh&&(e=Error(s(422),{cause:l}),xo(Rn(e,a)))):(l!==jh&&(i=Error(s(423),{cause:l}),xo(Rn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Rn(l,a),h=Af(e.stateNode,l,h),Jh(e,h),le!==4&&(le=2)),!1;var d=Error(s(520),{cause:l});if(d=Rn(d,a),el===null?el=[d]:el.push(d),le!==4&&(le=2),i===null)return!0;l=Rn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Af(a.stateNode,l,e),Jh(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Tr===null||!Tr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Hp(h),jp(h,e,a,l),Jh(a,h),!1}a=a.return}while(a!==null);return!1}var Fp=Error(s(461)),Oe=!1;function Ue(e,i,a,l){i.child=e===null?xp(i,null,a,l):Aa(i,e.child,a,l)}function Gp(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Ts(i),l=sf(e,i,a,v,d,h),E=af(),e!==null&&!Oe?(of(e,i,h),Bi(e,i,h)):(Ht&&E&&qh(i),i.flags|=1,Ue(e,i,l,h),i.child)}function Qp(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Lh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Kp(e,i,d,l,h)):(e=_u(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Nf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(v,l)&&e.ref===i.ref)return Bi(e,i,h)}return i.flags|=1,e=Vi(d,l),e.ref=i.ref,e.return=i,i.child=e}function Kp(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(No(d,l)&&e.ref===i.ref)if(Oe=!1,i.pendingProps=l=d,Nf(e,h))(e.flags&131072)!==0&&(Oe=!0);else return i.lanes=e.lanes,Bi(e,i,h)}return bf(e,i,a,l,h)}function Yp(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Xp(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&bu(i,d!==null?d.cachePool:null),d!==null?Kg(i,d):ef(),Pp(i);else return i.lanes=i.childLanes=536870912,Xp(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(bu(i,d.cachePool),Kg(i,d),gr(),i.memoizedState=null):(e!==null&&bu(i,null),ef(),gr());return Ue(e,i,h,a),i.child}function Xp(e,i,a,l){var h=Xh();return h=h===null?null:{parent:Se._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&bu(i,null),ef(),Pp(i),e!==null&&Po(e,i,l,!0),null}function Bu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function bf(e,i,a,l,h){return Ts(i),a=sf(e,i,a,l,void 0,h),l=af(),e!==null&&!Oe?(of(e,i,h),Bi(e,i,h)):(Ht&&l&&qh(i),i.flags|=1,Ue(e,i,a,h),i.child)}function $p(e,i,a,l,h,d){return Ts(i),i.updateQueue=null,a=Xg(i,l,a,h),Yg(e),l=af(),e!==null&&!Oe?(of(e,i,d),Bi(e,i,d)):(Ht&&l&&qh(i),i.flags|=1,Ue(e,i,a,d),i.child)}function Zp(e,i,a,l,h){if(Ts(i),i.stateNode===null){var d=fa,v=a.contextType;typeof v=="object"&&v!==null&&(d=Fe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Tf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Zh(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Fe(v):fa,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ef(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Tf.enqueueReplaceState(d,d.state,null),Ho(i,l,d,h),qo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,w=Ss(a,E);d.props=w;var L=d.context,F=a.contextType;v=fa,typeof F=="object"&&F!==null&&(v=Fe(F));var Q=a.getDerivedStateFromProps;F=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||L!==v)&&Up(i,d,l,v),cr=!1;var z=i.memoizedState;d.state=z,Ho(i,l,d,h),qo(),L=i.memoizedState,E||z!==L||cr?(typeof Q=="function"&&(Ef(i,a,Q,l),L=i.memoizedState),(w=cr||kp(i,a,w,l,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Wh(e,i),v=i.memoizedProps,F=Ss(a,v),d.props=F,Q=i.pendingProps,z=d.context,L=a.contextType,w=fa,typeof L=="object"&&L!==null&&(w=Fe(L)),E=a.getDerivedStateFromProps,(L=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Q||z!==w)&&Up(i,d,l,w),cr=!1,z=i.memoizedState,d.state=z,Ho(i,l,d,h),qo();var B=i.memoizedState;v!==Q||z!==B||cr||e!==null&&e.dependencies!==null&&Tu(e.dependencies)?(typeof E=="function"&&(Ef(i,a,E,l),B=i.memoizedState),(F=cr||kp(i,a,F,l,z,B,w)||e!==null&&e.dependencies!==null&&Tu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=w,l=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Bu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Aa(i,e.child,null,h),i.child=Aa(i,null,a,h)):Ue(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Bi(e,i,h),e}function Wp(e,i,a,l){return Vo(),i.flags|=256,Ue(e,i,a,l),i.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:zg()}}function Rf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=On),e}function Jp(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ht){if(h?mr(i):gr(),Ht){var E=oe,w;if(w=E){t:{for(w=E,E=oi;w.nodeType!==8;){if(!E){E=null;break t}if(w=Bn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:ps!==null?{id:xi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},w=dn(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,en=i,oe=null,w=!0):w=!1}w||vs(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return ud(E)?i.lanes=32:i.lanes=536870912,null;zi(i)}return E=l.children,l=l.fallback,h?(gr(),h=i.mode,E=qu({mode:"hidden",children:E},h),l=gs(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=wf(a),h.childLanes=Rf(e,v,a),i.memoizedState=Sf,l):(mr(i),If(i,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(mr(i),i.flags&=-257,i=Cf(e,i,a)):i.memoizedState!==null?(gr(),i.child=e.child,i.flags|=128,i=null):(gr(),h=l.fallback,E=i.mode,l=qu({mode:"visible",children:l.children},E),h=gs(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Aa(i,e.child,null,a),l=i.child,l.memoizedState=wf(a),l.childLanes=Rf(e,v,a),i.memoizedState=Sf,i=h);else if(mr(i),ud(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,xo({value:l,source:null,stack:null}),i=Cf(e,i,a)}else if(Oe||Po(e,i,a,!1),v=(a&e.childLanes)!==0,Oe||v){if(v=Jt,v!==null&&(l=a&-a,l=(l&42)!==0?1:nr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,ha(e,l),_n(v,e,l),Fp;E.data==="$?"||Qf(),i=Cf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,oe=Bn(E.nextSibling),en=i,Ht=!0,_s=null,oi=!1,e!==null&&(Cn[Dn++]=xi,Cn[Dn++]=Pi,Cn[Dn++]=ps,xi=e.id,Pi=e.overflow,ps=i),i=If(i,l.children),i.flags|=4096);return i}return h?(gr(),h=l.fallback,E=i.mode,w=e.child,L=w.sibling,l=Vi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=Vi(L,h):(h=gs(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=wf(a):(w=E.cachePool,w!==null?(L=Se._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=zg(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=Rf(e,v,a),i.memoizedState=Sf,l):(mr(i),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function If(e,i){return i=qu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function qu(e,i){return e=dn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cf(e,i,a){return Aa(i,e.child,null,a),e=If(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function ty(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Gh(e.return,i,a)}function Df(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function ey(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ue(e,i,l.children,a),l=we.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ty(e,a,i);else if(e.tag===19)ty(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(J(we,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Uu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Df(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Uu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Df(i,!0,a,null,d);break;case"together":Df(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Bi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Er|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Po(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Vi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Nf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Tu(e)))}function qA(e,i,a){switch(i.tag){case 3:tt(i,i.stateNode.containerInfo),ur(i,Se,e.memoizedState.cache),Vo();break;case 27:case 5:Ce(i);break;case 4:tt(i,i.stateNode.containerInfo);break;case 10:ur(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(mr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Jp(e,i,a):(mr(i),e=Bi(e,i,a),e!==null?e.sibling:null);mr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Po(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return ey(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(we,we.current),l)break;return null;case 22:case 23:return i.lanes=0,Yp(e,i,a);case 24:ur(i,Se,e.memoizedState.cache)}return Bi(e,i,a)}function ny(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Oe=!0;else{if(!Nf(e,a)&&(i.flags&128)===0)return Oe=!1,qA(e,i,a);Oe=(e.flags&131072)!==0}else Oe=!1,Ht&&(i.flags&1048576)!==0&&Mg(i,Eu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Lh(l)?(e=Ss(l,e),i.tag=1,i=Zp(null,i,l,e,a)):(i.tag=0,i=bf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===It){i.tag=11,i=Gp(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=Qp(null,i,l,e,a);break t}}throw i=Ee(l)||l,Error(s(306,i,""))}}return i;case 0:return bf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ss(l,i.pendingProps),Zp(e,i,l,h,a);case 3:t:{if(tt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Wh(e,i),Ho(i,l,null,a);var v=i.memoizedState;if(l=v.cache,ur(i,Se,l),l!==d.cache&&Qh(i,[Se],a,!0),qo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Wp(e,i,l,a);break t}else if(l!==h){h=Rn(Error(s(424)),i),xo(h),i=Wp(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=Bn(e.firstChild),en=i,Ht=!0,_s=null,oi=!0,a=xp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vo(),l===h){i=Bi(e,i,a);break t}Ue(e,i,l,a)}i=i.child}return i;case 26:return Bu(e,i),e===null?(a=a_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ht||(a=i.type,e=i.pendingProps,l=ec(vt.current).createElement(a),l[Te]=i,l[me]=e,ze(l,a,e),ue(l),i.stateNode=l):i.memoizedState=a_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ce(i),e===null&&Ht&&(l=i.stateNode=i_(i.type,i.pendingProps,vt.current),en=i,oi=!0,h=oe,Sr(i.type)?(cd=h,oe=Bn(l.firstChild)):oe=h),Ue(e,i,i.pendingProps.children,a),Bu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ht&&((h=l=oe)&&(l=gb(l,i.type,i.pendingProps,oi),l!==null?(i.stateNode=l,en=i,oe=Bn(l.firstChild),oi=!1,h=!0):h=!1),h||vs(i)),Ce(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,ad(h,d)?l=null:v!==null&&ad(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=sf(e,i,VA,null,null,a),cl._currentValue=h),Bu(e,i),Ue(e,i,l,a),i.child;case 6:return e===null&&Ht&&((e=a=oe)&&(a=pb(a,i.pendingProps,oi),a!==null?(i.stateNode=a,en=i,oe=null,e=!0):e=!1),e||vs(i)),null;case 13:return Jp(e,i,a);case 4:return tt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Aa(i,null,l,a):Ue(e,i,l,a),i.child;case 11:return Gp(e,i,i.type,i.pendingProps,a);case 7:return Ue(e,i,i.pendingProps,a),i.child;case 8:return Ue(e,i,i.pendingProps.children,a),i.child;case 12:return Ue(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ur(i,i.type,l.value),Ue(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ts(i),h=Fe(h),l=l(h),i.flags|=1,Ue(e,i,l,a),i.child;case 14:return Qp(e,i,i.type,i.pendingProps,a);case 15:return Kp(e,i,i.type,i.pendingProps,a);case 19:return ey(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=qu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Vi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Yp(e,i,a);case 24:return Ts(i),l=Fe(Se),e===null?(h=Xh(),h===null&&(h=Jt,d=Kh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Zh(i),ur(i,Se,h)):((e.lanes&a)!==0&&(Wh(e,i),Ho(i,null,null,a),qo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ur(i,Se,l)):(l=d.cache,ur(i,Se,l),l!==h.cache&&Qh(i,[Se],a,!0))),Ue(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function qi(e){e.flags|=4}function iy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!h_(i)){if(i=Nn.current,i!==null&&((zt&4194048)===zt?li!==null:(zt&62914560)!==zt&&(zt&536870912)===0||i!==li))throw zo=$h,Bg;e.flags|=8192}}function Hu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ho():536870912,e.lanes|=i,Ra|=i)}function Xo(e,i){if(!Ht)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function HA(e,i,a){var l=i.pendingProps;switch(Hh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(i),null;case 1:return re(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ui(Se),gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Mo(i)?qi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pg())),re(i),null;case 26:return a=i.memoizedState,e===null?(qi(i),a!==null?(re(i),iy(i,a)):(re(i),i.flags&=-16777217)):a?a!==e.memoizedState?(qi(i),re(i),iy(i,a)):(re(i),i.flags&=-16777217):(e.memoizedProps!==l&&qi(i),re(i),i.flags&=-16777217),null;case 27:Ze(i),a=vt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&qi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}e=ht.current,Mo(i)?Vg(i):(e=i_(h,l,a),i.stateNode=e,qi(i))}return re(i),null;case 5:if(Ze(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&qi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}if(e=ht.current,Mo(i))Vg(i);else{switch(h=ec(vt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Te]=i,e[me]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(ze(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(i)}}return re(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&qi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=vt.current,Mo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Te]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||$y(e.nodeValue,a)),e||vs(i)}else e=ec(e).createTextNode(l),e[Te]=i,i.stateNode=e}return re(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Mo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Te]=i}else Vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),h=!1}else h=Pg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(zi(i),i):(zi(i),null)}if(zi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Hu(i,i.updateQueue),re(i),null;case 4:return gt(),e===null&&ed(i.stateNode.containerInfo),re(i),null;case 10:return Ui(i.type),re(i),null;case 19:if(it(we),h=i.memoizedState,h===null)return re(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Xo(h,!1);else{if(le!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Uu(e),d!==null){for(i.flags|=128,Xo(h,!1),e=d.updateQueue,i.updateQueue=e,Hu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Og(a,e),a=a.sibling;return J(we,we.current&1|2),i.child}e=e.sibling}h.tail!==null&&En()>Gu&&(i.flags|=128,l=!0,Xo(h,!1),i.lanes=4194304)}else{if(!l)if(e=Uu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Hu(i,e),Xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ht)return re(i),null}else 2*En()-h.renderingStartTime>Gu&&a!==536870912&&(i.flags|=128,l=!0,Xo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=En(),i.sibling=null,e=we.current,J(we,l?e&1|2:e&1),i):(re(i),null);case 22:case 23:return zi(i),nf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(re(i),i.subtreeFlags&6&&(i.flags|=8192)):re(i),a=i.updateQueue,a!==null&&Hu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&it(As),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ui(Se),re(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function jA(e,i){switch(Hh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ui(Se),gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ze(i),null;case 13:if(zi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Vo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(we),null;case 4:return gt(),null;case 10:return Ui(i.type),null;case 22:case 23:return zi(i),nf(),e!==null&&it(As),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ui(Se),null;case 25:return null;default:return null}}function ry(e,i){switch(Hh(i),i.tag){case 3:Ui(Se),gt();break;case 26:case 27:case 5:Ze(i);break;case 4:gt();break;case 13:zi(i);break;case 19:it(we);break;case 10:Ui(i.type);break;case 22:case 23:zi(i),nf(),e!==null&&it(As);break;case 24:Ui(Se)}}function $o(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){Wt(i,i.return,E)}}function pr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a,L=E;try{L()}catch(F){Wt(h,w,F)}}}l=l.next}while(l!==d)}}catch(F){Wt(i,i.return,F)}}function sy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Qg(i,a)}catch(l){Wt(e,e.return,l)}}}function ay(e,i,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Wt(e,i,l)}}function Zo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Wt(e,i,h)}}function ui(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Wt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Wt(e,i,h)}else a.current=null}function oy(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Wt(e,e.return,h)}}function Of(e,i,a){try{var l=e.stateNode;cb(l,e.type,a,i),l[me]=i}catch(h){Wt(e,e.return,h)}}function ly(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sr(e.type)||e.tag===4}function Mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ly(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=tc));else if(l!==4&&(l===27&&Sr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Vf(e,i,a),e=e.sibling;e!==null;)Vf(e,i,a),e=e.sibling}function ju(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Sr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ju(e,i,a),e=e.sibling;e!==null;)ju(e,i,a),e=e.sibling}function uy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);ze(i,l,a),i[Te]=e,i[me]=a}catch(d){Wt(e,e.return,d)}}var Hi=!1,he=!1,xf=!1,cy=typeof WeakSet=="function"?WeakSet:Set,Me=null;function FA(e,i){if(e=e.containerInfo,rd=oc,e=Tg(e),Oh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,w=-1,L=0,F=0,Q=e,z=null;e:for(;;){for(var B;Q!==a||h!==0&&Q.nodeType!==3||(E=v+h),Q!==d||l!==0&&Q.nodeType!==3||(w=v+l),Q.nodeType===3&&(v+=Q.nodeValue.length),(B=Q.firstChild)!==null;)z=Q,Q=B;for(;;){if(Q===e)break e;if(z===a&&++L===h&&(E=v),z===d&&++F===l&&(w=v),(B=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=B}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(sd={focusedElem:e,selectionRange:a},oc=!1,Me=i;Me!==null;)if(i=Me,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Me=e;else for(;Me!==null;){switch(i=Me,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Et=Ss(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(mt){Wt(a,a.return,mt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)ld(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Me=e;break}Me=i.return}}function hy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:yr(e,a),l&4&&$o(5,a);break;case 1:if(yr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Wt(a,a.return,v)}else{var h=Ss(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Wt(a,a.return,v)}}l&64&&sy(a),l&512&&Zo(a,a.return);break;case 3:if(yr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Qg(e,i)}catch(v){Wt(a,a.return,v)}}break;case 27:i===null&&l&4&&uy(a);case 26:case 5:yr(e,a),i===null&&l&4&&oy(a),l&512&&Zo(a,a.return);break;case 12:yr(e,a);break;case 13:yr(e,a),l&4&&my(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=JA.bind(null,a),yb(e,a))));break;case 22:if(l=a.memoizedState!==null||Hi,!l){i=i!==null&&i.memoizedState!==null||he,h=Hi;var d=he;Hi=l,(he=i)&&!d?_r(e,a,(a.subtreeFlags&8772)!==0):yr(e,a),Hi=h,he=d}break;case 30:break;default:yr(e,a)}}function fy(e){var i=e.alternate;i!==null&&(e.alternate=null,fy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&sr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ie=null,sn=!1;function ji(e,i,a){for(a=a.child;a!==null;)dy(e,i,a),a=a.sibling}function dy(e,i,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:he||ui(a,i),ji(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:he||ui(a,i);var l=ie,h=sn;Sr(a.type)&&(ie=a.stateNode,sn=!1),ji(e,i,a),al(a.stateNode),ie=l,sn=h;break;case 5:he||ui(a,i);case 6:if(l=ie,h=sn,ie=null,ji(e,i,a),ie=l,sn=h,ie!==null)if(sn)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(a.stateNode)}catch(d){Wt(a,i,d)}else try{ie.removeChild(a.stateNode)}catch(d){Wt(a,i,d)}break;case 18:ie!==null&&(sn?(e=ie,e_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ml(e)):e_(ie,a.stateNode));break;case 4:l=ie,h=sn,ie=a.stateNode.containerInfo,sn=!0,ji(e,i,a),ie=l,sn=h;break;case 0:case 11:case 14:case 15:he||pr(2,a,i),he||pr(4,a,i),ji(e,i,a);break;case 1:he||(ui(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ay(a,i,l)),ji(e,i,a);break;case 21:ji(e,i,a);break;case 22:he=(l=he)||a.memoizedState!==null,ji(e,i,a),he=l;break;default:ji(e,i,a)}}function my(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){Wt(i,i.return,a)}}function GA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new cy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new cy),i;default:throw Error(s(435,e.tag))}}function Pf(e,i){var a=GA(e);i.forEach(function(l){var h=tb.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function mn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Sr(E.type)){ie=E.stateNode,sn=!1;break t}break;case 5:ie=E.stateNode,sn=!1;break t;case 3:case 4:ie=E.stateNode.containerInfo,sn=!0;break t}E=E.return}if(ie===null)throw Error(s(160));dy(d,v,h),ie=null,sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)gy(i,e),i=i.sibling}var zn=null;function gy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(i,e),gn(e),l&4&&(pr(3,e,e.return),$o(3,e),pr(5,e,e.return));break;case 1:mn(i,e),gn(e),l&512&&(he||a===null||ui(a,a.return)),l&64&&Hi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=zn;if(mn(i,e),gn(e),l&512&&(he||a===null||ui(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Jr]||d[Te]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),ze(d,l,a),d[Te]=e,ue(d),l=d;break t;case"link":var v=u_("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;case"meta":if(v=u_("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Te]=e,ue(d),l=d}e.stateNode=l}else c_(h,e.type,e.stateNode);else e.stateNode=l_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?c_(h,e.type,e.stateNode):l_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Of(e,e.memoizedProps,a.memoizedProps)}break;case 27:mn(i,e),gn(e),l&512&&(he||a===null||ui(a,a.return)),a!==null&&l&4&&Of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mn(i,e),gn(e),l&512&&(he||a===null||ui(a,a.return)),e.flags&32){h=e.stateNode;try{An(h,"")}catch(B){Wt(e,e.return,B)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Of(e,h,a!==null?a.memoizedProps:h)),l&1024&&(xf=!0);break;case 6:if(mn(i,e),gn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){Wt(e,e.return,B)}}break;case 3:if(rc=null,h=zn,zn=nc(i.containerInfo),mn(i,e),zn=h,gn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(i.containerInfo)}catch(B){Wt(e,e.return,B)}xf&&(xf=!1,py(e));break;case 4:l=zn,zn=nc(e.stateNode.containerInfo),mn(i,e),gn(e),zn=l;break;case 12:mn(i,e),gn(e);break;case 13:mn(i,e),gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qf=En()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=Hi,F=he;if(Hi=L||h,he=F||w,mn(i,e),he=F,Hi=L,gn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Hi||he||ws(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=w.stateNode;var Q=w.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Wt(w,w.return,B)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(B){Wt(w,w.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Pf(e,a))));break;case 19:mn(i,e),gn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 30:break;case 21:break;default:mn(i,e),gn(e)}}function gn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(ly(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Mf(e);ju(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(An(v,""),a.flags&=-33);var E=Mf(e);ju(e,E,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=Mf(e);Vf(e,L,w);break;default:throw Error(s(161))}}catch(F){Wt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function py(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;py(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function yr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)hy(e,i.alternate,i),i=i.sibling}function ws(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:pr(4,i,i.return),ws(i);break;case 1:ui(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&ay(i,i.return,a),ws(i);break;case 27:al(i.stateNode);case 26:case 5:ui(i,i.return),ws(i);break;case 22:i.memoizedState===null&&ws(i);break;case 30:ws(i);break;default:ws(i)}e=e.sibling}}function _r(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:_r(h,d,a),$o(4,d);break;case 1:if(_r(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Wt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)Gg(w[h],E)}catch(L){Wt(l,l.return,L)}}a&&v&64&&sy(d),Zo(d,d.return);break;case 27:uy(d);case 26:case 5:_r(h,d,a),a&&l===null&&v&4&&oy(d),Zo(d,d.return);break;case 12:_r(h,d,a);break;case 13:_r(h,d,a),a&&v&4&&my(h,d);break;case 22:d.memoizedState===null&&_r(h,d,a),Zo(d,d.return);break;case 30:break;default:_r(h,d,a)}i=i.sibling}}function kf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ko(a))}function Uf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ko(e))}function ci(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)yy(e,i,a,l),i=i.sibling}function yy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ci(e,i,a,l),h&2048&&$o(9,i);break;case 1:ci(e,i,a,l);break;case 3:ci(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ko(e)));break;case 12:if(h&2048){ci(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Wt(i,i.return,w)}}else ci(e,i,a,l);break;case 13:ci(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ci(e,i,a,l):Wo(e,i):d._visibility&2?ci(e,i,a,l):(d._visibility|=2,ba(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&kf(v,i);break;case 24:ci(e,i,a,l),h&2048&&Uf(i.alternate,i);break;default:ci(e,i,a,l)}}function ba(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,w=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:ba(d,v,E,w,h),$o(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?ba(d,v,E,w,h):Wo(d,v):(F._visibility|=2,ba(d,v,E,w,h)),h&&L&2048&&kf(v.alternate,v);break;case 24:ba(d,v,E,w,h),h&&L&2048&&Uf(v.alternate,v);break;default:ba(d,v,E,w,h)}i=i.sibling}}function Wo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:Wo(a,l),h&2048&&kf(l.alternate,l);break;case 24:Wo(a,l),h&2048&&Uf(l.alternate,l);break;default:Wo(a,l)}i=i.sibling}}var Jo=8192;function Sa(e){if(e.subtreeFlags&Jo)for(e=e.child;e!==null;)_y(e),e=e.sibling}function _y(e){switch(e.tag){case 26:Sa(e),e.flags&Jo&&e.memoizedState!==null&&Nb(zn,e.memoizedState,e.memoizedProps);break;case 5:Sa(e);break;case 3:case 4:var i=zn;zn=nc(e.stateNode.containerInfo),Sa(e),zn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Jo,Jo=16777216,Sa(e),Jo=i):Sa(e));break;default:Sa(e)}}function vy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function tl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Me=l,Ty(l,e)}vy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ey(e),e=e.sibling}function Ey(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&pr(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Fu(e)):tl(e);break;default:tl(e)}}function Fu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Me=l,Ty(l,e)}vy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:pr(8,i,i.return),Fu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Fu(i));break;default:Fu(i)}e=e.sibling}}function Ty(e,i){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:pr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ko(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Me=l;else t:for(a=e;Me!==null;){l=Me;var h=l.sibling,d=l.return;if(fy(l),l===a){Me=null;break t}if(h!==null){h.return=d,Me=h;break t}Me=d}}}var QA={getCacheForType:function(e){var i=Fe(Se),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},KA=typeof WeakMap=="function"?WeakMap:Map,Qt=0,Jt=null,Mt=null,zt=0,Kt=0,pn=null,vr=!1,wa=!1,Lf=!1,Fi=0,le=0,Er=0,Rs=0,zf=0,On=0,Ra=0,el=null,an=null,Bf=!1,qf=0,Gu=1/0,Qu=null,Tr=null,Le=0,Ar=null,Ia=null,Ca=0,Hf=0,jf=null,Ay=null,nl=0,Ff=null;function yn(){if((Qt&2)!==0&&zt!==0)return zt&-zt;if(j.T!==null){var e=ga;return e!==0?e:Zf()}return ir()}function by(){On===0&&(On=(zt&536870912)===0||Ht?co():536870912);var e=Nn.current;return e!==null&&(e.flags|=32),On}function _n(e,i,a){(e===Jt&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(Da(e,0),br(e,zt,On,!1)),Ai(e,a),((Qt&2)===0||e!==Jt)&&(e===Jt&&((Qt&2)===0&&(Rs|=a),le===4&&br(e,zt,On,!1)),hi(e))}function Sy(e,i,a){if((Qt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Wr(e,i),h=l?$A(e,i):Kf(e,i,!0),d=l;do{if(h===0){wa&&!l&&br(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!YA(a)){h=Kf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=el;var w=E.current.memoizedState.isDehydrated;if(w&&(Da(E,v).flags|=256),v=Kf(E,v,!1),v!==2){if(Lf&&!w){E.errorRecoveryDisabledLanes|=d,Rs|=d,h=4;break t}d=an,an=h,d!==null&&(an===null?an=d:an.push.apply(an,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Da(e,0),br(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:br(l,i,On,!vr);break t;case 2:an=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=qf+300-En(),10<h)){if(br(l,i,On,!vr),Qs(l,0,!0)!==0)break t;l.timeoutHandle=Jy(wy.bind(null,l,a,an,Qu,Bf,i,On,Rs,Ra,vr,d,2,-0,0),h);break t}wy(l,a,an,Qu,Bf,i,On,Rs,Ra,vr,d,0,-0,0)}}break}while(!0);hi(e)}function wy(e,i,a,l,h,d,v,E,w,L,F,Q,z,B){if(e.timeoutHandle=-1,Q=i.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(ul={stylesheets:null,count:0,unsuspend:Db},_y(i),Q=Ob(),Q!==null)){e.cancelPendingCommit=Q(My.bind(null,e,i,d,a,l,h,v,E,w,F,1,z,B)),br(e,d,v,!L);return}My(e,i,d,a,l,h,v,E,w)}function YA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(e,i,a,l){i&=~zf,i&=~Rs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-je(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&$n(e,a,i)}function Ku(){return(Qt&6)===0?(il(0),!1):!0}function Gf(){if(Mt!==null){if(Kt===0)var e=Mt.return;else e=Mt,ki=Es=null,lf(e),Ta=null,Ko=0,e=Mt;for(;e!==null;)ry(e.alternate,e),e=e.return;Mt=null}}function Da(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,fb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Gf(),Jt=e,Mt=a=Vi(e.current,null),zt=i,Kt=0,pn=null,vr=!1,wa=Wr(e,i),Lf=!1,Ra=On=zf=Rs=Er=le=0,an=el=null,Bf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-je(l),d=1<<h;i|=e[h],l&=~d}return Fi=i,gu(),a}function Ry(e,i){Dt=null,j.H=xu,i===Lo||i===Su?(i=jg(),Kt=3):i===Bg?(i=jg(),Kt=4):Kt=i===Fp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,Mt===null&&(le=1,zu(e,Rn(i,e.current)))}function Iy(){var e=j.H;return j.H=xu,e===null?xu:e}function Cy(){var e=j.A;return j.A=QA,e}function Qf(){le=4,vr||(zt&4194048)!==zt&&Nn.current!==null||(wa=!0),(Er&134217727)===0&&(Rs&134217727)===0||Jt===null||br(Jt,zt,On,!1)}function Kf(e,i,a){var l=Qt;Qt|=2;var h=Iy(),d=Cy();(Jt!==e||zt!==i)&&(Qu=null,Da(e,i)),i=!1;var v=le;t:do try{if(Kt!==0&&Mt!==null){var E=Mt,w=pn;switch(Kt){case 8:Gf(),v=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(i=!0);var L=Kt;if(Kt=0,pn=null,Na(e,E,w,L),a&&wa){v=0;break t}break;default:L=Kt,Kt=0,pn=null,Na(e,E,w,L)}}XA(),v=le;break}catch(F){Ry(e,F)}while(!0);return i&&e.shellSuspendCounter++,ki=Es=null,Qt=l,j.H=h,j.A=d,Mt===null&&(Jt=null,zt=0,gu()),v}function XA(){for(;Mt!==null;)Dy(Mt)}function $A(e,i){var a=Qt;Qt|=2;var l=Iy(),h=Cy();Jt!==e||zt!==i?(Qu=null,Gu=En()+500,Da(e,i)):wa=Wr(e,i);t:do try{if(Kt!==0&&Mt!==null){i=Mt;var d=pn;e:switch(Kt){case 1:Kt=0,pn=null,Na(e,i,d,1);break;case 2:case 9:if(qg(d)){Kt=0,pn=null,Ny(i);break}i=function(){Kt!==2&&Kt!==9||Jt!==e||(Kt=7),hi(e)},d.then(i,i);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:qg(d)?(Kt=0,pn=null,Ny(i)):(Kt=0,pn=null,Na(e,i,d,7));break;case 5:var v=null;switch(Mt.tag){case 26:v=Mt.memoizedState;case 5:case 27:var E=Mt;if(!v||h_(v)){Kt=0,pn=null;var w=E.sibling;if(w!==null)Mt=w;else{var L=E.return;L!==null?(Mt=L,Yu(L)):Mt=null}break e}}Kt=0,pn=null,Na(e,i,d,5);break;case 6:Kt=0,pn=null,Na(e,i,d,6);break;case 8:Gf(),le=6;break t;default:throw Error(s(462))}}ZA();break}catch(F){Ry(e,F)}while(!0);return ki=Es=null,j.H=l,j.A=h,Qt=a,Mt!==null?0:(Jt=null,zt=0,gu(),le)}function ZA(){for(;Mt!==null&&!Kr();)Dy(Mt)}function Dy(e){var i=ny(e.alternate,e,Fi);e.memoizedProps=e.pendingProps,i===null?Yu(e):Mt=i}function Ny(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=$p(a,i,i.pendingProps,i.type,void 0,zt);break;case 11:i=$p(a,i,i.pendingProps,i.type.render,i.ref,zt);break;case 5:lf(i);default:ry(a,i),i=Mt=Og(i,Fi),i=ny(a,i,Fi)}e.memoizedProps=e.pendingProps,i===null?Yu(e):Mt=i}function Na(e,i,a,l){ki=Es=null,lf(i),Ta=null,Ko=0;var h=i.return;try{if(BA(e,h,i,a,zt)){le=1,zu(e,Rn(a,e.current)),Mt=null;return}}catch(d){if(h!==null)throw Mt=h,d;le=1,zu(e,Rn(a,e.current)),Mt=null;return}i.flags&32768?(Ht||l===1?e=!0:wa||(zt&536870912)!==0?e=!1:(vr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Oy(i,e)):Yu(i)}function Yu(e){var i=e;do{if((i.flags&32768)!==0){Oy(i,vr);return}e=i.return;var a=HA(i.alternate,i,Fi);if(a!==null){Mt=a;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=e}while(i!==null);le===0&&(le=5)}function Oy(e,i){do{var a=jA(e.alternate,e);if(a!==null){a.flags&=32767,Mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=a}while(e!==null);le=6,Mt=null}function My(e,i,a,l,h,d,v,E,w){e.cancelPendingCommit=null;do Xu();while(Le!==0);if((Qt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=kh,fo(e,a,d,v,E,w),e===Jt&&(Mt=Jt=null,zt=0),Ia=i,Ar=e,Ca=a,Hf=d,jf=h,Ay=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,eb(Yr,function(){return Uy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,h=nt.p,nt.p=2,v=Qt,Qt|=4;try{FA(e,i,a)}finally{Qt=v,nt.p=h,j.T=l}}Le=1,Vy(),xy(),Py()}}function Vy(){if(Le===1){Le=0;var e=Ar,i=Ia,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var l=nt.p;nt.p=2;var h=Qt;Qt|=4;try{gy(i,e);var d=sd,v=Tg(e.containerInfo),E=d.focusedElem,w=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Eg(E.ownerDocument.documentElement,E)){if(w!==null&&Oh(E)){var L=w.start,F=w.end;if(F===void 0&&(F=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(F,E.value.length);else{var Q=E.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var B=z.getSelection(),Et=E.textContent.length,mt=Math.min(w.start,Et),Zt=w.end===void 0?mt:Math.min(w.end,Et);!B.extend&&mt>Zt&&(v=Zt,Zt=mt,mt=v);var x=vg(E,mt),N=vg(E,Zt);if(x&&N&&(B.rangeCount!==1||B.anchorNode!==x.node||B.anchorOffset!==x.offset||B.focusNode!==N.node||B.focusOffset!==N.offset)){var U=Q.createRange();U.setStart(x.node,x.offset),B.removeAllRanges(),mt>Zt?(B.addRange(U),B.extend(N.node,N.offset)):(U.setEnd(N.node,N.offset),B.addRange(U))}}}}for(Q=[],B=E;B=B.parentNode;)B.nodeType===1&&Q.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Q.length;E++){var G=Q[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}oc=!!rd,sd=rd=null}finally{Qt=h,nt.p=l,j.T=a}}e.current=i,Le=2}}function xy(){if(Le===2){Le=0;var e=Ar,i=Ia,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var l=nt.p;nt.p=2;var h=Qt;Qt|=4;try{hy(e,i.alternate,i)}finally{Qt=h,nt.p=l,j.T=a}}Le=3}}function Py(){if(Le===4||Le===3){Le=0,Xn();var e=Ar,i=Ia,a=Ca,l=Ay;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Le=5:(Le=0,Ia=Ar=null,ky(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Tr=null),Ks(a),i=i.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(ae,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=j.T,h=nt.p,nt.p=2,j.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{j.T=i,nt.p=h}}(Ca&3)!==0&&Xu(),hi(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Ff?nl++:(nl=0,Ff=e):nl=0,il(0)}}function ky(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ko(i)))}function Xu(e){return Vy(),xy(),Py(),Uy()}function Uy(){if(Le!==5)return!1;var e=Ar,i=Hf;Hf=0;var a=Ks(Ca),l=j.T,h=nt.p;try{nt.p=32>a?32:a,j.T=null,a=jf,jf=null;var d=Ar,v=Ca;if(Le=0,Ia=Ar=null,Ca=0,(Qt&6)!==0)throw Error(s(331));var E=Qt;if(Qt|=4,Ey(d.current),yy(d,d.current,v,a),Qt=E,il(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(ae,d)}catch{}return!0}finally{nt.p=h,j.T=l,ky(e,i)}}function Ly(e,i,a){i=Rn(a,i),i=Af(e.stateNode,i,2),e=fr(e,i,2),e!==null&&(Ai(e,2),hi(e))}function Wt(e,i,a){if(e.tag===3)Ly(e,e,a);else for(;i!==null;){if(i.tag===3){Ly(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Tr===null||!Tr.has(l))){e=Rn(a,e),a=Hp(2),l=fr(i,a,2),l!==null&&(jp(a,l,i,e),Ai(l,2),hi(l));break}}i=i.return}}function Yf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new KA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Lf=!0,h.add(a),e=WA.bind(null,e,i,a),i.then(e,e))}function WA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Jt===e&&(zt&a)===a&&(le===4||le===3&&(zt&62914560)===zt&&300>En()-qf?(Qt&2)===0&&Da(e,0):zf|=a,Ra===zt&&(Ra=0)),hi(e)}function zy(e,i){i===0&&(i=ho()),e=ha(e,i),e!==null&&(Ai(e,i),hi(e))}function JA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),zy(e,a)}function tb(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),zy(e,a)}function eb(e,i){return Ei(e,i)}var $u=null,Oa=null,Xf=!1,Zu=!1,$f=!1,Is=0;function hi(e){e!==Oa&&e.next===null&&(Oa===null?$u=Oa=e:Oa=Oa.next=e),Zu=!0,Xf||(Xf=!0,ib())}function il(e,i){if(!$f&&Zu){$f=!0;do for(var a=!1,l=$u;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-je(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,jy(l,d))}else d=zt,d=Qs(l,l===Jt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Wr(l,d)||(a=!0,jy(l,d));l=l.next}while(a);$f=!1}}function nb(){By()}function By(){Zu=Xf=!1;var e=0;Is!==0&&(hb()&&(e=Is),Is=0);for(var i=En(),a=null,l=$u;l!==null;){var h=l.next,d=qy(l,i);d===0?(l.next=null,a===null?$u=h:a.next=h,h===null&&(Oa=a)):(a=l,(e!==0||(d&3)!==0)&&(Zu=!0)),l=h}il(e)}function qy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-je(d),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&l)!==0)&&(h[v]=uo(E,i)):w<=i&&(e.expiredLanes|=E),d&=~E}if(i=Jt,a=zt,a=Qs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&er(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&er(l),Ks(a)){case 2:case 8:a=Fs;break;case 32:a=Yr;break;case 268435456:a=Gs;break;default:a=Yr}return l=Hy.bind(null,e),a=Ei(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&er(l),e.callbackPriority=2,e.callbackNode=null,2}function Hy(e,i){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xu()&&e.callbackNode!==a)return null;var l=zt;return l=Qs(e,e===Jt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Sy(e,l,i),qy(e,En()),e.callbackNode!=null&&e.callbackNode===a?Hy.bind(null,e):null)}function jy(e,i){if(Xu())return null;Sy(e,i,!0)}function ib(){db(function(){(Qt&6)!==0?Ei(oo,nb):By()})}function Zf(){return Is===0&&(Is=co()),Is}function Fy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Js(""+e)}function Gy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function rb(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Fy((h[me]||null).action),v=l.submitter;v&&(i=(i=v[me]||null)?Fy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new ta("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Is!==0){var w=v?Gy(h,v):new FormData(h);yf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=v?Gy(h,v):new FormData(h),yf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var Wf=0;Wf<Ph.length;Wf++){var Jf=Ph[Wf],sb=Jf.toLowerCase(),ab=Jf[0].toUpperCase()+Jf.slice(1);Ln(sb,"on"+ab)}Ln(Sg,"onAnimationEnd"),Ln(wg,"onAnimationIteration"),Ln(Rg,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(bA,"onTransitionRun"),Ln(SA,"onTransitionStart"),Ln(wA,"onTransitionCancel"),Ln(Ig,"onTransitionEnd"),Si("onMouseEnter",["mouseout","mouseover"]),Si("onMouseLeave",["mouseout","mouseover"]),Si("onPointerEnter",["pointerout","pointerover"]),Si("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function Qy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],w=E.instance,L=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Lu(F)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(E=l[v],w=E.instance,L=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Lu(F)}h.currentTarget=null,d=w}}}}function Vt(e,i){var a=i[go];a===void 0&&(a=i[go]=new Set);var l=e+"__bubble";a.has(l)||(Ky(i,e,2,!1),a.add(l))}function td(e,i,a){var l=0;i&&(l|=4),Ky(a,e,l,i)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Wu]){e[Wu]=!0,po.forEach(function(a){a!=="selectionchange"&&(ob.has(a)||td(a,!1,e),td(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Wu]||(i[Wu]=!0,td("selectionchange",!1,i))}}function Ky(e,i,a,l){switch(y_(i)){case 2:var h=xb;break;case 8:h=Pb;break;default:h=gd}a=h.bind(null,i,a,e),h=void 0,!Sn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function nd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=bi(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}E=E.parentNode}}l=l.return}tu(function(){var L=d,F=bn(a),Q=[];t:{var z=Cg.get(e);if(z!==void 0){var B=ta,Et=e;switch(e){case"keypress":if(ni(a)===0)break t;case"keydown":case"keyup":B=aa;break;case"focusin":Et="focus",B=ia;break;case"focusout":Et="blur",B=ia;break;case"beforeblur":case"afterblur":B=ia;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=lu;break;case Sg:case wg:case Rg:B=ra;break;case Ig:B=cu;break;case"scroll":case"scrollend":B=eu;break;case"wheel":B=oa;break;case"copy":case"cut":case"paste":B=sa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Co;break;case"toggle":case"beforetoggle":B=fu}var mt=(i&4)!==0,Zt=!mt&&(e==="scroll"||e==="scrollend"),x=mt?z!==null?z+"Capture":null:z;mt=[];for(var N=L,U;N!==null;){var G=N;if(U=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||U===null||x===null||(G=as(N,x),G!=null&&mt.push(sl(N,G,U))),Zt)break;N=N.return}0<mt.length&&(z=new B(z,Et,null,a,F),Q.push({event:z,listeners:mt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==Ii&&(Et=a.relatedTarget||a.fromElement)&&(bi(Et)||Et[Tn]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(Et=a.relatedTarget||a.toElement,B=L,Et=Et?bi(Et):null,Et!==null&&(Zt=c(Et),mt=Et.tag,Et!==Zt||mt!==5&&mt!==27&&mt!==6)&&(Et=null)):(B=null,Et=L),B!==Et)){if(mt=wn,G="onMouseLeave",x="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(mt=Co,G="onPointerLeave",x="onPointerEnter",N="pointer"),Zt=B==null?z:Wn(B),U=Et==null?z:Wn(Et),z=new mt(G,N+"leave",B,a,F),z.target=Zt,z.relatedTarget=U,G=null,bi(F)===L&&(mt=new mt(x,N+"enter",Et,a,F),mt.target=U,mt.relatedTarget=Zt,G=mt),Zt=G,B&&Et)e:{for(mt=B,x=Et,N=0,U=mt;U;U=Ma(U))N++;for(U=0,G=x;G;G=Ma(G))U++;for(;0<N-U;)mt=Ma(mt),N--;for(;0<U-N;)x=Ma(x),U--;for(;N--;){if(mt===x||x!==null&&mt===x.alternate)break e;mt=Ma(mt),x=Ma(x)}mt=null}else mt=null;B!==null&&Yy(Q,z,B,mt,!1),Et!==null&&Zt!==null&&Yy(Q,Zt,Et,mt,!0)}}t:{if(z=L?Wn(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var ot=dg;else if(be(z))if(mg)ot=EA;else{ot=_A;var Ot=yA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&To(L.elementType)&&(ot=dg):ot=vA;if(ot&&(ot=ot(e,L))){Mi(Q,ot,a,F);break t}Ot&&Ot(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&or(z,"number",z.value)}switch(Ot=L?Wn(L):window,e){case"focusin":(be(Ot)||Ot.contentEditable==="true")&&(la=Ot,Mh=L,Oo=null);break;case"focusout":Oo=Mh=la=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,Ag(Q,a,F);break;case"selectionchange":if(AA)break;case"keydown":case"keyup":Ag(Q,a,F)}var ut;if(si)t:{switch(e){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Ut?q(e,a)&&(pt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(_&&a.locale!=="ko"&&(Ut||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Ut&&(ut=bo()):(ei=F,lr="value"in ei?ei.value:ei.textContent,Ut=!0)),Ot=Ju(L,pt),0<Ot.length&&(pt=new Ro(pt,e,null,a,F),Q.push({event:pt,listeners:Ot}),ut?pt.data=ut:(ut=et(a),ut!==null&&(pt.data=ut)))),(ut=m?Ae(e,a):Lt(e,a))&&(pt=Ju(L,"onBeforeInput"),0<pt.length&&(Ot=new Ro("onBeforeInput","beforeinput",null,a,F),Q.push({event:Ot,listeners:pt}),Ot.data=ut)),rb(Q,e,L,a,F)}Qy(Q,i)})}function sl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function Ju(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=as(e,a),h!=null&&l.unshift(sl(e,h,d)),h=as(e,i),h!=null&&l.push(sl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Ma(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yy(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,w=E.alternate,L=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||L===null||(w=L,h?(L=as(a,d),L!=null&&v.unshift(sl(a,L,w))):h||(L=as(a,d),L!=null&&v.push(sl(a,L,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var lb=/\r\n?/g,ub=/\u0000|\uFFFD/g;function Xy(e){return(typeof e=="string"?e:""+e).replace(lb,`
`).replace(ub,"")}function $y(e,i){return i=Xy(i),Xy(e)===i}function tc(){}function $t(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||An(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&An(e,""+l);break;case"className":Jn(e,"class",l);break;case"tabIndex":Jn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,a,l);break;case"style":Eo(e,l,d);break;case"data":if(i!=="object"){Jn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Js(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&$t(e,i,"name",h.name,h,null),$t(e,i,"formEncType",h.formEncType,h,null),$t(e,i,"formMethod",h.formMethod,h,null),$t(e,i,"formTarget",h.formTarget,h,null)):($t(e,i,"encType",h.encType,h,null),$t(e,i,"method",h.method,h,null),$t(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Js(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=tc);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Js(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),ar(e,"popover",l);break;case"xlinkActuate":Pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ar(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wh.get(a)||a,ar(e,a,l))}}function id(e,i,a,l,h,d){switch(a){case"style":Eo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?An(e,l):(typeof l=="number"||typeof l=="bigint")&&An(e,""+l);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ys.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[me]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ar(e,a,l)}}}function ze(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$t(e,i,d,v,a,null)}}h&&$t(e,i,"srcSet",a.srcSet,a,null),l&&$t(e,i,"src",a.src,a,null);return;case"input":Vt("invalid",e);var E=d=v=h=null,w=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":w=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:$t(e,i,l,F,a,null)}}is(e,d,E,w,L,v,h,!1),Ws(e);return;case"select":Vt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:$t(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ri(e,!!l,i,!1):a!=null&&Ri(e,!!l,a,!0);return;case"textarea":Vt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:$t(e,i,v,E,a,null)}rs(e,l,h,d),Ws(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(e,i,w,l,a,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(l=0;l<rl.length;l++)Vt(rl[l],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$t(e,i,L,l,a,null)}return;default:if(To(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&id(e,i,F,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&$t(e,i,E,l,a,null))}function cb(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,w=null,L=null,F=null;for(B in a){var Q=a[B];if(a.hasOwnProperty(B)&&Q!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=Q;default:l.hasOwnProperty(B)||$t(e,i,B,null,l,Q)}}for(var z in l){var B=l[z];if(Q=a[z],l.hasOwnProperty(z)&&(B!=null||Q!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==Q&&$t(e,i,z,B,l,Q)}}hn(e,v,E,w,L,F,d,h);return;case"select":B=v=E=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":B=w;default:l.hasOwnProperty(d)||$t(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==w&&$t(e,i,h,d,l,w)}i=E,a=v,l=B,z!=null?Ri(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ri(e,!!a,i,!0):Ri(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:$t(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$t(e,i,v,h,l,d)}Yt(e,z,B);return;case"option":for(var Et in a)if(z=a[Et],a.hasOwnProperty(Et)&&z!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:$t(e,i,Et,null,l,z)}for(w in l)if(z=l[w],B=a[w],l.hasOwnProperty(w)&&z!==B&&(z!=null||B!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:$t(e,i,w,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)z=a[mt],a.hasOwnProperty(mt)&&z!=null&&!l.hasOwnProperty(mt)&&$t(e,i,mt,null,l,z);for(L in l)if(z=l[L],B=a[L],l.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:$t(e,i,L,z,l,B)}return;default:if(To(i)){for(var Zt in a)z=a[Zt],a.hasOwnProperty(Zt)&&z!==void 0&&!l.hasOwnProperty(Zt)&&id(e,i,Zt,void 0,l,z);for(F in l)z=l[F],B=a[F],!l.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||id(e,i,F,z,l,B);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&$t(e,i,x,null,l,z);for(Q in l)z=l[Q],B=a[Q],!l.hasOwnProperty(Q)||z===B||z==null&&B==null||$t(e,i,Q,z,l,B)}var rd=null,sd=null;function ec(e){return e.nodeType===9?e:e.ownerDocument}function Zy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ad(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var od=null;function hb(){var e=window.event;return e&&e.type==="popstate"?e===od?!1:(od=e,!0):(od=null,!1)}var Jy=typeof setTimeout=="function"?setTimeout:void 0,fb=typeof clearTimeout=="function"?clearTimeout:void 0,t_=typeof Promise=="function"?Promise:void 0,db=typeof queueMicrotask=="function"?queueMicrotask:typeof t_<"u"?function(e){return t_.resolve(null).then(e).catch(mb)}:Jy;function mb(e){setTimeout(function(){throw e})}function Sr(e){return e==="head"}function e_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&al(v.documentElement),a&2&&al(v.body),a&4)for(a=v.head,al(a),v=a.firstChild;v;){var E=v.nextSibling,w=v.nodeName;v[Jr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),ml(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);ml(i)}function ld(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),sr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gb(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Jr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Bn(e.nextSibling),e===null)break}return null}function pb(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bn(e.nextSibling),e===null))return null;return e}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yb(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Bn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var cd=null;function n_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function i_(e,i,a){switch(i=ec(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function al(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);sr(e)}var Mn=new Map,r_=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gi=nt.d;nt.d={f:_b,r:vb,D:Eb,C:Tb,L:Ab,m:bb,X:wb,S:Sb,M:Rb};function _b(){var e=Gi.f(),i=Ku();return e||i}function vb(e){var i=Zn(e);i!==null&&i.tag===5&&i.type==="form"?Sp(i):Gi.r(e)}var Va=typeof document>"u"?null:document;function s_(e,i,a){var l=Va;if(l&&typeof i=="string"&&i){var h=ge(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),r_.has(h)||(r_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),ze(i,"link",e),ue(i),l.head.appendChild(i)))}}function Eb(e){Gi.D(e),s_("dns-prefetch",e,null)}function Tb(e,i){Gi.C(e,i),s_("preconnect",e,i)}function Ab(e,i,a){Gi.L(e,i,a);var l=Va;if(l&&e&&i){var h='link[rel="preload"][as="'+ge(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ge(a.imageSizes)+'"]')):h+='[href="'+ge(e)+'"]';var d=h;switch(i){case"style":d=xa(e);break;case"script":d=Pa(e)}Mn.has(d)||(e=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Mn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ol(d))||i==="script"&&l.querySelector(ll(d))||(i=l.createElement("link"),ze(i,"link",e),ue(i),l.head.appendChild(i)))}}function bb(e,i){Gi.m(e,i);var a=Va;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ge(l)+'"][href="'+ge(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Pa(e)}if(!Mn.has(d)&&(e=T({rel:"modulepreload",href:e},i),Mn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(d)))return}l=a.createElement("link"),ze(l,"link",e),ue(l),a.head.appendChild(l)}}}function Sb(e,i,a){Gi.S(e,i,a);var l=Va;if(l&&e){var h=We(l).hoistableStyles,d=xa(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(ol(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Mn.get(d))&&hd(e,a);var w=v=l.createElement("link");ue(w),ze(w,"link",e),w._p=new Promise(function(L,F){w.onload=L,w.onerror=F}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ic(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function wb(e,i){Gi.X(e,i);var a=Va;if(a&&e){var l=We(a).hoistableScripts,h=Pa(e),d=l.get(h);d||(d=a.querySelector(ll(h)),d||(e=T({src:e,async:!0},i),(i=Mn.get(h))&&fd(e,i),d=a.createElement("script"),ue(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Rb(e,i){Gi.M(e,i);var a=Va;if(a&&e){var l=We(a).hoistableScripts,h=Pa(e),d=l.get(h);d||(d=a.querySelector(ll(h)),d||(e=T({src:e,async:!0,type:"module"},i),(i=Mn.get(h))&&fd(e,i),d=a.createElement("script"),ue(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function a_(e,i,a,l){var h=(h=vt.current)?nc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=xa(a.href),a=We(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xa(a.href);var d=We(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(ol(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Mn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mn.set(e,a),d||Ib(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Pa(a),a=We(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xa(e){return'href="'+ge(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function o_(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Ib(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ze(i,"link",a),ue(i),e.head.appendChild(i))}function Pa(e){return'[src="'+ge(e)+'"]'}function ll(e){return"script[async]"+e}function l_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ge(a.href)+'"]');if(l)return i.instance=l,ue(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ue(l),ze(l,"style",h),ic(l,a.precedence,e),i.instance=l;case"stylesheet":h=xa(a.href);var d=e.querySelector(ol(h));if(d)return i.state.loading|=4,i.instance=d,ue(d),d;l=o_(a),(h=Mn.get(h))&&hd(l,h),d=(e.ownerDocument||e).createElement("link"),ue(d);var v=d;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),ze(d,"link",l),i.state.loading|=4,ic(d,a.precedence,e),i.instance=d;case"script":return d=Pa(a.src),(h=e.querySelector(ll(d)))?(i.instance=h,ue(h),h):(l=a,(h=Mn.get(d))&&(l=T({},a),fd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ue(h),ze(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ic(l,a.precedence,e));return i.instance}function ic(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function hd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var rc=null;function u_(e,i,a){if(rc===null){var l=new Map,h=rc=new Map;h.set(a,l)}else h=rc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[Jr]||d[Te]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function c_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function Cb(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function h_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ul=null;function Db(){}function Nb(e,i,a){if(ul===null)throw Error(s(475));var l=ul;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=xa(a.href),d=e.querySelector(ol(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=sc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ue(d);return}d=e.ownerDocument||e,a=o_(a),(h=Mn.get(h))&&hd(a,h),d=d.createElement("link"),ue(d);var v=d;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),ze(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=sc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function Ob(){if(ul===null)throw Error(s(475));var e=ul;return e.stylesheets&&e.count===0&&dd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&dd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function sc(){if(this.count--,this.count===0){if(this.stylesheets)dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ac=null;function dd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ac=new Map,i.forEach(Mb,e),ac=null,sc.call(e))}function Mb(e,i){if(!(i.state.loading&4)){var a=ac.get(e);if(a)var l=a.get(null);else{a=new Map,ac.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=sc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var cl={$$typeof:ct,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function Vb(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ti(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.hiddenUpdates=Ti(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function f_(e,i,a,l,h,d,v,E,w,L,F,Q){return e=new Vb(e,i,a,v,E,w,L,Q),i=1,d===!0&&(i|=24),d=dn(3,null,null,i),e.current=d,d.stateNode=e,i=Kh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Zh(d),e}function d_(e){return e?(e=fa,e):fa}function m_(e,i,a,l,h,d){h=d_(h),l.context===null?l.context=h:l.pendingContext=h,l=hr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=fr(e,l,i),a!==null&&(_n(a,e,i),Bo(a,e,i))}function g_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function md(e,i){g_(e,i),(e=e.alternate)&&g_(e,i)}function p_(e){if(e.tag===13){var i=ha(e,67108864);i!==null&&_n(i,e,67108864),md(e,67108864)}}var oc=!0;function xb(e,i,a,l){var h=j.T;j.T=null;var d=nt.p;try{nt.p=2,gd(e,i,a,l)}finally{nt.p=d,j.T=h}}function Pb(e,i,a,l){var h=j.T;j.T=null;var d=nt.p;try{nt.p=8,gd(e,i,a,l)}finally{nt.p=d,j.T=h}}function gd(e,i,a,l){if(oc){var h=pd(l);if(h===null)nd(e,i,l,lc,a),__(e,l);else if(Ub(h,e,i,a,l))l.stopPropagation();else if(__(e,l),i&4&&-1<kb.indexOf(e)){for(;h!==null;){var d=Zn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Pn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-je(v);E.entanglements[1]|=w,v&=~w}hi(d),(Qt&6)===0&&(Gu=En()+500,il(0))}}break;case 13:E=ha(d,2),E!==null&&_n(E,d,2),Ku(),md(d,2)}if(d=pd(l),d===null&&nd(e,i,l,lc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else nd(e,i,l,null,a)}}function pd(e){return e=bn(e),yd(e)}var lc=null;function yd(e){if(lc=null,e=bi(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return lc=e,null}function y_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vh()){case oo:return 2;case Fs:return 8;case Yr:case Eh:return 32;case Gs:return 268435456;default:return 32}default:return 32}}var _d=!1,wr=null,Rr=null,Ir=null,hl=new Map,fl=new Map,Cr=[],kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,i){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":hl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(i.pointerId)}}function dl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Zn(i),i!==null&&p_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function Ub(e,i,a,l,h){switch(i){case"focusin":return wr=dl(wr,e,i,a,l,h),!0;case"dragenter":return Rr=dl(Rr,e,i,a,l,h),!0;case"mouseover":return Ir=dl(Ir,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return hl.set(d,dl(hl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,fl.set(d,dl(fl.get(d)||null,e,i,a,l,h)),!0}return!1}function v_(e){var i=bi(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Kl(e.priority,function(){if(a.tag===13){var l=yn();l=nr(l);var h=ha(a,l);h!==null&&_n(h,a,l),md(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=pd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ii=l,a.target.dispatchEvent(l),Ii=null}else return i=Zn(a),i!==null&&p_(i),e.blockedOn=a,!1;i.shift()}return!0}function E_(e,i,a){uc(e)&&a.delete(i)}function Lb(){_d=!1,wr!==null&&uc(wr)&&(wr=null),Rr!==null&&uc(Rr)&&(Rr=null),Ir!==null&&uc(Ir)&&(Ir=null),hl.forEach(E_),fl.forEach(E_)}function cc(e,i){e.blockedOn===i&&(e.blockedOn=null,_d||(_d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Lb)))}var hc=null;function T_(e){hc!==e&&(hc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(yd(l||a)===null)continue;break}var d=Zn(a);d!==null&&(e.splice(i,3),i-=3,yf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function ml(e){function i(w){return cc(w,e)}wr!==null&&cc(wr,e),Rr!==null&&cc(Rr,e),Ir!==null&&cc(Ir,e),hl.forEach(i),fl.forEach(i);for(var a=0;a<Cr.length;a++){var l=Cr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Cr.length&&(a=Cr[0],a.blockedOn===null);)v_(a),a.blockedOn===null&&Cr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[me]||null;if(typeof d=="function")v||T_(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[me]||null)E=v.formAction;else if(yd(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),T_(a)}}}function vd(e){this._internalRoot=e}fc.prototype.render=vd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=yn();m_(a,l,e,i,null,null)},fc.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;m_(e.current,2,null,e,null,null),Ku(),i[Tn]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var i=ir();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Cr.length&&i!==0&&i<Cr[a].priority;a++);Cr.splice(a,0,e),a===0&&v_(e)}};var A_=t.version;if(A_!=="19.1.0")throw Error(s(527,A_,"19.1.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var zb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ae=dc.inject(zb),Gt=dc}catch{}}return gl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Lp,d=zp,v=Bp,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=f_(e,1,!1,null,null,a,l,h,d,v,E,null),e[Tn]=i.current,ed(e),new vd(i)},gl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Lp,v=zp,E=Bp,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=f_(e,1,!0,i,a??null,l,h,d,v,E,w,L),i.context=d_(null),a=i.current,l=yn(),l=nr(l),h=hr(l),h.callback=null,fr(a,h,l),a=l,i.current.lanes=a,Ai(i,a),hi(i),e[Tn]=i.current,ed(e),new fc(i)},gl.version="19.1.0",gl}var N_;function Yb(){if(N_)return Td.exports;N_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Td.exports=Kb(),Td.exports}var Xb=Yb();const $b=()=>{};var O_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Zb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];t[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],f=r[n++],g=r[n++],p=((o&7)<<18|(c&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return t.join("")},EE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,g=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,T=c>>2,S=(c&3)<<4|g>>4;let C=(g&15)<<2|y>>6,H=y&63;p||(H=64,f||(C=64)),s.push(n[T],n[S],n[C],n[H])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(vE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Zb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],g=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||g==null||y==null||S==null)throw new Wb;const C=c<<2|g>>4;if(s.push(C),y!==64){const H=g<<4&240|y>>2;if(s.push(H),S!==64){const Z=y<<6&192|S;s.push(Z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jb=function(r){const t=vE(r);return EE.encodeByteArray(t,!0)},Oc=function(r){return Jb(r).replace(/\./g,"")},TE=function(r){try{return EE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=()=>tS().__FIREBASE_DEFAULTS__,nS=()=>{if(typeof process>"u"||typeof O_>"u")return;const r=O_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},iS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&TE(r[1]);return t&&JSON.parse(t)},Jc=()=>{try{return $b()||eS()||nS()||iS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},AE=r=>{var t,n;return(n=(t=Jc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},rS=r=>{const t=AE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},bE=()=>{var r;return(r=Jc())===null||r===void 0?void 0:r.config},SE=r=>{var t;return(t=Jc())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(r){return r.endsWith(".cloudworkstations.dev")}async function wE(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Oc(JSON.stringify(n)),Oc(JSON.stringify(f)),""].join(".")}const Tl={};function oS(){const r={prod:[],emulator:[]};for(const t of Object.keys(Tl))Tl[t]?r.emulator.push(t):r.prod.push(t);return r}function lS(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let M_=!1;function RE(r,t){if(typeof window>"u"||typeof document>"u"||!Wa(window.location.host)||Tl[r]===t||Tl[r]||M_)return;Tl[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",c=oS().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function g(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function p(C,H){C.setAttribute("width","24"),C.setAttribute("id",H),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function y(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{M_=!0,f()},C}function T(C,H){C.setAttribute("id",H),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function S(){const C=lS(s),H=n("text"),Z=document.getElementById(H)||document.createElement("span"),rt=n("learnmore"),W=document.getElementById(rt)||document.createElement("a"),St=n("preprendIcon"),ft=document.getElementById(St)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ct=C.element;g(ct),T(W,rt);const It=y();p(ft,St),ct.append(ft,Z,W,It),document.body.appendChild(ct)}c?(Z.innerText="Preview backend disconnected.",ft.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ft.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Z.innerText="Preview backend running in this workspace."),Z.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function cS(){var r;const t=(r=Jc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function fS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dS(){const r=$e();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function mS(){return!cS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CE(){try{return typeof indexedDB=="object"}catch{return!1}}function DE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){t(n)}})}function gS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="FirebaseError";class Yn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=pS,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,c=this.errors[t],f=c?yS(c,s):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new Yn(o,g,s)}}function yS(r,t){return r.replace(_S,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const _S=/\{\$([^}]+)}/g;function vS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Br(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const c=r[o],f=t[o];if(V_(c)&&V_(f)){if(!Br(c,f))return!1}else if(c!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function V_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function ES(r,t){const n=new TS(r,t);return n.subscribe.bind(n)}class TS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");AS(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=wd),o.error===void 0&&(o.error=wd),o.complete===void 0&&(o.complete=wd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function wd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=1e3,SS=2,wS=4*60*60*1e3,RS=.5;function x_(r,t=bS,n=SS){const s=t*Math.pow(n,r),o=Math.round(RS*s*(Math.random()-.5)*2);return Math.min(wS,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(r){return r&&r._delegate?r._delegate:r}class Qn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new sS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),o=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(DS(t))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(t=Cs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cs){return this.instances.has(t)}getOptions(t=Cs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(o,c);const f=this.instances.get(o);return f&&t(f,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:CS(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Cs){return this.component?this.component.multipleInstances?t:Cs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(r){return r===Cs?void 0:r}function DS(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new IS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xt||(xt={}));const OS={debug:xt.DEBUG,verbose:xt.VERBOSE,info:xt.INFO,warn:xt.WARN,error:xt.ERROR,silent:xt.SILENT},MS=xt.INFO,VS={[xt.DEBUG]:"log",[xt.VERBOSE]:"log",[xt.INFO]:"info",[xt.WARN]:"warn",[xt.ERROR]:"error"},xS=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=VS[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class th{constructor(t){this.name=t,this._logLevel=MS,this._logHandler=xS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in xt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?OS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,xt.DEBUG,...t),this._logHandler(this,xt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,xt.VERBOSE,...t),this._logHandler(this,xt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,xt.INFO,...t),this._logHandler(this,xt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,xt.WARN,...t),this._logHandler(this,xt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,xt.ERROR,...t),this._logHandler(this,xt.ERROR,...t)}}const PS=(r,t)=>t.some(n=>r instanceof n);let P_,k_;function kS(){return P_||(P_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function US(){return k_||(k_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NE=new WeakMap,zd=new WeakMap,OE=new WeakMap,Rd=new WeakMap,fm=new WeakMap;function LS(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(kr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&NE.set(n,r)}).catch(()=>{}),fm.set(t,r),t}function zS(r){if(zd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});zd.set(r,t)}let Bd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return zd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||OE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function BS(r){Bd=r(Bd)}function qS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Id(this),t,...n);return OE.set(s,t.sort?t.sort():[t]),kr(s)}:US().includes(r)?function(...t){return r.apply(Id(this),t),kr(NE.get(this))}:function(...t){return kr(r.apply(Id(this),t))}}function HS(r){return typeof r=="function"?qS(r):(r instanceof IDBTransaction&&zS(r),PS(r,kS())?new Proxy(r,Bd):r)}function kr(r){if(r instanceof IDBRequest)return LS(r);if(Rd.has(r))return Rd.get(r);const t=HS(r);return t!==r&&(Rd.set(r,t),fm.set(t,r)),t}const Id=r=>fm.get(r);function ME(r,t,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const f=indexedDB.open(r,t),g=kr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(kr(f.result),p.oldVersion,p.newVersion,kr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const jS=["get","getKey","getAll","getAllKeys","count"],FS=["put","add","delete","clear"],Cd=new Map;function U_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Cd.get(t))return Cd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=FS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||jS.includes(n)))return;const c=async function(f,...g){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),o&&p.done]))[0]};return Cd.set(t,c),c}BS(r=>({...r,get:(t,n,s)=>U_(t,n)||r.get(t,n,s),has:(t,n)=>!!U_(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function QS(r){const t=r.getComponent();return t?.type==="VERSION"}const qd="@firebase/app",L_="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new th("@firebase/app"),KS="@firebase/app-compat",YS="@firebase/analytics-compat",XS="@firebase/analytics",$S="@firebase/app-check-compat",ZS="@firebase/app-check",WS="@firebase/auth",JS="@firebase/auth-compat",t1="@firebase/database",e1="@firebase/data-connect",n1="@firebase/database-compat",i1="@firebase/functions",r1="@firebase/functions-compat",s1="@firebase/installations",a1="@firebase/installations-compat",o1="@firebase/messaging",l1="@firebase/messaging-compat",u1="@firebase/performance",c1="@firebase/performance-compat",h1="@firebase/remote-config",f1="@firebase/remote-config-compat",d1="@firebase/storage",m1="@firebase/storage-compat",g1="@firebase/firestore",p1="@firebase/ai",y1="@firebase/firestore-compat",_1="firebase",v1="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="[DEFAULT]",E1={[qd]:"fire-core",[KS]:"fire-core-compat",[XS]:"fire-analytics",[YS]:"fire-analytics-compat",[ZS]:"fire-app-check",[$S]:"fire-app-check-compat",[WS]:"fire-auth",[JS]:"fire-auth-compat",[t1]:"fire-rtdb",[e1]:"fire-data-connect",[n1]:"fire-rtdb-compat",[i1]:"fire-fn",[r1]:"fire-fn-compat",[s1]:"fire-iid",[a1]:"fire-iid-compat",[o1]:"fire-fcm",[l1]:"fire-fcm-compat",[u1]:"fire-perf",[c1]:"fire-perf-compat",[h1]:"fire-rc",[f1]:"fire-rc-compat",[d1]:"fire-gcs",[m1]:"fire-gcs-compat",[g1]:"fire-fst",[y1]:"fire-fst-compat",[p1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map,T1=new Map,jd=new Map;function z_(r,t){try{r.container.addComponent(t)}catch(n){$i.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function pi(r){const t=r.name;if(jd.has(t))return $i.debug(`There were multiple attempts to register component ${t}.`),!1;jd.set(t,r);for(const n of Mc.values())z_(n,r);for(const n of T1.values())z_(n,r);return!0}function zs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function qn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new Ls("app","Firebase",A1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=v1;function VE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Hd,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw Ur.create("bad-app-name",{appName:String(o)});if(n||(n=bE()),!n)throw Ur.create("no-options");const c=Mc.get(o);if(c){if(Br(n,c.options)&&Br(s,c.config))return c;throw Ur.create("duplicate-app",{appName:o})}const f=new NS(o);for(const p of jd.values())f.addComponent(p);const g=new b1(n,s,f);return Mc.set(o,g),g}function dm(r=Hd){const t=Mc.get(r);if(!t&&r===Hd&&bE())return VE();if(!t)throw Ur.create("no-app",{appName:r});return t}function xn(r,t,n){var s;let o=(s=E1[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const c=o.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const g=[`Unable to register library "${o}" with version "${t}":`];c&&g.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$i.warn(g.join(" "));return}pi(new Qn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="firebase-heartbeat-database",w1=1,Cl="firebase-heartbeat-store";let Dd=null;function xE(){return Dd||(Dd=ME(S1,w1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Cl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Ur.create("idb-open",{originalErrorMessage:r.message})})),Dd}async function R1(r){try{const n=(await xE()).transaction(Cl),s=await n.objectStore(Cl).get(PE(r));return await n.done,s}catch(t){if(t instanceof Yn)$i.warn(t.message);else{const n=Ur.create("idb-get",{originalErrorMessage:t?.message});$i.warn(n.message)}}}async function B_(r,t){try{const s=(await xE()).transaction(Cl,"readwrite");await s.objectStore(Cl).put(t,PE(r)),await s.done}catch(n){if(n instanceof Yn)$i.warn(n.message);else{const s=Ur.create("idb-set",{originalErrorMessage:n?.message});$i.warn(s.message)}}}function PE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=1024,C1=30;class D1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=q_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>C1){const f=M1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){$i.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=q_(),{heartbeatsToSend:s,unsentEntries:o}=N1(this._heartbeatsCache.heartbeats),c=Oc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return $i.warn(n),""}}}function q_(){return new Date().toISOString().substring(0,10)}function N1(r,t=I1){const n=[];let s=r.slice();for(const o of r){const c=n.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),H_(n)>t){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),H_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class O1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CE()?DE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return B_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return B_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function H_(r){return Oc(JSON.stringify({version:2,heartbeats:r})).length}function M1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(r){pi(new Qn("platform-logger",t=>new GS(t),"PRIVATE")),pi(new Qn("heartbeat",t=>new D1(t),"PRIVATE")),xn(qd,L_,r),xn(qd,L_,"esm2017"),xn("fire-js","")}V1("");var x1="firebase",P1="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(x1,P1,"app");const kE="@firebase/installations",mm="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=1e4,LE=`w:${mm}`,zE="FIS_v2",k1="https://firebaseinstallations.googleapis.com/v1",U1=60*60*1e3,L1="installations",z1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vs=new Ls(L1,z1,B1);function BE(r){return r instanceof Yn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE({projectId:r}){return`${k1}/projects/${r}/installations`}function HE(r){return{token:r.token,requestStatus:2,expiresIn:H1(r.expiresIn),creationTime:Date.now()}}async function jE(r,t){const s=(await t.json()).error;return Vs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function FE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function q1(r,{refreshToken:t}){const n=FE(r);return n.append("Authorization",j1(t)),n}async function GE(r){const t=await r();return t.status>=500&&t.status<600?r():t}function H1(r){return Number(r.replace("s","000"))}function j1(r){return`${zE} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=qE(r),o=FE(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:zE,appId:r.appId,sdkVersion:LE},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await GE(()=>fetch(s,g));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:HE(y.authToken)}}else throw await jE("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=/^[cdef][\w-]{21}$/,Fd="";function K1(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=Y1(r);return Q1.test(n)?n:Fd}catch{return Fd}}function Y1(r){return G1(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=new Map;function YE(r,t){const n=eh(r);XE(n,t),X1(n,t)}function XE(r,t){const n=KE.get(r);if(n)for(const s of n)s(t)}function X1(r,t){const n=$1();n&&n.postMessage({key:r,fid:t}),Z1()}let Ds=null;function $1(){return!Ds&&"BroadcastChannel"in self&&(Ds=new BroadcastChannel("[Firebase] FID Change"),Ds.onmessage=r=>{XE(r.data.key,r.data.fid)}),Ds}function Z1(){KE.size===0&&Ds&&(Ds.close(),Ds=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="firebase-installations-database",J1=1,xs="firebase-installations-store";let Nd=null;function gm(){return Nd||(Nd=ME(W1,J1,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(xs)}}})),Nd}async function Vc(r,t){const n=eh(r),o=(await gm()).transaction(xs,"readwrite"),c=o.objectStore(xs),f=await c.get(n);return await c.put(t,n),await o.done,(!f||f.fid!==t.fid)&&YE(r,t.fid),t}async function $E(r){const t=eh(r),s=(await gm()).transaction(xs,"readwrite");await s.objectStore(xs).delete(t),await s.done}async function nh(r,t){const n=eh(r),o=(await gm()).transaction(xs,"readwrite"),c=o.objectStore(xs),f=await c.get(n),g=t(f);return g===void 0?await c.delete(n):await c.put(g,n),await o.done,g&&(!f||f.fid!==g.fid)&&YE(r,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(r){let t;const n=await nh(r.appConfig,s=>{const o=tw(s),c=ew(r,o);return t=c.registrationPromise,c.installationEntry});return n.fid===Fd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function tw(r){const t=r||{fid:K1(),registrationStatus:0};return ZE(t)}function ew(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Vs.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=nw(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:iw(r)}:{installationEntry:t}}async function nw(r,t){try{const n=await F1(r,t);return Vc(r.appConfig,n)}catch(n){throw BE(n)&&n.customData.serverCode===409?await $E(r.appConfig):await Vc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function iw(r){let t=await j_(r.appConfig);for(;t.registrationStatus===1;)await QE(100),t=await j_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await pm(r);return s||n}return t}function j_(r){return nh(r,t=>{if(!t)throw Vs.create("installation-not-found");return ZE(t)})}function ZE(r){return rw(r)?{fid:r.fid,registrationStatus:0}:r}function rw(r){return r.registrationStatus===1&&r.registrationTime+UE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw({appConfig:r,heartbeatServiceProvider:t},n){const s=aw(r,n),o=q1(r,n),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:LE,appId:r.appId}},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await GE(()=>fetch(s,g));if(p.ok){const y=await p.json();return HE(y)}else throw await jE("Generate Auth Token",p)}function aw(r,{fid:t}){return`${qE(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(r,t=!1){let n;const s=await nh(r.appConfig,c=>{if(!WE(c))throw Vs.create("not-registered");const f=c.authToken;if(!t&&uw(f))return c;if(f.requestStatus===1)return n=ow(r,t),c;{if(!navigator.onLine)throw Vs.create("app-offline");const g=hw(c);return n=lw(r,g),g}});return n?await n:s.authToken}async function ow(r,t){let n=await F_(r.appConfig);for(;n.authToken.requestStatus===1;)await QE(100),n=await F_(r.appConfig);const s=n.authToken;return s.requestStatus===0?ym(r,t):s}function F_(r){return nh(r,t=>{if(!WE(t))throw Vs.create("not-registered");const n=t.authToken;return fw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lw(r,t){try{const n=await sw(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Vc(r.appConfig,s),n}catch(n){if(BE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $E(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Vc(r.appConfig,s)}throw n}}function WE(r){return r!==void 0&&r.registrationStatus===2}function uw(r){return r.requestStatus===2&&!cw(r)}function cw(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+U1}function hw(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function fw(r){return r.requestStatus===1&&r.requestTime+UE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(r){const t=r,{installationEntry:n,registrationPromise:s}=await pm(t);return s?s.catch(console.error):ym(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(r,t=!1){const n=r;return await gw(n),(await ym(n,t)).token}async function gw(r){const{registrationPromise:t}=await pm(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(r){if(!r||!r.options)throw Od("App Configuration");if(!r.name)throw Od("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Od(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Od(r){return Vs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="installations",yw="installations-internal",_w=r=>{const t=r.getProvider("app").getImmediate(),n=pw(t),s=zs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},vw=r=>{const t=r.getProvider("app").getImmediate(),n=zs(t,JE).getImmediate();return{getId:()=>dw(n),getToken:o=>mw(n,o)}};function Ew(){pi(new Qn(JE,_w,"PUBLIC")),pi(new Qn(yw,vw,"PRIVATE"))}Ew();xn(kE,mm);xn(kE,mm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="analytics",Tw="firebase_id",Aw="origin",bw=60*1e3,Sw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_m="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new th("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vn=new Ls("analytics","Analytics",ww);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(r){if(!r.startsWith(_m)){const t=vn.create("invalid-gtag-resource",{gtagURL:r});return ln.warn(t.message),""}return r}function t0(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function Iw(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function Cw(r,t){const n=Iw("firebase-js-sdk-policy",{createScriptURL:Rw}),s=document.createElement("script"),o=`${_m}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function Dw(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Nw(r,t,n,s,o,c){const f=s[o];try{if(f)await t[f];else{const p=(await t0(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(g){ln.error(g)}r("config",o,c)}async function Ow(r,t,n,s,o){try{let c=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const g=await t0(n);for(const p of f){const y=g.find(S=>S.measurementId===p),T=y&&t[y.appId];if(T)c.push(T);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,o||{})}catch(c){ln.error(c)}}function Mw(r,t,n,s){async function o(c,...f){try{if(c==="event"){const[g,p]=f;await Ow(r,t,n,g,p)}else if(c==="config"){const[g,p]=f;await Nw(r,t,n,s,g,p)}else if(c==="consent"){const[g,p]=f;r("consent",g,p)}else if(c==="get"){const[g,p,y]=f;r("get",g,p,y)}else if(c==="set"){const[g]=f;r("set",g)}else r(c,...f)}catch(g){ln.error(g)}}return o}function Vw(r,t,n,s,o){let c=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=Mw(c,r,t,n),{gtagCore:c,wrappedGtag:window[o]}}function xw(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(_m)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=30,kw=1e3;class Uw{constructor(t={},n=kw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const e0=new Uw;function Lw(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function zw(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:Lw(s)},c=Sw.replace("{app-id}",n),f=await fetch(c,o);if(f.status!==200&&f.status!==304){let g="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw vn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function Bw(r,t=e0,n){const{appId:s,apiKey:o,measurementId:c}=r.options;if(!s)throw vn.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:s};throw vn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new jw;return setTimeout(async()=>{g.abort()},bw),n0({appId:s,apiKey:o,measurementId:c},f,g,t)}async function n0(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=e0){var c;const{appId:f,measurementId:g}=r;try{await qw(s,t)}catch(p){if(g)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:f,measurementId:g};throw p}try{const p=await zw(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!Hw(y)){if(o.deleteThrottleMetadata(f),g)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:f,measurementId:g};throw p}const T=Number((c=y?.customData)===null||c===void 0?void 0:c.httpStatus)===503?x_(n,o.intervalMillis,Pw):x_(n,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+T,backoffCount:n+1};return o.setThrottleMetadata(f,S),ln.debug(`Calling attemptFetch again in ${T} millis`),n0(r,S,s,o)}}function qw(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),c=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(c),s(vn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Hw(r){if(!(r instanceof Yn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class jw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Fw(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(){if(CE())try{await DE()}catch(r){return ln.warn(vn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return ln.warn(vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Qw(r,t,n,s,o,c,f){var g;const p=Bw(r);p.then(H=>{n[H.measurementId]=H.appId,r.options.measurementId&&H.measurementId!==r.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${H.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(H=>ln.error(H)),t.push(p);const y=Gw().then(H=>{if(H)return s.getId()}),[T,S]=await Promise.all([p,y]);xw(c)||Cw(c,T.measurementId),o("js",new Date);const C=(g=f?.config)!==null&&g!==void 0?g:{};return C[Aw]="firebase",C.update=!0,S!=null&&(C[Tw]=S),o("config",T.measurementId,C),T.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(t){this.app=t}_delete(){return delete Al[this.app.options.appId],Promise.resolve()}}let Al={},G_=[];const Q_={};let Md="dataLayer",Yw="gtag",K_,i0,Y_=!1;function Xw(){const r=[];if(IE()&&r.push("This is a browser extension environment."),gS()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=vn.create("invalid-analytics-context",{errorInfo:t});ln.warn(n.message)}}function $w(r,t,n){Xw();const s=r.options.appId;if(!s)throw vn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vn.create("no-api-key");if(Al[s]!=null)throw vn.create("already-exists",{id:s});if(!Y_){Dw(Md);const{wrappedGtag:c,gtagCore:f}=Vw(Al,G_,Q_,Md,Yw);i0=c,K_=f,Y_=!0}return Al[s]=Qw(r,G_,Q_,t,K_,Md,n),new Kw(r)}function Zw(r=dm()){r=nn(r);const t=zs(r,xc);return t.isInitialized()?t.getImmediate():Ww(r)}function Ww(r,t={}){const n=zs(r,xc);if(n.isInitialized()){const o=n.getImmediate();if(Br(t,n.getOptions()))return o;throw vn.create("already-initialized")}return n.initialize({options:t})}function Jw(r,t,n,s){r=nn(r),Fw(i0,Al[r.app.options.appId],t,n,s).catch(o=>ln.error(o))}const X_="@firebase/analytics",$_="0.10.16";function tR(){pi(new Qn(xc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return $w(s,o,n)},"PUBLIC")),pi(new Qn("analytics-internal",r,"PRIVATE")),xn(X_,$_),xn(X_,$_,"esm2017");function r(t){try{const n=t.getProvider(xc).getImmediate();return{logEvent:(s,o,c)=>Jw(n,s,o,c)}}catch(n){throw vn.create("interop-component-reg-failed",{reason:n})}}}tR();function vm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function r0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eR=r0,s0=new Ls("auth","Firebase",r0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new th("@firebase/auth");function nR(r,...t){Pc.logLevel<=xt.WARN&&Pc.warn(`Auth (${Ja}): ${r}`,...t)}function Tc(r,...t){Pc.logLevel<=xt.ERROR&&Pc.error(`Auth (${Ja}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(r,...t){throw Tm(r,...t)}function Fn(r,...t){return Tm(r,...t)}function Em(r,t,n){const s=Object.assign(Object.assign({},eR()),{[t]:n});return new Ls("auth","Firebase",s).create(t,{appName:r.name})}function Ms(r){return Em(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iR(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&yi(r,"argument-error"),Em(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return s0.create(r,...t)}function Tt(r,t,...n){if(!r)throw Tm(t,...n)}function Ki(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Tc(t),new Error(t)}function Zi(r,t){r||Ki(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function rR(){return Z_()==="http:"||Z_()==="https:"}function Z_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rR()||IE()||"connection"in navigator)?navigator.onLine:!0}function aR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,n){this.shortDelay=t,this.longDelay=n,Zi(n>t,"Short delay should be less than long delay!"),this.isMobile=uS()||fS()}get(){return sR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(r,t){Zi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uR=new Ul(3e4,6e4);function bm(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function to(r,t,n,s,o={}){return o0(r,o,async()=>{let c={},f={};s&&(t==="GET"?f=s:c={body:JSON.stringify(s)});const g=kl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},c);return hS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Wa(r.emulatorConfig.host)&&(y.credentials="include"),a0.fetch()(await l0(r,r.config.apiHost,n,g),y)})}async function o0(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},oR),t);try{const o=new hR(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw mc(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const g=c.ok?f.errorMessage:f.error.message,[p,y]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw mc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw mc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw mc(r,"user-disabled",f);const T=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Em(r,T,y);yi(r,T)}}catch(o){if(o instanceof Yn)throw o;yi(r,"network-request-failed",{message:String(o)})}}async function cR(r,t,n,s,o={}){const c=await to(r,t,n,s,o);return"mfaPendingCredential"in c&&yi(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function l0(r,t,n,s){const o=`${t}${n}?${s}`,c=r,f=c.config.emulator?Am(r.config,o):`${r.config.apiScheme}://${o}`;return lR.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}class hR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Fn(this.auth,"network-request-failed")),uR.get())})}}function mc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Fn(r,t,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(r,t){return to(r,"POST","/v1/accounts:delete",t)}async function kc(r,t){return to(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function dR(r,t=!1){const n=nn(r),s=await n.getIdToken(t),o=Sm(s);Tt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c?.sign_in_provider;return{claims:o,token:s,authTime:bl(Vd(o.auth_time)),issuedAtTime:bl(Vd(o.iat)),expirationTime:bl(Vd(o.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Vd(r){return Number(r)*1e3}function Sm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const o=TE(n);return o?JSON.parse(o):(Tc("Failed to decode base64 JWT payload"),null)}catch(o){return Tc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function W_(r){const t=Sm(r);return Tt(t,"internal-error"),Tt(typeof t.exp<"u","internal-error"),Tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Yn&&mR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function mR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bl(this.lastLoginAt),this.creationTime=bl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Dl(r,kc(n,{idToken:s}));Tt(o?.users.length,n,"internal-error");const c=o.users[0];r._notifyReloadListener(c);const f=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?u0(c.providerUserInfo):[],g=yR(r.providerData,f),p=r.isAnonymous,y=!(r.email&&c.passwordHash)&&!g?.length,T=p?y:!1,S={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Qd(c.createdAt,c.lastLoginAt),isAnonymous:T};Object.assign(r,S)}async function pR(r){const t=nn(r);await Uc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yR(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function u0(r){return r.map(t=>{var{providerId:n}=t,s=vm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(r,t){const n=await o0(r,{},async()=>{const s=kl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,f=await l0(r,o,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:g,body:s};return r.emulatorConfig&&Wa(r.emulatorConfig.host)&&(p.credentials="include"),a0.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vR(r,t){return to(r,"POST","/v2/accounts:revokeToken",bm(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Tt(t.idToken,"internal-error"),Tt(typeof t.idToken<"u","internal-error"),Tt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):W_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Tt(t.length!==0,"internal-error");const n=W_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await _R(t,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,f=new Ba;return s&&(Tt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(Tt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),c&&(Tt(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ba,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(r,t){Tt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Hn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,c=vm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Qd(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const n=await Dl(this,this.stsTokenManager.getToken(this.auth,t));return Tt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return dR(this,t)}reload(){return pR(this)}_assign(t){this!==t&&(Tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Uc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Ms(this.auth));const t=await this.getIdToken();return await Dl(this,fR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,c,f,g,p,y,T;const S=(s=n.displayName)!==null&&s!==void 0?s:void 0,C=(o=n.email)!==null&&o!==void 0?o:void 0,H=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,Z=(f=n.photoURL)!==null&&f!==void 0?f:void 0,rt=(g=n.tenantId)!==null&&g!==void 0?g:void 0,W=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,St=(y=n.createdAt)!==null&&y!==void 0?y:void 0,ft=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ct,emailVerified:It,isAnonymous:_t,providerData:Ct,stsTokenManager:M}=n;Tt(ct&&M,t,"internal-error");const b=Ba.fromJSON(this.name,M);Tt(typeof ct=="string",t,"internal-error"),Nr(S,t.name),Nr(C,t.name),Tt(typeof It=="boolean",t,"internal-error"),Tt(typeof _t=="boolean",t,"internal-error"),Nr(H,t.name),Nr(Z,t.name),Nr(rt,t.name),Nr(W,t.name),Nr(St,t.name),Nr(ft,t.name);const R=new Hn({uid:ct,auth:t,email:C,emailVerified:It,displayName:S,isAnonymous:_t,photoURL:Z,phoneNumber:H,tenantId:rt,stsTokenManager:b,createdAt:St,lastLoginAt:ft});return Ct&&Array.isArray(Ct)&&(R.providerData=Ct.map(O=>Object.assign({},O))),W&&(R._redirectEventId=W),R}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ba;o.updateFromServerResponse(n);const c=new Hn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Uc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];Tt(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?u0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!c?.length,g=new Ba;g.updateFromIdToken(s);const p=new Hn({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Qd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Map;function Yi(r){Zi(r instanceof Function,"Expected a class definition");let t=J_.get(r);return t?(Zi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,J_.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}c0.type="NONE";const tv=c0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(r,t,n){return`firebase:${r}:${t}:${n}`}class qa{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=Ac(this.userKey,o.apiKey,c),this.fullPersistenceKey=Ac("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await kc(this.auth,{idToken:t}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,t):null}return Hn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new qa(Yi(tv),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||Yi(tv);const f=Ac(s,t.config.apiKey,t.name);let g=null;for(const y of n)try{const T=await y._get(f);if(T){let S;if(typeof T=="string"){const C=await kc(t,{idToken:T}).catch(()=>{});if(!C)break;S=await Hn._fromGetAccountInfoResponse(t,C,T)}else S=Hn._fromJSON(t,T);y!==c&&(g=S),c=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new qa(c,t,s):(c=p[0],g&&await c._set(f,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new qa(c,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(m0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(h0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(p0(t))return"Blackberry";if(y0(t))return"Webos";if(f0(t))return"Safari";if((t.includes("chrome/")||d0(t))&&!t.includes("edge/"))return"Chrome";if(g0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function h0(r=$e()){return/firefox\//i.test(r)}function f0(r=$e()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function d0(r=$e()){return/crios\//i.test(r)}function m0(r=$e()){return/iemobile/i.test(r)}function g0(r=$e()){return/android/i.test(r)}function p0(r=$e()){return/blackberry/i.test(r)}function y0(r=$e()){return/webos/i.test(r)}function wm(r=$e()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ER(r=$e()){var t;return wm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function TR(){return dS()&&document.documentMode===10}function _0(r=$e()){return wm(r)||g0(r)||y0(r)||p0(r)||/windows phone/i.test(r)||m0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(r,t=[]){let n;switch(r){case"Browser":n=ev($e());break;case"Worker":n=`${ev($e())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ja}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((f,g)=>{try{const p=t(c);f(p)}catch(p){g(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(r,t={}){return to(r,"GET","/v2/passwordPolicy",bm(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=6;class wR{constructor(t){var n,s,o,c;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:SR,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,c,f,g;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(g=p.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nv(this),this.idTokenSubscription=new nv(this),this.beforeStateQueue=new AR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Yi(n)),this._initializationPromise=this.queue(async()=>{var s,o,c;if(!this._deleted&&(this.persistenceManager=await qa.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await kc(this,{idToken:t}),s=await Hn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(qn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=o?._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===g)&&p?.user&&(o=p.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Uc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=aR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(qn(this.app))return Promise.reject(Ms(this));const n=t?nn(t):null;return n&&Tt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Ms(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return qn(this.app)?Promise.reject(Ms(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bR(this),n=new wR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ls("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await vR(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Yi(t)||this._popupRedirectResolver;Tt(n,this,"argument-error"),this.redirectPersistenceManager=await qa.create(this,[Yi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(Tt(g,this,"internal-error"),g.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=v0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&nR(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ih(r){return nn(r)}class nv{constructor(t){this.auth=t,this.observer=null,this.addObserver=ES(n=>this.observer=n)}get next(){return Tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IR(r){Rm=r}function CR(r){return Rm.loadJS(r)}function DR(){return Rm.gapiScript}function NR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(r,t){const n=zs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(Br(c,t??{}))return o;yi(o,"already-initialized")}return n.initialize({options:t})}function MR(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Yi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function VR(r,t,n){const s=ih(r);Tt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,c=E0(t),{host:f,port:g}=xR(t),p=g===null?"":`:${g}`,y={url:`${c}//${f}${p}/`},T=Object.freeze({host:f,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Tt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Tt(Br(y,s.config.emulator)&&Br(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Wa(f)?(wE(`${c}//${f}${p}`),RE("Auth",!0)):PR()}function E0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function xR(r){const t=E0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:iv(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:iv(f)}}}function iv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function PR(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ki("not implemented")}_getIdTokenResponse(t){return Ki("not implemented")}_linkToIdToken(t,n){return Ki("not implemented")}_getReauthenticationResolver(t){return Ki("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(r,t){return cR(r,"POST","/v1/accounts:signInWithIdp",bm(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="http://localhost";class Ps extends T0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ps(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):yi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,c=vm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Ps(s,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Ha(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ha(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ha(t,n)}buildRequest(){const t={requestUri:kR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=kl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends Im{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Ll{constructor(){super("facebook.com")}static credential(t){return Ps._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mr.credential(t.oauthAccessToken)}catch{return null}}}Mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Ll{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ps._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Qi.credentialFromTaggedObject(t)}static credentialFromError(t){return Qi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Qi.credential(n,s)}catch{return null}}}Qi.GOOGLE_SIGN_IN_METHOD="google.com";Qi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Ll{constructor(){super("github.com")}static credential(t){return Ps._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vr.credential(t.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Ll{constructor(){super("twitter.com")}static credential(t,n){return Ps._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xr.credentialFromTaggedObject(t)}static credentialFromError(t){return xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return xr.credential(n,s)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const c=await Hn._fromIdTokenResponse(t,s,o),f=rv(s);return new Fa({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=rv(s);return new Fa({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function rv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Yn{constructor(t,n,s,o){var c;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Lc.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Lc(t,n,s,o)}}function A0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Lc._fromErrorAndOperation(r,c,t,s):c})}async function UR(r,t,n=!1){const s=await Dl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Fa._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(r,t,n=!1){const{auth:s}=r;if(qn(s.app))return Promise.reject(Ms(s));const o="reauthenticate";try{const c=await Dl(r,A0(s,o,t,r),n);Tt(c.idToken,s,"internal-error");const f=Sm(c.idToken);Tt(f,s,"internal-error");const{sub:g}=f;return Tt(r.uid===g,s,"user-mismatch"),Fa._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&yi(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zR(r,t,n=!1){if(qn(r.app))return Promise.reject(Ms(r));const s="signIn",o=await A0(r,s,t),c=await Fa._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}function BR(r,t,n,s){return nn(r).onIdTokenChanged(t,n,s)}function qR(r,t,n){return nn(r).beforeAuthStateChanged(t,n)}function HR(r,t,n,s){return nn(r).onAuthStateChanged(t,n,s)}const zc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=1e3,FR=10;class S0 extends b0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);TR()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,FR):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},jR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}S0.type="LOCAL";const GR=S0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0 extends b0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}w0.type="SESSION";const R0=w0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new rh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:c}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(f).map(async y=>y(n.origin,c)),p=await QR(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((g,p)=>{const y=Cm("",20);o.port1.start();const T=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(T),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(C.data.response);break;default:clearTimeout(T),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return window}function YR(r){di().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){return typeof di().WorkerGlobalScope<"u"&&typeof di().importScripts=="function"}async function XR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $R(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function ZR(){return I0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="firebaseLocalStorageDb",WR=1,Bc="firebaseLocalStorage",D0="fbase_key";class zl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sh(r,t){return r.transaction([Bc],t?"readwrite":"readonly").objectStore(Bc)}function JR(){const r=indexedDB.deleteDatabase(C0);return new zl(r).toPromise()}function Kd(){const r=indexedDB.open(C0,WR);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Bc,{keyPath:D0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Bc)?t(s):(s.close(),await JR(),t(await Kd()))})})}async function sv(r,t,n){const s=sh(r,!0).put({[D0]:t,value:n});return new zl(s).toPromise()}async function tI(r,t){const n=sh(r,!1).get(t),s=await new zl(n).toPromise();return s===void 0?null:s.value}function av(r,t){const n=sh(r,!0).delete(t);return new zl(n).toPromise()}const eI=800,nI=3;class N0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>nI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rh._getInstance(ZR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await XR(),!this.activeServiceWorker)return;this.sender=new KR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||$R()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kd();return await sv(t,zc,"1"),await av(t,zc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>tI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>av(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=sh(o,!1).getAll();return new zl(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N0.type="LOCAL";const iI=N0;new Ul(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(r,t){return t?Yi(t):(Tt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm extends T0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ha(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ha(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ha(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function rI(r){return zR(r.auth,new Dm(r),r.bypassAuthState)}function sI(r){const{auth:t,user:n}=r;return Tt(n,t,"internal-error"),LR(n,new Dm(r),r.bypassAuthState)}async function aI(r){const{auth:t,user:n}=r;return Tt(n,t,"internal-error"),UR(n,new Dm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(t,n,s,o,c=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:f,type:g}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return rI;case"linkViaPopup":case"linkViaRedirect":return aI;case"reauthViaPopup":case"reauthViaRedirect":return sI;default:yi(this.auth,"internal-error")}}resolve(t){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new Ul(2e3,1e4);async function lI(r,t,n){if(qn(r.app))return Promise.reject(Fn(r,"operation-not-supported-in-this-environment"));const s=ih(r);iR(r,t,Im);const o=O0(s,n);return new Ns(s,"signInViaPopup",t,o).executeNotNull()}class Ns extends M0{constructor(t,n,s,o,c){super(t,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Tt(t,this.auth,"internal-error"),t}async onExecution(){Zi(this.filter.length===1,"Popup operations only handle one event");const t=Cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,oI.get())};t()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="pendingRedirect",bc=new Map;class cI extends M0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=bc.get(this.auth._key());if(!t){try{const s=await hI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}bc.set(this.auth._key(),t)}return this.bypassAuthState||bc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(r,t){const n=mI(t),s=dI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function fI(r,t){bc.set(r._key(),t)}function dI(r){return Yi(r._redirectPersistence)}function mI(r){return Ac(uI,r.config.apiKey,r.name)}async function gI(r,t,n=!1){if(qn(r.app))return Promise.reject(Ms(r));const s=ih(r),o=O0(s,t),f=await new cI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=10*60*1e3;class yI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_I(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!V0(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=pI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ov(t))}saveEventToCache(t){this.cachedEventUids.add(ov(t)),this.lastProcessedEventTime=Date.now()}}function ov(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function V0({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function _I(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(r,t={}){return to(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TI=/^https?/;async function AI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await vI(r);for(const n of t)try{if(bI(n))return}catch{}yi(r,"unauthorized-domain")}function bI(r){const t=Gd(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!TI.test(n))return!1;if(EI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new Ul(3e4,6e4);function lv(){const r=di().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function wI(r){return new Promise((t,n)=>{var s,o,c;function f(){lv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{lv(),n(Fn(r,"network-request-failed"))},timeout:SI.get()})}if(!((o=(s=di().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=di().gapi)===null||c===void 0)&&c.load)f();else{const g=NR("iframefcb");return di()[g]=()=>{gapi.load?f():n(Fn(r,"network-request-failed"))},CR(`${DR()}?onload=${g}`).catch(p=>n(p))}}).catch(t=>{throw Sc=null,t})}let Sc=null;function RI(r){return Sc=Sc||wI(r),Sc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=new Ul(5e3,15e3),CI="__/auth/iframe",DI="emulator/auth/iframe",NI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MI(r){const t=r.config;Tt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Am(t,DI):`https://${r.config.authDomain}/${CI}`,s={apiKey:t.apiKey,appName:r.name,v:Ja},o=OI.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${kl(s).slice(1)}`}async function VI(r){const t=await RI(r),n=di().gapi;return Tt(n,r,"internal-error"),t.open({where:document.body,url:MI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NI,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const f=Fn(r,"network-request-failed"),g=di().setTimeout(()=>{c(f)},II.get());function p(){di().clearTimeout(g),o(s)}s.ping(p).then(p,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PI=500,kI=600,UI="_blank",LI="http://localhost";class uv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zI(r,t,n,s=PI,o=kI){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p=Object.assign(Object.assign({},xI),{width:s.toString(),height:o.toString(),top:c,left:f}),y=$e().toLowerCase();n&&(g=d0(y)?UI:n),h0(y)&&(t=t||LI,p.scrollbars="yes");const T=Object.entries(p).reduce((C,[H,Z])=>`${C}${H}=${Z},`,"");if(ER(y)&&g!=="_self")return BI(t||"",g),new uv(null);const S=window.open(t||"",g,T);Tt(S,r,"popup-blocked");try{S.focus()}catch{}return new uv(S)}function BI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="__/auth/handler",HI="emulator/auth/handler",jI=encodeURIComponent("fac");async function cv(r,t,n,s,o,c){Tt(r.config.authDomain,r,"auth-domain-config-required"),Tt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ja,eventId:o};if(t instanceof Im){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",vS(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,S]of Object.entries({}))f[T]=S}if(t instanceof Ll){const T=t.getScopes().filter(S=>S!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const T of Object.keys(g))g[T]===void 0&&delete g[T];const p=await r._getAppCheckToken(),y=p?`#${jI}=${encodeURIComponent(p)}`:"";return`${FI(r)}?${kl(g).slice(1)}${y}`}function FI({config:r}){return r.emulator?Am(r,HI):`https://${r.authDomain}/${qI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="webStorageSupport";class GI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R0,this._completeRedirectFn=gI,this._overrideRedirectResult=fI}async _openPopup(t,n,s,o){var c;Zi((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const f=await cv(t,n,s,Gd(),o);return zI(t,f,Cm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const c=await cv(t,n,s,Gd(),o);return YR(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(Zi(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await VI(t),s=new yI(t);return n.register("authEvent",o=>(Tt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xd,{type:xd},o=>{var c;const f=(c=o?.[0])===null||c===void 0?void 0:c[xd];f!==void 0&&n(!!f),yi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return _0()||f0()||wm()}}const QI=GI;var hv="@firebase/auth",fv="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XI(r){pi(new Qn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;Tt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v0(r)},y=new RR(s,o,c,p);return MR(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),pi(new Qn("auth-internal",t=>{const n=ih(t.getProvider("auth").getImmediate());return(s=>new KI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(hv,fv,YI(r)),xn(hv,fv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=5*60,ZI=SE("authIdTokenMaxAge")||$I;let dv=null;const WI=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ZI)return;const o=n?.token;dv!==o&&(dv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function JI(r=dm()){const t=zs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=OR(r,{popupRedirectResolver:QI,persistence:[iI,GR,R0]}),s=SE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=WI(c.toString());qR(n,f,()=>f(n.currentUser)),BR(n,g=>f(g))}}const o=AE("auth");return o&&VR(n,`http://${o}`),n}function t2(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}IR({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const c=Fn("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",t2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XI("Browser");var mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,x0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,b){function R(){}R.prototype=b.prototype,M.D=b.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(O,V,P){for(var I=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)I[Ee-2]=arguments[Ee];return b.prototype[V].apply(O,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,b,R){R||(R=0);var O=Array(16);if(typeof b=="string")for(var V=0;16>V;++V)O[V]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(V=0;16>V;++V)O[V]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=M.g[0],R=M.g[1],V=M.g[2];var P=M.g[3],I=b+(P^R&(V^P))+O[0]+3614090360&4294967295;b=R+(I<<7&4294967295|I>>>25),I=P+(V^b&(R^V))+O[1]+3905402710&4294967295,P=b+(I<<12&4294967295|I>>>20),I=V+(R^P&(b^R))+O[2]+606105819&4294967295,V=P+(I<<17&4294967295|I>>>15),I=R+(b^V&(P^b))+O[3]+3250441966&4294967295,R=V+(I<<22&4294967295|I>>>10),I=b+(P^R&(V^P))+O[4]+4118548399&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(V^b&(R^V))+O[5]+1200080426&4294967295,P=b+(I<<12&4294967295|I>>>20),I=V+(R^P&(b^R))+O[6]+2821735955&4294967295,V=P+(I<<17&4294967295|I>>>15),I=R+(b^V&(P^b))+O[7]+4249261313&4294967295,R=V+(I<<22&4294967295|I>>>10),I=b+(P^R&(V^P))+O[8]+1770035416&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(V^b&(R^V))+O[9]+2336552879&4294967295,P=b+(I<<12&4294967295|I>>>20),I=V+(R^P&(b^R))+O[10]+4294925233&4294967295,V=P+(I<<17&4294967295|I>>>15),I=R+(b^V&(P^b))+O[11]+2304563134&4294967295,R=V+(I<<22&4294967295|I>>>10),I=b+(P^R&(V^P))+O[12]+1804603682&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(V^b&(R^V))+O[13]+4254626195&4294967295,P=b+(I<<12&4294967295|I>>>20),I=V+(R^P&(b^R))+O[14]+2792965006&4294967295,V=P+(I<<17&4294967295|I>>>15),I=R+(b^V&(P^b))+O[15]+1236535329&4294967295,R=V+(I<<22&4294967295|I>>>10),I=b+(V^P&(R^V))+O[1]+4129170786&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^V&(b^R))+O[6]+3225465664&4294967295,P=b+(I<<9&4294967295|I>>>23),I=V+(b^R&(P^b))+O[11]+643717713&4294967295,V=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(V^P))+O[0]+3921069994&4294967295,R=V+(I<<20&4294967295|I>>>12),I=b+(V^P&(R^V))+O[5]+3593408605&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^V&(b^R))+O[10]+38016083&4294967295,P=b+(I<<9&4294967295|I>>>23),I=V+(b^R&(P^b))+O[15]+3634488961&4294967295,V=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(V^P))+O[4]+3889429448&4294967295,R=V+(I<<20&4294967295|I>>>12),I=b+(V^P&(R^V))+O[9]+568446438&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^V&(b^R))+O[14]+3275163606&4294967295,P=b+(I<<9&4294967295|I>>>23),I=V+(b^R&(P^b))+O[3]+4107603335&4294967295,V=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(V^P))+O[8]+1163531501&4294967295,R=V+(I<<20&4294967295|I>>>12),I=b+(V^P&(R^V))+O[13]+2850285829&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^V&(b^R))+O[2]+4243563512&4294967295,P=b+(I<<9&4294967295|I>>>23),I=V+(b^R&(P^b))+O[7]+1735328473&4294967295,V=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(V^P))+O[12]+2368359562&4294967295,R=V+(I<<20&4294967295|I>>>12),I=b+(R^V^P)+O[5]+4294588738&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^V)+O[8]+2272392833&4294967295,P=b+(I<<11&4294967295|I>>>21),I=V+(P^b^R)+O[11]+1839030562&4294967295,V=P+(I<<16&4294967295|I>>>16),I=R+(V^P^b)+O[14]+4259657740&4294967295,R=V+(I<<23&4294967295|I>>>9),I=b+(R^V^P)+O[1]+2763975236&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^V)+O[4]+1272893353&4294967295,P=b+(I<<11&4294967295|I>>>21),I=V+(P^b^R)+O[7]+4139469664&4294967295,V=P+(I<<16&4294967295|I>>>16),I=R+(V^P^b)+O[10]+3200236656&4294967295,R=V+(I<<23&4294967295|I>>>9),I=b+(R^V^P)+O[13]+681279174&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^V)+O[0]+3936430074&4294967295,P=b+(I<<11&4294967295|I>>>21),I=V+(P^b^R)+O[3]+3572445317&4294967295,V=P+(I<<16&4294967295|I>>>16),I=R+(V^P^b)+O[6]+76029189&4294967295,R=V+(I<<23&4294967295|I>>>9),I=b+(R^V^P)+O[9]+3654602809&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^V)+O[12]+3873151461&4294967295,P=b+(I<<11&4294967295|I>>>21),I=V+(P^b^R)+O[15]+530742520&4294967295,V=P+(I<<16&4294967295|I>>>16),I=R+(V^P^b)+O[2]+3299628645&4294967295,R=V+(I<<23&4294967295|I>>>9),I=b+(V^(R|~P))+O[0]+4096336452&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~V))+O[7]+1126891415&4294967295,P=b+(I<<10&4294967295|I>>>22),I=V+(b^(P|~R))+O[14]+2878612391&4294967295,V=P+(I<<15&4294967295|I>>>17),I=R+(P^(V|~b))+O[5]+4237533241&4294967295,R=V+(I<<21&4294967295|I>>>11),I=b+(V^(R|~P))+O[12]+1700485571&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~V))+O[3]+2399980690&4294967295,P=b+(I<<10&4294967295|I>>>22),I=V+(b^(P|~R))+O[10]+4293915773&4294967295,V=P+(I<<15&4294967295|I>>>17),I=R+(P^(V|~b))+O[1]+2240044497&4294967295,R=V+(I<<21&4294967295|I>>>11),I=b+(V^(R|~P))+O[8]+1873313359&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~V))+O[15]+4264355552&4294967295,P=b+(I<<10&4294967295|I>>>22),I=V+(b^(P|~R))+O[6]+2734768916&4294967295,V=P+(I<<15&4294967295|I>>>17),I=R+(P^(V|~b))+O[13]+1309151649&4294967295,R=V+(I<<21&4294967295|I>>>11),I=b+(V^(R|~P))+O[4]+4149444226&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~V))+O[11]+3174756917&4294967295,P=b+(I<<10&4294967295|I>>>22),I=V+(b^(P|~R))+O[2]+718787259&4294967295,V=P+(I<<15&4294967295|I>>>17),I=R+(P^(V|~b))+O[9]+3951481745&4294967295,M.g[0]=M.g[0]+b&4294967295,M.g[1]=M.g[1]+(V+(I<<21&4294967295|I>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+P&4294967295}s.prototype.u=function(M,b){b===void 0&&(b=M.length);for(var R=b-this.blockSize,O=this.B,V=this.h,P=0;P<b;){if(V==0)for(;P<=R;)o(this,M,P),P+=this.blockSize;if(typeof M=="string"){for(;P<b;)if(O[V++]=M.charCodeAt(P++),V==this.blockSize){o(this,O),V=0;break}}else for(;P<b;)if(O[V++]=M[P++],V==this.blockSize){o(this,O),V=0;break}}this.h=V,this.o+=b},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var b=1;b<M.length-8;++b)M[b]=0;var R=8*this.o;for(b=M.length-8;b<M.length;++b)M[b]=R&255,R/=256;for(this.u(M),M=Array(16),b=R=0;4>b;++b)for(var O=0;32>O;O+=8)M[R++]=this.g[b]>>>O&255;return M};function c(M,b){var R=g;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=b(M)}function f(M,b){this.h=b;for(var R=[],O=!0,V=M.length-1;0<=V;V--){var P=M[V]|0;O&&P==b||(R[V]=P,O=!1)}this.g=R}var g={};function p(M){return-128<=M&&128>M?c(M,function(b){return new f([b|0],0>b?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return S;if(0>M)return W(y(-M));for(var b=[],R=1,O=0;M>=R;O++)b[O]=M/R|0,R*=4294967296;return new f(b,0)}function T(M,b){if(M.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M.charAt(0)=="-")return W(T(M.substring(1),b));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(b,8)),O=S,V=0;V<M.length;V+=8){var P=Math.min(8,M.length-V),I=parseInt(M.substring(V,V+P),b);8>P?(P=y(Math.pow(b,P)),O=O.j(P).add(y(I))):(O=O.j(R),O=O.add(y(I)))}return O}var S=p(0),C=p(1),H=p(16777216);r=f.prototype,r.m=function(){if(rt(this))return-W(this).m();for(var M=0,b=1,R=0;R<this.g.length;R++){var O=this.i(R);M+=(0<=O?O:4294967296+O)*b,b*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(Z(this))return"0";if(rt(this))return"-"+W(this).toString(M);for(var b=y(Math.pow(M,6)),R=this,O="";;){var V=It(R,b).g;R=St(R,V.j(b));var P=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=V,Z(R))return P+O;for(;6>P.length;)P="0"+P;O=P+O}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function Z(M){if(M.h!=0)return!1;for(var b=0;b<M.g.length;b++)if(M.g[b]!=0)return!1;return!0}function rt(M){return M.h==-1}r.l=function(M){return M=St(this,M),rt(M)?-1:Z(M)?0:1};function W(M){for(var b=M.g.length,R=[],O=0;O<b;O++)R[O]=~M.g[O];return new f(R,~M.h).add(C)}r.abs=function(){return rt(this)?W(this):this},r.add=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],O=0,V=0;V<=b;V++){var P=O+(this.i(V)&65535)+(M.i(V)&65535),I=(P>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);O=I>>>16,P&=65535,I&=65535,R[V]=I<<16|P}return new f(R,R[R.length-1]&-2147483648?-1:0)};function St(M,b){return M.add(W(b))}r.j=function(M){if(Z(this)||Z(M))return S;if(rt(this))return rt(M)?W(this).j(W(M)):W(W(this).j(M));if(rt(M))return W(this.j(W(M)));if(0>this.l(H)&&0>M.l(H))return y(this.m()*M.m());for(var b=this.g.length+M.g.length,R=[],O=0;O<2*b;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(var V=0;V<M.g.length;V++){var P=this.i(O)>>>16,I=this.i(O)&65535,Ee=M.i(V)>>>16,ee=M.i(V)&65535;R[2*O+2*V]+=I*ee,ft(R,2*O+2*V),R[2*O+2*V+1]+=P*ee,ft(R,2*O+2*V+1),R[2*O+2*V+1]+=I*Ee,ft(R,2*O+2*V+1),R[2*O+2*V+2]+=P*Ee,ft(R,2*O+2*V+2)}for(O=0;O<b;O++)R[O]=R[2*O+1]<<16|R[2*O];for(O=b;O<2*b;O++)R[O]=0;return new f(R,0)};function ft(M,b){for(;(M[b]&65535)!=M[b];)M[b+1]+=M[b]>>>16,M[b]&=65535,b++}function ct(M,b){this.g=M,this.h=b}function It(M,b){if(Z(b))throw Error("division by zero");if(Z(M))return new ct(S,S);if(rt(M))return b=It(W(M),b),new ct(W(b.g),W(b.h));if(rt(b))return b=It(M,W(b)),new ct(W(b.g),b.h);if(30<M.g.length){if(rt(M)||rt(b))throw Error("slowDivide_ only works with positive integers.");for(var R=C,O=b;0>=O.l(M);)R=_t(R),O=_t(O);var V=Ct(R,1),P=Ct(O,1);for(O=Ct(O,2),R=Ct(R,2);!Z(O);){var I=P.add(O);0>=I.l(M)&&(V=V.add(R),P=I),O=Ct(O,1),R=Ct(R,1)}return b=St(M,V.j(b)),new ct(V,b)}for(V=S;0<=M.l(b);){for(R=Math.max(1,Math.floor(M.m()/b.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),P=y(R),I=P.j(b);rt(I)||0<I.l(M);)R-=O,P=y(R),I=P.j(b);Z(P)&&(P=C),V=V.add(P),M=St(M,I)}return new ct(V,M)}r.A=function(M){return It(this,M).h},r.and=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],O=0;O<b;O++)R[O]=this.i(O)&M.i(O);return new f(R,this.h&M.h)},r.or=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],O=0;O<b;O++)R[O]=this.i(O)|M.i(O);return new f(R,this.h|M.h)},r.xor=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],O=0;O<b;O++)R[O]=this.i(O)^M.i(O);return new f(R,this.h^M.h)};function _t(M){for(var b=M.g.length+1,R=[],O=0;O<b;O++)R[O]=M.i(O)<<1|M.i(O-1)>>>31;return new f(R,M.h)}function Ct(M,b){var R=b>>5;b%=32;for(var O=M.g.length-R,V=[],P=0;P<O;P++)V[P]=0<b?M.i(P+R)>>>b|M.i(P+R+1)<<32-b:M.i(P+R);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,x0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,Lr=f}).apply(typeof mv<"u"?mv:typeof self<"u"?self:typeof window<"u"?window:{});var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var P0,pl,k0,wc,Yd,U0,L0,z0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof gc=="object"&&gc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(u,m){if(m)t:{var _=s;u=u.split(".");for(var A=0;A<u.length-1;A++){var k=u[A];if(!(k in _))break t;_=_[k]}u=u[u.length-1],A=_[u],m=m(A),m!=A&&m!=null&&t(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,A=!1,k={next:function(){if(!A&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function T(u,m,_){return u.call.apply(u.bind,arguments)}function S(u,m,_){if(!u)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),u.apply(m,k)}}return function(){return u.apply(m,arguments)}}function C(u,m,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:S,C.apply(null,arguments)}function H(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),u.apply(this,A)}}function Z(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(A,k,q){for(var et=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)et[Ut-2]=arguments[Ut];return m.prototype[k].apply(A,et)}}function rt(u){const m=u.length;if(0<m){const _=Array(m);for(let A=0;A<m;A++)_[A]=u[A];return _}return[]}function W(u,m){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const k=u.length||0,q=A.length||0;u.length=k+q;for(let et=0;et<q;et++)u[k+et]=A[et]}else u.push(A)}}class St{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ft(u){return/^[\s\xa0]*$/.test(u)}function ct(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function It(u){return It[" "](u),u}It[" "]=function(){};var _t=ct().indexOf("Gecko")!=-1&&!(ct().toLowerCase().indexOf("webkit")!=-1&&ct().indexOf("Edge")==-1)&&!(ct().indexOf("Trident")!=-1||ct().indexOf("MSIE")!=-1)&&ct().indexOf("Edge")==-1;function Ct(u,m,_){for(const A in u)m.call(_,u[A],A,u)}function M(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function b(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,m){let _,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(_ in A)u[_]=A[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(A,_)&&(u[_]=A[_])}}function V(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function P(u){g.setTimeout(()=>{throw u},0)}function I(){var u=kt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ee{constructor(){this.h=this.g=null}add(m,_){const A=ee.get();A.set(m,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ee=new St(()=>new j,u=>u.reset());class j{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,lt=!1,kt=new Ee,D=()=>{const u=g.Promise.resolve(void 0);nt=()=>{u.then(X)}};var X=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(_){P(_)}var m=ee;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}lt=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ht=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};g.addEventListener("test",_,m),g.removeEventListener("test",_,m)}catch{}return u}();function Rt(u,m){if(J.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,A=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(_t){t:{try{It(m.nodeName);var k=!0;break t}catch{}k=!1}k||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:vt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Rt.aa.h.call(this)}}Z(Rt,J);var vt={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),tt=0;function gt(u,m,_,A,k){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!A,this.ha=k,this.key=++tt,this.da=this.fa=!1}function Ce(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ze(u){this.src=u,this.g={},this.h=0}Ze.prototype.add=function(u,m,_,A,k){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var et=Ei(u,m,A,k);return-1<et?(m=u[et],_||(m.fa=!1)):(m=new gt(m,this.src,q,!!A,k),m.fa=_,u.push(m)),m};function vi(u,m){var _=m.type;if(_ in u.g){var A=u.g[_],k=Array.prototype.indexOf.call(A,m,void 0),q;(q=0<=k)&&Array.prototype.splice.call(A,k,1),q&&(Ce(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Ei(u,m,_,A){for(var k=0;k<u.length;++k){var q=u[k];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==A)return k}return-1}var er="closure_lm_"+(1e6*Math.random()|0),Kr={};function Xn(u,m,_,A,k){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Xn(u,m[q],_,A,k);return null}return _=Gl(_),u&&u[de]?u.K(m,_,y(A)?!!A.capture:!1,k):En(u,m,_,!1,A,k)}function En(u,m,_,A,k,q){if(!m)throw Error("Invalid event type");var et=y(k)?!!k.capture:!!k,Ut=Gs(u);if(Ut||(u[er]=Ut=new Ze(u)),_=Ut.add(m,_,A,et,q),_.proxy)return _;if(A=vh(),_.proxy=A,A.src=u,A.listener=_,u.addEventListener)ht||(k=et),k===void 0&&(k=!1),u.addEventListener(m.toString(),A,k);else if(u.attachEvent)u.attachEvent(Yr(m.toString()),A);else if(u.addListener&&u.removeListener)u.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function vh(){function u(_){return m.call(u.src,u.listener,_)}const m=Eh;return u}function oo(u,m,_,A,k){if(Array.isArray(m))for(var q=0;q<m.length;q++)oo(u,m[q],_,A,k);else A=y(A)?!!A.capture:!!A,_=Gl(_),u&&u[de]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=Ei(q,_,A,k),-1<_&&(Ce(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Gs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Ei(m,_,A,k)),(_=-1<u?m[u]:null)&&Fs(_))}function Fs(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[de])vi(m.i,u);else{var _=u.type,A=u.proxy;m.removeEventListener?m.removeEventListener(_,A,u.capture):m.detachEvent?m.detachEvent(Yr(_),A):m.addListener&&m.removeListener&&m.removeListener(A),(_=Gs(m))?(vi(_,u),_.h==0&&(_.src=null,m[er]=null)):Ce(u)}}}function Yr(u){return u in Kr?Kr[u]:Kr[u]="on"+u}function Eh(u,m){if(u.da)u=!0;else{m=new Rt(m,this);var _=u.listener,A=u.ha||u.src;u.fa&&Fs(u),u=_.call(A,m)}return u}function Gs(u){return u=u[er],u instanceof Ze?u:null}var lo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gl(u){return typeof u=="function"?u:(u[lo]||(u[lo]=function(m){return u.handleEvent(m)}),u[lo])}function ae(){it.call(this),this.i=new Ze(this),this.M=this,this.F=null}Z(ae,it),ae.prototype[de]=!0,ae.prototype.removeEventListener=function(u,m,_,A){oo(this,u,m,_,A)};function Gt(u,m){var _,A=u.F;if(A)for(_=[];A;A=A.F)_.push(A);if(u=u.M,A=m.type||m,typeof m=="string")m=new J(m,u);else if(m instanceof J)m.target=m.target||u;else{var k=m;m=new J(A,u),O(m,k)}if(k=!0,_)for(var q=_.length-1;0<=q;q--){var et=m.g=_[q];k=cn(et,A,!0,m)&&k}if(et=m.g=u,k=cn(et,A,!0,m)&&k,k=cn(et,A,!1,m)&&k,_)for(q=0;q<_.length;q++)et=m.g=_[q],k=cn(et,A,!1,m)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],A=0;A<_.length;A++)Ce(_[A]);delete u.g[m],u.h--}}this.F=null},ae.prototype.K=function(u,m,_,A){return this.i.add(String(u),m,!1,_,A)},ae.prototype.L=function(u,m,_,A){return this.i.add(String(u),m,!0,_,A)};function cn(u,m,_,A){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var k=!0,q=0;q<m.length;++q){var et=m[q];if(et&&!et.da&&et.capture==_){var Ut=et.listener,Ae=et.ha||et.src;et.fa&&vi(u.i,et),k=Ut.call(Ae,A)!==!1&&k}}return k&&!A.defaultPrevented}function je(u,m,_){if(typeof u=="function")_&&(u=C(u,_));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(u,m||0)}function Ql(u){u.g=je(()=>{u.g=null,u.i&&(u.i=!1,Ql(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Th extends it{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Ql(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(u){it.call(this),this.h=u,this.g={}}Z(Xr,it);var $r=[];function Zr(u){Ct(u.g,function(m,_){this.g.hasOwnProperty(_)&&Fs(m)},u),u.g={}}Xr.prototype.N=function(){Xr.aa.N.call(this),Zr(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=g.JSON.stringify,Qs=g.JSON.parse,Wr=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function uo(){}uo.prototype.h=null;function co(u){return u.h||(u.h=u.i())}function ho(){}var Ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ai(){J.call(this,"d")}Z(Ai,J);function fo(){J.call(this,"c")}Z(fo,J);var $n={},mo=null;function nr(){return mo=mo||new ae}$n.La="serverreachability";function Ks(u){J.call(this,$n.La,u)}Z(Ks,J);function ir(u){const m=nr();Gt(m,new Ks(m))}$n.STAT_EVENT="statevent";function Kl(u,m){J.call(this,$n.STAT_EVENT,u),this.stat=m}Z(Kl,J);function ne(u){const m=nr();Gt(m,new Kl(m,u))}$n.Ma="timingevent";function Te(u,m){J.call(this,$n.Ma,u),this.size=m}Z(Te,J);function me(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},m)}function Tn(){this.g=!0}Tn.prototype.xa=function(){this.g=!1};function go(u,m,_,A,k,q){u.info(function(){if(u.g)if(q)for(var et="",Ut=q.split("&"),Ae=0;Ae<Ut.length;Ae++){var Lt=Ut[Ae].split("=");if(1<Lt.length){var Ne=Lt[0];Lt=Lt[1];var be=Ne.split("_");et=2<=be.length&&be[1]=="type"?et+(Ne+"="+Lt+"&"):et+(Ne+"=redacted&")}}else et=null;else et=q;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+m+`
`+_+`
`+et})}function Ah(u,m,_,A,k,q,et){u.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+m+`
`+_+`
`+q+" "+et})}function rr(u,m,_,A){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Jr(u,_)+(A?" "+A:"")})}function Yl(u,m){u.info(function(){return"TIMEOUT: "+m})}Tn.prototype.info=function(){};function Jr(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var A=_[u];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var q=k[0];if(q!="noop"&&q!="stop"&&q!="close")for(var et=1;et<k.length;et++)k[et]=""}}}}return Pn(_)}catch{return m}}var sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zn;function Wn(){}Z(Wn,uo),Wn.prototype.g=function(){return new XMLHttpRequest},Wn.prototype.i=function(){return{}},Zn=new Wn;function We(u,m,_,A){this.j=u,this.i=m,this.l=_,this.R=A||1,this.U=new Xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}var po={},Ys={};function kn(u,m,_){u.L=1,u.v=rs(hn(m)),u.m=_,u.P=!0,Si(u,null)}function Si(u,m){u.F=Date.now(),ts(u),u.A=hn(u.v);var _=u.A,A=u.R;Array.isArray(A)||(A=[String(A)]),Ao(_.i,"t",A),u.C=0,_=u.j.J,u.h=new ue,u.g=cu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Th(C(u.Y,u,u.g),u.O)),m=u.U,_=u.g,A=u.ca;var k="readystatechange";Array.isArray(k)||(k&&($r[0]=k.toString()),k=$r);for(var q=0;q<k.length;q++){var et=Xn(_,k[q],A||m.handleEvent,!1,m.h||m);if(!et)break;m.g[et.key]=et}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),ir(),go(u.i,u.u,u.A,u.l,u.R,u.m)}We.prototype.ca=function(u){u=u.target;const m=this.M;m&&wn(u)==3?m.j():this.Y(u)},We.prototype.Y=function(u){try{if(u==this.g)t:{const be=wn(this.g);var m=this.g.Ba();const Mi=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||nu(this.g)))){this.J||be!=4||m==7||(m==8||0>=Mi?ir(3):ir(2)),ar(this);var _=this.g.Z();this.X=_;e:if(Xl(this)){var A=nu(this.g);u="";var k=A.length,q=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pe(this),Jn(this);var et="";break e}this.h.i=new g.TextDecoder}for(m=0;m<k;m++)this.h.h=!0,u+=this.h.i.decode(A[m],{stream:!(q&&m==k-1)});A.length=0,this.h.g+=u,this.C=0,et=this.h.g}else et=this.g.oa();if(this.o=_==200,Ah(this.i,this.u,this.A,this.l,this.R,be,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Ut,Ae=this.g;if((Ut=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ft(Ut)){var Lt=Ut;break e}}Lt=null}if(_=Lt)rr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,es(this,_);else{this.o=!1,this.s=3,ne(12),Pe(this),Jn(this);break t}}if(this.P){_=!0;let ke;for(;!this.J&&this.C<et.length;)if(ke=$l(this,et),ke==Ys){be==4&&(this.s=4,ne(14),_=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==po){this.s=4,ne(15),rr(this.i,this.l,et,"[Invalid Chunk]"),_=!1;break}else rr(this.i,this.l,ke,null),es(this,ke);if(Xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||et.length!=0||this.h.h||(this.s=1,ne(16),_=!1),this.o=this.o&&_,!_)rr(this.i,this.l,et,"[Invalid Chunked Response]"),Pe(this),Jn(this);else if(0<et.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+et.length),fs(Ne),Ne.M=!0,ne(11))}}else rr(this.i,this.l,et,null),es(this,et);be==4&&Pe(this),this.o&&!this.J&&(be==4?ou(this.j,this):(this.o=!1,ts(this)))}else Ih(this.g),_==400&&0<et.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),Pe(this),Jn(this)}}}catch{}finally{}};function Xl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function $l(u,m){var _=u.C,A=m.indexOf(`
`,_);return A==-1?Ys:(_=Number(m.substring(_,A)),isNaN(_)?po:(A+=1,A+_>m.length?Ys:(m=m.slice(A,A+_),u.C=A+_,m)))}We.prototype.cancel=function(){this.J=!0,Pe(this)};function ts(u){u.S=Date.now()+u.I,Zl(u,u.I)}function Zl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=me(C(u.ba,u),m)}function ar(u){u.B&&(g.clearTimeout(u.B),u.B=null)}We.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Yl(this.i,this.A),this.L!=2&&(ir(),ne(17)),Pe(this),this.s=2,Jn(this)):Zl(this,this.S-u)};function Jn(u){u.j.G==0||u.J||ou(u.j,u)}function Pe(u){ar(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Zr(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function es(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||yo(_.h,u))){if(!u.K&&yo(_.h,u)&&_.G==3){try{var A=_.Da.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)aa(_),ra(_);else break t;Io(_),ne(18)}}else _.za=k[1],0<_.za-_.T&&37500>k[2]&&_.F&&_.v==0&&!_.C&&(_.C=me(C(_.Za,_),6e3));if(1>=$s(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Oi(_,11)}else if((u.K||_.g==u)&&aa(_),!ft(m))for(k=_.Da.g.parse(m),m=0;m<k.length;m++){let Lt=k[m];if(_.T=Lt[0],Lt=Lt[1],_.G==2)if(Lt[0]=="c"){_.K=Lt[1],_.ia=Lt[2];const Ne=Lt[3];Ne!=null&&(_.la=Ne,_.j.info("VER="+_.la));const be=Lt[4];be!=null&&(_.Aa=be,_.j.info("SVER="+_.Aa));const Mi=Lt[5];Mi!=null&&typeof Mi=="number"&&0<Mi&&(A=1.5*Mi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const ke=u.g;if(ke){const ai=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var q=A.h;q.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Zs(q,q.h),q.h=null))}if(A.D){const Do=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Do&&(A.ya=Do,Yt(A.I,A.D,Do))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var et=u;if(A.qa=uu(A,A.J?A.ia:null,A.W),et.K){Je(A.h,et);var Ut=et,Ae=A.L;Ae&&(Ut.I=Ae),Ut.B&&(ar(Ut),ts(Ut)),A.g=et}else su(A);0<_.i.length&&sa(_)}else Lt[0]!="stop"&&Lt[0]!="close"||Oi(_,7);else _.G==3&&(Lt[0]=="stop"||Lt[0]=="close"?Lt[0]=="stop"?Oi(_,7):wo(_):Lt[0]!="noop"&&_.l&&_.l.ta(Lt),_.v=0)}}ir(4)}catch{}}var Wl=class{constructor(u,m){this.g=u,this.map=m}};function wi(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xs(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function $s(u){return u.h?1:u.g?u.g.size:0}function yo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Zs(u,m){u.g?u.g.add(m):u.h=m}function Je(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}wi.prototype.cancel=function(){if(this.i=_o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function _o(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return rt(u.i)}function bh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,A=0;A<_;A++)m.push(u[A]);return m}m=[],_=0;for(A in u)m[_++]=u[A];return m}function Ws(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const A in u)m[_++]=A;return m}}}function vo(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Ws(u),A=bh(u),k=A.length,q=0;q<k;q++)m.call(void 0,A[q],_&&_[q],u)}var ns=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var A=u[_].indexOf("="),k=null;if(0<=A){var q=u[_].substring(0,A);k=u[_].substring(A+1)}else q=u[_];m(q,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ge(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ge){this.h=u.h,is(this,u.j),this.o=u.o,this.g=u.g,or(this,u.s),this.l=u.l;var m=u.i,_=new Ii;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Ri(this,_),this.m=u.m}else u&&(m=String(u).match(ns))?(this.h=!1,is(this,m[1]||"",!0),this.o=An(m[2]||""),this.g=An(m[3]||"",!0),or(this,m[4]),this.l=An(m[5]||"",!0),Ri(this,m[6]||"",!0),this.m=An(m[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}ge.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ss(m,Eo,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ss(m,Eo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ss(_,_.charAt(0)=="/"?wh:To,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ss(_,Js)),u.join("")};function hn(u){return new ge(u)}function is(u,m,_){u.j=_?An(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function or(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Ri(u,m,_){m instanceof Ii?(u.i=m,tu(u.i,u.h)):(_||(m=ss(m,Rh)),u.i=new Ii(m,u.h))}function Yt(u,m,_){u.i.set(m,_)}function rs(u){return Yt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function An(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ss(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Jl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Jl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Eo=/[#\/\?@]/g,To=/[#\?:]/g,wh=/[#\?]/g,Rh=/[#\?@]/g,Js=/#/g;function Ii(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function bn(u){u.g||(u.g=new Map,u.h=0,u.i&&Sh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Ii.prototype,r.add=function(u,m){bn(this),this.i=null,u=ti(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Ci(u,m){bn(u),m=ti(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Di(u,m){return bn(u),m=ti(u,m),u.g.has(m)}r.forEach=function(u,m){bn(this),this.g.forEach(function(_,A){_.forEach(function(k){u.call(m,k,A,this)},this)},this)},r.na=function(){bn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let A=0;A<m.length;A++){const k=u[A];for(let q=0;q<k.length;q++)_.push(m[A])}return _},r.V=function(u){bn(this);let m=[];if(typeof u=="string")Di(this,u)&&(m=m.concat(this.g.get(ti(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return bn(this),this.i=null,u=ti(this,u),Di(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Ao(u,m,_){Ci(u,m),0<_.length&&(u.i=null,u.g.set(ti(u,m),rt(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var A=m[_];const q=encodeURIComponent(String(A)),et=this.V(A);for(A=0;A<et.length;A++){var k=q;et[A]!==""&&(k+="="+encodeURIComponent(String(et[A]))),u.push(k)}}return this.i=u.join("&")};function ti(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function tu(u,m){m&&!u.j&&(bn(u),u.i=null,u.g.forEach(function(_,A){var k=A.toLowerCase();A!=k&&(Ci(this,A),Ao(this,k,_))},u)),u.j=m}function as(u,m){const _=new Tn;if(g.Image){const A=new Image;A.onload=H(Sn,_,"TestLoadImage: loaded",!0,m,A),A.onerror=H(Sn,_,"TestLoadImage: error",!1,m,A),A.onabort=H(Sn,_,"TestLoadImage: abort",!1,m,A),A.ontimeout=H(Sn,_,"TestLoadImage: timeout",!1,m,A),g.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=u}else m(!1)}function Un(u,m){const _=new Tn,A=new AbortController,k=setTimeout(()=>{A.abort(),Sn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:A.signal}).then(q=>{clearTimeout(k),q.ok?Sn(_,"TestPingServer: ok",!0,m):Sn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(k),Sn(_,"TestPingServer: error",!1,m)})}function Sn(u,m,_,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(_)}catch{}}function os(){this.g=new Wr}function ei(u,m,_){const A=_||"";try{vo(u,function(k,q){let et=k;y(k)&&(et=Pn(k)),m.push(A+q+"="+encodeURIComponent(et))})}catch(k){throw m.push(A+"type="+encodeURIComponent("_badmap")),k}}function lr(u){this.l=u.Ub||null,this.j=u.eb||!1}Z(lr,uo),lr.prototype.g=function(){return new Ni(this.l,this.j)},lr.prototype.i=function(u){return function(){return u}}({});function Ni(u,m){ae.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Z(Ni,ae),r=Ni.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,ii(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function bo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ni(this):ii(this),this.readyState==3&&bo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,ni(this))},r.Qa=function(u){this.g&&(this.response=u,ni(this))},r.ga=function(){this.g&&ni(this)};function ni(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ii(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function ii(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function So(u){let m="";return Ct(u,function(_,A){m+=A,m+=":",m+=_,m+=`\r
`}),m}function De(u,m,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=So(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Yt(u,m,_))}function jt(u){ae.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Z(jt,ae);var ta=/^https?$/i,ls=["POST","PUT"];r=jt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zn.g(),this.v=this.o?co(this.o):co(Zn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){eu(this,q);return}if(u=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)_.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),k=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(ls,m,void 0))||A||k||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,et]of _)this.g.setRequestHeader(q,et);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{us(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){eu(this,q)}};function eu(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ea(u),ri(u)}function ea(u){u.A||(u.A=!0,Gt(u,"complete"),Gt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Gt(this,"complete"),Gt(this,"abort"),ri(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?na(this):this.bb())},r.bb=function(){na(this)};function na(u){if(u.h&&typeof f<"u"&&(!u.v[1]||wn(u)!=4||u.Z()!=2)){if(u.u&&wn(u)==4)je(u.Ea,0,u);else if(Gt(u,"readystatechange"),wn(u)==4){u.h=!1;try{const et=u.Z();t:switch(et){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var A;if(A=et===0){var k=String(u.D).match(ns)[1]||null;!k&&g.self&&g.self.location&&(k=g.self.location.protocol.slice(0,-1)),A=!ta.test(k?k.toLowerCase():"")}_=A}if(_)Gt(u,"complete"),Gt(u,"success");else{u.m=6;try{var q=2<wn(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",ea(u)}}finally{ri(u)}}}}function ri(u,m){if(u.g){us(u);const _=u.g,A=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Gt(u,"ready");try{_.onreadystatechange=A}catch{}}}function us(u){u.I&&(g.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function wn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Qs(m)}};function nu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ih(u){const m={};u=(u.g&&2<=wn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<u.length;A++){if(ft(u[A]))continue;var _=V(u[A]);const k=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[k]||[];m[k]=q,q.push(_)}M(m,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ia(u){this.Aa=0,this.i=[],this.j=new Tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,u),this.cb=cs("retryDelaySeedMs",1e4,u),this.Wa=cs("forwardChannelMaxRetries",2,u),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new wi(u&&u.concurrentRequestLimit),this.Da=new os,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ia.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,A){ne(0),this.W=u,this.H=m||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=uu(this,null,this.W),sa(this)};function wo(u){if(iu(u),u.G==3){var m=u.U++,_=hn(u.I);if(Yt(_,"SID",u.K),Yt(_,"RID",m),Yt(_,"TYPE","terminate"),hs(u,_),m=new We(u,u.j,m),m.L=2,m.v=rs(hn(_)),_=!1,g.navigator&&g.navigator.sendBeacon)try{_=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&g.Image&&(new Image().src=m.v,_=!0),_||(m.g=cu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),ts(m)}lu(u)}function ra(u){u.g&&(fs(u),u.g.cancel(),u.g=null)}function iu(u){ra(u),u.u&&(g.clearTimeout(u.u),u.u=null),aa(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function sa(u){if(!Xs(u.h)&&!u.s){u.s=!0;var m=u.Ga;nt||D(),lt||(nt(),lt=!0),kt.add(m,u),u.B=0}}function Ch(u,m){return $s(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=me(C(u.Ga,u,m),Co(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const k=new We(this,this.j,u);let q=this.o;if(this.S&&(q?(q=b(q),O(q,this.S)):q=this.S),this.m!==null||this.O||(k.H=q,q=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=ru(this,k,m),_=hn(this.I),Yt(_,"RID",u),Yt(_,"CVER",22),this.D&&Yt(_,"X-HTTP-Session-Id",this.D),hs(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(So(q)))+"&"+m:this.m&&De(_,this.m,q)),Zs(this.h,k),this.Ua&&Yt(_,"TYPE","init"),this.P?(Yt(_,"$req",m),Yt(_,"SID","null"),k.T=!0,kn(k,_,null)):kn(k,_,m),this.G=2}}else this.G==3&&(u?Ro(this,u):this.i.length==0||Xs(this.h)||Ro(this))};function Ro(u,m){var _;m?_=m.l:_=u.U++;const A=hn(u.I);Yt(A,"SID",u.K),Yt(A,"RID",_),Yt(A,"AID",u.T),hs(u,A),u.m&&u.o&&De(A,u.m,u.o),_=new We(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ru(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Zs(u.h,_),kn(_,A,m)}function hs(u,m){u.H&&Ct(u.H,function(_,A){Yt(m,A,_)}),u.l&&vo({},function(_,A){Yt(m,A,_)})}function ru(u,m,_){_=Math.min(u.i.length,_);var A=u.l?C(u.l.Na,u.l,u):null;t:{var k=u.i;let q=-1;for(;;){const et=["count="+_];q==-1?0<_?(q=k[0].g,et.push("ofs="+q)):q=0:et.push("ofs="+q);let Ut=!0;for(let Ae=0;Ae<_;Ae++){let Lt=k[Ae].g;const Ne=k[Ae].map;if(Lt-=q,0>Lt)q=Math.max(0,k[Ae].g-100),Ut=!1;else try{ei(Ne,et,"req"+Lt+"_")}catch{A&&A(Ne)}}if(Ut){A=et.join("&");break t}}}return u=u.i.splice(0,_),m.D=u,A}function su(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;nt||D(),lt||(nt(),lt=!0),kt.add(m,u),u.v=0}}function Io(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=me(C(u.Fa,u),Co(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,au(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=me(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ne(10),ra(this),au(this))};function fs(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function au(u){u.g=new We(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=hn(u.qa);Yt(m,"RID","rpc"),Yt(m,"SID",u.K),Yt(m,"AID",u.T),Yt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Yt(m,"TO",u.ja),Yt(m,"TYPE","xmlhttp"),hs(u,m),u.m&&u.o&&De(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=rs(hn(m)),_.m=null,_.P=!0,Si(_,u)}r.Za=function(){this.C!=null&&(this.C=null,ra(this),Io(this),ne(19))};function aa(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function ou(u,m){var _=null;if(u.g==m){aa(u),fs(u),u.g=null;var A=2}else if(yo(u.h,m))_=m.D,Je(u.h,m),A=1;else return;if(u.G!=0){if(m.o)if(A==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var k=u.B;A=nr(),Gt(A,new Te(A,_)),sa(u)}else su(u);else if(k=m.s,k==3||k==0&&0<m.X||!(A==1&&Ch(u,m)||A==2&&Io(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),k){case 1:Oi(u,5);break;case 4:Oi(u,10);break;case 3:Oi(u,6);break;default:Oi(u,2)}}}function Co(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Oi(u,m){if(u.j.info("Error code "+m),m==2){var _=C(u.fb,u),A=u.Xa;const k=!A;A=new ge(A||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||is(A,"https"),rs(A),k?as(A.toString(),_):Un(A.toString(),_)}else ne(2);u.G=0,u.l&&u.l.sa(m),lu(u),iu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ne(2)):(this.j.info("Failed to ping google.com"),ne(1))};function lu(u){if(u.G=0,u.ka=[],u.l){const m=_o(u.h);(m.length!=0||u.i.length!=0)&&(W(u.ka,m),W(u.ka,u.i),u.h.i.length=0,rt(u.i),u.i.length=0),u.l.ra()}}function uu(u,m,_){var A=_ instanceof ge?hn(_):new ge(_);if(A.g!="")m&&(A.g=m+"."+A.g),or(A,A.s);else{var k=g.location;A=k.protocol,m=m?m+"."+k.hostname:k.hostname,k=+k.port;var q=new ge(null);A&&is(q,A),m&&(q.g=m),k&&or(q,k),_&&(q.l=_),A=q}return _=u.D,m=u.ya,_&&m&&Yt(A,_,m),Yt(A,"VER",u.la),hs(u,A),A}function cu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new jt(new lr({eb:_})):new jt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function hu(){}r=hu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function oa(){}oa.prototype.g=function(u,m){return new tn(u,m)};function tn(u,m){ae.call(this),this.g=new ia(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ft(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ft(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new si(this)}Z(tn,ae),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){wo(this.g)},tn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Pn(u),u=_);m.i.push(new Wl(m.Ya++,u)),m.G==3&&sa(m)},tn.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,tn.aa.N.call(this)};function fu(u){Ai.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const _ in m){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}Z(fu,Ai);function du(){fo.call(this),this.status=1}Z(du,fo);function si(u){this.g=u}Z(si,hu),si.prototype.ua=function(){Gt(this.g,"a")},si.prototype.ta=function(u){Gt(this.g,new fu(u))},si.prototype.sa=function(u){Gt(this.g,new du)},si.prototype.ra=function(){Gt(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,z0=function(){return new oa},L0=function(){return nr()},U0=$n,Yd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,wc=sr,bi.COMPLETE="complete",k0=bi,ho.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",ae.prototype.listen=ae.prototype.K,pl=ho,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,P0=jt}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});const gv="@firebase/firestore",pv="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new th("@firebase/firestore");function ka(){return ks.logLevel}function st(r,...t){if(ks.logLevel<=xt.DEBUG){const n=t.map(Nm);ks.debug(`Firestore (${eo}): ${r}`,...n)}}function Wi(r,...t){if(ks.logLevel<=xt.ERROR){const n=t.map(Nm);ks.error(`Firestore (${eo}): ${r}`,...n)}}function Ga(r,...t){if(ks.logLevel<=xt.WARN){const n=t.map(Nm);ks.warn(`Firestore (${eo}): ${r}`,...n)}}function Nm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,B0(r,s,n)}function B0(r,t,n){let s=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Wi(s),new Error(s)}function Ft(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||B0(t,o,s)}function bt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class at extends Yn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class e2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class n2{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class i2{constructor(t){this.t=t,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ft(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let c=new Xi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Xi,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},g=p=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Xi)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ft(typeof s.accessToken=="string",31837,{l:s}),new q0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ft(t===null||typeof t=="string",2055,{h:t}),new Ye(t)}}class r2{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class s2{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new r2(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a2{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ft(this.o===void 0,3512);const s=c=>{c.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,st("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const o=c=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ft(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=o2(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=t.charAt(o[c]%62))}return s}}function Nt(r,t){return r<t?-1:r>t?1:0}function Xd(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return Nt(s,o);{const c=H0(),f=l2(c.encode(_v(r,n)),c.encode(_v(t,n)));return f!==0?f:Nt(s,o)}}n+=s>65535?2:1}return Nt(r.length,t.length)}function _v(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function l2(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return Nt(r[n],t[n]);return Nt(r.length,t.length)}function Qa(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=-62135596800,Ev=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(t){return Re.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Ev);return new Re(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new at(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new at(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<vv)throw new at(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new at(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ev}_compareTo(t){return this.seconds===t.seconds?Nt(this.nanoseconds,t.nanoseconds):Nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-vv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new Re(0,0))}static max(){return new At(new Re(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="__name__";class fi{constructor(t,n,s){n===void 0?n=0:n>t.length&&yt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&yt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return fi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof fi?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const c=fi.compareSegments(t.get(o),n.get(o));if(c!==0)return c}return Nt(t.length,n.length)}static compareSegments(t,n){const s=fi.isNumericId(t),o=fi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?fi.extractNumericId(t).compare(fi.extractNumericId(n)):Xd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Lr.fromString(t.substring(4,t.length-2))}}class te extends fi{construct(t,n,s){return new te(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new at(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new te(n)}static emptyPath(){return new te([])}}const u2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends fi{construct(t,n,s){return new qe(t,n,s)}static isValidIdentifier(t){return u2.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tv}static keyField(){return new qe([Tv])}static fromServerFormat(t){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new at(Y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new at(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new at(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(s+=g,o++):(c(),o++)}if(c(),f)throw new at(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(te.fromString(t))}static fromName(t){return new dt(te.fromString(t).popFirst(5))}static empty(){return new dt(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&te.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return te.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new te(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=-1;function c2(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=At.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new qr(o,dt.empty(),t)}function h2(r){return new qr(r.readTime,r.key,Nl)}class qr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new qr(At.min(),dt.empty(),Nl)}static max(){return new qr(At.max(),dt.empty(),Nl)}}function f2(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=dt.comparator(r.documentKey,t.documentKey),n!==0?n:Nt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==d2)throw r;st("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&yt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new K((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):K.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):K.reject(n)}static resolve(t){return new K((n,s)=>{n(t)})}static reject(t){return new K((n,s)=>{s(t)})}static waitFor(t){return new K((n,s)=>{let o=0,c=0,f=!1;t.forEach(g=>{++o,g.next(()=>{++c,f&&c===o&&n()},p=>s(p))}),f=!0,c===o&&n()})}static or(t){let n=K.resolve(!1);for(const s of t)n=n.next(o=>o?K.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,c)=>{s.push(n.call(this,o,c))}),this.waitFor(s)}static mapArray(t,n){return new K((s,o)=>{const c=t.length,f=new Array(c);let g=0;for(let p=0;p<c;p++){const y=p;n(t[y]).next(T=>{f[y]=T,++g,g===c&&s(f)},T=>o(T))}})}static doWhile(t,n){return new K((s,o)=>{const c=()=>{t()===!0?n().next(()=>{c()},o):s()};c()})}}function g2(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function io(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}ah.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=-1;function oh(r){return r==null}function qc(r){return r===0&&1/r==-1/0}function p2(r){return typeof r=="number"&&Number.isInteger(r)&&!qc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="";function y2(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Av(t)),t=_2(r.get(n),t);return Av(t)}function _2(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case F0:n+="";break;default:n+=c}}return n}function Av(r){return r+F0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Bs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function G0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.comparator=t,this.root=n||Be.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Be.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pc(this.root,t,this.comparator,!1)}getReverseIterator(){return new pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pc(this.root,t,this.comparator,!0)}}class pc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&o&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Be{constructor(t,n,s,o,c){this.key=t,this.value=n,this.color=s??Be.RED,this.left=o??Be.EMPTY,this.right=c??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,c){return new Be(t??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const c=s(t,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(t,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Be.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw yt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw yt(27949);return t+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw yt(57766)}get value(){throw yt(16141)}get color(){throw yt(16727)}get left(){throw yt(29726)}get right(){throw yt(36894)}copy(t,n,s,o,c){return this}insert(t,n,s){return new Be(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(t){return new Sv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ie(this.comparator);return n.data=t,n}}class Sv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.fields=t,t.sort(qe.comparator)}static empty(){return new jn([])}unionWith(t){let n=new Ie(qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new jn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Qa(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Q0("Invalid base64 string: "+c):c}}(t);return new He(n)}static fromUint8Array(t){const n=function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c}(t);return new He(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}He.EMPTY_BYTE_STRING=new He("");const v2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(r){if(Ft(!!r,39018),typeof r=="string"){let t=0;const n=v2.exec(r);if(Ft(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function jr(r){return typeof r=="string"?He.fromBase64String(r):He.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="server_timestamp",Y0="__type__",X0="__previous_value__",$0="__local_write_time__";function Mm(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Y0])===null||n===void 0?void 0:n.stringValue)===K0}function lh(r){const t=r.mapValue.fields[X0];return Mm(t)?lh(t):t}function Ol(r){const t=Hr(r.mapValue.fields[$0].timestampValue);return new Re(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(t,n,s,o,c,f,g,p,y,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=T}}const Hc="(default)";class Ml{constructor(t,n){this.projectId=t,this.database=n||Hc}static empty(){return new Ml("","")}get isDefaultDatabase(){return this.database===Hc}isEqual(t){return t instanceof Ml&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="__type__",T2="__max__",yc={mapValue:{}},W0="__vector__",jc="value";function Fr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Mm(r)?4:b2(r)?9007199254740991:A2(r)?10:11:yt(28295,{value:r})}function _i(r,t){if(r===t)return!0;const n=Fr(r);if(n!==Fr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ol(r).isEqual(Ol(t));case 3:return function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Hr(o.timestampValue),g=Hr(c.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,c){return jr(o.bytesValue).isEqual(jr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,c){return fe(o.geoPointValue.latitude)===fe(c.geoPointValue.latitude)&&fe(o.geoPointValue.longitude)===fe(c.geoPointValue.longitude)}(r,t);case 2:return function(o,c){if("integerValue"in o&&"integerValue"in c)return fe(o.integerValue)===fe(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=fe(o.doubleValue),g=fe(c.doubleValue);return f===g?qc(f)===qc(g):isNaN(f)&&isNaN(g)}return!1}(r,t);case 9:return Qa(r.arrayValue.values||[],t.arrayValue.values||[],_i);case 10:case 11:return function(o,c){const f=o.mapValue.fields||{},g=c.mapValue.fields||{};if(bv(f)!==bv(g))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(g[p]===void 0||!_i(f[p],g[p])))return!1;return!0}(r,t);default:return yt(52216,{left:r})}}function Vl(r,t){return(r.values||[]).find(n=>_i(n,t))!==void 0}function Ka(r,t){if(r===t)return 0;const n=Fr(r),s=Fr(t);if(n!==s)return Nt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Nt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const g=fe(c.integerValue||c.doubleValue),p=fe(f.integerValue||f.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return wv(r.timestampValue,t.timestampValue);case 4:return wv(Ol(r),Ol(t));case 5:return Xd(r.stringValue,t.stringValue);case 6:return function(c,f){const g=jr(c),p=jr(f);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const g=c.split("/"),p=f.split("/");for(let y=0;y<g.length&&y<p.length;y++){const T=Nt(g[y],p[y]);if(T!==0)return T}return Nt(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const g=Nt(fe(c.latitude),fe(f.latitude));return g!==0?g:Nt(fe(c.longitude),fe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Rv(r.arrayValue,t.arrayValue);case 10:return function(c,f){var g,p,y,T;const S=c.fields||{},C=f.fields||{},H=(g=S[jc])===null||g===void 0?void 0:g.arrayValue,Z=(p=C[jc])===null||p===void 0?void 0:p.arrayValue,rt=Nt(((y=H?.values)===null||y===void 0?void 0:y.length)||0,((T=Z?.values)===null||T===void 0?void 0:T.length)||0);return rt!==0?rt:Rv(H,Z)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===yc.mapValue&&f===yc.mapValue)return 0;if(c===yc.mapValue)return 1;if(f===yc.mapValue)return-1;const g=c.fields||{},p=Object.keys(g),y=f.fields||{},T=Object.keys(y);p.sort(),T.sort();for(let S=0;S<p.length&&S<T.length;++S){const C=Xd(p[S],T[S]);if(C!==0)return C;const H=Ka(g[p[S]],y[T[S]]);if(H!==0)return H}return Nt(p.length,T.length)}(r.mapValue,t.mapValue);default:throw yt(23264,{Pe:n})}}function wv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Nt(r,t);const n=Hr(r),s=Hr(t),o=Nt(n.seconds,s.seconds);return o!==0?o:Nt(n.nanos,s.nanos)}function Rv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=Ka(n[o],s[o]);if(c)return c}return Nt(n.length,s.length)}function Ya(r){return $d(r)}function $d(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Hr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return jr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return dt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=$d(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const f of s)c?c=!1:o+=",",o+=`${f}:${$d(n.fields[f])}`;return o+"}"}(r.mapValue):yt(61005,{value:r})}function Rc(r){switch(Fr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=lh(r);return t?16+Rc(t):16;case 5:return 2*r.stringValue.length;case 6:return jr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,c)=>o+Rc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Bs(s.fields,(c,f)=>{o+=c.length+Rc(f)}),o}(r.mapValue);default:throw yt(13486,{value:r})}}function Iv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Zd(r){return!!r&&"integerValue"in r}function Vm(r){return!!r&&"arrayValue"in r}function Cv(r){return!!r&&"nullValue"in r}function Dv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ic(r){return!!r&&"mapValue"in r}function A2(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Z0])===null||n===void 0?void 0:n.stringValue)===W0}function Sl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Bs(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Sl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Sl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function b2(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===T2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t){this.value=t}static empty(){return new Vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ic(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sl(n)}setAll(t){let n=qe.emptyPath(),s={},o=[];t.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=g.popLast()}f?s[g.lastSegment()]=Sl(f):o.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(t){const n=this.field(t.popLast());Ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return _i(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Ic(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Bs(n,(o,c)=>t[o]=c);for(const o of s)delete t[o]}clone(){return new Vn(Sl(this.value))}}function J0(r){const t=[];return Bs(r.fields,(n,s)=>{const o=new qe([n]);if(Ic(s)){const c=J0(s.mapValue).fields;if(c.length===0)t.push(o);else for(const f of c)t.push(o.child(f))}else t.push(o)}),new jn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,n,s,o,c,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=f,this.documentState=g}static newInvalidDocument(t){return new Xe(t,0,At.min(),At.min(),At.min(),Vn.empty(),0)}static newFoundDocument(t,n,s,o){return new Xe(t,1,n,At.min(),s,o,0)}static newNoDocument(t,n){return new Xe(t,2,n,At.min(),At.min(),Vn.empty(),0)}static newUnknownDocument(t,n){return new Xe(t,3,n,At.min(),At.min(),Vn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Xe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,n){this.position=t,this.inclusive=n}}function Nv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const c=t[o],f=r.position[o];if(c.field.isKeyField()?s=dt.comparator(dt.fromName(f.referenceValue),n.key):s=Ka(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ov(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!_i(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,n="asc"){this.field=t,this.dir=n}}function S2(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{}class ve extends tT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new R2(t,n,s):n==="array-contains"?new D2(t,s):n==="in"?new N2(t,s):n==="not-in"?new O2(t,s):n==="array-contains-any"?new M2(t,s):new ve(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new I2(t,s):new C2(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ka(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Ka(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return yt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends tT{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new Kn(t,n)}matches(t){return eT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function eT(r){return r.op==="and"}function nT(r){return w2(r)&&eT(r)}function w2(r){for(const t of r.filters)if(t instanceof Kn)return!1;return!0}function Wd(r){if(r instanceof ve)return r.field.canonicalString()+r.op.toString()+Ya(r.value);if(nT(r))return r.filters.map(t=>Wd(t)).join(",");{const t=r.filters.map(n=>Wd(n)).join(",");return`${r.op}(${t})`}}function iT(r,t){return r instanceof ve?function(s,o){return o instanceof ve&&s.op===o.op&&s.field.isEqual(o.field)&&_i(s.value,o.value)}(r,t):r instanceof Kn?function(s,o){return o instanceof Kn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((c,f,g)=>c&&iT(f,o.filters[g]),!0):!1}(r,t):void yt(19439)}function rT(r){return r instanceof ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Ya(n.value)}`}(r):r instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map(rT).join(" ,")+"}"}(r):"Filter"}class R2 extends ve{constructor(t,n,s){super(t,n,s),this.key=dt.fromName(s.referenceValue)}matches(t){const n=dt.comparator(t.key,this.key);return this.matchesComparison(n)}}class I2 extends ve{constructor(t,n){super(t,"in",n),this.keys=sT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class C2 extends ve{constructor(t,n){super(t,"not-in",n),this.keys=sT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function sT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>dt.fromName(s.referenceValue))}class D2 extends ve{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Vm(n)&&Vl(n.arrayValue,this.value)}}class N2 extends ve{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Vl(this.value.arrayValue,n)}}class O2 extends ve{constructor(t,n){super(t,"not-in",n)}matches(t){if(Vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vl(this.value.arrayValue,n)}}class M2 extends ve{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Vm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(t,n=null,s=[],o=[],c=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=f,this.endAt=g,this.Ie=null}}function Mv(r,t=null,n=[],s=[],o=null,c=null,f=null){return new V2(r,t,n,s,o,c,f)}function xm(r){const t=bt(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Wd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),oh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ya(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ya(s)).join(",")),t.Ie=n}return t.Ie}function Pm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!S2(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!iT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ov(r.startAt,t.startAt)&&Ov(r.endAt,t.endAt)}function Jd(r){return dt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,n=null,s=[],o=[],c=null,f="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=f,this.startAt=g,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function x2(r,t,n,s,o,c,f,g){return new Bl(r,t,n,s,o,c,f,g)}function km(r){return new Bl(r)}function Vv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function aT(r){return r.collectionGroup!==null}function wl(r){const t=bt(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const c of t.explicitOrderBy)t.Ee.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new Ie(qe.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(g=g.add(y.field))})}),g})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.Ee.push(new Gc(c,s))}),n.has(qe.keyField().canonicalString())||t.Ee.push(new Gc(qe.keyField(),s))}return t.Ee}function mi(r){const t=bt(r);return t.de||(t.de=P2(t,wl(r))),t.de}function P2(r,t){if(r.limitType==="F")return Mv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const c=o.dir==="desc"?"asc":"desc";return new Gc(o.field,c)});const n=r.endAt?new Fc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Fc(r.startAt.position,r.startAt.inclusive):null;return Mv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function tm(r,t){const n=r.filters.concat([t]);return new Bl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function em(r,t,n){return new Bl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function uh(r,t){return Pm(mi(r),mi(t))&&r.limitType===t.limitType}function oT(r){return`${xm(mi(r))}|lt:${r.limitType}`}function Ua(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>rT(o)).join(", ")}]`),oh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Ya(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Ya(o)).join(",")),`Target(${s})`}(mi(r))}; limitType=${r.limitType})`}function ch(r,t){return t.isFoundDocument()&&function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):dt.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,o){for(const c of wl(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,g,p){const y=Nv(f,g,p);return f.inclusive?y<=0:y<0}(s.startAt,wl(s),o)||s.endAt&&!function(f,g,p){const y=Nv(f,g,p);return f.inclusive?y>=0:y>0}(s.endAt,wl(s),o))}(r,t)}function k2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function lT(r){return(t,n)=>{let s=!1;for(const o of wl(r)){const c=U2(o,t,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function U2(r,t,n){const s=r.field.isKeyField()?dt.comparator(t.key,n.key):function(c,f,g){const p=f.data.field(c),y=g.data.field(c);return p!==null&&y!==null?Ka(p,y):yt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return yt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],t))return void(o[c]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Bs(this.inner,(n,s)=>{for(const[o,c]of s)t(o,c)})}isEmpty(){return G0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=new se(dt.comparator);function Ji(){return L2}const uT=new se(dt.comparator);function yl(...r){let t=uT;for(const n of r)t=t.insert(n.key,n);return t}function cT(r){let t=uT;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Os(){return Rl()}function hT(){return Rl()}function Rl(){return new qs(r=>r.toString(),(r,t)=>r.isEqual(t))}const z2=new se(dt.comparator),B2=new Ie(dt.comparator);function Pt(...r){let t=B2;for(const n of r)t=t.add(n);return t}const q2=new Ie(Nt);function H2(){return q2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qc(t)?"-0":t}}function fT(r){return{integerValue:""+r}}function j2(r,t){return p2(t)?fT(t):Um(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this._=void 0}}function F2(r,t,n){return r instanceof Qc?function(o,c){const f={fields:{[Y0]:{stringValue:K0},[$0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&Mm(c)&&(c=lh(c)),c&&(f.fields[X0]=c),{mapValue:f}}(n,t):r instanceof xl?mT(r,t):r instanceof Pl?gT(r,t):function(o,c){const f=dT(o,c),g=xv(f)+xv(o.Re);return Zd(f)&&Zd(o.Re)?fT(g):Um(o.serializer,g)}(r,t)}function G2(r,t,n){return r instanceof xl?mT(r,t):r instanceof Pl?gT(r,t):n}function dT(r,t){return r instanceof Kc?function(s){return Zd(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Qc extends hh{}class xl extends hh{constructor(t){super(),this.elements=t}}function mT(r,t){const n=pT(t);for(const s of r.elements)n.some(o=>_i(o,s))||n.push(s);return{arrayValue:{values:n}}}class Pl extends hh{constructor(t){super(),this.elements=t}}function gT(r,t){let n=pT(t);for(const s of r.elements)n=n.filter(o=>!_i(o,s));return{arrayValue:{values:n}}}class Kc extends hh{constructor(t,n){super(),this.serializer=t,this.Re=n}}function xv(r){return fe(r.integerValue||r.doubleValue)}function pT(r){return Vm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Q2(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof xl&&o instanceof xl||s instanceof Pl&&o instanceof Pl?Qa(s.elements,o.elements,_i):s instanceof Kc&&o instanceof Kc?_i(s.Re,o.Re):s instanceof Qc&&o instanceof Qc}(r.transform,t.transform)}class K2{constructor(t,n){this.version=t,this.transformResults=n}}class Gn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Gn}static exists(t){return new Gn(void 0,t)}static updateTime(t){return new Gn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class fh{}function yT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Lm(r.key,Gn.none()):new ql(r.key,r.data,Gn.none());{const n=r.data,s=Vn.empty();let o=new Ie(qe.comparator);for(let c of t.fields)if(!o.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),o=o.add(c)}return new Hs(r.key,s,new jn(o.toArray()),Gn.none())}}function Y2(r,t,n){r instanceof ql?function(o,c,f){const g=o.value.clone(),p=kv(o.fieldTransforms,c,f.transformResults);g.setAll(p),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):r instanceof Hs?function(o,c,f){if(!Cc(o.precondition,c))return void c.convertToUnknownDocument(f.version);const g=kv(o.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(_T(o)),p.setAll(g),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Il(r,t,n,s){return r instanceof ql?function(c,f,g,p){if(!Cc(c.precondition,f))return g;const y=c.value.clone(),T=Uv(c.fieldTransforms,p,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Hs?function(c,f,g,p){if(!Cc(c.precondition,f))return g;const y=Uv(c.fieldTransforms,p,f),T=f.data;return T.setAll(_T(c)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(S=>S.field))}(r,t,n,s):function(c,f,g){return Cc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(r,t,n)}function X2(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),c=dT(s.transform,o||null);c!=null&&(n===null&&(n=Vn.empty()),n.set(s.field,c))}return n||null}function Pv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Qa(s,o,(c,f)=>Q2(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ql extends fh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Hs extends fh{constructor(t,n,s,o,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function _T(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function kv(r,t,n){const s=new Map;Ft(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const c=r[o],f=c.transform,g=t.data.field(c.field);s.set(c.field,G2(f,g,n[o]))}return s}function Uv(r,t,n){const s=new Map;for(const o of r){const c=o.transform,f=n.data.field(o.field);s.set(o.field,F2(c,f,t))}return s}class Lm extends fh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $2 extends fh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(t.key)&&Y2(c,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Il(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Il(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=hT();return this.mutations.forEach(o=>{const c=t.get(o.key),f=c.overlayedDocument;let g=this.applyToLocalView(f,c.mutatedFields);g=n.has(o.key)?null:g;const p=yT(f,g);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pt())}isEqual(t){return this.batchId===t.batchId&&Qa(this.mutations,t.mutations,(n,s)=>Pv(n,s))&&Qa(this.baseMutations,t.baseMutations,(n,s)=>Pv(n,s))}}class zm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ft(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return z2}();const c=t.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,s[f].version);return new zm(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,Bt;function tC(r){switch(r){case Y.OK:return yt(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return yt(15467,{code:r})}}function vT(r){if(r===void 0)return Wi("GRPC error has no .code"),Y.UNKNOWN;switch(r){case _e.OK:return Y.OK;case _e.CANCELLED:return Y.CANCELLED;case _e.UNKNOWN:return Y.UNKNOWN;case _e.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case _e.INTERNAL:return Y.INTERNAL;case _e.UNAVAILABLE:return Y.UNAVAILABLE;case _e.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case _e.NOT_FOUND:return Y.NOT_FOUND;case _e.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case _e.ABORTED:return Y.ABORTED;case _e.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case _e.DATA_LOSS:return Y.DATA_LOSS;default:return yt(39323,{code:r})}}(Bt=_e||(_e={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new Lr([4294967295,4294967295],0);function Lv(r){const t=H0().encode(r),n=new x0;return n.update(t),new Uint8Array(n.digest())}function zv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Lr([n,s],0),new Lr([o,c],0)]}class Bm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new _l(`Invalid padding: ${n}`);if(s<0)throw new _l(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new _l(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new _l(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Lr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(Lr.fromNumber(s)));return o.compare(eC)===1&&(o=new Lr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=Lv(t),[s,o]=zv(n);for(let c=0;c<this.hashCount;c++){const f=this.we(s,o,c);if(!this.be(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new Bm(c,o,n);return s.forEach(g=>f.insert(g)),f}insert(t){if(this.pe===0)return;const n=Lv(t),[s,o]=zv(n);for(let c=0;c<this.hashCount;c++){const f=this.we(s,o,c);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class _l extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,n,s,o,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Hl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new dh(At.min(),o,new se(Nt),Ji(),Pt())}}class Hl{constructor(t,n,s,o,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Hl(s,n,Pt(),Pt(),Pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class ET{constructor(t,n){this.targetId=t,this.Ce=n}}class TT{constructor(t,n,s=He.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Bv{constructor(){this.Fe=0,this.Me=qv(),this.xe=He.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Pt(),n=Pt(),s=Pt();return this.Me.forEach((o,c)=>{switch(c){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:yt(38017,{changeType:c})}}),new Hl(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=qv()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ft(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class nC{constructor(t){this.ze=t,this.je=new Map,this.He=Ji(),this.Je=_c(),this.Ye=_c(),this.Ze=new se(Nt)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:yt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const c=o.target;if(Jd(c))if(s===0){const f=new dt(c.path);this.tt(n,f,Xe.newNoDocument(f,At.min()))}else Ft(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const g=this.ct(t),p=g?this.lt(g,t,f):1;if(p!==0){this.st(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let f,g;try{f=jr(s).toUint8Array()}catch(p){if(p instanceof Q0)return Ga("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new Bm(f,o,c)}catch(p){return Ga(p instanceof _l?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.pe===0?null:g}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(c=>{const f=this.ze.Pt(),g=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.tt(n,c,null),o++)}),o}It(t){const n=new Map;this.je.forEach((c,f)=>{const g=this._t(f);if(g){if(c.current&&Jd(g.target)){const p=new dt(g.target.path);this.Et(p).has(f)||this.dt(f,p)||this.tt(f,p,Xe.newNoDocument(p,t))}c.Le&&(n.set(f,c.qe()),c.Qe())}});let s=Pt();this.Ye.forEach((c,f)=>{let g=!0;f.forEachWhile(p=>{const y=this._t(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(s=s.add(c))}),this.He.forEach((c,f)=>f.setReadTime(t));const o=new dh(t,n,this.Ze,this.He,s);return this.He=Ji(),this.Je=_c(),this.Ye=_c(),this.Ze=new se(Nt),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new Bv,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new Ie(Nt),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Ie(Nt),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||st("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Bv),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function _c(){return new se(dt.comparator)}function qv(){return new se(dt.comparator)}const iC={asc:"ASCENDING",desc:"DESCENDING"},rC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sC={and:"AND",or:"OR"};class aC{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function nm(r,t){return r.useProto3Json||oh(t)?t:{value:t}}function Yc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function AT(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function oC(r,t){return Yc(r,t.toTimestamp())}function gi(r){return Ft(!!r,49232),At.fromTimestamp(function(n){const s=Hr(n);return new Re(s.seconds,s.nanos)}(r))}function qm(r,t){return im(r,t).canonicalString()}function im(r,t){const n=function(o){return new te(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function bT(r){const t=te.fromString(r);return Ft(CT(t),10190,{key:t.toString()}),t}function rm(r,t){return qm(r.databaseId,t.path)}function Pd(r,t){const n=bT(t);if(n.get(1)!==r.databaseId.projectId)throw new at(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new at(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new dt(wT(n))}function ST(r,t){return qm(r.databaseId,t)}function lC(r){const t=bT(r);return t.length===4?te.emptyPath():wT(t)}function sm(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function wT(r){return Ft(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Hv(r,t,n){return{name:rm(r,t),fields:n.value.mapValue.fields}}function uC(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:yt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],c=function(y,T){return y.useProto3Json?(Ft(T===void 0||typeof T=="string",58123),He.fromBase64String(T||"")):(Ft(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),He.fromUint8Array(T||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&function(y){const T=y.code===void 0?Y.UNKNOWN:vT(y.code);return new at(T,y.message||"")}(f);n=new TT(s,o,c,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Pd(r,s.document.name),c=gi(s.document.updateTime),f=s.document.createTime?gi(s.document.createTime):At.min(),g=new Vn({mapValue:{fields:s.document.fields}}),p=Xe.newFoundDocument(o,c,f,g),y=s.targetIds||[],T=s.removedTargetIds||[];n=new Dc(y,T,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Pd(r,s.document),c=s.readTime?gi(s.readTime):At.min(),f=Xe.newNoDocument(o,c),g=s.removedTargetIds||[];n=new Dc([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Pd(r,s.document),c=s.removedTargetIds||[];n=new Dc([],c,o,null)}else{if(!("filter"in t))return yt(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,f=new J2(o,c),g=s.targetId;n=new ET(g,f)}}return n}function cC(r,t){let n;if(t instanceof ql)n={update:Hv(r,t.key,t.value)};else if(t instanceof Lm)n={delete:rm(r,t.key)};else if(t instanceof Hs)n={update:Hv(r,t.key,t.data),updateMask:vC(t.fieldMask)};else{if(!(t instanceof $2))return yt(16599,{ft:t.type});n={verify:rm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const g=f.transform;if(g instanceof Qc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof xl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Pl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Kc)return{fieldPath:f.field.canonicalString(),increment:g.Re};throw yt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,c){return c.updateTime!==void 0?{updateTime:oC(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:yt(27497)}(r,t.precondition)),n}function hC(r,t){return r&&r.length>0?(Ft(t!==void 0,14353),r.map(n=>function(o,c){let f=o.updateTime?gi(o.updateTime):gi(c);return f.isEqual(At.min())&&(f=gi(c)),new K2(f,o.transformResults||[])}(n,t))):[]}function fC(r,t){return{documents:[ST(r,t.path)]}}function dC(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=ST(r,o);const c=function(y){if(y.length!==0)return IT(Kn.create(y,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(T=>function(C){return{field:La(C.field),direction:pC(C.dir)}}(T))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=nm(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{gt:n,parent:o}}function mC(r){let t=lC(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ft(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let c=[];n.where&&(c=function(S){const C=RT(S);return C instanceof Kn&&nT(C)?C.getFilters():[C]}(n.where));let f=[];n.orderBy&&(f=function(S){return S.map(C=>function(Z){return new Gc(za(Z.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Z.direction))}(C))}(n.orderBy));let g=null;n.limit&&(g=function(S){let C;return C=typeof S=="object"?S.value:S,oh(C)?null:C}(n.limit));let p=null;n.startAt&&(p=function(S){const C=!!S.before,H=S.values||[];return new Fc(H,C)}(n.startAt));let y=null;return n.endAt&&(y=function(S){const C=!S.before,H=S.values||[];return new Fc(H,C)}(n.endAt)),x2(t,o,f,c,g,"F",p,y)}function gC(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return yt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function RT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=za(n.unaryFilter.field);return ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=za(n.unaryFilter.field);return ve.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=za(n.unaryFilter.field);return ve.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=za(n.unaryFilter.field);return ve.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return yt(61313);default:return yt(60726)}}(r):r.fieldFilter!==void 0?function(n){return ve.create(za(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return yt(58110);default:return yt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(s=>RT(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return yt(1026)}}(n.compositeFilter.op))}(r):yt(30097,{filter:r})}function pC(r){return iC[r]}function yC(r){return rC[r]}function _C(r){return sC[r]}function La(r){return{fieldPath:r.canonicalString()}}function za(r){return qe.fromServerFormat(r.fieldPath)}function IT(r){return r instanceof ve?function(n){if(n.op==="=="){if(Dv(n.value))return{unaryFilter:{field:La(n.field),op:"IS_NAN"}};if(Cv(n.value))return{unaryFilter:{field:La(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dv(n.value))return{unaryFilter:{field:La(n.field),op:"IS_NOT_NAN"}};if(Cv(n.value))return{unaryFilter:{field:La(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:La(n.field),op:yC(n.op),value:n.value}}}(r):r instanceof Kn?function(n){const s=n.getFilters().map(o=>IT(o));return s.length===1?s[0]:{compositeFilter:{op:_C(n.op),filters:s}}}(r):yt(54877,{filter:r})}function vC(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function CT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n,s,o,c=At.min(),f=At.min(),g=He.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new Pr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(t){this.wt=t}}function TC(r){const t=mC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?em(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.Cn=new bC}addToCollectionParentIndex(t,n){return this.Cn.add(n),K.resolve()}getCollectionParents(t,n){return K.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return K.resolve()}deleteFieldIndex(t,n){return K.resolve()}deleteAllFieldIndexes(t){return K.resolve()}createTargetIndexes(t,n){return K.resolve()}getDocumentsMatchingTarget(t,n){return K.resolve(null)}getIndexType(t,n){return K.resolve(0)}getFieldIndexes(t,n){return K.resolve([])}getNextCollectionGroupToUpdate(t){return K.resolve(null)}getMinOffset(t,n){return K.resolve(qr.min())}getMinOffsetFromCollectionGroup(t,n){return K.resolve(qr.min())}updateCollectionGroup(t,n,s){return K.resolve()}updateIndexEntries(t,n){return K.resolve()}}class bC{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ie(te.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ie(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DT=41943040;class on{static withCacheSize(t){return new on(t,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(DT,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Xa(0)}static lr(){return new Xa(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="LruGarbageCollector",SC=1048576;function Gv([r,t],[n,s]){const o=Nt(r,n);return o===0?Nt(t,s):o}class wC{constructor(t){this.Er=t,this.buffer=new Ie(Gv),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Gv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RC{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){st(Fv,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){io(n)?st(Fv,"Ignoring IndexedDB error during garbage collection: ",n):await no(n)}await this.mr(3e5)})}}class IC{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return K.resolve(ah.le);const s=new wC(n);return this.gr.forEachTarget(t,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(t,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.gr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(st("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(jv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(st("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jv):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let s,o,c,f,g,p,y;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(st("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(t,o))).next(S=>(s=S,g=Date.now(),this.removeTargets(t,s,n))).next(S=>(c=S,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(S=>(y=Date.now(),ka()<=xt.DEBUG&&st("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${c} targets in `+(p-g)+`ms
	Removed ${S} documents in `+(y-p)+`ms
Total Duration: ${y-T}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:S})))}}function CC(r,t){return new IC(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.changes=new qs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Xe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?K.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Il(s.mutation,o,jn.empty(),Re.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Pt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Pt()){const o=Os();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(c=>{let f=yl();return c.forEach((g,p)=>{f=f.insert(g,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Os();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Pt()))}populateOverlays(t,n,s){const o=[];return s.forEach(c=>{n.has(c)||o.push(c)}),this.documentOverlayCache.getOverlays(t,o).next(c=>{c.forEach((f,g)=>{n.set(f,g)})})}computeViews(t,n,s,o){let c=Ji();const f=Rl(),g=function(){return Rl()}();return n.forEach((p,y)=>{const T=s.get(y.key);o.has(y.key)&&(T===void 0||T.mutation instanceof Hs)?c=c.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),Il(T.mutation,y,T.mutation.getFieldMask(),Re.now())):f.set(y.key,jn.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((y,T)=>f.set(y,T)),n.forEach((y,T)=>{var S;return g.set(y,new NC(T,(S=f.get(y))!==null&&S!==void 0?S:null))}),g))}recalculateAndSaveOverlays(t,n){const s=Rl();let o=new se((f,g)=>f-g),c=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const g of f)g.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let T=s.get(p)||jn.empty();T=g.applyToLocalView(y,T),s.set(p,T);const S=(o.get(g.batchId)||Pt()).add(p);o=o.insert(g.batchId,S)})}).next(()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),y=p.key,T=p.value,S=hT();T.forEach(C=>{if(!c.has(C)){const H=yT(n.get(C),s.get(C));H!==null&&S.set(C,H),c=c.add(C)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,S))}return K.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return dt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):aT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-c.size):K.resolve(Os());let g=Nl,p=c;return f.next(y=>K.forEach(y,(T,S)=>(g<S.largestBatchId&&(g=S.largestBatchId),c.get(T)?K.resolve():this.remoteDocumentCache.getEntry(t,T).next(C=>{p=p.insert(T,C)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,p,y,Pt())).next(T=>({batchId:g,changes:cT(T)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new dt(n)).next(s=>{let o=yl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const c=n.collectionGroup;let f=yl();return this.indexManager.getCollectionParents(t,c).next(g=>K.forEach(g,p=>{const y=function(S,C){return new Bl(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(T=>{T.forEach((S,C)=>{f=f.insert(S,C)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,o))).next(f=>{c.forEach((p,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,Xe.newInvalidDocument(T)))});let g=yl();return f.forEach((p,y)=>{const T=c.get(p);T!==void 0&&Il(T.mutation,y,jn.empty(),Re.now()),ch(n,y)&&(g=g.insert(p,y))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return K.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:gi(o.createTime)}}(n)),K.resolve()}getNamedQuery(t,n){return K.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(o){return{name:o.name,query:TC(o.bundledQuery),readTime:gi(o.readTime)}}(n)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.overlays=new se(dt.comparator),this.Qr=new Map}getOverlay(t,n){return K.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Os();return K.forEach(n,o=>this.getOverlay(t,o).next(c=>{c!==null&&s.set(o,c)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,c)=>{this.St(t,n,c)}),K.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(c=>this.overlays=this.overlays.remove(c)),this.Qr.delete(s)),K.resolve()}getOverlaysForCollection(t,n,s){const o=Os(),c=n.length+1,f=new dt(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const p=g.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let c=new se((y,T)=>y-T);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=c.get(y.largestBatchId);T===null&&(T=Os(),c=c.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const g=Os(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,T)=>g.set(y,T)),!(g.size()>=o)););return K.resolve(g)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new W2(n,s));let c=this.Qr.get(n);c===void 0&&(c=Pt(),this.Qr.set(n,c)),this.Qr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(t){return K.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.$r=new Ie(xe.Ur),this.Kr=new Ie(xe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const s=new xe(t,n);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.zr(new xe(t,n))}jr(t,n){t.forEach(s=>this.removeReference(s,n))}Hr(t){const n=new dt(new te([])),s=new xe(n,t),o=new xe(n,t+1),c=[];return this.Kr.forEachInRange([s,o],f=>{this.zr(f),c.push(f.key)}),c}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new dt(new te([])),s=new xe(n,t),o=new xe(n,t+1);let c=Pt();return this.Kr.forEachInRange([s,o],f=>{c=c.add(f.key)}),c}containsKey(t){const n=new xe(t,0),s=this.$r.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class xe{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return dt.comparator(t.key,n.key)||Nt(t.Zr,n.Zr)}static Wr(t,n){return Nt(t.Zr,n.Zr)||dt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Ie(xe.Ur)}checkEmpty(t){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const c=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new Z2(c,n,s,o);this.mutationQueue.push(f);for(const g of o)this.Xr=this.Xr.add(new xe(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return K.resolve(f)}lookupMutationBatch(t,n){return K.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ti(s),c=o<0?0:o;return K.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Om:this.nr-1)}getAllMutationBatches(t){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new xe(n,0),o=new xe(n,Number.POSITIVE_INFINITY),c=[];return this.Xr.forEachInRange([s,o],f=>{const g=this.ei(f.Zr);c.push(g)}),K.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ie(Nt);return n.forEach(o=>{const c=new xe(o,0),f=new xe(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([c,f],g=>{s=s.add(g.Zr)})}),K.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let c=s;dt.isDocumentKey(c)||(c=c.child(""));const f=new xe(new dt(c),0);let g=new Ie(Nt);return this.Xr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(g=g.add(p.Zr)),!0)},f),K.resolve(this.ni(g))}ni(t){const n=[];return t.forEach(s=>{const o=this.ei(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Ft(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return K.forEach(n.mutations,o=>{const c=new xe(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Xr=s})}sr(t){}containsKey(t,n){const s=new xe(n,0),o=this.Xr.firstAfterOrEqual(s);return K.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,K.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(t){this.ii=t,this.docs=function(){return new se(dt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,f=this.ii(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return K.resolve(s?s.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(t,n){let s=Ji();return n.forEach(o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():Xe.newInvalidDocument(o))}),K.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let c=Ji();const f=n.path,g=new dt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:y,value:{document:T}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||f2(h2(T),s)<=0||(o.has(T.key)||ch(n,T))&&(c=c.insert(T.key,T.mutableCopy()))}return K.resolve(c)}getAllFromCollectionGroup(t,n,s,o){yt(9500)}si(t,n){return K.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new UC(this)}getSize(t){return K.resolve(this.size)}}class UC extends DC{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Br.addEntry(t,o)):this.Br.removeEntry(s)}),K.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(t){this.persistence=t,this.oi=new qs(n=>xm(n),Pm),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this._i=0,this.ai=new Hm,this.targetCount=0,this.ui=Xa.cr()}forEachTarget(t,n){return this.oi.forEach((s,o)=>n(o)),K.resolve()}getLastRemoteSnapshotVersion(t){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return K.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this._i&&(this._i=n),K.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new Xa(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,K.resolve()}updateTargetData(t,n){return this.Tr(n),K.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(t,n,s){let o=0;const c=[];return this.oi.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.oi.delete(f),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)}),K.waitFor(c).next(()=>o)}getTargetCount(t){return K.resolve(this.targetCount)}getTargetData(t,n){const s=this.oi.get(n)||null;return K.resolve(s)}addMatchingKeys(t,n,s){return this.ai.Gr(n,s),K.resolve()}removeMatchingKeys(t,n,s){this.ai.jr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach(f=>{c.push(o.markPotentiallyOrphaned(t,f))}),K.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),K.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ai.Yr(n);return K.resolve(s)}containsKey(t,n){return K.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t,n){this.ci={},this.overlays={},this.li=new ah(0),this.hi=!1,this.hi=!0,this.Pi=new xC,this.referenceDelegate=t(this),this.Ti=new LC(this),this.indexManager=new AC,this.remoteDocumentCache=function(o){return new kC(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new EC(n),this.Ei=new MC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new VC,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ci[t.toKey()];return s||(s=new PC(n,this.referenceDelegate),this.ci[t.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,s){st("MemoryPersistence","Starting transaction:",t);const o=new zC(this.li.next());return this.referenceDelegate.di(),s(o).next(c=>this.referenceDelegate.Ai(o).next(()=>c)).toPromise().then(c=>(o.raiseOnCommittedEvent(),c))}Ri(t,n){return K.or(Object.values(this.ci).map(s=>()=>s.containsKey(t,n)))}}class zC extends m2{constructor(t){super(),this.currentSequenceNumber=t}}class jm{constructor(t){this.persistence=t,this.Vi=new Hm,this.mi=null}static fi(t){return new jm(t)}get gi(){if(this.mi)return this.mi;throw yt(60996)}addReference(t,n,s){return this.Vi.addReference(s,n),this.gi.delete(s.toString()),K.resolve()}removeReference(t,n,s){return this.Vi.removeReference(s,n),this.gi.add(s.toString()),K.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),K.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(c=>this.gi.add(c.toString()))}).next(()=>s.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.gi,s=>{const o=dt.fromPath(s);return this.pi(t,o).next(c=>{c||n.removeEntry(o,At.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(s=>{s?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return K.or([()=>K.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class Xc{constructor(t,n){this.persistence=t,this.yi=new qs(s=>y2(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=CC(this,n)}static fi(t,n){return new Xc(t,n)}di(){}Ai(t){return K.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}br(t){let n=0;return this.yr(t,s=>{n++}).next(()=>n)}yr(t,n){return K.forEach(this.yi,(s,o)=>this.Dr(t,s,o).next(c=>c?K.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.si(t,f=>this.Dr(t,f,n).next(g=>{g||(s++,c.removeEntry(f,At.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),K.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),K.resolve()}removeReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),K.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),K.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Rc(t.data.value)),n}Dr(t,n,s){return K.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.yi.get(n);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.ds=s,this.As=o}static Rs(t,n){let s=Pt(),o=Pt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Fm(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return mS()?8:g2($e())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,s,o){const c={result:null};return this.ws(t,n).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.bs(t,n,o,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new BC;return this.Ss(t,n,f).next(g=>{if(c.result=g,this.fs)return this.Ds(t,n,f,g.size)})}).next(()=>c.result)}Ds(t,n,s,o){return s.documentReadCount<this.gs?(ka()<=xt.DEBUG&&st("QueryEngine","SDK will not create cache indexes for query:",Ua(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),K.resolve()):(ka()<=xt.DEBUG&&st("QueryEngine","Query:",Ua(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(ka()<=xt.DEBUG&&st("QueryEngine","The SDK decides to create cache indexes for query:",Ua(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,mi(n))):K.resolve())}ws(t,n){if(Vv(n))return K.resolve(null);let s=mi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=em(n,null,"F"),s=mi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Pt(...c);return this.ys.getDocuments(t,f).next(g=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.vs(n,g);return this.Cs(n,y,f,p.readTime)?this.ws(t,em(n,null,"F")):this.Fs(t,y,n,p)}))})))}bs(t,n,s,o){return Vv(n)||o.isEqual(At.min())?K.resolve(null):this.ys.getDocuments(t,s).next(c=>{const f=this.vs(n,c);return this.Cs(n,f,s,o)?K.resolve(null):(ka()<=xt.DEBUG&&st("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ua(n)),this.Fs(t,f,n,c2(o,Nl)).next(g=>g))})}vs(t,n){let s=new Ie(lT(t));return n.forEach((o,c)=>{ch(t,c)&&(s=s.add(c))}),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(t,n,s){return ka()<=xt.DEBUG&&st("QueryEngine","Using full collection scan to execute query:",Ua(n)),this.ys.getDocumentsMatchingQuery(t,n,qr.min(),s)}Fs(t,n,s,o){return this.ys.getDocumentsMatchingQuery(t,s,o).next(c=>(n.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="LocalStore",HC=3e8;class jC{constructor(t,n,s,o){this.persistence=t,this.Ms=n,this.serializer=o,this.xs=new se(Nt),this.Os=new qs(c=>xm(c),Pm),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(s)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new OC(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function FC(r,t,n,s){return new jC(r,t,n,s)}async function OT(r,t){const n=bt(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(c=>(o=c,n.Ls(t),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],g=[];let p=Pt();for(const y of o){f.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}for(const y of c){g.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}return n.localDocuments.getDocuments(s,p).next(y=>({ks:y,removedBatchIds:f,addedBatchIds:g}))})})}function GC(r,t){const n=bt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),c=n.Bs.newChangeBuffer({trackRemovals:!0});return function(g,p,y,T){const S=y.batch,C=S.keys();let H=K.resolve();return C.forEach(Z=>{H=H.next(()=>T.getEntry(p,Z)).next(rt=>{const W=y.docVersions.get(Z);Ft(W!==null,48541),rt.version.compareTo(W)<0&&(S.applyToRemoteDocument(rt,y),rt.isValidDocument()&&(rt.setReadTime(y.commitVersion),T.addEntry(rt)))})}),H.next(()=>g.mutationQueue.removeMutationBatch(p,S))}(n,s,t,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let p=Pt();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(p=p.add(g.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function MT(r){const t=bt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function QC(r,t){const n=bt(r),s=t.snapshotVersion;let o=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=n.Bs.newChangeBuffer({trackRemovals:!0});o=n.xs;const g=[];t.targetChanges.forEach((T,S)=>{const C=o.get(S);if(!C)return;g.push(n.Ti.removeMatchingKeys(c,T.removedDocuments,S).next(()=>n.Ti.addMatchingKeys(c,T.addedDocuments,S)));let H=C.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(S)!==null?H=H.withResumeToken(He.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):T.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(T.resumeToken,s)),o=o.insert(S,H),function(rt,W,St){return rt.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-rt.snapshotVersion.toMicroseconds()>=HC?!0:St.addedDocuments.size+St.modifiedDocuments.size+St.removedDocuments.size>0}(C,H,T)&&g.push(n.Ti.updateTargetData(c,H))});let p=Ji(),y=Pt();if(t.documentUpdates.forEach(T=>{t.resolvedLimboDocuments.has(T)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(c,T))}),g.push(KC(c,f,t.documentUpdates).next(T=>{p=T.qs,y=T.Qs})),!s.isEqual(At.min())){const T=n.Ti.getLastRemoteSnapshotVersion(c).next(S=>n.Ti.setTargetsMetadata(c,c.currentSequenceNumber,s));g.push(T)}return K.waitFor(g).next(()=>f.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,p,y)).next(()=>p)}).then(c=>(n.xs=o,c))}function KC(r,t,n){let s=Pt(),o=Pt();return n.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=Ji();return n.forEach((g,p)=>{const y=c.get(g);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(g)),p.isNoDocument()&&p.version.isEqual(At.min())?(t.removeEntry(g,p.readTime),f=f.insert(g,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(g,p)):st(Gm,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",p.version)}),{qs:f,Qs:o}})}function YC(r,t){const n=bt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Om),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function XC(r,t){const n=bt(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Ti.getTargetData(s,t).next(c=>c?(o=c,K.resolve(o)):n.Ti.allocateTargetId(s).next(f=>(o=new Pr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.xs=n.xs.insert(s.targetId,s),n.Os.set(t,s.targetId)),s})}async function am(r,t,n){const s=bt(r),o=s.xs.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!io(f))throw f;st(Gm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.xs=s.xs.remove(t),s.Os.delete(o.target)}function Qv(r,t,n){const s=bt(r);let o=At.min(),c=Pt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,T){const S=bt(p),C=S.Os.get(T);return C!==void 0?K.resolve(S.xs.get(C)):S.Ti.getTargetData(y,T)}(s,f,mi(t)).next(g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(f,g.targetId).next(p=>{c=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(f,t,n?o:At.min(),n?c:Pt())).next(g=>($C(s,k2(t),g),{documents:g,$s:c})))}function $C(r,t,n){let s=r.Ns.get(t)||At.min();n.forEach((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Ns.set(t,s)}class Kv{constructor(){this.activeTargetIds=H2()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ZC{constructor(){this.xo=new Kv,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,s){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Kv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="ConnectivityMonitor";class Xv{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){st(Yv,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){st(Yv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc=null;function om(){return vc===null?vc=function(){return 268435456+Math.round(2147483648*Math.random())}():vc++,"0x"+vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="RestConnection",JC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tD{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Hc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(t,n,s,o,c){const f=om(),g=this.jo(t,n.toUriEncodedString());st(kd,`Sending RPC '${t}' ${f}:`,g,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,o,c);const{host:y}=new URL(g),T=Wa(y);return this.Jo(t,g,p,s,T).then(S=>(st(kd,`Received RPC '${t}' ${f}: `,S),S),S=>{throw Ga(kd,`RPC '${t}' ${f} failed with error: `,S,"url: ",g,"request:",s),S})}Yo(t,n,s,o,c,f){return this.zo(t,n,s,o,c)}Ho(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+eo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,c)=>t[c]=o),s&&s.headers.forEach((o,c)=>t[c]=o)}jo(t,n){const s=JC[t];return`${this.Ko}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class nD extends tD{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,c){const f=om();return new Promise((g,p)=>{const y=new P0;y.setWithCredentials(!0),y.listenOnce(k0.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case wc.NO_ERROR:const S=y.getResponseJson();st(Qe,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(S)),g(S);break;case wc.TIMEOUT:st(Qe,`RPC '${t}' ${f} timed out`),p(new at(Y.DEADLINE_EXCEEDED,"Request time out"));break;case wc.HTTP_ERROR:const C=y.getStatus();if(st(Qe,`RPC '${t}' ${f} failed with status:`,C,"response text:",y.getResponseText()),C>0){let H=y.getResponseJson();Array.isArray(H)&&(H=H[0]);const Z=H?.error;if(Z&&Z.status&&Z.message){const rt=function(St){const ft=St.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ft)>=0?ft:Y.UNKNOWN}(Z.status);p(new at(rt,Z.message))}else p(new at(Y.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new at(Y.UNAVAILABLE,"Connection failed."));break;default:yt(9055,{h_:t,streamId:f,P_:y.getLastErrorCode(),T_:y.getLastError()})}}finally{st(Qe,`RPC '${t}' ${f} completed.`)}});const T=JSON.stringify(o);st(Qe,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",T,s,15)})}I_(t,n,s){const o=om(),c=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=z0(),g=L0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const T=c.join("");st(Qe,`Creating RPC '${t}' stream ${o}: ${T}`,p);const S=f.createWebChannel(T,p);this.E_(S);let C=!1,H=!1;const Z=new eD({Zo:W=>{H?st(Qe,`Not sending because RPC '${t}' stream ${o} is closed:`,W):(C||(st(Qe,`Opening RPC '${t}' stream ${o} transport.`),S.open(),C=!0),st(Qe,`RPC '${t}' stream ${o} sending:`,W),S.send(W))},Xo:()=>S.close()}),rt=(W,St,ft)=>{W.listen(St,ct=>{try{ft(ct)}catch(It){setTimeout(()=>{throw It},0)}})};return rt(S,pl.EventType.OPEN,()=>{H||(st(Qe,`RPC '${t}' stream ${o} transport opened.`),Z.__())}),rt(S,pl.EventType.CLOSE,()=>{H||(H=!0,st(Qe,`RPC '${t}' stream ${o} transport closed`),Z.u_(),this.d_(S))}),rt(S,pl.EventType.ERROR,W=>{H||(H=!0,Ga(Qe,`RPC '${t}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),Z.u_(new at(Y.UNAVAILABLE,"The operation could not be completed")))}),rt(S,pl.EventType.MESSAGE,W=>{var St;if(!H){const ft=W.data[0];Ft(!!ft,16349);const ct=ft,It=ct?.error||((St=ct[0])===null||St===void 0?void 0:St.error);if(It){st(Qe,`RPC '${t}' stream ${o} received error:`,It);const _t=It.status;let Ct=function(R){const O=_e[R];if(O!==void 0)return vT(O)}(_t),M=It.message;Ct===void 0&&(Ct=Y.INTERNAL,M="Unknown error status: "+_t+" with message "+It.message),H=!0,Z.u_(new at(Ct,M)),S.close()}else st(Qe,`RPC '${t}' stream ${o} received:`,ft),Z.c_(ft)}}),rt(g,U0.STAT_EVENT,W=>{W.stat===Yd.PROXY?st(Qe,`RPC '${t}' stream ${o} detected buffering proxy`):W.stat===Yd.NOPROXY&&st(Qe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{Z.a_()},0),Z}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(n=>n===t)}}function Ud(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(r){return new aC(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(t,n,s=1e3,o=1.5,c=6e4){this.xi=t,this.timerId=n,this.A_=s,this.R_=o,this.V_=c,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const n=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,n-s);o>0&&st("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="PersistentStream";class xT{constructor(t,n,s,o,c,f,g,p){this.xi=t,this.S_=s,this.D_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new VT(t,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===n&&this.z_(s,o)},s=>{t(()=>{const o=new at(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(t,n){const s=this.G_(this.v_);this.stream=this.H_(t,n),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return st($v,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return n=>{this.xi.enqueueAndForget(()=>this.v_===t?n():(st($v,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iD extends xT{constructor(t,n,s,o,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}H_(t,n){return this.connection.I_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const n=uC(this.serializer,t),s=function(c){if(!("targetChange"in c))return At.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?gi(f.readTime):At.min()}(t);return this.listener.Y_(n,s)}Z_(t){const n={};n.database=sm(this.serializer),n.addTarget=function(c,f){let g;const p=f.target;if(g=Jd(p)?{documents:fC(c,p)}:{query:dC(c,p).gt},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=AT(c,f.resumeToken);const y=nm(c,f.expectedCount);y!==null&&(g.expectedCount=y)}else if(f.snapshotVersion.compareTo(At.min())>0){g.readTime=Yc(c,f.snapshotVersion.toTimestamp());const y=nm(c,f.expectedCount);y!==null&&(g.expectedCount=y)}return g}(this.serializer,t);const s=gC(this.serializer,t);s&&(n.labels=s),this.Q_(n)}X_(t){const n={};n.database=sm(this.serializer),n.removeTarget=t,this.Q_(n)}}class rD extends xT{constructor(t,n,s,o,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,n){return this.connection.I_("Write",t,n)}J_(t){return Ft(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ft(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){Ft(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const n=hC(t.writeResults,t.commitTime),s=gi(t.commitTime);return this.listener.ra(s,n)}ia(){const t={};t.database=sm(this.serializer),this.Q_(t)}ta(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>cC(this.serializer,s))};this.Q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{}class aD extends sD{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new at(Y.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.zo(t,im(n,s),o,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new at(Y.UNKNOWN,c.toString())})}Yo(t,n,s,o,c){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Yo(t,im(n,s),o,f,g,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new at(Y.UNKNOWN,f.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class oD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Wi(n),this.ua=!1):st("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="RemoteStore";class lD{constructor(t,n,s,o,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=c,this.Ra.No(f=>{s.enqueueAndForget(async()=>{js(this)&&(st(Us,"Restarting streams for network reachability change."),await async function(p){const y=bt(p);y.da.add(4),await jl(y),y.Va.set("Unknown"),y.da.delete(4),await gh(y)}(this))})}),this.Va=new oD(s,o)}}async function gh(r){if(js(r))for(const t of r.Aa)await t(!0)}async function jl(r){for(const t of r.Aa)await t(!1)}function PT(r,t){const n=bt(r);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),Xm(n)?Ym(n):ro(n).N_()&&Km(n,t))}function Qm(r,t){const n=bt(r),s=ro(n);n.Ea.delete(t),s.N_()&&kT(n,t),n.Ea.size===0&&(s.N_()?s.k_():js(n)&&n.Va.set("Unknown"))}function Km(r,t){if(r.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ro(r).Z_(t)}function kT(r,t){r.ma.Ke(t),ro(r).X_(t)}function Ym(r){r.ma=new nC({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Ea.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),ro(r).start(),r.Va.ca()}function Xm(r){return js(r)&&!ro(r).O_()&&r.Ea.size>0}function js(r){return bt(r).da.size===0}function UT(r){r.ma=void 0}async function uD(r){r.Va.set("Online")}async function cD(r){r.Ea.forEach((t,n)=>{Km(r,t)})}async function hD(r,t){UT(r),Xm(r)?(r.Va.Pa(t),Ym(r)):r.Va.set("Unknown")}async function fD(r,t,n){if(r.Va.set("Online"),t instanceof TT&&t.state===2&&t.cause)try{await async function(o,c){const f=c.cause;for(const g of c.targetIds)o.Ea.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o.Ea.delete(g),o.ma.removeTarget(g))}(r,t)}catch(s){st(Us,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await $c(r,s)}else if(t instanceof Dc?r.ma.Xe(t):t instanceof ET?r.ma.ot(t):r.ma.nt(t),!n.isEqual(At.min()))try{const s=await MT(r.localStore);n.compareTo(s)>=0&&await function(c,f){const g=c.ma.It(f);return g.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const T=c.Ea.get(y);T&&c.Ea.set(y,T.withResumeToken(p.resumeToken,f))}}),g.targetMismatches.forEach((p,y)=>{const T=c.Ea.get(p);if(!T)return;c.Ea.set(p,T.withResumeToken(He.EMPTY_BYTE_STRING,T.snapshotVersion)),kT(c,p);const S=new Pr(T.target,p,y,T.sequenceNumber);Km(c,S)}),c.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(s){st(Us,"Failed to raise snapshot:",s),await $c(r,s)}}async function $c(r,t,n){if(!io(t))throw t;r.da.add(1),await jl(r),r.Va.set("Offline"),n||(n=()=>MT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{st(Us,"Retrying IndexedDB access"),await n(),r.da.delete(1),await gh(r)})}function LT(r,t){return t().catch(n=>$c(r,n,t))}async function ph(r){const t=bt(r),n=Gr(t);let s=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:Om;for(;dD(t);)try{const o=await YC(t.localStore,s);if(o===null){t.Ia.length===0&&n.k_();break}s=o.batchId,mD(t,o)}catch(o){await $c(t,o)}zT(t)&&BT(t)}function dD(r){return js(r)&&r.Ia.length<10}function mD(r,t){r.Ia.push(t);const n=Gr(r);n.N_()&&n.ea&&n.ta(t.mutations)}function zT(r){return js(r)&&!Gr(r).O_()&&r.Ia.length>0}function BT(r){Gr(r).start()}async function gD(r){Gr(r).ia()}async function pD(r){const t=Gr(r);for(const n of r.Ia)t.ta(n.mutations)}async function yD(r,t,n){const s=r.Ia.shift(),o=zm.from(s,t,n);await LT(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await ph(r)}async function _D(r,t){t&&Gr(r).ea&&await async function(s,o){if(function(f){return tC(f)&&f!==Y.ABORTED}(o.code)){const c=s.Ia.shift();Gr(s).L_(),await LT(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o)),await ph(s)}}(r,t),zT(r)&&BT(r)}async function Zv(r,t){const n=bt(r);n.asyncQueue.verifyOperationInProgress(),st(Us,"RemoteStore received new credentials");const s=js(n);n.da.add(3),await jl(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.da.delete(3),await gh(n)}async function vD(r,t){const n=bt(r);t?(n.da.delete(2),await gh(n)):t||(n.da.add(2),await jl(n),n.Va.set("Unknown"))}function ro(r){return r.fa||(r.fa=function(n,s,o){const c=bt(n);return c.oa(),new iD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{e_:uD.bind(null,r),n_:cD.bind(null,r),i_:hD.bind(null,r),Y_:fD.bind(null,r)}),r.Aa.push(async t=>{t?(r.fa.L_(),Xm(r)?Ym(r):r.Va.set("Unknown")):(await r.fa.stop(),UT(r))})),r.fa}function Gr(r){return r.ga||(r.ga=function(n,s,o){const c=bt(n);return c.oa(),new rD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:gD.bind(null,r),i_:_D.bind(null,r),na:pD.bind(null,r),ra:yD.bind(null,r)}),r.Aa.push(async t=>{t?(r.ga.L_(),await ph(r)):(await r.ga.stop(),r.Ia.length>0&&(st(Us,`Stopping write stream with ${r.Ia.length} pending writes`),r.Ia=[]))})),r.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,n,s,o,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,c){const f=Date.now()+s,g=new $m(t,n,f,o,c);return g.start(s),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new at(Y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zm(r,t){if(Wi("AsyncQueue",`${t}: ${r}`),io(r))return new at(Y.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{static emptySet(t){return new ja(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||dt.comparator(n.key,s.key):(n,s)=>dt.comparator(n.key,s.key),this.keyedMap=yl(),this.sortedSet=new se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ja)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ja;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.pa=new se(dt.comparator)}track(t){const n=t.doc.key,s=this.pa.get(n);s?t.type!==0&&s.type===3?this.pa=this.pa.insert(n,t):t.type===3&&s.type!==1?this.pa=this.pa.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.pa=this.pa.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.pa=this.pa.remove(n):t.type===1&&s.type===2?this.pa=this.pa.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):yt(63341,{Vt:t,ya:s}):this.pa=this.pa.insert(n,t)}wa(){const t=[];return this.pa.inorderTraversal((n,s)=>{t.push(s)}),t}}class $a{constructor(t,n,s,o,c,f,g,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,c){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new $a(t,n,ja.emptySet(n),f,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&uh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class TD{constructor(){this.queries=Jv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=bt(n),c=o.queries;o.queries=Jv(),c.forEach((f,g)=>{for(const p of g.Sa)p.onError(s)})})(this,new at(Y.ABORTED,"Firestore shutting down"))}}function Jv(){return new qs(r=>oT(r),uh)}async function qT(r,t){const n=bt(r);let s=3;const o=t.query;let c=n.queries.get(o);c?!c.Da()&&t.va()&&(s=2):(c=new ED,s=t.va()?0:1);try{switch(s){case 0:c.ba=await n.onListen(o,!0);break;case 1:c.ba=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=Zm(f,`Initialization of query '${Ua(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,c),c.Sa.push(t),t.Fa(n.onlineState),c.ba&&t.Ma(c.ba)&&Wm(n)}async function HT(r,t){const n=bt(r),s=t.query;let o=3;const c=n.queries.get(s);if(c){const f=c.Sa.indexOf(t);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?o=t.va()?0:1:!c.Da()&&t.va()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function AD(r,t){const n=bt(r);let s=!1;for(const o of t){const c=o.query,f=n.queries.get(c);if(f){for(const g of f.Sa)g.Ma(o)&&(s=!0);f.ba=o}}s&&Wm(n)}function bD(r,t,n){const s=bt(r),o=s.queries.get(t);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(t)}function Wm(r){r.Ca.forEach(t=>{t.next()})}var lm,tE;(tE=lm||(lm={})).xa="default",tE.Cache="cache";class jT{constructor(t,n,s){this.query=t,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new $a(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Na?this.La(t)&&(this.Oa.next(t),n=!0):this.ka(t,this.onlineState)&&(this.qa(t),n=!0),this.Ba=t,n}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),n=!0),n}ka(t,n){if(!t.fromCache||!this.va())return!0;const s=n!=="Offline";return(!this.options.Qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}La(t){if(t.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(t){t=$a.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==lm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(t){this.key=t}}class GT{constructor(t){this.key=t}}class SD{constructor(t,n){this.query=t,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pt(),this.mutatedKeys=Pt(),this.Za=lT(t),this.Xa=new ja(this.Za)}get eu(){return this.Ha}tu(t,n){const s=n?n.nu:new Wv,o=n?n.Xa:this.Xa;let c=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((T,S)=>{const C=o.get(T),H=ch(this.query,S)?S:null,Z=!!C&&this.mutatedKeys.has(C.key),rt=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let W=!1;C&&H?C.data.isEqual(H.data)?Z!==rt&&(s.track({type:3,doc:H}),W=!0):this.ru(C,H)||(s.track({type:2,doc:H}),W=!0,(p&&this.Za(H,p)>0||y&&this.Za(H,y)<0)&&(g=!0)):!C&&H?(s.track({type:0,doc:H}),W=!0):C&&!H&&(s.track({type:1,doc:C}),W=!0,(p||y)&&(g=!0)),W&&(H?(f=f.add(H),c=rt?c.add(T):c.delete(T)):(f=f.delete(T),c=c.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),c=c.delete(T.key),s.track({type:1,doc:T})}return{Xa:f,nu:s,Cs:g,mutatedKeys:c}}ru(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const c=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const f=t.nu.wa();f.sort((T,S)=>function(H,Z){const rt=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yt(20277,{Vt:W})}};return rt(H)-rt(Z)}(T.type,S.type)||this.Za(T.doc,S.doc)),this.iu(s),o=o!=null&&o;const g=n&&!o?this.su():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Ja;return this.Ja=p,f.length!==0||y?{snapshot:new $a(this.query,t.Xa,c,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:g}:{ou:g}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Wv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=Pt(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const n=[];return t.forEach(s=>{this.Ya.has(s)||n.push(new GT(s))}),this.Ya.forEach(s=>{t.has(s)||n.push(new FT(s))}),n}au(t){this.Ha=t.$s,this.Ya=Pt();const n=this.tu(t.documents);return this.applyChanges(n,!0)}uu(){return $a.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Jm="SyncEngine";class wD{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class RD{constructor(t){this.key=t,this.cu=!1}}class ID{constructor(t,n,s,o,c,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.lu={},this.hu=new qs(g=>oT(g),uh),this.Pu=new Map,this.Tu=new Set,this.Iu=new se(dt.comparator),this.Eu=new Map,this.du=new Hm,this.Au={},this.Ru=new Map,this.Vu=Xa.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function CD(r,t,n=!0){const s=ZT(r);let o;const c=s.hu.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.uu()):o=await QT(s,t,n,!0),o}async function DD(r,t){const n=ZT(r);await QT(n,t,!0,!1)}async function QT(r,t,n,s){const o=await XC(r.localStore,mi(t)),c=o.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let g;return s&&(g=await ND(r,t,c,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&PT(r.remoteStore,o),g}async function ND(r,t,n,s,o){r.fu=(S,C,H)=>async function(rt,W,St,ft){let ct=W.view.tu(St);ct.Cs&&(ct=await Qv(rt.localStore,W.query,!1).then(({documents:M})=>W.view.tu(M,ct)));const It=ft&&ft.targetChanges.get(W.targetId),_t=ft&&ft.targetMismatches.get(W.targetId)!=null,Ct=W.view.applyChanges(ct,rt.isPrimaryClient,It,_t);return nE(rt,W.targetId,Ct.ou),Ct.snapshot}(r,S,C,H);const c=await Qv(r.localStore,t,!0),f=new SD(t,c.$s),g=f.tu(c.documents),p=Hl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(g,r.isPrimaryClient,p);nE(r,n,y.ou);const T=new wD(t,n,f);return r.hu.set(t,T),r.Pu.has(n)?r.Pu.get(n).push(t):r.Pu.set(n,[t]),y.snapshot}async function OD(r,t,n){const s=bt(r),o=s.hu.get(t),c=s.Pu.get(o.targetId);if(c.length>1)return s.Pu.set(o.targetId,c.filter(f=>!uh(f,t))),void s.hu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await am(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Qm(s.remoteStore,o.targetId),um(s,o.targetId)}).catch(no)):(um(s,o.targetId),await am(s.localStore,o.targetId,!0))}async function MD(r,t){const n=bt(r),s=n.hu.get(t),o=n.Pu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Qm(n.remoteStore,s.targetId))}async function VD(r,t,n){const s=BD(r);try{const o=await function(f,g){const p=bt(f),y=Re.now(),T=g.reduce((H,Z)=>H.add(Z.key),Pt());let S,C;return p.persistence.runTransaction("Locally write mutations","readwrite",H=>{let Z=Ji(),rt=Pt();return p.Bs.getEntries(H,T).next(W=>{Z=W,Z.forEach((St,ft)=>{ft.isValidDocument()||(rt=rt.add(St))})}).next(()=>p.localDocuments.getOverlayedDocuments(H,Z)).next(W=>{S=W;const St=[];for(const ft of g){const ct=X2(ft,S.get(ft.key).overlayedDocument);ct!=null&&St.push(new Hs(ft.key,ct,J0(ct.value.mapValue),Gn.exists(!0)))}return p.mutationQueue.addMutationBatch(H,y,St,g)}).next(W=>{C=W;const St=W.applyToLocalDocumentSet(S,rt);return p.documentOverlayCache.saveOverlays(H,W.batchId,St)})}).then(()=>({batchId:C.batchId,changes:cT(S)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,g,p){let y=f.Au[f.currentUser.toKey()];y||(y=new se(Nt)),y=y.insert(g,p),f.Au[f.currentUser.toKey()]=y}(s,o.batchId,n),await Fl(s,o.changes),await ph(s.remoteStore)}catch(o){const c=Zm(o,"Failed to persist write");n.reject(c)}}async function KT(r,t){const n=bt(r);try{const s=await QC(n.localStore,t);t.targetChanges.forEach((o,c)=>{const f=n.Eu.get(c);f&&(Ft(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.cu=!0:o.modifiedDocuments.size>0?Ft(f.cu,14607):o.removedDocuments.size>0&&(Ft(f.cu,42227),f.cu=!1))}),await Fl(n,s,t)}catch(s){await no(s)}}function eE(r,t,n){const s=bt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.hu.forEach((c,f)=>{const g=f.view.Fa(t);g.snapshot&&o.push(g.snapshot)}),function(f,g){const p=bt(f);p.onlineState=g;let y=!1;p.queries.forEach((T,S)=>{for(const C of S.Sa)C.Fa(g)&&(y=!0)}),y&&Wm(p)}(s.eventManager,t),o.length&&s.lu.Y_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function xD(r,t,n){const s=bt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Eu.get(t),c=o&&o.key;if(c){let f=new se(dt.comparator);f=f.insert(c,Xe.newNoDocument(c,At.min()));const g=Pt().add(c),p=new dh(At.min(),new Map,new se(Nt),f,g);await KT(s,p),s.Iu=s.Iu.remove(c),s.Eu.delete(t),tg(s)}else await am(s.localStore,t,!1).then(()=>um(s,t,n)).catch(no)}async function PD(r,t){const n=bt(r),s=t.batch.batchId;try{const o=await GC(n.localStore,t);XT(n,s,null),YT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fl(n,o)}catch(o){await no(o)}}async function kD(r,t,n){const s=bt(r);try{const o=await function(f,g){const p=bt(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let T;return p.mutationQueue.lookupMutationBatch(y,g).next(S=>(Ft(S!==null,37113),T=S.keys(),p.mutationQueue.removeMutationBatch(y,S))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,T,g)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T)).next(()=>p.localDocuments.getDocuments(y,T))})}(s.localStore,t);XT(s,t,n),YT(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Fl(s,o)}catch(o){await no(o)}}function YT(r,t){(r.Ru.get(t)||[]).forEach(n=>{n.resolve()}),r.Ru.delete(t)}function XT(r,t,n){const s=bt(r);let o=s.Au[s.currentUser.toKey()];if(o){const c=o.get(t);c&&(n?c.reject(n):c.resolve(),o=o.remove(t)),s.Au[s.currentUser.toKey()]=o}}function um(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Pu.get(t))r.hu.delete(s),n&&r.lu.gu(s,n);r.Pu.delete(t),r.isPrimaryClient&&r.du.Hr(t).forEach(s=>{r.du.containsKey(s)||$T(r,s)})}function $T(r,t){r.Tu.delete(t.path.canonicalString());const n=r.Iu.get(t);n!==null&&(Qm(r.remoteStore,n),r.Iu=r.Iu.remove(t),r.Eu.delete(n),tg(r))}function nE(r,t,n){for(const s of n)s instanceof FT?(r.du.addReference(s.key,t),UD(r,s)):s instanceof GT?(st(Jm,"Document no longer in limbo: "+s.key),r.du.removeReference(s.key,t),r.du.containsKey(s.key)||$T(r,s.key)):yt(19791,{pu:s})}function UD(r,t){const n=t.key,s=n.path.canonicalString();r.Iu.get(n)||r.Tu.has(s)||(st(Jm,"New document in limbo: "+n),r.Tu.add(s),tg(r))}function tg(r){for(;r.Tu.size>0&&r.Iu.size<r.maxConcurrentLimboResolutions;){const t=r.Tu.values().next().value;r.Tu.delete(t);const n=new dt(te.fromString(t)),s=r.Vu.next();r.Eu.set(s,new RD(n)),r.Iu=r.Iu.insert(n,s),PT(r.remoteStore,new Pr(mi(km(n.path)),s,"TargetPurposeLimboResolution",ah.le))}}async function Fl(r,t,n){const s=bt(r),o=[],c=[],f=[];s.hu.isEmpty()||(s.hu.forEach((g,p)=>{f.push(s.fu(p,t,n).then(y=>{var T;if((y||n)&&s.isPrimaryClient){const S=y?!y.fromCache:(T=n?.targetChanges.get(p.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(y){o.push(y);const S=Fm.Rs(p.targetId,y);c.push(S)}}))}),await Promise.all(f),s.lu.Y_(o),await async function(p,y){const T=bt(p);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>K.forEach(y,C=>K.forEach(C.ds,H=>T.persistence.referenceDelegate.addReference(S,C.targetId,H)).next(()=>K.forEach(C.As,H=>T.persistence.referenceDelegate.removeReference(S,C.targetId,H)))))}catch(S){if(!io(S))throw S;st(Gm,"Failed to update sequence numbers: "+S)}for(const S of y){const C=S.targetId;if(!S.fromCache){const H=T.xs.get(C),Z=H.snapshotVersion,rt=H.withLastLimboFreeSnapshotVersion(Z);T.xs=T.xs.insert(C,rt)}}}(s.localStore,c))}async function LD(r,t){const n=bt(r);if(!n.currentUser.isEqual(t)){st(Jm,"User change. New user:",t.toKey());const s=await OT(n.localStore,t);n.currentUser=t,function(c,f){c.Ru.forEach(g=>{g.forEach(p=>{p.reject(new at(Y.CANCELLED,f))})}),c.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Fl(n,s.ks)}}function zD(r,t){const n=bt(r),s=n.Eu.get(t);if(s&&s.cu)return Pt().add(s.key);{let o=Pt();const c=n.Pu.get(t);if(!c)return o;for(const f of c){const g=n.hu.get(f);o=o.unionWith(g.view.eu)}return o}}function ZT(r){const t=bt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=KT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xD.bind(null,t),t.lu.Y_=AD.bind(null,t.eventManager),t.lu.gu=bD.bind(null,t.eventManager),t}function BD(r){const t=bt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=PD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kD.bind(null,t),t}class Zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=mh(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,n){return null}Cu(t,n){return null}Du(t){return FC(this.persistence,new qC,t.initialUser,this.serializer)}Su(t){return new NT(jm.fi,this.serializer)}bu(t){return new ZC}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zc.provider={build:()=>new Zc};class qD extends Zc{constructor(t){super(),this.cacheSizeBytes=t}vu(t,n){Ft(this.persistence.referenceDelegate instanceof Xc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new RC(s,t.asyncQueue,n)}Su(t){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new NT(s=>Xc.fi(s,n),this.serializer)}}class cm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>eE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LD.bind(null,this.syncEngine),await vD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new TD}()}createDatastore(t){const n=mh(t.databaseInfo.databaseId),s=function(c){return new nD(c)}(t.databaseInfo);return function(c,f,g,p){return new aD(c,f,g,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,c,f,g){return new lD(s,o,c,f,g)}(this.localStore,this.datastore,t.asyncQueue,n=>eE(this.syncEngine,n,0),function(){return Xv.C()?new Xv:new WC}())}createSyncEngine(t,n){return function(o,c,f,g,p,y,T){const S=new ID(o,c,f,g,p,y);return T&&(S.mu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const c=bt(o);st(Us,"RemoteStore shutting down."),c.da.add(5),await jl(c),c.Ra.shutdown(),c.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cm.provider={build:()=>new cm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Wi("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="FirestoreClient";class HD{constructor(t,n,s,o,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ye.UNAUTHENTICATED,this.clientId=j0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{st(Qr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(st(Qr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Zm(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ld(r,t){r.asyncQueue.verifyOperationInProgress(),st(Qr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await OT(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function iE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await jD(r);st(Qr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Zv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Zv(t.remoteStore,o)),r._onlineComponents=t}async function jD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){st(Qr,"Using user provided OfflineComponentProvider");try{await Ld(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Ga("Error using user provided cache. Falling back to memory cache: "+n),await Ld(r,new Zc)}}else st(Qr,"Using default OfflineComponentProvider"),await Ld(r,new qD(void 0));return r._offlineComponents}async function JT(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(st(Qr,"Using user provided OnlineComponentProvider"),await iE(r,r._uninitializedComponentsProvider._online)):(st(Qr,"Using default OnlineComponentProvider"),await iE(r,new cm))),r._onlineComponents}function FD(r){return JT(r).then(t=>t.syncEngine)}async function tA(r){const t=await JT(r),n=t.eventManager;return n.onListen=CD.bind(null,t.syncEngine),n.onUnlisten=OD.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=DD.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=MD.bind(null,t.syncEngine),n}function GD(r,t,n={}){const s=new Xi;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,g,p,y){const T=new WT({next:C=>{T.xu(),f.enqueueAndForget(()=>HT(c,S));const H=C.docs.has(g);!H&&C.fromCache?y.reject(new at(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):H&&C.fromCache&&p&&p.source==="server"?y.reject(new at(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(C)},error:C=>y.reject(C)}),S=new jT(km(g.path),T,{includeMetadataChanges:!0,Qa:!0});return qT(c,S)}(await tA(r),r.asyncQueue,t,n,s)),s.promise}function QD(r,t,n={}){const s=new Xi;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,g,p,y){const T=new WT({next:C=>{T.xu(),f.enqueueAndForget(()=>HT(c,S)),C.fromCache&&p.source==="server"?y.reject(new at(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(C)},error:C=>y.reject(C)}),S=new jT(g,T,{includeMetadataChanges:!0,Qa:!0});return qT(c,S)}(await tA(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(r,t,n){if(!n)throw new at(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function KD(r,t,n,s){if(t===!0&&s===!0)throw new at(Y.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function sE(r){if(!dt.isDocumentKey(r))throw new at(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function aE(r){if(dt.isDocumentKey(r))throw new at(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function yh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":yt(12329,{type:typeof r})}function tr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new at(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yh(r);throw new at(Y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="firestore.googleapis.com",oE=!0;class lE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new at(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iA,this.ssl=oE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:oE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=DT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<SC)throw new at(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}KD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eA((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new at(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new at(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new at(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _h{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new at(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new at(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new e2;switch(s.type){case"firstParty":return new s2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new at(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=rE.get(n);s&&(st("ComponentProvider","Removing Datastore"),rE.delete(n),s.terminate())}(this),Promise.resolve()}}function YD(r,t,n,s={}){var o;r=tr(r,_h);const c=Wa(t),f=r._getSettings(),g=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${n}`;c&&(wE(`https://${p}`),RE("Firestore",!0)),f.host!==iA&&f.host!==p&&Ga("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:p,ssl:c,emulatorOptions:s});if(!Br(y,g)&&(r._setSettings(y),s.mockUserToken)){let T,S;if(typeof s.mockUserToken=="string")T=s.mockUserToken,S=Ye.MOCK_USER;else{T=aS(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new at(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Ye(C)}r._authCredentials=new n2(new q0(T,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new so(this.firestore,t,this._query)}}class un{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new un(this.firestore,t,this._key)}}class zr extends so{constructor(t,n,s){super(t,n,km(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new un(this.firestore,null,new dt(t))}withConverter(t){return new zr(this.firestore,t,this._path)}}function Ec(r,t,...n){if(r=nn(r),nA("collection","path",t),r instanceof _h){const s=te.fromString(t,...n);return aE(s),new zr(r,null,s)}{if(!(r instanceof un||r instanceof zr))throw new at(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return aE(s),new zr(r.firestore,null,s)}}function vl(r,t,...n){if(r=nn(r),arguments.length===1&&(t=j0.newId()),nA("doc","path",t),r instanceof _h){const s=te.fromString(t,...n);return sE(s),new un(r,null,new dt(s))}{if(!(r instanceof un||r instanceof zr))throw new at(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return sE(s),new un(r.firestore,r instanceof zr?r.converter:null,new dt(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="AsyncQueue";class cE{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new VT(this,"async_queue_retry"),this.rc=()=>{const s=Ud();s&&st(uE,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=t;const n=Ud();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const n=Ud();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new Xi;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!io(t))throw t;st(uE,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const n=this.sc.then(()=>(this.ec=!0,t().catch(s=>{throw this.Xu=s,this.ec=!1,Wi("INTERNAL UNHANDLED ERROR: ",hE(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=n,n}enqueueAfterDelay(t,n,s){this.oc(),this.nc.indexOf(t)>-1&&(n=0);const o=$m.createAndSchedule(this,t,n,s,c=>this.uc(c));return this.Zu.push(o),o}oc(){this.Xu&&yt(47125,{cc:hE(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const n of this.Zu)if(n.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const n=this.Zu.indexOf(t);this.Zu.splice(n,1)}}function hE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class ao extends _h{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new cE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new cE(t),this._firestoreClient=void 0,await t}}}function XD(r,t){const n=typeof r=="object"?r:dm(),s=typeof r=="string"?r:Hc,o=zs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=rS("firestore");c&&YD(o,...c)}return o}function eg(r){if(r._terminated)throw new at(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||$D(r),r._firestoreClient}function $D(r){var t,n,s;const o=r._freezeSettings(),c=function(g,p,y,T){return new E2(g,p,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,eA(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new HD(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(g){const p=g?._online.build();return{_offline:g?._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Za(He.fromBase64String(t))}catch(n){throw new at(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Za(He.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new at(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new at(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new at(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Nt(this._lat,t._lat)||Nt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=/^__.*__$/;class WD{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Hs(t,this.data,this.fieldMask,n,this.fieldTransforms):new ql(t,this.data,n,this.fieldTransforms)}}function sA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yt(40011,{Ic:r})}}class sg{constructor(t,n,s,o,c,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Ec(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new sg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Vc(t),o}mc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return Wc(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(sA(this.Ic)&&ZD.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class JD{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||mh(t)}bc(t,n,s,o=!1){return new sg({Ic:t,methodName:n,wc:s,path:qe.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ag(r){const t=r._freezeSettings(),n=mh(r._databaseId);return new JD(r._databaseId,!!t.ignoreUndefinedProperties,n)}function aA(r,t,n,s,o,c={}){const f=r.bc(c.merge||c.mergeFields?2:0,t,n,o);uA("Data must be an object, but it was:",f,s);const g=oA(s,f);let p,y;if(c.merge)p=new jn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const T=[];for(const S of c.mergeFields){const C=eN(t,S,n);if(!f.contains(C))throw new at(Y.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);iN(T,C)||T.push(C)}p=new jn(T),y=f.fieldTransforms.filter(S=>p.covers(S.field))}else p=null,y=f.fieldTransforms;return new WD(new Vn(g),p,y)}function tN(r,t,n,s=!1){return og(n,r.bc(s?4:3,t))}function og(r,t){if(lA(r=nn(r)))return uA("Unsupported field value:",t,r),oA(r,t);if(r instanceof rA)return function(s,o){if(!sA(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(s,o){const c=[];let f=0;for(const g of s){let p=og(g,o.fc(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,o){if((s=nn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return j2(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Re.fromDate(s);return{timestampValue:Yc(o.serializer,c)}}if(s instanceof Re){const c=new Re(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Yc(o.serializer,c)}}if(s instanceof ig)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Za)return{bytesValue:AT(o.serializer,s._byteString)};if(s instanceof un){const c=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw o.gc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:qm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof rg)return function(f,g){return{mapValue:{fields:{[Z0]:{stringValue:W0},[jc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw g.gc("VectorValues must only contain numeric values.");return Um(g.serializer,y)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${yh(s)}`)}(r,t)}function oA(r,t){const n={};return G0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Bs(r,(s,o)=>{const c=og(o,t.Ac(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function lA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Re||r instanceof ig||r instanceof Za||r instanceof un||r instanceof rA||r instanceof rg)}function uA(r,t,n){if(!lA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=yh(n);throw s==="an object"?t.gc(r+" a custom object"):t.gc(r+" "+s)}}function eN(r,t,n){if((t=nn(t))instanceof ng)return t._internalPath;if(typeof t=="string")return cA(r,t);throw Wc("Field path arguments must be of type string or ",r,!1,void 0,n)}const nN=new RegExp("[~\\*/\\[\\]]");function cA(r,t,n){if(t.search(nN)>=0)throw Wc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new ng(...t.split("."))._internalPath}catch{throw Wc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Wc(r,t,n,s,o){const c=s&&!s.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new at(Y.INVALID_ARGUMENT,g+r+p)}function iN(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(t,n,s,o,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new rN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(fA("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rN extends hA{data(){return super.data()}}function fA(r,t){return typeof t=="string"?cA(r,t):t instanceof ng?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new at(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lg{}class aN extends lg{}function fE(r,t,...n){let s=[];t instanceof lg&&s.push(t),s=s.concat(n),function(c){const f=c.filter(p=>p instanceof cg).length,g=c.filter(p=>p instanceof ug).length;if(f>1||f>0&&g>0)throw new at(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class ug extends aN{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new ug(t,n,s)}_apply(t){const n=this._parse(t);return dA(t._query,n),new so(t.firestore,t.converter,tm(t._query,n))}_parse(t){const n=ag(t.firestore);return function(c,f,g,p,y,T,S){let C;if(y.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new at(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){mE(S,T);const Z=[];for(const rt of S)Z.push(dE(p,c,rt));C={arrayValue:{values:Z}}}else C=dE(p,c,S)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||mE(S,T),C=tN(g,f,S,T==="in"||T==="not-in");return ve.create(y,T,C)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class cg extends lg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new cg(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,c){let f=o;const g=c.getFlattenedFilters();for(const p of g)dA(f,p),f=tm(f,p)}(t._query,n),new so(t.firestore,t.converter,tm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function dE(r,t,n){if(typeof(n=nn(n))=="string"){if(n==="")throw new at(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aT(t)&&n.indexOf("/")!==-1)throw new at(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(te.fromString(n));if(!dt.isDocumentKey(s))throw new at(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Iv(r,new dt(s))}if(n instanceof un)return Iv(r,n._key);throw new at(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yh(n)}.`)}function mE(r,t){if(!Array.isArray(r)||r.length===0)throw new at(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function dA(r,t){const n=function(o,c){for(const f of o)for(const g of f.getFlattenedFilters())if(c.indexOf(g.op)>=0)return g.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new at(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new at(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class oN{convertValue(t,n="none"){switch(Fr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw yt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Bs(t,(o,c)=>{s[o]=this.convertValue(c,n)}),s}convertVectorValue(t){var n,s,o;const c=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[jc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>fe(f.doubleValue));return new rg(c)}convertGeoPoint(t){return new ig(fe(t.latitude),fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=lh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ol(t));default:return null}}convertTimestamp(t){const n=Hr(t);return new Re(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=te.fromString(t);Ft(CT(s),9688,{name:t});const o=new Ml(s.get(1),s.get(3)),c=new dt(s.popFirst(5));return o.isEqual(n)||Wi(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gA extends hA{constructor(t,n,s,o,c,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(fA("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Nc extends gA{data(t={}){return super.data(t)}}class lN{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new El(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Nc(this._firestore,this._userDataWriter,s.key,s,new El(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new at(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(g=>{const p=new Nc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new El(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(g=>c||g.type!==3).map(g=>{const p=new Nc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new El(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return g.type!==0&&(y=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),T=f.indexOf(g.doc.key)),{type:uN(g.type),doc:p,oldIndex:y,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uN(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yt(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(r){r=tr(r,un);const t=tr(r.firestore,ao);return GD(eg(t),r._key).then(n=>fN(t,r,n))}class pA extends oN{constructor(t){super(),this.firestore=t}convertBytes(t){return new Za(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new un(this.firestore,null,n)}}function gE(r){r=tr(r,so);const t=tr(r.firestore,ao),n=eg(t),s=new pA(t);return sN(r._query),QD(n,r._query).then(o=>new lN(t,s,r,o))}function hN(r,t,n){r=tr(r,un);const s=tr(r.firestore,ao),o=mA(r.converter,t);return hg(s,[aA(ag(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Gn.none())])}function pE(r){return hg(tr(r.firestore,ao),[new Lm(r._key,Gn.none())])}function yE(r,t){const n=tr(r.firestore,ao),s=vl(r),o=mA(r.converter,t);return hg(n,[aA(ag(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Gn.exists(!1))]).then(()=>s)}function hg(r,t){return function(s,o){const c=new Xi;return s.asyncQueue.enqueueAndForget(async()=>VD(await FD(s),o,c)),c.promise}(eg(r),t)}function fN(r,t,n){const s=n.docs.get(t._key),o=new pA(r);return new gA(r,o,t._key,s,new El(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){eo=o})(Ja),pi(new Qn("firestore",(s,{instanceIdentifier:o,options:c})=>{const f=s.getProvider("app").getImmediate(),g=new ao(new i2(s.getProvider("auth-internal")),new a2(f,s.getProvider("app-check-internal")),function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new at(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ml(y.options.projectId,T)}(f,o),f);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),xn(gv,pv,t),xn(gv,pv,"esm2017")})();const dN={apiKey:"AIzaSyDxYyDUPCRPb5O6-GucCcmO4jcdf9rBEho",authDomain:"daily-money-94f02.firebaseapp.com",projectId:"daily-money-94f02",storageBucket:"daily-money-94f02.firebasestorage.app",messagingSenderId:"31843473349",appId:"1:31843473349:web:249d43c7856d1b60b39dac",measurementId:"G-6WZTW0WFRC"},fg=VE(dN);Zw(fg);const _E=JI(fg),mN=new Qi,Or=XD(fg),gN=({monthlySalary:r,handleSalaryChange:t})=>$.createElement("div",{className:"p-2 sm:p-4"},$.createElement("label",{className:"block text-sm sm:text-base font-medium mb-2"},"Monthly Salary"),$.createElement("input",{type:"number",placeholder:"Enter monthly salary",value:r,onChange:t,className:"border border-gray-300 rounded px-3 py-2 w-full text-base sm:text-lg"})),pN=({costName:r,setCostName:t,costAmount:n,setCostAmount:s,period:o,setPeriod:c,costs:f,addingCost:g,handleAddCost:p,handleKeyPress:y,removeCost:T})=>$.createElement($.Fragment,null,$.createElement("div",{className:"p-2 sm:p-4 border rounded mb-4 sm:mb-6"},$.createElement("h2",{className:"text-lg sm:text-xl font-semibold mb-3 sm:mb-4"},"Add Expense"),$.createElement("div",{className:"grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"},$.createElement("input",{placeholder:"Expense name",value:r,onChange:S=>t(S.target.value),onKeyPress:y,className:"border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"}),$.createElement("input",{type:"number",placeholder:"Amount",value:n,onChange:S=>s(S.target.value),onKeyPress:y,className:"border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"}),$.createElement("select",{value:o,onChange:S=>c(S.target.value),className:"border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"},$.createElement("option",{value:"daily"},"Daily"),$.createElement("option",{value:"weekly"},"Weekly"),$.createElement("option",{value:"monthly"},"Monthly"),$.createElement("option",{value:"yearly"},"Yearly"),$.createElement("option",{value:"one-off"},"One-off")),$.createElement("button",{onClick:p,disabled:g,className:`px-3 py-2 text-white rounded text-sm sm:text-base ${g?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`},g?"Adding...":"Add"))),$.createElement("div",{className:"p-2 sm:p-4"},$.createElement("h2",{className:"text-lg sm:text-xl font-semibold mb-3 sm:mb-4"},"Your Expenses"),$.createElement("div",{className:"grid gap-2"},f.map(S=>$.createElement("div",{key:S.id,className:"flex justify-between items-center p-2 sm:p-3 border rounded bg-gray-50"},$.createElement("span",{className:"font-medium text-sm sm:text-base"},S.name),$.createElement("div",{className:"flex items-center gap-2 sm:gap-4"},$.createElement("span",{className:"font-medium text-sm sm:text-base"},"฿",S.amount," (",S.period,")"),$.createElement("button",{onClick:()=>T(S.id),className:"text-red-500 hover:text-red-700 text-lg sm:text-xl px-2 py-1"},"×"))))))),yN=({monthlySalary:r,costs:t,calculateMonthlyCosts:n,calculateDailyFreeMoney:s})=>$.createElement("div",{className:"space-y-4 sm:space-y-6 p-2 sm:p-4"},$.createElement("div",{className:"p-3 sm:p-4 bg-blue-50 border rounded"},$.createElement("h2",{className:"text-lg sm:text-xl font-semibold mb-3 sm:mb-4"},"Detailed Budget Report"),$.createElement("div",{className:"grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"},$.createElement("div",{className:"p-2 sm:p-3 bg-white rounded border"},$.createElement("div",{className:"text-xs sm:text-sm text-gray-600"},"Monthly Salary"),$.createElement("div",{className:"font-bold text-xl sm:text-2xl"},"฿",parseFloat(r)||0)),$.createElement("div",{className:"p-2 sm:p-3 bg-white rounded border"},$.createElement("div",{className:"text-xs sm:text-sm text-gray-600"},"Monthly Expenses"),$.createElement("div",{className:"font-bold text-red-600 text-xl sm:text-2xl"},"฿",n().toFixed(2))),$.createElement("div",{className:"p-2 sm:p-3 bg-white rounded border"},$.createElement("div",{className:"text-xs sm:text-sm text-gray-600"},"Daily Free Money"),$.createElement("div",{className:"font-bold text-green-600 text-xl sm:text-2xl"},"฿",s().toFixed(2))))),$.createElement("div",{className:"p-3 sm:p-4 bg-yellow-50 border rounded"},$.createElement("h3",{className:"text-base sm:text-lg font-semibold mb-2 sm:mb-3"},"Expense Breakdown"),$.createElement("div",{className:"space-y-2"},t.map(o=>{const c=o.period==="daily"?o.amount*30:o.period==="weekly"?o.amount*4.33:o.period==="yearly"?o.amount/12:(o.period==="one-off",o.amount);return $.createElement("div",{key:o.id,className:"flex justify-between items-center p-2 bg-white rounded"},$.createElement("span",{className:"text-sm sm:text-base"},o.name),$.createElement("span",{className:"font-medium text-sm sm:text-base"},"฿",c.toFixed(2),"/month"))})))),_N=({goalName:r,setGoalName:t,goalPrice:n,setGoalPrice:s,dailyContribution:o,setDailyContribution:c,goals:f,handleAddGoal:g,handleKeyPress:p,removeGoal:y,calculateGoalDays:T,calculateGoalDate:S})=>$.createElement($.Fragment,null,$.createElement("div",{className:"p-2 sm:p-4 border rounded mb-4 sm:mb-6"},$.createElement("h2",{className:"text-lg sm:text-xl font-semibold mb-3 sm:mb-4"},"Add Goal"),$.createElement("div",{className:"grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"},$.createElement("input",{placeholder:"Goal name",value:r,onChange:C=>t(C.target.value),onKeyPress:p,className:"border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"}),$.createElement("input",{type:"number",placeholder:"Price",value:n,onChange:C=>s(C.target.value),onKeyPress:p,className:"border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"}),$.createElement("input",{type:"number",placeholder:"Daily contribution",value:o,onChange:C=>c(C.target.value),onKeyPress:p,className:"border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"}),$.createElement("button",{onClick:g,className:"px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm sm:text-base"},"Add Goal"))),$.createElement("div",{className:"p-2 sm:p-4"},$.createElement("h2",{className:"text-lg sm:text-xl font-semibold mb-3 sm:mb-4"},"Your Goals"),$.createElement("div",{className:"grid gap-3 sm:gap-4"},f.map(C=>{const H=T(C.price,C.dailyContribution),Z=S(H);return $.createElement("div",{key:C.id,className:"p-3 sm:p-4 border rounded bg-blue-50"},$.createElement("div",{className:"flex justify-between items-start mb-2"},$.createElement("h3",{className:"font-semibold text-base sm:text-lg"},C.name),$.createElement("button",{onClick:()=>y(C.id),className:"text-red-500 hover:text-red-700 text-lg sm:text-xl px-2 py-1"},"×")),$.createElement("div",{className:"grid gap-3 sm:gap-4 text-xs sm:text-sm grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"},$.createElement("div",null,$.createElement("span",{className:"text-gray-600"},"Price:"),$.createElement("div",{className:"font-medium text-sm sm:text-base"},"฿",C.price)),$.createElement("div",null,$.createElement("span",{className:"text-gray-600"},"Daily Contribution:"),$.createElement("div",{className:"font-medium text-sm sm:text-base"},"฿",C.dailyContribution)),$.createElement("div",null,$.createElement("span",{className:"text-gray-600"},"Target Date:"),$.createElement("div",{className:"font-medium text-green-600 text-sm sm:text-base"},Z))),$.createElement("div",{className:"mt-2 text-gray-500 text-xs sm:text-sm"},H," days to reach your goal"))}))));function vN(){const[r,t]=Ke.useState(""),[n,s]=Ke.useState(""),[o,c]=Ke.useState(""),[f,g]=Ke.useState("monthly"),[p,y]=Ke.useState([]),[T,S]=Ke.useState(null),[C,H]=Ke.useState(!1),[Z,rt]=Ke.useState(!1),[W,St]=Ke.useState("income"),[ft,ct]=Ke.useState(""),[It,_t]=Ke.useState(""),[Ct,M]=Ke.useState(""),[b,R]=Ke.useState([]);Ke.useEffect(()=>{const tt=HR(_E,gt=>{S(gt),gt?O(gt.uid):(y([]),t(""),R([]))});return()=>tt()},[]);const O=async tt=>{H(!0);const gt=await cN(vl(Or,"users",tt,"data","salary"));gt.exists()&&t(gt.data().amount.toString());const Ce=fE(Ec(Or,"users",tt,"costs")),vi=(await gE(Ce)).docs.map(Xn=>({id:Xn.id,...Xn.data()}));y(vi);const Ei=fE(Ec(Or,"users",tt,"goals")),Kr=(await gE(Ei)).docs.map(Xn=>({id:Xn.id,...Xn.data()}));R(Kr),H(!1)},V=async tt=>{T&&await hN(vl(Or,"users",T.uid,"data","salary"),{amount:parseFloat(tt)||0,updatedAt:new Date})},P=async tt=>T?(await yE(Ec(Or,"users",T.uid,"costs"),{name:tt.name,amount:tt.amount,period:tt.period,createdAt:new Date})).id:null,I=async tt=>T?(await yE(Ec(Or,"users",T.uid,"goals"),{name:tt.name,price:tt.price,dailyContribution:tt.dailyContribution,createdAt:new Date})).id:null,Ee=async tt=>{T&&await pE(vl(Or,"users",T.uid,"costs",tt))},ee=async tt=>{T&&await pE(vl(Or,"users",T.uid,"goals",tt))},j=async()=>{await lI(_E,mN)},nt=async()=>{if(!n.trim()||!o.trim())return;const tt=parseFloat(o);if(isNaN(tt)||tt<=0)return;rt(!0);const gt={name:n.trim(),amount:tt,period:f},Ce=await P(gt);Ce&&(y([...p,{...gt,id:Ce}]),s(""),c("")),rt(!1)},lt=async()=>{if(!ft.trim()||!It.trim()||!Ct.trim())return;const tt=parseFloat(It),gt=parseFloat(Ct);if(isNaN(tt)||tt<=0||isNaN(gt)||gt<=0)return;const Ce={name:ft.trim(),price:tt,dailyContribution:gt},Ze=await I(Ce);Ze&&(R([...b,{...Ce,id:Ze}]),ct(""),_t(""),M(""))},kt=tt=>{tt.key==="Enter"&&(W==="expenses"?nt():W==="goals"&&lt())},D=async tt=>{const gt=tt.target.value;t(gt),gt&&!isNaN(parseFloat(gt))&&await V(gt)},X=()=>p.reduce((tt,gt)=>{switch(gt.period){case"daily":return tt+gt.amount*30;case"weekly":return tt+gt.amount*4.33;case"monthly":return tt+gt.amount;case"yearly":return tt+gt.amount/12;case"one-off":return tt+gt.amount;default:return tt}},0),it=()=>{const tt=new Date;return new Date(tt.getFullYear(),tt.getMonth()+1,0).getDate()},J=()=>{const tt=parseFloat(r)||0,gt=X(),Ce=tt-gt,Ze=it();return Ce/Ze},ht=(tt,gt)=>Math.ceil(tt/gt),Rt=tt=>{const gt=new Date;return gt.setDate(gt.getDate()+tt),gt.toLocaleDateString()},vt=async tt=>{await Ee(tt),y(p.filter(gt=>gt.id!==tt))},de=async tt=>{await ee(tt),R(b.filter(gt=>gt.id!==tt))};return $.createElement("div",{className:"w-screen p-4"},$.createElement("div",{className:"mb-4  p-2  border rounded bg-gray-50"},T?$.createElement("div",{className:"flex items-center justify-between"},$.createElement("div",{className:"flex items-center gap-2 "},$.createElement("img",{src:T.photoURL,alt:"Profile",className:"w-6 h-6  rounded-full"}),$.createElement("h2",{className:"text-lg  font-bold"},"Daily Free Money"),$.createElement("h2",{className:"text-lg   font-bold text-green-600"},"฿",J().toFixed(2)))):$.createElement("div",{className:"text-center"},$.createElement("p",{className:"mb-2  text-sm "},"Please sign in to use the budget dashboard"),$.createElement("button",{onClick:j,className:"px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 mx-auto text-sm "},$.createElement("svg",{className:"w-4 h-4 ",viewBox:"0 0 24 24"},$.createElement("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),$.createElement("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),$.createElement("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),$.createElement("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})),"Sign in with Google"))),T&&$.createElement($.Fragment,null,C?$.createElement("div",{className:"text-center py-4 "},$.createElement("div",{className:"inline-block animate-spin rounded-full h-6 w-6  border-b-2 border-blue-500"}),$.createElement("p",{className:"mt-2 text-gray-600 text-sm "},"Loading your budget data...")):$.createElement($.Fragment,null,$.createElement("div",{className:"border"},$.createElement("div",{className:"border"},$.createElement("nav",{className:"flex"},[{id:"income",name:"Income"},{id:"expenses",name:"Expenses"},{id:"goals",name:"Goals"},{id:"report",name:"Report"}].map(tt=>$.createElement("button",{key:tt.id,onClick:()=>St(tt.id),className:`py-2 px-1 border-b-2 font-medium text-xs whitespace-nowrap flex-1  ${W===tt.id?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`},tt.name))))),$.createElement("div",{className:"mt-4 "},W==="income"&&$.createElement(gN,{monthlySalary:r,handleSalaryChange:D}),W==="expenses"&&$.createElement(pN,{costName:n,setCostName:s,costAmount:o,setCostAmount:c,period:f,setPeriod:g,costs:p,addingCost:Z,handleAddCost:nt,handleKeyPress:kt,removeCost:vt}),W==="report"&&$.createElement(yN,{monthlySalary:r,costs:p,calculateMonthlyCosts:X,calculateDailyFreeMoney:J}),W==="goals"&&$.createElement(_N,{goalName:ft,setGoalName:ct,goalPrice:It,setGoalPrice:_t,dailyContribution:Ct,setDailyContribution:M,goals:b,handleAddGoal:lt,handleKeyPress:kt,removeGoal:de,calculateGoalDays:ht,calculateGoalDate:Rt})))))}Xb.createRoot(document.getElementById("root")).render($.createElement(Ke.StrictMode,null,$.createElement(vN,null)));
