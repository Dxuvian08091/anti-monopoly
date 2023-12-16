(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ya(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const ft={},lr=[],Mn=()=>{},Xf=()=>!1,qf=/^on[^a-z]/,mo=n=>qf.test(n),$a=n=>n.startsWith("onUpdate:"),Pt=Object.assign,Ka=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jf=Object.prototype.hasOwnProperty,et=(n,e)=>jf.call(n,e),De=Array.isArray,cr=n=>ds(n)==="[object Map]",Cr=n=>ds(n)==="[object Set]",Rl=n=>ds(n)==="[object Date]",We=n=>typeof n=="function",yt=n=>typeof n=="string",mr=n=>typeof n=="symbol",ut=n=>n!==null&&typeof n=="object",$u=n=>(ut(n)||We(n))&&We(n.then)&&We(n.catch),Ku=Object.prototype.toString,ds=n=>Ku.call(n),Yf=n=>ds(n).slice(8,-1),Zu=n=>ds(n)==="[object Object]",Za=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ys=Ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),go=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$f=/-(\w)/g,In=go(n=>n.replace($f,(e,t)=>t?t.toUpperCase():"")),Kf=/\B([A-Z])/g,wr=go(n=>n.replace(Kf,"-$1").toLowerCase()),_o=go(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fo=go(n=>n?`on${_o(n)}`:""),Ni=(n,e)=>!Object.is(n,e),$s=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},to=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},no=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Pl;const Sa=()=>Pl||(Pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rr(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=yt(i)?eh(i):Rr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(yt(n)||ut(n))return n}const Zf=/;(?![^(]*\))/g,Jf=/:([^]+)/,Qf=/\/\*[^]*?\*\//g;function eh(n){const e={};return n.replace(Qf,"").split(Zf).forEach(t=>{if(t){const i=t.split(Jf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function nn(n){let e="";if(yt(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const i=nn(n[t]);i&&(e+=i+" ")}else if(ut(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const th="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nh=Ya(th);function Ju(n){return!!n||n===""}function ih(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=fs(n[i],e[i]);return t}function fs(n,e){if(n===e)return!0;let t=Rl(n),i=Rl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=mr(n),i=mr(e),t||i)return n===e;if(t=De(n),i=De(e),t||i)return t&&i?ih(n,e):!1;if(t=ut(n),i=ut(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!fs(n[o],e[o]))return!1}}return String(n)===String(e)}function Ja(n,e){return n.findIndex(t=>fs(t,e))}const Je=n=>yt(n)?n:n==null?"":De(n)||ut(n)&&(n.toString===Ku||!We(n.toString))?JSON.stringify(n,Qu,2):String(n),Qu=(n,e)=>e&&e.__v_isRef?Qu(n,e.value):cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Cr(e)?{[`Set(${e.size})`]:[...e.values()]}:ut(e)&&!De(e)&&!Zu(e)?String(e):e;let pn;class rh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pn,!e&&pn&&(this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=pn;try{return pn=this,e()}finally{pn=t}}}on(){pn=this}off(){pn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function sh(n,e=pn){e&&e.active&&e.effects.push(n)}function oh(){return pn}const Qa=n=>{const e=new Set(n);return e.w=0,e.n=0,e},ed=n=>(n.w&fi)>0,td=n=>(n.n&fi)>0,ah=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=fi},lh=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];ed(r)&&!td(r)?r.delete(n):e[t++]=r,r.w&=~fi,r.n&=~fi}e.length=t}},Ea=new WeakMap;let Vr=0,fi=1;const ba=30;let gn;const Pi=Symbol(""),Ta=Symbol("");class el{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,sh(this,i)}run(){if(!this.active)return this.fn();let e=gn,t=ai;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gn,gn=this,ai=!0,fi=1<<++Vr,Vr<=ba?ah(this):Ll(this),this.fn()}finally{Vr<=ba&&lh(this),fi=1<<--Vr,gn=this.parent,ai=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gn===this?this.deferStop=!0:this.active&&(Ll(this),this.onStop&&this.onStop(),this.active=!1)}}function Ll(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ai=!0;const nd=[];function Pr(){nd.push(ai),ai=!1}function Lr(){const n=nd.pop();ai=n===void 0?!0:n}function $t(n,e,t){if(ai&&gn){let i=Ea.get(n);i||Ea.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Qa()),id(r)}}function id(n,e){let t=!1;Vr<=ba?td(n)||(n.n|=fi,t=!ed(n)):t=!n.has(gn),t&&(n.add(gn),gn.deps.push(n))}function Wn(n,e,t,i,r,s){const o=Ea.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&De(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!mr(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":De(n)?Za(t)&&a.push(o.get("length")):(a.push(o.get(Pi)),cr(n)&&a.push(o.get(Ta)));break;case"delete":De(n)||(a.push(o.get(Pi)),cr(n)&&a.push(o.get(Ta)));break;case"set":cr(n)&&a.push(o.get(Pi));break}if(a.length===1)a[0]&&Aa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Aa(Qa(l))}}function Aa(n,e){const t=De(n)?n:[...n];for(const i of t)i.computed&&Il(i);for(const i of t)i.computed||Il(i)}function Il(n,e){(n!==gn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ch=Ya("__proto__,__v_isRef,__isVue"),rd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mr)),Ul=uh();function uh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=it(this);for(let s=0,o=this.length;s<o;s++)$t(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(it)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Pr();const i=it(this)[e].apply(this,t);return Lr(),i}}),n}function dh(n){const e=it(this);return $t(e,"has",n),e.hasOwnProperty(n)}class sd{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw"&&i===(r?s?bh:cd:s?ld:ad).get(e))return e;const o=De(e);if(!r){if(o&&et(Ul,t))return Reflect.get(Ul,t,i);if(t==="hasOwnProperty")return dh}const a=Reflect.get(e,t,i);return(mr(t)?rd.has(t):ch(t))||(r||$t(e,"get",t),s)?a:Ot(a)?o&&Za(t)?a:a.value:ut(a)?r?dd(a):xo(a):a}}class od extends sd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(gr(s)&&Ot(s)&&!Ot(i))return!1;if(!this._shallow&&(!io(i)&&!gr(i)&&(s=it(s),i=it(i)),!De(e)&&Ot(s)&&!Ot(i)))return s.value=i,!0;const o=De(e)&&Za(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,r);return e===it(r)&&(o?Ni(i,s)&&Wn(e,"set",t,i):Wn(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Wn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!mr(t)||!rd.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",De(e)?"length":Pi),Reflect.ownKeys(e)}}class fh extends sd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const hh=new od,ph=new fh,mh=new od(!0),tl=n=>n,vo=n=>Reflect.getPrototypeOf(n);function vs(n,e,t=!1,i=!1){n=n.__v_raw;const r=it(n),s=it(e);t||(Ni(e,s)&&$t(r,"get",e),$t(r,"get",s));const{has:o}=vo(r),a=i?tl:t?rl:es;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function xs(n,e=!1){const t=this.__v_raw,i=it(t),r=it(n);return e||(Ni(n,r)&&$t(i,"has",n),$t(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ys(n,e=!1){return n=n.__v_raw,!e&&$t(it(n),"iterate",Pi),Reflect.get(n,"size",n)}function Dl(n){n=it(n);const e=it(this);return vo(e).has.call(e,n)||(e.add(n),Wn(e,"add",n,n)),this}function Ol(n,e){e=it(e);const t=it(this),{has:i,get:r}=vo(t);let s=i.call(t,n);s||(n=it(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Ni(e,o)&&Wn(t,"set",n,e):Wn(t,"add",n,e),this}function Nl(n){const e=it(this),{has:t,get:i}=vo(e);let r=t.call(e,n);r||(n=it(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Wn(e,"delete",n,void 0),s}function Fl(){const n=it(this),e=n.size!==0,t=n.clear();return e&&Wn(n,"clear",void 0,void 0),t}function Ms(n,e){return function(i,r){const s=this,o=s.__v_raw,a=it(o),l=e?tl:n?rl:es;return!n&&$t(a,"iterate",Pi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ss(n,e,t){return function(...i){const r=this.__v_raw,s=it(r),o=cr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?tl:e?rl:es;return!e&&$t(s,"iterate",l?Ta:Pi),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function $n(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function gh(){const n={get(s){return vs(this,s)},get size(){return ys(this)},has:xs,add:Dl,set:Ol,delete:Nl,clear:Fl,forEach:Ms(!1,!1)},e={get(s){return vs(this,s,!1,!0)},get size(){return ys(this)},has:xs,add:Dl,set:Ol,delete:Nl,clear:Fl,forEach:Ms(!1,!0)},t={get(s){return vs(this,s,!0)},get size(){return ys(this,!0)},has(s){return xs.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Ms(!0,!1)},i={get(s){return vs(this,s,!0,!0)},get size(){return ys(this,!0)},has(s){return xs.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Ms(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ss(s,!1,!1),t[s]=Ss(s,!0,!1),e[s]=Ss(s,!1,!0),i[s]=Ss(s,!0,!0)}),[n,t,e,i]}const[_h,vh,xh,yh]=gh();function nl(n,e){const t=e?n?yh:xh:n?vh:_h;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const Mh={get:nl(!1,!1)},Sh={get:nl(!1,!0)},Eh={get:nl(!0,!1)},ad=new WeakMap,ld=new WeakMap,cd=new WeakMap,bh=new WeakMap;function Th(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ah(n){return n.__v_skip||!Object.isExtensible(n)?0:Th(Yf(n))}function xo(n){return gr(n)?n:il(n,!1,hh,Mh,ad)}function ud(n){return il(n,!1,mh,Sh,ld)}function dd(n){return il(n,!0,ph,Eh,cd)}function il(n,e,t,i,r){if(!ut(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Ah(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function ur(n){return gr(n)?ur(n.__v_raw):!!(n&&n.__v_isReactive)}function gr(n){return!!(n&&n.__v_isReadonly)}function io(n){return!!(n&&n.__v_isShallow)}function fd(n){return ur(n)||gr(n)}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function hd(n){return to(n,"__v_skip",!0),n}const es=n=>ut(n)?xo(n):n,rl=n=>ut(n)?dd(n):n;function pd(n){ai&&gn&&(n=it(n),id(n.dep||(n.dep=Qa())))}function md(n,e){n=it(n);const t=n.dep;t&&Aa(t)}function Ot(n){return!!(n&&n.__v_isRef===!0)}function Ch(n){return gd(n,!1)}function wh(n){return gd(n,!0)}function gd(n,e){return Ot(n)?n:new Rh(n,e)}class Rh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:it(e),this._value=t?e:es(e)}get value(){return pd(this),this._value}set value(e){const t=this.__v_isShallow||io(e)||gr(e);e=t?e:it(e),Ni(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:es(e),md(this))}}function dr(n){return Ot(n)?n.value:n}const Ph={get:(n,e,t)=>dr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ot(r)&&!Ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _d(n){return ur(n)?n:new Proxy(n,Ph)}class Lh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new el(e,()=>{this._dirty||(this._dirty=!0,md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=it(this);return pd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ih(n,e,t=!1){let i,r;const s=We(n);return s?(i=n,r=Mn):(i=n.get,r=n.set),new Lh(i,r,s||!r,t)}function li(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){yo(s,e,t)}return r}function Sn(n,e,t,i){if(We(n)){const s=li(n,e,t,i);return s&&$u(s)&&s.catch(o=>{yo(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Sn(n[s],e,t,i));return r}function yo(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[n,o,a]);return}}Uh(n,t,r,i)}function Uh(n,e,t,i=!0){console.error(n)}let ts=!1,Ca=!1;const Dt=[];let Rn=0;const fr=[];let zn=null,Ti=0;const vd=Promise.resolve();let sl=null;function xd(n){const e=sl||vd;return n?e.then(this?n.bind(this):n):e}function Dh(n){let e=Rn+1,t=Dt.length;for(;e<t;){const i=e+t>>>1,r=Dt[i],s=ns(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function ol(n){(!Dt.length||!Dt.includes(n,ts&&n.allowRecurse?Rn+1:Rn))&&(n.id==null?Dt.push(n):Dt.splice(Dh(n.id),0,n),yd())}function yd(){!ts&&!Ca&&(Ca=!0,sl=vd.then(Sd))}function Oh(n){const e=Dt.indexOf(n);e>Rn&&Dt.splice(e,1)}function Nh(n){De(n)?fr.push(...n):(!zn||!zn.includes(n,n.allowRecurse?Ti+1:Ti))&&fr.push(n),yd()}function Bl(n,e=ts?Rn+1:0){for(;e<Dt.length;e++){const t=Dt[e];t&&t.pre&&(Dt.splice(e,1),e--,t())}}function Md(n){if(fr.length){const e=[...new Set(fr)];if(fr.length=0,zn){zn.push(...e);return}for(zn=e,zn.sort((t,i)=>ns(t)-ns(i)),Ti=0;Ti<zn.length;Ti++)zn[Ti]();zn=null,Ti=0}}const ns=n=>n.id==null?1/0:n.id,Fh=(n,e)=>{const t=ns(n)-ns(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Sd(n){Ca=!1,ts=!0,Dt.sort(Fh);const e=Mn;try{for(Rn=0;Rn<Dt.length;Rn++){const t=Dt[Rn];t&&t.active!==!1&&li(t,null,14)}}finally{Rn=0,Dt.length=0,Md(),ts=!1,sl=null,(Dt.length||fr.length)&&Sd()}}function Bh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=i[u]||ft;f&&(r=t.map(m=>yt(m)?m.trim():m)),d&&(r=t.map(no))}let a,l=i[a=Fo(e)]||i[a=Fo(In(e))];!l&&s&&(l=i[a=Fo(wr(e))]),l&&Sn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Sn(c,n,6,r)}}function Ed(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!We(n)){const l=c=>{const u=Ed(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ut(n)&&i.set(n,null),null):(De(s)?s.forEach(l=>o[l]=null):Pt(o,s),ut(n)&&i.set(n,o),o)}function Mo(n,e){return!n||!mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,wr(e))||et(n,e))}let Nt=null,So=null;function ro(n){const e=Nt;return Nt=n,So=n&&n.type.__scopeId||null,e}function Hi(n){So=n}function ki(){So=null}function st(n,e=Nt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Kl(-1);const s=ro(e);let o;try{o=n(...r)}finally{ro(s),i._d&&Kl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Bo(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:m,ctx:x,inheritAttrs:_}=n;let p,h;const T=ro(n);try{if(t.shapeFlag&4){const b=r||i,C=b;p=Cn(u.call(C,b,d,s,m,f,x)),h=l}else{const b=e;p=Cn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),h=e.props?l:Hh(l)}}catch(b){$r.length=0,yo(b,n,1),p=xt(hi)}let S=p;if(h&&_!==!1){const b=Object.keys(h),{shapeFlag:C}=S;b.length&&C&7&&(o&&b.some($a)&&(h=kh(h,o)),S=_r(S,h))}return t.dirs&&(S=_r(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,ro(T),p}const Hh=n=>{let e;for(const t in n)(t==="class"||t==="style"||mo(t))&&((e||(e={}))[t]=n[t]);return e},kh=(n,e)=>{const t={};for(const i in n)(!$a(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function zh(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Hl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Mo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Hl(i,o,c):!0:!!o;return!1}function Hl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Mo(t,s))return!0}return!1}function Gh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const bd="components";function nt(n,e){return Wh(bd,n,!0,e)||n}const Vh=Symbol.for("v-ndc");function Wh(n,e,t=!0,i=!1){const r=Nt||Ct;if(r){const s=r.type;if(n===bd){const a=Hp(s,!1);if(a&&(a===e||a===In(e)||a===_o(In(e))))return s}const o=kl(r[n]||s[n],e)||kl(r.appContext[n],e);return!o&&i?s:o}}function kl(n,e){return n&&(n[e]||n[In(e)]||n[_o(In(e))])}const Xh=n=>n.__isSuspense;function qh(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):Nh(n)}const Es={};function Ks(n,e,t){return Td(n,e,t)}function Td(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=ft){var a;const l=oh()===((a=Ct)==null?void 0:a.scope)?Ct:null;let c,u=!1,d=!1;if(Ot(n)?(c=()=>n.value,u=io(n)):ur(n)?(c=()=>n,i=!0):De(n)?(d=!0,u=n.some(b=>ur(b)||io(b)),c=()=>n.map(b=>{if(Ot(b))return b.value;if(ur(b))return Ri(b);if(We(b))return li(b,l,2)})):We(n)?e?c=()=>li(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Sn(n,l,3,[m])}:c=Mn,e&&i){const b=c;c=()=>Ri(b())}let f,m=b=>{f=T.onStop=()=>{li(b,l,4),f=T.onStop=void 0}},x;if(ss)if(m=Mn,e?t&&Sn(e,l,3,[c(),d?[]:void 0,m]):c(),r==="sync"){const b=Gp();x=b.__watcherHandles||(b.__watcherHandles=[])}else return Mn;let _=d?new Array(n.length).fill(Es):Es;const p=()=>{if(T.active)if(e){const b=T.run();(i||u||(d?b.some((C,P)=>Ni(C,_[P])):Ni(b,_)))&&(f&&f(),Sn(e,l,3,[b,_===Es?void 0:d&&_[0]===Es?[]:_,m]),_=b)}else T.run()};p.allowRecurse=!!e;let h;r==="sync"?h=p:r==="post"?h=()=>Wt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),h=()=>ol(p));const T=new el(c,h);e?t?p():_=T.run():r==="post"?Wt(T.run.bind(T),l&&l.suspense):T.run();const S=()=>{T.stop(),l&&l.scope&&Ka(l.scope.effects,T)};return x&&x.push(S),S}function jh(n,e,t){const i=this.proxy,r=yt(n)?n.includes(".")?Ad(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const o=Ct;vr(this);const a=Td(r,s.bind(i),t);return o?vr(o):Li(),a}function Ad(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ri(n,e){if(!ut(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ot(n))Ri(n.value,e);else if(De(n))for(let t=0;t<n.length;t++)Ri(n[t],e);else if(Cr(n)||cr(n))n.forEach(t=>{Ri(t,e)});else if(Zu(n))for(const t in n)Ri(n[t],e);return n}function cn(n,e){const t=Nt;if(t===null)return n;const i=Ao(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ft]=e[s];o&&(We(o)&&(o={mounted:o,updated:o}),o.deep&&Ri(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function _i(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Pr(),Sn(l,t,8,[n.el,a,n,e]),Lr())}}/*! #__NO_SIDE_EFFECTS__ */function Cd(n,e){return We(n)?(()=>Pt({name:n.name},e,{setup:n}))():n}const qr=n=>!!n.type.__asyncLoader,wd=n=>n.type.__isKeepAlive;function Yh(n,e){Rd(n,"a",e)}function $h(n,e){Rd(n,"da",e)}function Rd(n,e,t=Ct){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Eo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)wd(r.parent.vnode)&&Kh(i,e,t,r),r=r.parent}}function Kh(n,e,t,i){const r=Eo(e,n,i,!0);Pd(()=>{Ka(i[e],r)},t)}function Eo(n,e,t=Ct,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Pr(),vr(t);const a=Sn(e,t,n,o);return Li(),Lr(),a});return i?r.unshift(s):r.push(s),s}}const Yn=n=>(e,t=Ct)=>(!ss||n==="sp")&&Eo(n,(...i)=>e(...i),t),Zh=Yn("bm"),Jh=Yn("m"),Qh=Yn("bu"),ep=Yn("u"),tp=Yn("bum"),Pd=Yn("um"),np=Yn("sp"),ip=Yn("rtg"),rp=Yn("rtc");function sp(n,e=Ct){Eo("ec",n,e)}function En(n,e,t,i){let r;const s=t&&t[i];if(De(n)||yt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(ut(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function is(n,e,t={},i,r){if(Nt.isCE||Nt.parent&&qr(Nt.parent)&&Nt.parent.isCE)return e!=="default"&&(t.name=e),xt("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),fe();const o=s&&Ld(s(t)),a=tt(ht,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ld(n){return n.some(e=>ao(e)?!(e.type===hi||e.type===ht&&!Ld(e.children)):!0)?n:null}const wa=n=>n?Gd(n)?Ao(n)||n.proxy:wa(n.parent):null,jr=Pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wa(n.parent),$root:n=>wa(n.root),$emit:n=>n.emit,$options:n=>al(n),$forceUpdate:n=>n.f||(n.f=()=>ol(n.update)),$nextTick:n=>n.n||(n.n=xd.bind(n.proxy)),$watch:n=>jh.bind(n)}),Ho=(n,e)=>n!==ft&&!n.__isScriptSetup&&et(n,e),op={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ho(i,e))return o[e]=1,i[e];if(r!==ft&&et(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&et(c,e))return o[e]=3,s[e];if(t!==ft&&et(t,e))return o[e]=4,t[e];Ra&&(o[e]=0)}}const u=jr[e];let d,f;if(u)return e==="$attrs"&&$t(n,"get",e),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==ft&&et(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,et(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ho(r,e)?(r[e]=t,!0):i!==ft&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ft&&et(n,o)||Ho(e,o)||(a=s[0])&&et(a,o)||et(i,o)||et(jr,o)||et(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zl(n){return De(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ra=!0;function ap(n){const e=al(n),t=n.proxy,i=n.ctx;Ra=!1,e.beforeCreate&&Gl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:x,activated:_,deactivated:p,beforeDestroy:h,beforeUnmount:T,destroyed:S,unmounted:b,render:C,renderTracked:P,renderTriggered:L,errorCaptured:Y,serverPrefetch:M,expose:w,inheritAttrs:Q,components:ne,directives:pe,filters:D}=e;if(c&&lp(c,i,null),o)for(const k in o){const re=o[k];We(re)&&(i[k]=re.bind(t))}if(r){const k=r.call(t,t);ut(k)&&(n.data=xo(k))}if(Ra=!0,s)for(const k in s){const re=s[k],ue=We(re)?re.bind(t,t):We(re.get)?re.get.bind(t,t):Mn,ae=!We(re)&&We(re.set)?re.set.bind(t):Mn,ge=_n({get:ue,set:ae});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>ge.value,set:_e=>ge.value=_e})}if(a)for(const k in a)Id(a[k],i,t,k);if(l){const k=We(l)?l.call(t):l;Reflect.ownKeys(k).forEach(re=>{Zs(re,k[re])})}u&&Gl(u,n,"c");function Z(k,re){De(re)?re.forEach(ue=>k(ue.bind(t))):re&&k(re.bind(t))}if(Z(Zh,d),Z(Jh,f),Z(Qh,m),Z(ep,x),Z(Yh,_),Z($h,p),Z(sp,Y),Z(rp,P),Z(ip,L),Z(tp,T),Z(Pd,b),Z(np,M),De(w))if(w.length){const k=n.exposed||(n.exposed={});w.forEach(re=>{Object.defineProperty(k,re,{get:()=>t[re],set:ue=>t[re]=ue})})}else n.exposed||(n.exposed={});C&&n.render===Mn&&(n.render=C),Q!=null&&(n.inheritAttrs=Q),ne&&(n.components=ne),pe&&(n.directives=pe)}function lp(n,e,t=Mn){De(n)&&(n=Pa(n));for(const i in n){const r=n[i];let s;ut(r)?"default"in r?s=Xn(r.from||i,r.default,!0):s=Xn(r.from||i):s=Xn(r),Ot(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Gl(n,e,t){Sn(De(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Id(n,e,t,i){const r=i.includes(".")?Ad(t,i):()=>t[i];if(yt(n)){const s=e[n];We(s)&&Ks(r,s)}else if(We(n))Ks(r,n.bind(t));else if(ut(n))if(De(n))n.forEach(s=>Id(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&Ks(r,s,n)}}function al(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>so(l,c,o,!0)),so(l,e,o)),ut(e)&&s.set(e,l),l}function so(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&so(n,s,t,!0),r&&r.forEach(o=>so(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const cp={data:Vl,props:Wl,emits:Wl,methods:Wr,computed:Wr,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Wr,directives:Wr,watch:dp,provide:Vl,inject:up};function Vl(n,e){return e?n?function(){return Pt(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function up(n,e){return Wr(Pa(n),Pa(e))}function Pa(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function Wr(n,e){return n?Pt(Object.create(null),n,e):e}function Wl(n,e){return n?De(n)&&De(e)?[...new Set([...n,...e])]:Pt(Object.create(null),zl(n),zl(e??{})):e}function dp(n,e){if(!n)return e;if(!e)return n;const t=Pt(Object.create(null),n);for(const i in e)t[i]=kt(n[i],e[i]);return t}function Ud(){return{app:null,config:{isNativeTag:Xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fp=0;function hp(n,e){return function(i,r=null){We(i)||(i=Pt({},i)),r!=null&&!ut(r)&&(r=null);const s=Ud(),o=new WeakSet;let a=!1;const l=s.app={_uid:fp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vp,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...u)):We(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const f=xt(i,r);return f.appContext=s,u&&e?e(f,c):n(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Ao(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){oo=l;try{return c()}finally{oo=null}}};return l}}let oo=null;function Zs(n,e){if(Ct){let t=Ct.provides;const i=Ct.parent&&Ct.parent.provides;i===t&&(t=Ct.provides=Object.create(i)),t[n]=e}}function Xn(n,e,t=!1){const i=Ct||Nt;if(i||oo){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:oo._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}function pp(n,e,t,i=!1){const r={},s={};to(s,To,1),n.propsDefaults=Object.create(null),Dd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:ud(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function mp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=it(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Mo(n.emitsOptions,f))continue;const m=e[f];if(l)if(et(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const x=In(f);r[x]=La(l,a,x,m,n,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Dd(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!et(e,d)&&((u=wr(d))===d||!et(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=La(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!et(e,d))&&(delete s[d],c=!0)}c&&Wn(n,"set","$attrs")}function Dd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ys(l))continue;const c=e[l];let u;r&&et(r,u=In(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Mo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(t),c=a||ft;for(let u=0;u<s.length;u++){const d=s[u];t[d]=La(r,l,d,c[d],n,!et(c,d))}}return o}function La(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(vr(r),i=c[t]=l.call(null,e),Li())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===wr(t))&&(i=!0))}return i}function Od(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!We(n)){const u=d=>{l=!0;const[f,m]=Od(d,e,!0);Pt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ut(n)&&i.set(n,lr),lr;if(De(s))for(let u=0;u<s.length;u++){const d=In(s[u]);Xl(d)&&(o[d]=ft)}else if(s)for(const u in s){const d=In(u);if(Xl(d)){const f=s[u],m=o[d]=De(f)||We(f)?{type:f}:Pt({},f);if(m){const x=Yl(Boolean,m.type),_=Yl(String,m.type);m[0]=x>-1,m[1]=_<0||x<_,(x>-1||et(m,"default"))&&a.push(d)}}}const c=[o,a];return ut(n)&&i.set(n,c),c}function Xl(n){return n[0]!=="$"}function ql(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function jl(n,e){return ql(n)===ql(e)}function Yl(n,e){return De(e)?e.findIndex(t=>jl(t,n)):We(e)&&jl(e,n)?0:-1}const Nd=n=>n[0]==="_"||n==="$stable",ll=n=>De(n)?n.map(Cn):[Cn(n)],gp=(n,e,t)=>{if(e._n)return e;const i=st((...r)=>ll(e(...r)),t);return i._c=!1,i},Fd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Nd(r))continue;const s=n[r];if(We(s))e[r]=gp(r,s,i);else if(s!=null){const o=ll(s);e[r]=()=>o}}},Bd=(n,e)=>{const t=ll(e);n.slots.default=()=>t},_p=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=it(e),to(e,"_",t)):Fd(e,n.slots={})}else n.slots={},e&&Bd(n,e);to(n.slots,To,1)},vp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Pt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Fd(e,r)),o=e}else e&&(Bd(n,e),o={default:1});if(s)for(const a in r)!Nd(a)&&o[a]==null&&delete r[a]};function Ia(n,e,t,i,r=!1){if(De(n)){n.forEach((f,m)=>Ia(f,e&&(De(e)?e[m]:e),t,i,r));return}if(qr(i)&&!r)return;const s=i.shapeFlag&4?Ao(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,et(d,c)&&(d[c]=null)):Ot(c)&&(c.value=null)),We(l))li(l,a,12,[o,u]);else{const f=yt(l),m=Ot(l);if(f||m){const x=()=>{if(n.f){const _=f?et(d,l)?d[l]:u[l]:l.value;r?De(_)&&Ka(_,s):De(_)?_.includes(s)||_.push(s):f?(u[l]=[s],et(d,l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,et(d,l)&&(d[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(x.id=-1,Wt(x,t)):x()}}}const Wt=qh;function xp(n){return yp(n)}function yp(n,e){const t=Sa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=Mn,insertStaticContent:x}=n,_=(g,A,R,F=null,B=null,$=null,oe=!1,j=null,ce=!!A.dynamicChildren)=>{if(g===A)return;g&&!Nr(g,A)&&(F=O(g),_e(g,B,$,!0),g=null),A.patchFlag===-2&&(ce=!1,A.dynamicChildren=null);const{type:se,ref:Te,shapeFlag:y}=A;switch(se){case bo:p(g,A,R,F);break;case hi:h(g,A,R,F);break;case Js:g==null&&T(A,R,F,oe);break;case ht:ne(g,A,R,F,B,$,oe,j,ce);break;default:y&1?C(g,A,R,F,B,$,oe,j,ce):y&6?pe(g,A,R,F,B,$,oe,j,ce):(y&64||y&128)&&se.process(g,A,R,F,B,$,oe,j,ce,J)}Te!=null&&B&&Ia(Te,g&&g.ref,$,A||g,!A)},p=(g,A,R,F)=>{if(g==null)i(A.el=a(A.children),R,F);else{const B=A.el=g.el;A.children!==g.children&&c(B,A.children)}},h=(g,A,R,F)=>{g==null?i(A.el=l(A.children||""),R,F):A.el=g.el},T=(g,A,R,F)=>{[g.el,g.anchor]=x(g.children,A,R,F,g.el,g.anchor)},S=({el:g,anchor:A},R,F)=>{let B;for(;g&&g!==A;)B=f(g),i(g,R,F),g=B;i(A,R,F)},b=({el:g,anchor:A})=>{let R;for(;g&&g!==A;)R=f(g),r(g),g=R;r(A)},C=(g,A,R,F,B,$,oe,j,ce)=>{oe=oe||A.type==="svg",g==null?P(A,R,F,B,$,oe,j,ce):M(g,A,B,$,oe,j,ce)},P=(g,A,R,F,B,$,oe,j)=>{let ce,se;const{type:Te,props:y,shapeFlag:v,transition:U,dirs:K}=g;if(ce=g.el=o(g.type,$,y&&y.is,y),v&8?u(ce,g.children):v&16&&Y(g.children,ce,null,F,B,$&&Te!=="foreignObject",oe,j),K&&_i(g,null,F,"created"),L(ce,g,g.scopeId,oe,F),y){for(const ie in y)ie!=="value"&&!Ys(ie)&&s(ce,ie,null,y[ie],$,g.children,F,B,Ae);"value"in y&&s(ce,"value",null,y.value),(se=y.onVnodeBeforeMount)&&An(se,F,g)}K&&_i(g,null,F,"beforeMount");const ee=Mp(B,U);ee&&U.beforeEnter(ce),i(ce,A,R),((se=y&&y.onVnodeMounted)||ee||K)&&Wt(()=>{se&&An(se,F,g),ee&&U.enter(ce),K&&_i(g,null,F,"mounted")},B)},L=(g,A,R,F,B)=>{if(R&&m(g,R),F)for(let $=0;$<F.length;$++)m(g,F[$]);if(B){let $=B.subTree;if(A===$){const oe=B.vnode;L(g,oe,oe.scopeId,oe.slotScopeIds,B.parent)}}},Y=(g,A,R,F,B,$,oe,j,ce=0)=>{for(let se=ce;se<g.length;se++){const Te=g[se]=j?ni(g[se]):Cn(g[se]);_(null,Te,A,R,F,B,$,oe,j)}},M=(g,A,R,F,B,$,oe)=>{const j=A.el=g.el;let{patchFlag:ce,dynamicChildren:se,dirs:Te}=A;ce|=g.patchFlag&16;const y=g.props||ft,v=A.props||ft;let U;R&&vi(R,!1),(U=v.onVnodeBeforeUpdate)&&An(U,R,A,g),Te&&_i(A,g,R,"beforeUpdate"),R&&vi(R,!0);const K=B&&A.type!=="foreignObject";if(se?w(g.dynamicChildren,se,j,R,F,K,$):oe||re(g,A,j,null,R,F,K,$,!1),ce>0){if(ce&16)Q(j,A,y,v,R,F,B);else if(ce&2&&y.class!==v.class&&s(j,"class",null,v.class,B),ce&4&&s(j,"style",y.style,v.style,B),ce&8){const ee=A.dynamicProps;for(let ie=0;ie<ee.length;ie++){const Se=ee[ie],me=y[Se],Ee=v[Se];(Ee!==me||Se==="value")&&s(j,Se,me,Ee,B,g.children,R,F,Ae)}}ce&1&&g.children!==A.children&&u(j,A.children)}else!oe&&se==null&&Q(j,A,y,v,R,F,B);((U=v.onVnodeUpdated)||Te)&&Wt(()=>{U&&An(U,R,A,g),Te&&_i(A,g,R,"updated")},F)},w=(g,A,R,F,B,$,oe)=>{for(let j=0;j<A.length;j++){const ce=g[j],se=A[j],Te=ce.el&&(ce.type===ht||!Nr(ce,se)||ce.shapeFlag&70)?d(ce.el):R;_(ce,se,Te,null,F,B,$,oe,!0)}},Q=(g,A,R,F,B,$,oe)=>{if(R!==F){if(R!==ft)for(const j in R)!Ys(j)&&!(j in F)&&s(g,j,R[j],null,oe,A.children,B,$,Ae);for(const j in F){if(Ys(j))continue;const ce=F[j],se=R[j];ce!==se&&j!=="value"&&s(g,j,se,ce,oe,A.children,B,$,Ae)}"value"in F&&s(g,"value",R.value,F.value)}},ne=(g,A,R,F,B,$,oe,j,ce)=>{const se=A.el=g?g.el:a(""),Te=A.anchor=g?g.anchor:a("");let{patchFlag:y,dynamicChildren:v,slotScopeIds:U}=A;U&&(j=j?j.concat(U):U),g==null?(i(se,R,F),i(Te,R,F),Y(A.children,R,Te,B,$,oe,j,ce)):y>0&&y&64&&v&&g.dynamicChildren?(w(g.dynamicChildren,v,R,B,$,oe,j),(A.key!=null||B&&A===B.subTree)&&cl(g,A,!0)):re(g,A,R,Te,B,$,oe,j,ce)},pe=(g,A,R,F,B,$,oe,j,ce)=>{A.slotScopeIds=j,g==null?A.shapeFlag&512?B.ctx.activate(A,R,F,oe,ce):D(A,R,F,B,$,oe,ce):X(g,A,ce)},D=(g,A,R,F,B,$,oe)=>{const j=g.component=Dp(g,F,B);if(wd(g)&&(j.ctx.renderer=J),Op(j),j.asyncDep){if(B&&B.registerDep(j,Z),!g.el){const ce=j.subTree=xt(hi);h(null,ce,A,R)}return}Z(j,g,A,R,B,$,oe)},X=(g,A,R)=>{const F=A.component=g.component;if(zh(g,A,R))if(F.asyncDep&&!F.asyncResolved){k(F,A,R);return}else F.next=A,Oh(F.update),F.update();else A.el=g.el,F.vnode=A},Z=(g,A,R,F,B,$,oe)=>{const j=()=>{if(g.isMounted){let{next:Te,bu:y,u:v,parent:U,vnode:K}=g,ee=Te,ie;vi(g,!1),Te?(Te.el=K.el,k(g,Te,oe)):Te=K,y&&$s(y),(ie=Te.props&&Te.props.onVnodeBeforeUpdate)&&An(ie,U,Te,K),vi(g,!0);const Se=Bo(g),me=g.subTree;g.subTree=Se,_(me,Se,d(me.el),O(me),g,B,$),Te.el=Se.el,ee===null&&Gh(g,Se.el),v&&Wt(v,B),(ie=Te.props&&Te.props.onVnodeUpdated)&&Wt(()=>An(ie,U,Te,K),B)}else{let Te;const{el:y,props:v}=A,{bm:U,m:K,parent:ee}=g,ie=qr(A);if(vi(g,!1),U&&$s(U),!ie&&(Te=v&&v.onVnodeBeforeMount)&&An(Te,ee,A),vi(g,!0),y&&Ce){const Se=()=>{g.subTree=Bo(g),Ce(y,g.subTree,g,B,null)};ie?A.type.__asyncLoader().then(()=>!g.isUnmounted&&Se()):Se()}else{const Se=g.subTree=Bo(g);_(null,Se,R,F,g,B,$),A.el=Se.el}if(K&&Wt(K,B),!ie&&(Te=v&&v.onVnodeMounted)){const Se=A;Wt(()=>An(Te,ee,Se),B)}(A.shapeFlag&256||ee&&qr(ee.vnode)&&ee.vnode.shapeFlag&256)&&g.a&&Wt(g.a,B),g.isMounted=!0,A=R=F=null}},ce=g.effect=new el(j,()=>ol(se),g.scope),se=g.update=()=>ce.run();se.id=g.uid,vi(g,!0),se()},k=(g,A,R)=>{A.component=g;const F=g.vnode.props;g.vnode=A,g.next=null,mp(g,A.props,F,R),vp(g,A.children,R),Pr(),Bl(),Lr()},re=(g,A,R,F,B,$,oe,j,ce=!1)=>{const se=g&&g.children,Te=g?g.shapeFlag:0,y=A.children,{patchFlag:v,shapeFlag:U}=A;if(v>0){if(v&128){ae(se,y,R,F,B,$,oe,j,ce);return}else if(v&256){ue(se,y,R,F,B,$,oe,j,ce);return}}U&8?(Te&16&&Ae(se,B,$),y!==se&&u(R,y)):Te&16?U&16?ae(se,y,R,F,B,$,oe,j,ce):Ae(se,B,$,!0):(Te&8&&u(R,""),U&16&&Y(y,R,F,B,$,oe,j,ce))},ue=(g,A,R,F,B,$,oe,j,ce)=>{g=g||lr,A=A||lr;const se=g.length,Te=A.length,y=Math.min(se,Te);let v;for(v=0;v<y;v++){const U=A[v]=ce?ni(A[v]):Cn(A[v]);_(g[v],U,R,null,B,$,oe,j,ce)}se>Te?Ae(g,B,$,!0,!1,y):Y(A,R,F,B,$,oe,j,ce,y)},ae=(g,A,R,F,B,$,oe,j,ce)=>{let se=0;const Te=A.length;let y=g.length-1,v=Te-1;for(;se<=y&&se<=v;){const U=g[se],K=A[se]=ce?ni(A[se]):Cn(A[se]);if(Nr(U,K))_(U,K,R,null,B,$,oe,j,ce);else break;se++}for(;se<=y&&se<=v;){const U=g[y],K=A[v]=ce?ni(A[v]):Cn(A[v]);if(Nr(U,K))_(U,K,R,null,B,$,oe,j,ce);else break;y--,v--}if(se>y){if(se<=v){const U=v+1,K=U<Te?A[U].el:F;for(;se<=v;)_(null,A[se]=ce?ni(A[se]):Cn(A[se]),R,K,B,$,oe,j,ce),se++}}else if(se>v)for(;se<=y;)_e(g[se],B,$,!0),se++;else{const U=se,K=se,ee=new Map;for(se=K;se<=v;se++){const Ge=A[se]=ce?ni(A[se]):Cn(A[se]);Ge.key!=null&&ee.set(Ge.key,se)}let ie,Se=0;const me=v-K+1;let Ee=!1,Fe=0;const Ke=new Array(me);for(se=0;se<me;se++)Ke[se]=0;for(se=U;se<=y;se++){const Ge=g[se];if(Se>=me){_e(Ge,B,$,!0);continue}let Ue;if(Ge.key!=null)Ue=ee.get(Ge.key);else for(ie=K;ie<=v;ie++)if(Ke[ie-K]===0&&Nr(Ge,A[ie])){Ue=ie;break}Ue===void 0?_e(Ge,B,$,!0):(Ke[Ue-K]=se+1,Ue>=Fe?Fe=Ue:Ee=!0,_(Ge,A[Ue],R,null,B,$,oe,j,ce),Se++)}const ve=Ee?Sp(Ke):lr;for(ie=ve.length-1,se=me-1;se>=0;se--){const Ge=K+se,Ue=A[Ge],Be=Ge+1<Te?A[Ge+1].el:F;Ke[se]===0?_(null,Ue,R,Be,B,$,oe,j,ce):Ee&&(ie<0||se!==ve[ie]?ge(Ue,R,Be,2):ie--)}}},ge=(g,A,R,F,B=null)=>{const{el:$,type:oe,transition:j,children:ce,shapeFlag:se}=g;if(se&6){ge(g.component.subTree,A,R,F);return}if(se&128){g.suspense.move(A,R,F);return}if(se&64){oe.move(g,A,R,J);return}if(oe===ht){i($,A,R);for(let y=0;y<ce.length;y++)ge(ce[y],A,R,F);i(g.anchor,A,R);return}if(oe===Js){S(g,A,R);return}if(F!==2&&se&1&&j)if(F===0)j.beforeEnter($),i($,A,R),Wt(()=>j.enter($),B);else{const{leave:y,delayLeave:v,afterLeave:U}=j,K=()=>i($,A,R),ee=()=>{y($,()=>{K(),U&&U()})};v?v($,K,ee):ee()}else i($,A,R)},_e=(g,A,R,F=!1,B=!1)=>{const{type:$,props:oe,ref:j,children:ce,dynamicChildren:se,shapeFlag:Te,patchFlag:y,dirs:v}=g;if(j!=null&&Ia(j,null,R,g,!0),Te&256){A.ctx.deactivate(g);return}const U=Te&1&&v,K=!qr(g);let ee;if(K&&(ee=oe&&oe.onVnodeBeforeUnmount)&&An(ee,A,g),Te&6)be(g.component,R,F);else{if(Te&128){g.suspense.unmount(R,F);return}U&&_i(g,null,A,"beforeUnmount"),Te&64?g.type.remove(g,A,R,B,J,F):se&&($!==ht||y>0&&y&64)?Ae(se,A,R,!1,!0):($===ht&&y&384||!B&&Te&16)&&Ae(ce,A,R),F&&q(g)}(K&&(ee=oe&&oe.onVnodeUnmounted)||U)&&Wt(()=>{ee&&An(ee,A,g),U&&_i(g,null,A,"unmounted")},R)},q=g=>{const{type:A,el:R,anchor:F,transition:B}=g;if(A===ht){de(R,F);return}if(A===Js){b(g);return}const $=()=>{r(R),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(g.shapeFlag&1&&B&&!B.persisted){const{leave:oe,delayLeave:j}=B,ce=()=>oe(R,$);j?j(g.el,$,ce):ce()}else $()},de=(g,A)=>{let R;for(;g!==A;)R=f(g),r(g),g=R;r(A)},be=(g,A,R)=>{const{bum:F,scope:B,update:$,subTree:oe,um:j}=g;F&&$s(F),B.stop(),$&&($.active=!1,_e(oe,g,A,R)),j&&Wt(j,A),Wt(()=>{g.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Ae=(g,A,R,F=!1,B=!1,$=0)=>{for(let oe=$;oe<g.length;oe++)_e(g[oe],A,R,F,B)},O=g=>g.shapeFlag&6?O(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),le=(g,A,R)=>{g==null?A._vnode&&_e(A._vnode,null,null,!0):_(A._vnode||null,g,A,null,null,null,R),Bl(),Md(),A._vnode=g},J={p:_,um:_e,m:ge,r:q,mt:D,mc:Y,pc:re,pbc:w,n:O,o:n};let he,Ce;return e&&([he,Ce]=e(J)),{render:le,hydrate:he,createApp:hp(le,he)}}function vi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Mp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function cl(n,e,t=!1){const i=n.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ni(r[s]),a.el=o.el),t||cl(o,a)),a.type===bo&&(a.el=o.el)}}function Sp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Ep=n=>n.__isTeleport,Yr=n=>n&&(n.disabled||n.disabled===""),$l=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Ua=(n,e)=>{const t=n&&n.to;return yt(t)?e?e(t):null:t},bp={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:m,querySelector:x,createText:_,createComment:p}}=c,h=Yr(e.props);let{shapeFlag:T,children:S,dynamicChildren:b}=e;if(n==null){const C=e.el=_(""),P=e.anchor=_("");m(C,t,i),m(P,t,i);const L=e.target=Ua(e.props,x),Y=e.targetAnchor=_("");L&&(m(Y,L),o=o||$l(L));const M=(w,Q)=>{T&16&&u(S,w,Q,r,s,o,a,l)};h?M(t,P):L&&M(L,Y)}else{e.el=n.el;const C=e.anchor=n.anchor,P=e.target=n.target,L=e.targetAnchor=n.targetAnchor,Y=Yr(n.props),M=Y?t:P,w=Y?C:L;if(o=o||$l(P),b?(f(n.dynamicChildren,b,M,r,s,o,a),cl(n,e,!0)):l||d(n,e,M,w,r,s,o,a,!1),h)Y?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):bs(e,t,C,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const Q=e.target=Ua(e.props,x);Q&&bs(e,Q,null,c,0)}else Y&&bs(e,P,L,c,1)}Hd(e)},remove(n,e,t,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:f}=n;if(d&&s(u),o&&s(c),a&16){const m=o||!Yr(f);for(let x=0;x<l.length;x++){const _=l[x];r(_,e,t,m,!!_.dynamicChildren)}}},move:bs,hydrate:Tp};function bs(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,d=s===2;if(d&&i(o,e,t),(!d||Yr(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,t,2);d&&i(a,e,t)}function Tp(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Ua(e.props,l);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Yr(e.props))e.anchor=c(o(n),e,a(n),t,i,r,s),e.targetAnchor=d;else{e.anchor=o(n);let f=d;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(d,e,u,t,i,r,s)}Hd(e)}return e.anchor&&o(e.anchor)}const Ap=bp;function Hd(n){const e=n.ctx;if(e&&e.ut){let t=n.children[0].el;for(;t&&t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const ht=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),hi=Symbol.for("v-cmt"),Js=Symbol.for("v-stc"),$r=[];let yn=null;function fe(n=!1){$r.push(yn=n?null:[])}function Cp(){$r.pop(),yn=$r[$r.length-1]||null}let rs=1;function Kl(n){rs+=n}function kd(n){return n.dynamicChildren=rs>0?yn||lr:null,Cp(),rs>0&&yn&&yn.push(n),n}function we(n,e,t,i,r,s){return kd(H(n,e,t,i,r,s,!0))}function tt(n,e,t,i,r){return kd(xt(n,e,t,i,r,!0))}function ao(n){return n?n.__v_isVNode===!0:!1}function Nr(n,e){return n.type===e.type&&n.key===e.key}const To="__vInternal",zd=({key:n})=>n??null,Qs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?yt(n)||Ot(n)||We(n)?{i:Nt,r:n,k:e,f:!!t}:n:null);function H(n,e=null,t=null,i=0,r=null,s=n===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&zd(e),ref:e&&Qs(e),scopeId:So,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Nt};return a?(ul(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),rs>0&&!o&&yn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&yn.push(l),l}const xt=wp;function wp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Vh)&&(n=hi),ao(n)){const a=_r(n,e,!0);return t&&ul(a,t),rs>0&&!s&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag|=-2,a}if(kp(n)&&(n=n.__vccOpts),e){e=Rp(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=nn(a)),ut(l)&&(fd(l)&&!De(l)&&(l=Pt({},l)),e.style=Rr(l))}const o=yt(n)?1:Xh(n)?128:Ep(n)?64:ut(n)?4:We(n)?2:0;return H(n,e,t,i,r,o,s,!0)}function Rp(n){return n?fd(n)||To in n?Pt({},n):n:null}function _r(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Lp(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&zd(a),ref:e&&e.ref?t&&r?De(r)?r.concat(Qs(e)):[r,Qs(e)]:Qs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ht?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&_r(n.ssContent),ssFallback:n.ssFallback&&_r(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ft(n=" ",e=0){return xt(bo,null,n,e)}function Pp(n,e){const t=xt(Js,null,n);return t.staticCount=e,t}function Ne(n="",e=!1){return e?(fe(),tt(hi,null,n)):xt(hi,null,n)}function Cn(n){return n==null||typeof n=="boolean"?xt(hi):De(n)?xt(ht,null,n.slice()):typeof n=="object"?ni(n):xt(bo,null,String(n))}function ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:_r(n)}function ul(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ul(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(To in e)?e._ctx=Nt:r===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Nt},t=32):(e=String(e),i&64?(t=16,e=[Ft(e)]):t=8);n.children=e,n.shapeFlag|=t}function Lp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=nn([e.class,i.class]));else if(r==="style")e.style=Rr([e.style,i.style]);else if(mo(r)){const s=e[r],o=i[r];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function An(n,e,t,i=null){Sn(n,e,7,[t,i])}const Ip=Ud();let Up=0;function Dp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ip,s={uid:Up++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new rh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Od(i,r),emitsOptions:Ed(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Bh.bind(null,s),n.ce&&n.ce(s),s}let Ct=null,dl,Vi,Zl="__VUE_INSTANCE_SETTERS__";(Vi=Sa()[Zl])||(Vi=Sa()[Zl]=[]),Vi.push(n=>Ct=n),dl=n=>{Vi.length>1?Vi.forEach(e=>e(n)):Vi[0](n)};const vr=n=>{dl(n),n.scope.on()},Li=()=>{Ct&&Ct.scope.off(),dl(null)};function Gd(n){return n.vnode.shapeFlag&4}let ss=!1;function Op(n,e=!1){ss=e;const{props:t,children:i}=n.vnode,r=Gd(n);pp(n,t,r,e),_p(n,i);const s=r?Np(n,e):void 0;return ss=!1,s}function Np(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=hd(new Proxy(n.ctx,op));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Bp(n):null;vr(n),Pr();const s=li(i,n,0,[n.props,r]);if(Lr(),Li(),$u(s)){if(s.then(Li,Li),e)return s.then(o=>{Jl(n,o,e)}).catch(o=>{yo(o,n,0)});n.asyncDep=s}else Jl(n,s,e)}else Vd(n,e)}function Jl(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ut(e)&&(n.setupState=_d(e)),Vd(n,t)}let Ql;function Vd(n,e,t){const i=n.type;if(!n.render){if(!e&&Ql&&!i.render){const r=i.template||al(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Pt(Pt({isCustomElement:s,delimiters:a},o),l);i.render=Ql(r,c)}}n.render=i.render||Mn}{vr(n),Pr();try{ap(n)}finally{Lr(),Li()}}}function Fp(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return $t(n,"get","$attrs"),e[t]}}))}function Bp(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Fp(n)},slots:n.slots,emit:n.emit,expose:e}}function Ao(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(_d(hd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in jr)return jr[t](n)},has(e,t){return t in e||t in jr}}))}function Hp(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}function kp(n){return We(n)&&"__vccOpts"in n}const _n=(n,e)=>Ih(n,e,ss);function Wd(n,e,t){const i=arguments.length;return i===2?ut(e)&&!De(e)?ao(e)?xt(n,null,[e]):xt(n,e):xt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ao(t)&&(t=[t]),xt(n,e,t))}const zp=Symbol.for("v-scx"),Gp=()=>Xn(zp),Vp="3.3.9",Wp="http://www.w3.org/2000/svg",Ai=typeof document<"u"?document:null,ec=Ai&&Ai.createElement("template"),Xp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Ai.createElementNS(Wp,n):Ai.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ai.createTextNode(n),createComment:n=>Ai.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ai.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ec.innerHTML=i?`<svg>${n}</svg>`:n;const a=ec.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},qp=Symbol("_vtc");function jp(n,e,t){const i=n[qp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Yp=Symbol("_vod");function $p(n,e,t){const i=n.style,r=yt(t);if(t&&!r){if(e&&!yt(e))for(const s in e)t[s]==null&&Da(i,s,"");for(const s in t)Da(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),Yp in n&&(i.display=s)}}const tc=/\s*!important$/;function Da(n,e,t){if(De(t))t.forEach(i=>Da(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Kp(n,e);tc.test(t)?n.setProperty(wr(i),t.replace(tc,""),"important"):n[i]=t}}const nc=["Webkit","Moz","ms"],ko={};function Kp(n,e){const t=ko[e];if(t)return t;let i=In(e);if(i!=="filter"&&i in n)return ko[e]=i;i=_o(i);for(let r=0;r<nc.length;r++){const s=nc[r]+i;if(s in n)return ko[e]=s}return e}const ic="http://www.w3.org/1999/xlink";function Zp(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(ic,e.slice(6,e.length)):n.setAttributeNS(ic,e,t);else{const s=nh(e);t==null||s&&!Ju(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Jp(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Ju(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function ri(n,e,t,i){n.addEventListener(e,t,i)}function Qp(n,e,t,i){n.removeEventListener(e,t,i)}const rc=Symbol("_vei");function em(n,e,t,i,r=null){const s=n[rc]||(n[rc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=tm(e);if(i){const c=s[e]=rm(i,r);ri(n,a,c,l)}else o&&(Qp(n,a,o,l),s[e]=void 0)}}const sc=/(?:Once|Passive|Capture)$/;function tm(n){let e;if(sc.test(n)){e={};let i;for(;i=n.match(sc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):wr(n.slice(2)),e]}let zo=0;const nm=Promise.resolve(),im=()=>zo||(nm.then(()=>zo=0),zo=Date.now());function rm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Sn(sm(i,t.value),e,5,[i])};return t.value=n,t.attached=im(),t}function sm(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const oc=/^on[a-z]/,om=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?jp(n,i,r):e==="style"?$p(n,t,i):mo(e)?$a(e)||em(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):am(n,e,i,r))?Jp(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Zp(n,e,i,r))};function am(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&oc.test(e)&&We(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||oc.test(e)&&yt(t)?!1:e in n}const xr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return De(e)?t=>$s(e,t):e};function lm(n){n.target.composing=!0}function ac(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qn=Symbol("_assign"),yr={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[qn]=xr(r);const s=i||r.props&&r.props.type==="number";ri(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=no(a)),n[qn](a)}),t&&ri(n,"change",()=>{n.value=n.value.trim()}),e||(ri(n,"compositionstart",lm),ri(n,"compositionend",ac),ri(n,"change",ac))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n[qn]=xr(s),n.composing)return;const o=r||n.type==="number"?no(n.value):n.value,a=e??"";o!==a&&(document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===a)||(n.value=a))}},cm={deep:!0,created(n,e,t){n[qn]=xr(t),ri(n,"change",()=>{const i=n._modelValue,r=os(n),s=n.checked,o=n[qn];if(De(i)){const a=Ja(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Cr(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Xd(n,s))})},mounted:lc,beforeUpdate(n,e,t){n[qn]=xr(t),lc(n,e,t)}};function lc(n,{value:e,oldValue:t},i){n._modelValue=e,De(e)?n.checked=Ja(e,i.props.value)>-1:Cr(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=fs(e,Xd(n,!0)))}const Kr={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Cr(e);ri(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?no(os(o)):os(o));n[qn](n.multiple?r?new Set(s):s:s[0])}),n[qn]=xr(i)},mounted(n,{value:e}){cc(n,e)},beforeUpdate(n,e,t){n[qn]=xr(t)},updated(n,{value:e}){cc(n,e)}};function cc(n,e){const t=n.multiple;if(!(t&&!De(e)&&!Cr(e))){for(let i=0,r=n.options.length;i<r;i++){const s=n.options[i],o=os(s);if(t)De(e)?s.selected=Ja(e,o)>-1:s.selected=e.has(o);else if(fs(os(s),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function os(n){return"_value"in n?n._value:n.value}function Xd(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const um=["ctrl","shift","alt","meta"],dm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>um.some(t=>n[`${t}Key`]&&!e.includes(t))},fm=(n,e)=>(t,...i)=>{for(let r=0;r<e.length;r++){const s=dm[e[r]];if(s&&s(t,e))return}return n(t,...i)},hm=Pt({patchProp:om},Xp);let uc;function pm(){return uc||(uc=xp(hm))}const mm=(...n)=>{const e=pm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=gm(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function gm(n){return yt(n)?document.querySelector(n):n}const mt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},_m={props:["players","currentTurnIndex","property","isTrading"],emits:["process-trade","cancel-trade"],data(){return{moneyFrom:0,moneyTo:0,propertyFrom:[],propertyTo:[],confirmed:!1,accepted:!1,tradeWith:"",tradingStarted:!1,currentPlayerProperty:[],tradeWithPlayerProperty:[]}},computed:{isInSelectedPropertyFrom(){const n=this;return function(e){return n.propertyFrom.includes(e)}},isInSelectedPropertyTo(){const n=this;return function(e){return n.propertyTo.includes(e)}}},methods:{startTrading(){this.currentPlayerProperty=this.property.filter(n=>n.noOfHouses===0?this.players[this.currentTurnIndex].propertyOwned.includes(n.id):!1),this.tradeWithPlayerProperty=this.property.filter(n=>n.noOfHouses===0?this.players.find(e=>e.name===this.tradeWith).propertyOwned.includes(n.id):!1),this.tradingStarted=!0},confirmTrade(){this.confirmed=!0,this.processTrade()},acceptTrade(){this.accepted=!0,this.processTrade()},processTrade(){this.confirmed&&this.accepted&&(this.$emit("process-trade",this.tradeWith,this.moneyFrom,this.moneyTo,this.propertyFrom,this.propertyTo),this.tradingStarted=!1)},addPropertyFrom(n){this.propertyFrom.push(n)},addPropertyTo(n){this.propertyTo.push(n)},removePropertyFrom(n){this.propertyFrom=this.propertyFrom.filter(e=>e!==n)},removePropertyTo(n){this.propertyTo=this.propertyTo.filter(e=>e!==n)},cancelTrade(){this.$emit("cancel-trade"),this.tradingStarted=!1}}},fl=n=>(Hi("data-v-6f15353b"),n=n(),ki(),n),vm={key:0},xm=fl(()=>H("label",{for:"with"},"With",-1)),ym=["value"],Mm={key:1},Sm=["src","alt"],Em=["src","alt"],bm=["onClick"],Tm=["onClick"],Am=fl(()=>H("label",{for:"moneyFrom"},"Money",-1)),Cm=["max"],wm=["src","alt"],Rm=["src","alt"],Pm=["onClick"],Lm=["onClick"],Im=fl(()=>H("label",{for:"MoneyTo"},"Money",-1)),Um=["max"];function Dm(n,e,t,i,r,s){const o=nt("base-card");return fe(),tt(o,null,{header:st(()=>[Ft("Trade")]),default:st(()=>{var a;return[r.tradingStarted?Ne("",!0):(fe(),we("div",vm,[xm,cn(H("select",{name:"tradeWith","onUpdate:modelValue":e[0]||(e[0]=l=>r.tradeWith=l)},[(fe(!0),we(ht,null,En(t.players.filter(l=>l.name!==t.players[t.currentTurnIndex].name),l=>(fe(),we("option",{value:l.name},Je(l.name),9,ym))),256))],512),[[Kr,r.tradeWith]]),H("button",{onClick:e[1]||(e[1]=(...l)=>s.startTrading&&s.startTrading(...l))},"Trade")])),r.tradingStarted?(fe(),we("div",Mm,[H("section",null,[H("div",null,[H("div",null,[H("h2",null,Je(t.players[t.currentTurnIndex].name)+"'s Property",1)]),H("div",null,[H("ul",null,[(fe(!0),we(ht,null,En(r.currentPlayerProperty,l=>(fe(),we("li",{key:l.id},[H("div",null,[H("div",null,Je(l.name)+" - "+Je(l.street)+" - $"+Je(l.price),1),H("div",null,[l.mortgaged?Ne("",!0):(fe(),we("img",{key:0,class:"card-image",src:l.cardUrl,alt:l.name},null,8,Sm)),l.mortgaged?(fe(),we("img",{key:1,class:"card-image",src:l.mortgageCardUrl,alt:l.name},null,8,Em)):Ne("",!0)])]),H("div",null,[s.isInSelectedPropertyFrom(l.id)?Ne("",!0):(fe(),we("button",{key:0,onClick:c=>s.addPropertyFrom(l.id)}," Select ",8,bm)),s.isInSelectedPropertyFrom(l.id)?(fe(),we("button",{key:1,onClick:c=>s.removePropertyFrom(l.id)}," Unselect ",8,Tm)):Ne("",!0)])]))),128))])])]),H("div",null,[Am,cn(H("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=l=>r.moneyFrom=l),min:"0",max:t.players[t.currentTurnIndex].money},null,8,Cm),[[yr,r.moneyFrom,void 0,{number:!0}]]),H("button",{onClick:e[3]||(e[3]=(...l)=>s.confirmTrade&&s.confirmTrade(...l))},"Confirm")])]),H("section",null,[H("div",null,[H("h2",null,Je(r.tradeWith)+"'s Property",1)]),H("div",null,[H("ul",null,[(fe(!0),we(ht,null,En(r.tradeWithPlayerProperty,l=>(fe(),we("li",{key:l.id},[H("div",null,[H("div",null,Je(l.name)+" - "+Je(l.street)+" - $"+Je(l.price),1),H("div",null,[l.mortgaged?Ne("",!0):(fe(),we("img",{key:0,class:"card-image",src:l.cardUrl,alt:l.name},null,8,wm)),l.mortgaged?(fe(),we("img",{key:1,class:"card-image",src:l.mortgageCardUrl,alt:l.name},null,8,Rm)):Ne("",!0)])]),H("div",null,[s.isInSelectedPropertyTo(l.id)?Ne("",!0):(fe(),we("button",{key:0,onClick:c=>s.addPropertyTo(l.id)}," Select ",8,Pm)),s.isInSelectedPropertyTo(l.id)?(fe(),we("button",{key:1,onClick:c=>s.removePropertyTo(l.id)}," Unselect ",8,Lm)):Ne("",!0)])]))),128))])]),H("div",null,[Im,cn(H("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=l=>r.moneyTo=l),min:"0",max:(a=t.players.find(l=>l.name===r.tradeWith))==null?void 0:a.money},null,8,Um),[[yr,r.moneyTo,void 0,{number:!0}]]),H("button",{onClick:e[5]||(e[5]=(...l)=>s.acceptTrade&&s.acceptTrade(...l))},"Accept")]),H("div",null,[H("button",{onClick:e[6]||(e[6]=(...l)=>s.cancelTrade&&s.cancelTrade(...l))},"Cancel")])])])):Ne("",!0)]}),_:1})}const qd=mt(_m,[["render",Dm],["__scopeId","data-v-6f15353b"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="159",Om=0,dc=1,Nm=2,jd=1,Fm=2,kn=3,pi=0,jt=1,Gn=2,ci=0,hr=1,fc=2,hc=3,pc=4,Bm=5,Ci=100,Hm=101,km=102,mc=103,gc=104,zm=200,Gm=201,Vm=202,Wm=203,Oa=204,Na=205,Xm=206,qm=207,jm=208,Ym=209,$m=210,Km=211,Zm=212,Jm=213,Qm=214,eg=0,tg=1,ng=2,lo=3,ig=4,rg=5,sg=6,og=7,Yd=0,ag=1,lg=2,ui=0,cg=1,ug=2,dg=3,fg=4,hg=5,$d=300,Mr=301,Sr=302,Fa=303,Ba=304,Co=306,Ha=1e3,vn=1001,ka=1002,Gt=1003,_c=1004,Go=1005,an=1006,pg=1007,as=1008,di=1009,mg=1010,gg=1011,pl=1012,Kd=1013,si=1014,oi=1015,ls=1016,Zd=1017,Jd=1018,Ii=1020,_g=1021,xn=1023,vg=1024,xg=1025,Ui=1026,Er=1027,yg=1028,Qd=1029,Mg=1030,ef=1031,tf=1033,Vo=33776,Wo=33777,Xo=33778,qo=33779,vc=35840,xc=35841,yc=35842,Mc=35843,nf=36196,Sc=37492,Ec=37496,bc=37808,Tc=37809,Ac=37810,Cc=37811,wc=37812,Rc=37813,Pc=37814,Lc=37815,Ic=37816,Uc=37817,Dc=37818,Oc=37819,Nc=37820,Fc=37821,jo=36492,Bc=36494,Hc=36495,Sg=36283,kc=36284,zc=36285,Gc=36286,rf=3e3,Di=3001,Eg=3200,bg=3201,Tg=0,Ag=1,un="",At="srgb",jn="srgb-linear",ml="display-p3",wo="display-p3-linear",co="linear",dt="srgb",uo="rec709",fo="p3",Wi=7680,Vc=519,Cg=512,wg=513,Rg=514,sf=515,Pg=516,Lg=517,Ig=518,Ug=519,Wc=35044,Xc="300 es",za=1035,Vn=2e3,ho=2001;class Ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,Ga=180/Math.PI;function hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function Dg(n,e){return(n%e+e)%e}function $o(n,e,t){return(1-t)*n+t*e}function qc(n){return(n&n-1)===0&&n!==0}function Va(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],x=i[8],_=r[0],p=r[3],h=r[6],T=r[1],S=r[4],b=r[7],C=r[2],P=r[5],L=r[8];return s[0]=o*_+a*T+l*C,s[3]=o*p+a*S+l*P,s[6]=o*h+a*b+l*L,s[1]=c*_+u*T+d*C,s[4]=c*p+u*S+d*P,s[7]=c*h+u*b+d*L,s[2]=f*_+m*T+x*C,s[5]=f*p+m*S+x*P,s[8]=f*h+m*b+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,m=c*s-o*l,x=t*d+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new $e;function of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Og(){const n=cs("canvas");return n.style.display="block",n}const jc={};function Zr(n){n in jc||(jc[n]=!0,console.warn(n))}const Yc=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$c=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[jn]:{transfer:co,primaries:uo,toReference:n=>n,fromReference:n=>n},[At]:{transfer:dt,primaries:uo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wo]:{transfer:co,primaries:fo,toReference:n=>n.applyMatrix3($c),fromReference:n=>n.applyMatrix3(Yc)},[ml]:{transfer:dt,primaries:fo,toReference:n=>n.convertSRGBToLinear().applyMatrix3($c),fromReference:n=>n.applyMatrix3(Yc).convertLinearToSRGB()}},Ng=new Set([jn,wo]),ot={enabled:!0,_workingColorSpace:jn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ng.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ts[e].toReference,r=Ts[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ts[n].primaries},getTransfer:function(n){return n===un?co:Ts[n].transfer}};function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class af{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=cs("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fg=0;class lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=hs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jo(r[o].image)):s.push(Jo(r[o]))}else s=Jo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?af.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bg=0;class Yt extends Ir{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=vn,r=vn,s=an,o=as,a=xn,l=di,c=Yt.DEFAULT_ANISOTROPY,u=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=hs(),this.name="",this.source=new lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Di?At:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Di:rf}set encoding(e){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Di?At:un}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=$d;Yt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],x=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(m+1)/2,C=(h+1)/2,P=(u+f)/4,L=(d+_)/4,Y=(x+p)/4;return S>b&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=P/i,s=L/i):b>C?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=P/r,s=Y/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=Y/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-x)*(p-x)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-x)/T,this.y=(d-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hg extends Ir{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Di?At:un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Hg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cf extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kg extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(d!==_||l!==f||c!==m||u!==x){let p=1-a;const h=l*f+c*m+u*x+d*_,T=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const C=Math.sqrt(S),P=Math.atan2(C,h*T);p=Math.sin(p*P)/C,a=Math.sin(a*P)/C}const b=a*T;if(l=l*p+f*b,c=c*p+m*b,u=u*p+x*b,d=d*p+_*b,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*d+l*m-c*f,e[t+1]=l*x+u*f+c*d-a*m,e[t+2]=c*x+u*m+a*f-l*d,e[t+3]=u*x-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*x,this._y=c*m*d-f*u*x,this._z=c*u*x+f*m*d,this._w=c*u*d-f*m*x;break;case"YXZ":this._x=f*u*d+c*m*x,this._y=c*m*d-f*u*x,this._z=c*u*x-f*m*d,this._w=c*u*d+f*m*x;break;case"ZXY":this._x=f*u*d-c*m*x,this._y=c*m*d+f*u*x,this._z=c*u*x+f*m*d,this._w=c*u*d-f*m*x;break;case"ZYX":this._x=f*u*d-c*m*x,this._y=c*m*d+f*u*x,this._z=c*u*x-f*m*d,this._w=c*u*d+f*m*x;break;case"YZX":this._x=f*u*d+c*m*x,this._y=c*m*d+f*u*x,this._z=c*u*x-f*m*d,this._w=c*u*d-f*m*x;break;case"XZY":this._x=f*u*d-c*m*x,this._y=c*m*d-f*u*x,this._z=c*u*x+f*m*d,this._w=c*u*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new V,Kc=new ps;class ms{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Cs.subVectors(this.max,Br),qi.subVectors(e.a,Br),ji.subVectors(e.b,Br),Yi.subVectors(e.c,Br),Kn.subVectors(ji,qi),Zn.subVectors(Yi,ji),xi.subVectors(qi,Yi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-xi.z,xi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,xi.z,0,-xi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-xi.y,xi.x,0];return!ea(t,qi,ji,Yi,Cs)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,qi,ji,Yi,Cs))?!1:(ws.crossVectors(Kn,Zn),t=[ws.x,ws.y,ws.z],ea(t,qi,ji,Yi,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new V,new V,new V,new V,new V,new V,new V,new V],dn=new V,As=new ms,qi=new V,ji=new V,Yi=new V,Kn=new V,Zn=new V,xi=new V,Br=new V,Cs=new V,ws=new V,yi=new V;function ea(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){yi.fromArray(n,s);const a=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),u=i.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zg=new ms,Hr=new V,ta=new V;class gl{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(ta)),this.expandByPoint(Hr.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new V,na=new V,Rs=new V,Jn=new V,ia=new V,Ps=new V,ra=new V;class Gg{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){na.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(na);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rs),a=Jn.dot(this.direction),l=-Jn.dot(Rs),c=Jn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,x;if(u>0)if(d=o*l-a,f=o*a-l,x=s*u,d>=0)if(f>=-x)if(f<=x){const _=1/u;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(na).addScaledVector(Rs,f),m}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){ia.subVectors(t,e),Ps.subVectors(i,e),ra.crossVectors(ia,Ps);let o=this.direction.dot(ra),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(Ps.crossVectors(Jn,Ps));if(l<0)return null;const c=a*this.direction.dot(ia.cross(Jn));if(c<0||l+c>o)return null;const u=-a*Jn.dot(ra);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,r,s,o,a,l,c,u,d,f,m,x,_,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,m,x,_,p)}set(e,t,i,r,s,o,a,l,c,u,d,f,m,x,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=x,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),s=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,x=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,x=c*u,_=c*d;t[0]=f+_*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,x=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,x=a*u,_=a*d;t[0]=l*u,t[4]=x*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=x*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+x,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vg,e,Wg)}lookAt(e,t,i){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Qn.crossVectors(i,Qt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Qn.crossVectors(i,Qt)),Qn.normalize(),Ls.crossVectors(Qt,Qn),r[0]=Qn.x,r[4]=Ls.x,r[8]=Qt.x,r[1]=Qn.y,r[5]=Ls.y,r[9]=Qt.y,r[2]=Qn.z,r[6]=Ls.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],x=i[2],_=i[6],p=i[10],h=i[14],T=i[3],S=i[7],b=i[11],C=i[15],P=r[0],L=r[4],Y=r[8],M=r[12],w=r[1],Q=r[5],ne=r[9],pe=r[13],D=r[2],X=r[6],Z=r[10],k=r[14],re=r[3],ue=r[7],ae=r[11],ge=r[15];return s[0]=o*P+a*w+l*D+c*re,s[4]=o*L+a*Q+l*X+c*ue,s[8]=o*Y+a*ne+l*Z+c*ae,s[12]=o*M+a*pe+l*k+c*ge,s[1]=u*P+d*w+f*D+m*re,s[5]=u*L+d*Q+f*X+m*ue,s[9]=u*Y+d*ne+f*Z+m*ae,s[13]=u*M+d*pe+f*k+m*ge,s[2]=x*P+_*w+p*D+h*re,s[6]=x*L+_*Q+p*X+h*ue,s[10]=x*Y+_*ne+p*Z+h*ae,s[14]=x*M+_*pe+p*k+h*ge,s[3]=T*P+S*w+b*D+C*re,s[7]=T*L+S*Q+b*X+C*ue,s[11]=T*Y+S*ne+b*Z+C*ae,s[15]=T*M+S*pe+b*k+C*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],x=e[3],_=e[7],p=e[11],h=e[15];return x*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],x=e[12],_=e[13],p=e[14],h=e[15],T=d*p*c-_*f*c+_*l*m-a*p*m-d*l*h+a*f*h,S=x*f*c-u*p*c-x*l*m+o*p*m+u*l*h-o*f*h,b=u*_*c-x*d*c+x*a*m-o*_*m-u*a*h+o*d*h,C=x*d*l-u*_*l-x*a*f+o*_*f+u*a*p-o*d*p,P=t*T+i*S+r*b+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=T*L,e[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*h-i*f*h)*L,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*h+i*l*h)*L,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*m-i*l*m)*L,e[4]=S*L,e[5]=(u*p*s-x*f*s+x*r*m-t*p*m-u*r*h+t*f*h)*L,e[6]=(x*l*s-o*p*s-x*r*c+t*p*c+o*r*h-t*l*h)*L,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*L,e[8]=b*L,e[9]=(x*d*s-u*_*s-x*i*m+t*_*m+u*i*h-t*d*h)*L,e[10]=(o*_*s-x*a*s+x*i*c-t*_*c-o*i*h+t*a*h)*L,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*m-t*a*m)*L,e[12]=C*L,e[13]=(u*_*r-x*d*r+x*i*f-t*_*f-u*i*p+t*d*p)*L,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*p-t*a*p)*L,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,m=s*u,x=s*d,_=o*u,p=o*d,h=a*d,T=l*c,S=l*u,b=l*d,C=i.x,P=i.y,L=i.z;return r[0]=(1-(_+h))*C,r[1]=(m+b)*C,r[2]=(x-S)*C,r[3]=0,r[4]=(m-b)*P,r[5]=(1-(f+h))*P,r[6]=(p+T)*P,r[7]=0,r[8]=(x+S)*L,r[9]=(p-T)*L,r[10]=(1-(f+_))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$i.set(r[0],r[1],r[2]).length();const o=$i.set(r[4],r[5],r[6]).length(),a=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const c=1/s,u=1/o,d=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,x;if(a===Vn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ho)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vn){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,m=(i+r)*u;let x,_;if(a===Vn)x=(o+s)*d,_=-2*d;else if(a===ho)x=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new V,fn=new Rt,Vg=new V(0,0,0),Wg=new V(1,1,1),Qn=new V,Ls=new V,Qt=new V,Zc=new Rt,Jc=new ps;class Ro{constructor(e=0,t=0,i=0,r=Ro.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ro.DEFAULT_ORDER="XYZ";class uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xg=0;const Qc=new V,Ki=new ps,Nn=new Rt,Is=new V,kr=new V,qg=new V,jg=new ps,eu=new V(1,0,0),tu=new V(0,1,0),nu=new V(0,0,1),Yg={type:"added"},$g={type:"removed"};class rn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new V,t=new Ro,i=new ps,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new $e}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(nu,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Is.copy(e):Is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(kr,Is,this.up):Nn.lookAt(Is,kr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($g)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new V(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new V,Fn=new V,sa=new V,Bn=new V,Zi=new V,Ji=new V,iu=new V,oa=new V,aa=new V,la=new V;let Us=!1;class mn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),Fn.subVectors(i,t),sa.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Fn),l=hn.dot(sa),c=Fn.dot(Fn),u=Fn.dot(sa),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,i,r,s,o,a,l){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Bn),l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),Fn.subVectors(e,t),hn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zi.subVectors(r,i),Ji.subVectors(s,i),oa.subVectors(e,i);const l=Zi.dot(oa),c=Ji.dot(oa);if(l<=0&&c<=0)return t.copy(i);aa.subVectors(e,r);const u=Zi.dot(aa),d=Ji.dot(aa);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Zi,o);la.subVectors(e,s);const m=Zi.dot(la),x=Ji.dot(la);if(x>=0&&m<=x)return t.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Ji,a);const p=u*x-m*d;if(p<=0&&d-u>=0&&m-x>=0)return iu.subVectors(s,r),a=(d-u)/(d-u+(m-x)),t.copy(r).addScaledVector(iu,a);const h=1/(p+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Dg(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ca(o,s,e+1/3),this.g=ca(o,s,e),this.b=ca(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return ot.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Xt(Ut.r*255,0,255))*65536+Math.round(Xt(Ut.g*255,0,255))*256+Math.round(Xt(Ut.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,s=Ut.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=At){ot.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Ds);const i=$o(ei.h,Ds.h,t),r=$o(ei.s,Ds.s,t),s=$o(ei.l,Ds.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new at;at.NAMES=df;let Kg=0;class Po extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=hr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Na,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oa&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qt extends Po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new V,Os=new lt;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}}class ff extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hf extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Oi extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zg=0;const on=new Rt,ua=new rn,Qi=new V,en=new ms,zr=new ms,Tt=new V;class zi extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?hf:ff)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(en.min,zr.min),en.expandByPoint(Tt),Tt.addVectors(en.max,zr.max),en.expandByPoint(Tt)):(en.expandByPoint(zr.min),en.expandByPoint(zr.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),Tt.add(Qi)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new V,u[w]=new V;const d=new V,f=new V,m=new V,x=new lt,_=new lt,p=new lt,h=new V,T=new V;function S(w,Q,ne){d.fromArray(r,w*3),f.fromArray(r,Q*3),m.fromArray(r,ne*3),x.fromArray(o,w*2),_.fromArray(o,Q*2),p.fromArray(o,ne*2),f.sub(d),m.sub(d),_.sub(x),p.sub(x);const pe=1/(_.x*p.y-p.x*_.y);isFinite(pe)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(pe),T.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(pe),c[w].add(h),c[Q].add(h),c[ne].add(h),u[w].add(T),u[Q].add(T),u[ne].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,Q=b.length;w<Q;++w){const ne=b[w],pe=ne.start,D=ne.count;for(let X=pe,Z=pe+D;X<Z;X+=3)S(i[X+0],i[X+1],i[X+2])}const C=new V,P=new V,L=new V,Y=new V;function M(w){L.fromArray(s,w*3),Y.copy(L);const Q=c[w];C.copy(Q),C.sub(L.multiplyScalar(L.dot(Q))).normalize(),P.crossVectors(Y,Q);const pe=P.dot(u[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=pe}for(let w=0,Q=b.length;w<Q;++w){const ne=b[w],pe=ne.start,D=ne.count;for(let X=pe,Z=pe+D;X<Z;X+=3)M(i[X+0]),M(i[X+1]),M(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let h=0;h<u;h++)f[x++]=c[m++]}return new Ln(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ru=new Rt,Mi=new Gg,Ns=new gl,su=new V,er=new V,tr=new V,nr=new V,da=new V,Fs=new V,Bs=new lt,Hs=new lt,ks=new lt,ou=new V,au=new V,lu=new V,zs=new V,Gs=new V;class Pn extends rn{constructor(e=new zi,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(da.fromBufferAttribute(d,e),o?Fs.addScaledVector(da,u):Fs.addScaledVector(da.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Ns.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ns,su)===null||Mi.origin.distanceToSquared(su)>(e.far-e.near)**2))&&(ru.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(ru),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const p=f[x],h=o[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,C=S;b<C;b+=3){const P=a.getX(b),L=a.getX(b+1),Y=a.getX(b+2);r=Vs(this,h,e,i,c,u,d,P,L,Y),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=x,h=_;p<h;p+=3){const T=a.getX(p),S=a.getX(p+1),b=a.getX(p+2);r=Vs(this,o,e,i,c,u,d,T,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const p=f[x],h=o[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,C=S;b<C;b+=3){const P=b,L=b+1,Y=b+2;r=Vs(this,h,e,i,c,u,d,P,L,Y),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,h=_;p<h;p+=3){const T=p,S=p+1,b=p+2;r=Vs(this,o,e,i,c,u,d,T,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Jg(n,e,t,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pi,a),l===null)return null;Gs.copy(a),Gs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:n}}function Vs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,er),n.getVertexPosition(l,tr),n.getVertexPosition(c,nr);const u=Jg(n,e,t,i,er,tr,nr,zs);if(u){r&&(Bs.fromBufferAttribute(r,a),Hs.fromBufferAttribute(r,l),ks.fromBufferAttribute(r,c),u.uv=mn.getInterpolation(zs,er,tr,nr,Bs,Hs,ks,new lt)),s&&(Bs.fromBufferAttribute(s,a),Hs.fromBufferAttribute(s,l),ks.fromBufferAttribute(s,c),u.uv1=mn.getInterpolation(zs,er,tr,nr,Bs,Hs,ks,new lt),u.uv2=u.uv1),o&&(ou.fromBufferAttribute(o,a),au.fromBufferAttribute(o,l),lu.fromBufferAttribute(o,c),u.normal=mn.getInterpolation(zs,er,tr,nr,ou,au,lu,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};mn.getNormal(er,tr,nr,d.normal),u.face=d}return u}class Gi extends zi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oi(c,3)),this.setAttribute("normal",new Oi(u,3)),this.setAttribute("uv",new Oi(d,2));function x(_,p,h,T,S,b,C,P,L,Y,M){const w=b/L,Q=C/Y,ne=b/2,pe=C/2,D=P/2,X=L+1,Z=Y+1;let k=0,re=0;const ue=new V;for(let ae=0;ae<Z;ae++){const ge=ae*Q-pe;for(let _e=0;_e<X;_e++){const q=_e*w-ne;ue[_]=q*T,ue[p]=ge*S,ue[h]=D,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[p]=0,ue[h]=P>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(_e/L),d.push(1-ae/Y),k+=1}}for(let ae=0;ae<Y;ae++)for(let ge=0;ge<L;ge++){const _e=f+ge+X*ae,q=f+ge+X*(ae+1),de=f+(ge+1)+X*(ae+1),be=f+(ge+1)+X*ae;l.push(_e,q,be),l.push(q,de,be),re+=6}a.addGroup(m,re,M),m+=re,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=br(n[t]);for(const r in i)e[r]=i[r]}return e}function Qg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pf(n){return n.getRenderTarget()===null?n.outputColorSpace:ot.workingColorSpace}const e_={clone:br,merge:zt};var t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=n_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=Qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mf extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends mf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class i_ extends rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new tn(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new tn(ir,rr,e,t);o.layers=this.layers,this.add(o);const a=new tn(ir,rr,e,t);a.layers=this.layers,this.add(a);const l=new tn(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new tn(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class gf extends Yt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r_ extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Di?At:un),this.texture=new gf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gi(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:ci});s.uniforms.tEquirect.value=t;const o=new Pn(r,s),a=t.minFilter;return t.minFilter===as&&(t.minFilter=an),new i_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const fa=new V,s_=new V,o_=new $e;class Ei{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fa.subVectors(i,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||o_.getNormalMatrix(e),r=this.coplanarPoint(fa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new gl,Ws=new V;class _f{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],_=r[10],p=r[11],h=r[12],T=r[13],S=r[14],b=r[15];if(i[0].setComponents(l-s,f-c,p-m,b-h).normalize(),i[1].setComponents(l+s,f+c,p+m,b+h).normalize(),i[2].setComponents(l+o,f+u,p+x,b+T).normalize(),i[3].setComponents(l-o,f-u,p-x,b-T).normalize(),i[4].setComponents(l-a,f-d,p-_,b-S).normalize(),t===Vn)i[5].setComponents(l+a,f+d,p+_,b+S).normalize();else if(t===ho)i[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ws.x=r.normal.x>0?e.max.x:e.min.x,Ws.y=r.normal.y>0?e.max.y:e.min.y,Ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function a_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,m=d.byteLength,x=n.createBuffer();n.bindBuffer(u,x),n.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,d){const f=u.array,m=u._updateRange,x=u.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&x.length===0&&n.bufferSubData(d,0,f),x.length!==0){for(let _=0,p=x.length;_<p;_++){const h=x[_];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class _l extends zi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],x=[],_=[],p=[];for(let h=0;h<u;h++){const T=h*f-o;for(let S=0;S<c;S++){const b=S*d-s;x.push(b,-T,0),_.push(0,0,1),p.push(S/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<a;T++){const S=T+c*h,b=T+c*(h+1),C=T+1+c*(h+1),P=T+1+c*h;m.push(S,b,P),m.push(b,C,P)}this.setIndex(m),this.setAttribute("position",new Oi(x,3)),this.setAttribute("normal",new Oi(_,3)),this.setAttribute("uv",new Oi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.widthSegments,e.heightSegments)}}var l_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,h_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,v_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,L_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ev=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ov=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,av=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ev=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Av=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,m0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:l_,alphahash_pars_fragment:c_,alphamap_fragment:u_,alphamap_pars_fragment:d_,alphatest_fragment:f_,alphatest_pars_fragment:h_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:g_,batching_vertex:__,begin_vertex:v_,beginnormal_vertex:x_,bsdfs:y_,iridescence_fragment:M_,bumpmap_pars_fragment:S_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:A_,color_fragment:C_,color_pars_fragment:w_,color_pars_vertex:R_,color_vertex:P_,common:L_,cube_uv_reflection_fragment:I_,defaultnormal_vertex:U_,displacementmap_pars_vertex:D_,displacementmap_vertex:O_,emissivemap_fragment:N_,emissivemap_pars_fragment:F_,colorspace_fragment:B_,colorspace_pars_fragment:H_,envmap_fragment:k_,envmap_common_pars_fragment:z_,envmap_pars_fragment:G_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:tv,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:q_,fog_fragment:j_,fog_pars_fragment:Y_,gradientmap_pars_fragment:$_,lightmap_fragment:K_,lightmap_pars_fragment:Z_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:Q_,lights_pars_begin:ev,lights_toon_fragment:nv,lights_toon_pars_fragment:iv,lights_phong_fragment:rv,lights_phong_pars_fragment:sv,lights_physical_fragment:ov,lights_physical_pars_fragment:av,lights_fragment_begin:lv,lights_fragment_maps:cv,lights_fragment_end:uv,logdepthbuf_fragment:dv,logdepthbuf_pars_fragment:fv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:pv,map_fragment:mv,map_pars_fragment:gv,map_particle_fragment:_v,map_particle_pars_fragment:vv,metalnessmap_fragment:xv,metalnessmap_pars_fragment:yv,morphcolor_vertex:Mv,morphnormal_vertex:Sv,morphtarget_pars_vertex:Ev,morphtarget_vertex:bv,normal_fragment_begin:Tv,normal_fragment_maps:Av,normal_pars_fragment:Cv,normal_pars_vertex:wv,normal_vertex:Rv,normalmap_pars_fragment:Pv,clearcoat_normal_fragment_begin:Lv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Dv,opaque_fragment:Ov,packing:Nv,premultiplied_alpha_fragment:Fv,project_vertex:Bv,dithering_fragment:Hv,dithering_pars_fragment:kv,roughnessmap_fragment:zv,roughnessmap_pars_fragment:Gv,shadowmap_pars_fragment:Vv,shadowmap_pars_vertex:Wv,shadowmap_vertex:Xv,shadowmask_pars_fragment:qv,skinbase_vertex:jv,skinning_pars_vertex:Yv,skinning_vertex:$v,skinnormal_vertex:Kv,specularmap_fragment:Zv,specularmap_pars_fragment:Jv,tonemapping_fragment:Qv,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:r0,uv_vertex:s0,worldpos_vertex:o0,background_vert:a0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:h0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:_0,equirect_frag:v0,linedashed_vert:x0,linedashed_frag:y0,meshbasic_vert:M0,meshbasic_frag:S0,meshlambert_vert:E0,meshlambert_frag:b0,meshmatcap_vert:T0,meshmatcap_frag:A0,meshnormal_vert:C0,meshnormal_frag:w0,meshphong_vert:R0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:I0,meshtoon_vert:U0,meshtoon_frag:D0,points_vert:O0,points_frag:N0,shadow_vert:F0,shadow_frag:B0,sprite_vert:H0,sprite_frag:k0},Me={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},wn={basic:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new at(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new at(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:zt([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:zt([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:zt([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:zt([Me.common,Me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:zt([Me.lights,Me.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};wn.physical={uniforms:zt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Xs={r:0,b:0,g:0};function z0(n,e,t,i,r,s,o){const a=new at(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function x(p,h){let T=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?_(a,l):S&&S.isColor&&(_(S,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Co)?(u===void 0&&(u=new Pn(new Gi(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:br(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ot.getTransfer(S.colorSpace)!==dt,(d!==S||f!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Pn(new _l(2,2),new Bi({name:"BackgroundMaterial",uniforms:br(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ot.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(Xs,pf(n)),i.buffers.color.setClear(Xs.r,Xs.g,Xs.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:x}}function G0(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(D,X,Z,k,re){let ue=!1;if(o){const ae=_(k,Z,X);c!==ae&&(c=ae,m(c.object)),ue=h(D,k,Z,re),ue&&T(D,k,Z,re)}else{const ae=X.wireframe===!0;(c.geometry!==k.id||c.program!==Z.id||c.wireframe!==ae)&&(c.geometry=k.id,c.program=Z.id,c.wireframe=ae,ue=!0)}re!==null&&t.update(re,n.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,Y(D,X,Z,k),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function x(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,X,Z){const k=Z.wireframe===!0;let re=a[D.id];re===void 0&&(re={},a[D.id]=re);let ue=re[X.id];ue===void 0&&(ue={},re[X.id]=ue);let ae=ue[k];return ae===void 0&&(ae=p(f()),ue[k]=ae),ae}function p(D){const X=[],Z=[],k=[];for(let re=0;re<r;re++)X[re]=0,Z[re]=0,k[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:k,object:D,attributes:{},index:null}}function h(D,X,Z,k){const re=c.attributes,ue=X.attributes;let ae=0;const ge=Z.getAttributes();for(const _e in ge)if(ge[_e].location>=0){const de=re[_e];let be=ue[_e];if(be===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),de===void 0||de.attribute!==be||be&&de.data!==be.data)return!0;ae++}return c.attributesNum!==ae||c.index!==k}function T(D,X,Z,k){const re={},ue=X.attributes;let ae=0;const ge=Z.getAttributes();for(const _e in ge)if(ge[_e].location>=0){let de=ue[_e];de===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(de=D.instanceColor));const be={};be.attribute=de,de&&de.data&&(be.data=de.data),re[_e]=be,ae++}c.attributes=re,c.attributesNum=ae,c.index=k}function S(){const D=c.newAttributes;for(let X=0,Z=D.length;X<Z;X++)D[X]=0}function b(D){C(D,0)}function C(D,X){const Z=c.newAttributes,k=c.enabledAttributes,re=c.attributeDivisors;Z[D]=1,k[D]===0&&(n.enableVertexAttribArray(D),k[D]=1),re[D]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,X),re[D]=X)}function P(){const D=c.newAttributes,X=c.enabledAttributes;for(let Z=0,k=X.length;Z<k;Z++)X[Z]!==D[Z]&&(n.disableVertexAttribArray(Z),X[Z]=0)}function L(D,X,Z,k,re,ue,ae){ae===!0?n.vertexAttribIPointer(D,X,Z,re,ue):n.vertexAttribPointer(D,X,Z,k,re,ue)}function Y(D,X,Z,k){if(i.isWebGL2===!1&&(D.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const re=k.attributes,ue=Z.getAttributes(),ae=X.defaultAttributeValues;for(const ge in ue){const _e=ue[ge];if(_e.location>=0){let q=re[ge];if(q===void 0&&(ge==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),ge==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){const de=q.normalized,be=q.itemSize,Ae=t.get(q);if(Ae===void 0)continue;const O=Ae.buffer,le=Ae.type,J=Ae.bytesPerElement,he=i.isWebGL2===!0&&(le===n.INT||le===n.UNSIGNED_INT||q.gpuType===Kd);if(q.isInterleavedBufferAttribute){const Ce=q.data,g=Ce.stride,A=q.offset;if(Ce.isInstancedInterleavedBuffer){for(let R=0;R<_e.locationSize;R++)C(_e.location+R,Ce.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let R=0;R<_e.locationSize;R++)b(_e.location+R);n.bindBuffer(n.ARRAY_BUFFER,O);for(let R=0;R<_e.locationSize;R++)L(_e.location+R,be/_e.locationSize,le,de,g*J,(A+be/_e.locationSize*R)*J,he)}else{if(q.isInstancedBufferAttribute){for(let Ce=0;Ce<_e.locationSize;Ce++)C(_e.location+Ce,q.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ce=0;Ce<_e.locationSize;Ce++)b(_e.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,O);for(let Ce=0;Ce<_e.locationSize;Ce++)L(_e.location+Ce,be/_e.locationSize,le,de,be*J,be/_e.locationSize*Ce*J,he)}}else if(ae!==void 0){const de=ae[ge];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(_e.location,de);break;case 3:n.vertexAttrib3fv(_e.location,de);break;case 4:n.vertexAttrib4fv(_e.location,de);break;default:n.vertexAttrib1fv(_e.location,de)}}}}P()}function M(){ne();for(const D in a){const X=a[D];for(const Z in X){const k=X[Z];for(const re in k)x(k[re].object),delete k[re];delete X[Z]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;const X=a[D.id];for(const Z in X){const k=X[Z];for(const re in k)x(k[re].object),delete k[re];delete X[Z]}delete a[D.id]}function Q(D){for(const X in a){const Z=a[X];if(Z[D.id]===void 0)continue;const k=Z[D.id];for(const re in k)x(k[re].object),delete k[re];delete Z[D.id]}}function ne(){pe(),u=!0,c!==l&&(c=l,m(c.object))}function pe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ne,resetDefaultState:pe,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:Q,initAttributes:S,enableAttribute:b,disableUnusedAttributes:P}}function V0(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,f){if(f===0)return;let m,x;if(r)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,u,d,f),t.update(d,s,f)}function c(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f;x++)this.render(u[x],d[x]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,f);let x=0;for(let _=0;_<f;_++)x+=d[_];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function W0(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,b=o||e.has("OES_texture_float"),C=S&&b,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:P}}function X0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ei,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const T=s?0:i,S=T*4;let b=h.clippingState||null;l.value=b,b=u(x,f,S,m);for(let C=0;C!==S;++C)b[C]=t[C];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,x){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const h=m+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,b=m;S!==_;++S,b+=4)o.copy(d[S]).applyMatrix4(T,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function q0(n){let e=new WeakMap;function t(o,a){return a===Fa?o.mapping=Mr:a===Ba&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Ba)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new r_(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class j0 extends mf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ar=4,cu=[.125,.215,.35,.446,.526,.582],wi=20,ha=new j0,uu=new at;let pa=null,ma=0,ga=0;const bi=(1+Math.sqrt(5))/2,sr=1/bi,du=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,bi,sr),new V(0,bi,-sr),new V(sr,0,bi),new V(-sr,0,bi),new V(bi,sr,0),new V(-bi,sr,0)];class fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:ls,format:xn,colorSpace:jn,depthBuffer:!1},r=hu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(s)),this._blurMaterial=$0(s,e,t)}return r}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,i,r){const a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(uu),u.toneMapping=ui,u.autoClear=!1;const m=new qt({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),x=new Pn(new Gi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(uu),_=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):T===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const S=this._cubeSize;qs(r,T*S,h>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=du[(r-1)%du.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Pn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wi-1),_=s/x,p=isFinite(s)?1+Math.floor(u*_):wi;p>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const h=[];let T=0;for(let L=0;L<wi;++L){const Y=L/_,M=Math.exp(-Y*Y/2);h.push(M),L===0?T+=M:L<p&&(T+=2*M)}for(let L=0;L<h.length;L++)h[L]=h[L]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=x,f.mipInt.value=S-i;const b=this._sizeLods[r],C=3*b*(r>S-ar?r-S+ar:0),P=4*(this._cubeSize-b);qs(t,C,P,3*b,2*b),l.setRenderTarget(t),l.render(d,ha)}}function Y0(n){const e=[],t=[],i=[];let r=n;const s=n-ar+1+cu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ar?l=cu[o-n+ar-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,_=3,p=2,h=1,T=new Float32Array(_*x*m),S=new Float32Array(p*x*m),b=new Float32Array(h*x*m);for(let P=0;P<m;P++){const L=P%3*2/3-1,Y=P>2?0:-1,M=[L,Y,0,L+2/3,Y,0,L+2/3,Y+1,0,L,Y,0,L+2/3,Y+1,0,L,Y+1,0];T.set(M,_*x*P),S.set(f,p*x*P);const w=[P,P,P,P,P,P];b.set(w,h*x*P)}const C=new zi;C.setAttribute("position",new Ln(T,_)),C.setAttribute("uv",new Ln(S,p)),C.setAttribute("faceIndex",new Ln(b,h)),e.push(C),r>ar&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hu(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $0(n,e,t){const i=new Float32Array(wi),r=new V(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function pu(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function mu(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function K0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===Ba,u=l===Mr||l===Sr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new fu(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new fu(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Z0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function J0(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const _=m[x];for(let p=0,h=_.length;p<h;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,x=d.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let S=0,b=T.length;S<b;S+=3){const C=T[S+0],P=T[S+1],L=T[S+2];f.push(C,P,P,L,L,C)}}else if(x!==void 0){const T=x.array;_=x.version;for(let S=0,b=T.length/3-1;S<b;S+=3){const C=S+0,P=S+1,L=S+2;f.push(C,P,P,L,L,C)}}else return;const p=new(of(f)?hf:ff)(f,1);p.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Q0(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,x){n.drawElements(s,x,a,m*l),t.update(x,s,1)}function d(m,x,_){if(_===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,x,a,m*l,_),t.update(x,s,_)}function f(m,x,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<_;h++)this.render(m[h]/l,x[h]);else{p.multiDrawElementsWEBGL(s,x,0,a,m,0,_);let h=0;for(let T=0;T<_;T++)h+=x[T];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function ex(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tx(n,e){return n[0]-e[0]}function nx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ix(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let X=function(){pe.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var m=X;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],Y=u.morphAttributes.color||[];let M=0;S===!0&&(M=1),b===!0&&(M=2),C===!0&&(M=3);let w=u.attributes.position.count*M,Q=1;w>e.maxTextureSize&&(Q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const ne=new Float32Array(w*Q*4*_),pe=new cf(ne,w,Q,_);pe.type=oi,pe.needsUpdate=!0;const D=M*4;for(let Z=0;Z<_;Z++){const k=P[Z],re=L[Z],ue=Y[Z],ae=w*Q*4*Z;for(let ge=0;ge<k.count;ge++){const _e=ge*D;S===!0&&(o.fromBufferAttribute(k,ge),ne[ae+_e+0]=o.x,ne[ae+_e+1]=o.y,ne[ae+_e+2]=o.z,ne[ae+_e+3]=0),b===!0&&(o.fromBufferAttribute(re,ge),ne[ae+_e+4]=o.x,ne[ae+_e+5]=o.y,ne[ae+_e+6]=o.z,ne[ae+_e+7]=0),C===!0&&(o.fromBufferAttribute(ue,ge),ne[ae+_e+8]=o.x,ne[ae+_e+9]=o.y,ne[ae+_e+10]=o.z,ne[ae+_e+11]=ue.itemSize===4?o.w:1)}}p={count:_,texture:pe,size:new lt(w,Q)},s.set(u,p),u.addEventListener("dispose",X)}let h=0;for(let S=0;S<f.length;S++)h+=f[S];const T=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==x){_=[];for(let b=0;b<x;b++)_[b]=[b,0];i[u.id]=_}for(let b=0;b<x;b++){const C=_[b];C[0]=b,C[1]=f[b]}_.sort(nx);for(let b=0;b<8;b++)b<x&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(tx);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const C=a[b],P=C[0],L=C[1];P!==Number.MAX_SAFE_INTEGER&&L?(p&&u.getAttribute("morphTarget"+b)!==p[P]&&u.setAttribute("morphTarget"+b,p[P]),h&&u.getAttribute("morphNormal"+b)!==h[P]&&u.setAttribute("morphNormal"+b,h[P]),r[b]=L,T+=L):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const S=u.morphTargetsRelative?1:1-T;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function rx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class xf extends Yt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ui,u!==Ui&&u!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ui&&(i=si),i===void 0&&u===Er&&(i=Ii),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yf=new Yt,Mf=new xf(1,1);Mf.compareFunction=sf;const Sf=new cf,Ef=new kg,bf=new gf,gu=[],_u=[],vu=new Float32Array(16),xu=new Float32Array(9),yu=new Float32Array(4);function Ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gu[r];if(s===void 0&&(s=new Float32Array(r),gu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lo(n,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;yu.set(i),n.uniformMatrix2fv(this.addr,!1,yu),St(t,i)}}function ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;xu.set(i),n.uniformMatrix3fv(this.addr,!1,xu),St(t,i)}}function dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;vu.set(i),n.uniformMatrix4fv(this.addr,!1,vu),St(t,i)}}function fx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function gx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function yx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Mf:yf;t.setTexture2D(e||s,r)}function Mx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ef,r)}function Sx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bf,r)}function Ex(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sf,r)}function bx(n){switch(n){case 5126:return sx;case 35664:return ox;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return hx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return vx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Tx(n,e){n.uniform1fv(this.addr,e)}function Ax(n,e){const t=Ur(e,this.size,2);n.uniform2fv(this.addr,t)}function Cx(n,e){const t=Ur(e,this.size,3);n.uniform3fv(this.addr,t)}function wx(n,e){const t=Ur(e,this.size,4);n.uniform4fv(this.addr,t)}function Rx(n,e){const t=Ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Px(n,e){const t=Ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lx(n,e){const t=Ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ix(n,e){n.uniform1iv(this.addr,e)}function Ux(n,e){n.uniform2iv(this.addr,e)}function Dx(n,e){n.uniform3iv(this.addr,e)}function Ox(n,e){n.uniform4iv(this.addr,e)}function Nx(n,e){n.uniform1uiv(this.addr,e)}function Fx(n,e){n.uniform2uiv(this.addr,e)}function Bx(n,e){n.uniform3uiv(this.addr,e)}function Hx(n,e){n.uniform4uiv(this.addr,e)}function kx(n,e,t){const i=this.cache,r=e.length,s=Lo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||yf,s[o])}function zx(n,e,t){const i=this.cache,r=e.length,s=Lo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ef,s[o])}function Gx(n,e,t){const i=this.cache,r=e.length,s=Lo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bf,s[o])}function Vx(n,e,t){const i=this.cache,r=e.length,s=Lo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sf,s[o])}function Wx(n){switch(n){case 5126:return Tx;case 35664:return Ax;case 35665:return Cx;case 35666:return wx;case 35674:return Rx;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Ix;case 35667:case 35671:return Ux;case 35668:case 35672:return Dx;case 35669:case 35673:return Ox;case 5125:return Nx;case 36294:return Fx;case 36295:return Bx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Vx}}class Xx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bx(t.type)}}class qx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wx(t.type)}}class jx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Mu(n,e){n.seq.push(e),n.map[e.id]=e}function Yx(n,e,t){const i=n.name,r=i.length;for(_a.lastIndex=0;;){const s=_a.exec(i),o=_a.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Mu(t,c===void 0?new Xx(a,n,e):new qx(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new jx(a),Mu(t,d)),t=d}}}class eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Yx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Su(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $x=37297;let Kx=0;function Zx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Jx(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===fo&&t===uo?i="LinearDisplayP3ToLinearSRGB":e===uo&&t===fo&&(i="LinearSRGBToLinearDisplayP3"),n){case jn:case wo:return[i,"LinearTransferOETF"];case At:case ml:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Eu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Zx(n.getShaderSource(e),o)}else return r}function Qx(n,e){const t=Jx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ey(n,e){let t;switch(e){case cg:t="Linear";break;case ug:t="Reinhard";break;case dg:t="OptimizedCineon";break;case fg:t="ACESFilmic";break;case hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ty(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function ny(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xr(n){return n!==""}function bu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(ry,oy)}const sy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oy(n,e){let t=qe[e];if(t===void 0){const i=sy.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(n){return n.replace(ay,ly)}function ly(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function uy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mr:case Sr:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function fy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yd:e="ENVMAP_BLENDING_MULTIPLY";break;case ag:e="ENVMAP_BLENDING_MIX";break;case lg:e="ENVMAP_BLENDING_ADD";break}return e}function hy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function py(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cy(t),c=uy(t),u=dy(t),d=fy(t),f=hy(t),m=t.isWebGL2?"":ty(t),x=ny(s),_=r.createProgram();let p,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Xr).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Xr).join(`
`),h.length>0&&(h+=`
`)):(p=[Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),h=[m,Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?qe.tonemapping_pars_fragment:"",t.toneMapping!==ui?ey("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Qx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=Wa(o),o=bu(o,t),o=Tu(o,t),a=Wa(a),a=bu(a,t),a=Tu(a,t),o=Au(o),a=Au(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=T+p+o,b=T+h+a,C=Su(r,r.VERTEX_SHADER,S),P=Su(r,r.FRAGMENT_SHADER,b);r.attachShader(_,C),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function L(Q){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(_).trim(),pe=r.getShaderInfoLog(C).trim(),D=r.getShaderInfoLog(P).trim();let X=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,P);else{const k=Eu(r,C,"vertex"),re=Eu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+k+`
`+re)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(pe===""||D==="")&&(Z=!1);Z&&(Q.diagnostics={runnable:X,programLog:ne,vertexShader:{log:pe,prefix:p},fragmentShader:{log:D,prefix:h}})}r.deleteShader(C),r.deleteShader(P),Y=new eo(r,_),M=iy(r,_)}let Y;this.getUniforms=function(){return Y===void 0&&L(this),Y};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,$x)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=P,this}let my=0;class gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _y(e),t.set(e,i)),i}}class _y{constructor(e){this.id=my++,this.code=e,this.usedTimes=0}}function vy(n,e,t,i,r,s,o){const a=new uf,l=new gy,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,w,Q,ne,pe){const D=ne.fog,X=pe.geometry,Z=M.isMeshStandardMaterial?ne.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),re=k&&k.mapping===Co?k.image.height:null,ue=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=ae!==void 0?ae.length:0;let _e=0;X.morphAttributes.position!==void 0&&(_e=1),X.morphAttributes.normal!==void 0&&(_e=2),X.morphAttributes.color!==void 0&&(_e=3);let q,de,be,Ae;if(ue){const Bt=wn[ue];q=Bt.vertexShader,de=Bt.fragmentShader}else q=M.vertexShader,de=M.fragmentShader,l.update(M),be=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);const O=n.getRenderTarget(),le=pe.isInstancedMesh===!0,J=pe.isBatchedMesh===!0,he=!!M.map,Ce=!!M.matcap,g=!!k,A=!!M.aoMap,R=!!M.lightMap,F=!!M.bumpMap,B=!!M.normalMap,$=!!M.displacementMap,oe=!!M.emissiveMap,j=!!M.metalnessMap,ce=!!M.roughnessMap,se=M.anisotropy>0,Te=M.clearcoat>0,y=M.iridescence>0,v=M.sheen>0,U=M.transmission>0,K=se&&!!M.anisotropyMap,ee=Te&&!!M.clearcoatMap,ie=Te&&!!M.clearcoatNormalMap,Se=Te&&!!M.clearcoatRoughnessMap,me=y&&!!M.iridescenceMap,Ee=y&&!!M.iridescenceThicknessMap,Fe=v&&!!M.sheenColorMap,Ke=v&&!!M.sheenRoughnessMap,ve=!!M.specularMap,Ge=!!M.specularColorMap,Ue=!!M.specularIntensityMap,Be=U&&!!M.transmissionMap,Oe=U&&!!M.thicknessMap,Le=!!M.gradientMap,Ze=!!M.alphaMap,I=M.alphaTest>0,Re=!!M.alphaHash,xe=!!M.extensions,te=!!X.attributes.uv1,ye=!!X.attributes.uv2,ke=!!X.attributes.uv3;let Qe=ui;return M.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Qe=n.toneMapping),{isWebGL2:u,shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:de,defines:M.defines,customVertexShaderID:be,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:J,instancing:le,instancingColor:le&&pe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:jn,map:he,matcap:Ce,envMap:g,envMapMode:g&&k.mapping,envMapCubeUVHeight:re,aoMap:A,lightMap:R,bumpMap:F,normalMap:B,displacementMap:f&&$,emissiveMap:oe,normalMapObjectSpace:B&&M.normalMapType===Ag,normalMapTangentSpace:B&&M.normalMapType===Tg,metalnessMap:j,roughnessMap:ce,anisotropy:se,anisotropyMap:K,clearcoat:Te,clearcoatMap:ee,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,iridescence:y,iridescenceMap:me,iridescenceThicknessMap:Ee,sheen:v,sheenColorMap:Fe,sheenRoughnessMap:Ke,specularMap:ve,specularColorMap:Ge,specularIntensityMap:Ue,transmission:U,transmissionMap:Be,thicknessMap:Oe,gradientMap:Le,opaque:M.transparent===!1&&M.blending===hr,alphaMap:Ze,alphaTest:I,alphaHash:Re,combine:M.combine,mapUv:he&&_(M.map.channel),aoMapUv:A&&_(M.aoMap.channel),lightMapUv:R&&_(M.lightMap.channel),bumpMapUv:F&&_(M.bumpMap.channel),normalMapUv:B&&_(M.normalMap.channel),displacementMapUv:$&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:j&&_(M.metalnessMap.channel),roughnessMapUv:ce&&_(M.roughnessMap.channel),anisotropyMapUv:K&&_(M.anisotropyMap.channel),clearcoatMapUv:ee&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&_(M.sheenRoughnessMap.channel),specularMapUv:ve&&_(M.specularMap.channel),specularColorMapUv:Ge&&_(M.specularColorMap.channel),specularIntensityMapUv:Ue&&_(M.specularIntensityMap.channel),transmissionMapUv:Be&&_(M.transmissionMap.channel),thicknessMapUv:Oe&&_(M.thicknessMap.channel),alphaMapUv:Ze&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(B||se),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:te,vertexUv2s:ye,vertexUv3s:ke,pointsUvs:pe.isPoints===!0&&!!X.attributes.uv&&(he||Ze),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:pe.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:_e,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&Q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gn,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:xe&&M.extensions.derivatives===!0,extensionFragDepth:xe&&M.extensions.fragDepth===!0,extensionDrawBuffers:xe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Q in M.defines)w.push(Q),w.push(M.defines[Q]);return M.isRawShaderMaterial===!1&&(T(w,M),S(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function T(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function S(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const w=x[M.type];let Q;if(w){const ne=wn[w];Q=e_.clone(ne.uniforms)}else Q=M.uniforms;return Q}function C(M,w){let Q;for(let ne=0,pe=c.length;ne<pe;ne++){const D=c[ne];if(D.cacheKey===w){Q=D,++Q.usedTimes;break}}return Q===void 0&&(Q=new py(n,w,M,s),c.push(Q)),Q}function P(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function L(M){l.remove(M)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:C,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:Y}}function xy(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function yy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ru(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,x,_,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:_,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=x,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function a(d,f,m,x,_,p){const h=o(d,f,m,x,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,f,m,x,_,p){const h=o(d,f,m,x,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||yy),i.length>1&&i.sort(f||wu),r.length>1&&r.sort(f||wu)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function My(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ru,n.set(i,[o])):r>=s.length?(o=new Ru,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new at};break;case"SpotLight":t={position:new V,direction:new V,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Ey(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let by=0;function Ty(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ay(n,e){const t=new Sy,i=Ey(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,o=new Rt,a=new Rt;function l(u,d){let f=0,m=0,x=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let _=0,p=0,h=0,T=0,S=0,b=0,C=0,P=0,L=0,Y=0,M=0;u.sort(Ty);const w=d===!0?Math.PI:1;for(let ne=0,pe=u.length;ne<pe;ne++){const D=u[ne],X=D.color,Z=D.intensity,k=D.distance,re=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=X.r*Z*w,m+=X.g*Z*w,x+=X.b*Z*w;else if(D.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(D.sh.coefficients[ue],Z);M++}else if(D.isDirectionalLight){const ue=t.get(D);if(ue.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const ae=D.shadow,ge=i.get(D);ge.shadowBias=ae.bias,ge.shadowNormalBias=ae.normalBias,ge.shadowRadius=ae.radius,ge.shadowMapSize=ae.mapSize,r.directionalShadow[_]=ge,r.directionalShadowMap[_]=re,r.directionalShadowMatrix[_]=D.shadow.matrix,b++}r.directional[_]=ue,_++}else if(D.isSpotLight){const ue=t.get(D);ue.position.setFromMatrixPosition(D.matrixWorld),ue.color.copy(X).multiplyScalar(Z*w),ue.distance=k,ue.coneCos=Math.cos(D.angle),ue.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ue.decay=D.decay,r.spot[h]=ue;const ae=D.shadow;if(D.map&&(r.spotLightMap[L]=D.map,L++,ae.updateMatrices(D),D.castShadow&&Y++),r.spotLightMatrix[h]=ae.matrix,D.castShadow){const ge=i.get(D);ge.shadowBias=ae.bias,ge.shadowNormalBias=ae.normalBias,ge.shadowRadius=ae.radius,ge.shadowMapSize=ae.mapSize,r.spotShadow[h]=ge,r.spotShadowMap[h]=re,P++}h++}else if(D.isRectAreaLight){const ue=t.get(D);ue.color.copy(X).multiplyScalar(Z),ue.halfWidth.set(D.width*.5,0,0),ue.halfHeight.set(0,D.height*.5,0),r.rectArea[T]=ue,T++}else if(D.isPointLight){const ue=t.get(D);if(ue.color.copy(D.color).multiplyScalar(D.intensity*w),ue.distance=D.distance,ue.decay=D.decay,D.castShadow){const ae=D.shadow,ge=i.get(D);ge.shadowBias=ae.bias,ge.shadowNormalBias=ae.normalBias,ge.shadowRadius=ae.radius,ge.shadowMapSize=ae.mapSize,ge.shadowCameraNear=ae.camera.near,ge.shadowCameraFar=ae.camera.far,r.pointShadow[p]=ge,r.pointShadowMap[p]=re,r.pointShadowMatrix[p]=D.shadow.matrix,C++}r.point[p]=ue,p++}else if(D.isHemisphereLight){const ue=t.get(D);ue.skyColor.copy(D.color).multiplyScalar(Z*w),ue.groundColor.copy(D.groundColor).multiplyScalar(Z*w),r.hemi[S]=ue,S++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==_||Q.pointLength!==p||Q.spotLength!==h||Q.rectAreaLength!==T||Q.hemiLength!==S||Q.numDirectionalShadows!==b||Q.numPointShadows!==C||Q.numSpotShadows!==P||Q.numSpotMaps!==L||Q.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=T,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=P+L-Y,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=M,Q.directionalLength=_,Q.pointLength=p,Q.spotLength=h,Q.rectAreaLength=T,Q.hemiLength=S,Q.numDirectionalShadows=b,Q.numPointShadows=C,Q.numSpotShadows=P,Q.numSpotMaps=L,Q.numLightProbes=M,r.version=by++)}function c(u,d){let f=0,m=0,x=0,_=0,p=0;const h=d.matrixWorldInverse;for(let T=0,S=u.length;T<S;T++){const b=u[T];if(b.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),f++}else if(b.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),x++}else if(b.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),a.identity(),o.copy(b.matrixWorld),o.premultiply(h),a.extractRotation(o),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Pu(n,e){const t=new Ay(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Cy(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Pu(n,e),t.set(s,[l])):o>=a.length?(l=new Pu(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class wy extends Po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ry extends Po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iy(n,e,t){let i=new _f;const r=new lt,s=new lt,o=new wt,a=new wy({depthPacking:bg}),l=new Ry,c={},u=t.maxTextureSize,d={[pi]:jt,[jt]:pi,[Gn]:Gn},f=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Py,fragmentShader:Ly}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new zi;x.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pn(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jd;let h=this.type;this.render=function(C,P,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const Y=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(ci),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ne=h!==kn&&this.type===kn,pe=h===kn&&this.type!==kn;for(let D=0,X=C.length;D<X;D++){const Z=C[D],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const re=k.getFrameExtents();if(r.multiply(re),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,k.mapSize.y=s.y)),k.map===null||ne===!0||pe===!0){const ae=this.type!==kn?{minFilter:Gt,magFilter:Gt}:{};k.map!==null&&k.map.dispose(),k.map=new Fi(r.x,r.y,ae),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ue=k.getViewportCount();for(let ae=0;ae<ue;ae++){const ge=k.getViewport(ae);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),Q.viewport(o),k.updateMatrices(Z,ae),i=k.getFrustum(),b(P,L,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===kn&&T(k,L),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(Y,M,w)};function T(C,P){const L=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,L,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,L,m,_,null)}function S(C,P,L,Y){let M=null;const w=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Q=M.uuid,ne=P.uuid;let pe=c[Q];pe===void 0&&(pe={},c[Q]=pe);let D=pe[ne];D===void 0&&(D=M.clone(),pe[ne]=D),M=D}if(M.visible=P.visible,M.wireframe=P.wireframe,Y===kn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=n.properties.get(M);Q.light=L}return M}function b(C,P,L,Y,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===kn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),pe=C.material;if(Array.isArray(pe)){const D=ne.groups;for(let X=0,Z=D.length;X<Z;X++){const k=D[X],re=pe[k.materialIndex];if(re&&re.visible){const ue=S(C,re,Y,M);C.onBeforeShadow(n,C,P,L,ne,ue,k),n.renderBufferDirect(L,null,ne,ue,C,k),C.onAfterShadow(n,C,P,L,ne,ue,k)}}}else if(pe.visible){const D=S(C,pe,Y,M);C.onBeforeShadow(n,C,P,L,ne,D,null),n.renderBufferDirect(L,null,ne,D,C,null),C.onAfterShadow(n,C,P,L,ne,D,null)}}const Q=C.children;for(let ne=0,pe=Q.length;ne<pe;ne++)b(Q[ne],P,L,Y,M)}}function Uy(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const Re=new wt;let xe=null;const te=new wt(0,0,0,0);return{setMask:function(ye){xe!==ye&&!I&&(n.colorMask(ye,ye,ye,ye),xe=ye)},setLocked:function(ye){I=ye},setClear:function(ye,ke,Qe,Et,Bt){Bt===!0&&(ye*=Et,ke*=Et,Qe*=Et),Re.set(ye,ke,Qe,Et),te.equals(Re)===!1&&(n.clearColor(ye,ke,Qe,Et),te.copy(Re))},reset:function(){I=!1,xe=null,te.set(-1,0,0,0)}}}function s(){let I=!1,Re=null,xe=null,te=null;return{setTest:function(ye){ye?J(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ye){Re!==ye&&!I&&(n.depthMask(ye),Re=ye)},setFunc:function(ye){if(xe!==ye){switch(ye){case eg:n.depthFunc(n.NEVER);break;case tg:n.depthFunc(n.ALWAYS);break;case ng:n.depthFunc(n.LESS);break;case lo:n.depthFunc(n.LEQUAL);break;case ig:n.depthFunc(n.EQUAL);break;case rg:n.depthFunc(n.GEQUAL);break;case sg:n.depthFunc(n.GREATER);break;case og:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ye}},setLocked:function(ye){I=ye},setClear:function(ye){te!==ye&&(n.clearDepth(ye),te=ye)},reset:function(){I=!1,Re=null,xe=null,te=null}}}function o(){let I=!1,Re=null,xe=null,te=null,ye=null,ke=null,Qe=null,Et=null,Bt=null;return{setTest:function(ct){I||(ct?J(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(ct){Re!==ct&&!I&&(n.stencilMask(ct),Re=ct)},setFunc:function(ct,Ht,Tn){(xe!==ct||te!==Ht||ye!==Tn)&&(n.stencilFunc(ct,Ht,Tn),xe=ct,te=Ht,ye=Tn)},setOp:function(ct,Ht,Tn){(ke!==ct||Qe!==Ht||Et!==Tn)&&(n.stencilOp(ct,Ht,Tn),ke=ct,Qe=Ht,Et=Tn)},setLocked:function(ct){I=ct},setClear:function(ct){Bt!==ct&&(n.clearStencil(ct),Bt=ct)},reset:function(){I=!1,Re=null,xe=null,te=null,ye=null,ke=null,Qe=null,Et=null,Bt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,_=[],p=null,h=!1,T=null,S=null,b=null,C=null,P=null,L=null,Y=null,M=new at(0,0,0),w=0,Q=!1,ne=null,pe=null,D=null,X=null,Z=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ue=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(ae)[1]),re=ue>=1):ae.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),re=ue>=2);let ge=null,_e={};const q=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),be=new wt().fromArray(q),Ae=new wt().fromArray(de);function O(I,Re,xe,te){const ye=new Uint8Array(4),ke=n.createTexture();n.bindTexture(I,ke),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<xe;Qe++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(Re,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Re+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ke}const le={};le[n.TEXTURE_2D]=O(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=O(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[n.TEXTURE_2D_ARRAY]=O(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=O(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),J(n.DEPTH_TEST),l.setFunc(lo),oe(!1),j(dc),J(n.CULL_FACE),B(ci);function J(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function he(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function Ce(I,Re){return m[I]!==Re?(n.bindFramebuffer(I,Re),m[I]=Re,i&&(I===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Re),I===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Re)),!0):!1}function g(I,Re){let xe=_,te=!1;if(I)if(xe=x.get(Re),xe===void 0&&(xe=[],x.set(Re,xe)),I.isWebGLMultipleRenderTargets){const ye=I.texture;if(xe.length!==ye.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,Qe=ye.length;ke<Qe;ke++)xe[ke]=n.COLOR_ATTACHMENT0+ke;xe.length=ye.length,te=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,te=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,te=!0);te&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function A(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const R={[Ci]:n.FUNC_ADD,[Hm]:n.FUNC_SUBTRACT,[km]:n.FUNC_REVERSE_SUBTRACT};if(i)R[mc]=n.MIN,R[gc]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(R[mc]=I.MIN_EXT,R[gc]=I.MAX_EXT)}const F={[zm]:n.ZERO,[Gm]:n.ONE,[Vm]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[$m]:n.SRC_ALPHA_SATURATE,[jm]:n.DST_COLOR,[Xm]:n.DST_ALPHA,[Wm]:n.ONE_MINUS_SRC_COLOR,[Na]:n.ONE_MINUS_SRC_ALPHA,[Ym]:n.ONE_MINUS_DST_COLOR,[qm]:n.ONE_MINUS_DST_ALPHA,[Km]:n.CONSTANT_COLOR,[Zm]:n.ONE_MINUS_CONSTANT_COLOR,[Jm]:n.CONSTANT_ALPHA,[Qm]:n.ONE_MINUS_CONSTANT_ALPHA};function B(I,Re,xe,te,ye,ke,Qe,Et,Bt,ct){if(I===ci){h===!0&&(he(n.BLEND),h=!1);return}if(h===!1&&(J(n.BLEND),h=!0),I!==Bm){if(I!==T||ct!==Q){if((S!==Ci||P!==Ci)&&(n.blendEquation(n.FUNC_ADD),S=Ci,P=Ci),ct)switch(I){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.ONE,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,C=null,L=null,Y=null,M.set(0,0,0),w=0,T=I,Q=ct}return}ye=ye||Re,ke=ke||xe,Qe=Qe||te,(Re!==S||ye!==P)&&(n.blendEquationSeparate(R[Re],R[ye]),S=Re,P=ye),(xe!==b||te!==C||ke!==L||Qe!==Y)&&(n.blendFuncSeparate(F[xe],F[te],F[ke],F[Qe]),b=xe,C=te,L=ke,Y=Qe),(Et.equals(M)===!1||Bt!==w)&&(n.blendColor(Et.r,Et.g,Et.b,Bt),M.copy(Et),w=Bt),T=I,Q=!1}function $(I,Re){I.side===Gn?he(n.CULL_FACE):J(n.CULL_FACE);let xe=I.side===jt;Re&&(xe=!xe),oe(xe),I.blending===hr&&I.transparent===!1?B(ci):B(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const te=I.stencilWrite;c.setTest(te),te&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(I){ne!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),ne=I)}function j(I){I!==Om?(J(n.CULL_FACE),I!==pe&&(I===dc?n.cullFace(n.BACK):I===Nm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),pe=I}function ce(I){I!==D&&(re&&n.lineWidth(I),D=I)}function se(I,Re,xe){I?(J(n.POLYGON_OFFSET_FILL),(X!==Re||Z!==xe)&&(n.polygonOffset(Re,xe),X=Re,Z=xe)):he(n.POLYGON_OFFSET_FILL)}function Te(I){I?J(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function y(I){I===void 0&&(I=n.TEXTURE0+k-1),ge!==I&&(n.activeTexture(I),ge=I)}function v(I,Re,xe){xe===void 0&&(ge===null?xe=n.TEXTURE0+k-1:xe=ge);let te=_e[xe];te===void 0&&(te={type:void 0,texture:void 0},_e[xe]=te),(te.type!==I||te.texture!==Re)&&(ge!==xe&&(n.activeTexture(xe),ge=xe),n.bindTexture(I,Re||le[I]),te.type=I,te.texture=Re)}function U(){const I=_e[ge];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(I){be.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),be.copy(I))}function Be(I){Ae.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ae.copy(I))}function Oe(I,Re){let xe=d.get(Re);xe===void 0&&(xe=new WeakMap,d.set(Re,xe));let te=xe.get(I);te===void 0&&(te=n.getUniformBlockIndex(Re,I.name),xe.set(I,te))}function Le(I,Re){const te=d.get(Re).get(I);u.get(Re)!==te&&(n.uniformBlockBinding(Re,te,I.__bindingPointIndex),u.set(Re,te))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ge=null,_e={},m={},x=new WeakMap,_=[],p=null,h=!1,T=null,S=null,b=null,C=null,P=null,L=null,Y=null,M=new at(0,0,0),w=0,Q=!1,ne=null,pe=null,D=null,X=null,Z=null,be.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:J,disable:he,bindFramebuffer:Ce,drawBuffers:g,useProgram:A,setBlending:B,setMaterial:$,setFlipSided:oe,setCullFace:j,setLineWidth:ce,setPolygonOffset:se,setScissorTest:Te,activeTexture:y,bindTexture:v,unbindTexture:U,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Ge,updateUBOMapping:Oe,uniformBlockBinding:Le,texStorage2D:Fe,texStorage3D:Ke,texSubImage2D:ie,texSubImage3D:Se,compressedTexSubImage2D:me,compressedTexSubImage3D:Ee,scissor:Ue,viewport:Be,reset:Ze}}function Dy(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(y,v){return h?new OffscreenCanvas(y,v):cs("canvas")}function S(y,v,U,K){let ee=1;if((y.width>K||y.height>K)&&(ee=K/Math.max(y.width,y.height)),ee<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ie=v?Va:Math.floor,Se=ie(ee*y.width),me=ie(ee*y.height);_===void 0&&(_=T(Se,me));const Ee=U?T(Se,me):_;return Ee.width=Se,Ee.height=me,Ee.getContext("2d").drawImage(y,0,0,Se,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Se+"x"+me+")."),Ee}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function b(y){return qc(y.width)&&qc(y.height)}function C(y){return a?!1:y.wrapS!==vn||y.wrapT!==vn||y.minFilter!==Gt&&y.minFilter!==an}function P(y,v){return y.generateMipmaps&&v&&y.minFilter!==Gt&&y.minFilter!==an}function L(y){n.generateMipmap(y)}function Y(y,v,U,K,ee=!1){if(a===!1)return v;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ie=v;if(v===n.RED&&(U===n.FLOAT&&(ie=n.R32F),U===n.HALF_FLOAT&&(ie=n.R16F),U===n.UNSIGNED_BYTE&&(ie=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ie=n.R8UI),U===n.UNSIGNED_SHORT&&(ie=n.R16UI),U===n.UNSIGNED_INT&&(ie=n.R32UI),U===n.BYTE&&(ie=n.R8I),U===n.SHORT&&(ie=n.R16I),U===n.INT&&(ie=n.R32I)),v===n.RG&&(U===n.FLOAT&&(ie=n.RG32F),U===n.HALF_FLOAT&&(ie=n.RG16F),U===n.UNSIGNED_BYTE&&(ie=n.RG8)),v===n.RGBA){const Se=ee?co:ot.getTransfer(K);U===n.FLOAT&&(ie=n.RGBA32F),U===n.HALF_FLOAT&&(ie=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ie=Se===dt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(y,v,U){return P(y,U)===!0||y.isFramebufferTexture&&y.minFilter!==Gt&&y.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function w(y){return y===Gt||y===_c||y===Go?n.NEAREST:n.LINEAR}function Q(y){const v=y.target;v.removeEventListener("dispose",Q),pe(v),v.isVideoTexture&&x.delete(v)}function ne(y){const v=y.target;v.removeEventListener("dispose",ne),X(v)}function pe(y){const v=i.get(y);if(v.__webglInit===void 0)return;const U=y.source,K=p.get(U);if(K){const ee=K[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(y),Object.keys(K).length===0&&p.delete(U)}i.remove(y)}function D(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const U=y.source,K=p.get(U);delete K[v.__cacheKey],o.memory.textures--}function X(y){const v=y.texture,U=i.get(y),K=i.get(v);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(U.__webglFramebuffer[ee]))for(let ie=0;ie<U.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(U.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(U.__webglFramebuffer[ee]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[ee])}else{if(Array.isArray(U.__webglFramebuffer))for(let ee=0;ee<U.__webglFramebuffer.length;ee++)n.deleteFramebuffer(U.__webglFramebuffer[ee]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ee=0;ee<U.__webglColorRenderbuffer.length;ee++)U.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[ee]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ee=0,ie=v.length;ee<ie;ee++){const Se=i.get(v[ee]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(v[ee])}i.remove(v),i.remove(y)}let Z=0;function k(){Z=0}function re(){const y=Z;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),Z+=1,y}function ue(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function ae(y,v){const U=i.get(y);if(y.isVideoTexture&&se(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const K=y.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(U,y,v);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function ge(y,v){const U=i.get(y);if(y.version>0&&U.__version!==y.version){J(U,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function _e(y,v){const U=i.get(y);if(y.version>0&&U.__version!==y.version){J(U,y,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function q(y,v){const U=i.get(y);if(y.version>0&&U.__version!==y.version){he(U,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const de={[Ha]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},be={[Gt]:n.NEAREST,[_c]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[pg]:n.LINEAR_MIPMAP_NEAREST,[as]:n.LINEAR_MIPMAP_LINEAR},Ae={[Cg]:n.NEVER,[Ug]:n.ALWAYS,[wg]:n.LESS,[sf]:n.LEQUAL,[Rg]:n.EQUAL,[Ig]:n.GEQUAL,[Pg]:n.GREATER,[Lg]:n.NOTEQUAL};function O(y,v,U){if(U?(n.texParameteri(y,n.TEXTURE_WRAP_S,de[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,de[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,de[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,be[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,be[v.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==vn||v.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Gt&&v.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Gt||v.minFilter!==Go&&v.minFilter!==as||v.type===oi&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===ls&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(y,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function le(y,v){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",Q));const K=v.source;let ee=p.get(K);ee===void 0&&(ee={},p.set(K,ee));const ie=ue(v);if(ie!==y.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[ie].usedTimes++;const Se=ee[y.__cacheKey];Se!==void 0&&(ee[y.__cacheKey].usedTimes--,Se.usedTimes===0&&D(v)),y.__cacheKey=ie,y.__webglTexture=ee[ie].texture}return U}function J(y,v,U){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const ee=le(y,v),ie=v.source;t.bindTexture(K,y.__webglTexture,n.TEXTURE0+U);const Se=i.get(ie);if(ie.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+U);const me=ot.getPrimaries(ot.workingColorSpace),Ee=v.colorSpace===un?null:ot.getPrimaries(v.colorSpace),Fe=v.colorSpace===un||me===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ke=C(v)&&b(v.image)===!1;let ve=S(v.image,Ke,!1,u);ve=Te(v,ve);const Ge=b(ve)||a,Ue=s.convert(v.format,v.colorSpace);let Be=s.convert(v.type),Oe=Y(v.internalFormat,Ue,Be,v.colorSpace,v.isVideoTexture);O(K,v,Ge);let Le;const Ze=v.mipmaps,I=a&&v.isVideoTexture!==!0&&Oe!==nf,Re=Se.__version===void 0||ee===!0,xe=M(v,ve,Ge);if(v.isDepthTexture)Oe=n.DEPTH_COMPONENT,a?v.type===oi?Oe=n.DEPTH_COMPONENT32F:v.type===si?Oe=n.DEPTH_COMPONENT24:v.type===Ii?Oe=n.DEPTH24_STENCIL8:Oe=n.DEPTH_COMPONENT16:v.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ui&&Oe===n.DEPTH_COMPONENT&&v.type!==pl&&v.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=si,Be=s.convert(v.type)),v.format===Er&&Oe===n.DEPTH_COMPONENT&&(Oe=n.DEPTH_STENCIL,v.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ii,Be=s.convert(v.type))),Re&&(I?t.texStorage2D(n.TEXTURE_2D,1,Oe,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ve.width,ve.height,0,Ue,Be,null));else if(v.isDataTexture)if(Ze.length>0&&Ge){I&&Re&&t.texStorage2D(n.TEXTURE_2D,xe,Oe,Ze[0].width,Ze[0].height);for(let te=0,ye=Ze.length;te<ye;te++)Le=Ze[te],I?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Le.width,Le.height,Ue,Be,Le.data):t.texImage2D(n.TEXTURE_2D,te,Oe,Le.width,Le.height,0,Ue,Be,Le.data);v.generateMipmaps=!1}else I?(Re&&t.texStorage2D(n.TEXTURE_2D,xe,Oe,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,Ue,Be,ve.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,ve.width,ve.height,0,Ue,Be,ve.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Oe,Ze[0].width,Ze[0].height,ve.depth);for(let te=0,ye=Ze.length;te<ye;te++)Le=Ze[te],v.format!==xn?Ue!==null?I?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Le.width,Le.height,ve.depth,Ue,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Oe,Le.width,Le.height,ve.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Le.width,Le.height,ve.depth,Ue,Be,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Oe,Le.width,Le.height,ve.depth,0,Ue,Be,Le.data)}else{I&&Re&&t.texStorage2D(n.TEXTURE_2D,xe,Oe,Ze[0].width,Ze[0].height);for(let te=0,ye=Ze.length;te<ye;te++)Le=Ze[te],v.format!==xn?Ue!==null?I?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Le.width,Le.height,Ue,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Oe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Le.width,Le.height,Ue,Be,Le.data):t.texImage2D(n.TEXTURE_2D,te,Oe,Le.width,Le.height,0,Ue,Be,Le.data)}else if(v.isDataArrayTexture)I?(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Oe,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Be,ve.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ve.width,ve.height,ve.depth,0,Ue,Be,ve.data);else if(v.isData3DTexture)I?(Re&&t.texStorage3D(n.TEXTURE_3D,xe,Oe,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Be,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ve.width,ve.height,ve.depth,0,Ue,Be,ve.data);else if(v.isFramebufferTexture){if(Re)if(I)t.texStorage2D(n.TEXTURE_2D,xe,Oe,ve.width,ve.height);else{let te=ve.width,ye=ve.height;for(let ke=0;ke<xe;ke++)t.texImage2D(n.TEXTURE_2D,ke,Oe,te,ye,0,Ue,Be,null),te>>=1,ye>>=1}}else if(Ze.length>0&&Ge){I&&Re&&t.texStorage2D(n.TEXTURE_2D,xe,Oe,Ze[0].width,Ze[0].height);for(let te=0,ye=Ze.length;te<ye;te++)Le=Ze[te],I?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ue,Be,Le):t.texImage2D(n.TEXTURE_2D,te,Oe,Ue,Be,Le);v.generateMipmaps=!1}else I?(Re&&t.texStorage2D(n.TEXTURE_2D,xe,Oe,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,Be,ve)):t.texImage2D(n.TEXTURE_2D,0,Oe,Ue,Be,ve);P(v,Ge)&&L(K),Se.__version=ie.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function he(y,v,U){if(v.image.length!==6)return;const K=le(y,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+U);const ie=i.get(ee);if(ee.version!==ie.__version||K===!0){t.activeTexture(n.TEXTURE0+U);const Se=ot.getPrimaries(ot.workingColorSpace),me=v.colorSpace===un?null:ot.getPrimaries(v.colorSpace),Ee=v.colorSpace===un||Se===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ke=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!Fe&&!Ke?ve[te]=S(v.image[te],!1,!0,c):ve[te]=Ke?v.image[te].image:v.image[te],ve[te]=Te(v,ve[te]);const Ge=ve[0],Ue=b(Ge)||a,Be=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type),Le=Y(v.internalFormat,Be,Oe,v.colorSpace),Ze=a&&v.isVideoTexture!==!0,I=ie.__version===void 0||K===!0;let Re=M(v,Ge,Ue);O(n.TEXTURE_CUBE_MAP,v,Ue);let xe;if(Fe){Ze&&I&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Le,Ge.width,Ge.height);for(let te=0;te<6;te++){xe=ve[te].mipmaps;for(let ye=0;ye<xe.length;ye++){const ke=xe[ye];v.format!==xn?Be!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,0,0,ke.width,ke.height,Be,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,Le,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,0,0,ke.width,ke.height,Be,Oe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,Le,ke.width,ke.height,0,Be,Oe,ke.data)}}}else{xe=v.mipmaps,Ze&&I&&(xe.length>0&&Re++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Le,ve[0].width,ve[0].height));for(let te=0;te<6;te++)if(Ke){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,Be,Oe,ve[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Le,ve[te].width,ve[te].height,0,Be,Oe,ve[te].data);for(let ye=0;ye<xe.length;ye++){const Qe=xe[ye].image[te].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,0,0,Qe.width,Qe.height,Be,Oe,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,Le,Qe.width,Qe.height,0,Be,Oe,Qe.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Be,Oe,ve[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Le,Be,Oe,ve[te]);for(let ye=0;ye<xe.length;ye++){const ke=xe[ye];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,0,0,Be,Oe,ke.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,Le,Be,Oe,ke.image[te])}}}P(v,Ue)&&L(n.TEXTURE_CUBE_MAP),ie.__version=ee.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Ce(y,v,U,K,ee,ie){const Se=s.convert(U.format,U.colorSpace),me=s.convert(U.type),Ee=Y(U.internalFormat,Se,me,U.colorSpace);if(!i.get(v).__hasExternalTextures){const Ke=Math.max(1,v.width>>ie),ve=Math.max(1,v.height>>ie);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,Ee,Ke,ve,v.depth,0,Se,me,null):t.texImage2D(ee,ie,Ee,Ke,ve,0,Se,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ce(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,i.get(U).__webglTexture,0,j(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,i.get(U).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(y,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||ce(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===oi?K=n.DEPTH_COMPONENT32F:ee.type===si&&(K=n.DEPTH_COMPONENT24));const ie=j(v);ce(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,K,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,K,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const K=j(v);U&&ce(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):ce(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<K.length;ee++){const ie=K[ee],Se=s.convert(ie.format,ie.colorSpace),me=s.convert(ie.type),Ee=Y(ie.internalFormat,Se,me,ie.colorSpace),Fe=j(v);U&&ce(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ee,v.width,v.height):ce(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Ee,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function A(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ae(v.depthTexture,0);const K=i.get(v.depthTexture).__webglTexture,ee=j(v);if(v.depthTexture.format===Ui)ce(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===Er)ce(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function R(y){const v=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");A(v.__webglFramebuffer,y)}else if(U){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=n.createRenderbuffer(),g(v.__webglDepthbuffer[K],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),g(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(y,v,U){const K=i.get(y);v!==void 0&&Ce(K.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&R(y)}function B(y){const v=y.texture,U=i.get(y),K=i.get(v);y.addEventListener("dispose",ne),y.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++);const ee=y.isWebGLCubeRenderTarget===!0,ie=y.isWebGLMultipleRenderTargets===!0,Se=b(y)||a;if(ee){U.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[me]=[];for(let Ee=0;Ee<v.mipmaps.length;Ee++)U.__webglFramebuffer[me][Ee]=n.createFramebuffer()}else U.__webglFramebuffer[me]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)U.__webglFramebuffer[me]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const me=y.texture;for(let Ee=0,Fe=me.length;Ee<Fe;Ee++){const Ke=i.get(me[Ee]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&ce(y)===!1){const me=ie?v:[v];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Ee=0;Ee<me.length;Ee++){const Fe=me[Ee];U.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[Ee]);const Ke=s.convert(Fe.format,Fe.colorSpace),ve=s.convert(Fe.type),Ge=Y(Fe.internalFormat,Ke,ve,Fe.colorSpace,y.isXRRenderTarget===!0),Ue=j(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ge,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,U.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),g(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),O(n.TEXTURE_CUBE_MAP,v,Se);for(let me=0;me<6;me++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)Ce(U.__webglFramebuffer[me][Ee],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee);else Ce(U.__webglFramebuffer[me],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);P(v,Se)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const me=y.texture;for(let Ee=0,Fe=me.length;Ee<Fe;Ee++){const Ke=me[Ee],ve=i.get(Ke);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),O(n.TEXTURE_2D,Ke,Se),Ce(U.__webglFramebuffer,y,Ke,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),P(Ke,Se)&&L(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?me=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,K.__webglTexture),O(me,v,Se),a&&v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)Ce(U.__webglFramebuffer[Ee],y,v,n.COLOR_ATTACHMENT0,me,Ee);else Ce(U.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,me,0);P(v,Se)&&L(me),t.unbindTexture()}y.depthBuffer&&R(y)}function $(y){const v=b(y)||a,U=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let K=0,ee=U.length;K<ee;K++){const ie=U[K];if(P(ie,v)){const Se=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(ie).__webglTexture;t.bindTexture(Se,me),L(Se),t.unbindTexture()}}}function oe(y){if(a&&y.samples>0&&ce(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],U=y.width,K=y.height;let ee=n.COLOR_BUFFER_BIT;const ie=[],Se=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(y),Ee=y.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Fe=0;Fe<v.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Fe=0;Fe<v.length;Fe++){ie.push(n.COLOR_ATTACHMENT0+Fe),y.depthBuffer&&ie.push(Se);const Ke=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ke===!1&&(y.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),Ee&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[Fe]),Ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),Ee){const ve=i.get(v[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,U,K,0,0,U,K,ee,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let Fe=0;Fe<v.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,me.__webglColorRenderbuffer[Fe]);const Ke=i.get(v[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function j(y){return Math.min(d,y.samples)}function ce(y){const v=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function se(y){const v=o.render.frame;x.get(y)!==v&&(x.set(y,v),y.update())}function Te(y,v){const U=y.colorSpace,K=y.format,ee=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===za||U!==jn&&U!==un&&(ot.getTransfer(U)===dt?a===!1?e.has("EXT_sRGB")===!0&&K===xn?(y.format=za,y.minFilter=an,y.generateMipmaps=!1):v=af.sRGBToLinear(v):(K!==xn||ee!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=re,this.resetTextureUnits=k,this.setTexture2D=ae,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=q,this.rebindTextures=F,this.setupRenderTarget=B,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ce}function Oy(n,e,t){const i=t.isWebGL2;function r(s,o=un){let a;const l=ot.getTransfer(o);if(s===di)return n.UNSIGNED_BYTE;if(s===Zd)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Jd)return n.UNSIGNED_SHORT_5_5_5_1;if(s===mg)return n.BYTE;if(s===gg)return n.SHORT;if(s===pl)return n.UNSIGNED_SHORT;if(s===Kd)return n.INT;if(s===si)return n.UNSIGNED_INT;if(s===oi)return n.FLOAT;if(s===ls)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_g)return n.ALPHA;if(s===xn)return n.RGBA;if(s===vg)return n.LUMINANCE;if(s===xg)return n.LUMINANCE_ALPHA;if(s===Ui)return n.DEPTH_COMPONENT;if(s===Er)return n.DEPTH_STENCIL;if(s===za)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===yg)return n.RED;if(s===Qd)return n.RED_INTEGER;if(s===Mg)return n.RG;if(s===ef)return n.RG_INTEGER;if(s===tf)return n.RGBA_INTEGER;if(s===Vo||s===Wo||s===Xo||s===qo)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vc||s===xc||s===yc||s===Mc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sc||s===Ec)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sc)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ec)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bc||s===Tc||s===Ac||s===Cc||s===wc||s===Rc||s===Pc||s===Lc||s===Ic||s===Uc||s===Dc||s===Oc||s===Nc||s===Fc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===bc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ac)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ic)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Oc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jo||s===Bc||s===Hc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===jo)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sg||s===kc||s===zc||s===Gc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===jo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===kc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ii?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Ny extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class js extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fy={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class By extends Ir{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,x=null;const _=t.getContextAttributes();let p=null,h=null;const T=[],S=[],b=new lt;let C=null;const P=new tn;P.layers.enable(1),P.viewport=new wt;const L=new tn;L.layers.enable(2),L.viewport=new wt;const Y=[P,L],M=new Ny;M.layers.enable(1),M.layers.enable(2);let w=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let de=T[q];return de===void 0&&(de=new va,T[q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(q){let de=T[q];return de===void 0&&(de=new va,T[q]=de),de.getGripSpace()},this.getHand=function(q){let de=T[q];return de===void 0&&(de=new va,T[q]=de),de.getHandSpace()};function ne(q){const de=S.indexOf(q.inputSource);if(de===-1)return;const be=T[de];be!==void 0&&(be.update(q.inputSource,q.frame,c||o),be.dispatchEvent({type:q.type,data:q.inputSource}))}function pe(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",pe),r.removeEventListener("inputsourceschange",D);for(let q=0;q<T.length;q++){const de=S[q];de!==null&&(S[q]=null,T[q].disconnect(de))}w=null,Q=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,h=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",pe),r.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Fi(m.framebufferWidth,m.framebufferHeight,{format:xn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let de=null,be=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=_.stencil?Er:Ui,be=_.stencil?Ii:si);const O={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(O),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Fi(f.textureWidth,f.textureHeight,{format:xn,type:di,depthTexture:new xf(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const le=e.properties.get(h);le.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(q){for(let de=0;de<q.removed.length;de++){const be=q.removed[de],Ae=S.indexOf(be);Ae>=0&&(S[Ae]=null,T[Ae].disconnect(be))}for(let de=0;de<q.added.length;de++){const be=q.added[de];let Ae=S.indexOf(be);if(Ae===-1){for(let le=0;le<T.length;le++)if(le>=S.length){S.push(be),Ae=le;break}else if(S[le]===null){S[le]=be,Ae=le;break}if(Ae===-1)break}const O=T[Ae];O&&O.connect(be)}}const X=new V,Z=new V;function k(q,de,be){X.setFromMatrixPosition(de.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);const Ae=X.distanceTo(Z),O=de.projectionMatrix.elements,le=be.projectionMatrix.elements,J=O[14]/(O[10]-1),he=O[14]/(O[10]+1),Ce=(O[9]+1)/O[5],g=(O[9]-1)/O[5],A=(O[8]-1)/O[0],R=(le[8]+1)/le[0],F=J*A,B=J*R,$=Ae/(-A+R),oe=$*-A;de.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(oe),q.translateZ($),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const j=J+$,ce=he+$,se=F-oe,Te=B+(Ae-oe),y=Ce*he/ce*j,v=g*he/ce*j;q.projectionMatrix.makePerspective(se,Te,y,v,j,ce),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function re(q,de){de===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(de.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;M.near=L.near=P.near=q.near,M.far=L.far=P.far=q.far,(w!==M.near||Q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,Q=M.far);const de=q.parent,be=M.cameras;re(M,de);for(let Ae=0;Ae<be.length;Ae++)re(be[Ae],de);be.length===2?k(M,P,L):M.projectionMatrix.copy(P.projectionMatrix),ue(q,M,de)};function ue(q,de,be){be===null?q.matrix.copy(de.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(de.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(de.projectionMatrix),q.projectionMatrixInverse.copy(de.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ga*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let ae=null;function ge(q,de){if(u=de.getViewerPose(c||o),x=de,u!==null){const be=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let Ae=!1;be.length!==M.cameras.length&&(M.cameras.length=0,Ae=!0);for(let O=0;O<be.length;O++){const le=be[O];let J=null;if(m!==null)J=m.getViewport(le);else{const Ce=d.getViewSubImage(f,le);J=Ce.viewport,O===0&&(e.setRenderTargetTextures(h,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(h))}let he=Y[O];he===void 0&&(he=new tn,he.layers.enable(O),he.viewport=new wt,Y[O]=he),he.matrix.fromArray(le.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(le.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(J.x,J.y,J.width,J.height),O===0&&(M.matrix.copy(he.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ae===!0&&M.cameras.push(he)}}for(let be=0;be<T.length;be++){const Ae=S[be],O=T[be];Ae!==null&&O!==void 0&&O.update(Ae,de,c||o)}ae&&ae(q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),x=null}const _e=new vf;_e.setAnimationLoop(ge),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}function Hy(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,pf(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,T,S,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,T,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===jt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===jt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===jt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ky(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,S){const b=S.program;i.uniformBlockBinding(T,b)}function c(T,S){let b=r[T.id];b===void 0&&(x(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",p));const C=S.program;i.updateUBOMapping(T,C);const P=e.render.frame;s[T.id]!==P&&(f(T),s[T.id]=P)}function u(T){const S=d();T.__bindingPointIndex=S;const b=n.createBuffer(),C=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=r[T.id],b=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,L=b.length;P<L;P++){const Y=b[P];if(m(Y,P,C)===!0){const M=Y.__offset,w=Array.isArray(Y.value)?Y.value:[Y.value];let Q=0;for(let ne=0;ne<w.length;ne++){const pe=w[ne],D=_(pe);typeof pe=="number"?(Y.__data[0]=pe,n.bufferSubData(n.UNIFORM_BUFFER,M+Q,Y.__data)):pe.isMatrix3?(Y.__data[0]=pe.elements[0],Y.__data[1]=pe.elements[1],Y.__data[2]=pe.elements[2],Y.__data[3]=pe.elements[0],Y.__data[4]=pe.elements[3],Y.__data[5]=pe.elements[4],Y.__data[6]=pe.elements[5],Y.__data[7]=pe.elements[0],Y.__data[8]=pe.elements[6],Y.__data[9]=pe.elements[7],Y.__data[10]=pe.elements[8],Y.__data[11]=pe.elements[0]):(pe.toArray(Y.__data,Q),Q+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,Y.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,S,b){const C=T.value;if(b[S]===void 0){if(typeof C=="number")b[S]=C;else{const P=Array.isArray(C)?C:[C],L=[];for(let Y=0;Y<P.length;Y++)L.push(P[Y].clone());b[S]=L}return!0}else if(typeof C=="number"){if(b[S]!==C)return b[S]=C,!0}else{const P=Array.isArray(b[S])?b[S]:[b[S]],L=Array.isArray(C)?C:[C];for(let Y=0;Y<P.length;Y++){const M=P[Y];if(M.equals(L[Y])===!1)return M.copy(L[Y]),!0}}return!1}function x(T){const S=T.uniforms;let b=0;const C=16;let P=0;for(let L=0,Y=S.length;L<Y;L++){const M=S[L],w={boundary:0,storage:0},Q=Array.isArray(M.value)?M.value:[M.value];for(let ne=0,pe=Q.length;ne<pe;ne++){const D=Q[ne],X=_(D);w.boundary+=X.boundary,w.storage+=X.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,L>0){P=b%C;const ne=C-P;P!==0&&ne-w.boundary<0&&(b+=C-P,M.__offset=b)}b+=w.storage}return P=b%C,P>0&&(b+=C-P),T.__size=b,T.__cache={},this}function _(T){const S={boundary:0,storage:0};return typeof T=="number"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){const S=T.target;S.removeEventListener("dispose",p);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class xl{constructor(e={}){const{canvas:t=Og(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const h=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;const S=this;let b=!1,C=0,P=0,L=null,Y=-1,M=null;const w=new wt,Q=new wt;let ne=null;const pe=new at(0);let D=0,X=t.width,Z=t.height,k=1,re=null,ue=null;const ae=new wt(0,0,X,Z),ge=new wt(0,0,X,Z);let _e=!1;const q=new _f;let de=!1,be=!1,Ae=null;const O=new Rt,le=new lt,J=new V,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return L===null?k:1}let g=i;function A(E,N){for(let G=0;G<E.length;G++){const W=E[G],z=t.getContext(W,N);if(z!==null)return z}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hl}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",Re,!1),g===null){const N=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&N.shift(),g=A(N,E),g===null)throw A(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let R,F,B,$,oe,j,ce,se,Te,y,v,U,K,ee,ie,Se,me,Ee,Fe,Ke,ve,Ge,Ue,Be;function Oe(){R=new Z0(g),F=new W0(g,R,e),R.init(F),Ge=new Oy(g,R,F),B=new Uy(g,R,F),$=new ex(g),oe=new xy,j=new Dy(g,R,B,oe,F,Ge,$),ce=new q0(S),se=new K0(S),Te=new a_(g,F),Ue=new G0(g,R,Te,F),y=new J0(g,Te,$,Ue),v=new rx(g,y,Te,$),Fe=new ix(g,F,j),Se=new X0(oe),U=new vy(S,ce,se,R,F,Ue,Se),K=new Hy(S,oe),ee=new My,ie=new Cy(R,F),Ee=new z0(S,ce,se,B,v,f,l),me=new Iy(S,v,F),Be=new ky(g,$,F,B),Ke=new V0(g,R,$,F),ve=new Q0(g,R,$,F),$.programs=U.programs,S.capabilities=F,S.extensions=R,S.properties=oe,S.renderLists=ee,S.shadowMap=me,S.state=B,S.info=$}Oe();const Le=new By(S,g);this.xr=Le,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const E=R.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=R.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(X,Z,!1))},this.getSize=function(E){return E.set(X,Z)},this.setSize=function(E,N,G=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,Z=N,t.width=Math.floor(E*k),t.height=Math.floor(N*k),G===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*k,Z*k).floor()},this.setDrawingBufferSize=function(E,N,G){X=E,Z=N,k=G,t.width=Math.floor(E*G),t.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,N,G,W){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,N,G,W),B.viewport(w.copy(ae).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy(ge)},this.setScissor=function(E,N,G,W){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,N,G,W),B.scissor(Q.copy(ge).multiplyScalar(k).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(E){B.setScissorTest(_e=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,N=!0,G=!0){let W=0;if(E){let z=!1;if(L!==null){const Pe=L.texture.format;z=Pe===tf||Pe===ef||Pe===Qd}if(z){const Pe=L.texture.type,Ie=Pe===di||Pe===si||Pe===pl||Pe===Ii||Pe===Zd||Pe===Jd,He=Ee.getClearColor(),ze=Ee.getClearAlpha(),je=He.r,Ve=He.g,Xe=He.b;Ie?(m[0]=je,m[1]=Ve,m[2]=Xe,m[3]=ze,g.clearBufferuiv(g.COLOR,0,m)):(x[0]=je,x[1]=Ve,x[2]=Xe,x[3]=ze,g.clearBufferiv(g.COLOR,0,x))}else W|=g.COLOR_BUFFER_BIT}N&&(W|=g.DEPTH_BUFFER_BIT),G&&(W|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),ee.dispose(),ie.dispose(),oe.dispose(),ce.dispose(),se.dispose(),v.dispose(),Ue.dispose(),Be.dispose(),U.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Bt),Le.removeEventListener("sessionend",ct),Ae&&(Ae.dispose(),Ae=null),Ht.stop()};function Ze(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=$.autoReset,N=me.enabled,G=me.autoUpdate,W=me.needsUpdate,z=me.type;Oe(),$.autoReset=E,me.enabled=N,me.autoUpdate=G,me.needsUpdate=W,me.type=z}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function xe(E){const N=E.target;N.removeEventListener("dispose",xe),te(N)}function te(E){ye(E),oe.remove(E)}function ye(E){const N=oe.get(E).programs;N!==void 0&&(N.forEach(function(G){U.releaseProgram(G)}),E.isShaderMaterial&&U.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,W,z,Pe){N===null&&(N=he);const Ie=z.isMesh&&z.matrixWorld.determinant()<0,He=zf(E,N,G,W,z);B.setMaterial(W,Ie);let ze=G.index,je=1;if(W.wireframe===!0){if(ze=y.getWireframeAttribute(G),ze===void 0)return;je=2}const Ve=G.drawRange,Xe=G.attributes.position;let _t=Ve.start*je,Jt=(Ve.start+Ve.count)*je;Pe!==null&&(_t=Math.max(_t,Pe.start*je),Jt=Math.min(Jt,(Pe.start+Pe.count)*je)),ze!==null?(_t=Math.max(_t,0),Jt=Math.min(Jt,ze.count)):Xe!=null&&(_t=Math.max(_t,0),Jt=Math.min(Jt,Xe.count));const bt=Jt-_t;if(bt<0||bt===1/0)return;Ue.setup(z,W,He,G,ze);let Un,pt=Ke;if(ze!==null&&(Un=Te.get(ze),pt=ve,pt.setIndex(Un)),z.isMesh)W.wireframe===!0?(B.setLineWidth(W.wireframeLinewidth*Ce()),pt.setMode(g.LINES)):pt.setMode(g.TRIANGLES);else if(z.isLine){let Ye=W.linewidth;Ye===void 0&&(Ye=1),B.setLineWidth(Ye*Ce()),z.isLineSegments?pt.setMode(g.LINES):z.isLineLoop?pt.setMode(g.LINE_LOOP):pt.setMode(g.LINE_STRIP)}else z.isPoints?pt.setMode(g.POINTS):z.isSprite&&pt.setMode(g.TRIANGLES);if(z.isBatchedMesh)pt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)pt.renderInstances(_t,bt,z.count);else if(G.isInstancedBufferGeometry){const Ye=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Uo=Math.min(G.instanceCount,Ye);pt.renderInstances(_t,bt,Uo)}else pt.render(_t,bt)};function ke(E,N,G){E.transparent===!0&&E.side===Gn&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,_s(E,N,G),E.side=pi,E.needsUpdate=!0,_s(E,N,G),E.side=Gn):_s(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),p=ie.get(G),p.init(),T.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(S._useLegacyLights);const W=new Set;return E.traverse(function(z){const Pe=z.material;if(Pe)if(Array.isArray(Pe))for(let Ie=0;Ie<Pe.length;Ie++){const He=Pe[Ie];ke(He,G,z),W.add(He)}else ke(Pe,G,z),W.add(Pe)}),T.pop(),p=null,W},this.compileAsync=function(E,N,G=null){const W=this.compile(E,N,G);return new Promise(z=>{function Pe(){if(W.forEach(function(Ie){oe.get(Ie).currentProgram.isReady()&&W.delete(Ie)}),W.size===0){z(E);return}setTimeout(Pe,10)}R.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Qe=null;function Et(E){Qe&&Qe(E)}function Bt(){Ht.stop()}function ct(){Ht.start()}const Ht=new vf;Ht.setAnimationLoop(Et),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(E){Qe=E,Le.setAnimationLoop(E),E===null?Ht.stop():Ht.start()},Le.addEventListener("sessionstart",Bt),Le.addEventListener("sessionend",ct),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(N),N=Le.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,N,L),p=ie.get(E,T.length),p.init(),T.push(p),O.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(O),be=this.localClippingEnabled,de=Se.init(this.clippingPlanes,be),_=ee.get(E,h.length),_.init(),h.push(_),Tn(E,N,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(re,ue),this.info.render.frame++,de===!0&&Se.beginShadows();const G=p.state.shadowsArray;if(me.render(G,E,N),de===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(_,E),p.setupLights(S._useLegacyLights),N.isArrayCamera){const W=N.cameras;for(let z=0,Pe=W.length;z<Pe;z++){const Ie=W[z];El(_,E,Ie,Ie.viewport)}}else El(_,E,N);L!==null&&(j.updateMultisampleRenderTarget(L),j.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(S,E,N),Ue.resetDefaultState(),Y=-1,M=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Tn(E,N,G,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){W&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(O);const Ie=v.update(E),He=E.material;He.visible&&_.push(E,Ie,He,G,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const Ie=v.update(E),He=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),J.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),J.copy(Ie.boundingSphere.center)),J.applyMatrix4(E.matrixWorld).applyMatrix4(O)),Array.isArray(He)){const ze=Ie.groups;for(let je=0,Ve=ze.length;je<Ve;je++){const Xe=ze[je],_t=He[Xe.materialIndex];_t&&_t.visible&&_.push(E,Ie,_t,G,J.z,Xe)}}else He.visible&&_.push(E,Ie,He,G,J.z,null)}}const Pe=E.children;for(let Ie=0,He=Pe.length;Ie<He;Ie++)Tn(Pe[Ie],N,G,W)}function El(E,N,G,W){const z=E.opaque,Pe=E.transmissive,Ie=E.transparent;p.setupLightsView(G),de===!0&&Se.setGlobalState(S.clippingPlanes,G),Pe.length>0&&kf(z,Pe,N,G),W&&B.viewport(w.copy(W)),z.length>0&&gs(z,N,G),Pe.length>0&&gs(Pe,N,G),Ie.length>0&&gs(Ie,N,G),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function kf(E,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const Pe=F.isWebGL2;Ae===null&&(Ae=new Fi(1,1,{generateMipmaps:!0,type:R.has("EXT_color_buffer_half_float")?ls:di,minFilter:as,samples:Pe?4:0})),S.getDrawingBufferSize(le),Pe?Ae.setSize(le.x,le.y):Ae.setSize(Va(le.x),Va(le.y));const Ie=S.getRenderTarget();S.setRenderTarget(Ae),S.getClearColor(pe),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear();const He=S.toneMapping;S.toneMapping=ui,gs(E,G,W),j.updateMultisampleRenderTarget(Ae),j.updateRenderTargetMipmap(Ae);let ze=!1;for(let je=0,Ve=N.length;je<Ve;je++){const Xe=N[je],_t=Xe.object,Jt=Xe.geometry,bt=Xe.material,Un=Xe.group;if(bt.side===Gn&&_t.layers.test(W.layers)){const pt=bt.side;bt.side=jt,bt.needsUpdate=!0,bl(_t,G,W,Jt,bt,Un),bt.side=pt,bt.needsUpdate=!0,ze=!0}}ze===!0&&(j.updateMultisampleRenderTarget(Ae),j.updateRenderTargetMipmap(Ae)),S.setRenderTarget(Ie),S.setClearColor(pe,D),S.toneMapping=He}function gs(E,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let z=0,Pe=E.length;z<Pe;z++){const Ie=E[z],He=Ie.object,ze=Ie.geometry,je=W===null?Ie.material:W,Ve=Ie.group;He.layers.test(G.layers)&&bl(He,N,G,ze,je,Ve)}}function bl(E,N,G,W,z,Pe){E.onBeforeRender(S,N,G,W,z,Pe),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(S,N,G,W,E,Pe),z.transparent===!0&&z.side===Gn&&z.forceSinglePass===!1?(z.side=jt,z.needsUpdate=!0,S.renderBufferDirect(G,N,W,z,E,Pe),z.side=pi,z.needsUpdate=!0,S.renderBufferDirect(G,N,W,z,E,Pe),z.side=Gn):S.renderBufferDirect(G,N,W,z,E,Pe),E.onAfterRender(S,N,G,W,z,Pe)}function _s(E,N,G){N.isScene!==!0&&(N=he);const W=oe.get(E),z=p.state.lights,Pe=p.state.shadowsArray,Ie=z.state.version,He=U.getParameters(E,z.state,Pe,N,G),ze=U.getProgramCacheKey(He);let je=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?se:ce).get(E.envMap||W.environment),je===void 0&&(E.addEventListener("dispose",xe),je=new Map,W.programs=je);let Ve=je.get(ze);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Ie)return Al(E,He),Ve}else He.uniforms=U.getUniforms(E),E.onBuild(G,He,S),E.onBeforeCompile(He,S),Ve=U.acquireProgram(He,ze),je.set(ze,Ve),W.uniforms=He.uniforms;const Xe=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),Al(E,He),W.needsLights=Vf(E),W.lightsStateVersion=Ie,W.needsLights&&(Xe.ambientLightColor.value=z.state.ambient,Xe.lightProbe.value=z.state.probe,Xe.directionalLights.value=z.state.directional,Xe.directionalLightShadows.value=z.state.directionalShadow,Xe.spotLights.value=z.state.spot,Xe.spotLightShadows.value=z.state.spotShadow,Xe.rectAreaLights.value=z.state.rectArea,Xe.ltc_1.value=z.state.rectAreaLTC1,Xe.ltc_2.value=z.state.rectAreaLTC2,Xe.pointLights.value=z.state.point,Xe.pointLightShadows.value=z.state.pointShadow,Xe.hemisphereLights.value=z.state.hemi,Xe.directionalShadowMap.value=z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Xe.spotShadowMap.value=z.state.spotShadowMap,Xe.spotLightMatrix.value=z.state.spotLightMatrix,Xe.spotLightMap.value=z.state.spotLightMap,Xe.pointShadowMap.value=z.state.pointShadowMap,Xe.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function Tl(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=eo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Al(E,N){const G=oe.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function zf(E,N,G,W,z){N.isScene!==!0&&(N=he),j.resetTextureUnits();const Pe=N.fog,Ie=W.isMeshStandardMaterial?N.environment:null,He=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:jn,ze=(W.isMeshStandardMaterial?se:ce).get(W.envMap||Ie),je=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xe=!!G.morphAttributes.position,_t=!!G.morphAttributes.normal,Jt=!!G.morphAttributes.color;let bt=ui;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(bt=S.toneMapping);const Un=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=Un!==void 0?Un.length:0,Ye=oe.get(W),Uo=p.state.lights;if(de===!0&&(be===!0||E!==M)){const sn=E===M&&W.id===Y;Se.setState(W,E,sn)}let gt=!1;W.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Uo.state.version||Ye.outputColorSpace!==He||z.isBatchedMesh&&Ye.batching===!1||!z.isBatchedMesh&&Ye.batching===!0||z.isInstancedMesh&&Ye.instancing===!1||!z.isInstancedMesh&&Ye.instancing===!0||z.isSkinnedMesh&&Ye.skinning===!1||!z.isSkinnedMesh&&Ye.skinning===!0||z.isInstancedMesh&&Ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ye.instancingColor===!1&&z.instanceColor!==null||Ye.envMap!==ze||W.fog===!0&&Ye.fog!==Pe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==Ve||Ye.morphTargets!==Xe||Ye.morphNormals!==_t||Ye.morphColors!==Jt||Ye.toneMapping!==bt||F.isWebGL2===!0&&Ye.morphTargetsCount!==pt)&&(gt=!0):(gt=!0,Ye.__version=W.version);let mi=Ye.currentProgram;gt===!0&&(mi=_s(W,N,z));let Cl=!1,Or=!1,Do=!1;const Lt=mi.getUniforms(),gi=Ye.uniforms;if(B.useProgram(mi.program)&&(Cl=!0,Or=!0,Do=!0),W.id!==Y&&(Y=W.id,Or=!0),Cl||M!==E){Lt.setValue(g,"projectionMatrix",E.projectionMatrix),Lt.setValue(g,"viewMatrix",E.matrixWorldInverse);const sn=Lt.map.cameraPosition;sn!==void 0&&sn.setValue(g,J.setFromMatrixPosition(E.matrixWorld)),F.logarithmicDepthBuffer&&Lt.setValue(g,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Lt.setValue(g,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Or=!0,Do=!0)}if(z.isSkinnedMesh){Lt.setOptional(g,z,"bindMatrix"),Lt.setOptional(g,z,"bindMatrixInverse");const sn=z.skeleton;sn&&(F.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Lt.setValue(g,"boneTexture",sn.boneTexture,j)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Lt.setOptional(g,z,"batchingTexture"),Lt.setValue(g,"batchingTexture",z._matricesTexture,j));const Oo=G.morphAttributes;if((Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0&&F.isWebGL2===!0)&&Fe.update(z,G,mi),(Or||Ye.receiveShadow!==z.receiveShadow)&&(Ye.receiveShadow=z.receiveShadow,Lt.setValue(g,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gi.envMap.value=ze,gi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Or&&(Lt.setValue(g,"toneMappingExposure",S.toneMappingExposure),Ye.needsLights&&Gf(gi,Do),Pe&&W.fog===!0&&K.refreshFogUniforms(gi,Pe),K.refreshMaterialUniforms(gi,W,k,Z,Ae),eo.upload(g,Tl(Ye),gi,j)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(eo.upload(g,Tl(Ye),gi,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Lt.setValue(g,"center",z.center),Lt.setValue(g,"modelViewMatrix",z.modelViewMatrix),Lt.setValue(g,"normalMatrix",z.normalMatrix),Lt.setValue(g,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const sn=W.uniformsGroups;for(let No=0,Wf=sn.length;No<Wf;No++)if(F.isWebGL2){const wl=sn[No];Be.update(wl,mi),Be.bind(wl,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function Gf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Vf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,N,G){oe.get(E.texture).__webglTexture=N,oe.get(E.depthTexture).__webglTexture=G;const W=oe.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||R.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const G=oe.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){L=E,C=N,P=G;let W=!0,z=null,Pe=!1,Ie=!1;if(E){const ze=oe.get(E);ze.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(g.FRAMEBUFFER,null),W=!1):ze.__webglFramebuffer===void 0?j.setupRenderTarget(E):ze.__hasExternalTextures&&j.rebindTextures(E,oe.get(E.texture).__webglTexture,oe.get(E.depthTexture).__webglTexture);const je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const Ve=oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?z=Ve[N][G]:z=Ve[N],Pe=!0):F.isWebGL2&&E.samples>0&&j.useMultisampledRTT(E)===!1?z=oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[G]:z=Ve,w.copy(E.viewport),Q.copy(E.scissor),ne=E.scissorTest}else w.copy(ae).multiplyScalar(k).floor(),Q.copy(ge).multiplyScalar(k).floor(),ne=_e;if(B.bindFramebuffer(g.FRAMEBUFFER,z)&&F.drawBuffers&&W&&B.drawBuffers(E,z),B.viewport(w),B.scissor(Q),B.setScissorTest(ne),Pe){const ze=oe.get(E.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+N,ze.__webglTexture,G)}else if(Ie){const ze=oe.get(E.texture),je=N||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,ze.__webglTexture,G||0,je)}Y=-1},this.readRenderTargetPixels=function(E,N,G,W,z,Pe,Ie){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){B.bindFramebuffer(g.FRAMEBUFFER,He);try{const ze=E.texture,je=ze.format,Ve=ze.type;if(je!==xn&&Ge.convert(je)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ve===ls&&(R.has("EXT_color_buffer_half_float")||F.isWebGL2&&R.has("EXT_color_buffer_float"));if(Ve!==di&&Ge.convert(Ve)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===oi&&(F.isWebGL2||R.has("OES_texture_float")||R.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&G>=0&&G<=E.height-z&&g.readPixels(N,G,W,z,Ge.convert(je),Ge.convert(Ve),Pe)}finally{const ze=L!==null?oe.get(L).__webglFramebuffer:null;B.bindFramebuffer(g.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(E,N,G=0){const W=Math.pow(2,-G),z=Math.floor(N.image.width*W),Pe=Math.floor(N.image.height*W);j.setTexture2D(N,0),g.copyTexSubImage2D(g.TEXTURE_2D,G,0,0,E.x,E.y,z,Pe),B.unbindTexture()},this.copyTextureToTexture=function(E,N,G,W=0){const z=N.image.width,Pe=N.image.height,Ie=Ge.convert(G.format),He=Ge.convert(G.type);j.setTexture2D(G,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,G.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,W,E.x,E.y,z,Pe,Ie,He,N.image.data):N.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,W,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Ie,N.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,W,E.x,E.y,Ie,He,N.image),W===0&&G.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(E,N,G,W,z=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=E.max.x-E.min.x+1,Ie=E.max.y-E.min.y+1,He=E.max.z-E.min.z+1,ze=Ge.convert(W.format),je=Ge.convert(W.type);let Ve;if(W.isData3DTexture)j.setTexture3D(W,0),Ve=g.TEXTURE_3D;else if(W.isDataArrayTexture)j.setTexture2DArray(W,0),Ve=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,W.unpackAlignment);const Xe=g.getParameter(g.UNPACK_ROW_LENGTH),_t=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Jt=g.getParameter(g.UNPACK_SKIP_PIXELS),bt=g.getParameter(g.UNPACK_SKIP_ROWS),Un=g.getParameter(g.UNPACK_SKIP_IMAGES),pt=G.isCompressedTexture?G.mipmaps[0]:G.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,pt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,pt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,E.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,E.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?g.texSubImage3D(Ve,z,N.x,N.y,N.z,Pe,Ie,He,ze,je,pt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(Ve,z,N.x,N.y,N.z,Pe,Ie,He,ze,pt.data)):g.texSubImage3D(Ve,z,N.x,N.y,N.z,Pe,Ie,He,ze,je,pt),g.pixelStorei(g.UNPACK_ROW_LENGTH,Xe),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,_t),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Jt),g.pixelStorei(g.UNPACK_SKIP_ROWS,bt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Un),z===0&&W.generateMipmaps&&g.generateMipmap(Ve),B.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?j.setTextureCube(E,0):E.isData3DTexture?j.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?j.setTexture2DArray(E,0):j.setTexture2D(E,0),B.unbindTexture()},this.resetState=function(){C=0,P=0,L=null,B.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ml?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===wo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Di:rf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Di?At:jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zy extends xl{}zy.prototype.isWebGL1Renderer=!0;class Tf extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const Lu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Gy{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const Vy=new Gy;class yl{constructor(e){this.manager=e!==void 0?e:Vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Wy extends yl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Lu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=cs("img");function l(){u(),Lu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ln extends yl{constructor(e){super(e)}load(e,t,i,r){const s=new Yt,o=new Wy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);const Xy={props:["busy"],emits:["dice-roll","double-roll"],data(){return{rolling:!1,rollResult:[1,1]}},mounted(){this.init()},methods:{init(){const n=new Tf;n.matrixAutoUpdate=!0;const e=new tn(60,window.innerWidth/window.innerHeight,.1,1e3),t=new xl({alpha:!0,antialias:!0});t.shadowMap.enabled=!0,t.setPixelRatio(window.devicePixelRatio),window.innerWidth<window.innerHeight?t.setSize(window.innerWidth,window.innerWidth,!0):t.setSize(window.innerHeight,window.innerHeight,!0),this.$refs.canvasContainer.appendChild(t.domElement),e.position.set(window.devicePixelRatio,Math.pow(5,window.devicePixelRatio),4*window.devicePixelRatio),e.lookAt(new V(0,0,0));const i=this.createDice(),r=this.createDice();n.add(i),n.add(r),i.position.x=-2,r.position.x=1.5;const s=()=>{requestAnimationFrame(s),this.rolling?(i.rotation.x+=.25,i.rotation.z+=.2,r.rotation.x+=.25,r.rotation.z+=.2):(i.rotation.x=0,i.rotation.y=0,i.rotation.z=0,r.rotation.x=0,r.rotation.y=0,r.rotation.z=0,this.rollResult[0]===2?i.rotation.x=4.8:this.rollResult[0]===3?i.rotation.z=1.6:this.rollResult[0]===4?i.rotation.z=4.8:this.rollResult[0]===5?i.rotation.x=1.6:this.rollResult[0]===6&&(i.rotation.z=3.2),this.rollResult[1]===2?r.rotation.x=4.8:this.rollResult[1]===3?r.rotation.z=1.6:this.rollResult[1]===4?r.rotation.z=4.8:this.rollResult[1]===5?r.rotation.x=1.6:this.rollResult[1]===6&&(r.rotation.z=3.2)),t.render(n,e)};s()},createDice(){const n=new Gi,e=[new qt({map:new ln().load("/src/assets/3.png")}),new qt({map:new ln().load("/src/assets/4.png")}),new qt({map:new ln().load("/src/assets/1.png")}),new qt({map:new ln().load("/src/assets/6.png")}),new qt({map:new ln().load("/src/assets/2.png")}),new qt({map:new ln().load("/src/assets/5.png")})];return new Pn(n,e)},rollDice(){this.busy||this.rolling||(this.rolling=!0,setTimeout(()=>{this.rollResult=[Iu(),Iu()],this.rolling=!1,this.rollResult[0]===this.rollResult[1]?this.$emit("double-roll",this.rollResult[0]+this.rollResult[1]):this.$emit("dice-roll",this.rollResult[0]+this.rollResult[1])},1e3))}}};function Iu(){return Math.floor(Math.random()*6)+1}function qy(n,e,t,i,r,s){return fe(),we("div",{onClick:e[0]||(e[0]=(...o)=>s.rollDice&&s.rollDice(...o)),ref:"canvasContainer",class:"canvas-container"},null,512)}const Af=mt(Xy,[["render",qy],["__scopeId","data-v-a74d35e5"]]);const jy={props:["busy"],emits:["dice-roll"],data(){return{rolling:!1,rollResult:[1]}},mounted(){this.init()},methods:{init(){const n=new Tf;n.matrixAutoUpdate=!0;const e=new tn(60,window.innerWidth/window.innerHeight,.1,1e3),t=new xl({alpha:!0,antialias:!0});t.shadowMap.enabled=!0,t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth*.725,window.innerHeight*.725,!0),this.$refs.canvasContainer.appendChild(t.domElement),e.position.set(1,5,5),e.lookAt(new V(0,0,0));const i=this.createDice();n.add(i);const r=()=>{requestAnimationFrame(r),this.rolling?(i.rotation.x+=.25,i.rotation.z+=.2):(i.rotation.x=0,i.rotation.y=0,i.rotation.z=0,this.rollResult[0]===2?i.rotation.x=4.8:this.rollResult[0]===3?i.rotation.z=1.6:this.rollResult[0]===4?i.rotation.z=4.8:this.rollResult[0]===5?i.rotation.x=1.6:this.rollResult[0]===6&&(i.rotation.z=3.2)),t.render(n,e)};r()},createDice(){const n=new Gi,e=[new qt({map:new ln().load("/src/assets/3.png")}),new qt({map:new ln().load("/src/assets/4.png")}),new qt({map:new ln().load("/src/assets/1.png")}),new qt({map:new ln().load("/src/assets/6.png")}),new qt({map:new ln().load("/src/assets/2.png")}),new qt({map:new ln().load("/src/assets/5.png")})];return new Pn(n,e)},rollDice(){this.busy||this.rolling||(this.rolling=!0,setTimeout(()=>{this.rollResult=[Yy()],this.rolling=!1,this.$emit("dice-roll",this.rollResult[0])},1e3))}}};function Yy(){return Math.floor(Math.random()*6)+1}function $y(n,e,t,i,r,s){return fe(),we("div",{onClick:e[0]||(e[0]=(...o)=>s.rollDice&&s.rollDice(...o)),ref:"canvasContainer",class:"canvas-container"},null,512)}const Cf=mt(jy,[["render",$y],["__scopeId","data-v-96383ddf"]]);const Ky={props:["single","busy"],emits:["dice-roll","double-roll"],components:{Dice:Af,SingleDice:Cf},computed:{doubleShow(){return!this.single},singleShow(){return!!this.single}},methods:{diceRoll(n){this.$emit("dice-roll",n)},doubleRoll(n){this.$emit("double-roll",n)}}},Zy={class:"game-board"},Jy={class:"box-center"},Qy=Pp('<div class="right-container" data-v-4607208a><div id="div39" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div38" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div37" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div36" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div35" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div34" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div33" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div32" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div31" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div30" class="box-corner" data-v-4607208a><div class="first-corner" data-v-4607208a></div><div class="second-corner" data-v-4607208a></div><div class="third-corner" data-v-4607208a></div></div></div><div class="top-container" data-v-4607208a><div id="div29" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div28" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div27" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div26" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div25" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div24" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div23" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div22" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div21" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div20" class="box-corner" data-v-4607208a><div class="first-corner" data-v-4607208a></div><div class="second-corner" data-v-4607208a></div><div class="third-corner" data-v-4607208a></div></div></div><div class="left-container" data-v-4607208a><div id="div19" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div18" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div17" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div16" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div15" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div14" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div13" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div12" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div11" class="box1-container" data-v-4607208a><div class="first1-container first-box" data-v-4607208a></div><div class="second1-container second-box" data-v-4607208a></div><div class="third1-container third-box" data-v-4607208a></div></div><div id="div10" class="box-corner" data-v-4607208a><div class="first-corner" data-v-4607208a></div><div class="second-corner" data-v-4607208a></div><div class="third-corner" data-v-4607208a></div></div></div><div class="bottom-container" data-v-4607208a><div id="div9" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div8" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div7" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div6" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div5" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div4" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div3" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div2" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div1" class="box-container" data-v-4607208a><div class="first-container first-box" data-v-4607208a></div><div class="second-container second-box" data-v-4607208a></div><div class="third-container third-box" data-v-4607208a></div></div><div id="div0" class="box-corner" data-v-4607208a><div class="first-corner" data-v-4607208a></div><div class="second-corner" data-v-4607208a></div><div class="third-corner" data-v-4607208a></div></div></div>',4);function eM(n,e,t,i,r,s){const o=nt("dice"),a=nt("single-dice");return fe(),we("div",Zy,[H("div",Jy,[s.doubleShow?(fe(),tt(o,{key:0,onDiceRoll:s.diceRoll,onDoubleRoll:s.doubleRoll,busy:t.busy},null,8,["onDiceRoll","onDoubleRoll","busy"])):Ne("",!0),s.singleShow?(fe(),tt(a,{key:1,onDiceRoll:s.diceRoll,busy:t.busy},null,8,["onDiceRoll","busy"])):Ne("",!0)]),Qy])}const tM=mt(Ky,[["render",eM],["__scopeId","data-v-4607208a"]]);const nM={props:["images"],data(){return{selectedImage:null}}},iM=n=>(Hi("data-v-5085561b"),n=n(),ki(),n),rM=iM(()=>H("h3",null,"Choose Color",-1)),sM={class:"checkbox-container"},oM=["id","value"];function aM(n,e,t,i,r,s){const o=nt("base-card");return fe(),tt(o,null,{default:st(()=>[rM,H("div",sM,[(fe(!0),we(ht,null,En(t.images,(a,l)=>(fe(),we("div",{class:"checkbox",style:Rr({backgroundColor:a.color})},[cn((fe(),we("input",{class:"checkbox-input",type:"checkbox",id:a.id,value:a.id,key:a.id,"onUpdate:modelValue":e[0]||(e[0]=c=>r.selectedImage=c)},null,8,oM)),[[cm,r.selectedImage]])],4))),256))])]),_:1})}const lM=mt(nM,[["render",aM],["__scopeId","data-v-5085561b"]]),cM={props:["gameLogs"]};function uM(n,e,t,i,r,s){const o=nt("base-card");return fe(),tt(o,null,{header:st(()=>[Ft("Game Log")]),default:st(()=>[H("ul",null,[(fe(!0),we(ht,null,En(t.gameLogs,(a,l)=>(fe(),we("li",{key:l},[H("span",{style:Rr({color:a.actor.image.color})},Je(a.actor.name),5),Ft(Je(a.action),1)]))),128))])]),_:1})}const dM=mt(cM,[["render",uM]]),fM={emits:["pay","bankrupt"]};function hM(n,e,t,i,r,s){const o=nt("base-card");return fe(),tt(o,null,{default:st(()=>[H("button",{onClick:e[0]||(e[0]=a=>n.$emit("pay"))},"Pay"),H("button",{onClick:e[1]||(e[1]=a=>n.$emit("bankrupt"))},"File for Bankruptcy")]),_:1})}const pM=mt(fM,[["render",hM]]);const mM={props:["pickCard"],emits:["change-component"],data(){return{currentComponent:"PlayerDetails"}},watch:{pickCard(){this.currentComponent==="card-option"&&!this.pickCard&&(this.currentComponent="board-details",this.$emit("change-component",this.currentComponent))}},methods:{changeComponent(n){this.currentComponent=n,this.$emit("change-component",n)}}};function gM(n,e,t,i,r,s){const o=nt("base-card");return fe(),we("div",null,[xt(o,null,{default:st(()=>[H("button",{class:nn({active:r.currentComponent==="player-details"}),onClick:e[0]||(e[0]=a=>s.changeComponent("player-details"))}," Players ",2),H("button",{class:nn({active:r.currentComponent==="board-details"}),onClick:e[1]||(e[1]=a=>s.changeComponent("board-details"))}," Board ",2),H("button",{class:nn({active:r.currentComponent==="player-property"}),onClick:e[2]||(e[2]=a=>s.changeComponent("player-property"))}," Assets ",2),H("button",{class:nn({active:r.currentComponent==="trade-property"}),onClick:e[3]||(e[3]=a=>s.changeComponent("trade-property"))}," Trade ",2),H("button",{class:nn({active:r.currentComponent==="game-log"}),onClick:e[4]||(e[4]=a=>s.changeComponent("game-log"))}," Log ",2)]),_:1})])}const _M=mt(mM,[["render",gM],["__scopeId","data-v-d7c724ed"]]);const vM={emits:["cardPicked"],props:["front","back"],data(){return{isFlipped:!1}},methods:{closeCard(){this.isFlipped&&this.$emit("cardPicked")},flipCard(){this.isFlipped?this.$emit("cardPicked"):this.isFlipped=!0}}},xM={class:"flip-card-front"},yM=["src","alt"],MM={class:"flip-card-back"},SM=["src","alt"];function EM(n,e,t,i,r,s){return fe(),tt(Ap,{to:"body"},[H("div",null,[H("div",{class:"backdrop",onClick:e[0]||(e[0]=(...o)=>s.closeCard&&s.closeCard(...o))}),H("div",{class:"flip-card",onClick:e[1]||(e[1]=(...o)=>s.flipCard&&s.flipCard(...o))},[H("div",{class:nn(["flip-card-inner",{flipped:r.isFlipped}])},[H("div",xM,[H("img",{class:"card-image",src:t.front,alt:t.front.cardUrl},null,8,yM)]),H("div",MM,[H("img",{class:"card-image",src:t.back.cardUrl,alt:t.back.cardUrl},null,8,SM)])],2)])])])}const bM=mt(vM,[["render",EM],["__scopeId","data-v-2d9e37df"]]);const TM={data(){return{onCardRoll:!1,currentCard:null,monopolistBackCardUrl:"/src/assets/monopolistCard/monopolistCard.jpg",competitorBackCardUrl:"/src/assets/competitorCard/competitorCard.jpg",activeComponent:"player-details",lastOption:!1,gameLog:[],isPicked:!1,isTrading:!1,onUtility:!1,onAntiMonopolyFoundation:!1,gameStarted:!1,players:[],property:[{id:0,name:"Start",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:1,name:"Basin St.",street:"New Orleans",price:60,pricePerHouse:50,rent:{monopolist:[6,22,32,42,52],competitor:[6,11,16,21,26,31]},monopolistTwoPropertyPrice:12,noOfHouses:0,unMortgagePrice:33,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/basinSt.jpg",mortgageCardUrl:"/src/assets/propertyCard/mBasinSt.jpg"},{id:2,name:"Competitor or Monopolist",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:3,name:"French Quarter",street:"New Orleans",price:60,pricePerHouse:50,rent:{monopolist:[6,22,32,42,52],competitor:[6,11,16,21,26,31]},monopolistTwoPropertyPrice:12,noOfHouses:0,unMortgagePrice:33,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/frenchQuarter.jpg",mortgageCardUrl:"/src/assets/propertyCard/mFrenchQuarter.jpg"},{id:4,name:"Income Tax",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:5,name:"U.S. Railroad",street:"Transportation",price:200,pricePerHouse:0,rent:{monopolist:[40,80,160,320],competitor:[20,20,20,20]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:110,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/usRailroad.jpg",mortgageCardUrl:"/src/assets/propertyCard/mUSRailroad.jpg"},{id:6,name:"Sunset Blvd.",street:"Los Angeles",price:100,pricePerHouse:50,rent:{monopolist:[10,30,40,50,60],competitor:[10,15,20,25,30,35]},monopolistTwoPropertyPrice:20,noOfHouses:0,unMortgagePrice:55,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/sunsetBlvd.jpg",mortgageCardUrl:"/src/assets/propertyCard/mSunsetBlvd.jpg"},{id:7,name:"Competitor or Monopolist",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:8,name:"Wilshire Blvd.",street:"Los Angeles",price:100,pricePerHouse:50,rent:{monopolist:[10,30,40,50,60],competitor:[10,15,20,25,30,35]},monopolistTwoPropertyPrice:20,noOfHouses:0,unMortgagePrice:55,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/wilshireBlvd.jpg",mortgageCardUrl:"/src/assets/propertyCard/mWilshireBlvd.jpg"},{id:9,name:"Hollywood Blvd.",street:"Los Angeles",price:120,pricePerHouse:50,rent:{monopolist:[12,34,44,54,64],competitor:[12,17,22,27,32,37]},monopolistTwoPropertyPrice:24,noOfHouses:0,unMortgagePrice:66,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/hollywoodBlvd.jpg",mortgageCardUrl:"/src/assets/propertyCard/mHollywoodBlvd.jpg"},{id:10,name:"Jail",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:11,name:"Rush St.",street:"Chicago",price:140,pricePerHouse:100,rent:{monopolist:[14,48,68,88,108],competitor:[14,24,34,44,54,64]},monopolistTwoPropertyPrice:28,noOfHouses:0,unMortgagePrice:77,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/rushSt.jpg",mortgageCardUrl:"/src/assets/propertyCard/mRushSt.jpg"},{id:12,name:"Electric Company",street:"Utilities",price:150,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:83,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/electricCompany.jpg",mortgageCardUrl:"/src/assets/propertyCard/mElectricCompany.jpg"},{id:13,name:"State St.",street:"Chicago",price:140,pricePerHouse:100,rent:{monopolist:[14,48,68,88,108],competitor:[14,24,34,44,54,64]},monopolistTwoPropertyPrice:28,noOfHouses:0,unMortgagePrice:77,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/stateSt.jpg",mortgageCardUrl:"/src/assets/propertyCard/mStateSt.jpg"},{id:14,name:"Michigan Ave.",street:"Chicago",price:160,pricePerHouse:100,rent:{monopolist:[16,52,72,92,112],competitor:[16,26,36,46,56,66]},monopolistTwoPropertyPrice:32,noOfHouses:0,unMortgagePrice:88,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/michiganAve.jpg",mortgageCardUrl:"/src/assets/propertyCard/mMichiganAve.jpg"},{id:15,name:"U.S. Bus Company",street:"Transportation",price:200,pricePerHouse:0,rent:{monopolist:[40,80,160,320],competitor:[20,20,20,20]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:110,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/usBusCompany.jpg",mortgageCardUrl:"/src/assets/propertyCard/mUSBusCompany.jpg"},{id:16,name:"Locust St.",street:"Philadelphia",price:180,pricePerHouse:100,rent:{monopolist:[18,56,76,96,116],competitor:[18,28,38,48,58,68]},monopolistTwoPropertyPrice:36,noOfHouses:0,unMortgagePrice:99,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/locustSt.jpg",mortgageCardUrl:"/src/assets/propertyCard/mLocustSt.jpg"},{id:17,name:"Competitor or Monopolist",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:18,name:"Chestnut St.",street:"Philadelphia",price:180,pricePerHouse:100,rent:{monopolist:[18,56,76,96,116],competitor:[18,28,38,48,58,68]},monopolistTwoPropertyPrice:36,noOfHouses:0,unMortgagePrice:99,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/chestnutSt.jpg",mortgageCardUrl:"/src/assets/propertyCard/mChestnutSt.jpg"},{id:19,name:"Walnut St.",street:"Philadelphia",price:200,pricePerHouse:100,rent:{monopolist:[20,60,80,100,120],competitor:[20,30,40,50,60,70]},monopolistTwoPropertyPrice:40,noOfHouses:0,unMortgagePrice:110,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/walnutSt.jpg",mortgageCardUrl:"/src/assets/propertyCard/mWalnutSt.jpg"},{id:20,name:"Anti-monopoly Foundation",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:21,name:"Brattle St.",street:"Boston",price:220,pricePerHouse:150,rent:{monopolist:[22,74,104,134,164],competitor:[22,37,52,67,82,97]},monopolistTwoPropertyPrice:44,noOfHouses:0,unMortgagePrice:121,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/brattleSt.jpg",mortgageCardUrl:"/src/assets/propertyCard/mBrattleSt.jpg"},{id:22,name:"Competitor or Monopolist",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:23,name:"Harvard Square",street:"Boston",price:220,pricePerHouse:150,rent:{monopolist:[22,74,104,134,164],competitor:[22,37,52,67,82,97]},monopolistTwoPropertyPrice:44,noOfHouses:0,unMortgagePrice:121,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/harvardSquare.jpg",mortgageCardUrl:"/src/assets/propertyCard/mHarvardSquare.jpg"},{id:24,name:"Beacon St.",street:"Boston",price:240,pricePerHouse:150,rent:{monopolist:[24,78,108,138,168],competitor:[24,39,54,69,84,99]},monopolistTwoPropertyPrice:48,noOfHouses:0,unMortgagePrice:132,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/beaconSt.jpg",mortgageCardUrl:"/src/assets/propertyCard/mBeaconSt.jpg"},{id:25,name:"U.S. AirLine",street:"Transportation",price:200,pricePerHouse:0,rent:{monopolist:[40,80,160,320],competitor:[20,20,20,20]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:110,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/usAirLine.jpg",mortgageCardUrl:"/src/assets/propertyCard/mUSAirLine.jpg"},{id:26,name:"Georgetown",street:"Washington",price:260,pricePerHouse:150,rent:{monopolist:[26,82,112,142,172],competitor:[26,41,56,71,86,101]},monopolistTwoPropertyPrice:52,noOfHouses:0,unMortgagePrice:143,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/georgetown.jpg",mortgageCardUrl:"/src/assets/propertyCard/mGeorgetown.jpg"},{id:27,name:"Constitution Ave.",street:"Washington",price:260,pricePerHouse:150,rent:{monopolist:[26,82,112,142,172],competitor:[26,41,56,71,86,101]},monopolistTwoPropertyPrice:52,noOfHouses:0,unMortgagePrice:143,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/constitutionAve.jpg",mortgageCardUrl:"/src/assets/propertyCard/mConstitutionAve.jpg"},{id:28,name:"U.S. Gas Company",street:"Utilities",price:150,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:83,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/usGasCompany.jpg",mortgageCardUrl:"/src/assets/propertyCard/mUSGasCompany.jpg"},{id:29,name:"Pennsylvania Ave.",street:"Washington",price:280,pricePerHouse:150,rent:{monopolist:[28,86,116,146,176],competitor:[28,43,58,73,88,103]},monopolistTwoPropertyPrice:56,noOfHouses:0,unMortgagePrice:154,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/pennsylvaniaAve.jpg",mortgageCardUrl:"/src/assets/propertyCard/mPennsylvaniaAve.jpg"},{id:30,name:"Go to Jail",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:31,name:"Fisherman's Wharf",street:"San Francisco",price:300,pricePerHouse:200,rent:{monopolist:[30,100,140,180,220],competitor:[30,50,70,90,110,130]},monopolistTwoPropertyPrice:60,noOfHouses:0,unMortgagePrice:165,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/fishermansWharf.jpg",mortgageCardUrl:"/src/assets/propertyCard/mFishermansWharf.jpg"},{id:32,name:"Union Square",street:"San Francisco",price:300,pricePerHouse:200,rent:{monopolist:[30,100,140,180,220],competitor:[30,50,70,90,110,130]},monopolistTwoPropertyPrice:60,noOfHouses:0,unMortgagePrice:165,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/unionSquare.jpg",mortgageCardUrl:"/src/assets/propertyCard/mUnionSquare.jpg"},{id:33,name:"Competitor or Monopolist",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:34,name:"Nob Hill",street:"San Francisco",price:320,pricePerHouse:200,rent:{monopolist:[32,104,144,184,224],competitor:[32,53,72,92,112,132]},monopolistTwoPropertyPrice:64,noOfHouses:0,unMortgagePrice:176,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/nobHill.jpg",mortgageCardUrl:"/src/assets/propertyCard/mNobHill.jpg"},{id:35,name:"U.S. Trucking Company",street:"Transportation",price:200,pricePerHouse:0,rent:{monopolist:[40,80,160,320],competitor:[20,20,20,20]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:110,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/usTruckingCompany.jpg",mortgageCardUrl:"/src/assets/propertyCard/mUSTruckingCompany.jpg"},{id:36,name:"Competitor or Monopolist",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:37,name:"Fifth Ave.",street:"New York",price:350,pricePerHouse:200,rent:{monopolist:[35,110,150,190,230],competitor:[35,55,75,95,115,135]},monopolistTwoPropertyPrice:70,noOfHouses:0,unMortgagePrice:193,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/fifthAve.jpg",mortgageCardUrl:"/src/assets/propertyCard/mFifthAve.jpg"},{id:38,name:"Property Tax",street:"",price:0,pricePerHouse:0,rent:{monopolist:[],competitor:[]},monopolistTwoPropertyPrice:0,noOfHouses:0,unMortgagePrice:0,mortgaged:!1,ownedBy:null,cardUrl:"",mortgageCardUrl:""},{id:39,name:"Wall St.",street:"New York",price:400,pricePerHouse:200,rent:{monopolist:[40,120,160,200,240],competitor:[40,60,80,100,120,140]},monopolistTwoPropertyPrice:80,noOfHouses:0,unMortgagePrice:220,mortgaged:!1,ownedBy:null,cardUrl:"/src/assets/propertyCard/wallSt.jpg",mortgageCardUrl:"/src/assets/propertyCard/mWallSt.jpg"}],monopolistCards:[{action:"collect",from:"competitor",to:"",amount:25,cardUrl:"/src/assets/monopolistCard/mcc25.jpg"},{action:"pass",from:"",to:"",amount:0,cardUrl:"/src/assets/monopolistCard/mCongratulation.jpg"},{action:"collect",from:"treasurer",to:"",amount:25,cardUrl:"/src/assets/monopolistCard/mct25.jpg"},{action:"collect",from:"treasurer",to:"",amount:50,cardUrl:"/src/assets/monopolistCard/mct50.jpg"},{action:"collect",from:"treasurer",to:"",amount:75,cardUrl:"/src/assets/monopolistCard/mct75.jpg"},{action:"collect",from:"treasurer",to:"",amount:25,cardUrl:"/src/assets/monopolistCard/mct252.jpg"},{action:"collect",from:"treasurer",to:"",amount:50,cardUrl:"/src/assets/monopolistCard/mct502.jpg"},{action:"collect",from:"treasurer",to:"",amount:50,cardUrl:"/src/assets/monopolistCard/mct503.jpg"},{action:"collect",from:"treasurer",to:"",amount:75,cardUrl:"/src/assets/monopolistCard/mct752.jpg"},{action:"goTo",from:"",to:"Electric Company",amount:0,cardUrl:"/src/assets/monopolistCard/mElectric.jpg"},{action:"goTo",from:"",to:"French Quarter",amount:0,cardUrl:"/src/assets/monopolistCard/mFrenchQuarter.jpg"},{action:"pass",from:"",to:"",amount:0,cardUrl:"/src/assets/monopolistCard/mGoodThinking.jpg"},{action:"goTo",from:"",to:"Pennsylvania Ave.",amount:0,cardUrl:"/src/assets/monopolistCard/mPennsylvania.jpg"},{action:"goTo",from:"",to:"Jail",amount:0,cardUrl:"/src/assets/monopolistCard/mPrison.jpg"},{action:"goTo",from:"",to:"Jail",amount:0,cardUrl:"/src/assets/monopolistCard/mPrison2.jpg"},{action:"pay",from:"",to:"treasurer",amount:25,cardUrl:"/src/assets/monopolistCard/mpt25.jpg"},{action:"pay",from:"",to:"treasurer",amount:50,cardUrl:"/src/assets/monopolistCard/mpt50.jpg"},{action:"pay",from:"",to:"treasurer",amount:75,cardUrl:"/src/assets/monopolistCard/mpt75.jpg"},{action:"pay",from:"",to:"treasurer",amount:25,cardUrl:"/src/assets/monopolistCard/mpt252.jpg"},{action:"pay",from:"",to:"treasurer",amount:50,cardUrl:"/src/assets/monopolistCard/mpt502.jpg"},{action:"pay",from:"",to:"treasurer",amount:75,cardUrl:"/src/assets/monopolistCard/mpt752.jpg"},{action:"goTo",from:"",to:"U.S. Railroad",amount:0,cardUrl:"/src/assets/monopolistCard/mRailroad.jpg"},{action:"roll",from:"treasurer",to:"",amount:75,cardUrl:"/src/assets/monopolistCard/mRoll75.jpg"},{action:"goTo",from:"",to:"Start",amount:0,cardUrl:"/src/assets/monopolistCard/mStart.jpg"},{action:"goTo",from:"",to:"Start",amount:0,cardUrl:"/src/assets/monopolistCard/mStart2.jpg"}],competitorCards:[{action:"collect",from:"treasurer",to:"",amount:25,cardUrl:"/src/assets/competitorCard/cct25.jpg"},{action:"collect",from:"treasurer",to:"",amount:50,cardUrl:"/src/assets/competitorCard/cct50.jpg"},{action:"collect",from:"treasurer",to:"",amount:75,cardUrl:"/src/assets/competitorCard/cct75.jpg"},{action:"collect",from:"treasurer",to:"",amount:25,cardUrl:"/src/assets/competitorCard/cct252.jpg"},{action:"collect",from:"treasurer",to:"",amount:50,cardUrl:"/src/assets/competitorCard/cct502.jpg"},{action:"collect",from:"treasurer",to:"",amount:50,cardUrl:"/src/assets/competitorCard/cct503.jpg"},{action:"collect",from:"treasurer",to:"",amount:75,cardUrl:"/src/assets/competitorCard/cct752.jpg"},{action:"collect",from:"monopolist",to:"",amount:25,cardUrl:"/src/assets/competitorCard/comCollect25Mon.jpg"},{action:"pass",from:"",to:"",amount:0,cardUrl:"/src/assets/competitorCard/comCongratulation.jpg"},{action:"goTo",from:"",to:"Electric Company",amount:0,cardUrl:"/src/assets/competitorCard/comElectric.jpg"},{action:"goTo",from:"",to:"French Quarter",amount:0,cardUrl:"/src/assets/competitorCard/comFrenchQuarter.jpg"},{action:"goTo",from:"",to:"Pennsylvania Ave.",amount:0,cardUrl:"/src/assets/competitorCard/comPennsylvania.jpg"},{action:"pass",from:"",to:"",amount:0,cardUrl:"/src/assets/competitorCard/comPlayOn.jpg"},{action:"goTo",from:"",to:"Jail",amount:0,cardUrl:"/src/assets/competitorCard/comPriceWar.jpg"},{action:"goTo",from:"",to:"Jail",amount:0,cardUrl:"/src/assets/competitorCard/comPriceWar2.jpg"},{action:"roll",from:"treasurer",to:"",amount:75,cardUrl:"/src/assets/competitorCard/compRoll75.jpg"},{action:"goTo",from:"",to:"U.S. Railroad",amount:0,cardUrl:"/src/assets/competitorCard/comRailroad.jpg"},{action:"goTo",from:"",to:"Start",amount:0,cardUrl:"/src/assets/competitorCard/comStart.jpg"},{action:"goTo",from:"",to:"Start",amount:0,cardUrl:"/src/assets/competitorCard/comStart2.jpg"},{action:"pay",from:"",to:"treasurer",amount:25,cardUrl:"/src/assets/competitorCard/cpt25.jpg"},{action:"pay",from:"",to:"treasurer",amount:50,cardUrl:"/src/assets/competitorCard/cpt50.jpg"},{action:"pay",from:"",to:"treasurer",amount:75,cardUrl:"/src/assets/competitorCard/cpt75.jpg"},{action:"pay",from:"",to:"treasurer",amount:25,cardUrl:"/src/assets/competitorCard/cpt252.jpg"},{action:"pay",from:"",to:"treasurer",amount:50,cardUrl:"/src/assets/competitorCard/cpt502.jpg"},{action:"pay",from:"",to:"treasurer",amount:75,cardUrl:"/src/assets/competitorCard/cpt752.jpg"}],shuffledMonopolistCard:[],shuffledCompetitorCard:[],luckRoll:!1,currentTurnIndex:-1,pickCardIndex:[2,7,17,22,33,36],transportationIndex:[5,15,25,35],utilityIndex:[12,28],propertyTaxIndex:38,incomeTaxIndex:4,jailIndex:10,goToJailIndex:30,antiMonopolyFoundationIndex:20,startIndex:0,busy:!1,collect:{from:"treasurer",amount:0},pay:{from:"treasurer",amount:0},goTo:"",doubleCall:!1,isIncomeTaxIndex:!1,imageData:[{id:"player1",url:"/src/assets/player1.jpg",color:"#50b849"},{id:"player2",url:"/src/assets/player2.jpg",color:"#f47032"},{id:"player3",url:"/src/assets/player3.jpg",color:"#0e90c1"},{id:"player4",url:"/src/assets/player4.jpg",color:"#ed1b24"},{id:"player5",url:"/src/assets/player5.jpg",color:"#a154a2"},{id:"player6",url:"/src/assets/player6.jpg",color:"#ffcb05"}]}},watch:{isPickCard(n){n&&this.pickCard()}},computed:{pickImages(){return this.imageData.filter(n=>!this.players.some(e=>{var t;return((t=e==null?void 0:e.image)==null?void 0:t.id)===(n==null?void 0:n.id)}))},singleRoll(){return this.players[this.currentTurnIndex].currentIndex===this.antiMonopolyFoundationIndex&&this.players[this.currentTurnIndex].role.toLowerCase()==="competitor"},actualIncomeTax(){const n=this.players[this.currentTurnIndex],e=n.propertyOwned.map(r=>{const s=this.property[r],o=n.propertyOwned.filter(a=>this.property[a].street===s.street).length;if(!s.mortgaged&&s.rent.monopolist.length>0&&s.rent.competitor.length>0){if(n.role.toLowerCase()==="monopolist"){if(s.noOfHouses>0&&o>1)return s.rent.monopolist[s.noOfHouses];if(s.noOfHouses===0&&o>1)return s.monopolistTwoPropertyPrice;if(o===1)return s.rent.monopolist[s.noOfHouses]}else if(n.role.toLowerCase()==="competitor")return s.rent.competitor[s.noOfHouses]}else return 0});let t=0;n.role.toLowerCase()==="monopolist"?t=n.money*.2:t=n.money*.1;const i=t+e.reduce((r,s)=>r+s*.1,0);return Math.round((i+Number.EPSILON)*100)/100},playerInJail(){return this.players[this.currentTurnIndex].inJail},isPickCard(){const n=this.players[this.currentTurnIndex];if(this.gameStarted){if(!n.cardPicked&&n.currentIndex!==n.pickCardIndex&&this.pickCardIndex.includes(this.property[n.currentIndex].id))return!0;this.pickCardIndex.includes(this.property[n.currentIndex].id)||(n.cardPicked=!1,n.pickCardIndex=-1)}return!1},notPurchasableIndex(){return[...this.pickCardIndex,this.propertyTaxIndex,this.incomeTaxIndex,this.jailIndex,this.goToJailIndex,this.antiMonopolyFoundationIndex,this.startIndex]},isPurchasable(){const n=this.property[this.players[this.currentTurnIndex].currentIndex].id;return![...this.pickCardIndex,this.propertyTaxIndex,this.incomeTaxIndex,this.jailIndex,this.goToJailIndex,this.antiMonopolyFoundationIndex,this.startIndex].includes(n)},isHousePurchasable(){return this.players[this.currentTurnIndex].propertyOwned.length>0},isOwned(){return this.property[this.players[this.currentTurnIndex].currentIndex].ownedBy!==null},getCalculatedRent(){const n=this.players[this.currentTurnIndex],e=this.property[n.currentIndex],t=this.players.find(r=>r.name===e.ownedBy),i=this.property.filter(r=>r.street===e.street&&r.ownedBy===t.name).length;return e.street==="Transportation"?e.rent[t.role.toLowerCase()][i-1]:e.street==="Utilities"?0:t.role.toLowerCase()==="monopolist"&&e.noOfHouses===0&&i>1?e.monopolistTwoPropertyPrice:e.rent[t.role.toLowerCase()][e.noOfHouses]}},methods:{resetAvatar(){},pickCard(){var n,e,t,i;if(this.players[this.currentTurnIndex].role.toLowerCase()==="monopolist"){const r=(n=this.shuffledMonopolistCard)==null?void 0:n.shift();(e=this.shuffledMonopolistCard)==null||e.push(r),this.currentCard=r}else{const r=(t=this.shuffledCompetitorCard)==null?void 0:t.shift();(i=this.shuffledCompetitorCard)==null||i.push(r),this.currentCard=r}},playerPickedCard(){this.players[this.currentTurnIndex].pickCardIndex=this.players[this.currentTurnIndex].currentIndex,this.currentCard.action==="collect"?this.collectMoney(this.currentCard.from,this.currentCard.amount):this.currentCard.action==="pay"?this.payMoney(this.currentCard.to,this.currentCard.amount):this.currentCard.action==="goTo"?this.goToProperty(this.currentCard.to):this.currentCard.action==="roll"&&(this.onCardRoll=!0)},shuffleCard(n,e="monopolist"){const t=[...n];let i=n.length;const r=[];for(;i>0;)if(i===1)r.push(t[0]),i--;else{const s=Math.floor(Math.random()*i);r.push(t[s]),t.splice(s,1),i--}e==="monopolist"?this.shuffledMonopolistCard=[...r]:this.shuffledCompetitorCard=[...r]},activateComponent(n){n==="trade-property"?this.isTrading=!0:this.isTrading=!1,this.activeComponent=n},startTrade(){this.isTrading=!0;const n={actor:{...this.players[this.currentTurnIndex]},action:" wants to trade"};alert(n.actor.name+n.action),this.gameLog.unshift(n)},cancelTrade(){this.isTrading=!1;const n={actor:{...this.players[this.currentTurnIndex]},action:" cancelled the trade"};alert(n.actor.name+n.action),this.gameLog.unshift(n)},payActualIncomeTax(n){if(this.isIncomeTaxIndex){const e=this.players[this.currentTurnIndex];if(e.money>=parseFloat(n)){e.money-=Math.round((parseFloat(n)+Number.EPSILON)*100)/100,this.isIncomeTaxIndex=!1;const t={actor:{...this.players[this.currentTurnIndex]},action:" paid $"+n+" as income tax"};this.lastOption=!1,alert(t.actor.name+t.action),this.gameLog.unshift(t)}else this.lastOption=!0,confirm("You do not have enough money to pay the tax, do you want to file for bankruptcy?")&&this.bankruptPlayer(e.name)}},payRegularIncomeTax(){if(this.isIncomeTaxIndex){const n=this.players[this.currentTurnIndex];if(n.money>=200){n.money-=200,this.isIncomeTaxIndex=!1;const e={actor:{...this.players[this.currentTurnIndex]},action:" paid $200 as income tax"};this.lastOption=!1,alert(e.actor.name+e.action),this.gameLog.unshift(e)}else this.lastOption=!0,confirm("You do not have enough money to pay the tax, do you want to file for bankruptcy?")&&this.bankruptPlayer(n.name)}},addPlayer(n,e,t){if(this.players.length===6)return alert("Max players reached");if(n==="")return alert("Name cannot be empty");if(this.players.some(i=>i.name===n))return alert("Player already exists");if(e.toLowerCase()!=="monopolist"&&e.toLowerCase()!=="competitor")return alert("Role must be monopolist or competitor");if(t)this.players.push({name:n,role:e,money:1500,inJail:!1,bailOutTurn:0,propertyOwned:[],currentIndex:0,doubleRollCount:0,image:t,bankrupted:!1,cardPicked:!1,pickCardIndex:-1}),this.$refs.addPlayer.resetField();else return alert("Please select a player color")},processTrade(n,e,t,i,r){if(e.length===0||t.length===0)alert("Please enter money value");else{const s=this.players[this.currentTurnIndex],o=this.players.find(a=>a.name===n);if(s.money=Math.round((s.money+Number.EPSILON)*100)/100,o.money=Math.round((o.money+Number.EPSILON)*100)/100,e=Math.round((e+Number.EPSILON)*100)/100,t=Math.round((t+Number.EPSILON)*100)/100,e>=0&&t>=0)if(s.money>=e)if(o.money>=t){s.money-=e,s.money+=t,o.money-=t,o.money+=e,s.propertyOwned=s.propertyOwned.filter(l=>!i.includes(l)),o.propertyOwned=o.propertyOwned.filter(l=>!r.includes(l)),s.propertyOwned=[...s.propertyOwned,...r],s.propertyOwned.forEach(l=>this.property[l].ownedBy=s.name),o.propertyOwned=[...o.propertyOwned,...i],o.propertyOwned.forEach(l=>this.property[l].ownedBy=o.name),this.isTrading=!1;const a={actor:{...this.players[this.currentTurnIndex]},action:" traded with "+n};alert(a.actor.name+a.action),this.gameLog.unshift(a)}else alert(o.name+" does not have enough money");else alert(s.name+" do not have enough money");else alert("Money cannot be negative value")}},async startGame(){const n=this.players.filter(i=>i.role.toLowerCase()==="monopolist").length,e=this.players.filter(i=>i.role.toLowerCase()==="competitor").length,t=n-e;if(this.players.length>1){if(t>1)return alert(`Add ${t} or ${t-1} more competitor(s) to start the game.`);if(t<-1)return alert(`Add ${Math.abs(t)} or ${Math.abs(t)-1} more monopolist(s) to start the game.`);this.shuffleCard(this.monopolistCards),this.shuffleCard(this.competitorCards,"competitor"),this.currentTurnIndex=0,this.gameStarted=!0;const i=this;setTimeout(async function(){var a;const s=document.querySelectorAll(".avatar");s.length>0&&s.forEach(l=>{l.remove()});const o=document.getElementById("div0");for(const l of i.players){const c=document.createElement("img");c.id=l.name,c.src=(a=l.image)==null?void 0:a.url,c.classList.add("avatar"),c.alt=l.name,c.height=25,c.width=25;const u=o.querySelector(".first-corner"),d=o.querySelector(".second-corner"),f=o.querySelector(".third-corner");d.childElementCount<2?d.appendChild(c):u.childElementCount<2?u.appendChild(c):f.appendChild(c)}},500);const r={actor:{image:{color:"#000000"}},action:"Game started"};this.gameLog.unshift(r)}else return alert("Add at least 2 players to start the game.")},diceRoll(n){const e=this.players[this.currentTurnIndex];let t=e.currentIndex;if(this.onUtility&&this.property[e.currentIndex].ownedBy!==null){const i=this.property[e.currentIndex],r=this.players.find(o=>o.name===i.ownedBy),s=this.property.filter(o=>o.street===i.street&&o.ownedBy===(r==null?void 0:r.name)).length;if(this.onUtility=!1,this.busy=!0,this.luckRoll=!0,r.name!==e.name){if(r.role.toLowerCase()==="monopolist"&&s>1&&!r.inJail)if(e.money>=n*10){e.money-=n*10,r.money+=n*10;const o={actor:{...e},action:" paid $"+n*10+" to "+r.name};return this.lastOption=!1,this.gameLog.unshift(o),alert(o.actor.name+o.action)}else{this.lastOption=!0,confirm("You do not have enough money to pay the rent, do you want to file for bankruptcy?")&&this.bankruptPlayer(e.name);return}else if(!(r.role.toLowerCase()==="monopolist"&&r.inJail))if(e.money>=n*4){e.money-=n*4,r.money+=n*4;const o={actor:{...e},action:" paid $"+n*4+" to "+r.name};return this.lastOption=!1,this.gameLog.unshift(o),alert(o.actor.name+o.action)}else{this.lastOption=!0,confirm("You do not have enough money to pay the rent, do you want to file for bankruptcy?")&&this.bankruptPlayer(e.name);return}}}if(this.onCardRoll&&this.pickCardIndex.includes(this.property[e.currentIndex].id))if(this.onCardRoll=!1,this.busy=!0,this.lastOption=!1,e.role.toLowerCase()==="monopolist")if(n>=8){e.money+=75;const i={actor:{...e},action:" received $75 from Treasurer."};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}else{const i={actor:{...e},action:" received nothing as the deal didn't go through."};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}else if(n>=10){e.money+=75;const i={actor:{...e},action:" received $75 from Treasurer."};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}else{const i={actor:{...e},action:" received nothing as the new business didn't succeed."};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}if(this.onAntiMonopolyFoundation&&e.role.toLowerCase()==="competitor")if(this.onAntiMonopolyFoundation=!1,this.busy=!0,this.luckRoll=!0,n===1){e.money+=25;const i={actor:{...e},action:" rolled 1 and received $25 from the Anti-monopoly Foundation"};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}else if(n===2){e.money+=50;const i={actor:{...e},action:" rolled 2 and received $50 from the Anti-monopoly Foundation"};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}else{const i={actor:{...e},action:" rolled "+n+" and received nothing from the Anti-monopoly Foundation"};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}if(e.inJail){const i={actor:{...e},action:" is in jail"};this.gameLog.unshift(i),alert(i.actor.name+i.action),e.bailOutTurn===2&&(e.inJail=!1),this.nextTurn()}else if(parseInt(n)>-1&&parseInt(n)<12){if(e.bailOutTurn===2)if(e.money>=50){e.money-=50,e.bailOutTurn=0;const r={actor:{...e},action:" paid $50 to get out of jail"};this.lastOption=!1,alert(r.actor.name+r.action),this.gameLog.unshift(r)}else this.lastOption=!0,confirm("You do not have enough money to pay the bail, do you want to file for bankruptcy?")&&this.bankruptPlayer(e.name);if(e.currentIndex+parseInt(n)<=39){e.currentIndex+=parseInt(n);const r={actor:{...e},action:" rolled "+n};this.gameLog.unshift(r)}else{e.currentIndex=e.currentIndex+parseInt(n)-40,e.money+=100;const r={actor:{...e},action:" rolled "+n+", passed the start and received $100"};this.gameLog.unshift(r)}if(this.antiMonopolyFoundationIndex===e.currentIndex&&e.role.toLowerCase()==="monopolist")if(e.money>=160){e.money-=160;const r={actor:{...e},action:" paid $160 to the Anti-monopoly Foundation"};this.lastOption=!1,alert(r.actor.name+r.action),this.gameLog.unshift(r)}else this.lastOption=!0,confirm("You do not have enough money to pay the Anti-monopoly Foundation, do you want to file for bankruptcy?")&&this.bankruptPlayer(e.name);if(e.currentIndex===this.goToJailIndex){e.inJail=!0,e.currentIndex=this.jailIndex;const r={actor:{...e},action:" is in jail"};alert(r.actor.name+r.action),this.gameLog.unshift(r)}if(e.currentIndex===this.propertyTaxIndex)if(e.money>=75){e.money-=75;const r={actor:{...e},action:" paid $75 as property tax"};this.lastOption=!1,alert(r.actor.name+r.action),this.gameLog.unshift(r)}else this.lastOption=!0,confirm("You do not have enough money to pay the property tax, do you want to file for bankruptcy?")&&this.bankruptPlayer(e.name);e.currentIndex===this.incomeTaxIndex?this.isIncomeTaxIndex=!0:this.isIncomeTaxIndex=!1,this.busy=!0,this.doubleCall=!1,e.doubleRollCount=0;const i=this;setTimeout(async function(){for(;t!==e.currentIndex;){t++,t===40&&(t=0);const r=document.getElementById(`${e.name}`),s=document.getElementById(`div${t}`);if(t===0||t===10||t===20||t===30){const o=s.querySelector(".first-corner"),a=s.querySelector(".second-corner"),l=s.querySelector(".third-corner");a.childElementCount<2?a.appendChild(r):o.childElementCount<2?o.appendChild(r):l.appendChild(r)}else{const o=s.querySelector(".first-box"),a=s.querySelector(".second-box"),l=s.querySelector(".third-box");a.childElementCount<1?a.appendChild(r):o.childElementCount<2?o.appendChild(r):l.appendChild(r)}await new Promise(o=>setTimeout(o,250))}i.payRent()},500)}},doubleRoll(n){const e=this.players[this.currentTurnIndex];let t=e.currentIndex;if(this.onUtility&&this.property[e.currentIndex].ownedBy!==null){const i=this.property[e.currentIndex],r=this.players.find(o=>o.name===i.ownedBy),s=this.property.filter(o=>o.street===i.street&&o.ownedBy===(r==null?void 0:r.name)).length;if(this.onUtility=!1,this.busy=!0,this.luckRoll=!0,r.name!==e.name){if(r.role.toLowerCase()==="monopolist"&&s>1&&!r.inJail)if(e.money>=n*10){e.money-=n*10,r.money+=n*10;const o={actor:{...e},action:" paid $"+n*10+" to "+r.name};return this.lastOption=!1,this.gameLog.unshift(o),alert(o.actor.name+o.action)}else{this.lastOption=!0,confirm("You do not have enough money to pay the rent, do you want to file for bankruptcy?")&&this.bankruptPlayer(e.name);return}else if(!(r.role.toLowerCase()==="monopolist"&&r.inJail))if(e.money>=n*4){e.money-=n*4,r.money+=n*4;const o={actor:{...e},action:" paid $"+n*4+" to "+r.name};return this.lastOption=!1,this.gameLog.unshift(o),alert(o.actor.name+o.action)}else{this.lastOption=!0,confirm("You do not have enough money to pay the rent, do you want to file for bankruptcy?")&&this.bankruptPlayer(e.name);return}}}if(this.onCardRoll&&this.pickCardIndex.includes(this.property[e.currentIndex].id))if(this.onCardRoll=!1,this.busy=!0,this.lastOption=!1,e.role.toLowerCase()==="monopolist")if(n>=8){e.money+=75;const i={actor:{...e},action:" received $75 from Treasurer."};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}else{const i={actor:{...e},action:" received nothing as the deal didn't go through."};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}else if(n>=10){e.money+=75;const i={actor:{...e},action:" received $75 from Treasurer."};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}else{const i={actor:{...e},action:" received nothing as the new business didn't succeed."};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}if(this.onAntiMonopolyFoundation&&e.role.toLowerCase()==="competitor"){if(this.onAntiMonopolyFoundation=!1,this.busy=!0,this.luckRoll=!0,n===1){e.money+=25;const i={actor:{...e},action:" received $25 from the Anti-monopoly Foundation"};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}else if(n===2){e.money+=50;const i={actor:{...e},action:" received $50 from the Anti-monopoly Foundation"};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}}if(parseInt(n)>1&&parseInt(n)<13&&[2,4,6,8,10,12].includes(parseInt(n))){const i=this.players[this.currentTurnIndex];if(i.inJail){i.inJail=!1,i.bailOutTurn=0;const s={actor:{...i},action:" is out of jail"};this.gameLog.unshift(s),alert(s.actor.name+s.action)}if(i.bailOutTurn===2)if(i.money>=50){i.money-=50,i.bailOutTurn=0;const s={actor:{...i},action:" paid $50 to get out of jail"};this.lastOption=!1,alert(s.actor.name+s.action),this.gameLog.unshift(s)}else this.lastOption=!0,confirm("You do not have enough money to pay the bail, do you want to file for bankruptcy?")&&this.bankruptPlayer(i.name);if(i.currentIndex+parseInt(n)<=39){i.currentIndex+=parseInt(n);const s={actor:{...i},action:" rolled a double "+n};this.gameLog.unshift(s)}else{i.currentIndex=i.currentIndex+parseInt(n)-40,i.money+=100;const s={actor:{...i},action:" rolled a double "+n+", passed the start and received $100"};this.gameLog.unshift(s)}if(this.antiMonopolyFoundationIndex===i.currentIndex&&i.role.toLowerCase()==="monopolist")if(i.money>=160){i.money-=160;const s={actor:{...i},action:" paid $160 to the Anti-monopoly Foundation"};this.lastOption=!1,alert(s.actor.name+s.action),this.gameLog.unshift(s)}else this.lastOption=!0,confirm("You do not have enough money to pay the Anti-monopoly Foundation, do you want to file for bankruptcy?")&&this.bankruptPlayer(i.name);if(i.currentIndex===this.goToJailIndex){i.inJail=!0,i.currentIndex=this.jailIndex;const s={actor:{...i},action:" is in jail"};alert(s.actor.name+s.action),this.gameLog.unshift(s)}if(i.currentIndex===this.propertyTaxIndex)if(i.money>=75){i.money-=75;const s={actor:{...i},action:" paid $75 as property tax"};this.lastOption=!1,alert(s.actor.name+s.action),this.gameLog.unshift(s)}else this.lastOption=!0,confirm("You do not have enough money to pay the property tax, do you want to file for bankruptcy?")&&this.bankruptPlayer(i.name);i.currentIndex===this.incomeTaxIndex?this.isIncomeTaxIndex=!0:this.isIncomeTaxIndex=!1,this.busy=!0,this.doubleCall=!0;const r=this;setTimeout(async function(){for(;t!==i.currentIndex;){t++,t===40&&(t=0);const s=document.getElementById(`${i.name}`),o=document.getElementById(`div${t}`);if(t===0||t===10||t===20||t===30){const a=o.querySelector(".first-corner"),l=o.querySelector(".second-corner"),c=o.querySelector(".third-corner");l.childElementCount<2?l.appendChild(s):a.childElementCount<2?a.appendChild(s):c.appendChild(s)}else{const a=o.querySelector(".first-box"),l=o.querySelector(".second-box"),c=o.querySelector(".third-box");l.childElementCount<1?l.appendChild(s):a.childElementCount<2?a.appendChild(s):c.appendChild(s)}await new Promise(a=>setTimeout(a,250))}r.payRent()},500)}},nextTurn(){this.lastOption=!1;const n=this.players[this.currentTurnIndex];if(n.inJail&&n.bailOutTurn++,this.utilityIndex.includes(n.currentIndex)&&this.onUtility===!1&&!this.luckRoll&&!n.propertyOwned.includes(n.currentIndex)&&this.property[n.currentIndex].ownedBy!==null)if(this.players.find(e=>e.name===this.property[n.currentIndex].ownedBy).role.toLowerCase()==="monopolist"&&this.players.find(e=>e.name===this.property[n.currentIndex].ownedBy).inJail)this.onUtility=!1,this.busy=!1;else{this.onUtility=!0,this.busy=!1;return}else if(this.onCardRoll&&this.pickCardIndex.includes(this.property[n.currentIndex].id)){this.busy=!1;return}else if(this.antiMonopolyFoundationIndex===n.currentIndex&&n.role.toLowerCase()==="competitor"&&this.onAntiMonopolyFoundation===!1&&!this.luckRoll){this.onAntiMonopolyFoundation=!0,this.busy=!1;return}else this.onUtility=!1,this.onAntiMonopolyFoundation=!1;this.doubleCall===!0?(n.doubleRollCount++,n.doubleRollCount===2&&(n.doubleRollCount=0,this.doubleCall=!1,this.currentTurnIndex<this.players.length-1?this.currentTurnIndex++:this.currentTurnIndex=0)):this.currentTurnIndex<this.players.length-1?this.currentTurnIndex++:this.currentTurnIndex=0,this.busy=!1,this.luckRoll=!1,this.isPicked=!1},payRent(){const n=this.players[this.currentTurnIndex],e=this.property[n.currentIndex];if(e.ownedBy!==null&&!e.mortgaged){const t=this.players.find(i=>i.name===e.ownedBy);if(t.role.toLowerCase()==="monopolist"&&t.inJail){const i={actor:{...n},action:" do not have to pay rent to "+t.name+" because the playeris in jail"};return this.gameLog.unshift(i),alert(i.actor.name+i.action)}if(n.name!==t.name&&this.getCalculatedRent>0)if(n.money>=this.getCalculatedRent){n.money-=this.getCalculatedRent,t.money+=this.getCalculatedRent;const i={actor:{...n},action:" paid $"+this.getCalculatedRent+" to "+t.name+" for "+e.name};this.lastOption=!1,this.gameLog.unshift(i),alert(i.actor.name+i.action)}else this.lastOption=!0,confirm("You do not have enough money to pay the rent, do you want to file for bankruptcy?")&&this.bankruptPlayer(n.name)}},buyProperty(){const n=this.players[this.currentTurnIndex],e=this.property[n.currentIndex];if(e.ownedBy===null)if(n.money>=e.price){n.money-=e.price,e.ownedBy=n.name,n.propertyOwned.push(e.id),n.propertyOwned.sort((i,r)=>i-r);const t={actor:{...n},action:" bought "+e.name+" for $"+e.price};this.gameLog.unshift(t),alert(t.actor.name+t.action)}else alert(n.name+" don't have enough money to buy this property")},playerPosition(){return this.property[this.players[this.currentTurnIndex].currentIndex].name},collectMoney(n,e){if(e>=0||e<=100){const t=this.players[this.currentTurnIndex],i=[],r=[],s=[];let o=n.toLowerCase()==="treasurer"?"treasurer":this.players.find(a=>a.name===n);if(n.toLowerCase()==="monopolist"?(i.push(...this.players.filter(a=>a.role.toLowerCase()==="monopolist"&&a.name!==t)),o="monopolist"):n.toLowerCase()==="competitor"&&(r.push(...this.players.filter(a=>a.role.toLowerCase()==="competitor"&&a.name!==t)),o="competitor"),o==="treasurer"){t.money+=parseInt(parseInt(e)),this.isPicked=!0;const a={actor:{...t},action:" received $"+e+" from the treasurer"};this.gameLog.unshift(a),alert(a.actor.name+a.action)}else if(o==="monopolist"){for(const a of i)if(a.money>=parseInt(e)){t.money+=parseInt(e),a.money-=parseInt(e);const l={actor:{...t},action:" received $"+e+" from "+a.name};this.gameLog.unshift(l),alert(l.actor.name+l.action)}else s.push(a.name);for(const a of s)this.bankruptPlayer(a,!0);this.isPicked=!0}else if(o==="competitor"){for(const a of r)if(a.money>=parseInt(e)){t.money+=parseInt(e),a.money-=parseInt(e);const l={actor:{...t},action:" received $"+e+" from "+a.name};this.gameLog.unshift(l),alert(l.actor.name+l.action)}else s.push(a.name);for(const a of s)this.bankruptPlayer(a,!0);this.isPicked=!0}else if(o.money>=parseInt(e)){t.money+=parseInt(e),o.money-=parseInt(e),this.isPicked=!0;const a={actor:{...t},action:" received $"+e+" from "+o.name};this.lastOption=!1,this.gameLog.unshift(a),alert(a.actor.name+a.action)}else this.lastOption=!0,confirm(o.name+" do not have enough money to pay, do you want to file for bankruptcy?")&&this.bankruptPlayer(o.name,!0),this.isPickCard=!1}},payMoney(n,e){if(e>=0||e<=100){const t=this.players[this.currentTurnIndex],i=[],r=[];let s=n.toLowerCase()==="treasurer"?"treasurer":this.players.find(o=>o.name===n);if(n.toLowerCase()==="monopolist"?(i.push(...this.players.filter(o=>o.role.toLowerCase()==="monopolist"&&o.name!==t)),s="monopolist"):n.toLowerCase()==="competitor"&&(r.push(...this.players.filter(o=>o.role.toLowerCase()==="competitor"&&o.name!==t)),s="competitor"),s==="treasurer")if(t.money>=parseInt(e)){t.money-=parseInt(e),this.isPicked=!0;const o={actor:{...t},action:" paid $"+e+" to the treasurer"};this.lastOption=!1,this.gameLog.unshift(o),alert(o.actor.name+o.action)}else this.lastOption=!0,confirm(t.name+" do not have enough money to pay, do you want to file for bankruptcy?")&&this.bankruptPlayer(t.name),this.isPickCard=!1;else if(s==="monopolist")if(t.money>=parseInt(e)*i.length){for(const o of i){o.money+=parseInt(e),t.money-=parseInt(e);const a={actor:{...t},action:" paid $"+e+" to "+o.name};this.gameLog.unshift(a),alert(a.actor.name+a.action)}this.isPicked=!0}else this.lastOption=!0,confirm(t.name+" do not have enough money to pay, do you want to file for bankruptcy?")&&this.bankruptPlayer(t.name),this.isPickCard=!1;else if(s==="competitor")if(t.money>=parseInt(e)*r.length){for(const o of r){o.money+=parseInt(e),t.money-=parseInt(e);const a={actor:{...t},action:" paid $"+e+" to "+o.name};this.gameLog.unshift(a),alert(a.actor.name+a.action)}this.isPicked=!0}else this.lastOption=!0,confirm(t.name+" do not have enough money to pay, do you want to file for bankruptcy?")&&this.bankruptPlayer(t.name),this.isPickCard=!1;else if(t.money>=parseInt(e)){s.money+=parseInt(e),t.money-=parseInt(e),this.isPicked=!0;const o={actor:{...t},action:" paid $"+e+" to "+s.name};this.gameLog.unshift(o),alert(o.actor.name+o.action)}else{const o={actor:{...t},action:" do not have enough money to pay"};this.gameLog.unshift(o),alert(o.actor.name+o.action),this.isPickCard=!1}}else alert("You cannot pay less than 0 and more than 100")},goToProperty(n){const e=this.players[this.currentTurnIndex];let t=e.currentIndex;const i=this.property.find(s=>s.name===n);if(i.id===this.jailIndex){e.inJail=!0,e.currentIndex=this.jailIndex,this.isPicked=!0;const s={actor:{...e},action:" is in jail"};this.gameLog.unshift(s),alert(s.actor.name+s.action)}else if(i.id<=e.currentIndex){e.currentIndex=i.id,e.money+=100,this.isPicked=!0;const s={actor:{...e},action:" passed the start and received $100"};this.gameLog.unshift(s),alert(s.actor.name+s.action)}else{e.currentIndex=i.id,this.isPicked=!0;const s={actor:{...e},action:" is at "+i.name};this.gameLog.unshift(s),alert(s.actor.name+s.action)}const r=this;setTimeout(async function(){for(;t!==e.currentIndex;){t++,t===40&&(t=0);const s=document.getElementById(`${e.name}`),o=document.getElementById(`div${t}`);if(t===0||t===10||t===20||t===30){const a=o.querySelector(".first-corner"),l=o.querySelector(".second-corner"),c=o.querySelector(".third-corner");l.childElementCount<2?l.appendChild(s):a.childElementCount<2?a.appendChild(s):c.appendChild(s)}else{const a=o.querySelector(".first-box"),l=o.querySelector(".second-box"),c=o.querySelector(".third-box");l.childElementCount<1?l.appendChild(s):a.childElementCount<2?a.appendChild(s):c.appendChild(s)}await new Promise(a=>setTimeout(a,250))}r.payRent()},500)},bailOut(){const n=this.players[this.currentTurnIndex];if(n.money>=50){n.money-=50,n.inJail=!1,n.bailOutTurn=0;const e={actor:{...n},action:" paid $50 to get out of jail"};this.lastOption=!1,this.gameLog.unshift(e),alert(e.actor.name+e.action)}else this.lastOption=!0,confirm("You do not have enough money to pay the bail, do you want to file for bankruptcy?")&&this.bankruptPlayer(n.name)},buyHouse(n){const e=this.players[this.currentTurnIndex],t=this.property.find(i=>i.id===n);if(t.ownedBy===e.name&&e.money>=t.pricePerHouse)if(e.role.toLowerCase()==="monopolist"&&t.noOfHouses<4)if(e.money>=t.pricePerHouse){e.money-=t.pricePerHouse,t.noOfHouses++;const i={actor:{...e},action:" bought a house in "+t.name+" for $"+t.pricePerHouse};this.gameLog.unshift(i),alert(i.actor.name+i.action)}else alert(e.name+" don't have enough money to buy a house");else if(e.role.toLowerCase()==="competitor"&&t.noOfHouses<5){if(e.money>=t.pricePerHouse){e.money-=t.pricePerHouse,t.noOfHouses++;const i={actor:{...e},action:" bought a house in "+t.name+" for $"+t.pricePerHouse};this.gameLog.unshift(i),alert(i.actor.name+i.action)}}else return alert("You can't buy more than houses")},sellHouse(n){const e=this.players[this.currentTurnIndex],t=this.property.find(i=>i.id===n);if(t.ownedBy===e.name&&t.noOfHouses>0){e.money+=t.pricePerHouse/2,t.noOfHouses--;const i={actor:{...e},action:" sold a house in "+t.name+" for $"+t.pricePerHouse/2};this.gameLog.unshift(i),alert(i.actor.name+i.action)}else return alert("You don't have any more houses to sell")},mortgage(n){const e=this.players[this.currentTurnIndex],t=this.property.find(i=>i.id===n);if(t.ownedBy===e.name&&t.noOfHouses===0){e.money+=t.price/2,t.mortgaged=!0;const i={actor:{...e},action:" mortgaged the property for $"+t.price/2};this.gameLog.unshift(i),alert(i.actor.name+i.action)}else return alert("You must sell all the houses before mortgaging the property")},unMortgage(n){const e=this.players[this.currentTurnIndex],t=this.property.find(i=>i.id===n);if(t.ownedBy===e.name&&t.mortgaged&&e.money>=t.unMortgagePrice){e.money-=t.unMortgagePrice,t.mortgaged=!1;const i={actor:{...e},action:" un-mortgaged the property for $"+t.unMortgagePrice};this.gameLog.unshift(i),alert(i.actor.name+i.action)}else return alert(e.name+" don't have enough money to un-mortgage the property")},bankruptPlayer(n,e=!1){const t=this.players.find(s=>s.name===n);if(!e&&t.propertyOwned.length!==0&&t.propertyOwned.filter(o=>this.property[o].mortgaged===!1).length>0)return alert("You must sell all the houses and mortgage/trade the property before going bankrupt");t.propertyOwned.forEach(s=>{this.property[s].ownedBy=null,this.property[s].noOfHouses=0,this.property[s].mortgaged=!1});const i={actor:{...t},action:" went bankrupt"};if(this.gameLog.unshift(i),alert(i.actor.name+i.action),this.currentTurnIndex===this.players.length-1&&(this.currentTurnIndex-=1),this.players=this.players.filter(s=>s.name!==n),document.getElementById(`${n}`).remove(),this.lastOption=!1,this.players.length===1){const s={actor:{...this.players[0]},action:" won the game"};this.lastOption=!1,this.gameLog.unshift(s),alert(s.actor.name+s.action)}}},components:{TradeProperty:qd,GameBoard:tM,Dice:Af,SingleDice:Cf,PlayerImage:lM,GameLog:dM,LastOption:pM,NavMenu:_M,CardFlip:bM}},AM={key:0,class:"cover"},CM=H("header",null,[H("h2",{class:"header"},[H("span",{class:"competitor header"},"Anti"),Ft("-"),H("span",{class:"monopolist header"},"Monopoly")])],-1),wM={key:1,class:"main"},RM={class:"left-panel side"},PM=H("div",{class:"filler"},null,-1),LM={class:"right-panel side"},IM={class:"header"},UM=H("span",{class:"competitor header"},"Anti",-1),DM=H("span",{class:"monopolist header"},"Monopoly",-1),OM={key:1};function NM(n,e,t,i,r,s){const o=nt("card-flip"),a=nt("add-player"),l=nt("player-details"),c=nt("game-board"),u=nt("nav-menu"),d=nt("board-details"),f=nt("bail-out-of-jail"),m=nt("income-tax"),x=nt("last-option"),_=nt("card-option"),p=nt("game-log"),h=nt("player-property"),T=nt("trade-property");return fe(),we(ht,null,[r.gameStarted&&s.isPickCard&&!r.isPicked?(fe(),tt(o,{key:0,front:r.players[r.currentTurnIndex].role.toLowerCase()==="monopolist"?r.monopolistBackCardUrl:r.competitorBackCardUrl,back:r.currentCard,onCardPicked:s.playerPickedCard},null,8,["front","back","onCardPicked"])):Ne("",!0),H("section",null,[r.gameStarted?Ne("",!0):(fe(),we("div",AM,[CM,xt(a,{ref:"addPlayer",onAddPlayer:s.addPlayer,onStartGame:s.startGame,images:s.pickImages},null,8,["onAddPlayer","onStartGame","images"]),r.players.length>0?(fe(),tt(l,{key:0,property:r.property,"player-info":r.players,"game-status":r.gameStarted},null,8,["property","player-info","game-status"])):Ne("",!0)])),r.gameStarted?(fe(),we("div",wM,[H("div",RM,[PM,r.gameStarted?(fe(),tt(c,{key:0,onDiceRoll:s.diceRoll,onDoubleRoll:s.doubleRoll,single:s.singleRoll,busy:r.busy},null,8,["onDiceRoll","onDoubleRoll","single","busy"])):Ne("",!0)]),H("div",LM,[H("header",null,[H("h2",IM,[UM,H("span",{onClick:e[0]||(e[0]=(...S)=>s.resetAvatar&&s.resetAvatar(...S))},"-"),DM])]),xt(u,{onChangeComponent:s.activateComponent,"pick-card":r.gameStarted&&s.isPickCard&&!r.isPicked},null,8,["onChangeComponent","pick-card"]),r.players.length>0&&r.activeComponent==="player-details"?(fe(),tt(l,{key:0,property:r.property,"player-info":r.players,"game-status":r.gameStarted},null,8,["property","player-info","game-status"])):Ne("",!0),r.activeComponent==="board-details"?(fe(),we("div",OM,[r.gameStarted?(fe(),tt(d,{key:0,busy:r.busy,players:r.players,property:r.property,"current-turn-index":r.currentTurnIndex,"not-purchasable-index":s.notPurchasableIndex,"is-income-tax-index":r.isIncomeTaxIndex,"last-option":r.lastOption,onNextTurn:s.nextTurn,onBuyProperty:s.buyProperty},null,8,["busy","players","property","current-turn-index","not-purchasable-index","is-income-tax-index","last-option","onNextTurn","onBuyProperty"])):Ne("",!0),r.gameStarted&&s.playerInJail&&r.players[r.currentTurnIndex].bailOutTurn>0?(fe(),tt(f,{key:1,onBailOut:s.bailOut},null,8,["onBailOut"])):Ne("",!0),r.gameStarted&&r.isIncomeTaxIndex?(fe(),tt(m,{key:2,onPayRegularIncomeTax:s.payRegularIncomeTax,onPayActualIncomeTax:s.payActualIncomeTax,"actual-income-tax":s.actualIncomeTax},null,8,["onPayRegularIncomeTax","onPayActualIncomeTax","actual-income-tax"])):Ne("",!0),r.lastOption?(fe(),tt(x,{key:3,onPay:e[1]||(e[1]=S=>s.diceRoll(0)),onBankrupt:e[2]||(e[2]=S=>s.bankruptPlayer(r.players[r.currentTurnIndex].name))})):Ne("",!0)])):Ne("",!0),r.gameStarted&&s.isPickCard&&!r.isPicked&&r.activeComponent==="card-option"?(fe(),tt(_,{key:2,players:r.players,property:r.property,"current-turn-index":r.currentTurnIndex,onNextTurn:s.nextTurn,onCollectMoney:s.collectMoney,onPayMoney:s.payMoney,onGoToProperty:s.goToProperty,ref:"cardOption"},null,8,["players","property","current-turn-index","onNextTurn","onCollectMoney","onPayMoney","onGoToProperty"])):Ne("",!0),r.gameStarted&&r.activeComponent==="game-log"?(fe(),tt(p,{key:3,"game-logs":r.gameLog},null,8,["game-logs"])):Ne("",!0),r.gameStarted&&!r.isTrading&&r.activeComponent==="player-property"?(fe(),tt(h,{key:4,players:r.players,property:r.property,"current-turn-index":r.currentTurnIndex,onBuyHouse:s.buyHouse,onSellHouse:s.sellHouse,onMortgage:s.mortgage,onUnMortgage:s.unMortgage},null,8,["players","property","current-turn-index","onBuyHouse","onSellHouse","onMortgage","onUnMortgage"])):Ne("",!0),r.gameStarted&&r.activeComponent==="trade-property"?(fe(),tt(T,{key:5,"is-trading":r.isTrading,players:r.players,"current-turn-index":r.currentTurnIndex,property:r.property,onProcessTrade:s.processTrade,onCancelTrade:s.cancelTrade},null,8,["is-trading","players","current-turn-index","property","onProcessTrade","onCancelTrade"])):Ne("",!0)])])):Ne("",!0)])],64)}const FM=mt(TM,[["render",NM]]);const BM={props:["modelValue","images"],emits:["update:modelValue"]},HM=n=>(Hi("data-v-998f124f"),n=n(),ki(),n),kM={class:"avatar-picker"},zM=["onClick"],GM=["src","alt"],VM=["checked"],WM=HM(()=>H("span",{class:"checkmark"},null,-1));function XM(n,e,t,i,r,s){return fe(),we("div",kM,[(fe(!0),we(ht,null,En(t.images,o=>(fe(),we("div",{class:"avatar-option",onClick:a=>n.$emit("update:modelValue",o)},[H("img",{class:"avatar avatar-img",src:o.url,alt:o.id},null,8,GM),H("input",{id:"avatar",name:"avatar",type:"radio",checked:o===t.modelValue},null,8,VM),WM],8,zM))),256))])}const qM=mt(BM,[["render",XM],["__scopeId","data-v-998f124f"]]);const jM={components:{ChooseAvatar:qM},props:["images"],data(){return{name:"",role:"Monopolist",selectedImage:null}},emits:["add-player","start-game"],methods:{resetField(){this.name="",this.role=this.role==="Monopolist"?"Competitor":"Monopolist",this.selectedImage=null}}},Dr=n=>(Hi("data-v-d7f1e071"),n=n(),ki(),n),YM={class:"form-control"},$M=Dr(()=>H("label",{for:"name"},"Name",-1)),KM={class:"form-control"},ZM=Dr(()=>H("label",{for:"role"},"Role",-1)),JM=Dr(()=>H("option",{value:"Monopolist"},"Monopolist",-1)),QM=Dr(()=>H("option",{value:"Competitor"},"Competitor",-1)),eS=[JM,QM],tS={class:"form-control"},nS=Dr(()=>H("label",{for:"avatar"},"Avatar",-1)),iS=Dr(()=>H("button",{type:"submit"},"Add",-1));function rS(n,e,t,i,r,s){const o=nt("choose-avatar"),a=nt("base-card");return fe(),tt(a,null,{header:st(()=>[Ft("Add Player")]),default:st(()=>[H("form",{onSubmit:e[4]||(e[4]=fm(l=>n.$emit("add-player",r.name,r.role,r.selectedImage),["prevent"]))},[H("div",YM,[$M,cn(H("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>r.name=l)},null,512),[[yr,r.name,void 0,{trim:!0}]])]),H("div",KM,[ZM,cn(H("select",{name:"role",id:"role","onUpdate:modelValue":e[1]||(e[1]=l=>r.role=l)},eS,512),[[Kr,r.role,void 0,{lazy:!0}]])]),H("div",tS,[nS,xt(o,{images:t.images,modelValue:r.selectedImage,"onUpdate:modelValue":e[2]||(e[2]=l=>r.selectedImage=l)},null,8,["images","modelValue"])]),iS,H("button",{type:"button",onClick:e[3]||(e[3]=l=>n.$emit("start-game"))},"Start")],32)]),_:1})}const wf=mt(jM,[["render",rS],["__scopeId","data-v-d7f1e071"]]);const sS={props:["playerInfo","property","gameStatus"]};function oS(n,e,t,i,r,s){const o=nt("player"),a=nt("base-card");return fe(),tt(a,null,{header:st(()=>[Ft("Players")]),default:st(()=>[H("ul",null,[(fe(!0),we(ht,null,En(t.playerInfo,l=>(fe(),tt(o,{player:l,"player-property":t.property[l.currentIndex].name,key:l.name,"game-status":t.gameStatus},null,8,["player","player-property","game-status"]))),128))])]),_:1})}const aS=mt(sS,[["render",oS],["__scopeId","data-v-e4382dd1"]]);const lS={props:["player","playerProperty","gameStatus"]},cS={class:"details-container"},uS=["src","alt"],dS={key:0,class:"money"},fS={style:{color:"#7b9a6d"}};function hS(n,e,t,i,r,s){return fe(),we("li",null,[H("div",cS,[H("img",{class:"player spacing",src:t.player.image.url,alt:t.player.name,height:"100",width:"100"},null,8,uS),H("span",{class:nn(t.player.role==="Monopolist"?"monopolist":"competitor"),style:Rr({color:t.player.image.color})},Je(t.player.name)+" - "+Je(`${t.player.role} `),7),t.gameStatus?(fe(),we("span",dS,[Ft(" - "),H("span",fS,"$"+Je(Math.round((t.player.money+Number.EPSILON)*100)/100),1),Ft(" - "+Je(t.playerProperty),1)])):Ne("",!0)])])}const pS=mt(lS,[["render",hS],["__scopeId","data-v-36e593da"]]),mS={data(){return{value:0}}};function gS(n,e,t,i,r,s){const o=nt("base-card");return fe(),tt(o,null,{header:st(()=>[Ft("Dice Roll")]),default:st(()=>[cn(H("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),max:"12",min:"1"},null,512),[[yr,r.value,void 0,{number:!0}]]),H("div",null,[H("button",{type:"button",onClick:e[1]||(e[1]=a=>n.$emit("dice-roll",r.value))},"Roll"),H("button",{type:"button",onClick:e[2]||(e[2]=a=>n.$emit("double-roll",r.value))},"Double")])]),_:1})}const _S=mt(mS,[["render",gS]]);const vS={props:["players","property","currentTurnIndex","notPurchasableIndex","busy","isIncomeTaxIndex","lastOption"],data(){return{}},computed:{bailOutTurn(){return this.players[this.currentTurnIndex].bailOutTurn},isInJail(){return this.players[this.currentTurnIndex].inJail},owner(){return this.property[this.players[this.currentTurnIndex].currentIndex].ownedBy},isHousePurchasable(){return this.property[this.players[this.currentTurnIndex].currentIndex].pricePerHouse!==0},isPurchasable(){const n=this.property[this.players[this.currentTurnIndex].currentIndex].id;return!this.notPurchasableIndex.includes(n)},isOwned(){return this.property[this.players[this.currentTurnIndex].currentIndex].ownedBy},getCalculatedRent(){const n=this.players[this.currentTurnIndex],e=this.property[n.currentIndex],t=this.players.find(r=>r.name===e.ownedBy),i=this.property.filter(r=>r.street===e.street&&r.ownedBy===t.name).length;return e.street==="Transportation"?e.rent[t.role.toLowerCase()][i-1]:t.role.toLowerCase()==="monopolist"&&e.noOfHouses===0&&i>1?e.monopolistTwoPropertyPrice:e.rent[t.role.toLowerCase()][e.noOfHouses]}},methods:{buyProperty(){this.$emit("buy-property")},nextTurn(){this.$emit("next-turn")}},watch:{}},xS=n=>(Hi("data-v-bc088e4c"),n=n(),ki(),n),yS={class:"main-container"},MS={key:0},SS={key:1},ES={key:2},bS={key:0},TS={key:1},AS={key:0},CS={key:2},wS={key:3},RS=xS(()=>H("h3",null,"Options",-1)),PS=["disabled"],LS=["src","alt"],IS=["src","alt"];function US(n,e,t,i,r,s){const o=nt("base-card");return fe(),tt(o,null,{header:st(()=>[Ft("Board")]),default:st(()=>[H("div",yS,[H("div",null,[H("h3",null,Je(t.players[t.currentTurnIndex].name)+"'s Turn",1),H("h4",null,"Property: "+Je(t.property[t.players[t.currentTurnIndex].currentIndex].name),1),t.property[t.players[t.currentTurnIndex].currentIndex].street!==""?(fe(),we("h4",MS," Street: "+Je(t.property[t.players[t.currentTurnIndex].currentIndex].street),1)):Ne("",!0),s.isInJail?(fe(),we("h4",SS,"Bail Out Turn: "+Je(s.bailOutTurn),1)):Ne("",!0),s.isPurchasable?(fe(),we("span",ES,[s.isHousePurchasable?(fe(),we("h4",bS," House Price: $"+Je(t.property[t.players[t.currentTurnIndex].currentIndex].pricePerHouse),1)):Ne("",!0),s.owner?(fe(),we("span",TS,[s.getCalculatedRent?(fe(),we("h4",AS,"Rent: $"+Je(s.getCalculatedRent),1)):Ne("",!0),H("h4",null,"Owner: "+Je(s.owner),1)])):(fe(),we("span",CS,[H("h4",null,"Price: $"+Je(t.property[t.players[t.currentTurnIndex].currentIndex].price),1)]))])):Ne("",!0),t.busy&&!t.isIncomeTaxIndex&&!t.lastOption?(fe(),we("section",wS,[RS,s.isPurchasable?(fe(),we("button",{key:0,disabled:s.isOwned,onClick:e[0]||(e[0]=(...a)=>s.buyProperty&&s.buyProperty(...a))},"Buy",8,PS)):Ne("",!0),H("button",{onClick:e[1]||(e[1]=(...a)=>s.nextTurn&&s.nextTurn(...a))},"Pass")])):Ne("",!0)]),H("div",null,[t.property[t.players[t.currentTurnIndex].currentIndex].cardUrl&&!t.property[t.players[t.currentTurnIndex].currentIndex].mortgaged?(fe(),we("img",{key:0,class:"image-class",src:t.property[t.players[t.currentTurnIndex].currentIndex].cardUrl,alt:t.property[t.players[t.currentTurnIndex].currentIndex].name},null,8,LS)):Ne("",!0),t.property[t.players[t.currentTurnIndex].currentIndex].mortgageCardUrl&&t.property[t.players[t.currentTurnIndex].currentIndex].mortgaged?(fe(),we("img",{key:1,class:"image-class",src:t.property[t.players[t.currentTurnIndex].currentIndex].mortgageCardUrl,alt:t.property[t.players[t.currentTurnIndex].currentIndex].name},null,8,IS)):Ne("",!0)])])]),_:1})}const DS=mt(vS,[["render",US],["__scopeId","data-v-bc088e4c"]]);const OS={props:["players","property","currentTurnIndex"],emits:["buy-house","sell-house","mortgage","un-mortgage"],computed:{noOfHouses(){const n=this;return function(e){return n.houseIsPurchasable(e)?this.property[e].noOfHouses:!1}},calculatedRent(){const n=this;return function(e){const t=n.players[n.currentTurnIndex],i=n.property[e],r=n.players.find(o=>o.name===i.ownedBy),s=n.property.filter(o=>o.street===i.street&&o.ownedBy===r.name).length;return i.street==="Transportation"?i.rent[r.role.toLowerCase()][s-1]:i.street==="Utilities"?t.role.toLowerCase()==="monopolist"&&s>1?" x10 Dice Roll":" x4 Dice Roll":r.role.toLowerCase()==="monopolist"&&i.noOfHouses===0&&s>1?i.monopolistTwoPropertyPrice:i.rent[r.role.toLowerCase()][i.noOfHouses]}},houseIsPurchasable(){const n=this;return function(e){if(n.property[e].pricePerHouse===0)return!1;const t=n.players[n.currentTurnIndex],i=n.property[e].street,r=n.property.filter(s=>s.street===i&&s.ownedBy===t.name).length;return t.role.toLowerCase()==="monopolist"&&r>1?!0:t.role.toLowerCase()==="competitor"}}},methods:{buyHouse(n){this.$emit("buy-house",n)},sellHouse(n){this.$emit("sell-house",n)},mortgage(n){this.$emit("mortgage",n)},unMortgage(n){this.$emit("un-mortgage",n)},trade(){this.$emit("trade")}}},NS={key:0},FS=["src","alt"],BS=["src","alt"],HS={key:0},kS=["disabled"],zS=["onClick"],GS={key:2},VS=["onClick"],WS=["disabled"],XS=["onClick"],qS={key:4},jS=["onClick"];function YS(n,e,t,i,r,s){const o=nt("inner-base-card"),a=nt("base-card");return fe(),tt(a,null,{header:st(()=>[Ft("Your Property")]),default:st(()=>[t.players[t.currentTurnIndex].propertyOwned.length===0?(fe(),we("p",NS,"None")):Ne("",!0),(fe(!0),we(ht,null,En(t.players[t.currentTurnIndex].propertyOwned,l=>(fe(),we("div",{key:l},[xt(o,null,{header:st(()=>[Ft(Je(t.property[l].name)+" - "+Je(t.property[l].street),1)]),default:st(()=>[H("div",null,[t.property[l].mortgaged?Ne("",!0):(fe(),we("img",{key:0,class:"card-image",src:t.property[l].cardUrl,alt:l},null,8,FS)),t.property[l].mortgaged?(fe(),we("img",{key:1,class:"card-image",src:t.property[l].mortgageCardUrl,alt:l},null,8,BS)):Ne("",!0)]),s.noOfHouses(l)?(fe(),we("h4",HS,"No of Houses: "+Je(s.noOfHouses(l)),1)):Ne("",!0),H("h4",null,"Rent: $"+Je(s.calculatedRent(l)),1),s.houseIsPurchasable(l)?(fe(),we("div",{key:1,disabled:t.players[t.currentTurnIndex].money<t.property[l].pricePerHouse},[H("h4",null,"Cost: $"+Je(t.property[l].pricePerHouse),1),H("button",{onClick:c=>s.buyHouse(l)},"Buy House",8,zS)],8,kS)):Ne("",!0),t.property[l].noOfHouses>0?(fe(),we("div",GS,[H("h4",null,"Sell: $"+Je(t.property[l].pricePerHouse/2),1),H("button",{onClick:c=>s.sellHouse(l)},"Sell House",8,VS)])):Ne("",!0),t.property[l].mortgaged?Ne("",!0):(fe(),we("div",{key:3,disabled:t.property[l].noOfHouses>0},[H("h4",null,"Mortgage: $"+Je(t.property[l].price/2),1),t.property[l].noOfHouses===0?(fe(),we("button",{key:0,onClick:c=>s.mortgage(l)},"Mortgage",8,XS)):Ne("",!0)],8,WS)),t.property[l].mortgaged?(fe(),we("div",qS,[H("h4",null,"Un-Mortgage: $"+Je(t.property[l].unMortgagePrice),1),H("button",{onClick:c=>s.unMortgage(l)},"Un-Mortgage",8,jS)])):Ne("",!0)]),_:2},1024)]))),128))]),_:1})}const $S=mt(OS,[["render",YS],["__scopeId","data-v-5514ca6b"]]);const KS={props:["players","property","currentTurnIndex"],emits:["collect-money","pay-money","go-to-property","next-turn"],data(){return{currentAction:"collect",collect:{from:"Treasurer",amount:0},pay:{from:"Treasurer",amount:0},goTo:""}},methods:{collectMoney(){this.$emit("collect-money",this.collect.from,this.collect.amount)},payMoney(){this.$emit("pay-money",this.pay.from,this.pay.amount)},goToProperty(){this.$emit("go-to-property",this.goTo)},nextTurn(){this.$emit("next-turn")},clearCollectField(){this.collect.from="",this.collect.amount=0},clearPayField(){this.pay.from="",this.pay.amount=0},clearGoToField(){this.goTo=""},selectAction(n){this.currentAction=n}}},Kt=n=>(Hi("data-v-6933bcfa"),n=n(),ki(),n),ZS={class:"card-option"},JS=Kt(()=>H("h2",null,"Collect",-1)),QS={class:"container"},eE=Kt(()=>H("h2",null,"From",-1)),tE=Kt(()=>H("option",{value:"Treasurer"},"Treasurer",-1)),nE=Kt(()=>H("option",{value:"Monopolist"},"Monopolist",-1)),iE=Kt(()=>H("option",{value:"Competitor"},"Competitor",-1)),rE=["value"],sE=Kt(()=>H("h4",null,"Amount",-1)),oE=Kt(()=>H("h2",null,"Pay",-1)),aE={class:"container"},lE=Kt(()=>H("h4",null,"To",-1)),cE=Kt(()=>H("option",{value:"Treasurer"},"Treasurer",-1)),uE=Kt(()=>H("option",{value:"Monopolist"},"Monopolist",-1)),dE=Kt(()=>H("option",{value:"Competitor"},"Competitor",-1)),fE=["value"],hE=Kt(()=>H("h4",null,"Amount",-1)),pE=Kt(()=>H("h2",null,"Go To",-1)),mE=Kt(()=>H("h4",null,"Property",-1)),gE=["value"];function _E(n,e,t,i,r,s){const o=nt("inner-base-card"),a=nt("base-card");return fe(),tt(a,null,{header:st(()=>[Ft("Pick Card")]),default:st(()=>[H("div",ZS,[H("button",{class:nn(["btn",{active:r.currentAction==="collect"}]),onClick:e[0]||(e[0]=l=>s.selectAction("collect"))}," Collect ",2),H("button",{class:nn(["btn",{active:r.currentAction==="pay"}]),onClick:e[1]||(e[1]=l=>s.selectAction("pay"))}," Pay ",2),H("button",{class:nn(["btn",{active:r.currentAction==="go-to"}]),onClick:e[2]||(e[2]=l=>s.selectAction("go-to"))}," Go-to ",2),H("button",{class:"btn",onClick:e[3]||(e[3]=(...l)=>s.nextTurn&&s.nextTurn(...l))},"Continue")]),r.currentAction==="collect"?(fe(),tt(o,{key:0},{default:st(()=>[JS,H("section",QS,[H("div",null,[eE,cn(H("select",{name:"collectFrom","onUpdate:modelValue":e[4]||(e[4]=l=>r.collect.from=l)},[tE,nE,iE,(fe(!0),we(ht,null,En(t.players.filter(l=>l.name!==t.players[t.currentTurnIndex].name),l=>(fe(),we("option",{value:l.name},Je(l.name),9,rE))),256))],512),[[Kr,r.collect.from]])]),H("div",null,[sE,cn(H("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=l=>r.collect.amount=l),min:"0",max:"100"},null,512),[[yr,r.collect.amount,void 0,{number:!0}]])]),H("button",{onClick:e[6]||(e[6]=(...l)=>s.collectMoney&&s.collectMoney(...l))},"Collect")])]),_:1})):Ne("",!0),r.currentAction==="pay"?(fe(),tt(o,{key:1},{default:st(()=>[oE,H("section",aE,[H("div",null,[lE,cn(H("select",{name:"payFrom","onUpdate:modelValue":e[7]||(e[7]=l=>r.pay.from=l)},[cE,uE,dE,(fe(!0),we(ht,null,En(t.players.filter(l=>l.name!==t.players[t.currentTurnIndex].name),l=>(fe(),we("option",{value:l.name},Je(l.name),9,fE))),256))],512),[[Kr,r.pay.from,void 0,{number:!0}]])]),H("div",null,[hE,cn(H("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=l=>r.pay.amount=l),min:"0",max:"100"},null,512),[[yr,r.pay.amount,void 0,{number:!0}]])]),H("button",{onClick:e[9]||(e[9]=(...l)=>s.payMoney&&s.payMoney(...l))},"Pay")])]),_:1})):Ne("",!0),r.currentAction==="go-to"?(fe(),tt(o,{key:2},{default:st(()=>[pE,H("div",null,[mE,cn(H("select",{name:"goTo","onUpdate:modelValue":e[10]||(e[10]=l=>r.goTo=l)},[(fe(!0),we(ht,null,En(t.property,l=>(fe(),we("option",{value:l.name},Je(l.name),9,gE))),256))],512),[[Kr,r.goTo]])]),H("button",{onClick:e[11]||(e[11]=(...l)=>s.goToProperty&&s.goToProperty(...l))},"Go")]),_:1})):Ne("",!0)]),_:1})}const vE=mt(KS,[["render",_E],["__scopeId","data-v-6933bcfa"]]),xE={emits:["bail-out"]};function yE(n,e,t,i,r,s){const o=nt("base-card");return fe(),tt(o,null,{header:st(()=>[Ft("Bail Out from Jail")]),default:st(()=>[H("button",{onClick:e[0]||(e[0]=a=>n.$emit("bail-out"))},"Pay")]),_:1})}const ME=mt(xE,[["render",yE]]),SE={props:["actualIncomeTax"],emits:["pay-actual-income-tax","pay-regular-income-tax"]};function EE(n,e,t,i,r,s){const o=nt("base-card");return fe(),tt(o,null,{header:st(()=>[Ft("Pay Income Tax")]),default:st(()=>[H("button",{onClick:e[0]||(e[0]=a=>n.$emit("pay-actual-income-tax",t.actualIncomeTax))}," Pay $"+Je(t.actualIncomeTax),1),H("button",{onClick:e[1]||(e[1]=a=>n.$emit("pay-regular-income-tax"))},"pay $200")]),_:1})}const bE=mt(SE,[["render",EE]]);const TE={},AE={class:"container"},CE={key:0};function wE(n,e,t,i,r,s){return fe(),we("div",AE,[n.$slots.header?(fe(),we("h2",CE,[is(n.$slots,"header",{},void 0,!0)])):Ne("",!0),is(n.$slots,"default",{},void 0,!0)])}const RE=mt(TE,[["render",wE],["__scopeId","data-v-e3862955"]]);const PE={},LE={class:"container"},IE={key:0};function UE(n,e,t,i,r,s){return fe(),we("div",LE,[n.$slots.header?(fe(),we("h2",IE,[is(n.$slots,"header",{},void 0,!0)])):Ne("",!0),is(n.$slots,"default",{},void 0,!0)])}const DE=mt(PE,[["render",UE],["__scopeId","data-v-906e9455"]]);const OE={},NE=n=>(Hi("data-v-79ed1c21"),n=n(),ki(),n),FE=NE(()=>H("div",null,null,-1)),BE={open:""};function HE(n,e,t,i,r,s){return fe(),we(ht,null,[FE,H("dialog",BE,[is(n.$slots,"default",{},void 0,!0)])],64)}const kE=mt(OE,[["render",HE],["__scopeId","data-v-79ed1c21"]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const or=typeof window<"u";function zE(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const rt=Object.assign;function xa(n,e){const t={};for(const i in e){const r=e[i];t[i]=bn(r)?r.map(n):n(r)}return t}const Jr=()=>{},bn=Array.isArray,GE=/\/$/,VE=n=>n.replace(GE,"");function ya(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=jE(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function WE(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Uu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function XE(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Tr(e.matched[i],t.matched[r])&&Rf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Tr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Rf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!qE(n[t],e[t]))return!1;return!0}function qE(n,e){return bn(n)?Du(n,e):bn(e)?Du(e,n):n===e}function Du(n,e){return bn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function jE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var us;(function(n){n.pop="pop",n.push="push"})(us||(us={}));var Qr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qr||(Qr={}));function YE(n){if(!n)if(or){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),VE(n)}const $E=/^[^#]+#/;function KE(n,e){return n.replace($E,"#")+e}function ZE(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Io=()=>({left:window.pageXOffset,top:window.pageYOffset});function JE(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=ZE(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ou(n,e){return(history.state?history.state.position-e:-1)+n}const Xa=new Map;function QE(n,e){Xa.set(n,e)}function eb(n){const e=Xa.get(n);return Xa.delete(n),e}let tb=()=>location.protocol+"//"+location.host;function Pf(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Uu(l,"")}return Uu(t,n)+i+r}function nb(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const m=Pf(n,location),x=t.value,_=e.value;let p=0;if(f){if(t.value=m,e.value=f,o&&o===x){o=null;return}p=_?f.position-_.position:0}else i(m);r.forEach(h=>{h(t.value,x,{delta:p,type:us.pop,direction:p?p>0?Qr.forward:Qr.back:Qr.unknown})})};function l(){o=t.value}function c(f){r.push(f);const m=()=>{const x=r.indexOf(f);x>-1&&r.splice(x,1)};return s.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(rt({},f.state,{scroll:Io()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Nu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Io():null}}function ib(n){const{history:e,location:t}=window,i={value:Pf(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:tb()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](f)}}function o(l,c){const u=rt({},e.state,Nu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=rt({},r.value,e.state,{forward:l,scroll:Io()});s(u.current,u,!0);const d=rt({},Nu(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function rb(n){n=YE(n);const e=ib(n),t=nb(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=rt({location:"",base:n,go:i,createHref:KE.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function sb(n){return typeof n=="string"||n&&typeof n=="object"}function Lf(n){return typeof n=="string"||typeof n=="symbol"}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},If=Symbol("");var Fu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Fu||(Fu={}));function Ar(n,e){return rt(new Error,{type:n,[If]:!0},e)}function Hn(n,e){return n instanceof Error&&If in n&&(e==null||!!(n.type&e))}const Bu="[^/]+?",ob={sensitive:!1,strict:!1,start:!0,end:!0},ab=/[.+*?^${}()[\]/\\]/g;function lb(n,e){const t=rt({},ob,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let m=40+(t.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(ab,"\\$&"),m+=40;else if(f.type===1){const{value:x,repeatable:_,optional:p,regexp:h}=f;s.push({name:x,repeatable:_,optional:p});const T=h||Bu;if(T!==Bu){m+=10;try{new RegExp(`(${T})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${x}" (${T}): `+b.message)}}let S=_?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(S=p&&c.length<2?`(?:/${S})`:"/"+S),p&&(S+="?"),r+=S,m+=20,p&&(m+=-8),_&&(m+=-20),T===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",x=s[f-1];d[x.name]=m&&x.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:x,repeatable:_,optional:p}=m,h=x in c?c[x]:"";if(bn(h)&&!_)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const T=bn(h)?h.join("/"):h;if(!T)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${x}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function cb(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ub(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=cb(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Hu(i))return 1;if(Hu(r))return-1}return r.length-i.length}function Hu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const db={type:0,value:""},fb=/[a-zA-Z0-9_]/;function hb(n){if(!n)return[[]];if(n==="/")return[[db]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:fb.test(l)?f():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function pb(n,e,t){const i=lb(hb(n.path),t),r=rt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function mb(n,e){const t=[],i=new Map;e=Gu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,f){const m=!f,x=gb(u);x.aliasOf=f&&f.record;const _=Gu(e,u),p=[x];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of S)p.push(rt({},x,{components:f?f.record.components:x.components,path:b,aliasOf:f?f.record:x}))}let h,T;for(const S of p){const{path:b}=S;if(d&&b[0]!=="/"){const C=d.record.path,P=C[C.length-1]==="/"?"":"/";S.path=d.record.path+(b&&P+b)}if(h=pb(S,d,_),f?f.alias.push(h):(T=T||h,T!==h&&T.alias.push(h),m&&u.name&&!zu(h)&&o(u.name)),x.children){const C=x.children;for(let P=0;P<C.length;P++)s(C[P],h,f&&f.children[P])}f=f||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&l(h)}return T?()=>{o(T)}:Jr}function o(u){if(Lf(u)){const d=i.get(u);d&&(i.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let d=0;for(;d<t.length&&ub(u,t[d])>=0&&(u.record.path!==t[d].record.path||!Uf(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!zu(u)&&i.set(u.record.name,u)}function c(u,d){let f,m={},x,_;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Ar(1,{location:u});_=f.record.name,m=rt(ku(d.params,f.keys.filter(T=>!T.optional).map(T=>T.name)),u.params&&ku(u.params,f.keys.map(T=>T.name))),x=f.stringify(m)}else if("path"in u)x=u.path,f=t.find(T=>T.re.test(x)),f&&(m=f.parse(x),_=f.record.name);else{if(f=d.name?i.get(d.name):t.find(T=>T.re.test(d.path)),!f)throw Ar(1,{location:u,currentLocation:d});_=f.record.name,m=rt({},d.params,u.params),x=f.stringify(m)}const p=[];let h=f;for(;h;)p.unshift(h.record),h=h.parent;return{name:_,path:x,params:m,matched:p,meta:vb(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ku(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function gb(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:_b(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function _b(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function zu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function vb(n){return n.reduce((e,t)=>rt(e,t.meta),{})}function Gu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Uf(n,e){return e.children.some(t=>t===n||Uf(n,t))}const Df=/#/g,xb=/&/g,yb=/\//g,Mb=/=/g,Sb=/\?/g,Of=/\+/g,Eb=/%5B/g,bb=/%5D/g,Nf=/%5E/g,Tb=/%60/g,Ff=/%7B/g,Ab=/%7C/g,Bf=/%7D/g,Cb=/%20/g;function Ml(n){return encodeURI(""+n).replace(Ab,"|").replace(Eb,"[").replace(bb,"]")}function wb(n){return Ml(n).replace(Ff,"{").replace(Bf,"}").replace(Nf,"^")}function qa(n){return Ml(n).replace(Of,"%2B").replace(Cb,"+").replace(Df,"%23").replace(xb,"%26").replace(Tb,"`").replace(Ff,"{").replace(Bf,"}").replace(Nf,"^")}function Rb(n){return qa(n).replace(Mb,"%3D")}function Pb(n){return Ml(n).replace(Df,"%23").replace(Sb,"%3F")}function Lb(n){return n==null?"":Pb(n).replace(yb,"%2F")}function po(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Ib(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Of," "),o=s.indexOf("="),a=po(o<0?s:s.slice(0,o)),l=o<0?null:po(s.slice(o+1));if(a in e){let c=e[a];bn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Vu(n){let e="";for(let t in n){const i=n[t];if(t=Rb(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(bn(i)?i.map(s=>s&&qa(s)):[i&&qa(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Ub(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=bn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Db=Symbol(""),Wu=Symbol(""),Sl=Symbol(""),Hf=Symbol(""),ja=Symbol("");function Gr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ii(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Ar(4,{from:t,to:e})):d instanceof Error?a(d):sb(d)?a(Ar(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Ma(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Ob(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ii(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=zE(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ii(f,t,i,s,o)()}))}}return r}function Ob(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Xu(n){const e=Xn(Sl),t=Xn(Hf),i=_n(()=>e.resolve(dr(n.to))),r=_n(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Tr.bind(null,u));if(f>-1)return f;const m=qu(l[c-2]);return c>1&&qu(u)===m&&d[d.length-1].path!==m?d.findIndex(Tr.bind(null,l[c-2])):f}),s=_n(()=>r.value>-1&&Hb(t.params,i.value.params)),o=_n(()=>r.value>-1&&r.value===t.matched.length-1&&Rf(t.params,i.value.params));function a(l={}){return Bb(l)?e[dr(n.replace)?"replace":"push"](dr(n.to)).catch(Jr):Promise.resolve()}return{route:i,href:_n(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Nb=Cd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xu,setup(n,{slots:e}){const t=xo(Xu(n)),{options:i}=Xn(Sl),r=_n(()=>({[ju(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[ju(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Wd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Fb=Nb;function Bb(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Hb(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!bn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function qu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ju=(n,e,t)=>n??e??t,kb=Cd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Xn(ja),r=_n(()=>n.route||i.value),s=Xn(Wu,0),o=_n(()=>{let c=dr(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=_n(()=>r.value.matched[o.value]);Zs(Wu,_n(()=>o.value+1)),Zs(Db,a),Zs(ja,r);const l=Ch();return Ks(()=>[l.value,a.value,n.name],([c,u,d],[f,m,x])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Tr(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Yu(t.default,{Component:f,route:c});const m=d.props[u],x=m?m===!0?c.params:typeof m=="function"?m(c):m:null,p=Wd(f,rt({},x,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Yu(t.default,{Component:p,route:c})||p}}});function Yu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const zb=kb;function Gb(n){const e=mb(n.routes,n),t=n.parseQuery||Ib,i=n.stringifyQuery||Vu,r=n.history,s=Gr(),o=Gr(),a=Gr(),l=wh(ti);let c=ti;or&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xa.bind(null,O=>""+O),d=xa.bind(null,Lb),f=xa.bind(null,po);function m(O,le){let J,he;return Lf(O)?(J=e.getRecordMatcher(O),he=le):he=O,e.addRoute(he,J)}function x(O){const le=e.getRecordMatcher(O);le&&e.removeRoute(le)}function _(){return e.getRoutes().map(O=>O.record)}function p(O){return!!e.getRecordMatcher(O)}function h(O,le){if(le=rt({},le||l.value),typeof O=="string"){const R=ya(t,O,le.path),F=e.resolve({path:R.path},le),B=r.createHref(R.fullPath);return rt(R,F,{params:f(F.params),hash:po(R.hash),redirectedFrom:void 0,href:B})}let J;if("path"in O)J=rt({},O,{path:ya(t,O.path,le.path).path});else{const R=rt({},O.params);for(const F in R)R[F]==null&&delete R[F];J=rt({},O,{params:d(R)}),le.params=d(le.params)}const he=e.resolve(J,le),Ce=O.hash||"";he.params=u(f(he.params));const g=WE(i,rt({},O,{hash:wb(Ce),path:he.path})),A=r.createHref(g);return rt({fullPath:g,hash:Ce,query:i===Vu?Ub(O.query):O.query||{}},he,{redirectedFrom:void 0,href:A})}function T(O){return typeof O=="string"?ya(t,O,l.value.path):rt({},O)}function S(O,le){if(c!==O)return Ar(8,{from:le,to:O})}function b(O){return L(O)}function C(O){return b(rt(T(O),{replace:!0}))}function P(O){const le=O.matched[O.matched.length-1];if(le&&le.redirect){const{redirect:J}=le;let he=typeof J=="function"?J(O):J;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=T(he):{path:he},he.params={}),rt({query:O.query,hash:O.hash,params:"path"in he?{}:O.params},he)}}function L(O,le){const J=c=h(O),he=l.value,Ce=O.state,g=O.force,A=O.replace===!0,R=P(J);if(R)return L(rt(T(R),{state:typeof R=="object"?rt({},Ce,R.state):Ce,force:g,replace:A}),le||J);const F=J;F.redirectedFrom=le;let B;return!g&&XE(i,he,J)&&(B=Ar(16,{to:F,from:he}),ge(he,he,!0,!1)),(B?Promise.resolve(B):w(F,he)).catch($=>Hn($)?Hn($,2)?$:ae($):re($,F,he)).then($=>{if($){if(Hn($,2))return L(rt({replace:A},T($.to),{state:typeof $.to=="object"?rt({},Ce,$.to.state):Ce,force:g}),le||F)}else $=ne(F,he,!0,A,Ce);return Q(F,he,$),$})}function Y(O,le){const J=S(O,le);return J?Promise.reject(J):Promise.resolve()}function M(O){const le=de.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(O):O()}function w(O,le){let J;const[he,Ce,g]=Vb(O,le);J=Ma(he.reverse(),"beforeRouteLeave",O,le);for(const R of he)R.leaveGuards.forEach(F=>{J.push(ii(F,O,le))});const A=Y.bind(null,O,le);return J.push(A),Ae(J).then(()=>{J=[];for(const R of s.list())J.push(ii(R,O,le));return J.push(A),Ae(J)}).then(()=>{J=Ma(Ce,"beforeRouteUpdate",O,le);for(const R of Ce)R.updateGuards.forEach(F=>{J.push(ii(F,O,le))});return J.push(A),Ae(J)}).then(()=>{J=[];for(const R of g)if(R.beforeEnter)if(bn(R.beforeEnter))for(const F of R.beforeEnter)J.push(ii(F,O,le));else J.push(ii(R.beforeEnter,O,le));return J.push(A),Ae(J)}).then(()=>(O.matched.forEach(R=>R.enterCallbacks={}),J=Ma(g,"beforeRouteEnter",O,le),J.push(A),Ae(J))).then(()=>{J=[];for(const R of o.list())J.push(ii(R,O,le));return J.push(A),Ae(J)}).catch(R=>Hn(R,8)?R:Promise.reject(R))}function Q(O,le,J){a.list().forEach(he=>M(()=>he(O,le,J)))}function ne(O,le,J,he,Ce){const g=S(O,le);if(g)return g;const A=le===ti,R=or?history.state:{};J&&(he||A?r.replace(O.fullPath,rt({scroll:A&&R&&R.scroll},Ce)):r.push(O.fullPath,Ce)),l.value=O,ge(O,le,J,A),ae()}let pe;function D(){pe||(pe=r.listen((O,le,J)=>{const he=h(O),Ce=P(he);if(Ce){L(rt(Ce,{replace:!0}),he).catch(Jr);return}c=he;const g=l.value;or&&QE(Ou(g.fullPath,J.delta),Io()),w(he,g).catch(A=>Hn(A,12)?A:Hn(A,2)?(L(A.to,he).then(R=>{Hn(R,20)&&!J.delta&&J.type===us.pop&&r.go(-1,!1)}).catch(Jr),Promise.reject()):(J.delta&&r.go(-J.delta,!1),re(A,he,g))).then(A=>{A=A||ne(he,g,!1),A&&(J.delta&&!Hn(A,8)?r.go(-J.delta,!1):J.type===us.pop&&Hn(A,20)&&r.go(-1,!1)),Q(he,g,A)}).catch(Jr)}))}let X=Gr(),Z=Gr(),k;function re(O,le,J){ae(O);const he=Z.list();return he.length?he.forEach(Ce=>Ce(O,le,J)):console.error(O),Promise.reject(O)}function ue(){return k&&l.value!==ti?Promise.resolve():new Promise((O,le)=>{X.add([O,le])})}function ae(O){return k||(k=!O,D(),X.list().forEach(([le,J])=>O?J(O):le()),X.reset()),O}function ge(O,le,J,he){const{scrollBehavior:Ce}=n;if(!or||!Ce)return Promise.resolve();const g=!J&&eb(Ou(O.fullPath,0))||(he||!J)&&history.state&&history.state.scroll||null;return xd().then(()=>Ce(O,le,g)).then(A=>A&&JE(A)).catch(A=>re(A,O,le))}const _e=O=>r.go(O);let q;const de=new Set,be={currentRoute:l,listening:!0,addRoute:m,removeRoute:x,hasRoute:p,getRoutes:_,resolve:h,options:n,push:b,replace:C,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:ue,install(O){const le=this;O.component("RouterLink",Fb),O.component("RouterView",zb),O.config.globalProperties.$router=le,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>dr(l)}),or&&!q&&l.value===ti&&(q=!0,b(r.location).catch(Ce=>{}));const J={};for(const Ce in ti)Object.defineProperty(J,Ce,{get:()=>l.value[Ce],enumerable:!0});O.provide(Sl,le),O.provide(Hf,ud(J)),O.provide(ja,l);const he=O.unmount;de.add(O),O.unmount=function(){de.delete(O),de.size<1&&(c=ti,pe&&pe(),pe=null,l.value=ti,q=!1,k=!1),he()}}};function Ae(O){return O.reduce((le,J)=>le.then(()=>M(J)),Promise.resolve())}return be}function Vb(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Tr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Tr(c,l))||r.push(l))}return[t,i,r]}Gb({history:rb(),routes:[{name:"Start",path:"/",components:{addPlayer:wf}}]});const Zt=mm(FM);Zt.component("add-player",wf);Zt.component("player-details",aS);Zt.component("player",pS);Zt.component("dice-roll",_S);Zt.component("board-details",DS);Zt.component("player-property",$S);Zt.component("card-option",vE);Zt.component("bail-out-of-jail",ME);Zt.component("income-tax",bE);Zt.component("trade-property",qd);Zt.component("base-card",RE);Zt.component("inner-base-card",DE);Zt.component("the-modal",kE);Zt.mount("#app");
