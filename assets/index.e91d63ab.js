var k=Object.defineProperty;var i=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,a,u)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,b=(e,a)=>{for(var u in a||(a={}))g.call(a,u)&&v(e,u,a[u]);if(i)for(var u of i(a))U.call(a,u)&&v(e,u,a[u]);return e};import{I as y}from"./index.2acb2d56.js";import{I as F}from"./index.0c07b506.js";import{A as C}from"./AppType.addcf578.js";import{d as x}from"./index.77fe3760.js";import{u as I,a as h,_ as j,b as E,c as B}from"./en-US.ea586f2e.js";import{w as A,a as M}from"./utils.ec648b9a.js";import{_ as T}from"./elevation.63bbd565.js";import{q as _,a0 as N,e as c,o as S,c as D,i as l,j as p,F as w,Y as z,Z as L,m as s,t,a as P}from"./vendor.9c7f2147.js";import"./provide.4c9f92b2.js";import"./components.3bf2f858.js";import"./shared.99253c97.js";import"./elements.ca95ba1c.js";var R={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",textarea:"\u6587\u672C\u57DF",maxlength:"\u6700\u5927\u957F\u5EA6",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5B57\u6BB5\u6821\u9A8C",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",maxMessage:"\u6587\u672C\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E6",clearableText:"\u53EF\u6E05\u9664\u6587\u672C"},q={basicUsage:"Basic Usage",plainMode:"Plain Mode",textarea:"Textarea",maxlength:"Maxlength",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",placeholder:"Please enter text",maxMessage:"Text length must be greater than 6",clearableText:"Clearable Text"};const{add:V,use:Y,pack:f,packs:te,merge:ce}=I(),Z=e=>{B(e),Y(e)};h("zh-CN",j);h("en-US",E);V("zh-CN",R);V("en-US",q);const G={name:"InputExample",components:{VarInput:y,VarIcon:F,AppType:C},setup(){const e=_({value:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:""});return A(a=>{Z(a),e.value5=f.value.clearableText}),M(x),b({pack:f},N(e))}},H=e=>(z("data-v-01e614d4"),e=e(),L(),e),J=H(()=>P("div",{style:{height:"40px"}},null,-1));function K(e,a,u,o,O,Q){const n=c("app-type"),r=c("var-input"),m=c("var-icon");return S(),D(w,null,[l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.basicUsage),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.plainMode),1)]),_:1}),l(r,{hint:!1,line:!1,placeholder:o.pack.placeholder,modelValue:e.value7,"onUpdate:modelValue":a[1]||(a[1]=d=>e.value7=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.textarea),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,textarea:"",modelValue:e.value2,"onUpdate:modelValue":a[2]||(a[2]=d=>e.value2=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.maxlength),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,maxlength:10,modelValue:e.value8,"onUpdate:modelValue":a[3]||(a[3]=d=>e.value8=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.disabled),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,disabled:"",modelValue:e.value3,"onUpdate:modelValue":a[4]||(a[4]=d=>e.value3=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.readonly),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,readonly:"",modelValue:e.value4,"onUpdate:modelValue":a[5]||(a[5]=d=>e.value4=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.clearable),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,clearable:"",modelValue:e.value5,"onUpdate:modelValue":a[6]||(a[6]=d=>e.value5=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.displayIcon),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,modelValue:e.value6,"onUpdate:modelValue":a[7]||(a[7]=d=>e.value6=d)},{"prepend-icon":p(()=>[l(m,{class:"prepend-icon",name:"plus"})]),"append-icon":p(()=>[l(m,{class:"append-icon",name:"minus"})]),_:1},8,["placeholder","modelValue"]),l(n,null,{default:p(()=>[s(t(o.pack.validate),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,rules:[d=>d.length>6||o.pack.maxMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=d=>e.value9=d)},null,8,["placeholder","rules","modelValue"]),J],64)}var me=T(G,[["render",K],["__scopeId","data-v-01e614d4"]]);export{me as default};
