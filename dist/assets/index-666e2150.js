(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function _a(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const re={},Ut=[],De=()=>{},Al=()=>!1,Pl=/^on[^a-z]/,gr=e=>Pl.test(e),Ea=e=>e.startsWith("onUpdate:"),he=Object.assign,ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ol=Object.prototype.hasOwnProperty,q=(e,t)=>Ol.call(e,t),z=Array.isArray,Ht=e=>vr(e)==="[object Map]",jo=e=>vr(e)==="[object Set]",H=e=>typeof e=="function",ue=e=>typeof e=="string",Aa=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Pa=e=>oe(e)&&H(e.then)&&H(e.catch),Do=Object.prototype.toString,vr=e=>Do.call(e),Cl=e=>vr(e).slice(8,-1),Bo=e=>vr(e)==="[object Object]",Oa=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),br=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Sl=/-(\w)/g,Ke=br(e=>e.replace(Sl,(t,n)=>n?n.toUpperCase():"")),Il=/\B([A-Z])/g,tn=br(e=>e.replace(Il,"-$1").toLowerCase()),yr=br(e=>e.charAt(0).toUpperCase()+e.slice(1)),Nr=br(e=>e?`on${yr(e)}`:""),bn=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ir=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},qr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Rl=e=>{const t=ue(e)?Number(e):NaN;return isNaN(t)?e:t};let di;const Xr=()=>di||(di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ca(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ue(r)?Fl(r):Ca(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ue(e))return e;if(oe(e))return e}}const Tl=/;(?![^(]*\))/g,Nl=/:([^]+)/,Ml=/\/\*[^]*?\*\//g;function Fl(e){const t={};return e.replace(Ml,"").split(Tl).forEach(n=>{if(n){const r=n.split(Nl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Sa(e){let t="";if(ue(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Sa(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ll="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jl=_a(Ll);function $o(e){return!!e||e===""}const Dl=e=>ue(e)?e:e==null?"":z(e)||oe(e)&&(e.toString===Do||!H(e.toString))?JSON.stringify(e,zo,2):String(e),zo=(e,t)=>t&&t.__v_isRef?zo(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:jo(t)?{[`Set(${t.size})`]:[...t.values()]}:oe(t)&&!z(t)&&!Bo(t)?String(t):t;let Me;class Bl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function $l(e,t=Me){t&&t.active&&t.effects.push(e)}function zl(){return Me}const Ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Uo=e=>(e.w&vt)>0,Ho=e=>(e.n&vt)>0,Ul=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=vt},Hl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Uo(a)&&!Ho(a)?a.delete(e):t[n++]=a,a.w&=~vt,a.n&=~vt}t.length=n}},Vr=new WeakMap;let ln=0,vt=1;const Gr=30;let Le;const St=Symbol(""),Qr=Symbol("");class Ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$l(this,r)}run(){if(!this.active)return this.fn();let t=Le,n=mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Le,Le=this,mt=!0,vt=1<<++ln,ln<=Gr?Ul(this):mi(this),this.fn()}finally{ln<=Gr&&Hl(this),vt=1<<--ln,Le=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(mi(this),this.onStop&&this.onStop(),this.active=!1)}}function mi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mt=!0;const Wo=[];function nn(){Wo.push(mt),mt=!1}function rn(){const e=Wo.pop();mt=e===void 0?!0:e}function Pe(e,t,n){if(mt&&Le){let r=Vr.get(e);r||Vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ia()),Yo(a)}}function Yo(e,t){let n=!1;ln<=Gr?Ho(e)||(e.n|=vt,n=!Uo(e)):n=!e.has(Le),n&&(e.add(Le),Le.deps.push(e))}function et(e,t,n,r,a,i){const o=Vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?Oa(n)&&s.push(o.get("length")):(s.push(o.get(St)),Ht(e)&&s.push(o.get(Qr)));break;case"delete":z(e)||(s.push(o.get(St)),Ht(e)&&s.push(o.get(Qr)));break;case"set":Ht(e)&&s.push(o.get(St));break}if(s.length===1)s[0]&&Jr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Jr(Ia(l))}}function Jr(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&hi(r);for(const r of n)r.computed||hi(r)}function hi(e,t){(e!==Le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Wl=_a("__proto__,__v_isRef,__isVue"),Ko=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Aa)),Yl=Ta(),Kl=Ta(!1,!0),ql=Ta(!0),pi=Xl();function Xl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nn();const r=V(this)[t].apply(this,n);return rn(),r}}),e}function Vl(e){const t=V(this);return Pe(t,"has",e),t.hasOwnProperty(e)}function Ta(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?df:Qo:t?Go:Vo).get(r))return r;const o=z(r);if(!e){if(o&&q(pi,a))return Reflect.get(pi,a,i);if(a==="hasOwnProperty")return Vl}const s=Reflect.get(r,a,i);return(Aa(a)?Ko.has(a):Wl(a))||(e||Pe(r,"get",a),t)?s:xe(s)?o&&Oa(a)?s:s.value:oe(s)?e?Zo(s):Rn(s):s}}const Gl=qo(),Ql=qo(!0);function qo(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&xe(o)&&!xe(a))return!1;if(!e&&(!or(a)&&!Vt(a)&&(o=V(o),a=V(a)),!z(n)&&xe(o)&&!xe(a)))return o.value=a,!0;const s=z(n)&&Oa(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?bn(a,o)&&et(n,"set",r,a):et(n,"add",r,a)),l}}function Jl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&et(e,"delete",t,void 0),r}function Zl(e,t){const n=Reflect.has(e,t);return(!Aa(t)||!Ko.has(t))&&Pe(e,"has",t),n}function ef(e){return Pe(e,"iterate",z(e)?"length":St),Reflect.ownKeys(e)}const Xo={get:Yl,set:Gl,deleteProperty:Jl,has:Zl,ownKeys:ef},tf={get:ql,set(e,t){return!0},deleteProperty(e,t){return!0}},nf=he({},Xo,{get:Kl,set:Ql}),Na=e=>e,xr=e=>Reflect.getPrototypeOf(e);function jn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Pe(a,"get",t),Pe(a,"get",i));const{has:o}=xr(a),s=r?Na:n?La:yn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Dn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Pe(r,"has",e),Pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Bn(e,t=!1){return e=e.__v_raw,!t&&Pe(V(e),"iterate",St),Reflect.get(e,"size",e)}function gi(e){e=V(e);const t=V(this);return xr(t).has.call(t,e)||(t.add(e),et(t,"add",e,e)),this}function vi(e,t){t=V(t);const n=V(this),{has:r,get:a}=xr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?bn(t,o)&&et(n,"set",e,t):et(n,"add",e,t),this}function bi(e){const t=V(this),{has:n,get:r}=xr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&et(t,"delete",e,void 0),i}function yi(){const e=V(this),t=e.size!==0,n=e.clear();return t&&et(e,"clear",void 0,void 0),n}function $n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Na:e?La:yn;return!e&&Pe(s,"iterate",St),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Ht(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Na:t?La:yn;return!t&&Pe(i,"iterate",l?Qr:St),{next(){const{value:u,done:h}=f.next();return h?{value:u,done:h}:{value:s?[c(u[0]),c(u[1])]:c(u),done:h}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:this}}function rf(){const e={get(i){return jn(this,i)},get size(){return Bn(this)},has:Dn,add:gi,set:vi,delete:bi,clear:yi,forEach:$n(!1,!1)},t={get(i){return jn(this,i,!1,!0)},get size(){return Bn(this)},has:Dn,add:gi,set:vi,delete:bi,clear:yi,forEach:$n(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return Bn(this,!0)},has(i){return Dn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:$n(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return Bn(this,!0)},has(i){return Dn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),t[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[e,n,t,r]}const[af,of,sf,lf]=rf();function Ma(e,t){const n=t?e?lf:sf:e?of:af;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const ff={get:Ma(!1,!1)},cf={get:Ma(!1,!0)},uf={get:Ma(!0,!1)},Vo=new WeakMap,Go=new WeakMap,Qo=new WeakMap,df=new WeakMap;function mf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hf(e){return e.__v_skip||!Object.isExtensible(e)?0:mf(Cl(e))}function Rn(e){return Vt(e)?e:Fa(e,!1,Xo,ff,Vo)}function Jo(e){return Fa(e,!1,nf,cf,Go)}function Zo(e){return Fa(e,!0,tf,uf,Qo)}function Fa(e,t,n,r,a){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=hf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Wt(e){return Vt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function es(e){return Wt(e)||Vt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function ts(e){return ir(e,"__v_skip",!0),e}const yn=e=>oe(e)?Rn(e):e,La=e=>oe(e)?Zo(e):e;function ns(e){mt&&Le&&(e=V(e),Yo(e.dep||(e.dep=Ia())))}function rs(e,t){e=V(e);const n=e.dep;n&&Jr(n)}function xe(e){return!!(e&&e.__v_isRef===!0)}function fn(e){return as(e,!1)}function pf(e){return as(e,!0)}function as(e,t){return xe(e)?e:new gf(e,t)}class gf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:yn(t)}get value(){return ns(this),this._value}set value(t){const n=this.__v_isShallow||or(t)||Vt(t);t=n?t:V(t),bn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:yn(t),rs(this))}}function ht(e){return xe(e)?e.value:e}const vf={get:(e,t,n)=>ht(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return xe(a)&&!xe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function is(e){return Wt(e)?e:new Proxy(e,vf)}class bf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ra(t,()=>{this._dirty||(this._dirty=!0,rs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return ns(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function yf(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=De):(r=e.get,a=e.set),new bf(r,a,i||!a,n)}function pt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Tn(i,t,n)}return a}function Be(e,t,n,r){if(H(e)){const i=pt(e,t,n,r);return i&&Pa(i)&&i.catch(o=>{Tn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Be(e[i],t,n,r));return a}function Tn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){pt(l,null,10,[e,o,s]);return}}xf(e,n,a,r)}function xf(e,t,n,r=!0){console.error(e)}let xn=!1,Zr=!1;const ye=[];let We=0;const Yt=[];let Ge=null,kt=0;const os=Promise.resolve();let ja=null;function ss(e){const t=ja||os;return e?t.then(this?e.bind(this):e):t}function wf(e){let t=We+1,n=ye.length;for(;t<n;){const r=t+n>>>1;wn(ye[r])<e?t=r+1:n=r}return t}function Da(e){(!ye.length||!ye.includes(e,xn&&e.allowRecurse?We+1:We))&&(e.id==null?ye.push(e):ye.splice(wf(e.id),0,e),ls())}function ls(){!xn&&!Zr&&(Zr=!0,ja=os.then(us))}function _f(e){const t=ye.indexOf(e);t>We&&ye.splice(t,1)}function fs(e){z(e)?Yt.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?kt+1:kt))&&Yt.push(e),ls()}function xi(e,t=xn?We+1:0){for(;t<ye.length;t++){const n=ye[t];n&&n.pre&&(ye.splice(t,1),t--,n())}}function cs(e){if(Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ge.sort((n,r)=>wn(n)-wn(r)),kt=0;kt<Ge.length;kt++)Ge[kt]();Ge=null,kt=0}}const wn=e=>e.id==null?1/0:e.id,Ef=(e,t)=>{const n=wn(e)-wn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function us(e){Zr=!1,xn=!0,ye.sort(Ef);const t=De;try{for(We=0;We<ye.length;We++){const n=ye[We];n&&n.active!==!1&&pt(n,null,14)}}finally{We=0,ye.length=0,cs(),xn=!1,ja=null,(ye.length||Yt.length)&&us()}}function kf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:h}=r[c]||re;h&&(a=n.map(g=>ue(g)?g.trim():g)),u&&(a=n.map(qr))}let s,l=r[s=Nr(t)]||r[s=Nr(Ke(t))];!l&&i&&(l=r[s=Nr(tn(t))]),l&&Be(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Be(f,e,6,a)}}function ds(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=f=>{const c=ds(f,t,!0);c&&(s=!0,he(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(oe(e)&&r.set(e,null),null):(z(i)?i.forEach(l=>o[l]=null):he(o,i),oe(e)&&r.set(e,o),o)}function wr(e,t){return!e||!gr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,tn(t))||q(e,t))}let Ce=null,_r=null;function sr(e){const t=Ce;return Ce=e,_r=e&&e.type.__scopeId||null,t}function Af(e){_r=e}function Pf(){_r=null}function ms(e,t=Ce,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ti(-1);const i=sr(t);let o;try{o=e(...a)}finally{sr(i),r._d&&Ti(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:u,data:h,setupState:g,ctx:A,inheritAttrs:O}=e;let F,b;const x=sr(e);try{if(n.shapeFlag&4){const _=a||r;F=Fe(c.call(_,_,u,i,g,h,A)),b=l}else{const _=t;F=Fe(_.length>1?_(i,{attrs:l,slots:s,emit:f}):_(i,null)),b=t.props?l:Cf(l)}}catch(_){mn.length=0,Tn(_,e,1),F=we(Rt)}let N=F;if(b&&O!==!1){const _=Object.keys(b),{shapeFlag:M}=N;_.length&&M&7&&(o&&_.some(Ea)&&(b=Sf(b,o)),N=Qt(N,b))}return n.dirs&&(N=Qt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),F=N,sr(x),F}function Of(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(cr(r)){if(r.type!==Rt||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Cf=e=>{let t;for(const n in e)(n==="class"||n==="style"||gr(n))&&((t||(t={}))[n]=e[n]);return t},Sf=(e,t)=>{const n={};for(const r in e)(!Ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function If(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let u=0;u<c.length;u++){const h=c[u];if(o[h]!==r[h]&&!wr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?wi(r,o,f):!0:!!o;return!1}function wi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!wr(n,i))return!0}return!1}function Ba({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Rf=e=>e.__isSuspense,Tf={name:"Suspense",__isSuspense:!0,process(e,t,n,r,a,i,o,s,l,f){e==null?Nf(t,n,r,a,i,o,s,l,f):Mf(e,t,n,r,a,o,s,l,f)},hydrate:Ff,create:$a,normalize:Lf},lh=Tf;function _n(e,t){const n=e.props&&e.props[t];H(n)&&n()}function Nf(e,t,n,r,a,i,o,s,l){const{p:f,o:{createElement:c}}=l,u=c("div"),h=e.suspense=$a(e,a,r,t,u,n,i,o,s,l);f(null,h.pendingBranch=e.ssContent,u,null,r,h,i,o),h.deps>0?(_n(e,"onPending"),_n(e,"onFallback"),f(null,e.ssFallback,t,n,r,null,i,o),Kt(h,e.ssFallback)):h.resolve(!1,!0)}function Mf(e,t,n,r,a,i,o,s,{p:l,um:f,o:{createElement:c}}){const u=t.suspense=e.suspense;u.vnode=t,t.el=e.el;const h=t.ssContent,g=t.ssFallback,{activeBranch:A,pendingBranch:O,isInFallback:F,isHydrating:b}=u;if(O)u.pendingBranch=h,dt(h,O)?(l(O,h,u.hiddenContainer,null,a,u,i,o,s),u.deps<=0?u.resolve():F&&(l(A,g,n,r,a,null,i,o,s),Kt(u,g))):(u.pendingId++,b?(u.isHydrating=!1,u.activeBranch=O):f(O,a,u),u.deps=0,u.effects.length=0,u.hiddenContainer=c("div"),F?(l(null,h,u.hiddenContainer,null,a,u,i,o,s),u.deps<=0?u.resolve():(l(A,g,n,r,a,null,i,o,s),Kt(u,g))):A&&dt(h,A)?(l(A,h,n,r,a,u,i,o,s),u.resolve(!0)):(l(null,h,u.hiddenContainer,null,a,u,i,o,s),u.deps<=0&&u.resolve()));else if(A&&dt(h,A))l(A,h,n,r,a,u,i,o,s),Kt(u,h);else if(_n(t,"onPending"),u.pendingBranch=h,u.pendingId++,l(null,h,u.hiddenContainer,null,a,u,i,o,s),u.deps<=0)u.resolve();else{const{timeout:x,pendingId:N}=u;x>0?setTimeout(()=>{u.pendingId===N&&u.fallback(g)},x):x===0&&u.fallback(g)}}function $a(e,t,n,r,a,i,o,s,l,f,c=!1){const{p:u,m:h,um:g,n:A,o:{parentNode:O,remove:F}}=f;let b;const x=Df(e);x&&t!=null&&t.pendingBranch&&(b=t.pendingId,t.deps++);const N=e.props?Rl(e.props.timeout):void 0,_={vnode:e,parent:t,parentComponent:n,isSVG:o,container:r,hiddenContainer:a,anchor:i,deps:0,pendingId:0,timeout:typeof N=="number"?N:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:c,isUnmounted:!1,effects:[],resolve(M=!1,W=!1){const{vnode:K,activeBranch:Z,pendingBranch:te,pendingId:fe,effects:ge,parentComponent:Ie,container:ve}=_;if(_.isHydrating)_.isHydrating=!1;else if(!M){const le=Z&&te.transition&&te.transition.mode==="out-in";le&&(Z.transition.afterLeave=()=>{fe===_.pendingId&&h(te,ve,X,0)});let{anchor:X}=_;Z&&(X=A(Z),g(Z,Ie,_,!0)),le||h(te,ve,X,0)}Kt(_,te),_.pendingBranch=null,_.isInFallback=!1;let Te=_.parent,qe=!1;for(;Te;){if(Te.pendingBranch){Te.effects.push(...ge),qe=!0;break}Te=Te.parent}qe||fs(ge),_.effects=[],x&&t&&t.pendingBranch&&b===t.pendingId&&(t.deps--,t.deps===0&&!W&&t.resolve()),_n(K,"onResolve")},fallback(M){if(!_.pendingBranch)return;const{vnode:W,activeBranch:K,parentComponent:Z,container:te,isSVG:fe}=_;_n(W,"onFallback");const ge=A(K),Ie=()=>{_.isInFallback&&(u(null,M,te,ge,Z,null,fe,s,l),Kt(_,M))},ve=M.transition&&M.transition.mode==="out-in";ve&&(K.transition.afterLeave=Ie),_.isInFallback=!0,g(K,Z,null,!0),ve||Ie()},move(M,W,K){_.activeBranch&&h(_.activeBranch,M,W,K),_.container=M},next(){return _.activeBranch&&A(_.activeBranch)},registerDep(M,W){const K=!!_.pendingBranch;K&&_.deps++;const Z=M.vnode.el;M.asyncDep.catch(te=>{Tn(te,M,0)}).then(te=>{if(M.isUnmounted||_.isUnmounted||_.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:fe}=M;ia(M,te,!1),Z&&(fe.el=Z);const ge=!Z&&M.subTree.el;W(M,fe,O(Z||M.subTree.el),Z?null:A(M.subTree),_,o,l),ge&&F(ge),Ba(M,fe.el),K&&--_.deps===0&&_.resolve()})},unmount(M,W){_.isUnmounted=!0,_.activeBranch&&g(_.activeBranch,n,M,W),_.pendingBranch&&g(_.pendingBranch,n,M,W)}};return _}function Ff(e,t,n,r,a,i,o,s,l){const f=t.suspense=$a(t,r,n,e.parentNode,document.createElement("div"),null,a,i,o,s,!0),c=l(e,f.pendingBranch=t.ssContent,n,f,i,o);return f.deps===0&&f.resolve(!1,!0),c}function Lf(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=_i(r?n.default:n),e.ssFallback=r?_i(n.fallback):we(Rt)}function _i(e){let t;if(H(e)){const n=Gt&&e._c;n&&(e._d=!1,Ar()),e=e(),n&&(e._d=!0,t=Re,Cs())}return z(e)&&(e=Of(e)),e=Fe(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function jf(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):fs(e)}function Kt(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,a=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=a,Ba(r,a))}function Df(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}const Un={};function qt(e,t,n){return hs(e,t,n)}function hs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){var s;const l=zl()===((s=me)==null?void 0:s.scope)?me:null;let f,c=!1,u=!1;if(xe(e)?(f=()=>e.value,c=or(e)):Wt(e)?(f=()=>e,r=!0):z(e)?(u=!0,c=e.some(_=>Wt(_)||or(_)),f=()=>e.map(_=>{if(xe(_))return _.value;if(Wt(_))return Pt(_);if(H(_))return pt(_,l,2)})):H(e)?t?f=()=>pt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return h&&h(),Be(e,l,3,[g])}:f=De,t&&r){const _=f;f=()=>Pt(_())}let h,g=_=>{h=x.onStop=()=>{pt(_,l,4)}},A;if(kn)if(g=De,t?n&&Be(t,l,3,[f(),u?[]:void 0,g]):f(),a==="sync"){const _=Nc();A=_.__watcherHandles||(_.__watcherHandles=[])}else return De;let O=u?new Array(e.length).fill(Un):Un;const F=()=>{if(x.active)if(t){const _=x.run();(r||c||(u?_.some((M,W)=>bn(M,O[W])):bn(_,O)))&&(h&&h(),Be(t,l,3,[_,O===Un?void 0:u&&O[0]===Un?[]:O,g]),O=_)}else x.run()};F.allowRecurse=!!t;let b;a==="sync"?b=F:a==="post"?b=()=>Ae(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),b=()=>Da(F));const x=new Ra(f,b);t?n?F():O=x.run():a==="post"?Ae(x.run.bind(x),l&&l.suspense):x.run();const N=()=>{x.stop(),l&&l.scope&&ka(l.scope.effects,x)};return A&&A.push(N),N}function Bf(e,t,n){const r=this.proxy,a=ue(e)?e.includes(".")?ps(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=me;bt(this);const s=hs(a,i.bind(r),n);return o?bt(o):gt(),s}function ps(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Pt(e,t){if(!oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))Pt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)Pt(e[n],t);else if(jo(e)||Ht(e))e.forEach(n=>{Pt(n,t)});else if(Bo(e))for(const n in e)Pt(e[n],t);return e}function $f(e,t){const n=Ce;if(n===null)return e;const r=Or(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=re]=t[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function _t(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(nn(),Be(l,n,8,[e.el,s,e,t]),rn())}}function za(e,t){return H(e)?(()=>he({name:e.name},t,{setup:e}))():e}const er=e=>!!e.type.__asyncLoader,gs=e=>e.type.__isKeepAlive;function zf(e,t){vs(e,"a",t)}function Uf(e,t){vs(e,"da",t)}function vs(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Er(t,r,n),n){let a=n.parent;for(;a&&a.parent;)gs(a.parent.vnode)&&Hf(r,t,n,a),a=a.parent}}function Hf(e,t,n,r){const a=Er(t,e,r,!0);Ua(()=>{ka(r[t],a)},n)}function Er(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;nn(),bt(n);const s=Be(t,n,e,o);return gt(),rn(),s});return r?a.unshift(i):a.push(i),i}}const at=e=>(t,n=me)=>(!kn||e==="sp")&&Er(e,(...r)=>t(...r),n),Wf=at("bm"),bs=at("m"),Yf=at("bu"),Kf=at("u"),qf=at("bum"),Ua=at("um"),Xf=at("sp"),Vf=at("rtg"),Gf=at("rtc");function Qf(e,t=me){Er("ec",e,t)}const ys="components";function Jf(e,t){return ec(ys,e,!0,t)||e}const Zf=Symbol.for("v-ndc");function ec(e,t,n=!0,r=!1){const a=Ce||me;if(a){const i=a.type;if(e===ys){const s=Ic(i,!1);if(s&&(s===t||s===Ke(t)||s===yr(Ke(t))))return i}const o=Ei(a[e]||i[e],t)||Ei(a.appContext[e],t);return!o&&r?i:o}}function Ei(e,t){return e&&(e[t]||e[Ke(t)]||e[yr(Ke(t))])}function fh(e,t,n,r){let a;const i=n&&n[r];if(z(e)||ue(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(oe(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const ea=e=>e?Ts(e)?Or(e)||e.proxy:ea(e.parent):null,dn=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ea(e.parent),$root:e=>ea(e.root),$emit:e=>e.emit,$options:e=>Ha(e),$forceUpdate:e=>e.f||(e.f=()=>Da(e.update)),$nextTick:e=>e.n||(e.n=ss.bind(e.proxy)),$watch:e=>Bf.bind(e)}),Fr=(e,t)=>e!==re&&!e.__isScriptSetup&&q(e,t),tc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Fr(r,t))return o[t]=1,r[t];if(a!==re&&q(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&q(f,t))return o[t]=3,i[t];if(n!==re&&q(n,t))return o[t]=4,n[t];ta&&(o[t]=0)}}const c=dn[t];let u,h;if(c)return t==="$attrs"&&Pe(e,"get",t),c(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==re&&q(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Fr(a,t)?(a[t]=n,!0):r!==re&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&q(e,o)||Fr(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(dn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ki(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function ch(e){const t=Ac();let n=e();return gt(),Pa(n)&&(n=n.catch(r=>{throw bt(t),r})),[n,()=>bt(t)]}let ta=!0;function nc(e){const t=Ha(e),n=e.proxy,r=e.ctx;ta=!1,t.beforeCreate&&Ai(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:u,mounted:h,beforeUpdate:g,updated:A,activated:O,deactivated:F,beforeDestroy:b,beforeUnmount:x,destroyed:N,unmounted:_,render:M,renderTracked:W,renderTriggered:K,errorCaptured:Z,serverPrefetch:te,expose:fe,inheritAttrs:ge,components:Ie,directives:ve,filters:Te}=t;if(f&&rc(f,r,null),o)for(const X in o){const G=o[X];H(G)&&(r[X]=G.bind(n))}if(a){const X=a.call(n,n);oe(X)&&(e.data=Rn(X))}if(ta=!0,i)for(const X in i){const G=i[X],Xe=H(G)?G.bind(n,n):H(G.get)?G.get.bind(n,n):De,ot=!H(G)&&H(G.set)?G.set.bind(n):De,ze=pe({get:Xe,set:ot});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ee=>ze.value=Ee})}if(s)for(const X in s)xs(s[X],r,n,X);if(l){const X=H(l)?l.call(n):l;Reflect.ownKeys(X).forEach(G=>{tr(G,X[G])})}c&&Ai(c,e,"c");function le(X,G){z(G)?G.forEach(Xe=>X(Xe.bind(n))):G&&X(G.bind(n))}if(le(Wf,u),le(bs,h),le(Yf,g),le(Kf,A),le(zf,O),le(Uf,F),le(Qf,Z),le(Gf,W),le(Vf,K),le(qf,x),le(Ua,_),le(Xf,te),z(fe))if(fe.length){const X=e.exposed||(e.exposed={});fe.forEach(G=>{Object.defineProperty(X,G,{get:()=>n[G],set:Xe=>n[G]=Xe})})}else e.exposed||(e.exposed={});M&&e.render===De&&(e.render=M),ge!=null&&(e.inheritAttrs=ge),Ie&&(e.components=Ie),ve&&(e.directives=ve)}function rc(e,t,n=De){z(e)&&(e=na(e));for(const r in e){const a=e[r];let i;oe(a)?"default"in a?i=Ze(a.from||r,a.default,!0):i=Ze(a.from||r):i=Ze(a),xe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ai(e,t,n){Be(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function xs(e,t,n,r){const a=r.includes(".")?ps(n,r):()=>n[r];if(ue(e)){const i=t[e];H(i)&&qt(a,i)}else if(H(e))qt(a,e.bind(n));else if(oe(e))if(z(e))e.forEach(i=>xs(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&qt(a,i,e)}}function Ha(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>lr(l,f,o,!0)),lr(l,t,o)),oe(t)&&i.set(t,l),l}function lr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&lr(e,i,n,!0),a&&a.forEach(o=>lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ac[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ac={data:Pi,props:Oi,emits:Oi,methods:cn,computed:cn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:cn,directives:cn,watch:oc,provide:Pi,inject:ic};function Pi(e,t){return t?e?function(){return he(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function ic(e,t){return cn(na(e),na(t))}function na(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?he(Object.create(null),e,t):t}function Oi(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:he(Object.create(null),ki(e),ki(t??{})):t}function oc(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function ws(){return{app:null,config:{isNativeTag:Al,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sc=0;function lc(e,t){return function(r,a=null){H(r)||(r=he({},r)),a!=null&&!oe(a)&&(a=null);const i=ws(),o=new Set;let s=!1;const l=i.app={_uid:sc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Mc,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...c)):H(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,u){if(!s){const h=we(r,a);return h.appContext=i,c&&t?t(h,f):e(h,f,u),s=!0,l._container=f,f.__vue_app__=l,Or(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){fr=l;try{return f()}finally{fr=null}}};return l}}let fr=null;function tr(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Ze(e,t,n=!1){const r=me||Ce;if(r||fr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:fr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r&&r.proxy):t}}function fc(e,t,n,r=!1){const a={},i={};ir(i,Pr,1),e.propsDefaults=Object.create(null),_s(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Jo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function cc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let u=0;u<c.length;u++){let h=c[u];if(wr(e.emitsOptions,h))continue;const g=t[h];if(l)if(q(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const A=Ke(h);a[A]=ra(l,s,A,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{_s(e,t,a,i)&&(f=!0);let c;for(const u in s)(!t||!q(t,u)&&((c=tn(u))===u||!q(t,c)))&&(l?n&&(n[u]!==void 0||n[c]!==void 0)&&(a[u]=ra(l,s,u,void 0,e,!0)):delete a[u]);if(i!==s)for(const u in i)(!t||!q(t,u))&&(delete i[u],f=!0)}f&&et(e,"set","$attrs")}function _s(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Jn(l))continue;const f=t[l];let c;a&&q(a,c=Ke(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:wr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=V(n),f=s||re;for(let c=0;c<i.length;c++){const u=i[c];n[u]=ra(a,l,u,f[u],e,!q(f,u))}}return o}function ra(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&H(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(bt(a),r=f[n]=l.call(null,t),gt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function Es(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const c=u=>{l=!0;const[h,g]=Es(u,t,!0);he(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return oe(e)&&r.set(e,Ut),Ut;if(z(i))for(let c=0;c<i.length;c++){const u=Ke(i[c]);Ci(u)&&(o[u]=re)}else if(i)for(const c in i){const u=Ke(c);if(Ci(u)){const h=i[c],g=o[u]=z(h)||H(h)?{type:h}:he({},h);if(g){const A=Ri(Boolean,g.type),O=Ri(String,g.type);g[0]=A>-1,g[1]=O<0||A<O,(A>-1||q(g,"default"))&&s.push(u)}}}const f=[o,s];return oe(e)&&r.set(e,f),f}function Ci(e){return e[0]!=="$"}function Si(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ii(e,t){return Si(e)===Si(t)}function Ri(e,t){return z(t)?t.findIndex(n=>Ii(n,e)):H(t)&&Ii(t,e)?0:-1}const ks=e=>e[0]==="_"||e==="$stable",Wa=e=>z(e)?e.map(Fe):[Fe(e)],uc=(e,t,n)=>{if(t._n)return t;const r=ms((...a)=>Wa(t(...a)),n);return r._c=!1,r},As=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ks(a))continue;const i=e[a];if(H(i))t[a]=uc(a,i,r);else if(i!=null){const o=Wa(i);t[a]=()=>o}}},Ps=(e,t)=>{const n=Wa(t);e.slots.default=()=>n},dc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),ir(t,"_",n)):As(t,e.slots={})}else e.slots={},t&&Ps(e,t);ir(e.slots,Pr,1)},mc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(he(a,t),!n&&s===1&&delete a._):(i=!t.$stable,As(t,a)),o=t}else t&&(Ps(e,t),o={default:1});if(i)for(const s in a)!ks(s)&&!(s in o)&&delete a[s]};function aa(e,t,n,r,a=!1){if(z(e)){e.forEach((h,g)=>aa(h,t&&(z(t)?t[g]:t),n,r,a));return}if(er(r)&&!a)return;const i=r.shapeFlag&4?Or(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,u=s.setupState;if(f!=null&&f!==l&&(ue(f)?(c[f]=null,q(u,f)&&(u[f]=null)):xe(f)&&(f.value=null)),H(l))pt(l,s,12,[o,c]);else{const h=ue(l),g=xe(l);if(h||g){const A=()=>{if(e.f){const O=h?q(u,l)?u[l]:c[l]:l.value;a?z(O)&&ka(O,i):z(O)?O.includes(i)||O.push(i):h?(c[l]=[i],q(u,l)&&(u[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,q(u,l)&&(u[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,Ae(A,n)):A()}}}const Ae=jf;function hc(e){return pc(e)}function pc(e,t){const n=Xr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:u,nextSibling:h,setScopeId:g=De,insertStaticContent:A}=e,O=(d,m,p,v=null,w=null,E=null,I=!1,P=null,C=!!m.dynamicChildren)=>{if(d===m)return;d&&!dt(d,m)&&(v=y(d),Ee(d,w,E,!0),d=null),m.patchFlag===-2&&(C=!1,m.dynamicChildren=null);const{type:k,ref:B,shapeFlag:L}=m;switch(k){case kr:F(d,m,p,v);break;case Rt:b(d,m,p,v);break;case Lr:d==null&&x(m,p,v,I);break;case Qe:Ie(d,m,p,v,w,E,I,P,C);break;default:L&1?M(d,m,p,v,w,E,I,P,C):L&6?ve(d,m,p,v,w,E,I,P,C):(L&64||L&128)&&k.process(d,m,p,v,w,E,I,P,C,S)}B!=null&&w&&aa(B,d&&d.ref,E,m||d,!m)},F=(d,m,p,v)=>{if(d==null)r(m.el=s(m.children),p,v);else{const w=m.el=d.el;m.children!==d.children&&f(w,m.children)}},b=(d,m,p,v)=>{d==null?r(m.el=l(m.children||""),p,v):m.el=d.el},x=(d,m,p,v)=>{[d.el,d.anchor]=A(d.children,m,p,v,d.el,d.anchor)},N=({el:d,anchor:m},p,v)=>{let w;for(;d&&d!==m;)w=h(d),r(d,p,v),d=w;r(m,p,v)},_=({el:d,anchor:m})=>{let p;for(;d&&d!==m;)p=h(d),a(d),d=p;a(m)},M=(d,m,p,v,w,E,I,P,C)=>{I=I||m.type==="svg",d==null?W(m,p,v,w,E,I,P,C):te(d,m,w,E,I,P,C)},W=(d,m,p,v,w,E,I,P)=>{let C,k;const{type:B,props:L,shapeFlag:$,transition:U,dirs:Y}=d;if(C=d.el=o(d.type,E,L&&L.is,L),$&8?c(C,d.children):$&16&&Z(d.children,C,null,v,w,E&&B!=="foreignObject",I,P),Y&&_t(d,null,v,"created"),K(C,d,d.scopeId,I,v),L){for(const ee in L)ee!=="value"&&!Jn(ee)&&i(C,ee,null,L[ee],E,d.children,v,w,be);"value"in L&&i(C,"value",null,L.value),(k=L.onVnodeBeforeMount)&&He(k,v,d)}Y&&_t(d,null,v,"beforeMount");const ne=(!w||w&&!w.pendingBranch)&&U&&!U.persisted;ne&&U.beforeEnter(C),r(C,m,p),((k=L&&L.onVnodeMounted)||ne||Y)&&Ae(()=>{k&&He(k,v,d),ne&&U.enter(C),Y&&_t(d,null,v,"mounted")},w)},K=(d,m,p,v,w)=>{if(p&&g(d,p),v)for(let E=0;E<v.length;E++)g(d,v[E]);if(w){let E=w.subTree;if(m===E){const I=w.vnode;K(d,I,I.scopeId,I.slotScopeIds,w.parent)}}},Z=(d,m,p,v,w,E,I,P,C=0)=>{for(let k=C;k<d.length;k++){const B=d[k]=P?ct(d[k]):Fe(d[k]);O(null,B,m,p,v,w,E,I,P)}},te=(d,m,p,v,w,E,I)=>{const P=m.el=d.el;let{patchFlag:C,dynamicChildren:k,dirs:B}=m;C|=d.patchFlag&16;const L=d.props||re,$=m.props||re;let U;p&&Et(p,!1),(U=$.onVnodeBeforeUpdate)&&He(U,p,m,d),B&&_t(m,d,p,"beforeUpdate"),p&&Et(p,!0);const Y=w&&m.type!=="foreignObject";if(k?fe(d.dynamicChildren,k,P,p,v,Y,E):I||G(d,m,P,null,p,v,Y,E,!1),C>0){if(C&16)ge(P,m,L,$,p,v,w);else if(C&2&&L.class!==$.class&&i(P,"class",null,$.class,w),C&4&&i(P,"style",L.style,$.style,w),C&8){const ne=m.dynamicProps;for(let ee=0;ee<ne.length;ee++){const ce=ne[ee],Ne=L[ce],Lt=$[ce];(Lt!==Ne||ce==="value")&&i(P,ce,Ne,Lt,w,d.children,p,v,be)}}C&1&&d.children!==m.children&&c(P,m.children)}else!I&&k==null&&ge(P,m,L,$,p,v,w);((U=$.onVnodeUpdated)||B)&&Ae(()=>{U&&He(U,p,m,d),B&&_t(m,d,p,"updated")},v)},fe=(d,m,p,v,w,E,I)=>{for(let P=0;P<m.length;P++){const C=d[P],k=m[P],B=C.el&&(C.type===Qe||!dt(C,k)||C.shapeFlag&70)?u(C.el):p;O(C,k,B,null,v,w,E,I,!0)}},ge=(d,m,p,v,w,E,I)=>{if(p!==v){if(p!==re)for(const P in p)!Jn(P)&&!(P in v)&&i(d,P,p[P],null,I,m.children,w,E,be);for(const P in v){if(Jn(P))continue;const C=v[P],k=p[P];C!==k&&P!=="value"&&i(d,P,k,C,I,m.children,w,E,be)}"value"in v&&i(d,"value",p.value,v.value)}},Ie=(d,m,p,v,w,E,I,P,C)=>{const k=m.el=d?d.el:s(""),B=m.anchor=d?d.anchor:s("");let{patchFlag:L,dynamicChildren:$,slotScopeIds:U}=m;U&&(P=P?P.concat(U):U),d==null?(r(k,p,v),r(B,p,v),Z(m.children,p,B,w,E,I,P,C)):L>0&&L&64&&$&&d.dynamicChildren?(fe(d.dynamicChildren,$,p,w,E,I,P),(m.key!=null||w&&m===w.subTree)&&Os(d,m,!0)):G(d,m,p,B,w,E,I,P,C)},ve=(d,m,p,v,w,E,I,P,C)=>{m.slotScopeIds=P,d==null?m.shapeFlag&512?w.ctx.activate(m,p,v,I,C):Te(m,p,v,w,E,I,C):qe(d,m,C)},Te=(d,m,p,v,w,E,I)=>{const P=d.component=kc(d,v,w);if(gs(d)&&(P.ctx.renderer=S),Pc(P),P.asyncDep){if(w&&w.registerDep(P,le),!d.el){const C=P.subTree=we(Rt);b(null,C,m,p)}return}le(P,d,m,p,w,E,I)},qe=(d,m,p)=>{const v=m.component=d.component;if(If(d,m,p))if(v.asyncDep&&!v.asyncResolved){X(v,m,p);return}else v.next=m,_f(v.update),v.update();else m.el=d.el,v.vnode=m},le=(d,m,p,v,w,E,I)=>{const P=()=>{if(d.isMounted){let{next:B,bu:L,u:$,parent:U,vnode:Y}=d,ne=B,ee;Et(d,!1),B?(B.el=Y.el,X(d,B,I)):B=Y,L&&Zn(L),(ee=B.props&&B.props.onVnodeBeforeUpdate)&&He(ee,U,B,Y),Et(d,!0);const ce=Mr(d),Ne=d.subTree;d.subTree=ce,O(Ne,ce,u(Ne.el),y(Ne),d,w,E),B.el=ce.el,ne===null&&Ba(d,ce.el),$&&Ae($,w),(ee=B.props&&B.props.onVnodeUpdated)&&Ae(()=>He(ee,U,B,Y),w)}else{let B;const{el:L,props:$}=m,{bm:U,m:Y,parent:ne}=d,ee=er(m);if(Et(d,!1),U&&Zn(U),!ee&&(B=$&&$.onVnodeBeforeMount)&&He(B,ne,m),Et(d,!0),L&&Q){const ce=()=>{d.subTree=Mr(d),Q(L,d.subTree,d,w,null)};ee?m.type.__asyncLoader().then(()=>!d.isUnmounted&&ce()):ce()}else{const ce=d.subTree=Mr(d);O(null,ce,p,v,d,w,E),m.el=ce.el}if(Y&&Ae(Y,w),!ee&&(B=$&&$.onVnodeMounted)){const ce=m;Ae(()=>He(B,ne,ce),w)}(m.shapeFlag&256||ne&&er(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Ae(d.a,w),d.isMounted=!0,m=p=v=null}},C=d.effect=new Ra(P,()=>Da(k),d.scope),k=d.update=()=>C.run();k.id=d.uid,Et(d,!0),k()},X=(d,m,p)=>{m.component=d;const v=d.vnode.props;d.vnode=m,d.next=null,cc(d,m.props,v,p),mc(d,m.children,p),nn(),xi(),rn()},G=(d,m,p,v,w,E,I,P,C=!1)=>{const k=d&&d.children,B=d?d.shapeFlag:0,L=m.children,{patchFlag:$,shapeFlag:U}=m;if($>0){if($&128){ot(k,L,p,v,w,E,I,P,C);return}else if($&256){Xe(k,L,p,v,w,E,I,P,C);return}}U&8?(B&16&&be(k,w,E),L!==k&&c(p,L)):B&16?U&16?ot(k,L,p,v,w,E,I,P,C):be(k,w,E,!0):(B&8&&c(p,""),U&16&&Z(L,p,v,w,E,I,P,C))},Xe=(d,m,p,v,w,E,I,P,C)=>{d=d||Ut,m=m||Ut;const k=d.length,B=m.length,L=Math.min(k,B);let $;for($=0;$<L;$++){const U=m[$]=C?ct(m[$]):Fe(m[$]);O(d[$],U,p,null,w,E,I,P,C)}k>B?be(d,w,E,!0,!1,L):Z(m,p,v,w,E,I,P,C,L)},ot=(d,m,p,v,w,E,I,P,C)=>{let k=0;const B=m.length;let L=d.length-1,$=B-1;for(;k<=L&&k<=$;){const U=d[k],Y=m[k]=C?ct(m[k]):Fe(m[k]);if(dt(U,Y))O(U,Y,p,null,w,E,I,P,C);else break;k++}for(;k<=L&&k<=$;){const U=d[L],Y=m[$]=C?ct(m[$]):Fe(m[$]);if(dt(U,Y))O(U,Y,p,null,w,E,I,P,C);else break;L--,$--}if(k>L){if(k<=$){const U=$+1,Y=U<B?m[U].el:v;for(;k<=$;)O(null,m[k]=C?ct(m[k]):Fe(m[k]),p,Y,w,E,I,P,C),k++}}else if(k>$)for(;k<=L;)Ee(d[k],w,E,!0),k++;else{const U=k,Y=k,ne=new Map;for(k=Y;k<=$;k++){const Oe=m[k]=C?ct(m[k]):Fe(m[k]);Oe.key!=null&&ne.set(Oe.key,k)}let ee,ce=0;const Ne=$-Y+1;let Lt=!1,fi=0;const on=new Array(Ne);for(k=0;k<Ne;k++)on[k]=0;for(k=U;k<=L;k++){const Oe=d[k];if(ce>=Ne){Ee(Oe,w,E,!0);continue}let Ue;if(Oe.key!=null)Ue=ne.get(Oe.key);else for(ee=Y;ee<=$;ee++)if(on[ee-Y]===0&&dt(Oe,m[ee])){Ue=ee;break}Ue===void 0?Ee(Oe,w,E,!0):(on[Ue-Y]=k+1,Ue>=fi?fi=Ue:Lt=!0,O(Oe,m[Ue],p,null,w,E,I,P,C),ce++)}const ci=Lt?gc(on):Ut;for(ee=ci.length-1,k=Ne-1;k>=0;k--){const Oe=Y+k,Ue=m[Oe],ui=Oe+1<B?m[Oe+1].el:v;on[k]===0?O(null,Ue,p,ui,w,E,I,P,C):Lt&&(ee<0||k!==ci[ee]?ze(Ue,p,ui,2):ee--)}}},ze=(d,m,p,v,w=null)=>{const{el:E,type:I,transition:P,children:C,shapeFlag:k}=d;if(k&6){ze(d.component.subTree,m,p,v);return}if(k&128){d.suspense.move(m,p,v);return}if(k&64){I.move(d,m,p,S);return}if(I===Qe){r(E,m,p);for(let L=0;L<C.length;L++)ze(C[L],m,p,v);r(d.anchor,m,p);return}if(I===Lr){N(d,m,p);return}if(v!==2&&k&1&&P)if(v===0)P.beforeEnter(E),r(E,m,p),Ae(()=>P.enter(E),w);else{const{leave:L,delayLeave:$,afterLeave:U}=P,Y=()=>r(E,m,p),ne=()=>{L(E,()=>{Y(),U&&U()})};$?$(E,Y,ne):ne()}else r(E,m,p)},Ee=(d,m,p,v=!1,w=!1)=>{const{type:E,props:I,ref:P,children:C,dynamicChildren:k,shapeFlag:B,patchFlag:L,dirs:$}=d;if(P!=null&&aa(P,null,p,d,!0),B&256){m.ctx.deactivate(d);return}const U=B&1&&$,Y=!er(d);let ne;if(Y&&(ne=I&&I.onVnodeBeforeUnmount)&&He(ne,m,d),B&6)Ln(d.component,p,v);else{if(B&128){d.suspense.unmount(p,v);return}U&&_t(d,null,m,"beforeUnmount"),B&64?d.type.remove(d,m,p,w,S,v):k&&(E!==Qe||L>0&&L&64)?be(k,m,p,!1,!0):(E===Qe&&L&384||!w&&B&16)&&be(C,m,p),v&&Mt(d)}(Y&&(ne=I&&I.onVnodeUnmounted)||U)&&Ae(()=>{ne&&He(ne,m,d),U&&_t(d,null,m,"unmounted")},p)},Mt=d=>{const{type:m,el:p,anchor:v,transition:w}=d;if(m===Qe){Ft(p,v);return}if(m===Lr){_(d);return}const E=()=>{a(p),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:I,delayLeave:P}=w,C=()=>I(p,E);P?P(d.el,E,C):C()}else E()},Ft=(d,m)=>{let p;for(;d!==m;)p=h(d),a(d),d=p;a(m)},Ln=(d,m,p)=>{const{bum:v,scope:w,update:E,subTree:I,um:P}=d;v&&Zn(v),w.stop(),E&&(E.active=!1,Ee(I,d,m,p)),P&&Ae(P,m),Ae(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},be=(d,m,p,v=!1,w=!1,E=0)=>{for(let I=E;I<d.length;I++)Ee(d[I],m,p,v,w)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),T=(d,m,p)=>{d==null?m._vnode&&Ee(m._vnode,null,null,!0):O(m._vnode||null,d,m,null,null,null,p),xi(),cs(),m._vnode=d},S={p:O,um:Ee,m:ze,r:Mt,mt:Te,mc:Z,pc:G,pbc:fe,n:y,o:e};let D,Q;return t&&([D,Q]=t(S)),{render:T,hydrate:D,createApp:lc(T,D)}}function Et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Os(e,t,n=!1){const r=e.children,a=t.children;if(z(r)&&z(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ct(a[i]),s.el=o.el),n||Os(o,s)),s.type===kr&&(s.el=o.el)}}function gc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const vc=e=>e.__isTeleport,Qe=Symbol.for("v-fgt"),kr=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),Lr=Symbol.for("v-stc"),mn=[];let Re=null;function Ar(e=!1){mn.push(Re=e?null:[])}function Cs(){mn.pop(),Re=mn[mn.length-1]||null}let Gt=1;function Ti(e){Gt+=e}function Ss(e){return e.dynamicChildren=Gt>0?Re||Ut:null,Cs(),Gt>0&&Re&&Re.push(e),e}function Is(e,t,n,r,a,i){return Ss(It(e,t,n,r,a,i,!0))}function bc(e,t,n,r,a){return Ss(we(e,t,n,r,a,!0))}function cr(e){return e?e.__v_isVNode===!0:!1}function dt(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",Rs=({key:e})=>e??null,nr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||xe(e)||H(e)?{i:Ce,r:e,k:t,f:!!n}:e:null);function It(e,t=null,n=null,r=0,a=null,i=e===Qe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rs(t),ref:t&&nr(t),scopeId:_r,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ce};return s?(Ya(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ue(n)?8:16),Gt>0&&!o&&Re&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Re.push(l),l}const we=yc;function yc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Zf)&&(e=Rt),cr(e)){const s=Qt(e,t,!0);return n&&Ya(s,n),Gt>0&&!i&&Re&&(s.shapeFlag&6?Re[Re.indexOf(e)]=s:Re.push(s)),s.patchFlag|=-2,s}if(Rc(e)&&(e=e.__vccOpts),t){t=xc(t);let{class:s,style:l}=t;s&&!ue(s)&&(t.class=Sa(s)),oe(l)&&(es(l)&&!z(l)&&(l=he({},l)),t.style=Ca(l))}const o=ue(e)?1:Rf(e)?128:vc(e)?64:oe(e)?4:H(e)?2:0;return It(e,t,n,r,a,o,i,!0)}function xc(e){return e?es(e)||Pr in e?he({},e):e:null}function Qt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?wc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Rs(s),ref:t&&t.ref?n&&a?z(a)?a.concat(nr(t)):[a,nr(t)]:nr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Qe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function En(e=" ",t=0){return we(kr,null,e,t)}function Fe(e){return e==null||typeof e=="boolean"?we(Rt):z(e)?we(Qe,null,e.slice()):typeof e=="object"?ct(e):we(kr,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qt(e)}function Ya(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ya(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=Ce:a===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[En(t)]):n=8);e.children=t,e.shapeFlag|=n}function wc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Sa([t.class,r.class]));else if(a==="style")t.style=Ca([t.style,r.style]);else if(gr(a)){const i=t[a],o=r[a];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){Be(e,t,7,[n,r])}const _c=ws();let Ec=0;function kc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||_c,i={uid:Ec++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Es(r,a),emitsOptions:ds(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=kf.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Ac=()=>me||Ce;let Ka,jt,Ni="__VUE_INSTANCE_SETTERS__";(jt=Xr()[Ni])||(jt=Xr()[Ni]=[]),jt.push(e=>me=e),Ka=e=>{jt.length>1?jt.forEach(t=>t(e)):jt[0](e)};const bt=e=>{Ka(e),e.scope.on()},gt=()=>{me&&me.scope.off(),Ka(null)};function Ts(e){return e.vnode.shapeFlag&4}let kn=!1;function Pc(e,t=!1){kn=t;const{props:n,children:r}=e.vnode,a=Ts(e);fc(e,n,a,t),dc(e,r);const i=a?Oc(e,t):void 0;return kn=!1,i}function Oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ts(new Proxy(e.ctx,tc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Sc(e):null;bt(e),nn();const i=pt(r,e,0,[e.props,a]);if(rn(),gt(),Pa(i)){if(i.then(gt,gt),t)return i.then(o=>{ia(e,o,t)}).catch(o=>{Tn(o,e,0)});e.asyncDep=i}else ia(e,i,t)}else Ns(e,t)}function ia(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=is(t)),Ns(e,n)}let Mi;function Ns(e,t,n){const r=e.type;if(!e.render){if(!t&&Mi&&!r.render){const a=r.template||Ha(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=he(he({isCustomElement:i,delimiters:s},o),l);r.render=Mi(a,f)}}e.render=r.render||De}bt(e),nn(),nc(e),rn(),gt()}function Cc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Pe(e,"get","$attrs"),t[n]}}))}function Sc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Cc(e)},slots:e.slots,emit:e.emit,expose:t}}function Or(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(is(ts(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}}))}function Ic(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function Rc(e){return H(e)&&"__vccOpts"in e}const pe=(e,t)=>yf(e,t,kn);function qa(e,t,n){const r=arguments.length;return r===2?oe(t)&&!z(t)?cr(t)?we(e,null,[t]):we(e,t):we(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cr(n)&&(n=[n]),we(e,t,n))}const Tc=Symbol.for("v-scx"),Nc=()=>Ze(Tc),Mc="3.3.4",Fc="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,Fi=At&&At.createElement("template"),Lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?At.createElementNS(Fc,e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Fi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Fi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function jc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Dc(e,t,n){const r=e.style,a=ue(n);if(n&&!a){if(t&&!ue(t))for(const i in t)n[i]==null&&oa(r,i,"");for(const i in n)oa(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Li=/\s*!important$/;function oa(e,t,n){if(z(n))n.forEach(r=>oa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Bc(e,t);Li.test(n)?e.setProperty(tn(r),n.replace(Li,""),"important"):e[r]=n}}const ji=["Webkit","Moz","ms"],jr={};function Bc(e,t){const n=jr[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return jr[t]=r;r=yr(r);for(let a=0;a<ji.length;a++){const i=ji[a]+r;if(i in e)return jr[t]=i}return t}const Di="http://www.w3.org/1999/xlink";function $c(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Di,t.slice(6,t.length)):e.setAttributeNS(Di,t,n);else{const i=jl(t);n==null||i&&!$o(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function zc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=$o(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Dt(e,t,n,r){e.addEventListener(t,n,r)}function Uc(e,t,n,r){e.removeEventListener(t,n,r)}function Hc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Wc(t);if(r){const f=i[t]=qc(r,a);Dt(e,s,f,l)}else o&&(Uc(e,s,o,l),i[t]=void 0)}}const Bi=/(?:Once|Passive|Capture)$/;function Wc(e){let t;if(Bi.test(e)){t={};let r;for(;r=e.match(Bi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let Dr=0;const Yc=Promise.resolve(),Kc=()=>Dr||(Yc.then(()=>Dr=0),Dr=Date.now());function qc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Be(Xc(r,n.value),t,5,[r])};return n.value=e,n.attached=Kc(),n}function Xc(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const $i=/^on[a-z]/,Vc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?jc(e,r,a):t==="style"?Dc(e,n,r):gr(t)?Ea(t)||Hc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gc(e,t,r,a))?zc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),$c(e,t,r,a))};function Gc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&$i.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||$i.test(t)&&ue(n)?!1:t in e}const zi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>Zn(t,n):t};function Qc(e){e.target.composing=!0}function Ui(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Jc={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=zi(a);const i=r||a.props&&a.props.type==="number";Dt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=qr(s)),e._assign(s)}),n&&Dt(e,"change",()=>{e.value=e.value.trim()}),t||(Dt(e,"compositionstart",Qc),Dt(e,"compositionend",Ui),Dt(e,"change",Ui))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=zi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&qr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Zc=he({patchProp:Vc},Lc);let Hi;function eu(){return Hi||(Hi=hc(Zc))}const tu=(...e)=>{const t=eu().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=nu(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function nu(e){return ue(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bt=typeof window<"u";function ru(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const J=Object.assign;function Br(e,t){const n={};for(const r in t){const a=t[r];n[r]=$e(a)?a.map(e):e(a)}return n}const hn=()=>{},$e=Array.isArray,au=/\/$/,iu=e=>e.replace(au,"");function $r(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=fu(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function ou(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Wi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function su(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Jt(t.matched[r],n.matched[a])&&Ms(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ms(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!lu(e[n],t[n]))return!1;return!0}function lu(e,t){return $e(e)?Yi(e,t):$e(t)?Yi(t,e):e===t}function Yi(e,t){return $e(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function fu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var An;(function(e){e.pop="pop",e.push="push"})(An||(An={}));var pn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pn||(pn={}));function cu(e){if(!e)if(Bt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),iu(e)}const uu=/^[^#]+#/;function du(e,t){return e.replace(uu,"#")+t}function mu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function hu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=mu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ki(e,t){return(history.state?history.state.position-t:-1)+e}const sa=new Map;function pu(e,t){sa.set(e,t)}function gu(e){const t=sa.get(e);return sa.delete(e),t}let vu=()=>location.protocol+"//"+location.host;function Fs(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Wi(l,"")}return Wi(n,e)+r+a}function bu(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=Fs(e,location),A=n.value,O=t.value;let F=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}F=O?h.position-O.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:F,type:An.pop,direction:F?F>0?pn.forward:pn.back:pn.unknown})})};function l(){o=n.value}function f(h){a.push(h);const g=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(J({},h.state,{scroll:Cr()}),"")}function u(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:u}}function qi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Cr():null}}function yu(e){const{history:t,location:n}=window,r={value:Fs(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const u=e.indexOf("#"),h=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+l:vu()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=J({},t.state,qi(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=J({},a.value,t.state,{forward:l,scroll:Cr()});i(c.current,c,!0);const u=J({},qi(r.value,l,null),{position:c.position+1},f);i(l,u,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function xu(e){e=cu(e);const t=yu(e),n=bu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=J({location:"",base:e,go:r,createHref:du.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function wu(e){return typeof e=="string"||e&&typeof e=="object"}function Ls(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},js=Symbol("");var Xi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Xi||(Xi={}));function Zt(e,t){return J(new Error,{type:e,[js]:!0},t)}function Ve(e,t){return e instanceof Error&&js in e&&(t==null||!!(e.type&t))}const Vi="[^/]+?",_u={sensitive:!1,strict:!1,start:!0,end:!0},Eu=/[.+*?^${}()[\]/\\]/g;function ku(e,t){const n=J({},_u,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let u=0;u<f.length;u++){const h=f[u];let g=40+(n.sensitive?.25:0);if(h.type===0)u||(a+="/"),a+=h.value.replace(Eu,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:O,optional:F,regexp:b}=h;i.push({name:A,repeatable:O,optional:F});const x=b||Vi;if(x!==Vi){g+=10;try{new RegExp(`(${x})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${A}" (${x}): `+_.message)}}let N=O?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;u||(N=F&&f.length<2?`(?:/${N})`:"/"+N),F&&(N+="?"),a+=N,g+=20,F&&(g+=-8),O&&(g+=-20),x===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),u={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",A=i[h-1];u[A.name]=g&&A.repeatable?g.split("/"):g}return u}function l(f){let c="",u=!1;for(const h of e){(!u||!c.endsWith("/"))&&(c+="/"),u=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:O,optional:F}=g,b=A in f?f[A]:"";if($e(b)&&!O)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const x=$e(b)?b.join("/"):b;if(!x)if(F)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):u=!0);else throw new Error(`Missing required param "${A}"`);c+=x}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Au(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Pu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Au(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Gi(r))return 1;if(Gi(a))return-1}return a.length-r.length}function Gi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ou={type:0,value:""},Cu=/[a-zA-Z0-9_]/;function Su(e){if(!e)return[[]];if(e==="/")return[[Ou]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function u(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&u(),o()):l===":"?(u(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Cu.test(l)?h():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),u(),o(),a}function Iu(e,t,n){const r=ku(Su(e.path),n),a=J(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Ru(e,t){const n=[],r=new Map;t=Zi({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,u,h){const g=!h,A=Tu(c);A.aliasOf=h&&h.record;const O=Zi(t,c),F=[A];if("alias"in c){const N=typeof c.alias=="string"?[c.alias]:c.alias;for(const _ of N)F.push(J({},A,{components:h?h.record.components:A.components,path:_,aliasOf:h?h.record:A}))}let b,x;for(const N of F){const{path:_}=N;if(u&&_[0]!=="/"){const M=u.record.path,W=M[M.length-1]==="/"?"":"/";N.path=u.record.path+(_&&W+_)}if(b=Iu(N,u,O),h?h.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),g&&c.name&&!Ji(b)&&o(c.name)),A.children){const M=A.children;for(let W=0;W<M.length;W++)i(M[W],b,h&&h.children[W])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return x?()=>{o(x)}:hn}function o(c){if(Ls(c)){const u=r.get(c);u&&(r.delete(c),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(c);u>-1&&(n.splice(u,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let u=0;for(;u<n.length&&Pu(c,n[u])>=0&&(c.record.path!==n[u].record.path||!Ds(c,n[u]));)u++;n.splice(u,0,c),c.record.name&&!Ji(c)&&r.set(c.record.name,c)}function f(c,u){let h,g={},A,O;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Zt(1,{location:c});O=h.record.name,g=J(Qi(u.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),c.params&&Qi(c.params,h.keys.map(x=>x.name))),A=h.stringify(g)}else if("path"in c)A=c.path,h=n.find(x=>x.re.test(A)),h&&(g=h.parse(A),O=h.record.name);else{if(h=u.name?r.get(u.name):n.find(x=>x.re.test(u.path)),!h)throw Zt(1,{location:c,currentLocation:u});O=h.record.name,g=J({},u.params,c.params),A=h.stringify(g)}const F=[];let b=h;for(;b;)F.unshift(b.record),b=b.parent;return{name:O,path:A,params:g,matched:F,meta:Mu(F)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Qi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Tu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Nu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Nu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Mu(e){return e.reduce((t,n)=>J(t,n.meta),{})}function Zi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ds(e,t){return t.children.some(n=>n===e||Ds(e,n))}const Bs=/#/g,Fu=/&/g,Lu=/\//g,ju=/=/g,Du=/\?/g,$s=/\+/g,Bu=/%5B/g,$u=/%5D/g,zs=/%5E/g,zu=/%60/g,Us=/%7B/g,Uu=/%7C/g,Hs=/%7D/g,Hu=/%20/g;function Xa(e){return encodeURI(""+e).replace(Uu,"|").replace(Bu,"[").replace($u,"]")}function Wu(e){return Xa(e).replace(Us,"{").replace(Hs,"}").replace(zs,"^")}function la(e){return Xa(e).replace($s,"%2B").replace(Hu,"+").replace(Bs,"%23").replace(Fu,"%26").replace(zu,"`").replace(Us,"{").replace(Hs,"}").replace(zs,"^")}function Yu(e){return la(e).replace(ju,"%3D")}function Ku(e){return Xa(e).replace(Bs,"%23").replace(Du,"%3F")}function qu(e){return e==null?"":Ku(e).replace(Lu,"%2F")}function ur(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Xu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace($s," "),o=i.indexOf("="),s=ur(o<0?i:i.slice(0,o)),l=o<0?null:ur(i.slice(o+1));if(s in t){let f=t[s];$e(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function eo(e){let t="";for(let n in e){const r=e[n];if(n=Yu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&la(i)):[r&&la(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Vu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=$e(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Gu=Symbol(""),to=Symbol(""),Va=Symbol(""),Ws=Symbol(""),fa=Symbol("");function sn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ut(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=u=>{u===!1?s(Zt(4,{from:n,to:t})):u instanceof Error?s(u):wu(u)?s(Zt(2,{from:t,to:u})):(i&&r.enterCallbacks[a]===i&&typeof u=="function"&&i.push(u),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(u=>s(u))})}function zr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Qu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ut(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=ru(f)?f.default:f;i.components[o]=c;const h=(c.__vccOpts||c)[t];return h&&ut(h,n,r,i,o)()}))}}return a}function Qu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function no(e){const t=Ze(Va),n=Ze(Ws),r=pe(()=>t.resolve(ht(e.to))),a=pe(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],u=n.matched;if(!c||!u.length)return-1;const h=u.findIndex(Jt.bind(null,c));if(h>-1)return h;const g=ro(l[f-2]);return f>1&&ro(c)===g&&u[u.length-1].path!==g?u.findIndex(Jt.bind(null,l[f-2])):h}),i=pe(()=>a.value>-1&&ed(n.params,r.value.params)),o=pe(()=>a.value>-1&&a.value===n.matched.length-1&&Ms(n.params,r.value.params));function s(l={}){return Zu(l)?t[ht(e.replace)?"replace":"push"](ht(e.to)).catch(hn):Promise.resolve()}return{route:r,href:pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Ju=za({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:no,setup(e,{slots:t}){const n=Rn(no(e)),{options:r}=Ze(Va),a=pe(()=>({[ao(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ao(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:qa("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Ys=Ju;function Zu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ed(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!$e(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function ro(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ao=(e,t,n)=>e??t??n,td=za({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ze(fa),a=pe(()=>e.route||r.value),i=Ze(to,0),o=pe(()=>{let f=ht(i);const{matched:c}=a.value;let u;for(;(u=c[f])&&!u.components;)f++;return f}),s=pe(()=>a.value.matched[o.value]);tr(to,pe(()=>o.value+1)),tr(Gu,s),tr(fa,a);const l=fn();return qt(()=>[l.value,s.value,e.name],([f,c,u],[h,g,A])=>{c&&(c.instances[u]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Jt(c,g)||!h)&&(c.enterCallbacks[u]||[]).forEach(O=>O(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,u=s.value,h=u&&u.components[c];if(!h)return io(n.default,{Component:h,route:f});const g=u.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,F=qa(h,J({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(u.instances[c]=null)},ref:l}));return io(n.default,{Component:F,route:f})||F}}});function io(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ks=td;function nd(e){const t=Ru(e.routes,e),n=e.parseQuery||Xu,r=e.stringifyQuery||eo,a=e.history,i=sn(),o=sn(),s=sn(),l=pf(lt);let f=lt;Bt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Br.bind(null,y=>""+y),u=Br.bind(null,qu),h=Br.bind(null,ur);function g(y,T){let S,D;return Ls(y)?(S=t.getRecordMatcher(y),D=T):D=y,t.addRoute(D,S)}function A(y){const T=t.getRecordMatcher(y);T&&t.removeRoute(T)}function O(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function b(y,T){if(T=J({},T||l.value),typeof y=="string"){const p=$r(n,y,T.path),v=t.resolve({path:p.path},T),w=a.createHref(p.fullPath);return J(p,v,{params:h(v.params),hash:ur(p.hash),redirectedFrom:void 0,href:w})}let S;if("path"in y)S=J({},y,{path:$r(n,y.path,T.path).path});else{const p=J({},y.params);for(const v in p)p[v]==null&&delete p[v];S=J({},y,{params:u(p)}),T.params=u(T.params)}const D=t.resolve(S,T),Q=y.hash||"";D.params=c(h(D.params));const d=ou(r,J({},y,{hash:Wu(Q),path:D.path})),m=a.createHref(d);return J({fullPath:d,hash:Q,query:r===eo?Vu(y.query):y.query||{}},D,{redirectedFrom:void 0,href:m})}function x(y){return typeof y=="string"?$r(n,y,l.value.path):J({},y)}function N(y,T){if(f!==y)return Zt(8,{from:T,to:y})}function _(y){return K(y)}function M(y){return _(J(x(y),{replace:!0}))}function W(y){const T=y.matched[y.matched.length-1];if(T&&T.redirect){const{redirect:S}=T;let D=typeof S=="function"?S(y):S;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=x(D):{path:D},D.params={}),J({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function K(y,T){const S=f=b(y),D=l.value,Q=y.state,d=y.force,m=y.replace===!0,p=W(S);if(p)return K(J(x(p),{state:typeof p=="object"?J({},Q,p.state):Q,force:d,replace:m}),T||S);const v=S;v.redirectedFrom=T;let w;return!d&&su(r,D,S)&&(w=Zt(16,{to:v,from:D}),ze(D,D,!0,!1)),(w?Promise.resolve(w):fe(v,D)).catch(E=>Ve(E)?Ve(E,2)?E:ot(E):G(E,v,D)).then(E=>{if(E){if(Ve(E,2))return K(J({replace:m},x(E.to),{state:typeof E.to=="object"?J({},Q,E.to.state):Q,force:d}),T||v)}else E=Ie(v,D,!0,m,Q);return ge(v,D,E),E})}function Z(y,T){const S=N(y,T);return S?Promise.reject(S):Promise.resolve()}function te(y){const T=Ft.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(y):y()}function fe(y,T){let S;const[D,Q,d]=rd(y,T);S=zr(D.reverse(),"beforeRouteLeave",y,T);for(const p of D)p.leaveGuards.forEach(v=>{S.push(ut(v,y,T))});const m=Z.bind(null,y,T);return S.push(m),be(S).then(()=>{S=[];for(const p of i.list())S.push(ut(p,y,T));return S.push(m),be(S)}).then(()=>{S=zr(Q,"beforeRouteUpdate",y,T);for(const p of Q)p.updateGuards.forEach(v=>{S.push(ut(v,y,T))});return S.push(m),be(S)}).then(()=>{S=[];for(const p of d)if(p.beforeEnter)if($e(p.beforeEnter))for(const v of p.beforeEnter)S.push(ut(v,y,T));else S.push(ut(p.beforeEnter,y,T));return S.push(m),be(S)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),S=zr(d,"beforeRouteEnter",y,T),S.push(m),be(S))).then(()=>{S=[];for(const p of o.list())S.push(ut(p,y,T));return S.push(m),be(S)}).catch(p=>Ve(p,8)?p:Promise.reject(p))}function ge(y,T,S){s.list().forEach(D=>te(()=>D(y,T,S)))}function Ie(y,T,S,D,Q){const d=N(y,T);if(d)return d;const m=T===lt,p=Bt?history.state:{};S&&(D||m?a.replace(y.fullPath,J({scroll:m&&p&&p.scroll},Q)):a.push(y.fullPath,Q)),l.value=y,ze(y,T,S,m),ot()}let ve;function Te(){ve||(ve=a.listen((y,T,S)=>{if(!Ln.listening)return;const D=b(y),Q=W(D);if(Q){K(J(Q,{replace:!0}),D).catch(hn);return}f=D;const d=l.value;Bt&&pu(Ki(d.fullPath,S.delta),Cr()),fe(D,d).catch(m=>Ve(m,12)?m:Ve(m,2)?(K(m.to,D).then(p=>{Ve(p,20)&&!S.delta&&S.type===An.pop&&a.go(-1,!1)}).catch(hn),Promise.reject()):(S.delta&&a.go(-S.delta,!1),G(m,D,d))).then(m=>{m=m||Ie(D,d,!1),m&&(S.delta&&!Ve(m,8)?a.go(-S.delta,!1):S.type===An.pop&&Ve(m,20)&&a.go(-1,!1)),ge(D,d,m)}).catch(hn)}))}let qe=sn(),le=sn(),X;function G(y,T,S){ot(y);const D=le.list();return D.length?D.forEach(Q=>Q(y,T,S)):console.error(y),Promise.reject(y)}function Xe(){return X&&l.value!==lt?Promise.resolve():new Promise((y,T)=>{qe.add([y,T])})}function ot(y){return X||(X=!y,Te(),qe.list().forEach(([T,S])=>y?S(y):T()),qe.reset()),y}function ze(y,T,S,D){const{scrollBehavior:Q}=e;if(!Bt||!Q)return Promise.resolve();const d=!S&&gu(Ki(y.fullPath,0))||(D||!S)&&history.state&&history.state.scroll||null;return ss().then(()=>Q(y,T,d)).then(m=>m&&hu(m)).catch(m=>G(m,y,T))}const Ee=y=>a.go(y);let Mt;const Ft=new Set,Ln={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:F,getRoutes:O,resolve:b,options:e,push:_,replace:M,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:le.add,isReady:Xe,install(y){const T=this;y.component("RouterLink",Ys),y.component("RouterView",Ks),y.config.globalProperties.$router=T,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),Bt&&!Mt&&l.value===lt&&(Mt=!0,_(a.location).catch(Q=>{}));const S={};for(const Q in lt)Object.defineProperty(S,Q,{get:()=>l.value[Q],enumerable:!0});y.provide(Va,T),y.provide(Ws,Jo(S)),y.provide(fa,l);const D=y.unmount;Ft.add(y),y.unmount=function(){Ft.delete(y),Ft.size<1&&(f=lt,ve&&ve(),ve=null,l.value=lt,Mt=!1,X=!1),D()}}};function be(y){return y.reduce((T,S)=>T.then(()=>te(S)),Promise.resolve())}return Ln}function rd(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Jt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Jt(f,l))||a.push(l))}return[n,r,a]}const ad={__name:"App",setup(e){return(t,n)=>(Ar(),bc(ht(Ks)))}},id="modulepreload",od=function(e){return"/"+e},oo={},so=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=od(i),i in oo)return;oo[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const u=a[c];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":id,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,u)=>{f.addEventListener("load",c),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},lo=Rn({playerId:0});const qs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},sd=e=>(Af("data-v-a13d3e72"),e=e(),Pf(),e),ld={class:"PlayerIdBox"},fd=sd(()=>It("h1",null,[En("Is it time to blame the "),It("span",{class:"TextAccent"},"META"),En("?")],-1)),cd={class:"TextHighlight"},ud={__name:"PlayerIdBox",setup(e){const t=fn("choked"),n=fn(),r=fn(["choked","owned","beat the meta","had an unwinnable one","had a free game","beat the odds","proved the meta"]),a=fn();function i(){localStorage.playerId=lo.playerId}return qt(a,o=>{lo.playerId=o}),bs(()=>{n.value=setInterval(()=>{t.value=r.value[Math.floor(Math.random()*r.value.length)]},2e3)}),Ua(()=>{clearInterval(n)}),(o,s)=>{const l=Jf("font-awesome-icon");return Ar(),Is("div",ld,[fd,It("p",null,[En("Enter your player ID below and we'll analyse your past 20 matches to see if you "),It("span",cd,Dl(t.value),1)]),$f(It("input",{"onUpdate:modelValue":s[0]||(s[0]=f=>a.value=f),type:"text",class:"TextInput",placeholder:"Player ID Example: 43760878"},null,512),[[Jc,a.value]]),we(ht(Ys),{onClick:i,class:"button-40",to:"/matches"},{default:ms(()=>[En("Let's Go! "),we(l,{icon:"fa-regular fa-circle-right",size:"2xl",style:{color:"#cbccca"}})]),_:1})])}}},dd=qs(ud,[["__scopeId","data-v-a13d3e72"]]);const md={class:"mainContent"},hd={__name:"HomeView",setup(e){return(t,n)=>(Ar(),Is("main",md,[we(dd)]))}},pd=qs(hd,[["__scopeId","data-v-84d388f1"]]),gd=nd({history:xu("/"),routes:[{path:"/",name:"home",component:pd},{path:"/matches",name:"matches",component:()=>so(()=>import("./MatchView-869ab6e2.js"),["assets/MatchView-869ab6e2.js","assets/axios-ca9f0948.js","assets/MatchView-28bec77b.css"])},{path:"/matches/:matchid",name:"matchdetails",component:()=>so(()=>import("./MatchDetails-69b49597.js"),["assets/MatchDetails-69b49597.js","assets/axios-ca9f0948.js","assets/MatchDetails-e6a99587.css"])}]});function fo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fo(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dr(e){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dr(e)}function vd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function co(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bd(e,t,n){return t&&co(e.prototype,t),n&&co(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ga(e,t){return xd(e)||_d(e,t)||Xs(e,t)||kd()}function Nn(e){return yd(e)||wd(e)||Xs(e)||Ed()}function yd(e){if(Array.isArray(e))return ca(e)}function xd(e){if(Array.isArray(e))return e}function wd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _d(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Xs(e,t){if(e){if(typeof e=="string")return ca(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ca(e,t)}}function ca(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ed(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var uo=function(){},Qa={},Vs={},Gs=null,Qs={mark:uo,measure:uo};try{typeof window<"u"&&(Qa=window),typeof document<"u"&&(Vs=document),typeof MutationObserver<"u"&&(Gs=MutationObserver),typeof performance<"u"&&(Qs=performance)}catch{}var Ad=Qa.navigator||{},mo=Ad.userAgent,ho=mo===void 0?"":mo,yt=Qa,ie=Vs,po=Gs,Hn=Qs;yt.document;var it=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function",Js=~ho.indexOf("MSIE")||~ho.indexOf("Trident/"),Wn,Yn,Kn,qn,Xn,tt="___FONT_AWESOME___",ua=16,Zs="fa",el="svg-inline--fa",Tt="data-fa-i2svg",da="data-fa-pseudo-element",Pd="data-fa-pseudo-element-pending",Ja="data-prefix",Za="data-icon",go="fontawesome-i2svg",Od="async",Cd=["HTML","HEAD","STYLE","SCRIPT"],tl=function(){try{return!0}catch{return!1}}(),ae="classic",se="sharp",ei=[ae,se];function Mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ae]}})}var Pn=Mn((Wn={},de(Wn,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(Wn,se,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Wn)),On=Mn((Yn={},de(Yn,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Yn,se,{solid:"fass",regular:"fasr",light:"fasl"}),Yn)),Cn=Mn((Kn={},de(Kn,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Kn,se,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Kn)),Sd=Mn((qn={},de(qn,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(qn,se,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),qn)),Id=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,nl="fa-layers-text",Rd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Td=Mn((Xn={},de(Xn,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(Xn,se,{900:"fass",400:"fasr",300:"fasl"}),Xn)),rl=[1,2,3,4,5,6,7,8,9,10],Nd=rl.concat([11,12,13,14,15,16,17,18,19,20]),Md=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=new Set;Object.keys(On[ae]).map(Sn.add.bind(Sn));Object.keys(On[se]).map(Sn.add.bind(Sn));var Fd=[].concat(ei,Nn(Sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(rl.map(function(e){return"".concat(e,"x")})).concat(Nd.map(function(e){return"w-".concat(e)})),gn=yt.FontAwesomeConfig||{};function Ld(e){var t=ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function jd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ie&&typeof ie.querySelector=="function"){var Dd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Dd.forEach(function(e){var t=Ga(e,2),n=t[0],r=t[1],a=jd(Ld(n));a!=null&&(gn[r]=a)})}var al={styleDefault:"solid",familyDefault:"classic",cssPrefix:Zs,replacementClass:el,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gn.familyPrefix&&(gn.cssPrefix=gn.familyPrefix);var en=R(R({},al),gn);en.autoReplaceSvg||(en.observeMutations=!1);var j={};Object.keys(al).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){en[e]=n,vn.forEach(function(r){return r(j)})},get:function(){return en[e]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(t){en.cssPrefix=t,vn.forEach(function(n){return n(j)})},get:function(){return en.cssPrefix}});yt.FontAwesomeConfig=j;var vn=[];function Bd(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var ft=ua,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $d(e){if(!(!e||!it)){var t=ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ie.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ie.head.insertBefore(t,r),e}}var zd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function In(){for(var e=12,t="";e-- >0;)t+=zd[Math.random()*62|0];return t}function an(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ti(e){return e.classList?an(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function il(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ud(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(il(e[n]),'" ')},"").trim()}function Sr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ni(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function Hd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Wd(e){var t=e.transform,n=e.width,r=n===void 0?ua:n,a=e.height,i=a===void 0?ua:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Js?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Yd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ol(){var e=Zs,t=el,n=j.cssPrefix,r=j.replacementClass,a=Yd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var vo=!1;function Ur(){j.autoAddCss&&!vo&&($d(ol()),vo=!0)}var Kd={mixout:function(){return{dom:{css:ol,insertCss:Ur}}},hooks:function(){return{beforeDOMElementCreation:function(){Ur()},beforeI2svg:function(){Ur()}}}},nt=yt||{};nt[tt]||(nt[tt]={});nt[tt].styles||(nt[tt].styles={});nt[tt].hooks||(nt[tt].hooks={});nt[tt].shims||(nt[tt].shims=[]);var je=nt[tt],sl=[],qd=function e(){ie.removeEventListener("DOMContentLoaded",e),mr=1,sl.map(function(t){return t()})},mr=!1;it&&(mr=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),mr||ie.addEventListener("DOMContentLoaded",qd));function Xd(e){it&&(mr?setTimeout(e,0):sl.push(e))}function Fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?il(e):"<".concat(t," ").concat(Ud(r),">").concat(i.map(Fn).join(""),"</").concat(t,">")}function bo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Vd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Hr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Vd(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Gd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ma(e){var t=Gd(e);return t.length===1?t[0].toString(16):null}function Qd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ha(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=yo(t);typeof je.hooks.addPack=="function"&&!a?je.hooks.addPack(e,yo(t)):je.styles[e]=R(R({},je.styles[e]||{}),i),e==="fas"&&ha("fa",t)}var Vn,Gn,Qn,$t=je.styles,Jd=je.shims,Zd=(Vn={},de(Vn,ae,Object.values(Cn[ae])),de(Vn,se,Object.values(Cn[se])),Vn),ri=null,ll={},fl={},cl={},ul={},dl={},em=(Gn={},de(Gn,ae,Object.keys(Pn[ae])),de(Gn,se,Object.keys(Pn[se])),Gn);function tm(e){return~Fd.indexOf(e)}function nm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!tm(a)?a:null}var ml=function(){var t=function(i){return Hr($t,function(o,s,l){return o[l]=Hr(s,i,{}),o},{})};ll=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),fl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),dl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in $t||j.autoFetchSvg,r=Hr(Jd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});cl=r.names,ul=r.unicodes,ri=Ir(j.styleDefault,{family:j.familyDefault})};Bd(function(e){ri=Ir(e.styleDefault,{family:j.familyDefault})});ml();function ai(e,t){return(ll[e]||{})[t]}function rm(e,t){return(fl[e]||{})[t]}function Ct(e,t){return(dl[e]||{})[t]}function hl(e){return cl[e]||{prefix:null,iconName:null}}function am(e){var t=ul[e],n=ai("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xt(){return ri}var ii=function(){return{prefix:null,iconName:null,rest:[]}};function Ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ae:n,a=Pn[r][e],i=On[r][e]||On[r][a],o=e in je.styles?e:null;return i||o||null}var xo=(Qn={},de(Qn,ae,Object.keys(Cn[ae])),de(Qn,se,Object.keys(Cn[se])),Qn);function Rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},de(t,ae,"".concat(j.cssPrefix,"-").concat(ae)),de(t,se,"".concat(j.cssPrefix,"-").concat(se)),t),o=null,s=ae;(e.includes(i[ae])||e.some(function(f){return xo[ae].includes(f)}))&&(s=ae),(e.includes(i[se])||e.some(function(f){return xo[se].includes(f)}))&&(s=se);var l=e.reduce(function(f,c){var u=nm(j.cssPrefix,c);if($t[c]?(c=Zd[s].includes(c)?Sd[s][c]:c,o=c,f.prefix=c):em[s].indexOf(c)>-1?(o=c,f.prefix=Ir(c,{family:s})):u?f.iconName=u:c!==j.replacementClass&&c!==i[ae]&&c!==i[se]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=o==="fa"?hl(f.iconName):{},g=Ct(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!$t.far&&$t.fas&&!j.autoFetchSvg&&(f.prefix="fas")}return f},ii());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===se&&($t.fass||j.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=xt()||"fas"),l}var im=function(){function e(){vd(this,e),this.definitions={}}return bd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),ha(s,o[s]);var l=Cn[ae][s];l&&ha(l,o[s]),ml()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=f)}),n[s][l]=f}),n}}]),e}(),wo=[],zt={},Xt={},om=Object.keys(Xt);function sm(e,t){var n=t.mixoutsTo;return wo=e,zt={},Object.keys(Xt).forEach(function(r){om.indexOf(r)===-1&&delete Xt[r]}),wo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),dr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){zt[o]||(zt[o]=[]),zt[o].push(i[o])})}r.provides&&r.provides(Xt)}),n}function pa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=zt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=zt[e]||[];a.forEach(function(i){i.apply(null,n)})}function rt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Xt[e]?Xt[e].apply(null,t):void 0}function ga(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||xt();if(t)return t=Ct(n,t)||t,bo(pl.definitions,n,t)||bo(je.styles,n,t)}var pl=new im,lm=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,Nt("noAuto")},fm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(Nt("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,Xd(function(){um({autoReplaceSvgRoot:n}),Nt("watch",t)})}},cm={icon:function(t){if(t===null)return null;if(dr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ir(t[0]);return{prefix:r,iconName:Ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.cssPrefix,"-"))>-1||t.match(Id))){var a=Rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||xt(),iconName:Ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=xt();return{prefix:i,iconName:Ct(i,t)||t}}}},Se={noAuto:lm,config:j,dom:fm,parse:cm,library:pl,findIconDefinition:ga,toHtml:Fn},um=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ie:n;(Object.keys(je.styles).length>0||j.autoFetchSvg)&&it&&j.autoReplaceSvg&&Se.dom.i2svg({node:r})};function Tr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(it){var r=ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function dm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ni(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Sr(R(R({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function mm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(j.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function oi(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,u=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,O=A.width,F=A.height,b=a==="fak",x=[j.replacementClass,i?"".concat(j.cssPrefix,"-").concat(i):""].filter(function(te){return u.classes.indexOf(te)===-1}).filter(function(te){return te!==""||!!te}).concat(u.classes).join(" "),N={children:[],attributes:R(R({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(F)})},_=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(O/F*16*.0625,"em")}:{};g&&(N.attributes[Tt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||In())},children:[l]}),delete N.attributes.title);var M=R(R({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:R(R({},_),u.styles)}),W=r.found&&n.found?rt("generateAbstractMask",M)||{children:[],attributes:{}}:rt("generateAbstractIcon",M)||{children:[],attributes:{}},K=W.children,Z=W.attributes;return M.children=K,M.attributes=Z,s?mm(M):dm(M)}function _o(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Tt]="");var c=R({},o.styles);ni(a)&&(c.transform=Wd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Sr(c);u.length>0&&(f.style=u);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function hm(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Sr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wr=je.styles;function va(e){var t=e[0],n=e[1],r=e.slice(4),a=Ga(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var pm={found:!1,width:512,height:512};function gm(e,t){!tl&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ba(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=xt()),new Promise(function(r,a){if(rt("missingIconAbstract"),n==="fa"){var i=hl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Wr[t]&&Wr[t][e]){var o=Wr[t][e];return r(va(o))}gm(e,t),r(R(R({},pm),{},{icon:j.showMissingIcons&&e?rt("missingIconAbstract")||{}:{}}))})}var Eo=function(){},ya=j.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:Eo,measure:Eo},un='FA "6.4.0"',vm=function(t){return ya.mark("".concat(un," ").concat(t," begins")),function(){return gl(t)}},gl=function(t){ya.mark("".concat(un," ").concat(t," ends")),ya.measure("".concat(un," ").concat(t),"".concat(un," ").concat(t," begins"),"".concat(un," ").concat(t," ends"))},si={begin:vm,end:gl},rr=function(){};function ko(e){var t=e.getAttribute?e.getAttribute(Tt):null;return typeof t=="string"}function bm(e){var t=e.getAttribute?e.getAttribute(Ja):null,n=e.getAttribute?e.getAttribute(Za):null;return t&&n}function ym(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function xm(){if(j.autoReplaceSvg===!0)return ar.replace;var e=ar[j.autoReplaceSvg];return e||ar.replace}function wm(e){return ie.createElementNS("http://www.w3.org/2000/svg",e)}function _m(e){return ie.createElement(e)}function vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?wm:_m:n;if(typeof e=="string")return ie.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(vl(o,{ceFn:r}))}),a}function Em(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ar={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(vl(a),n)}),n.getAttribute(Tt)===null&&j.keepOriginalSource){var r=ie.createComment(Em(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ti(n).indexOf(j.replacementClass))return ar.replace(t);var a=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===j.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Fn(s)}).join(`
`);n.setAttribute(Tt,""),n.innerHTML=o}};function Ao(e){e()}function bl(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=Ao;j.mutateApproach===Od&&(r=yt.requestAnimationFrame||Ao),r(function(){var a=xm(),i=si.begin("mutate");e.map(a),i(),n()})}}var li=!1;function yl(){li=!0}function xa(){li=!1}var hr=null;function Po(e){if(po&&j.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,a=r===void 0?rr:r,i=e.pseudoElementsCallback,o=i===void 0?rr:i,s=e.observeMutationsRoot,l=s===void 0?ie:s;hr=new po(function(f){if(!li){var c=xt();an(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!ko(u.addedNodes[0])&&(j.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&j.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&ko(u.target)&&~Md.indexOf(u.attributeName))if(u.attributeName==="class"&&bm(u.target)){var h=Rr(ti(u.target)),g=h.prefix,A=h.iconName;u.target.setAttribute(Ja,g||c),A&&u.target.setAttribute(Za,A)}else ym(u.target)&&a(u.target)})}}),it&&hr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function km(){hr&&hr.disconnect()}function Am(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Pm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Rr(ti(e));return a.prefix||(a.prefix=xt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=rm(a.prefix,e.innerText)||ai(a.prefix,ma(e.innerText))),!a.iconName&&j.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Om(e){var t=an(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||In()):(t["aria-hidden"]="true",t.focusable="false")),t}function Cm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Pm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Om(e),s=pa("parseNodeAttributes",{},e),l=t.styleParser?Am(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Sm=je.styles;function xl(e){var t=j.autoReplaceSvg==="nest"?Oo(e,{styleParser:!1}):Oo(e);return~t.extra.classes.indexOf(nl)?rt("generateLayersText",e,t):rt("generateSvgReplacementMutation",e,t)}var wt=new Set;ei.map(function(e){wt.add("fa-".concat(e))});Object.keys(Pn[ae]).map(wt.add.bind(wt));Object.keys(Pn[se]).map(wt.add.bind(wt));wt=Nn(wt);function Co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=ie.documentElement.classList,r=function(u){return n.add("".concat(go,"-").concat(u))},a=function(u){return n.remove("".concat(go,"-").concat(u))},i=j.autoFetchSvg?wt:ei.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Sm));i.includes("fa")||i.push("fa");var o=[".".concat(nl,":not([").concat(Tt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=an(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=si.begin("onTree"),f=s.reduce(function(c,u){try{var h=xl(u);h&&c.push(h)}catch(g){tl||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(h){bl(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),u(h)})})}function Im(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xl(e).then(function(n){n&&bl([n],t)})}function Rm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ga(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ga(a||{})),e(r,R(R({},n),{},{mask:a}))}}var Tm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ye:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,u=n.title,h=u===void 0?null:u,g=n.titleId,A=g===void 0?null:g,O=n.classes,F=O===void 0?[]:O,b=n.attributes,x=b===void 0?{}:b,N=n.styles,_=N===void 0?{}:N;if(t){var M=t.prefix,W=t.iconName,K=t.icon;return Tr(R({type:"icon"},t),function(){return Nt("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(h?x["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(A||In()):(x["aria-hidden"]="true",x.focusable="false")),oi({icons:{main:va(K),mask:l?va(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:W,transform:R(R({},Ye),a),symbol:o,title:h,maskId:c,titleId:A,extra:{attributes:x,styles:_,classes:F}})})}},Nm={mixout:function(){return{icon:Rm(Tm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Co,n.nodeCallback=Im,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ie:r,i=n.callback,o=i===void 0?function(){}:i;return Co(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,u=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([ba(a,s),c.iconName?ba(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var F=Ga(O,2),b=F[0],x=F[1];g([n,oi({icons:{main:b,mask:x},prefix:s,iconName:a,transform:l,symbol:f,maskId:u,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Sr(s);l.length>0&&(a.style=l);var f;return ni(o)&&(f=rt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Mm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Tr({type:"layer"},function(){Nt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(Nn(i)).join(" ")},children:o}]})}}}},Fm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,u=c===void 0?{}:c;return Tr({type:"counter",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),hm({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(Nn(s))}})})}}}},Lm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ye:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,u=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Tr({type:"text",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),_o({content:n,transform:R(R({},Ye),i),title:s,extra:{attributes:u,styles:g,classes:["".concat(j.cssPrefix,"-layers-text")].concat(Nn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Js){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return j.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_o({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},jm=new RegExp('"',"ug"),So=[1105920,1112319];function Dm(e){var t=e.replace(jm,""),n=Qd(t,0),r=n>=So[0]&&n<=So[1],a=t.length===2?t[0]===t[1]:!1;return{value:ma(a?t[0]:t),isSecondary:r||a}}function Io(e,t){var n="".concat(Pd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=an(e.children),o=i.filter(function(K){return K.getAttribute(da)===t})[0],s=yt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Rd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?se:ae,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?On[h][l[2].toLowerCase()]:Td[h][f],A=Dm(u),O=A.value,F=A.isSecondary,b=l[0].startsWith("FontAwesome"),x=ai(g,O),N=x;if(b){var _=am(O);_.iconName&&_.prefix&&(x=_.iconName,g=_.prefix)}if(x&&!F&&(!o||o.getAttribute(Ja)!==g||o.getAttribute(Za)!==N)){e.setAttribute(n,N),o&&e.removeChild(o);var M=Cm(),W=M.extra;W.attributes[da]=t,ba(x,g).then(function(K){var Z=oi(R(R({},M),{},{icons:{main:K,mask:ii()},prefix:g,iconName:N,extra:W,watchable:!0})),te=ie.createElement("svg");t==="::before"?e.insertBefore(te,e.firstChild):e.appendChild(te),te.outerHTML=Z.map(function(fe){return Fn(fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bm(e){return Promise.all([Io(e,"::before"),Io(e,"::after")])}function $m(e){return e.parentNode!==document.head&&!~Cd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(da)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ro(e){if(it)return new Promise(function(t,n){var r=an(e.querySelectorAll("*")).filter($m).map(Bm),a=si.begin("searchPseudoElements");yl(),Promise.all(r).then(function(){a(),xa(),t()}).catch(function(){a(),xa(),n()})})}var zm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ro,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ie:r;j.searchPseudoElements&&Ro(a)}}},To=!1,Um={mixout:function(){return{dom:{unwatch:function(){yl(),To=!0}}}},hooks:function(){return{bootstrap:function(){Po(pa("mutationObserverCallbacks",{}))},noAuto:function(){km()},watch:function(n){var r=n.observeMutationsRoot;To?xa():Po(pa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},No=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Hm={mixout:function(){return{parse:{transform:function(n){return No(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=No(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:u,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Yr={x:0,y:0,width:"100%",height:"100%"};function Mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Wm(e){return e.tag==="g"?e.children:[e]}var Ym={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Rr(a.split(" ").map(function(o){return o.trim()})):ii();return i.prefix||(i.prefix=xt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,u=o.width,h=o.icon,g=Hd({transform:l,containerWidth:u,iconWidth:f}),A={tag:"rect",attributes:R(R({},Yr),{},{fill:"white"})},O=c.children?{children:c.children.map(Mo)}:{},F={tag:"g",attributes:R({},g.inner),children:[Mo(R({tag:c.tag,attributes:R(R({},c.attributes),g.path)},O))]},b={tag:"g",attributes:R({},g.outer),children:[F]},x="mask-".concat(s||In()),N="clip-".concat(s||In()),_={tag:"mask",attributes:R(R({},Yr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Wm(h)},_]};return r.push(M,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(x,")")},Yr)}),{children:r,attributes:a}}}},Km={provides:function(t){var n=!1;yt.matchMedia&&(n=yt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},qm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Xm=[Kd,Nm,Mm,Fm,Lm,zm,Um,Hm,Ym,Km,qm];sm(Xm,{mixoutsTo:Se});Se.noAuto;Se.config;var Vm=Se.library;Se.dom;var wa=Se.parse;Se.findIconDefinition;Se.toHtml;var Gm=Se.icon;Se.layer;Se.text;Se.counter;function Fo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fo(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){"@babel/helpers - typeof";return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Jm(e,t){if(e==null)return{};var n=Qm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wl={exports:{}};(function(e){(function(t){var n=function(b,x,N){if(!f(x)||u(x)||h(x)||g(x)||l(x))return x;var _,M=0,W=0;if(c(x))for(_=[],W=x.length;M<W;M++)_.push(n(b,x[M],N));else{_={};for(var K in x)Object.prototype.hasOwnProperty.call(x,K)&&(_[b(K,N)]=n(b,x[K],N))}return _},r=function(b,x){x=x||{};var N=x.separator||"_",_=x.split||/(?=[A-Z])/;return b.split(_).join(N)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(x,N){return N?N.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var x=a(b);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(b,x){return r(b,x).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},c=function(b){return s.call(b)=="[object Array]"},u=function(b){return s.call(b)=="[object Date]"},h=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},O=function(b,x){var N=x&&"process"in x?x.process:x;return typeof N!="function"?b:function(_,M){return N(_,b,M)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,x){return n(O(a,x),b)},decamelizeKeys:function(b,x){return n(O(o,x),b,x)},pascalizeKeys:function(b,x){return n(O(i,x),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(Zm)})(wl);var eh=wl.exports,th=["class","style"];function nh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=eh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function rh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function _l(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return _l(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=rh(c);break;case"style":l.style=nh(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Jm(n,th);return qa(e.tag,Je(Je(Je({},t),{},{class:a.class,style:Je(Je({},a.style),o)},a.attrs),s),r)}var El=!1;try{El=!0}catch{}function ah(){if(!El&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Kr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ke({},e,t):{}}function ih(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ke(t,"fa-".concat(e.size),e.size!==null),ke(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ke(t,"fa-pull-".concat(e.pull),e.pull!==null),ke(t,"fa-swap-opacity",e.swapOpacity),ke(t,"fa-bounce",e.bounce),ke(t,"fa-shake",e.shake),ke(t,"fa-beat",e.beat),ke(t,"fa-fade",e.fade),ke(t,"fa-beat-fade",e.beatFade),ke(t,"fa-flash",e.flash),ke(t,"fa-spin-pulse",e.spinPulse),ke(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Lo(e){if(e&&pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wa.icon)return wa.icon(e);if(e===null)return null;if(pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var oh=za({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=pe(function(){return Lo(t.icon)}),i=pe(function(){return Kr("classes",ih(t))}),o=pe(function(){return Kr("transform",typeof t.transform=="string"?wa.transform(t.transform):t.transform)}),s=pe(function(){return Kr("mask",Lo(t.mask))}),l=pe(function(){return Gm(a.value,Je(Je(Je(Je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});qt(l,function(c){if(!c)return ah("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=pe(function(){return l.value?_l(l.value.abstract[0],{},r):null});return function(){return f.value}}}),sh={prefix:"far",iconName:"circle-right",icon:[512,512,[61838,"arrow-alt-circle-right"],"f35a","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"]};Vm.add(sh);const kl=tu(ad).component("font-awesome-icon",oh);kl.use(gd);kl.mount("#app");export{Qe as F,lh as S,qs as _,It as a,gd as b,Is as c,Pf as d,bc as e,ms as f,we as g,Ca as n,Ar as o,Af as p,fh as r,Dl as t,ht as u,ch as w};
