"use strict";(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[923],{53786:(e,a,t)=>{var r,o,n;t.d(a,{bl:()=>r,jr:()=>o,dh:()=>n}),function(e){e["MEDICAL"]="Médico",e["ADMINISTRATIVE"]="Administrativo"}(r||(r={})),function(e){e["TODO"]="Por Hacer",e["IN_PROGRESS"]="En Progreso",e["BLOCKED"]="Bloqueados",e["RESOLVED"]="Resueltos"}(o||(o={})),function(e){e[e["LOW"]=0]="LOW",e[e["NORMAL"]=1]="NORMAL",e[e["HIGH"]=2]="HIGH"}(n||(n={}))},16496:(e,a,t)=>{function r(e){return[...e].reduce(((e,a)=>a.charCodeAt(0)+((e<<5)-e)),0)%360}function o(e){return`hsl(${r(e)}, 80%, 80%)`}t.d(a,{dF:()=>o})},44719:(e,a,t)=>{t.d(a,{Z:()=>h});var r=t(83673),o=t(82942);const n={class:"q-mb-none ellipsis-3-lines"},s={class:"q-gutter-x-sm"};function i(e,a,t,i,l,c){const d=(0,r.up)("q-badge"),p=(0,r.up)("q-tooltip"),u=(0,r.up)("q-icon"),m=(0,r.up)("q-avatar"),g=(0,r.up)("q-card-section"),f=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(f,{style:{"max-width":"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{class:"q-pa-sm"},{default:(0,r.w5)((()=>[(0,r._)("p",n,(0,o.zw)(e.caseProp.title),1),(0,r.Wm)(d,{"text-color":"black",style:(0,o.j5)({backgroundColor:e.getBackgroundColor(e.caseProp.type)})},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.caseProp.type),1)])),_:1},8,["style"]),(0,r._)("div",s,[(0,r.Wm)(u,{name:e.casePriorityProps.icon,color:e.casePriorityProps.color},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.casePriorityProps.tooltip),1)])),_:1})])),_:1},8,["name","color"]),(0,r.Wm)(m,{size:"xs",style:(0,o.j5)({backgroundColor:e.getBackgroundColor(e.caseProp.assignee.email)})},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.caseProp.assignee.email[0].toUpperCase())+" ",1),(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Asignado a: "+(0,o.zw)(e.caseProp.assignee.email),1)])),_:1})])),_:1},8,["style"])])])),_:1})])),_:1})}var l=t(53786),c=t(16496);const d=(0,r.aZ)({props:{caseProp:{type:Object,required:!0}},data(){return{test:2}},setup(){return{getBackgroundColor:c.dF}},computed:{casePriorityProps(){switch(this.caseProp.priority){case l.dh.LOW:return{color:"blue",icon:"low_priority",tooltip:"Prioridad baja"};case l.dh.NORMAL:return{color:"green",icon:"lens",tooltip:"Prioridad normal"};case l.dh.HIGH:return{color:"red",icon:"priority_high",tooltip:"Prioridad alta"};default:return{}}}}});var p=t(74260),u=t(10151),m=t(25589),g=t(69721),f=t(24554),w=t(5363),P=t(75096),b=t(7518),v=t.n(b);const y=(0,p.Z)(d,[["render",i]]),h=y;v()(d,"components",{QCard:u.Z,QCardSection:m.Z,QBadge:g.Z,QIcon:f.Z,QTooltip:w.Z,QAvatar:P.Z})},51923:(e,a,t)=>{t.r(a),t.d(a,{default:()=>O});var r=t(83673);const o={class:"fit"},n={class:"inline bg-amber rounded-borders cursor-pointer",style:{"max-width":"300px"}},s=(0,r._)("div",{class:"fit flex flex-center text-center non-selectable q-pa-md"},[(0,r.Uk)(" I am groot!"),(0,r._)("br"),(0,r.Uk)("(Hover me!) ")],-1),i=(0,r.Uk)(" I am groot! ");function l(e,a,t,l,c,d){const p=(0,r.up)("q-img"),u=(0,r.up)("q-avatar"),m=(0,r.up)("q-td"),g=(0,r.up)("q-table"),f=(0,r.up)("case-card"),w=(0,r.up)("q-tooltip"),P=(0,r.up)("q-btn"),b=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(b,{class:"flex flex-center"},{default:(0,r.w5)((()=>[(0,r._)("div",o,[(0,r.Wm)(g,{title:"Casos",rows:e.rows,class:"q-ma-md",columns:e.columns,"row-key":"name",filter:e.filter,pagination:e.pagination,"onUpdate:pagination":a[0]||(a[0]=a=>e.pagination=a),"rows-per-page-options":e.rowsPerPageOptions},{"body-cell-avatarURL":(0,r.w5)((e=>[(0,r.Wm)(m,{props:e},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{src:e.value},null,8,["src"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter","pagination","rows-per-page-options"])]),(0,r.Wm)(f,{caseProp:e._case},null,8,["caseProp"]),(0,r._)("div",n,[s,(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[i])),_:1})]),(0,r.Wm)(P,{icon:"play_arrow",onClick:e.playFile},null,8,["onClick"])])),_:1})}var c=t(48825),d=t(9594),p=t(91605),u=t(44719),m=t(53786);const g=100,f=[];for(let D=0;D<g;D++)f.push({birthDate:p.date.between(1980,2005),uuid:p.datatype.uuid(),date:p.date.recent(25),avatarURL:p.image.avatar(),assignedDoctor:p.name.findName(),patientName:p.name.findName(void 0,void 0,1),description:p.lorem.paragraph()});const w=(0,r.aZ)({components:{CaseCard:u.Z},setup(){const e=(0,c.Z)(),a=(0,d.iH)(),t=(0,d.iH)(null);function o(){a.value&&a.value.play()}function n(){return e.screen.lt.sm?3:e.screen.lt.md?6:9}(0,r.m0)((()=>{console.log(a.value),console.log(t.value),a.value&&a.value.play()}),{flush:"post"});const s=(0,d.iH)(""),i=(0,d.iH)({page:1,rowsPerPage:n()});(0,r.YP)((()=>e.screen.name),(()=>{i.value.rowsPerPage=n()}));const l={ID:"1",title:"test test test test",type:m.bl.ADMINISTRATIVE,state:m.jr.TODO,created:new Date,lastUpdateState:new Date,assignee:{email:"egeffffg",uid:"fff"},reported:{email:"egeg",uid:"fff"},priority:m.dh.LOW};return{exRef:t,rows:f,foo:a,filter:s,pagination:i,_case:l,playFile:o,columns:[{name:"uuid",label:"ID",field:"uuid"},{name:"date",label:"Fecha",field:"date",format:e=>`${e.toISOString()}`},{name:"patientName",label:"Paciente",field:"patientName"},{name:"avatarURL",label:"Avatar",field:"avatarURL"},{name:"birthDate",label:"Fecha nacimiento",field:"birthDate",format:e=>`${e.toISOString()}`},{name:"assignedDoctor",label:"Medico",field:"assignedDoctor"},{name:"description",label:"Descripción",field:"description",format:e=>e.length<25?e.length:e.substring(0,22)+"..."}],cardContainerClass:(0,d.Fl)((()=>e.screen.gt.xs?"grid-masonry grid-masonry--"+(e.screen.gt.sm?"3":"2"):null)),rowsPerPageOptions:(0,d.Fl)((()=>e.screen.gt.xs?e.screen.gt.sm?[3,6,9]:[3,6]:[3]))}}});var P=t(74260),b=t(24379),v=t(48781),y=t(83884),h=t(75096),_=t(24027),k=t(5363),q=t(48240),C=t(7518),Z=t.n(C);const I=(0,P.Z)(w,[["render",l]]),O=I;Z()(w,"components",{QPage:b.Z,QTable:v.Z,QTd:y.Z,QAvatar:h.Z,QImg:_.Z,QTooltip:k.Z,QBtn:q.Z})}}]);