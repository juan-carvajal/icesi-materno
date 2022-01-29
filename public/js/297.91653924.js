"use strict";(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[297],{21297:(e,a,s)=>{s.r(a),s.d(a,{default:()=>$});var o=s(83673),t=s(12730),i=s(82942),r=s(63343),l=s.n(r);const n={class:"bg-primary fullscreen row justify-center items-center"},d={class:"column q-pa-sm justify-center items-center"},c={key:0,class:"row"},u=(0,o.Uk)("He olvidado mi contraseña"),m={key:1},p={class:"q-mb-none"},g=(0,o.Uk)(" Se ha enviado un correo de recuperación a "),x={class:"text-bold"},f=(0,o.Uk)(". Por favor revise su buzón y siga las instrucciones. ");function w(e,a,s,r,w,h){const v=(0,o.up)("q-img"),y=(0,o.up)("q-input"),q=(0,o.up)("q-btn"),b=(0,o.up)("q-card-section"),_=(0,o.up)("q-card-actions"),k=(0,o.up)("q-card"),z=(0,o.up)("q-form");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",d,[(0,o.Wm)(v,{style:{"max-width":"60vw"},src:l()}),e.showSentResetPasswordEmail?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(k,{class:"q-ma-lg q-pa-lg"},{default:(0,o.w5)((()=>[(0,o._)("p",p,[g,(0,o._)("span",x,(0,i.zw)(e.passwordResetEmail),1),f])])),_:1})])):((0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(z,{onSubmit:(0,t.iM)(e.logInUser,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{bordered:"",class:"q-pa-lg q-ma-lg shadow-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{square:"",filled:"",clearable:"",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=a=>e.email=a),type:"email",label:"Email",rules:[e=>!!e||"Este campo es requerido"]},null,8,["modelValue","rules"]),(0,o.Wm)(y,{square:"",filled:"",clearable:"",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a),type:"password",label:"Contraseña",rules:[e=>!!e||"Este campo es requerido"]},null,8,["modelValue","rules"]),(0,o.Wm)(q,{onClick:e.openForgotPasswordDialog,flat:"","no-caps":""},{default:(0,o.w5)((()=>[u])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(_,{class:"q-px-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{unelevated:"",color:"primary",class:"full-width",label:"Entrar",type:"submit",loading:e.isLoading},null,8,["loading"])])),_:1})])),_:1})])),_:1},8,["onSubmit"])]))])])}var h=s(9594),v=s(93617),y=s(48879),q=s(98511),b=s(12942),_=s(48825);const k=(0,o.aZ)({name:"Login",data(){return{email:"",password:""}},setup(){const e=(0,v.oR)(y.storeKey),{dialog:a,loading:s,notify:o}=(0,_.Z)(),t=e=>{const a=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;return a.test(e)},i=(0,h.iH)(!1),r=(0,h.iH)("");function l(){a({title:"Olvido de contraseña",message:"¿Cual es su usuario (correo electrónico)?",prompt:{model:"",isValid:e=>t(e),type:"text"},cancel:!0,persistent:!0}).onOk((e=>{s.show(),(0,q.LS)((0,q.v0)(),e).then((()=>{r.value=e,i.value=!0})).catch((e=>{const a="auth/user-not-found"===e.code?"El correo especificado no esta registrado":"Ha ocurrido un error enviando el correo de recuperación. Intente mas tarde.";o({message:a,type:"negative"}),console.log(e)})).finally((()=>{s.hide()}))}))}const n=(0,h.iH)(!1),d=(0,h.Fl)((()=>e.state.auth.isLoggedIn));return{isLoggedIn:d,isLoading:n,openForgotPasswordDialog:l,showSentResetPasswordEmail:i,passwordResetEmail:r}},methods:{logInUser(){this.isLoading=!0,(0,q.e5)(b.auth,this.email,this.password).then((({user:e})=>{this.$q.notify({type:"positive",message:`Bienvenido ${e.displayName??e.email??""}`})})).catch((e=>{console.log(e),this.$q.notify({type:"negative",message:"Ocurrió un error de autenticación."})})).finally((()=>{this.isLoading=!1}))}},watch:{isLoggedIn:{immediate:!0,handler(e){e&&this.$router.push({path:this.$route.query.redirect?.toString()??"/"})}}}});var z=s(74260),W=s(24027),Z=s(68689),C=s(10151),E=s(25589),L=s(64689),I=s(2165),S=s(99367),Q=s(7518),U=s.n(Q);const V=(0,z.Z)(k,[["render",w]]),$=V;U()(k,"components",{QImg:W.Z,QForm:Z.Z,QCard:C.Z,QCardSection:E.Z,QInput:L.Z,QBtn:I.Z,QCardActions:S.Z})}}]);