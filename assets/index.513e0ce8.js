var Qe=Object.defineProperty,Ze=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var tt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var Te=(e,t,c)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,me=(e,t)=>{for(var c in t||(t={}))tt.call(t,c)&&Te(e,c,t[c]);if(Ae)for(var c of Ae(t))nt.call(t,c)&&Te(e,c,t[c]);return e},Ee=(e,t)=>Ze(e,et(t));import{A as at}from"./AppType.6775b756.js";import{d as ue,r as w,b as U,y as le,e as J,o as P,c as T,i as D,j as _,a as q,t as Y,T as ie,q as ke,F as se,k as ye,H as Ye,m as j,x as Re,p as he,n as Ne,G as Z,a0 as rt,l as we,h as ot,$ as lt}from"./vendor.49f89f0d.js";import{d as o}from"./index.fa127700.js";import{B as Me}from"./index.95372d55.js";import{I as it}from"./index.a59525e6.js";import{t as E,d as re}from"./shared.506a394a.js";import{p as G,u as st,a as Ie,_ as ut,b as ct,c as dt}from"./en-US.628e0d34.js";import{_ as ne}from"./elevation.229458c1.js";import{d as vt}from"./index.9b1139e6.js";import{w as mt,a as ht}from"./utils.1735a57b.js";import"./index.e35ca8e8.js";import"./index.48ee5316.js";import"./index.9e43ebc8.js";import"./components.721843ff.js";import"./elements.6395be39.js";var Ue=function(e,t){t.prototype.isSameOrBefore=function(c,i){return this.isSame(c,i)||this.isBefore(c,i)}},_e=function(e,t){t.prototype.isSameOrAfter=function(c,i){return this.isSame(c,i)||this.isAfter(c,i)}};function pt(e){return["date","month"].includes(e)}const pe=[{index:"01"},{index:"02"},{index:"03"},{index:"04"},{index:"05"},{index:"06"},{index:"07"},{index:"08"},{index:"09"},{index:"10"},{index:"11"},{index:"12"}],oe=[{index:"0"},{index:"1"},{index:"2"},{index:"3"},{index:"4"},{index:"5"},{index:"6"}],ft={modelValue:{type:[String,Array]},type:{type:String,default:"date",validator:pt},allowedDates:{type:Function},color:{type:String},headerColor:{type:String},shadow:{type:Boolean,default:!1},firstDayOfWeek:{type:[String,Number],default:0},min:{type:String},max:{type:String},showCurrent:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},range:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},yt=ue({name:"PanelHeader",components:{VarButton:Me,VarIcon:it},props:{date:{type:Object,required:!0},type:{type:String,default:"date"},disabled:{type:Object,required:!0}},emits:["check-panel","check-date"],setup(e,{emit:t}){const c=w(!1),i=w(0),v=U(()=>{var R;const{date:s,type:f}=e,{previewMonth:a,previewYear:u}=s;if(f==="month")return E(u)+i.value;const y=(R=G.value.datePickerMonthDict)==null?void 0:R[a.index].name;return G.value.lang==="zh-CN"?`${u} ${y}`:`${y} ${u}`}),b=s=>{s==="prev"&&e.disabled.left||s==="next"&&e.disabled.right||(t("check-date",s),c.value=s==="prev",i.value+=s==="prev"?-1:1)};return le(()=>e.date,()=>{i.value=0}),{reverse:c,showDate:v,checkDate:b}}}),kt={class:"var-picker-header"};function gt(e,t,c,i,v,b){const s=J("var-icon"),f=J("var-button");return P(),T("div",kt,[D(f,{round:"",text:"",style:{filter:"opacity(0.54)"},disabled:e.disabled.left,onClick:t[0]||(t[0]=a=>e.checkDate("prev"))},{default:_(()=>[D(s,{name:"chevron-left"})]),_:1},8,["disabled"]),q("div",{class:"var-picker-header__value",onClick:t[1]||(t[1]=a=>e.$emit("check-panel"))},[D(ie,{name:`var-date-picker${e.reverse?"-reverse":""}-translatex`},{default:_(()=>[(P(),T("div",{key:e.showDate},Y(e.showDate),1))]),_:1},8,["name"])]),D(f,{round:"",text:"",style:{filter:"opacity(0.54)"},disabled:e.disabled.right,onClick:t[2]||(t[2]=a=>e.checkDate("next"))},{default:_(()=>[D(s,{name:"chevron-right"})]),_:1},8,["disabled"])])}var qe=ne(yt,[["render",gt]]);o.extend(Ue);o.extend(_e);const Dt=ue({name:"MonthPickerPanel",components:{VarButton:Me,PanelHeader:qe},props:{choose:{type:Object,required:!0},preview:{type:Object,required:!0},current:{type:String,required:!0},clickYear:{type:Function,required:!0},componentProps:{type:Object,required:!0}},emits:["check-preview","choose-month"],setup(e,{emit:t}){const[c,i]=e.current.split("-"),v=w(!1),b=w(0),s=w(null),f=ke({left:!1,right:!1}),a=U(()=>e.choose.chooseYear===e.preview.previewYear),u=U(()=>e.preview.previewYear===c),y=h=>{var k,B;return(B=(k=G.value.datePickerMonthDict)==null?void 0:k[h].abbr)!=null?B:""},R=h=>{const{preview:{previewYear:k},componentProps:{min:B,max:N}}=e;let L=!0,z=!0;const r=`${k}-${h}`;return N&&(L=o(r).isSameOrBefore(o(N),"month")),B&&(z=o(r).isSameOrAfter(o(B),"month")),L&&z},M=h=>{const{choose:{chooseMonths:k,chooseDays:B,chooseRangeMonth:N},componentProps:{type:L,range:z}}=e;if(z){if(!N.length)return!1;const r=o(h).isSameOrBefore(o(N[1]),"month"),g=o(h).isSameOrAfter(o(N[0]),"month");return r&&g}return L==="month"?k.includes(h):B.some(r=>r.includes(h))},x=h=>{const{choose:{chooseMonth:k},preview:{previewYear:B},componentProps:{allowedDates:N,color:L,multiple:z,range:r}}=e,g=`${B}-${h}`,C=()=>r||z?M(g):(k==null?void 0:k.index)===h&&a.value,V=(()=>R(h)?N?!N(g):!1:!0)(),I=()=>V?!0:r||z?!M(g):!a.value||(k==null?void 0:k.index)!==h,W=()=>u.value&&i===h&&e.componentProps.showCurrent?(r||z||a.value)&&V?!0:r||z?!M(g):a.value?(k==null?void 0:k.index)!==i:!0:!1,K=()=>V?"":W()?L!=null?L:"":C()?"":"var-date-picker-color-cover",Q=K().startsWith("var-date-picker");return{disabled:V,outline:W(),text:I(),color:I()?"":L,textColor:Q?"":K(),"var-date-picker-color-cover":Q}},F=h=>{t("choose-month",h)},X=h=>{v.value=h==="prev",b.value+=h==="prev"?-1:1,t("check-preview","year",h)},O=h=>{s.value.checkDate(h)};return le(()=>e.preview.previewYear,h=>{const{componentProps:{min:k,max:B}}=e;B&&(f.right=!o(`${E(h)+1}`).isSameOrBefore(o(B),"year")),k&&(f.left=!o(`${E(h)-1}`).isSameOrAfter(o(k),"year"))},{immediate:!0}),{pack:G,MONTH_LIST:pe,headerEl:s,reverse:v,panelKey:b,panelBtnDisabled:f,forwardRef:O,buttonProps:x,getMonthAbbr:y,chooseMonth:F,checkDate:X}}}),$t={class:"var-month-picker__panel"},wt={class:"var-month-picker__content"};function Yt(e,t,c,i,v,b){const s=J("panel-header"),f=J("var-button");return P(),T("div",$t,[q("div",wt,[D(s,{ref:"headerEl",type:"month",date:e.preview,disabled:e.panelBtnDisabled,onCheckPanel:e.clickYear,onCheckDate:e.checkDate},null,8,["date","disabled","onCheckPanel","onCheckDate"]),D(ie,{name:`var-date-picker${e.reverse?"-reverse":""}-translatex`},{default:_(()=>[(P(),T("ul",{key:e.panelKey},[(P(!0),T(se,null,ye(e.MONTH_LIST,a=>(P(),T("li",{key:a.index},[D(f,Ye({type:"primary",class:"var-month-picker__button","var-month-picker-cover":"",ripple:!1},me({},e.buttonProps(a.index)),{onClick:u=>e.chooseMonth(a)}),{default:_(()=>[j(Y(e.getMonthAbbr(a.index)),1)]),_:2},1040,["onClick"])]))),128))]))]),_:1},8,["name"])])])}var Mt=ne(Dt,[["render",Yt]]);const Pt=ue({name:"YearPickerPanel",props:{preview:{type:String},componentProps:{type:Object,required:!0}},emits:["choose-year"],setup(e,{emit:t}){const c=U(()=>{const v=[],{preview:b,componentProps:{max:s,min:f}}=e;if(!b)return v;let a=[E(b)+100,E(b)-100];if(s){const u=o(s).format("YYYY-MM-D"),y=E(u.split("-")[0]);if(y<a[0]&&y>a[1]&&(a=[y,a[1]]),y<=a[1])return[y]}if(f){const u=o(f).format("YYYY-MM-D"),y=E(u.split("-")[0]);if(y<a[0]&&y>a[1]&&(a=[a[0],y]),y>=a[0])return[y]}for(let u=a[0];u>=a[1];u--)v.push(u);return v}),i=v=>{t("choose-year",v)};return Re(()=>{const v=document.querySelector(".var-year-picker__panel--active");v==null||v.scrollIntoView({block:"center"})}),{yearList:c,chooseYear:i,toNumber:E}}}),bt={class:"var-year-picker__panel"},Ct=["onClick"];function Vt(e,t,c,i,v,b){return P(),T("ul",bt,[(P(!0),T(se,null,ye(e.yearList,s=>(P(),T("li",{key:s,class:he([s===e.toNumber(e.preview)?"var-year-picker__panel--active":null]),style:Ne({color:s===e.toNumber(e.preview)?e.componentProps.color:""}),onClick:f=>e.chooseYear(s)},Y(s),15,Ct))),128))])}var St=ne(Pt,[["render",Vt]]);o.extend(Ue);o.extend(_e);const Ot=ue({name:"DayPickerPanel",components:{VarButton:Me,PanelHeader:qe},props:{choose:{type:Object,required:!0},preview:{type:Object,required:!0},current:{type:String,required:!0},clickMonth:{type:Function,required:!0},componentProps:{type:Object,required:!0}},emits:["check-preview","choose-day"],setup(e,{emit:t}){const[c,i,v]=e.current.split("-"),b=w([]),s=w(!1),f=w(0),a=w(null),u=ke({left:!1,right:!1}),y=U(()=>e.preview.previewYear===c&&e.preview.previewMonth.index===i),R=U(()=>{var r;return e.choose.chooseYear===e.preview.previewYear&&((r=e.choose.chooseMonth)==null?void 0:r.index)===e.preview.previewMonth.index}),M=U(()=>{const r=oe.findIndex(g=>g.index===e.componentProps.firstDayOfWeek);return r===-1||r===0?oe:oe.slice(r).concat(oe.slice(0,r))}),x=r=>{var g,C;return(C=(g=G.value.datePickerWeekDict)==null?void 0:g[r].abbr)!=null?C:""},F=r=>r>0?r:"",X=()=>{const{preview:{previewMonth:r,previewYear:g}}=e,C=o(`${g}-${r.index}`).daysInMonth(),H=o(`${g}-${r.index}-01`).day(),V=M.value.findIndex(I=>I.index===`${H}`);b.value=[...Array(V).fill(-1),...Array.from(Array(C+1).keys())].filter(I=>I)},O=()=>{const{preview:{previewYear:r,previewMonth:g},componentProps:{max:C,min:H}}=e;if(C){const V=`${r}-${E(g.index)+1}`;u.right=!o(V).isSameOrBefore(o(C),"month")}if(H){const V=`${r}-${E(g.index)-1}`;u.left=!o(V).isSameOrAfter(o(H),"month")}},h=r=>{const{preview:{previewYear:g,previewMonth:C},componentProps:{min:H,max:V}}=e;let I=!0,W=!0;const K=`${g}-${C.index}-${r}`;return V&&(I=o(K).isSameOrBefore(o(V),"day")),H&&(W=o(K).isSameOrAfter(o(H),"day")),I&&W},k=r=>{const{choose:{chooseDays:g,chooseRangeDay:C},componentProps:{range:H}}=e;if(H){if(!C.length)return!1;const V=o(r).isSameOrBefore(o(C[1]),"day"),I=o(r).isSameOrAfter(o(C[0]),"day");return V&&I}return g.includes(r)},B=r=>{if(r<0)return{text:!0,outline:!1,textColor:""};const{choose:{chooseDay:g},preview:{previewYear:C,previewMonth:H},componentProps:{allowedDates:V,color:I,multiple:W,range:K}}=e,Q=`${C}-${H.index}-${r}`,ge=()=>K||W?k(Q):E(g)===r&&R.value,ee=(()=>h(r)?V?!V(Q):!1:!0)(),De=()=>ee?!0:K||W?!k(Q):!R.value||E(g)!==r,ce=()=>y.value&&E(v)===r&&e.componentProps.showCurrent?(K||W||R.value)&&ee?!0:K||W?!k(Q):R.value?g!==v:!0:!1,de=()=>ee?"":ce()?I!=null?I:"":ge()?"":"var-date-picker-color-cover",ve=de().startsWith("var-date-picker");return{disabled:ee,text:De(),outline:ce(),textColor:ve?"":de(),"var-date-picker-color-cover":ve}},N=r=>{s.value=r==="prev",f.value+=r==="prev"?-1:1,t("check-preview","month",r)},L=r=>{t("choose-day",r)},z=r=>{a.value.checkDate(r)};return Re(()=>{X(),O()}),le(()=>e.preview,()=>{X(),O()}),{days:b,reverse:s,headerEl:a,panelKey:f,sortWeekList:M,panelBtnDisabled:u,forwardRef:z,filterDay:F,getDayAbbr:x,checkDate:N,chooseDay:L,buttonProps:B}}}),Bt={class:"var-day-picker__panel"},At={class:"var-day-picker__content"},Tt={class:"var-day-picker__head"},Et={class:"var-day-picker__body"};function Rt(e,t,c,i,v,b){const s=J("panel-header"),f=J("var-button");return P(),T("div",Bt,[q("div",At,[D(s,{ref:"headerEl",type:"day",date:e.preview,disabled:e.panelBtnDisabled,onCheckPanel:e.clickMonth,onCheckDate:e.checkDate},null,8,["date","disabled","onCheckPanel","onCheckDate"]),D(ie,{name:`var-date-picker${e.reverse?"-reverse":""}-translatex`},{default:_(()=>[(P(),T("div",{key:e.panelKey},[q("ul",Tt,[(P(!0),T(se,null,ye(e.sortWeekList,a=>(P(),T("li",{key:a.index},Y(e.getDayAbbr(a.index)),1))),128))]),q("ul",Et,[(P(!0),T(se,null,ye(e.days,(a,u)=>(P(),T("li",{key:u},[D(f,Ye({type:"primary",class:["var-day-picker__button",{"var-day-picker__button--usable":a>0}],"var-day-picker-cover":"",round:"",ripple:!1},me({},e.buttonProps(a)),{onClick:y=>e.chooseDay(a)}),{default:_(()=>[j(Y(e.filterDay(a)),1)]),_:2},1040,["class","onClick"])]))),128))])]))]),_:1},8,["name"])])])}var Nt=ne(Ot,[["render",Rt]]);const It=ue({name:"VarDatePicker",components:{MonthPickerPanel:Mt,YearPickerPanel:St,DayPickerPanel:Nt},props:ft,setup(e){let t=0,c=0,i="",v;const b=o().format("YYYY-MM-D"),[s,f]=b.split("-"),a=pe.find(n=>n.index===f),u=w(!1),y=w(!1),R=w(!0),M=w(),x=w(),F=w(),X=w(a),O=w(s),h=w(!1),k=w([]),B=w([]),N=w([]),L=w([]),z=w(null),r=w(null),g=ke({allowedDates:e.allowedDates,type:e.type,color:e.color,firstDayOfWeek:e.firstDayOfWeek,min:e.min,max:e.max,showCurrent:e.showCurrent,multiple:e.multiple,range:e.range}),C=U(()=>({chooseMonth:M.value,chooseYear:x.value,chooseDay:F.value,chooseMonths:k.value,chooseDays:B.value,chooseRangeMonth:N.value,chooseRangeDay:L.value})),H=U(()=>({previewMonth:X.value,previewYear:O.value})),V=U(()=>{var p,m;const{multiple:n,range:d}=e;if(d)return N.value.length?`${N.value[0]} ~ ${N.value[1]}`:"";let l="";return M.value&&(l=(m=(p=G.value.datePickerMonthDict)==null?void 0:p[M.value.index].name)!=null?m:""),n?`${k.value.length}${G.value.datePickerSelected}`:l}),I=U(()=>{var A,te,Oe,Be;const{multiple:n,range:d}=e;if(d){const ae=L.value.map(Je=>o(Je).format("YYYY-MM-DD"));return ae.length?`${ae[0]} ~ ${ae[1]}`:""}if(n)return`${B.value.length}${G.value.datePickerSelected}`;if(!x.value||!M.value||!F.value)return"";const l=o(`${x.value}-${M.value.index}-${F.value}`).day(),p=oe.find(ae=>ae.index===`${l}`),m=(te=(A=G.value.datePickerWeekDict)==null?void 0:A[p.index].name)!=null?te:"",$=(Be=(Oe=G.value.datePickerMonthDict)==null?void 0:Oe[M.value.index].name)!=null?Be:"",S=F.value.padStart(2,"0");return G.value.lang==="zh-CN"?`${M.value.index}-${S} ${m.slice(0,3)}`:`${m.slice(0,3)}, ${$.slice(0,3)} ${F.value}`}),W=U(()=>u.value?"year":e.type==="month"||y.value?"month":e.type==="date"?"date":""),K=U(()=>!e.touchable||["","year"].includes(W.value)),Q=U(()=>{var l,p,m,$,S;const n=o(`${x.value}-${(l=M.value)==null?void 0:l.index}-${F.value}`).day(),d=F.value?(p=F.value)==null?void 0:p.padStart(2,"0"):"";return{week:`${n}`,year:(m=x.value)!=null?m:"",month:(S=($=M.value)==null?void 0:$.index)!=null?S:"",date:d}}),ge=U(()=>C.value.chooseRangeDay.map(n=>o(n).format("YYYY-MM-DD"))),Pe=U(()=>x.value===O.value),ee=U(()=>{var n;return((n=M.value)==null?void 0:n.index)===X.value.index}),De=n=>{n==="year"?u.value=!0:n==="month"?y.value=!0:(u.value=!1,y.value=!1)},ce=n=>{if(K.value)return;const{clientX:d,clientY:l}=n.touches[0];t=d,c=l},de=(n,d)=>n>=d&&n>20?"x":"y",ve=n=>{if(K.value)return;const{clientX:d,clientY:l}=n.touches[0],p=d-t,m=l-c;v=de(Math.abs(p),Math.abs(m)),i=p>0?"prev":"next"},Fe=()=>{if(K.value||v!=="x")return;(W.value==="month"?z:r).value.forwardRef(i),Se()},be=(n,d)=>{var p,m;const l=d==="month"?N:L;if(l.value=R.value?[n,n]:[l.value[0],n],R.value=!R.value,R.value){const S=o(l.value[0]).isAfter(l.value[1])?[l.value[1],l.value[0]]:[...l.value];(p=e["onUpdate:modelValue"])==null||p.call(e,S),(m=e.onChange)==null||m.call(e,S)}},Ce=(n,d)=>{var S,A;const l=d==="month"?k:B,p=d==="month"?"YYYY-MM":"YYYY-MM-DD",m=l.value.map(te=>o(te).format(p)),$=m.findIndex(te=>te===n);$===-1?m.push(n):m.splice($,1),(S=e["onUpdate:modelValue"])==null||S.call(e,m),(A=e.onChange)==null||A.call(e,m)},Ve=(n,d)=>!x.value||!M.value?!1:Pe.value?n==="month"?d.index<M.value.index:ee.value?d<E(F.value):M.value.index>X.value.index:x.value>O.value,We=n=>{const{readonly:d,range:l,multiple:p,onChange:m,"onUpdate:modelValue":$}=e;if(n<0||d)return;h.value=Ve("day",n);const S=`${O.value}-${X.value.index}-${n}`,A=o(S).format("YYYY-MM-DD");l?be(A,"day"):p?Ce(A,"day"):($==null||$(A),m==null||m(A))},je=n=>{const{type:d,readonly:l,range:p,multiple:m,onChange:$,"onUpdate:modelValue":S}=e;if(h.value=Ve("month",n),d==="month"&&!l){const A=`${O.value}-${n.index}`;p?be(A,"month"):m?Ce(A,"month"):(S==null||S(A),$==null||$(A))}else X.value=n;y.value=!1},xe=n=>{O.value=`${n}`,u.value=!1,y.value=!0},ze=(n,d)=>{const l=d==="prev"?-1:1;if(n==="year")O.value=`${E(O.value)+l}`;else{let p=E(X.value.index)+l;p<1&&(O.value=`${E(O.value)-1}`,p=12),p>12&&(O.value=`${E(O.value)+1}`,p=1),X.value=pe.find(m=>E(m.index)===p)}},He=()=>(e.multiple||e.range)&&!re(e.modelValue)?(console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'),!1):!e.multiple&&!e.range&&re(e.modelValue)?(console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'),!1):!0,$e=n=>re(n)?!1:n==="Invalid Date"?(console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'),!0):!1,Ke=(n,d)=>{const l=d==="month"?N:L,p=d==="month"?"YYYY-MM":"YYYY-MM-D",m=n.map(A=>o(A).format(p)).slice(0,2);if(l.value.some(A=>$e(A)))return;l.value=m;const S=o(l.value[0]).isAfter(l.value[1]);l.value.length===2&&S&&(l.value=[l.value[1],l.value[0]])},Xe=(n,d)=>{const l=d==="month"?k:B,p=d==="month"?"YYYY-MM":"YYYY-MM-D",m=Array.from(new Set(n.map($=>o($).format(p))));l.value=m.filter($=>$!=="Invalid Date")},Ge=n=>{const d=o(n).format("YYYY-MM-D");if($e(d))return;const[l,p,m]=d.split("-"),$=pe.find(S=>S.index===p);M.value=$,x.value=l,F.value=m,X.value=$,O.value=l},Se=()=>{c=0,t=0,i="",v=void 0};return le(()=>e.modelValue,n=>{if(!(!He()||$e(n)||!n))if(e.range){if(!re(n))return;R.value=n.length!==1,Ke(n,e.type)}else if(e.multiple){if(!re(n))return;Xe(n,e.type)}else Ge(n)},{immediate:!0}),le(W,Se),{monthPanelEl:z,dayPanelEl:r,reverse:h,currentDate:b,chooseMonth:M,chooseYear:x,chooseDay:F,previewYear:O,isYearPanel:u,isMonthPanel:y,getMonthTitle:V,getDateTitle:I,getPanelType:W,getChoose:C,getPreview:H,componentProps:g,slotProps:Q,formatRange:ge,clickEl:De,handleTouchstart:ce,handleTouchmove:ve,handleTouchend:Fe,getChooseDay:We,getChooseMonth:je,getChooseYear:xe,checkPreview:ze}}});function Ut(e,t,c,i,v,b){const s=J("year-picker-panel"),f=J("month-picker-panel"),a=J("day-picker-panel");return P(),T("div",{class:he(["var-date-picker",[e.shadow?"var-elevation--2":null]])},[q("div",{class:"var-date-picker-title",style:Ne({background:e.headerColor||e.color})},[q("div",{class:he(["var-date-picker-title__year",[e.isYearPanel?"var-date-picker-title__year--active":null]]),onClick:t[0]||(t[0]=u=>e.clickEl("year"))},[Z(e.$slots,"year",{year:e.previewYear},()=>[j(Y(e.previewYear),1)])],2),q("div",{class:he(["var-date-picker-title__date",[e.isYearPanel?null:"var-date-picker-title__date--active",e.range?"var-date-picker-title__date--range":null]]),onClick:t[1]||(t[1]=u=>e.clickEl("date"))},[D(ie,{name:e.multiple?"":`var-date-picker${e.reverse?"-reverse":""}-translatey`},{default:_(()=>{var u,y,R;return[e.type==="month"?(P(),T("div",{key:`${e.chooseYear}${(u=e.chooseMonth)==null?void 0:u.index}`},[e.range?Z(e.$slots,"range",{key:0,choose:e.getChoose.chooseRangeMonth},()=>[j(Y(e.getMonthTitle),1)]):e.multiple?Z(e.$slots,"multiple",{key:1,choose:e.getChoose.chooseMonths},()=>[j(Y(e.getMonthTitle),1)]):Z(e.$slots,"month",{key:2,month:(y=e.chooseMonth)==null?void 0:y.index,year:e.chooseYear},()=>[j(Y(e.getMonthTitle),1)])])):(P(),T("div",{key:`${e.chooseYear}${(R=e.chooseMonth)==null?void 0:R.index}${e.chooseDay}`},[e.range?Z(e.$slots,"range",{key:0,choose:e.formatRange},()=>[j(Y(e.getDateTitle),1)]):e.multiple?Z(e.$slots,"multiple",{key:1,choose:e.getChoose.chooseDays},()=>[j(Y(e.getDateTitle),1)]):Z(e.$slots,"date",rt(Ye({key:2},e.slotProps)),()=>[j(Y(e.getDateTitle),1)])]))]}),_:3},8,["name"])],2)],4),q("div",{class:"var-date-picker-body",onTouchstart:t[2]||(t[2]=(...u)=>e.handleTouchstart&&e.handleTouchstart(...u)),onTouchmove:t[3]||(t[3]=(...u)=>e.handleTouchmove&&e.handleTouchmove(...u)),onTouchend:t[4]||(t[4]=(...u)=>e.handleTouchend&&e.handleTouchend(...u))},[D(ie,{name:"var-date-picker-panel-fade"},{default:_(()=>[e.getPanelType==="year"?(P(),we(s,{key:0,"component-props":e.componentProps,preview:e.previewYear,onChooseYear:e.getChooseYear},null,8,["component-props","preview","onChooseYear"])):e.getPanelType==="month"?(P(),we(f,{key:1,ref:"monthPanelEl",current:e.currentDate,choose:e.getChoose,preview:e.getPreview,"click-year":()=>e.clickEl("year"),"component-props":e.componentProps,onChooseMonth:e.getChooseMonth,onCheckPreview:e.checkPreview},null,8,["current","choose","preview","click-year","component-props","onChooseMonth","onCheckPreview"])):e.getPanelType==="date"?(P(),we(a,{key:2,ref:"dayPanelEl",current:e.currentDate,choose:e.getChoose,preview:e.getPreview,"component-props":e.componentProps,"click-month":()=>e.clickEl("month"),onChooseDay:e.getChooseDay,onCheckPreview:e.checkPreview},null,8,["current","choose","preview","component-props","click-month","onChooseDay","onCheckPreview"])):ot("v-if",!0)]),_:1})],32)],2)}var fe=ne(It,[["render",Ut]]);fe.install=function(e){e.component(fe.name,fe)};var _t={basicUsage:"\u57FA\u672C\u4F7F\u7528",monthPicker:"\u6708\u4EFD\u9009\u62E9\u5668",multiple:"\u591A\u9009",range:"\u9009\u62E9\u8303\u56F4",dateLimit:"\u65E5\u671F\u9650\u5236",custom:"\u81EA\u5B9A\u4E49",year:"\u5E74",month:"\u6708",divider:"\u5E74"},qt={basicUsage:"Basic Usage",monthPicker:"Month Picker",multiple:"Multiple",range:"Range",dateLimit:"Date Limit",custom:"Custom",year:"",month:"",divider:"-"};const{add:Le,use:Lt,pack:Ft,packs:cn,merge:dn}=st(),Wt=e=>{dt(e),Lt(e)};Ie("zh-CN",ut);Ie("en-US",ct);Le("zh-CN",_t);Le("en-US",qt);const jt={name:"DatePickerExample",components:{AppType:at,VarDatePicker:fe},setup(){const e=ke({date:"2021-01",date1:"2021-04-08",date2:["",""],date3:["2021-02-01","2021-02-15"],date4:"2020-11-11",date5:"2021-02"}),t=v=>parseInt(v.split("-")[1],10)%2===1,c=v=>parseInt(v.split("-")[2],10)%2===1,i=v=>{console.log(v)};return mt(Wt),ht(vt),Ee(me({},lt(e)),{pack:Ft,change:i,allowedDates:t,allowedDates1:c})}},xt={style:{"padding-bottom":"20px"}};function zt(e,t,c,i,v,b){const s=J("app-type"),f=J("var-date-picker");return P(),T(se,null,[q("div",null,[D(s,null,{default:_(()=>[j(Y(i.pack.basicUsage),1)]),_:1}),D(f,{modelValue:e.date1,"onUpdate:modelValue":t[0]||(t[0]=a=>e.date1=a)},null,8,["modelValue"])]),q("div",null,[D(s,null,{default:_(()=>[j(Y(i.pack.monthPicker),1)]),_:1}),D(f,{type:"month",modelValue:e.date,"onUpdate:modelValue":t[1]||(t[1]=a=>e.date=a),shadow:""},null,8,["modelValue"])]),q("div",null,[D(s,null,{default:_(()=>[j(Y(i.pack.multiple),1)]),_:1}),D(f,{type:"date",modelValue:e.date2,"onUpdate:modelValue":t[2]||(t[2]=a=>e.date2=a),multiple:""},null,8,["modelValue"])]),q("div",null,[D(s,null,{default:_(()=>[j(Y(i.pack.range),1)]),_:1}),D(f,{type:"date",modelValue:e.date3,"onUpdate:modelValue":t[3]||(t[3]=a=>e.date3=a),range:""},null,8,["modelValue"])]),q("div",null,[D(s,null,{default:_(()=>[j(Y(i.pack.dateLimit),1)]),_:1}),D(f,{type:"date",modelValue:e.date4,"onUpdate:modelValue":t[4]||(t[4]=a=>e.date4=a),min:"2020-10-15",max:"2021-01-15","allowed-dates":i.allowedDates1},null,8,["modelValue","allowed-dates"])]),q("div",xt,[D(s,null,{default:_(()=>[j(Y(i.pack.custom),1)]),_:1}),D(f,{type:"month","allowed-dates":i.allowedDates,modelValue:e.date5,"onUpdate:modelValue":t[5]||(t[5]=a=>e.date5=a),max:"2022-01",min:"2016-07",shadow:"","header-color":"purple",color:"#7bb872","first-day-of-week":"1",onChange:i.change},{year:_(({year:a})=>[q("span",null,Y(a)+Y(i.pack.year),1)]),month:_(({year:a,month:u})=>[q("span",null,Y(a)+Y(i.pack.divider)+Y(u)+Y(i.pack.month),1)]),_:1},8,["allowed-dates","modelValue","onChange"])])],64)}var vn=ne(jt,[["render",zt]]);export{vn as default};