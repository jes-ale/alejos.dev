import{_ as R}from"./nuxt-layout.ef213a29.js";import{r as S,F as A,G as H,H as C,B as U,u as N,I as x,J as j,E as K,c as E,K as T,d as $,L as W,M as q,k as I,m as J,q as V,N as G,j as X,l as D}from"./entry.290d17cd.js";const Q=()=>null;function Y(...a){const n=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(n);let[r,e,t={}]=a;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??Q,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const s=N(),o=()=>s.isHydrating?s.payload.data[r]:s.static.data[r],l=()=>o()!==void 0;(!s._asyncData[r]||!t.immediate)&&(s._asyncData[r]={data:S(o()??t.default()),pending:S(!l()),error:A(s.payload._errors,r),status:S("idle")});const i={...s._asyncData[r]};i.refresh=i.execute=(c={})=>{if(s._asyncDataPromises[r]){if(c.dedupe===!1)return s._asyncDataPromises[r];s._asyncDataPromises[r].cancelled=!0}if((c._initial||s.isHydrating&&c._initial!==!1)&&l())return o();i.pending.value=!0,i.status.value="pending";const y=new Promise((f,p)=>{try{f(e(s))}catch(v){p(v)}}).then(f=>{if(y.cancelled)return s._asyncDataPromises[r];let p=f;t.transform&&(p=t.transform(f)),t.pick&&(p=Z(p,t.pick)),i.data.value=p,i.error.value=null,i.status.value="success"}).catch(f=>{if(y.cancelled)return s._asyncDataPromises[r];i.error.value=f,i.data.value=x(t.default()),i.status.value="error"}).finally(()=>{y.cancelled||(i.pending.value=!1,s.payload.data[r]=i.data.value,i.error.value&&(s.payload._errors[r]=j(i.error.value)),delete s._asyncDataPromises[r])});return s._asyncDataPromises[r]=y,s._asyncDataPromises[r]};const u=()=>i.refresh({_initial:!0}),h=t.server!==!1&&s.payload.serverRendered;{const c=K();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const f=c._nuxtOnBeforeMountCbs;c&&(H(()=>{f.forEach(p=>{p()}),f.splice(0,f.length)}),C(()=>f.splice(0,f.length)))}h&&s.isHydrating&&l()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):c&&(s.payload.serverRendered&&s.isHydrating||t.lazy)&&t.immediate?c._nuxtOnBeforeMountCbs.push(u):t.immediate&&u(),t.watch&&U(t.watch,()=>i.refresh());const y=s.hook("app:data:refresh",f=>{if(!f||f.includes(r))return i.refresh()});c&&C(y)}const d=Promise.resolve(s._asyncDataPromises[r]).then(()=>i);return Object.assign(d,i),d}function Z(a,n){const r={};for(const e of n)r[e]=a[e];return r}const z=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function tt(a,n){n?n={...z,...n}:n=z;const r=F(n);return r.dispatch(a),r.toString()}const et=Object.freeze(["prototype","__proto__","constructor"]);function F(a){let n="",r=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return a.replacer&&(t=a.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const s=Object.prototype.toString.call(t);let o="";const l=s.length;l<10?o="unknown:["+s+"]":o=s.slice(8,l-1),o=o.toLowerCase();let i=null;if((i=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+i+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):a.ignoreUnknown||this.unkown(t,o);else{let u=Object.keys(t);a.unorderedObjects&&(u=u.sort());let h=[];a.respectType!==!1&&!O(t)&&(h=et),a.excludeKeys&&(u=u.filter(c=>!a.excludeKeys(c)),h=h.filter(c=>!a.excludeKeys(c))),e("object:"+(u.length+h.length)+":");const d=c=>{this.dispatch(c),e(":"),a.excludeValues||this.dispatch(t[c]),e(",")};for(const c of u)d(c);for(const c of h)d(c)}},array(t,s){if(s=s===void 0?a.unorderedArrays!==!1:s,e("array:"+t.length+":"),!s||t.length<=1){for(const i of t)this.dispatch(i);return}const o=new Map,l=t.map(i=>{const u=F(a);u.dispatch(i);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return r=o,l.sort(),this.array(l,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,s){if(e(s),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),O(t)?this.dispatch("[native]"):this.dispatch(t.toString()),a.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),a.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const s=[...t];return this.array(s,a.unorderedSets!==!1)},set(t){e("set:");const s=[...t];return this.array(s,a.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(a.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const L="[native code] }",rt=L.length;function O(a){return typeof a!="function"?!1:Function.prototype.toString.call(a).slice(-rt)===L}class _{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||st).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const st={stringify(a){const n=[];for(let r=0;r<a.sigBytes;r++){const e=a.words[r>>>2]>>>24-r%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},nt={stringify(a){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<a.sigBytes;e+=3){const t=a.words[e>>>2]>>>24-e%4*8&255,s=a.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=a.words[e+2>>>2]>>>24-(e+2)%4*8&255,l=t<<16|s<<8|o;for(let i=0;i<4&&e*8+i*6<a.sigBytes*8;i++)r.push(n.charAt(l>>>6*(3-i)&63))}return r.join("")}},at={parse(a){const n=a.length,r=[];for(let e=0;e<n;e++)r[e>>>2]|=(a.charCodeAt(e)&255)<<24-e%4*8;return new _(r,n)}},it={parse(a){return at.parse(unescape(encodeURIComponent(a)))}};class ot{constructor(){this._data=new _,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new _,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=it.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,s=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=s}return new _(r,s)}}class ct extends ot{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const P=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ut=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],b=[];class lt extends ct{constructor(){super(...arguments),this._hash=new _([...P])}reset(){super.reset(),this._hash=new _([...P])}_doProcessBlock(n,r){const e=this._hash.words;let t=e[0],s=e[1],o=e[2],l=e[3],i=e[4],u=e[5],h=e[6],d=e[7];for(let c=0;c<64;c++){if(c<16)b[c]=n[r+c]|0;else{const B=b[c-15],w=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,m=b[c-2],M=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;b[c]=w+b[c-7]+M+b[c-16]}const y=i&u^~i&h,f=t&s^t&o^s&o,p=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),v=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),k=d+v+y+ut[c]+b[c],g=p+f;d=h,h=u,u=i,i=l+k|0,l=o,o=s,s=t,t=k+g|0}e[0]=e[0]+t|0,e[1]=e[1]+s|0,e[2]=e[2]+o|0,e[3]=e[3]+l|0,e[4]=e[4]+i|0,e[5]=e[5]+u|0,e[6]=e[6]+h|0,e[7]=e[7]+d|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ft(a){return new lt().finalize(a).toString(nt)}function ht(a,n={}){const r=typeof a=="string"?a:tt(a,n);return ft(r).slice(0,10)}function dt(a,n,r){const[e={},t]=typeof n=="string"?[{},n]:[n,r],s=E(()=>{let w=a;return typeof w=="function"&&(w=w()),x(w)}),o=e.key||ht([t,x(e.baseURL),typeof s.value=="string"?s.value:"",x(e.params||e.query)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const l=o===t?"$f"+o:o;if(!e.baseURL&&typeof s.value=="string"&&s.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:u,default:h,transform:d,pick:c,watch:y,immediate:f,...p}=e,v=T({...p,cache:typeof e.cache=="boolean"?void 0:e.cache}),k={server:i,lazy:u,default:h,transform:d,pick:c,immediate:f,watch:y===!1?[]:[v,s,...y||[]]};let g;return Y(l,()=>{var m;return(m=g==null?void 0:g.abort)==null||m.call(g),g=typeof AbortController<"u"?new AbortController:{},typeof s.value=="string"&&s.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(s.value,{signal:g.signal,...v})},k)}const pt={class:"w-full h-full group mt-36 border-t"},yt={class:"w-full h-auto text-center text-var(--color) min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed"},gt=["innerHTML"],wt=$({__name:"[id]",async setup(a){let n,r;const e=S(),t=W(),o=G().public.apiUrl,{data:l}=([n,r]=q(()=>dt(`${o}/api/${t.params.application}/page/${t.params.id}`,"$0dqtX0Lo16")),n=await n,r(),n);return l.value!==null&&(e.value=l.value.content.rendered),(i,u)=>{const h=R;return X(),I("div",null,[J(h,{name:"default"},{default:V(()=>[D("div",pt,[D("div",yt,[D("div",{innerHTML:x(e)},null,8,gt)])])]),_:1})])}}});export{wt as default};
