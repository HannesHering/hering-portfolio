import ae from"./CIZSjdFL.js";import{f as P,V as X,i as l,o as u,n as h,c as p,z as y,w as q,x as f,W as G,X as D,Y as x,E as te,a as S,Z as re,$ as ne,_ as ie,a0 as oe,I as O,a1 as U,h as se,H as T,g as H,R as Q,P as le,a2 as z,D as A,a3 as J,a4 as L,y as C,t as ue,r as M,F as E,C as V,b as de}from"./Br0VTcKv.js";import{_ as j}from"./DlAUqK2U.js";import{a as ce,b as ge,d as fe}from"./CymKhMXu.js";import"./BQkc-AXV.js";function ve(e,i){const t={...e};for(const n of i)delete t[n];return t}function be(e,i,t){typeof i=="string"&&(i=i.split(".").map(r=>{const a=Number(r);return isNaN(a)?r:a}));let n=e;for(const r of i){if(n==null)return t;n=n[r]}return n!==void 0?n:t}const R={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},pe=e=>Object.keys(R).reduce((t,n)=>(e[n]!==void 0&&(t[n]=e[n]),t),{}),ye=P({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const i=X();return{dynamic:l(()=>{var n,r;return e.dynamic||((r=(n=i.ui)==null?void 0:n.icons)==null?void 0:r.dynamic)})}}});function me(e,i,t,n,r,a){const o=ae;return e.dynamic?(u(),h(o,{key:0,name:e.name},null,8,["name"])):(u(),p("span",{key:1,class:y(e.name)},null,2))}const K=j(ye,[["render",me]]),he=P({inheritAttrs:!1,props:{...R,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function i(t,n,{isActive:r,isExactActive:a}){return e.exactQuery&&!ne(t.query,n.query)||e.exactHash&&t.hash!==n.hash?e.inactiveClass:e.exact&&a||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:i}}}),ke=["href","aria-disabled","role","rel","target","onClick"];function we(e,i,t,n,r,a){const o=ie;return e.to?(u(),h(o,x({key:1},e.$props,{custom:""}),{default:q(({route:s,href:d,target:c,rel:k,navigate:m,isActive:g,isExactActive:w,isExternal:B})=>[S("a",x(e.$attrs,{href:e.disabled?void 0:d,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:k,target:c,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(s,e._.provides[re]||e.$route,{isActive:g,isExactActive:w}),onClick:v=>!B&&!e.disabled&&m(v)}),[f(e.$slots,"default",G(D({isActive:e.active!==void 0?e.active:e.exact?w:g})))],16,ke)]),_:3},16)):(u(),h(te(e.as),x({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:q(()=>[f(e.$slots,"default",G(D({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const Y=j(he,[["render",we]]),Z=(e,i,t,n,r=!1)=>{const a=oe(),o=X(),s=l(()=>{var g;const c=O(i),k=O(t),m=O(n);return U((c==null?void 0:c.strategy)||((g=o.ui)==null?void 0:g.strategy),m?{wrapper:m}:{},c||{},r?be(o.ui,e,{}):{},k||{})}),d=l(()=>ve(a,["class"]));return{ui:s,attrs:d}};function Ce({ui:e,props:i}){const t=le();if(se("ButtonGroupContextConsumer",!0),T("ButtonGroupContextConsumer",!1))return{size:l(()=>i.size),rounded:l(()=>e.value.rounded)};let r=t.parent,a;for(;r&&!a;){if(r.type.name==="ButtonGroup"){a=T(`group-${r.uid}`);break}r=r.parent}const o=l(()=>a==null?void 0:a.value.children.indexOf(t));return H(()=>{a==null||a.value.register(t)}),Q(()=>{a==null||a.value.unregister(t)}),{size:l(()=>(a==null?void 0:a.value.size)||i.size),rounded:l(()=>!a||o.value===-1?e.value.rounded:a.value.children.length===1?a.value.ui.rounded:o.value===0?a.value.rounded.start:o.value===a.value.children.length-1?a.value.rounded.end:"rounded-none")}}const xe={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},_={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},Be={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},W={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{..._,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...W,option:{...W.option},arrow:{..._}});const b=U(z.ui.strategy,z.ui.button,xe),$e=P({components:{UIcon:K,ULink:Y},inheritAttrs:!1,props:{...R,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>b.default.size,validator(e){return Object.keys(b.size).includes(e)}},color:{type:String,default:()=>b.default.color,validator(e){return[...z.ui.colors,...Object.keys(b.color)].includes(e)}},variant:{type:String,default:()=>b.default.variant,validator(e){return[...Object.keys(b.variant),...Object.values(b.color).flatMap(i=>Object.keys(i))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>b.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:i}){const{ui:t,attrs:n}=Z("button",A(e,"ui"),b),{size:r,rounded:a}=Ce({ui:t,props:e}),o=l(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),s=l(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),d=l(()=>e.square||!i.default&&!e.label),c=l(()=>{var $,I;const v=((I=($=t.value.color)==null?void 0:$[e.color])==null?void 0:I[e.variant])||t.value.variant[e.variant];return J(L(t.value.base,t.value.font,a.value,t.value.size[r.value],t.value.gap[r.value],e.padded&&t.value[d.value?"square":"padding"][r.value],v==null?void 0:v.replaceAll("{color}",e.color),e.block?t.value.block:t.value.inline),e.class)}),k=l(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),m=l(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),g=l(()=>L(t.value.icon.base,t.value.icon.size[r.value],e.loading&&t.value.icon.loading)),w=l(()=>L(t.value.icon.base,t.value.icon.size[r.value],e.loading&&!o.value&&t.value.icon.loading)),B=l(()=>pe(e));return{ui:t,attrs:n,isLeading:o,isTrailing:s,isSquare:d,buttonClass:c,leadingIconName:k,trailingIconName:m,leadingIconClass:g,trailingIconClass:w,linkProps:B}}});function Ie(e,i,t,n,r,a){const o=K,s=Y;return u(),h(s,x({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:q(()=>[f(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(u(),h(o,{key:0,name:e.leadingIconName,class:y(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)]),f(e.$slots,"default",{},()=>[e.label?(u(),p("span",{key:0,class:y([e.truncate?e.ui.truncate:""])},ue(e.label),3)):C("",!0)]),f(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(u(),h(o,{key:0,name:e.trailingIconName,class:y(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)])]),_:3},16,["type","disabled","class"])}const ee=j($e,[["render",Ie]]),Se=e=>{const i=M(0);function t(a){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",i.value=a.pageX,window.addEventListener("mousemove",r),window.addEventListener("mouseup",n)}function n(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),e.value.style.removeProperty("pointer-events"),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",n)}function r(a){a.preventDefault(),e.value.style.pointerEvents="none";const o=a.pageX-i.value;i.value=a.pageX,e.value.scrollBy(-o,0)}H(()=>{e.value&&e.value.addEventListener("mousedown",t)}),Q(()=>{e.value&&e.value.removeEventListener("mousedown",t)})},N=U(z.ui.strategy,z.ui.carousel,Be),ze=P({components:{UButton:ee},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>N.default.prevButton},nextButton:{type:Object,default:()=>N.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:i}){const{ui:t,attrs:n}=Z("carousel",A(e,"ui"),N,A(e,"class")),r=M(),a=M(0),{x:o}=ce(r,{behavior:"smooth"}),{width:s}=ge(r);Se(r),fe(r,v=>{var I,F;const[$]=v;a.value=((F=(I=$==null?void 0:$.target)==null?void 0:I.firstElementChild)==null?void 0:F.clientWidth)||0});const d=l(()=>a.value?Math.round(o.value/a.value)+1:0),c=l(()=>a.value?e.items.length-Math.round(s.value/a.value)+1:0),k=l(()=>d.value<=1),m=l(()=>d.value===c.value);function g(){o.value+=a.value}function w(){o.value-=a.value}function B(v){o.value=(v-1)*a.value}return i({pages:c,page:d,prev:w,next:g,select:B}),{ui:t,attrs:n,isFirst:k,isLast:m,carouselRef:r,pages:c,currentPage:d,onClickNext:g,onClickPrev:w,onClick:B,twMerge:J}}}),Pe=["role"],qe=["aria-selected","aria-label","onClick"];function je(e,i,t,n,r,a){const o=ee;return u(),p("div",x({class:e.ui.wrapper},e.attrs),[S("div",{ref:"carouselRef",class:y([e.ui.container,"no-scrollbar"])},[(u(!0),p(E,null,V(e.items,(s,d)=>(u(),p("div",{key:d,class:y(e.ui.item),role:e.indicators?"tabpanel":null},[f(e.$slots,"default",{item:s,index:d},void 0,!0)],10,Pe))),128))],2),e.arrows?(u(),p("div",{key:0,class:y(e.ui.arrows.wrapper)},[f(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var s;return[e.prevButton?(u(),h(o,x({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(s=e.prevButton)==null?void 0:s.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):C("",!0)]},!0),f(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var s;return[e.nextButton?(u(),h(o,x({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(s=e.nextButton)==null?void 0:s.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):C("",!0)]},!0)],2)):C("",!0),e.indicators?(u(),p("div",{key:1,role:"tablist",class:y(e.ui.indicators.wrapper)},[(u(!0),p(E,null,V(e.pages,s=>f(e.$slots,"indicator",{key:s,onClick:e.onClick,active:s===e.currentPage,page:s},()=>[S("button",{type:"button",role:"tab","aria-selected":s===e.currentPage,class:y([e.ui.indicators.base,s===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${s}`,onClick:d=>e.onClick(s)},null,10,qe)],!0)),128))],2)):C("",!0)],16)}const Oe=j(ze,[["render",je],["__scopeId","data-v-f7eb6ffa"]]),Le={class:"flex justify-center items-center"},Ne=["src"],Fe=P({__name:"Carousel",setup(e){const i=["https://picsum.photos/1920/1080?random=1","https://picsum.photos/1920/1080?random=2","https://picsum.photos/1920/1080?random=3","https://picsum.photos/1920/1080?random=4","https://picsum.photos/1920/1080?random=5","https://picsum.photos/1920/1080?random=6"];return(t,n)=>{const r=Oe;return u(),p(E,null,[f(t.$slots,"default"),S("div",Le,[de(r,{items:i,ui:{item:"basis-full"},class:"carousel rounded-lg overflow-hidden",indicators:"",arrows:""},{default:q(({item:a})=>[S("img",{src:a,class:"w-full",draggable:"false"},null,8,Ne)]),_:1})])],64)}}});export{Fe as default};
