"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},a="Add An Application",p={unversionedId:"contributing/add-an-application",id:"contributing/add-an-application",title:"Add An Application",description:"Adding a new application to Ansible-NAS is easy! First, set up your development environment.",source:"@site/docs/contributing/add-an-application.md",sourceDirName:"contributing",slug:"/contributing/add-an-application",permalink:"/docs/contributing/add-an-application",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/contributing/add-an-application.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Development Environment",permalink:"/docs/contributing/development-environment"},next:{title:"Support",permalink:"/docs/support"}},c={},l=[],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-an-application"},"Add An Application"),(0,i.kt)("p",null,"Adding a new application to Ansible-NAS is easy! First, set up your ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/development-environment"},"development environment"),"."),(0,i.kt)("p",null,"Then;"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start by looking at the ",(0,i.kt)("inlineCode",{parentName:"li"},"hello_world")," role - this includes everything that's expected to be included with a new application."),(0,i.kt)("li",{parentName:"ul"},"Ensure the application includes tests and documentation. Tests should ensure that the application starts and stops correctly.")))}d.isMDXComponent=!0}}]);