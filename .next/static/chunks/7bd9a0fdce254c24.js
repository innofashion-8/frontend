(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5766,e=>{"use strict";let t,i;var s,a=e.i(71645);let r={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,l=(e,t)=>{let i="",s="",a="";for(let r in e){let n=e[r];"@"==r[0]?"i"==r[1]?i=r+" "+n+";":s+="f"==r[1]?l(n,r):r+"{"+l(n,"k"==r[1]?"":t)+"}":"object"==typeof n?s+=l(n,t?t.replace(/([^,])+/g,e=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):r):null!=n&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=l.p?l.p(r,n):r+":"+n+";")}return i+(t&&a?t+"{"+a+"}":a)+s},c={},h=e=>{if("object"==typeof e){let t="";for(let i in e)t+=i+h(e[i]);return t}return e};function d(e){let t,i,s=this||{},a=e.call?e(s.p):e;return((e,t,i,s,a)=>{var r;let d=h(e),p=c[d]||(c[d]=(e=>{let t=0,i=11;for(;t<e.length;)i=101*i+e.charCodeAt(t++)>>>0;return"go"+i})(d));if(!c[p]){let t=d!==e?e:(e=>{let t,i,s=[{}];for(;t=n.exec(e.replace(o,""));)t[4]?s.shift():t[3]?(i=t[3].replace(u," ").trim(),s.unshift(s[0][i]=s[0][i]||{})):s[0][t[1]]=t[2].replace(u," ").trim();return s[0]})(e);c[p]=l(a?{["@keyframes "+p]:t}:t,i?"":"."+p)}let f=i&&c.g?c.g:null;return i&&(c.g=c[p]),r=c[p],f?t.data=t.data.replace(f,r):-1===t.data.indexOf(r)&&(t.data=s?r+t.data:t.data+r),p})(a.unshift?a.raw?(t=[].slice.call(arguments,1),i=s.p,a.reduce((e,s,a)=>{let r=t[a];if(r&&r.call){let e=r(i),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":l(e,""):!1===e?"":e}return e+s+(null==r?"":r)},"")):a.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):a,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||r})(s.target),s.g,s.o,s.k)}d.bind({g:1});let p,f,m,y=d.bind({k:1});function g(e,t){let i=this||{};return function(){let s=arguments;function a(r,n){let o=Object.assign({},r),u=o.className||a.className;i.p=Object.assign({theme:f&&f()},o),i.o=/ *go\d+/.test(u),o.className=d.apply(i,s)+(u?" "+u:""),t&&(o.ref=n);let l=e;return e[0]&&(l=o.as||e,delete o.as),m&&l[0]&&m(o),p(l,o)}return t?t(a):a}}var b=(e,t)=>"function"==typeof e?e(t):e,v=(t=0,()=>(++t).toString()),w=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},x="default",C=(e,t)=>{let{toastLimit:i}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,i)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return C(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},O=[],P={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},k={},q=(e,t=x)=>{k[t]=C(k[t]||P,e),O.forEach(([e,i])=>{e===t&&i(k[t])})},M=e=>Object.keys(k).forEach(t=>q(e,t)),E=(e=x)=>t=>{q(t,e)},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={},t=x)=>{let[i,s]=(0,a.useState)(k[t]||P),r=(0,a.useRef)(k[t]);(0,a.useEffect)(()=>(r.current!==k[t]&&s(k[t]),O.push([t,s]),()=>{let e=O.findIndex(([e])=>e===t);e>-1&&O.splice(e,1)}),[t]);let n=i.toasts.map(t=>{var i,s,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(i=e[t.type])?void 0:i.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...i,toasts:n}},Q=e=>(t,i)=>{let s,a=((e,t="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...i,id:(null==i?void 0:i.id)||v()}))(t,e,i);return E(a.toasterId||(s=a.id,Object.keys(k).find(e=>k[e].toasts.some(e=>e.id===s))))({type:2,toast:a}),a.id},S=(e,t)=>Q("blank")(e,t);S.error=Q("error"),S.success=Q("success"),S.loading=Q("loading"),S.custom=Q("custom"),S.dismiss=(e,t)=>{let i={type:3,toastId:e};t?E(t)(i):M(i)},S.dismissAll=e=>S.dismiss(void 0,e),S.remove=(e,t)=>{let i={type:4,toastId:e};t?E(t)(i):M(i)},S.removeAll=e=>S.remove(void 0,e),S.promise=(e,t,i)=>{let s=S.loading(t.loading,{...i,...null==i?void 0:i.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?b(t.success,e):void 0;return a?S.success(a,{id:s,...i,...null==i?void 0:i.success}):S.dismiss(s),e}).catch(e=>{let a=t.error?b(t.error,e):void 0;a?S.error(a,{id:s,...i,...null==i?void 0:i.error}):S.dismiss(s)}),e};var T=1e3,I=(e,t="default")=>{let{toasts:i,pausedAt:s}=D(e,t),r=(0,a.useRef)(new Map).current,n=(0,a.useCallback)((e,t=T)=>{if(r.has(e))return;let i=setTimeout(()=>{r.delete(e),o({type:4,toastId:e})},t);r.set(e,i)},[]);(0,a.useEffect)(()=>{if(s)return;let e=Date.now(),a=i.map(i=>{if(i.duration===1/0)return;let s=(i.duration||0)+i.pauseDuration-(e-i.createdAt);if(s<0){i.visible&&S.dismiss(i.id);return}return setTimeout(()=>S.dismiss(i.id,t),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[i,s,t]);let o=(0,a.useCallback)(E(t),[t]),u=(0,a.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),l=(0,a.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),c=(0,a.useCallback)(()=>{s&&o({type:6,time:Date.now()})},[s,o]),h=(0,a.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:r}=t||{},n=i.filter(t=>(t.position||r)===(e.position||r)&&t.height),o=n.findIndex(t=>t.id===e.id),u=n.filter((e,t)=>t<o&&e.visible).length;return n.filter(e=>e.visible).slice(...s?[u+1]:[0,u]).reduce((e,t)=>e+(t.height||0)+a,0)},[i]);return(0,a.useEffect)(()=>{i.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=r.get(e.id);t&&(clearTimeout(t),r.delete(e.id))}})},[i,n]),{toasts:i,handlers:{updateHeight:l,startPause:u,endPause:c,calculateOffset:h}}},j=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,$=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${$} 1s linear infinite;
`,N=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,_=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,z=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=g("div")`
  position: absolute;
`,L=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${U} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=({toast:e})=>{let{icon:t,type:i,iconTheme:s}=e;return void 0!==t?"string"==typeof t?a.createElement(G,null,t):t:"blank"===i?null:a.createElement(L,null,a.createElement(H,{...s}),"loading"!==i&&a.createElement(B,null,"error"===i?a.createElement(K,{...s}):a.createElement(z,{...s})))},Y=g("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,J=a.memo(({toast:e,position:t,style:i,children:s})=>{let r=e.height?((e,t)=>{let i=e.includes("top")?1:-1,[s,a]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*i}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*i}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=a.createElement(V,{toast:e}),o=a.createElement(Z,{...e.ariaProps},b(e.message,e));return a.createElement(Y,{className:e.className,style:{...r,...i,...e.style}},"function"==typeof s?s({icon:n,message:o}):a.createElement(a.Fragment,null,n,o))});s=a.createElement,l.p=void 0,p=s,f=void 0,m=void 0;var W=({id:e,className:t,style:i,onHeightUpdate:s,children:r})=>{let n=a.useCallback(t=>{if(t){let i=()=>{s(e,t.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return a.createElement("div",{ref:n,className:t,style:i},r)},X=d`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:i,gutter:s,children:r,toasterId:n,containerStyle:o,containerClassName:u})=>{let{toasts:l,handlers:c}=I(i,n);return a.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:u,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(i=>{let n,o,u=i.position||t,l=c.calculateOffset(i,{reverseOrder:e,gutter:s,defaultPosition:t}),h=(n=u.includes("top"),o=u.includes("center")?{justifyContent:"center"}:u.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${l*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...o});return a.createElement(W,{id:i.id,key:i.id,onHeightUpdate:c.updateHeight,className:i.visible?X:"",style:h},"custom"===i.type?b(i.message,i):r?r(i):a.createElement(J,{toast:i,position:u}))}))};e.s(["CheckmarkIcon",()=>z,"ErrorIcon",()=>K,"LoaderIcon",()=>H,"ToastBar",()=>J,"ToastIcon",()=>V,"Toaster",()=>ee,"default",()=>S,"resolveValue",()=>b,"toast",()=>S,"useToaster",()=>I,"useToasterStore",()=>D],5766)},44636,e=>{"use strict";var t=e.i(43476),i=e.i(17255),s=e.i(19273),a=e.i(86491),r=e.i(40143),n=e.i(15823),o=class extends n.Subscribable{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,i){let r=t.queryKey,n=t.queryHash??(0,s.hashQueryKeyByOptions)(r,t),o=this.get(n);return o||(o=new a.Query({client:e,queryKey:r,queryHash:n,options:e.defaultQueryOptions(t),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){r.notifyManager.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,s.matchQuery)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,s.matchQuery)(e,t)):t}notify(e){r.notifyManager.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){r.notifyManager.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){r.notifyManager.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=e.i(88587),l=e.i(36553),c=class extends u.Removable{#t;#i;#s;#a;constructor(e){super(),this.#t=e.client,this.mutationId=e.mutationId,this.#s=e.mutationCache,this.#i=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#i.includes(e)||(this.#i.push(e),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#i=this.#i.filter(t=>t!==e),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#i.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#a?.continue()??this.execute(this.state.variables)}async execute(e){let t=()=>{this.#r({type:"continue"})},i={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#a=(0,l.createRetryer)({fn:()=>this.options.mutationFn?this.options.mutationFn(e,i):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#r({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#r({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});let s="pending"===this.state.status,a=!this.#a.canStart();try{if(s)t();else{this.#r({type:"pending",variables:e,isPaused:a}),this.#s.config.onMutate&&await this.#s.config.onMutate(e,this,i);let t=await this.options.onMutate?.(e,i);t!==this.state.context&&this.#r({type:"pending",context:t,variables:e,isPaused:a})}let r=await this.#a.start();return await this.#s.config.onSuccess?.(r,e,this.state.context,this,i),await this.options.onSuccess?.(r,e,this.state.context,i),await this.#s.config.onSettled?.(r,null,this.state.variables,this.state.context,this,i),await this.options.onSettled?.(r,null,e,this.state.context,i),this.#r({type:"success",data:r}),r}catch(t){try{await this.#s.config.onError?.(t,e,this.state.context,this,i)}catch(e){Promise.reject(e)}try{await this.options.onError?.(t,e,this.state.context,i)}catch(e){Promise.reject(e)}try{await this.#s.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this,i)}catch(e){Promise.reject(e)}try{await this.options.onSettled?.(void 0,t,e,this.state.context,i)}catch(e){Promise.reject(e)}throw this.#r({type:"error",error:t}),t}finally{this.#s.runNext(this)}}#r(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),r.notifyManager.batch(()=>{this.#i.forEach(t=>{t.onMutationUpdate(e)}),this.#s.notify({mutation:this,type:"updated",action:e})})}},h=n,d=class extends h.Subscribable{constructor(e={}){super(),this.config=e,this.#n=new Set,this.#o=new Map,this.#u=0}#n;#o;#u;build(e,t,i){let s=new c({client:e,mutationCache:this,mutationId:++this.#u,options:e.defaultMutationOptions(t),state:i});return this.add(s),s}add(e){this.#n.add(e);let t=p(e);if("string"==typeof t){let i=this.#o.get(t);i?i.push(e):this.#o.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#n.delete(e)){let t=p(e);if("string"==typeof t){let i=this.#o.get(t);if(i)if(i.length>1){let t=i.indexOf(e);-1!==t&&i.splice(t,1)}else i[0]===e&&this.#o.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){let t=p(e);if("string"!=typeof t)return!0;{let i=this.#o.get(t),s=i?.find(e=>"pending"===e.state.status);return!s||s===e}}runNext(e){let t=p(e);if("string"!=typeof t)return Promise.resolve();{let i=this.#o.get(t)?.find(t=>t!==e&&t.state.isPaused);return i?.continue()??Promise.resolve()}}clear(){r.notifyManager.batch(()=>{this.#n.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#n.clear(),this.#o.clear()})}getAll(){return Array.from(this.#n)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,s.matchMutation)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,s.matchMutation)(e,t))}notify(e){r.notifyManager.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return r.notifyManager.batch(()=>Promise.all(e.map(e=>e.continue().catch(s.noop))))}};function p(e){return e.options.scope?.id}var f=e.i(75555),m=e.i(14448);function y(e){return{onFetch:(t,i)=>{let a=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,n=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u={pages:[],pageParams:[]},l=0,c=async()=>{let i=!1,c=(0,s.ensureQueryFn)(t.options,t.fetchOptions),h=async(e,a,r)=>{let n;if(i)return Promise.reject();if(null==a&&e.pages.length)return Promise.resolve(e);let o=(n={client:t.client,queryKey:t.queryKey,pageParam:a,direction:r?"backward":"forward",meta:t.options.meta},(0,s.addConsumeAwareSignal)(n,()=>t.signal,()=>i=!0),n),u=await c(o),{maxPages:l}=t.options,h=r?s.addToStart:s.addToEnd;return{pages:h(e.pages,u,l),pageParams:h(e.pageParams,a,l)}};if(r&&n.length){let e="backward"===r,t={pages:n,pageParams:o},i=(e?function(e,{pages:t,pageParams:i}){return t.length>0?e.getPreviousPageParam?.(t[0],t,i[0],i):void 0}:g)(a,t);u=await h(t,i,e)}else{let t=e??n.length;do{let e=0===l?o[0]??a.initialPageParam:g(a,u);if(l>0&&null==e)break;u=await h(u,e),l++}while(l<t)}return u};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},i):t.fetchFn=c}}}function g(e,{pages:t,pageParams:i}){let s=t.length-1;return t.length>0?e.getNextPageParam(t[s],t,i[s],i):void 0}var b=class{#l;#s;#c;#h;#d;#p;#f;#m;constructor(e={}){this.#l=e.queryCache||new o,this.#s=e.mutationCache||new d,this.#c=e.defaultOptions||{},this.#h=new Map,this.#d=new Map,this.#p=0}mount(){this.#p++,1===this.#p&&(this.#f=f.focusManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#l.onFocus())}),this.#m=m.onlineManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#l.onOnline())}))}unmount(){this.#p--,0===this.#p&&(this.#f?.(),this.#f=void 0,this.#m?.(),this.#m=void 0)}isFetching(e){return this.#l.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#s.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#l.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),i=this.#l.build(this,t),a=i.state.data;return void 0===a?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime((0,s.resolveStaleTime)(t.staleTime,i))&&this.prefetchQuery(t),Promise.resolve(a))}getQueriesData(e){return this.#l.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,i){let a=this.defaultQueryOptions({queryKey:e}),r=this.#l.get(a.queryHash),n=r?.state.data,o=(0,s.functionalUpdate)(t,n);if(void 0!==o)return this.#l.build(this,a).setData(o,{...i,manual:!0})}setQueriesData(e,t,i){return r.notifyManager.batch(()=>this.#l.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,i)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#l.get(t.queryHash)?.state}removeQueries(e){let t=this.#l;r.notifyManager.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let i=this.#l;return r.notifyManager.batch(()=>(i.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){let i={revert:!0,...t};return Promise.all(r.notifyManager.batch(()=>this.#l.findAll(e).map(e=>e.cancel(i)))).then(s.noop).catch(s.noop)}invalidateQueries(e,t={}){return r.notifyManager.batch(()=>(this.#l.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t))}refetchQueries(e,t={}){let i={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(r.notifyManager.batch(()=>this.#l.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,i);return i.throwOnError||(t=t.catch(s.noop)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(s.noop)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let i=this.#l.build(this,t);return i.isStaleByTime((0,s.resolveStaleTime)(t.staleTime,i))?i.fetch(t):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(s.noop).catch(s.noop)}fetchInfiniteQuery(e){return e.behavior=y(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(s.noop).catch(s.noop)}ensureInfiniteQueryData(e){return e.behavior=y(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return m.onlineManager.isOnline()?this.#s.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#l}getMutationCache(){return this.#s}getDefaultOptions(){return this.#c}setDefaultOptions(e){this.#c=e}setQueryDefaults(e,t){this.#h.set((0,s.hashKey)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#h.values()],i={};return t.forEach(t=>{(0,s.partialMatchKey)(e,t.queryKey)&&Object.assign(i,t.defaultOptions)}),i}setMutationDefaults(e,t){this.#d.set((0,s.hashKey)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#d.values()],i={};return t.forEach(t=>{(0,s.partialMatchKey)(e,t.mutationKey)&&Object.assign(i,t.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#c.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,s.hashQueryKeyByOptions)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===s.skipToken&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#c.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#l.clear(),this.#s.clear()}},v=e.i(12598),w=e.i(71645);function x({children:e}){let[s]=(0,w.useState)(()=>new b);return(0,t.jsx)(i.SessionProvider,{children:(0,t.jsx)(v.QueryClientProvider,{client:s,children:e})})}e.s(["default",()=>x],44636)},51862,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(18566),a=e.i(38325);function r(){let e=(0,s.useSearchParams)(),t=(0,s.useRouter)(),r=(0,s.usePathname)();return(0,i.useEffect)(()=>{let i=e?.get("error");if(i){let s="AKSES DITOLAK!",n="Anda tidak memiliki izin untuk mengakses halaman tersebut.";"unauthenticated"===i?(s="SESI HABIS",n="Silakan login terlebih dahulu untuk melanjutkan."):"unauthorized_admin"===i?n="Halaman tersebut khusus untuk Administrator.":"unauthorized_user"===i?n="Admin tidak dapat mengakses halaman khusus pengguna biasa.":"forbidden_role"===i&&(n="Anda tidak memiliki hak akses (permission) untuk menu ini."),a.default.fire({title:s,text:n,icon:"warning",confirmButtonColor:"#1c1c1b",confirmButtonText:"MENGERTI",customClass:{popup:"rounded-none border-4 border-[#1c1c1b]",title:"font-creato-title font-black uppercase",confirmButton:"rounded-none font-creato-title font-bold uppercase tracking-widest"}});let o=new URLSearchParams(e?.toString());o.delete("error");let u=`${r}${o.toString()?`?${o.toString()}`:""}`;t.replace(u,{scroll:!1})}},[e,r,t]),null}function n(){return(0,t.jsx)(i.Suspense,{fallback:null,children:(0,t.jsx)(r,{})})}e.s(["default",()=>n])}]);