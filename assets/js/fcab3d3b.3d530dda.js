(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(4),a=r(10),c=(r(0),r(99)),i={id:"Webmail",title:"Webmail hinzuf\xfcgen"},b={unversionedId:"webspace/Webmail",id:"webspace/Webmail",isDocsHomePage:!1,title:"Webmail hinzuf\xfcgen",description:"Schritt 1",source:"@site/docs/webspace/Webmail.md",slug:"/webspace/Webmail",permalink:"/docs/webspace/Webmail",version:"current",sidebar:"someSidebar",previous:{title:"Zertifikat erstellen",permalink:"/docs/webspace/ZertifikatErstellen"},next:{title:"Nextcloud Login Fehler beheben",permalink:"/docs/webspace/NextcloudLoginFehler"}},o=[],l={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Schritt 1")),Object(c.b)("p",null,"Gehe in deine DNS einstellungen deiner Domain und f\xfcge folgende eintr\xe4ge hinzu."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Record"),Object(c.b)("th",{parentName:"tr",align:"center"},"Name"),Object(c.b)("th",{parentName:"tr",align:"center"},"Inhalt"),Object(c.b)("th",{parentName:"tr",align:"center"},"Priorit\xe4t"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"A"),Object(c.b)("td",{parentName:"tr",align:"center"},"mail"),Object(c.b)("td",{parentName:"tr",align:"center"},"IPv4 des Webhostes"),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"A"),Object(c.b)("td",{parentName:"tr",align:"center"},"webmail"),Object(c.b)("td",{parentName:"tr",align:"center"},"IPv4 des Webhostes"),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MX"),Object(c.b)("td",{parentName:"tr",align:"center"},"@"),Object(c.b)("td",{parentName:"tr",align:"center"},"mail.DEINE.DOMAIN"),Object(c.b)("td",{parentName:"tr",align:"center"},"1")))),Object(c.b)("p",null,"Wichtig ist hierbei, dass du bei dem A Record die Wolke auf grau hast."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Schritt 2")),Object(c.b)("p",null,"\xdcberpr\xfcfe, ob du im Browser Webmail abrufen kannst\n",Object(c.b)("img",{parentName:"p",src:"https://screen.magic-pics.tk/FOku9/LeNahugi08.png/raw",alt:null})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Fertig!")))}p.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||c;return r?a.a.createElement(d,b(b({ref:t},l),{},{components:r})):a.a.createElement(d,b({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);