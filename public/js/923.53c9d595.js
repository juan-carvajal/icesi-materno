"use strict";(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[923],{51923:(e,a,t)=>{t.r(a),t.d(a,{default:()=>q});var n=t(83673);const r={class:"fit"},l={class:"inline bg-amber rounded-borders cursor-pointer",style:{"max-width":"300px"}},o=(0,n._)("div",{class:"fit flex flex-center text-center non-selectable q-pa-md"},[(0,n.Uk)(" I am groot!"),(0,n._)("br"),(0,n.Uk)("(Hover me!) ")],-1),s=(0,n.Uk)(" I am groot! ");function i(e,a,t,i,c,p){const d=(0,n.up)("q-img"),u=(0,n.up)("q-avatar"),m=(0,n.up)("q-td"),f=(0,n.up)("q-table"),g=(0,n.up)("case-card"),v=(0,n.up)("q-tooltip"),b=(0,n.up)("q-btn"),w=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(w,{class:"flex flex-center"},{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n.Wm)(f,{title:"Casos",rows:e.rows,class:"q-ma-md",columns:e.columns,"row-key":"name",filter:e.filter,pagination:e.pagination,"onUpdate:pagination":a[0]||(a[0]=a=>e.pagination=a),"rows-per-page-options":e.rowsPerPageOptions},{"body-cell-avatarURL":(0,n.w5)((e=>[(0,n.Wm)(m,{props:e},{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{src:e.value},null,8,["src"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter","pagination","rows-per-page-options"])]),(0,n.Wm)(g,{caseProp:e._case},null,8,["caseProp"]),(0,n._)("div",l,[o,(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[s])),_:1})]),(0,n.Wm)(b,{icon:"play_arrow",onClick:e.playFile},null,8,["onClick"])])),_:1})}var c=t(48825),p=t(9594),d=t(91605),u=t(86485),m=t(53786);const f=100,g=[];for(let C=0;C<f;C++)g.push({birthDate:d.date.between(1980,2005),uuid:d.datatype.uuid(),date:d.date.recent(25),avatarURL:d.image.avatar(),assignedDoctor:d.name.findName(),patientName:d.name.findName(void 0,void 0,1),description:d.lorem.paragraph()});const v=(0,n.aZ)({components:{CaseCard:u.Z},setup(){const e=(0,c.Z)(),a=(0,p.iH)(),t=(0,p.iH)(null);function r(){a.value&&a.value.play()}function l(){return e.screen.lt.sm?3:e.screen.lt.md?6:9}(0,n.m0)((()=>{console.log(a.value),console.log(t.value),a.value&&a.value.play()}),{flush:"post"});const o=(0,p.iH)(""),s=(0,p.iH)({page:1,rowsPerPage:l()});(0,n.YP)((()=>e.screen.name),(()=>{s.value.rowsPerPage=l()}));const i={ID:"1",title:"test test test test",type:m.bl.ADMINISTRATIVE,state:m.jr.TODO,created:new Date,lastUpdateState:new Date,assignee:{email:"egeffffg",uid:"fff"},reported:{email:"egeg",uid:"fff"},priority:m.dh.LOW};return{exRef:t,rows:g,foo:a,filter:o,pagination:s,_case:i,playFile:r,columns:[{name:"uuid",label:"ID",field:"uuid"},{name:"date",label:"Fecha",field:"date",format:e=>`${e.toISOString()}`},{name:"patientName",label:"Paciente",field:"patientName"},{name:"avatarURL",label:"Avatar",field:"avatarURL"},{name:"birthDate",label:"Fecha nacimiento",field:"birthDate",format:e=>`${e.toISOString()}`},{name:"assignedDoctor",label:"Medico",field:"assignedDoctor"},{name:"description",label:"Descripción",field:"description",format:e=>e.length<25?e.length:e.substring(0,22)+"..."}],cardContainerClass:(0,p.Fl)((()=>e.screen.gt.xs?"grid-masonry grid-masonry--"+(e.screen.gt.sm?"3":"2"):null)),rowsPerPageOptions:(0,p.Fl)((()=>e.screen.gt.xs?e.screen.gt.sm?[3,6,9]:[3,6]:[3]))}}});var b=t(74260),w=t(24379),h=t(74484),_=t(83884),y=t(75096),D=t(24027),P=t(5363),Z=t(2165),k=t(7518),x=t.n(k);const I=(0,b.Z)(v,[["render",i]]),q=I;x()(v,"components",{QPage:w.Z,QTable:h.Z,QTd:_.Z,QAvatar:y.Z,QImg:D.Z,QTooltip:P.Z,QBtn:Z.Z})}}]);