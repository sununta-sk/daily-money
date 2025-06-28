(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function qb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ed={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Hb(){if(S_)return wt;S_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),R=Symbol.iterator;function D(C){return C===null||typeof C!="object"?null:(C=R&&C[R]||C["@@iterator"],typeof C=="function"?C:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,rt={};function J(C,$,it){this.props=C,this.context=$,this.refs=rt,this.updater=it||H}J.prototype.isReactComponent={},J.prototype.setState=function(C,$){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,$,"setState")},J.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function St(){}St.prototype=J.prototype;function dt(C,$,it){this.props=C,this.context=$,this.refs=rt,this.updater=it||H}var ht=dt.prototype=new St;ht.constructor=dt,W(ht,J.prototype),ht.isPureReactComponent=!0;var It=Array.isArray,_t={H:null,A:null,T:null,S:null,V:null},Ct=Object.prototype.hasOwnProperty;function M(C,$,it,tt,ft,Rt){return it=Rt.ref,{$$typeof:r,type:C,key:$,ref:it!==void 0?it:null,props:Rt}}function b(C,$){return M(C.type,$,void 0,void 0,void 0,C.props)}function w(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function O(C){var $={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(it){return $[it]})}var V=/\/+/g;function P(C,$){return typeof C=="object"&&C!==null&&C.key!=null?O(""+C.key):$.toString(36)}function I(){}function Ae(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(I,I):(C.status="pending",C.then(function($){C.status==="pending"&&(C.status="fulfilled",C.value=$)},function($){C.status==="pending"&&(C.status="rejected",C.reason=$)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function ne(C,$,it,tt,ft){var Rt=typeof C;(Rt==="undefined"||Rt==="boolean")&&(C=null);var vt=!1;if(C===null)vt=!0;else switch(Rt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(C.$$typeof){case r:case t:vt=!0;break;case T:return vt=C._init,ne(vt(C._payload),$,it,tt,ft)}}if(vt)return ft=ft(C),vt=tt===""?"."+P(C,0):tt,It(ft)?(it="",vt!=null&&(it=vt.replace(V,"$&/")+"/"),ne(ft,$,it,"",function(Tn){return Tn})):ft!=null&&(w(ft)&&(ft=b(ft,it+(ft.key==null||C&&C.key===ft.key?"":(""+ft.key).replace(V,"$&/")+"/")+vt)),$.push(ft)),1;vt=0;var ge=tt===""?".":tt+":";if(It(C))for(var Yt=0;Yt<C.length;Yt++)tt=C[Yt],Rt=ge+P(tt,Yt),vt+=ne(tt,$,it,Rt,ft);else if(Yt=D(C),typeof Yt=="function")for(C=Yt.call(C),Yt=0;!(tt=C.next()).done;)tt=tt.value,Rt=ge+P(tt,Yt++),vt+=ne(tt,$,it,Rt,ft);else if(Rt==="object"){if(typeof C.then=="function")return ne(Ae(C),$,it,tt,ft);throw $=String(C),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return vt}function j(C,$,it){if(C==null)return C;var tt=[],ft=0;return ne(C,tt,"","",function(Rt){return $.call(it,Rt,ft++)}),tt}function nt(C){if(C._status===-1){var $=C._result;$=$(),$.then(function(it){(C._status===0||C._status===-1)&&(C._status=1,C._result=it)},function(it){(C._status===0||C._status===-1)&&(C._status=2,C._result=it)}),C._status===-1&&(C._status=0,C._result=$)}if(C._status===1)return C._result.default;throw C._result}var ut=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function kt(){}return wt.Children={map:j,forEach:function(C,$,it){j(C,function(){$.apply(this,arguments)},it)},count:function(C){var $=0;return j(C,function(){$++}),$},toArray:function(C){return j(C,function($){return $})||[]},only:function(C){if(!w(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},wt.Component=J,wt.Fragment=n,wt.Profiler=o,wt.PureComponent=dt,wt.StrictMode=s,wt.Suspense=p,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_t,wt.__COMPILER_RUNTIME={__proto__:null,c:function(C){return _t.H.useMemoCache(C)}},wt.cache=function(C){return function(){return C.apply(null,arguments)}},wt.cloneElement=function(C,$,it){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var tt=W({},C.props),ft=C.key,Rt=void 0;if($!=null)for(vt in $.ref!==void 0&&(Rt=void 0),$.key!==void 0&&(ft=""+$.key),$)!Ct.call($,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&$.ref===void 0||(tt[vt]=$[vt]);var vt=arguments.length-2;if(vt===1)tt.children=it;else if(1<vt){for(var ge=Array(vt),Yt=0;Yt<vt;Yt++)ge[Yt]=arguments[Yt+2];tt.children=ge}return M(C.type,ft,void 0,void 0,Rt,tt)},wt.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},wt.createElement=function(C,$,it){var tt,ft={},Rt=null;if($!=null)for(tt in $.key!==void 0&&(Rt=""+$.key),$)Ct.call($,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(ft[tt]=$[tt]);var vt=arguments.length-2;if(vt===1)ft.children=it;else if(1<vt){for(var ge=Array(vt),Yt=0;Yt<vt;Yt++)ge[Yt]=arguments[Yt+2];ft.children=ge}if(C&&C.defaultProps)for(tt in vt=C.defaultProps,vt)ft[tt]===void 0&&(ft[tt]=vt[tt]);return M(C,Rt,void 0,void 0,null,ft)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(C){return{$$typeof:g,render:C}},wt.isValidElement=w,wt.lazy=function(C){return{$$typeof:T,_payload:{_status:-1,_result:C},_init:nt}},wt.memo=function(C,$){return{$$typeof:y,type:C,compare:$===void 0?null:$}},wt.startTransition=function(C){var $=_t.T,it={};_t.T=it;try{var tt=C(),ft=_t.S;ft!==null&&ft(it,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(kt,ut)}catch(Rt){ut(Rt)}finally{_t.T=$}},wt.unstable_useCacheRefresh=function(){return _t.H.useCacheRefresh()},wt.use=function(C){return _t.H.use(C)},wt.useActionState=function(C,$,it){return _t.H.useActionState(C,$,it)},wt.useCallback=function(C,$){return _t.H.useCallback(C,$)},wt.useContext=function(C){return _t.H.useContext(C)},wt.useDebugValue=function(){},wt.useDeferredValue=function(C,$){return _t.H.useDeferredValue(C,$)},wt.useEffect=function(C,$,it){var tt=_t.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return tt.useEffect(C,$)},wt.useId=function(){return _t.H.useId()},wt.useImperativeHandle=function(C,$,it){return _t.H.useImperativeHandle(C,$,it)},wt.useInsertionEffect=function(C,$){return _t.H.useInsertionEffect(C,$)},wt.useLayoutEffect=function(C,$){return _t.H.useLayoutEffect(C,$)},wt.useMemo=function(C,$){return _t.H.useMemo(C,$)},wt.useOptimistic=function(C,$){return _t.H.useOptimistic(C,$)},wt.useReducer=function(C,$,it){return _t.H.useReducer(C,$,it)},wt.useRef=function(C){return _t.H.useRef(C)},wt.useState=function(C){return _t.H.useState(C)},wt.useSyncExternalStore=function(C,$,it){return _t.H.useSyncExternalStore(C,$,it)},wt.useTransition=function(){return _t.H.useTransition()},wt.version="19.1.0",wt}var w_;function fm(){return w_||(w_=1,Ed.exports=Hb()),Ed.exports}var Xe=fm();const Z=qb(Xe);var Td={exports:{}},yl={},Ad={exports:{}},bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function jb(){return R_||(R_=1,function(r){function t(j,nt){var ut=j.length;j.push(nt);t:for(;0<ut;){var kt=ut-1>>>1,C=j[kt];if(0<o(C,nt))j[kt]=nt,j[ut]=C,ut=kt;else break t}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var nt=j[0],ut=j.pop();if(ut!==nt){j[0]=ut;t:for(var kt=0,C=j.length,$=C>>>1;kt<$;){var it=2*(kt+1)-1,tt=j[it],ft=it+1,Rt=j[ft];if(0>o(tt,ut))ft<C&&0>o(Rt,tt)?(j[kt]=Rt,j[ft]=ut,kt=ft):(j[kt]=tt,j[it]=ut,kt=it);else if(ft<C&&0>o(Rt,ut))j[kt]=Rt,j[ft]=ut,kt=ft;else break t}}return nt}function o(j,nt){var ut=j.sortIndex-nt.sortIndex;return ut!==0?ut:j.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],y=[],T=1,R=null,D=3,H=!1,W=!1,rt=!1,J=!1,St=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;function It(j){for(var nt=n(y);nt!==null;){if(nt.callback===null)s(y);else if(nt.startTime<=j)s(y),nt.sortIndex=nt.expirationTime,t(p,nt);else break;nt=n(y)}}function _t(j){if(rt=!1,It(j),!W)if(n(p)!==null)W=!0,Ct||(Ct=!0,P());else{var nt=n(y);nt!==null&&ne(_t,nt.startTime-j)}}var Ct=!1,M=-1,b=5,w=-1;function O(){return J?!0:!(r.unstable_now()-w<b)}function V(){if(J=!1,Ct){var j=r.unstable_now();w=j;var nt=!0;try{t:{W=!1,rt&&(rt=!1,dt(M),M=-1),H=!0;var ut=D;try{e:{for(It(j),R=n(p);R!==null&&!(R.expirationTime>j&&O());){var kt=R.callback;if(typeof kt=="function"){R.callback=null,D=R.priorityLevel;var C=kt(R.expirationTime<=j);if(j=r.unstable_now(),typeof C=="function"){R.callback=C,It(j),nt=!0;break e}R===n(p)&&s(p),It(j)}else s(p);R=n(p)}if(R!==null)nt=!0;else{var $=n(y);$!==null&&ne(_t,$.startTime-j),nt=!1}}break t}finally{R=null,D=ut,H=!1}nt=void 0}}finally{nt?P():Ct=!1}}}var P;if(typeof ht=="function")P=function(){ht(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Ae=I.port2;I.port1.onmessage=V,P=function(){Ae.postMessage(null)}}else P=function(){St(V,0)};function ne(j,nt){M=St(function(){j(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(j){switch(D){case 1:case 2:case 3:var nt=3;break;default:nt=D}var ut=D;D=nt;try{return j()}finally{D=ut}},r.unstable_requestPaint=function(){J=!0},r.unstable_runWithPriority=function(j,nt){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ut=D;D=j;try{return nt()}finally{D=ut}},r.unstable_scheduleCallback=function(j,nt,ut){var kt=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?kt+ut:kt):ut=kt,j){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=ut+C,j={id:T++,callback:nt,priorityLevel:j,startTime:ut,expirationTime:C,sortIndex:-1},ut>kt?(j.sortIndex=ut,t(y,j),n(p)===null&&j===n(y)&&(rt?(dt(M),M=-1):rt=!0,ne(_t,ut-kt))):(j.sortIndex=C,t(p,j),W||H||(W=!0,Ct||(Ct=!0,P()))),j},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(j){var nt=D;return function(){var ut=D;D=nt;try{return j.apply(this,arguments)}finally{D=ut}}}}(bd)),bd}var I_;function Fb(){return I_||(I_=1,Ad.exports=jb()),Ad.exports}var Sd={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Gb(){if(C_)return Ke;C_=1;var r=fm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,y,T){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:R==null?null:""+R,children:p,containerInfo:y,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(p,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,T)},Ke.flushSync=function(p){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=T,s.d.f()}},Ke.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Ke.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ke.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var T=y.as,R=g(T,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,H=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:R,integrity:D,fetchPriority:H}):T==="script"&&s.d.X(p,{crossOrigin:R,integrity:D,fetchPriority:H,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ke.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=g(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Ke.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,R=g(T,y.crossOrigin);s.d.L(p,T,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ke.preloadModule=function(p,y){if(typeof p=="string")if(y){var T=g(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Ke.requestFormReset=function(p){s.d.r(p)},Ke.unstable_batchedUpdates=function(p,y){return p(y)},Ke.useFormState=function(p,y,T){return f.H.useFormState(p,y,T)},Ke.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ke.version="19.1.0",Ke}var D_;function Qb(){if(D_)return Sd.exports;D_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sd.exports=Gb(),Sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function Kb(){if(N_)return yl;N_=1;var r=Fb(),t=fm(),n=Qb();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===l)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,R=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),rt=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),dt=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),It=Symbol.for("react.forward_ref"),_t=Symbol.for("react.suspense"),Ct=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case J:return"Profiler";case rt:return"StrictMode";case _t:return"Suspense";case Ct:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case ht:return(e.displayName||"Context")+".Provider";case dt:return(e._context.displayName||"Context")+".Consumer";case It:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:Ae(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return Ae(e(i))}catch{}}return null}var ne=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},kt=[],C=-1;function $(e){return{current:e}}function it(e){0>C||(e.current=kt[C],kt[C]=null,C--)}function tt(e,i){C++,kt[C]=e.current,e.current=i}var ft=$(null),Rt=$(null),vt=$(null),ge=$(null);function Yt(e,i){switch(tt(vt,i),tt(Rt,e),tt(ft,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Wy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Wy(i),e=Jy(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(ft),tt(ft,e)}function Tn(){it(ft),it(Rt),it(vt)}function Zn(e){e.memoizedState!==null&&tt(ge,e);var i=ft.current,a=Jy(i,e.type);i!==a&&(tt(Rt,e),tt(ft,a))}function kn(e){Rt.current===e&&(it(ft),it(Rt)),ge.current===e&&(it(ge),fl._currentValue=ut)}var Ti=Object.prototype.hasOwnProperty,Ai=r.unstable_scheduleCallback,G=r.unstable_cancelCallback,st=r.unstable_shouldYield,oe=r.unstable_requestPaint,Ne=r.unstable_now,uo=r.unstable_getCurrentPriorityLevel,$r=r.unstable_ImmediatePriority,Zr=r.unstable_UserBlockingPriority,bi=r.unstable_NormalPriority,Si=r.unstable_LowPriority,Ks=r.unstable_IdlePriority,co=r.log,Kl=r.unstable_setDisableYieldValue,le=null,Gt=null;function hn(e){if(typeof co=="function"&&Kl(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(le,e)}catch{}}var Ge=Math.clz32?Math.clz32:Wr,Yl=Math.log,Th=Math.LN2;function Wr(e){return e>>>=0,e===0?32:31-(Yl(e)/Th|0)|0}var Jr=256,ts=4194304;function Un(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ys(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Un(l):(v&=E,v!==0?h=Un(v):a||(a=E&~e,a!==0&&(h=Un(a))))):(E=l&~d,E!==0?h=Un(E):v!==0?h=Un(v):a||(a=l&~e,a!==0&&(h=Un(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function es(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ho(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fo(){var e=Jr;return Jr<<=1,(Jr&4194048)===0&&(Jr=256),e}function mo(){var e=ts;return ts<<=1,(ts&62914560)===0&&(ts=4194304),e}function wi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ri(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function go(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,S=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-Ge(a),K=1<<F;E[F]=0,S[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~K}l!==0&&Wn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Wn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ge(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function po(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ge(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function sr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ar(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:__(e.type))}function Xl(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ie=Math.random().toString(36).slice(2),be="__reactFiber$"+ie,pe="__reactProps$"+ie,An="__reactContainer$"+ie,yo="__reactEvents$"+ie,Ah="__reactListeners$"+ie,or="__reactHandles$"+ie,$l="__reactResources$"+ie,ns="__reactMarker$"+ie;function lr(e){delete e[be],delete e[pe],delete e[yo],delete e[Ah],delete e[or]}function Ii(e){var i=e[be];if(i)return i;for(var a=e.parentNode;a;){if(i=a[An]||a[be]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=i_(e);e!==null;){if(a=e[be])return a;e=i_(e)}return i}e=a,a=e.parentNode}return null}function Jn(e){if(e=e[be]||e[An]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function ti(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function tn(e){var i=e[$l];return i||(i=e[$l]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function he(e){e[ns]=!0}var _o=new Set,$s={};function Ln(e,i){Ci(e,i),Ci(e+"Capture",i)}function Ci(e,i){for($s[e]=i,e=0;e<i.length;e++)_o.add(i[e])}var Zl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wl={},is={};function Jl(e){return Ti.call(is,e)?!0:Ti.call(Wl,e)?!1:Zl.test(e)?is[e]=!0:(Wl[e]=!0,!1)}function ur(e,i,a){if(Jl(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function ei(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ue(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var rs,tu;function Di(e){if(rs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);rs=i&&i[1]||"",tu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rs+e+tu}var Zs=!1;function Ws(e,i){if(!e||Zs)return"";Zs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var S=v.split(`
`),L=E.split(`
`);for(h=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===S.length||h===L.length)for(l=S.length-1,h=L.length-1;1<=l&&0<=h&&S[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(S[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||S[l]!==L[h]){var F=`
`+S[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{Zs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Di(a):""}function vo(e){switch(e.tag){case 26:case 27:case 5:return Di(e.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 15:return Ws(e.type,!1);case 11:return Ws(e.type.render,!1);case 1:return Ws(e.type,!0);case 31:return Di("Activity");default:return""}}function Js(e){try{var i="";do i+=vo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function en(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function bh(e){var i=Eo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ta(e){e._valueTracker||(e._valueTracker=bh(e))}function To(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=Eo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sh=/[\n"\\]/g;function ye(e){return e.replace(Sh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function fn(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+en(i)):e.value!==""+en(i)&&(e.value=""+en(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?cr(e,v,en(i)):a!=null?cr(e,v,en(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+en(E):e.removeAttribute("name")}function as(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+en(a):"",i=i!=null?""+en(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function cr(e,i,a){i==="number"&&ss(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ni(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+en(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Xt(e,i,a){if(i!=null&&(i=""+en(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+en(a):""}function os(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ne(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=en(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function bn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ls=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||ls.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Ao(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&eu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&eu(e,d,i[d])}function bo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ea(e){return Rh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Oi=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mi=null,Vi=null;function So(e){var i=Jn(e);if(i&&(e=i.stateNode)){var a=e[pe]||null;t:switch(e=i.stateNode,i.type){case"input":if(fn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ye(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[pe]||null;if(!h)throw Error(s(90));fn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&To(l)}break t;case"textarea":Xt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ni(e,!!a.multiple,i,!1)}}}var ni=!1;function nu(e,i,a){if(ni)return e(i,a);ni=!0;try{var l=e(i);return l}finally{if(ni=!1,(Mi!==null||Vi!==null)&&(Xu(),Mi&&(i=Mi,e=Vi,Vi=Mi=null,So(i),e)))for(i=0;i<e.length;i++)So(e[i])}}function us(e,i){var a=e.stateNode;if(a===null)return null;var l=a[pe]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wn=!1;if(zn)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){wn=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{wn=!1}var ii=null,hr=null,xi=null;function wo(){if(xi)return xi;var e,i=hr,a=i.length,l,h="value"in ii?ii.value:ii.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return xi=h.slice(e,1<l?1-l:void 0)}function ri(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function Ro(){return!1}function Oe(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?si:Ro,this.isPropagationStopped=Ro,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Oe(jt),hs=T({},jt,{view:0,detail:0}),iu=Oe(hs),ia,ra,ai,fs=T({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(ia=e.screenX-ai.screenX,ra=e.screenY-ai.screenY):ra=ia=0,ai=e),ia)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),Rn=Oe(fs),ru=T({},fs,{dataTransfer:0}),Ih=Oe(ru),ds=T({},hs,{relatedTarget:0}),sa=Oe(ds),Io=T({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),aa=Oe(Io),su=T({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oa=Oe(su),Ch=T({},jt,{data:0}),Co=Oe(Ch),ms={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},au={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ou={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Do(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ou[e])?!!i[e]:!1}function gs(){return Do}var lu=T({},hs,{key:function(e){if(e.key){var i=ms[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?au[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),la=Oe(lu),uu=T({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),No=Oe(uu),Pi=T({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),cu=Oe(Pi),hu=T({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),fu=Oe(hu),du=T({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ua=Oe(du),nn=T({},jt,{newState:0,oldState:0}),mu=Oe(nn),gu=[9,13,27,32],oi=zn&&"CompositionEvent"in window,u=null;zn&&"documentMode"in document&&(u=document.documentMode);var m=zn&&"TextEvent"in window&&!u,_=zn&&(!oi||u&&8<u&&11>=u),A=" ",k=!1;function q(e,i){switch(e){case"keyup":return gu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function et(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Se(e,i){switch(e){case"compositionend":return et(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return e=i.data,e===A&&k?null:e;default:return null}}function Lt(e,i){if(Ut)return e==="compositionend"||!oi&&q(e,i)?(e=wo(),xi=hr=ii=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Me={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function we(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Me[e.type]:i==="textarea"}function ki(e,i,a,l){Mi?Vi?Vi.push(l):Vi=[l]:Mi=l,i=ec(i,"onChange"),0<i.length&&(a=new na("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Le=null,li=null;function Oo(e){Ky(e,0)}function pu(e){var i=ti(e);if(To(i))return e}function mg(e,i){if(e==="change")return i}var gg=!1;if(zn){var Dh;if(zn){var Nh="oninput"in document;if(!Nh){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),Nh=typeof pg.oninput=="function"}Dh=Nh}else Dh=!1;gg=Dh&&(!document.documentMode||9<document.documentMode)}function yg(){Le&&(Le.detachEvent("onpropertychange",_g),li=Le=null)}function _g(e){if(e.propertyName==="value"&&pu(li)){var i=[];ki(i,li,e,Sn(e)),nu(Oo,i)}}function yA(e,i,a){e==="focusin"?(yg(),Le=i,li=a,Le.attachEvent("onpropertychange",_g)):e==="focusout"&&yg()}function _A(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pu(li)}function vA(e,i){if(e==="click")return pu(i)}function EA(e,i){if(e==="input"||e==="change")return pu(i)}function TA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var dn=typeof Object.is=="function"?Object.is:TA;function Mo(e,i){if(dn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Ti.call(i,h)||!dn(e[h],i[h]))return!1}return!0}function vg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eg(e,i){var a=vg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vg(a)}}function Tg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Tg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Ag(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ss(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ss(e.document)}return i}function Oh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var AA=zn&&"documentMode"in document&&11>=document.documentMode,ca=null,Mh=null,Vo=null,Vh=!1;function bg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vh||ca==null||ca!==ss(l)||(l=ca,"selectionStart"in l&&Oh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vo&&Mo(Vo,l)||(Vo=l,l=ec(Mh,"onSelect"),0<l.length&&(i=new na("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ca)))}function ps(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var ha={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},xh={},Sg={};zn&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function ys(e){if(xh[e])return xh[e];if(!ha[e])return e;var i=ha[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Sg)return xh[e]=i[a];return e}var wg=ys("animationend"),Rg=ys("animationiteration"),Ig=ys("animationstart"),bA=ys("transitionrun"),SA=ys("transitionstart"),wA=ys("transitioncancel"),Cg=ys("transitionend"),Dg=new Map,Ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ph.push("scrollEnd");function Bn(e,i){Dg.set(e,i),Ln(i,[e])}var Ng=new WeakMap;function In(e,i){if(typeof e=="object"&&e!==null){var a=Ng.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Js(i)},Ng.set(e,i),i)}return{value:e,source:i,stack:Js(i)}}var Cn=[],fa=0,kh=0;function yu(){for(var e=fa,i=kh=fa=0;i<e;){var a=Cn[i];Cn[i++]=null;var l=Cn[i];Cn[i++]=null;var h=Cn[i];Cn[i++]=null;var d=Cn[i];if(Cn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Og(a,h,d)}}function _u(e,i,a,l){Cn[fa++]=e,Cn[fa++]=i,Cn[fa++]=a,Cn[fa++]=l,kh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Uh(e,i,a,l){return _u(e,i,a,l),vu(e)}function da(e,i){return _u(e,null,null,i),vu(e)}function Og(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ge(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function vu(e){if(50<rl)throw rl=0,Ff=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ma={};function RA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(e,i,a,l){return new RA(e,i,a,l)}function Lh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ui(e,i){var a=e.alternate;return a===null?(a=mn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Eu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Lh(e)&&(v=1);else if(typeof e=="string")v=Cb(e,a,ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=mn(31,a,i,h),e.elementType=w,e.lanes=d,e;case W:return _s(a.children,h,d,i);case rt:v=8,h|=24;break;case J:return e=mn(12,a,i,h|2),e.elementType=J,e.lanes=d,e;case _t:return e=mn(13,a,i,h),e.elementType=_t,e.lanes=d,e;case Ct:return e=mn(19,a,i,h),e.elementType=Ct,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case St:case ht:v=10;break t;case dt:v=9;break t;case It:v=11;break t;case M:v=14;break t;case b:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=mn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function _s(e,i,a,l){return e=mn(7,e,l,i),e.lanes=a,e}function zh(e,i,a){return e=mn(6,e,null,i),e.lanes=a,e}function Bh(e,i,a){return i=mn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ga=[],pa=0,Tu=null,Au=0,Dn=[],Nn=0,vs=null,Li=1,zi="";function Es(e,i){ga[pa++]=Au,ga[pa++]=Tu,Tu=e,Au=i}function Vg(e,i,a){Dn[Nn++]=Li,Dn[Nn++]=zi,Dn[Nn++]=vs,vs=e;var l=Li;e=zi;var h=32-Ge(l)-1;l&=~(1<<h),a+=1;var d=32-Ge(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Li=1<<32-Ge(i)+h|a<<h|l,zi=d+e}else Li=1<<d|a<<h|l,zi=e}function qh(e){e.return!==null&&(Es(e,1),Vg(e,1,0))}function Hh(e){for(;e===Tu;)Tu=ga[--pa],ga[pa]=null,Au=ga[--pa],ga[pa]=null;for(;e===vs;)vs=Dn[--Nn],Dn[Nn]=null,zi=Dn[--Nn],Dn[Nn]=null,Li=Dn[--Nn],Dn[Nn]=null}var rn=null,ue=null,Ht=!1,Ts=null,ui=!1,jh=Error(s(519));function As(e){var i=Error(s(418,""));throw ko(In(i,e)),jh}function xg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[be]=e,i[pe]=l,a){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(a=0;a<al.length;a++)Vt(al[a],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":Vt("invalid",i),as(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ta(i);break;case"select":Vt("invalid",i);break;case"textarea":Vt("invalid",i),os(i,l.value,l.defaultValue,l.children),ta(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Zy(i.textContent,a)?(l.popover!=null&&(Vt("beforetoggle",i),Vt("toggle",i)),l.onScroll!=null&&Vt("scroll",i),l.onScrollEnd!=null&&Vt("scrollend",i),l.onClick!=null&&(i.onclick=nc),i=!0):i=!1,i||As(e)}function Pg(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:rn=rn.return}}function xo(e){if(e!==rn)return!1;if(!Ht)return Pg(e),Ht=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ad(e.type,e.memoizedProps)),a=!a),a&&ue&&As(e),Pg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){ue=Hn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}ue=null}}else i===27?(i=ue,Ir(e.type)?(e=cd,cd=null,ue=e):ue=i):ue=rn?Hn(e.stateNode.nextSibling):null;return!0}function Po(){ue=rn=null,Ht=!1}function kg(){var e=Ts;return e!==null&&(on===null?on=e:on.push.apply(on,e),Ts=null),e}function ko(e){Ts===null?Ts=[e]:Ts.push(e)}var Fh=$(null),bs=null,Bi=null;function fr(e,i,a){tt(Fh,i._currentValue),i._currentValue=a}function qi(e){e._currentValue=Fh.current,it(Fh)}function Gh(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function Qh(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var S=0;S<i.length;S++)if(E.context===i[S]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Gh(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Gh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Uo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;dn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===ge.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(fl):e=[fl])}h=h.return}e!==null&&Qh(i,e,a,l),i.flags|=262144}function bu(e){for(e=e.firstContext;e!==null;){if(!dn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){bs=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Ug(bs,e)}function Su(e,i){return bs===null&&Ss(e),Ug(e,i)}function Ug(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Bi===null){if(e===null)throw Error(s(308));Bi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Bi=Bi.next=i;return a}var IA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},CA=r.unstable_scheduleCallback,DA=r.unstable_NormalPriority,Re={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kh(){return{controller:new IA,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&CA(DA,function(){e.controller.abort()})}var zo=null,Yh=0,ya=0,_a=null;function NA(e,i){if(zo===null){var a=zo=[];Yh=0,ya=Zf(),_a={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Yh++,i.then(Lg,Lg),i}function Lg(){if(--Yh===0&&zo!==null){_a!==null&&(_a.status="fulfilled");var e=zo;zo=null,ya=0,_a=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function OA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var zg=j.S;j.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&NA(e,i),zg!==null&&zg(e,i)};var ws=$(null);function Xh(){var e=ws.current;return e!==null?e:te.pooledCache}function wu(e,i){i===null?tt(ws,ws.current):tt(ws,i.pool)}function Bg(){var e=Xh();return e===null?null:{parent:Re._currentValue,pool:e}}var Bo=Error(s(460)),qg=Error(s(474)),Ru=Error(s(542)),$h={then:function(){}};function Hg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Iu(){}function jg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Iu,Iu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Gg(e),e;default:if(typeof i.status=="string")i.then(Iu,Iu);else{if(e=te,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Gg(e),e}throw qo=i,Bo}}var qo=null;function Fg(){if(qo===null)throw Error(s(459));var e=qo;return qo=null,e}function Gg(e){if(e===Bo||e===Ru)throw Error(s(483))}var dr=!1;function Zh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=vu(e),Og(e,null,a),i}return _u(e,l,i,a),vu(e)}function Ho(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,po(e,a)}}function Jh(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var tf=!1;function jo(){if(tf){var e=_a;if(e!==null)throw e}}function Fo(e,i,a,l){tf=!1;var h=e.updateQueue;dr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var S=E,L=S.next;S.next=null,v===null?d=L:v.next=L,v=S;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==v&&(E===null?F.firstBaseUpdate=L:E.next=L,F.lastBaseUpdate=S))}if(d!==null){var K=h.baseState;v=0,F=L=S=null,E=d;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(zt&z)===z:(l&z)===z){z!==0&&z===ya&&(tf=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Et=e,gt=E;z=i;var Wt=a;switch(gt.tag){case 1:if(Et=gt.payload,typeof Et=="function"){K=Et.call(Wt,K,z);break t}K=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=gt.payload,z=typeof Et=="function"?Et.call(Wt,K,z):Et,z==null)break t;K=T({},K,z);break t;case 2:dr=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(L=F=B,S=K):F=F.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(S=K),h.baseState=S,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),br|=v,e.lanes=v,e.memoizedState=K}}function Qg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Kg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Qg(a[e],i)}var va=$(null),Cu=$(0);function Yg(e,i){e=Yi,tt(Cu,e),tt(va,i),Yi=e|i.baseLanes}function ef(){tt(Cu,Yi),tt(va,va.current)}function nf(){Yi=Cu.current,it(va),it(Cu)}var pr=0,Dt=null,$t=null,_e=null,Du=!1,Ea=!1,Rs=!1,Nu=0,Go=0,Ta=null,MA=0;function fe(){throw Error(s(321))}function rf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!dn(e[a],i[a]))return!1;return!0}function sf(e,i,a,l,h,d){return pr=d,Dt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,j.H=e===null||e.memoizedState===null?Op:Mp,Rs=!1,d=a(l,h),Rs=!1,Ea&&(d=$g(i,a,l,h)),Xg(e),d}function Xg(e){j.H=ku;var i=$t!==null&&$t.next!==null;if(pr=0,_e=$t=Dt=null,Du=!1,Go=0,Ta=null,i)throw Error(s(300));e===null||Ve||(e=e.dependencies,e!==null&&bu(e)&&(Ve=!0))}function $g(e,i,a,l){Dt=e;var h=0;do{if(Ea&&(Ta=null),Go=0,Ea=!1,25<=h)throw Error(s(301));if(h+=1,_e=$t=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}j.H=zA,d=i(a,l)}while(Ea);return d}function VA(){var e=j.H,i=e.useState()[0];return i=typeof i.then=="function"?Qo(i):i,e=e.useState()[0],($t!==null?$t.memoizedState:null)!==e&&(Dt.flags|=1024),i}function af(){var e=Nu!==0;return Nu=0,e}function of(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function lf(e){if(Du){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Du=!1}pr=0,_e=$t=Dt=null,Ea=!1,Go=Nu=0,Ta=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Dt.memoizedState=_e=e:_e=_e.next=e,_e}function ve(){if($t===null){var e=Dt.alternate;e=e!==null?e.memoizedState:null}else e=$t.next;var i=_e===null?Dt.memoizedState:_e.next;if(i!==null)_e=i,$t=e;else{if(e===null)throw Dt.alternate===null?Error(s(467)):Error(s(310));$t=e,e={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},_e===null?Dt.memoizedState=_e=e:_e=_e.next=e}return _e}function uf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var i=Go;return Go+=1,Ta===null&&(Ta=[]),e=jg(Ta,e,i),i=Dt,(_e===null?i.memoizedState:_e.next)===null&&(i=i.alternate,j.H=i===null||i.memoizedState===null?Op:Mp),e}function Ou(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===ht)return Qe(e)}throw Error(s(438,String(e)))}function cf(e){var i=null,a=Dt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=uf(),Dt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=O;return i.index++,a}function Hi(e,i){return typeof i=="function"?i(e):i}function Mu(e){var i=ve();return hf(i,$t,e)}function hf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,S=null,L=i,F=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(zt&K)===K:(pr&K)===K){var z=L.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===ya&&(F=!0);else if((pr&z)===z){L=L.next,z===ya&&(F=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(E=S=K,v=d):S=S.next=K,Dt.lanes|=z,br|=z;K=L.action,Rs&&a(d,K),d=L.hasEagerState?L.eagerState:a(d,K)}else z={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(E=S=z,v=d):S=S.next=z,Dt.lanes|=K,br|=K;L=L.next}while(L!==null&&L!==i);if(S===null?v=d:S.next=E,!dn(d,e.memoizedState)&&(Ve=!0,F&&(a=_a,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=S,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ff(e){var i=ve(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);dn(d,i.memoizedState)||(Ve=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Zg(e,i,a){var l=Dt,h=ve(),d=Ht;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!dn(($t||h).memoizedState,a);v&&(h.memoizedState=a,Ve=!0),h=h.queue;var E=tp.bind(null,l,h,e);if(Ko(2048,8,E,[e]),h.getSnapshot!==i||v||_e!==null&&_e.memoizedState.tag&1){if(l.flags|=2048,Aa(9,Vu(),Jg.bind(null,l,h,a,i),null),te===null)throw Error(s(349));d||(pr&124)!==0||Wg(l,i,a)}return a}function Wg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Dt.updateQueue,i===null?(i=uf(),Dt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Jg(e,i,a,l){i.value=a,i.getSnapshot=l,ep(i)&&np(e)}function tp(e,i,a){return a(function(){ep(i)&&np(e)})}function ep(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!dn(e,a)}catch{return!0}}function np(e){var i=da(e,2);i!==null&&vn(i,e,2)}function df(e){var i=sn();if(typeof e=="function"){var a=e;if(e=a(),Rs){hn(!0);try{a()}finally{hn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},i}function ip(e,i,a,l){return e.baseState=a,hf(e,$t,typeof l=="function"?l:Hi)}function xA(e,i,a,l,h){if(Pu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};j.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,rp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function rp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=j.T,v={};j.T=v;try{var E=a(h,l),S=j.S;S!==null&&S(v,E),sp(e,i,E)}catch(L){mf(e,i,L)}finally{j.T=d}}else try{d=a(h,l),sp(e,i,d)}catch(L){mf(e,i,L)}}function sp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ap(e,i,l)},function(l){return mf(e,i,l)}):ap(e,i,a)}function ap(e,i,a){i.status="fulfilled",i.value=a,op(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,rp(e,a)))}function mf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,op(i),i=i.next;while(i!==l)}e.action=null}function op(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function lp(e,i){return i}function up(e,i){if(Ht){var a=te.formState;if(a!==null){t:{var l=Dt;if(Ht){if(ue){e:{for(var h=ue,d=ui;h.nodeType!==8;){if(!d){h=null;break e}if(h=Hn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ue=Hn(h.nextSibling),l=h.data==="F!";break t}}As(l)}l=!1}l&&(i=a[0])}}return a=sn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lp,lastRenderedState:i},a.queue=l,a=Cp.bind(null,Dt,l),l.dispatch=a,l=df(!1),d=vf.bind(null,Dt,!1,l.queue),l=sn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=xA.bind(null,Dt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function cp(e){var i=ve();return hp(i,$t,e)}function hp(e,i,a){if(i=hf(e,i,lp)[0],e=Mu(Hi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Qo(i)}catch(v){throw v===Bo?Ru:v}else l=i;i=ve();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Dt.flags|=2048,Aa(9,Vu(),PA.bind(null,h,a),null)),[l,d,e]}function PA(e,i){e.action=i}function fp(e){var i=ve(),a=$t;if(a!==null)return hp(i,a,e);ve(),i=i.memoizedState,a=ve();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Aa(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Dt.updateQueue,i===null&&(i=uf(),Dt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Vu(){return{destroy:void 0,resource:void 0}}function dp(){return ve().memoizedState}function xu(e,i,a,l){var h=sn();l=l===void 0?null:l,Dt.flags|=e,h.memoizedState=Aa(1|i,Vu(),a,l)}function Ko(e,i,a,l){var h=ve();l=l===void 0?null:l;var d=h.memoizedState.inst;$t!==null&&l!==null&&rf(l,$t.memoizedState.deps)?h.memoizedState=Aa(i,d,a,l):(Dt.flags|=e,h.memoizedState=Aa(1|i,d,a,l))}function mp(e,i){xu(8390656,8,e,i)}function gp(e,i){Ko(2048,8,e,i)}function pp(e,i){return Ko(4,2,e,i)}function yp(e,i){return Ko(4,4,e,i)}function _p(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function vp(e,i,a){a=a!=null?a.concat([e]):null,Ko(4,4,_p.bind(null,i,e),a)}function gf(){}function Ep(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&rf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Tp(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&rf(i,l[1]))return l[0];if(l=e(),Rs){hn(!0);try{e()}finally{hn(!1)}}return a.memoizedState=[l,i],l}function pf(e,i,a){return a===void 0||(pr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Sy(),Dt.lanes|=e,br|=e,a)}function Ap(e,i,a,l){return dn(a,i)?a:va.current!==null?(e=pf(e,a,l),dn(e,i)||(Ve=!0),e):(pr&42)===0?(Ve=!0,e.memoizedState=a):(e=Sy(),Dt.lanes|=e,br|=e,i)}function bp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=j.T,E={};j.T=E,vf(e,!1,i,a);try{var S=h(),L=j.S;if(L!==null&&L(E,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var F=OA(S,l);Yo(e,i,F,_n(e))}else Yo(e,i,l,_n(e))}catch(K){Yo(e,i,{then:function(){},status:"rejected",reason:K},_n())}finally{nt.p=d,j.T=v}}function kA(){}function yf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Sp(e).queue;bp(e,h,i,ut,a===null?kA:function(){return wp(e),a(l)})}function Sp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:ut},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function wp(e){var i=Sp(e).next.queue;Yo(e,i,{},_n())}function _f(){return Qe(fl)}function Rp(){return ve().memoizedState}function Ip(){return ve().memoizedState}function UA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=_n();e=mr(a);var l=gr(i,e,a);l!==null&&(vn(l,i,a),Ho(l,i,a)),i={cache:Kh()},e.payload=i;return}i=i.return}}function LA(e,i,a){var l=_n();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Pu(e)?Dp(i,a):(a=Uh(e,i,a,l),a!==null&&(vn(a,e,l),Np(a,i,l)))}function Cp(e,i,a){var l=_n();Yo(e,i,a,l)}function Yo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Dp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,dn(E,v))return _u(e,i,h,0),te===null&&yu(),!1}catch{}finally{}if(a=Uh(e,i,h,l),a!==null)return vn(a,e,l),Np(a,i,l),!0}return!1}function vf(e,i,a,l){if(l={lane:2,revertLane:Zf(),action:l,hasEagerState:!1,eagerState:null,next:null},Pu(e)){if(i)throw Error(s(479))}else i=Uh(e,a,l,2),i!==null&&vn(i,e,2)}function Pu(e){var i=e.alternate;return e===Dt||i!==null&&i===Dt}function Dp(e,i){Ea=Du=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Np(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,po(e,a)}}var ku={readContext:Qe,use:Ou,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe},Op={readContext:Qe,use:Ou,useCallback:function(e,i){return sn().memoizedState=[e,i===void 0?null:i],e},useContext:Qe,useEffect:mp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,xu(4194308,4,_p.bind(null,i,e),a)},useLayoutEffect:function(e,i){return xu(4194308,4,e,i)},useInsertionEffect:function(e,i){xu(4,2,e,i)},useMemo:function(e,i){var a=sn();i=i===void 0?null:i;var l=e();if(Rs){hn(!0);try{e()}finally{hn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=sn();if(a!==void 0){var h=a(i);if(Rs){hn(!0);try{a(i)}finally{hn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=LA.bind(null,Dt,e),[l.memoizedState,e]},useRef:function(e){var i=sn();return e={current:e},i.memoizedState=e},useState:function(e){e=df(e);var i=e.queue,a=Cp.bind(null,Dt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,i){var a=sn();return pf(a,e,i)},useTransition:function(){var e=df(!1);return e=bp.bind(null,Dt,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Dt,h=sn();if(Ht){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),te===null)throw Error(s(349));(zt&124)!==0||Wg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,mp(tp.bind(null,l,d,e),[e]),l.flags|=2048,Aa(9,Vu(),Jg.bind(null,l,d,a,i),null),a},useId:function(){var e=sn(),i=te.identifierPrefix;if(Ht){var a=zi,l=Li;a=(l&~(1<<32-Ge(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Nu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=MA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:_f,useFormState:up,useActionState:up,useOptimistic:function(e){var i=sn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=vf.bind(null,Dt,!0,a),a.dispatch=i,[e,i]},useMemoCache:cf,useCacheRefresh:function(){return sn().memoizedState=UA.bind(null,Dt)}},Mp={readContext:Qe,use:Ou,useCallback:Ep,useContext:Qe,useEffect:gp,useImperativeHandle:vp,useInsertionEffect:pp,useLayoutEffect:yp,useMemo:Tp,useReducer:Mu,useRef:dp,useState:function(){return Mu(Hi)},useDebugValue:gf,useDeferredValue:function(e,i){var a=ve();return Ap(a,$t.memoizedState,e,i)},useTransition:function(){var e=Mu(Hi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:Qo(e),i]},useSyncExternalStore:Zg,useId:Rp,useHostTransitionStatus:_f,useFormState:cp,useActionState:cp,useOptimistic:function(e,i){var a=ve();return ip(a,$t,e,i)},useMemoCache:cf,useCacheRefresh:Ip},zA={readContext:Qe,use:Ou,useCallback:Ep,useContext:Qe,useEffect:gp,useImperativeHandle:vp,useInsertionEffect:pp,useLayoutEffect:yp,useMemo:Tp,useReducer:ff,useRef:dp,useState:function(){return ff(Hi)},useDebugValue:gf,useDeferredValue:function(e,i){var a=ve();return $t===null?pf(a,e,i):Ap(a,$t.memoizedState,e,i)},useTransition:function(){var e=ff(Hi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:Qo(e),i]},useSyncExternalStore:Zg,useId:Rp,useHostTransitionStatus:_f,useFormState:fp,useActionState:fp,useOptimistic:function(e,i){var a=ve();return $t!==null?ip(a,$t,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:Ip},ba=null,Xo=0;function Uu(e){var i=Xo;return Xo+=1,ba===null&&(ba=[]),jg(ba,e,i)}function $o(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Lu(e,i){throw i.$$typeof===R?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Vp(e){var i=e._init;return i(e._payload)}function xp(e){function i(x,N){if(e){var U=x.deletions;U===null?(x.deletions=[N],x.flags|=16):U.push(N)}}function a(x,N){if(!e)return null;for(;N!==null;)i(x,N),N=N.sibling;return null}function l(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function h(x,N){return x=Ui(x,N),x.index=0,x.sibling=null,x}function d(x,N,U){return x.index=U,e?(U=x.alternate,U!==null?(U=U.index,U<N?(x.flags|=67108866,N):U):(x.flags|=67108866,N)):(x.flags|=1048576,N)}function v(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function E(x,N,U,Q){return N===null||N.tag!==6?(N=zh(U,x.mode,Q),N.return=x,N):(N=h(N,U),N.return=x,N)}function S(x,N,U,Q){var lt=U.type;return lt===W?F(x,N,U.props.children,Q,U.key):N!==null&&(N.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===b&&Vp(lt)===N.type)?(N=h(N,U.props),$o(N,U),N.return=x,N):(N=Eu(U.type,U.key,U.props,null,x.mode,Q),$o(N,U),N.return=x,N)}function L(x,N,U,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=Bh(U,x.mode,Q),N.return=x,N):(N=h(N,U.children||[]),N.return=x,N)}function F(x,N,U,Q,lt){return N===null||N.tag!==7?(N=_s(U,x.mode,Q,lt),N.return=x,N):(N=h(N,U),N.return=x,N)}function K(x,N,U){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=zh(""+N,x.mode,U),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case D:return U=Eu(N.type,N.key,N.props,null,x.mode,U),$o(U,N),U.return=x,U;case H:return N=Bh(N,x.mode,U),N.return=x,N;case b:var Q=N._init;return N=Q(N._payload),K(x,N,U)}if(ne(N)||P(N))return N=_s(N,x.mode,U,null),N.return=x,N;if(typeof N.then=="function")return K(x,Uu(N),U);if(N.$$typeof===ht)return K(x,Su(x,N),U);Lu(x,N)}return null}function z(x,N,U,Q){var lt=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return lt!==null?null:E(x,N,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case D:return U.key===lt?S(x,N,U,Q):null;case H:return U.key===lt?L(x,N,U,Q):null;case b:return lt=U._init,U=lt(U._payload),z(x,N,U,Q)}if(ne(U)||P(U))return lt!==null?null:F(x,N,U,Q,null);if(typeof U.then=="function")return z(x,N,Uu(U),Q);if(U.$$typeof===ht)return z(x,N,Su(x,U),Q);Lu(x,U)}return null}function B(x,N,U,Q,lt){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return x=x.get(U)||null,E(N,x,""+Q,lt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case D:return x=x.get(Q.key===null?U:Q.key)||null,S(N,x,Q,lt);case H:return x=x.get(Q.key===null?U:Q.key)||null,L(N,x,Q,lt);case b:var Ot=Q._init;return Q=Ot(Q._payload),B(x,N,U,Q,lt)}if(ne(Q)||P(Q))return x=x.get(U)||null,F(N,x,Q,lt,null);if(typeof Q.then=="function")return B(x,N,U,Uu(Q),lt);if(Q.$$typeof===ht)return B(x,N,U,Su(N,Q),lt);Lu(N,Q)}return null}function Et(x,N,U,Q){for(var lt=null,Ot=null,ct=N,pt=N=0,Pe=null;ct!==null&&pt<U.length;pt++){ct.index>pt?(Pe=ct,ct=null):Pe=ct.sibling;var qt=z(x,ct,U[pt],Q);if(qt===null){ct===null&&(ct=Pe);break}e&&ct&&qt.alternate===null&&i(x,ct),N=d(qt,N,pt),Ot===null?lt=qt:Ot.sibling=qt,Ot=qt,ct=Pe}if(pt===U.length)return a(x,ct),Ht&&Es(x,pt),lt;if(ct===null){for(;pt<U.length;pt++)ct=K(x,U[pt],Q),ct!==null&&(N=d(ct,N,pt),Ot===null?lt=ct:Ot.sibling=ct,Ot=ct);return Ht&&Es(x,pt),lt}for(ct=l(ct);pt<U.length;pt++)Pe=B(ct,x,pt,U[pt],Q),Pe!==null&&(e&&Pe.alternate!==null&&ct.delete(Pe.key===null?pt:Pe.key),N=d(Pe,N,pt),Ot===null?lt=Pe:Ot.sibling=Pe,Ot=Pe);return e&&ct.forEach(function(Mr){return i(x,Mr)}),Ht&&Es(x,pt),lt}function gt(x,N,U,Q){if(U==null)throw Error(s(151));for(var lt=null,Ot=null,ct=N,pt=N=0,Pe=null,qt=U.next();ct!==null&&!qt.done;pt++,qt=U.next()){ct.index>pt?(Pe=ct,ct=null):Pe=ct.sibling;var Mr=z(x,ct,qt.value,Q);if(Mr===null){ct===null&&(ct=Pe);break}e&&ct&&Mr.alternate===null&&i(x,ct),N=d(Mr,N,pt),Ot===null?lt=Mr:Ot.sibling=Mr,Ot=Mr,ct=Pe}if(qt.done)return a(x,ct),Ht&&Es(x,pt),lt;if(ct===null){for(;!qt.done;pt++,qt=U.next())qt=K(x,qt.value,Q),qt!==null&&(N=d(qt,N,pt),Ot===null?lt=qt:Ot.sibling=qt,Ot=qt);return Ht&&Es(x,pt),lt}for(ct=l(ct);!qt.done;pt++,qt=U.next())qt=B(ct,x,pt,qt.value,Q),qt!==null&&(e&&qt.alternate!==null&&ct.delete(qt.key===null?pt:qt.key),N=d(qt,N,pt),Ot===null?lt=qt:Ot.sibling=qt,Ot=qt);return e&&ct.forEach(function(Bb){return i(x,Bb)}),Ht&&Es(x,pt),lt}function Wt(x,N,U,Q){if(typeof U=="object"&&U!==null&&U.type===W&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case D:t:{for(var lt=U.key;N!==null;){if(N.key===lt){if(lt=U.type,lt===W){if(N.tag===7){a(x,N.sibling),Q=h(N,U.props.children),Q.return=x,x=Q;break t}}else if(N.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===b&&Vp(lt)===N.type){a(x,N.sibling),Q=h(N,U.props),$o(Q,U),Q.return=x,x=Q;break t}a(x,N);break}else i(x,N);N=N.sibling}U.type===W?(Q=_s(U.props.children,x.mode,Q,U.key),Q.return=x,x=Q):(Q=Eu(U.type,U.key,U.props,null,x.mode,Q),$o(Q,U),Q.return=x,x=Q)}return v(x);case H:t:{for(lt=U.key;N!==null;){if(N.key===lt)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(x,N.sibling),Q=h(N,U.children||[]),Q.return=x,x=Q;break t}else{a(x,N);break}else i(x,N);N=N.sibling}Q=Bh(U,x.mode,Q),Q.return=x,x=Q}return v(x);case b:return lt=U._init,U=lt(U._payload),Wt(x,N,U,Q)}if(ne(U))return Et(x,N,U,Q);if(P(U)){if(lt=P(U),typeof lt!="function")throw Error(s(150));return U=lt.call(U),gt(x,N,U,Q)}if(typeof U.then=="function")return Wt(x,N,Uu(U),Q);if(U.$$typeof===ht)return Wt(x,N,Su(x,U),Q);Lu(x,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,N!==null&&N.tag===6?(a(x,N.sibling),Q=h(N,U),Q.return=x,x=Q):(a(x,N),Q=zh(U,x.mode,Q),Q.return=x,x=Q),v(x)):a(x,N)}return function(x,N,U,Q){try{Xo=0;var lt=Wt(x,N,U,Q);return ba=null,lt}catch(ct){if(ct===Bo||ct===Ru)throw ct;var Ot=mn(29,ct,null,x.mode);return Ot.lanes=Q,Ot.return=x,Ot}finally{}}}var Sa=xp(!0),Pp=xp(!1),On=$(null),ci=null;function yr(e){var i=e.alternate;tt(Ie,Ie.current&1),tt(On,e),ci===null&&(i===null||va.current!==null||i.memoizedState!==null)&&(ci=e)}function kp(e){if(e.tag===22){if(tt(Ie,Ie.current),tt(On,e),ci===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ci=e)}}else _r()}function _r(){tt(Ie,Ie.current),tt(On,On.current)}function ji(e){it(On),ci===e&&(ci=null),it(Ie)}var Ie=$(0);function zu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ud(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Ef(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=_n(),h=mr(l);h.payload=i,a!=null&&(h.callback=a),i=gr(e,h,l),i!==null&&(vn(i,e,l),Ho(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=_n(),h=mr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=gr(e,h,l),i!==null&&(vn(i,e,l),Ho(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=_n(),l=mr(a);l.tag=2,i!=null&&(l.callback=i),i=gr(e,l,a),i!==null&&(vn(i,e,a),Ho(i,e,a))}};function Up(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Mo(a,l)||!Mo(h,d):!0}function Lp(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Tf.enqueueReplaceState(i,i.state,null)}function Is(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Bu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function zp(e){Bu(e)}function Bp(e){console.error(e)}function qp(e){Bu(e)}function qu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Hp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Af(e,i,a){return a=mr(a),a.tag=3,a.payload={element:null},a.callback=function(){qu(e,i)},a}function jp(e){return e=mr(e),e.tag=3,e}function Fp(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Hp(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Hp(i,a,l),typeof h!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function BA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Uo(i,a,h,!0),a=On.current,a!==null){switch(a.tag){case 13:return ci===null?Qf():a.alternate===null&&ce===0&&(ce=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===$h?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Yf(e,l,h)),!1;case 22:return a.flags|=65536,l===$h?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Yf(e,l,h)),!1}throw Error(s(435,a.tag))}return Yf(e,l,h),Qf(),!1}if(Ht)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==jh&&(e=Error(s(422),{cause:l}),ko(In(e,a)))):(l!==jh&&(i=Error(s(423),{cause:l}),ko(In(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=In(l,a),h=Af(e.stateNode,l,h),Jh(e,h),ce!==4&&(ce=2)),!1;var d=Error(s(520),{cause:l});if(d=In(d,a),il===null?il=[d]:il.push(d),ce!==4&&(ce=2),i===null)return!0;l=In(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Af(a.stateNode,l,e),Jh(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Sr===null||!Sr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=jp(h),Fp(h,e,a,l),Jh(a,h),!1}a=a.return}while(a!==null);return!1}var Gp=Error(s(461)),Ve=!1;function ze(e,i,a,l){i.child=e===null?Pp(i,null,a,l):Sa(i,e.child,a,l)}function Qp(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Ss(i),l=sf(e,i,a,v,d,h),E=af(),e!==null&&!Ve?(of(e,i,h),Fi(e,i,h)):(Ht&&E&&qh(i),i.flags|=1,ze(e,i,l,h),i.child)}function Kp(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Lh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Yp(e,i,d,l,h)):(e=Eu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Nf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(v,l)&&e.ref===i.ref)return Fi(e,i,h)}return i.flags|=1,e=Ui(d,l),e.ref=i.ref,e.return=i,i.child=e}function Yp(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Mo(d,l)&&e.ref===i.ref)if(Ve=!1,i.pendingProps=l=d,Nf(e,h))(e.flags&131072)!==0&&(Ve=!0);else return i.lanes=e.lanes,Fi(e,i,h)}return bf(e,i,a,l,h)}function Xp(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return $p(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&wu(i,d!==null?d.cachePool:null),d!==null?Yg(i,d):ef(),kp(i);else return i.lanes=i.childLanes=536870912,$p(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(wu(i,d.cachePool),Yg(i,d),_r(),i.memoizedState=null):(e!==null&&wu(i,null),ef(),_r());return ze(e,i,h,a),i.child}function $p(e,i,a,l){var h=Xh();return h=h===null?null:{parent:Re._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&wu(i,null),ef(),kp(i),e!==null&&Uo(e,i,l,!0),null}function Hu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function bf(e,i,a,l,h){return Ss(i),a=sf(e,i,a,l,void 0,h),l=af(),e!==null&&!Ve?(of(e,i,h),Fi(e,i,h)):(Ht&&l&&qh(i),i.flags|=1,ze(e,i,a,h),i.child)}function Zp(e,i,a,l,h,d){return Ss(i),i.updateQueue=null,a=$g(i,l,a,h),Xg(e),l=af(),e!==null&&!Ve?(of(e,i,d),Fi(e,i,d)):(Ht&&l&&qh(i),i.flags|=1,ze(e,i,a,d),i.child)}function Wp(e,i,a,l,h){if(Ss(i),i.stateNode===null){var d=ma,v=a.contextType;typeof v=="object"&&v!==null&&(d=Qe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Tf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Zh(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Qe(v):ma,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ef(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Tf.enqueueReplaceState(d,d.state,null),Fo(i,l,d,h),jo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,S=Is(a,E);d.props=S;var L=d.context,F=a.contextType;v=ma,typeof F=="object"&&F!==null&&(v=Qe(F));var K=a.getDerivedStateFromProps;F=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||L!==v)&&Lp(i,d,l,v),dr=!1;var z=i.memoizedState;d.state=z,Fo(i,l,d,h),jo(),L=i.memoizedState,E||z!==L||dr?(typeof K=="function"&&(Ef(i,a,K,l),L=i.memoizedState),(S=dr||Up(i,a,S,l,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=S):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Wh(e,i),v=i.memoizedProps,F=Is(a,v),d.props=F,K=i.pendingProps,z=d.context,L=a.contextType,S=ma,typeof L=="object"&&L!==null&&(S=Qe(L)),E=a.getDerivedStateFromProps,(L=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==S)&&Lp(i,d,l,S),dr=!1,z=i.memoizedState,d.state=z,Fo(i,l,d,h),jo();var B=i.memoizedState;v!==K||z!==B||dr||e!==null&&e.dependencies!==null&&bu(e.dependencies)?(typeof E=="function"&&(Ef(i,a,E,l),B=i.memoizedState),(F=dr||Up(i,a,F,l,z,B,S)||e!==null&&e.dependencies!==null&&bu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,S)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=S,l=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Hu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Sa(i,e.child,null,h),i.child=Sa(i,null,a,h)):ze(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Fi(e,i,h),e}function Jp(e,i,a,l){return Po(),i.flags|=256,ze(e,i,a,l),i.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:Bg()}}function Rf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Mn),e}function ty(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ht){if(h?yr(i):_r(),Ht){var E=ue,S;if(S=E){t:{for(S=E,E=ui;S.nodeType!==8;){if(!E){E=null;break t}if(S=Hn(S.nextSibling),S===null){E=null;break t}}E=S}E!==null?(i.memoizedState={dehydrated:E,treeContext:vs!==null?{id:Li,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},S=mn(18,null,null,0),S.stateNode=E,S.return=i,i.child=S,rn=i,ue=null,S=!0):S=!1}S||As(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return ud(E)?i.lanes=32:i.lanes=536870912,null;ji(i)}return E=l.children,l=l.fallback,h?(_r(),h=i.mode,E=ju({mode:"hidden",children:E},h),l=_s(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=wf(a),h.childLanes=Rf(e,v,a),i.memoizedState=Sf,l):(yr(i),If(i,E))}if(S=e.memoizedState,S!==null&&(E=S.dehydrated,E!==null)){if(d)i.flags&256?(yr(i),i.flags&=-257,i=Cf(e,i,a)):i.memoizedState!==null?(_r(),i.child=e.child,i.flags|=128,i=null):(_r(),h=l.fallback,E=i.mode,l=ju({mode:"visible",children:l.children},E),h=_s(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Sa(i,e.child,null,a),l=i.child,l.memoizedState=wf(a),l.childLanes=Rf(e,v,a),i.memoizedState=Sf,i=h);else if(yr(i),ud(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,ko({value:l,source:null,stack:null}),i=Cf(e,i,a)}else if(Ve||Uo(e,i,a,!1),v=(a&e.childLanes)!==0,Ve||v){if(v=te,v!==null&&(l=a&-a,l=(l&42)!==0?1:sr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==S.retryLane))throw S.retryLane=l,da(e,l),vn(v,e,l),Gp;E.data==="$?"||Qf(),i=Cf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=S.treeContext,ue=Hn(E.nextSibling),rn=i,Ht=!0,Ts=null,ui=!1,e!==null&&(Dn[Nn++]=Li,Dn[Nn++]=zi,Dn[Nn++]=vs,Li=e.id,zi=e.overflow,vs=i),i=If(i,l.children),i.flags|=4096);return i}return h?(_r(),h=l.fallback,E=i.mode,S=e.child,L=S.sibling,l=Ui(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,L!==null?h=Ui(L,h):(h=_s(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=wf(a):(S=E.cachePool,S!==null?(L=Re._currentValue,S=S.parent!==L?{parent:L,pool:L}:S):S=Bg(),E={baseLanes:E.baseLanes|a,cachePool:S}),h.memoizedState=E,h.childLanes=Rf(e,v,a),i.memoizedState=Sf,l):(yr(i),a=e.child,e=a.sibling,a=Ui(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function If(e,i){return i=ju({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ju(e,i){return e=mn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cf(e,i,a){return Sa(i,e.child,null,a),e=If(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function ey(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Gh(e.return,i,a)}function Df(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function ny(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(ze(e,i,l.children,a),l=Ie.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ey(e,a,i);else if(e.tag===19)ey(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(tt(Ie,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&zu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Df(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&zu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Df(i,!0,a,null,d);break;case"together":Df(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Fi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),br|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Uo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ui(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ui(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Nf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&bu(e)))}function qA(e,i,a){switch(i.tag){case 3:Yt(i,i.stateNode.containerInfo),fr(i,Re,e.memoizedState.cache),Po();break;case 27:case 5:Zn(i);break;case 4:Yt(i,i.stateNode.containerInfo);break;case 10:fr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(yr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?ty(e,i,a):(yr(i),e=Fi(e,i,a),e!==null?e.sibling:null);yr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Uo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return ny(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),tt(Ie,Ie.current),l)break;return null;case 22:case 23:return i.lanes=0,Xp(e,i,a);case 24:fr(i,Re,e.memoizedState.cache)}return Fi(e,i,a)}function iy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ve=!0;else{if(!Nf(e,a)&&(i.flags&128)===0)return Ve=!1,qA(e,i,a);Ve=(e.flags&131072)!==0}else Ve=!1,Ht&&(i.flags&1048576)!==0&&Vg(i,Au,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Lh(l)?(e=Is(l,e),i.tag=1,i=Wp(null,i,l,e,a)):(i.tag=0,i=bf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===It){i.tag=11,i=Qp(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=Kp(null,i,l,e,a);break t}}throw i=Ae(l)||l,Error(s(306,i,""))}}return i;case 0:return bf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Is(l,i.pendingProps),Wp(e,i,l,h,a);case 3:t:{if(Yt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Wh(e,i),Fo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,fr(i,Re,l),l!==d.cache&&Qh(i,[Re],a,!0),jo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Jp(e,i,l,a);break t}else if(l!==h){h=In(Error(s(424)),i),ko(h),i=Jp(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ue=Hn(e.firstChild),rn=i,Ht=!0,Ts=null,ui=!0,a=Pp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Po(),l===h){i=Fi(e,i,a);break t}ze(e,i,l,a)}i=i.child}return i;case 26:return Hu(e,i),e===null?(a=o_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ht||(a=i.type,e=i.pendingProps,l=ic(vt.current).createElement(a),l[be]=i,l[pe]=e,qe(l,a,e),he(l),i.stateNode=l):i.memoizedState=o_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Zn(i),e===null&&Ht&&(l=i.stateNode=r_(i.type,i.pendingProps,vt.current),rn=i,ui=!0,h=ue,Ir(i.type)?(cd=h,ue=Hn(l.firstChild)):ue=h),ze(e,i,i.pendingProps.children,a),Hu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ht&&((h=l=ue)&&(l=gb(l,i.type,i.pendingProps,ui),l!==null?(i.stateNode=l,rn=i,ue=Hn(l.firstChild),ui=!1,h=!0):h=!1),h||As(i)),Zn(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,ad(h,d)?l=null:v!==null&&ad(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=sf(e,i,VA,null,null,a),fl._currentValue=h),Hu(e,i),ze(e,i,l,a),i.child;case 6:return e===null&&Ht&&((e=a=ue)&&(a=pb(a,i.pendingProps,ui),a!==null?(i.stateNode=a,rn=i,ue=null,e=!0):e=!1),e||As(i)),null;case 13:return ty(e,i,a);case 4:return Yt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Sa(i,null,l,a):ze(e,i,l,a),i.child;case 11:return Qp(e,i,i.type,i.pendingProps,a);case 7:return ze(e,i,i.pendingProps,a),i.child;case 8:return ze(e,i,i.pendingProps.children,a),i.child;case 12:return ze(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,fr(i,i.type,l.value),ze(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ss(i),h=Qe(h),l=l(h),i.flags|=1,ze(e,i,l,a),i.child;case 14:return Kp(e,i,i.type,i.pendingProps,a);case 15:return Yp(e,i,i.type,i.pendingProps,a);case 19:return ny(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=ju(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Ui(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Xp(e,i,a);case 24:return Ss(i),l=Qe(Re),e===null?(h=Xh(),h===null&&(h=te,d=Kh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Zh(i),fr(i,Re,h)):((e.lanes&a)!==0&&(Wh(e,i),Fo(i,null,null,a),jo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),fr(i,Re,l)):(l=d.cache,fr(i,Re,l),l!==h.cache&&Qh(i,[Re],a,!0))),ze(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Gi(e){e.flags|=4}function ry(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f_(i)){if(i=On.current,i!==null&&((zt&4194048)===zt?ci!==null:(zt&62914560)!==zt&&(zt&536870912)===0||i!==ci))throw qo=$h,qg;e.flags|=8192}}function Fu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?mo():536870912,e.lanes|=i,Ca|=i)}function Zo(e,i){if(!Ht)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function se(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function HA(e,i,a){var l=i.pendingProps;switch(Hh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(i),null;case 1:return se(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),qi(Re),Tn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xo(i)?Gi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kg())),se(i),null;case 26:return a=i.memoizedState,e===null?(Gi(i),a!==null?(se(i),ry(i,a)):(se(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Gi(i),se(i),ry(i,a)):(se(i),i.flags&=-16777217):(e.memoizedProps!==l&&Gi(i),se(i),i.flags&=-16777217),null;case 27:kn(i),a=vt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return se(i),null}e=ft.current,xo(i)?xg(i):(e=r_(h,l,a),i.stateNode=e,Gi(i))}return se(i),null;case 5:if(kn(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return se(i),null}if(e=ft.current,xo(i))xg(i);else{switch(h=ic(vt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[be]=i,e[pe]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(qe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Gi(i)}}return se(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=vt.current,xo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=rn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[be]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Zy(e.nodeValue,a)),e||As(i)}else e=ic(e).createTextNode(l),e[be]=i,i.stateNode=e}return se(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=xo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[be]=i}else Po(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;se(i),h=!1}else h=kg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ji(i),i):(ji(i),null)}if(ji(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Fu(i,i.updateQueue),se(i),null;case 4:return Tn(),e===null&&ed(i.stateNode.containerInfo),se(i),null;case 10:return qi(i.type),se(i),null;case 19:if(it(Ie),h=i.memoizedState,h===null)return se(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Zo(h,!1);else{if(ce!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=zu(e),d!==null){for(i.flags|=128,Zo(h,!1),e=d.updateQueue,i.updateQueue=e,Fu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Mg(a,e),a=a.sibling;return tt(Ie,Ie.current&1|2),i.child}e=e.sibling}h.tail!==null&&Ne()>Ku&&(i.flags|=128,l=!0,Zo(h,!1),i.lanes=4194304)}else{if(!l)if(e=zu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Fu(i,e),Zo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ht)return se(i),null}else 2*Ne()-h.renderingStartTime>Ku&&a!==536870912&&(i.flags|=128,l=!0,Zo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ne(),i.sibling=null,e=Ie.current,tt(Ie,l?e&1|2:e&1),i):(se(i),null);case 22:case 23:return ji(i),nf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(se(i),i.subtreeFlags&6&&(i.flags|=8192)):se(i),a=i.updateQueue,a!==null&&Fu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&it(ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),qi(Re),se(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function jA(e,i){switch(Hh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return qi(Re),Tn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return kn(i),null;case 13:if(ji(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Po()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(Ie),null;case 4:return Tn(),null;case 10:return qi(i.type),null;case 22:case 23:return ji(i),nf(),e!==null&&it(ws),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return qi(Re),null;case 25:return null;default:return null}}function sy(e,i){switch(Hh(i),i.tag){case 3:qi(Re),Tn();break;case 26:case 27:case 5:kn(i);break;case 4:Tn();break;case 13:ji(i);break;case 19:it(Ie);break;case 10:qi(i.type);break;case 22:case 23:ji(i),nf(),e!==null&&it(ws);break;case 24:qi(Re)}}function Wo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){Jt(i,i.return,E)}}function vr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var S=a,L=E;try{L()}catch(F){Jt(h,S,F)}}}l=l.next}while(l!==d)}}catch(F){Jt(i,i.return,F)}}function ay(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Kg(i,a)}catch(l){Jt(e,e.return,l)}}}function oy(e,i,a){a.props=Is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Jt(e,i,l)}}function Jo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Jt(e,i,h)}}function hi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Jt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Jt(e,i,h)}else a.current=null}function ly(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Jt(e,e.return,h)}}function Of(e,i,a){try{var l=e.stateNode;cb(l,e.type,a,i),l[pe]=i}catch(h){Jt(e,e.return,h)}}function uy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ir(e.type)||e.tag===4}function Mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||uy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=nc));else if(l!==4&&(l===27&&Ir(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Vf(e,i,a),e=e.sibling;e!==null;)Vf(e,i,a),e=e.sibling}function Gu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Ir(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gu(e,i,a),e=e.sibling;e!==null;)Gu(e,i,a),e=e.sibling}function cy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);qe(i,l,a),i[be]=e,i[pe]=a}catch(d){Jt(e,e.return,d)}}var Qi=!1,de=!1,xf=!1,hy=typeof WeakSet=="function"?WeakSet:Set,xe=null;function FA(e,i){if(e=e.containerInfo,rd=uc,e=Ag(e),Oh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,S=-1,L=0,F=0,K=e,z=null;e:for(;;){for(var B;K!==a||h!==0&&K.nodeType!==3||(E=v+h),K!==d||l!==0&&K.nodeType!==3||(S=v+l),K.nodeType===3&&(v+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===a&&++L===h&&(E=v),z===d&&++F===l&&(S=v),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}a=E===-1||S===-1?null:{start:E,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(sd={focusedElem:e,selectionRange:a},uc=!1,xe=i;xe!==null;)if(i=xe,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,xe=e;else for(;xe!==null;){switch(i=xe,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Et=Is(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(gt){Jt(a,a.return,gt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)ld(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,xe=e;break}xe=i.return}}function fy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Er(e,a),l&4&&Wo(5,a);break;case 1:if(Er(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Jt(a,a.return,v)}else{var h=Is(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Jt(a,a.return,v)}}l&64&&ay(a),l&512&&Jo(a,a.return);break;case 3:if(Er(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Kg(e,i)}catch(v){Jt(a,a.return,v)}}break;case 27:i===null&&l&4&&cy(a);case 26:case 5:Er(e,a),i===null&&l&4&&ly(a),l&512&&Jo(a,a.return);break;case 12:Er(e,a);break;case 13:Er(e,a),l&4&&gy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=JA.bind(null,a),yb(e,a))));break;case 22:if(l=a.memoizedState!==null||Qi,!l){i=i!==null&&i.memoizedState!==null||de,h=Qi;var d=de;Qi=l,(de=i)&&!d?Tr(e,a,(a.subtreeFlags&8772)!==0):Er(e,a),Qi=h,de=d}break;case 30:break;default:Er(e,a)}}function dy(e){var i=e.alternate;i!==null&&(e.alternate=null,dy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&lr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,an=!1;function Ki(e,i,a){for(a=a.child;a!==null;)my(e,i,a),a=a.sibling}function my(e,i,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(le,a)}catch{}switch(a.tag){case 26:de||hi(a,i),Ki(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:de||hi(a,i);var l=re,h=an;Ir(a.type)&&(re=a.stateNode,an=!1),Ki(e,i,a),ll(a.stateNode),re=l,an=h;break;case 5:de||hi(a,i);case 6:if(l=re,h=an,re=null,Ki(e,i,a),re=l,an=h,re!==null)if(an)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(d){Jt(a,i,d)}else try{re.removeChild(a.stateNode)}catch(d){Jt(a,i,d)}break;case 18:re!==null&&(an?(e=re,n_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pl(e)):n_(re,a.stateNode));break;case 4:l=re,h=an,re=a.stateNode.containerInfo,an=!0,Ki(e,i,a),re=l,an=h;break;case 0:case 11:case 14:case 15:de||vr(2,a,i),de||vr(4,a,i),Ki(e,i,a);break;case 1:de||(hi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&oy(a,i,l)),Ki(e,i,a);break;case 21:Ki(e,i,a);break;case 22:de=(l=de)||a.memoizedState!==null,Ki(e,i,a),de=l;break;default:Ki(e,i,a)}}function gy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(a){Jt(i,i.return,a)}}function GA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new hy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new hy),i;default:throw Error(s(435,e.tag))}}function Pf(e,i){var a=GA(e);i.forEach(function(l){var h=tb.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function gn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Ir(E.type)){re=E.stateNode,an=!1;break t}break;case 5:re=E.stateNode,an=!1;break t;case 3:case 4:re=E.stateNode.containerInfo,an=!0;break t}E=E.return}if(re===null)throw Error(s(160));my(d,v,h),re=null,an=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)py(i,e),i=i.sibling}var qn=null;function py(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gn(i,e),pn(e),l&4&&(vr(3,e,e.return),Wo(3,e),vr(5,e,e.return));break;case 1:gn(i,e),pn(e),l&512&&(de||a===null||hi(a,a.return)),l&64&&Qi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=qn;if(gn(i,e),pn(e),l&512&&(de||a===null||hi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ns]||d[be]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),qe(d,l,a),d[be]=e,he(d),l=d;break t;case"link":var v=c_("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;case"meta":if(v=c_("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[be]=e,he(d),l=d}e.stateNode=l}else h_(h,e.type,e.stateNode);else e.stateNode=u_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?h_(h,e.type,e.stateNode):u_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Of(e,e.memoizedProps,a.memoizedProps)}break;case 27:gn(i,e),pn(e),l&512&&(de||a===null||hi(a,a.return)),a!==null&&l&4&&Of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(gn(i,e),pn(e),l&512&&(de||a===null||hi(a,a.return)),e.flags&32){h=e.stateNode;try{bn(h,"")}catch(B){Jt(e,e.return,B)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Of(e,h,a!==null?a.memoizedProps:h)),l&1024&&(xf=!0);break;case 6:if(gn(i,e),pn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){Jt(e,e.return,B)}}break;case 3:if(ac=null,h=qn,qn=rc(i.containerInfo),gn(i,e),qn=h,pn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{pl(i.containerInfo)}catch(B){Jt(e,e.return,B)}xf&&(xf=!1,yy(e));break;case 4:l=qn,qn=rc(e.stateNode.containerInfo),gn(i,e),pn(e),qn=l;break;case 12:gn(i,e),pn(e);break;case 13:gn(i,e),pn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qf=Ne()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 22:h=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,L=Qi,F=de;if(Qi=L||h,de=F||S,gn(i,e),de=F,Qi=L,pn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||S||Qi||de||Cs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){S=a=i;try{if(d=S.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=S.stateNode;var K=S.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Jt(S,S.return,B)}}}else if(i.tag===6){if(a===null){S=i;try{S.stateNode.nodeValue=h?"":S.memoizedProps}catch(B){Jt(S,S.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Pf(e,a))));break;case 19:gn(i,e),pn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 30:break;case 21:break;default:gn(i,e),pn(e)}}function pn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(uy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Mf(e);Gu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(bn(v,""),a.flags&=-33);var E=Mf(e);Gu(e,E,v);break;case 3:case 4:var S=a.stateNode.containerInfo,L=Mf(e);Vf(e,L,S);break;default:throw Error(s(161))}}catch(F){Jt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function yy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;yy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Er(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)fy(e,i.alternate,i),i=i.sibling}function Cs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:vr(4,i,i.return),Cs(i);break;case 1:hi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&oy(i,i.return,a),Cs(i);break;case 27:ll(i.stateNode);case 26:case 5:hi(i,i.return),Cs(i);break;case 22:i.memoizedState===null&&Cs(i);break;case 30:Cs(i);break;default:Cs(i)}e=e.sibling}}function Tr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Tr(h,d,a),Wo(4,d);break;case 1:if(Tr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Jt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var S=h.shared.hiddenCallbacks;if(S!==null)for(h.shared.hiddenCallbacks=null,h=0;h<S.length;h++)Qg(S[h],E)}catch(L){Jt(l,l.return,L)}}a&&v&64&&ay(d),Jo(d,d.return);break;case 27:cy(d);case 26:case 5:Tr(h,d,a),a&&l===null&&v&4&&ly(d),Jo(d,d.return);break;case 12:Tr(h,d,a);break;case 13:Tr(h,d,a),a&&v&4&&gy(h,d);break;case 22:d.memoizedState===null&&Tr(h,d,a),Jo(d,d.return);break;case 30:break;default:Tr(h,d,a)}i=i.sibling}}function kf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Lo(a))}function Uf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e))}function fi(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)_y(e,i,a,l),i=i.sibling}function _y(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:fi(e,i,a,l),h&2048&&Wo(9,i);break;case 1:fi(e,i,a,l);break;case 3:fi(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e)));break;case 12:if(h&2048){fi(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Jt(i,i.return,S)}}else fi(e,i,a,l);break;case 13:fi(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?fi(e,i,a,l):tl(e,i):d._visibility&2?fi(e,i,a,l):(d._visibility|=2,wa(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&kf(v,i);break;case 24:fi(e,i,a,l),h&2048&&Uf(i.alternate,i);break;default:fi(e,i,a,l)}}function wa(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,S=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:wa(d,v,E,S,h),Wo(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?wa(d,v,E,S,h):tl(d,v):(F._visibility|=2,wa(d,v,E,S,h)),h&&L&2048&&kf(v.alternate,v);break;case 24:wa(d,v,E,S,h),h&&L&2048&&Uf(v.alternate,v);break;default:wa(d,v,E,S,h)}i=i.sibling}}function tl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:tl(a,l),h&2048&&kf(l.alternate,l);break;case 24:tl(a,l),h&2048&&Uf(l.alternate,l);break;default:tl(a,l)}i=i.sibling}}var el=8192;function Ra(e){if(e.subtreeFlags&el)for(e=e.child;e!==null;)vy(e),e=e.sibling}function vy(e){switch(e.tag){case 26:Ra(e),e.flags&el&&e.memoizedState!==null&&Nb(qn,e.memoizedState,e.memoizedProps);break;case 5:Ra(e);break;case 3:case 4:var i=qn;qn=rc(e.stateNode.containerInfo),Ra(e),qn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=el,el=16777216,Ra(e),el=i):Ra(e));break;default:Ra(e)}}function Ey(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function nl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];xe=l,Ay(l,e)}Ey(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ty(e),e=e.sibling}function Ty(e){switch(e.tag){case 0:case 11:case 15:nl(e),e.flags&2048&&vr(9,e,e.return);break;case 3:nl(e);break;case 12:nl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Qu(e)):nl(e);break;default:nl(e)}}function Qu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];xe=l,Ay(l,e)}Ey(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:vr(8,i,i.return),Qu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Qu(i));break;default:Qu(i)}e=e.sibling}}function Ay(e,i){for(;xe!==null;){var a=xe;switch(a.tag){case 0:case 11:case 15:vr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,xe=l;else t:for(a=e;xe!==null;){l=xe;var h=l.sibling,d=l.return;if(dy(l),l===a){xe=null;break t}if(h!==null){h.return=d,xe=h;break t}xe=d}}}var QA={getCacheForType:function(e){var i=Qe(Re),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},KA=typeof WeakMap=="function"?WeakMap:Map,Qt=0,te=null,Mt=null,zt=0,Kt=0,yn=null,Ar=!1,Ia=!1,Lf=!1,Yi=0,ce=0,br=0,Ds=0,zf=0,Mn=0,Ca=0,il=null,on=null,Bf=!1,qf=0,Ku=1/0,Yu=null,Sr=null,Be=0,wr=null,Da=null,Na=0,Hf=0,jf=null,by=null,rl=0,Ff=null;function _n(){if((Qt&2)!==0&&zt!==0)return zt&-zt;if(j.T!==null){var e=ya;return e!==0?e:Zf()}return ar()}function Sy(){Mn===0&&(Mn=(zt&536870912)===0||Ht?fo():536870912);var e=On.current;return e!==null&&(e.flags|=32),Mn}function vn(e,i,a){(e===te&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(Oa(e,0),Rr(e,zt,Mn,!1)),Ri(e,a),((Qt&2)===0||e!==te)&&(e===te&&((Qt&2)===0&&(Ds|=a),ce===4&&Rr(e,zt,Mn,!1)),di(e))}function wy(e,i,a){if((Qt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||es(e,i),h=l?$A(e,i):Kf(e,i,!0),d=l;do{if(h===0){Ia&&!l&&Rr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!YA(a)){h=Kf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=il;var S=E.current.memoizedState.isDehydrated;if(S&&(Oa(E,v).flags|=256),v=Kf(E,v,!1),v!==2){if(Lf&&!S){E.errorRecoveryDisabledLanes|=d,Ds|=d,h=4;break t}d=on,on=h,d!==null&&(on===null?on=d:on.push.apply(on,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Oa(e,0),Rr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Rr(l,i,Mn,!Ar);break t;case 2:on=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=qf+300-Ne(),10<h)){if(Rr(l,i,Mn,!Ar),Ys(l,0,!0)!==0)break t;l.timeoutHandle=t_(Ry.bind(null,l,a,on,Yu,Bf,i,Mn,Ds,Ca,Ar,d,2,-0,0),h);break t}Ry(l,a,on,Yu,Bf,i,Mn,Ds,Ca,Ar,d,0,-0,0)}}break}while(!0);di(e)}function Ry(e,i,a,l,h,d,v,E,S,L,F,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(hl={stylesheets:null,count:0,unsuspend:Db},vy(i),K=Ob(),K!==null)){e.cancelPendingCommit=K(Vy.bind(null,e,i,d,a,l,h,v,E,S,F,1,z,B)),Rr(e,d,v,!L);return}Vy(e,i,d,a,l,h,v,E,S)}function YA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!dn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Rr(e,i,a,l){i&=~zf,i&=~Ds,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ge(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Wn(e,a,i)}function Xu(){return(Qt&6)===0?(sl(0),!1):!0}function Gf(){if(Mt!==null){if(Kt===0)var e=Mt.return;else e=Mt,Bi=bs=null,lf(e),ba=null,Xo=0,e=Mt;for(;e!==null;)sy(e.alternate,e),e=e.return;Mt=null}}function Oa(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,fb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Gf(),te=e,Mt=a=Ui(e.current,null),zt=i,Kt=0,yn=null,Ar=!1,Ia=es(e,i),Lf=!1,Ca=Mn=zf=Ds=br=ce=0,on=il=null,Bf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ge(l),d=1<<h;i|=e[h],l&=~d}return Yi=i,yu(),a}function Iy(e,i){Dt=null,j.H=ku,i===Bo||i===Ru?(i=Fg(),Kt=3):i===qg?(i=Fg(),Kt=4):Kt=i===Gp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yn=i,Mt===null&&(ce=1,qu(e,In(i,e.current)))}function Cy(){var e=j.H;return j.H=ku,e===null?ku:e}function Dy(){var e=j.A;return j.A=QA,e}function Qf(){ce=4,Ar||(zt&4194048)!==zt&&On.current!==null||(Ia=!0),(br&134217727)===0&&(Ds&134217727)===0||te===null||Rr(te,zt,Mn,!1)}function Kf(e,i,a){var l=Qt;Qt|=2;var h=Cy(),d=Dy();(te!==e||zt!==i)&&(Yu=null,Oa(e,i)),i=!1;var v=ce;t:do try{if(Kt!==0&&Mt!==null){var E=Mt,S=yn;switch(Kt){case 8:Gf(),v=6;break t;case 3:case 2:case 9:case 6:On.current===null&&(i=!0);var L=Kt;if(Kt=0,yn=null,Ma(e,E,S,L),a&&Ia){v=0;break t}break;default:L=Kt,Kt=0,yn=null,Ma(e,E,S,L)}}XA(),v=ce;break}catch(F){Iy(e,F)}while(!0);return i&&e.shellSuspendCounter++,Bi=bs=null,Qt=l,j.H=h,j.A=d,Mt===null&&(te=null,zt=0,yu()),v}function XA(){for(;Mt!==null;)Ny(Mt)}function $A(e,i){var a=Qt;Qt|=2;var l=Cy(),h=Dy();te!==e||zt!==i?(Yu=null,Ku=Ne()+500,Oa(e,i)):Ia=es(e,i);t:do try{if(Kt!==0&&Mt!==null){i=Mt;var d=yn;e:switch(Kt){case 1:Kt=0,yn=null,Ma(e,i,d,1);break;case 2:case 9:if(Hg(d)){Kt=0,yn=null,Oy(i);break}i=function(){Kt!==2&&Kt!==9||te!==e||(Kt=7),di(e)},d.then(i,i);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:Hg(d)?(Kt=0,yn=null,Oy(i)):(Kt=0,yn=null,Ma(e,i,d,7));break;case 5:var v=null;switch(Mt.tag){case 26:v=Mt.memoizedState;case 5:case 27:var E=Mt;if(!v||f_(v)){Kt=0,yn=null;var S=E.sibling;if(S!==null)Mt=S;else{var L=E.return;L!==null?(Mt=L,$u(L)):Mt=null}break e}}Kt=0,yn=null,Ma(e,i,d,5);break;case 6:Kt=0,yn=null,Ma(e,i,d,6);break;case 8:Gf(),ce=6;break t;default:throw Error(s(462))}}ZA();break}catch(F){Iy(e,F)}while(!0);return Bi=bs=null,j.H=l,j.A=h,Qt=a,Mt!==null?0:(te=null,zt=0,yu(),ce)}function ZA(){for(;Mt!==null&&!st();)Ny(Mt)}function Ny(e){var i=iy(e.alternate,e,Yi);e.memoizedProps=e.pendingProps,i===null?$u(e):Mt=i}function Oy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Zp(a,i,i.pendingProps,i.type,void 0,zt);break;case 11:i=Zp(a,i,i.pendingProps,i.type.render,i.ref,zt);break;case 5:lf(i);default:sy(a,i),i=Mt=Mg(i,Yi),i=iy(a,i,Yi)}e.memoizedProps=e.pendingProps,i===null?$u(e):Mt=i}function Ma(e,i,a,l){Bi=bs=null,lf(i),ba=null,Xo=0;var h=i.return;try{if(BA(e,h,i,a,zt)){ce=1,qu(e,In(a,e.current)),Mt=null;return}}catch(d){if(h!==null)throw Mt=h,d;ce=1,qu(e,In(a,e.current)),Mt=null;return}i.flags&32768?(Ht||l===1?e=!0:Ia||(zt&536870912)!==0?e=!1:(Ar=e=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),My(i,e)):$u(i)}function $u(e){var i=e;do{if((i.flags&32768)!==0){My(i,Ar);return}e=i.return;var a=HA(i.alternate,i,Yi);if(a!==null){Mt=a;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=e}while(i!==null);ce===0&&(ce=5)}function My(e,i){do{var a=jA(e.alternate,e);if(a!==null){a.flags&=32767,Mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=a}while(e!==null);ce=6,Mt=null}function Vy(e,i,a,l,h,d,v,E,S){e.cancelPendingCommit=null;do Zu();while(Be!==0);if((Qt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=kh,go(e,a,d,v,E,S),e===te&&(Mt=te=null,zt=0),Da=i,wr=e,Na=a,Hf=d,jf=h,by=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,eb(bi,function(){return Ly(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,h=nt.p,nt.p=2,v=Qt,Qt|=4;try{FA(e,i,a)}finally{Qt=v,nt.p=h,j.T=l}}Be=1,xy(),Py(),ky()}}function xy(){if(Be===1){Be=0;var e=wr,i=Da,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var l=nt.p;nt.p=2;var h=Qt;Qt|=4;try{py(i,e);var d=sd,v=Ag(e.containerInfo),E=d.focusedElem,S=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Tg(E.ownerDocument.documentElement,E)){if(S!==null&&Oh(E)){var L=S.start,F=S.end;if(F===void 0&&(F=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(F,E.value.length);else{var K=E.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),Et=E.textContent.length,gt=Math.min(S.start,Et),Wt=S.end===void 0?gt:Math.min(S.end,Et);!B.extend&&gt>Wt&&(v=Wt,Wt=gt,gt=v);var x=Eg(E,gt),N=Eg(E,Wt);if(x&&N&&(B.rangeCount!==1||B.anchorNode!==x.node||B.anchorOffset!==x.offset||B.focusNode!==N.node||B.focusOffset!==N.offset)){var U=K.createRange();U.setStart(x.node,x.offset),B.removeAllRanges(),gt>Wt?(B.addRange(U),B.extend(N.node,N.offset)):(U.setEnd(N.node,N.offset),B.addRange(U))}}}}for(K=[],B=E;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<K.length;E++){var Q=K[E];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}uc=!!rd,sd=rd=null}finally{Qt=h,nt.p=l,j.T=a}}e.current=i,Be=2}}function Py(){if(Be===2){Be=0;var e=wr,i=Da,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var l=nt.p;nt.p=2;var h=Qt;Qt|=4;try{fy(e,i.alternate,i)}finally{Qt=h,nt.p=l,j.T=a}}Be=3}}function ky(){if(Be===4||Be===3){Be=0,oe();var e=wr,i=Da,a=Na,l=by;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Be=5:(Be=0,Da=wr=null,Uy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Sr=null),Xs(a),i=i.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(le,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=j.T,h=nt.p,nt.p=2,j.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{j.T=i,nt.p=h}}(Na&3)!==0&&Zu(),di(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Ff?rl++:(rl=0,Ff=e):rl=0,sl(0)}}function Uy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Lo(i)))}function Zu(e){return xy(),Py(),ky(),Ly()}function Ly(){if(Be!==5)return!1;var e=wr,i=Hf;Hf=0;var a=Xs(Na),l=j.T,h=nt.p;try{nt.p=32>a?32:a,j.T=null,a=jf,jf=null;var d=wr,v=Na;if(Be=0,Da=wr=null,Na=0,(Qt&6)!==0)throw Error(s(331));var E=Qt;if(Qt|=4,Ty(d.current),_y(d,d.current,v,a),Qt=E,sl(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(le,d)}catch{}return!0}finally{nt.p=h,j.T=l,Uy(e,i)}}function zy(e,i,a){i=In(a,i),i=Af(e.stateNode,i,2),e=gr(e,i,2),e!==null&&(Ri(e,2),di(e))}function Jt(e,i,a){if(e.tag===3)zy(e,e,a);else for(;i!==null;){if(i.tag===3){zy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sr===null||!Sr.has(l))){e=In(a,e),a=jp(2),l=gr(i,a,2),l!==null&&(Fp(a,l,i,e),Ri(l,2),di(l));break}}i=i.return}}function Yf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new KA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Lf=!0,h.add(a),e=WA.bind(null,e,i,a),i.then(e,e))}function WA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,te===e&&(zt&a)===a&&(ce===4||ce===3&&(zt&62914560)===zt&&300>Ne()-qf?(Qt&2)===0&&Oa(e,0):zf|=a,Ca===zt&&(Ca=0)),di(e)}function By(e,i){i===0&&(i=mo()),e=da(e,i),e!==null&&(Ri(e,i),di(e))}function JA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),By(e,a)}function tb(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),By(e,a)}function eb(e,i){return Ai(e,i)}var Wu=null,Va=null,Xf=!1,Ju=!1,$f=!1,Ns=0;function di(e){e!==Va&&e.next===null&&(Va===null?Wu=Va=e:Va=Va.next=e),Ju=!0,Xf||(Xf=!0,ib())}function sl(e,i){if(!$f&&Ju){$f=!0;do for(var a=!1,l=Wu;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Ge(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Fy(l,d))}else d=zt,d=Ys(l,l===te?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||es(l,d)||(a=!0,Fy(l,d));l=l.next}while(a);$f=!1}}function nb(){qy()}function qy(){Ju=Xf=!1;var e=0;Ns!==0&&(hb()&&(e=Ns),Ns=0);for(var i=Ne(),a=null,l=Wu;l!==null;){var h=l.next,d=Hy(l,i);d===0?(l.next=null,a===null?Wu=h:a.next=h,h===null&&(Va=a)):(a=l,(e!==0||(d&3)!==0)&&(Ju=!0)),l=h}sl(e)}function Hy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ge(d),E=1<<v,S=h[v];S===-1?((E&a)===0||(E&l)!==0)&&(h[v]=ho(E,i)):S<=i&&(e.expiredLanes|=E),d&=~E}if(i=te,a=zt,a=Ys(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&G(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||es(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&G(l),Xs(a)){case 2:case 8:a=Zr;break;case 32:a=bi;break;case 268435456:a=Ks;break;default:a=bi}return l=jy.bind(null,e),a=Ai(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&G(l),e.callbackPriority=2,e.callbackNode=null,2}function jy(e,i){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zu()&&e.callbackNode!==a)return null;var l=zt;return l=Ys(e,e===te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(wy(e,l,i),Hy(e,Ne()),e.callbackNode!=null&&e.callbackNode===a?jy.bind(null,e):null)}function Fy(e,i){if(Zu())return null;wy(e,i,!0)}function ib(){db(function(){(Qt&6)!==0?Ai($r,nb):qy()})}function Zf(){return Ns===0&&(Ns=fo()),Ns}function Gy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ea(""+e)}function Qy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function rb(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Gy((h[pe]||null).action),v=l.submitter;v&&(i=(i=v[pe]||null)?Gy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new na("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ns!==0){var S=v?Qy(h,v):new FormData(h);yf(a,{pending:!0,data:S,method:h.method,action:d},null,S)}}else typeof d=="function"&&(E.preventDefault(),S=v?Qy(h,v):new FormData(h),yf(a,{pending:!0,data:S,method:h.method,action:d},d,S))},currentTarget:h}]})}}for(var Wf=0;Wf<Ph.length;Wf++){var Jf=Ph[Wf],sb=Jf.toLowerCase(),ab=Jf[0].toUpperCase()+Jf.slice(1);Bn(sb,"on"+ab)}Bn(wg,"onAnimationEnd"),Bn(Rg,"onAnimationIteration"),Bn(Ig,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(bA,"onTransitionRun"),Bn(SA,"onTransitionStart"),Bn(wA,"onTransitionCancel"),Bn(Cg,"onTransitionEnd"),Ci("onMouseEnter",["mouseout","mouseover"]),Ci("onMouseLeave",["mouseout","mouseover"]),Ci("onPointerEnter",["pointerout","pointerover"]),Ci("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function Ky(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],S=E.instance,L=E.currentTarget;if(E=E.listener,S!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Bu(F)}h.currentTarget=null,d=S}else for(v=0;v<l.length;v++){if(E=l[v],S=E.instance,L=E.currentTarget,E=E.listener,S!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Bu(F)}h.currentTarget=null,d=S}}}}function Vt(e,i){var a=i[yo];a===void 0&&(a=i[yo]=new Set);var l=e+"__bubble";a.has(l)||(Yy(i,e,2,!1),a.add(l))}function td(e,i,a){var l=0;i&&(l|=4),Yy(a,e,l,i)}var tc="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[tc]){e[tc]=!0,_o.forEach(function(a){a!=="selectionchange"&&(ob.has(a)||td(a,!1,e),td(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[tc]||(i[tc]=!0,td("selectionchange",!1,i))}}function Yy(e,i,a,l){switch(__(i)){case 2:var h=xb;break;case 8:h=Pb;break;default:h=gd}a=h.bind(null,i,a,e),h=void 0,!wn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function nd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var S=v.tag;if((S===3||S===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=Ii(E),v===null)return;if(S=v.tag,S===5||S===6||S===26||S===27){l=d=v;continue t}E=E.parentNode}}l=l.return}nu(function(){var L=d,F=Sn(a),K=[];t:{var z=Dg.get(e);if(z!==void 0){var B=na,Et=e;switch(e){case"keypress":if(ri(a)===0)break t;case"keydown":case"keyup":B=la;break;case"focusin":Et="focus",B=sa;break;case"focusout":Et="blur",B=sa;break;case"beforeblur":case"afterblur":B=sa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=cu;break;case wg:case Rg:case Ig:B=aa;break;case Cg:B=fu;break;case"scroll":case"scrollend":B=iu;break;case"wheel":B=ua;break;case"copy":case"cut":case"paste":B=oa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=No;break;case"toggle":case"beforetoggle":B=mu}var gt=(i&4)!==0,Wt=!gt&&(e==="scroll"||e==="scrollend"),x=gt?z!==null?z+"Capture":null:z;gt=[];for(var N=L,U;N!==null;){var Q=N;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||x===null||(Q=us(N,x),Q!=null&&gt.push(ol(N,Q,U))),Wt)break;N=N.return}0<gt.length&&(z=new B(z,Et,null,a,F),K.push({event:z,listeners:gt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==Oi&&(Et=a.relatedTarget||a.fromElement)&&(Ii(Et)||Et[An]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(Et=a.relatedTarget||a.toElement,B=L,Et=Et?Ii(Et):null,Et!==null&&(Wt=c(Et),gt=Et.tag,Et!==Wt||gt!==5&&gt!==27&&gt!==6)&&(Et=null)):(B=null,Et=L),B!==Et)){if(gt=Rn,Q="onMouseLeave",x="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(gt=No,Q="onPointerLeave",x="onPointerEnter",N="pointer"),Wt=B==null?z:ti(B),U=Et==null?z:ti(Et),z=new gt(Q,N+"leave",B,a,F),z.target=Wt,z.relatedTarget=U,Q=null,Ii(F)===L&&(gt=new gt(x,N+"enter",Et,a,F),gt.target=U,gt.relatedTarget=Wt,Q=gt),Wt=Q,B&&Et)e:{for(gt=B,x=Et,N=0,U=gt;U;U=xa(U))N++;for(U=0,Q=x;Q;Q=xa(Q))U++;for(;0<N-U;)gt=xa(gt),N--;for(;0<U-N;)x=xa(x),U--;for(;N--;){if(gt===x||x!==null&&gt===x.alternate)break e;gt=xa(gt),x=xa(x)}gt=null}else gt=null;B!==null&&Xy(K,z,B,gt,!1),Et!==null&&Wt!==null&&Xy(K,Wt,Et,gt,!0)}}t:{if(z=L?ti(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var lt=mg;else if(we(z))if(gg)lt=EA;else{lt=_A;var Ot=yA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&bo(L.elementType)&&(lt=mg):lt=vA;if(lt&&(lt=lt(e,L))){ki(K,lt,a,F);break t}Ot&&Ot(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&cr(z,"number",z.value)}switch(Ot=L?ti(L):window,e){case"focusin":(we(Ot)||Ot.contentEditable==="true")&&(ca=Ot,Mh=L,Vo=null);break;case"focusout":Vo=Mh=ca=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,bg(K,a,F);break;case"selectionchange":if(AA)break;case"keydown":case"keyup":bg(K,a,F)}var ct;if(oi)t:{switch(e){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Ut?q(e,a)&&(pt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(_&&a.locale!=="ko"&&(Ut||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Ut&&(ct=wo()):(ii=F,hr="value"in ii?ii.value:ii.textContent,Ut=!0)),Ot=ec(L,pt),0<Ot.length&&(pt=new Co(pt,e,null,a,F),K.push({event:pt,listeners:Ot}),ct?pt.data=ct:(ct=et(a),ct!==null&&(pt.data=ct)))),(ct=m?Se(e,a):Lt(e,a))&&(pt=ec(L,"onBeforeInput"),0<pt.length&&(Ot=new Co("onBeforeInput","beforeinput",null,a,F),K.push({event:Ot,listeners:pt}),Ot.data=ct)),rb(K,e,L,a,F)}Ky(K,i)})}function ol(e,i,a){return{instance:e,listener:i,currentTarget:a}}function ec(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=us(e,a),h!=null&&l.unshift(ol(e,h,d)),h=us(e,i),h!=null&&l.push(ol(e,h,d))),e.tag===3)return l;e=e.return}return[]}function xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xy(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,S=E.alternate,L=E.stateNode;if(E=E.tag,S!==null&&S===l)break;E!==5&&E!==26&&E!==27||L===null||(S=L,h?(L=us(a,d),L!=null&&v.unshift(ol(a,L,S))):h||(L=us(a,d),L!=null&&v.push(ol(a,L,S)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var lb=/\r\n?/g,ub=/\u0000|\uFFFD/g;function $y(e){return(typeof e=="string"?e:""+e).replace(lb,`
`).replace(ub,"")}function Zy(e,i){return i=$y(i),$y(e)===i}function nc(){}function Zt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||bn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&bn(e,""+l);break;case"className":ei(e,"class",l);break;case"tabIndex":ei(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,a,l);break;case"style":Ao(e,l,d);break;case"data":if(i!=="object"){ei(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ea(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Zt(e,i,"name",h.name,h,null),Zt(e,i,"formEncType",h.formEncType,h,null),Zt(e,i,"formMethod",h.formMethod,h,null),Zt(e,i,"formTarget",h.formTarget,h,null)):(Zt(e,i,"encType",h.encType,h,null),Zt(e,i,"method",h.method,h,null),Zt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ea(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=nc);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ea(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),ur(e,"popover",l);break;case"xlinkActuate":Ue(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ue(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ue(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ue(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ue(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ue(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ur(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wh.get(a)||a,ur(e,a,l))}}function id(e,i,a,l,h,d){switch(a){case"style":Ao(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?bn(e,l):(typeof l=="number"||typeof l=="bigint")&&bn(e,""+l);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=nc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$s.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[pe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ur(e,a,l)}}}function qe(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,d,v,a,null)}}h&&Zt(e,i,"srcSet",a.srcSet,a,null),l&&Zt(e,i,"src",a.src,a,null);return;case"input":Vt("invalid",e);var E=d=v=h=null,S=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":S=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Zt(e,i,l,F,a,null)}}as(e,d,E,S,L,v,h,!1),ta(e);return;case"select":Vt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:Zt(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ni(e,!!l,i,!1):a!=null&&Ni(e,!!l,a,!0);return;case"textarea":Vt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Zt(e,i,v,E,a,null)}os(e,l,h,d),ta(e);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Zt(e,i,S,l,a,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(l=0;l<al.length;l++)Vt(al[l],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,L,l,a,null)}return;default:if(bo(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&id(e,i,F,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Zt(e,i,E,l,a,null))}function cb(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,S=null,L=null,F=null;for(B in a){var K=a[B];if(a.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":S=K;default:l.hasOwnProperty(B)||Zt(e,i,B,null,l,K)}}for(var z in l){var B=l[z];if(K=a[z],l.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==K&&Zt(e,i,z,B,l,K)}}fn(e,v,E,S,L,F,d,h);return;case"select":B=v=E=z=null;for(d in a)if(S=a[d],a.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":B=S;default:l.hasOwnProperty(d)||Zt(e,i,d,null,l,S)}for(h in l)if(d=l[h],S=a[h],l.hasOwnProperty(h)&&(d!=null||S!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==S&&Zt(e,i,h,d,l,S)}i=E,a=v,l=B,z!=null?Ni(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ni(e,!!a,i,!0):Ni(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Zt(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Zt(e,i,v,h,l,d)}Xt(e,z,B);return;case"option":for(var Et in a)if(z=a[Et],a.hasOwnProperty(Et)&&z!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Zt(e,i,Et,null,l,z)}for(S in l)if(z=l[S],B=a[S],l.hasOwnProperty(S)&&z!==B&&(z!=null||B!=null))switch(S){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Zt(e,i,S,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in a)z=a[gt],a.hasOwnProperty(gt)&&z!=null&&!l.hasOwnProperty(gt)&&Zt(e,i,gt,null,l,z);for(L in l)if(z=l[L],B=a[L],l.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Zt(e,i,L,z,l,B)}return;default:if(bo(i)){for(var Wt in a)z=a[Wt],a.hasOwnProperty(Wt)&&z!==void 0&&!l.hasOwnProperty(Wt)&&id(e,i,Wt,void 0,l,z);for(F in l)z=l[F],B=a[F],!l.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||id(e,i,F,z,l,B);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&Zt(e,i,x,null,l,z);for(K in l)z=l[K],B=a[K],!l.hasOwnProperty(K)||z===B||z==null&&B==null||Zt(e,i,K,z,l,B)}var rd=null,sd=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function Wy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ad(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var od=null;function hb(){var e=window.event;return e&&e.type==="popstate"?e===od?!1:(od=e,!0):(od=null,!1)}var t_=typeof setTimeout=="function"?setTimeout:void 0,fb=typeof clearTimeout=="function"?clearTimeout:void 0,e_=typeof Promise=="function"?Promise:void 0,db=typeof queueMicrotask=="function"?queueMicrotask:typeof e_<"u"?function(e){return e_.resolve(null).then(e).catch(mb)}:t_;function mb(e){setTimeout(function(){throw e})}function Ir(e){return e==="head"}function n_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&ll(v.documentElement),a&2&&ll(v.body),a&4)for(a=v.head,ll(a),v=a.firstChild;v;){var E=v.nextSibling,S=v.nodeName;v[ns]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),pl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);pl(i)}function ld(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gb(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ns])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Hn(e.nextSibling),e===null)break}return null}function pb(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Hn(e.nextSibling),e===null))return null;return e}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yb(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Hn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var cd=null;function i_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function r_(e,i,a){switch(i=ic(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ll(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);lr(e)}var Vn=new Map,s_=new Set;function rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xi=nt.d;nt.d={f:_b,r:vb,D:Eb,C:Tb,L:Ab,m:bb,X:wb,S:Sb,M:Rb};function _b(){var e=Xi.f(),i=Xu();return e||i}function vb(e){var i=Jn(e);i!==null&&i.tag===5&&i.type==="form"?wp(i):Xi.r(e)}var Pa=typeof document>"u"?null:document;function a_(e,i,a){var l=Pa;if(l&&typeof i=="string"&&i){var h=ye(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),s_.has(h)||(s_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),qe(i,"link",e),he(i),l.head.appendChild(i)))}}function Eb(e){Xi.D(e),a_("dns-prefetch",e,null)}function Tb(e,i){Xi.C(e,i),a_("preconnect",e,i)}function Ab(e,i,a){Xi.L(e,i,a);var l=Pa;if(l&&e&&i){var h='link[rel="preload"][as="'+ye(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ye(a.imageSizes)+'"]')):h+='[href="'+ye(e)+'"]';var d=h;switch(i){case"style":d=ka(e);break;case"script":d=Ua(e)}Vn.has(d)||(e=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Vn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ul(d))||i==="script"&&l.querySelector(cl(d))||(i=l.createElement("link"),qe(i,"link",e),he(i),l.head.appendChild(i)))}}function bb(e,i){Xi.m(e,i);var a=Pa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ye(l)+'"][href="'+ye(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ua(e)}if(!Vn.has(d)&&(e=T({rel:"modulepreload",href:e},i),Vn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(d)))return}l=a.createElement("link"),qe(l,"link",e),he(l),a.head.appendChild(l)}}}function Sb(e,i,a){Xi.S(e,i,a);var l=Pa;if(l&&e){var h=tn(l).hoistableStyles,d=ka(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(ul(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Vn.get(d))&&hd(e,a);var S=v=l.createElement("link");he(S),qe(S,"link",e),S._p=new Promise(function(L,F){S.onload=L,S.onerror=F}),S.addEventListener("load",function(){E.loading|=1}),S.addEventListener("error",function(){E.loading|=2}),E.loading|=4,sc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function wb(e,i){Xi.X(e,i);var a=Pa;if(a&&e){var l=tn(a).hoistableScripts,h=Ua(e),d=l.get(h);d||(d=a.querySelector(cl(h)),d||(e=T({src:e,async:!0},i),(i=Vn.get(h))&&fd(e,i),d=a.createElement("script"),he(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Rb(e,i){Xi.M(e,i);var a=Pa;if(a&&e){var l=tn(a).hoistableScripts,h=Ua(e),d=l.get(h);d||(d=a.querySelector(cl(h)),d||(e=T({src:e,async:!0,type:"module"},i),(i=Vn.get(h))&&fd(e,i),d=a.createElement("script"),he(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function o_(e,i,a,l){var h=(h=vt.current)?rc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=ka(a.href),a=tn(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ka(a.href);var d=tn(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(ul(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Vn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vn.set(e,a),d||Ib(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ua(a),a=tn(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ka(e){return'href="'+ye(e)+'"'}function ul(e){return'link[rel="stylesheet"]['+e+"]"}function l_(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Ib(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),qe(i,"link",a),he(i),e.head.appendChild(i))}function Ua(e){return'[src="'+ye(e)+'"]'}function cl(e){return"script[async]"+e}function u_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ye(a.href)+'"]');if(l)return i.instance=l,he(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),he(l),qe(l,"style",h),sc(l,a.precedence,e),i.instance=l;case"stylesheet":h=ka(a.href);var d=e.querySelector(ul(h));if(d)return i.state.loading|=4,i.instance=d,he(d),d;l=l_(a),(h=Vn.get(h))&&hd(l,h),d=(e.ownerDocument||e).createElement("link"),he(d);var v=d;return v._p=new Promise(function(E,S){v.onload=E,v.onerror=S}),qe(d,"link",l),i.state.loading|=4,sc(d,a.precedence,e),i.instance=d;case"script":return d=Ua(a.src),(h=e.querySelector(cl(d)))?(i.instance=h,he(h),h):(l=a,(h=Vn.get(d))&&(l=T({},a),fd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),he(h),qe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,sc(l,a.precedence,e));return i.instance}function sc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function hd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ac=null;function c_(e,i,a){if(ac===null){var l=new Map,h=ac=new Map;h.set(a,l)}else h=ac,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ns]||d[be]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function h_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function Cb(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function f_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var hl=null;function Db(){}function Nb(e,i,a){if(hl===null)throw Error(s(475));var l=hl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=ka(a.href),d=e.querySelector(ul(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=oc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,he(d);return}d=e.ownerDocument||e,a=l_(a),(h=Vn.get(h))&&hd(a,h),d=d.createElement("link"),he(d);var v=d;v._p=new Promise(function(E,S){v.onload=E,v.onerror=S}),qe(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=oc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function Ob(){if(hl===null)throw Error(s(475));var e=hl;return e.stylesheets&&e.count===0&&dd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&dd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function oc(){if(this.count--,this.count===0){if(this.stylesheets)dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function dd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,i.forEach(Mb,e),lc=null,oc.call(e))}function Mb(e,i){if(!(i.state.loading&4)){var a=lc.get(e);if(a)var l=a.get(null);else{a=new Map,lc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=oc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var fl={$$typeof:ht,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function Vb(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.hiddenUpdates=wi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function d_(e,i,a,l,h,d,v,E,S,L,F,K){return e=new Vb(e,i,a,v,E,S,L,K),i=1,d===!0&&(i|=24),d=mn(3,null,null,i),e.current=d,d.stateNode=e,i=Kh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Zh(d),e}function m_(e){return e?(e=ma,e):ma}function g_(e,i,a,l,h,d){h=m_(h),l.context===null?l.context=h:l.pendingContext=h,l=mr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=gr(e,l,i),a!==null&&(vn(a,e,i),Ho(a,e,i))}function p_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function md(e,i){p_(e,i),(e=e.alternate)&&p_(e,i)}function y_(e){if(e.tag===13){var i=da(e,67108864);i!==null&&vn(i,e,67108864),md(e,67108864)}}var uc=!0;function xb(e,i,a,l){var h=j.T;j.T=null;var d=nt.p;try{nt.p=2,gd(e,i,a,l)}finally{nt.p=d,j.T=h}}function Pb(e,i,a,l){var h=j.T;j.T=null;var d=nt.p;try{nt.p=8,gd(e,i,a,l)}finally{nt.p=d,j.T=h}}function gd(e,i,a,l){if(uc){var h=pd(l);if(h===null)nd(e,i,l,cc,a),v_(e,l);else if(Ub(h,e,i,a,l))l.stopPropagation();else if(v_(e,l),i&4&&-1<kb.indexOf(e)){for(;h!==null;){var d=Jn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Un(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var S=1<<31-Ge(v);E.entanglements[1]|=S,v&=~S}di(d),(Qt&6)===0&&(Ku=Ne()+500,sl(0))}}break;case 13:E=da(d,2),E!==null&&vn(E,d,2),Xu(),md(d,2)}if(d=pd(l),d===null&&nd(e,i,l,cc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else nd(e,i,l,null,a)}}function pd(e){return e=Sn(e),yd(e)}var cc=null;function yd(e){if(cc=null,e=Ii(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return cc=e,null}function __(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(uo()){case $r:return 2;case Zr:return 8;case bi:case Si:return 32;case Ks:return 268435456;default:return 32}default:return 32}}var _d=!1,Cr=null,Dr=null,Nr=null,dl=new Map,ml=new Map,Or=[],kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v_(e,i){switch(e){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(i.pointerId)}}function gl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Jn(i),i!==null&&y_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function Ub(e,i,a,l,h){switch(i){case"focusin":return Cr=gl(Cr,e,i,a,l,h),!0;case"dragenter":return Dr=gl(Dr,e,i,a,l,h),!0;case"mouseover":return Nr=gl(Nr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return dl.set(d,gl(dl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,ml.set(d,gl(ml.get(d)||null,e,i,a,l,h)),!0}return!1}function E_(e){var i=Ii(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Xl(e.priority,function(){if(a.tag===13){var l=_n();l=sr(l);var h=da(a,l);h!==null&&vn(h,a,l),md(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=pd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Oi=l,a.target.dispatchEvent(l),Oi=null}else return i=Jn(a),i!==null&&y_(i),e.blockedOn=a,!1;i.shift()}return!0}function T_(e,i,a){hc(e)&&a.delete(i)}function Lb(){_d=!1,Cr!==null&&hc(Cr)&&(Cr=null),Dr!==null&&hc(Dr)&&(Dr=null),Nr!==null&&hc(Nr)&&(Nr=null),dl.forEach(T_),ml.forEach(T_)}function fc(e,i){e.blockedOn===i&&(e.blockedOn=null,_d||(_d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Lb)))}var dc=null;function A_(e){dc!==e&&(dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(yd(l||a)===null)continue;break}var d=Jn(a);d!==null&&(e.splice(i,3),i-=3,yf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function pl(e){function i(S){return fc(S,e)}Cr!==null&&fc(Cr,e),Dr!==null&&fc(Dr,e),Nr!==null&&fc(Nr,e),dl.forEach(i),ml.forEach(i);for(var a=0;a<Or.length;a++){var l=Or[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Or.length&&(a=Or[0],a.blockedOn===null);)E_(a),a.blockedOn===null&&Or.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[pe]||null;if(typeof d=="function")v||A_(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[pe]||null)E=v.formAction;else if(yd(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),A_(a)}}}function vd(e){this._internalRoot=e}mc.prototype.render=vd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=_n();g_(a,l,e,i,null,null)},mc.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;g_(e.current,2,null,e,null,null),Xu(),i[An]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var i=ar();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Or.length&&i!==0&&i<Or[a].priority;a++);Or.splice(a,0,e),a===0&&E_(e)}};var b_=t.version;if(b_!=="19.1.0")throw Error(s(527,b_,"19.1.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var zb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{le=gc.inject(zb),Gt=gc}catch{}}return yl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=zp,d=Bp,v=qp,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=d_(e,1,!1,null,null,a,l,h,d,v,E,null),e[An]=i.current,ed(e),new vd(i)},yl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=zp,v=Bp,E=qp,S=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=d_(e,1,!0,i,a??null,l,h,d,v,E,S,L),i.context=m_(null),a=i.current,l=_n(),l=sr(l),h=mr(l),h.callback=null,gr(a,h,l),a=l,i.current.lanes=a,Ri(i,a),di(i),e[An]=i.current,ed(e),new mc(i)},yl.version="19.1.0",yl}var O_;function Yb(){if(O_)return Td.exports;O_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Td.exports=Kb(),Td.exports}var Xb=Yb();const $b=()=>{};var M_={};/**
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
 */const vE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Zb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];t[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],f=r[n++],g=r[n++],p=((o&7)<<18|(c&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return t.join("")},EE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,g=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,T=c>>2,R=(c&3)<<4|g>>4;let D=(g&15)<<2|y>>6,H=y&63;p||(H=64,f||(D=64)),s.push(n[T],n[R],n[D],n[H])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(vE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Zb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],g=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const R=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||g==null||y==null||R==null)throw new Wb;const D=c<<2|g>>4;if(s.push(D),y!==64){const H=g<<4&240|y>>2;if(s.push(H),R!==64){const W=y<<6&192|R;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jb=function(r){const t=vE(r);return EE.encodeByteArray(t,!0)},Vc=function(r){return Jb(r).replace(/\./g,"")},TE=function(r){try{return EE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const eS=()=>tS().__FIREBASE_DEFAULTS__,nS=()=>{if(typeof process>"u"||typeof M_>"u")return;const r=M_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},iS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&TE(r[1]);return t&&JSON.parse(t)},eh=()=>{try{return $b()||eS()||nS()||iS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},AE=r=>{var t,n;return(n=(t=eh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},rS=r=>{const t=AE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},bE=()=>{var r;return(r=eh())===null||r===void 0?void 0:r.config},SE=r=>{var t;return(t=eh())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */function to(r){return r.endsWith(".cloudworkstations.dev")}async function wE(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function aS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Vc(JSON.stringify(n)),Vc(JSON.stringify(f)),""].join(".")}const bl={};function oS(){const r={prod:[],emulator:[]};for(const t of Object.keys(bl))bl[t]?r.emulator.push(t):r.prod.push(t);return r}function lS(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let V_=!1;function RE(r,t){if(typeof window>"u"||typeof document>"u"||!to(window.location.host)||bl[r]===t||bl[r]||V_)return;bl[r]=t;function n(D){return`__firebase__banner__${D}`}const s="__firebase__banner",c=oS().prod.length>0;function f(){const D=document.getElementById(s);D&&D.remove()}function g(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function p(D,H){D.setAttribute("width","24"),D.setAttribute("id",H),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function y(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{V_=!0,f()},D}function T(D,H){D.setAttribute("id",H),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function R(){const D=lS(s),H=n("text"),W=document.getElementById(H)||document.createElement("span"),rt=n("learnmore"),J=document.getElementById(rt)||document.createElement("a"),St=n("preprendIcon"),dt=document.getElementById(St)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const ht=D.element;g(ht),T(J,rt);const It=y();p(dt,St),ht.append(dt,W,J,It),document.body.appendChild(ht)}c?(W.innerText="Preview backend disconnected.",dt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(dt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",R):R()}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function cS(){var r;const t=(r=eh())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function fS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dS(){const r=We();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function mS(){return!cS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CE(){try{return typeof indexedDB=="object"}catch{return!1}}function DE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){t(n)}})}function gS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pS="FirebaseError";class $n extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=pS,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,c=this.errors[t],f=c?yS(c,s):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new $n(o,g,s)}}function yS(r,t){return r.replace(_S,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const _S=/\{\$([^}]+)}/g;function vS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function jr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const c=r[o],f=t[o];if(x_(c)&&x_(f)){if(!jr(c,f))return!1}else if(c!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function x_(r){return r!==null&&typeof r=="object"}/**
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
 */function Ll(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function ES(r,t){const n=new TS(r,t);return n.subscribe.bind(n)}class TS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");AS(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=wd),o.error===void 0&&(o.error=wd),o.complete===void 0&&(o.complete=wd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function wd(){}/**
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
 */const bS=1e3,SS=2,wS=4*60*60*1e3,RS=.5;function P_(r,t=bS,n=SS){const s=t*Math.pow(n,r),o=Math.round(RS*s*(Math.random()-.5)*2);return Math.min(wS,s+o)}/**
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
 */function Je(r){return r&&r._delegate?r._delegate:r}class Yn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Os="[DEFAULT]";/**
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
 */class IS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new sS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),o=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(DS(t))try{this.getOrInitializeService({instanceIdentifier:Os})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(t=Os){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Os){return this.instances.has(t)}getOptions(t=Os){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(o,c);const f=this.instances.get(o);return f&&t(f,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:CS(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Os){return this.component?this.component.multipleInstances?t:Os:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(r){return r===Os?void 0:r}function DS(r){return r.instantiationMode==="EAGER"}/**
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
 */var xt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xt||(xt={}));const OS={debug:xt.DEBUG,verbose:xt.VERBOSE,info:xt.INFO,warn:xt.WARN,error:xt.ERROR,silent:xt.SILENT},MS=xt.INFO,VS={[xt.DEBUG]:"log",[xt.VERBOSE]:"log",[xt.INFO]:"info",[xt.WARN]:"warn",[xt.ERROR]:"error"},xS=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=VS[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nh{constructor(t){this.name=t,this._logLevel=MS,this._logHandler=xS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in xt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?OS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,xt.DEBUG,...t),this._logHandler(this,xt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,xt.VERBOSE,...t),this._logHandler(this,xt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,xt.INFO,...t),this._logHandler(this,xt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,xt.WARN,...t),this._logHandler(this,xt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,xt.ERROR,...t),this._logHandler(this,xt.ERROR,...t)}}const PS=(r,t)=>t.some(n=>r instanceof n);let k_,U_;function kS(){return k_||(k_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function US(){return U_||(U_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NE=new WeakMap,Bd=new WeakMap,OE=new WeakMap,Rd=new WeakMap,dm=new WeakMap;function LS(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(zr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&NE.set(n,r)}).catch(()=>{}),dm.set(t,r),t}function zS(r){if(Bd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});Bd.set(r,t)}let qd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Bd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||OE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function BS(r){qd=r(qd)}function qS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Id(this),t,...n);return OE.set(s,t.sort?t.sort():[t]),zr(s)}:US().includes(r)?function(...t){return r.apply(Id(this),t),zr(NE.get(this))}:function(...t){return zr(r.apply(Id(this),t))}}function HS(r){return typeof r=="function"?qS(r):(r instanceof IDBTransaction&&zS(r),PS(r,kS())?new Proxy(r,qd):r)}function zr(r){if(r instanceof IDBRequest)return LS(r);if(Rd.has(r))return Rd.get(r);const t=HS(r);return t!==r&&(Rd.set(r,t),dm.set(t,r)),t}const Id=r=>dm.get(r);function ME(r,t,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const f=indexedDB.open(r,t),g=zr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(zr(f.result),p.oldVersion,p.newVersion,zr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const jS=["get","getKey","getAll","getAllKeys","count"],FS=["put","add","delete","clear"],Cd=new Map;function L_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Cd.get(t))return Cd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=FS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||jS.includes(n)))return;const c=async function(f,...g){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),o&&p.done]))[0]};return Cd.set(t,c),c}BS(r=>({...r,get:(t,n,s)=>L_(t,n)||r.get(t,n,s),has:(t,n)=>!!L_(t,n)||r.has(t,n)}));/**
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
 */class GS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function QS(r){const t=r.getComponent();return t?.type==="VERSION"}const Hd="@firebase/app",z_="0.13.1";/**
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
 */const tr=new nh("@firebase/app"),KS="@firebase/app-compat",YS="@firebase/analytics-compat",XS="@firebase/analytics",$S="@firebase/app-check-compat",ZS="@firebase/app-check",WS="@firebase/auth",JS="@firebase/auth-compat",t1="@firebase/database",e1="@firebase/data-connect",n1="@firebase/database-compat",i1="@firebase/functions",r1="@firebase/functions-compat",s1="@firebase/installations",a1="@firebase/installations-compat",o1="@firebase/messaging",l1="@firebase/messaging-compat",u1="@firebase/performance",c1="@firebase/performance-compat",h1="@firebase/remote-config",f1="@firebase/remote-config-compat",d1="@firebase/storage",m1="@firebase/storage-compat",g1="@firebase/firestore",p1="@firebase/ai",y1="@firebase/firestore-compat",_1="firebase",v1="11.9.0";/**
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
 */const jd="[DEFAULT]",E1={[Hd]:"fire-core",[KS]:"fire-core-compat",[XS]:"fire-analytics",[YS]:"fire-analytics-compat",[ZS]:"fire-app-check",[$S]:"fire-app-check-compat",[WS]:"fire-auth",[JS]:"fire-auth-compat",[t1]:"fire-rtdb",[e1]:"fire-data-connect",[n1]:"fire-rtdb-compat",[i1]:"fire-fn",[r1]:"fire-fn-compat",[s1]:"fire-iid",[a1]:"fire-iid-compat",[o1]:"fire-fcm",[l1]:"fire-fcm-compat",[u1]:"fire-perf",[c1]:"fire-perf-compat",[h1]:"fire-rc",[f1]:"fire-rc-compat",[d1]:"fire-gcs",[m1]:"fire-gcs-compat",[g1]:"fire-fst",[y1]:"fire-fst-compat",[p1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
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
 */const xc=new Map,T1=new Map,Fd=new Map;function B_(r,t){try{r.container.addComponent(t)}catch(n){tr.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function _i(r){const t=r.name;if(Fd.has(t))return tr.debug(`There were multiple attempts to register component ${t}.`),!1;Fd.set(t,r);for(const n of xc.values())B_(n,r);for(const n of T1.values())B_(n,r);return!0}function Hs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function jn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const A1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new qs("app","Firebase",A1);/**
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
 */class b1{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=v1;function VE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:jd,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw Br.create("bad-app-name",{appName:String(o)});if(n||(n=bE()),!n)throw Br.create("no-options");const c=xc.get(o);if(c){if(jr(n,c.options)&&jr(s,c.config))return c;throw Br.create("duplicate-app",{appName:o})}const f=new NS(o);for(const p of Fd.values())f.addComponent(p);const g=new b1(n,s,f);return xc.set(o,g),g}function mm(r=jd){const t=xc.get(r);if(!t&&r===jd&&bE())return VE();if(!t)throw Br.create("no-app",{appName:r});return t}function Pn(r,t,n){var s;let o=(s=E1[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const c=o.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const g=[`Unable to register library "${o}" with version "${t}":`];c&&g.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tr.warn(g.join(" "));return}_i(new Yn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const S1="firebase-heartbeat-database",w1=1,Nl="firebase-heartbeat-store";let Dd=null;function xE(){return Dd||(Dd=ME(S1,w1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Nl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Br.create("idb-open",{originalErrorMessage:r.message})})),Dd}async function R1(r){try{const n=(await xE()).transaction(Nl),s=await n.objectStore(Nl).get(PE(r));return await n.done,s}catch(t){if(t instanceof $n)tr.warn(t.message);else{const n=Br.create("idb-get",{originalErrorMessage:t?.message});tr.warn(n.message)}}}async function q_(r,t){try{const s=(await xE()).transaction(Nl,"readwrite");await s.objectStore(Nl).put(t,PE(r)),await s.done}catch(n){if(n instanceof $n)tr.warn(n.message);else{const s=Br.create("idb-set",{originalErrorMessage:n?.message});tr.warn(s.message)}}}function PE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const I1=1024,C1=30;class D1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=H_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>C1){const f=M1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){tr.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=H_(),{heartbeatsToSend:s,unsentEntries:o}=N1(this._heartbeatsCache.heartbeats),c=Vc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return tr.warn(n),""}}}function H_(){return new Date().toISOString().substring(0,10)}function N1(r,t=I1){const n=[];let s=r.slice();for(const o of r){const c=n.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),j_(n)>t){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),j_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class O1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CE()?DE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return q_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return q_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function j_(r){return Vc(JSON.stringify({version:2,heartbeats:r})).length}function M1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function V1(r){_i(new Yn("platform-logger",t=>new GS(t),"PRIVATE")),_i(new Yn("heartbeat",t=>new D1(t),"PRIVATE")),Pn(Hd,z_,r),Pn(Hd,z_,"esm2017"),Pn("fire-js","")}V1("");var x1="firebase",P1="11.9.1";/**
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
 */Pn(x1,P1,"app");const kE="@firebase/installations",gm="0.6.17";/**
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
 */const UE=1e4,LE=`w:${gm}`,zE="FIS_v2",k1="https://firebaseinstallations.googleapis.com/v1",U1=60*60*1e3,L1="installations",z1="Installations";/**
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
 */const B1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ks=new qs(L1,z1,B1);function BE(r){return r instanceof $n&&r.code.includes("request-failed")}/**
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
 */function qE({projectId:r}){return`${k1}/projects/${r}/installations`}function HE(r){return{token:r.token,requestStatus:2,expiresIn:H1(r.expiresIn),creationTime:Date.now()}}async function jE(r,t){const s=(await t.json()).error;return ks.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function FE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function q1(r,{refreshToken:t}){const n=FE(r);return n.append("Authorization",j1(t)),n}async function GE(r){const t=await r();return t.status>=500&&t.status<600?r():t}function H1(r){return Number(r.replace("s","000"))}function j1(r){return`${zE} ${r}`}/**
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
 */const Q1=/^[cdef][\w-]{21}$/,Gd="";function K1(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=Y1(r);return Q1.test(n)?n:Gd}catch{return Gd}}function Y1(r){return G1(r).substr(0,22)}/**
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
 */function ih(r){return`${r.appName}!${r.appId}`}/**
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
 */const KE=new Map;function YE(r,t){const n=ih(r);XE(n,t),X1(n,t)}function XE(r,t){const n=KE.get(r);if(n)for(const s of n)s(t)}function X1(r,t){const n=$1();n&&n.postMessage({key:r,fid:t}),Z1()}let Ms=null;function $1(){return!Ms&&"BroadcastChannel"in self&&(Ms=new BroadcastChannel("[Firebase] FID Change"),Ms.onmessage=r=>{XE(r.data.key,r.data.fid)}),Ms}function Z1(){KE.size===0&&Ms&&(Ms.close(),Ms=null)}/**
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
 */const W1="firebase-installations-database",J1=1,Us="firebase-installations-store";let Nd=null;function pm(){return Nd||(Nd=ME(W1,J1,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Us)}}})),Nd}async function Pc(r,t){const n=ih(r),o=(await pm()).transaction(Us,"readwrite"),c=o.objectStore(Us),f=await c.get(n);return await c.put(t,n),await o.done,(!f||f.fid!==t.fid)&&YE(r,t.fid),t}async function $E(r){const t=ih(r),s=(await pm()).transaction(Us,"readwrite");await s.objectStore(Us).delete(t),await s.done}async function rh(r,t){const n=ih(r),o=(await pm()).transaction(Us,"readwrite"),c=o.objectStore(Us),f=await c.get(n),g=t(f);return g===void 0?await c.delete(n):await c.put(g,n),await o.done,g&&(!f||f.fid!==g.fid)&&YE(r,g.fid),g}/**
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
 */async function ym(r){let t;const n=await rh(r.appConfig,s=>{const o=tw(s),c=ew(r,o);return t=c.registrationPromise,c.installationEntry});return n.fid===Gd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function tw(r){const t=r||{fid:K1(),registrationStatus:0};return ZE(t)}function ew(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ks.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=nw(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:iw(r)}:{installationEntry:t}}async function nw(r,t){try{const n=await F1(r,t);return Pc(r.appConfig,n)}catch(n){throw BE(n)&&n.customData.serverCode===409?await $E(r.appConfig):await Pc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function iw(r){let t=await F_(r.appConfig);for(;t.registrationStatus===1;)await QE(100),t=await F_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ym(r);return s||n}return t}function F_(r){return rh(r,t=>{if(!t)throw ks.create("installation-not-found");return ZE(t)})}function ZE(r){return rw(r)?{fid:r.fid,registrationStatus:0}:r}function rw(r){return r.registrationStatus===1&&r.registrationTime+UE<Date.now()}/**
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
 */async function _m(r,t=!1){let n;const s=await rh(r.appConfig,c=>{if(!WE(c))throw ks.create("not-registered");const f=c.authToken;if(!t&&uw(f))return c;if(f.requestStatus===1)return n=ow(r,t),c;{if(!navigator.onLine)throw ks.create("app-offline");const g=hw(c);return n=lw(r,g),g}});return n?await n:s.authToken}async function ow(r,t){let n=await G_(r.appConfig);for(;n.authToken.requestStatus===1;)await QE(100),n=await G_(r.appConfig);const s=n.authToken;return s.requestStatus===0?_m(r,t):s}function G_(r){return rh(r,t=>{if(!WE(t))throw ks.create("not-registered");const n=t.authToken;return fw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lw(r,t){try{const n=await sw(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Pc(r.appConfig,s),n}catch(n){if(BE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $E(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Pc(r.appConfig,s)}throw n}}function WE(r){return r!==void 0&&r.registrationStatus===2}function uw(r){return r.requestStatus===2&&!cw(r)}function cw(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+U1}function hw(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function fw(r){return r.requestStatus===1&&r.requestTime+UE<Date.now()}/**
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
 */async function dw(r){const t=r,{installationEntry:n,registrationPromise:s}=await ym(t);return s?s.catch(console.error):_m(t).catch(console.error),n.fid}/**
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
 */async function mw(r,t=!1){const n=r;return await gw(n),(await _m(n,t)).token}async function gw(r){const{registrationPromise:t}=await ym(r);t&&await t}/**
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
 */function pw(r){if(!r||!r.options)throw Od("App Configuration");if(!r.name)throw Od("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Od(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Od(r){return ks.create("missing-app-config-values",{valueName:r})}/**
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
 */const JE="installations",yw="installations-internal",_w=r=>{const t=r.getProvider("app").getImmediate(),n=pw(t),s=Hs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},vw=r=>{const t=r.getProvider("app").getImmediate(),n=Hs(t,JE).getImmediate();return{getId:()=>dw(n),getToken:o=>mw(n,o)}};function Ew(){_i(new Yn(JE,_w,"PUBLIC")),_i(new Yn(yw,vw,"PRIVATE"))}Ew();Pn(kE,gm);Pn(kE,gm,"esm2017");/**
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
 */const kc="analytics",Tw="firebase_id",Aw="origin",bw=60*1e3,Sw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vm="https://www.googletagmanager.com/gtag/js";/**
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
 */const un=new nh("@firebase/analytics");/**
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
 */const ww={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},En=new qs("analytics","Analytics",ww);/**
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
 */function Rw(r){if(!r.startsWith(vm)){const t=En.create("invalid-gtag-resource",{gtagURL:r});return un.warn(t.message),""}return r}function t0(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function Iw(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function Cw(r,t){const n=Iw("firebase-js-sdk-policy",{createScriptURL:Rw}),s=document.createElement("script"),o=`${vm}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function Dw(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Nw(r,t,n,s,o,c){const f=s[o];try{if(f)await t[f];else{const p=(await t0(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(g){un.error(g)}r("config",o,c)}async function Ow(r,t,n,s,o){try{let c=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const g=await t0(n);for(const p of f){const y=g.find(R=>R.measurementId===p),T=y&&t[y.appId];if(T)c.push(T);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,o||{})}catch(c){un.error(c)}}function Mw(r,t,n,s){async function o(c,...f){try{if(c==="event"){const[g,p]=f;await Ow(r,t,n,g,p)}else if(c==="config"){const[g,p]=f;await Nw(r,t,n,s,g,p)}else if(c==="consent"){const[g,p]=f;r("consent",g,p)}else if(c==="get"){const[g,p,y]=f;r("get",g,p,y)}else if(c==="set"){const[g]=f;r("set",g)}else r(c,...f)}catch(g){un.error(g)}}return o}function Vw(r,t,n,s,o){let c=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=Mw(c,r,t,n),{gtagCore:c,wrappedGtag:window[o]}}function xw(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(vm)&&n.src.includes(r))return n;return null}/**
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
 */const Pw=30,kw=1e3;class Uw{constructor(t={},n=kw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const e0=new Uw;function Lw(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function zw(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:Lw(s)},c=Sw.replace("{app-id}",n),f=await fetch(c,o);if(f.status!==200&&f.status!==304){let g="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw En.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function Bw(r,t=e0,n){const{appId:s,apiKey:o,measurementId:c}=r.options;if(!s)throw En.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:s};throw En.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new jw;return setTimeout(async()=>{g.abort()},bw),n0({appId:s,apiKey:o,measurementId:c},f,g,t)}async function n0(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=e0){var c;const{appId:f,measurementId:g}=r;try{await qw(s,t)}catch(p){if(g)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:f,measurementId:g};throw p}try{const p=await zw(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!Hw(y)){if(o.deleteThrottleMetadata(f),g)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:f,measurementId:g};throw p}const T=Number((c=y?.customData)===null||c===void 0?void 0:c.httpStatus)===503?P_(n,o.intervalMillis,Pw):P_(n,o.intervalMillis),R={throttleEndTimeMillis:Date.now()+T,backoffCount:n+1};return o.setThrottleMetadata(f,R),un.debug(`Calling attemptFetch again in ${T} millis`),n0(r,R,s,o)}}function qw(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),c=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(c),s(En.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Hw(r){if(!(r instanceof $n)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class jw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Fw(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",n,f)}}/**
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
 */async function Gw(){if(CE())try{await DE()}catch(r){return un.warn(En.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return un.warn(En.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Qw(r,t,n,s,o,c,f){var g;const p=Bw(r);p.then(H=>{n[H.measurementId]=H.appId,r.options.measurementId&&H.measurementId!==r.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${H.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(H=>un.error(H)),t.push(p);const y=Gw().then(H=>{if(H)return s.getId()}),[T,R]=await Promise.all([p,y]);xw(c)||Cw(c,T.measurementId),o("js",new Date);const D=(g=f?.config)!==null&&g!==void 0?g:{};return D[Aw]="firebase",D.update=!0,R!=null&&(D[Tw]=R),o("config",T.measurementId,D),T.measurementId}/**
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
 */class Kw{constructor(t){this.app=t}_delete(){return delete Sl[this.app.options.appId],Promise.resolve()}}let Sl={},Q_=[];const K_={};let Md="dataLayer",Yw="gtag",Y_,i0,X_=!1;function Xw(){const r=[];if(IE()&&r.push("This is a browser extension environment."),gS()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=En.create("invalid-analytics-context",{errorInfo:t});un.warn(n.message)}}function $w(r,t,n){Xw();const s=r.options.appId;if(!s)throw En.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw En.create("no-api-key");if(Sl[s]!=null)throw En.create("already-exists",{id:s});if(!X_){Dw(Md);const{wrappedGtag:c,gtagCore:f}=Vw(Sl,Q_,K_,Md,Yw);i0=c,Y_=f,X_=!0}return Sl[s]=Qw(r,Q_,K_,t,Y_,Md,n),new Kw(r)}function Zw(r=mm()){r=Je(r);const t=Hs(r,kc);return t.isInitialized()?t.getImmediate():Ww(r)}function Ww(r,t={}){const n=Hs(r,kc);if(n.isInitialized()){const o=n.getImmediate();if(jr(t,n.getOptions()))return o;throw En.create("already-initialized")}return n.initialize({options:t})}function Jw(r,t,n,s){r=Je(r),Fw(i0,Sl[r.app.options.appId],t,n,s).catch(o=>un.error(o))}const $_="@firebase/analytics",Z_="0.10.16";function tR(){_i(new Yn(kc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return $w(s,o,n)},"PUBLIC")),_i(new Yn("analytics-internal",r,"PRIVATE")),Pn($_,Z_),Pn($_,Z_,"esm2017");function r(t){try{const n=t.getProvider(kc).getImmediate();return{logEvent:(s,o,c)=>Jw(n,s,o,c)}}catch(n){throw En.create("interop-component-reg-failed",{reason:n})}}}tR();function Em(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function r0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eR=r0,s0=new qs("auth","Firebase",r0());/**
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
 */const Uc=new nh("@firebase/auth");function nR(r,...t){Uc.logLevel<=xt.WARN&&Uc.warn(`Auth (${eo}): ${r}`,...t)}function bc(r,...t){Uc.logLevel<=xt.ERROR&&Uc.error(`Auth (${eo}): ${r}`,...t)}/**
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
 */function vi(r,...t){throw Am(r,...t)}function Qn(r,...t){return Am(r,...t)}function Tm(r,t,n){const s=Object.assign(Object.assign({},eR()),{[t]:n});return new qs("auth","Firebase",s).create(t,{appName:r.name})}function Ps(r){return Tm(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iR(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&vi(r,"argument-error"),Tm(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Am(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return s0.create(r,...t)}function Tt(r,t,...n){if(!r)throw Am(t,...n)}function Zi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw bc(t),new Error(t)}function er(r,t){r||Zi(t)}/**
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
 */function Qd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function rR(){return W_()==="http:"||W_()==="https:"}function W_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */class zl{constructor(t,n){this.shortDelay=t,this.longDelay=n,er(n>t,"Short delay should be less than long delay!"),this.isMobile=uS()||fS()}get(){return sR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bm(r,t){er(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class a0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uR=new zl(3e4,6e4);function Sm(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function no(r,t,n,s,o={}){return o0(r,o,async()=>{let c={},f={};s&&(t==="GET"?f=s:c={body:JSON.stringify(s)});const g=Ll(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},c);return hS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&to(r.emulatorConfig.host)&&(y.credentials="include"),a0.fetch()(await l0(r,r.config.apiHost,n,g),y)})}async function o0(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},oR),t);try{const o=new hR(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw pc(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const g=c.ok?f.errorMessage:f.error.message,[p,y]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw pc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw pc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw pc(r,"user-disabled",f);const T=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Tm(r,T,y);vi(r,T)}}catch(o){if(o instanceof $n)throw o;vi(r,"network-request-failed",{message:String(o)})}}async function cR(r,t,n,s,o={}){const c=await no(r,t,n,s,o);return"mfaPendingCredential"in c&&vi(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function l0(r,t,n,s){const o=`${t}${n}?${s}`,c=r,f=c.config.emulator?bm(r.config,o):`${r.config.apiScheme}://${o}`;return lR.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}class hR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qn(this.auth,"network-request-failed")),uR.get())})}}function pc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Qn(r,t,s);return o.customData._tokenResponse=n,o}/**
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
 */async function fR(r,t){return no(r,"POST","/v1/accounts:delete",t)}async function Lc(r,t){return no(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function wl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function dR(r,t=!1){const n=Je(r),s=await n.getIdToken(t),o=wm(s);Tt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c?.sign_in_provider;return{claims:o,token:s,authTime:wl(Vd(o.auth_time)),issuedAtTime:wl(Vd(o.iat)),expirationTime:wl(Vd(o.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Vd(r){return Number(r)*1e3}function wm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return bc("JWT malformed, contained fewer than 3 sections"),null;try{const o=TE(n);return o?JSON.parse(o):(bc("Failed to decode base64 JWT payload"),null)}catch(o){return bc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function J_(r){const t=wm(r);return Tt(t,"internal-error"),Tt(typeof t.exp<"u","internal-error"),Tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ol(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof $n&&mR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function mR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Kd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wl(this.lastLoginAt),this.creationTime=wl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Ol(r,Lc(n,{idToken:s}));Tt(o?.users.length,n,"internal-error");const c=o.users[0];r._notifyReloadListener(c);const f=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?u0(c.providerUserInfo):[],g=yR(r.providerData,f),p=r.isAnonymous,y=!(r.email&&c.passwordHash)&&!g?.length,T=p?y:!1,R={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Kd(c.createdAt,c.lastLoginAt),isAnonymous:T};Object.assign(r,R)}async function pR(r){const t=Je(r);await zc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yR(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function u0(r){return r.map(t=>{var{providerId:n}=t,s=Em(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function _R(r,t){const n=await o0(r,{},async()=>{const s=Ll({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,f=await l0(r,o,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:g,body:s};return r.emulatorConfig&&to(r.emulatorConfig.host)&&(p.credentials="include"),a0.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vR(r,t){return no(r,"POST","/v2/accounts:revokeToken",Sm(r,t))}/**
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
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Tt(t.idToken,"internal-error"),Tt(typeof t.idToken<"u","internal-error"),Tt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):J_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Tt(t.length!==0,"internal-error");const n=J_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await _R(t,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,f=new Ha;return s&&(Tt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(Tt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),c&&(Tt(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return Zi("not implemented")}}/**
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
 */function Vr(r,t){Tt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Fn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,c=Em(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Kd(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const n=await Ol(this,this.stsTokenManager.getToken(this.auth,t));return Tt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return dR(this,t)}reload(){return pR(this)}_assign(t){this!==t&&(Tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Fn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await zc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(Ps(this.auth));const t=await this.getIdToken();return await Ol(this,fR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,c,f,g,p,y,T;const R=(s=n.displayName)!==null&&s!==void 0?s:void 0,D=(o=n.email)!==null&&o!==void 0?o:void 0,H=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,W=(f=n.photoURL)!==null&&f!==void 0?f:void 0,rt=(g=n.tenantId)!==null&&g!==void 0?g:void 0,J=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,St=(y=n.createdAt)!==null&&y!==void 0?y:void 0,dt=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ht,emailVerified:It,isAnonymous:_t,providerData:Ct,stsTokenManager:M}=n;Tt(ht&&M,t,"internal-error");const b=Ha.fromJSON(this.name,M);Tt(typeof ht=="string",t,"internal-error"),Vr(R,t.name),Vr(D,t.name),Tt(typeof It=="boolean",t,"internal-error"),Tt(typeof _t=="boolean",t,"internal-error"),Vr(H,t.name),Vr(W,t.name),Vr(rt,t.name),Vr(J,t.name),Vr(St,t.name),Vr(dt,t.name);const w=new Fn({uid:ht,auth:t,email:D,emailVerified:It,displayName:R,isAnonymous:_t,photoURL:W,phoneNumber:H,tenantId:rt,stsTokenManager:b,createdAt:St,lastLoginAt:dt});return Ct&&Array.isArray(Ct)&&(w.providerData=Ct.map(O=>Object.assign({},O))),J&&(w._redirectEventId=J),w}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ha;o.updateFromServerResponse(n);const c=new Fn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await zc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];Tt(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?u0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!c?.length,g=new Ha;g.updateFromIdToken(s);const p=new Fn({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Kd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(p,y),p}}/**
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
 */const tv=new Map;function Wi(r){er(r instanceof Function,"Expected a class definition");let t=tv.get(r);return t?(er(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,tv.set(r,t),t)}/**
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
 */class c0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}c0.type="NONE";const ev=c0;/**
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
 */function Sc(r,t,n){return`firebase:${r}:${t}:${n}`}class ja{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=Sc(this.userKey,o.apiKey,c),this.fullPersistenceKey=Sc("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Lc(this.auth,{idToken:t}).catch(()=>{});return n?Fn._fromGetAccountInfoResponse(this.auth,n,t):null}return Fn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new ja(Wi(ev),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||Wi(ev);const f=Sc(s,t.config.apiKey,t.name);let g=null;for(const y of n)try{const T=await y._get(f);if(T){let R;if(typeof T=="string"){const D=await Lc(t,{idToken:T}).catch(()=>{});if(!D)break;R=await Fn._fromGetAccountInfoResponse(t,D,T)}else R=Fn._fromJSON(t,T);y!==c&&(g=R),c=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new ja(c,t,s):(c=p[0],g&&await c._set(f,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new ja(c,t,s))}}/**
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
 */function nv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(m0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(h0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(p0(t))return"Blackberry";if(y0(t))return"Webos";if(f0(t))return"Safari";if((t.includes("chrome/")||d0(t))&&!t.includes("edge/"))return"Chrome";if(g0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function h0(r=We()){return/firefox\//i.test(r)}function f0(r=We()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function d0(r=We()){return/crios\//i.test(r)}function m0(r=We()){return/iemobile/i.test(r)}function g0(r=We()){return/android/i.test(r)}function p0(r=We()){return/blackberry/i.test(r)}function y0(r=We()){return/webos/i.test(r)}function Rm(r=We()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ER(r=We()){var t;return Rm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function TR(){return dS()&&document.documentMode===10}function _0(r=We()){return Rm(r)||g0(r)||y0(r)||p0(r)||/windows phone/i.test(r)||m0(r)}/**
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
 */function v0(r,t=[]){let n;switch(r){case"Browser":n=nv(We());break;case"Worker":n=`${nv(We())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${s}`}/**
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
 */async function bR(r,t={}){return no(r,"GET","/v2/passwordPolicy",Sm(r,t))}/**
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
 */class RR{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new AR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Wi(n)),this._initializationPromise=this.queue(async()=>{var s,o,c;if(!this._deleted&&(this.persistenceManager=await ja.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Lc(this,{idToken:t}),s=await Fn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(jn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=o?._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===g)&&p?.user&&(o=p.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await zc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=aR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(jn(this.app))return Promise.reject(Ps(this));const n=t?Je(t):null;return n&&Tt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(Ps(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return jn(this.app)?Promise.reject(Ps(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bR(this),n=new wR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new qs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await vR(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Wi(t)||this._popupRedirectResolver;Tt(n,this,"argument-error"),this.redirectPersistenceManager=await ja.create(this,[Wi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(Tt(g,this,"internal-error"),g.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=v0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&nR(`Error while retrieving App Check token: ${n.error}`),n?.token}}function sh(r){return Je(r)}class iv{constructor(t){this.auth=t,this.observer=null,this.addObserver=ES(n=>this.observer=n)}get next(){return Tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Im={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IR(r){Im=r}function CR(r){return Im.loadJS(r)}function DR(){return Im.gapiScript}function NR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function OR(r,t){const n=Hs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(jr(c,t??{}))return o;vi(o,"already-initialized")}return n.initialize({options:t})}function MR(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Wi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function VR(r,t,n){const s=sh(r);Tt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,c=E0(t),{host:f,port:g}=xR(t),p=g===null?"":`:${g}`,y={url:`${c}//${f}${p}/`},T=Object.freeze({host:f,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Tt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Tt(jr(y,s.config.emulator)&&jr(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,to(f)?(wE(`${c}//${f}${p}`),RE("Auth",!0)):PR()}function E0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function xR(r){const t=E0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:rv(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:rv(f)}}}function rv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function PR(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class T0{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Zi("not implemented")}_getIdTokenResponse(t){return Zi("not implemented")}_linkToIdToken(t,n){return Zi("not implemented")}_getReauthenticationResolver(t){return Zi("not implemented")}}/**
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
 */async function Fa(r,t){return cR(r,"POST","/v1/accounts:signInWithIdp",Sm(r,t))}/**
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
 */const kR="http://localhost";class Ls extends T0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ls(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):vi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,c=Em(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Ls(s,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Fa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Fa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fa(t,n)}buildRequest(){const t={requestUri:kR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ll(n)}return t}}/**
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
 */class Cm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bl extends Cm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pr extends Bl{constructor(){super("facebook.com")}static credential(t){return Ls._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pr.credentialFromTaggedObject(t)}static credentialFromError(t){return Pr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pr.credential(t.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
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
 */class $i extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ls._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return $i.credentialFromTaggedObject(t)}static credentialFromError(t){return $i.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return $i.credential(n,s)}catch{return null}}}$i.GOOGLE_SIGN_IN_METHOD="google.com";$i.PROVIDER_ID="google.com";/**
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
 */class kr extends Bl{constructor(){super("github.com")}static credential(t){return Ls._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kr.credential(t.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class Ur extends Bl{constructor(){super("twitter.com")}static credential(t,n){return Ls._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Ur.credential(n,s)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
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
 */class Qa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const c=await Fn._fromIdTokenResponse(t,s,o),f=sv(s);return new Qa({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=sv(s);return new Qa({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function sv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Bc extends $n{constructor(t,n,s,o){var c;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Bc(t,n,s,o)}}function A0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(r,c,t,s):c})}async function UR(r,t,n=!1){const s=await Ol(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Qa._forOperation(r,"link",s)}/**
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
 */async function LR(r,t,n=!1){const{auth:s}=r;if(jn(s.app))return Promise.reject(Ps(s));const o="reauthenticate";try{const c=await Ol(r,A0(s,o,t,r),n);Tt(c.idToken,s,"internal-error");const f=wm(c.idToken);Tt(f,s,"internal-error");const{sub:g}=f;return Tt(r.uid===g,s,"user-mismatch"),Qa._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&vi(s,"user-mismatch"),c}}/**
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
 */async function zR(r,t,n=!1){if(jn(r.app))return Promise.reject(Ps(r));const s="signIn",o=await A0(r,s,t),c=await Qa._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}function BR(r,t,n,s){return Je(r).onIdTokenChanged(t,n,s)}function qR(r,t,n){return Je(r).beforeAuthStateChanged(t,n)}function HR(r,t,n,s){return Je(r).onAuthStateChanged(t,n,s)}function jR(r){return Je(r).signOut()}const qc="__sak";/**
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
 */class b0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qc,"1"),this.storage.removeItem(qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FR=1e3,GR=10;class S0 extends b0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);TR()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,GR):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},FR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}S0.type="LOCAL";const QR=S0;/**
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
 */function KR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ah{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new ah(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:c}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(f).map(async y=>y(n.origin,c)),p=await KR(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ah.receivers=[];/**
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
 */function Dm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class YR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((g,p)=>{const y=Dm("",20);o.port1.start();const T=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(R){const D=R;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(T),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(D.data.response);break;default:clearTimeout(T),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function gi(){return window}function XR(r){gi().location.href=r}/**
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
 */function I0(){return typeof gi().WorkerGlobalScope<"u"&&typeof gi().importScripts=="function"}async function $R(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZR(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function WR(){return I0()?self:null}/**
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
 */const C0="firebaseLocalStorageDb",JR=1,Hc="firebaseLocalStorage",D0="fbase_key";class ql{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oh(r,t){return r.transaction([Hc],t?"readwrite":"readonly").objectStore(Hc)}function tI(){const r=indexedDB.deleteDatabase(C0);return new ql(r).toPromise()}function Yd(){const r=indexedDB.open(C0,JR);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Hc,{keyPath:D0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Hc)?t(s):(s.close(),await tI(),t(await Yd()))})})}async function av(r,t,n){const s=oh(r,!0).put({[D0]:t,value:n});return new ql(s).toPromise()}async function eI(r,t){const n=oh(r,!1).get(t),s=await new ql(n).toPromise();return s===void 0?null:s.value}function ov(r,t){const n=oh(r,!0).delete(t);return new ql(n).toPromise()}const nI=800,iI=3;class N0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>iI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ah._getInstance(WR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await $R(),!this.activeServiceWorker)return;this.sender=new YR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ZR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yd();return await av(t,qc,"1"),await ov(t,qc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>av(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>eI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ov(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=oh(o,!1).getAll();return new ql(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N0.type="LOCAL";const rI=N0;new zl(3e4,6e4);/**
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
 */function O0(r,t){return t?Wi(t):(Tt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Nm extends T0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function sI(r){return zR(r.auth,new Nm(r),r.bypassAuthState)}function aI(r){const{auth:t,user:n}=r;return Tt(n,t,"internal-error"),LR(n,new Nm(r),r.bypassAuthState)}async function oI(r){const{auth:t,user:n}=r;return Tt(n,t,"internal-error"),UR(n,new Nm(r),r.bypassAuthState)}/**
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
 */class M0{constructor(t,n,s,o,c=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:f,type:g}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sI;case"linkViaPopup":case"linkViaRedirect":return oI;case"reauthViaPopup":case"reauthViaRedirect":return aI;default:vi(this.auth,"internal-error")}}resolve(t){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lI=new zl(2e3,1e4);async function uI(r,t,n){if(jn(r.app))return Promise.reject(Qn(r,"operation-not-supported-in-this-environment"));const s=sh(r);iR(r,t,Cm);const o=O0(s,n);return new Vs(s,"signInViaPopup",t,o).executeNotNull()}class Vs extends M0{constructor(t,n,s,o,c){super(t,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Tt(t,this.auth,"internal-error"),t}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const t=Dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,lI.get())};t()}}Vs.currentPopupAction=null;/**
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
 */const cI="pendingRedirect",wc=new Map;class hI extends M0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=wc.get(this.auth._key());if(!t){try{const s=await fI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}wc.set(this.auth._key(),t)}return this.bypassAuthState||wc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fI(r,t){const n=gI(t),s=mI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function dI(r,t){wc.set(r._key(),t)}function mI(r){return Wi(r._redirectPersistence)}function gI(r){return Sc(cI,r.config.apiKey,r.name)}async function pI(r,t,n=!1){if(jn(r.app))return Promise.reject(Ps(r));const s=sh(r),o=O0(s,t),f=await new hI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const yI=10*60*1e3;class _I{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!vI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!V0(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yI&&this.cachedEventUids.clear(),this.cachedEventUids.has(lv(t))}saveEventToCache(t){this.cachedEventUids.add(lv(t)),this.lastProcessedEventTime=Date.now()}}function lv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function V0({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function vI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V0(r);default:return!1}}/**
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
 */async function EI(r,t={}){return no(r,"GET","/v1/projects",t)}/**
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
 */const TI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AI=/^https?/;async function bI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await EI(r);for(const n of t)try{if(SI(n))return}catch{}vi(r,"unauthorized-domain")}function SI(r){const t=Qd(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!AI.test(n))return!1;if(TI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const wI=new zl(3e4,6e4);function uv(){const r=gi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function RI(r){return new Promise((t,n)=>{var s,o,c;function f(){uv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uv(),n(Qn(r,"network-request-failed"))},timeout:wI.get()})}if(!((o=(s=gi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=gi().gapi)===null||c===void 0)&&c.load)f();else{const g=NR("iframefcb");return gi()[g]=()=>{gapi.load?f():n(Qn(r,"network-request-failed"))},CR(`${DR()}?onload=${g}`).catch(p=>n(p))}}).catch(t=>{throw Rc=null,t})}let Rc=null;function II(r){return Rc=Rc||RI(r),Rc}/**
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
 */const CI=new zl(5e3,15e3),DI="__/auth/iframe",NI="emulator/auth/iframe",OI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VI(r){const t=r.config;Tt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?bm(t,NI):`https://${r.config.authDomain}/${DI}`,s={apiKey:t.apiKey,appName:r.name,v:eo},o=MI.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Ll(s).slice(1)}`}async function xI(r){const t=await II(r),n=gi().gapi;return Tt(n,r,"internal-error"),t.open({where:document.body,url:VI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OI,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const f=Qn(r,"network-request-failed"),g=gi().setTimeout(()=>{c(f)},CI.get());function p(){gi().clearTimeout(g),o(s)}s.ping(p).then(p,()=>{c(f)})}))}/**
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
 */const PI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kI=500,UI=600,LI="_blank",zI="http://localhost";class cv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BI(r,t,n,s=kI,o=UI){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p=Object.assign(Object.assign({},PI),{width:s.toString(),height:o.toString(),top:c,left:f}),y=We().toLowerCase();n&&(g=d0(y)?LI:n),h0(y)&&(t=t||zI,p.scrollbars="yes");const T=Object.entries(p).reduce((D,[H,W])=>`${D}${H}=${W},`,"");if(ER(y)&&g!=="_self")return qI(t||"",g),new cv(null);const R=window.open(t||"",g,T);Tt(R,r,"popup-blocked");try{R.focus()}catch{}return new cv(R)}function qI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const HI="__/auth/handler",jI="emulator/auth/handler",FI=encodeURIComponent("fac");async function hv(r,t,n,s,o,c){Tt(r.config.authDomain,r,"auth-domain-config-required"),Tt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:eo,eventId:o};if(t instanceof Cm){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",vS(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,R]of Object.entries({}))f[T]=R}if(t instanceof Bl){const T=t.getScopes().filter(R=>R!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const T of Object.keys(g))g[T]===void 0&&delete g[T];const p=await r._getAppCheckToken(),y=p?`#${FI}=${encodeURIComponent(p)}`:"";return`${GI(r)}?${Ll(g).slice(1)}${y}`}function GI({config:r}){return r.emulator?bm(r,jI):`https://${r.authDomain}/${HI}`}/**
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
 */const xd="webStorageSupport";class QI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R0,this._completeRedirectFn=pI,this._overrideRedirectResult=dI}async _openPopup(t,n,s,o){var c;er((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const f=await hv(t,n,s,Qd(),o);return BI(t,f,Dm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const c=await hv(t,n,s,Qd(),o);return XR(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(er(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await xI(t),s=new _I(t);return n.register("authEvent",o=>(Tt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xd,{type:xd},o=>{var c;const f=(c=o?.[0])===null||c===void 0?void 0:c[xd];f!==void 0&&n(!!f),vi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return _0()||f0()||Rm()}}const KI=QI;var fv="@firebase/auth",dv="1.10.7";/**
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
 */class YI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $I(r){_i(new Yn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;Tt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v0(r)},y=new RR(s,o,c,p);return MR(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),_i(new Yn("auth-internal",t=>{const n=sh(t.getProvider("auth").getImmediate());return(s=>new YI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(fv,dv,XI(r)),Pn(fv,dv,"esm2017")}/**
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
 */const ZI=5*60,WI=SE("authIdTokenMaxAge")||ZI;let mv=null;const JI=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>WI)return;const o=n?.token;mv!==o&&(mv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function tC(r=mm()){const t=Hs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=OR(r,{popupRedirectResolver:KI,persistence:[rI,QR,R0]}),s=SE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=JI(c.toString());qR(n,f,()=>f(n.currentUser)),BR(n,g=>f(g))}}const o=AE("auth");return o&&VR(n,`http://${o}`),n}function eC(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}IR({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const c=Qn("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",eC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$I("Browser");var gv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,x0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,b){function w(){}w.prototype=b.prototype,M.D=b.prototype,M.prototype=new w,M.prototype.constructor=M,M.C=function(O,V,P){for(var I=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)I[Ae-2]=arguments[Ae];return b.prototype[V].apply(O,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,b,w){w||(w=0);var O=Array(16);if(typeof b=="string")for(var V=0;16>V;++V)O[V]=b.charCodeAt(w++)|b.charCodeAt(w++)<<8|b.charCodeAt(w++)<<16|b.charCodeAt(w++)<<24;else for(V=0;16>V;++V)O[V]=b[w++]|b[w++]<<8|b[w++]<<16|b[w++]<<24;b=M.g[0],w=M.g[1],V=M.g[2];var P=M.g[3],I=b+(P^w&(V^P))+O[0]+3614090360&4294967295;b=w+(I<<7&4294967295|I>>>25),I=P+(V^b&(w^V))+O[1]+3905402710&4294967295,P=b+(I<<12&4294967295|I>>>20),I=V+(w^P&(b^w))+O[2]+606105819&4294967295,V=P+(I<<17&4294967295|I>>>15),I=w+(b^V&(P^b))+O[3]+3250441966&4294967295,w=V+(I<<22&4294967295|I>>>10),I=b+(P^w&(V^P))+O[4]+4118548399&4294967295,b=w+(I<<7&4294967295|I>>>25),I=P+(V^b&(w^V))+O[5]+1200080426&4294967295,P=b+(I<<12&4294967295|I>>>20),I=V+(w^P&(b^w))+O[6]+2821735955&4294967295,V=P+(I<<17&4294967295|I>>>15),I=w+(b^V&(P^b))+O[7]+4249261313&4294967295,w=V+(I<<22&4294967295|I>>>10),I=b+(P^w&(V^P))+O[8]+1770035416&4294967295,b=w+(I<<7&4294967295|I>>>25),I=P+(V^b&(w^V))+O[9]+2336552879&4294967295,P=b+(I<<12&4294967295|I>>>20),I=V+(w^P&(b^w))+O[10]+4294925233&4294967295,V=P+(I<<17&4294967295|I>>>15),I=w+(b^V&(P^b))+O[11]+2304563134&4294967295,w=V+(I<<22&4294967295|I>>>10),I=b+(P^w&(V^P))+O[12]+1804603682&4294967295,b=w+(I<<7&4294967295|I>>>25),I=P+(V^b&(w^V))+O[13]+4254626195&4294967295,P=b+(I<<12&4294967295|I>>>20),I=V+(w^P&(b^w))+O[14]+2792965006&4294967295,V=P+(I<<17&4294967295|I>>>15),I=w+(b^V&(P^b))+O[15]+1236535329&4294967295,w=V+(I<<22&4294967295|I>>>10),I=b+(V^P&(w^V))+O[1]+4129170786&4294967295,b=w+(I<<5&4294967295|I>>>27),I=P+(w^V&(b^w))+O[6]+3225465664&4294967295,P=b+(I<<9&4294967295|I>>>23),I=V+(b^w&(P^b))+O[11]+643717713&4294967295,V=P+(I<<14&4294967295|I>>>18),I=w+(P^b&(V^P))+O[0]+3921069994&4294967295,w=V+(I<<20&4294967295|I>>>12),I=b+(V^P&(w^V))+O[5]+3593408605&4294967295,b=w+(I<<5&4294967295|I>>>27),I=P+(w^V&(b^w))+O[10]+38016083&4294967295,P=b+(I<<9&4294967295|I>>>23),I=V+(b^w&(P^b))+O[15]+3634488961&4294967295,V=P+(I<<14&4294967295|I>>>18),I=w+(P^b&(V^P))+O[4]+3889429448&4294967295,w=V+(I<<20&4294967295|I>>>12),I=b+(V^P&(w^V))+O[9]+568446438&4294967295,b=w+(I<<5&4294967295|I>>>27),I=P+(w^V&(b^w))+O[14]+3275163606&4294967295,P=b+(I<<9&4294967295|I>>>23),I=V+(b^w&(P^b))+O[3]+4107603335&4294967295,V=P+(I<<14&4294967295|I>>>18),I=w+(P^b&(V^P))+O[8]+1163531501&4294967295,w=V+(I<<20&4294967295|I>>>12),I=b+(V^P&(w^V))+O[13]+2850285829&4294967295,b=w+(I<<5&4294967295|I>>>27),I=P+(w^V&(b^w))+O[2]+4243563512&4294967295,P=b+(I<<9&4294967295|I>>>23),I=V+(b^w&(P^b))+O[7]+1735328473&4294967295,V=P+(I<<14&4294967295|I>>>18),I=w+(P^b&(V^P))+O[12]+2368359562&4294967295,w=V+(I<<20&4294967295|I>>>12),I=b+(w^V^P)+O[5]+4294588738&4294967295,b=w+(I<<4&4294967295|I>>>28),I=P+(b^w^V)+O[8]+2272392833&4294967295,P=b+(I<<11&4294967295|I>>>21),I=V+(P^b^w)+O[11]+1839030562&4294967295,V=P+(I<<16&4294967295|I>>>16),I=w+(V^P^b)+O[14]+4259657740&4294967295,w=V+(I<<23&4294967295|I>>>9),I=b+(w^V^P)+O[1]+2763975236&4294967295,b=w+(I<<4&4294967295|I>>>28),I=P+(b^w^V)+O[4]+1272893353&4294967295,P=b+(I<<11&4294967295|I>>>21),I=V+(P^b^w)+O[7]+4139469664&4294967295,V=P+(I<<16&4294967295|I>>>16),I=w+(V^P^b)+O[10]+3200236656&4294967295,w=V+(I<<23&4294967295|I>>>9),I=b+(w^V^P)+O[13]+681279174&4294967295,b=w+(I<<4&4294967295|I>>>28),I=P+(b^w^V)+O[0]+3936430074&4294967295,P=b+(I<<11&4294967295|I>>>21),I=V+(P^b^w)+O[3]+3572445317&4294967295,V=P+(I<<16&4294967295|I>>>16),I=w+(V^P^b)+O[6]+76029189&4294967295,w=V+(I<<23&4294967295|I>>>9),I=b+(w^V^P)+O[9]+3654602809&4294967295,b=w+(I<<4&4294967295|I>>>28),I=P+(b^w^V)+O[12]+3873151461&4294967295,P=b+(I<<11&4294967295|I>>>21),I=V+(P^b^w)+O[15]+530742520&4294967295,V=P+(I<<16&4294967295|I>>>16),I=w+(V^P^b)+O[2]+3299628645&4294967295,w=V+(I<<23&4294967295|I>>>9),I=b+(V^(w|~P))+O[0]+4096336452&4294967295,b=w+(I<<6&4294967295|I>>>26),I=P+(w^(b|~V))+O[7]+1126891415&4294967295,P=b+(I<<10&4294967295|I>>>22),I=V+(b^(P|~w))+O[14]+2878612391&4294967295,V=P+(I<<15&4294967295|I>>>17),I=w+(P^(V|~b))+O[5]+4237533241&4294967295,w=V+(I<<21&4294967295|I>>>11),I=b+(V^(w|~P))+O[12]+1700485571&4294967295,b=w+(I<<6&4294967295|I>>>26),I=P+(w^(b|~V))+O[3]+2399980690&4294967295,P=b+(I<<10&4294967295|I>>>22),I=V+(b^(P|~w))+O[10]+4293915773&4294967295,V=P+(I<<15&4294967295|I>>>17),I=w+(P^(V|~b))+O[1]+2240044497&4294967295,w=V+(I<<21&4294967295|I>>>11),I=b+(V^(w|~P))+O[8]+1873313359&4294967295,b=w+(I<<6&4294967295|I>>>26),I=P+(w^(b|~V))+O[15]+4264355552&4294967295,P=b+(I<<10&4294967295|I>>>22),I=V+(b^(P|~w))+O[6]+2734768916&4294967295,V=P+(I<<15&4294967295|I>>>17),I=w+(P^(V|~b))+O[13]+1309151649&4294967295,w=V+(I<<21&4294967295|I>>>11),I=b+(V^(w|~P))+O[4]+4149444226&4294967295,b=w+(I<<6&4294967295|I>>>26),I=P+(w^(b|~V))+O[11]+3174756917&4294967295,P=b+(I<<10&4294967295|I>>>22),I=V+(b^(P|~w))+O[2]+718787259&4294967295,V=P+(I<<15&4294967295|I>>>17),I=w+(P^(V|~b))+O[9]+3951481745&4294967295,M.g[0]=M.g[0]+b&4294967295,M.g[1]=M.g[1]+(V+(I<<21&4294967295|I>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+P&4294967295}s.prototype.u=function(M,b){b===void 0&&(b=M.length);for(var w=b-this.blockSize,O=this.B,V=this.h,P=0;P<b;){if(V==0)for(;P<=w;)o(this,M,P),P+=this.blockSize;if(typeof M=="string"){for(;P<b;)if(O[V++]=M.charCodeAt(P++),V==this.blockSize){o(this,O),V=0;break}}else for(;P<b;)if(O[V++]=M[P++],V==this.blockSize){o(this,O),V=0;break}}this.h=V,this.o+=b},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var b=1;b<M.length-8;++b)M[b]=0;var w=8*this.o;for(b=M.length-8;b<M.length;++b)M[b]=w&255,w/=256;for(this.u(M),M=Array(16),b=w=0;4>b;++b)for(var O=0;32>O;O+=8)M[w++]=this.g[b]>>>O&255;return M};function c(M,b){var w=g;return Object.prototype.hasOwnProperty.call(w,M)?w[M]:w[M]=b(M)}function f(M,b){this.h=b;for(var w=[],O=!0,V=M.length-1;0<=V;V--){var P=M[V]|0;O&&P==b||(w[V]=P,O=!1)}this.g=w}var g={};function p(M){return-128<=M&&128>M?c(M,function(b){return new f([b|0],0>b?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return R;if(0>M)return J(y(-M));for(var b=[],w=1,O=0;M>=w;O++)b[O]=M/w|0,w*=4294967296;return new f(b,0)}function T(M,b){if(M.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M.charAt(0)=="-")return J(T(M.substring(1),b));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=y(Math.pow(b,8)),O=R,V=0;V<M.length;V+=8){var P=Math.min(8,M.length-V),I=parseInt(M.substring(V,V+P),b);8>P?(P=y(Math.pow(b,P)),O=O.j(P).add(y(I))):(O=O.j(w),O=O.add(y(I)))}return O}var R=p(0),D=p(1),H=p(16777216);r=f.prototype,r.m=function(){if(rt(this))return-J(this).m();for(var M=0,b=1,w=0;w<this.g.length;w++){var O=this.i(w);M+=(0<=O?O:4294967296+O)*b,b*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(W(this))return"0";if(rt(this))return"-"+J(this).toString(M);for(var b=y(Math.pow(M,6)),w=this,O="";;){var V=It(w,b).g;w=St(w,V.j(b));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(M);if(w=V,W(w))return P+O;for(;6>P.length;)P="0"+P;O=P+O}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function W(M){if(M.h!=0)return!1;for(var b=0;b<M.g.length;b++)if(M.g[b]!=0)return!1;return!0}function rt(M){return M.h==-1}r.l=function(M){return M=St(this,M),rt(M)?-1:W(M)?0:1};function J(M){for(var b=M.g.length,w=[],O=0;O<b;O++)w[O]=~M.g[O];return new f(w,~M.h).add(D)}r.abs=function(){return rt(this)?J(this):this},r.add=function(M){for(var b=Math.max(this.g.length,M.g.length),w=[],O=0,V=0;V<=b;V++){var P=O+(this.i(V)&65535)+(M.i(V)&65535),I=(P>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);O=I>>>16,P&=65535,I&=65535,w[V]=I<<16|P}return new f(w,w[w.length-1]&-2147483648?-1:0)};function St(M,b){return M.add(J(b))}r.j=function(M){if(W(this)||W(M))return R;if(rt(this))return rt(M)?J(this).j(J(M)):J(J(this).j(M));if(rt(M))return J(this.j(J(M)));if(0>this.l(H)&&0>M.l(H))return y(this.m()*M.m());for(var b=this.g.length+M.g.length,w=[],O=0;O<2*b;O++)w[O]=0;for(O=0;O<this.g.length;O++)for(var V=0;V<M.g.length;V++){var P=this.i(O)>>>16,I=this.i(O)&65535,Ae=M.i(V)>>>16,ne=M.i(V)&65535;w[2*O+2*V]+=I*ne,dt(w,2*O+2*V),w[2*O+2*V+1]+=P*ne,dt(w,2*O+2*V+1),w[2*O+2*V+1]+=I*Ae,dt(w,2*O+2*V+1),w[2*O+2*V+2]+=P*Ae,dt(w,2*O+2*V+2)}for(O=0;O<b;O++)w[O]=w[2*O+1]<<16|w[2*O];for(O=b;O<2*b;O++)w[O]=0;return new f(w,0)};function dt(M,b){for(;(M[b]&65535)!=M[b];)M[b+1]+=M[b]>>>16,M[b]&=65535,b++}function ht(M,b){this.g=M,this.h=b}function It(M,b){if(W(b))throw Error("division by zero");if(W(M))return new ht(R,R);if(rt(M))return b=It(J(M),b),new ht(J(b.g),J(b.h));if(rt(b))return b=It(M,J(b)),new ht(J(b.g),b.h);if(30<M.g.length){if(rt(M)||rt(b))throw Error("slowDivide_ only works with positive integers.");for(var w=D,O=b;0>=O.l(M);)w=_t(w),O=_t(O);var V=Ct(w,1),P=Ct(O,1);for(O=Ct(O,2),w=Ct(w,2);!W(O);){var I=P.add(O);0>=I.l(M)&&(V=V.add(w),P=I),O=Ct(O,1),w=Ct(w,1)}return b=St(M,V.j(b)),new ht(V,b)}for(V=R;0<=M.l(b);){for(w=Math.max(1,Math.floor(M.m()/b.m())),O=Math.ceil(Math.log(w)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),P=y(w),I=P.j(b);rt(I)||0<I.l(M);)w-=O,P=y(w),I=P.j(b);W(P)&&(P=D),V=V.add(P),M=St(M,I)}return new ht(V,M)}r.A=function(M){return It(this,M).h},r.and=function(M){for(var b=Math.max(this.g.length,M.g.length),w=[],O=0;O<b;O++)w[O]=this.i(O)&M.i(O);return new f(w,this.h&M.h)},r.or=function(M){for(var b=Math.max(this.g.length,M.g.length),w=[],O=0;O<b;O++)w[O]=this.i(O)|M.i(O);return new f(w,this.h|M.h)},r.xor=function(M){for(var b=Math.max(this.g.length,M.g.length),w=[],O=0;O<b;O++)w[O]=this.i(O)^M.i(O);return new f(w,this.h^M.h)};function _t(M){for(var b=M.g.length+1,w=[],O=0;O<b;O++)w[O]=M.i(O)<<1|M.i(O-1)>>>31;return new f(w,M.h)}function Ct(M,b){var w=b>>5;b%=32;for(var O=M.g.length-w,V=[],P=0;P<O;P++)V[P]=0<b?M.i(P+w)>>>b|M.i(P+w+1)<<32-b:M.i(P+w);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,x0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,qr=f}).apply(typeof gv<"u"?gv:typeof self<"u"?self:typeof window<"u"?window:{});var yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var P0,_l,k0,Ic,Xd,U0,L0,z0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof yc=="object"&&yc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(u,m){if(m)t:{var _=s;u=u.split(".");for(var A=0;A<u.length-1;A++){var k=u[A];if(!(k in _))break t;_=_[k]}u=u[u.length-1],A=_[u],m=m(A),m!=A&&m!=null&&t(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,A=!1,k={next:function(){if(!A&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function T(u,m,_){return u.call.apply(u.bind,arguments)}function R(u,m,_){if(!u)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),u.apply(m,k)}}return function(){return u.apply(m,arguments)}}function D(u,m,_){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:R,D.apply(null,arguments)}function H(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),u.apply(this,A)}}function W(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(A,k,q){for(var et=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)et[Ut-2]=arguments[Ut];return m.prototype[k].apply(A,et)}}function rt(u){const m=u.length;if(0<m){const _=Array(m);for(let A=0;A<m;A++)_[A]=u[A];return _}return[]}function J(u,m){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const k=u.length||0,q=A.length||0;u.length=k+q;for(let et=0;et<q;et++)u[k+et]=A[et]}else u.push(A)}}class St{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function dt(u){return/^[\s\xa0]*$/.test(u)}function ht(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function It(u){return It[" "](u),u}It[" "]=function(){};var _t=ht().indexOf("Gecko")!=-1&&!(ht().toLowerCase().indexOf("webkit")!=-1&&ht().indexOf("Edge")==-1)&&!(ht().indexOf("Trident")!=-1||ht().indexOf("MSIE")!=-1)&&ht().indexOf("Edge")==-1;function Ct(u,m,_){for(const A in u)m.call(_,u[A],A,u)}function M(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function b(u){const m={};for(const _ in u)m[_]=u[_];return m}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,m){let _,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(_ in A)u[_]=A[_];for(let q=0;q<w.length;q++)_=w[q],Object.prototype.hasOwnProperty.call(A,_)&&(u[_]=A[_])}}function V(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function P(u){g.setTimeout(()=>{throw u},0)}function I(){var u=kt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ae{constructor(){this.h=this.g=null}add(m,_){const A=ne.get();A.set(m,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ne=new St(()=>new j,u=>u.reset());class j{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ut=!1,kt=new Ae,C=()=>{const u=g.Promise.resolve(void 0);nt=()=>{u.then($)}};var $=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(_){P(_)}var m=ne;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ut=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};g.addEventListener("test",_,m),g.removeEventListener("test",_,m)}catch{}return u}();function Rt(u,m){if(tt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,A=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(_t){t:{try{It(m.nodeName);var k=!0;break t}catch{}k=!1}k||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:vt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Rt.aa.h.call(this)}}W(Rt,tt);var vt={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ge="closure_listenable_"+(1e6*Math.random()|0),Yt=0;function Tn(u,m,_,A,k){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!A,this.ha=k,this.key=++Yt,this.da=this.fa=!1}function Zn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function kn(u){this.src=u,this.g={},this.h=0}kn.prototype.add=function(u,m,_,A,k){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var et=Ai(u,m,A,k);return-1<et?(m=u[et],_||(m.fa=!1)):(m=new Tn(m,this.src,q,!!A,k),m.fa=_,u.push(m)),m};function Ti(u,m){var _=m.type;if(_ in u.g){var A=u.g[_],k=Array.prototype.indexOf.call(A,m,void 0),q;(q=0<=k)&&Array.prototype.splice.call(A,k,1),q&&(Zn(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Ai(u,m,_,A){for(var k=0;k<u.length;++k){var q=u[k];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==A)return k}return-1}var G="closure_lm_"+(1e6*Math.random()|0),st={};function oe(u,m,_,A,k){if(Array.isArray(m)){for(var q=0;q<m.length;q++)oe(u,m[q],_,A,k);return null}return _=Kl(_),u&&u[ge]?u.K(m,_,y(A)?!!A.capture:!1,k):Ne(u,m,_,!1,A,k)}function Ne(u,m,_,A,k,q){if(!m)throw Error("Invalid event type");var et=y(k)?!!k.capture:!!k,Ut=Ks(u);if(Ut||(u[G]=Ut=new kn(u)),_=Ut.add(m,_,A,et,q),_.proxy)return _;if(A=uo(),_.proxy=A,A.src=u,A.listener=_,u.addEventListener)ft||(k=et),k===void 0&&(k=!1),u.addEventListener(m.toString(),A,k);else if(u.attachEvent)u.attachEvent(bi(m.toString()),A);else if(u.addListener&&u.removeListener)u.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function uo(){function u(_){return m.call(u.src,u.listener,_)}const m=Si;return u}function $r(u,m,_,A,k){if(Array.isArray(m))for(var q=0;q<m.length;q++)$r(u,m[q],_,A,k);else A=y(A)?!!A.capture:!!A,_=Kl(_),u&&u[ge]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=Ai(q,_,A,k),-1<_&&(Zn(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ks(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Ai(m,_,A,k)),(_=-1<u?m[u]:null)&&Zr(_))}function Zr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[ge])Ti(m.i,u);else{var _=u.type,A=u.proxy;m.removeEventListener?m.removeEventListener(_,A,u.capture):m.detachEvent?m.detachEvent(bi(_),A):m.addListener&&m.removeListener&&m.removeListener(A),(_=Ks(m))?(Ti(_,u),_.h==0&&(_.src=null,m[G]=null)):Zn(u)}}}function bi(u){return u in st?st[u]:st[u]="on"+u}function Si(u,m){if(u.da)u=!0;else{m=new Rt(m,this);var _=u.listener,A=u.ha||u.src;u.fa&&Zr(u),u=_.call(A,m)}return u}function Ks(u){return u=u[G],u instanceof kn?u:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kl(u){return typeof u=="function"?u:(u[co]||(u[co]=function(m){return u.handleEvent(m)}),u[co])}function le(){it.call(this),this.i=new kn(this),this.M=this,this.F=null}W(le,it),le.prototype[ge]=!0,le.prototype.removeEventListener=function(u,m,_,A){$r(this,u,m,_,A)};function Gt(u,m){var _,A=u.F;if(A)for(_=[];A;A=A.F)_.push(A);if(u=u.M,A=m.type||m,typeof m=="string")m=new tt(m,u);else if(m instanceof tt)m.target=m.target||u;else{var k=m;m=new tt(A,u),O(m,k)}if(k=!0,_)for(var q=_.length-1;0<=q;q--){var et=m.g=_[q];k=hn(et,A,!0,m)&&k}if(et=m.g=u,k=hn(et,A,!0,m)&&k,k=hn(et,A,!1,m)&&k,_)for(q=0;q<_.length;q++)et=m.g=_[q],k=hn(et,A,!1,m)&&k}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],A=0;A<_.length;A++)Zn(_[A]);delete u.g[m],u.h--}}this.F=null},le.prototype.K=function(u,m,_,A){return this.i.add(String(u),m,!1,_,A)},le.prototype.L=function(u,m,_,A){return this.i.add(String(u),m,!0,_,A)};function hn(u,m,_,A){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var k=!0,q=0;q<m.length;++q){var et=m[q];if(et&&!et.da&&et.capture==_){var Ut=et.listener,Se=et.ha||et.src;et.fa&&Ti(u.i,et),k=Ut.call(Se,A)!==!1&&k}}return k&&!A.defaultPrevented}function Ge(u,m,_){if(typeof u=="function")_&&(u=D(u,_));else if(u&&typeof u.handleEvent=="function")u=D(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(u,m||0)}function Yl(u){u.g=Ge(()=>{u.g=null,u.i&&(u.i=!1,Yl(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Th extends it{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Yl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(u){it.call(this),this.h=u,this.g={}}W(Wr,it);var Jr=[];function ts(u){Ct(u.g,function(m,_){this.g.hasOwnProperty(_)&&Zr(m)},u),u.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),ts(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Un=g.JSON.stringify,Ys=g.JSON.parse,es=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function ho(){}ho.prototype.h=null;function fo(u){return u.h||(u.h=u.i())}function mo(){}var wi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ri(){tt.call(this,"d")}W(Ri,tt);function go(){tt.call(this,"c")}W(go,tt);var Wn={},po=null;function sr(){return po=po||new le}Wn.La="serverreachability";function Xs(u){tt.call(this,Wn.La,u)}W(Xs,tt);function ar(u){const m=sr();Gt(m,new Xs(m))}Wn.STAT_EVENT="statevent";function Xl(u,m){tt.call(this,Wn.STAT_EVENT,u),this.stat=m}W(Xl,tt);function ie(u){const m=sr();Gt(m,new Xl(m,u))}Wn.Ma="timingevent";function be(u,m){tt.call(this,Wn.Ma,u),this.size=m}W(be,tt);function pe(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},m)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function yo(u,m,_,A,k,q){u.info(function(){if(u.g)if(q)for(var et="",Ut=q.split("&"),Se=0;Se<Ut.length;Se++){var Lt=Ut[Se].split("=");if(1<Lt.length){var Me=Lt[0];Lt=Lt[1];var we=Me.split("_");et=2<=we.length&&we[1]=="type"?et+(Me+"="+Lt+"&"):et+(Me+"=redacted&")}}else et=null;else et=q;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+m+`
`+_+`
`+et})}function Ah(u,m,_,A,k,q,et){u.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+m+`
`+_+`
`+q+" "+et})}function or(u,m,_,A){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+ns(u,_)+(A?" "+A:"")})}function $l(u,m){u.info(function(){return"TIMEOUT: "+m})}An.prototype.info=function(){};function ns(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var A=_[u];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var q=k[0];if(q!="noop"&&q!="stop"&&q!="close")for(var et=1;et<k.length;et++)k[et]=""}}}}return Un(_)}catch{return m}}var lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ii={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jn;function ti(){}W(ti,ho),ti.prototype.g=function(){return new XMLHttpRequest},ti.prototype.i=function(){return{}},Jn=new ti;function tn(u,m,_,A){this.j=u,this.i=m,this.l=_,this.R=A||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new he}function he(){this.i=null,this.g="",this.h=!1}var _o={},$s={};function Ln(u,m,_){u.L=1,u.v=os(fn(m)),u.m=_,u.P=!0,Ci(u,null)}function Ci(u,m){u.F=Date.now(),is(u),u.A=fn(u.v);var _=u.A,A=u.R;Array.isArray(A)||(A=[String(A)]),So(_.i,"t",A),u.C=0,_=u.j.J,u.h=new he,u.g=fu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Th(D(u.Y,u,u.g),u.O)),m=u.U,_=u.g,A=u.ca;var k="readystatechange";Array.isArray(k)||(k&&(Jr[0]=k.toString()),k=Jr);for(var q=0;q<k.length;q++){var et=oe(_,k[q],A||m.handleEvent,!1,m.h||m);if(!et)break;m.g[et.key]=et}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),ar(),yo(u.i,u.u,u.A,u.l,u.R,u.m)}tn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Rn(u)==3?m.j():this.Y(u)},tn.prototype.Y=function(u){try{if(u==this.g)t:{const we=Rn(this.g);var m=this.g.Ba();const ki=this.g.Z();if(!(3>we)&&(we!=3||this.g&&(this.h.h||this.g.oa()||ru(this.g)))){this.J||we!=4||m==7||(m==8||0>=ki?ar(3):ar(2)),ur(this);var _=this.g.Z();this.X=_;e:if(Zl(this)){var A=ru(this.g);u="";var k=A.length,q=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),ei(this);var et="";break e}this.h.i=new g.TextDecoder}for(m=0;m<k;m++)this.h.h=!0,u+=this.h.i.decode(A[m],{stream:!(q&&m==k-1)});A.length=0,this.h.g+=u,this.C=0,et=this.h.g}else et=this.g.oa();if(this.o=_==200,Ah(this.i,this.u,this.A,this.l,this.R,we,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Ut,Se=this.g;if((Ut=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dt(Ut)){var Lt=Ut;break e}}Lt=null}if(_=Lt)or(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,_);else{this.o=!1,this.s=3,ie(12),Ue(this),ei(this);break t}}if(this.P){_=!0;let Le;for(;!this.J&&this.C<et.length;)if(Le=Wl(this,et),Le==$s){we==4&&(this.s=4,ie(14),_=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==_o){this.s=4,ie(15),or(this.i,this.l,et,"[Invalid Chunk]"),_=!1;break}else or(this.i,this.l,Le,null),rs(this,Le);if(Zl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||et.length!=0||this.h.h||(this.s=1,ie(16),_=!1),this.o=this.o&&_,!_)or(this.i,this.l,et,"[Invalid Chunked Response]"),Ue(this),ei(this);else if(0<et.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+et.length),gs(Me),Me.M=!0,ie(11))}}else or(this.i,this.l,et,null),rs(this,et);we==4&&Ue(this),this.o&&!this.J&&(we==4?uu(this.j,this):(this.o=!1,is(this)))}else Ih(this.g),_==400&&0<et.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),Ue(this),ei(this)}}}catch{}finally{}};function Zl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Wl(u,m){var _=u.C,A=m.indexOf(`
`,_);return A==-1?$s:(_=Number(m.substring(_,A)),isNaN(_)?_o:(A+=1,A+_>m.length?$s:(m=m.slice(A,A+_),u.C=A+_,m)))}tn.prototype.cancel=function(){this.J=!0,Ue(this)};function is(u){u.S=Date.now()+u.I,Jl(u,u.I)}function Jl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=pe(D(u.ba,u),m)}function ur(u){u.B&&(g.clearTimeout(u.B),u.B=null)}tn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?($l(this.i,this.A),this.L!=2&&(ar(),ie(17)),Ue(this),this.s=2,ei(this)):Jl(this,this.S-u)};function ei(u){u.j.G==0||u.J||uu(u.j,u)}function Ue(u){ur(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ts(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function rs(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||vo(_.h,u))){if(!u.K&&vo(_.h,u)&&_.G==3){try{var A=_.Da.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)la(_),aa(_);else break t;Do(_),ie(18)}}else _.za=k[1],0<_.za-_.T&&37500>k[2]&&_.F&&_.v==0&&!_.C&&(_.C=pe(D(_.Za,_),6e3));if(1>=Ws(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Pi(_,11)}else if((u.K||_.g==u)&&la(_),!dt(m))for(k=_.Da.g.parse(m),m=0;m<k.length;m++){let Lt=k[m];if(_.T=Lt[0],Lt=Lt[1],_.G==2)if(Lt[0]=="c"){_.K=Lt[1],_.ia=Lt[2];const Me=Lt[3];Me!=null&&(_.la=Me,_.j.info("VER="+_.la));const we=Lt[4];we!=null&&(_.Aa=we,_.j.info("SVER="+_.Aa));const ki=Lt[5];ki!=null&&typeof ki=="number"&&0<ki&&(A=1.5*ki,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Le=u.g;if(Le){const li=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(li){var q=A.h;q.g||li.indexOf("spdy")==-1&&li.indexOf("quic")==-1&&li.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Js(q,q.h),q.h=null))}if(A.D){const Oo=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(A.ya=Oo,Xt(A.I,A.D,Oo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var et=u;if(A.qa=hu(A,A.J?A.ia:null,A.W),et.K){en(A.h,et);var Ut=et,Se=A.L;Se&&(Ut.I=Se),Ut.B&&(ur(Ut),is(Ut)),A.g=et}else ou(A);0<_.i.length&&oa(_)}else Lt[0]!="stop"&&Lt[0]!="close"||Pi(_,7);else _.G==3&&(Lt[0]=="stop"||Lt[0]=="close"?Lt[0]=="stop"?Pi(_,7):Io(_):Lt[0]!="noop"&&_.l&&_.l.ta(Lt),_.v=0)}}ar(4)}catch{}}var tu=class{constructor(u,m){this.g=u,this.map=m}};function Di(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zs(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ws(u){return u.h?1:u.g?u.g.size:0}function vo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Js(u,m){u.g?u.g.add(m):u.h=m}function en(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Di.prototype.cancel=function(){if(this.i=Eo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Eo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return rt(u.i)}function bh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,A=0;A<_;A++)m.push(u[A]);return m}m=[],_=0;for(A in u)m[_++]=u[A];return m}function ta(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const A in u)m[_++]=A;return m}}}function To(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=ta(u),A=bh(u),k=A.length,q=0;q<k;q++)m.call(void 0,A[q],_&&_[q],u)}var ss=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var A=u[_].indexOf("="),k=null;if(0<=A){var q=u[_].substring(0,A);k=u[_].substring(A+1)}else q=u[_];m(q,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ye(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ye){this.h=u.h,as(this,u.j),this.o=u.o,this.g=u.g,cr(this,u.s),this.l=u.l;var m=u.i,_=new Oi;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Ni(this,_),this.m=u.m}else u&&(m=String(u).match(ss))?(this.h=!1,as(this,m[1]||"",!0),this.o=bn(m[2]||""),this.g=bn(m[3]||"",!0),cr(this,m[4]),this.l=bn(m[5]||"",!0),Ni(this,m[6]||"",!0),this.m=bn(m[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}ye.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ls(m,Ao,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ls(m,Ao,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ls(_,_.charAt(0)=="/"?wh:bo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ls(_,ea)),u.join("")};function fn(u){return new ye(u)}function as(u,m,_){u.j=_?bn(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function cr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Ni(u,m,_){m instanceof Oi?(u.i=m,nu(u.i,u.h)):(_||(m=ls(m,Rh)),u.i=new Oi(m,u.h))}function Xt(u,m,_){u.i.set(m,_)}function os(u){return Xt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function bn(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ls(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,eu),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function eu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ao=/[#\/\?@]/g,bo=/[#\?:]/g,wh=/[#\?]/g,Rh=/[#\?@]/g,ea=/#/g;function Oi(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Sn(u){u.g||(u.g=new Map,u.h=0,u.i&&Sh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Oi.prototype,r.add=function(u,m){Sn(this),this.i=null,u=ni(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Mi(u,m){Sn(u),m=ni(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Vi(u,m){return Sn(u),m=ni(u,m),u.g.has(m)}r.forEach=function(u,m){Sn(this),this.g.forEach(function(_,A){_.forEach(function(k){u.call(m,k,A,this)},this)},this)},r.na=function(){Sn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let A=0;A<m.length;A++){const k=u[A];for(let q=0;q<k.length;q++)_.push(m[A])}return _},r.V=function(u){Sn(this);let m=[];if(typeof u=="string")Vi(this,u)&&(m=m.concat(this.g.get(ni(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return Sn(this),this.i=null,u=ni(this,u),Vi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function So(u,m,_){Mi(u,m),0<_.length&&(u.i=null,u.g.set(ni(u,m),rt(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var A=m[_];const q=encodeURIComponent(String(A)),et=this.V(A);for(A=0;A<et.length;A++){var k=q;et[A]!==""&&(k+="="+encodeURIComponent(String(et[A]))),u.push(k)}}return this.i=u.join("&")};function ni(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function nu(u,m){m&&!u.j&&(Sn(u),u.i=null,u.g.forEach(function(_,A){var k=A.toLowerCase();A!=k&&(Mi(this,A),So(this,k,_))},u)),u.j=m}function us(u,m){const _=new An;if(g.Image){const A=new Image;A.onload=H(wn,_,"TestLoadImage: loaded",!0,m,A),A.onerror=H(wn,_,"TestLoadImage: error",!1,m,A),A.onabort=H(wn,_,"TestLoadImage: abort",!1,m,A),A.ontimeout=H(wn,_,"TestLoadImage: timeout",!1,m,A),g.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=u}else m(!1)}function zn(u,m){const _=new An,A=new AbortController,k=setTimeout(()=>{A.abort(),wn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:A.signal}).then(q=>{clearTimeout(k),q.ok?wn(_,"TestPingServer: ok",!0,m):wn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(k),wn(_,"TestPingServer: error",!1,m)})}function wn(u,m,_,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(_)}catch{}}function cs(){this.g=new es}function ii(u,m,_){const A=_||"";try{To(u,function(k,q){let et=k;y(k)&&(et=Un(k)),m.push(A+q+"="+encodeURIComponent(et))})}catch(k){throw m.push(A+"type="+encodeURIComponent("_badmap")),k}}function hr(u){this.l=u.Ub||null,this.j=u.eb||!1}W(hr,ho),hr.prototype.g=function(){return new xi(this.l,this.j)},hr.prototype.i=function(u){return function(){return u}}({});function xi(u,m){le.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(xi,le),r=xi.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,si(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function wo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ri(this):si(this),this.readyState==3&&wo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,ri(this))},r.Qa=function(u){this.g&&(this.response=u,ri(this))},r.ga=function(){this.g&&ri(this)};function ri(u){u.readyState=4,u.l=null,u.j=null,u.v=null,si(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function si(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ro(u){let m="";return Ct(u,function(_,A){m+=A,m+=":",m+=_,m+=`\r
`}),m}function Oe(u,m,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Ro(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Xt(u,m,_))}function jt(u){le.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(jt,le);var na=/^https?$/i,hs=["POST","PUT"];r=jt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jn.g(),this.v=this.o?fo(this.o):fo(Jn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){iu(this,q);return}if(u=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)_.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),k=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(hs,m,void 0))||A||k||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,et]of _)this.g.setRequestHeader(q,et);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fs(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){iu(this,q)}};function iu(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ia(u),ai(u)}function ia(u){u.A||(u.A=!0,Gt(u,"complete"),Gt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Gt(this,"complete"),Gt(this,"abort"),ai(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ra(this):this.bb())},r.bb=function(){ra(this)};function ra(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Rn(u)!=4||u.Z()!=2)){if(u.u&&Rn(u)==4)Ge(u.Ea,0,u);else if(Gt(u,"readystatechange"),Rn(u)==4){u.h=!1;try{const et=u.Z();t:switch(et){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var A;if(A=et===0){var k=String(u.D).match(ss)[1]||null;!k&&g.self&&g.self.location&&(k=g.self.location.protocol.slice(0,-1)),A=!na.test(k?k.toLowerCase():"")}_=A}if(_)Gt(u,"complete"),Gt(u,"success");else{u.m=6;try{var q=2<Rn(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",ia(u)}}finally{ai(u)}}}}function ai(u,m){if(u.g){fs(u);const _=u.g,A=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Gt(u,"ready");try{_.onreadystatechange=A}catch{}}}function fs(u){u.I&&(g.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Rn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ys(m)}};function ru(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ih(u){const m={};u=(u.g&&2<=Rn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<u.length;A++){if(dt(u[A]))continue;var _=V(u[A]);const k=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[k]||[];m[k]=q,q.push(_)}M(m,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function sa(u){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,u),this.cb=ds("retryDelaySeedMs",1e4,u),this.Wa=ds("forwardChannelMaxRetries",2,u),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(u&&u.concurrentRequestLimit),this.Da=new cs,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=sa.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,A){ie(0),this.W=u,this.H=m||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=hu(this,null,this.W),oa(this)};function Io(u){if(su(u),u.G==3){var m=u.U++,_=fn(u.I);if(Xt(_,"SID",u.K),Xt(_,"RID",m),Xt(_,"TYPE","terminate"),ms(u,_),m=new tn(u,u.j,m),m.L=2,m.v=os(fn(_)),_=!1,g.navigator&&g.navigator.sendBeacon)try{_=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&g.Image&&(new Image().src=m.v,_=!0),_||(m.g=fu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),is(m)}cu(u)}function aa(u){u.g&&(gs(u),u.g.cancel(),u.g=null)}function su(u){aa(u),u.u&&(g.clearTimeout(u.u),u.u=null),la(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function oa(u){if(!Zs(u.h)&&!u.s){u.s=!0;var m=u.Ga;nt||C(),ut||(nt(),ut=!0),kt.add(m,u),u.B=0}}function Ch(u,m){return Ws(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=pe(D(u.Ga,u,m),No(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const k=new tn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=b(q),O(q,this.S)):q=this.S),this.m!==null||this.O||(k.H=q,q=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=au(this,k,m),_=fn(this.I),Xt(_,"RID",u),Xt(_,"CVER",22),this.D&&Xt(_,"X-HTTP-Session-Id",this.D),ms(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Ro(q)))+"&"+m:this.m&&Oe(_,this.m,q)),Js(this.h,k),this.Ua&&Xt(_,"TYPE","init"),this.P?(Xt(_,"$req",m),Xt(_,"SID","null"),k.T=!0,Ln(k,_,null)):Ln(k,_,m),this.G=2}}else this.G==3&&(u?Co(this,u):this.i.length==0||Zs(this.h)||Co(this))};function Co(u,m){var _;m?_=m.l:_=u.U++;const A=fn(u.I);Xt(A,"SID",u.K),Xt(A,"RID",_),Xt(A,"AID",u.T),ms(u,A),u.m&&u.o&&Oe(A,u.m,u.o),_=new tn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=au(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Js(u.h,_),Ln(_,A,m)}function ms(u,m){u.H&&Ct(u.H,function(_,A){Xt(m,A,_)}),u.l&&To({},function(_,A){Xt(m,A,_)})}function au(u,m,_){_=Math.min(u.i.length,_);var A=u.l?D(u.l.Na,u.l,u):null;t:{var k=u.i;let q=-1;for(;;){const et=["count="+_];q==-1?0<_?(q=k[0].g,et.push("ofs="+q)):q=0:et.push("ofs="+q);let Ut=!0;for(let Se=0;Se<_;Se++){let Lt=k[Se].g;const Me=k[Se].map;if(Lt-=q,0>Lt)q=Math.max(0,k[Se].g-100),Ut=!1;else try{ii(Me,et,"req"+Lt+"_")}catch{A&&A(Me)}}if(Ut){A=et.join("&");break t}}}return u=u.i.splice(0,_),m.D=u,A}function ou(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;nt||C(),ut||(nt(),ut=!0),kt.add(m,u),u.v=0}}function Do(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=pe(D(u.Fa,u),No(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,lu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=pe(D(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ie(10),aa(this),lu(this))};function gs(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function lu(u){u.g=new tn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=fn(u.qa);Xt(m,"RID","rpc"),Xt(m,"SID",u.K),Xt(m,"AID",u.T),Xt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Xt(m,"TO",u.ja),Xt(m,"TYPE","xmlhttp"),ms(u,m),u.m&&u.o&&Oe(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=os(fn(m)),_.m=null,_.P=!0,Ci(_,u)}r.Za=function(){this.C!=null&&(this.C=null,aa(this),Do(this),ie(19))};function la(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function uu(u,m){var _=null;if(u.g==m){la(u),gs(u),u.g=null;var A=2}else if(vo(u.h,m))_=m.D,en(u.h,m),A=1;else return;if(u.G!=0){if(m.o)if(A==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var k=u.B;A=sr(),Gt(A,new be(A,_)),oa(u)}else ou(u);else if(k=m.s,k==3||k==0&&0<m.X||!(A==1&&Ch(u,m)||A==2&&Do(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),k){case 1:Pi(u,5);break;case 4:Pi(u,10);break;case 3:Pi(u,6);break;default:Pi(u,2)}}}function No(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Pi(u,m){if(u.j.info("Error code "+m),m==2){var _=D(u.fb,u),A=u.Xa;const k=!A;A=new ye(A||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||as(A,"https"),os(A),k?us(A.toString(),_):zn(A.toString(),_)}else ie(2);u.G=0,u.l&&u.l.sa(m),cu(u),su(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function cu(u){if(u.G=0,u.ka=[],u.l){const m=Eo(u.h);(m.length!=0||u.i.length!=0)&&(J(u.ka,m),J(u.ka,u.i),u.h.i.length=0,rt(u.i),u.i.length=0),u.l.ra()}}function hu(u,m,_){var A=_ instanceof ye?fn(_):new ye(_);if(A.g!="")m&&(A.g=m+"."+A.g),cr(A,A.s);else{var k=g.location;A=k.protocol,m=m?m+"."+k.hostname:k.hostname,k=+k.port;var q=new ye(null);A&&as(q,A),m&&(q.g=m),k&&cr(q,k),_&&(q.l=_),A=q}return _=u.D,m=u.ya,_&&m&&Xt(A,_,m),Xt(A,"VER",u.la),ms(u,A),A}function fu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new jt(new hr({eb:_})):new jt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function du(){}r=du.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ua(){}ua.prototype.g=function(u,m){return new nn(u,m)};function nn(u,m){le.call(this),this.g=new sa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!dt(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!dt(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new oi(this)}W(nn,le),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){Io(this.g)},nn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Un(u),u=_);m.i.push(new tu(m.Ya++,u)),m.G==3&&oa(m)},nn.prototype.N=function(){this.g.l=null,delete this.j,Io(this.g),delete this.g,nn.aa.N.call(this)};function mu(u){Ri.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const _ in m){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}W(mu,Ri);function gu(){go.call(this),this.status=1}W(gu,go);function oi(u){this.g=u}W(oi,du),oi.prototype.ua=function(){Gt(this.g,"a")},oi.prototype.ta=function(u){Gt(this.g,new mu(u))},oi.prototype.sa=function(u){Gt(this.g,new gu)},oi.prototype.ra=function(){Gt(this.g,"b")},ua.prototype.createWebChannel=ua.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,z0=function(){return new ua},L0=function(){return sr()},U0=Wn,Xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lr.NO_ERROR=0,lr.TIMEOUT=8,lr.HTTP_ERROR=6,Ic=lr,Ii.COMPLETE="complete",k0=Ii,mo.EventType=wi,wi.OPEN="a",wi.CLOSE="b",wi.ERROR="c",wi.MESSAGE="d",le.prototype.listen=le.prototype.K,_l=mo,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,P0=jt}).apply(typeof yc<"u"?yc:typeof self<"u"?self:typeof window<"u"?window:{});const pv="@firebase/firestore",yv="4.7.17";/**
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
 */class $e{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */let io="11.9.0";/**
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
 */const zs=new nh("@firebase/firestore");function La(){return zs.logLevel}function at(r,...t){if(zs.logLevel<=xt.DEBUG){const n=t.map(Om);zs.debug(`Firestore (${io}): ${r}`,...n)}}function nr(r,...t){if(zs.logLevel<=xt.ERROR){const n=t.map(Om);zs.error(`Firestore (${io}): ${r}`,...n)}}function Ka(r,...t){if(zs.logLevel<=xt.WARN){const n=t.map(Om);zs.warn(`Firestore (${io}): ${r}`,...n)}}function Om(r){if(typeof r=="string")return r;try{/**
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
 */function yt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,B0(r,s,n)}function B0(r,t,n){let s=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw nr(s),new Error(s)}function Ft(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||B0(t,o,s)}function bt(r,t){return r}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ot extends $n{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ji{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class q0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rC{constructor(t){this.t=t,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ft(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let c=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ji,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},g=p=>{at("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(at("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ji)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(at("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ft(typeof s.accessToken=="string",31837,{l:s}),new q0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ft(t===null||typeof t=="string",2055,{h:t}),new $e(t)}}class sC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new sC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _v{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ft(this.o===void 0,3512);const s=c=>{c.error!=null&&at("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,at("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const o=c=>{at("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):at("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _v(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ft(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _v(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class j0{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=lC(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=t.charAt(o[c]%62))}return s}}function Nt(r,t){return r<t?-1:r>t?1:0}function $d(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return Nt(s,o);{const c=H0(),f=uC(c.encode(vv(r,n)),c.encode(vv(t,n)));return f!==0?f:Nt(s,o)}}n+=s>65535?2:1}return Nt(r.length,t.length)}function vv(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function uC(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return Nt(r[n],t[n]);return Nt(r.length,t.length)}function Ya(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
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
 */const Ev=-62135596800,Tv=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(t){return Ce.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Tv);return new Ce(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ot(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ot(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Ev)throw new ot(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ot(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tv}_compareTo(t){return this.seconds===t.seconds?Nt(this.nanoseconds,t.nanoseconds):Nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ev;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new Ce(0,0))}static max(){return new At(new Ce(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Av="__name__";class mi{constructor(t,n,s){n===void 0?n=0:n>t.length&&yt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&yt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return mi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof mi?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const c=mi.compareSegments(t.get(o),n.get(o));if(c!==0)return c}return Nt(t.length,n.length)}static compareSegments(t,n){const s=mi.isNumericId(t),o=mi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?mi.extractNumericId(t).compare(mi.extractNumericId(n)):$d(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return qr.fromString(t.substring(4,t.length-2))}}class ee extends mi{construct(t,n,s){return new ee(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new ot(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const cC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends mi{construct(t,n,s){return new je(t,n,s)}static isValidIdentifier(t){return cC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Av}static keyField(){return new je([Av])}static fromServerFormat(t){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new ot(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new ot(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ot(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(s+=g,o++):(c(),o++)}if(c(),f)throw new ot(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new je(n)}static emptyPath(){return new je([])}}/**
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
 */class mt{constructor(t){this.path=t}static fromPath(t){return new mt(ee.fromString(t))}static fromName(t){return new mt(ee.fromString(t).popFirst(5))}static empty(){return new mt(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ee.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ee.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new mt(new ee(t.slice()))}}/**
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
 */const Ml=-1;function hC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=At.fromTimestamp(s===1e9?new Ce(n+1,0):new Ce(n,s));return new Fr(o,mt.empty(),t)}function fC(r){return new Fr(r.readTime,r.key,Ml)}class Fr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Fr(At.min(),mt.empty(),Ml)}static max(){return new Fr(At.max(),mt.empty(),Ml)}}function dC(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=mt.comparator(r.documentKey,t.documentKey),n!==0?n:Nt(r.largestBatchId,t.largestBatchId))}/**
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
 */const mC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ro(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==mC)throw r;at("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&yt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Y((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.reject(n)}static resolve(t){return new Y((n,s)=>{n(t)})}static reject(t){return new Y((n,s)=>{s(t)})}static waitFor(t){return new Y((n,s)=>{let o=0,c=0,f=!1;t.forEach(g=>{++o,g.next(()=>{++c,f&&c===o&&n()},p=>s(p))}),f=!0,c===o&&n()})}static or(t){let n=Y.resolve(!1);for(const s of t)n=n.next(o=>o?Y.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,c)=>{s.push(n.call(this,o,c))}),this.waitFor(s)}static mapArray(t,n){return new Y((s,o)=>{const c=t.length,f=new Array(c);let g=0;for(let p=0;p<c;p++){const y=p;n(t[y]).next(T=>{f[y]=T,++g,g===c&&s(f)},T=>o(T))}})}static doWhile(t,n){return new Y((s,o)=>{const c=()=>{t()===!0?n().next(()=>{c()},o):s()};c()})}}function pC(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class lh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}lh.le=-1;/**
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
 */const Mm=-1;function uh(r){return r==null}function jc(r){return r===0&&1/r==-1/0}function yC(r){return typeof r=="number"&&Number.isInteger(r)&&!jc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const F0="";function _C(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=bv(t)),t=vC(r.get(n),t);return bv(t)}function vC(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case F0:n+="";break;default:n+=c}}return n}function bv(r){return r+F0+""}/**
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
 */function Sv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function js(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function G0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ae{constructor(t,n){this.comparator=t,this.root=n||He.EMPTY}insert(t,n){return new ae(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(t){return new ae(this.comparator,this.root.remove(t,this.comparator).copy(null,null,He.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new _c(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new _c(this.root,t,this.comparator,!1)}getReverseIterator(){return new _c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new _c(this.root,t,this.comparator,!0)}}class _c{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&o&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class He{constructor(t,n,s,o,c){this.key=t,this.value=n,this.color=s??He.RED,this.left=o??He.EMPTY,this.right=c??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,c){return new He(t??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const c=s(t,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(t,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return He.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw yt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw yt(27949);return t+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw yt(57766)}get value(){throw yt(16141)}get color(){throw yt(16727)}get left(){throw yt(29726)}get right(){throw yt(36894)}copy(t,n,s,o,c){return this}insert(t,n,s){return new He(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(t){this.comparator=t,this.data=new ae(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new wv(this.data.getIterator())}getIteratorFrom(t){return new wv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof De)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new De(this.comparator);return n.data=t,n}}class wv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gn{constructor(t){this.fields=t,t.sort(je.comparator)}static empty(){return new Gn([])}unionWith(t){let n=new De(je.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Gn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ya(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Fe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Q0("Invalid base64 string: "+c):c}}(t);return new Fe(n)}static fromUint8Array(t){const n=function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c}(t);return new Fe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const EC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(r){if(Ft(!!r,39018),typeof r=="string"){let t=0;const n=EC.exec(r);if(Ft(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:me(r.seconds),nanos:me(r.nanos)}}function me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Qr(r){return typeof r=="string"?Fe.fromBase64String(r):Fe.fromUint8Array(r)}/**
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
 */const K0="server_timestamp",Y0="__type__",X0="__previous_value__",$0="__local_write_time__";function Vm(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Y0])===null||n===void 0?void 0:n.stringValue)===K0}function ch(r){const t=r.mapValue.fields[X0];return Vm(t)?ch(t):t}function Vl(r){const t=Gr(r.mapValue.fields[$0].timestampValue);return new Ce(t.seconds,t.nanos)}/**
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
 */class TC{constructor(t,n,s,o,c,f,g,p,y,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=T}}const Fc="(default)";class xl{constructor(t,n){this.projectId=t,this.database=n||Fc}static empty(){return new xl("","")}get isDefaultDatabase(){return this.database===Fc}isEqual(t){return t instanceof xl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Z0="__type__",AC="__max__",vc={mapValue:{}},W0="__vector__",Gc="value";function Kr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Vm(r)?4:SC(r)?9007199254740991:bC(r)?10:11:yt(28295,{value:r})}function Ei(r,t){if(r===t)return!0;const n=Kr(r);if(n!==Kr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Vl(r).isEqual(Vl(t));case 3:return function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Gr(o.timestampValue),g=Gr(c.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,c){return Qr(o.bytesValue).isEqual(Qr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,c){return me(o.geoPointValue.latitude)===me(c.geoPointValue.latitude)&&me(o.geoPointValue.longitude)===me(c.geoPointValue.longitude)}(r,t);case 2:return function(o,c){if("integerValue"in o&&"integerValue"in c)return me(o.integerValue)===me(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=me(o.doubleValue),g=me(c.doubleValue);return f===g?jc(f)===jc(g):isNaN(f)&&isNaN(g)}return!1}(r,t);case 9:return Ya(r.arrayValue.values||[],t.arrayValue.values||[],Ei);case 10:case 11:return function(o,c){const f=o.mapValue.fields||{},g=c.mapValue.fields||{};if(Sv(f)!==Sv(g))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(g[p]===void 0||!Ei(f[p],g[p])))return!1;return!0}(r,t);default:return yt(52216,{left:r})}}function Pl(r,t){return(r.values||[]).find(n=>Ei(n,t))!==void 0}function Xa(r,t){if(r===t)return 0;const n=Kr(r),s=Kr(t);if(n!==s)return Nt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Nt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const g=me(c.integerValue||c.doubleValue),p=me(f.integerValue||f.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return Rv(r.timestampValue,t.timestampValue);case 4:return Rv(Vl(r),Vl(t));case 5:return $d(r.stringValue,t.stringValue);case 6:return function(c,f){const g=Qr(c),p=Qr(f);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const g=c.split("/"),p=f.split("/");for(let y=0;y<g.length&&y<p.length;y++){const T=Nt(g[y],p[y]);if(T!==0)return T}return Nt(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const g=Nt(me(c.latitude),me(f.latitude));return g!==0?g:Nt(me(c.longitude),me(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Iv(r.arrayValue,t.arrayValue);case 10:return function(c,f){var g,p,y,T;const R=c.fields||{},D=f.fields||{},H=(g=R[Gc])===null||g===void 0?void 0:g.arrayValue,W=(p=D[Gc])===null||p===void 0?void 0:p.arrayValue,rt=Nt(((y=H?.values)===null||y===void 0?void 0:y.length)||0,((T=W?.values)===null||T===void 0?void 0:T.length)||0);return rt!==0?rt:Iv(H,W)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===vc.mapValue&&f===vc.mapValue)return 0;if(c===vc.mapValue)return 1;if(f===vc.mapValue)return-1;const g=c.fields||{},p=Object.keys(g),y=f.fields||{},T=Object.keys(y);p.sort(),T.sort();for(let R=0;R<p.length&&R<T.length;++R){const D=$d(p[R],T[R]);if(D!==0)return D;const H=Xa(g[p[R]],y[T[R]]);if(H!==0)return H}return Nt(p.length,T.length)}(r.mapValue,t.mapValue);default:throw yt(23264,{Pe:n})}}function Rv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Nt(r,t);const n=Gr(r),s=Gr(t),o=Nt(n.seconds,s.seconds);return o!==0?o:Nt(n.nanos,s.nanos)}function Iv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=Xa(n[o],s[o]);if(c)return c}return Nt(n.length,s.length)}function $a(r){return Zd(r)}function Zd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Gr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Qr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return mt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=Zd(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const f of s)c?c=!1:o+=",",o+=`${f}:${Zd(n.fields[f])}`;return o+"}"}(r.mapValue):yt(61005,{value:r})}function Cc(r){switch(Kr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ch(r);return t?16+Cc(t):16;case 5:return 2*r.stringValue.length;case 6:return Qr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,c)=>o+Cc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return js(s.fields,(c,f)=>{o+=c.length+Cc(f)}),o}(r.mapValue);default:throw yt(13486,{value:r})}}function Cv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Wd(r){return!!r&&"integerValue"in r}function xm(r){return!!r&&"arrayValue"in r}function Dv(r){return!!r&&"nullValue"in r}function Nv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Dc(r){return!!r&&"mapValue"in r}function bC(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Z0])===null||n===void 0?void 0:n.stringValue)===W0}function Rl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return js(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Rl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Rl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function SC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===AC}/**
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
 */class xn{constructor(t){this.value=t}static empty(){return new xn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Dc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Rl(n)}setAll(t){let n=je.emptyPath(),s={},o=[];t.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=g.popLast()}f?s[g.lastSegment()]=Rl(f):o.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(t){const n=this.field(t.popLast());Dc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ei(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Dc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){js(n,(o,c)=>t[o]=c);for(const o of s)delete t[o]}clone(){return new xn(Rl(this.value))}}function J0(r){const t=[];return js(r.fields,(n,s)=>{const o=new je([n]);if(Dc(s)){const c=J0(s.mapValue).fields;if(c.length===0)t.push(o);else for(const f of c)t.push(o.child(f))}else t.push(o)}),new Gn(t)}/**
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
 */class Ze{constructor(t,n,s,o,c,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=f,this.documentState=g}static newInvalidDocument(t){return new Ze(t,0,At.min(),At.min(),At.min(),xn.empty(),0)}static newFoundDocument(t,n,s,o){return new Ze(t,1,n,At.min(),s,o,0)}static newNoDocument(t,n){return new Ze(t,2,n,At.min(),At.min(),xn.empty(),0)}static newUnknownDocument(t,n){return new Ze(t,3,n,At.min(),At.min(),xn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ze&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qc{constructor(t,n){this.position=t,this.inclusive=n}}function Ov(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const c=t[o],f=r.position[o];if(c.field.isKeyField()?s=mt.comparator(mt.fromName(f.referenceValue),n.key):s=Xa(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ei(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Kc{constructor(t,n="asc"){this.field=t,this.dir=n}}function wC(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class tT{}class Te extends tT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new IC(t,n,s):n==="array-contains"?new NC(t,s):n==="in"?new OC(t,s):n==="not-in"?new MC(t,s):n==="array-contains-any"?new VC(t,s):new Te(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new CC(t,s):new DC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Xa(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.matchesComparison(Xa(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return yt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends tT{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new Xn(t,n)}matches(t){return eT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function eT(r){return r.op==="and"}function nT(r){return RC(r)&&eT(r)}function RC(r){for(const t of r.filters)if(t instanceof Xn)return!1;return!0}function Jd(r){if(r instanceof Te)return r.field.canonicalString()+r.op.toString()+$a(r.value);if(nT(r))return r.filters.map(t=>Jd(t)).join(",");{const t=r.filters.map(n=>Jd(n)).join(",");return`${r.op}(${t})`}}function iT(r,t){return r instanceof Te?function(s,o){return o instanceof Te&&s.op===o.op&&s.field.isEqual(o.field)&&Ei(s.value,o.value)}(r,t):r instanceof Xn?function(s,o){return o instanceof Xn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((c,f,g)=>c&&iT(f,o.filters[g]),!0):!1}(r,t):void yt(19439)}function rT(r){return r instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${$a(n.value)}`}(r):r instanceof Xn?function(n){return n.op.toString()+" {"+n.getFilters().map(rT).join(" ,")+"}"}(r):"Filter"}class IC extends Te{constructor(t,n,s){super(t,n,s),this.key=mt.fromName(s.referenceValue)}matches(t){const n=mt.comparator(t.key,this.key);return this.matchesComparison(n)}}class CC extends Te{constructor(t,n){super(t,"in",n),this.keys=sT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class DC extends Te{constructor(t,n){super(t,"not-in",n),this.keys=sT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function sT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>mt.fromName(s.referenceValue))}class NC extends Te{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return xm(n)&&Pl(n.arrayValue,this.value)}}class OC extends Te{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Pl(this.value.arrayValue,n)}}class MC extends Te{constructor(t,n){super(t,"not-in",n)}matches(t){if(Pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Pl(this.value.arrayValue,n)}}class VC extends Te{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!xm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Pl(this.value.arrayValue,s))}}/**
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
 */class xC{constructor(t,n=null,s=[],o=[],c=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=f,this.endAt=g,this.Ie=null}}function Vv(r,t=null,n=[],s=[],o=null,c=null,f=null){return new xC(r,t,n,s,o,c,f)}function Pm(r){const t=bt(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Jd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),uh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>$a(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>$a(s)).join(",")),t.Ie=n}return t.Ie}function km(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!wC(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!iT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Mv(r.startAt,t.startAt)&&Mv(r.endAt,t.endAt)}function tm(r){return mt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Hl{constructor(t,n=null,s=[],o=[],c=null,f="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=f,this.startAt=g,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function PC(r,t,n,s,o,c,f,g){return new Hl(r,t,n,s,o,c,f,g)}function Um(r){return new Hl(r)}function xv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function aT(r){return r.collectionGroup!==null}function Il(r){const t=bt(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const c of t.explicitOrderBy)t.Ee.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new De(je.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(g=g.add(y.field))})}),g})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.Ee.push(new Kc(c,s))}),n.has(je.keyField().canonicalString())||t.Ee.push(new Kc(je.keyField(),s))}return t.Ee}function pi(r){const t=bt(r);return t.de||(t.de=kC(t,Il(r))),t.de}function kC(r,t){if(r.limitType==="F")return Vv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const c=o.dir==="desc"?"asc":"desc";return new Kc(o.field,c)});const n=r.endAt?new Qc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Qc(r.startAt.position,r.startAt.inclusive):null;return Vv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function em(r,t){const n=r.filters.concat([t]);return new Hl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function nm(r,t,n){return new Hl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function hh(r,t){return km(pi(r),pi(t))&&r.limitType===t.limitType}function oT(r){return`${Pm(pi(r))}|lt:${r.limitType}`}function za(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>rT(o)).join(", ")}]`),uh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>$a(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>$a(o)).join(",")),`Target(${s})`}(pi(r))}; limitType=${r.limitType})`}function fh(r,t){return t.isFoundDocument()&&function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):mt.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,o){for(const c of Il(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,g,p){const y=Ov(f,g,p);return f.inclusive?y<=0:y<0}(s.startAt,Il(s),o)||s.endAt&&!function(f,g,p){const y=Ov(f,g,p);return f.inclusive?y>=0:y>0}(s.endAt,Il(s),o))}(r,t)}function UC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function lT(r){return(t,n)=>{let s=!1;for(const o of Il(r)){const c=LC(o,t,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function LC(r,t,n){const s=r.field.isKeyField()?mt.comparator(t.key,n.key):function(c,f,g){const p=f.data.field(c),y=g.data.field(c);return p!==null&&y!==null?Xa(p,y):yt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return yt(19790,{direction:r.dir})}}/**
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
 */class Fs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],t))return void(o[c]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){js(this.inner,(n,s)=>{for(const[o,c]of s)t(o,c)})}isEmpty(){return G0(this.inner)}size(){return this.innerSize}}/**
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
 */const zC=new ae(mt.comparator);function ir(){return zC}const uT=new ae(mt.comparator);function vl(...r){let t=uT;for(const n of r)t=t.insert(n.key,n);return t}function cT(r){let t=uT;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function xs(){return Cl()}function hT(){return Cl()}function Cl(){return new Fs(r=>r.toString(),(r,t)=>r.isEqual(t))}const BC=new ae(mt.comparator),qC=new De(mt.comparator);function Pt(...r){let t=qC;for(const n of r)t=t.add(n);return t}const HC=new De(Nt);function jC(){return HC}/**
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
 */function Lm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jc(t)?"-0":t}}function fT(r){return{integerValue:""+r}}function FC(r,t){return yC(t)?fT(t):Lm(r,t)}/**
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
 */class dh{constructor(){this._=void 0}}function GC(r,t,n){return r instanceof Yc?function(o,c){const f={fields:{[Y0]:{stringValue:K0},[$0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&Vm(c)&&(c=ch(c)),c&&(f.fields[X0]=c),{mapValue:f}}(n,t):r instanceof kl?mT(r,t):r instanceof Ul?gT(r,t):function(o,c){const f=dT(o,c),g=Pv(f)+Pv(o.Re);return Wd(f)&&Wd(o.Re)?fT(g):Lm(o.serializer,g)}(r,t)}function QC(r,t,n){return r instanceof kl?mT(r,t):r instanceof Ul?gT(r,t):n}function dT(r,t){return r instanceof Xc?function(s){return Wd(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Yc extends dh{}class kl extends dh{constructor(t){super(),this.elements=t}}function mT(r,t){const n=pT(t);for(const s of r.elements)n.some(o=>Ei(o,s))||n.push(s);return{arrayValue:{values:n}}}class Ul extends dh{constructor(t){super(),this.elements=t}}function gT(r,t){let n=pT(t);for(const s of r.elements)n=n.filter(o=>!Ei(o,s));return{arrayValue:{values:n}}}class Xc extends dh{constructor(t,n){super(),this.serializer=t,this.Re=n}}function Pv(r){return me(r.integerValue||r.doubleValue)}function pT(r){return xm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function KC(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof kl&&o instanceof kl||s instanceof Ul&&o instanceof Ul?Ya(s.elements,o.elements,Ei):s instanceof Xc&&o instanceof Xc?Ei(s.Re,o.Re):s instanceof Yc&&o instanceof Yc}(r.transform,t.transform)}class YC{constructor(t,n){this.version=t,this.transformResults=n}}class Kn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Kn}static exists(t){return new Kn(void 0,t)}static updateTime(t){return new Kn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class mh{}function yT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new zm(r.key,Kn.none()):new jl(r.key,r.data,Kn.none());{const n=r.data,s=xn.empty();let o=new De(je.comparator);for(let c of t.fields)if(!o.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),o=o.add(c)}return new Gs(r.key,s,new Gn(o.toArray()),Kn.none())}}function XC(r,t,n){r instanceof jl?function(o,c,f){const g=o.value.clone(),p=Uv(o.fieldTransforms,c,f.transformResults);g.setAll(p),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):r instanceof Gs?function(o,c,f){if(!Nc(o.precondition,c))return void c.convertToUnknownDocument(f.version);const g=Uv(o.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(_T(o)),p.setAll(g),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Dl(r,t,n,s){return r instanceof jl?function(c,f,g,p){if(!Nc(c.precondition,f))return g;const y=c.value.clone(),T=Lv(c.fieldTransforms,p,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Gs?function(c,f,g,p){if(!Nc(c.precondition,f))return g;const y=Lv(c.fieldTransforms,p,f),T=f.data;return T.setAll(_T(c)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(R=>R.field))}(r,t,n,s):function(c,f,g){return Nc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(r,t,n)}function $C(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),c=dT(s.transform,o||null);c!=null&&(n===null&&(n=xn.empty()),n.set(s.field,c))}return n||null}function kv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ya(s,o,(c,f)=>KC(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class jl extends mh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Gs extends mh{constructor(t,n,s,o,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function _T(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Uv(r,t,n){const s=new Map;Ft(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const c=r[o],f=c.transform,g=t.data.field(c.field);s.set(c.field,QC(f,g,n[o]))}return s}function Lv(r,t,n){const s=new Map;for(const o of r){const c=o.transform,f=n.data.field(o.field);s.set(o.field,GC(c,f,t))}return s}class zm extends mh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZC extends mh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class WC{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(t.key)&&XC(c,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Dl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Dl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=hT();return this.mutations.forEach(o=>{const c=t.get(o.key),f=c.overlayedDocument;let g=this.applyToLocalView(f,c.mutatedFields);g=n.has(o.key)?null:g;const p=yT(f,g);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pt())}isEqual(t){return this.batchId===t.batchId&&Ya(this.mutations,t.mutations,(n,s)=>kv(n,s))&&Ya(this.baseMutations,t.baseMutations,(n,s)=>kv(n,s))}}class Bm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ft(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return BC}();const c=t.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,s[f].version);return new Bm(t,n,s,o)}}/**
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
 */class JC{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class t2{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ee,Bt;function e2(r){switch(r){case X.OK:return yt(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return yt(15467,{code:r})}}function vT(r){if(r===void 0)return nr("GRPC error has no .code"),X.UNKNOWN;switch(r){case Ee.OK:return X.OK;case Ee.CANCELLED:return X.CANCELLED;case Ee.UNKNOWN:return X.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return X.INTERNAL;case Ee.UNAVAILABLE:return X.UNAVAILABLE;case Ee.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Ee.NOT_FOUND:return X.NOT_FOUND;case Ee.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Ee.ABORTED:return X.ABORTED;case Ee.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Ee.DATA_LOSS:return X.DATA_LOSS;default:return yt(39323,{code:r})}}(Bt=Ee||(Ee={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const n2=new qr([4294967295,4294967295],0);function zv(r){const t=H0().encode(r),n=new x0;return n.update(t),new Uint8Array(n.digest())}function Bv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new qr([n,s],0),new qr([o,c],0)]}class qm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new El(`Invalid padding: ${n}`);if(s<0)throw new El(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new El(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new El(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=qr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(qr.fromNumber(s)));return o.compare(n2)===1&&(o=new qr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=zv(t),[s,o]=Bv(n);for(let c=0;c<this.hashCount;c++){const f=this.we(s,o,c);if(!this.be(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new qm(c,o,n);return s.forEach(g=>f.insert(g)),f}insert(t){if(this.pe===0)return;const n=zv(t),[s,o]=Bv(n);for(let c=0;c<this.hashCount;c++){const f=this.we(s,o,c);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class El extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gh{constructor(t,n,s,o,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Fl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new gh(At.min(),o,new ae(Nt),ir(),Pt())}}class Fl{constructor(t,n,s,o,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Fl(s,n,Pt(),Pt(),Pt())}}/**
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
 */class Oc{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class ET{constructor(t,n){this.targetId=t,this.Ce=n}}class TT{constructor(t,n,s=Fe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class qv{constructor(){this.Fe=0,this.Me=Hv(),this.xe=Fe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Pt(),n=Pt(),s=Pt();return this.Me.forEach((o,c)=>{switch(c){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:yt(38017,{changeType:c})}}),new Fl(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=Hv()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ft(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class i2{constructor(t){this.ze=t,this.je=new Map,this.He=ir(),this.Je=Ec(),this.Ye=Ec(),this.Ze=new ae(Nt)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:yt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const c=o.target;if(tm(c))if(s===0){const f=new mt(c.path);this.tt(n,f,Ze.newNoDocument(f,At.min()))}else Ft(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const g=this.ct(t),p=g?this.lt(g,t,f):1;if(p!==0){this.st(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let f,g;try{f=Qr(s).toUint8Array()}catch(p){if(p instanceof Q0)return Ka("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new qm(f,o,c)}catch(p){return Ka(p instanceof El?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.pe===0?null:g}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(c=>{const f=this.ze.Pt(),g=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.tt(n,c,null),o++)}),o}It(t){const n=new Map;this.je.forEach((c,f)=>{const g=this._t(f);if(g){if(c.current&&tm(g.target)){const p=new mt(g.target.path);this.Et(p).has(f)||this.dt(f,p)||this.tt(f,p,Ze.newNoDocument(p,t))}c.Le&&(n.set(f,c.qe()),c.Qe())}});let s=Pt();this.Ye.forEach((c,f)=>{let g=!0;f.forEachWhile(p=>{const y=this._t(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(s=s.add(c))}),this.He.forEach((c,f)=>f.setReadTime(t));const o=new gh(t,n,this.Ze,this.He,s);return this.He=ir(),this.Je=Ec(),this.Ye=Ec(),this.Ze=new ae(Nt),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new qv,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new De(Nt),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new De(Nt),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||at("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new qv),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function Ec(){return new ae(mt.comparator)}function Hv(){return new ae(mt.comparator)}const r2={asc:"ASCENDING",desc:"DESCENDING"},s2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a2={and:"AND",or:"OR"};class o2{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function im(r,t){return r.useProto3Json||uh(t)?t:{value:t}}function $c(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function AT(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function l2(r,t){return $c(r,t.toTimestamp())}function yi(r){return Ft(!!r,49232),At.fromTimestamp(function(n){const s=Gr(n);return new Ce(s.seconds,s.nanos)}(r))}function Hm(r,t){return rm(r,t).canonicalString()}function rm(r,t){const n=function(o){return new ee(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function bT(r){const t=ee.fromString(r);return Ft(CT(t),10190,{key:t.toString()}),t}function sm(r,t){return Hm(r.databaseId,t.path)}function Pd(r,t){const n=bT(t);if(n.get(1)!==r.databaseId.projectId)throw new ot(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ot(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new mt(wT(n))}function ST(r,t){return Hm(r.databaseId,t)}function u2(r){const t=bT(r);return t.length===4?ee.emptyPath():wT(t)}function am(r){return new ee(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function wT(r){return Ft(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function jv(r,t,n){return{name:sm(r,t),fields:n.value.mapValue.fields}}function c2(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:yt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],c=function(y,T){return y.useProto3Json?(Ft(T===void 0||typeof T=="string",58123),Fe.fromBase64String(T||"")):(Ft(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Fe.fromUint8Array(T||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&function(y){const T=y.code===void 0?X.UNKNOWN:vT(y.code);return new ot(T,y.message||"")}(f);n=new TT(s,o,c,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Pd(r,s.document.name),c=yi(s.document.updateTime),f=s.document.createTime?yi(s.document.createTime):At.min(),g=new xn({mapValue:{fields:s.document.fields}}),p=Ze.newFoundDocument(o,c,f,g),y=s.targetIds||[],T=s.removedTargetIds||[];n=new Oc(y,T,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Pd(r,s.document),c=s.readTime?yi(s.readTime):At.min(),f=Ze.newNoDocument(o,c),g=s.removedTargetIds||[];n=new Oc([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Pd(r,s.document),c=s.removedTargetIds||[];n=new Oc([],c,o,null)}else{if(!("filter"in t))return yt(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,f=new t2(o,c),g=s.targetId;n=new ET(g,f)}}return n}function h2(r,t){let n;if(t instanceof jl)n={update:jv(r,t.key,t.value)};else if(t instanceof zm)n={delete:sm(r,t.key)};else if(t instanceof Gs)n={update:jv(r,t.key,t.data),updateMask:E2(t.fieldMask)};else{if(!(t instanceof ZC))return yt(16599,{ft:t.type});n={verify:sm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const g=f.transform;if(g instanceof Yc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof kl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Ul)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Xc)return{fieldPath:f.field.canonicalString(),increment:g.Re};throw yt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,c){return c.updateTime!==void 0?{updateTime:l2(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:yt(27497)}(r,t.precondition)),n}function f2(r,t){return r&&r.length>0?(Ft(t!==void 0,14353),r.map(n=>function(o,c){let f=o.updateTime?yi(o.updateTime):yi(c);return f.isEqual(At.min())&&(f=yi(c)),new YC(f,o.transformResults||[])}(n,t))):[]}function d2(r,t){return{documents:[ST(r,t.path)]}}function m2(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=ST(r,o);const c=function(y){if(y.length!==0)return IT(Xn.create(y,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(T=>function(D){return{field:Ba(D.field),direction:y2(D.dir)}}(T))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=im(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{gt:n,parent:o}}function g2(r){let t=u2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ft(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let c=[];n.where&&(c=function(R){const D=RT(R);return D instanceof Xn&&nT(D)?D.getFilters():[D]}(n.where));let f=[];n.orderBy&&(f=function(R){return R.map(D=>function(W){return new Kc(qa(W.field),function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(D))}(n.orderBy));let g=null;n.limit&&(g=function(R){let D;return D=typeof R=="object"?R.value:R,uh(D)?null:D}(n.limit));let p=null;n.startAt&&(p=function(R){const D=!!R.before,H=R.values||[];return new Qc(H,D)}(n.startAt));let y=null;return n.endAt&&(y=function(R){const D=!R.before,H=R.values||[];return new Qc(H,D)}(n.endAt)),PC(t,o,f,c,g,"F",p,y)}function p2(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return yt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function RT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=qa(n.unaryFilter.field);return Te.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=qa(n.unaryFilter.field);return Te.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=qa(n.unaryFilter.field);return Te.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=qa(n.unaryFilter.field);return Te.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return yt(61313);default:return yt(60726)}}(r):r.fieldFilter!==void 0?function(n){return Te.create(qa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return yt(58110);default:return yt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Xn.create(n.compositeFilter.filters.map(s=>RT(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return yt(1026)}}(n.compositeFilter.op))}(r):yt(30097,{filter:r})}function y2(r){return r2[r]}function _2(r){return s2[r]}function v2(r){return a2[r]}function Ba(r){return{fieldPath:r.canonicalString()}}function qa(r){return je.fromServerFormat(r.fieldPath)}function IT(r){return r instanceof Te?function(n){if(n.op==="=="){if(Nv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NAN"}};if(Dv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Nv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NAN"}};if(Dv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ba(n.field),op:_2(n.op),value:n.value}}}(r):r instanceof Xn?function(n){const s=n.getFilters().map(o=>IT(o));return s.length===1?s[0]:{compositeFilter:{op:v2(n.op),filters:s}}}(r):yt(54877,{filter:r})}function E2(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function CT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Lr{constructor(t,n,s,o,c=At.min(),f=At.min(),g=Fe.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new Lr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class T2{constructor(t){this.wt=t}}function A2(r){const t=g2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?nm(t,t.limit,"L"):t}/**
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
 */class b2{constructor(){this.Cn=new S2}addToCollectionParentIndex(t,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(t,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return Y.resolve()}deleteFieldIndex(t,n){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,n){return Y.resolve()}getDocumentsMatchingTarget(t,n){return Y.resolve(null)}getIndexType(t,n){return Y.resolve(0)}getFieldIndexes(t,n){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,n){return Y.resolve(Fr.min())}getMinOffsetFromCollectionGroup(t,n){return Y.resolve(Fr.min())}updateCollectionGroup(t,n,s){return Y.resolve()}updateIndexEntries(t,n){return Y.resolve()}}class S2{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new De(ee.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new De(ee.comparator)).toArray()}}/**
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
 */const Fv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DT=41943040;class ln{static withCacheSize(t){return new ln(t,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(DT,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
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
 */class Za{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Za(0)}static lr(){return new Za(-1)}}/**
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
 */const Gv="LruGarbageCollector",w2=1048576;function Qv([r,t],[n,s]){const o=Nt(r,n);return o===0?Nt(t,s):o}class R2{constructor(t){this.Er=t,this.buffer=new De(Qv),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Qv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class I2{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){at(Gv,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){so(n)?at(Gv,"Ignoring IndexedDB error during garbage collection: ",n):await ro(n)}await this.mr(3e5)})}}class C2{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Y.resolve(lh.le);const s=new R2(n);return this.gr.forEachTarget(t,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(t,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.gr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(at("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(Fv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(at("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fv):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let s,o,c,f,g,p,y;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(at("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,f=Date.now(),this.nthSequenceNumber(t,o))).next(R=>(s=R,g=Date.now(),this.removeTargets(t,s,n))).next(R=>(c=R,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(R=>(y=Date.now(),La()<=xt.DEBUG&&at("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${c} targets in `+(p-g)+`ms
	Removed ${R} documents in `+(y-p)+`ms
Total Duration: ${y-T}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:R})))}}function D2(r,t){return new C2(r,t)}/**
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
 */class N2{constructor(){this.changes=new Fs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ze.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class O2{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class M2{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Dl(s.mutation,o,Gn.empty(),Ce.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Pt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Pt()){const o=xs();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(c=>{let f=vl();return c.forEach((g,p)=>{f=f.insert(g,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=xs();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Pt()))}populateOverlays(t,n,s){const o=[];return s.forEach(c=>{n.has(c)||o.push(c)}),this.documentOverlayCache.getOverlays(t,o).next(c=>{c.forEach((f,g)=>{n.set(f,g)})})}computeViews(t,n,s,o){let c=ir();const f=Cl(),g=function(){return Cl()}();return n.forEach((p,y)=>{const T=s.get(y.key);o.has(y.key)&&(T===void 0||T.mutation instanceof Gs)?c=c.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),Dl(T.mutation,y,T.mutation.getFieldMask(),Ce.now())):f.set(y.key,Gn.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((y,T)=>f.set(y,T)),n.forEach((y,T)=>{var R;return g.set(y,new O2(T,(R=f.get(y))!==null&&R!==void 0?R:null))}),g))}recalculateAndSaveOverlays(t,n){const s=Cl();let o=new ae((f,g)=>f-g),c=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const g of f)g.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let T=s.get(p)||Gn.empty();T=g.applyToLocalView(y,T),s.set(p,T);const R=(o.get(g.batchId)||Pt()).add(p);o=o.insert(g.batchId,R)})}).next(()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),y=p.key,T=p.value,R=hT();T.forEach(D=>{if(!c.has(D)){const H=yT(n.get(D),s.get(D));H!==null&&R.set(D,H),c=c.add(D)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,R))}return Y.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return mt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):aT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-c.size):Y.resolve(xs());let g=Ml,p=c;return f.next(y=>Y.forEach(y,(T,R)=>(g<R.largestBatchId&&(g=R.largestBatchId),c.get(T)?Y.resolve():this.remoteDocumentCache.getEntry(t,T).next(D=>{p=p.insert(T,D)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,p,y,Pt())).next(T=>({batchId:g,changes:cT(T)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new mt(n)).next(s=>{let o=vl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const c=n.collectionGroup;let f=vl();return this.indexManager.getCollectionParents(t,c).next(g=>Y.forEach(g,p=>{const y=function(R,D){return new Hl(D,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(T=>{T.forEach((R,D)=>{f=f.insert(R,D)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,o))).next(f=>{c.forEach((p,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,Ze.newInvalidDocument(T)))});let g=vl();return f.forEach((p,y)=>{const T=c.get(p);T!==void 0&&Dl(T.mutation,y,Gn.empty(),Ce.now()),fh(n,y)&&(g=g.insert(p,y))}),g})}}/**
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
 */class V2{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return Y.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:yi(o.createTime)}}(n)),Y.resolve()}getNamedQuery(t,n){return Y.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(o){return{name:o.name,query:A2(o.bundledQuery),readTime:yi(o.readTime)}}(n)),Y.resolve()}}/**
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
 */class x2{constructor(){this.overlays=new ae(mt.comparator),this.Qr=new Map}getOverlay(t,n){return Y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=xs();return Y.forEach(n,o=>this.getOverlay(t,o).next(c=>{c!==null&&s.set(o,c)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,c)=>{this.St(t,n,c)}),Y.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(c=>this.overlays=this.overlays.remove(c)),this.Qr.delete(s)),Y.resolve()}getOverlaysForCollection(t,n,s){const o=xs(),c=n.length+1,f=new mt(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const p=g.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Y.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let c=new ae((y,T)=>y-T);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=c.get(y.largestBatchId);T===null&&(T=xs(),c=c.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const g=xs(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,T)=>g.set(y,T)),!(g.size()>=o)););return Y.resolve(g)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new JC(n,s));let c=this.Qr.get(n);c===void 0&&(c=Pt(),this.Qr.set(n,c)),this.Qr.set(n,c.add(s.key))}}/**
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
 */class P2{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Y.resolve()}}/**
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
 */class jm{constructor(){this.$r=new De(ke.Ur),this.Kr=new De(ke.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const s=new ke(t,n);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.zr(new ke(t,n))}jr(t,n){t.forEach(s=>this.removeReference(s,n))}Hr(t){const n=new mt(new ee([])),s=new ke(n,t),o=new ke(n,t+1),c=[];return this.Kr.forEachInRange([s,o],f=>{this.zr(f),c.push(f.key)}),c}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new mt(new ee([])),s=new ke(n,t),o=new ke(n,t+1);let c=Pt();return this.Kr.forEachInRange([s,o],f=>{c=c.add(f.key)}),c}containsKey(t){const n=new ke(t,0),s=this.$r.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ke{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return mt.comparator(t.key,n.key)||Nt(t.Zr,n.Zr)}static Wr(t,n){return Nt(t.Zr,n.Zr)||mt.comparator(t.key,n.key)}}/**
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
 */class k2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new De(ke.Ur)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const c=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new WC(c,n,s,o);this.mutationQueue.push(f);for(const g of o)this.Xr=this.Xr.add(new ke(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(t,n){return Y.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ti(s),c=o<0?0:o;return Y.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?Mm:this.nr-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new ke(n,0),o=new ke(n,Number.POSITIVE_INFINITY),c=[];return this.Xr.forEachInRange([s,o],f=>{const g=this.ei(f.Zr);c.push(g)}),Y.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new De(Nt);return n.forEach(o=>{const c=new ke(o,0),f=new ke(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([c,f],g=>{s=s.add(g.Zr)})}),Y.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let c=s;mt.isDocumentKey(c)||(c=c.child(""));const f=new ke(new mt(c),0);let g=new De(Nt);return this.Xr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(g=g.add(p.Zr)),!0)},f),Y.resolve(this.ni(g))}ni(t){const n=[];return t.forEach(s=>{const o=this.ei(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Ft(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return Y.forEach(n.mutations,o=>{const c=new ke(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Xr=s})}sr(t){}containsKey(t,n){const s=new ke(n,0),o=this.Xr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class U2{constructor(t){this.ii=t,this.docs=function(){return new ae(mt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,f=this.ii(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(t,n){let s=ir();return n.forEach(o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():Ze.newInvalidDocument(o))}),Y.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let c=ir();const f=n.path,g=new mt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:y,value:{document:T}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||dC(fC(T),s)<=0||(o.has(T.key)||fh(n,T))&&(c=c.insert(T.key,T.mutableCopy()))}return Y.resolve(c)}getAllFromCollectionGroup(t,n,s,o){yt(9500)}si(t,n){return Y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new L2(this)}getSize(t){return Y.resolve(this.size)}}class L2 extends N2{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Br.addEntry(t,o)):this.Br.removeEntry(s)}),Y.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
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
 */class z2{constructor(t){this.persistence=t,this.oi=new Fs(n=>Pm(n),km),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this._i=0,this.ai=new jm,this.targetCount=0,this.ui=Za.cr()}forEachTarget(t,n){return this.oi.forEach((s,o)=>n(o)),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this._i&&(this._i=n),Y.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new Za(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,Y.resolve()}updateTargetData(t,n){return this.Tr(n),Y.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,n,s){let o=0;const c=[];return this.oi.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.oi.delete(f),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)}),Y.waitFor(c).next(()=>o)}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,n){const s=this.oi.get(n)||null;return Y.resolve(s)}addMatchingKeys(t,n,s){return this.ai.Gr(n,s),Y.resolve()}removeMatchingKeys(t,n,s){this.ai.jr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach(f=>{c.push(o.markPotentiallyOrphaned(t,f))}),Y.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),Y.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ai.Yr(n);return Y.resolve(s)}containsKey(t,n){return Y.resolve(this.ai.containsKey(n))}}/**
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
 */class NT{constructor(t,n){this.ci={},this.overlays={},this.li=new lh(0),this.hi=!1,this.hi=!0,this.Pi=new P2,this.referenceDelegate=t(this),this.Ti=new z2(this),this.indexManager=new b2,this.remoteDocumentCache=function(o){return new U2(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new T2(n),this.Ei=new V2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new x2,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ci[t.toKey()];return s||(s=new k2(n,this.referenceDelegate),this.ci[t.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,s){at("MemoryPersistence","Starting transaction:",t);const o=new B2(this.li.next());return this.referenceDelegate.di(),s(o).next(c=>this.referenceDelegate.Ai(o).next(()=>c)).toPromise().then(c=>(o.raiseOnCommittedEvent(),c))}Ri(t,n){return Y.or(Object.values(this.ci).map(s=>()=>s.containsKey(t,n)))}}class B2 extends gC{constructor(t){super(),this.currentSequenceNumber=t}}class Fm{constructor(t){this.persistence=t,this.Vi=new jm,this.mi=null}static fi(t){return new Fm(t)}get gi(){if(this.mi)return this.mi;throw yt(60996)}addReference(t,n,s){return this.Vi.addReference(s,n),this.gi.delete(s.toString()),Y.resolve()}removeReference(t,n,s){return this.Vi.removeReference(s,n),this.gi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),Y.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(c=>this.gi.add(c.toString()))}).next(()=>s.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.gi,s=>{const o=mt.fromPath(s);return this.pi(t,o).next(c=>{c||n.removeEntry(o,At.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(s=>{s?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return Y.or([()=>Y.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class Zc{constructor(t,n){this.persistence=t,this.yi=new Fs(s=>_C(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=D2(this,n)}static fi(t,n){return new Zc(t,n)}di(){}Ai(t){return Y.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}br(t){let n=0;return this.yr(t,s=>{n++}).next(()=>n)}yr(t,n){return Y.forEach(this.yi,(s,o)=>this.Dr(t,s,o).next(c=>c?Y.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.si(t,f=>this.Dr(t,f,n).next(g=>{g||(s++,c.removeEntry(f,At.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),Y.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),Y.resolve()}removeReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),Y.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Cc(t.data.value)),n}Dr(t,n,s){return Y.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.yi.get(n);return Y.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Gm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.ds=s,this.As=o}static Rs(t,n){let s=Pt(),o=Pt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Gm(t,n.fromCache,s,o)}}/**
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
 */class q2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class H2{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return mS()?8:pC(We())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,s,o){const c={result:null};return this.ws(t,n).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.bs(t,n,o,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new q2;return this.Ss(t,n,f).next(g=>{if(c.result=g,this.fs)return this.Ds(t,n,f,g.size)})}).next(()=>c.result)}Ds(t,n,s,o){return s.documentReadCount<this.gs?(La()<=xt.DEBUG&&at("QueryEngine","SDK will not create cache indexes for query:",za(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),Y.resolve()):(La()<=xt.DEBUG&&at("QueryEngine","Query:",za(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(La()<=xt.DEBUG&&at("QueryEngine","The SDK decides to create cache indexes for query:",za(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pi(n))):Y.resolve())}ws(t,n){if(xv(n))return Y.resolve(null);let s=pi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=nm(n,null,"F"),s=pi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Pt(...c);return this.ys.getDocuments(t,f).next(g=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.vs(n,g);return this.Cs(n,y,f,p.readTime)?this.ws(t,nm(n,null,"F")):this.Fs(t,y,n,p)}))})))}bs(t,n,s,o){return xv(n)||o.isEqual(At.min())?Y.resolve(null):this.ys.getDocuments(t,s).next(c=>{const f=this.vs(n,c);return this.Cs(n,f,s,o)?Y.resolve(null):(La()<=xt.DEBUG&&at("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),za(n)),this.Fs(t,f,n,hC(o,Ml)).next(g=>g))})}vs(t,n){let s=new De(lT(t));return n.forEach((o,c)=>{fh(t,c)&&(s=s.add(c))}),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(t,n,s){return La()<=xt.DEBUG&&at("QueryEngine","Using full collection scan to execute query:",za(n)),this.ys.getDocumentsMatchingQuery(t,n,Fr.min(),s)}Fs(t,n,s,o){return this.ys.getDocumentsMatchingQuery(t,s,o).next(c=>(n.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */const Qm="LocalStore",j2=3e8;class F2{constructor(t,n,s,o){this.persistence=t,this.Ms=n,this.serializer=o,this.xs=new ae(Nt),this.Os=new Fs(c=>Pm(c),km),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(s)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new M2(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function G2(r,t,n,s){return new F2(r,t,n,s)}async function OT(r,t){const n=bt(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(c=>(o=c,n.Ls(t),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],g=[];let p=Pt();for(const y of o){f.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}for(const y of c){g.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}return n.localDocuments.getDocuments(s,p).next(y=>({ks:y,removedBatchIds:f,addedBatchIds:g}))})})}function Q2(r,t){const n=bt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),c=n.Bs.newChangeBuffer({trackRemovals:!0});return function(g,p,y,T){const R=y.batch,D=R.keys();let H=Y.resolve();return D.forEach(W=>{H=H.next(()=>T.getEntry(p,W)).next(rt=>{const J=y.docVersions.get(W);Ft(J!==null,48541),rt.version.compareTo(J)<0&&(R.applyToRemoteDocument(rt,y),rt.isValidDocument()&&(rt.setReadTime(y.commitVersion),T.addEntry(rt)))})}),H.next(()=>g.mutationQueue.removeMutationBatch(p,R))}(n,s,t,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let p=Pt();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(p=p.add(g.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function MT(r){const t=bt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function K2(r,t){const n=bt(r),s=t.snapshotVersion;let o=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=n.Bs.newChangeBuffer({trackRemovals:!0});o=n.xs;const g=[];t.targetChanges.forEach((T,R)=>{const D=o.get(R);if(!D)return;g.push(n.Ti.removeMatchingKeys(c,T.removedDocuments,R).next(()=>n.Ti.addMatchingKeys(c,T.addedDocuments,R)));let H=D.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(R)!==null?H=H.withResumeToken(Fe.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):T.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(T.resumeToken,s)),o=o.insert(R,H),function(rt,J,St){return rt.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-rt.snapshotVersion.toMicroseconds()>=j2?!0:St.addedDocuments.size+St.modifiedDocuments.size+St.removedDocuments.size>0}(D,H,T)&&g.push(n.Ti.updateTargetData(c,H))});let p=ir(),y=Pt();if(t.documentUpdates.forEach(T=>{t.resolvedLimboDocuments.has(T)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(c,T))}),g.push(Y2(c,f,t.documentUpdates).next(T=>{p=T.qs,y=T.Qs})),!s.isEqual(At.min())){const T=n.Ti.getLastRemoteSnapshotVersion(c).next(R=>n.Ti.setTargetsMetadata(c,c.currentSequenceNumber,s));g.push(T)}return Y.waitFor(g).next(()=>f.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,p,y)).next(()=>p)}).then(c=>(n.xs=o,c))}function Y2(r,t,n){let s=Pt(),o=Pt();return n.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=ir();return n.forEach((g,p)=>{const y=c.get(g);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(g)),p.isNoDocument()&&p.version.isEqual(At.min())?(t.removeEntry(g,p.readTime),f=f.insert(g,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(g,p)):at(Qm,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",p.version)}),{qs:f,Qs:o}})}function X2(r,t){const n=bt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Mm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function $2(r,t){const n=bt(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Ti.getTargetData(s,t).next(c=>c?(o=c,Y.resolve(o)):n.Ti.allocateTargetId(s).next(f=>(o=new Lr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.xs=n.xs.insert(s.targetId,s),n.Os.set(t,s.targetId)),s})}async function om(r,t,n){const s=bt(r),o=s.xs.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!so(f))throw f;at(Qm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.xs=s.xs.remove(t),s.Os.delete(o.target)}function Kv(r,t,n){const s=bt(r);let o=At.min(),c=Pt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,T){const R=bt(p),D=R.Os.get(T);return D!==void 0?Y.resolve(R.xs.get(D)):R.Ti.getTargetData(y,T)}(s,f,pi(t)).next(g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(f,g.targetId).next(p=>{c=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(f,t,n?o:At.min(),n?c:Pt())).next(g=>(Z2(s,UC(t),g),{documents:g,$s:c})))}function Z2(r,t,n){let s=r.Ns.get(t)||At.min();n.forEach((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Ns.set(t,s)}class Yv{constructor(){this.activeTargetIds=jC()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class W2{constructor(){this.xo=new Yv,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,s){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Yv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class J2{No(t){}shutdown(){}}/**
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
 */const Xv="ConnectivityMonitor";class $v{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){at(Xv,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){at(Xv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tc=null;function lm(){return Tc===null?Tc=function(){return 268435456+Math.round(2147483648*Math.random())}():Tc++,"0x"+Tc.toString(16)}/**
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
 */const kd="RestConnection",tD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eD{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Fc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(t,n,s,o,c){const f=lm(),g=this.jo(t,n.toUriEncodedString());at(kd,`Sending RPC '${t}' ${f}:`,g,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,o,c);const{host:y}=new URL(g),T=to(y);return this.Jo(t,g,p,s,T).then(R=>(at(kd,`Received RPC '${t}' ${f}: `,R),R),R=>{throw Ka(kd,`RPC '${t}' ${f} failed with error: `,R,"url: ",g,"request:",s),R})}Yo(t,n,s,o,c,f){return this.zo(t,n,s,o,c)}Ho(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,c)=>t[c]=o),s&&s.headers.forEach((o,c)=>t[c]=o)}jo(t,n){const s=tD[t];return`${this.Ko}/v1/${n}:${s}`}terminate(){}}/**
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
 */class nD{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const Ye="WebChannelConnection";class iD extends eD{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,c){const f=lm();return new Promise((g,p)=>{const y=new P0;y.setWithCredentials(!0),y.listenOnce(k0.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Ic.NO_ERROR:const R=y.getResponseJson();at(Ye,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(R)),g(R);break;case Ic.TIMEOUT:at(Ye,`RPC '${t}' ${f} timed out`),p(new ot(X.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const D=y.getStatus();if(at(Ye,`RPC '${t}' ${f} failed with status:`,D,"response text:",y.getResponseText()),D>0){let H=y.getResponseJson();Array.isArray(H)&&(H=H[0]);const W=H?.error;if(W&&W.status&&W.message){const rt=function(St){const dt=St.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(dt)>=0?dt:X.UNKNOWN}(W.status);p(new ot(rt,W.message))}else p(new ot(X.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ot(X.UNAVAILABLE,"Connection failed."));break;default:yt(9055,{h_:t,streamId:f,P_:y.getLastErrorCode(),T_:y.getLastError()})}}finally{at(Ye,`RPC '${t}' ${f} completed.`)}});const T=JSON.stringify(o);at(Ye,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",T,s,15)})}I_(t,n,s){const o=lm(),c=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=z0(),g=L0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const T=c.join("");at(Ye,`Creating RPC '${t}' stream ${o}: ${T}`,p);const R=f.createWebChannel(T,p);this.E_(R);let D=!1,H=!1;const W=new nD({Zo:J=>{H?at(Ye,`Not sending because RPC '${t}' stream ${o} is closed:`,J):(D||(at(Ye,`Opening RPC '${t}' stream ${o} transport.`),R.open(),D=!0),at(Ye,`RPC '${t}' stream ${o} sending:`,J),R.send(J))},Xo:()=>R.close()}),rt=(J,St,dt)=>{J.listen(St,ht=>{try{dt(ht)}catch(It){setTimeout(()=>{throw It},0)}})};return rt(R,_l.EventType.OPEN,()=>{H||(at(Ye,`RPC '${t}' stream ${o} transport opened.`),W.__())}),rt(R,_l.EventType.CLOSE,()=>{H||(H=!0,at(Ye,`RPC '${t}' stream ${o} transport closed`),W.u_(),this.d_(R))}),rt(R,_l.EventType.ERROR,J=>{H||(H=!0,Ka(Ye,`RPC '${t}' stream ${o} transport errored. Name:`,J.name,"Message:",J.message),W.u_(new ot(X.UNAVAILABLE,"The operation could not be completed")))}),rt(R,_l.EventType.MESSAGE,J=>{var St;if(!H){const dt=J.data[0];Ft(!!dt,16349);const ht=dt,It=ht?.error||((St=ht[0])===null||St===void 0?void 0:St.error);if(It){at(Ye,`RPC '${t}' stream ${o} received error:`,It);const _t=It.status;let Ct=function(w){const O=Ee[w];if(O!==void 0)return vT(O)}(_t),M=It.message;Ct===void 0&&(Ct=X.INTERNAL,M="Unknown error status: "+_t+" with message "+It.message),H=!0,W.u_(new ot(Ct,M)),R.close()}else at(Ye,`RPC '${t}' stream ${o} received:`,dt),W.c_(dt)}}),rt(g,U0.STAT_EVENT,J=>{J.stat===Xd.PROXY?at(Ye,`RPC '${t}' stream ${o} detected buffering proxy`):J.stat===Xd.NOPROXY&&at(Ye,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{W.a_()},0),W}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(n=>n===t)}}function Ud(){return typeof document<"u"?document:null}/**
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
 */function ph(r){return new o2(r,!0)}/**
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
 */class VT{constructor(t,n,s=1e3,o=1.5,c=6e4){this.xi=t,this.timerId=n,this.A_=s,this.R_=o,this.V_=c,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const n=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,n-s);o>0&&at("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Zv="PersistentStream";class xT{constructor(t,n,s,o,c,f,g,p){this.xi=t,this.S_=s,this.D_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new VT(t,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(nr(n.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===n&&this.z_(s,o)},s=>{t(()=>{const o=new ot(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(t,n){const s=this.G_(this.v_);this.stream=this.H_(t,n),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return at(Zv,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return n=>{this.xi.enqueueAndForget(()=>this.v_===t?n():(at(Zv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rD extends xT{constructor(t,n,s,o,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}H_(t,n){return this.connection.I_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const n=c2(this.serializer,t),s=function(c){if(!("targetChange"in c))return At.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?yi(f.readTime):At.min()}(t);return this.listener.Y_(n,s)}Z_(t){const n={};n.database=am(this.serializer),n.addTarget=function(c,f){let g;const p=f.target;if(g=tm(p)?{documents:d2(c,p)}:{query:m2(c,p).gt},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=AT(c,f.resumeToken);const y=im(c,f.expectedCount);y!==null&&(g.expectedCount=y)}else if(f.snapshotVersion.compareTo(At.min())>0){g.readTime=$c(c,f.snapshotVersion.toTimestamp());const y=im(c,f.expectedCount);y!==null&&(g.expectedCount=y)}return g}(this.serializer,t);const s=p2(this.serializer,t);s&&(n.labels=s),this.Q_(n)}X_(t){const n={};n.database=am(this.serializer),n.removeTarget=t,this.Q_(n)}}class sD extends xT{constructor(t,n,s,o,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,n){return this.connection.I_("Write",t,n)}J_(t){return Ft(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ft(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){Ft(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const n=f2(t.writeResults,t.commitTime),s=yi(t.commitTime);return this.listener.ra(s,n)}ia(){const t={};t.database=am(this.serializer),this.Q_(t)}ta(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>h2(this.serializer,s))};this.Q_(n)}}/**
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
 */class aD{}class oD extends aD{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new ot(X.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.zo(t,rm(n,s),o,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ot(X.UNKNOWN,c.toString())})}Yo(t,n,s,o,c){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Yo(t,rm(n,s),o,f,g,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ot(X.UNKNOWN,f.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class lD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(nr(n),this.ua=!1):at("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Bs="RemoteStore";class uD{constructor(t,n,s,o,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=c,this.Ra.No(f=>{s.enqueueAndForget(async()=>{Qs(this)&&(at(Bs,"Restarting streams for network reachability change."),await async function(p){const y=bt(p);y.da.add(4),await Gl(y),y.Va.set("Unknown"),y.da.delete(4),await yh(y)}(this))})}),this.Va=new lD(s,o)}}async function yh(r){if(Qs(r))for(const t of r.Aa)await t(!0)}async function Gl(r){for(const t of r.Aa)await t(!1)}function PT(r,t){const n=bt(r);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),$m(n)?Xm(n):ao(n).N_()&&Ym(n,t))}function Km(r,t){const n=bt(r),s=ao(n);n.Ea.delete(t),s.N_()&&kT(n,t),n.Ea.size===0&&(s.N_()?s.k_():Qs(n)&&n.Va.set("Unknown"))}function Ym(r,t){if(r.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ao(r).Z_(t)}function kT(r,t){r.ma.Ke(t),ao(r).X_(t)}function Xm(r){r.ma=new i2({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Ea.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),ao(r).start(),r.Va.ca()}function $m(r){return Qs(r)&&!ao(r).O_()&&r.Ea.size>0}function Qs(r){return bt(r).da.size===0}function UT(r){r.ma=void 0}async function cD(r){r.Va.set("Online")}async function hD(r){r.Ea.forEach((t,n)=>{Ym(r,t)})}async function fD(r,t){UT(r),$m(r)?(r.Va.Pa(t),Xm(r)):r.Va.set("Unknown")}async function dD(r,t,n){if(r.Va.set("Online"),t instanceof TT&&t.state===2&&t.cause)try{await async function(o,c){const f=c.cause;for(const g of c.targetIds)o.Ea.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o.Ea.delete(g),o.ma.removeTarget(g))}(r,t)}catch(s){at(Bs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Wc(r,s)}else if(t instanceof Oc?r.ma.Xe(t):t instanceof ET?r.ma.ot(t):r.ma.nt(t),!n.isEqual(At.min()))try{const s=await MT(r.localStore);n.compareTo(s)>=0&&await function(c,f){const g=c.ma.It(f);return g.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const T=c.Ea.get(y);T&&c.Ea.set(y,T.withResumeToken(p.resumeToken,f))}}),g.targetMismatches.forEach((p,y)=>{const T=c.Ea.get(p);if(!T)return;c.Ea.set(p,T.withResumeToken(Fe.EMPTY_BYTE_STRING,T.snapshotVersion)),kT(c,p);const R=new Lr(T.target,p,y,T.sequenceNumber);Ym(c,R)}),c.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(s){at(Bs,"Failed to raise snapshot:",s),await Wc(r,s)}}async function Wc(r,t,n){if(!so(t))throw t;r.da.add(1),await Gl(r),r.Va.set("Offline"),n||(n=()=>MT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{at(Bs,"Retrying IndexedDB access"),await n(),r.da.delete(1),await yh(r)})}function LT(r,t){return t().catch(n=>Wc(r,n,t))}async function _h(r){const t=bt(r),n=Yr(t);let s=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:Mm;for(;mD(t);)try{const o=await X2(t.localStore,s);if(o===null){t.Ia.length===0&&n.k_();break}s=o.batchId,gD(t,o)}catch(o){await Wc(t,o)}zT(t)&&BT(t)}function mD(r){return Qs(r)&&r.Ia.length<10}function gD(r,t){r.Ia.push(t);const n=Yr(r);n.N_()&&n.ea&&n.ta(t.mutations)}function zT(r){return Qs(r)&&!Yr(r).O_()&&r.Ia.length>0}function BT(r){Yr(r).start()}async function pD(r){Yr(r).ia()}async function yD(r){const t=Yr(r);for(const n of r.Ia)t.ta(n.mutations)}async function _D(r,t,n){const s=r.Ia.shift(),o=Bm.from(s,t,n);await LT(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await _h(r)}async function vD(r,t){t&&Yr(r).ea&&await async function(s,o){if(function(f){return e2(f)&&f!==X.ABORTED}(o.code)){const c=s.Ia.shift();Yr(s).L_(),await LT(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o)),await _h(s)}}(r,t),zT(r)&&BT(r)}async function Wv(r,t){const n=bt(r);n.asyncQueue.verifyOperationInProgress(),at(Bs,"RemoteStore received new credentials");const s=Qs(n);n.da.add(3),await Gl(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.da.delete(3),await yh(n)}async function ED(r,t){const n=bt(r);t?(n.da.delete(2),await yh(n)):t||(n.da.add(2),await Gl(n),n.Va.set("Unknown"))}function ao(r){return r.fa||(r.fa=function(n,s,o){const c=bt(n);return c.oa(),new rD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{e_:cD.bind(null,r),n_:hD.bind(null,r),i_:fD.bind(null,r),Y_:dD.bind(null,r)}),r.Aa.push(async t=>{t?(r.fa.L_(),$m(r)?Xm(r):r.Va.set("Unknown")):(await r.fa.stop(),UT(r))})),r.fa}function Yr(r){return r.ga||(r.ga=function(n,s,o){const c=bt(n);return c.oa(),new sD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:pD.bind(null,r),i_:vD.bind(null,r),na:yD.bind(null,r),ra:_D.bind(null,r)}),r.Aa.push(async t=>{t?(r.ga.L_(),await _h(r)):(await r.ga.stop(),r.Ia.length>0&&(at(Bs,`Stopping write stream with ${r.Ia.length} pending writes`),r.Ia=[]))})),r.ga}/**
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
 */class Zm{constructor(t,n,s,o,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,c){const f=Date.now()+s,g=new Zm(t,n,f,o,c);return g.start(s),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ot(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wm(r,t){if(nr("AsyncQueue",`${t}: ${r}`),so(r))return new ot(X.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ga{static emptySet(t){return new Ga(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||mt.comparator(n.key,s.key):(n,s)=>mt.comparator(n.key,s.key),this.keyedMap=vl(),this.sortedSet=new ae(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ga)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ga;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Jv{constructor(){this.pa=new ae(mt.comparator)}track(t){const n=t.doc.key,s=this.pa.get(n);s?t.type!==0&&s.type===3?this.pa=this.pa.insert(n,t):t.type===3&&s.type!==1?this.pa=this.pa.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.pa=this.pa.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.pa=this.pa.remove(n):t.type===1&&s.type===2?this.pa=this.pa.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):yt(63341,{Vt:t,ya:s}):this.pa=this.pa.insert(n,t)}wa(){const t=[];return this.pa.inorderTraversal((n,s)=>{t.push(s)}),t}}class Wa{constructor(t,n,s,o,c,f,g,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,c){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new Wa(t,n,Ga.emptySet(n),f,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class TD{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class AD{constructor(){this.queries=tE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=bt(n),c=o.queries;o.queries=tE(),c.forEach((f,g)=>{for(const p of g.Sa)p.onError(s)})})(this,new ot(X.ABORTED,"Firestore shutting down"))}}function tE(){return new Fs(r=>oT(r),hh)}async function qT(r,t){const n=bt(r);let s=3;const o=t.query;let c=n.queries.get(o);c?!c.Da()&&t.va()&&(s=2):(c=new TD,s=t.va()?0:1);try{switch(s){case 0:c.ba=await n.onListen(o,!0);break;case 1:c.ba=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=Wm(f,`Initialization of query '${za(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,c),c.Sa.push(t),t.Fa(n.onlineState),c.ba&&t.Ma(c.ba)&&Jm(n)}async function HT(r,t){const n=bt(r),s=t.query;let o=3;const c=n.queries.get(s);if(c){const f=c.Sa.indexOf(t);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?o=t.va()?0:1:!c.Da()&&t.va()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function bD(r,t){const n=bt(r);let s=!1;for(const o of t){const c=o.query,f=n.queries.get(c);if(f){for(const g of f.Sa)g.Ma(o)&&(s=!0);f.ba=o}}s&&Jm(n)}function SD(r,t,n){const s=bt(r),o=s.queries.get(t);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(t)}function Jm(r){r.Ca.forEach(t=>{t.next()})}var um,eE;(eE=um||(um={})).xa="default",eE.Cache="cache";class jT{constructor(t,n,s){this.query=t,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Wa(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Na?this.La(t)&&(this.Oa.next(t),n=!0):this.ka(t,this.onlineState)&&(this.qa(t),n=!0),this.Ba=t,n}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),n=!0),n}ka(t,n){if(!t.fromCache||!this.va())return!0;const s=n!=="Offline";return(!this.options.Qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}La(t){if(t.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(t){t=Wa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==um.Cache}}/**
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
 */class FT{constructor(t){this.key=t}}class GT{constructor(t){this.key=t}}class wD{constructor(t,n){this.query=t,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pt(),this.mutatedKeys=Pt(),this.Za=lT(t),this.Xa=new Ga(this.Za)}get eu(){return this.Ha}tu(t,n){const s=n?n.nu:new Jv,o=n?n.Xa:this.Xa;let c=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((T,R)=>{const D=o.get(T),H=fh(this.query,R)?R:null,W=!!D&&this.mutatedKeys.has(D.key),rt=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let J=!1;D&&H?D.data.isEqual(H.data)?W!==rt&&(s.track({type:3,doc:H}),J=!0):this.ru(D,H)||(s.track({type:2,doc:H}),J=!0,(p&&this.Za(H,p)>0||y&&this.Za(H,y)<0)&&(g=!0)):!D&&H?(s.track({type:0,doc:H}),J=!0):D&&!H&&(s.track({type:1,doc:D}),J=!0,(p||y)&&(g=!0)),J&&(H?(f=f.add(H),c=rt?c.add(T):c.delete(T)):(f=f.delete(T),c=c.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),c=c.delete(T.key),s.track({type:1,doc:T})}return{Xa:f,nu:s,Cs:g,mutatedKeys:c}}ru(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const c=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const f=t.nu.wa();f.sort((T,R)=>function(H,W){const rt=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yt(20277,{Vt:J})}};return rt(H)-rt(W)}(T.type,R.type)||this.Za(T.doc,R.doc)),this.iu(s),o=o!=null&&o;const g=n&&!o?this.su():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Ja;return this.Ja=p,f.length!==0||y?{snapshot:new Wa(this.query,t.Xa,c,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:g}:{ou:g}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Jv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=Pt(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const n=[];return t.forEach(s=>{this.Ya.has(s)||n.push(new GT(s))}),this.Ya.forEach(s=>{t.has(s)||n.push(new FT(s))}),n}au(t){this.Ha=t.$s,this.Ya=Pt();const n=this.tu(t.documents);return this.applyChanges(n,!0)}uu(){return Wa.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const tg="SyncEngine";class RD{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class ID{constructor(t){this.key=t,this.cu=!1}}class CD{constructor(t,n,s,o,c,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.lu={},this.hu=new Fs(g=>oT(g),hh),this.Pu=new Map,this.Tu=new Set,this.Iu=new ae(mt.comparator),this.Eu=new Map,this.du=new jm,this.Au={},this.Ru=new Map,this.Vu=Za.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function DD(r,t,n=!0){const s=ZT(r);let o;const c=s.hu.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.uu()):o=await QT(s,t,n,!0),o}async function ND(r,t){const n=ZT(r);await QT(n,t,!0,!1)}async function QT(r,t,n,s){const o=await $2(r.localStore,pi(t)),c=o.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let g;return s&&(g=await OD(r,t,c,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&PT(r.remoteStore,o),g}async function OD(r,t,n,s,o){r.fu=(R,D,H)=>async function(rt,J,St,dt){let ht=J.view.tu(St);ht.Cs&&(ht=await Kv(rt.localStore,J.query,!1).then(({documents:M})=>J.view.tu(M,ht)));const It=dt&&dt.targetChanges.get(J.targetId),_t=dt&&dt.targetMismatches.get(J.targetId)!=null,Ct=J.view.applyChanges(ht,rt.isPrimaryClient,It,_t);return iE(rt,J.targetId,Ct.ou),Ct.snapshot}(r,R,D,H);const c=await Kv(r.localStore,t,!0),f=new wD(t,c.$s),g=f.tu(c.documents),p=Fl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(g,r.isPrimaryClient,p);iE(r,n,y.ou);const T=new RD(t,n,f);return r.hu.set(t,T),r.Pu.has(n)?r.Pu.get(n).push(t):r.Pu.set(n,[t]),y.snapshot}async function MD(r,t,n){const s=bt(r),o=s.hu.get(t),c=s.Pu.get(o.targetId);if(c.length>1)return s.Pu.set(o.targetId,c.filter(f=>!hh(f,t))),void s.hu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await om(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Km(s.remoteStore,o.targetId),cm(s,o.targetId)}).catch(ro)):(cm(s,o.targetId),await om(s.localStore,o.targetId,!0))}async function VD(r,t){const n=bt(r),s=n.hu.get(t),o=n.Pu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Km(n.remoteStore,s.targetId))}async function xD(r,t,n){const s=qD(r);try{const o=await function(f,g){const p=bt(f),y=Ce.now(),T=g.reduce((H,W)=>H.add(W.key),Pt());let R,D;return p.persistence.runTransaction("Locally write mutations","readwrite",H=>{let W=ir(),rt=Pt();return p.Bs.getEntries(H,T).next(J=>{W=J,W.forEach((St,dt)=>{dt.isValidDocument()||(rt=rt.add(St))})}).next(()=>p.localDocuments.getOverlayedDocuments(H,W)).next(J=>{R=J;const St=[];for(const dt of g){const ht=$C(dt,R.get(dt.key).overlayedDocument);ht!=null&&St.push(new Gs(dt.key,ht,J0(ht.value.mapValue),Kn.exists(!0)))}return p.mutationQueue.addMutationBatch(H,y,St,g)}).next(J=>{D=J;const St=J.applyToLocalDocumentSet(R,rt);return p.documentOverlayCache.saveOverlays(H,J.batchId,St)})}).then(()=>({batchId:D.batchId,changes:cT(R)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,g,p){let y=f.Au[f.currentUser.toKey()];y||(y=new ae(Nt)),y=y.insert(g,p),f.Au[f.currentUser.toKey()]=y}(s,o.batchId,n),await Ql(s,o.changes),await _h(s.remoteStore)}catch(o){const c=Wm(o,"Failed to persist write");n.reject(c)}}async function KT(r,t){const n=bt(r);try{const s=await K2(n.localStore,t);t.targetChanges.forEach((o,c)=>{const f=n.Eu.get(c);f&&(Ft(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.cu=!0:o.modifiedDocuments.size>0?Ft(f.cu,14607):o.removedDocuments.size>0&&(Ft(f.cu,42227),f.cu=!1))}),await Ql(n,s,t)}catch(s){await ro(s)}}function nE(r,t,n){const s=bt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.hu.forEach((c,f)=>{const g=f.view.Fa(t);g.snapshot&&o.push(g.snapshot)}),function(f,g){const p=bt(f);p.onlineState=g;let y=!1;p.queries.forEach((T,R)=>{for(const D of R.Sa)D.Fa(g)&&(y=!0)}),y&&Jm(p)}(s.eventManager,t),o.length&&s.lu.Y_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function PD(r,t,n){const s=bt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Eu.get(t),c=o&&o.key;if(c){let f=new ae(mt.comparator);f=f.insert(c,Ze.newNoDocument(c,At.min()));const g=Pt().add(c),p=new gh(At.min(),new Map,new ae(Nt),f,g);await KT(s,p),s.Iu=s.Iu.remove(c),s.Eu.delete(t),eg(s)}else await om(s.localStore,t,!1).then(()=>cm(s,t,n)).catch(ro)}async function kD(r,t){const n=bt(r),s=t.batch.batchId;try{const o=await Q2(n.localStore,t);XT(n,s,null),YT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ql(n,o)}catch(o){await ro(o)}}async function UD(r,t,n){const s=bt(r);try{const o=await function(f,g){const p=bt(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let T;return p.mutationQueue.lookupMutationBatch(y,g).next(R=>(Ft(R!==null,37113),T=R.keys(),p.mutationQueue.removeMutationBatch(y,R))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,T,g)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T)).next(()=>p.localDocuments.getDocuments(y,T))})}(s.localStore,t);XT(s,t,n),YT(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ql(s,o)}catch(o){await ro(o)}}function YT(r,t){(r.Ru.get(t)||[]).forEach(n=>{n.resolve()}),r.Ru.delete(t)}function XT(r,t,n){const s=bt(r);let o=s.Au[s.currentUser.toKey()];if(o){const c=o.get(t);c&&(n?c.reject(n):c.resolve(),o=o.remove(t)),s.Au[s.currentUser.toKey()]=o}}function cm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Pu.get(t))r.hu.delete(s),n&&r.lu.gu(s,n);r.Pu.delete(t),r.isPrimaryClient&&r.du.Hr(t).forEach(s=>{r.du.containsKey(s)||$T(r,s)})}function $T(r,t){r.Tu.delete(t.path.canonicalString());const n=r.Iu.get(t);n!==null&&(Km(r.remoteStore,n),r.Iu=r.Iu.remove(t),r.Eu.delete(n),eg(r))}function iE(r,t,n){for(const s of n)s instanceof FT?(r.du.addReference(s.key,t),LD(r,s)):s instanceof GT?(at(tg,"Document no longer in limbo: "+s.key),r.du.removeReference(s.key,t),r.du.containsKey(s.key)||$T(r,s.key)):yt(19791,{pu:s})}function LD(r,t){const n=t.key,s=n.path.canonicalString();r.Iu.get(n)||r.Tu.has(s)||(at(tg,"New document in limbo: "+n),r.Tu.add(s),eg(r))}function eg(r){for(;r.Tu.size>0&&r.Iu.size<r.maxConcurrentLimboResolutions;){const t=r.Tu.values().next().value;r.Tu.delete(t);const n=new mt(ee.fromString(t)),s=r.Vu.next();r.Eu.set(s,new ID(n)),r.Iu=r.Iu.insert(n,s),PT(r.remoteStore,new Lr(pi(Um(n.path)),s,"TargetPurposeLimboResolution",lh.le))}}async function Ql(r,t,n){const s=bt(r),o=[],c=[],f=[];s.hu.isEmpty()||(s.hu.forEach((g,p)=>{f.push(s.fu(p,t,n).then(y=>{var T;if((y||n)&&s.isPrimaryClient){const R=y?!y.fromCache:(T=n?.targetChanges.get(p.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(p.targetId,R?"current":"not-current")}if(y){o.push(y);const R=Gm.Rs(p.targetId,y);c.push(R)}}))}),await Promise.all(f),s.lu.Y_(o),await async function(p,y){const T=bt(p);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>Y.forEach(y,D=>Y.forEach(D.ds,H=>T.persistence.referenceDelegate.addReference(R,D.targetId,H)).next(()=>Y.forEach(D.As,H=>T.persistence.referenceDelegate.removeReference(R,D.targetId,H)))))}catch(R){if(!so(R))throw R;at(Qm,"Failed to update sequence numbers: "+R)}for(const R of y){const D=R.targetId;if(!R.fromCache){const H=T.xs.get(D),W=H.snapshotVersion,rt=H.withLastLimboFreeSnapshotVersion(W);T.xs=T.xs.insert(D,rt)}}}(s.localStore,c))}async function zD(r,t){const n=bt(r);if(!n.currentUser.isEqual(t)){at(tg,"User change. New user:",t.toKey());const s=await OT(n.localStore,t);n.currentUser=t,function(c,f){c.Ru.forEach(g=>{g.forEach(p=>{p.reject(new ot(X.CANCELLED,f))})}),c.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ql(n,s.ks)}}function BD(r,t){const n=bt(r),s=n.Eu.get(t);if(s&&s.cu)return Pt().add(s.key);{let o=Pt();const c=n.Pu.get(t);if(!c)return o;for(const f of c){const g=n.hu.get(f);o=o.unionWith(g.view.eu)}return o}}function ZT(r){const t=bt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=KT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=BD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=PD.bind(null,t),t.lu.Y_=bD.bind(null,t.eventManager),t.lu.gu=SD.bind(null,t.eventManager),t}function qD(r){const t=bt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=UD.bind(null,t),t}class Jc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ph(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,n){return null}Cu(t,n){return null}Du(t){return G2(this.persistence,new H2,t.initialUser,this.serializer)}Su(t){return new NT(Fm.fi,this.serializer)}bu(t){return new W2}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jc.provider={build:()=>new Jc};class HD extends Jc{constructor(t){super(),this.cacheSizeBytes=t}vu(t,n){Ft(this.persistence.referenceDelegate instanceof Zc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new I2(s,t.asyncQueue,n)}Su(t){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new NT(s=>Zc.fi(s,n),this.serializer)}}class hm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>nE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zD.bind(null,this.syncEngine),await ED(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new AD}()}createDatastore(t){const n=ph(t.databaseInfo.databaseId),s=function(c){return new iD(c)}(t.databaseInfo);return function(c,f,g,p){return new oD(c,f,g,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,c,f,g){return new uD(s,o,c,f,g)}(this.localStore,this.datastore,t.asyncQueue,n=>nE(this.syncEngine,n,0),function(){return $v.C()?new $v:new J2}())}createSyncEngine(t,n){return function(o,c,f,g,p,y,T){const R=new CD(o,c,f,g,p,y);return T&&(R.mu=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const c=bt(o);at(Bs,"RemoteStore shutting down."),c.da.add(5),await Gl(c),c.Ra.shutdown(),c.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hm.provider={build:()=>new hm};/**
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
 */class WT{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):nr("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Xr="FirestoreClient";class jD{constructor(t,n,s,o,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=$e.UNAUTHENTICATED,this.clientId=j0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{at(Xr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(at(Xr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Wm(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ld(r,t){r.asyncQueue.verifyOperationInProgress(),at(Xr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await OT(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function rE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await FD(r);at(Xr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Wv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Wv(t.remoteStore,o)),r._onlineComponents=t}async function FD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){at(Xr,"Using user provided OfflineComponentProvider");try{await Ld(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Ka("Error using user provided cache. Falling back to memory cache: "+n),await Ld(r,new Jc)}}else at(Xr,"Using default OfflineComponentProvider"),await Ld(r,new HD(void 0));return r._offlineComponents}async function JT(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(at(Xr,"Using user provided OnlineComponentProvider"),await rE(r,r._uninitializedComponentsProvider._online)):(at(Xr,"Using default OnlineComponentProvider"),await rE(r,new hm))),r._onlineComponents}function GD(r){return JT(r).then(t=>t.syncEngine)}async function tA(r){const t=await JT(r),n=t.eventManager;return n.onListen=DD.bind(null,t.syncEngine),n.onUnlisten=MD.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ND.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=VD.bind(null,t.syncEngine),n}function QD(r,t,n={}){const s=new Ji;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,g,p,y){const T=new WT({next:D=>{T.xu(),f.enqueueAndForget(()=>HT(c,R));const H=D.docs.has(g);!H&&D.fromCache?y.reject(new ot(X.UNAVAILABLE,"Failed to get document because the client is offline.")):H&&D.fromCache&&p&&p.source==="server"?y.reject(new ot(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(D)},error:D=>y.reject(D)}),R=new jT(Um(g.path),T,{includeMetadataChanges:!0,Qa:!0});return qT(c,R)}(await tA(r),r.asyncQueue,t,n,s)),s.promise}function KD(r,t,n={}){const s=new Ji;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,g,p,y){const T=new WT({next:D=>{T.xu(),f.enqueueAndForget(()=>HT(c,R)),D.fromCache&&p.source==="server"?y.reject(new ot(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(D)},error:D=>y.reject(D)}),R=new jT(g,T,{includeMetadataChanges:!0,Qa:!0});return qT(c,R)}(await tA(r),r.asyncQueue,t,n,s)),s.promise}/**
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
 */const sE=new Map;/**
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
 */function nA(r,t,n){if(!n)throw new ot(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function YD(r,t,n,s){if(t===!0&&s===!0)throw new ot(X.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function aE(r){if(!mt.isDocumentKey(r))throw new ot(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function oE(r){if(mt.isDocumentKey(r))throw new ot(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function vh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":yt(12329,{type:typeof r})}function rr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ot(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vh(r);throw new ot(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */const iA="firestore.googleapis.com",lE=!0;class uE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new ot(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iA,this.ssl=lE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:lE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=DT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<w2)throw new ot(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}YD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eA((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new ot(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new ot(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new ot(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Eh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ot(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ot(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new nC;switch(s.type){case"firstParty":return new aC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ot(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=sE.get(n);s&&(at("ComponentProvider","Removing Datastore"),sE.delete(n),s.terminate())}(this),Promise.resolve()}}function XD(r,t,n,s={}){var o;r=rr(r,Eh);const c=to(t),f=r._getSettings(),g=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${n}`;c&&(wE(`https://${p}`),RE("Firestore",!0)),f.host!==iA&&f.host!==p&&Ka("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:p,ssl:c,emulatorOptions:s});if(!jr(y,g)&&(r._setSettings(y),s.mockUserToken)){let T,R;if(typeof s.mockUserToken=="string")T=s.mockUserToken,R=$e.MOCK_USER;else{T=aS(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new ot(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new $e(D)}r._authCredentials=new iC(new q0(T,R))}}/**
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
 */class oo{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new oo(this.firestore,t,this._query)}}class cn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new cn(this.firestore,t,this._key)}}class Hr extends oo{constructor(t,n,s){super(t,n,Um(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new cn(this.firestore,null,new mt(t))}withConverter(t){return new Hr(this.firestore,t,this._path)}}function Ac(r,t,...n){if(r=Je(r),nA("collection","path",t),r instanceof Eh){const s=ee.fromString(t,...n);return oE(s),new Hr(r,null,s)}{if(!(r instanceof cn||r instanceof Hr))throw new ot(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ee.fromString(t,...n));return oE(s),new Hr(r.firestore,null,s)}}function Tl(r,t,...n){if(r=Je(r),arguments.length===1&&(t=j0.newId()),nA("doc","path",t),r instanceof Eh){const s=ee.fromString(t,...n);return aE(s),new cn(r,null,new mt(s))}{if(!(r instanceof cn||r instanceof Hr))throw new ot(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ee.fromString(t,...n));return aE(s),new cn(r.firestore,r instanceof Hr?r.converter:null,new mt(s))}}/**
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
 */const cE="AsyncQueue";class hE{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new VT(this,"async_queue_retry"),this.rc=()=>{const s=Ud();s&&at(cE,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=t;const n=Ud();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const n=Ud();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new Ji;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!so(t))throw t;at(cE,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const n=this.sc.then(()=>(this.ec=!0,t().catch(s=>{throw this.Xu=s,this.ec=!1,nr("INTERNAL UNHANDLED ERROR: ",fE(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=n,n}enqueueAfterDelay(t,n,s){this.oc(),this.nc.indexOf(t)>-1&&(n=0);const o=Zm.createAndSchedule(this,t,n,s,c=>this.uc(c));return this.Zu.push(o),o}oc(){this.Xu&&yt(47125,{cc:fE(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const n of this.Zu)if(n.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const n=this.Zu.indexOf(t);this.Zu.splice(n,1)}}function fE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class lo extends Eh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new hE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hE(t),this._firestoreClient=void 0,await t}}}function $D(r,t){const n=typeof r=="object"?r:mm(),s=typeof r=="string"?r:Fc,o=Hs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=rS("firestore");c&&XD(o,...c)}return o}function ng(r){if(r._terminated)throw new ot(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||ZD(r),r._firestoreClient}function ZD(r){var t,n,s;const o=r._freezeSettings(),c=function(g,p,y,T){return new TC(g,p,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,eA(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new jD(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(g){const p=g?._online.build();return{_offline:g?._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class Ja{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ja(Fe.fromBase64String(t))}catch(n){throw new ot(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ja(Fe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ig{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ot(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class rg{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ot(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ot(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Nt(this._lat,t._lat)||Nt(this._long,t._long)}}/**
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
 */class sg{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0}(this._values,t._values)}}/**
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
 */const WD=/^__.*__$/;class JD{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Gs(t,this.data,this.fieldMask,n,this.fieldTransforms):new jl(t,this.data,n,this.fieldTransforms)}}function sA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yt(40011,{Ic:r})}}class ag{constructor(t,n,s,o,c,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Ec(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new ag(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Vc(t),o}mc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return th(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(sA(this.Ic)&&WD.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class tN{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ph(t)}bc(t,n,s,o=!1){return new ag({Ic:t,methodName:n,wc:s,path:je.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function og(r){const t=r._freezeSettings(),n=ph(r._databaseId);return new tN(r._databaseId,!!t.ignoreUndefinedProperties,n)}function aA(r,t,n,s,o,c={}){const f=r.bc(c.merge||c.mergeFields?2:0,t,n,o);uA("Data must be an object, but it was:",f,s);const g=oA(s,f);let p,y;if(c.merge)p=new Gn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const T=[];for(const R of c.mergeFields){const D=nN(t,R,n);if(!f.contains(D))throw new ot(X.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);rN(T,D)||T.push(D)}p=new Gn(T),y=f.fieldTransforms.filter(R=>p.covers(R.field))}else p=null,y=f.fieldTransforms;return new JD(new xn(g),p,y)}function eN(r,t,n,s=!1){return lg(n,r.bc(s?4:3,t))}function lg(r,t){if(lA(r=Je(r)))return uA("Unsupported field value:",t,r),oA(r,t);if(r instanceof rA)return function(s,o){if(!sA(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(s,o){const c=[];let f=0;for(const g of s){let p=lg(g,o.fc(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,o){if((s=Je(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return FC(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Ce.fromDate(s);return{timestampValue:$c(o.serializer,c)}}if(s instanceof Ce){const c=new Ce(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:$c(o.serializer,c)}}if(s instanceof rg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ja)return{bytesValue:AT(o.serializer,s._byteString)};if(s instanceof cn){const c=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw o.gc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Hm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof sg)return function(f,g){return{mapValue:{fields:{[Z0]:{stringValue:W0},[Gc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw g.gc("VectorValues must only contain numeric values.");return Lm(g.serializer,y)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${vh(s)}`)}(r,t)}function oA(r,t){const n={};return G0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):js(r,(s,o)=>{const c=lg(o,t.Ac(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function lA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ce||r instanceof rg||r instanceof Ja||r instanceof cn||r instanceof rA||r instanceof sg)}function uA(r,t,n){if(!lA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=vh(n);throw s==="an object"?t.gc(r+" a custom object"):t.gc(r+" "+s)}}function nN(r,t,n){if((t=Je(t))instanceof ig)return t._internalPath;if(typeof t=="string")return cA(r,t);throw th("Field path arguments must be of type string or ",r,!1,void 0,n)}const iN=new RegExp("[~\\*/\\[\\]]");function cA(r,t,n){if(t.search(iN)>=0)throw th(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new ig(...t.split("."))._internalPath}catch{throw th(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function th(r,t,n,s,o){const c=s&&!s.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new ot(X.INVALID_ARGUMENT,g+r+p)}function rN(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class hA{constructor(t,n,s,o,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new sN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(fA("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sN extends hA{data(){return super.data()}}function fA(r,t){return typeof t=="string"?cA(r,t):t instanceof ig?t._internalPath:t._delegate._internalPath}/**
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
 */function aN(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ot(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ug{}class oN extends ug{}function dE(r,t,...n){let s=[];t instanceof ug&&s.push(t),s=s.concat(n),function(c){const f=c.filter(p=>p instanceof hg).length,g=c.filter(p=>p instanceof cg).length;if(f>1||f>0&&g>0)throw new ot(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class cg extends oN{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new cg(t,n,s)}_apply(t){const n=this._parse(t);return dA(t._query,n),new oo(t.firestore,t.converter,em(t._query,n))}_parse(t){const n=og(t.firestore);return function(c,f,g,p,y,T,R){let D;if(y.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new ot(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){gE(R,T);const W=[];for(const rt of R)W.push(mE(p,c,rt));D={arrayValue:{values:W}}}else D=mE(p,c,R)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||gE(R,T),D=eN(g,f,R,T==="in"||T==="not-in");return Te.create(y,T,D)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class hg extends ug{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new hg(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Xn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,c){let f=o;const g=c.getFlattenedFilters();for(const p of g)dA(f,p),f=em(f,p)}(t._query,n),new oo(t.firestore,t.converter,em(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function mE(r,t,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new ot(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aT(t)&&n.indexOf("/")!==-1)throw new ot(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(ee.fromString(n));if(!mt.isDocumentKey(s))throw new ot(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Cv(r,new mt(s))}if(n instanceof cn)return Cv(r,n._key);throw new ot(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vh(n)}.`)}function gE(r,t){if(!Array.isArray(r)||r.length===0)throw new ot(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function dA(r,t){const n=function(o,c){for(const f of o)for(const g of f.getFlattenedFilters())if(c.indexOf(g.op)>=0)return g.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new ot(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ot(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class lN{convertValue(t,n="none"){switch(Kr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return me(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Qr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw yt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return js(t,(o,c)=>{s[o]=this.convertValue(c,n)}),s}convertVectorValue(t){var n,s,o;const c=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[Gc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>me(f.doubleValue));return new sg(c)}convertGeoPoint(t){return new rg(me(t.latitude),me(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ch(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Vl(t));default:return null}}convertTimestamp(t){const n=Gr(t);return new Ce(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ee.fromString(t);Ft(CT(s),9688,{name:t});const o=new xl(s.get(1),s.get(3)),c=new mt(s.popFirst(5));return o.isEqual(n)||nr(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */class Al{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gA extends hA{constructor(t,n,s,o,c,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(fA("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Mc extends gA{data(t={}){return super.data(t)}}class uN{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Al(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Mc(this._firestore,this._userDataWriter,s.key,s,new Al(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ot(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(g=>{const p=new Mc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new Al(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(g=>c||g.type!==3).map(g=>{const p=new Mc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new Al(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return g.type!==0&&(y=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),T=f.indexOf(g.doc.key)),{type:cN(g.type),doc:p,oldIndex:y,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cN(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yt(61501,{type:r})}}/**
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
 */function hN(r){r=rr(r,cn);const t=rr(r.firestore,lo);return QD(ng(t),r._key).then(n=>dN(t,r,n))}class pA extends lN{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ja(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new cn(this.firestore,null,n)}}function pE(r){r=rr(r,oo);const t=rr(r.firestore,lo),n=ng(t),s=new pA(t);return aN(r._query),KD(n,r._query).then(o=>new uN(t,s,r,o))}function fN(r,t,n){r=rr(r,cn);const s=rr(r.firestore,lo),o=mA(r.converter,t);return fg(s,[aA(og(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Kn.none())])}function yE(r){return fg(rr(r.firestore,lo),[new zm(r._key,Kn.none())])}function _E(r,t){const n=rr(r.firestore,lo),s=Tl(r),o=mA(r.converter,t);return fg(n,[aA(og(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Kn.exists(!1))]).then(()=>s)}function fg(r,t){return function(s,o){const c=new Ji;return s.asyncQueue.enqueueAndForget(async()=>xD(await GD(s),o,c)),c.promise}(ng(r),t)}function dN(r,t,n){const s=n.docs.get(t._key),o=new pA(r);return new gA(r,o,t._key,s,new Al(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){io=o})(eo),_i(new Yn("firestore",(s,{instanceIdentifier:o,options:c})=>{const f=s.getProvider("app").getImmediate(),g=new lo(new rC(s.getProvider("auth-internal")),new oC(f,s.getProvider("app-check-internal")),function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ot(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xl(y.options.projectId,T)}(f,o),f);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),Pn(pv,yv,t),Pn(pv,yv,"esm2017")})();const mN={apiKey:"AIzaSyDxYyDUPCRPb5O6-GucCcmO4jcdf9rBEho",authDomain:"daily-money-94f02.firebaseapp.com",projectId:"daily-money-94f02",storageBucket:"daily-money-94f02.firebasestorage.app",messagingSenderId:"31843473349",appId:"1:31843473349:web:249d43c7856d1b60b39dac",measurementId:"G-6WZTW0WFRC"},dg=VE(mN);Zw(dg);const zd=tC(dg),gN=new $i,xr=$D(dg);function pN(){const[r,t]=Xe.useState(""),[n,s]=Xe.useState(""),[o,c]=Xe.useState(""),[f,g]=Xe.useState("daily"),[p,y]=Xe.useState([]),[T,R]=Xe.useState(null),[D,H]=Xe.useState(!1),[W,rt]=Xe.useState(!1),[J,St]=Xe.useState("income"),[dt,ht]=Xe.useState(""),[It,_t]=Xe.useState(""),[Ct,M]=Xe.useState(""),[b,w]=Xe.useState([]);Xe.useEffect(()=>{const G=HR(zd,st=>{R(st),st?O(st.uid):(y([]),t(""),w([]))});return()=>G()},[]);const O=async G=>{H(!0);try{const st=await hN(Tl(xr,"users",G,"data","salary"));st.exists()&&t(st.data().amount.toString());const oe=dE(Ac(xr,"users",G,"costs")),uo=(await pE(oe)).docs.map(Si=>({id:Si.id,...Si.data()}));y(uo);const $r=dE(Ac(xr,"users",G,"goals")),bi=(await pE($r)).docs.map(Si=>({id:Si.id,...Si.data()}));w(bi)}catch(st){console.error("Error loading user data:",st)}H(!1)},V=async G=>{if(T)try{await fN(Tl(xr,"users",T.uid,"data","salary"),{amount:parseFloat(G)||0,updatedAt:new Date})}catch(st){console.error("Error saving salary:",st)}},P=async G=>{if(!T)return console.error("No user logged in"),null;try{console.log("Saving cost for user:",T.uid),console.log("Cost data:",G);const st=await _E(Ac(xr,"users",T.uid,"costs"),{name:G.name,amount:G.amount,period:G.period,createdAt:new Date});return console.log("Cost saved successfully with ID:",st.id),st.id}catch(st){throw console.error("Detailed Firestore error:",{code:st.code,message:st.message,stack:st.stack}),st.code==="permission-denied"?console.error("Firestore permission denied. Check security rules."):st.code==="unavailable"&&console.error("Firestore service unavailable."),st}},I=async G=>{if(!T)return null;try{return(await _E(Ac(xr,"users",T.uid,"goals"),{name:G.name,price:G.price,dailyContribution:G.dailyContribution,createdAt:new Date})).id}catch(st){throw console.error("Error saving goal:",st),st}},Ae=async G=>{if(T)try{await yE(Tl(xr,"users",T.uid,"costs",G))}catch(st){console.error("Error deleting cost:",st)}},ne=async G=>{if(T)try{await yE(Tl(xr,"users",T.uid,"goals",G))}catch(st){console.error("Error deleting goal:",st)}},j=async()=>{try{console.log("Attempting Google sign-in...");const G=await uI(zd,gN);console.log("Sign-in successful:",G.user)}catch(G){console.error("Sign-in error details:",{code:G.code,message:G.message,email:G.email,credential:G.credential}),G.code==="auth/popup-closed-by-user"?alert("Sign-in was cancelled. Please try again."):G.code==="auth/popup-blocked"?alert("Pop-up was blocked. Please allow pop-ups for this site and try again."):alert(`Sign-in failed: ${G.message}`)}},nt=async()=>{try{await jR(zd)}catch(G){console.error("Error signing out:",G)}},ut=async()=>{if(!n.trim()||!o.trim()){alert("Please fill in both cost name and amount");return}const G=parseFloat(o);if(isNaN(G)||G<=0){alert("Please enter a valid amount");return}rt(!0);try{const st={name:n.trim(),amount:G,period:f},oe=await P(st);oe?(y([...p,{...st,id:oe}]),s(""),c(""),console.log("Cost added successfully:",st)):alert("Failed to save cost. Please try again.")}catch(st){console.error("Error adding cost:",st),alert(`Error adding cost: ${st.message}

Error code: ${st.code}`)}finally{rt(!1)}},kt=async()=>{if(!dt.trim()||!It.trim()||!Ct.trim()){alert("Please fill in all goal fields");return}const G=parseFloat(It),st=parseFloat(Ct);if(isNaN(G)||G<=0||isNaN(st)||st<=0){alert("Please enter valid amounts");return}try{const oe={name:dt.trim(),price:G,dailyContribution:st},Ne=await I(oe);Ne?(w([...b,{...oe,id:Ne}]),ht(""),_t(""),M(""),console.log("Goal added successfully:",oe)):alert("Failed to save goal. Please try again.")}catch(oe){console.error("Error adding goal:",oe),alert(`Error adding goal: ${oe.message}`)}},C=G=>{G.key==="Enter"&&(J==="expenses"?ut():J==="goals"&&kt())},$=async G=>{const st=G.target.value;if(t(st),st&&!isNaN(parseFloat(st)))try{await V(st),console.log("Salary saved successfully:",st)}catch(oe){console.error("Error saving salary:",oe),alert("Error saving salary. Please try again.")}},it=()=>p.reduce((G,st)=>{switch(st.period){case"daily":return G+st.amount*30;case"weekly":return G+st.amount*4.33;case"monthly":return G+st.amount;case"yearly":return G+st.amount/12;case"one-off":return G+st.amount;default:return G}},0),tt=()=>{const G=new Date;return new Date(G.getFullYear(),G.getMonth()+1,0).getDate()},ft=()=>{const G=parseFloat(r)||0,st=it(),oe=G-st,Ne=tt();return oe/Ne},Rt=(G,st)=>Math.ceil(G/st),vt=G=>{const st=new Date;return st.setDate(st.getDate()+G),st.toLocaleDateString()},ge=async G=>{await Ae(G),y(p.filter(st=>st.id!==G))},Yt=async G=>{await ne(G),w(b.filter(st=>st.id!==G))},Tn=()=>Z.createElement("div",{className:"p-4 bg-green-50 border rounded mb-6"},Z.createElement("h2",{className:"text-xl font-semibold mb-4"},"Daily Free Money"),Z.createElement("div",{className:"text-3xl font-bold text-green-600"},"฿",ft().toFixed(2))),Zn=()=>Z.createElement("div",{className:"mb-6"},Z.createElement("label",{className:"block text-sm font-medium mb-2"},"Monthly Salary"),Z.createElement("input",{type:"number",placeholder:"Enter monthly salary",value:r,onChange:$,className:"border border-gray-300 rounded px-3 py-2 w-full"})),kn=()=>Z.createElement(Z.Fragment,null,Z.createElement("div",{className:"mb-6 p-4 border rounded"},Z.createElement("h2",{className:"text-xl font-semibold mb-4"},"Add Expense"),Z.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-2 mb-2"},Z.createElement("input",{placeholder:"Expense name",value:n,onChange:G=>s(G.target.value),onKeyPress:C,className:"border border-gray-300 rounded px-3 py-2"}),Z.createElement("input",{type:"number",placeholder:"Amount",value:o,onChange:G=>c(G.target.value),onKeyPress:C,className:"border border-gray-300 rounded px-3 py-2"}),Z.createElement("select",{value:f,onChange:G=>g(G.target.value),className:"border border-gray-300 rounded px-3 py-2"},Z.createElement("option",{value:"daily"},"Daily"),Z.createElement("option",{value:"weekly"},"Weekly"),Z.createElement("option",{value:"monthly"},"Monthly"),Z.createElement("option",{value:"yearly"},"Yearly"),Z.createElement("option",{value:"one-off"},"One-off")),Z.createElement("button",{onClick:ut,disabled:W,className:`px-4 py-2 text-white rounded ${W?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`},W?"Adding...":"Add"))),Z.createElement("div",{className:"mb-6"},Z.createElement("h2",{className:"text-xl font-semibold mb-4"},"Your Expenses"),Z.createElement("div",{className:"grid gap-2"},p.map(G=>Z.createElement("div",{key:G.id,className:"flex justify-between items-center p-3 border rounded bg-gray-50"},Z.createElement("span",{className:"font-medium"},G.name),Z.createElement("div",{className:"flex items-center gap-4"},Z.createElement("span",{className:"font-medium"},"฿",G.amount," (",G.period,")"),Z.createElement("button",{onClick:()=>ge(G.id),className:"text-red-500 hover:text-red-700"},"×"))))))),Ti=()=>Z.createElement("div",{className:"space-y-6"},Z.createElement("div",{className:"p-4 bg-blue-50 border rounded"},Z.createElement("h2",{className:"text-xl font-semibold mb-4"},"Detailed Budget Report"),Z.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4"},Z.createElement("div",{className:"p-3 bg-white rounded border"},Z.createElement("div",{className:"text-sm text-gray-600"},"Monthly Salary"),Z.createElement("div",{className:"text-2xl font-bold"},"฿",parseFloat(r)||0)),Z.createElement("div",{className:"p-3 bg-white rounded border"},Z.createElement("div",{className:"text-sm text-gray-600"},"Monthly Expenses"),Z.createElement("div",{className:"text-2xl font-bold text-red-600"},"฿",it().toFixed(2))),Z.createElement("div",{className:"p-3 bg-white rounded border"},Z.createElement("div",{className:"text-sm text-gray-600"},"Daily Free Money"),Z.createElement("div",{className:"text-2xl font-bold text-green-600"},"฿",ft().toFixed(2))))),Z.createElement("div",{className:"p-4 bg-yellow-50 border rounded"},Z.createElement("h3",{className:"text-lg font-semibold mb-3"},"Expense Breakdown"),Z.createElement("div",{className:"space-y-2"},p.map(G=>{const st=G.period==="daily"?G.amount*30:G.period==="weekly"?G.amount*4.33:G.period==="yearly"?G.amount/12:(G.period==="one-off",G.amount);return Z.createElement("div",{key:G.id,className:"flex justify-between items-center p-2 bg-white rounded"},Z.createElement("span",null,G.name),Z.createElement("span",{className:"font-medium"},"฿",st.toFixed(2),"/month"))})))),Ai=()=>Z.createElement(Z.Fragment,null,Z.createElement("div",{className:"mb-6 p-4 border rounded"},Z.createElement("h2",{className:"text-xl font-semibold mb-4"},"Add Goal"),Z.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-2 mb-2"},Z.createElement("input",{placeholder:"Goal name",value:dt,onChange:G=>ht(G.target.value),onKeyPress:C,className:"border border-gray-300 rounded px-3 py-2"}),Z.createElement("input",{type:"number",placeholder:"Price",value:It,onChange:G=>_t(G.target.value),onKeyPress:C,className:"border border-gray-300 rounded px-3 py-2"}),Z.createElement("input",{type:"number",placeholder:"Daily contribution",value:Ct,onChange:G=>M(G.target.value),onKeyPress:C,className:"border border-gray-300 rounded px-3 py-2"}),Z.createElement("button",{onClick:kt,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"},"Add Goal"))),Z.createElement("div",{className:"mb-6"},Z.createElement("h2",{className:"text-xl font-semibold mb-4"},"Your Goals"),Z.createElement("div",{className:"grid gap-4"},b.map(G=>{const st=Rt(G.price,G.dailyContribution),oe=vt(st);return Z.createElement("div",{key:G.id,className:"p-4 border rounded bg-blue-50"},Z.createElement("div",{className:"flex justify-between items-start mb-2"},Z.createElement("h3",{className:"font-semibold text-lg"},G.name),Z.createElement("button",{onClick:()=>Yt(G.id),className:"text-red-500 hover:text-red-700"},"×")),Z.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm"},Z.createElement("div",null,Z.createElement("span",{className:"text-gray-600"},"Price:"),Z.createElement("div",{className:"font-medium"},"฿",G.price)),Z.createElement("div",null,Z.createElement("span",{className:"text-gray-600"},"Daily Contribution:"),Z.createElement("div",{className:"font-medium"},"฿",G.dailyContribution)),Z.createElement("div",null,Z.createElement("span",{className:"text-gray-600"},"Target Date:"),Z.createElement("div",{className:"font-medium text-green-600"},oe))),Z.createElement("div",{className:"mt-2 text-xs text-gray-500"},st," days to reach your goal"))}))));return Z.createElement("div",{className:"p-6 max-w-6xl mx-auto"},Z.createElement("h1",{className:"text-3xl font-bold mb-6 bg-purple-400 p-4 rounded"},"Budget Dashboard"),Z.createElement("div",{className:"mb-6 p-4 border rounded bg-gray-50"},T?Z.createElement("div",{className:"flex items-center justify-between"},Z.createElement("div",{className:"flex items-center gap-3"},Z.createElement("img",{src:T.photoURL,alt:"Profile",className:"w-8 h-8 rounded-full"}),Z.createElement("span",null,"Welcome, ",T.displayName,"!")),Z.createElement("button",{onClick:nt,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"},"Sign Out")):Z.createElement("div",{className:"text-center"},Z.createElement("p",{className:"mb-4"},"Please sign in to use the budget dashboard"),Z.createElement("button",{onClick:j,className:"px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 mx-auto"},Z.createElement("svg",{className:"w-5 h-5",viewBox:"0 0 24 24"},Z.createElement("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),Z.createElement("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),Z.createElement("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),Z.createElement("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})),"Sign in with Google"))),T&&Z.createElement(Z.Fragment,null,D?Z.createElement("div",{className:"text-center py-8"},Z.createElement("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),Z.createElement("p",{className:"mt-2 text-gray-600"},"Loading your budget data...")):Z.createElement(Z.Fragment,null,Tn(),Z.createElement("div",{className:"mb-6"},Z.createElement("div",{className:"border-b border-gray-200"},Z.createElement("nav",{className:"-mb-px flex space-x-8"},[{id:"income",name:"Income"},{id:"expenses",name:"Expenses"},{id:"report",name:"Report"},{id:"goals",name:"Goals"}].map(G=>Z.createElement("button",{key:G.id,onClick:()=>St(G.id),className:`py-2 px-1 border-b-2 font-medium text-sm ${J===G.id?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`},G.name))))),Z.createElement("div",{className:"mt-6"},J==="income"&&Zn(),J==="expenses"&&kn(),J==="report"&&Ti(),J==="goals"&&Ai()))))}Xb.createRoot(document.getElementById("root")).render(Z.createElement(Xe.StrictMode,null,Z.createElement(pN,null)));
