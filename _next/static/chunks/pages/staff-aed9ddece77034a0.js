(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{6137:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var i=t(7294),n=t(540),s=t(1485);let a={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var l=(0,s.k)((e,{spacing:r,position:t,noWrap:i,grow:n,align:s,count:l})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:s||"center",flexWrap:i?"nowrap":"wrap",justifyContent:a[t],gap:e.fn.size({size:r,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:n?`calc(${100/l}% - ${e.fn.size({size:r,sizes:e.spacing})-e.fn.size({size:r,sizes:e.spacing})/l}px)`:void 0,flexGrow:n?1:0}}})),o=t(9845),c=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&u(e,t,r[t]);if(d)for(var t of d(r))f.call(r,t)&&u(e,t,r[t]);return e},m=(e,r)=>{var t={};for(var i in e)p.call(e,i)&&0>r.indexOf(i)&&(t[i]=e[i]);if(null!=e&&d)for(var i of d(e))0>r.indexOf(i)&&f.call(e,i)&&(t[i]=e[i]);return t};let x={position:"left",spacing:"md"},g=(0,i.forwardRef)((e,r)=>{let t=(0,n.N4)("Group",x,e),{className:s,position:a,align:c,children:d,noWrap:p,grow:f,spacing:u,unstyled:g}=t,j=m(t,["className","position","align","children","noWrap","grow","spacing","unstyled"]),b=i.Children.toArray(d).filter(Boolean),{classes:w,cx:y}=l({align:c,grow:f,noWrap:p,spacing:u,position:a,count:b.length},{unstyled:g,name:"Group"});return i.createElement(o.x,h({className:y(w.root,s),ref:r},j),b)});g.displayName="@mantine/core/Group"},5593:function(e,r,t){"use strict";t.d(r,{E:function(){return Z}});var i=t(7294),n=t(540),s=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(a)for(var t of a(r))o.call(r,t)&&c(e,t,r[t]);return e};function p(e){return i.createElement("svg",d({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var f=t(1485),u=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,b=(e,r,t)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,w=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&b(e,t,r[t]);if(x)for(var t of x(r))j.call(r,t)&&b(e,t,r[t]);return e},y=(e,r)=>h(e,m(r)),v=(0,f.k)((e,{radius:r})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:y(w({},e.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:e.fn.size({size:r,sizes:e.radius})}),caption:{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],marginTop:e.spacing.xs},placeholder:y(w({},e.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],borderRadius:e.fn.size({size:r,sizes:e.radius})})})),O=t(9845),C=t(5117),E=Object.defineProperty,z=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,k=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&k(e,t,r[t]);if(z)for(var t of z(r))M.call(r,t)&&k(e,t,r[t]);return e},_=(e,r)=>{var t={};for(var i in e)P.call(e,i)&&0>r.indexOf(i)&&(t[i]=e[i]);if(null!=e&&z)for(var i of z(e))0>r.indexOf(i)&&M.call(e,i)&&(t[i]=e[i]);return t};let S={fit:"cover",width:"100%",height:"auto",radius:0},Z=(0,i.forwardRef)((e,r)=>{let t=(0,n.N4)("Image",S,e),{className:s,alt:a,src:l,fit:o,width:c,height:d,radius:f,imageProps:u,withPlaceholder:h,placeholder:m,imageRef:x,classNames:g,styles:j,caption:b,unstyled:w,style:y}=t,E=_(t,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style"]),{classes:z,cx:P}=v({radius:f},{classNames:g,styles:j,unstyled:w,name:"Image"}),[M,k]=(0,i.useState)(!l);return!function(e,r){let t=(0,i.useRef)(!1);(0,i.useEffect)(()=>()=>{t.current=!1},[]),(0,i.useEffect)(()=>{if(t.current)return e();t.current=!0},r)}(()=>{k(!l)},[l]),i.createElement(O.x,N({className:P(z.root,s),ref:r,style:N({width:c},y)},E),i.createElement("figure",{className:z.figure},i.createElement("div",{className:z.imageWrapper},i.createElement("img",N({className:z.image,src:l,alt:a,style:{objectFit:o,width:c,height:d},ref:x,onError:e=>{k(!0),"function"==typeof(null==u?void 0:u.onError)&&u.onError(e)}},u)),h&&M&&i.createElement("div",{className:z.placeholder,title:a},m||i.createElement("div",null,i.createElement(p,{style:{width:40,height:40}})))),!!b&&i.createElement(C.x,{component:"figcaption",size:"sm",align:"center",className:z.caption},b)))});Z.displayName="@mantine/core/Image"},9717:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff",function(){return t(5590)}])},5590:function(e,r,t){"use strict";t.r(r);var i=t(5893),n=t(9236),s=t(6137),a=t(5593),l=t(9845),o=t(4685),c=t(5117);let d=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.D,{order:1,size:40,p:"md",pt:"xs",pb:0,children:"Staff"}),(0,i.jsx)(n.D,{order:2,size:30,p:"md",pt:"xs",pb:0,children:"Professor"}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.E,{width:150,height:150,p:"xl",radius:"md",src:"tod.jpeg",alt:"Tod Profile"}),(0,i.jsxs)(l.x,{p:"md",children:[(0,i.jsx)(o.e,{href:"https://www.media.mit.edu/people/tod/overview/",target:"blank_",size:"xl",children:"Tod Machover"}),(0,i.jsx)(c.x,{children:"tod@media.mit.edu"}),(0,i.jsx)(c.x,{children:"Muriel R. Cooper Professor of Music and Media, MIT Media Lab"}),(0,i.jsx)(c.x,{children:"Director, Opera of the Future"})]})]}),(0,i.jsx)(n.D,{order:2,size:30,p:"md",pt:"xs",pb:0,children:"Teaching Assistants"}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.E,{width:150,height:150,p:"xl",radius:"md",src:"manuel.jpeg",alt:"Manuel Profile"}),(0,i.jsxs)(l.x,{p:"md",children:[(0,i.jsx)(o.e,{href:"https://mcherep.github.io/",target:"blank_",size:"xl",children:"Manuel Cherep"}),(0,i.jsx)(c.x,{children:"mcherep@media.mit.edu"}),(0,i.jsx)(c.x,{children:"Master's student, Opera of the Future"})]})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.E,{width:150,height:150,p:"xl",radius:"md",src:"jessie.jpeg",alt:"Jessie Profile"}),(0,i.jsxs)(l.x,{p:"md",children:[(0,i.jsx)(o.e,{href:"http://jessiemindel.com/",target:"blank_",size:"xl",children:"Jessie Mindel"}),(0,i.jsx)(c.x,{children:"jmindel@media.mit.edu"}),(0,i.jsx)(c.x,{children:"Master's student, Opera of the Future"})]})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.E,{width:150,height:150,p:"xl",radius:"md",src:"manaswi.jpeg",alt:"Manaswi Profile"}),(0,i.jsxs)(l.x,{p:"md",children:[(0,i.jsx)(o.e,{href:"https://manaswimishra.com/",target:"blank_",size:"xl",children:"Manaswi Mishra"}),(0,i.jsx)(c.x,{children:"manaswim@media.mit.edu"}),(0,i.jsx)(c.x,{children:"PhD student, Opera of the Future"})]})]}),(0,i.jsx)(n.D,{order:2,size:30,p:"md",pt:"xs",pb:0,children:"Course Administrator"}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.E,{width:150,height:150,p:"xl",radius:"md",src:"clemence.jpeg",alt:"Clemence Profile"}),(0,i.jsxs)(l.x,{p:"md",children:[(0,i.jsx)(o.e,{href:"https://www.media.mit.edu/people/ctaillan/overview/",target:"blank_",size:"xl",children:"Cl\xe9mence Taillandier"}),(0,i.jsx)(c.x,{children:"ctaillan@media.mit.edu"}),(0,i.jsx)(c.x,{children:"Senior Administrative Assistant, Opera of the Future"})]})]})]});r.default=d}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9717)}),_N_E=e.O()}]);