(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[392],{19392:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>V});var l=a(83673),o=a(82942),r=a(30805),n=a.n(r);const u=(0,l.Uk)(" ConectaDos "),i=(0,l.Uk)("Mi perfil"),s=(0,l.Uk)("Salir");function c(e,t,a,r,c,p){const m=(0,l.up)("q-btn"),d=(0,l.up)("q-img"),w=(0,l.up)("q-avatar"),f=(0,l.up)("q-toolbar-title"),g=(0,l.up)("q-item-section"),k=(0,l.up)("q-item"),W=(0,l.up)("q-icon"),Z=(0,l.up)("q-list"),_=(0,l.up)("q-menu"),h=(0,l.up)("q-toolbar"),q=(0,l.up)("q-header"),b=(0,l.up)("q-separator"),C=(0,l.up)("q-scroll-area"),Q=(0,l.up)("q-drawer"),y=(0,l.up)("router-view"),v=(0,l.up)("q-page-sticky"),D=(0,l.up)("q-page-container"),A=(0,l.up)("q-layout"),L=(0,l.Q2)("close-popup"),U=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(A,{view:"hHh Lpr lff"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,l.Wm)(w,{square:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{src:n()})])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[u])),_:1}),(0,l.Wm)(m,{to:"/messages",icon:"inbox",flat:""}),(0,l.Wm)(w,{style:(0,o.j5)({backgroundColor:e.getBackgroundColor(e.$store.state.auth.email??"")}),class:"text-black"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)((e.$store.state.auth.email??"A").toUpperCase()[0])+" ",1),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{style:{"min-width":"100px"}},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(k,{dense:"",clickable:"",to:"/profile"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[i])),_:1})])),_:1},512),[[L]]),(0,l.wy)((0,l.Wm)(k,{dense:"",clickable:"",onClick:e.signOut,class:"bg-red text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[s])),_:1}),(0,l.Wm)(g,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{color:"white",name:"logout"})])),_:1})])),_:1},8,["onClick"]),[[L]])])),_:1})])),_:1})])),_:1},8,["style"])])),_:1})])),_:1}),(0,l.Wm)(Q,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",width:200,breakpoint:500,bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{class:"fit"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[e.hasAccess("alerts.write")?((0,l.wg)(),(0,l.j4)(k,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{color:"red",label:"Alerta",class:"fit",icon:"warning",onClick:e.openCreateAlertDialog},null,8,["onClick"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(b),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.menuList,((t,a)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:a},[(0,l.wy)((0,l.Wm)(k,{to:t.to,clickable:"",active:t.to===e.$route.path},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{name:t.icon},null,8,["name"])])),_:2},1024),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t.label),1)])),_:2},1024)])),_:2},1032,["to","active"]),[[U]]),t.separator?((0,l.wg)(),(0,l.j4)(b,{key:"sep"+a})):(0,l.kq)("",!0)],64)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y),e.hasAccess("alerts.write")?((0,l.wg)(),(0,l.j4)(v,{key:0,position:"bottom-right",offset:[18,18]},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{onClick:e.openCreateAlertDialog,fab:"",color:"red",round:"",icon:"warning"},null,8,["onClick"])])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1})}var p=a(16496),m=a(98511),d=a(12942),w=a(9594),f=a(48825),g=a(1906),k=a(86809),W=a(36496);const Z=(0,l.aZ)({name:"MainLayout",components:{},setup(){const e=(0,w.iH)(!1),{dialog:t}=(0,f.Z)();function a(){t({component:g.Z})}const o=(0,l.f3)("currentUser"),{hasAccess:r}=(0,k.Z)(o),n=(0,w.Fl)((()=>W.s.filter((e=>(e.requiredPermissions??[]).every((e=>r(e)))))));return{menuList:n,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},getBackgroundColor:p.dF,openCreateAlertDialog:a,hasAccess:r}},methods:{signOut(){(0,m.w7)(d.auth).catch((e=>{this.$q.notify({type:"negative",message:`Error de autenticación inesperado: ${e.message??"Desconocido"}`})}))}}});var _=a(74260),h=a(19214),q=a(53812),b=a(39570),C=a(2165),Q=a(75096),y=a(24027),v=a(13747),D=a(20811),A=a(27011),L=a(83414),U=a(52035),j=a(24554),x=a(52901),H=a(47704),O=a(65869),S=a(72652),$=a(21007),I=a(60677),M=a(46489),P=a(7518),B=a.n(P);const T=(0,_.Z)(Z,[["render",c]]),V=T;B()(Z,"components",{QLayout:h.Z,QHeader:q.Z,QToolbar:b.Z,QBtn:C.Z,QAvatar:Q.Z,QImg:y.Z,QToolbarTitle:v.Z,QMenu:D.Z,QList:A.Z,QItem:L.Z,QItemSection:U.Z,QIcon:j.Z,QDrawer:x.Z,QScrollArea:H.Z,QSeparator:O.Z,QPageContainer:S.Z,QPageSticky:$.Z}),B()(Z,"directives",{ClosePopup:I.Z,Ripple:M.Z})},30805:(e,t,a)=>{e.exports=a.p+"img/app-logo.8fca19d2.ico"}}]);