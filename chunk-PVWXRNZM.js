import{b as G}from"./chunk-JYCGUUS4.js";import"./chunk-OPVD4J5R.js";import{a as Q}from"./chunk-YIAAVLLM.js";import{e as W}from"./chunk-3ZLYGMFL.js";import"./chunk-VGIS3RPA.js";import{Tb as K}from"./chunk-OFQNS3UE.js";import{Jb as J,Vd as C,Xb as S,Yb as R,Yd as l,Zb as z,ec as U,gb as $,lb as H,mb as L,tb as F}from"./chunk-IRBWVIIC.js";var V=-Date.now();function p(t){let o=new Date().toString();if(!t)return o;let e=t.getAttribute("add_date");return e?new Date(Number(e)*1e3).toString():o}function h(t){return t.textContent||""}function X(t){return t.getAttribute("href")||""}function Y(t){return t.getAttribute("icon")||""}var w=p();function B(t){let o=[];for(let e=0;e<t.childElementCount;e++){let r=t.childNodes[e];if(r&&r.nodeName==="DT"){let n=r.firstElementChild;if(!n||n.nodeName!=="A")continue;let i=h(n),a=p(n),s=Y(n),y=X(n);o.push({name:i,createdAt:a,icon:s,url:y,tags:[],desc:"",rate:5,id:V+=1,breadcrumb:[]})}}return o}function Z(t){let o=JSON.parse(JSON.stringify(C)),e=[],r=document.createElement("div");r.innerHTML=t;let n=r.querySelector("dl dl");if(!n)return{message:"\u672A\u627E\u5230dl dl\u8282\u70B9"};let i=0,a=0,s=0;try{for(let f=0;f<n.childElementCount;f++){let d=n.childNodes[f];if(d&&d.nodeName==="DT"){let c=d.querySelector("h3");if(!c)continue;i++;let g=h(c),k=p(c);e.push({title:g,createdAt:k,icon:"",nav:[]}),a=0;let u=d.querySelector("dl"),q=B(u);q.length>0&&(a++,e[i-1].nav.push({createdAt:w,title:g,nav:[{title:g,nav:q}]}));for(let A=0;A<u.childElementCount;A++){let N=u.childNodes[A];if(N&&N.nodeName==="DT"){let E=N.querySelector("h3");if(!E)continue;a++;let x=h(E),ee=p(E);e[i-1].nav.push({title:x,createdAt:ee,icon:"",nav:[]}),s=0;let D=N.querySelector("dl"),O=B(D);O.length>0&&(s++,e[i-1].nav[a-1].nav.push({createdAt:w,title:x,nav:O}));for(let _=0;_<D.childElementCount;_++){let b=D.childNodes[_];if(b&&b.nodeName==="DT"){let I=b.querySelector("h3");if(!I)continue;s++;let te=h(I),ne=p(I);e[i-1].nav[a-1].nav.push({title:te,createdAt:ne,nav:[],icon:""});let j=b.querySelector("dl");for(let T=0;T<j.childElementCount;T++){let M=j.childNodes[T];if(M&&M.nodeName==="DT"){let v=M.querySelector("a");if(!v)continue;let oe=h(v),ie=p(v),re=Y(v),se=X(v);e[i-1].nav[a-1].nav[s-1].nav.push({name:oe,createdAt:ie,url:se,desc:"",tags:[],rate:5,top:!1,icon:re,id:V+=1,breadcrumb:[]})}}}}}}}}let m=B(n);m.length>0&&e.push({title:l("_uncategorized"),createdAt:w,nav:[{createdAt:w,title:l("_uncategorized"),nav:[{title:l("_uncategorized"),nav:m}]}]})}catch(m){throw console.log(m),m}function y(m,f){for(let d=0;d<m.length;d++){let c=m[d],g=c.title||c.url,k=f.findIndex(u=>(u.title||u.url)===g);k!==-1?Array.isArray(c.nav)&&y(c.nav,f[k].nav):f.push(c)}}return y(e,o),o}var P=class t{constructor(o,e){this.message=o;this.notification=e}$t=l;websiteList=C;ngOnInit(){}onBookChange(o){let e=this,{files:r}=o.target;if(r.length<=0)return;let n=r[0],i=new FileReader;i.readAsText(n),i.onload=function(){let a=this.result;try{let s=Z(a);Array.isArray(s)?(e.message.success(l("_importSuccess")),e.websiteList=s,G(e.websiteList),setTimeout(()=>window.location.reload(),2e3)):e.notification.error(l("_errorBookTip"),`${s?.message??""}`)}catch(s){e.notification.error(l("_errorBookTip"),`${s.message}`)}}}static \u0275fac=function(e){return new(e||t)(L(K),L(Q))};static \u0275cmp=F({type:t,selectors:[["system-bookmark"]],decls:5,vars:1,consts:[[1,"book-wrapper"],[3,"innerHTML"],["id","file"],["src","assets/img/bookmark.svg","draggable","false",1,"logo"],["type","file","name","file","accept","text/html",3,"change"]],template:function(e,r){e&1&&(S(0,"div",0),z(1,"div",1),S(2,"label",2),z(3,"img",3),S(4,"input",4),U("change",function(i){return r.onBookChange(i)}),R()()()),e&2&&(H(),J("innerHTML",r.$t("_importEnter"),$))},dependencies:[W],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}.book-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.book-wrapper[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%]{cursor:pointer}"]})};export{P as default};
