(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function US(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vd={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function LS(){if(S_)return bt;S_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=I&&D[I]||D["@@iterator"],typeof D=="function"?D:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,et={};function Z(D,X,nt){this.props=D,this.context=X,this.refs=et,this.updater=nt||H}Z.prototype.isReactComponent={},Z.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},Z.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function St(){}St.prototype=Z.prototype;function dt(D,X,nt){this.props=D,this.context=X,this.refs=et,this.updater=nt||H}var ut=dt.prototype=new St;ut.constructor=dt,$(ut,Z.prototype),ut.isPureReactComponent=!0;var Ot=Array.isArray,_t={H:null,A:null,T:null,S:null,V:null},It=Object.prototype.hasOwnProperty;function M(D,X,nt,W,ft,Ct){return nt=Ct.ref,{$$typeof:r,type:D,key:X,ref:nt!==void 0?nt:null,props:Ct}}function b(D,X){return M(D.type,X,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(nt){return X[nt]})}var V=/\/+/g;function k(D,X){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):X.toString(36)}function S(){}function ct(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(S,S):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Bt(D,X,nt,W,ft){var Ct=typeof D;(Ct==="undefined"||Ct==="boolean")&&(D=null);var Et=!1;if(D===null)Et=!0;else switch(Ct){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(D.$$typeof){case r:case t:Et=!0;break;case T:return Et=D._init,Bt(Et(D._payload),X,nt,W,ft)}}if(Et)return ft=ft(D),Et=W===""?"."+k(D,0):W,Ot(ft)?(nt="",Et!=null&&(nt=Et.replace(V,"$&/")+"/"),Bt(ft,X,nt,"",function(Qn){return Qn})):ft!=null&&(R(ft)&&(ft=b(ft,nt+(ft.key==null||D&&D.key===ft.key?"":(""+ft.key).replace(V,"$&/")+"/")+Et)),X.push(ft)),1;Et=0;var Re=W===""?".":W+":";if(Ot(D))for(var Jt=0;Jt<D.length;Jt++)W=D[Jt],Ct=Re+k(W,Jt),Et+=Bt(W,X,nt,Ct,ft);else if(Jt=C(D),typeof Jt=="function")for(D=Jt.call(D),Jt=0;!(W=D.next()).done;)W=W.value,Ct=Re+k(W,Jt++),Et+=Bt(W,X,nt,Ct,ft);else if(Ct==="object"){if(typeof D.then=="function")return Bt(ct(D),X,nt,W,ft);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Et}function j(D,X,nt){if(D==null)return D;var W=[],ft=0;return Bt(D,W,"","",function(Ct){return X.call(nt,Ct,ft++)}),W}function tt(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(nt){(D._status===0||D._status===-1)&&(D._status=1,D._result=nt)},function(nt){(D._status===0||D._status===-1)&&(D._status=2,D._result=nt)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var ot=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function qt(){}return bt.Children={map:j,forEach:function(D,X,nt){j(D,function(){X.apply(this,arguments)},nt)},count:function(D){var X=0;return j(D,function(){X++}),X},toArray:function(D){return j(D,function(X){return X})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},bt.Component=Z,bt.Fragment=n,bt.Profiler=o,bt.PureComponent=dt,bt.StrictMode=s,bt.Suspense=p,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_t,bt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return _t.H.useMemoCache(D)}},bt.cache=function(D){return function(){return D.apply(null,arguments)}},bt.cloneElement=function(D,X,nt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var W=$({},D.props),ft=D.key,Ct=void 0;if(X!=null)for(Et in X.ref!==void 0&&(Ct=void 0),X.key!==void 0&&(ft=""+X.key),X)!It.call(X,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&X.ref===void 0||(W[Et]=X[Et]);var Et=arguments.length-2;if(Et===1)W.children=nt;else if(1<Et){for(var Re=Array(Et),Jt=0;Jt<Et;Jt++)Re[Jt]=arguments[Jt+2];W.children=Re}return M(D.type,ft,void 0,void 0,Ct,W)},bt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},bt.createElement=function(D,X,nt){var W,ft={},Ct=null;if(X!=null)for(W in X.key!==void 0&&(Ct=""+X.key),X)It.call(X,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ft[W]=X[W]);var Et=arguments.length-2;if(Et===1)ft.children=nt;else if(1<Et){for(var Re=Array(Et),Jt=0;Jt<Et;Jt++)Re[Jt]=arguments[Jt+2];ft.children=Re}if(D&&D.defaultProps)for(W in Et=D.defaultProps,Et)ft[W]===void 0&&(ft[W]=Et[W]);return M(D,Ct,void 0,void 0,null,ft)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(D){return{$$typeof:g,render:D}},bt.isValidElement=R,bt.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:tt}},bt.memo=function(D,X){return{$$typeof:y,type:D,compare:X===void 0?null:X}},bt.startTransition=function(D){var X=_t.T,nt={};_t.T=nt;try{var W=D(),ft=_t.S;ft!==null&&ft(nt,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(qt,ot)}catch(Ct){ot(Ct)}finally{_t.T=X}},bt.unstable_useCacheRefresh=function(){return _t.H.useCacheRefresh()},bt.use=function(D){return _t.H.use(D)},bt.useActionState=function(D,X,nt){return _t.H.useActionState(D,X,nt)},bt.useCallback=function(D,X){return _t.H.useCallback(D,X)},bt.useContext=function(D){return _t.H.useContext(D)},bt.useDebugValue=function(){},bt.useDeferredValue=function(D,X){return _t.H.useDeferredValue(D,X)},bt.useEffect=function(D,X,nt){var W=_t.H;if(typeof nt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(D,X)},bt.useId=function(){return _t.H.useId()},bt.useImperativeHandle=function(D,X,nt){return _t.H.useImperativeHandle(D,X,nt)},bt.useInsertionEffect=function(D,X){return _t.H.useInsertionEffect(D,X)},bt.useLayoutEffect=function(D,X){return _t.H.useLayoutEffect(D,X)},bt.useMemo=function(D,X){return _t.H.useMemo(D,X)},bt.useOptimistic=function(D,X){return _t.H.useOptimistic(D,X)},bt.useReducer=function(D,X,nt){return _t.H.useReducer(D,X,nt)},bt.useRef=function(D){return _t.H.useRef(D)},bt.useState=function(D){return _t.H.useState(D)},bt.useSyncExternalStore=function(D,X,nt){return _t.H.useSyncExternalStore(D,X,nt)},bt.useTransition=function(){return _t.H.useTransition()},bt.version="19.1.0",bt}var b_;function hm(){return b_||(b_=1,vd.exports=LS()),vd.exports}var Un=hm();const at=US(Un);var Ed={exports:{}},dl={},Td={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function zS(){return w_||(w_=1,function(r){function t(j,tt){var ot=j.length;j.push(tt);t:for(;0<ot;){var qt=ot-1>>>1,D=j[qt];if(0<o(D,tt))j[qt]=tt,j[ot]=D,ot=qt;else break t}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var tt=j[0],ot=j.pop();if(ot!==tt){j[0]=ot;t:for(var qt=0,D=j.length,X=D>>>1;qt<X;){var nt=2*(qt+1)-1,W=j[nt],ft=nt+1,Ct=j[ft];if(0>o(W,ot))ft<D&&0>o(Ct,W)?(j[qt]=Ct,j[ft]=ot,qt=ft):(j[qt]=W,j[nt]=ot,qt=nt);else if(ft<D&&0>o(Ct,ot))j[qt]=Ct,j[ft]=ot,qt=ft;else break t}}return tt}function o(j,tt){var ot=j.sortIndex-tt.sortIndex;return ot!==0?ot:j.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],y=[],T=1,I=null,C=3,H=!1,$=!1,et=!1,Z=!1,St=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,ut=typeof setImmediate<"u"?setImmediate:null;function Ot(j){for(var tt=n(y);tt!==null;){if(tt.callback===null)s(y);else if(tt.startTime<=j)s(y),tt.sortIndex=tt.expirationTime,t(p,tt);else break;tt=n(y)}}function _t(j){if(et=!1,Ot(j),!$)if(n(p)!==null)$=!0,It||(It=!0,k());else{var tt=n(y);tt!==null&&Bt(_t,tt.startTime-j)}}var It=!1,M=-1,b=5,R=-1;function N(){return Z?!0:!(r.unstable_now()-R<b)}function V(){if(Z=!1,It){var j=r.unstable_now();R=j;var tt=!0;try{t:{$=!1,et&&(et=!1,dt(M),M=-1),H=!0;var ot=C;try{e:{for(Ot(j),I=n(p);I!==null&&!(I.expirationTime>j&&N());){var qt=I.callback;if(typeof qt=="function"){I.callback=null,C=I.priorityLevel;var D=qt(I.expirationTime<=j);if(j=r.unstable_now(),typeof D=="function"){I.callback=D,Ot(j),tt=!0;break e}I===n(p)&&s(p),Ot(j)}else s(p);I=n(p)}if(I!==null)tt=!0;else{var X=n(y);X!==null&&Bt(_t,X.startTime-j),tt=!1}}break t}finally{I=null,C=ot,H=!1}tt=void 0}}finally{tt?k():It=!1}}}var k;if(typeof ut=="function")k=function(){ut(V)};else if(typeof MessageChannel<"u"){var S=new MessageChannel,ct=S.port2;S.port1.onmessage=V,k=function(){ct.postMessage(null)}}else k=function(){St(V,0)};function Bt(j,tt){M=St(function(){j(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(j){switch(C){case 1:case 2:case 3:var tt=3;break;default:tt=C}var ot=C;C=tt;try{return j()}finally{C=ot}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(j,tt){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ot=C;C=j;try{return tt()}finally{C=ot}},r.unstable_scheduleCallback=function(j,tt,ot){var qt=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?qt+ot:qt):ot=qt,j){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ot+D,j={id:T++,callback:tt,priorityLevel:j,startTime:ot,expirationTime:D,sortIndex:-1},ot>qt?(j.sortIndex=ot,t(y,j),n(p)===null&&j===n(y)&&(et?(dt(M),M=-1):et=!0,Bt(_t,ot-qt))):(j.sortIndex=D,t(p,j),$||H||($=!0,It||(It=!0,k()))),j},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(j){var tt=C;return function(){var ot=C;C=tt;try{return j.apply(this,arguments)}finally{C=ot}}}}(Ad)),Ad}var R_;function BS(){return R_||(R_=1,Td.exports=zS()),Td.exports}var Sd={exports:{}},je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function qS(){if(I_)return je;I_=1;var r=hm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,y,T){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:I==null?null:""+I,children:p,containerInfo:y,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,je.createPortal=function(p,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,T)},je.flushSync=function(p){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=T,s.d.f()}},je.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},je.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},je.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var T=y.as,I=g(T,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,H=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:I,integrity:C,fetchPriority:H}):T==="script"&&s.d.X(p,{crossOrigin:I,integrity:C,fetchPriority:H,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},je.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=g(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},je.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,I=g(T,y.crossOrigin);s.d.L(p,T,{crossOrigin:I,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},je.preloadModule=function(p,y){if(typeof p=="string")if(y){var T=g(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},je.requestFormReset=function(p){s.d.r(p)},je.unstable_batchedUpdates=function(p,y){return p(y)},je.useFormState=function(p,y,T){return f.H.useFormState(p,y,T)},je.useFormStatus=function(){return f.H.useHostTransitionStatus()},je.version="19.1.0",je}var C_;function HS(){if(C_)return Sd.exports;C_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sd.exports=qS(),Sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function jS(){if(D_)return dl;D_=1;var r=BS(),t=hm(),n=HS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===l)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,I=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),dt=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),Ot=Symbol.for("react.forward_ref"),_t=Symbol.for("react.suspense"),It=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var S=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===S?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case Z:return"Profiler";case et:return"StrictMode";case _t:return"Suspense";case It:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case ut:return(e.displayName||"Context")+".Provider";case dt:return(e._context.displayName||"Context")+".Consumer";case Ot:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:ct(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return ct(e(i))}catch{}}return null}var Bt=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},qt=[],D=-1;function X(e){return{current:e}}function nt(e){0>D||(e.current=qt[D],qt[D]=null,D--)}function W(e,i){D++,qt[D]=e.current,e.current=i}var ft=X(null),Ct=X(null),Et=X(null),Re=X(null);function Jt(e,i){switch(W(Et,i),W(Ct,e),W(ft,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Zy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Zy(i),e=Wy(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(ft),W(ft,e)}function Qn(){nt(ft),nt(Ct),nt(Et)}function Zi(e){e.memoizedState!==null&&W(Re,e);var i=ft.current,a=Wy(i,e.type);i!==a&&(W(Ct,e),W(ft,a))}function pi(e){Ct.current===e&&(nt(ft),nt(Ct)),Re.current===e&&(nt(Re),ll._currentValue=ot)}var Hr=Object.prototype.hasOwnProperty,jr=r.unstable_scheduleCallback,Fr=r.unstable_cancelCallback,ro=r.unstable_shouldYield,jl=r.unstable_requestPaint,pn=r.unstable_now,_h=r.unstable_getCurrentPriorityLevel,so=r.unstable_ImmediatePriority,qs=r.unstable_UserBlockingPriority,Gr=r.unstable_NormalPriority,vh=r.unstable_LowPriority,Hs=r.unstable_IdlePriority,ao=r.log,Fl=r.unstable_setDisableYieldValue,ae=null,Gt=null;function an(e){if(typeof ao=="function"&&Fl(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(ae,e)}catch{}}var qe=Math.clz32?Math.clz32:Qr,Gl=Math.log,Eh=Math.LN2;function Qr(e){return e>>>=0,e===0?32:31-(Gl(e)/Eh|0)|0}var Kr=256,Yr=4194304;function Nn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function js(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Nn(l):(v&=E,v!==0?h=Nn(v):a||(a=E&~e,a!==0&&(h=Nn(a))))):(E=l&~d,E!==0?h=Nn(E):v!==0?h=Nn(v):a||(a=l&~e,a!==0&&(h=Nn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Xr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function oo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lo(){var e=Kr;return Kr<<=1,(Kr&4194048)===0&&(Kr=256),e}function uo(){var e=Yr;return Yr<<=1,(Yr&62914560)===0&&(Yr=4194304),e}function yi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function _i(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function co(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-qe(a),Q=1<<F;E[F]=0,w[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~Q}l!==0&&Kn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Kn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-qe(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function ho(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-qe(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function Wi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ji(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:y_(e.type))}function Ql(e,i){var a=tt.p;try{return tt.p=e,i()}finally{tt.p=a}}var ne=Math.random().toString(36).slice(2),ve="__reactFiber$"+ne,de="__reactProps$"+ne,yn="__reactContainer$"+ne,fo="__reactEvents$"+ne,Th="__reactListeners$"+ne,tr="__reactHandles$"+ne,Kl="__reactResources$"+ne,$r="__reactMarker$"+ne;function er(e){delete e[ve],delete e[de],delete e[fo],delete e[Th],delete e[tr]}function vi(e){var i=e[ve];if(i)return i;for(var a=e.parentNode;a;){if(i=a[yn]||a[ve]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=n_(e);e!==null;){if(a=e[ve])return a;e=n_(e)}return i}e=a,a=e.parentNode}return null}function Yn(e){if(e=e[ve]||e[yn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Xn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Xe(e){var i=e[Kl];return i||(i=e[Kl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ue(e){e[$r]=!0}var mo=new Set,Gs={};function Mn(e,i){Ei(e,i),Ei(e+"Capture",i)}function Ei(e,i){for(Gs[e]=i,e=0;e<i.length;e++)mo.add(i[e])}var Yl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xl={},Zr={};function $l(e){return Hr.call(Zr,e)?!0:Hr.call(Xl,e)?!1:Yl.test(e)?Zr[e]=!0:(Xl[e]=!0,!1)}function nr(e,i,a){if($l(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function $n(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ve(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var Wr,Zl;function Ti(e){if(Wr===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Wr=i&&i[1]||"",Zl=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+e+Zl}var Qs=!1;function Ks(e,i){if(!e||Qs)return"";Qs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(B){var z=B}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(B){z=B}e.call(Q.prototype)}}else{try{throw Error()}catch(B){z=B}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var w=v.split(`
`),L=E.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===L.length)for(l=w.length-1,h=L.length-1;1<=l&&0<=h&&w[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==L[h]){var F=`
`+w[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{Qs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ti(a):""}function go(e){switch(e.tag){case 26:case 27:case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 15:return Ks(e.type,!1);case 11:return Ks(e.type.render,!1);case 1:return Ks(e.type,!0);case 31:return Ti("Activity");default:return""}}function Ys(e){try{var i="";do i+=go(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function po(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ah(e){var i=po(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Xs(e){e._valueTracker||(e._valueTracker=Ah(e))}function yo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=po(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sh=/[\n"\\]/g;function me(e){return e.replace(Sh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function on(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+$e(i)):e.value!==""+$e(i)&&(e.value=""+$e(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?ir(e,v,$e(i)):a!=null?ir(e,v,$e(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+$e(E):e.removeAttribute("name")}function ts(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+$e(a):"",i=i!=null?""+$e(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function ir(e,i,a){i==="number"&&Jr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ai(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Yt(e,i,a){if(i!=null&&(i=""+$e(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+$e(a):""}function es(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Bt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=$e(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function _n(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ns=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wl(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||ns.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function _o(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Wl(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Wl(e,d,i[d])}function vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $s(e){return wh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Si=null;function vn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,wi=null;function Eo(e){var i=Yn(e);if(i&&(e=i.stateNode)){var a=e[de]||null;t:switch(e=i.stateNode,i.type){case"input":if(on(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[de]||null;if(!h)throw Error(s(90));on(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&yo(l)}break t;case"textarea":Yt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ai(e,!!a.multiple,i,!1)}}}var Zn=!1;function Jl(e,i,a){if(Zn)return e(i,a);Zn=!0;try{var l=e(i);return l}finally{if(Zn=!1,(bi!==null||wi!==null)&&(Qu(),bi&&(i=bi,e=wi,wi=bi=null,Eo(i),e)))for(i=0;i<e.length;i++)Eo(e[i])}}function is(e,i){var a=e.stateNode;if(a===null)return null;var l=a[de]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),En=!1;if(Vn)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){En=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{En=!1}var Wn=null,rr=null,Ri=null;function To(){if(Ri)return Ri;var e,i=rr,a=i.length,l,h="value"in Wn?Wn.value:Wn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ri=h.slice(e,1<l?1-l:void 0)}function Jn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Ao(){return!1}function Ie(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ti:Ao,this.isPropagationStopped=Ao,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=Ie(jt),ss=T({},jt,{view:0,detail:0}),tu=Ie(ss),Ws,Js,ei,as=T({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(Ws=e.screenX-ei.screenX,Js=e.screenY-ei.screenY):Js=Ws=0,ei=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Js}}),Tn=Ie(as),eu=T({},as,{dataTransfer:0}),Rh=Ie(eu),os=T({},ss,{relatedTarget:0}),ta=Ie(os),So=T({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),ea=Ie(So),nu=T({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),na=Ie(nu),Ih=T({},jt,{data:0}),bo=Ie(Ih),ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ru={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ru[e])?!!i[e]:!1}function us(){return wo}var su=T({},ss,{key:function(e){if(e.key){var i=ls[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ia=Ie(su),au=T({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=Ie(au),Ii=T({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),ou=Ie(Ii),lu=T({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),uu=Ie(lu),cu=T({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ra=Ie(cu),Ze=T({},jt,{newState:0,oldState:0}),hu=Ie(Ze),fu=[9,13,27,32],ni=Vn&&"CompositionEvent"in window,u=null;Vn&&"documentMode"in document&&(u=document.documentMode);var m=Vn&&"TextEvent"in window&&!u,_=Vn&&(!ni||u&&8<u&&11>=u),A=" ",x=!1;function q(e,i){switch(e){case"keyup":return fu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function Ee(e,i){switch(e){case"compositionend":return J(i);case"keypress":return i.which!==32?null:(x=!0,A);case"textInput":return e=i.data,e===A&&x?null:e;default:return null}}function xt(e,i){if(kt)return e==="compositionend"||!ni&&q(e,i)?(e=To(),Ri=rr=Wn=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ce={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Te(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ce[e.type]:i==="textarea"}function Ci(e,i,a,l){bi?wi?wi.push(l):wi=[l]:bi=l,i=Wu(i,"onChange"),0<i.length&&(a=new Zs("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Pe=null,ii=null;function Io(e){Qy(e,0)}function du(e){var i=Xn(e);if(yo(i))return e}function dg(e,i){if(e==="change")return i}var mg=!1;if(Vn){var Ch;if(Vn){var Dh="oninput"in document;if(!Dh){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Dh=typeof gg.oninput=="function"}Ch=Dh}else Ch=!1;mg=Ch&&(!document.documentMode||9<document.documentMode)}function pg(){Pe&&(Pe.detachEvent("onpropertychange",yg),ii=Pe=null)}function yg(e){if(e.propertyName==="value"&&du(ii)){var i=[];Ci(i,ii,e,vn(e)),Jl(Io,i)}}function dA(e,i,a){e==="focusin"?(pg(),Pe=i,ii=a,Pe.attachEvent("onpropertychange",yg)):e==="focusout"&&pg()}function mA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return du(ii)}function gA(e,i){if(e==="click")return du(i)}function pA(e,i){if(e==="input"||e==="change")return du(i)}function yA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ln=typeof Object.is=="function"?Object.is:yA;function Co(e,i){if(ln(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Hr.call(i,h)||!ln(e[h],i[h]))return!1}return!0}function _g(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vg(e,i){var a=_g(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_g(a)}}function Eg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Eg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Tg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Jr(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=Jr(e.document)}return i}function Oh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var _A=Vn&&"documentMode"in document&&11>=document.documentMode,sa=null,Nh=null,Do=null,Mh=!1;function Ag(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mh||sa==null||sa!==Jr(l)||(l=sa,"selectionStart"in l&&Oh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Do&&Co(Do,l)||(Do=l,l=Wu(Nh,"onSelect"),0<l.length&&(i=new Zs("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=sa)))}function cs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var aa={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Vh={},Sg={};Vn&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function hs(e){if(Vh[e])return Vh[e];if(!aa[e])return e;var i=aa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Sg)return Vh[e]=i[a];return e}var bg=hs("animationend"),wg=hs("animationiteration"),Rg=hs("animationstart"),vA=hs("transitionrun"),EA=hs("transitionstart"),TA=hs("transitioncancel"),Ig=hs("transitionend"),Cg=new Map,Ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ph.push("scrollEnd");function Pn(e,i){Cg.set(e,i),Mn(i,[e])}var Dg=new WeakMap;function An(e,i){if(typeof e=="object"&&e!==null){var a=Dg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Ys(i)},Dg.set(e,i),i)}return{value:e,source:i,stack:Ys(i)}}var Sn=[],oa=0,kh=0;function mu(){for(var e=oa,i=kh=oa=0;i<e;){var a=Sn[i];Sn[i++]=null;var l=Sn[i];Sn[i++]=null;var h=Sn[i];Sn[i++]=null;var d=Sn[i];if(Sn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Og(a,h,d)}}function gu(e,i,a,l){Sn[oa++]=e,Sn[oa++]=i,Sn[oa++]=a,Sn[oa++]=l,kh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function xh(e,i,a,l){return gu(e,i,a,l),pu(e)}function la(e,i){return gu(e,null,null,i),pu(e)}function Og(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-qe(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function pu(e){if(50<tl)throw tl=0,jf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ua={};function AA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,i,a,l){return new AA(e,i,a,l)}function Uh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Di(e,i){var a=e.alternate;return a===null?(a=un(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ng(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function yu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Uh(e)&&(v=1);else if(typeof e=="string")v=bS(e,a,ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=un(31,a,i,h),e.elementType=R,e.lanes=d,e;case $:return fs(a.children,h,d,i);case et:v=8,h|=24;break;case Z:return e=un(12,a,i,h|2),e.elementType=Z,e.lanes=d,e;case _t:return e=un(13,a,i,h),e.elementType=_t,e.lanes=d,e;case It:return e=un(19,a,i,h),e.elementType=It,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case St:case ut:v=10;break t;case dt:v=9;break t;case Ot:v=11;break t;case M:v=14;break t;case b:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=un(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function fs(e,i,a,l){return e=un(7,e,l,i),e.lanes=a,e}function Lh(e,i,a){return e=un(6,e,null,i),e.lanes=a,e}function zh(e,i,a){return i=un(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ca=[],ha=0,_u=null,vu=0,bn=[],wn=0,ds=null,Oi=1,Ni="";function ms(e,i){ca[ha++]=vu,ca[ha++]=_u,_u=e,vu=i}function Mg(e,i,a){bn[wn++]=Oi,bn[wn++]=Ni,bn[wn++]=ds,ds=e;var l=Oi;e=Ni;var h=32-qe(l)-1;l&=~(1<<h),a+=1;var d=32-qe(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Oi=1<<32-qe(i)+h|a<<h|l,Ni=d+e}else Oi=1<<d|a<<h|l,Ni=e}function Bh(e){e.return!==null&&(ms(e,1),Mg(e,1,0))}function qh(e){for(;e===_u;)_u=ca[--ha],ca[ha]=null,vu=ca[--ha],ca[ha]=null;for(;e===ds;)ds=bn[--wn],bn[wn]=null,Ni=bn[--wn],bn[wn]=null,Oi=bn[--wn],bn[wn]=null}var We=null,oe=null,Ht=!1,gs=null,ri=!1,Hh=Error(s(519));function ps(e){var i=Error(s(418,""));throw Mo(An(i,e)),Hh}function Vg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[ve]=e,i[de]=l,a){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(a=0;a<nl.length;a++)Mt(nl[a],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),ts(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xs(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),es(i,l.value,l.defaultValue,l.children),Xs(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||$y(i.textContent,a)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=Ju),i=!0):i=!1,i||ps(e)}function Pg(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:We=We.return}}function Oo(e){if(e!==We)return!1;if(!Ht)return Pg(e),Ht=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sd(e.type,e.memoizedProps)),a=!a),a&&oe&&ps(e),Pg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){oe=xn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}oe=null}}else i===27?(i=oe,Er(e.type)?(e=ud,ud=null,oe=e):oe=i):oe=We?xn(e.stateNode.nextSibling):null;return!0}function No(){oe=We=null,Ht=!1}function kg(){var e=gs;return e!==null&&(en===null?en=e:en.push.apply(en,e),gs=null),e}function Mo(e){gs===null?gs=[e]:gs.push(e)}var jh=X(null),ys=null,Mi=null;function sr(e,i,a){W(jh,i._currentValue),i._currentValue=a}function Vi(e){e._currentValue=jh.current,nt(jh)}function Fh(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function Gh(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Fh(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Fh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Vo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;ln(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===Re.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}h=h.return}e!==null&&Gh(i,e,a,l),i.flags|=262144}function Eu(e){for(e=e.firstContext;e!==null;){if(!ln(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){ys=e,Mi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function He(e){return xg(ys,e)}function Tu(e,i){return ys===null&&_s(e),xg(e,i)}function xg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Mi===null){if(e===null)throw Error(s(308));Mi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Mi=Mi.next=i;return a}var SA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},bA=r.unstable_scheduleCallback,wA=r.unstable_NormalPriority,Ae={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qh(){return{controller:new SA,data:new Map,refCount:0}}function Po(e){e.refCount--,e.refCount===0&&bA(wA,function(){e.controller.abort()})}var ko=null,Kh=0,fa=0,da=null;function RA(e,i){if(ko===null){var a=ko=[];Kh=0,fa=$f(),da={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Kh++,i.then(Ug,Ug),i}function Ug(){if(--Kh===0&&ko!==null){da!==null&&(da.status="fulfilled");var e=ko;ko=null,fa=0,da=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function IA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Lg=j.S;j.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&RA(e,i),Lg!==null&&Lg(e,i)};var vs=X(null);function Yh(){var e=vs.current;return e!==null?e:te.pooledCache}function Au(e,i){i===null?W(vs,vs.current):W(vs,i.pool)}function zg(){var e=Yh();return e===null?null:{parent:Ae._currentValue,pool:e}}var xo=Error(s(460)),Bg=Error(s(474)),Su=Error(s(542)),Xh={then:function(){}};function qg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bu(){}function Hg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(bu,bu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Fg(e),e;default:if(typeof i.status=="string")i.then(bu,bu);else{if(e=te,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Fg(e),e}throw Uo=i,xo}}var Uo=null;function jg(){if(Uo===null)throw Error(s(459));var e=Uo;return Uo=null,e}function Fg(e){if(e===xo||e===Su)throw Error(s(483))}var ar=!1;function $h(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function or(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function lr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=pu(e),Og(e,null,a),i}return gu(e,l,i,a),pu(e)}function Lo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,ho(e,a)}}function Wh(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Jh=!1;function zo(){if(Jh){var e=da;if(e!==null)throw e}}function Bo(e,i,a,l){Jh=!1;var h=e.updateQueue;ar=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==v&&(E===null?F.firstBaseUpdate=L:E.next=L,F.lastBaseUpdate=w))}if(d!==null){var Q=h.baseState;v=0,F=L=w=null,E=d;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(Ut&z)===z:(l&z)===z){z!==0&&z===fa&&(Jh=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var yt=e,mt=E;z=i;var Zt=a;switch(mt.tag){case 1:if(yt=mt.payload,typeof yt=="function"){Q=yt.call(Zt,Q,z);break t}Q=yt;break t;case 3:yt.flags=yt.flags&-65537|128;case 0:if(yt=mt.payload,z=typeof yt=="function"?yt.call(Zt,Q,z):yt,z==null)break t;Q=T({},Q,z);break t;case 2:ar=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(L=F=B,w=Q):F=F.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(w=Q),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),pr|=v,e.lanes=v,e.memoizedState=Q}}function Gg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Qg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gg(a[e],i)}var ma=X(null),wu=X(0);function Kg(e,i){e=Bi,W(wu,e),W(ma,i),Bi=e|i.baseLanes}function tf(){W(wu,Bi),W(ma,ma.current)}function ef(){Bi=wu.current,nt(ma),nt(wu)}var ur=0,wt=null,Xt=null,ge=null,Ru=!1,ga=!1,Es=!1,Iu=0,qo=0,pa=null,CA=0;function ce(){throw Error(s(321))}function nf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!ln(e[a],i[a]))return!1;return!0}function rf(e,i,a,l,h,d){return ur=d,wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,j.H=e===null||e.memoizedState===null?Op:Np,Es=!1,d=a(l,h),Es=!1,ga&&(d=Xg(i,a,l,h)),Yg(e),d}function Yg(e){j.H=Vu;var i=Xt!==null&&Xt.next!==null;if(ur=0,ge=Xt=wt=null,Ru=!1,qo=0,pa=null,i)throw Error(s(300));e===null||De||(e=e.dependencies,e!==null&&Eu(e)&&(De=!0))}function Xg(e,i,a,l){wt=e;var h=0;do{if(ga&&(pa=null),qo=0,ga=!1,25<=h)throw Error(s(301));if(h+=1,ge=Xt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}j.H=kA,d=i(a,l)}while(ga);return d}function DA(){var e=j.H,i=e.useState()[0];return i=typeof i.then=="function"?Ho(i):i,e=e.useState()[0],(Xt!==null?Xt.memoizedState:null)!==e&&(wt.flags|=1024),i}function sf(){var e=Iu!==0;return Iu=0,e}function af(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function of(e){if(Ru){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ru=!1}ur=0,ge=Xt=wt=null,ga=!1,qo=Iu=0,pa=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?wt.memoizedState=ge=e:ge=ge.next=e,ge}function pe(){if(Xt===null){var e=wt.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var i=ge===null?wt.memoizedState:ge.next;if(i!==null)ge=i,Xt=e;else{if(e===null)throw wt.alternate===null?Error(s(467)):Error(s(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},ge===null?wt.memoizedState=ge=e:ge=ge.next=e}return ge}function lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(e){var i=qo;return qo+=1,pa===null&&(pa=[]),e=Hg(pa,e,i),i=wt,(ge===null?i.memoizedState:ge.next)===null&&(i=i.alternate,j.H=i===null||i.memoizedState===null?Op:Np),e}function Cu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ho(e);if(e.$$typeof===ut)return He(e)}throw Error(s(438,String(e)))}function uf(e){var i=null,a=wt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=wt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=lf(),wt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function Pi(e,i){return typeof i=="function"?i(e):i}function Du(e){var i=pe();return cf(i,Xt,e)}function cf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,w=null,L=i,F=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(Ut&Q)===Q:(ur&Q)===Q){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===fa&&(F=!0);else if((ur&z)===z){L=L.next,z===fa&&(F=!0);continue}else Q={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=Q,v=d):w=w.next=Q,wt.lanes|=z,pr|=z;Q=L.action,Es&&a(d,Q),d=L.hasEagerState?L.eagerState:a(d,Q)}else z={lane:Q,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=z,v=d):w=w.next=z,wt.lanes|=Q,pr|=Q;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=E,!ln(d,e.memoizedState)&&(De=!0,F&&(a=da,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function hf(e){var i=pe(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);ln(d,i.memoizedState)||(De=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function $g(e,i,a){var l=wt,h=pe(),d=Ht;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!ln((Xt||h).memoizedState,a);v&&(h.memoizedState=a,De=!0),h=h.queue;var E=Jg.bind(null,l,h,e);if(jo(2048,8,E,[e]),h.getSnapshot!==i||v||ge!==null&&ge.memoizedState.tag&1){if(l.flags|=2048,ya(9,Ou(),Wg.bind(null,l,h,a,i),null),te===null)throw Error(s(349));d||(ur&124)!==0||Zg(l,i,a)}return a}function Zg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=wt.updateQueue,i===null?(i=lf(),wt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Wg(e,i,a,l){i.value=a,i.getSnapshot=l,tp(i)&&ep(e)}function Jg(e,i,a){return a(function(){tp(i)&&ep(e)})}function tp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!ln(e,a)}catch{return!0}}function ep(e){var i=la(e,2);i!==null&&mn(i,e,2)}function ff(e){var i=Je();if(typeof e=="function"){var a=e;if(e=a(),Es){an(!0);try{a()}finally{an(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},i}function np(e,i,a,l){return e.baseState=a,cf(e,Xt,typeof l=="function"?l:Pi)}function OA(e,i,a,l,h){if(Mu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};j.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,ip(i,d)):(d.next=a.next,i.pending=a.next=d)}}function ip(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=j.T,v={};j.T=v;try{var E=a(h,l),w=j.S;w!==null&&w(v,E),rp(e,i,E)}catch(L){df(e,i,L)}finally{j.T=d}}else try{d=a(h,l),rp(e,i,d)}catch(L){df(e,i,L)}}function rp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){sp(e,i,l)},function(l){return df(e,i,l)}):sp(e,i,a)}function sp(e,i,a){i.status="fulfilled",i.value=a,ap(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,ip(e,a)))}function df(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,ap(i),i=i.next;while(i!==l)}e.action=null}function ap(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function op(e,i){return i}function lp(e,i){if(Ht){var a=te.formState;if(a!==null){t:{var l=wt;if(Ht){if(oe){e:{for(var h=oe,d=ri;h.nodeType!==8;){if(!d){h=null;break e}if(h=xn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){oe=xn(h.nextSibling),l=h.data==="F!";break t}}ps(l)}l=!1}l&&(i=a[0])}}return a=Je(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:op,lastRenderedState:i},a.queue=l,a=Ip.bind(null,wt,l),l.dispatch=a,l=ff(!1),d=_f.bind(null,wt,!1,l.queue),l=Je(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=OA.bind(null,wt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function up(e){var i=pe();return cp(i,Xt,e)}function cp(e,i,a){if(i=cf(e,i,op)[0],e=Du(Pi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ho(i)}catch(v){throw v===xo?Su:v}else l=i;i=pe();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(wt.flags|=2048,ya(9,Ou(),NA.bind(null,h,a),null)),[l,d,e]}function NA(e,i){e.action=i}function hp(e){var i=pe(),a=Xt;if(a!==null)return cp(i,a,e);pe(),i=i.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function ya(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=wt.updateQueue,i===null&&(i=lf(),wt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Ou(){return{destroy:void 0,resource:void 0}}function fp(){return pe().memoizedState}function Nu(e,i,a,l){var h=Je();l=l===void 0?null:l,wt.flags|=e,h.memoizedState=ya(1|i,Ou(),a,l)}function jo(e,i,a,l){var h=pe();l=l===void 0?null:l;var d=h.memoizedState.inst;Xt!==null&&l!==null&&nf(l,Xt.memoizedState.deps)?h.memoizedState=ya(i,d,a,l):(wt.flags|=e,h.memoizedState=ya(1|i,d,a,l))}function dp(e,i){Nu(8390656,8,e,i)}function mp(e,i){jo(2048,8,e,i)}function gp(e,i){return jo(4,2,e,i)}function pp(e,i){return jo(4,4,e,i)}function yp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function _p(e,i,a){a=a!=null?a.concat([e]):null,jo(4,4,yp.bind(null,i,e),a)}function mf(){}function vp(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&nf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Ep(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&nf(i,l[1]))return l[0];if(l=e(),Es){an(!0);try{e()}finally{an(!1)}}return a.memoizedState=[l,i],l}function gf(e,i,a){return a===void 0||(ur&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Sy(),wt.lanes|=e,pr|=e,a)}function Tp(e,i,a,l){return ln(a,i)?a:ma.current!==null?(e=gf(e,a,l),ln(e,i)||(De=!0),e):(ur&42)===0?(De=!0,e.memoizedState=a):(e=Sy(),wt.lanes|=e,pr|=e,i)}function Ap(e,i,a,l,h){var d=tt.p;tt.p=d!==0&&8>d?d:8;var v=j.T,E={};j.T=E,_f(e,!1,i,a);try{var w=h(),L=j.S;if(L!==null&&L(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var F=IA(w,l);Fo(e,i,F,dn(e))}else Fo(e,i,l,dn(e))}catch(Q){Fo(e,i,{then:function(){},status:"rejected",reason:Q},dn())}finally{tt.p=d,j.T=v}}function MA(){}function pf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Sp(e).queue;Ap(e,h,i,ot,a===null?MA:function(){return bp(e),a(l)})}function Sp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:ot},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function bp(e){var i=Sp(e).next.queue;Fo(e,i,{},dn())}function yf(){return He(ll)}function wp(){return pe().memoizedState}function Rp(){return pe().memoizedState}function VA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=dn();e=or(a);var l=lr(i,e,a);l!==null&&(mn(l,i,a),Lo(l,i,a)),i={cache:Qh()},e.payload=i;return}i=i.return}}function PA(e,i,a){var l=dn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Mu(e)?Cp(i,a):(a=xh(e,i,a,l),a!==null&&(mn(a,e,l),Dp(a,i,l)))}function Ip(e,i,a){var l=dn();Fo(e,i,a,l)}function Fo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))Cp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,ln(E,v))return gu(e,i,h,0),te===null&&mu(),!1}catch{}finally{}if(a=xh(e,i,h,l),a!==null)return mn(a,e,l),Dp(a,i,l),!0}return!1}function _f(e,i,a,l){if(l={lane:2,revertLane:$f(),action:l,hasEagerState:!1,eagerState:null,next:null},Mu(e)){if(i)throw Error(s(479))}else i=xh(e,a,l,2),i!==null&&mn(i,e,2)}function Mu(e){var i=e.alternate;return e===wt||i!==null&&i===wt}function Cp(e,i){ga=Ru=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Dp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,ho(e,a)}}var Vu={readContext:He,use:Cu,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce},Op={readContext:He,use:Cu,useCallback:function(e,i){return Je().memoizedState=[e,i===void 0?null:i],e},useContext:He,useEffect:dp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Nu(4194308,4,yp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Nu(4194308,4,e,i)},useInsertionEffect:function(e,i){Nu(4,2,e,i)},useMemo:function(e,i){var a=Je();i=i===void 0?null:i;var l=e();if(Es){an(!0);try{e()}finally{an(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=Je();if(a!==void 0){var h=a(i);if(Es){an(!0);try{a(i)}finally{an(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=PA.bind(null,wt,e),[l.memoizedState,e]},useRef:function(e){var i=Je();return e={current:e},i.memoizedState=e},useState:function(e){e=ff(e);var i=e.queue,a=Ip.bind(null,wt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(e,i){var a=Je();return gf(a,e,i)},useTransition:function(){var e=ff(!1);return e=Ap.bind(null,wt,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=wt,h=Je();if(Ht){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),te===null)throw Error(s(349));(Ut&124)!==0||Zg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,dp(Jg.bind(null,l,d,e),[e]),l.flags|=2048,ya(9,Ou(),Wg.bind(null,l,d,a,i),null),a},useId:function(){var e=Je(),i=te.identifierPrefix;if(Ht){var a=Ni,l=Oi;a=(l&~(1<<32-qe(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Iu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=CA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:yf,useFormState:lp,useActionState:lp,useOptimistic:function(e){var i=Je();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=_f.bind(null,wt,!0,a),a.dispatch=i,[e,i]},useMemoCache:uf,useCacheRefresh:function(){return Je().memoizedState=VA.bind(null,wt)}},Np={readContext:He,use:Cu,useCallback:vp,useContext:He,useEffect:mp,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:pp,useMemo:Ep,useReducer:Du,useRef:fp,useState:function(){return Du(Pi)},useDebugValue:mf,useDeferredValue:function(e,i){var a=pe();return Tp(a,Xt.memoizedState,e,i)},useTransition:function(){var e=Du(Pi)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Ho(e),i]},useSyncExternalStore:$g,useId:wp,useHostTransitionStatus:yf,useFormState:up,useActionState:up,useOptimistic:function(e,i){var a=pe();return np(a,Xt,e,i)},useMemoCache:uf,useCacheRefresh:Rp},kA={readContext:He,use:Cu,useCallback:vp,useContext:He,useEffect:mp,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:pp,useMemo:Ep,useReducer:hf,useRef:fp,useState:function(){return hf(Pi)},useDebugValue:mf,useDeferredValue:function(e,i){var a=pe();return Xt===null?gf(a,e,i):Tp(a,Xt.memoizedState,e,i)},useTransition:function(){var e=hf(Pi)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Ho(e),i]},useSyncExternalStore:$g,useId:wp,useHostTransitionStatus:yf,useFormState:hp,useActionState:hp,useOptimistic:function(e,i){var a=pe();return Xt!==null?np(a,Xt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:Rp},_a=null,Go=0;function Pu(e){var i=Go;return Go+=1,_a===null&&(_a=[]),Hg(_a,e,i)}function Qo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ku(e,i){throw i.$$typeof===I?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Mp(e){var i=e._init;return i(e._payload)}function Vp(e){function i(P,O){if(e){var U=P.deletions;U===null?(P.deletions=[O],P.flags|=16):U.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=Di(P,O),P.index=0,P.sibling=null,P}function d(P,O,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<O?(P.flags|=67108866,O):U):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function E(P,O,U,G){return O===null||O.tag!==6?(O=Lh(U,P.mode,G),O.return=P,O):(O=h(O,U),O.return=P,O)}function w(P,O,U,G){var st=U.type;return st===$?F(P,O,U.props.children,G,U.key):O!==null&&(O.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===b&&Mp(st)===O.type)?(O=h(O,U.props),Qo(O,U),O.return=P,O):(O=yu(U.type,U.key,U.props,null,P.mode,G),Qo(O,U),O.return=P,O)}function L(P,O,U,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=zh(U,P.mode,G),O.return=P,O):(O=h(O,U.children||[]),O.return=P,O)}function F(P,O,U,G,st){return O===null||O.tag!==7?(O=fs(U,P.mode,G,st),O.return=P,O):(O=h(O,U),O.return=P,O)}function Q(P,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Lh(""+O,P.mode,U),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return U=yu(O.type,O.key,O.props,null,P.mode,U),Qo(U,O),U.return=P,U;case H:return O=zh(O,P.mode,U),O.return=P,O;case b:var G=O._init;return O=G(O._payload),Q(P,O,U)}if(Bt(O)||k(O))return O=fs(O,P.mode,U,null),O.return=P,O;if(typeof O.then=="function")return Q(P,Pu(O),U);if(O.$$typeof===ut)return Q(P,Tu(P,O),U);ku(P,O)}return null}function z(P,O,U,G){var st=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return st!==null?null:E(P,O,""+U,G);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===st?w(P,O,U,G):null;case H:return U.key===st?L(P,O,U,G):null;case b:return st=U._init,U=st(U._payload),z(P,O,U,G)}if(Bt(U)||k(U))return st!==null?null:F(P,O,U,G,null);if(typeof U.then=="function")return z(P,O,Pu(U),G);if(U.$$typeof===ut)return z(P,O,Tu(P,U),G);ku(P,U)}return null}function B(P,O,U,G,st){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return P=P.get(U)||null,E(O,P,""+G,st);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return P=P.get(G.key===null?U:G.key)||null,w(O,P,G,st);case H:return P=P.get(G.key===null?U:G.key)||null,L(O,P,G,st);case b:var Dt=G._init;return G=Dt(G._payload),B(P,O,U,G,st)}if(Bt(G)||k(G))return P=P.get(U)||null,F(O,P,G,st,null);if(typeof G.then=="function")return B(P,O,U,Pu(G),st);if(G.$$typeof===ut)return B(P,O,U,Tu(O,G),st);ku(O,G)}return null}function yt(P,O,U,G){for(var st=null,Dt=null,lt=O,gt=O=0,Ne=null;lt!==null&&gt<U.length;gt++){lt.index>gt?(Ne=lt,lt=null):Ne=lt.sibling;var zt=z(P,lt,U[gt],G);if(zt===null){lt===null&&(lt=Ne);break}e&&lt&&zt.alternate===null&&i(P,lt),O=d(zt,O,gt),Dt===null?st=zt:Dt.sibling=zt,Dt=zt,lt=Ne}if(gt===U.length)return a(P,lt),Ht&&ms(P,gt),st;if(lt===null){for(;gt<U.length;gt++)lt=Q(P,U[gt],G),lt!==null&&(O=d(lt,O,gt),Dt===null?st=lt:Dt.sibling=lt,Dt=lt);return Ht&&ms(P,gt),st}for(lt=l(lt);gt<U.length;gt++)Ne=B(lt,P,gt,U[gt],G),Ne!==null&&(e&&Ne.alternate!==null&&lt.delete(Ne.key===null?gt:Ne.key),O=d(Ne,O,gt),Dt===null?st=Ne:Dt.sibling=Ne,Dt=Ne);return e&&lt.forEach(function(wr){return i(P,wr)}),Ht&&ms(P,gt),st}function mt(P,O,U,G){if(U==null)throw Error(s(151));for(var st=null,Dt=null,lt=O,gt=O=0,Ne=null,zt=U.next();lt!==null&&!zt.done;gt++,zt=U.next()){lt.index>gt?(Ne=lt,lt=null):Ne=lt.sibling;var wr=z(P,lt,zt.value,G);if(wr===null){lt===null&&(lt=Ne);break}e&&lt&&wr.alternate===null&&i(P,lt),O=d(wr,O,gt),Dt===null?st=wr:Dt.sibling=wr,Dt=wr,lt=Ne}if(zt.done)return a(P,lt),Ht&&ms(P,gt),st;if(lt===null){for(;!zt.done;gt++,zt=U.next())zt=Q(P,zt.value,G),zt!==null&&(O=d(zt,O,gt),Dt===null?st=zt:Dt.sibling=zt,Dt=zt);return Ht&&ms(P,gt),st}for(lt=l(lt);!zt.done;gt++,zt=U.next())zt=B(lt,P,gt,zt.value,G),zt!==null&&(e&&zt.alternate!==null&&lt.delete(zt.key===null?gt:zt.key),O=d(zt,O,gt),Dt===null?st=zt:Dt.sibling=zt,Dt=zt);return e&&lt.forEach(function(xS){return i(P,xS)}),Ht&&ms(P,gt),st}function Zt(P,O,U,G){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:t:{for(var st=U.key;O!==null;){if(O.key===st){if(st=U.type,st===$){if(O.tag===7){a(P,O.sibling),G=h(O,U.props.children),G.return=P,P=G;break t}}else if(O.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===b&&Mp(st)===O.type){a(P,O.sibling),G=h(O,U.props),Qo(G,U),G.return=P,P=G;break t}a(P,O);break}else i(P,O);O=O.sibling}U.type===$?(G=fs(U.props.children,P.mode,G,U.key),G.return=P,P=G):(G=yu(U.type,U.key,U.props,null,P.mode,G),Qo(G,U),G.return=P,P=G)}return v(P);case H:t:{for(st=U.key;O!==null;){if(O.key===st)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(P,O.sibling),G=h(O,U.children||[]),G.return=P,P=G;break t}else{a(P,O);break}else i(P,O);O=O.sibling}G=zh(U,P.mode,G),G.return=P,P=G}return v(P);case b:return st=U._init,U=st(U._payload),Zt(P,O,U,G)}if(Bt(U))return yt(P,O,U,G);if(k(U)){if(st=k(U),typeof st!="function")throw Error(s(150));return U=st.call(U),mt(P,O,U,G)}if(typeof U.then=="function")return Zt(P,O,Pu(U),G);if(U.$$typeof===ut)return Zt(P,O,Tu(P,U),G);ku(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(P,O.sibling),G=h(O,U),G.return=P,P=G):(a(P,O),G=Lh(U,P.mode,G),G.return=P,P=G),v(P)):a(P,O)}return function(P,O,U,G){try{Go=0;var st=Zt(P,O,U,G);return _a=null,st}catch(lt){if(lt===xo||lt===Su)throw lt;var Dt=un(29,lt,null,P.mode);return Dt.lanes=G,Dt.return=P,Dt}finally{}}}var va=Vp(!0),Pp=Vp(!1),Rn=X(null),si=null;function cr(e){var i=e.alternate;W(Se,Se.current&1),W(Rn,e),si===null&&(i===null||ma.current!==null||i.memoizedState!==null)&&(si=e)}function kp(e){if(e.tag===22){if(W(Se,Se.current),W(Rn,e),si===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(si=e)}}else hr()}function hr(){W(Se,Se.current),W(Rn,Rn.current)}function ki(e){nt(Rn),si===e&&(si=null),nt(Se)}var Se=X(0);function xu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ld(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function vf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ef={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=dn(),h=or(l);h.payload=i,a!=null&&(h.callback=a),i=lr(e,h,l),i!==null&&(mn(i,e,l),Lo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=dn(),h=or(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=lr(e,h,l),i!==null&&(mn(i,e,l),Lo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=dn(),l=or(a);l.tag=2,i!=null&&(l.callback=i),i=lr(e,l,a),i!==null&&(mn(i,e,a),Lo(i,e,a))}};function xp(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Co(a,l)||!Co(h,d):!0}function Up(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Ef.enqueueReplaceState(i,i.state,null)}function Ts(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Uu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lp(e){Uu(e)}function zp(e){console.error(e)}function Bp(e){Uu(e)}function Lu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function qp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Tf(e,i,a){return a=or(a),a.tag=3,a.payload={element:null},a.callback=function(){Lu(e,i)},a}function Hp(e){return e=or(e),e.tag=3,e}function jp(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){qp(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){qp(i,a,l),typeof h!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function xA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Vo(i,a,h,!0),a=Rn.current,a!==null){switch(a.tag){case 13:return si===null?Gf():a.alternate===null&&le===0&&(le=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Xh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Kf(e,l,h)),!1;case 22:return a.flags|=65536,l===Xh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Kf(e,l,h)),!1}throw Error(s(435,a.tag))}return Kf(e,l,h),Gf(),!1}if(Ht)return i=Rn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Hh&&(e=Error(s(422),{cause:l}),Mo(An(e,a)))):(l!==Hh&&(i=Error(s(423),{cause:l}),Mo(An(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=An(l,a),h=Tf(e.stateNode,l,h),Wh(e,h),le!==4&&(le=2)),!1;var d=Error(s(520),{cause:l});if(d=An(d,a),Jo===null?Jo=[d]:Jo.push(d),le!==4&&(le=2),i===null)return!0;l=An(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Tf(a.stateNode,l,e),Wh(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(yr===null||!yr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Hp(h),jp(h,e,a,l),Wh(a,h),!1}a=a.return}while(a!==null);return!1}var Fp=Error(s(461)),De=!1;function ke(e,i,a,l){i.child=e===null?Pp(i,null,a,l):va(i,e.child,a,l)}function Gp(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return _s(i),l=rf(e,i,a,v,d,h),E=sf(),e!==null&&!De?(af(e,i,h),xi(e,i,h)):(Ht&&E&&Bh(i),i.flags|=1,ke(e,i,l,h),i.child)}function Qp(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Uh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Kp(e,i,d,l,h)):(e=yu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Df(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(v,l)&&e.ref===i.ref)return xi(e,i,h)}return i.flags|=1,e=Di(d,l),e.ref=i.ref,e.return=i,i.child=e}function Kp(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Co(d,l)&&e.ref===i.ref)if(De=!1,i.pendingProps=l=d,Df(e,h))(e.flags&131072)!==0&&(De=!0);else return i.lanes=e.lanes,xi(e,i,h)}return Af(e,i,a,l,h)}function Yp(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Xp(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Au(i,d!==null?d.cachePool:null),d!==null?Kg(i,d):tf(),kp(i);else return i.lanes=i.childLanes=536870912,Xp(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Au(i,d.cachePool),Kg(i,d),hr(),i.memoizedState=null):(e!==null&&Au(i,null),tf(),hr());return ke(e,i,h,a),i.child}function Xp(e,i,a,l){var h=Yh();return h=h===null?null:{parent:Ae._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Au(i,null),tf(),kp(i),e!==null&&Vo(e,i,l,!0),null}function zu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Af(e,i,a,l,h){return _s(i),a=rf(e,i,a,l,void 0,h),l=sf(),e!==null&&!De?(af(e,i,h),xi(e,i,h)):(Ht&&l&&Bh(i),i.flags|=1,ke(e,i,a,h),i.child)}function $p(e,i,a,l,h,d){return _s(i),i.updateQueue=null,a=Xg(i,l,a,h),Yg(e),l=sf(),e!==null&&!De?(af(e,i,d),xi(e,i,d)):(Ht&&l&&Bh(i),i.flags|=1,ke(e,i,a,d),i.child)}function Zp(e,i,a,l,h){if(_s(i),i.stateNode===null){var d=ua,v=a.contextType;typeof v=="object"&&v!==null&&(d=He(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},$h(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?He(v):ua,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(vf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Ef.enqueueReplaceState(d,d.state,null),Bo(i,l,d,h),zo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,w=Ts(a,E);d.props=w;var L=d.context,F=a.contextType;v=ua,typeof F=="object"&&F!==null&&(v=He(F));var Q=a.getDerivedStateFromProps;F=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||L!==v)&&Up(i,d,l,v),ar=!1;var z=i.memoizedState;d.state=z,Bo(i,l,d,h),zo(),L=i.memoizedState,E||z!==L||ar?(typeof Q=="function"&&(vf(i,a,Q,l),L=i.memoizedState),(w=ar||xp(i,a,w,l,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Zh(e,i),v=i.memoizedProps,F=Ts(a,v),d.props=F,Q=i.pendingProps,z=d.context,L=a.contextType,w=ua,typeof L=="object"&&L!==null&&(w=He(L)),E=a.getDerivedStateFromProps,(L=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Q||z!==w)&&Up(i,d,l,w),ar=!1,z=i.memoizedState,d.state=z,Bo(i,l,d,h),zo();var B=i.memoizedState;v!==Q||z!==B||ar||e!==null&&e.dependencies!==null&&Eu(e.dependencies)?(typeof E=="function"&&(vf(i,a,E,l),B=i.memoizedState),(F=ar||xp(i,a,F,l,z,B,w)||e!==null&&e.dependencies!==null&&Eu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=w,l=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,zu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=va(i,e.child,null,h),i.child=va(i,null,a,h)):ke(e,i,a,h),i.memoizedState=d.state,e=i.child):e=xi(e,i,h),e}function Wp(e,i,a,l){return No(),i.flags|=256,ke(e,i,a,l),i.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:zg()}}function wf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=In),e}function Jp(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ht){if(h?cr(i):hr(),Ht){var E=oe,w;if(w=E){t:{for(w=E,E=ri;w.nodeType!==8;){if(!E){E=null;break t}if(w=xn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:ds!==null?{id:Oi,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},w=un(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,We=i,oe=null,w=!0):w=!1}w||ps(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return ld(E)?i.lanes=32:i.lanes=536870912,null;ki(i)}return E=l.children,l=l.fallback,h?(hr(),h=i.mode,E=Bu({mode:"hidden",children:E},h),l=fs(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=bf(a),h.childLanes=wf(e,v,a),i.memoizedState=Sf,l):(cr(i),Rf(i,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(cr(i),i.flags&=-257,i=If(e,i,a)):i.memoizedState!==null?(hr(),i.child=e.child,i.flags|=128,i=null):(hr(),h=l.fallback,E=i.mode,l=Bu({mode:"visible",children:l.children},E),h=fs(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,va(i,e.child,null,a),l=i.child,l.memoizedState=bf(a),l.childLanes=wf(e,v,a),i.memoizedState=Sf,i=h);else if(cr(i),ld(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Mo({value:l,source:null,stack:null}),i=If(e,i,a)}else if(De||Vo(e,i,a,!1),v=(a&e.childLanes)!==0,De||v){if(v=te,v!==null&&(l=a&-a,l=(l&42)!==0?1:Wi(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,la(e,l),mn(v,e,l),Fp;E.data==="$?"||Gf(),i=If(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,oe=xn(E.nextSibling),We=i,Ht=!0,gs=null,ri=!1,e!==null&&(bn[wn++]=Oi,bn[wn++]=Ni,bn[wn++]=ds,Oi=e.id,Ni=e.overflow,ds=i),i=Rf(i,l.children),i.flags|=4096);return i}return h?(hr(),h=l.fallback,E=i.mode,w=e.child,L=w.sibling,l=Di(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=Di(L,h):(h=fs(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=bf(a):(w=E.cachePool,w!==null?(L=Ae._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=zg(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=wf(e,v,a),i.memoizedState=Sf,l):(cr(i),a=e.child,e=a.sibling,a=Di(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Rf(e,i){return i=Bu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Bu(e,i){return e=un(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function If(e,i,a){return va(i,e.child,null,a),e=Rf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function ty(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Fh(e.return,i,a)}function Cf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function ey(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(ke(e,i,l.children,a),l=Se.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ty(e,a,i);else if(e.tag===19)ty(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(W(Se,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&xu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Cf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&xu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Cf(i,!0,a,null,d);break;case"together":Cf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function xi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),pr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Vo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Di(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Di(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Df(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Eu(e)))}function UA(e,i,a){switch(i.tag){case 3:Jt(i,i.stateNode.containerInfo),sr(i,Ae,e.memoizedState.cache),No();break;case 27:case 5:Zi(i);break;case 4:Jt(i,i.stateNode.containerInfo);break;case 10:sr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(cr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Jp(e,i,a):(cr(i),e=xi(e,i,a),e!==null?e.sibling:null);cr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Vo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return ey(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),W(Se,Se.current),l)break;return null;case 22:case 23:return i.lanes=0,Yp(e,i,a);case 24:sr(i,Ae,e.memoizedState.cache)}return xi(e,i,a)}function ny(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)De=!0;else{if(!Df(e,a)&&(i.flags&128)===0)return De=!1,UA(e,i,a);De=(e.flags&131072)!==0}else De=!1,Ht&&(i.flags&1048576)!==0&&Mg(i,vu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Uh(l)?(e=Ts(l,e),i.tag=1,i=Zp(null,i,l,e,a)):(i.tag=0,i=Af(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===Ot){i.tag=11,i=Gp(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=Qp(null,i,l,e,a);break t}}throw i=ct(l)||l,Error(s(306,i,""))}}return i;case 0:return Af(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ts(l,i.pendingProps),Zp(e,i,l,h,a);case 3:t:{if(Jt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Zh(e,i),Bo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,sr(i,Ae,l),l!==d.cache&&Gh(i,[Ae],a,!0),zo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Wp(e,i,l,a);break t}else if(l!==h){h=An(Error(s(424)),i),Mo(h),i=Wp(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=xn(e.firstChild),We=i,Ht=!0,gs=null,ri=!0,a=Pp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(No(),l===h){i=xi(e,i,a);break t}ke(e,i,l,a)}i=i.child}return i;case 26:return zu(e,i),e===null?(a=a_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ht||(a=i.type,e=i.pendingProps,l=tc(Et.current).createElement(a),l[ve]=i,l[de]=e,Ue(l,a,e),ue(l),i.stateNode=l):i.memoizedState=a_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Zi(i),e===null&&Ht&&(l=i.stateNode=i_(i.type,i.pendingProps,Et.current),We=i,ri=!0,h=oe,Er(i.type)?(ud=h,oe=xn(l.firstChild)):oe=h),ke(e,i,i.pendingProps.children,a),zu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ht&&((h=l=oe)&&(l=hS(l,i.type,i.pendingProps,ri),l!==null?(i.stateNode=l,We=i,oe=xn(l.firstChild),ri=!1,h=!0):h=!1),h||ps(i)),Zi(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,sd(h,d)?l=null:v!==null&&sd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=rf(e,i,DA,null,null,a),ll._currentValue=h),zu(e,i),ke(e,i,l,a),i.child;case 6:return e===null&&Ht&&((e=a=oe)&&(a=fS(a,i.pendingProps,ri),a!==null?(i.stateNode=a,We=i,oe=null,e=!0):e=!1),e||ps(i)),null;case 13:return Jp(e,i,a);case 4:return Jt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=va(i,null,l,a):ke(e,i,l,a),i.child;case 11:return Gp(e,i,i.type,i.pendingProps,a);case 7:return ke(e,i,i.pendingProps,a),i.child;case 8:return ke(e,i,i.pendingProps.children,a),i.child;case 12:return ke(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,sr(i,i.type,l.value),ke(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,_s(i),h=He(h),l=l(h),i.flags|=1,ke(e,i,l,a),i.child;case 14:return Qp(e,i,i.type,i.pendingProps,a);case 15:return Kp(e,i,i.type,i.pendingProps,a);case 19:return ey(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Bu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Di(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Yp(e,i,a);case 24:return _s(i),l=He(Ae),e===null?(h=Yh(),h===null&&(h=te,d=Qh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},$h(i),sr(i,Ae,h)):((e.lanes&a)!==0&&(Zh(e,i),Bo(i,null,null,a),zo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),sr(i,Ae,l)):(l=d.cache,sr(i,Ae,l),l!==h.cache&&Gh(i,[Ae],a,!0))),ke(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ui(e){e.flags|=4}function iy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!h_(i)){if(i=Rn.current,i!==null&&((Ut&4194048)===Ut?si!==null:(Ut&62914560)!==Ut&&(Ut&536870912)===0||i!==si))throw Uo=Xh,Bg;e.flags|=8192}}function qu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?uo():536870912,e.lanes|=i,Sa|=i)}function Ko(e,i){if(!Ht)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function LA(e,i,a){var l=i.pendingProps;switch(qh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(i),null;case 1:return re(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Vi(Ae),Qn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Oo(i)?Ui(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kg())),re(i),null;case 26:return a=i.memoizedState,e===null?(Ui(i),a!==null?(re(i),iy(i,a)):(re(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Ui(i),re(i),iy(i,a)):(re(i),i.flags&=-16777217):(e.memoizedProps!==l&&Ui(i),re(i),i.flags&=-16777217),null;case 27:pi(i),a=Et.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ui(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}e=ft.current,Oo(i)?Vg(i):(e=i_(h,l,a),i.stateNode=e,Ui(i))}return re(i),null;case 5:if(pi(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ui(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}if(e=ft.current,Oo(i))Vg(i);else{switch(h=tc(Et.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[ve]=i,e[de]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Ue(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ui(i)}}return re(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ui(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Et.current,Oo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=We,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[ve]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||$y(e.nodeValue,a)),e||ps(i)}else e=tc(e).createTextNode(l),e[ve]=i,i.stateNode=e}return re(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Oo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[ve]=i}else No(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),h=!1}else h=kg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ki(i),i):(ki(i),null)}if(ki(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),qu(i,i.updateQueue),re(i),null;case 4:return Qn(),e===null&&td(i.stateNode.containerInfo),re(i),null;case 10:return Vi(i.type),re(i),null;case 19:if(nt(Se),h=i.memoizedState,h===null)return re(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Ko(h,!1);else{if(le!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=xu(e),d!==null){for(i.flags|=128,Ko(h,!1),e=d.updateQueue,i.updateQueue=e,qu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Ng(a,e),a=a.sibling;return W(Se,Se.current&1|2),i.child}e=e.sibling}h.tail!==null&&pn()>Fu&&(i.flags|=128,l=!0,Ko(h,!1),i.lanes=4194304)}else{if(!l)if(e=xu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,qu(i,e),Ko(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ht)return re(i),null}else 2*pn()-h.renderingStartTime>Fu&&a!==536870912&&(i.flags|=128,l=!0,Ko(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=pn(),i.sibling=null,e=Se.current,W(Se,l?e&1|2:e&1),i):(re(i),null);case 22:case 23:return ki(i),ef(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(re(i),i.subtreeFlags&6&&(i.flags|=8192)):re(i),a=i.updateQueue,a!==null&&qu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&nt(vs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Vi(Ae),re(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function zA(e,i){switch(qh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Vi(Ae),Qn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return pi(i),null;case 13:if(ki(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));No()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(Se),null;case 4:return Qn(),null;case 10:return Vi(i.type),null;case 22:case 23:return ki(i),ef(),e!==null&&nt(vs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Vi(Ae),null;case 25:return null;default:return null}}function ry(e,i){switch(qh(i),i.tag){case 3:Vi(Ae),Qn();break;case 26:case 27:case 5:pi(i);break;case 4:Qn();break;case 13:ki(i);break;case 19:nt(Se);break;case 10:Vi(i.type);break;case 22:case 23:ki(i),ef(),e!==null&&nt(vs);break;case 24:Vi(Ae)}}function Yo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){Wt(i,i.return,E)}}function fr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a,L=E;try{L()}catch(F){Wt(h,w,F)}}}l=l.next}while(l!==d)}}catch(F){Wt(i,i.return,F)}}function sy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Qg(i,a)}catch(l){Wt(e,e.return,l)}}}function ay(e,i,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Wt(e,i,l)}}function Xo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Wt(e,i,h)}}function ai(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Wt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Wt(e,i,h)}else a.current=null}function oy(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Wt(e,e.return,h)}}function Of(e,i,a){try{var l=e.stateNode;aS(l,e.type,a,i),l[de]=i}catch(h){Wt(e,e.return,h)}}function ly(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Er(e.type)||e.tag===4}function Nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ly(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Er(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ju));else if(l!==4&&(l===27&&Er(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Mf(e,i,a),e=e.sibling;e!==null;)Mf(e,i,a),e=e.sibling}function Hu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Er(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hu(e,i,a),e=e.sibling;e!==null;)Hu(e,i,a),e=e.sibling}function uy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ue(i,l,a),i[ve]=e,i[de]=a}catch(d){Wt(e,e.return,d)}}var Li=!1,he=!1,Vf=!1,cy=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function BA(e,i){if(e=e.containerInfo,id=ac,e=Tg(e),Oh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,w=-1,L=0,F=0,Q=e,z=null;e:for(;;){for(var B;Q!==a||h!==0&&Q.nodeType!==3||(E=v+h),Q!==d||l!==0&&Q.nodeType!==3||(w=v+l),Q.nodeType===3&&(v+=Q.nodeValue.length),(B=Q.firstChild)!==null;)z=Q,Q=B;for(;;){if(Q===e)break e;if(z===a&&++L===h&&(E=v),z===d&&++F===l&&(w=v),(B=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=B}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:e,selectionRange:a},ac=!1,Oe=i;Oe!==null;)if(i=Oe,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Oe=e;else for(;Oe!==null;){switch(i=Oe,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var yt=Ts(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(yt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(mt){Wt(a,a.return,mt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)od(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Oe=e;break}Oe=i.return}}function hy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:dr(e,a),l&4&&Yo(5,a);break;case 1:if(dr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Wt(a,a.return,v)}else{var h=Ts(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Wt(a,a.return,v)}}l&64&&sy(a),l&512&&Xo(a,a.return);break;case 3:if(dr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Qg(e,i)}catch(v){Wt(a,a.return,v)}}break;case 27:i===null&&l&4&&uy(a);case 26:case 5:dr(e,a),i===null&&l&4&&oy(a),l&512&&Xo(a,a.return);break;case 12:dr(e,a);break;case 13:dr(e,a),l&4&&my(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=XA.bind(null,a),dS(e,a))));break;case 22:if(l=a.memoizedState!==null||Li,!l){i=i!==null&&i.memoizedState!==null||he,h=Li;var d=he;Li=l,(he=i)&&!d?mr(e,a,(a.subtreeFlags&8772)!==0):dr(e,a),Li=h,he=d}break;case 30:break;default:dr(e,a)}}function fy(e){var i=e.alternate;i!==null&&(e.alternate=null,fy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&er(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ie=null,tn=!1;function zi(e,i,a){for(a=a.child;a!==null;)dy(e,i,a),a=a.sibling}function dy(e,i,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:he||ai(a,i),zi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:he||ai(a,i);var l=ie,h=tn;Er(a.type)&&(ie=a.stateNode,tn=!1),zi(e,i,a),rl(a.stateNode),ie=l,tn=h;break;case 5:he||ai(a,i);case 6:if(l=ie,h=tn,ie=null,zi(e,i,a),ie=l,tn=h,ie!==null)if(tn)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(a.stateNode)}catch(d){Wt(a,i,d)}else try{ie.removeChild(a.stateNode)}catch(d){Wt(a,i,d)}break;case 18:ie!==null&&(tn?(e=ie,e_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fl(e)):e_(ie,a.stateNode));break;case 4:l=ie,h=tn,ie=a.stateNode.containerInfo,tn=!0,zi(e,i,a),ie=l,tn=h;break;case 0:case 11:case 14:case 15:he||fr(2,a,i),he||fr(4,a,i),zi(e,i,a);break;case 1:he||(ai(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ay(a,i,l)),zi(e,i,a);break;case 21:zi(e,i,a);break;case 22:he=(l=he)||a.memoizedState!==null,zi(e,i,a),he=l;break;default:zi(e,i,a)}}function my(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fl(e)}catch(a){Wt(i,i.return,a)}}function qA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new cy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new cy),i;default:throw Error(s(435,e.tag))}}function Pf(e,i){var a=qA(e);i.forEach(function(l){var h=$A.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function cn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Er(E.type)){ie=E.stateNode,tn=!1;break t}break;case 5:ie=E.stateNode,tn=!1;break t;case 3:case 4:ie=E.stateNode.containerInfo,tn=!0;break t}E=E.return}if(ie===null)throw Error(s(160));dy(d,v,h),ie=null,tn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)gy(i,e),i=i.sibling}var kn=null;function gy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:cn(i,e),hn(e),l&4&&(fr(3,e,e.return),Yo(3,e),fr(5,e,e.return));break;case 1:cn(i,e),hn(e),l&512&&(he||a===null||ai(a,a.return)),l&64&&Li&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=kn;if(cn(i,e),hn(e),l&512&&(he||a===null||ai(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[$r]||d[ve]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Ue(d,l,a),d[ve]=e,ue(d),l=d;break t;case"link":var v=u_("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),Ue(d,l,a),h.head.appendChild(d);break;case"meta":if(v=u_("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),Ue(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[ve]=e,ue(d),l=d}e.stateNode=l}else c_(h,e.type,e.stateNode);else e.stateNode=l_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?c_(h,e.type,e.stateNode):l_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Of(e,e.memoizedProps,a.memoizedProps)}break;case 27:cn(i,e),hn(e),l&512&&(he||a===null||ai(a,a.return)),a!==null&&l&4&&Of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(cn(i,e),hn(e),l&512&&(he||a===null||ai(a,a.return)),e.flags&32){h=e.stateNode;try{_n(h,"")}catch(B){Wt(e,e.return,B)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Of(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Vf=!0);break;case 6:if(cn(i,e),hn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){Wt(e,e.return,B)}}break;case 3:if(ic=null,h=kn,kn=ec(i.containerInfo),cn(i,e),kn=h,hn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{fl(i.containerInfo)}catch(B){Wt(e,e.return,B)}Vf&&(Vf=!1,py(e));break;case 4:l=kn,kn=ec(e.stateNode.containerInfo),cn(i,e),hn(e),kn=l;break;case 12:cn(i,e),hn(e);break;case 13:cn(i,e),hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bf=pn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=Li,F=he;if(Li=L||h,he=F||w,cn(i,e),he=F,Li=L,hn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Li||he||As(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=w.stateNode;var Q=w.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Wt(w,w.return,B)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(B){Wt(w,w.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Pf(e,a))));break;case 19:cn(i,e),hn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 30:break;case 21:break;default:cn(i,e),hn(e)}}function hn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(ly(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Nf(e);Hu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(_n(v,""),a.flags&=-33);var E=Nf(e);Hu(e,E,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=Nf(e);Mf(e,L,w);break;default:throw Error(s(161))}}catch(F){Wt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function py(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;py(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function dr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)hy(e,i.alternate,i),i=i.sibling}function As(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:fr(4,i,i.return),As(i);break;case 1:ai(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&ay(i,i.return,a),As(i);break;case 27:rl(i.stateNode);case 26:case 5:ai(i,i.return),As(i);break;case 22:i.memoizedState===null&&As(i);break;case 30:As(i);break;default:As(i)}e=e.sibling}}function mr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:mr(h,d,a),Yo(4,d);break;case 1:if(mr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Wt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)Gg(w[h],E)}catch(L){Wt(l,l.return,L)}}a&&v&64&&sy(d),Xo(d,d.return);break;case 27:uy(d);case 26:case 5:mr(h,d,a),a&&l===null&&v&4&&oy(d),Xo(d,d.return);break;case 12:mr(h,d,a);break;case 13:mr(h,d,a),a&&v&4&&my(h,d);break;case 22:d.memoizedState===null&&mr(h,d,a),Xo(d,d.return);break;case 30:break;default:mr(h,d,a)}i=i.sibling}}function kf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Po(a))}function xf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e))}function oi(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)yy(e,i,a,l),i=i.sibling}function yy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:oi(e,i,a,l),h&2048&&Yo(9,i);break;case 1:oi(e,i,a,l);break;case 3:oi(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e)));break;case 12:if(h&2048){oi(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Wt(i,i.return,w)}}else oi(e,i,a,l);break;case 13:oi(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?oi(e,i,a,l):$o(e,i):d._visibility&2?oi(e,i,a,l):(d._visibility|=2,Ea(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&kf(v,i);break;case 24:oi(e,i,a,l),h&2048&&xf(i.alternate,i);break;default:oi(e,i,a,l)}}function Ea(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,w=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ea(d,v,E,w,h),Yo(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?Ea(d,v,E,w,h):$o(d,v):(F._visibility|=2,Ea(d,v,E,w,h)),h&&L&2048&&kf(v.alternate,v);break;case 24:Ea(d,v,E,w,h),h&&L&2048&&xf(v.alternate,v);break;default:Ea(d,v,E,w,h)}i=i.sibling}}function $o(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:$o(a,l),h&2048&&kf(l.alternate,l);break;case 24:$o(a,l),h&2048&&xf(l.alternate,l);break;default:$o(a,l)}i=i.sibling}}var Zo=8192;function Ta(e){if(e.subtreeFlags&Zo)for(e=e.child;e!==null;)_y(e),e=e.sibling}function _y(e){switch(e.tag){case 26:Ta(e),e.flags&Zo&&e.memoizedState!==null&&RS(kn,e.memoizedState,e.memoizedProps);break;case 5:Ta(e);break;case 3:case 4:var i=kn;kn=ec(e.stateNode.containerInfo),Ta(e),kn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Zo,Zo=16777216,Ta(e),Zo=i):Ta(e));break;default:Ta(e)}}function vy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Wo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Oe=l,Ty(l,e)}vy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ey(e),e=e.sibling}function Ey(e){switch(e.tag){case 0:case 11:case 15:Wo(e),e.flags&2048&&fr(9,e,e.return);break;case 3:Wo(e);break;case 12:Wo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ju(e)):Wo(e);break;default:Wo(e)}}function ju(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Oe=l,Ty(l,e)}vy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:fr(8,i,i.return),ju(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ju(i));break;default:ju(i)}e=e.sibling}}function Ty(e,i){for(;Oe!==null;){var a=Oe;switch(a.tag){case 0:case 11:case 15:fr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Po(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Oe=l;else t:for(a=e;Oe!==null;){l=Oe;var h=l.sibling,d=l.return;if(fy(l),l===a){Oe=null;break t}if(h!==null){h.return=d,Oe=h;break t}Oe=d}}}var HA={getCacheForType:function(e){var i=He(Ae),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},jA=typeof WeakMap=="function"?WeakMap:Map,Qt=0,te=null,Nt=null,Ut=0,Kt=0,fn=null,gr=!1,Aa=!1,Uf=!1,Bi=0,le=0,pr=0,Ss=0,Lf=0,In=0,Sa=0,Jo=null,en=null,zf=!1,Bf=0,Fu=1/0,Gu=null,yr=null,xe=0,_r=null,ba=null,wa=0,qf=0,Hf=null,Ay=null,tl=0,jf=null;function dn(){if((Qt&2)!==0&&Ut!==0)return Ut&-Ut;if(j.T!==null){var e=fa;return e!==0?e:$f()}return Ji()}function Sy(){In===0&&(In=(Ut&536870912)===0||Ht?lo():536870912);var e=Rn.current;return e!==null&&(e.flags|=32),In}function mn(e,i,a){(e===te&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(Ra(e,0),vr(e,Ut,In,!1)),_i(e,a),((Qt&2)===0||e!==te)&&(e===te&&((Qt&2)===0&&(Ss|=a),le===4&&vr(e,Ut,In,!1)),li(e))}function by(e,i,a){if((Qt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Xr(e,i),h=l?QA(e,i):Qf(e,i,!0),d=l;do{if(h===0){Aa&&!l&&vr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!FA(a)){h=Qf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=Jo;var w=E.current.memoizedState.isDehydrated;if(w&&(Ra(E,v).flags|=256),v=Qf(E,v,!1),v!==2){if(Uf&&!w){E.errorRecoveryDisabledLanes|=d,Ss|=d,h=4;break t}d=en,en=h,d!==null&&(en===null?en=d:en.push.apply(en,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ra(e,0),vr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:vr(l,i,In,!gr);break t;case 2:en=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Bf+300-pn(),10<h)){if(vr(l,i,In,!gr),js(l,0,!0)!==0)break t;l.timeoutHandle=Jy(wy.bind(null,l,a,en,Gu,zf,i,In,Ss,Sa,gr,d,2,-0,0),h);break t}wy(l,a,en,Gu,zf,i,In,Ss,Sa,gr,d,0,-0,0)}}break}while(!0);li(e)}function wy(e,i,a,l,h,d,v,E,w,L,F,Q,z,B){if(e.timeoutHandle=-1,Q=i.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(ol={stylesheets:null,count:0,unsuspend:wS},_y(i),Q=IS(),Q!==null)){e.cancelPendingCommit=Q(My.bind(null,e,i,d,a,l,h,v,E,w,F,1,z,B)),vr(e,d,v,!L);return}My(e,i,d,a,l,h,v,E,w)}function FA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!ln(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(e,i,a,l){i&=~Lf,i&=~Ss,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-qe(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Kn(e,a,i)}function Qu(){return(Qt&6)===0?(el(0),!1):!0}function Ff(){if(Nt!==null){if(Kt===0)var e=Nt.return;else e=Nt,Mi=ys=null,of(e),_a=null,Go=0,e=Nt;for(;e!==null;)ry(e.alternate,e),e=e.return;Nt=null}}function Ra(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,lS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ff(),te=e,Nt=a=Di(e.current,null),Ut=i,Kt=0,fn=null,gr=!1,Aa=Xr(e,i),Uf=!1,Sa=In=Lf=Ss=pr=le=0,en=Jo=null,zf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-qe(l),d=1<<h;i|=e[h],l&=~d}return Bi=i,mu(),a}function Ry(e,i){wt=null,j.H=Vu,i===xo||i===Su?(i=jg(),Kt=3):i===Bg?(i=jg(),Kt=4):Kt=i===Fp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fn=i,Nt===null&&(le=1,Lu(e,An(i,e.current)))}function Iy(){var e=j.H;return j.H=Vu,e===null?Vu:e}function Cy(){var e=j.A;return j.A=HA,e}function Gf(){le=4,gr||(Ut&4194048)!==Ut&&Rn.current!==null||(Aa=!0),(pr&134217727)===0&&(Ss&134217727)===0||te===null||vr(te,Ut,In,!1)}function Qf(e,i,a){var l=Qt;Qt|=2;var h=Iy(),d=Cy();(te!==e||Ut!==i)&&(Gu=null,Ra(e,i)),i=!1;var v=le;t:do try{if(Kt!==0&&Nt!==null){var E=Nt,w=fn;switch(Kt){case 8:Ff(),v=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(i=!0);var L=Kt;if(Kt=0,fn=null,Ia(e,E,w,L),a&&Aa){v=0;break t}break;default:L=Kt,Kt=0,fn=null,Ia(e,E,w,L)}}GA(),v=le;break}catch(F){Ry(e,F)}while(!0);return i&&e.shellSuspendCounter++,Mi=ys=null,Qt=l,j.H=h,j.A=d,Nt===null&&(te=null,Ut=0,mu()),v}function GA(){for(;Nt!==null;)Dy(Nt)}function QA(e,i){var a=Qt;Qt|=2;var l=Iy(),h=Cy();te!==e||Ut!==i?(Gu=null,Fu=pn()+500,Ra(e,i)):Aa=Xr(e,i);t:do try{if(Kt!==0&&Nt!==null){i=Nt;var d=fn;e:switch(Kt){case 1:Kt=0,fn=null,Ia(e,i,d,1);break;case 2:case 9:if(qg(d)){Kt=0,fn=null,Oy(i);break}i=function(){Kt!==2&&Kt!==9||te!==e||(Kt=7),li(e)},d.then(i,i);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:qg(d)?(Kt=0,fn=null,Oy(i)):(Kt=0,fn=null,Ia(e,i,d,7));break;case 5:var v=null;switch(Nt.tag){case 26:v=Nt.memoizedState;case 5:case 27:var E=Nt;if(!v||h_(v)){Kt=0,fn=null;var w=E.sibling;if(w!==null)Nt=w;else{var L=E.return;L!==null?(Nt=L,Ku(L)):Nt=null}break e}}Kt=0,fn=null,Ia(e,i,d,5);break;case 6:Kt=0,fn=null,Ia(e,i,d,6);break;case 8:Ff(),le=6;break t;default:throw Error(s(462))}}KA();break}catch(F){Ry(e,F)}while(!0);return Mi=ys=null,j.H=l,j.A=h,Qt=a,Nt!==null?0:(te=null,Ut=0,mu(),le)}function KA(){for(;Nt!==null&&!ro();)Dy(Nt)}function Dy(e){var i=ny(e.alternate,e,Bi);e.memoizedProps=e.pendingProps,i===null?Ku(e):Nt=i}function Oy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=$p(a,i,i.pendingProps,i.type,void 0,Ut);break;case 11:i=$p(a,i,i.pendingProps,i.type.render,i.ref,Ut);break;case 5:of(i);default:ry(a,i),i=Nt=Ng(i,Bi),i=ny(a,i,Bi)}e.memoizedProps=e.pendingProps,i===null?Ku(e):Nt=i}function Ia(e,i,a,l){Mi=ys=null,of(i),_a=null,Go=0;var h=i.return;try{if(xA(e,h,i,a,Ut)){le=1,Lu(e,An(a,e.current)),Nt=null;return}}catch(d){if(h!==null)throw Nt=h,d;le=1,Lu(e,An(a,e.current)),Nt=null;return}i.flags&32768?(Ht||l===1?e=!0:Aa||(Ut&536870912)!==0?e=!1:(gr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Rn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ny(i,e)):Ku(i)}function Ku(e){var i=e;do{if((i.flags&32768)!==0){Ny(i,gr);return}e=i.return;var a=LA(i.alternate,i,Bi);if(a!==null){Nt=a;return}if(i=i.sibling,i!==null){Nt=i;return}Nt=i=e}while(i!==null);le===0&&(le=5)}function Ny(e,i){do{var a=zA(e.alternate,e);if(a!==null){a.flags&=32767,Nt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Nt=e;return}Nt=e=a}while(e!==null);le=6,Nt=null}function My(e,i,a,l,h,d,v,E,w){e.cancelPendingCommit=null;do Yu();while(xe!==0);if((Qt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=kh,co(e,a,d,v,E,w),e===te&&(Nt=te=null,Ut=0),ba=i,_r=e,wa=a,qf=d,Hf=h,Ay=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ZA(Gr,function(){return Uy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,h=tt.p,tt.p=2,v=Qt,Qt|=4;try{BA(e,i,a)}finally{Qt=v,tt.p=h,j.T=l}}xe=1,Vy(),Py(),ky()}}function Vy(){if(xe===1){xe=0;var e=_r,i=ba,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var l=tt.p;tt.p=2;var h=Qt;Qt|=4;try{gy(i,e);var d=rd,v=Tg(e.containerInfo),E=d.focusedElem,w=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Eg(E.ownerDocument.documentElement,E)){if(w!==null&&Oh(E)){var L=w.start,F=w.end;if(F===void 0&&(F=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(F,E.value.length);else{var Q=E.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var B=z.getSelection(),yt=E.textContent.length,mt=Math.min(w.start,yt),Zt=w.end===void 0?mt:Math.min(w.end,yt);!B.extend&&mt>Zt&&(v=Zt,Zt=mt,mt=v);var P=vg(E,mt),O=vg(E,Zt);if(P&&O&&(B.rangeCount!==1||B.anchorNode!==P.node||B.anchorOffset!==P.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var U=Q.createRange();U.setStart(P.node,P.offset),B.removeAllRanges(),mt>Zt?(B.addRange(U),B.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),B.addRange(U))}}}}for(Q=[],B=E;B=B.parentNode;)B.nodeType===1&&Q.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Q.length;E++){var G=Q[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}ac=!!id,rd=id=null}finally{Qt=h,tt.p=l,j.T=a}}e.current=i,xe=2}}function Py(){if(xe===2){xe=0;var e=_r,i=ba,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var l=tt.p;tt.p=2;var h=Qt;Qt|=4;try{hy(e,i.alternate,i)}finally{Qt=h,tt.p=l,j.T=a}}xe=3}}function ky(){if(xe===4||xe===3){xe=0,jl();var e=_r,i=ba,a=wa,l=Ay;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?xe=5:(xe=0,ba=_r=null,xy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(yr=null),Fs(a),i=i.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(ae,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=j.T,h=tt.p,tt.p=2,j.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{j.T=i,tt.p=h}}(wa&3)!==0&&Yu(),li(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===jf?tl++:(tl=0,jf=e):tl=0,el(0)}}function xy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Po(i)))}function Yu(e){return Vy(),Py(),ky(),Uy()}function Uy(){if(xe!==5)return!1;var e=_r,i=qf;qf=0;var a=Fs(wa),l=j.T,h=tt.p;try{tt.p=32>a?32:a,j.T=null,a=Hf,Hf=null;var d=_r,v=wa;if(xe=0,ba=_r=null,wa=0,(Qt&6)!==0)throw Error(s(331));var E=Qt;if(Qt|=4,Ey(d.current),yy(d,d.current,v,a),Qt=E,el(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(ae,d)}catch{}return!0}finally{tt.p=h,j.T=l,xy(e,i)}}function Ly(e,i,a){i=An(a,i),i=Tf(e.stateNode,i,2),e=lr(e,i,2),e!==null&&(_i(e,2),li(e))}function Wt(e,i,a){if(e.tag===3)Ly(e,e,a);else for(;i!==null;){if(i.tag===3){Ly(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yr===null||!yr.has(l))){e=An(a,e),a=Hp(2),l=lr(i,a,2),l!==null&&(jp(a,l,i,e),_i(l,2),li(l));break}}i=i.return}}function Kf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new jA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Uf=!0,h.add(a),e=YA.bind(null,e,i,a),i.then(e,e))}function YA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,te===e&&(Ut&a)===a&&(le===4||le===3&&(Ut&62914560)===Ut&&300>pn()-Bf?(Qt&2)===0&&Ra(e,0):Lf|=a,Sa===Ut&&(Sa=0)),li(e)}function zy(e,i){i===0&&(i=uo()),e=la(e,i),e!==null&&(_i(e,i),li(e))}function XA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),zy(e,a)}function $A(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),zy(e,a)}function ZA(e,i){return jr(e,i)}var Xu=null,Ca=null,Yf=!1,$u=!1,Xf=!1,bs=0;function li(e){e!==Ca&&e.next===null&&(Ca===null?Xu=Ca=e:Ca=Ca.next=e),$u=!0,Yf||(Yf=!0,JA())}function el(e,i){if(!Xf&&$u){Xf=!0;do for(var a=!1,l=Xu;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-qe(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,jy(l,d))}else d=Ut,d=js(l,l===te?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Xr(l,d)||(a=!0,jy(l,d));l=l.next}while(a);Xf=!1}}function WA(){By()}function By(){$u=Yf=!1;var e=0;bs!==0&&(oS()&&(e=bs),bs=0);for(var i=pn(),a=null,l=Xu;l!==null;){var h=l.next,d=qy(l,i);d===0?(l.next=null,a===null?Xu=h:a.next=h,h===null&&(Ca=a)):(a=l,(e!==0||(d&3)!==0)&&($u=!0)),l=h}el(e)}function qy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-qe(d),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&l)!==0)&&(h[v]=oo(E,i)):w<=i&&(e.expiredLanes|=E),d&=~E}if(i=te,a=Ut,a=js(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Fr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Fr(l),Fs(a)){case 2:case 8:a=qs;break;case 32:a=Gr;break;case 268435456:a=Hs;break;default:a=Gr}return l=Hy.bind(null,e),a=jr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Fr(l),e.callbackPriority=2,e.callbackNode=null,2}function Hy(e,i){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yu()&&e.callbackNode!==a)return null;var l=Ut;return l=js(e,e===te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(by(e,l,i),qy(e,pn()),e.callbackNode!=null&&e.callbackNode===a?Hy.bind(null,e):null)}function jy(e,i){if(Yu())return null;by(e,i,!0)}function JA(){uS(function(){(Qt&6)!==0?jr(so,WA):By()})}function $f(){return bs===0&&(bs=lo()),bs}function Fy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$s(""+e)}function Gy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function tS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Fy((h[de]||null).action),v=l.submitter;v&&(i=(i=v[de]||null)?Fy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new Zs("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(bs!==0){var w=v?Gy(h,v):new FormData(h);pf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=v?Gy(h,v):new FormData(h),pf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var Zf=0;Zf<Ph.length;Zf++){var Wf=Ph[Zf],eS=Wf.toLowerCase(),nS=Wf[0].toUpperCase()+Wf.slice(1);Pn(eS,"on"+nS)}Pn(bg,"onAnimationEnd"),Pn(wg,"onAnimationIteration"),Pn(Rg,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(vA,"onTransitionRun"),Pn(EA,"onTransitionStart"),Pn(TA,"onTransitionCancel"),Pn(Ig,"onTransitionEnd"),Ei("onMouseEnter",["mouseout","mouseover"]),Ei("onMouseLeave",["mouseout","mouseover"]),Ei("onPointerEnter",["pointerout","pointerover"]),Ei("onPointerLeave",["pointerout","pointerover"]),Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function Qy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],w=E.instance,L=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Uu(F)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(E=l[v],w=E.instance,L=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Uu(F)}h.currentTarget=null,d=w}}}}function Mt(e,i){var a=i[fo];a===void 0&&(a=i[fo]=new Set);var l=e+"__bubble";a.has(l)||(Ky(i,e,2,!1),a.add(l))}function Jf(e,i,a){var l=0;i&&(l|=4),Ky(a,e,l,i)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function td(e){if(!e[Zu]){e[Zu]=!0,mo.forEach(function(a){a!=="selectionchange"&&(iS.has(a)||Jf(a,!1,e),Jf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Zu]||(i[Zu]=!0,Jf("selectionchange",!1,i))}}function Ky(e,i,a,l){switch(y_(i)){case 2:var h=OS;break;case 8:h=NS;break;default:h=md}a=h.bind(null,i,a,e),h=void 0,!En||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function ed(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=vi(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}E=E.parentNode}}l=l.return}Jl(function(){var L=d,F=vn(a),Q=[];t:{var z=Cg.get(e);if(z!==void 0){var B=Zs,yt=e;switch(e){case"keypress":if(Jn(a)===0)break t;case"keydown":case"keyup":B=ia;break;case"focusin":yt="focus",B=ta;break;case"focusout":yt="blur",B=ta;break;case"beforeblur":case"afterblur":B=ta;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Tn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=ou;break;case bg:case wg:case Rg:B=ea;break;case Ig:B=uu;break;case"scroll":case"scrollend":B=tu;break;case"wheel":B=ra;break;case"copy":case"cut":case"paste":B=na;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Ro;break;case"toggle":case"beforetoggle":B=hu}var mt=(i&4)!==0,Zt=!mt&&(e==="scroll"||e==="scrollend"),P=mt?z!==null?z+"Capture":null:z;mt=[];for(var O=L,U;O!==null;){var G=O;if(U=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||U===null||P===null||(G=is(O,P),G!=null&&mt.push(il(O,G,U))),Zt)break;O=O.return}0<mt.length&&(z=new B(z,yt,null,a,F),Q.push({event:z,listeners:mt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==Si&&(yt=a.relatedTarget||a.fromElement)&&(vi(yt)||yt[yn]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(yt=a.relatedTarget||a.toElement,B=L,yt=yt?vi(yt):null,yt!==null&&(Zt=c(yt),mt=yt.tag,yt!==Zt||mt!==5&&mt!==27&&mt!==6)&&(yt=null)):(B=null,yt=L),B!==yt)){if(mt=Tn,G="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(mt=Ro,G="onPointerLeave",P="onPointerEnter",O="pointer"),Zt=B==null?z:Xn(B),U=yt==null?z:Xn(yt),z=new mt(G,O+"leave",B,a,F),z.target=Zt,z.relatedTarget=U,G=null,vi(F)===L&&(mt=new mt(P,O+"enter",yt,a,F),mt.target=U,mt.relatedTarget=Zt,G=mt),Zt=G,B&&yt)e:{for(mt=B,P=yt,O=0,U=mt;U;U=Da(U))O++;for(U=0,G=P;G;G=Da(G))U++;for(;0<O-U;)mt=Da(mt),O--;for(;0<U-O;)P=Da(P),U--;for(;O--;){if(mt===P||P!==null&&mt===P.alternate)break e;mt=Da(mt),P=Da(P)}mt=null}else mt=null;B!==null&&Yy(Q,z,B,mt,!1),yt!==null&&Zt!==null&&Yy(Q,Zt,yt,mt,!0)}}t:{if(z=L?Xn(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var st=dg;else if(Te(z))if(mg)st=pA;else{st=mA;var Dt=dA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&vo(L.elementType)&&(st=dg):st=gA;if(st&&(st=st(e,L))){Ci(Q,st,a,F);break t}Dt&&Dt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&ir(z,"number",z.value)}switch(Dt=L?Xn(L):window,e){case"focusin":(Te(Dt)||Dt.contentEditable==="true")&&(sa=Dt,Nh=L,Do=null);break;case"focusout":Do=Nh=sa=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,Ag(Q,a,F);break;case"selectionchange":if(_A)break;case"keydown":case"keyup":Ag(Q,a,F)}var lt;if(ni)t:{switch(e){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else kt?q(e,a)&&(gt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(_&&a.locale!=="ko"&&(kt||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&kt&&(lt=To()):(Wn=F,rr="value"in Wn?Wn.value:Wn.textContent,kt=!0)),Dt=Wu(L,gt),0<Dt.length&&(gt=new bo(gt,e,null,a,F),Q.push({event:gt,listeners:Dt}),lt?gt.data=lt:(lt=J(a),lt!==null&&(gt.data=lt)))),(lt=m?Ee(e,a):xt(e,a))&&(gt=Wu(L,"onBeforeInput"),0<gt.length&&(Dt=new bo("onBeforeInput","beforeinput",null,a,F),Q.push({event:Dt,listeners:gt}),Dt.data=lt)),tS(Q,e,L,a,F)}Qy(Q,i)})}function il(e,i,a){return{instance:e,listener:i,currentTarget:a}}function Wu(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=is(e,a),h!=null&&l.unshift(il(e,h,d)),h=is(e,i),h!=null&&l.push(il(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Da(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yy(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,w=E.alternate,L=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||L===null||(w=L,h?(L=is(a,d),L!=null&&v.unshift(il(a,L,w))):h||(L=is(a,d),L!=null&&v.push(il(a,L,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var rS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function Xy(e){return(typeof e=="string"?e:""+e).replace(rS,`
`).replace(sS,"")}function $y(e,i){return i=Xy(i),Xy(e)===i}function Ju(){}function $t(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||_n(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&_n(e,""+l);break;case"className":$n(e,"class",l);break;case"tabIndex":$n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,l);break;case"style":_o(e,l,d);break;case"data":if(i!=="object"){$n(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$s(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&$t(e,i,"name",h.name,h,null),$t(e,i,"formEncType",h.formEncType,h,null),$t(e,i,"formMethod",h.formMethod,h,null),$t(e,i,"formTarget",h.formTarget,h,null)):($t(e,i,"encType",h.encType,h,null),$t(e,i,"method",h.method,h,null),$t(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$s(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ju);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=$s(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),nr(e,"popover",l);break;case"xlinkActuate":Ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ve(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ve(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ve(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ve(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":nr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bh.get(a)||a,nr(e,a,l))}}function nd(e,i,a,l,h,d){switch(a){case"style":_o(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?_n(e,l):(typeof l=="number"||typeof l=="bigint")&&_n(e,""+l);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[de]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):nr(e,a,l)}}}function Ue(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$t(e,i,d,v,a,null)}}h&&$t(e,i,"srcSet",a.srcSet,a,null),l&&$t(e,i,"src",a.src,a,null);return;case"input":Mt("invalid",e);var E=d=v=h=null,w=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":w=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:$t(e,i,l,F,a,null)}}ts(e,d,E,w,L,v,h,!1),Xs(e);return;case"select":Mt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:$t(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ai(e,!!l,i,!1):a!=null&&Ai(e,!!l,a,!0);return;case"textarea":Mt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:$t(e,i,v,E,a,null)}es(e,l,h,d),Xs(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(e,i,w,l,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(l=0;l<nl.length;l++)Mt(nl[l],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$t(e,i,L,l,a,null)}return;default:if(vo(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&nd(e,i,F,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&$t(e,i,E,l,a,null))}function aS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,w=null,L=null,F=null;for(B in a){var Q=a[B];if(a.hasOwnProperty(B)&&Q!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=Q;default:l.hasOwnProperty(B)||$t(e,i,B,null,l,Q)}}for(var z in l){var B=l[z];if(Q=a[z],l.hasOwnProperty(z)&&(B!=null||Q!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==Q&&$t(e,i,z,B,l,Q)}}on(e,v,E,w,L,F,d,h);return;case"select":B=v=E=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":B=w;default:l.hasOwnProperty(d)||$t(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==w&&$t(e,i,h,d,l,w)}i=E,a=v,l=B,z!=null?Ai(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ai(e,!!a,i,!0):Ai(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:$t(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$t(e,i,v,h,l,d)}Yt(e,z,B);return;case"option":for(var yt in a)if(z=a[yt],a.hasOwnProperty(yt)&&z!=null&&!l.hasOwnProperty(yt))switch(yt){case"selected":e.selected=!1;break;default:$t(e,i,yt,null,l,z)}for(w in l)if(z=l[w],B=a[w],l.hasOwnProperty(w)&&z!==B&&(z!=null||B!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:$t(e,i,w,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)z=a[mt],a.hasOwnProperty(mt)&&z!=null&&!l.hasOwnProperty(mt)&&$t(e,i,mt,null,l,z);for(L in l)if(z=l[L],B=a[L],l.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:$t(e,i,L,z,l,B)}return;default:if(vo(i)){for(var Zt in a)z=a[Zt],a.hasOwnProperty(Zt)&&z!==void 0&&!l.hasOwnProperty(Zt)&&nd(e,i,Zt,void 0,l,z);for(F in l)z=l[F],B=a[F],!l.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||nd(e,i,F,z,l,B);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&$t(e,i,P,null,l,z);for(Q in l)z=l[Q],B=a[Q],!l.hasOwnProperty(Q)||z===B||z==null&&B==null||$t(e,i,Q,z,l,B)}var id=null,rd=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function Zy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function sd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ad=null;function oS(){var e=window.event;return e&&e.type==="popstate"?e===ad?!1:(ad=e,!0):(ad=null,!1)}var Jy=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,t_=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof t_<"u"?function(e){return t_.resolve(null).then(e).catch(cS)}:Jy;function cS(e){setTimeout(function(){throw e})}function Er(e){return e==="head"}function e_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&rl(v.documentElement),a&2&&rl(v.body),a&4)for(a=v.head,rl(a),v=a.firstChild;v;){var E=v.nextSibling,w=v.nodeName;v[$r]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),fl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);fl(i)}function od(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":od(a),er(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[$r])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=xn(e.nextSibling),e===null)break}return null}function fS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xn(e.nextSibling),e===null))return null;return e}function ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function dS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function xn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var ud=null;function n_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function i_(e,i,a){switch(i=tc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function rl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);er(e)}var Cn=new Map,r_=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=tt.d;tt.d={f:mS,r:gS,D:pS,C:yS,L:_S,m:vS,X:TS,S:ES,M:AS};function mS(){var e=qi.f(),i=Qu();return e||i}function gS(e){var i=Yn(e);i!==null&&i.tag===5&&i.type==="form"?bp(i):qi.r(e)}var Oa=typeof document>"u"?null:document;function s_(e,i,a){var l=Oa;if(l&&typeof i=="string"&&i){var h=me(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),r_.has(h)||(r_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ue(i,"link",e),ue(i),l.head.appendChild(i)))}}function pS(e){qi.D(e),s_("dns-prefetch",e,null)}function yS(e,i){qi.C(e,i),s_("preconnect",e,i)}function _S(e,i,a){qi.L(e,i,a);var l=Oa;if(l&&e&&i){var h='link[rel="preload"][as="'+me(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+me(a.imageSizes)+'"]')):h+='[href="'+me(e)+'"]';var d=h;switch(i){case"style":d=Na(e);break;case"script":d=Ma(e)}Cn.has(d)||(e=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Cn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(sl(d))||i==="script"&&l.querySelector(al(d))||(i=l.createElement("link"),Ue(i,"link",e),ue(i),l.head.appendChild(i)))}}function vS(e,i){qi.m(e,i);var a=Oa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+me(l)+'"][href="'+me(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ma(e)}if(!Cn.has(d)&&(e=T({rel:"modulepreload",href:e},i),Cn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(d)))return}l=a.createElement("link"),Ue(l,"link",e),ue(l),a.head.appendChild(l)}}}function ES(e,i,a){qi.S(e,i,a);var l=Oa;if(l&&e){var h=Xe(l).hoistableStyles,d=Na(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(sl(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Cn.get(d))&&cd(e,a);var w=v=l.createElement("link");ue(w),Ue(w,"link",e),w._p=new Promise(function(L,F){w.onload=L,w.onerror=F}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,nc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function TS(e,i){qi.X(e,i);var a=Oa;if(a&&e){var l=Xe(a).hoistableScripts,h=Ma(e),d=l.get(h);d||(d=a.querySelector(al(h)),d||(e=T({src:e,async:!0},i),(i=Cn.get(h))&&hd(e,i),d=a.createElement("script"),ue(d),Ue(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function AS(e,i){qi.M(e,i);var a=Oa;if(a&&e){var l=Xe(a).hoistableScripts,h=Ma(e),d=l.get(h);d||(d=a.querySelector(al(h)),d||(e=T({src:e,async:!0,type:"module"},i),(i=Cn.get(h))&&hd(e,i),d=a.createElement("script"),ue(d),Ue(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function a_(e,i,a,l){var h=(h=Et.current)?ec(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Na(a.href),a=Xe(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Na(a.href);var d=Xe(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(sl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Cn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Cn.set(e,a),d||SS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ma(a),a=Xe(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Na(e){return'href="'+me(e)+'"'}function sl(e){return'link[rel="stylesheet"]['+e+"]"}function o_(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function SS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ue(i,"link",a),ue(i),e.head.appendChild(i))}function Ma(e){return'[src="'+me(e)+'"]'}function al(e){return"script[async]"+e}function l_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+me(a.href)+'"]');if(l)return i.instance=l,ue(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ue(l),Ue(l,"style",h),nc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Na(a.href);var d=e.querySelector(sl(h));if(d)return i.state.loading|=4,i.instance=d,ue(d),d;l=o_(a),(h=Cn.get(h))&&cd(l,h),d=(e.ownerDocument||e).createElement("link"),ue(d);var v=d;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),Ue(d,"link",l),i.state.loading|=4,nc(d,a.precedence,e),i.instance=d;case"script":return d=Ma(a.src),(h=e.querySelector(al(d)))?(i.instance=h,ue(h),h):(l=a,(h=Cn.get(d))&&(l=T({},a),hd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ue(h),Ue(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,nc(l,a.precedence,e));return i.instance}function nc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function hd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ic=null;function u_(e,i,a){if(ic===null){var l=new Map,h=ic=new Map;h.set(a,l)}else h=ic,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[$r]||d[ve]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function c_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function bS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function h_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ol=null;function wS(){}function RS(e,i,a){if(ol===null)throw Error(s(475));var l=ol;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Na(a.href),d=e.querySelector(sl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=rc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ue(d);return}d=e.ownerDocument||e,a=o_(a),(h=Cn.get(h))&&cd(a,h),d=d.createElement("link"),ue(d);var v=d;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),Ue(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=rc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function IS(){if(ol===null)throw Error(s(475));var e=ol;return e.stylesheets&&e.count===0&&fd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&fd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function rc(){if(this.count--,this.count===0){if(this.stylesheets)fd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function fd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,i.forEach(CS,e),sc=null,rc.call(e))}function CS(e,i){if(!(i.state.loading&4)){var a=sc.get(e);if(a)var l=a.get(null);else{a=new Map,sc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=rc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ll={$$typeof:ut,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function DS(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function f_(e,i,a,l,h,d,v,E,w,L,F,Q){return e=new DS(e,i,a,v,E,w,L,Q),i=1,d===!0&&(i|=24),d=un(3,null,null,i),e.current=d,d.stateNode=e,i=Qh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},$h(d),e}function d_(e){return e?(e=ua,e):ua}function m_(e,i,a,l,h,d){h=d_(h),l.context===null?l.context=h:l.pendingContext=h,l=or(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=lr(e,l,i),a!==null&&(mn(a,e,i),Lo(a,e,i))}function g_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function dd(e,i){g_(e,i),(e=e.alternate)&&g_(e,i)}function p_(e){if(e.tag===13){var i=la(e,67108864);i!==null&&mn(i,e,67108864),dd(e,67108864)}}var ac=!0;function OS(e,i,a,l){var h=j.T;j.T=null;var d=tt.p;try{tt.p=2,md(e,i,a,l)}finally{tt.p=d,j.T=h}}function NS(e,i,a,l){var h=j.T;j.T=null;var d=tt.p;try{tt.p=8,md(e,i,a,l)}finally{tt.p=d,j.T=h}}function md(e,i,a,l){if(ac){var h=gd(l);if(h===null)ed(e,i,l,oc,a),__(e,l);else if(VS(h,e,i,a,l))l.stopPropagation();else if(__(e,l),i&4&&-1<MS.indexOf(e)){for(;h!==null;){var d=Yn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Nn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-qe(v);E.entanglements[1]|=w,v&=~w}li(d),(Qt&6)===0&&(Fu=pn()+500,el(0))}}break;case 13:E=la(d,2),E!==null&&mn(E,d,2),Qu(),dd(d,2)}if(d=gd(l),d===null&&ed(e,i,l,oc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else ed(e,i,l,null,a)}}function gd(e){return e=vn(e),pd(e)}var oc=null;function pd(e){if(oc=null,e=vi(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return oc=e,null}function y_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_h()){case so:return 2;case qs:return 8;case Gr:case vh:return 32;case Hs:return 268435456;default:return 32}default:return 32}}var yd=!1,Tr=null,Ar=null,Sr=null,ul=new Map,cl=new Map,br=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,i){switch(e){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":ul.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(i.pointerId)}}function hl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Yn(i),i!==null&&p_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function VS(e,i,a,l,h){switch(i){case"focusin":return Tr=hl(Tr,e,i,a,l,h),!0;case"dragenter":return Ar=hl(Ar,e,i,a,l,h),!0;case"mouseover":return Sr=hl(Sr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return ul.set(d,hl(ul.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,cl.set(d,hl(cl.get(d)||null,e,i,a,l,h)),!0}return!1}function v_(e){var i=vi(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Ql(e.priority,function(){if(a.tag===13){var l=dn();l=Wi(l);var h=la(a,l);h!==null&&mn(h,a,l),dd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=gd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Si=l,a.target.dispatchEvent(l),Si=null}else return i=Yn(a),i!==null&&p_(i),e.blockedOn=a,!1;i.shift()}return!0}function E_(e,i,a){lc(e)&&a.delete(i)}function PS(){yd=!1,Tr!==null&&lc(Tr)&&(Tr=null),Ar!==null&&lc(Ar)&&(Ar=null),Sr!==null&&lc(Sr)&&(Sr=null),ul.forEach(E_),cl.forEach(E_)}function uc(e,i){e.blockedOn===i&&(e.blockedOn=null,yd||(yd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PS)))}var cc=null;function T_(e){cc!==e&&(cc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cc===e&&(cc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(pd(l||a)===null)continue;break}var d=Yn(a);d!==null&&(e.splice(i,3),i-=3,pf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function fl(e){function i(w){return uc(w,e)}Tr!==null&&uc(Tr,e),Ar!==null&&uc(Ar,e),Sr!==null&&uc(Sr,e),ul.forEach(i),cl.forEach(i);for(var a=0;a<br.length;a++){var l=br[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<br.length&&(a=br[0],a.blockedOn===null);)v_(a),a.blockedOn===null&&br.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[de]||null;if(typeof d=="function")v||T_(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[de]||null)E=v.formAction;else if(pd(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),T_(a)}}}function _d(e){this._internalRoot=e}hc.prototype.render=_d.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=dn();m_(a,l,e,i,null,null)},hc.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;m_(e.current,2,null,e,null,null),Qu(),i[yn]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ji();e={blockedOn:null,target:e,priority:i};for(var a=0;a<br.length&&i!==0&&i<br[a].priority;a++);br.splice(a,0,e),a===0&&v_(e)}};var A_=t.version;if(A_!=="19.1.0")throw Error(s(527,A_,"19.1.0"));tt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var kS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{ae=fc.inject(kS),Gt=fc}catch{}}return dl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Lp,d=zp,v=Bp,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=f_(e,1,!1,null,null,a,l,h,d,v,E,null),e[yn]=i.current,td(e),new _d(i)},dl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Lp,v=zp,E=Bp,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=f_(e,1,!0,i,a??null,l,h,d,v,E,w,L),i.context=d_(null),a=i.current,l=dn(),l=Wi(l),h=or(l),h.callback=null,lr(a,h,l),a=l,i.current.lanes=a,_i(i,a),li(i),e[yn]=i.current,td(e),new hc(i)},dl.version="19.1.0",dl}var O_;function FS(){if(O_)return Ed.exports;O_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ed.exports=jS(),Ed.exports}var GS=FS();const QS=()=>{};var N_={};/**
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
 */const gE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},KS=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];t[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],f=r[n++],g=r[n++],p=((o&7)<<18|(c&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return t.join("")},pE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,g=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,T=c>>2,I=(c&3)<<4|g>>4;let C=(g&15)<<2|y>>6,H=y&63;p||(H=64,f||(C=64)),s.push(n[T],n[I],n[C],n[H])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(gE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):KS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],g=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const I=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||g==null||y==null||I==null)throw new YS;const C=c<<2|g>>4;if(s.push(C),y!==64){const H=g<<4&240|y>>2;if(s.push(H),I!==64){const $=y<<6&192|I;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class YS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XS=function(r){const t=gE(r);return pE.encodeByteArray(t,!0)},Oc=function(r){return XS(r).replace(/\./g,"")},yE=function(r){try{return pE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function $S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZS=()=>$S().__FIREBASE_DEFAULTS__,WS=()=>{if(typeof process>"u"||typeof N_>"u")return;const r=N_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},JS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&yE(r[1]);return t&&JSON.parse(t)},Wc=()=>{try{return QS()||ZS()||WS()||JS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_E=r=>{var t,n;return(n=(t=Wc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},tb=r=>{const t=_E(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},vE=()=>{var r;return(r=Wc())===null||r===void 0?void 0:r.config},EE=r=>{var t;return(t=Wc())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class eb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Xa(r){return r.endsWith(".cloudworkstations.dev")}async function TE(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function nb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Oc(JSON.stringify(n)),Oc(JSON.stringify(f)),""].join(".")}const vl={};function ib(){const r={prod:[],emulator:[]};for(const t of Object.keys(vl))vl[t]?r.emulator.push(t):r.prod.push(t);return r}function rb(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let M_=!1;function AE(r,t){if(typeof window>"u"||typeof document>"u"||!Xa(window.location.host)||vl[r]===t||vl[r]||M_)return;vl[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",c=ib().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function g(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function p(C,H){C.setAttribute("width","24"),C.setAttribute("id",H),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function y(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{M_=!0,f()},C}function T(C,H){C.setAttribute("id",H),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function I(){const C=rb(s),H=n("text"),$=document.getElementById(H)||document.createElement("span"),et=n("learnmore"),Z=document.getElementById(et)||document.createElement("a"),St=n("preprendIcon"),dt=document.getElementById(St)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ut=C.element;g(ut),T(Z,et);const Ot=y();p(dt,St),ut.append(dt,$,Z,Ot),document.body.appendChild(ut)}c?($.innerText="Preview backend disconnected.",dt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function ab(){var r;const t=(r=Wc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ob(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function lb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ub(){const r=Ke();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function cb(){return!ab()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bE(){try{return typeof indexedDB=="object"}catch{return!1}}function wE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){t(n)}})}function hb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const fb="FirebaseError";class Gn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=fb,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,c=this.errors[t],f=c?db(c,s):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new Gn(o,g,s)}}function db(r,t){return r.replace(mb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const mb=/\{\$([^}]+)}/g;function gb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function kr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const c=r[o],f=t[o];if(V_(c)&&V_(f)){if(!kr(c,f))return!1}else if(c!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function V_(r){return r!==null&&typeof r=="object"}/**
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
 */function Pl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function pb(r,t){const n=new yb(r,t);return n.subscribe.bind(n)}class yb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");_b(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=bd),o.error===void 0&&(o.error=bd),o.complete===void 0&&(o.complete=bd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _b(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function bd(){}/**
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
 */const vb=1e3,Eb=2,Tb=4*60*60*1e3,Ab=.5;function P_(r,t=vb,n=Eb){const s=t*Math.pow(n,r),o=Math.round(Ab*s*(Math.random()-.5)*2);return Math.min(Tb,s+o)}/**
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
 */function Ye(r){return r&&r._delegate?r._delegate:r}class jn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ws="[DEFAULT]";/**
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
 */class Sb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new eb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),o=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wb(t))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(t=ws){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ws){return this.instances.has(t)}getOptions(t=ws){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(o,c);const f=this.instances.get(o);return f&&t(f,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ws){return this.component?this.component.multipleInstances?t:ws:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bb(r){return r===ws?void 0:r}function wb(r){return r.instantiationMode==="EAGER"}/**
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
 */class Rb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Sb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Vt||(Vt={}));const Ib={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},Cb=Vt.INFO,Db={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},Ob=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Db[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Jc{constructor(t){this.name=t,this._logLevel=Cb,this._logHandler=Ob,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ib[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const Nb=(r,t)=>t.some(n=>r instanceof n);let k_,x_;function Mb(){return k_||(k_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vb(){return x_||(x_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RE=new WeakMap,zd=new WeakMap,IE=new WeakMap,wd=new WeakMap,fm=new WeakMap;function Pb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(Nr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&RE.set(n,r)}).catch(()=>{}),fm.set(t,r),t}function kb(r){if(zd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});zd.set(r,t)}let Bd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return zd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||IE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function xb(r){Bd=r(Bd)}function Ub(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Rd(this),t,...n);return IE.set(s,t.sort?t.sort():[t]),Nr(s)}:Vb().includes(r)?function(...t){return r.apply(Rd(this),t),Nr(RE.get(this))}:function(...t){return Nr(r.apply(Rd(this),t))}}function Lb(r){return typeof r=="function"?Ub(r):(r instanceof IDBTransaction&&kb(r),Nb(r,Mb())?new Proxy(r,Bd):r)}function Nr(r){if(r instanceof IDBRequest)return Pb(r);if(wd.has(r))return wd.get(r);const t=Lb(r);return t!==r&&(wd.set(r,t),fm.set(t,r)),t}const Rd=r=>fm.get(r);function CE(r,t,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const f=indexedDB.open(r,t),g=Nr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Nr(f.result),p.oldVersion,p.newVersion,Nr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const zb=["get","getKey","getAll","getAllKeys","count"],Bb=["put","add","delete","clear"],Id=new Map;function U_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Id.get(t))return Id.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=Bb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||zb.includes(n)))return;const c=async function(f,...g){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),o&&p.done]))[0]};return Id.set(t,c),c}xb(r=>({...r,get:(t,n,s)=>U_(t,n)||r.get(t,n,s),has:(t,n)=>!!U_(t,n)||r.has(t,n)}));/**
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
 */class qb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hb(r){const t=r.getComponent();return t?.type==="VERSION"}const qd="@firebase/app",L_="0.13.1";/**
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
 */const Qi=new Jc("@firebase/app"),jb="@firebase/app-compat",Fb="@firebase/analytics-compat",Gb="@firebase/analytics",Qb="@firebase/app-check-compat",Kb="@firebase/app-check",Yb="@firebase/auth",Xb="@firebase/auth-compat",$b="@firebase/database",Zb="@firebase/data-connect",Wb="@firebase/database-compat",Jb="@firebase/functions",t1="@firebase/functions-compat",e1="@firebase/installations",n1="@firebase/installations-compat",i1="@firebase/messaging",r1="@firebase/messaging-compat",s1="@firebase/performance",a1="@firebase/performance-compat",o1="@firebase/remote-config",l1="@firebase/remote-config-compat",u1="@firebase/storage",c1="@firebase/storage-compat",h1="@firebase/firestore",f1="@firebase/ai",d1="@firebase/firestore-compat",m1="firebase",g1="11.9.0";/**
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
 */const Hd="[DEFAULT]",p1={[qd]:"fire-core",[jb]:"fire-core-compat",[Gb]:"fire-analytics",[Fb]:"fire-analytics-compat",[Kb]:"fire-app-check",[Qb]:"fire-app-check-compat",[Yb]:"fire-auth",[Xb]:"fire-auth-compat",[$b]:"fire-rtdb",[Zb]:"fire-data-connect",[Wb]:"fire-rtdb-compat",[Jb]:"fire-fn",[t1]:"fire-fn-compat",[e1]:"fire-iid",[n1]:"fire-iid-compat",[i1]:"fire-fcm",[r1]:"fire-fcm-compat",[s1]:"fire-perf",[a1]:"fire-perf-compat",[o1]:"fire-rc",[l1]:"fire-rc-compat",[u1]:"fire-gcs",[c1]:"fire-gcs-compat",[h1]:"fire-fst",[d1]:"fire-fst-compat",[f1]:"fire-vertex","fire-js":"fire-js",[m1]:"fire-js-all"};/**
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
 */const Nc=new Map,y1=new Map,jd=new Map;function z_(r,t){try{r.container.addComponent(t)}catch(n){Qi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function di(r){const t=r.name;if(jd.has(t))return Qi.debug(`There were multiple attempts to register component ${t}.`),!1;jd.set(t,r);for(const n of Nc.values())z_(n,r);for(const n of y1.values())z_(n,r);return!0}function xs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Ln(r){return r==null?!1:r.settings!==void 0}/**
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
 */const _1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new ks("app","Firebase",_1);/**
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
 */class v1{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
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
 */const $a=g1;function DE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Hd,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw Mr.create("bad-app-name",{appName:String(o)});if(n||(n=vE()),!n)throw Mr.create("no-options");const c=Nc.get(o);if(c){if(kr(n,c.options)&&kr(s,c.config))return c;throw Mr.create("duplicate-app",{appName:o})}const f=new Rb(o);for(const p of jd.values())f.addComponent(p);const g=new v1(n,s,f);return Nc.set(o,g),g}function dm(r=Hd){const t=Nc.get(r);if(!t&&r===Hd&&vE())return DE();if(!t)throw Mr.create("no-app",{appName:r});return t}function On(r,t,n){var s;let o=(s=p1[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const c=o.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const g=[`Unable to register library "${o}" with version "${t}":`];c&&g.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qi.warn(g.join(" "));return}di(new jn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const E1="firebase-heartbeat-database",T1=1,Rl="firebase-heartbeat-store";let Cd=null;function OE(){return Cd||(Cd=CE(E1,T1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Rl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Mr.create("idb-open",{originalErrorMessage:r.message})})),Cd}async function A1(r){try{const n=(await OE()).transaction(Rl),s=await n.objectStore(Rl).get(NE(r));return await n.done,s}catch(t){if(t instanceof Gn)Qi.warn(t.message);else{const n=Mr.create("idb-get",{originalErrorMessage:t?.message});Qi.warn(n.message)}}}async function B_(r,t){try{const s=(await OE()).transaction(Rl,"readwrite");await s.objectStore(Rl).put(t,NE(r)),await s.done}catch(n){if(n instanceof Gn)Qi.warn(n.message);else{const s=Mr.create("idb-set",{originalErrorMessage:n?.message});Qi.warn(s.message)}}}function NE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const S1=1024,b1=30;class w1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new I1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=q_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>b1){const f=C1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=q_(),{heartbeatsToSend:s,unsentEntries:o}=R1(this._heartbeatsCache.heartbeats),c=Oc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Qi.warn(n),""}}}function q_(){return new Date().toISOString().substring(0,10)}function R1(r,t=S1){const n=[];let s=r.slice();for(const o of r){const c=n.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),H_(n)>t){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),H_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class I1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bE()?wE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return B_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return B_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function H_(r){return Oc(JSON.stringify({version:2,heartbeats:r})).length}function C1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function D1(r){di(new jn("platform-logger",t=>new qb(t),"PRIVATE")),di(new jn("heartbeat",t=>new w1(t),"PRIVATE")),On(qd,L_,r),On(qd,L_,"esm2017"),On("fire-js","")}D1("");var O1="firebase",N1="11.9.1";/**
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
 */On(O1,N1,"app");const ME="@firebase/installations",mm="0.6.17";/**
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
 */const VE=1e4,PE=`w:${mm}`,kE="FIS_v2",M1="https://firebaseinstallations.googleapis.com/v1",V1=60*60*1e3,P1="installations",k1="Installations";/**
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
 */const x1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Os=new ks(P1,k1,x1);function xE(r){return r instanceof Gn&&r.code.includes("request-failed")}/**
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
 */function UE({projectId:r}){return`${M1}/projects/${r}/installations`}function LE(r){return{token:r.token,requestStatus:2,expiresIn:L1(r.expiresIn),creationTime:Date.now()}}async function zE(r,t){const s=(await t.json()).error;return Os.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function BE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function U1(r,{refreshToken:t}){const n=BE(r);return n.append("Authorization",z1(t)),n}async function qE(r){const t=await r();return t.status>=500&&t.status<600?r():t}function L1(r){return Number(r.replace("s","000"))}function z1(r){return`${kE} ${r}`}/**
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
 */async function B1({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=UE(r),o=BE(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:kE,appId:r.appId,sdkVersion:PE},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await qE(()=>fetch(s,g));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:LE(y.authToken)}}else throw await zE("Create Installation",p)}/**
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
 */function HE(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function q1(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const H1=/^[cdef][\w-]{21}$/,Fd="";function j1(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=F1(r);return H1.test(n)?n:Fd}catch{return Fd}}function F1(r){return q1(r).substr(0,22)}/**
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
 */function th(r){return`${r.appName}!${r.appId}`}/**
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
 */const jE=new Map;function FE(r,t){const n=th(r);GE(n,t),G1(n,t)}function GE(r,t){const n=jE.get(r);if(n)for(const s of n)s(t)}function G1(r,t){const n=Q1();n&&n.postMessage({key:r,fid:t}),K1()}let Rs=null;function Q1(){return!Rs&&"BroadcastChannel"in self&&(Rs=new BroadcastChannel("[Firebase] FID Change"),Rs.onmessage=r=>{GE(r.data.key,r.data.fid)}),Rs}function K1(){jE.size===0&&Rs&&(Rs.close(),Rs=null)}/**
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
 */const Y1="firebase-installations-database",X1=1,Ns="firebase-installations-store";let Dd=null;function gm(){return Dd||(Dd=CE(Y1,X1,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ns)}}})),Dd}async function Mc(r,t){const n=th(r),o=(await gm()).transaction(Ns,"readwrite"),c=o.objectStore(Ns),f=await c.get(n);return await c.put(t,n),await o.done,(!f||f.fid!==t.fid)&&FE(r,t.fid),t}async function QE(r){const t=th(r),s=(await gm()).transaction(Ns,"readwrite");await s.objectStore(Ns).delete(t),await s.done}async function eh(r,t){const n=th(r),o=(await gm()).transaction(Ns,"readwrite"),c=o.objectStore(Ns),f=await c.get(n),g=t(f);return g===void 0?await c.delete(n):await c.put(g,n),await o.done,g&&(!f||f.fid!==g.fid)&&FE(r,g.fid),g}/**
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
 */async function pm(r){let t;const n=await eh(r.appConfig,s=>{const o=$1(s),c=Z1(r,o);return t=c.registrationPromise,c.installationEntry});return n.fid===Fd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function $1(r){const t=r||{fid:j1(),registrationStatus:0};return KE(t)}function Z1(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Os.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=W1(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:J1(r)}:{installationEntry:t}}async function W1(r,t){try{const n=await B1(r,t);return Mc(r.appConfig,n)}catch(n){throw xE(n)&&n.customData.serverCode===409?await QE(r.appConfig):await Mc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function J1(r){let t=await j_(r.appConfig);for(;t.registrationStatus===1;)await HE(100),t=await j_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await pm(r);return s||n}return t}function j_(r){return eh(r,t=>{if(!t)throw Os.create("installation-not-found");return KE(t)})}function KE(r){return tw(r)?{fid:r.fid,registrationStatus:0}:r}function tw(r){return r.registrationStatus===1&&r.registrationTime+VE<Date.now()}/**
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
 */async function ew({appConfig:r,heartbeatServiceProvider:t},n){const s=nw(r,n),o=U1(r,n),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:PE,appId:r.appId}},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await qE(()=>fetch(s,g));if(p.ok){const y=await p.json();return LE(y)}else throw await zE("Generate Auth Token",p)}function nw(r,{fid:t}){return`${UE(r)}/${t}/authTokens:generate`}/**
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
 */async function ym(r,t=!1){let n;const s=await eh(r.appConfig,c=>{if(!YE(c))throw Os.create("not-registered");const f=c.authToken;if(!t&&sw(f))return c;if(f.requestStatus===1)return n=iw(r,t),c;{if(!navigator.onLine)throw Os.create("app-offline");const g=ow(c);return n=rw(r,g),g}});return n?await n:s.authToken}async function iw(r,t){let n=await F_(r.appConfig);for(;n.authToken.requestStatus===1;)await HE(100),n=await F_(r.appConfig);const s=n.authToken;return s.requestStatus===0?ym(r,t):s}function F_(r){return eh(r,t=>{if(!YE(t))throw Os.create("not-registered");const n=t.authToken;return lw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function rw(r,t){try{const n=await ew(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Mc(r.appConfig,s),n}catch(n){if(xE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await QE(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Mc(r.appConfig,s)}throw n}}function YE(r){return r!==void 0&&r.registrationStatus===2}function sw(r){return r.requestStatus===2&&!aw(r)}function aw(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+V1}function ow(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function lw(r){return r.requestStatus===1&&r.requestTime+VE<Date.now()}/**
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
 */async function uw(r){const t=r,{installationEntry:n,registrationPromise:s}=await pm(t);return s?s.catch(console.error):ym(t).catch(console.error),n.fid}/**
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
 */async function cw(r,t=!1){const n=r;return await hw(n),(await ym(n,t)).token}async function hw(r){const{registrationPromise:t}=await pm(r);t&&await t}/**
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
 */function fw(r){if(!r||!r.options)throw Od("App Configuration");if(!r.name)throw Od("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Od(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Od(r){return Os.create("missing-app-config-values",{valueName:r})}/**
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
 */const XE="installations",dw="installations-internal",mw=r=>{const t=r.getProvider("app").getImmediate(),n=fw(t),s=xs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},gw=r=>{const t=r.getProvider("app").getImmediate(),n=xs(t,XE).getImmediate();return{getId:()=>uw(n),getToken:o=>cw(n,o)}};function pw(){di(new jn(XE,mw,"PUBLIC")),di(new jn(dw,gw,"PRIVATE"))}pw();On(ME,mm);On(ME,mm,"esm2017");/**
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
 */const Vc="analytics",yw="firebase_id",_w="origin",vw=60*1e3,Ew="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_m="https://www.googletagmanager.com/gtag/js";/**
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
 */const rn=new Jc("@firebase/analytics");/**
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
 */const Tw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new ks("analytics","Analytics",Tw);/**
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
 */function Aw(r){if(!r.startsWith(_m)){const t=gn.create("invalid-gtag-resource",{gtagURL:r});return rn.warn(t.message),""}return r}function $E(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function Sw(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function bw(r,t){const n=Sw("firebase-js-sdk-policy",{createScriptURL:Aw}),s=document.createElement("script"),o=`${_m}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function ww(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Rw(r,t,n,s,o,c){const f=s[o];try{if(f)await t[f];else{const p=(await $E(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(g){rn.error(g)}r("config",o,c)}async function Iw(r,t,n,s,o){try{let c=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const g=await $E(n);for(const p of f){const y=g.find(I=>I.measurementId===p),T=y&&t[y.appId];if(T)c.push(T);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,o||{})}catch(c){rn.error(c)}}function Cw(r,t,n,s){async function o(c,...f){try{if(c==="event"){const[g,p]=f;await Iw(r,t,n,g,p)}else if(c==="config"){const[g,p]=f;await Rw(r,t,n,s,g,p)}else if(c==="consent"){const[g,p]=f;r("consent",g,p)}else if(c==="get"){const[g,p,y]=f;r("get",g,p,y)}else if(c==="set"){const[g]=f;r("set",g)}else r(c,...f)}catch(g){rn.error(g)}}return o}function Dw(r,t,n,s,o){let c=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=Cw(c,r,t,n),{gtagCore:c,wrappedGtag:window[o]}}function Ow(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(_m)&&n.src.includes(r))return n;return null}/**
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
 */const Nw=30,Mw=1e3;class Vw{constructor(t={},n=Mw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ZE=new Vw;function Pw(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function kw(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:Pw(s)},c=Ew.replace("{app-id}",n),f=await fetch(c,o);if(f.status!==200&&f.status!==304){let g="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function xw(r,t=ZE,n){const{appId:s,apiKey:o,measurementId:c}=r.options;if(!s)throw gn.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:s};throw gn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new zw;return setTimeout(async()=>{g.abort()},vw),WE({appId:s,apiKey:o,measurementId:c},f,g,t)}async function WE(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=ZE){var c;const{appId:f,measurementId:g}=r;try{await Uw(s,t)}catch(p){if(g)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:f,measurementId:g};throw p}try{const p=await kw(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!Lw(y)){if(o.deleteThrottleMetadata(f),g)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:f,measurementId:g};throw p}const T=Number((c=y?.customData)===null||c===void 0?void 0:c.httpStatus)===503?P_(n,o.intervalMillis,Nw):P_(n,o.intervalMillis),I={throttleEndTimeMillis:Date.now()+T,backoffCount:n+1};return o.setThrottleMetadata(f,I),rn.debug(`Calling attemptFetch again in ${T} millis`),WE(r,I,s,o)}}function Uw(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),c=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(c),s(gn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Lw(r){if(!(r instanceof Gn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class zw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Bw(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",n,f)}}/**
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
 */async function qw(){if(bE())try{await wE()}catch(r){return rn.warn(gn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return rn.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hw(r,t,n,s,o,c,f){var g;const p=xw(r);p.then(H=>{n[H.measurementId]=H.appId,r.options.measurementId&&H.measurementId!==r.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${H.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(H=>rn.error(H)),t.push(p);const y=qw().then(H=>{if(H)return s.getId()}),[T,I]=await Promise.all([p,y]);Ow(c)||bw(c,T.measurementId),o("js",new Date);const C=(g=f?.config)!==null&&g!==void 0?g:{};return C[_w]="firebase",C.update=!0,I!=null&&(C[yw]=I),o("config",T.measurementId,C),T.measurementId}/**
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
 */class jw{constructor(t){this.app=t}_delete(){return delete El[this.app.options.appId],Promise.resolve()}}let El={},G_=[];const Q_={};let Nd="dataLayer",Fw="gtag",K_,JE,Y_=!1;function Gw(){const r=[];if(SE()&&r.push("This is a browser extension environment."),hb()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=gn.create("invalid-analytics-context",{errorInfo:t});rn.warn(n.message)}}function Qw(r,t,n){Gw();const s=r.options.appId;if(!s)throw gn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(El[s]!=null)throw gn.create("already-exists",{id:s});if(!Y_){ww(Nd);const{wrappedGtag:c,gtagCore:f}=Dw(El,G_,Q_,Nd,Fw);JE=c,K_=f,Y_=!0}return El[s]=Hw(r,G_,Q_,t,K_,Nd,n),new jw(r)}function Kw(r=dm()){r=Ye(r);const t=xs(r,Vc);return t.isInitialized()?t.getImmediate():Yw(r)}function Yw(r,t={}){const n=xs(r,Vc);if(n.isInitialized()){const o=n.getImmediate();if(kr(t,n.getOptions()))return o;throw gn.create("already-initialized")}return n.initialize({options:t})}function Xw(r,t,n,s){r=Ye(r),Bw(JE,El[r.app.options.appId],t,n,s).catch(o=>rn.error(o))}const X_="@firebase/analytics",$_="0.10.16";function $w(){di(new jn(Vc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return Qw(s,o,n)},"PUBLIC")),di(new jn("analytics-internal",r,"PRIVATE")),On(X_,$_),On(X_,$_,"esm2017");function r(t){try{const n=t.getProvider(Vc).getImmediate();return{logEvent:(s,o,c)=>Xw(n,s,o,c)}}catch(n){throw gn.create("interop-component-reg-failed",{reason:n})}}}$w();function vm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function t0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zw=t0,e0=new ks("auth","Firebase",t0());/**
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
 */const Pc=new Jc("@firebase/auth");function Ww(r,...t){Pc.logLevel<=Vt.WARN&&Pc.warn(`Auth (${$a}): ${r}`,...t)}function vc(r,...t){Pc.logLevel<=Vt.ERROR&&Pc.error(`Auth (${$a}): ${r}`,...t)}/**
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
 */function mi(r,...t){throw Tm(r,...t)}function qn(r,...t){return Tm(r,...t)}function Em(r,t,n){const s=Object.assign(Object.assign({},Zw()),{[t]:n});return new ks("auth","Firebase",s).create(t,{appName:r.name})}function Ds(r){return Em(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jw(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&mi(r,"argument-error"),Em(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return e0.create(r,...t)}function vt(r,t,...n){if(!r)throw Tm(t,...n)}function ji(r){const t="INTERNAL ASSERTION FAILED: "+r;throw vc(t),new Error(t)}function Ki(r,t){r||ji(t)}/**
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
 */function Gd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function tR(){return Z_()==="http:"||Z_()==="https:"}function Z_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function eR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tR()||SE()||"connection"in navigator)?navigator.onLine:!0}function nR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class kl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ki(n>t,"Short delay should be less than long delay!"),this.isMobile=sb()||lb()}get(){return eR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Am(r,t){Ki(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class n0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sR=new kl(3e4,6e4);function Sm(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Za(r,t,n,s,o={}){return i0(r,o,async()=>{let c={},f={};s&&(t==="GET"?f=s:c={body:JSON.stringify(s)});const g=Pl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},c);return ob()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Xa(r.emulatorConfig.host)&&(y.credentials="include"),n0.fetch()(await r0(r,r.config.apiHost,n,g),y)})}async function i0(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},iR),t);try{const o=new oR(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw dc(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const g=c.ok?f.errorMessage:f.error.message,[p,y]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw dc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw dc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw dc(r,"user-disabled",f);const T=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Em(r,T,y);mi(r,T)}}catch(o){if(o instanceof Gn)throw o;mi(r,"network-request-failed",{message:String(o)})}}async function aR(r,t,n,s,o={}){const c=await Za(r,t,n,s,o);return"mfaPendingCredential"in c&&mi(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function r0(r,t,n,s){const o=`${t}${n}?${s}`,c=r,f=c.config.emulator?Am(r.config,o):`${r.config.apiScheme}://${o}`;return rR.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}class oR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qn(this.auth,"network-request-failed")),sR.get())})}}function dc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=qn(r,t,s);return o.customData._tokenResponse=n,o}/**
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
 */async function lR(r,t){return Za(r,"POST","/v1/accounts:delete",t)}async function kc(r,t){return Za(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Tl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function uR(r,t=!1){const n=Ye(r),s=await n.getIdToken(t),o=bm(s);vt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c?.sign_in_provider;return{claims:o,token:s,authTime:Tl(Md(o.auth_time)),issuedAtTime:Tl(Md(o.iat)),expirationTime:Tl(Md(o.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Md(r){return Number(r)*1e3}function bm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return vc("JWT malformed, contained fewer than 3 sections"),null;try{const o=yE(n);return o?JSON.parse(o):(vc("Failed to decode base64 JWT payload"),null)}catch(o){return vc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function W_(r){const t=bm(r);return vt(t,"internal-error"),vt(typeof t.exp<"u","internal-error"),vt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Il(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Gn&&cR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function cR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class hR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tl(this.lastLoginAt),this.creationTime=Tl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Il(r,kc(n,{idToken:s}));vt(o?.users.length,n,"internal-error");const c=o.users[0];r._notifyReloadListener(c);const f=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?s0(c.providerUserInfo):[],g=dR(r.providerData,f),p=r.isAnonymous,y=!(r.email&&c.passwordHash)&&!g?.length,T=p?y:!1,I={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Qd(c.createdAt,c.lastLoginAt),isAnonymous:T};Object.assign(r,I)}async function fR(r){const t=Ye(r);await xc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function dR(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function s0(r){return r.map(t=>{var{providerId:n}=t,s=vm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function mR(r,t){const n=await i0(r,{},async()=>{const s=Pl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,f=await r0(r,o,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:g,body:s};return r.emulatorConfig&&Xa(r.emulatorConfig.host)&&(p.credentials="include"),n0.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gR(r,t){return Za(r,"POST","/v2/accounts:revokeToken",Sm(r,t))}/**
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
 */class Ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){vt(t.idToken,"internal-error"),vt(typeof t.idToken<"u","internal-error"),vt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):W_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){vt(t.length!==0,"internal-error");const n=W_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(vt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await mR(t,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,f=new Ua;return s&&(vt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(vt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),c&&(vt(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ua,this.toJSON())}_performRefresh(){return ji("not implemented")}}/**
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
 */function Rr(r,t){vt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class zn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,c=vm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Qd(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const n=await Il(this,this.stsTokenManager.getToken(this.auth,t));return vt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return uR(this,t)}reload(){return fR(this)}_assign(t){this!==t&&(vt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new zn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){vt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await xc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(Ds(this.auth));const t=await this.getIdToken();return await Il(this,lR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,c,f,g,p,y,T;const I=(s=n.displayName)!==null&&s!==void 0?s:void 0,C=(o=n.email)!==null&&o!==void 0?o:void 0,H=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,$=(f=n.photoURL)!==null&&f!==void 0?f:void 0,et=(g=n.tenantId)!==null&&g!==void 0?g:void 0,Z=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,St=(y=n.createdAt)!==null&&y!==void 0?y:void 0,dt=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ut,emailVerified:Ot,isAnonymous:_t,providerData:It,stsTokenManager:M}=n;vt(ut&&M,t,"internal-error");const b=Ua.fromJSON(this.name,M);vt(typeof ut=="string",t,"internal-error"),Rr(I,t.name),Rr(C,t.name),vt(typeof Ot=="boolean",t,"internal-error"),vt(typeof _t=="boolean",t,"internal-error"),Rr(H,t.name),Rr($,t.name),Rr(et,t.name),Rr(Z,t.name),Rr(St,t.name),Rr(dt,t.name);const R=new zn({uid:ut,auth:t,email:C,emailVerified:Ot,displayName:I,isAnonymous:_t,photoURL:$,phoneNumber:H,tenantId:et,stsTokenManager:b,createdAt:St,lastLoginAt:dt});return It&&Array.isArray(It)&&(R.providerData=It.map(N=>Object.assign({},N))),Z&&(R._redirectEventId=Z),R}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ua;o.updateFromServerResponse(n);const c=new zn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await xc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];vt(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?s0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!c?.length,g=new Ua;g.updateFromIdToken(s);const p=new zn({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Qd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(p,y),p}}/**
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
 */const J_=new Map;function Fi(r){Ki(r instanceof Function,"Expected a class definition");let t=J_.get(r);return t?(Ki(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,J_.set(r,t),t)}/**
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
 */class a0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}a0.type="NONE";const tv=a0;/**
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
 */function Ec(r,t,n){return`firebase:${r}:${t}:${n}`}class La{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=Ec(this.userKey,o.apiKey,c),this.fullPersistenceKey=Ec("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await kc(this.auth,{idToken:t}).catch(()=>{});return n?zn._fromGetAccountInfoResponse(this.auth,n,t):null}return zn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new La(Fi(tv),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||Fi(tv);const f=Ec(s,t.config.apiKey,t.name);let g=null;for(const y of n)try{const T=await y._get(f);if(T){let I;if(typeof T=="string"){const C=await kc(t,{idToken:T}).catch(()=>{});if(!C)break;I=await zn._fromGetAccountInfoResponse(t,C,T)}else I=zn._fromJSON(t,T);y!==c&&(g=I),c=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new La(c,t,s):(c=p[0],g&&await c._set(f,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new La(c,t,s))}}/**
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
 */function ev(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(c0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(o0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(f0(t))return"Blackberry";if(d0(t))return"Webos";if(l0(t))return"Safari";if((t.includes("chrome/")||u0(t))&&!t.includes("edge/"))return"Chrome";if(h0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function o0(r=Ke()){return/firefox\//i.test(r)}function l0(r=Ke()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function u0(r=Ke()){return/crios\//i.test(r)}function c0(r=Ke()){return/iemobile/i.test(r)}function h0(r=Ke()){return/android/i.test(r)}function f0(r=Ke()){return/blackberry/i.test(r)}function d0(r=Ke()){return/webos/i.test(r)}function wm(r=Ke()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function pR(r=Ke()){var t;return wm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function yR(){return ub()&&document.documentMode===10}function m0(r=Ke()){return wm(r)||h0(r)||d0(r)||f0(r)||/windows phone/i.test(r)||c0(r)}/**
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
 */function g0(r,t=[]){let n;switch(r){case"Browser":n=ev(Ke());break;case"Worker":n=`${ev(Ke())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$a}/${s}`}/**
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
 */class _R{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((f,g)=>{try{const p=t(c);f(p)}catch(p){g(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function vR(r,t={}){return Za(r,"GET","/v2/passwordPolicy",Sm(r,t))}/**
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
 */const ER=6;class TR{constructor(t){var n,s,o,c;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:ER,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,c,f,g;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(g=p.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class AR{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nv(this),this.idTokenSubscription=new nv(this),this.beforeStateQueue=new _R(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Fi(n)),this._initializationPromise=this.queue(async()=>{var s,o,c;if(!this._deleted&&(this.persistenceManager=await La.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await kc(this,{idToken:t}),s=await zn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ln(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=o?._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===g)&&p?.user&&(o=p.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return vt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await xc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=nR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ln(this.app))return Promise.reject(Ds(this));const n=t?Ye(t):null;return n&&vt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&vt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(Ds(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ln(this.app)?Promise.reject(Ds(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vR(this),n=new TR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ks("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await gR(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Fi(t)||this._popupRedirectResolver;vt(n,this,"argument-error"),this.redirectPersistenceManager=await La.create(this,[Fi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(vt(g,this,"internal-error"),g.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return vt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=g0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&Ww(`Error while retrieving App Check token: ${n.error}`),n?.token}}function nh(r){return Ye(r)}class nv{constructor(t){this.auth=t,this.observer=null,this.addObserver=pb(n=>this.observer=n)}get next(){return vt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SR(r){Rm=r}function bR(r){return Rm.loadJS(r)}function wR(){return Rm.gapiScript}function RR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function IR(r,t){const n=xs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(kr(c,t??{}))return o;mi(o,"already-initialized")}return n.initialize({options:t})}function CR(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Fi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function DR(r,t,n){const s=nh(r);vt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,c=p0(t),{host:f,port:g}=OR(t),p=g===null?"":`:${g}`,y={url:`${c}//${f}${p}/`},T=Object.freeze({host:f,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){vt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),vt(kr(y,s.config.emulator)&&kr(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Xa(f)?(TE(`${c}//${f}${p}`),AE("Auth",!0)):NR()}function p0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function OR(r){const t=p0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:iv(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:iv(f)}}}function iv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function NR(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class y0{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ji("not implemented")}_getIdTokenResponse(t){return ji("not implemented")}_linkToIdToken(t,n){return ji("not implemented")}_getReauthenticationResolver(t){return ji("not implemented")}}/**
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
 */async function za(r,t){return aR(r,"POST","/v1/accounts:signInWithIdp",Sm(r,t))}/**
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
 */const MR="http://localhost";class Ms extends y0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ms(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):mi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,c=vm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Ms(s,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return za(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,za(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,za(t,n)}buildRequest(){const t={requestUri:MR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Pl(n)}return t}}/**
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
 */class xl extends Im{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ir extends xl{constructor(){super("facebook.com")}static credential(t){return Ms._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ir.credential(t.oauthAccessToken)}catch{return null}}}Ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ir.PROVIDER_ID="facebook.com";/**
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
 */class Hi extends xl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ms._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Hi.credentialFromTaggedObject(t)}static credentialFromError(t){return Hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Hi.credential(n,s)}catch{return null}}}Hi.GOOGLE_SIGN_IN_METHOD="google.com";Hi.PROVIDER_ID="google.com";/**
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
 */class Cr extends xl{constructor(){super("github.com")}static credential(t){return Ms._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cr.credentialFromTaggedObject(t)}static credentialFromError(t){return Cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Cr.credential(t.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
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
 */class Dr extends xl{constructor(){super("twitter.com")}static credential(t,n){return Ms._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Dr.credential(n,s)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
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
 */class qa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const c=await zn._fromIdTokenResponse(t,s,o),f=rv(s);return new qa({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=rv(s);return new qa({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function rv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Uc extends Gn{constructor(t,n,s,o){var c;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Uc(t,n,s,o)}}function _0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(r,c,t,s):c})}async function VR(r,t,n=!1){const s=await Il(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return qa._forOperation(r,"link",s)}/**
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
 */async function PR(r,t,n=!1){const{auth:s}=r;if(Ln(s.app))return Promise.reject(Ds(s));const o="reauthenticate";try{const c=await Il(r,_0(s,o,t,r),n);vt(c.idToken,s,"internal-error");const f=bm(c.idToken);vt(f,s,"internal-error");const{sub:g}=f;return vt(r.uid===g,s,"user-mismatch"),qa._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&mi(s,"user-mismatch"),c}}/**
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
 */async function kR(r,t,n=!1){if(Ln(r.app))return Promise.reject(Ds(r));const s="signIn",o=await _0(r,s,t),c=await qa._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}function xR(r,t,n,s){return Ye(r).onIdTokenChanged(t,n,s)}function UR(r,t,n){return Ye(r).beforeAuthStateChanged(t,n)}function LR(r,t,n,s){return Ye(r).onAuthStateChanged(t,n,s)}function zR(r){return Ye(r).signOut()}const Lc="__sak";/**
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
 */class v0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BR=1e3,qR=10;class E0 extends v0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=m0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);yR()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,qR):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},BR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}E0.type="LOCAL";const HR=E0;/**
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
 */class T0 extends v0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}T0.type="SESSION";const A0=T0;/**
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
 */function jR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ih{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new ih(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:c}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(f).map(async y=>y(n.origin,c)),p=await jR(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ih.receivers=[];/**
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
 */class FR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((g,p)=>{const y=Cm("",20);o.port1.start();const T=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(I){const C=I;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(T),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(C.data.response);break;default:clearTimeout(T),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function ci(){return window}function GR(r){ci().location.href=r}/**
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
 */function S0(){return typeof ci().WorkerGlobalScope<"u"&&typeof ci().importScripts=="function"}async function QR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KR(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function YR(){return S0()?self:null}/**
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
 */const b0="firebaseLocalStorageDb",XR=1,zc="firebaseLocalStorage",w0="fbase_key";class Ul{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rh(r,t){return r.transaction([zc],t?"readwrite":"readonly").objectStore(zc)}function $R(){const r=indexedDB.deleteDatabase(b0);return new Ul(r).toPromise()}function Kd(){const r=indexedDB.open(b0,XR);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(zc,{keyPath:w0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(zc)?t(s):(s.close(),await $R(),t(await Kd()))})})}async function sv(r,t,n){const s=rh(r,!0).put({[w0]:t,value:n});return new Ul(s).toPromise()}async function ZR(r,t){const n=rh(r,!1).get(t),s=await new Ul(n).toPromise();return s===void 0?null:s.value}function av(r,t){const n=rh(r,!0).delete(t);return new Ul(n).toPromise()}const WR=800,JR=3;class R0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>JR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ih._getInstance(YR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await QR(),!this.activeServiceWorker)return;this.sender=new FR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||KR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kd();return await sv(t,Lc,"1"),await av(t,Lc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>ZR(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>av(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=rh(o,!1).getAll();return new Ul(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R0.type="LOCAL";const tI=R0;new kl(3e4,6e4);/**
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
 */function I0(r,t){return t?Fi(t):(vt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Dm extends y0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return za(t,this._buildIdpRequest())}_linkToIdToken(t,n){return za(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return za(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function eI(r){return kR(r.auth,new Dm(r),r.bypassAuthState)}function nI(r){const{auth:t,user:n}=r;return vt(n,t,"internal-error"),PR(n,new Dm(r),r.bypassAuthState)}async function iI(r){const{auth:t,user:n}=r;return vt(n,t,"internal-error"),VR(n,new Dm(r),r.bypassAuthState)}/**
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
 */class C0{constructor(t,n,s,o,c=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:f,type:g}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return eI;case"linkViaPopup":case"linkViaRedirect":return iI;case"reauthViaPopup":case"reauthViaRedirect":return nI;default:mi(this.auth,"internal-error")}}resolve(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rI=new kl(2e3,1e4);async function sI(r,t,n){if(Ln(r.app))return Promise.reject(qn(r,"operation-not-supported-in-this-environment"));const s=nh(r);Jw(r,t,Im);const o=I0(s,n);return new Is(s,"signInViaPopup",t,o).executeNotNull()}class Is extends C0{constructor(t,n,s,o,c){super(t,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return vt(t,this.auth,"internal-error"),t}async onExecution(){Ki(this.filter.length===1,"Popup operations only handle one event");const t=Cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,rI.get())};t()}}Is.currentPopupAction=null;/**
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
 */const aI="pendingRedirect",Tc=new Map;class oI extends C0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Tc.get(this.auth._key());if(!t){try{const s=await lI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Tc.set(this.auth._key(),t)}return this.bypassAuthState||Tc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lI(r,t){const n=hI(t),s=cI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function uI(r,t){Tc.set(r._key(),t)}function cI(r){return Fi(r._redirectPersistence)}function hI(r){return Ec(aI,r.config.apiKey,r.name)}async function fI(r,t,n=!1){if(Ln(r.app))return Promise.reject(Ds(r));const s=nh(r),o=I0(s,t),f=await new oI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const dI=10*60*1e3;class mI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!gI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!D0(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ov(t))}saveEventToCache(t){this.cachedEventUids.add(ov(t)),this.lastProcessedEventTime=Date.now()}}function ov(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function D0({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function gI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D0(r);default:return!1}}/**
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
 */async function pI(r,t={}){return Za(r,"GET","/v1/projects",t)}/**
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
 */const yI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_I=/^https?/;async function vI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await pI(r);for(const n of t)try{if(EI(n))return}catch{}mi(r,"unauthorized-domain")}function EI(r){const t=Gd(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!_I.test(n))return!1;if(yI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const TI=new kl(3e4,6e4);function lv(){const r=ci().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function AI(r){return new Promise((t,n)=>{var s,o,c;function f(){lv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{lv(),n(qn(r,"network-request-failed"))},timeout:TI.get()})}if(!((o=(s=ci().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=ci().gapi)===null||c===void 0)&&c.load)f();else{const g=RR("iframefcb");return ci()[g]=()=>{gapi.load?f():n(qn(r,"network-request-failed"))},bR(`${wR()}?onload=${g}`).catch(p=>n(p))}}).catch(t=>{throw Ac=null,t})}let Ac=null;function SI(r){return Ac=Ac||AI(r),Ac}/**
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
 */const bI=new kl(5e3,15e3),wI="__/auth/iframe",RI="emulator/auth/iframe",II={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DI(r){const t=r.config;vt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Am(t,RI):`https://${r.config.authDomain}/${wI}`,s={apiKey:t.apiKey,appName:r.name,v:$a},o=CI.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Pl(s).slice(1)}`}async function OI(r){const t=await SI(r),n=ci().gapi;return vt(n,r,"internal-error"),t.open({where:document.body,url:DI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:II,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const f=qn(r,"network-request-failed"),g=ci().setTimeout(()=>{c(f)},bI.get());function p(){ci().clearTimeout(g),o(s)}s.ping(p).then(p,()=>{c(f)})}))}/**
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
 */const NI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MI=500,VI=600,PI="_blank",kI="http://localhost";class uv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xI(r,t,n,s=MI,o=VI){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p=Object.assign(Object.assign({},NI),{width:s.toString(),height:o.toString(),top:c,left:f}),y=Ke().toLowerCase();n&&(g=u0(y)?PI:n),o0(y)&&(t=t||kI,p.scrollbars="yes");const T=Object.entries(p).reduce((C,[H,$])=>`${C}${H}=${$},`,"");if(pR(y)&&g!=="_self")return UI(t||"",g),new uv(null);const I=window.open(t||"",g,T);vt(I,r,"popup-blocked");try{I.focus()}catch{}return new uv(I)}function UI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const LI="__/auth/handler",zI="emulator/auth/handler",BI=encodeURIComponent("fac");async function cv(r,t,n,s,o,c){vt(r.config.authDomain,r,"auth-domain-config-required"),vt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:$a,eventId:o};if(t instanceof Im){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",gb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,I]of Object.entries({}))f[T]=I}if(t instanceof xl){const T=t.getScopes().filter(I=>I!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const T of Object.keys(g))g[T]===void 0&&delete g[T];const p=await r._getAppCheckToken(),y=p?`#${BI}=${encodeURIComponent(p)}`:"";return`${qI(r)}?${Pl(g).slice(1)}${y}`}function qI({config:r}){return r.emulator?Am(r,zI):`https://${r.authDomain}/${LI}`}/**
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
 */const Vd="webStorageSupport";class HI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A0,this._completeRedirectFn=fI,this._overrideRedirectResult=uI}async _openPopup(t,n,s,o){var c;Ki((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const f=await cv(t,n,s,Gd(),o);return xI(t,f,Cm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const c=await cv(t,n,s,Gd(),o);return GR(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(Ki(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await OI(t),s=new mI(t);return n.register("authEvent",o=>(vt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Vd,{type:Vd},o=>{var c;const f=(c=o?.[0])===null||c===void 0?void 0:c[Vd];f!==void 0&&n(!!f),mi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return m0()||l0()||wm()}}const jI=HI;var hv="@firebase/auth",fv="1.10.7";/**
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
 */class FI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){vt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QI(r){di(new jn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;vt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g0(r)},y=new AR(s,o,c,p);return CR(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),di(new jn("auth-internal",t=>{const n=nh(t.getProvider("auth").getImmediate());return(s=>new FI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(hv,fv,GI(r)),On(hv,fv,"esm2017")}/**
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
 */const KI=5*60,YI=EE("authIdTokenMaxAge")||KI;let dv=null;const XI=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>YI)return;const o=n?.token;dv!==o&&(dv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $I(r=dm()){const t=xs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=IR(r,{popupRedirectResolver:jI,persistence:[tI,HR,A0]}),s=EE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=XI(c.toString());UR(n,f,()=>f(n.currentUser)),xR(n,g=>f(g))}}const o=_E("auth");return o&&DR(n,`http://${o}`),n}function ZI(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}SR({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const c=qn("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",ZI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QI("Browser");var mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,O0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,b){function R(){}R.prototype=b.prototype,M.D=b.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(N,V,k){for(var S=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)S[ct-2]=arguments[ct];return b.prototype[V].apply(N,S)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,b,R){R||(R=0);var N=Array(16);if(typeof b=="string")for(var V=0;16>V;++V)N[V]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(V=0;16>V;++V)N[V]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=M.g[0],R=M.g[1],V=M.g[2];var k=M.g[3],S=b+(k^R&(V^k))+N[0]+3614090360&4294967295;b=R+(S<<7&4294967295|S>>>25),S=k+(V^b&(R^V))+N[1]+3905402710&4294967295,k=b+(S<<12&4294967295|S>>>20),S=V+(R^k&(b^R))+N[2]+606105819&4294967295,V=k+(S<<17&4294967295|S>>>15),S=R+(b^V&(k^b))+N[3]+3250441966&4294967295,R=V+(S<<22&4294967295|S>>>10),S=b+(k^R&(V^k))+N[4]+4118548399&4294967295,b=R+(S<<7&4294967295|S>>>25),S=k+(V^b&(R^V))+N[5]+1200080426&4294967295,k=b+(S<<12&4294967295|S>>>20),S=V+(R^k&(b^R))+N[6]+2821735955&4294967295,V=k+(S<<17&4294967295|S>>>15),S=R+(b^V&(k^b))+N[7]+4249261313&4294967295,R=V+(S<<22&4294967295|S>>>10),S=b+(k^R&(V^k))+N[8]+1770035416&4294967295,b=R+(S<<7&4294967295|S>>>25),S=k+(V^b&(R^V))+N[9]+2336552879&4294967295,k=b+(S<<12&4294967295|S>>>20),S=V+(R^k&(b^R))+N[10]+4294925233&4294967295,V=k+(S<<17&4294967295|S>>>15),S=R+(b^V&(k^b))+N[11]+2304563134&4294967295,R=V+(S<<22&4294967295|S>>>10),S=b+(k^R&(V^k))+N[12]+1804603682&4294967295,b=R+(S<<7&4294967295|S>>>25),S=k+(V^b&(R^V))+N[13]+4254626195&4294967295,k=b+(S<<12&4294967295|S>>>20),S=V+(R^k&(b^R))+N[14]+2792965006&4294967295,V=k+(S<<17&4294967295|S>>>15),S=R+(b^V&(k^b))+N[15]+1236535329&4294967295,R=V+(S<<22&4294967295|S>>>10),S=b+(V^k&(R^V))+N[1]+4129170786&4294967295,b=R+(S<<5&4294967295|S>>>27),S=k+(R^V&(b^R))+N[6]+3225465664&4294967295,k=b+(S<<9&4294967295|S>>>23),S=V+(b^R&(k^b))+N[11]+643717713&4294967295,V=k+(S<<14&4294967295|S>>>18),S=R+(k^b&(V^k))+N[0]+3921069994&4294967295,R=V+(S<<20&4294967295|S>>>12),S=b+(V^k&(R^V))+N[5]+3593408605&4294967295,b=R+(S<<5&4294967295|S>>>27),S=k+(R^V&(b^R))+N[10]+38016083&4294967295,k=b+(S<<9&4294967295|S>>>23),S=V+(b^R&(k^b))+N[15]+3634488961&4294967295,V=k+(S<<14&4294967295|S>>>18),S=R+(k^b&(V^k))+N[4]+3889429448&4294967295,R=V+(S<<20&4294967295|S>>>12),S=b+(V^k&(R^V))+N[9]+568446438&4294967295,b=R+(S<<5&4294967295|S>>>27),S=k+(R^V&(b^R))+N[14]+3275163606&4294967295,k=b+(S<<9&4294967295|S>>>23),S=V+(b^R&(k^b))+N[3]+4107603335&4294967295,V=k+(S<<14&4294967295|S>>>18),S=R+(k^b&(V^k))+N[8]+1163531501&4294967295,R=V+(S<<20&4294967295|S>>>12),S=b+(V^k&(R^V))+N[13]+2850285829&4294967295,b=R+(S<<5&4294967295|S>>>27),S=k+(R^V&(b^R))+N[2]+4243563512&4294967295,k=b+(S<<9&4294967295|S>>>23),S=V+(b^R&(k^b))+N[7]+1735328473&4294967295,V=k+(S<<14&4294967295|S>>>18),S=R+(k^b&(V^k))+N[12]+2368359562&4294967295,R=V+(S<<20&4294967295|S>>>12),S=b+(R^V^k)+N[5]+4294588738&4294967295,b=R+(S<<4&4294967295|S>>>28),S=k+(b^R^V)+N[8]+2272392833&4294967295,k=b+(S<<11&4294967295|S>>>21),S=V+(k^b^R)+N[11]+1839030562&4294967295,V=k+(S<<16&4294967295|S>>>16),S=R+(V^k^b)+N[14]+4259657740&4294967295,R=V+(S<<23&4294967295|S>>>9),S=b+(R^V^k)+N[1]+2763975236&4294967295,b=R+(S<<4&4294967295|S>>>28),S=k+(b^R^V)+N[4]+1272893353&4294967295,k=b+(S<<11&4294967295|S>>>21),S=V+(k^b^R)+N[7]+4139469664&4294967295,V=k+(S<<16&4294967295|S>>>16),S=R+(V^k^b)+N[10]+3200236656&4294967295,R=V+(S<<23&4294967295|S>>>9),S=b+(R^V^k)+N[13]+681279174&4294967295,b=R+(S<<4&4294967295|S>>>28),S=k+(b^R^V)+N[0]+3936430074&4294967295,k=b+(S<<11&4294967295|S>>>21),S=V+(k^b^R)+N[3]+3572445317&4294967295,V=k+(S<<16&4294967295|S>>>16),S=R+(V^k^b)+N[6]+76029189&4294967295,R=V+(S<<23&4294967295|S>>>9),S=b+(R^V^k)+N[9]+3654602809&4294967295,b=R+(S<<4&4294967295|S>>>28),S=k+(b^R^V)+N[12]+3873151461&4294967295,k=b+(S<<11&4294967295|S>>>21),S=V+(k^b^R)+N[15]+530742520&4294967295,V=k+(S<<16&4294967295|S>>>16),S=R+(V^k^b)+N[2]+3299628645&4294967295,R=V+(S<<23&4294967295|S>>>9),S=b+(V^(R|~k))+N[0]+4096336452&4294967295,b=R+(S<<6&4294967295|S>>>26),S=k+(R^(b|~V))+N[7]+1126891415&4294967295,k=b+(S<<10&4294967295|S>>>22),S=V+(b^(k|~R))+N[14]+2878612391&4294967295,V=k+(S<<15&4294967295|S>>>17),S=R+(k^(V|~b))+N[5]+4237533241&4294967295,R=V+(S<<21&4294967295|S>>>11),S=b+(V^(R|~k))+N[12]+1700485571&4294967295,b=R+(S<<6&4294967295|S>>>26),S=k+(R^(b|~V))+N[3]+2399980690&4294967295,k=b+(S<<10&4294967295|S>>>22),S=V+(b^(k|~R))+N[10]+4293915773&4294967295,V=k+(S<<15&4294967295|S>>>17),S=R+(k^(V|~b))+N[1]+2240044497&4294967295,R=V+(S<<21&4294967295|S>>>11),S=b+(V^(R|~k))+N[8]+1873313359&4294967295,b=R+(S<<6&4294967295|S>>>26),S=k+(R^(b|~V))+N[15]+4264355552&4294967295,k=b+(S<<10&4294967295|S>>>22),S=V+(b^(k|~R))+N[6]+2734768916&4294967295,V=k+(S<<15&4294967295|S>>>17),S=R+(k^(V|~b))+N[13]+1309151649&4294967295,R=V+(S<<21&4294967295|S>>>11),S=b+(V^(R|~k))+N[4]+4149444226&4294967295,b=R+(S<<6&4294967295|S>>>26),S=k+(R^(b|~V))+N[11]+3174756917&4294967295,k=b+(S<<10&4294967295|S>>>22),S=V+(b^(k|~R))+N[2]+718787259&4294967295,V=k+(S<<15&4294967295|S>>>17),S=R+(k^(V|~b))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+b&4294967295,M.g[1]=M.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+k&4294967295}s.prototype.u=function(M,b){b===void 0&&(b=M.length);for(var R=b-this.blockSize,N=this.B,V=this.h,k=0;k<b;){if(V==0)for(;k<=R;)o(this,M,k),k+=this.blockSize;if(typeof M=="string"){for(;k<b;)if(N[V++]=M.charCodeAt(k++),V==this.blockSize){o(this,N),V=0;break}}else for(;k<b;)if(N[V++]=M[k++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=b},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var b=1;b<M.length-8;++b)M[b]=0;var R=8*this.o;for(b=M.length-8;b<M.length;++b)M[b]=R&255,R/=256;for(this.u(M),M=Array(16),b=R=0;4>b;++b)for(var N=0;32>N;N+=8)M[R++]=this.g[b]>>>N&255;return M};function c(M,b){var R=g;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=b(M)}function f(M,b){this.h=b;for(var R=[],N=!0,V=M.length-1;0<=V;V--){var k=M[V]|0;N&&k==b||(R[V]=k,N=!1)}this.g=R}var g={};function p(M){return-128<=M&&128>M?c(M,function(b){return new f([b|0],0>b?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return I;if(0>M)return Z(y(-M));for(var b=[],R=1,N=0;M>=R;N++)b[N]=M/R|0,R*=4294967296;return new f(b,0)}function T(M,b){if(M.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M.charAt(0)=="-")return Z(T(M.substring(1),b));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(b,8)),N=I,V=0;V<M.length;V+=8){var k=Math.min(8,M.length-V),S=parseInt(M.substring(V,V+k),b);8>k?(k=y(Math.pow(b,k)),N=N.j(k).add(y(S))):(N=N.j(R),N=N.add(y(S)))}return N}var I=p(0),C=p(1),H=p(16777216);r=f.prototype,r.m=function(){if(et(this))return-Z(this).m();for(var M=0,b=1,R=0;R<this.g.length;R++){var N=this.i(R);M+=(0<=N?N:4294967296+N)*b,b*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if($(this))return"0";if(et(this))return"-"+Z(this).toString(M);for(var b=y(Math.pow(M,6)),R=this,N="";;){var V=Ot(R,b).g;R=St(R,V.j(b));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=V,$(R))return k+N;for(;6>k.length;)k="0"+k;N=k+N}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function $(M){if(M.h!=0)return!1;for(var b=0;b<M.g.length;b++)if(M.g[b]!=0)return!1;return!0}function et(M){return M.h==-1}r.l=function(M){return M=St(this,M),et(M)?-1:$(M)?0:1};function Z(M){for(var b=M.g.length,R=[],N=0;N<b;N++)R[N]=~M.g[N];return new f(R,~M.h).add(C)}r.abs=function(){return et(this)?Z(this):this},r.add=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],N=0,V=0;V<=b;V++){var k=N+(this.i(V)&65535)+(M.i(V)&65535),S=(k>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);N=S>>>16,k&=65535,S&=65535,R[V]=S<<16|k}return new f(R,R[R.length-1]&-2147483648?-1:0)};function St(M,b){return M.add(Z(b))}r.j=function(M){if($(this)||$(M))return I;if(et(this))return et(M)?Z(this).j(Z(M)):Z(Z(this).j(M));if(et(M))return Z(this.j(Z(M)));if(0>this.l(H)&&0>M.l(H))return y(this.m()*M.m());for(var b=this.g.length+M.g.length,R=[],N=0;N<2*b;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<M.g.length;V++){var k=this.i(N)>>>16,S=this.i(N)&65535,ct=M.i(V)>>>16,Bt=M.i(V)&65535;R[2*N+2*V]+=S*Bt,dt(R,2*N+2*V),R[2*N+2*V+1]+=k*Bt,dt(R,2*N+2*V+1),R[2*N+2*V+1]+=S*ct,dt(R,2*N+2*V+1),R[2*N+2*V+2]+=k*ct,dt(R,2*N+2*V+2)}for(N=0;N<b;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=b;N<2*b;N++)R[N]=0;return new f(R,0)};function dt(M,b){for(;(M[b]&65535)!=M[b];)M[b+1]+=M[b]>>>16,M[b]&=65535,b++}function ut(M,b){this.g=M,this.h=b}function Ot(M,b){if($(b))throw Error("division by zero");if($(M))return new ut(I,I);if(et(M))return b=Ot(Z(M),b),new ut(Z(b.g),Z(b.h));if(et(b))return b=Ot(M,Z(b)),new ut(Z(b.g),b.h);if(30<M.g.length){if(et(M)||et(b))throw Error("slowDivide_ only works with positive integers.");for(var R=C,N=b;0>=N.l(M);)R=_t(R),N=_t(N);var V=It(R,1),k=It(N,1);for(N=It(N,2),R=It(R,2);!$(N);){var S=k.add(N);0>=S.l(M)&&(V=V.add(R),k=S),N=It(N,1),R=It(R,1)}return b=St(M,V.j(b)),new ut(V,b)}for(V=I;0<=M.l(b);){for(R=Math.max(1,Math.floor(M.m()/b.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),k=y(R),S=k.j(b);et(S)||0<S.l(M);)R-=N,k=y(R),S=k.j(b);$(k)&&(k=C),V=V.add(k),M=St(M,S)}return new ut(V,M)}r.A=function(M){return Ot(this,M).h},r.and=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)&M.i(N);return new f(R,this.h&M.h)},r.or=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)|M.i(N);return new f(R,this.h|M.h)},r.xor=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)^M.i(N);return new f(R,this.h^M.h)};function _t(M){for(var b=M.g.length+1,R=[],N=0;N<b;N++)R[N]=M.i(N)<<1|M.i(N-1)>>>31;return new f(R,M.h)}function It(M,b){var R=b>>5;b%=32;for(var N=M.g.length-R,V=[],k=0;k<N;k++)V[k]=0<b?M.i(k+R)>>>b|M.i(k+R+1)<<32-b:M.i(k+R);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,O0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,Vr=f}).apply(typeof mv<"u"?mv:typeof self<"u"?self:typeof window<"u"?window:{});var mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var N0,gl,M0,Sc,Yd,V0,P0,k0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof mc=="object"&&mc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(u,m){if(m)t:{var _=s;u=u.split(".");for(var A=0;A<u.length-1;A++){var x=u[A];if(!(x in _))break t;_=_[x]}u=u[u.length-1],A=_[u],m=m(A),m!=A&&m!=null&&t(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,A=!1,x={next:function(){if(!A&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}o("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function T(u,m,_){return u.call.apply(u.bind,arguments)}function I(u,m,_){if(!u)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,A),u.apply(m,x)}}return function(){return u.apply(m,arguments)}}function C(u,m,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:I,C.apply(null,arguments)}function H(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),u.apply(this,A)}}function $(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(A,x,q){for(var J=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)J[kt-2]=arguments[kt];return m.prototype[x].apply(A,J)}}function et(u){const m=u.length;if(0<m){const _=Array(m);for(let A=0;A<m;A++)_[A]=u[A];return _}return[]}function Z(u,m){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const x=u.length||0,q=A.length||0;u.length=x+q;for(let J=0;J<q;J++)u[x+J]=A[J]}else u.push(A)}}class St{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function dt(u){return/^[\s\xa0]*$/.test(u)}function ut(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function Ot(u){return Ot[" "](u),u}Ot[" "]=function(){};var _t=ut().indexOf("Gecko")!=-1&&!(ut().toLowerCase().indexOf("webkit")!=-1&&ut().indexOf("Edge")==-1)&&!(ut().indexOf("Trident")!=-1||ut().indexOf("MSIE")!=-1)&&ut().indexOf("Edge")==-1;function It(u,m,_){for(const A in u)m.call(_,u[A],A,u)}function M(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function b(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let _,A;for(let x=1;x<arguments.length;x++){A=arguments[x];for(_ in A)u[_]=A[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(A,_)&&(u[_]=A[_])}}function V(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function k(u){g.setTimeout(()=>{throw u},0)}function S(){var u=qt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ct{constructor(){this.h=this.g=null}add(m,_){const A=Bt.get();A.set(m,_),this.h?this.h.next=A:this.g=A,this.h=A}}var Bt=new St(()=>new j,u=>u.reset());class j{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,ot=!1,qt=new ct,D=()=>{const u=g.Promise.resolve(void 0);tt=()=>{u.then(X)}};var X=()=>{for(var u;u=S();){try{u.h.call(u.g)}catch(_){k(_)}var m=Bt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ot=!1};function nt(){this.s=this.s,this.C=this.C}nt.prototype.s=!1,nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};g.addEventListener("test",_,m),g.removeEventListener("test",_,m)}catch{}return u}();function Ct(u,m){if(W.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,A=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(_t){t:{try{Ot(m.nodeName);var x=!0;break t}catch{}x=!1}x||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Et[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ct.aa.h.call(this)}}$(Ct,W);var Et={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),Jt=0;function Qn(u,m,_,A,x){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!A,this.ha=x,this.key=++Jt,this.da=this.fa=!1}function Zi(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pi(u){this.src=u,this.g={},this.h=0}pi.prototype.add=function(u,m,_,A,x){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var J=jr(u,m,A,x);return-1<J?(m=u[J],_||(m.fa=!1)):(m=new Qn(m,this.src,q,!!A,x),m.fa=_,u.push(m)),m};function Hr(u,m){var _=m.type;if(_ in u.g){var A=u.g[_],x=Array.prototype.indexOf.call(A,m,void 0),q;(q=0<=x)&&Array.prototype.splice.call(A,x,1),q&&(Zi(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function jr(u,m,_,A){for(var x=0;x<u.length;++x){var q=u[x];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==A)return x}return-1}var Fr="closure_lm_"+(1e6*Math.random()|0),ro={};function jl(u,m,_,A,x){if(Array.isArray(m)){for(var q=0;q<m.length;q++)jl(u,m[q],_,A,x);return null}return _=Fl(_),u&&u[Re]?u.K(m,_,y(A)?!!A.capture:!1,x):pn(u,m,_,!1,A,x)}function pn(u,m,_,A,x,q){if(!m)throw Error("Invalid event type");var J=y(x)?!!x.capture:!!x,kt=Hs(u);if(kt||(u[Fr]=kt=new pi(u)),_=kt.add(m,_,A,J,q),_.proxy)return _;if(A=_h(),_.proxy=A,A.src=u,A.listener=_,u.addEventListener)ft||(x=J),x===void 0&&(x=!1),u.addEventListener(m.toString(),A,x);else if(u.attachEvent)u.attachEvent(Gr(m.toString()),A);else if(u.addListener&&u.removeListener)u.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function _h(){function u(_){return m.call(u.src,u.listener,_)}const m=vh;return u}function so(u,m,_,A,x){if(Array.isArray(m))for(var q=0;q<m.length;q++)so(u,m[q],_,A,x);else A=y(A)?!!A.capture:!!A,_=Fl(_),u&&u[Re]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=jr(q,_,A,x),-1<_&&(Zi(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Hs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=jr(m,_,A,x)),(_=-1<u?m[u]:null)&&qs(_))}function qs(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Re])Hr(m.i,u);else{var _=u.type,A=u.proxy;m.removeEventListener?m.removeEventListener(_,A,u.capture):m.detachEvent?m.detachEvent(Gr(_),A):m.addListener&&m.removeListener&&m.removeListener(A),(_=Hs(m))?(Hr(_,u),_.h==0&&(_.src=null,m[Fr]=null)):Zi(u)}}}function Gr(u){return u in ro?ro[u]:ro[u]="on"+u}function vh(u,m){if(u.da)u=!0;else{m=new Ct(m,this);var _=u.listener,A=u.ha||u.src;u.fa&&qs(u),u=_.call(A,m)}return u}function Hs(u){return u=u[Fr],u instanceof pi?u:null}var ao="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fl(u){return typeof u=="function"?u:(u[ao]||(u[ao]=function(m){return u.handleEvent(m)}),u[ao])}function ae(){nt.call(this),this.i=new pi(this),this.M=this,this.F=null}$(ae,nt),ae.prototype[Re]=!0,ae.prototype.removeEventListener=function(u,m,_,A){so(this,u,m,_,A)};function Gt(u,m){var _,A=u.F;if(A)for(_=[];A;A=A.F)_.push(A);if(u=u.M,A=m.type||m,typeof m=="string")m=new W(m,u);else if(m instanceof W)m.target=m.target||u;else{var x=m;m=new W(A,u),N(m,x)}if(x=!0,_)for(var q=_.length-1;0<=q;q--){var J=m.g=_[q];x=an(J,A,!0,m)&&x}if(J=m.g=u,x=an(J,A,!0,m)&&x,x=an(J,A,!1,m)&&x,_)for(q=0;q<_.length;q++)J=m.g=_[q],x=an(J,A,!1,m)&&x}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],A=0;A<_.length;A++)Zi(_[A]);delete u.g[m],u.h--}}this.F=null},ae.prototype.K=function(u,m,_,A){return this.i.add(String(u),m,!1,_,A)},ae.prototype.L=function(u,m,_,A){return this.i.add(String(u),m,!0,_,A)};function an(u,m,_,A){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var x=!0,q=0;q<m.length;++q){var J=m[q];if(J&&!J.da&&J.capture==_){var kt=J.listener,Ee=J.ha||J.src;J.fa&&Hr(u.i,J),x=kt.call(Ee,A)!==!1&&x}}return x&&!A.defaultPrevented}function qe(u,m,_){if(typeof u=="function")_&&(u=C(u,_));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(u,m||0)}function Gl(u){u.g=qe(()=>{u.g=null,u.i&&(u.i=!1,Gl(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Eh extends nt{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Gl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(u){nt.call(this),this.h=u,this.g={}}$(Qr,nt);var Kr=[];function Yr(u){It(u.g,function(m,_){this.g.hasOwnProperty(_)&&qs(m)},u),u.g={}}Qr.prototype.N=function(){Qr.aa.N.call(this),Yr(this)},Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nn=g.JSON.stringify,js=g.JSON.parse,Xr=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function oo(){}oo.prototype.h=null;function lo(u){return u.h||(u.h=u.i())}function uo(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _i(){W.call(this,"d")}$(_i,W);function co(){W.call(this,"c")}$(co,W);var Kn={},ho=null;function Wi(){return ho=ho||new ae}Kn.La="serverreachability";function Fs(u){W.call(this,Kn.La,u)}$(Fs,W);function Ji(u){const m=Wi();Gt(m,new Fs(m))}Kn.STAT_EVENT="statevent";function Ql(u,m){W.call(this,Kn.STAT_EVENT,u),this.stat=m}$(Ql,W);function ne(u){const m=Wi();Gt(m,new Ql(m,u))}Kn.Ma="timingevent";function ve(u,m){W.call(this,Kn.Ma,u),this.size=m}$(ve,W);function de(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},m)}function yn(){this.g=!0}yn.prototype.xa=function(){this.g=!1};function fo(u,m,_,A,x,q){u.info(function(){if(u.g)if(q)for(var J="",kt=q.split("&"),Ee=0;Ee<kt.length;Ee++){var xt=kt[Ee].split("=");if(1<xt.length){var Ce=xt[0];xt=xt[1];var Te=Ce.split("_");J=2<=Te.length&&Te[1]=="type"?J+(Ce+"="+xt+"&"):J+(Ce+"=redacted&")}}else J=null;else J=q;return"XMLHTTP REQ ("+A+") [attempt "+x+"]: "+m+`
`+_+`
`+J})}function Th(u,m,_,A,x,q,J){u.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+x+"]: "+m+`
`+_+`
`+q+" "+J})}function tr(u,m,_,A){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+$r(u,_)+(A?" "+A:"")})}function Kl(u,m){u.info(function(){return"TIMEOUT: "+m})}yn.prototype.info=function(){};function $r(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var A=_[u];if(!(2>A.length)){var x=A[1];if(Array.isArray(x)&&!(1>x.length)){var q=x[0];if(q!="noop"&&q!="stop"&&q!="close")for(var J=1;J<x.length;J++)x[J]=""}}}}return Nn(_)}catch{return m}}var er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yn;function Xn(){}$(Xn,oo),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},Yn=new Xn;function Xe(u,m,_,A){this.j=u,this.i=m,this.l=_,this.R=A||1,this.U=new Qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}var mo={},Gs={};function Mn(u,m,_){u.L=1,u.v=es(on(m)),u.m=_,u.P=!0,Ei(u,null)}function Ei(u,m){u.F=Date.now(),Zr(u),u.A=on(u.v);var _=u.A,A=u.R;Array.isArray(A)||(A=[String(A)]),Eo(_.i,"t",A),u.C=0,_=u.j.J,u.h=new ue,u.g=uu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Eh(C(u.Y,u,u.g),u.O)),m=u.U,_=u.g,A=u.ca;var x="readystatechange";Array.isArray(x)||(x&&(Kr[0]=x.toString()),x=Kr);for(var q=0;q<x.length;q++){var J=jl(_,x[q],A||m.handleEvent,!1,m.h||m);if(!J)break;m.g[J.key]=J}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Ji(),fo(u.i,u.u,u.A,u.l,u.R,u.m)}Xe.prototype.ca=function(u){u=u.target;const m=this.M;m&&Tn(u)==3?m.j():this.Y(u)},Xe.prototype.Y=function(u){try{if(u==this.g)t:{const Te=Tn(this.g);var m=this.g.Ba();const Ci=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||eu(this.g)))){this.J||Te!=4||m==7||(m==8||0>=Ci?Ji(3):Ji(2)),nr(this);var _=this.g.Z();this.X=_;e:if(Yl(this)){var A=eu(this.g);u="";var x=A.length,q=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ve(this),$n(this);var J="";break e}this.h.i=new g.TextDecoder}for(m=0;m<x;m++)this.h.h=!0,u+=this.h.i.decode(A[m],{stream:!(q&&m==x-1)});A.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=_==200,Th(this.i,this.u,this.A,this.l,this.R,Te,_),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,Ee=this.g;if((kt=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dt(kt)){var xt=kt;break e}}xt=null}if(_=xt)tr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wr(this,_);else{this.o=!1,this.s=3,ne(12),Ve(this),$n(this);break t}}if(this.P){_=!0;let Pe;for(;!this.J&&this.C<J.length;)if(Pe=Xl(this,J),Pe==Gs){Te==4&&(this.s=4,ne(14),_=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==mo){this.s=4,ne(15),tr(this.i,this.l,J,"[Invalid Chunk]"),_=!1;break}else tr(this.i,this.l,Pe,null),Wr(this,Pe);if(Yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||J.length!=0||this.h.h||(this.s=1,ne(16),_=!1),this.o=this.o&&_,!_)tr(this.i,this.l,J,"[Invalid Chunked Response]"),Ve(this),$n(this);else if(0<J.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),us(Ce),Ce.M=!0,ne(11))}}else tr(this.i,this.l,J,null),Wr(this,J);Te==4&&Ve(this),this.o&&!this.J&&(Te==4?au(this.j,this):(this.o=!1,Zr(this)))}else Rh(this.g),_==400&&0<J.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),Ve(this),$n(this)}}}catch{}finally{}};function Yl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Xl(u,m){var _=u.C,A=m.indexOf(`
`,_);return A==-1?Gs:(_=Number(m.substring(_,A)),isNaN(_)?mo:(A+=1,A+_>m.length?Gs:(m=m.slice(A,A+_),u.C=A+_,m)))}Xe.prototype.cancel=function(){this.J=!0,Ve(this)};function Zr(u){u.S=Date.now()+u.I,$l(u,u.I)}function $l(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=de(C(u.ba,u),m)}function nr(u){u.B&&(g.clearTimeout(u.B),u.B=null)}Xe.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Kl(this.i,this.A),this.L!=2&&(Ji(),ne(17)),Ve(this),this.s=2,$n(this)):$l(this,this.S-u)};function $n(u){u.j.G==0||u.J||au(u.j,u)}function Ve(u){nr(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Yr(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Wr(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||go(_.h,u))){if(!u.K&&go(_.h,u)&&_.G==3){try{var A=_.Da.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var x=A;if(x[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ia(_),ea(_);else break t;wo(_),ne(18)}}else _.za=x[1],0<_.za-_.T&&37500>x[2]&&_.F&&_.v==0&&!_.C&&(_.C=de(C(_.Za,_),6e3));if(1>=Ks(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ii(_,11)}else if((u.K||_.g==u)&&ia(_),!dt(m))for(x=_.Da.g.parse(m),m=0;m<x.length;m++){let xt=x[m];if(_.T=xt[0],xt=xt[1],_.G==2)if(xt[0]=="c"){_.K=xt[1],_.ia=xt[2];const Ce=xt[3];Ce!=null&&(_.la=Ce,_.j.info("VER="+_.la));const Te=xt[4];Te!=null&&(_.Aa=Te,_.j.info("SVER="+_.Aa));const Ci=xt[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(A=1.5*Ci,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Pe=u.g;if(Pe){const ii=Pe.g?Pe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var q=A.h;q.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ys(q,q.h),q.h=null))}if(A.D){const Io=Pe.g?Pe.g.getResponseHeader("X-HTTP-Session-Id"):null;Io&&(A.ya=Io,Yt(A.I,A.D,Io))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var J=u;if(A.qa=lu(A,A.J?A.ia:null,A.W),J.K){$e(A.h,J);var kt=J,Ee=A.L;Ee&&(kt.I=Ee),kt.B&&(nr(kt),Zr(kt)),A.g=J}else ru(A);0<_.i.length&&na(_)}else xt[0]!="stop"&&xt[0]!="close"||Ii(_,7);else _.G==3&&(xt[0]=="stop"||xt[0]=="close"?xt[0]=="stop"?Ii(_,7):So(_):xt[0]!="noop"&&_.l&&_.l.ta(xt),_.v=0)}}Ji(4)}catch{}}var Zl=class{constructor(u,m){this.g=u,this.map=m}};function Ti(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qs(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ks(u){return u.h?1:u.g?u.g.size:0}function go(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ys(u,m){u.g?u.g.add(m):u.h=m}function $e(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Ti.prototype.cancel=function(){if(this.i=po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function po(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return et(u.i)}function Ah(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,A=0;A<_;A++)m.push(u[A]);return m}m=[],_=0;for(A in u)m[_++]=u[A];return m}function Xs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const A in u)m[_++]=A;return m}}}function yo(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Xs(u),A=Ah(u),x=A.length,q=0;q<x;q++)m.call(void 0,A[q],_&&_[q],u)}var Jr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var A=u[_].indexOf("="),x=null;if(0<=A){var q=u[_].substring(0,A);x=u[_].substring(A+1)}else q=u[_];m(q,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function me(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof me){this.h=u.h,ts(this,u.j),this.o=u.o,this.g=u.g,ir(this,u.s),this.l=u.l;var m=u.i,_=new Si;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Ai(this,_),this.m=u.m}else u&&(m=String(u).match(Jr))?(this.h=!1,ts(this,m[1]||"",!0),this.o=_n(m[2]||""),this.g=_n(m[3]||"",!0),ir(this,m[4]),this.l=_n(m[5]||"",!0),Ai(this,m[6]||"",!0),this.m=_n(m[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}me.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ns(m,_o,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ns(m,_o,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ns(_,_.charAt(0)=="/"?bh:vo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ns(_,$s)),u.join("")};function on(u){return new me(u)}function ts(u,m,_){u.j=_?_n(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ir(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Ai(u,m,_){m instanceof Si?(u.i=m,Jl(u.i,u.h)):(_||(m=ns(m,wh)),u.i=new Si(m,u.h))}function Yt(u,m,_){u.i.set(m,_)}function es(u){return Yt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function _n(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ns(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Wl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Wl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var _o=/[#\/\?@]/g,vo=/[#\?:]/g,bh=/[#\?]/g,wh=/[#\?@]/g,$s=/#/g;function Si(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function vn(u){u.g||(u.g=new Map,u.h=0,u.i&&Sh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Si.prototype,r.add=function(u,m){vn(this),this.i=null,u=Zn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function bi(u,m){vn(u),m=Zn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function wi(u,m){return vn(u),m=Zn(u,m),u.g.has(m)}r.forEach=function(u,m){vn(this),this.g.forEach(function(_,A){_.forEach(function(x){u.call(m,x,A,this)},this)},this)},r.na=function(){vn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let A=0;A<m.length;A++){const x=u[A];for(let q=0;q<x.length;q++)_.push(m[A])}return _},r.V=function(u){vn(this);let m=[];if(typeof u=="string")wi(this,u)&&(m=m.concat(this.g.get(Zn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return vn(this),this.i=null,u=Zn(this,u),wi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Eo(u,m,_){bi(u,m),0<_.length&&(u.i=null,u.g.set(Zn(u,m),et(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var A=m[_];const q=encodeURIComponent(String(A)),J=this.V(A);for(A=0;A<J.length;A++){var x=q;J[A]!==""&&(x+="="+encodeURIComponent(String(J[A]))),u.push(x)}}return this.i=u.join("&")};function Zn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Jl(u,m){m&&!u.j&&(vn(u),u.i=null,u.g.forEach(function(_,A){var x=A.toLowerCase();A!=x&&(bi(this,A),Eo(this,x,_))},u)),u.j=m}function is(u,m){const _=new yn;if(g.Image){const A=new Image;A.onload=H(En,_,"TestLoadImage: loaded",!0,m,A),A.onerror=H(En,_,"TestLoadImage: error",!1,m,A),A.onabort=H(En,_,"TestLoadImage: abort",!1,m,A),A.ontimeout=H(En,_,"TestLoadImage: timeout",!1,m,A),g.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=u}else m(!1)}function Vn(u,m){const _=new yn,A=new AbortController,x=setTimeout(()=>{A.abort(),En(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:A.signal}).then(q=>{clearTimeout(x),q.ok?En(_,"TestPingServer: ok",!0,m):En(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(x),En(_,"TestPingServer: error",!1,m)})}function En(u,m,_,A,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),A(_)}catch{}}function rs(){this.g=new Xr}function Wn(u,m,_){const A=_||"";try{yo(u,function(x,q){let J=x;y(x)&&(J=Nn(x)),m.push(A+q+"="+encodeURIComponent(J))})}catch(x){throw m.push(A+"type="+encodeURIComponent("_badmap")),x}}function rr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(rr,oo),rr.prototype.g=function(){return new Ri(this.l,this.j)},rr.prototype.i=function(u){return function(){return u}}({});function Ri(u,m){ae.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ri,ae),r=Ri.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,ti(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;To(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function To(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Jn(this):ti(this),this.readyState==3&&To(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Jn(this))},r.Qa=function(u){this.g&&(this.response=u,Jn(this))},r.ga=function(){this.g&&Jn(this)};function Jn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ti(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function ti(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ao(u){let m="";return It(u,function(_,A){m+=A,m+=":",m+=_,m+=`\r
`}),m}function Ie(u,m,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Ao(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Yt(u,m,_))}function jt(u){ae.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(jt,ae);var Zs=/^https?$/i,ss=["POST","PUT"];r=jt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?lo(this.o):lo(Yn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){tu(this,q);return}if(u=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var x in A)_.set(x,A[x]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),x=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(ss,m,void 0))||A||x||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,J]of _)this.g.setRequestHeader(q,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{as(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){tu(this,q)}};function tu(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ws(u),ei(u)}function Ws(u){u.A||(u.A=!0,Gt(u,"complete"),Gt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Gt(this,"complete"),Gt(this,"abort"),ei(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Js(this):this.bb())},r.bb=function(){Js(this)};function Js(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Tn(u)!=4||u.Z()!=2)){if(u.u&&Tn(u)==4)qe(u.Ea,0,u);else if(Gt(u,"readystatechange"),Tn(u)==4){u.h=!1;try{const J=u.Z();t:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var A;if(A=J===0){var x=String(u.D).match(Jr)[1]||null;!x&&g.self&&g.self.location&&(x=g.self.location.protocol.slice(0,-1)),A=!Zs.test(x?x.toLowerCase():"")}_=A}if(_)Gt(u,"complete"),Gt(u,"success");else{u.m=6;try{var q=2<Tn(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",Ws(u)}}finally{ei(u)}}}}function ei(u,m){if(u.g){as(u);const _=u.g,A=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Gt(u,"ready");try{_.onreadystatechange=A}catch{}}}function as(u){u.I&&(g.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Tn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),js(m)}};function eu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Rh(u){const m={};u=(u.g&&2<=Tn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<u.length;A++){if(dt(u[A]))continue;var _=V(u[A]);const x=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[x]||[];m[x]=q,q.push(_)}M(m,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ta(u){this.Aa=0,this.i=[],this.j=new yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=os("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=os("baseRetryDelayMs",5e3,u),this.cb=os("retryDelaySeedMs",1e4,u),this.Wa=os("forwardChannelMaxRetries",2,u),this.wa=os("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ti(u&&u.concurrentRequestLimit),this.Da=new rs,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ta.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,A){ne(0),this.W=u,this.H=m||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=lu(this,null,this.W),na(this)};function So(u){if(nu(u),u.G==3){var m=u.U++,_=on(u.I);if(Yt(_,"SID",u.K),Yt(_,"RID",m),Yt(_,"TYPE","terminate"),ls(u,_),m=new Xe(u,u.j,m),m.L=2,m.v=es(on(_)),_=!1,g.navigator&&g.navigator.sendBeacon)try{_=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&g.Image&&(new Image().src=m.v,_=!0),_||(m.g=uu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Zr(m)}ou(u)}function ea(u){u.g&&(us(u),u.g.cancel(),u.g=null)}function nu(u){ea(u),u.u&&(g.clearTimeout(u.u),u.u=null),ia(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function na(u){if(!Qs(u.h)&&!u.s){u.s=!0;var m=u.Ga;tt||D(),ot||(tt(),ot=!0),qt.add(m,u),u.B=0}}function Ih(u,m){return Ks(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=de(C(u.Ga,u,m),Ro(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const x=new Xe(this,this.j,u);let q=this.o;if(this.S&&(q?(q=b(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(x.H=q,q=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=iu(this,x,m),_=on(this.I),Yt(_,"RID",u),Yt(_,"CVER",22),this.D&&Yt(_,"X-HTTP-Session-Id",this.D),ls(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Ao(q)))+"&"+m:this.m&&Ie(_,this.m,q)),Ys(this.h,x),this.Ua&&Yt(_,"TYPE","init"),this.P?(Yt(_,"$req",m),Yt(_,"SID","null"),x.T=!0,Mn(x,_,null)):Mn(x,_,m),this.G=2}}else this.G==3&&(u?bo(this,u):this.i.length==0||Qs(this.h)||bo(this))};function bo(u,m){var _;m?_=m.l:_=u.U++;const A=on(u.I);Yt(A,"SID",u.K),Yt(A,"RID",_),Yt(A,"AID",u.T),ls(u,A),u.m&&u.o&&Ie(A,u.m,u.o),_=new Xe(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=iu(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ys(u.h,_),Mn(_,A,m)}function ls(u,m){u.H&&It(u.H,function(_,A){Yt(m,A,_)}),u.l&&yo({},function(_,A){Yt(m,A,_)})}function iu(u,m,_){_=Math.min(u.i.length,_);var A=u.l?C(u.l.Na,u.l,u):null;t:{var x=u.i;let q=-1;for(;;){const J=["count="+_];q==-1?0<_?(q=x[0].g,J.push("ofs="+q)):q=0:J.push("ofs="+q);let kt=!0;for(let Ee=0;Ee<_;Ee++){let xt=x[Ee].g;const Ce=x[Ee].map;if(xt-=q,0>xt)q=Math.max(0,x[Ee].g-100),kt=!1;else try{Wn(Ce,J,"req"+xt+"_")}catch{A&&A(Ce)}}if(kt){A=J.join("&");break t}}}return u=u.i.splice(0,_),m.D=u,A}function ru(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;tt||D(),ot||(tt(),ot=!0),qt.add(m,u),u.v=0}}function wo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=de(C(u.Fa,u),Ro(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,su(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=de(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ne(10),ea(this),su(this))};function us(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function su(u){u.g=new Xe(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=on(u.qa);Yt(m,"RID","rpc"),Yt(m,"SID",u.K),Yt(m,"AID",u.T),Yt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Yt(m,"TO",u.ja),Yt(m,"TYPE","xmlhttp"),ls(u,m),u.m&&u.o&&Ie(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=es(on(m)),_.m=null,_.P=!0,Ei(_,u)}r.Za=function(){this.C!=null&&(this.C=null,ea(this),wo(this),ne(19))};function ia(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function au(u,m){var _=null;if(u.g==m){ia(u),us(u),u.g=null;var A=2}else if(go(u.h,m))_=m.D,$e(u.h,m),A=1;else return;if(u.G!=0){if(m.o)if(A==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var x=u.B;A=Wi(),Gt(A,new ve(A,_)),na(u)}else ru(u);else if(x=m.s,x==3||x==0&&0<m.X||!(A==1&&Ih(u,m)||A==2&&wo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),x){case 1:Ii(u,5);break;case 4:Ii(u,10);break;case 3:Ii(u,6);break;default:Ii(u,2)}}}function Ro(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ii(u,m){if(u.j.info("Error code "+m),m==2){var _=C(u.fb,u),A=u.Xa;const x=!A;A=new me(A||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||ts(A,"https"),es(A),x?is(A.toString(),_):Vn(A.toString(),_)}else ne(2);u.G=0,u.l&&u.l.sa(m),ou(u),nu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ne(2)):(this.j.info("Failed to ping google.com"),ne(1))};function ou(u){if(u.G=0,u.ka=[],u.l){const m=po(u.h);(m.length!=0||u.i.length!=0)&&(Z(u.ka,m),Z(u.ka,u.i),u.h.i.length=0,et(u.i),u.i.length=0),u.l.ra()}}function lu(u,m,_){var A=_ instanceof me?on(_):new me(_);if(A.g!="")m&&(A.g=m+"."+A.g),ir(A,A.s);else{var x=g.location;A=x.protocol,m=m?m+"."+x.hostname:x.hostname,x=+x.port;var q=new me(null);A&&ts(q,A),m&&(q.g=m),x&&ir(q,x),_&&(q.l=_),A=q}return _=u.D,m=u.ya,_&&m&&Yt(A,_,m),Yt(A,"VER",u.la),ls(u,A),A}function uu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new jt(new rr({eb:_})):new jt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function cu(){}r=cu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ra(){}ra.prototype.g=function(u,m){return new Ze(u,m)};function Ze(u,m){ae.call(this),this.g=new ta(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!dt(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!dt(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ni(this)}$(Ze,ae),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){So(this.g)},Ze.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Nn(u),u=_);m.i.push(new Zl(m.Ya++,u)),m.G==3&&na(m)},Ze.prototype.N=function(){this.g.l=null,delete this.j,So(this.g),delete this.g,Ze.aa.N.call(this)};function hu(u){_i.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const _ in m){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(hu,_i);function fu(){co.call(this),this.status=1}$(fu,co);function ni(u){this.g=u}$(ni,cu),ni.prototype.ua=function(){Gt(this.g,"a")},ni.prototype.ta=function(u){Gt(this.g,new hu(u))},ni.prototype.sa=function(u){Gt(this.g,new fu)},ni.prototype.ra=function(){Gt(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,k0=function(){return new ra},P0=function(){return Wi()},V0=Kn,Yd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},er.NO_ERROR=0,er.TIMEOUT=8,er.HTTP_ERROR=6,Sc=er,vi.COMPLETE="complete",M0=vi,uo.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",ae.prototype.listen=ae.prototype.K,gl=uo,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,N0=jt}).apply(typeof mc<"u"?mc:typeof self<"u"?self:typeof window<"u"?window:{});const gv="@firebase/firestore",pv="4.7.17";/**
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
 */class Ge{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let Wa="11.9.0";/**
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
 */const Vs=new Jc("@firebase/firestore");function Va(){return Vs.logLevel}function it(r,...t){if(Vs.logLevel<=Vt.DEBUG){const n=t.map(Om);Vs.debug(`Firestore (${Wa}): ${r}`,...n)}}function Yi(r,...t){if(Vs.logLevel<=Vt.ERROR){const n=t.map(Om);Vs.error(`Firestore (${Wa}): ${r}`,...n)}}function Ha(r,...t){if(Vs.logLevel<=Vt.WARN){const n=t.map(Om);Vs.warn(`Firestore (${Wa}): ${r}`,...n)}}function Om(r){if(typeof r=="string")return r;try{/**
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
 */function pt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,x0(r,s,n)}function x0(r,t,n){let s=`FIRESTORE (${Wa}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Yi(s),new Error(s)}function Ft(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||x0(t,o,s)}function At(r,t){return r}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends Gn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class U0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class WI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class JI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tC{constructor(t){this.t=t,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ft(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let c=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Gi,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},g=p=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Gi)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ft(typeof s.accessToken=="string",31837,{l:s}),new U0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ft(t===null||typeof t=="string",2055,{h:t}),new Ge(t)}}class eC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new eC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ln(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ft(this.o===void 0,3512);const s=c=>{c.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,it("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const o=c=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ft(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function L0(){return new TextEncoder}/**
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
 */class z0{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=rC(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=t.charAt(o[c]%62))}return s}}function Rt(r,t){return r<t?-1:r>t?1:0}function Xd(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return Rt(s,o);{const c=L0(),f=sC(c.encode(_v(r,n)),c.encode(_v(t,n)));return f!==0?f:Rt(s,o)}}n+=s>65535?2:1}return Rt(r.length,t.length)}function _v(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function sC(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return Rt(r[n],t[n]);return Rt(r.length,t.length)}function ja(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
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
 */const vv=-62135596800,Ev=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(t){return be.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Ev);return new be(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new rt(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new rt(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<vv)throw new rt(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new rt(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ev}_compareTo(t){return this.seconds===t.seconds?Rt(this.nanoseconds,t.nanoseconds):Rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-vv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Tt{static fromTimestamp(t){return new Tt(t)}static min(){return new Tt(new be(0,0))}static max(){return new Tt(new be(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Tv="__name__";class ui{constructor(t,n,s){n===void 0?n=0:n>t.length&&pt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&pt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ui.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ui?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const c=ui.compareSegments(t.get(o),n.get(o));if(c!==0)return c}return Rt(t.length,n.length)}static compareSegments(t,n){const s=ui.isNumericId(t),o=ui.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ui.extractNumericId(t).compare(ui.extractNumericId(n)):Xd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Vr.fromString(t.substring(4,t.length-2))}}class ee extends ui{construct(t,n,s){return new ee(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new rt(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const aC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends ui{construct(t,n,s){return new ze(t,n,s)}static isValidIdentifier(t){return aC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tv}static keyField(){return new ze([Tv])}static fromServerFormat(t){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new rt(Y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new rt(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new rt(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(s+=g,o++):(c(),o++)}if(c(),f)throw new rt(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class ht{constructor(t){this.path=t}static fromPath(t){return new ht(ee.fromString(t))}static fromName(t){return new ht(ee.fromString(t).popFirst(5))}static empty(){return new ht(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ee.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ee.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ht(new ee(t.slice()))}}/**
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
 */const Cl=-1;function oC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Tt.fromTimestamp(s===1e9?new be(n+1,0):new be(n,s));return new xr(o,ht.empty(),t)}function lC(r){return new xr(r.readTime,r.key,Cl)}class xr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new xr(Tt.min(),ht.empty(),Cl)}static max(){return new xr(Tt.max(),ht.empty(),Cl)}}function uC(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ht.comparator(r.documentKey,t.documentKey),n!==0?n:Rt(r.largestBatchId,t.largestBatchId))}/**
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
 */const cC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ja(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==cC)throw r;it("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&pt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new K((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):K.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):K.reject(n)}static resolve(t){return new K((n,s)=>{n(t)})}static reject(t){return new K((n,s)=>{s(t)})}static waitFor(t){return new K((n,s)=>{let o=0,c=0,f=!1;t.forEach(g=>{++o,g.next(()=>{++c,f&&c===o&&n()},p=>s(p))}),f=!0,c===o&&n()})}static or(t){let n=K.resolve(!1);for(const s of t)n=n.next(o=>o?K.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,c)=>{s.push(n.call(this,o,c))}),this.waitFor(s)}static mapArray(t,n){return new K((s,o)=>{const c=t.length,f=new Array(c);let g=0;for(let p=0;p<c;p++){const y=p;n(t[y]).next(T=>{f[y]=T,++g,g===c&&s(f)},T=>o(T))}})}static doWhile(t,n){return new K((s,o)=>{const c=()=>{t()===!0?n().next(()=>{c()},o):s()};c()})}}function fC(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function to(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class sh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}sh.le=-1;/**
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
 */const Nm=-1;function ah(r){return r==null}function Bc(r){return r===0&&1/r==-1/0}function dC(r){return typeof r=="number"&&Number.isInteger(r)&&!Bc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const B0="";function mC(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Av(t)),t=gC(r.get(n),t);return Av(t)}function gC(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case B0:n+="";break;default:n+=c}}return n}function Av(r){return r+B0+""}/**
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
 */function Sv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Us(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function q0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class se{constructor(t,n){this.comparator=t,this.root=n||Le.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Le.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new gc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new gc(this.root,t,this.comparator,!1)}getReverseIterator(){return new gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new gc(this.root,t,this.comparator,!0)}}class gc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&o&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Le{constructor(t,n,s,o,c){this.key=t,this.value=n,this.color=s??Le.RED,this.left=o??Le.EMPTY,this.right=c??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,c){return new Le(t??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const c=s(t,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(t,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Le.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw pt(27949);return t+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw pt(57766)}get value(){throw pt(16141)}get color(){throw pt(16727)}get left(){throw pt(29726)}get right(){throw pt(36894)}copy(t,n,s,o,c){return this}insert(t,n,s){return new Le(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new bv(this.data.getIterator())}getIteratorFrom(t){return new bv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new we(this.comparator);return n.data=t,n}}class bv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bn{constructor(t){this.fields=t,t.sort(ze.comparator)}static empty(){return new Bn([])}unionWith(t){let n=new we(ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Bn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ja(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class H0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Be{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new H0("Invalid base64 string: "+c):c}}(t);return new Be(n)}static fromUint8Array(t){const n=function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c}(t);return new Be(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const pC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(r){if(Ft(!!r,39018),typeof r=="string"){let t=0;const n=pC.exec(r);if(Ft(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Lr(r){return typeof r=="string"?Be.fromBase64String(r):Be.fromUint8Array(r)}/**
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
 */const j0="server_timestamp",F0="__type__",G0="__previous_value__",Q0="__local_write_time__";function Mm(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[F0])===null||n===void 0?void 0:n.stringValue)===j0}function oh(r){const t=r.mapValue.fields[G0];return Mm(t)?oh(t):t}function Dl(r){const t=Ur(r.mapValue.fields[Q0].timestampValue);return new be(t.seconds,t.nanos)}/**
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
 */class yC{constructor(t,n,s,o,c,f,g,p,y,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=T}}const qc="(default)";class Ol{constructor(t,n){this.projectId=t,this.database=n||qc}static empty(){return new Ol("","")}get isDefaultDatabase(){return this.database===qc}isEqual(t){return t instanceof Ol&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const K0="__type__",_C="__max__",pc={mapValue:{}},Y0="__vector__",Hc="value";function zr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Mm(r)?4:EC(r)?9007199254740991:vC(r)?10:11:pt(28295,{value:r})}function gi(r,t){if(r===t)return!0;const n=zr(r);if(n!==zr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Dl(r).isEqual(Dl(t));case 3:return function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Ur(o.timestampValue),g=Ur(c.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,c){return Lr(o.bytesValue).isEqual(Lr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,c){return fe(o.geoPointValue.latitude)===fe(c.geoPointValue.latitude)&&fe(o.geoPointValue.longitude)===fe(c.geoPointValue.longitude)}(r,t);case 2:return function(o,c){if("integerValue"in o&&"integerValue"in c)return fe(o.integerValue)===fe(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=fe(o.doubleValue),g=fe(c.doubleValue);return f===g?Bc(f)===Bc(g):isNaN(f)&&isNaN(g)}return!1}(r,t);case 9:return ja(r.arrayValue.values||[],t.arrayValue.values||[],gi);case 10:case 11:return function(o,c){const f=o.mapValue.fields||{},g=c.mapValue.fields||{};if(Sv(f)!==Sv(g))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(g[p]===void 0||!gi(f[p],g[p])))return!1;return!0}(r,t);default:return pt(52216,{left:r})}}function Nl(r,t){return(r.values||[]).find(n=>gi(n,t))!==void 0}function Fa(r,t){if(r===t)return 0;const n=zr(r),s=zr(t);if(n!==s)return Rt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Rt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const g=fe(c.integerValue||c.doubleValue),p=fe(f.integerValue||f.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return wv(r.timestampValue,t.timestampValue);case 4:return wv(Dl(r),Dl(t));case 5:return Xd(r.stringValue,t.stringValue);case 6:return function(c,f){const g=Lr(c),p=Lr(f);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const g=c.split("/"),p=f.split("/");for(let y=0;y<g.length&&y<p.length;y++){const T=Rt(g[y],p[y]);if(T!==0)return T}return Rt(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const g=Rt(fe(c.latitude),fe(f.latitude));return g!==0?g:Rt(fe(c.longitude),fe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Rv(r.arrayValue,t.arrayValue);case 10:return function(c,f){var g,p,y,T;const I=c.fields||{},C=f.fields||{},H=(g=I[Hc])===null||g===void 0?void 0:g.arrayValue,$=(p=C[Hc])===null||p===void 0?void 0:p.arrayValue,et=Rt(((y=H?.values)===null||y===void 0?void 0:y.length)||0,((T=$?.values)===null||T===void 0?void 0:T.length)||0);return et!==0?et:Rv(H,$)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===pc.mapValue&&f===pc.mapValue)return 0;if(c===pc.mapValue)return 1;if(f===pc.mapValue)return-1;const g=c.fields||{},p=Object.keys(g),y=f.fields||{},T=Object.keys(y);p.sort(),T.sort();for(let I=0;I<p.length&&I<T.length;++I){const C=Xd(p[I],T[I]);if(C!==0)return C;const H=Fa(g[p[I]],y[T[I]]);if(H!==0)return H}return Rt(p.length,T.length)}(r.mapValue,t.mapValue);default:throw pt(23264,{Pe:n})}}function wv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Rt(r,t);const n=Ur(r),s=Ur(t),o=Rt(n.seconds,s.seconds);return o!==0?o:Rt(n.nanos,s.nanos)}function Rv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=Fa(n[o],s[o]);if(c)return c}return Rt(n.length,s.length)}function Ga(r){return $d(r)}function $d(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Ur(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Lr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ht.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=$d(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const f of s)c?c=!1:o+=",",o+=`${f}:${$d(n.fields[f])}`;return o+"}"}(r.mapValue):pt(61005,{value:r})}function bc(r){switch(zr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=oh(r);return t?16+bc(t):16;case 5:return 2*r.stringValue.length;case 6:return Lr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,c)=>o+bc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Us(s.fields,(c,f)=>{o+=c.length+bc(f)}),o}(r.mapValue);default:throw pt(13486,{value:r})}}function Iv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Zd(r){return!!r&&"integerValue"in r}function Vm(r){return!!r&&"arrayValue"in r}function Cv(r){return!!r&&"nullValue"in r}function Dv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function wc(r){return!!r&&"mapValue"in r}function vC(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[K0])===null||n===void 0?void 0:n.stringValue)===Y0}function Al(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Us(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Al(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Al(r.arrayValue.values[n]);return t}return Object.assign({},r)}function EC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===_C}/**
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
 */class Dn{constructor(t){this.value=t}static empty(){return new Dn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!wc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Al(n)}setAll(t){let n=ze.emptyPath(),s={},o=[];t.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=g.popLast()}f?s[g.lastSegment()]=Al(f):o.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(t){const n=this.field(t.popLast());wc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];wc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Us(n,(o,c)=>t[o]=c);for(const o of s)delete t[o]}clone(){return new Dn(Al(this.value))}}function X0(r){const t=[];return Us(r.fields,(n,s)=>{const o=new ze([n]);if(wc(s)){const c=X0(s.mapValue).fields;if(c.length===0)t.push(o);else for(const f of c)t.push(o.child(f))}else t.push(o)}),new Bn(t)}/**
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
 */class Qe{constructor(t,n,s,o,c,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=f,this.documentState=g}static newInvalidDocument(t){return new Qe(t,0,Tt.min(),Tt.min(),Tt.min(),Dn.empty(),0)}static newFoundDocument(t,n,s,o){return new Qe(t,1,n,Tt.min(),s,o,0)}static newNoDocument(t,n){return new Qe(t,2,n,Tt.min(),Tt.min(),Dn.empty(),0)}static newUnknownDocument(t,n){return new Qe(t,3,n,Tt.min(),Tt.min(),Dn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Tt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Qe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jc{constructor(t,n){this.position=t,this.inclusive=n}}function Ov(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const c=t[o],f=r.position[o];if(c.field.isKeyField()?s=ht.comparator(ht.fromName(f.referenceValue),n.key):s=Fa(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!gi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Fc{constructor(t,n="asc"){this.field=t,this.dir=n}}function TC(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class $0{}class _e extends $0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new SC(t,n,s):n==="array-contains"?new RC(t,s):n==="in"?new IC(t,s):n==="not-in"?new CC(t,s):n==="array-contains-any"?new DC(t,s):new _e(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new bC(t,s):new wC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Fa(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(Fa(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return pt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends $0{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new Fn(t,n)}matches(t){return Z0(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Z0(r){return r.op==="and"}function W0(r){return AC(r)&&Z0(r)}function AC(r){for(const t of r.filters)if(t instanceof Fn)return!1;return!0}function Wd(r){if(r instanceof _e)return r.field.canonicalString()+r.op.toString()+Ga(r.value);if(W0(r))return r.filters.map(t=>Wd(t)).join(",");{const t=r.filters.map(n=>Wd(n)).join(",");return`${r.op}(${t})`}}function J0(r,t){return r instanceof _e?function(s,o){return o instanceof _e&&s.op===o.op&&s.field.isEqual(o.field)&&gi(s.value,o.value)}(r,t):r instanceof Fn?function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((c,f,g)=>c&&J0(f,o.filters[g]),!0):!1}(r,t):void pt(19439)}function tT(r){return r instanceof _e?function(n){return`${n.field.canonicalString()} ${n.op} ${Ga(n.value)}`}(r):r instanceof Fn?function(n){return n.op.toString()+" {"+n.getFilters().map(tT).join(" ,")+"}"}(r):"Filter"}class SC extends _e{constructor(t,n,s){super(t,n,s),this.key=ht.fromName(s.referenceValue)}matches(t){const n=ht.comparator(t.key,this.key);return this.matchesComparison(n)}}class bC extends _e{constructor(t,n){super(t,"in",n),this.keys=eT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class wC extends _e{constructor(t,n){super(t,"not-in",n),this.keys=eT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function eT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ht.fromName(s.referenceValue))}class RC extends _e{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Vm(n)&&Nl(n.arrayValue,this.value)}}class IC extends _e{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Nl(this.value.arrayValue,n)}}class CC extends _e{constructor(t,n){super(t,"not-in",n)}matches(t){if(Nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Nl(this.value.arrayValue,n)}}class DC extends _e{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Vm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Nl(this.value.arrayValue,s))}}/**
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
 */class OC{constructor(t,n=null,s=[],o=[],c=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=f,this.endAt=g,this.Ie=null}}function Mv(r,t=null,n=[],s=[],o=null,c=null,f=null){return new OC(r,t,n,s,o,c,f)}function Pm(r){const t=At(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Wd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),ah(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ga(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ga(s)).join(",")),t.Ie=n}return t.Ie}function km(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!TC(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!J0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Nv(r.startAt,t.startAt)&&Nv(r.endAt,t.endAt)}function Jd(r){return ht.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ll{constructor(t,n=null,s=[],o=[],c=null,f="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=f,this.startAt=g,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function NC(r,t,n,s,o,c,f,g){return new Ll(r,t,n,s,o,c,f,g)}function xm(r){return new Ll(r)}function Vv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function nT(r){return r.collectionGroup!==null}function Sl(r){const t=At(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const c of t.explicitOrderBy)t.Ee.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new we(ze.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(g=g.add(y.field))})}),g})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.Ee.push(new Fc(c,s))}),n.has(ze.keyField().canonicalString())||t.Ee.push(new Fc(ze.keyField(),s))}return t.Ee}function hi(r){const t=At(r);return t.de||(t.de=MC(t,Sl(r))),t.de}function MC(r,t){if(r.limitType==="F")return Mv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const c=o.dir==="desc"?"asc":"desc";return new Fc(o.field,c)});const n=r.endAt?new jc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new jc(r.startAt.position,r.startAt.inclusive):null;return Mv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function tm(r,t){const n=r.filters.concat([t]);return new Ll(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function em(r,t,n){return new Ll(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function lh(r,t){return km(hi(r),hi(t))&&r.limitType===t.limitType}function iT(r){return`${Pm(hi(r))}|lt:${r.limitType}`}function Pa(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>tT(o)).join(", ")}]`),ah(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Ga(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Ga(o)).join(",")),`Target(${s})`}(hi(r))}; limitType=${r.limitType})`}function uh(r,t){return t.isFoundDocument()&&function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ht.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,o){for(const c of Sl(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,g,p){const y=Ov(f,g,p);return f.inclusive?y<=0:y<0}(s.startAt,Sl(s),o)||s.endAt&&!function(f,g,p){const y=Ov(f,g,p);return f.inclusive?y>=0:y>0}(s.endAt,Sl(s),o))}(r,t)}function VC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function rT(r){return(t,n)=>{let s=!1;for(const o of Sl(r)){const c=PC(o,t,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function PC(r,t,n){const s=r.field.isKeyField()?ht.comparator(t.key,n.key):function(c,f,g){const p=f.data.field(c),y=g.data.field(c);return p!==null&&y!==null?Fa(p,y):pt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return pt(19790,{direction:r.dir})}}/**
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
 */class Ls{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],t))return void(o[c]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Us(this.inner,(n,s)=>{for(const[o,c]of s)t(o,c)})}isEmpty(){return q0(this.inner)}size(){return this.innerSize}}/**
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
 */const kC=new se(ht.comparator);function Xi(){return kC}const sT=new se(ht.comparator);function pl(...r){let t=sT;for(const n of r)t=t.insert(n.key,n);return t}function aT(r){let t=sT;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Cs(){return bl()}function oT(){return bl()}function bl(){return new Ls(r=>r.toString(),(r,t)=>r.isEqual(t))}const xC=new se(ht.comparator),UC=new we(ht.comparator);function Pt(...r){let t=UC;for(const n of r)t=t.add(n);return t}const LC=new we(Rt);function zC(){return LC}/**
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
 */function Um(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bc(t)?"-0":t}}function lT(r){return{integerValue:""+r}}function BC(r,t){return dC(t)?lT(t):Um(r,t)}/**
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
 */class ch{constructor(){this._=void 0}}function qC(r,t,n){return r instanceof Gc?function(o,c){const f={fields:{[F0]:{stringValue:j0},[Q0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&Mm(c)&&(c=oh(c)),c&&(f.fields[G0]=c),{mapValue:f}}(n,t):r instanceof Ml?cT(r,t):r instanceof Vl?hT(r,t):function(o,c){const f=uT(o,c),g=Pv(f)+Pv(o.Re);return Zd(f)&&Zd(o.Re)?lT(g):Um(o.serializer,g)}(r,t)}function HC(r,t,n){return r instanceof Ml?cT(r,t):r instanceof Vl?hT(r,t):n}function uT(r,t){return r instanceof Qc?function(s){return Zd(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Gc extends ch{}class Ml extends ch{constructor(t){super(),this.elements=t}}function cT(r,t){const n=fT(t);for(const s of r.elements)n.some(o=>gi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Vl extends ch{constructor(t){super(),this.elements=t}}function hT(r,t){let n=fT(t);for(const s of r.elements)n=n.filter(o=>!gi(o,s));return{arrayValue:{values:n}}}class Qc extends ch{constructor(t,n){super(),this.serializer=t,this.Re=n}}function Pv(r){return fe(r.integerValue||r.doubleValue)}function fT(r){return Vm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function jC(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Ml&&o instanceof Ml||s instanceof Vl&&o instanceof Vl?ja(s.elements,o.elements,gi):s instanceof Qc&&o instanceof Qc?gi(s.Re,o.Re):s instanceof Gc&&o instanceof Gc}(r.transform,t.transform)}class FC{constructor(t,n){this.version=t,this.transformResults=n}}class Hn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Hn}static exists(t){return new Hn(void 0,t)}static updateTime(t){return new Hn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class hh{}function dT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Lm(r.key,Hn.none()):new zl(r.key,r.data,Hn.none());{const n=r.data,s=Dn.empty();let o=new we(ze.comparator);for(let c of t.fields)if(!o.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),o=o.add(c)}return new zs(r.key,s,new Bn(o.toArray()),Hn.none())}}function GC(r,t,n){r instanceof zl?function(o,c,f){const g=o.value.clone(),p=xv(o.fieldTransforms,c,f.transformResults);g.setAll(p),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):r instanceof zs?function(o,c,f){if(!Rc(o.precondition,c))return void c.convertToUnknownDocument(f.version);const g=xv(o.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(mT(o)),p.setAll(g),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function wl(r,t,n,s){return r instanceof zl?function(c,f,g,p){if(!Rc(c.precondition,f))return g;const y=c.value.clone(),T=Uv(c.fieldTransforms,p,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof zs?function(c,f,g,p){if(!Rc(c.precondition,f))return g;const y=Uv(c.fieldTransforms,p,f),T=f.data;return T.setAll(mT(c)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(I=>I.field))}(r,t,n,s):function(c,f,g){return Rc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(r,t,n)}function QC(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),c=uT(s.transform,o||null);c!=null&&(n===null&&(n=Dn.empty()),n.set(s.field,c))}return n||null}function kv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ja(s,o,(c,f)=>jC(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class zl extends hh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class zs extends hh{constructor(t,n,s,o,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function mT(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function xv(r,t,n){const s=new Map;Ft(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const c=r[o],f=c.transform,g=t.data.field(c.field);s.set(c.field,HC(f,g,n[o]))}return s}function Uv(r,t,n){const s=new Map;for(const o of r){const c=o.transform,f=n.data.field(o.field);s.set(o.field,qC(c,f,t))}return s}class Lm extends hh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KC extends hh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class YC{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(t.key)&&GC(c,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=wl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=wl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=oT();return this.mutations.forEach(o=>{const c=t.get(o.key),f=c.overlayedDocument;let g=this.applyToLocalView(f,c.mutatedFields);g=n.has(o.key)?null:g;const p=dT(f,g);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Tt.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pt())}isEqual(t){return this.batchId===t.batchId&&ja(this.mutations,t.mutations,(n,s)=>kv(n,s))&&ja(this.baseMutations,t.baseMutations,(n,s)=>kv(n,s))}}class zm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ft(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return xC}();const c=t.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,s[f].version);return new zm(t,n,s,o)}}/**
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
 */class XC{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class $C{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var ye,Lt;function ZC(r){switch(r){case Y.OK:return pt(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return pt(15467,{code:r})}}function gT(r){if(r===void 0)return Yi("GRPC error has no .code"),Y.UNKNOWN;switch(r){case ye.OK:return Y.OK;case ye.CANCELLED:return Y.CANCELLED;case ye.UNKNOWN:return Y.UNKNOWN;case ye.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ye.INTERNAL:return Y.INTERNAL;case ye.UNAVAILABLE:return Y.UNAVAILABLE;case ye.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ye.NOT_FOUND:return Y.NOT_FOUND;case ye.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ye.ABORTED:return Y.ABORTED;case ye.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ye.DATA_LOSS:return Y.DATA_LOSS;default:return pt(39323,{code:r})}}(Lt=ye||(ye={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const WC=new Vr([4294967295,4294967295],0);function Lv(r){const t=L0().encode(r),n=new O0;return n.update(t),new Uint8Array(n.digest())}function zv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Vr([n,s],0),new Vr([o,c],0)]}class Bm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new yl(`Invalid padding: ${n}`);if(s<0)throw new yl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new yl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Vr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(Vr.fromNumber(s)));return o.compare(WC)===1&&(o=new Vr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=Lv(t),[s,o]=zv(n);for(let c=0;c<this.hashCount;c++){const f=this.we(s,o,c);if(!this.be(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new Bm(c,o,n);return s.forEach(g=>f.insert(g)),f}insert(t){if(this.pe===0)return;const n=Lv(t),[s,o]=zv(n);for(let c=0;c<this.hashCount;c++){const f=this.we(s,o,c);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fh{constructor(t,n,s,o,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Bl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new fh(Tt.min(),o,new se(Rt),Xi(),Pt())}}class Bl{constructor(t,n,s,o,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Bl(s,n,Pt(),Pt(),Pt())}}/**
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
 */class Ic{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class pT{constructor(t,n){this.targetId=t,this.Ce=n}}class yT{constructor(t,n,s=Be.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Bv{constructor(){this.Fe=0,this.Me=qv(),this.xe=Be.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Pt(),n=Pt(),s=Pt();return this.Me.forEach((o,c)=>{switch(c){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:pt(38017,{changeType:c})}}),new Bl(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=qv()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ft(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class JC{constructor(t){this.ze=t,this.je=new Map,this.He=Xi(),this.Je=yc(),this.Ye=yc(),this.Ze=new se(Rt)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:pt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const c=o.target;if(Jd(c))if(s===0){const f=new ht(c.path);this.tt(n,f,Qe.newNoDocument(f,Tt.min()))}else Ft(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const g=this.ct(t),p=g?this.lt(g,t,f):1;if(p!==0){this.st(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let f,g;try{f=Lr(s).toUint8Array()}catch(p){if(p instanceof H0)return Ha("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new Bm(f,o,c)}catch(p){return Ha(p instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.pe===0?null:g}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(c=>{const f=this.ze.Pt(),g=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.tt(n,c,null),o++)}),o}It(t){const n=new Map;this.je.forEach((c,f)=>{const g=this._t(f);if(g){if(c.current&&Jd(g.target)){const p=new ht(g.target.path);this.Et(p).has(f)||this.dt(f,p)||this.tt(f,p,Qe.newNoDocument(p,t))}c.Le&&(n.set(f,c.qe()),c.Qe())}});let s=Pt();this.Ye.forEach((c,f)=>{let g=!0;f.forEachWhile(p=>{const y=this._t(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(s=s.add(c))}),this.He.forEach((c,f)=>f.setReadTime(t));const o=new fh(t,n,this.Ze,this.He,s);return this.He=Xi(),this.Je=yc(),this.Ye=yc(),this.Ze=new se(Rt),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new Bv,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new we(Rt),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new we(Rt),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||it("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Bv),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function yc(){return new se(ht.comparator)}function qv(){return new se(ht.comparator)}const t2={asc:"ASCENDING",desc:"DESCENDING"},e2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n2={and:"AND",or:"OR"};class i2{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function nm(r,t){return r.useProto3Json||ah(t)?t:{value:t}}function Kc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _T(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function r2(r,t){return Kc(r,t.toTimestamp())}function fi(r){return Ft(!!r,49232),Tt.fromTimestamp(function(n){const s=Ur(n);return new be(s.seconds,s.nanos)}(r))}function qm(r,t){return im(r,t).canonicalString()}function im(r,t){const n=function(o){return new ee(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function vT(r){const t=ee.fromString(r);return Ft(bT(t),10190,{key:t.toString()}),t}function rm(r,t){return qm(r.databaseId,t.path)}function Pd(r,t){const n=vT(t);if(n.get(1)!==r.databaseId.projectId)throw new rt(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new rt(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ht(TT(n))}function ET(r,t){return qm(r.databaseId,t)}function s2(r){const t=vT(r);return t.length===4?ee.emptyPath():TT(t)}function sm(r){return new ee(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function TT(r){return Ft(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Hv(r,t,n){return{name:rm(r,t),fields:n.value.mapValue.fields}}function a2(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:pt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],c=function(y,T){return y.useProto3Json?(Ft(T===void 0||typeof T=="string",58123),Be.fromBase64String(T||"")):(Ft(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Be.fromUint8Array(T||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&function(y){const T=y.code===void 0?Y.UNKNOWN:gT(y.code);return new rt(T,y.message||"")}(f);n=new yT(s,o,c,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Pd(r,s.document.name),c=fi(s.document.updateTime),f=s.document.createTime?fi(s.document.createTime):Tt.min(),g=new Dn({mapValue:{fields:s.document.fields}}),p=Qe.newFoundDocument(o,c,f,g),y=s.targetIds||[],T=s.removedTargetIds||[];n=new Ic(y,T,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Pd(r,s.document),c=s.readTime?fi(s.readTime):Tt.min(),f=Qe.newNoDocument(o,c),g=s.removedTargetIds||[];n=new Ic([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Pd(r,s.document),c=s.removedTargetIds||[];n=new Ic([],c,o,null)}else{if(!("filter"in t))return pt(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,f=new $C(o,c),g=s.targetId;n=new pT(g,f)}}return n}function o2(r,t){let n;if(t instanceof zl)n={update:Hv(r,t.key,t.value)};else if(t instanceof Lm)n={delete:rm(r,t.key)};else if(t instanceof zs)n={update:Hv(r,t.key,t.data),updateMask:p2(t.fieldMask)};else{if(!(t instanceof KC))return pt(16599,{ft:t.type});n={verify:rm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const g=f.transform;if(g instanceof Gc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Ml)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Vl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Qc)return{fieldPath:f.field.canonicalString(),increment:g.Re};throw pt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,c){return c.updateTime!==void 0?{updateTime:r2(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:pt(27497)}(r,t.precondition)),n}function l2(r,t){return r&&r.length>0?(Ft(t!==void 0,14353),r.map(n=>function(o,c){let f=o.updateTime?fi(o.updateTime):fi(c);return f.isEqual(Tt.min())&&(f=fi(c)),new FC(f,o.transformResults||[])}(n,t))):[]}function u2(r,t){return{documents:[ET(r,t.path)]}}function c2(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=ET(r,o);const c=function(y){if(y.length!==0)return ST(Fn.create(y,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(T=>function(C){return{field:ka(C.field),direction:d2(C.dir)}}(T))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=nm(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{gt:n,parent:o}}function h2(r){let t=s2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ft(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let c=[];n.where&&(c=function(I){const C=AT(I);return C instanceof Fn&&W0(C)?C.getFilters():[C]}(n.where));let f=[];n.orderBy&&(f=function(I){return I.map(C=>function($){return new Fc(xa($.field),function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(C))}(n.orderBy));let g=null;n.limit&&(g=function(I){let C;return C=typeof I=="object"?I.value:I,ah(C)?null:C}(n.limit));let p=null;n.startAt&&(p=function(I){const C=!!I.before,H=I.values||[];return new jc(H,C)}(n.startAt));let y=null;return n.endAt&&(y=function(I){const C=!I.before,H=I.values||[];return new jc(H,C)}(n.endAt)),NC(t,o,f,c,g,"F",p,y)}function f2(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function AT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=xa(n.unaryFilter.field);return _e.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=xa(n.unaryFilter.field);return _e.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=xa(n.unaryFilter.field);return _e.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=xa(n.unaryFilter.field);return _e.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pt(61313);default:return pt(60726)}}(r):r.fieldFilter!==void 0?function(n){return _e.create(xa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pt(58110);default:return pt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Fn.create(n.compositeFilter.filters.map(s=>AT(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pt(1026)}}(n.compositeFilter.op))}(r):pt(30097,{filter:r})}function d2(r){return t2[r]}function m2(r){return e2[r]}function g2(r){return n2[r]}function ka(r){return{fieldPath:r.canonicalString()}}function xa(r){return ze.fromServerFormat(r.fieldPath)}function ST(r){return r instanceof _e?function(n){if(n.op==="=="){if(Dv(n.value))return{unaryFilter:{field:ka(n.field),op:"IS_NAN"}};if(Cv(n.value))return{unaryFilter:{field:ka(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dv(n.value))return{unaryFilter:{field:ka(n.field),op:"IS_NOT_NAN"}};if(Cv(n.value))return{unaryFilter:{field:ka(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ka(n.field),op:m2(n.op),value:n.value}}}(r):r instanceof Fn?function(n){const s=n.getFilters().map(o=>ST(o));return s.length===1?s[0]:{compositeFilter:{op:g2(n.op),filters:s}}}(r):pt(54877,{filter:r})}function p2(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function bT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Or{constructor(t,n,s,o,c=Tt.min(),f=Tt.min(),g=Be.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new Or(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class y2{constructor(t){this.wt=t}}function _2(r){const t=h2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?em(t,t.limit,"L"):t}/**
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
 */class v2{constructor(){this.Cn=new E2}addToCollectionParentIndex(t,n){return this.Cn.add(n),K.resolve()}getCollectionParents(t,n){return K.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return K.resolve()}deleteFieldIndex(t,n){return K.resolve()}deleteAllFieldIndexes(t){return K.resolve()}createTargetIndexes(t,n){return K.resolve()}getDocumentsMatchingTarget(t,n){return K.resolve(null)}getIndexType(t,n){return K.resolve(0)}getFieldIndexes(t,n){return K.resolve([])}getNextCollectionGroupToUpdate(t){return K.resolve(null)}getMinOffset(t,n){return K.resolve(xr.min())}getMinOffsetFromCollectionGroup(t,n){return K.resolve(xr.min())}updateCollectionGroup(t,n,s){return K.resolve()}updateIndexEntries(t,n){return K.resolve()}}class E2{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new we(ee.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new we(ee.comparator)).toArray()}}/**
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
 */const jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wT=41943040;class nn{static withCacheSize(t){return new nn(t,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(wT,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
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
 */class Qa{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Qa(0)}static lr(){return new Qa(-1)}}/**
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
 */const Fv="LruGarbageCollector",T2=1048576;function Gv([r,t],[n,s]){const o=Rt(r,n);return o===0?Rt(t,s):o}class A2{constructor(t){this.Er=t,this.buffer=new we(Gv),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Gv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class S2{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){it(Fv,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){to(n)?it(Fv,"Ignoring IndexedDB error during garbage collection: ",n):await Ja(n)}await this.mr(3e5)})}}class b2{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return K.resolve(sh.le);const s=new A2(n);return this.gr.forEachTarget(t,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(t,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.gr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(it("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(jv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(it("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jv):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let s,o,c,f,g,p,y;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(it("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,f=Date.now(),this.nthSequenceNumber(t,o))).next(I=>(s=I,g=Date.now(),this.removeTargets(t,s,n))).next(I=>(c=I,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(I=>(y=Date.now(),Va()<=Vt.DEBUG&&it("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${c} targets in `+(p-g)+`ms
	Removed ${I} documents in `+(y-p)+`ms
Total Duration: ${y-T}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:I})))}}function w2(r,t){return new b2(r,t)}/**
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
 */class R2{constructor(){this.changes=new Ls(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Qe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?K.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class I2{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class C2{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&wl(s.mutation,o,Bn.empty(),be.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Pt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Pt()){const o=Cs();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(c=>{let f=pl();return c.forEach((g,p)=>{f=f.insert(g,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Cs();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Pt()))}populateOverlays(t,n,s){const o=[];return s.forEach(c=>{n.has(c)||o.push(c)}),this.documentOverlayCache.getOverlays(t,o).next(c=>{c.forEach((f,g)=>{n.set(f,g)})})}computeViews(t,n,s,o){let c=Xi();const f=bl(),g=function(){return bl()}();return n.forEach((p,y)=>{const T=s.get(y.key);o.has(y.key)&&(T===void 0||T.mutation instanceof zs)?c=c.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),wl(T.mutation,y,T.mutation.getFieldMask(),be.now())):f.set(y.key,Bn.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((y,T)=>f.set(y,T)),n.forEach((y,T)=>{var I;return g.set(y,new I2(T,(I=f.get(y))!==null&&I!==void 0?I:null))}),g))}recalculateAndSaveOverlays(t,n){const s=bl();let o=new se((f,g)=>f-g),c=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const g of f)g.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let T=s.get(p)||Bn.empty();T=g.applyToLocalView(y,T),s.set(p,T);const I=(o.get(g.batchId)||Pt()).add(p);o=o.insert(g.batchId,I)})}).next(()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),y=p.key,T=p.value,I=oT();T.forEach(C=>{if(!c.has(C)){const H=dT(n.get(C),s.get(C));H!==null&&I.set(C,H),c=c.add(C)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,I))}return K.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ht.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):nT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-c.size):K.resolve(Cs());let g=Cl,p=c;return f.next(y=>K.forEach(y,(T,I)=>(g<I.largestBatchId&&(g=I.largestBatchId),c.get(T)?K.resolve():this.remoteDocumentCache.getEntry(t,T).next(C=>{p=p.insert(T,C)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,p,y,Pt())).next(T=>({batchId:g,changes:aT(T)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ht(n)).next(s=>{let o=pl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const c=n.collectionGroup;let f=pl();return this.indexManager.getCollectionParents(t,c).next(g=>K.forEach(g,p=>{const y=function(I,C){return new Ll(C,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(T=>{T.forEach((I,C)=>{f=f.insert(I,C)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,o))).next(f=>{c.forEach((p,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,Qe.newInvalidDocument(T)))});let g=pl();return f.forEach((p,y)=>{const T=c.get(p);T!==void 0&&wl(T.mutation,y,Bn.empty(),be.now()),uh(n,y)&&(g=g.insert(p,y))}),g})}}/**
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
 */class D2{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return K.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:fi(o.createTime)}}(n)),K.resolve()}getNamedQuery(t,n){return K.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(o){return{name:o.name,query:_2(o.bundledQuery),readTime:fi(o.readTime)}}(n)),K.resolve()}}/**
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
 */class O2{constructor(){this.overlays=new se(ht.comparator),this.Qr=new Map}getOverlay(t,n){return K.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Cs();return K.forEach(n,o=>this.getOverlay(t,o).next(c=>{c!==null&&s.set(o,c)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,c)=>{this.St(t,n,c)}),K.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(c=>this.overlays=this.overlays.remove(c)),this.Qr.delete(s)),K.resolve()}getOverlaysForCollection(t,n,s){const o=Cs(),c=n.length+1,f=new ht(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const p=g.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let c=new se((y,T)=>y-T);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=c.get(y.largestBatchId);T===null&&(T=Cs(),c=c.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const g=Cs(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,T)=>g.set(y,T)),!(g.size()>=o)););return K.resolve(g)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new XC(n,s));let c=this.Qr.get(n);c===void 0&&(c=Pt(),this.Qr.set(n,c)),this.Qr.set(n,c.add(s.key))}}/**
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
 */class N2{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(t){return K.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,K.resolve()}}/**
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
 */class Hm{constructor(){this.$r=new we(Me.Ur),this.Kr=new we(Me.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const s=new Me(t,n);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.zr(new Me(t,n))}jr(t,n){t.forEach(s=>this.removeReference(s,n))}Hr(t){const n=new ht(new ee([])),s=new Me(n,t),o=new Me(n,t+1),c=[];return this.Kr.forEachInRange([s,o],f=>{this.zr(f),c.push(f.key)}),c}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new ht(new ee([])),s=new Me(n,t),o=new Me(n,t+1);let c=Pt();return this.Kr.forEachInRange([s,o],f=>{c=c.add(f.key)}),c}containsKey(t){const n=new Me(t,0),s=this.$r.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Me{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return ht.comparator(t.key,n.key)||Rt(t.Zr,n.Zr)}static Wr(t,n){return Rt(t.Zr,n.Zr)||ht.comparator(t.key,n.key)}}/**
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
 */class M2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new we(Me.Ur)}checkEmpty(t){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const c=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new YC(c,n,s,o);this.mutationQueue.push(f);for(const g of o)this.Xr=this.Xr.add(new Me(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return K.resolve(f)}lookupMutationBatch(t,n){return K.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ti(s),c=o<0?0:o;return K.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Nm:this.nr-1)}getAllMutationBatches(t){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Me(n,0),o=new Me(n,Number.POSITIVE_INFINITY),c=[];return this.Xr.forEachInRange([s,o],f=>{const g=this.ei(f.Zr);c.push(g)}),K.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new we(Rt);return n.forEach(o=>{const c=new Me(o,0),f=new Me(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([c,f],g=>{s=s.add(g.Zr)})}),K.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let c=s;ht.isDocumentKey(c)||(c=c.child(""));const f=new Me(new ht(c),0);let g=new we(Rt);return this.Xr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(g=g.add(p.Zr)),!0)},f),K.resolve(this.ni(g))}ni(t){const n=[];return t.forEach(s=>{const o=this.ei(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Ft(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return K.forEach(n.mutations,o=>{const c=new Me(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Xr=s})}sr(t){}containsKey(t,n){const s=new Me(n,0),o=this.Xr.firstAfterOrEqual(s);return K.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,K.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class V2{constructor(t){this.ii=t,this.docs=function(){return new se(ht.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,f=this.ii(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return K.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(t,n){let s=Xi();return n.forEach(o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():Qe.newInvalidDocument(o))}),K.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let c=Xi();const f=n.path,g=new ht(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:y,value:{document:T}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||uC(lC(T),s)<=0||(o.has(T.key)||uh(n,T))&&(c=c.insert(T.key,T.mutableCopy()))}return K.resolve(c)}getAllFromCollectionGroup(t,n,s,o){pt(9500)}si(t,n){return K.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new P2(this)}getSize(t){return K.resolve(this.size)}}class P2 extends R2{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Br.addEntry(t,o)):this.Br.removeEntry(s)}),K.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
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
 */class k2{constructor(t){this.persistence=t,this.oi=new Ls(n=>Pm(n),km),this.lastRemoteSnapshotVersion=Tt.min(),this.highestTargetId=0,this._i=0,this.ai=new Hm,this.targetCount=0,this.ui=Qa.cr()}forEachTarget(t,n){return this.oi.forEach((s,o)=>n(o)),K.resolve()}getLastRemoteSnapshotVersion(t){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return K.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this._i&&(this._i=n),K.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new Qa(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,K.resolve()}updateTargetData(t,n){return this.Tr(n),K.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(t,n,s){let o=0;const c=[];return this.oi.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.oi.delete(f),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)}),K.waitFor(c).next(()=>o)}getTargetCount(t){return K.resolve(this.targetCount)}getTargetData(t,n){const s=this.oi.get(n)||null;return K.resolve(s)}addMatchingKeys(t,n,s){return this.ai.Gr(n,s),K.resolve()}removeMatchingKeys(t,n,s){this.ai.jr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach(f=>{c.push(o.markPotentiallyOrphaned(t,f))}),K.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),K.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ai.Yr(n);return K.resolve(s)}containsKey(t,n){return K.resolve(this.ai.containsKey(n))}}/**
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
 */class RT{constructor(t,n){this.ci={},this.overlays={},this.li=new sh(0),this.hi=!1,this.hi=!0,this.Pi=new N2,this.referenceDelegate=t(this),this.Ti=new k2(this),this.indexManager=new v2,this.remoteDocumentCache=function(o){return new V2(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new y2(n),this.Ei=new D2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new O2,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ci[t.toKey()];return s||(s=new M2(n,this.referenceDelegate),this.ci[t.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,s){it("MemoryPersistence","Starting transaction:",t);const o=new x2(this.li.next());return this.referenceDelegate.di(),s(o).next(c=>this.referenceDelegate.Ai(o).next(()=>c)).toPromise().then(c=>(o.raiseOnCommittedEvent(),c))}Ri(t,n){return K.or(Object.values(this.ci).map(s=>()=>s.containsKey(t,n)))}}class x2 extends hC{constructor(t){super(),this.currentSequenceNumber=t}}class jm{constructor(t){this.persistence=t,this.Vi=new Hm,this.mi=null}static fi(t){return new jm(t)}get gi(){if(this.mi)return this.mi;throw pt(60996)}addReference(t,n,s){return this.Vi.addReference(s,n),this.gi.delete(s.toString()),K.resolve()}removeReference(t,n,s){return this.Vi.removeReference(s,n),this.gi.add(s.toString()),K.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),K.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(c=>this.gi.add(c.toString()))}).next(()=>s.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.gi,s=>{const o=ht.fromPath(s);return this.pi(t,o).next(c=>{c||n.removeEntry(o,Tt.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(s=>{s?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return K.or([()=>K.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class Yc{constructor(t,n){this.persistence=t,this.yi=new Ls(s=>mC(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=w2(this,n)}static fi(t,n){return new Yc(t,n)}di(){}Ai(t){return K.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}br(t){let n=0;return this.yr(t,s=>{n++}).next(()=>n)}yr(t,n){return K.forEach(this.yi,(s,o)=>this.Dr(t,s,o).next(c=>c?K.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.si(t,f=>this.Dr(t,f,n).next(g=>{g||(s++,c.removeEntry(f,Tt.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),K.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),K.resolve()}removeReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),K.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),K.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=bc(t.data.value)),n}Dr(t,n,s){return K.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.yi.get(n);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class U2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class L2{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return cb()?8:fC(Ke())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,s,o){const c={result:null};return this.ws(t,n).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.bs(t,n,o,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new U2;return this.Ss(t,n,f).next(g=>{if(c.result=g,this.fs)return this.Ds(t,n,f,g.size)})}).next(()=>c.result)}Ds(t,n,s,o){return s.documentReadCount<this.gs?(Va()<=Vt.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",Pa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),K.resolve()):(Va()<=Vt.DEBUG&&it("QueryEngine","Query:",Pa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(Va()<=Vt.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",Pa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,hi(n))):K.resolve())}ws(t,n){if(Vv(n))return K.resolve(null);let s=hi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=em(n,null,"F"),s=hi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Pt(...c);return this.ys.getDocuments(t,f).next(g=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.vs(n,g);return this.Cs(n,y,f,p.readTime)?this.ws(t,em(n,null,"F")):this.Fs(t,y,n,p)}))})))}bs(t,n,s,o){return Vv(n)||o.isEqual(Tt.min())?K.resolve(null):this.ys.getDocuments(t,s).next(c=>{const f=this.vs(n,c);return this.Cs(n,f,s,o)?K.resolve(null):(Va()<=Vt.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Pa(n)),this.Fs(t,f,n,oC(o,Cl)).next(g=>g))})}vs(t,n){let s=new we(rT(t));return n.forEach((o,c)=>{uh(t,c)&&(s=s.add(c))}),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(t,n,s){return Va()<=Vt.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",Pa(n)),this.ys.getDocumentsMatchingQuery(t,n,xr.min(),s)}Fs(t,n,s,o){return this.ys.getDocumentsMatchingQuery(t,s,o).next(c=>(n.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */const Gm="LocalStore",z2=3e8;class B2{constructor(t,n,s,o){this.persistence=t,this.Ms=n,this.serializer=o,this.xs=new se(Rt),this.Os=new Ls(c=>Pm(c),km),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(s)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new C2(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function q2(r,t,n,s){return new B2(r,t,n,s)}async function IT(r,t){const n=At(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(c=>(o=c,n.Ls(t),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],g=[];let p=Pt();for(const y of o){f.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}for(const y of c){g.push(y.batchId);for(const T of y.mutations)p=p.add(T.key)}return n.localDocuments.getDocuments(s,p).next(y=>({ks:y,removedBatchIds:f,addedBatchIds:g}))})})}function H2(r,t){const n=At(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),c=n.Bs.newChangeBuffer({trackRemovals:!0});return function(g,p,y,T){const I=y.batch,C=I.keys();let H=K.resolve();return C.forEach($=>{H=H.next(()=>T.getEntry(p,$)).next(et=>{const Z=y.docVersions.get($);Ft(Z!==null,48541),et.version.compareTo(Z)<0&&(I.applyToRemoteDocument(et,y),et.isValidDocument()&&(et.setReadTime(y.commitVersion),T.addEntry(et)))})}),H.next(()=>g.mutationQueue.removeMutationBatch(p,I))}(n,s,t,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let p=Pt();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(p=p.add(g.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function CT(r){const t=At(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function j2(r,t){const n=At(r),s=t.snapshotVersion;let o=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=n.Bs.newChangeBuffer({trackRemovals:!0});o=n.xs;const g=[];t.targetChanges.forEach((T,I)=>{const C=o.get(I);if(!C)return;g.push(n.Ti.removeMatchingKeys(c,T.removedDocuments,I).next(()=>n.Ti.addMatchingKeys(c,T.addedDocuments,I)));let H=C.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(I)!==null?H=H.withResumeToken(Be.EMPTY_BYTE_STRING,Tt.min()).withLastLimboFreeSnapshotVersion(Tt.min()):T.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(T.resumeToken,s)),o=o.insert(I,H),function(et,Z,St){return et.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=z2?!0:St.addedDocuments.size+St.modifiedDocuments.size+St.removedDocuments.size>0}(C,H,T)&&g.push(n.Ti.updateTargetData(c,H))});let p=Xi(),y=Pt();if(t.documentUpdates.forEach(T=>{t.resolvedLimboDocuments.has(T)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(c,T))}),g.push(F2(c,f,t.documentUpdates).next(T=>{p=T.qs,y=T.Qs})),!s.isEqual(Tt.min())){const T=n.Ti.getLastRemoteSnapshotVersion(c).next(I=>n.Ti.setTargetsMetadata(c,c.currentSequenceNumber,s));g.push(T)}return K.waitFor(g).next(()=>f.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,p,y)).next(()=>p)}).then(c=>(n.xs=o,c))}function F2(r,t,n){let s=Pt(),o=Pt();return n.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=Xi();return n.forEach((g,p)=>{const y=c.get(g);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(g)),p.isNoDocument()&&p.version.isEqual(Tt.min())?(t.removeEntry(g,p.readTime),f=f.insert(g,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(g,p)):it(Gm,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",p.version)}),{qs:f,Qs:o}})}function G2(r,t){const n=At(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Nm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Q2(r,t){const n=At(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Ti.getTargetData(s,t).next(c=>c?(o=c,K.resolve(o)):n.Ti.allocateTargetId(s).next(f=>(o=new Or(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.xs=n.xs.insert(s.targetId,s),n.Os.set(t,s.targetId)),s})}async function am(r,t,n){const s=At(r),o=s.xs.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!to(f))throw f;it(Gm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.xs=s.xs.remove(t),s.Os.delete(o.target)}function Qv(r,t,n){const s=At(r);let o=Tt.min(),c=Pt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,T){const I=At(p),C=I.Os.get(T);return C!==void 0?K.resolve(I.xs.get(C)):I.Ti.getTargetData(y,T)}(s,f,hi(t)).next(g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(f,g.targetId).next(p=>{c=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(f,t,n?o:Tt.min(),n?c:Pt())).next(g=>(K2(s,VC(t),g),{documents:g,$s:c})))}function K2(r,t,n){let s=r.Ns.get(t)||Tt.min();n.forEach((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Ns.set(t,s)}class Kv{constructor(){this.activeTargetIds=zC()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Y2{constructor(){this.xo=new Kv,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,s){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Kv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class X2{No(t){}shutdown(){}}/**
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
 */const Yv="ConnectivityMonitor";class Xv{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){it(Yv,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){it(Yv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _c=null;function om(){return _c===null?_c=function(){return 268435456+Math.round(2147483648*Math.random())}():_c++,"0x"+_c.toString(16)}/**
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
 */const kd="RestConnection",$2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Z2{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===qc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(t,n,s,o,c){const f=om(),g=this.jo(t,n.toUriEncodedString());it(kd,`Sending RPC '${t}' ${f}:`,g,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,o,c);const{host:y}=new URL(g),T=Xa(y);return this.Jo(t,g,p,s,T).then(I=>(it(kd,`Received RPC '${t}' ${f}: `,I),I),I=>{throw Ha(kd,`RPC '${t}' ${f} failed with error: `,I,"url: ",g,"request:",s),I})}Yo(t,n,s,o,c,f){return this.zo(t,n,s,o,c)}Ho(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,c)=>t[c]=o),s&&s.headers.forEach((o,c)=>t[c]=o)}jo(t,n){const s=$2[t];return`${this.Ko}/v1/${n}:${s}`}terminate(){}}/**
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
 */class W2{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const Fe="WebChannelConnection";class J2 extends Z2{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,c){const f=om();return new Promise((g,p)=>{const y=new N0;y.setWithCredentials(!0),y.listenOnce(M0.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Sc.NO_ERROR:const I=y.getResponseJson();it(Fe,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(I)),g(I);break;case Sc.TIMEOUT:it(Fe,`RPC '${t}' ${f} timed out`),p(new rt(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const C=y.getStatus();if(it(Fe,`RPC '${t}' ${f} failed with status:`,C,"response text:",y.getResponseText()),C>0){let H=y.getResponseJson();Array.isArray(H)&&(H=H[0]);const $=H?.error;if($&&$.status&&$.message){const et=function(St){const dt=St.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(dt)>=0?dt:Y.UNKNOWN}($.status);p(new rt(et,$.message))}else p(new rt(Y.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new rt(Y.UNAVAILABLE,"Connection failed."));break;default:pt(9055,{h_:t,streamId:f,P_:y.getLastErrorCode(),T_:y.getLastError()})}}finally{it(Fe,`RPC '${t}' ${f} completed.`)}});const T=JSON.stringify(o);it(Fe,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",T,s,15)})}I_(t,n,s){const o=om(),c=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=k0(),g=P0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const T=c.join("");it(Fe,`Creating RPC '${t}' stream ${o}: ${T}`,p);const I=f.createWebChannel(T,p);this.E_(I);let C=!1,H=!1;const $=new W2({Zo:Z=>{H?it(Fe,`Not sending because RPC '${t}' stream ${o} is closed:`,Z):(C||(it(Fe,`Opening RPC '${t}' stream ${o} transport.`),I.open(),C=!0),it(Fe,`RPC '${t}' stream ${o} sending:`,Z),I.send(Z))},Xo:()=>I.close()}),et=(Z,St,dt)=>{Z.listen(St,ut=>{try{dt(ut)}catch(Ot){setTimeout(()=>{throw Ot},0)}})};return et(I,gl.EventType.OPEN,()=>{H||(it(Fe,`RPC '${t}' stream ${o} transport opened.`),$.__())}),et(I,gl.EventType.CLOSE,()=>{H||(H=!0,it(Fe,`RPC '${t}' stream ${o} transport closed`),$.u_(),this.d_(I))}),et(I,gl.EventType.ERROR,Z=>{H||(H=!0,Ha(Fe,`RPC '${t}' stream ${o} transport errored. Name:`,Z.name,"Message:",Z.message),$.u_(new rt(Y.UNAVAILABLE,"The operation could not be completed")))}),et(I,gl.EventType.MESSAGE,Z=>{var St;if(!H){const dt=Z.data[0];Ft(!!dt,16349);const ut=dt,Ot=ut?.error||((St=ut[0])===null||St===void 0?void 0:St.error);if(Ot){it(Fe,`RPC '${t}' stream ${o} received error:`,Ot);const _t=Ot.status;let It=function(R){const N=ye[R];if(N!==void 0)return gT(N)}(_t),M=Ot.message;It===void 0&&(It=Y.INTERNAL,M="Unknown error status: "+_t+" with message "+Ot.message),H=!0,$.u_(new rt(It,M)),I.close()}else it(Fe,`RPC '${t}' stream ${o} received:`,dt),$.c_(dt)}}),et(g,V0.STAT_EVENT,Z=>{Z.stat===Yd.PROXY?it(Fe,`RPC '${t}' stream ${o} detected buffering proxy`):Z.stat===Yd.NOPROXY&&it(Fe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.a_()},0),$}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(n=>n===t)}}function xd(){return typeof document<"u"?document:null}/**
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
 */function dh(r){return new i2(r,!0)}/**
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
 */class DT{constructor(t,n,s=1e3,o=1.5,c=6e4){this.xi=t,this.timerId=n,this.A_=s,this.R_=o,this.V_=c,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const n=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,n-s);o>0&&it("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const $v="PersistentStream";class OT{constructor(t,n,s,o,c,f,g,p){this.xi=t,this.S_=s,this.D_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new DT(t,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(Yi(n.toString()),Yi("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===n&&this.z_(s,o)},s=>{t(()=>{const o=new rt(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(t,n){const s=this.G_(this.v_);this.stream=this.H_(t,n),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return it($v,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return n=>{this.xi.enqueueAndForget(()=>this.v_===t?n():(it($v,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tD extends OT{constructor(t,n,s,o,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}H_(t,n){return this.connection.I_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const n=a2(this.serializer,t),s=function(c){if(!("targetChange"in c))return Tt.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Tt.min():f.readTime?fi(f.readTime):Tt.min()}(t);return this.listener.Y_(n,s)}Z_(t){const n={};n.database=sm(this.serializer),n.addTarget=function(c,f){let g;const p=f.target;if(g=Jd(p)?{documents:u2(c,p)}:{query:c2(c,p).gt},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=_T(c,f.resumeToken);const y=nm(c,f.expectedCount);y!==null&&(g.expectedCount=y)}else if(f.snapshotVersion.compareTo(Tt.min())>0){g.readTime=Kc(c,f.snapshotVersion.toTimestamp());const y=nm(c,f.expectedCount);y!==null&&(g.expectedCount=y)}return g}(this.serializer,t);const s=f2(this.serializer,t);s&&(n.labels=s),this.Q_(n)}X_(t){const n={};n.database=sm(this.serializer),n.removeTarget=t,this.Q_(n)}}class eD extends OT{constructor(t,n,s,o,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,n){return this.connection.I_("Write",t,n)}J_(t){return Ft(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ft(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){Ft(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const n=l2(t.writeResults,t.commitTime),s=fi(t.commitTime);return this.listener.ra(s,n)}ia(){const t={};t.database=sm(this.serializer),this.Q_(t)}ta(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>o2(this.serializer,s))};this.Q_(n)}}/**
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
 */class nD{}class iD extends nD{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new rt(Y.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.zo(t,im(n,s),o,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new rt(Y.UNKNOWN,c.toString())})}Yo(t,n,s,o,c){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Yo(t,im(n,s),o,f,g,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new rt(Y.UNKNOWN,f.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class rD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Yi(n),this.ua=!1):it("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Ps="RemoteStore";class sD{constructor(t,n,s,o,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=c,this.Ra.No(f=>{s.enqueueAndForget(async()=>{Bs(this)&&(it(Ps,"Restarting streams for network reachability change."),await async function(p){const y=At(p);y.da.add(4),await ql(y),y.Va.set("Unknown"),y.da.delete(4),await mh(y)}(this))})}),this.Va=new rD(s,o)}}async function mh(r){if(Bs(r))for(const t of r.Aa)await t(!0)}async function ql(r){for(const t of r.Aa)await t(!1)}function NT(r,t){const n=At(r);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),Xm(n)?Ym(n):eo(n).N_()&&Km(n,t))}function Qm(r,t){const n=At(r),s=eo(n);n.Ea.delete(t),s.N_()&&MT(n,t),n.Ea.size===0&&(s.N_()?s.k_():Bs(n)&&n.Va.set("Unknown"))}function Km(r,t){if(r.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Tt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}eo(r).Z_(t)}function MT(r,t){r.ma.Ke(t),eo(r).X_(t)}function Ym(r){r.ma=new JC({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Ea.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),eo(r).start(),r.Va.ca()}function Xm(r){return Bs(r)&&!eo(r).O_()&&r.Ea.size>0}function Bs(r){return At(r).da.size===0}function VT(r){r.ma=void 0}async function aD(r){r.Va.set("Online")}async function oD(r){r.Ea.forEach((t,n)=>{Km(r,t)})}async function lD(r,t){VT(r),Xm(r)?(r.Va.Pa(t),Ym(r)):r.Va.set("Unknown")}async function uD(r,t,n){if(r.Va.set("Online"),t instanceof yT&&t.state===2&&t.cause)try{await async function(o,c){const f=c.cause;for(const g of c.targetIds)o.Ea.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o.Ea.delete(g),o.ma.removeTarget(g))}(r,t)}catch(s){it(Ps,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Xc(r,s)}else if(t instanceof Ic?r.ma.Xe(t):t instanceof pT?r.ma.ot(t):r.ma.nt(t),!n.isEqual(Tt.min()))try{const s=await CT(r.localStore);n.compareTo(s)>=0&&await function(c,f){const g=c.ma.It(f);return g.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const T=c.Ea.get(y);T&&c.Ea.set(y,T.withResumeToken(p.resumeToken,f))}}),g.targetMismatches.forEach((p,y)=>{const T=c.Ea.get(p);if(!T)return;c.Ea.set(p,T.withResumeToken(Be.EMPTY_BYTE_STRING,T.snapshotVersion)),MT(c,p);const I=new Or(T.target,p,y,T.sequenceNumber);Km(c,I)}),c.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(s){it(Ps,"Failed to raise snapshot:",s),await Xc(r,s)}}async function Xc(r,t,n){if(!to(t))throw t;r.da.add(1),await ql(r),r.Va.set("Offline"),n||(n=()=>CT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{it(Ps,"Retrying IndexedDB access"),await n(),r.da.delete(1),await mh(r)})}function PT(r,t){return t().catch(n=>Xc(r,n,t))}async function gh(r){const t=At(r),n=Br(t);let s=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:Nm;for(;cD(t);)try{const o=await G2(t.localStore,s);if(o===null){t.Ia.length===0&&n.k_();break}s=o.batchId,hD(t,o)}catch(o){await Xc(t,o)}kT(t)&&xT(t)}function cD(r){return Bs(r)&&r.Ia.length<10}function hD(r,t){r.Ia.push(t);const n=Br(r);n.N_()&&n.ea&&n.ta(t.mutations)}function kT(r){return Bs(r)&&!Br(r).O_()&&r.Ia.length>0}function xT(r){Br(r).start()}async function fD(r){Br(r).ia()}async function dD(r){const t=Br(r);for(const n of r.Ia)t.ta(n.mutations)}async function mD(r,t,n){const s=r.Ia.shift(),o=zm.from(s,t,n);await PT(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await gh(r)}async function gD(r,t){t&&Br(r).ea&&await async function(s,o){if(function(f){return ZC(f)&&f!==Y.ABORTED}(o.code)){const c=s.Ia.shift();Br(s).L_(),await PT(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o)),await gh(s)}}(r,t),kT(r)&&xT(r)}async function Zv(r,t){const n=At(r);n.asyncQueue.verifyOperationInProgress(),it(Ps,"RemoteStore received new credentials");const s=Bs(n);n.da.add(3),await ql(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.da.delete(3),await mh(n)}async function pD(r,t){const n=At(r);t?(n.da.delete(2),await mh(n)):t||(n.da.add(2),await ql(n),n.Va.set("Unknown"))}function eo(r){return r.fa||(r.fa=function(n,s,o){const c=At(n);return c.oa(),new tD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{e_:aD.bind(null,r),n_:oD.bind(null,r),i_:lD.bind(null,r),Y_:uD.bind(null,r)}),r.Aa.push(async t=>{t?(r.fa.L_(),Xm(r)?Ym(r):r.Va.set("Unknown")):(await r.fa.stop(),VT(r))})),r.fa}function Br(r){return r.ga||(r.ga=function(n,s,o){const c=At(n);return c.oa(),new eD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:fD.bind(null,r),i_:gD.bind(null,r),na:dD.bind(null,r),ra:mD.bind(null,r)}),r.Aa.push(async t=>{t?(r.ga.L_(),await gh(r)):(await r.ga.stop(),r.Ia.length>0&&(it(Ps,`Stopping write stream with ${r.Ia.length} pending writes`),r.Ia=[]))})),r.ga}/**
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
 */class $m{constructor(t,n,s,o,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,c){const f=Date.now()+s,g=new $m(t,n,f,o,c);return g.start(s),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new rt(Y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zm(r,t){if(Yi("AsyncQueue",`${t}: ${r}`),to(r))return new rt(Y.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ba{static emptySet(t){return new Ba(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ht.comparator(n.key,s.key):(n,s)=>ht.comparator(n.key,s.key),this.keyedMap=pl(),this.sortedSet=new se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ba)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ba;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Wv{constructor(){this.pa=new se(ht.comparator)}track(t){const n=t.doc.key,s=this.pa.get(n);s?t.type!==0&&s.type===3?this.pa=this.pa.insert(n,t):t.type===3&&s.type!==1?this.pa=this.pa.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.pa=this.pa.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.pa=this.pa.remove(n):t.type===1&&s.type===2?this.pa=this.pa.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):pt(63341,{Vt:t,ya:s}):this.pa=this.pa.insert(n,t)}wa(){const t=[];return this.pa.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ka{constructor(t,n,s,o,c,f,g,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,c){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new Ka(t,n,Ba.emptySet(n),f,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class yD{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class _D{constructor(){this.queries=Jv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=At(n),c=o.queries;o.queries=Jv(),c.forEach((f,g)=>{for(const p of g.Sa)p.onError(s)})})(this,new rt(Y.ABORTED,"Firestore shutting down"))}}function Jv(){return new Ls(r=>iT(r),lh)}async function UT(r,t){const n=At(r);let s=3;const o=t.query;let c=n.queries.get(o);c?!c.Da()&&t.va()&&(s=2):(c=new yD,s=t.va()?0:1);try{switch(s){case 0:c.ba=await n.onListen(o,!0);break;case 1:c.ba=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=Zm(f,`Initialization of query '${Pa(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,c),c.Sa.push(t),t.Fa(n.onlineState),c.ba&&t.Ma(c.ba)&&Wm(n)}async function LT(r,t){const n=At(r),s=t.query;let o=3;const c=n.queries.get(s);if(c){const f=c.Sa.indexOf(t);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?o=t.va()?0:1:!c.Da()&&t.va()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function vD(r,t){const n=At(r);let s=!1;for(const o of t){const c=o.query,f=n.queries.get(c);if(f){for(const g of f.Sa)g.Ma(o)&&(s=!0);f.ba=o}}s&&Wm(n)}function ED(r,t,n){const s=At(r),o=s.queries.get(t);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(t)}function Wm(r){r.Ca.forEach(t=>{t.next()})}var lm,tE;(tE=lm||(lm={})).xa="default",tE.Cache="cache";class zT{constructor(t,n,s){this.query=t,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Ka(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Na?this.La(t)&&(this.Oa.next(t),n=!0):this.ka(t,this.onlineState)&&(this.qa(t),n=!0),this.Ba=t,n}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),n=!0),n}ka(t,n){if(!t.fromCache||!this.va())return!0;const s=n!=="Offline";return(!this.options.Qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}La(t){if(t.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(t){t=Ka.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==lm.Cache}}/**
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
 */class BT{constructor(t){this.key=t}}class qT{constructor(t){this.key=t}}class TD{constructor(t,n){this.query=t,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pt(),this.mutatedKeys=Pt(),this.Za=rT(t),this.Xa=new Ba(this.Za)}get eu(){return this.Ha}tu(t,n){const s=n?n.nu:new Wv,o=n?n.Xa:this.Xa;let c=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((T,I)=>{const C=o.get(T),H=uh(this.query,I)?I:null,$=!!C&&this.mutatedKeys.has(C.key),et=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let Z=!1;C&&H?C.data.isEqual(H.data)?$!==et&&(s.track({type:3,doc:H}),Z=!0):this.ru(C,H)||(s.track({type:2,doc:H}),Z=!0,(p&&this.Za(H,p)>0||y&&this.Za(H,y)<0)&&(g=!0)):!C&&H?(s.track({type:0,doc:H}),Z=!0):C&&!H&&(s.track({type:1,doc:C}),Z=!0,(p||y)&&(g=!0)),Z&&(H?(f=f.add(H),c=et?c.add(T):c.delete(T)):(f=f.delete(T),c=c.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),c=c.delete(T.key),s.track({type:1,doc:T})}return{Xa:f,nu:s,Cs:g,mutatedKeys:c}}ru(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const c=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const f=t.nu.wa();f.sort((T,I)=>function(H,$){const et=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pt(20277,{Vt:Z})}};return et(H)-et($)}(T.type,I.type)||this.Za(T.doc,I.doc)),this.iu(s),o=o!=null&&o;const g=n&&!o?this.su():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Ja;return this.Ja=p,f.length!==0||y?{snapshot:new Ka(this.query,t.Xa,c,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:g}:{ou:g}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Wv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=Pt(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const n=[];return t.forEach(s=>{this.Ya.has(s)||n.push(new qT(s))}),this.Ya.forEach(s=>{t.has(s)||n.push(new BT(s))}),n}au(t){this.Ha=t.$s,this.Ya=Pt();const n=this.tu(t.documents);return this.applyChanges(n,!0)}uu(){return Ka.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Jm="SyncEngine";class AD{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class SD{constructor(t){this.key=t,this.cu=!1}}class bD{constructor(t,n,s,o,c,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.lu={},this.hu=new Ls(g=>iT(g),lh),this.Pu=new Map,this.Tu=new Set,this.Iu=new se(ht.comparator),this.Eu=new Map,this.du=new Hm,this.Au={},this.Ru=new Map,this.Vu=Qa.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function wD(r,t,n=!0){const s=KT(r);let o;const c=s.hu.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.uu()):o=await HT(s,t,n,!0),o}async function RD(r,t){const n=KT(r);await HT(n,t,!0,!1)}async function HT(r,t,n,s){const o=await Q2(r.localStore,hi(t)),c=o.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let g;return s&&(g=await ID(r,t,c,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&NT(r.remoteStore,o),g}async function ID(r,t,n,s,o){r.fu=(I,C,H)=>async function(et,Z,St,dt){let ut=Z.view.tu(St);ut.Cs&&(ut=await Qv(et.localStore,Z.query,!1).then(({documents:M})=>Z.view.tu(M,ut)));const Ot=dt&&dt.targetChanges.get(Z.targetId),_t=dt&&dt.targetMismatches.get(Z.targetId)!=null,It=Z.view.applyChanges(ut,et.isPrimaryClient,Ot,_t);return nE(et,Z.targetId,It.ou),It.snapshot}(r,I,C,H);const c=await Qv(r.localStore,t,!0),f=new TD(t,c.$s),g=f.tu(c.documents),p=Bl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(g,r.isPrimaryClient,p);nE(r,n,y.ou);const T=new AD(t,n,f);return r.hu.set(t,T),r.Pu.has(n)?r.Pu.get(n).push(t):r.Pu.set(n,[t]),y.snapshot}async function CD(r,t,n){const s=At(r),o=s.hu.get(t),c=s.Pu.get(o.targetId);if(c.length>1)return s.Pu.set(o.targetId,c.filter(f=>!lh(f,t))),void s.hu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await am(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Qm(s.remoteStore,o.targetId),um(s,o.targetId)}).catch(Ja)):(um(s,o.targetId),await am(s.localStore,o.targetId,!0))}async function DD(r,t){const n=At(r),s=n.hu.get(t),o=n.Pu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Qm(n.remoteStore,s.targetId))}async function OD(r,t,n){const s=UD(r);try{const o=await function(f,g){const p=At(f),y=be.now(),T=g.reduce((H,$)=>H.add($.key),Pt());let I,C;return p.persistence.runTransaction("Locally write mutations","readwrite",H=>{let $=Xi(),et=Pt();return p.Bs.getEntries(H,T).next(Z=>{$=Z,$.forEach((St,dt)=>{dt.isValidDocument()||(et=et.add(St))})}).next(()=>p.localDocuments.getOverlayedDocuments(H,$)).next(Z=>{I=Z;const St=[];for(const dt of g){const ut=QC(dt,I.get(dt.key).overlayedDocument);ut!=null&&St.push(new zs(dt.key,ut,X0(ut.value.mapValue),Hn.exists(!0)))}return p.mutationQueue.addMutationBatch(H,y,St,g)}).next(Z=>{C=Z;const St=Z.applyToLocalDocumentSet(I,et);return p.documentOverlayCache.saveOverlays(H,Z.batchId,St)})}).then(()=>({batchId:C.batchId,changes:aT(I)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,g,p){let y=f.Au[f.currentUser.toKey()];y||(y=new se(Rt)),y=y.insert(g,p),f.Au[f.currentUser.toKey()]=y}(s,o.batchId,n),await Hl(s,o.changes),await gh(s.remoteStore)}catch(o){const c=Zm(o,"Failed to persist write");n.reject(c)}}async function jT(r,t){const n=At(r);try{const s=await j2(n.localStore,t);t.targetChanges.forEach((o,c)=>{const f=n.Eu.get(c);f&&(Ft(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.cu=!0:o.modifiedDocuments.size>0?Ft(f.cu,14607):o.removedDocuments.size>0&&(Ft(f.cu,42227),f.cu=!1))}),await Hl(n,s,t)}catch(s){await Ja(s)}}function eE(r,t,n){const s=At(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.hu.forEach((c,f)=>{const g=f.view.Fa(t);g.snapshot&&o.push(g.snapshot)}),function(f,g){const p=At(f);p.onlineState=g;let y=!1;p.queries.forEach((T,I)=>{for(const C of I.Sa)C.Fa(g)&&(y=!0)}),y&&Wm(p)}(s.eventManager,t),o.length&&s.lu.Y_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ND(r,t,n){const s=At(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Eu.get(t),c=o&&o.key;if(c){let f=new se(ht.comparator);f=f.insert(c,Qe.newNoDocument(c,Tt.min()));const g=Pt().add(c),p=new fh(Tt.min(),new Map,new se(Rt),f,g);await jT(s,p),s.Iu=s.Iu.remove(c),s.Eu.delete(t),tg(s)}else await am(s.localStore,t,!1).then(()=>um(s,t,n)).catch(Ja)}async function MD(r,t){const n=At(r),s=t.batch.batchId;try{const o=await H2(n.localStore,t);GT(n,s,null),FT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hl(n,o)}catch(o){await Ja(o)}}async function VD(r,t,n){const s=At(r);try{const o=await function(f,g){const p=At(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let T;return p.mutationQueue.lookupMutationBatch(y,g).next(I=>(Ft(I!==null,37113),T=I.keys(),p.mutationQueue.removeMutationBatch(y,I))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,T,g)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T)).next(()=>p.localDocuments.getDocuments(y,T))})}(s.localStore,t);GT(s,t,n),FT(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Hl(s,o)}catch(o){await Ja(o)}}function FT(r,t){(r.Ru.get(t)||[]).forEach(n=>{n.resolve()}),r.Ru.delete(t)}function GT(r,t,n){const s=At(r);let o=s.Au[s.currentUser.toKey()];if(o){const c=o.get(t);c&&(n?c.reject(n):c.resolve(),o=o.remove(t)),s.Au[s.currentUser.toKey()]=o}}function um(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Pu.get(t))r.hu.delete(s),n&&r.lu.gu(s,n);r.Pu.delete(t),r.isPrimaryClient&&r.du.Hr(t).forEach(s=>{r.du.containsKey(s)||QT(r,s)})}function QT(r,t){r.Tu.delete(t.path.canonicalString());const n=r.Iu.get(t);n!==null&&(Qm(r.remoteStore,n),r.Iu=r.Iu.remove(t),r.Eu.delete(n),tg(r))}function nE(r,t,n){for(const s of n)s instanceof BT?(r.du.addReference(s.key,t),PD(r,s)):s instanceof qT?(it(Jm,"Document no longer in limbo: "+s.key),r.du.removeReference(s.key,t),r.du.containsKey(s.key)||QT(r,s.key)):pt(19791,{pu:s})}function PD(r,t){const n=t.key,s=n.path.canonicalString();r.Iu.get(n)||r.Tu.has(s)||(it(Jm,"New document in limbo: "+n),r.Tu.add(s),tg(r))}function tg(r){for(;r.Tu.size>0&&r.Iu.size<r.maxConcurrentLimboResolutions;){const t=r.Tu.values().next().value;r.Tu.delete(t);const n=new ht(ee.fromString(t)),s=r.Vu.next();r.Eu.set(s,new SD(n)),r.Iu=r.Iu.insert(n,s),NT(r.remoteStore,new Or(hi(xm(n.path)),s,"TargetPurposeLimboResolution",sh.le))}}async function Hl(r,t,n){const s=At(r),o=[],c=[],f=[];s.hu.isEmpty()||(s.hu.forEach((g,p)=>{f.push(s.fu(p,t,n).then(y=>{var T;if((y||n)&&s.isPrimaryClient){const I=y?!y.fromCache:(T=n?.targetChanges.get(p.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(p.targetId,I?"current":"not-current")}if(y){o.push(y);const I=Fm.Rs(p.targetId,y);c.push(I)}}))}),await Promise.all(f),s.lu.Y_(o),await async function(p,y){const T=At(p);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>K.forEach(y,C=>K.forEach(C.ds,H=>T.persistence.referenceDelegate.addReference(I,C.targetId,H)).next(()=>K.forEach(C.As,H=>T.persistence.referenceDelegate.removeReference(I,C.targetId,H)))))}catch(I){if(!to(I))throw I;it(Gm,"Failed to update sequence numbers: "+I)}for(const I of y){const C=I.targetId;if(!I.fromCache){const H=T.xs.get(C),$=H.snapshotVersion,et=H.withLastLimboFreeSnapshotVersion($);T.xs=T.xs.insert(C,et)}}}(s.localStore,c))}async function kD(r,t){const n=At(r);if(!n.currentUser.isEqual(t)){it(Jm,"User change. New user:",t.toKey());const s=await IT(n.localStore,t);n.currentUser=t,function(c,f){c.Ru.forEach(g=>{g.forEach(p=>{p.reject(new rt(Y.CANCELLED,f))})}),c.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Hl(n,s.ks)}}function xD(r,t){const n=At(r),s=n.Eu.get(t);if(s&&s.cu)return Pt().add(s.key);{let o=Pt();const c=n.Pu.get(t);if(!c)return o;for(const f of c){const g=n.hu.get(f);o=o.unionWith(g.view.eu)}return o}}function KT(r){const t=At(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=jT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ND.bind(null,t),t.lu.Y_=vD.bind(null,t.eventManager),t.lu.gu=ED.bind(null,t.eventManager),t}function UD(r){const t=At(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=MD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=VD.bind(null,t),t}class $c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=dh(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,n){return null}Cu(t,n){return null}Du(t){return q2(this.persistence,new L2,t.initialUser,this.serializer)}Su(t){return new RT(jm.fi,this.serializer)}bu(t){return new Y2}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$c.provider={build:()=>new $c};class LD extends $c{constructor(t){super(),this.cacheSizeBytes=t}vu(t,n){Ft(this.persistence.referenceDelegate instanceof Yc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new S2(s,t.asyncQueue,n)}Su(t){const n=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new RT(s=>Yc.fi(s,n),this.serializer)}}class cm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>eE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kD.bind(null,this.syncEngine),await pD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _D}()}createDatastore(t){const n=dh(t.databaseInfo.databaseId),s=function(c){return new J2(c)}(t.databaseInfo);return function(c,f,g,p){return new iD(c,f,g,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,c,f,g){return new sD(s,o,c,f,g)}(this.localStore,this.datastore,t.asyncQueue,n=>eE(this.syncEngine,n,0),function(){return Xv.C()?new Xv:new X2}())}createSyncEngine(t,n){return function(o,c,f,g,p,y,T){const I=new bD(o,c,f,g,p,y);return T&&(I.mu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const c=At(o);it(Ps,"RemoteStore shutting down."),c.da.add(5),await ql(c),c.Ra.shutdown(),c.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cm.provider={build:()=>new cm};/**
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
 */class YT{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Yi("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const qr="FirestoreClient";class zD{constructor(t,n,s,o,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ge.UNAUTHENTICATED,this.clientId=z0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{it(qr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(it(qr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Zm(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ud(r,t){r.asyncQueue.verifyOperationInProgress(),it(qr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await IT(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function iE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await BD(r);it(qr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Zv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Zv(t.remoteStore,o)),r._onlineComponents=t}async function BD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){it(qr,"Using user provided OfflineComponentProvider");try{await Ud(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Ha("Error using user provided cache. Falling back to memory cache: "+n),await Ud(r,new $c)}}else it(qr,"Using default OfflineComponentProvider"),await Ud(r,new LD(void 0));return r._offlineComponents}async function XT(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(it(qr,"Using user provided OnlineComponentProvider"),await iE(r,r._uninitializedComponentsProvider._online)):(it(qr,"Using default OnlineComponentProvider"),await iE(r,new cm))),r._onlineComponents}function qD(r){return XT(r).then(t=>t.syncEngine)}async function $T(r){const t=await XT(r),n=t.eventManager;return n.onListen=wD.bind(null,t.syncEngine),n.onUnlisten=CD.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=RD.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=DD.bind(null,t.syncEngine),n}function HD(r,t,n={}){const s=new Gi;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,g,p,y){const T=new YT({next:C=>{T.xu(),f.enqueueAndForget(()=>LT(c,I));const H=C.docs.has(g);!H&&C.fromCache?y.reject(new rt(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):H&&C.fromCache&&p&&p.source==="server"?y.reject(new rt(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(C)},error:C=>y.reject(C)}),I=new zT(xm(g.path),T,{includeMetadataChanges:!0,Qa:!0});return UT(c,I)}(await $T(r),r.asyncQueue,t,n,s)),s.promise}function jD(r,t,n={}){const s=new Gi;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,g,p,y){const T=new YT({next:C=>{T.xu(),f.enqueueAndForget(()=>LT(c,I)),C.fromCache&&p.source==="server"?y.reject(new rt(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(C)},error:C=>y.reject(C)}),I=new zT(g,T,{includeMetadataChanges:!0,Qa:!0});return UT(c,I)}(await $T(r),r.asyncQueue,t,n,s)),s.promise}/**
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
 */function ZT(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */function WT(r,t,n){if(!n)throw new rt(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function FD(r,t,n,s){if(t===!0&&s===!0)throw new rt(Y.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function sE(r){if(!ht.isDocumentKey(r))throw new rt(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function aE(r){if(ht.isDocumentKey(r))throw new rt(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ph(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":pt(12329,{type:typeof r})}function $i(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new rt(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ph(r);throw new rt(Y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */const JT="firestore.googleapis.com",oE=!0;class lE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new rt(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=JT,this.ssl=oE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:oE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=wT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<T2)throw new rt(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}FD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZT((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new rt(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new rt(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new rt(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new rt(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new rt(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new WI;switch(s.type){case"firstParty":return new nC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new rt(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=rE.get(n);s&&(it("ComponentProvider","Removing Datastore"),rE.delete(n),s.terminate())}(this),Promise.resolve()}}function GD(r,t,n,s={}){var o;r=$i(r,yh);const c=Xa(t),f=r._getSettings(),g=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${n}`;c&&(TE(`https://${p}`),AE("Firestore",!0)),f.host!==JT&&f.host!==p&&Ha("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:p,ssl:c,emulatorOptions:s});if(!kr(y,g)&&(r._setSettings(y),s.mockUserToken)){let T,I;if(typeof s.mockUserToken=="string")T=s.mockUserToken,I=Ge.MOCK_USER;else{T=nb(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new rt(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Ge(C)}r._authCredentials=new JI(new U0(T,I))}}/**
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
 */class no{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new no(this.firestore,t,this._query)}}class sn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sn(this.firestore,t,this._key)}}class Pr extends no{constructor(t,n,s){super(t,n,xm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sn(this.firestore,null,new ht(t))}withConverter(t){return new Pr(this.firestore,t,this._path)}}function uE(r,t,...n){if(r=Ye(r),WT("collection","path",t),r instanceof yh){const s=ee.fromString(t,...n);return aE(s),new Pr(r,null,s)}{if(!(r instanceof sn||r instanceof Pr))throw new rt(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ee.fromString(t,...n));return aE(s),new Pr(r.firestore,null,s)}}function Cc(r,t,...n){if(r=Ye(r),arguments.length===1&&(t=z0.newId()),WT("doc","path",t),r instanceof yh){const s=ee.fromString(t,...n);return sE(s),new sn(r,null,new ht(s))}{if(!(r instanceof sn||r instanceof Pr))throw new rt(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ee.fromString(t,...n));return sE(s),new sn(r.firestore,r instanceof Pr?r.converter:null,new ht(s))}}/**
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
 */const cE="AsyncQueue";class hE{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new DT(this,"async_queue_retry"),this.rc=()=>{const s=xd();s&&it(cE,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=t;const n=xd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const n=xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new Gi;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!to(t))throw t;it(cE,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const n=this.sc.then(()=>(this.ec=!0,t().catch(s=>{throw this.Xu=s,this.ec=!1,Yi("INTERNAL UNHANDLED ERROR: ",fE(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=n,n}enqueueAfterDelay(t,n,s){this.oc(),this.nc.indexOf(t)>-1&&(n=0);const o=$m.createAndSchedule(this,t,n,s,c=>this.uc(c));return this.Zu.push(o),o}oc(){this.Xu&&pt(47125,{cc:fE(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const n of this.Zu)if(n.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const n=this.Zu.indexOf(t);this.Zu.splice(n,1)}}function fE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class io extends yh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new hE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hE(t),this._firestoreClient=void 0,await t}}}function QD(r,t){const n=typeof r=="object"?r:dm(),s=typeof r=="string"?r:qc,o=xs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=tb("firestore");c&&GD(o,...c)}return o}function eg(r){if(r._terminated)throw new rt(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||KD(r),r._firestoreClient}function KD(r){var t,n,s;const o=r._freezeSettings(),c=function(g,p,y,T){return new yC(g,p,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,ZT(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new zD(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(g){const p=g?._online.build();return{_offline:g?._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class Ya{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ya(Be.fromBase64String(t))}catch(n){throw new rt(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ya(Be.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ng{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new rt(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class tA{constructor(t){this._methodName=t}}/**
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
 */class ig{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new rt(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new rt(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Rt(this._lat,t._lat)||Rt(this._long,t._long)}}/**
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
 */const YD=/^__.*__$/;class XD{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new zs(t,this.data,this.fieldMask,n,this.fieldTransforms):new zl(t,this.data,n,this.fieldTransforms)}}function eA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pt(40011,{Ic:r})}}class sg{constructor(t,n,s,o,c,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Ec(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new sg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Vc(t),o}mc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return Zc(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(eA(this.Ic)&&YD.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class $D{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||dh(t)}bc(t,n,s,o=!1){return new sg({Ic:t,methodName:n,wc:s,path:ze.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ag(r){const t=r._freezeSettings(),n=dh(r._databaseId);return new $D(r._databaseId,!!t.ignoreUndefinedProperties,n)}function nA(r,t,n,s,o,c={}){const f=r.bc(c.merge||c.mergeFields?2:0,t,n,o);sA("Data must be an object, but it was:",f,s);const g=iA(s,f);let p,y;if(c.merge)p=new Bn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const T=[];for(const I of c.mergeFields){const C=WD(t,I,n);if(!f.contains(C))throw new rt(Y.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);tO(T,C)||T.push(C)}p=new Bn(T),y=f.fieldTransforms.filter(I=>p.covers(I.field))}else p=null,y=f.fieldTransforms;return new XD(new Dn(g),p,y)}function ZD(r,t,n,s=!1){return og(n,r.bc(s?4:3,t))}function og(r,t){if(rA(r=Ye(r)))return sA("Unsupported field value:",t,r),iA(r,t);if(r instanceof tA)return function(s,o){if(!eA(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(s,o){const c=[];let f=0;for(const g of s){let p=og(g,o.fc(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,o){if((s=Ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return BC(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=be.fromDate(s);return{timestampValue:Kc(o.serializer,c)}}if(s instanceof be){const c=new be(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Kc(o.serializer,c)}}if(s instanceof ig)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ya)return{bytesValue:_T(o.serializer,s._byteString)};if(s instanceof sn){const c=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw o.gc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:qm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof rg)return function(f,g){return{mapValue:{fields:{[K0]:{stringValue:Y0},[Hc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw g.gc("VectorValues must only contain numeric values.");return Um(g.serializer,y)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${ph(s)}`)}(r,t)}function iA(r,t){const n={};return q0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Us(r,(s,o)=>{const c=og(o,t.Ac(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function rA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof be||r instanceof ig||r instanceof Ya||r instanceof sn||r instanceof tA||r instanceof rg)}function sA(r,t,n){if(!rA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=ph(n);throw s==="an object"?t.gc(r+" a custom object"):t.gc(r+" "+s)}}function WD(r,t,n){if((t=Ye(t))instanceof ng)return t._internalPath;if(typeof t=="string")return aA(r,t);throw Zc("Field path arguments must be of type string or ",r,!1,void 0,n)}const JD=new RegExp("[~\\*/\\[\\]]");function aA(r,t,n){if(t.search(JD)>=0)throw Zc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new ng(...t.split("."))._internalPath}catch{throw Zc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Zc(r,t,n,s,o){const c=s&&!s.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new rt(Y.INVALID_ARGUMENT,g+r+p)}function tO(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class oA{constructor(t,n,s,o,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new eO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(lA("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eO extends oA{data(){return super.data()}}function lA(r,t){return typeof t=="string"?aA(r,t):t instanceof ng?t._internalPath:t._delegate._internalPath}/**
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
 */function nO(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new rt(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lg{}class iO extends lg{}function rO(r,t,...n){let s=[];t instanceof lg&&s.push(t),s=s.concat(n),function(c){const f=c.filter(p=>p instanceof cg).length,g=c.filter(p=>p instanceof ug).length;if(f>1||f>0&&g>0)throw new rt(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class ug extends iO{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new ug(t,n,s)}_apply(t){const n=this._parse(t);return uA(t._query,n),new no(t.firestore,t.converter,tm(t._query,n))}_parse(t){const n=ag(t.firestore);return function(c,f,g,p,y,T,I){let C;if(y.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new rt(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){mE(I,T);const $=[];for(const et of I)$.push(dE(p,c,et));C={arrayValue:{values:$}}}else C=dE(p,c,I)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||mE(I,T),C=ZD(g,f,I,T==="in"||T==="not-in");return _e.create(y,T,C)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class cg extends lg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new cg(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Fn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,c){let f=o;const g=c.getFlattenedFilters();for(const p of g)uA(f,p),f=tm(f,p)}(t._query,n),new no(t.firestore,t.converter,tm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function dE(r,t,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new rt(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nT(t)&&n.indexOf("/")!==-1)throw new rt(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(ee.fromString(n));if(!ht.isDocumentKey(s))throw new rt(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Iv(r,new ht(s))}if(n instanceof sn)return Iv(r,n._key);throw new rt(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ph(n)}.`)}function mE(r,t){if(!Array.isArray(r)||r.length===0)throw new rt(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function uA(r,t){const n=function(o,c){for(const f of o)for(const g of f.getFlattenedFilters())if(c.indexOf(g.op)>=0)return g.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new rt(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new rt(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class sO{convertValue(t,n="none"){switch(zr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Lr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw pt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Us(t,(o,c)=>{s[o]=this.convertValue(c,n)}),s}convertVectorValue(t){var n,s,o;const c=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[Hc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>fe(f.doubleValue));return new rg(c)}convertGeoPoint(t){return new ig(fe(t.latitude),fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=oh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Dl(t));default:return null}}convertTimestamp(t){const n=Ur(t);return new be(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ee.fromString(t);Ft(bT(s),9688,{name:t});const o=new Ol(s.get(1),s.get(3)),c=new ht(s.popFirst(5));return o.isEqual(n)||Yi(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */function cA(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
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
 */class _l{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hA extends oA{constructor(t,n,s,o,c,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Dc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(lA("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Dc extends hA{data(t={}){return super.data(t)}}class aO{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new _l(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Dc(this._firestore,this._userDataWriter,s.key,s,new _l(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new rt(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(g=>{const p=new Dc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new _l(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(g=>c||g.type!==3).map(g=>{const p=new Dc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new _l(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return g.type!==0&&(y=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),T=f.indexOf(g.doc.key)),{type:oO(g.type),doc:p,oldIndex:y,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pt(61501,{type:r})}}/**
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
 */function lO(r){r=$i(r,sn);const t=$i(r.firestore,io);return HD(eg(t),r._key).then(n=>dO(t,r,n))}class fA extends sO{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ya(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function uO(r){r=$i(r,no);const t=$i(r.firestore,io),n=eg(t),s=new fA(t);return nO(r._query),jD(n,r._query).then(o=>new aO(t,s,r,o))}function cO(r,t,n){r=$i(r,sn);const s=$i(r.firestore,io),o=cA(r.converter,t);return hg(s,[nA(ag(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Hn.none())])}function hO(r){return hg($i(r.firestore,io),[new Lm(r._key,Hn.none())])}function fO(r,t){const n=$i(r.firestore,io),s=Cc(r),o=cA(r.converter,t);return hg(n,[nA(ag(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Hn.exists(!1))]).then(()=>s)}function hg(r,t){return function(s,o){const c=new Gi;return s.asyncQueue.enqueueAndForget(async()=>OD(await qD(s),o,c)),c.promise}(eg(r),t)}function dO(r,t,n){const s=n.docs.get(t._key),o=new fA(r);return new hA(r,o,t._key,s,new _l(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){Wa=o})($a),di(new jn("firestore",(s,{instanceIdentifier:o,options:c})=>{const f=s.getProvider("app").getImmediate(),g=new io(new tC(s.getProvider("auth-internal")),new iC(f,s.getProvider("app-check-internal")),function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new rt(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ol(y.options.projectId,T)}(f,o),f);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),On(gv,pv,t),On(gv,pv,"esm2017")})();const mO={apiKey:"AIzaSyDxYyDUPCRPb5O6-GucCcmO4jcdf9rBEho",authDomain:"daily-money-94f02.firebaseapp.com",projectId:"daily-money-94f02",storageBucket:"daily-money-94f02.firebasestorage.app",messagingSenderId:"31843473349",appId:"1:31843473349:web:249d43c7856d1b60b39dac",measurementId:"G-6WZTW0WFRC"},fg=DE(mO);Kw(fg);const Ld=$I(fg),gO=new Hi,ml=QD(fg);function pO(){const[r,t]=Un.useState(""),[n,s]=Un.useState(""),[o,c]=Un.useState(""),[f,g]=Un.useState("daily"),[p,y]=Un.useState([]),[T,I]=Un.useState(null),[C,H]=Un.useState(!1),[$,et]=Un.useState(!1);Un.useEffect(()=>{const S=LR(Ld,ct=>{I(ct),ct?Z(ct.uid):(y([]),t(""))});return()=>S()},[]);const Z=async S=>{H(!0);try{const ct=await lO(Cc(ml,"users",S,"data","salary"));ct.exists()&&t(ct.data().amount.toString());const Bt=rO(uE(ml,"users",S,"costs")),tt=(await uO(Bt)).docs.map(ot=>({id:ot.id,...ot.data()}));y(tt)}catch(ct){console.error("Error loading user data:",ct)}H(!1)},St=async S=>{if(T)try{await cO(Cc(ml,"users",T.uid,"data","salary"),{amount:parseFloat(S)||0,updatedAt:new Date})}catch(ct){console.error("Error saving salary:",ct)}},dt=async S=>{if(T)try{return(await fO(uE(ml,"users",T.uid,"costs"),{name:S.name,amount:S.amount,period:S.period,createdAt:new Date})).id}catch(ct){return console.error("Error saving cost:",ct),null}},ut=async S=>{if(T)try{await hO(Cc(ml,"users",T.uid,"costs",S))}catch(ct){console.error("Error deleting cost:",ct)}},Ot=async()=>{try{console.log("Attempting Google sign-in...");const S=await sI(Ld,gO);console.log("Sign-in successful:",S.user)}catch(S){console.error("Sign-in error details:",{code:S.code,message:S.message,email:S.email,credential:S.credential}),S.code==="auth/popup-closed-by-user"?alert("Sign-in was cancelled. Please try again."):S.code==="auth/popup-blocked"?alert("Pop-up was blocked. Please allow pop-ups for this site and try again."):alert(`Sign-in failed: ${S.message}`)}},_t=async()=>{try{await zR(Ld)}catch(S){console.error("Error signing out:",S)}},It=async()=>{if(!n.trim()||!o.trim()){alert("Please fill in both cost name and amount");return}const S=parseFloat(o);if(isNaN(S)||S<=0){alert("Please enter a valid amount");return}et(!0);try{const ct={name:n.trim(),amount:S,period:f},Bt=await dt(ct);Bt?(y([...p,{...ct,id:Bt}]),s(""),c(""),console.log("Cost added successfully:",ct)):alert("Failed to save cost. Please try again.")}catch(ct){console.error("Error adding cost:",ct),alert("Error adding cost. Please try again.")}finally{et(!1)}},M=S=>{S.key==="Enter"&&It()},b=async S=>{const ct=S.target.value;if(t(ct),ct&&!isNaN(parseFloat(ct)))try{await St(ct),console.log("Salary saved successfully:",ct)}catch(Bt){console.error("Error saving salary:",Bt),alert("Error saving salary. Please try again.")}},R=()=>p.reduce((S,ct)=>{switch(ct.period){case"daily":return S+ct.amount*30;case"weekly":return S+ct.amount*4.33;case"monthly":return S+ct.amount;case"yearly":return S+ct.amount/12;default:return S}},0),N=()=>{const S=new Date;return new Date(S.getFullYear(),S.getMonth()+1,0).getDate()},V=()=>{const S=parseFloat(r)||0,ct=R(),Bt=S-ct,j=N();return Bt/j},k=async S=>{await ut(S),y(p.filter(ct=>ct.id!==S))};return at.createElement("div",{className:"p-6 max-w-4xl mx-auto"},at.createElement("h1",{className:"text-3xl font-bold mb-6 bg-purple-400 p-4 rounded"},"Budget Dashboard"),at.createElement("div",{className:"mb-6 p-4 border rounded bg-gray-50"},T?at.createElement("div",{className:"flex items-center justify-between"},at.createElement("div",{className:"flex items-center gap-3"},at.createElement("img",{src:T.photoURL,alt:"Profile",className:"w-8 h-8 rounded-full"}),at.createElement("span",null,"Welcome, ",T.displayName,"!")),at.createElement("button",{onClick:_t,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"},"Sign Out")):at.createElement("div",{className:"text-center"},at.createElement("p",{className:"mb-4"},"Please sign in to use the budget dashboard"),at.createElement("button",{onClick:Ot,className:"px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 mx-auto"},at.createElement("svg",{className:"w-5 h-5",viewBox:"0 0 24 24"},at.createElement("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),at.createElement("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),at.createElement("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),at.createElement("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})),"Sign in with Google"))),T&&at.createElement(at.Fragment,null,C?at.createElement("div",{className:"text-center py-8"},at.createElement("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),at.createElement("p",{className:"mt-2 text-gray-600"},"Loading your budget data...")):at.createElement(at.Fragment,null,at.createElement("div",{className:"mb-6"},at.createElement("label",{className:"block text-sm font-medium mb-2"},"Monthly Salary"),at.createElement("input",{type:"number",placeholder:"Enter monthly salary",value:r,onChange:b,className:"border border-gray-300 rounded px-3 py-2 w-full"})),at.createElement("div",{className:"mb-6 p-4 border rounded"},at.createElement("h2",{className:"text-xl font-semibold mb-4"},"Add Cost"),at.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-2 mb-2"},at.createElement("input",{placeholder:"Cost name",value:n,onChange:S=>s(S.target.value),onKeyPress:M,className:"border border-gray-300 rounded px-3 py-2"}),at.createElement("input",{type:"number",placeholder:"Amount",value:o,onChange:S=>c(S.target.value),onKeyPress:M,className:"border border-gray-300 rounded px-3 py-2"}),at.createElement("select",{value:f,onChange:S=>g(S.target.value),className:"border border-gray-300 rounded px-3 py-2"},at.createElement("option",{value:"daily"},"Daily"),at.createElement("option",{value:"weekly"},"Weekly"),at.createElement("option",{value:"monthly"},"Monthly"),at.createElement("option",{value:"yearly"},"Yearly")),at.createElement("button",{onClick:It,disabled:$,className:`px-4 py-2 text-white rounded ${$?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`},$?"Adding...":"Add"))),at.createElement("div",{className:"p-4 bg-blue-50 border rounded mb-6"},at.createElement("h2",{className:"text-xl font-semibold mb-4"},"Budget Report"),at.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4"},at.createElement("div",{className:"p-3 bg-white rounded border"},at.createElement("div",{className:"text-sm text-gray-600"},"Monthly Salary"),at.createElement("div",{className:"text-2xl font-bold"},"฿",parseFloat(r)||0)),at.createElement("div",{className:"p-3 bg-white rounded border"},at.createElement("div",{className:"text-sm text-gray-600"},"Monthly Costs"),at.createElement("div",{className:"text-2xl font-bold text-red-600"},"฿",R().toFixed(2))),at.createElement("div",{className:"p-3 bg-white rounded border"},at.createElement("div",{className:"text-sm text-gray-600"},"Daily Free Money"),at.createElement("div",{className:"text-2xl font-bold text-green-600"},"฿",V().toFixed(2))))),at.createElement("div",{className:"mb-6"},at.createElement("h2",{className:"text-xl font-semibold mb-4"},"Your Costs"),at.createElement("div",{className:"grid gap-2"},p.map(S=>at.createElement("div",{key:S.id,className:"flex justify-between items-center p-3 border rounded bg-gray-50"},at.createElement("span",{className:"font-medium"},S.name),at.createElement("div",{className:"flex items-center gap-4"},at.createElement("span",{className:"font-medium"},"฿",S.amount," (",S.period,")"),at.createElement("button",{onClick:()=>k(S.id),className:"text-red-500 hover:text-red-700"},"×")))))))))}GS.createRoot(document.getElementById("root")).render(at.createElement(Un.StrictMode,null,at.createElement(pO,null)));
