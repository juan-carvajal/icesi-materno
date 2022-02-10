"use strict";(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[157],{84157:(e,i,a)=>{a.r(i),a.d(i,{default:()=>pe});var n=a(83673);const t=(0,n.Uk)(" Infografiás ");function o(e,i,a,o,s,r){const l=(0,n.up)("q-icon"),c=(0,n.up)("q-toolbar-title"),d=(0,n.up)("q-space"),g=(0,n.up)("q-btn"),u=(0,n.up)("q-toolbar"),p=(0,n.up)("image-viewer-vue"),m=(0,n.up)("q-separator"),f=(0,n.up)("infographic-line-vue"),h=(0,n.up)("q-list"),w=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(w,{class:"q-ma-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"text-primary q-px-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{name:"insights"}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[t])),_:1}),(0,n.Wm)(d),e.hasAccess("infographics.write")?((0,n.wg)(),(0,n.j4)(g,{key:0,flat:"",round:"",icon:"add",onClick:e.openDialog},null,8,["onClick"])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(p,{ref:"imageViewerRef",imageSources:e.infographicImageURLs},null,8,["imageSources"]),(0,n.Wm)(m,{class:"q-my-md"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.infographics,((i,a)=>((0,n.wg)(),(0,n.j4)(h,{key:a},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{onClickedInfographic:e.handleClickInfoList,infographic:i},null,8,["onClickedInfographic","infographic"])])),_:2},1024)))),128))])),_:1})}var s=a(86809),r=a(9594),l=a(48825),c=a(12730),d=a(82942);const g={class:"text-h6"},u={class:"fit flex flex-center"},p=(0,n._)("div",{class:"text-caption"},"Max: 20Mb",-1),m={class:"text-h5 q-mt-sm q-mb-xs"},f={class:"text-caption text-grey"};function h(e,i,a,t,o,s){const r=(0,n.up)("q-card-section"),l=(0,n.up)("q-btn"),h=(0,n.up)("q-img"),w=(0,n.up)("q-input"),v=(0,n.up)("q-file"),I=(0,n.up)("q-separator"),q=(0,n.up)("q-card-actions"),b=(0,n.up)("q-form"),y=(0,n.up)("q-card"),Z=(0,n.up)("q-dialog");return(0,n.wg)(),(0,n.j4)(Z,{ref:"dialogRef",onHide:e.onDialogHide},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{class:"full-width",bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{onSubmit:(0,c.iM)(e.handleFormSubmit,["prevent"])},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n._)("div",g,(0,d.zw)(e.infographic.ID?"Editando Infografiá":"Nueva Infografiá")+": "+(0,d.zw)(e.internalInfographic.title),1)])),_:1}),(0,n.Wm)(r,{class:"row wrap"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{class:"col-12 col-sm-6 flex flex-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{class:"rounded-borders",src:e.imageSourceComputed,ratio:"1",onClick:e.pickImageFile},{default:(0,n.w5)((()=>[(0,n._)("div",u,[(0,n.Wm)(l,{round:"",size:"lg",flat:"",icon:"edit"})])])),_:1},8,["src","onClick"]),p])),_:1}),(0,n.Wm)(r,{class:"col-12 col-sm-6"},{default:(0,n.w5)((()=>[(0,n._)("div",m,[(0,n.Wm)(w,{required:"",modelValue:e.internalInfographic.title,"onUpdate:modelValue":i[0]||(i[0]=i=>e.internalInfographic.title=i),label:"Titulo"},null,8,["modelValue"])]),(0,n._)("div",f,[(0,n.Wm)(w,{label:"Descripción",modelValue:e.internalInfographic.description,"onUpdate:modelValue":i[1]||(i[1]=i=>e.internalInfographic.description=i),type:"textarea",required:""},null,8,["modelValue"])]),(0,n.Wm)(v,{modelValue:e.imageFile,"onUpdate:modelValue":i[2]||(i[2]=i=>e.imageFile=i),ref:"imageFilePickerRef","max-file-size":"20971520",style:{display:"none"},onRejected:e.handleImageFileRejection,accept:".jpg, image/*"},null,8,["modelValue","onRejected"])])),_:1})])),_:1}),(0,n.Wm)(I),(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l,{type:"submit",flat:"",color:"primary",disable:!e.imageFile&&!e.infographic.ID},{default:(0,n.w5)((()=>[(0,n.Uk)((0,d.zw)(e.infographic.ID?"Editar":"Crear"),1)])),_:1},8,["disable"])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["onHide"])}var w=a(91701),v=a(12942),I=a(86466),q=a(61442),b=a(44259);const y=(0,n.aZ)({props:{infographic:{type:Object,required:!0}},async mounted(){this.infographic.imageURL&&(this.accessURLToResource=await(0,I.Jt)((0,I.iH)(v.storage,this.infographic.imageURL)).catch((e=>(console.log(e),""))))},data(){return{internalInfographic:{...this.infographic},imageFile:null,imageSource:"",accessURLToResource:""}},emits:["ok","hide"],watch:{imageFile:"handleImageFileChange"},methods:{async handleFormSubmit(){try{if(!this.imageFile&&!this.internalInfographic.ID)return;this.loading.show();const e=`infographic/images/${(0,b.Z)()}`,i=(0,I.iH)(v.storage,e);if(this.imageFile&&(await(0,I.KV)(i,this.imageFile),this.internalInfographic.imageURL=e),!this.internalInfographic.ID)return await(0,q.ET)((0,q.hJ)(v.db,"infographics"),this.internalInfographic),void this.notify({type:"positive",message:"Infografiá creada con éxito"});await(0,q.r7)((0,q.JU)(v.db,"infographics",this.internalInfographic.ID),this.internalInfographic),this.notify({type:"positive",message:"Infografiá editada con éxito"})}catch(e){console.log(e),this.notify({type:"negative",message:"Error creando Infografiá."})}finally{this.$q.loading.hide(),this.dialogRef?.hide()}},handleImageFileRejection(e){this.notify({type:"negative",message:"Error cambiando imagen: "+e[0].failedPropValidation})},handleImageFileChange(e){if(!e)return void(this.imageSource="");if(!e.type.startsWith("image"))return;const i=new FileReader;i.onloadend=e=>{this.imageSource=String(e.target?.result)},i.readAsDataURL(e)}},computed:{imageSourceComputed(){return this.imageSource?this.imageSource:this.accessURLToResource?this.accessURLToResource:""}},setup(){const e=(0,r.iH)(),{notify:i,loading:a}=(0,l.Z)();function n(){e.value&&e.value.pickFiles()}const{dialogRef:t,onDialogHide:o,onDialogOK:s,onDialogCancel:c}=(0,w.Z)();return{notify:i,loading:a,dialogRef:t,onDialogHide:o,onOKClick(){s()},onCancelClick:c,imageFilePickerRef:e,pickImageFile:n}}});var Z=a(74260),k=a(46778),R=a(10151),x=a(68689),D=a(25589),U=a(24027),W=a(2165),C=a(64689),_=a(64974),Q=a(65869),L=a(99367),S=a(7518),F=a.n(S);const V=(0,Z.Z)(y,[["render",h]]),H=V;F()(y,"components",{QDialog:k.Z,QCard:R.Z,QForm:x.Z,QCardSection:D.Z,QImg:U.Z,QBtn:W.Z,QInput:C.Z,QFile:_.Z,QSeparator:Q.Z,QCardActions:L.Z});var j=a(94215),A=a(17079);function E(e,i,a,t,o,s){const r=(0,n.up)("q-icon"),l=(0,n.up)("q-img"),g=(0,n.up)("q-avatar"),u=(0,n.up)("q-item-section"),p=(0,n.up)("q-item-label"),m=(0,n.up)("q-btn"),f=(0,n.up)("q-item"),h=(0,n.up)("q-slide-item"),w=(0,n.Q2)("ripple");return(0,n.wg)(),(0,n.j4)(h,{"right-color":"red",onRight:i[1]||(i[1]=i=>e.openDeleteDialog(e.infographic.ID??"",i))},(0,n.Nv)({default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(f,{clickable:"",onClick:i[0]||(i[0]=i=>e.$emit("clickedInfographic",e.infographic.ID))},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{rounded:""},{default:(0,n.w5)((()=>[e.infographic.imageURL?((0,n.wg)(),(0,n.j4)(l,{key:0,"placeholder-src":"icons/favicon-32x32.png",fit:"fill",class:"fit",src:e.imageURL},null,8,["src"])):((0,n.wg)(),(0,n.j4)(l,{key:1,fit:"fill",class:"fit",src:"icons/favicon-32x32.png"}))])),_:1})])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"text-bold"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,d.zw)(e.infographic.title),1)])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,d.zw)(e.infographic.description),1)])),_:1})])),_:1}),e.hasAccess("infographics.write")?((0,n.wg)(),(0,n.j4)(u,{key:0,side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{onClick:(0,c.iM)(e.openEditDialog,["stop"]),icon:"edit",flat:"",round:""},null,8,["onClick"])])),_:1})):(0,n.kq)("",!0)])),_:1},512),[[w]])])),_:2},[e.hasAccess("infographics.write")?{name:"right",fn:(0,n.w5)((()=>[(0,n.Wm)(r,{name:"delete"})]))}:void 0]),1024)}var P=a(48879);const T=(0,n.aZ)({props:{infographic:{type:Object,required:!0}},emits:["clickedInfographic"],data(){return{imageURL:""}},setup(){const e=(0,P.useStore)(),i=(0,r.Fl)((()=>e.state.auth?.permissions??[])),a=(0,n.f3)("currentUser"),{hasAccess:t}=(0,s.Z)(a);return{userPermissions:i,hasAccess:t}},mounted(){this.infographic.imageURL&&(0,I.Jt)((0,I.iH)(v.storage,this.infographic.imageURL)).then((e=>{this.imageURL=e}))},watch:{"infographic.imageURL":{handler(e){e&&(0,I.Jt)((0,I.iH)(v.storage,this.infographic.imageURL)).then((e=>{this.imageURL=e}))}}},methods:{openEditDialog(){this.$q.dialog({component:H,componentProps:{infographic:this.infographic}})},openDeleteDialog(e,i){this.$q.dialog({title:"Acción destructiva ⚠️",message:"Esta acción no se puede deshacer. Se eliminara la infografía definitivamente. ¿Esta seguro que desea continuar?",cancel:"Cancelar",persistent:!0}).onOk((()=>{i.reset(),this.$q.loading.show(),(0,A.oe)((0,A.JU)(v.db,"infographics",e)).then((()=>{this.$q.notify({type:"positive",message:"Infografía eliminada con éxito"})})).catch((e=>{console.log(e),this.$q.notify({type:"negative",message:"Error eliminando Infografía."})})).finally((()=>{this.$q.loading.hide()}))}))}}});var $=a(48951),J=a(24554),z=a(83414),K=a(52035),O=a(75096),M=a(2350),B=a(46489);const Y=(0,Z.Z)(T,[["render",E]]),N=Y;function X(e,i,a,t,o,s){const r=(0,n.up)("q-carousel-slide"),l=(0,n.up)("q-carousel"),c=(0,n.up)("vue-easy-lightbox");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(l,{modelValue:e.index,"onUpdate:modelValue":i[0]||(i[0]=i=>e.index=i),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary",padding:"",arrows:"",thumbnails:"",infinite:"",height:"50vh",class:"bg-grey-1 shadow-2 rounded-borders"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.imageSources,((i,a)=>((0,n.wg)(),(0,n.j4)(r,{onClick:i=>e.showIndex(a),class:"cursor-pointer",key:a,name:a,"img-src":i},null,8,["onClick","name","img-src"])))),128))])),_:1},8,["modelValue"]),(0,n.Wm)(c,{scrollDisabled:"",escDisabled:"",visible:e.visible,imgs:e.imageSources,index:e.index,onHide:e.handleHide},null,8,["visible","imgs","index","onHide"])])}F()(T,"components",{QSlideItem:$.Z,QIcon:J.Z,QItem:z.Z,QItemSection:K.Z,QAvatar:O.Z,QImg:U.Z,QItemLabel:M.Z,QBtn:W.Z}),F()(T,"directives",{Ripple:B.Z});var G=a(49290);const ee=(0,n.aZ)({props:{imageSources:{type:Array,required:!0}},components:{VueEasyLightbox:G.Z},data(){return{index:0,visible:!1}},methods:{handleHide(){this.visible=!1},showIndex(e){this.index=e,this.visible=!0}}});var ie=a(31277),ae=a(34593);const ne=(0,Z.Z)(ee,[["render",X]]),te=ne;F()(ee,"components",{QCarousel:ie.Z,QCarouselSlide:ae.Z});var oe=a(214);const se=(0,n.aZ)({components:{InfographicLineVue:N,ImageViewerVue:te},setup(){const e=(0,n.f3)("currentUser"),{docs:i}=(0,j.J)("infographics",(0,A.Xo)("creationDate","desc")),a=(0,r.iH)(),t=(0,r.Fl)((()=>{if(!i.value)return[];const e=[];for(const a in i.value)e.push({...i.value[a],ID:a});return e})),o=(0,r.iH)([]);(0,n.YP)(t,(async()=>{o.value=await Promise.all(t.value.map((e=>(0,oe.Jt)((0,oe.iH)(v.storage,e.imageURL))))).catch((e=>(console.log(e),[])))}),{immediate:!0});const c=(0,l.Z)(),{hasAccess:d}=(0,s.Z)(e);function g(){const e={title:"",description:"",creationDate:new Date};c.dialog({component:H,componentProps:{infographic:e}})}function u(e){const i=t.value.findIndex((i=>i.ID===e));-1!==i&&a.value&&a.value.showIndex(i)}return{hasAccess:d,openDialog:g,infographics:t,infographicImageURLs:o,imageViewerRef:a,handleClickInfoList:u}}});var re=a(24379),le=a(39570),ce=a(13747),de=a(62025),ge=a(27011);const ue=(0,Z.Z)(se,[["render",o]]),pe=ue;F()(se,"components",{QPage:re.Z,QToolbar:le.Z,QIcon:J.Z,QToolbarTitle:ce.Z,QSpace:de.Z,QBtn:W.Z,QSeparator:Q.Z,QList:ge.Z})}}]);