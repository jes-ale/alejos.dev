import{$ as jt,e as D,a0 as Tt,O as ne,Y as X,d as A,c as Z,z as ee,r as E,o as B,H as Je,B as Et,a1 as _t,j as xe,k as Se,m as $,q as W,l as S,a2 as ae,I as K,a3 as Ot,a4 as Ft,f as Lt,s as Pt,t as At}from"./entry.290d17cd.js";function R(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,R),o}var Ye=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Ye||{}),T=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(T||{});function Xe({visible:e=!0,features:t=0,ourProps:n,theirProps:o,...r}){var i;let s=et(o,n),l=Object.assign(r,{props:s});if(e||t&2&&s.static)return ce(l);if(t&1){let a=(i=s.unmount)==null||i?0:1;return R(a,{0(){return null},1(){return ce({...r,props:{...s,hidden:!0,style:{display:"none"}}})}})}return ce(l)}function ce({props:e,attrs:t,slots:n,slot:o,name:r}){var i,s;let{as:l,...a}=tt(e,["unmount","static"]),c=(i=n.default)==null?void 0:i.call(n,o),u={};if(o){let p=!1,h=[];for(let[v,m]of Object.entries(o))typeof m=="boolean"&&(p=!0),m===!0&&h.push(v);p&&(u["data-headlessui-state"]=h.join(" "))}if(l==="template"){if(c=Ze(c??[]),Object.keys(a).length>0||Object.keys(t).length>0){let[p,...h]=c??[];if(!Mt(p)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(a).concat(Object.keys(t)).map(f=>f.trim()).filter((f,d,x)=>x.indexOf(f)===d).sort((f,d)=>f.localeCompare(d)).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let v=et((s=p.props)!=null?s:{},a),m=jt(p,v);for(let f in v)f.startsWith("on")&&(m.props||(m.props={}),m.props[f]=v[f]);return m}return Array.isArray(c)&&c.length===1?c[0]:c}return D(l,Object.assign({},a,u),{default:()=>c})}function Ze(e){return e.flatMap(t=>t.type===Tt?Ze(t.children):[t])}function et(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let o of e)for(let r in o)r.startsWith("on")&&typeof o[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(o[r])):t[r]=o[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(o=>[o,void 0])));for(let o in n)Object.assign(t,{[o](r,...i){let s=n[o];for(let l of s){if(r instanceof Event&&r.defaultPrevented)return;l(r,...i)}}});return t}function tt(e,t=[]){let n=Object.assign({},e);for(let o of t)o in n&&delete n[o];return n}function Mt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let $t=0;function Bt(){return++$t}function Nt(){return Bt()}function Pe(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let nt=Symbol("Context");var k=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(k||{});function Dt(){return rt()!==null}function rt(){return ne(nt,null)}function Rt(e){X(nt,e)}var Ht=Object.defineProperty,Vt=(e,t,n)=>t in e?Ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t,n)=>(Vt(e,typeof t!="symbol"?t+"":t,n),n);class qt{constructor(){Ae(this,"current",this.detect()),Ae(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Ut=new qt;function zt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function Ie(){let e=[],t={addEventListener(n,o,r,i){return n.addEventListener(o,r,i),t.add(()=>n.removeEventListener(o,r,i))},requestAnimationFrame(...n){let o=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(o))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let o=setTimeout(...n);t.add(()=>clearTimeout(o))},microTask(...n){let o={current:!0};return zt(()=>{o.current&&n[0]()}),t.add(()=>{o.current=!1})},style(n,o,r){let i=n.style.getPropertyValue(o);return Object.assign(n.style,{[o]:r}),this.add(()=>{Object.assign(n.style,{[o]:i})})},group(n){let o=Ie();return n(o),this.add(()=>o.dispose())},add(n){return e.push(n),()=>{let o=e.indexOf(n);if(o>=0)for(let r of e.splice(o,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}function Qt(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function ue(e,...t){e&&t.length>0&&e.classList.add(...t)}function z(e,...t){e&&t.length>0&&e.classList.remove(...t)}var pe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(pe||{});function Wt(e,t){let n=Ie();if(!e)return n.dispose;let{transitionDuration:o,transitionDelay:r}=getComputedStyle(e),[i,s]=[o,r].map(l=>{let[a=0]=l.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,u)=>u-c);return a});return i!==0?n.setTimeout(()=>t("finished"),i+s):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Me(e,t,n,o,r,i){let s=Ie(),l=i!==void 0?Qt(i):()=>{};return z(e,...r),ue(e,...t,...n),s.nextFrame(()=>{z(e,...n),ue(e,...o),s.add(Wt(e,a=>(z(e,...o,...t),ue(e,...r),l(a))))}),s.add(()=>z(e,...t,...n,...o,...r)),s.add(()=>l("cancelled")),s.dispose}function O(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let ke=Symbol("TransitionContext");var Kt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Kt||{});function Gt(){return ne(ke,null)!==null}function Jt(){let e=ne(ke,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Yt(){let e=ne(Ce,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ce=Symbol("NestingContext");function re(e){return"children"in e?re(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ot(e){let t=E([]),n=E(!1);B(()=>n.value=!0),Je(()=>n.value=!1);function o(i,s=T.Hidden){let l=t.value.findIndex(({id:a})=>a===i);l!==-1&&(R(s,{[T.Unmount](){t.value.splice(l,1)},[T.Hidden](){t.value[l].state="hidden"}}),!re(t)&&n.value&&(e==null||e()))}function r(i){let s=t.value.find(({id:l})=>l===i);return s?s.state!=="visible"&&(s.state="visible"):t.value.push({id:i,state:"visible"}),()=>o(i,T.Unmount)}return{children:t,register:r,unregister:o}}let it=Ye.RenderStrategy,Xt=A({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:o,expose:r}){let i=E(0);function s(){i.value|=k.Opening,t("beforeEnter")}function l(){i.value&=~k.Opening,t("afterEnter")}function a(){i.value|=k.Closing,t("beforeLeave")}function c(){i.value&=~k.Closing,t("afterLeave")}if(!Gt()&&Dt())return()=>D(st,{...e,onBeforeEnter:s,onAfterEnter:l,onBeforeLeave:a,onAfterLeave:c},o);let u=E(null),p=Z(()=>e.unmount?T.Unmount:T.Hidden);r({el:u,$el:u});let{show:h,appear:v}=Jt(),{register:m,unregister:f}=Yt(),d=E(h.value?"visible":"hidden"),x={value:!0},b=Nt(),y={value:!1},q=ot(()=>{!y.value&&d.value!=="hidden"&&(d.value="hidden",f(b),c())});B(()=>{let j=m(b);Je(j)}),ee(()=>{if(p.value===T.Hidden&&b){if(h.value&&d.value!=="visible"){d.value="visible";return}R(d.value,{hidden:()=>f(b),visible:()=>m(b)})}});let L=O(e.enter),g=O(e.enterFrom),w=O(e.enterTo),C=O(e.entered),P=O(e.leave),I=O(e.leaveFrom),St=O(e.leaveTo);B(()=>{ee(()=>{if(d.value==="visible"){let j=Pe(u);if(j instanceof Comment&&j.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function It(j){let le=x.value&&!v.value,_=Pe(u);!_||!(_ instanceof HTMLElement)||le||(y.value=!0,h.value&&s(),h.value||a(),j(h.value?Me(_,L,g,w,C,U=>{y.value=!1,U===pe.Finished&&l()}):Me(_,P,I,St,C,U=>{y.value=!1,U===pe.Finished&&(re(q)||(d.value="hidden",f(b),c()))})))}return B(()=>{Et([h],(j,le,_)=>{It(_),x.value=!1},{immediate:!0})}),X(Ce,q),Rt(Z(()=>R(d.value,{visible:k.Open,hidden:k.Closed})|i.value)),()=>{let{appear:j,show:le,enter:_,enterFrom:U,enterTo:pr,entered:hr,leave:gr,leaveFrom:mr,leaveTo:vr,...Le}=e,kt={ref:u},Ct={...Le,...v.value&&h.value&&Ut.isServer?{class:_t([n.class,Le.class,...L,...g])}:{}};return Xe({theirProps:Ct,ourProps:kt,slot:{},slots:o,attrs:n,features:it,visible:d.value==="visible",name:"TransitionChild"})}}}),Zt=Xt,st=A({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:o}){let r=rt(),i=Z(()=>e.show===null&&r!==null?(r.value&k.Open)===k.Open:e.show);ee(()=>{if(![!0,!1].includes(i.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let s=E(i.value?"visible":"hidden"),l=ot(()=>{s.value="hidden"}),a=E(!0),c={show:i,appear:Z(()=>e.appear||!a.value)};return B(()=>{ee(()=>{a.value=!1,i.value?s.value="visible":re(l)||(s.value="hidden")})}),X(Ce,l),X(ke,c),()=>{let u=tt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return Xe({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...o,default:()=>[D(Zt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...p,...u},o.default)]},attrs:{},features:it,visible:s.value==="visible",name:"Transition"})}}});const en={class:"shadow w-60 h-100% border-r border-black dark:border-white bg-white dark:bg-black no-scrollbar overflow-y-scroll","aria-label":"Sidebar"},tn={class:"w-5 h-full"},nn=A({__name:"SlideInPanel",props:{position:{}},setup(e){const t=E(!1),n=()=>{t.value=!t.value};return(o,r)=>(xe(),Se("div",null,[$(K(st),{show:K(t),appear:"",as:"template",enter:"transform transition ease-in-out duration-[400ms]","enter-from":"opacity-0 -translate-x-full","enter-to":"opacity-100 translate-x-0",leave:"transform duration-300 transition ease-in-out","leave-from":"opacity-100 translate-x-0","leave-to":"opacity-0 -translate-x-full "},{default:W(()=>[S("aside",en,[S("button",{class:"text-xl w-full",onClick:n},[ae(o.$slots,"isOpenButton")]),ae(o.$slots,"content")])]),_:3},8,["show"]),Ot(S("div",tn,[S("button",{class:"text-xl w-full h-full flex flex-col items-start",onClick:n},[ae(o.$slots,"isClosedButton")])],512),[[Ft,!K(t)]])]))}}),rn={class:"w-full flex flex-col lg:flex-row"},on=A({__name:"Footer",setup(e){return(t,n)=>(xe(),Se("div",rn," 2023 Jesus Alejos "))}}),N=/^[a-z0-9]+(-[a-z0-9]+)*$/,oe=(e,t,n,o="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const l=r.pop(),a=r.pop(),c={provider:r.length>0?r[0]:o,prefix:a,name:l};return t&&!G(c)?null:c}const i=r[0],s=i.split("-");if(s.length>1){const l={provider:o,prefix:s.shift(),name:s.join("-")};return t&&!G(l)?null:l}if(n&&o===""){const l={provider:o,prefix:"",name:i};return t&&!G(l,n)?null:l}return null},G=(e,t)=>e?!!((e.provider===""||e.provider.match(N))&&(t&&e.prefix===""||e.prefix.match(N))&&e.name.match(N)):!1,lt=Object.freeze({left:0,top:0,width:16,height:16}),te=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ie=Object.freeze({...lt,...te}),he=Object.freeze({...ie,body:"",hidden:!1});function sn(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}function $e(e,t){const n=sn(e,t);for(const o in he)o in te?o in e&&!(o in n)&&(n[o]=te[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function ln(e,t){const n=e.icons,o=e.aliases||Object.create(null),r=Object.create(null);function i(s){if(n[s])return r[s]=[];if(!(s in r)){r[s]=null;const l=o[s]&&o[s].parent,a=l&&i(l);a&&(r[s]=[l].concat(a))}return r[s]}return(t||Object.keys(n).concat(Object.keys(o))).forEach(i),r}function an(e,t,n){const o=e.icons,r=e.aliases||Object.create(null);let i={};function s(l){i=$e(o[l]||r[l],i)}return s(t),n.forEach(s),$e(e,i)}function at(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),n.push(r)});const o=ln(e);for(const r in o){const i=o[r];i&&(t(r,an(e,r,i)),n.push(r))}return n}const cn={provider:"",aliases:{},not_found:{},...lt};function fe(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function ct(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!fe(e,cn))return null;const n=t.icons;for(const r in n){const i=n[r];if(!r.match(N)||typeof i.body!="string"||!fe(i,he))return null}const o=t.aliases||Object.create(null);for(const r in o){const i=o[r],s=i.parent;if(!r.match(N)||typeof s!="string"||!n[s]&&!o[s]||!fe(i,he))return null}return t}const Be=Object.create(null);function un(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function F(e,t){const n=Be[e]||(Be[e]=Object.create(null));return n[t]||(n[t]=un(e,t))}function je(e,t){return ct(t)?at(t,(n,o)=>{o?e.icons[n]=o:e.missing.add(n)}):[]}function fn(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let H=!1;function ut(e){return typeof e=="boolean"&&(H=e),H}function dn(e){const t=typeof e=="string"?oe(e,!0,H):e;if(t){const n=F(t.provider,t.prefix),o=t.name;return n.icons[o]||(n.missing.has(o)?null:void 0)}}function pn(e,t){const n=oe(e,!0,H);if(!n)return!1;const o=F(n.provider,n.prefix);return fn(o,n.name,t)}function hn(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),H&&!t&&!e.prefix){let r=!1;return ct(e)&&(e.prefix="",at(e,(i,s)=>{s&&pn(i,s)&&(r=!0)})),r}const n=e.prefix;if(!G({provider:t,prefix:n,name:"a"}))return!1;const o=F(t,n);return!!je(o,e)}const ft=Object.freeze({width:null,height:null}),dt=Object.freeze({...ft,...te}),gn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,mn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ne(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const o=e.split(gn);if(o===null||!o.length)return e;const r=[];let i=o.shift(),s=mn.test(i);for(;;){if(s){const l=parseFloat(i);isNaN(l)?r.push(i):r.push(Math.ceil(l*t*n)/n)}else r.push(i);if(i=o.shift(),i===void 0)return r.join("");s=!s}}const vn=e=>e==="unset"||e==="undefined"||e==="none";function bn(e,t){const n={...ie,...e},o={...dt,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,o].forEach(m=>{const f=[],d=m.hFlip,x=m.vFlip;let b=m.rotate;d?x?b+=2:(f.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),f.push("scale(-1 1)"),r.top=r.left=0):x&&(f.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),f.push("scale(1 -1)"),r.top=r.left=0);let y;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:y=r.height/2+r.top,f.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:f.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:y=r.width/2+r.left,f.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}b%2===1&&(r.left!==r.top&&(y=r.left,r.left=r.top,r.top=y),r.width!==r.height&&(y=r.width,r.width=r.height,r.height=y)),f.length&&(i='<g transform="'+f.join(" ")+'">'+i+"</g>")});const s=o.width,l=o.height,a=r.width,c=r.height;let u,p;s===null?(p=l===null?"1em":l==="auto"?c:l,u=Ne(p,a/c)):(u=s==="auto"?a:s,p=l===null?Ne(u,c/a):l==="auto"?c:l);const h={},v=(m,f)=>{vn(f)||(h[m]=f.toString())};return v("width",u),v("height",p),h.viewBox=r.left.toString()+" "+r.top.toString()+" "+a.toString()+" "+c.toString(),{attributes:h,body:i}}const yn=/\sid="(\S+)"/g,wn="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let xn=0;function Sn(e,t=wn){const n=[];let o;for(;o=yn.exec(e);)n.push(o[1]);if(!n.length)return e;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(xn++).toString(),l=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+s+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}const ge=Object.create(null);function In(e,t){ge[e]=t}function me(e){return ge[e]||ge[""]}function Te(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Ee=Object.create(null),M=["https://api.simplesvg.com","https://api.unisvg.com"],J=[];for(;M.length>0;)M.length===1||Math.random()>.5?J.push(M.shift()):J.push(M.pop());Ee[""]=Te({resources:["https://api.iconify.design"].concat(J)});function kn(e,t){const n=Te(t);return n===null?!1:(Ee[e]=n,!0)}function _e(e){return Ee[e]}const Cn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let De=Cn();function jn(e,t){const n=_e(e);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let r=0;n.resources.forEach(s=>{r=Math.max(r,s.length)});const i=t+".json?icons=";o=n.maxURL-r-n.path.length-i.length}return o}function Tn(e){return e===404}const En=(e,t,n)=>{const o=[],r=jn(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},l=0;return n.forEach((a,c)=>{l+=a.length+1,l>=r&&c>0&&(o.push(s),s={type:i,provider:e,prefix:t,icons:[]},l=a.length),s.icons.push(a)}),o.push(s),o};function _n(e){if(typeof e=="string"){const t=_e(e);if(t)return t.path}return"/"}const On=(e,t,n)=>{if(!De){n("abort",424);return}let o=_n(t.provider);switch(t.type){case"icons":{const i=t.prefix,l=t.icons.join(","),a=new URLSearchParams({icons:l});o+=i+".json?"+a.toString();break}case"custom":{const i=t.uri;o+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;De(e+o).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Tn(s)?"abort":"next",s)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},Fn={prepare:En,send:On};function Ln(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let o={provider:"",prefix:"",name:""};return e.forEach(r=>{if(o.name===r.name&&o.prefix===r.prefix&&o.provider===r.provider)return;o=r;const i=r.provider,s=r.prefix,l=r.name,a=n[i]||(n[i]=Object.create(null)),c=a[s]||(a[s]=F(i,s));let u;l in c.icons?u=t.loaded:s===""||c.missing.has(l)?u=t.missing:u=t.pending;const p={provider:i,prefix:s,name:l};u.push(p)}),t}function pt(e,t){e.forEach(n=>{const o=n.loaderCallbacks;o&&(n.loaderCallbacks=o.filter(r=>r.id!==t))})}function Pn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach(i=>{const s=i.icons,l=s.pending.length;s.pending=s.pending.filter(a=>{if(a.prefix!==r)return!0;const c=a.name;if(e.icons[c])s.loaded.push({provider:o,prefix:r,name:c});else if(e.missing.has(c))s.missing.push({provider:o,prefix:r,name:c});else return n=!0,!0;return!1}),s.pending.length!==l&&(n||pt([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let An=0;function Mn(e,t,n){const o=An++,r=pt.bind(null,n,o);if(!t.pending.length)return r;const i={id:o,icons:t,callback:e,abort:r};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),r}function $n(e,t=!0,n=!1){const o=[];return e.forEach(r=>{const i=typeof r=="string"?oe(r,t,n):r;i&&o.push(i)}),o}var Bn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Nn(e,t,n,o){const r=e.resources.length,i=e.random?Math.floor(Math.random()*r):e.index;let s;if(e.random){let g=e.resources.slice(0);for(s=[];g.length>1;){const w=Math.floor(Math.random()*g.length);s.push(g[w]),g=g.slice(0,w).concat(g.slice(w+1))}s=s.concat(g)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const l=Date.now();let a="pending",c=0,u,p=null,h=[],v=[];typeof o=="function"&&v.push(o);function m(){p&&(clearTimeout(p),p=null)}function f(){a==="pending"&&(a="aborted"),m(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function d(g,w){w&&(v=[]),typeof g=="function"&&v.push(g)}function x(){return{startTime:l,payload:t,status:a,queriesSent:c,queriesPending:h.length,subscribe:d,abort:f}}function b(){a="failed",v.forEach(g=>{g(void 0,u)})}function y(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function q(g,w,C){const P=w!=="success";switch(h=h.filter(I=>I!==g),a){case"pending":break;case"failed":if(P||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){u=C,b();return}if(P){u=C,h.length||(s.length?L():b());return}if(m(),y(),!e.random){const I=e.resources.indexOf(g.resource);I!==-1&&I!==e.index&&(e.index=I)}a="completed",v.forEach(I=>{I(C)})}function L(){if(a!=="pending")return;m();const g=s.shift();if(g===void 0){if(h.length){p=setTimeout(()=>{m(),a==="pending"&&(y(),b())},e.timeout);return}b();return}const w={status:"pending",resource:g,callback:(C,P)=>{q(w,C,P)}};h.push(w),c++,p=setTimeout(L,e.rotate),n(g,t,w.callback)}return setTimeout(L),x}function ht(e){const t={...Bn,...e};let n=[];function o(){n=n.filter(l=>l().status==="pending")}function r(l,a,c){const u=Nn(t,l,a,(p,h)=>{o(),c&&c(p,h)});return n.push(u),u}function i(l){return n.find(a=>l(a))||null}return{query:r,find:i,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:o}}function Re(){}const de=Object.create(null);function Dn(e){if(!de[e]){const t=_e(e);if(!t)return;const n=ht(t),o={config:t,redundancy:n};de[e]=o}return de[e]}function Rn(e,t,n){let o,r;if(typeof e=="string"){const i=me(e);if(!i)return n(void 0,424),Re;r=i.send;const s=Dn(e);s&&(o=s.redundancy)}else{const i=Te(e);if(i){o=ht(i);const s=e.resources?e.resources[0]:"",l=me(s);l&&(r=l.send)}}return!o||!r?(n(void 0,424),Re):o.query(t,r,n)().abort}const He="iconify2",V="iconify",gt=V+"-count",Ve=V+"-version",mt=36e5,Hn=168;function ve(e,t){try{return e.getItem(t)}catch{}}function Oe(e,t,n){try{return e.setItem(t,n),!0}catch{}}function qe(e,t){try{e.removeItem(t)}catch{}}function be(e,t){return Oe(e,gt,t.toString())}function ye(e){return parseInt(ve(e,gt))||0}const se={local:!0,session:!0},vt={local:new Set,session:new Set};let Fe=!1;function Vn(e){Fe=e}let Q=typeof window>"u"?{}:window;function bt(e){const t=e+"Storage";try{if(Q&&Q[t]&&typeof Q[t].length=="number")return Q[t]}catch{}se[e]=!1}function yt(e,t){const n=bt(e);if(!n)return;const o=ve(n,Ve);if(o!==He){if(o){const l=ye(n);for(let a=0;a<l;a++)qe(n,V+a.toString())}Oe(n,Ve,He),be(n,0);return}const r=Math.floor(Date.now()/mt)-Hn,i=l=>{const a=V+l.toString(),c=ve(n,a);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,l))return!0}catch{}qe(n,a)}};let s=ye(n);for(let l=s-1;l>=0;l--)i(l)||(l===s-1?(s--,be(n,s)):vt[e].add(l))}function wt(){if(!Fe){Vn(!0);for(const e in se)yt(e,t=>{const n=t.data,o=t.provider,r=n.prefix,i=F(o,r);if(!je(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function qn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const o in se)yt(o,r=>{const i=r.data;return r.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function Un(e,t){Fe||wt();function n(o){let r;if(!se[o]||!(r=bt(o)))return;const i=vt[o];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=ye(r),!be(r,s+1))return;const l={cached:Math.floor(Date.now()/mt),provider:e.provider,data:t};return Oe(r,V+s.toString(),JSON.stringify(l))}t.lastModified&&!qn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Ue(){}function zn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Pn(e)}))}function Qn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:o}=e,r=e.iconsToLoad;delete e.iconsToLoad;let i;if(!r||!(i=me(n)))return;i.prepare(n,o,r).forEach(l=>{Rn(n,l,a=>{if(typeof a!="object")l.icons.forEach(c=>{e.missing.add(c)});else try{const c=je(e,a);if(!c.length)return;const u=e.pendingIcons;u&&c.forEach(p=>{u.delete(p)}),Un(e,a)}catch(c){console.error(c)}zn(e)})})}))}const Wn=(e,t)=>{const n=$n(e,!0,ut()),o=Ln(n);if(!o.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(o.loaded,o.missing,o.pending,Ue)}),()=>{a=!1}}const r=Object.create(null),i=[];let s,l;return o.pending.forEach(a=>{const{provider:c,prefix:u}=a;if(u===l&&c===s)return;s=c,l=u,i.push(F(c,u));const p=r[c]||(r[c]=Object.create(null));p[u]||(p[u]=[])}),o.pending.forEach(a=>{const{provider:c,prefix:u,name:p}=a,h=F(c,u),v=h.pendingIcons||(h.pendingIcons=new Set);v.has(p)||(v.add(p),r[c][u].push(p))}),i.forEach(a=>{const{provider:c,prefix:u}=a;r[c][u].length&&Qn(a,r[c][u])}),t?Mn(t,o,i):Ue};function Kn(e,t){const n={...e};for(const o in t){const r=t[o],i=typeof r;o in ft?(r===null||r&&(i==="string"||i==="number"))&&(n[o]=r):i===typeof n[o]&&(n[o]=o==="rotate"?r%4:r)}return n}const Gn=/[\s,]+/;function Jn(e,t){t.split(Gn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Yn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(e);return isNaN(r)?0:o(r)}else if(n!==e){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?o(i):0)}}return t}function Xn(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)n+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Zn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function er(e){return"data:image/svg+xml,"+Zn(e)}function tr(e){return'url("'+er(e)+'")'}const ze={...dt,inline:!1},nr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},rr={display:"inline-block"},we={backgroundColor:"currentColor"},xt={backgroundColor:"transparent"},Qe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},We={webkitMask:we,mask:we,background:xt};for(const e in We){const t=We[e];for(const n in Qe)t[e+n]=Qe[n]}const Y={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";Y[e+"-flip"]=t,Y[e.slice(0,1)+"-flip"]=t,Y[e+"Flip"]=t});function Ke(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Ge=(e,t)=>{const n=Kn(ze,t),o={...nr},r=t.mode||"svg",i={},s=t.style,l=typeof s=="object"&&!(s instanceof Array)?s:{};for(let f in t){const d=t[f];if(d!==void 0)switch(f){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[f]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&Jn(n,d);break;case"color":i.color=d;break;case"rotate":typeof d=="string"?n[f]=Yn(d):typeof d=="number"&&(n[f]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete o["aria-hidden"];break;default:{const x=Y[f];x?(d===!0||d==="true"||d===1)&&(n[x]=!0):ze[f]===void 0&&(o[f]=d)}}}const a=bn(e,n),c=a.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){o.style={...i,...l},Object.assign(o,c);let f=0,d=t.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),o.innerHTML=Sn(a.body,d?()=>d+"ID"+f++:"iconifyVue"),D("svg",o)}const{body:u,width:p,height:h}=e,v=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),m=Xn(u,{...c,width:p+"",height:h+""});return o.style={...i,"--svg":tr(m),width:Ke(c.width),height:Ke(c.height),...rr,...v?we:xt,...l},D("span",o)};ut(!0);In("",Fn);if(typeof document<"u"&&typeof window<"u"){wt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!hn(o))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const o="IconifyProviders["+n+"] is invalid.";try{const r=t[n];if(typeof r!="object"||!r||r.resources===void 0)continue;kn(n,r)||console.error(o)}catch{console.error(o)}}}}const or={...ie,body:""},ir=A({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=oe(e,!1,!0))===null)return this.abortLoading(),null;const o=dn(n);if(!o)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",o!==null&&(this._loadingIcon={name:e,abort:Wn([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:o,classes:r}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!t)return Ge(or,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),Ge({...ie,...t.data},n)}}),sr={class:"absolute z-0 no-scrollbar overflow-y-scroll h-screen w-screen text-black dark:text-white text-sm bg-light-50 dark:dark-700 font-sans subpixel-antialiased slashed-zero diagonal-fractions"},lr={class:"w-full h-full flex"},ar={class:"flex items-center justify-end w-full"},cr=S("div",{class:"transform",i:"carbon-caret-left"},null,-1),ur={class:"w-5 h-full flex gap-2 items-center justify-center px-1 py-2 border border-l-0 border-black dark:border-white animate-slide-in-left bg-light-400 dark:dark-900 hover:bg-light-900 dark:bg-dark-200"},fr={as:"div",class:"w-full h-full"},dr=S("section",{class:"absolute bottom-0 right-0 p-1"},[S("div",{class:"bg-light-200 dark:bg-dark-200 border border-black dark:border-white rounded h-12 w-12 flex justify-center items-center cursor-pointer bg-light-900 dark:bg-dark-900"},[S("div",{i:"carbon-send"})])],-1),yr=A({__name:"default",setup(e){return(t,n)=>{const o=nn,r=Lt("RouterView"),i=on;return xe(),Se("main",sr,[S("div",lr,[$(o,{class:"h-full w-auto",position:"left"},{isOpenButton:W(()=>[S("div",ar,[Pt(At(t.t("button.menu"))+" ",1),cr])]),isClosedButton:W(()=>[S("div",ur,[$(K(ir),{icon:"carbon:caret-right"})])]),content:W(()=>[]),_:1}),S("section",fr,[$(r)]),dr]),$(i)])}}});export{yr as default};
