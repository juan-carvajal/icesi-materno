"use strict";(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[149],{3149:(t,n,e)=>{e.r(n),e.d(n,{default:()=>_});var o=e(83673),c=e(62323);function l(t,n,e,l,i,u){const a=(0,o.up)("example-component"),s=(0,o.up)("q-btn"),r=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(r,{class:"row items-center justify-evenly"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{title:"Example component",active:"",todos:t.todos,meta:t.meta},null,8,["todos","meta"]),(0,o.Uk)(" "+(0,c.zw)(t.env)+" "+(0,c.zw)(t.authState)+" ",1),(0,o.Wm)(s,{onClick:t.logIn,label:"Test"},null,8,["onClick"]),(0,o.Wm)(s,{onClick:t.printStore,label:"Test2"},null,8,["onClick"])])),_:1})}function i(t,n,e,l,i,u){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("p",null,(0,c.zw)(t.title),1),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.todos,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.id,onClick:n[0]||(n[0]=(...n)=>t.increment&&t.increment(...n))},(0,c.zw)(e.id)+" - "+(0,c.zw)(e.content),1)))),128))]),(0,o._)("p",null,"Count: "+(0,c.zw)(t.todoCount)+" / "+(0,c.zw)(t.meta.totalCount),1),(0,o._)("p",null,"Active: "+(0,c.zw)(t.active?"yes":"no"),1),(0,o._)("p",null,"Clicks on todos: "+(0,c.zw)(t.clickCount),1)])}var u=e(61959);function a(){const t=(0,u.iH)(0);function n(){return t.value+=1,t.value}return{clickCount:t,increment:n}}function s(t){const n=(0,u.Fl)((()=>t.value.length));return{todoCount:n}}const r=(0,o.aZ)({name:"CompositionComponent",props:{title:{type:String,required:!0},todos:{type:Array,default:()=>[]},meta:{type:Object,required:!0},active:{type:Boolean}},setup(t){return Object.assign(Object.assign({},a()),s((0,u.Vh)(t,"todos")))}});var p=e(74260);const m=(0,p.Z)(r,[["render",i]]),d=m;var C=e(48879),w=e(12942),g=e(75361);const v="production",k=(0,o.aZ)({name:"PageIndex",components:{ExampleComponent:d},setup(){const t=(0,u.iH)([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]);function n(){(0,g.Xb)(w.auth,"juan030698@hotmail.com","12345678").then((t=>{console.log(t.user)})).catch((t=>{console.log(t)}))}function e(){console.log(l)}const o=(0,u.iH)({totalCount:1200}),c=(0,C.useStore)(),l=c.state.auth;return{todos:t,meta:o,env:v,authState:l,logIn:n,printStore:e}}});var f=e(24379),h=e(48240),b=e(7518),y=e.n(b);const z=(0,p.Z)(k,[["render",l]]),_=z;y()(k,"components",{QPage:f.Z,QBtn:h.Z})}}]);