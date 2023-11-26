"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1605],{2726:(Y,x,d)=>{d.d(x,{Uw:()=>G,fo:()=>D});var g=d(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var U=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(U||{});class b extends Error{constructor(e,n,a){super(e),this.message=e,this.code=n,this.data=a}}const J=o=>{var e,n,a,l,r;const m=o.CapacitorCustomPlatform||null,c=o.Capacitor||{},_=c.Plugins=c.Plugins||{},f=o.CapacitorPlatforms,W=(null===(e=f?.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==m?m.name:(o=>{var e,n;return o?.androidBridge?"android":null!==(n=null===(e=o?.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==n&&n.bridge?"ios":"web"})(o)),le=(null===(n=f?.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==W()),de=(null===(a=f?.currentPlatform)||void 0===a?void 0:a.isPluginAvailable)||(h=>{const P=Q.get(h);return!(!P?.platforms.has(W())&&!re(h))}),re=(null===(l=f?.currentPlatform)||void 0===l?void 0:l.getPluginHeader)||(h=>{var P;return null===(P=c.PluginHeaders)||void 0===P?void 0:P.find(R=>R.name===h)}),Q=new Map,he=(null===(r=f?.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((h,P={})=>{const R=Q.get(h);if(R)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),R.proxy;const B=W(),F=re(h);let L;const ve=function(){var C=(0,g.Z)(function*(){return!L&&B in P?L=L="function"==typeof P[B]?yield P[B]():P[B]:null!==m&&!L&&"web"in P&&(L=L="function"==typeof P.web?yield P.web():P.web),L});return function(){return C.apply(this,arguments)}}(),ee=C=>{let M;const T=(...S)=>{const I=ve().then(E=>{const $=((C,M)=>{var T,S;if(!F){if(C)return null===(S=C[M])||void 0===S?void 0:S.bind(C);throw new b(`"${h}" plugin is not implemented on ${B}`,U.Unimplemented)}{const I=F?.methods.find(E=>M===E.name);if(I)return"promise"===I.rtype?E=>c.nativePromise(h,M.toString(),E):(E,$)=>c.nativeCallback(h,M.toString(),E,$);if(C)return null===(T=C[M])||void 0===T?void 0:T.bind(C)}})(E,C);if($){const V=$(...S);return M=V?.remove,V}throw new b(`"${h}.${C}()" is not implemented on ${B}`,U.Unimplemented)});return"addListener"===C&&(I.remove=(0,g.Z)(function*(){return M()})),I};return T.toString=()=>`${C.toString()}() { [capacitor code] }`,Object.defineProperty(T,"name",{value:C,writable:!1,configurable:!1}),T},ie=ee("addListener"),ae=ee("removeListener"),_e=(C,M)=>{const T=ie({eventName:C},M),S=function(){var E=(0,g.Z)(function*(){const $=yield T;ae({eventName:C,callbackId:$},M)});return function(){return E.apply(this,arguments)}}(),I=new Promise(E=>T.then(()=>E({remove:S})));return I.remove=(0,g.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield S()}),I},te=new Proxy({},{get(C,M){switch(M){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return F?_e:ie;case"removeListener":return ae;default:return ee(M)}}});return _[h]=te,Q.set(h,{name:h,proxy:te,platforms:new Set([...Object.keys(P),...F?[B]:[]])}),te});return c.convertFileSrc||(c.convertFileSrc=h=>h),c.getPlatform=W,c.handleError=h=>o.console.error(h),c.isNativePlatform=le,c.isPluginAvailable=de,c.pluginMethodNoop=(h,P,R)=>Promise.reject(`${R} does not have an implementation of "${P}".`),c.registerPlugin=he,c.Exception=b,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},j=(o=>o.Capacitor=J(o))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),D=j.registerPlugin;class G{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){var a=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const m=function(){var _=(0,g.Z)(function*(){return a.removeListener(e,n)});return function(){return _.apply(this,arguments)}}(),c=Promise.resolve({remove:m});return Object.defineProperty(c,"remove",{value:(_=(0,g.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield m()}),function(){return _.apply(this,arguments)})}),c;var _}removeAllListeners(){var e=this;return(0,g.Z)(function*(){e.listeners={};for(const n in e.windowListeners)e.removeWindowListener(e.windowListeners[n]);e.windowListeners={}})()}notifyListeners(e,n){const a=this.listeners[e];a&&a.forEach(l=>l(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:a=>{this.notifyListeners(n,a)}}}unimplemented(e="not implemented"){return new j.Exception(e,U.Unimplemented)}unavailable(e="not available"){return new j.Exception(e,U.Unavailable)}removeListener(e,n){var a=this;return(0,g.Z)(function*(){const l=a.listeners[e];if(!l)return;const r=l.indexOf(n);a.listeners[e].splice(r,1),a.listeners[e].length||a.removeWindowListener(a.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const N=o=>encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),s=o=>o.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class v extends G{getCookies(){return(0,g.Z)(function*(){const e=document.cookie,n={};return e.split(";").forEach(a=>{if(a.length<=0)return;let[l,r]=a.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");l=s(l).trim(),r=s(r).trim(),n[l]=r}),n})()}setCookie(e){return(0,g.Z)(function*(){try{const n=N(e.key),a=N(e.value),l=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),m=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${a||""}${l}; path=${r}; ${m};`}catch(n){return Promise.reject(n)}})()}deleteCookie(e){return(0,g.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}})()}clearCookies(){return(0,g.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,g.Z)(function*(){try{yield e.clearCookies()}catch(n){return Promise.reject(n)}})()}}D("CapacitorCookies",{web:()=>new v});const i=function(){var o=(0,g.Z)(function*(e){return new Promise((n,a)=>{const l=new FileReader;l.onload=()=>{const r=l.result;n(r.indexOf(",")>=0?r.split(",")[1]:r)},l.onerror=r=>a(r),l.readAsDataURL(e)})});return function(n){return o.apply(this,arguments)}}();class ce extends G{request(e){return(0,g.Z)(function*(){const n=((o,e={})=>{const n=Object.assign({method:o.method||"GET",headers:o.headers},e),l=((o={})=>{const e=Object.keys(o);return Object.keys(o).map(l=>l.toLocaleLowerCase()).reduce((l,r,m)=>(l[r]=o[e[m]],l),{})})(o.headers)["content-type"]||"";if("string"==typeof o.data)n.body=o.data;else if(l.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[m,c]of Object.entries(o.data||{}))r.set(m,c);n.body=r.toString()}else if(l.includes("multipart/form-data")){const r=new FormData;if(o.data instanceof FormData)o.data.forEach((c,_)=>{r.append(_,c)});else for(const c of Object.keys(o.data))r.append(c,o.data[c]);n.body=r;const m=new Headers(n.headers);m.delete("content-type"),n.headers=m}else(l.includes("application/json")||"object"==typeof o.data)&&(n.body=JSON.stringify(o.data));return n})(e,e.webFetchExtra),a=((o,e=!0)=>o?Object.entries(o).reduce((a,l)=>{const[r,m]=l;let c,_;return Array.isArray(m)?(_="",m.forEach(f=>{c=e?encodeURIComponent(f):f,_+=`${r}=${c}&`}),_.slice(0,-1)):(c=e?encodeURIComponent(m):m,_=`${r}=${c}`),`${a}&${_}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),l=a?`${e.url}?${a}`:e.url,r=yield fetch(l,n),m=r.headers.get("content-type")||"";let _,f,{responseType:c="text"}=r.ok?e:{};switch(m.includes("application/json")&&(c="json"),c){case"arraybuffer":case"blob":f=yield r.blob(),_=yield i(f);break;case"json":_=yield r.json();break;default:_=yield r.text()}const q={};return r.headers.forEach((W,X)=>{q[X]=W}),{data:_,headers:q,status:r.status,url:r.url}})()}get(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}D("CapacitorHttp",{web:()=>new ce})},5346:(Y,x,d)=>{d.d(x,{m:()=>t});var g=d(6814),u=d(7852),A=d(95),w=d(5879);let t=(()=>{var y;class k{}return(y=k).\u0275fac=function(b){return new(b||y)},y.\u0275mod=w.oAB({type:y}),y.\u0275inj=w.cJS({imports:[g.ez,u.Pc,A.UX,A.u5,A.UX]}),k})()},1605:(Y,x,d)=>{d.r(x),d.d(x,{HomePageModule:()=>N});var g=d(6814),u=d(7852),A=d(95),w=d(1160),t=d(5879);let y=(()=>{var s;class v{constructor(i){this.router=i,this.darkmode=!1,this.niveles=[{id:1,nivel:"Basica Incompleta"},{id:2,nivel:"Basica Completa"},{id:3,nivel:"Media Incompleta"},{id:4,nivel:"Media Completa"},{id:5,nivel:"Superior Incompleta"},{id:6,nivel:"Superior Completa"}],this.datos={nombre:"",apellido:"",educacion:"",nacimiento:""},this.router.navigate(["home/inicio"])}ngOnInit(){}ionViewCanEnter(){return"true"===localStorage.getItem("authenticated")||(this.router.navigate(["/login"]),!1)}limpiar(){for(var[i,p]of Object.entries(this.datos))Object.defineProperty(this.datos,i,{value:""})}logout(){localStorage.removeItem("ingresado")}segmentChanged(i){console.log("Hola"),console.log(i),this.router.navigate(["/home/"+i.detail.value])}}return(s=v).\u0275fac=function(i){return new(i||s)(t.Y36(w.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-home"]],decls:12,vars:0,consts:[[3,"ionChange"],["value","inicio"],["name","home"],["value","gps"],["name","navigate"]],template:function(i,p){1&i&&(t.TgZ(0,"ion-content"),t._UZ(1,"ion-router-outlet"),t.qZA(),t.TgZ(2,"ion-footer")(3,"ion-segment",0),t.NdJ("ionChange",function(z){return p.segmentChanged(z)}),t.TgZ(4,"ion-segment-button",1),t._UZ(5,"ion-icon",2),t.TgZ(6,"ion-label"),t._uU(7,"Inicio"),t.qZA()(),t.TgZ(8,"ion-segment-button",3),t._UZ(9,"ion-icon",4),t.TgZ(10,"ion-label"),t._uU(11,"GPS"),t.qZA()()()())},dependencies:[u.W2,u.fr,u.gu,u.Q$,u.cJ,u.GO,u.QI,u.jP],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-icon[_ngcontent-%COMP%]{color:#0f0}ion-card[_ngcontent-%COMP%]{border:solid 1px green}img[_ngcontent-%COMP%]{border-radius:10px;padding:5px}h1[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-style:bold;font-size:xxx-large;padding:10% 5% 5%}ion-menu-button[_ngcontent-%COMP%]{color:#0f0}ion-card-subtitle[_ngcontent-%COMP%]{font-size:xx-small}.MenuS[_ngcontent-%COMP%]{padding:5%}ion-footer[_ngcontent-%COMP%]{color:transparent}#logout[_ngcontent-%COMP%]{padding-top:22rem}"]}),v})();var k=d(4532);let U=(()=>{var s;class v{constructor(i,p){this.activateRoute=i,this.router=p,this.darkmode=!0,this.utilSvc=(0,t.f3M)(k.F),this.activateRoute.queryParams.subscribe(Z=>{this.router.getCurrentNavigation()?.extras.state?(this.data=this.router.getCurrentNavigation()?.extras.state?.user,console.log(this.data)):this.router.navigate(["home/"])})}ngOnInit(){this.check_app_mode()}logout(){localStorage.removeItem("ingresado"),this.utilSvc.routerLink("/login")}perfil(){this.utilSvc.routerLink("/perfil")}config(){this.utilSvc.routerLink("/config")}historial(){this.utilSvc.routerLink("/historial")}check_app_mode(){this.darkmode="true"==localStorage.getItem("darkmodeActivated"),document.body.classList.toggle("dark",this.darkmode)}toggleDarkMode(){this.darkmode=!this.darkmode,document.body.classList.toggle("dark",this.darkmode),this.darkmode?localStorage.setItem("darkModeActived","true"):localStorage.setItem("darkModeActivated","false")}ionViewCanEnter(){return"true"===localStorage.getItem("authenticated")||(this.router.navigate(["/login"]),!1)}}return(s=v).\u0275fac=function(i){return new(i||s)(t.Y36(w.gz),t.Y36(w.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-inicio"]],decls:54,vars:1,consts:[["side","end","contentId","main-content"],[1,"ion-padding"],["button","",3,"click"],["name","document-outline"],[1,"MenuS"],["name","person-outline"],["name","settings-outline"],["name","moon"],["slot","end","mode","ios",3,"checked","ionChange"],["button","","id","logout",3,"click"],["name","log-out-outline"],["id","main-content",1,"ion-page"],["collapse","condense"],[1,"ion-text-center"],["slot","end"],["alt","Silhouette of mountains","src","https://media.lacapital.com.ar/p/9ac9b756be56418722ecf9a29bb6dded/adjuntos/204/imagenes/029/127/0029127323/642x0/smart/camas-criticas-cardiologia-cullenjpg.jpg"],["size","12",1,"ion-text-center"],["color","success","expand","block","routerLink","['../components']"],["name","document-text-outline","size","large"],["color","success","expand","block","routerLink","['/historial']"]],template:function(i,p){1&i&&(t.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),t._uU(4,"Menu"),t.qZA()()(),t.TgZ(5,"ion-content",1)(6,"ion-item",2),t.NdJ("click",function(){return p.historial()}),t._UZ(7,"ion-icon",3),t.TgZ(8,"ion-label",4),t._uU(9," Ir al Historial"),t.qZA()(),t.TgZ(10,"ion-item",2),t.NdJ("click",function(){return p.perfil()}),t._UZ(11,"ion-icon",5),t.TgZ(12,"ion-label",4),t._uU(13," Ver cuenta"),t.qZA()(),t.TgZ(14,"ion-item",2),t.NdJ("click",function(){return p.config()}),t._UZ(15,"ion-icon",6),t.TgZ(16,"ion-label",4),t._uU(17," Ir a configuraci\xf3n"),t.qZA()(),t.TgZ(18,"ion-item"),t._UZ(19,"ion-icon",7),t.TgZ(20,"ion-label",4),t._uU(21," Modo Oscuro"),t.qZA(),t.TgZ(22,"ion-toggle",8),t.NdJ("ionChange",function(){return p.toggleDarkMode()}),t.qZA()(),t.TgZ(23,"ion-item",9),t.NdJ("click",function(){return p.logout()}),t._UZ(24,"ion-icon",10),t.TgZ(25,"ion-label",4),t._uU(26," Cerrar Sesi\xf3n"),t.qZA()()()(),t.TgZ(27,"div",11)(28,"ion-header",12)(29,"ion-toolbar"),t._UZ(30,"ion-title",13),t.TgZ(31,"ion-buttons",14),t._UZ(32,"ion-menu-button"),t.qZA()()()(),t._UZ(33,"br")(34,"br"),t.TgZ(35,"ion-card"),t._UZ(36,"img",15),t.TgZ(37,"ion-card-header")(38,"ion-card-title",16),t._uU(39,"Buscar Hospitales Cercanos"),t.qZA(),t.TgZ(40,"ion-card-subtitle",13),t._uU(41,'Selecciona "Buscar hospitales cercanos" para redirigirte al mapa'),t.qZA()(),t.TgZ(42,"ion-card-content")(43,"ion-button",17),t._uU(44,"Buscar hospitales cercanos"),t.qZA()()(),t.TgZ(45,"ion-card")(46,"ion-card-header")(47,"ion-icon",18),t._uU(48,"Historial"),t.qZA(),t.TgZ(49,"ion-card-title",16),t._uU(50,"En este apartado podr\xe1s ver tus visitas a los Hospitales m\xe1s cercanos!"),t.qZA()(),t.TgZ(51,"ion-card-content")(52,"ion-button",19),t._uU(53,"Ver tu historial"),t.qZA()()()),2&i&&(t.xp6(22),t.Q6J("checked",p.darkmode))},dependencies:[u.YG,u.Sm,u.PM,u.FN,u.Zi,u.tO,u.Dq,u.W2,u.Gu,u.gu,u.Ie,u.Q$,u.z0,u.fG,u.wd,u.ho,u.sr,u.w,u.YI],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-icon[_ngcontent-%COMP%]{color:#0f0;display:flex}ion-card[_ngcontent-%COMP%]{border:solid 1px green}img[_ngcontent-%COMP%]{border-radius:10px;padding:5px}h1[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-style:bold;font-size:xxx-large;padding:10% 5% 5%}ion-menu-button[_ngcontent-%COMP%]{color:#0f0}ion-card-subtitle[_ngcontent-%COMP%]{font-size:xx-small}.MenuS[_ngcontent-%COMP%]{padding:5%}ion-footer[_ngcontent-%COMP%]{color:transparent}"]}),v})(),b=(()=>{var s;class v{constructor(){}ngOnInit(){}}return(s=v).\u0275fac=function(i){return new(i||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-usuario"]],decls:2,vars:0,template:function(i,p){1&i&&(t.TgZ(0,"p"),t._uU(1," usuario works!\n"),t.qZA())}}),v})();var H=d(5861),J=d(2574),K=d.n(J);const D=(0,d(2726).fo)("Geolocation",{web:()=>d.e(579).then(d.bind(d,579)).then(s=>new s.GeolocationWeb)}),ne=[{path:"",component:y,children:[{path:"inicio",component:U},{path:"usuario",component:b},{path:"gps",component:(()=>{var s;class v{constructor(){}ngOnInit(){const i=new(K().Map)({container:"map-container",style:"mapbox://styles/pat1hno/clpa54zns003501p6008q57rj",center:[-71.533143,-33.033704],zoom:14});i.on("click",p=>{i.queryRenderedFeatures(p.point,{layers:["hospitales"]})}),i.addControl(new(K().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),i.addControl(new(K().NavigationControl))}getCurrentLocation(){return(0,H.Z)(function*(){try{const i=yield D.checkPermissions();if(console.log("Estado del permiso: ",i.location),"granted"!=i?.location&&"granted"!=(yield D.requestPermissions()).location)return;let p={maximumAge:3e3,timeout:1e4,enableHighAccuracy:!0};const Z=yield D.getCurrentPosition(p);console.log(Z)}catch(i){console.log(i)}})()}}return(s=v).\u0275fac=function(i){return new(i||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-gps"]],decls:1,vars:0,consts:[["id","map-container"]],template:function(i,p){1&i&&t._UZ(0,"div",0)},styles:["ion-back-button[_ngcontent-%COMP%]{color:#0f0}#map-container[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}"]}),v})()}]}];let G=(()=>{var s;class v{}return(s=v).\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[w.Bz.forChild(ne),w.Bz]}),v})();var oe=d(5346);let N=(()=>{var s;class v{}return(s=v).\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[g.ez,A.u5,u.Pc,G,oe.m]}),v})()},4532:(Y,x,d)=>{d.d(x,{F:()=>t});var g=d(5861),u=d(5879),A=d(1160),w=d(7852);let t=(()=>{var y;class k{constructor(){this.loadingCtrl=(0,u.f3M)(w.HT),this.toastCtrl=(0,u.f3M)(w.yF),this.router=(0,u.f3M)(A.F0)}loading(){return this.loadingCtrl.create({spinner:"crescent"})}presentToast(b){var H=this;return(0,g.Z)(function*(){(yield H.toastCtrl.create(b)).present()})()}routerLink(b){return this.router.navigateByUrl(b)}saveInLocalStorage(b,H){return localStorage.setItem(b,JSON.stringify(H))}getFromLocalStorage(b){return JSON.parse(localStorage.getItem(b))}}return(y=k).\u0275fac=function(b){return new(b||y)},y.\u0275prov=u.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),k})()}}]);