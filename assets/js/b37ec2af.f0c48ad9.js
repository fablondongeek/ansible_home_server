"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(b,a(a({ref:t},l),{},{components:n})):o.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:r,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={title:"Ubooquity"},a=void 0,u={unversionedId:"applications/media-serving/ubooquity",id:"applications/media-serving/ubooquity",title:"Ubooquity",description:"Homepage:",source:"@site/docs/applications/media-serving/ubooquity.md",sourceDirName:"applications/media-serving",slug:"/applications/media-serving/ubooquity",permalink:"/docs/applications/media-serving/ubooquity",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/media-serving/ubooquity.md",tags:[],version:"current",frontMatter:{title:"Ubooquity"},sidebar:"tutorialSidebar",previous:{title:"Tautulli",permalink:"/docs/applications/media-serving/tautulli"},next:{title:"Monitoring",permalink:"/docs/category/monitoring"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Admin login",id:"admin-login",level:3}],l={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Homepage: ",(0,r.kt)("a",{parentName:"p",href:"https://vaemendis.net/ubooquity/"},"https://vaemendis.net/ubooquity/")),(0,r.kt)("p",null,"Documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://vaemendis.github.io/ubooquity-doc/"},"https://vaemendis.github.io/ubooquity-doc/")),(0,r.kt)("p",null,"Docker Image: ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/linuxserver/ubooquity/"},"https://hub.docker.com/r/linuxserver/ubooquity/")),(0,r.kt)("p",null,"Ubooquity is a free, lightweight and easy-to-use home server for your comics and ebooks. Use it to access your files from anywhere, with a tablet, an e-reader, a phone or a computer."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"ubooquity_enabled: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"Access the webui at ",(0,r.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:2202/ubooquity"},"http://ansible_nas_host_or_ip:2202/ubooquity")," by default. See specific configuration section below for information on setting up external access."),(0,r.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,r.kt)("p",null,"Important note: if you want to access Ubooquity externally through Traefik (at ubooquity.yourdomain.tld), you need to go to ",(0,r.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:2203/ubooquity/admin"},"http://ansible_nas_host_or_ip:2203/ubooquity/admin"),' and set the reverse proxy prefix to blank under "Advanced". Otherwise you will need to append "/ubooquity" to the url in order to access.'),(0,r.kt)("h3",{id:"admin-login"},"Admin login"),(0,r.kt)("p",null,"The admin portal is not exposed through Traefik. You can access the admin portal on port 2203."),(0,r.kt)("p",null,"Upon your first run, the address is ",(0,r.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:2203/ubooquity/admin"},"http://ansible_nas_host_or_ip:2203/ubooquity/admin"),". You will be able to set the admin password here."))}d.isMDXComponent=!0}}]);