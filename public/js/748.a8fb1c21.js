"use strict";(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[748],{69748:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ve});var o=t(83673);const i=(0,o.Uk)(" Podcasts ");function l(e,a,t,l,n,s){const c=(0,o.up)("q-icon"),d=(0,o.up)("q-toolbar-title"),r=(0,o.up)("q-space"),u=(0,o.up)("q-btn"),p=(0,o.up)("q-toolbar"),m=(0,o.up)("q-input"),f=(0,o.up)("podcast-line"),g=(0,o.up)("q-list"),h=(0,o.up)("podcast-player"),w=(0,o.up)("q-dialog"),v=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(v,{class:"q-ma-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"text-primary q-px-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{name:"podcasts"}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(r),(0,o.Wm)(u,{onClick:e.openDialog,flat:"",round:"",icon:"add"},null,8,["onClick"])])),_:1}),(0,o.Wm)(m,{modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=a=>e.search=a),filled:"",type:"search"},{append:(0,o.w5)((()=>[(0,o.Wm)(c,{name:"search"})])),_:1},8,["modelValue"]),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.podcasts,(a=>((0,o.wg)(),(0,o.j4)(f,{onClick:t=>e.selectPodcast(a),key:a.ID,podcast:a},null,8,["onClick","podcast"])))),128))])),_:1}),(0,o.Wm)(w,{modelValue:e.podcastDialogOpen,"onUpdate:modelValue":a[1]||(a[1]=a=>e.podcastDialogOpen=a),seamless:"",position:"bottom"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{podcast:e.selectedPodcast},null,8,["podcast"])])),_:1},8,["modelValue"])])),_:1})}var n=t(9594),s=t(48825),c=t(12730),d=t(82942);const r={class:"text-h6"},u=(0,o._)("div",{class:"text-subtitle2"},"by John Doe",-1),p={class:"fit flex flex-center"},m=(0,o._)("div",{class:"text-caption"},"Max: 2Mb",-1),f={class:"text-h5 q-mt-sm q-mb-xs"},g={class:"text-caption text-grey"},h=(0,o.Uk)(" Crear ");function w(e,a,t,i,l,n){const s=(0,o.up)("q-card-section"),w=(0,o.up)("q-btn"),v=(0,o.up)("q-img"),y=(0,o.up)("q-input"),Z=(0,o.up)("q-icon"),W=(0,o.up)("q-file"),q=(0,o.up)("q-separator"),_=(0,o.up)("q-card-actions"),b=(0,o.up)("q-form"),k=(0,o.up)("q-card"),Q=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(Q,{ref:"dialogRef",onHide:e.onDialogHide},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{class:"full-width",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{onSubmit:(0,c.iM)(e.handleFormSubmit,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o._)("div",r,"Nuevo podcast: "+(0,d.zw)(e.internalPodcast.title),1),u])),_:1}),(0,o.Wm)(s,{class:"row wrap"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{class:"col-12 col-sm-6 flex flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"rounded-borders",src:e.imageSource,ratio:"1",onClick:e.pickImageFile},{default:(0,o.w5)((()=>[(0,o._)("div",p,[(0,o.Wm)(w,{round:"",size:"lg",flat:"",icon:"edit"})])])),_:1},8,["src","onClick"]),m])),_:1}),(0,o.Wm)(s,{class:"col-12 col-sm-6"},{default:(0,o.w5)((()=>[(0,o._)("div",f,[(0,o.Wm)(y,{required:"",modelValue:e.internalPodcast.title,"onUpdate:modelValue":a[0]||(a[0]=a=>e.internalPodcast.title=a),label:"Titulo"},null,8,["modelValue"])]),(0,o._)("div",g,[(0,o.Wm)(y,{label:"Descripción",modelValue:e.internalPodcast.description,"onUpdate:modelValue":a[1]||(a[1]=a=>e.internalPodcast.description=a),type:"textarea",required:""},null,8,["modelValue"])]),(0,o.Wm)(W,{accept:".mp3, audio/mpeg",modelValue:e.file,"onUpdate:modelValue":a[2]||(a[2]=a=>e.file=a),label:"Media",hint:"Solo mp3"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"audiotrack"})])),_:1},8,["modelValue"]),(0,o.Wm)(W,{modelValue:e.imageFile,"onUpdate:modelValue":a[3]||(a[3]=a=>e.imageFile=a),ref:"imageFilePickerRef","max-file-size":"2097152",style:{display:"none"},onRejected:e.handleImageFileRejection,accept:".jpg, image/*"},null,8,["modelValue","onRejected"])])),_:1})])),_:1}),(0,o.Wm)(q),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{type:"submit",flat:"",color:"primary",disable:!e.file},{default:(0,o.w5)((()=>[h])),_:1},8,["disable"])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["onHide"])}var v=t(91701),y=t(12942),Z=t(13277),W=t(28127),q=t(44259);const _=(0,o.aZ)({props:{podcast:{type:Object,required:!0}},data(){return{internalPodcast:{...this.podcast},file:null,imageFile:null,imageSource:""}},emits:["ok","hide"],watch:{imageFile:"handleImageFileChange"},methods:{async handleFormSubmit(){try{if(!this.file)return;this.loading.show();const e=`podcast/images/${(0,q.Z)()}`,a=(0,Z.iH)(y.storage,e);this.imageFile&&(await(0,Z.KV)(a,this.imageFile),this.internalPodcast.imageURL=e);const t=`podcast/media/${(0,q.Z)()}.mp3`,o=(0,Z.iH)(y.storage,t);if(await(0,Z.KV)(o,this.file),this.internalPodcast.mediaURL=t,!this.internalPodcast.ID)return await(0,W.ET)((0,W.hJ)(y.db,"podcasts"),this.internalPodcast),void this.notify({type:"positive",message:"Podcast creado con éxito"});await(0,W.r7)((0,W.JU)(y.db,"podcasts",this.internalPodcast.ID),this.internalPodcast),this.notify({type:"positive",message:"Podcast creado con éxito"})}catch(e){console.log(e),this.notify({type:"negative",message:"Error creando podcast."})}finally{this.$q.loading.hide(),this.dialogRef?.hide()}},handleImageFileRejection(e){this.notify({type:"negative",message:"Error cambiando imagen: "+e[0].failedPropValidation})},handleImageFileChange(e){if(!e)return void(this.imageSource="");if(!e.type.startsWith("image"))return;const a=new FileReader;a.onloadend=e=>{this.imageSource=String(e.target?.result)},a.readAsDataURL(e)}},setup(){const e=(0,n.iH)(),{notify:a,loading:t}=(0,s.Z)();function o(){e.value&&e.value.pickFiles()}const{dialogRef:i,onDialogHide:l,onDialogOK:c,onDialogCancel:d}=(0,v.Z)();return{notify:a,loading:t,dialogRef:i,onDialogHide:l,onOKClick(){c()},onCancelClick:d,imageFilePickerRef:e,pickImageFile:o}}});var b=t(74260),k=t(46778),Q=t(10151),R=t(68689),P=t(25589),C=t(24027),x=t(48240),D=t(64689),S=t(64974),F=t(24554),I=t(65869),U=t(99367),V=t(7518),L=t.n(V);const H=(0,b.Z)(_,[["render",w]]),j=H;function A(){const e=(0,n.iH)([]),a=(0,W.IO)((0,W.hJ)(y.db,"podcasts"),(0,W.Xo)("creationDate","desc"));return(0,W.cf)(a,(a=>{e.value=[],a.forEach((a=>{const t=a.data();t.ID=a.id,e.value.push(t)}))})),{podcasts:e}}function O(e,a,t,i,l,n){const s=(0,o.up)("q-img"),c=(0,o.up)("q-avatar"),r=(0,o.up)("q-item-section"),u=(0,o.up)("q-item-label"),p=(0,o.up)("q-icon"),m=(0,o.up)("q-item"),f=(0,o.Q2)("ripple");return(0,o.wy)(((0,o.wg)(),(0,o.j4)(m,{clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{rounded:""},{default:(0,o.w5)((()=>[e.podcast.imageURL?((0,o.wg)(),(0,o.j4)(s,{key:0,"placeholder-src":"icons/favicon-32x32.png",fit:"fill",class:"fit",src:e.imageURL},null,8,["src"])):((0,o.wg)(),(0,o.j4)(s,{key:1,fit:"fill",class:"fit",src:"icons/favicon-32x32.png"}))])),_:1})])),_:1}),(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"text-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.podcast.title),1)])),_:1}),(0,o.Wm)(u,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.podcast.description),1)])),_:1})])),_:1}),(0,o.Wm)(r,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{name:"turned_in_not"})])),_:1})])),_:1},512)),[[f]])}L()(_,"components",{QDialog:k.Z,QCard:Q.Z,QForm:R.Z,QCardSection:P.Z,QImg:C.Z,QBtn:x.Z,QInput:D.Z,QFile:S.Z,QIcon:F.Z,QSeparator:I.Z,QCardActions:U.Z});const z=(0,o.aZ)({props:{podcast:{type:Object,required:!0}},data(){return{imageURL:""}},mounted(){this.podcast.imageURL&&(0,Z.Jt)((0,Z.iH)(y.storage,this.podcast.imageURL)).then((e=>{this.imageURL=e}))}});var J=t(83414),K=t(52035),T=t(75096),E=t(2350),M=t(46489);const B=(0,b.Z)(z,[["render",O]]),$=B;L()(z,"components",{QItem:J.Z,QItemSection:K.Z,QAvatar:T.Z,QImg:C.Z,QItemLabel:E.Z,QIcon:F.Z}),L()(z,"directives",{Ripple:M.Z});const N={class:"text-weight-bold"},X={class:"text-grey"};function Y(e,a,t,i,l,n){const s=(0,o.up)("q-space"),c=(0,o.up)("q-btn"),r=(0,o.up)("q-card-section"),u=(0,o.up)("controlled-audio-wave-form"),p=(0,o.up)("q-spinner-puff"),m=(0,o.up)("q-inner-loading"),f=(0,o.up)("q-card"),g=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(f,{style:{"max-width":"70vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"row items-center no-wrap"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("div",N,(0,d.zw)(e.podcast.title),1),(0,o._)("div",X,(0,d.zw)(e.podcast.description),1)]),(0,o.Wm)(s),(0,o.Wm)(c,{flat:"",round:"",onClick:e.playAudio,icon:"play_arrow"},null,8,["onClick"]),(0,o.Wm)(c,{flat:"",round:"",onClick:e.stopAudio,icon:"pause"},null,8,["onClick"]),(0,o.wy)((0,o.Wm)(c,{flat:"",round:"",icon:"close"},null,512),[[g]])])),_:1}),(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{ref:"waveFormRef",audioSource:e.audioLinkRef},null,8,["audioSource"])])),_:1}),(0,o.Wm)(m,{showing:!e.audioLinkRef},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{size:"50px",color:"primary"})])),_:1},8,["showing"])])),_:1})}const G={key:0},ee=["src"];function ae(e,a,t,i,l,n){const s=(0,o.up)("av-waveform");return e.audioSource?((0,o.wg)(),(0,o.iD)("div",G,[(0,o._)("audio",{ref:"audioRef",style:{display:"none"},crossorigin:"anonymous",src:e.audioSource,autoplay:""},null,8,ee),(0,o.Wm)(s,{"line-color":"lime","canv-class":"fit","ref-link":"audioRef","playtime-font-family":"Roboto"})])):(0,o.kq)("",!0)}const te=(0,o.aZ)({props:{audioSource:{type:String,required:!0}},setup(){const e=(0,n.iH)();function a(){e.value&&e.value.play().catch((a=>{console.log(a),console.log(e.value)}))}function t(){e.value&&e.value.pause()}return{audioRef:e,playAudio:a,stopAudio:t}},watch:{audioSource:{immediate:!0,handler(e){e&&this.playAudio()}}}}),oe=(0,b.Z)(te,[["render",ae]]),ie=oe,le=(0,o.aZ)({components:{ControlledAudioWaveForm:ie},props:{podcast:{type:Object,required:!0}},setup(){const e=(0,n.iH)(),a=(0,n.iH)();function t(){a.value?.playAudio()}function o(){a.value?.stopAudio()}return{audioLinkRef:e,playAudio:t,stopAudio:o,waveFormRef:a}},watch:{podcast:{immediate:!0,handler(e){e&&(this.audioLinkRef="",this.stopAudio(),(0,Z.Jt)((0,Z.iH)(y.storage,e.mediaURL)).then((e=>{this.audioLinkRef=e})).catch((e=>{console.log(e)})))}}}});var ne=t(62025),se=t(66941),ce=t(8430),de=t(60677);const re=(0,b.Z)(le,[["render",Y]]),ue=re;L()(le,"components",{QCard:Q.Z,QCardSection:P.Z,QSpace:ne.Z,QBtn:x.Z,QInnerLoading:se.Z,QSpinnerPuff:ce.Z}),L()(le,"directives",{ClosePopup:de.Z});const pe=(0,o.aZ)({components:{PodcastLine:$,PodcastPlayer:ue},setup(){const e=(0,s.Z)(),a=(0,n.iH)(),t=(0,n.iH)(),{podcasts:o}=A();function i(){const a={title:"",description:"",creationDate:new Date};e.dialog({component:j,componentProps:{podcast:a}})}return{openDialog:i,podcasts:o,audioRef:a,selectedPodcast:t}},methods:{selectPodcast(e){this.selectedPodcast=e,this.podcastDialogOpen=!0}},data(){return{search:"",podcastDialogOpen:!1}}});var me=t(24379),fe=t(39570),ge=t(13747),he=t(27011);const we=(0,b.Z)(pe,[["render",l]]),ve=we;L()(pe,"components",{QPage:me.Z,QToolbar:fe.Z,QIcon:F.Z,QToolbarTitle:ge.Z,QSpace:ne.Z,QBtn:x.Z,QInput:D.Z,QList:he.Z,QDialog:k.Z})}}]);