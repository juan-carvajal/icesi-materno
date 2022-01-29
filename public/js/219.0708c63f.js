"use strict";(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[219],{39219:(e,o,a)=>{a.r(o),a.d(o,{default:()=>A});var l=a(83673);const s=(0,l.Uk)(" Administrador de Permisos ");function r(e,o,a,r,t,i){const n=(0,l.up)("q-icon"),c=(0,l.up)("q-toolbar-title"),d=(0,l.up)("q-space"),u=(0,l.up)("q-btn"),m=(0,l.up)("q-toolbar"),p=(0,l.up)("q-select"),v=(0,l.up)("permissions-manager-vue"),g=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(g,{class:"q-ma-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"text-primary q-px-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{name:"verified"}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[s])),_:1}),(0,l.Wm)(d),(0,l.Wm)(u,{flat:"",round:"",icon:"add",onClick:e.createRoleDialog},null,8,["onClick"])])),_:1}),(0,l.Wm)(p,{modelValue:e.selectedRole,"onUpdate:modelValue":o[0]||(o[0]=o=>e.selectedRole=o),options:e.roles,"option-label":"name",filled:"",label:"Rol"},null,8,["modelValue","options"]),e.selectedRoleID?((0,l.wg)(),(0,l.j4)(v,{key:0,class:"q-pa-sm q-my-sm",roleID:e.selectedRoleID,onDeleted:e.handleRoleDeletion},null,8,["roleID","onDeleted"])):(0,l.kq)("",!0)])),_:1})}var t=a(17079),i=a(48825),n=a(12942),c=a(82942);const d={class:"col-3 text-bold"},u={class:"col-9 q-gutter-sm justify-evenly items-center"},m={class:"row justify-evenly"};function p(e,o,a,s,r,t){const i=(0,l.up)("q-tooltip"),n=(0,l.up)("q-icon"),p=(0,l.up)("q-toggle"),v=(0,l.up)("q-card-section"),g=(0,l.up)("q-separator"),b=(0,l.up)("q-select"),w=(0,l.up)("q-btn"),f=(0,l.up)("q-card-actions"),q=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(q,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.permissionsList,((a,s)=>((0,l.wg)(),(0,l.j4)(v,{class:"row items-center justify-center bg-grey-1 q-ma-md rounded-border",key:s},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l.Uk)((0,c.zw)(a.name)+" ",1),(0,l.Wm)(n,{name:"help"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{style:{"max-width":"25vw"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(a.description),1)])),_:2},1024)])),_:2},1024)]),(0,l._)("div",u,[(0,l._)("div",m,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.permissions,((a,r)=>((0,l.wg)(),(0,l.j4)(p,{key:`perm-${s}-${r}`,color:"primary",label:a.label,modelValue:e.rolePermissions,"onUpdate:modelValue":o[0]||(o[0]=o=>e.rolePermissions=o),val:a.value},null,8,["label","modelValue","val"])))),128))])])])),_:2},1024)))),128)),e.role?.permissions.includes("users.write")?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Wm)(g,{inset:""}),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,{modelValue:e.allowedRoleIdsForCreation,"onUpdate:modelValue":o[1]||(o[1]=o=>e.allowedRoleIdsForCreation=o),options:e.creationRolesData,multiple:"","use-chips":"","emit-value":"","map-options":"","input-debounce":250,label:"Roles habilitados para crear"},null,8,["modelValue","options"])])),_:1})],64)):(0,l.kq)("",!0),(0,l.Wm)(f,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{onClick:e.deleteRoleIntent,icon:"delete",label:"Borrar rol",color:"red"},null,8,["onClick"])])),_:1})])),_:1})}var v=a(9594),g=a(16423),b=a(73439);const w=[{name:"Administrador",permissions:[{label:"Habilitar",value:"admin"}],description:"Este permiso concede acceso a todos los recursos de la aplicación sin restricciones. Debe ser de uso extremadamente limitado."},{name:"Casos",permissions:[{label:"Ver",value:"cases.read"},{label:"Escritura",value:"cases.write"}],description:"Acceso a los casos creados por los usuarios de la aplicación."},{name:"Podcasts",permissions:[{label:"Ver",value:"podcasts.read"},{label:"Escritura",value:"podcasts.write"}],description:"Acceso al módulo de podcasts y aprendizaje para maternas."},{name:"Notificaciones",permissions:[{label:"Ver",value:"notifications.read"},{label:"Escritura",value:"notifications.write"}],description:"Los roles con acceso a notificaciones podrán ver y/o crear notificaciones que serán entregadas por sms a otros usuarios."},{name:"Alertas",permissions:[{label:"Ver",value:"alerts.read"},{label:"Escritura",value:"alerts.write"}],description:"Los roles con acceso a alertas podrán crear alertas globales o focalizada que serán entregadas vía llamada y sms al número de contacto de los usuarios implicados. Esta funcionalidad puede acarrear altos costos con el proveedor de comunicación, por lo que su acceso debe ser extremadamente limitado."},{name:"Registrar usuarios",permissions:[{label:"Escritura",value:"users.write"}],description:"Los roles con acceso a crear usuarios podrán registrar nuevos usuarios."}],f=(0,l.aZ)({props:{roleID:{type:String,required:!0}},emits:["deleted"],setup(e,{emit:o}){const{roleID:a}=(0,v.BK)(e),l=(0,v.iH)([]),{role:s}=(0,g.qs)(a),{roles:r}=(0,g.dc)(),c=(0,v.Fl)((()=>(r.value??[]).map((e=>({label:e.name,value:e.id,f:e.allowedRoleIdsForCreation}))))),d=(0,v.Fl)({get(){return s?.value?.allowedRoleIdsForCreation??[]},set(e){(0,t.r7)((0,t.JU)(n.db,`roles/${a.value}`),{allowedRoleIdsForCreation:e}).then((()=>{u({type:"positive",message:"Rol actualizado con éxito"})})).catch((e=>{console.log(e),u({type:"negative",message:"Error actualizando rol."})}))}}),{notify:u,dialog:m}=(0,i.Z)(),p=(0,v.Fl)({get(){return s.value?s.value.permissions:[]},set(e){(0,t.r7)((0,t.JU)(n.db,`roles/${a.value}`),{permissions:e}).then((()=>{u({type:"positive",message:"Rol actualizado con éxito"})})).catch((e=>{console.log(e),u({type:"negative",message:"Error actualizando rol."})}))}}),f=(0,b.$C)(),q=(0,b.V1)(f,"admin-DeleteRole");function y(){m({title:"Acción destructiva ⚠️",message:"Esta acción no se puede deshacer. ¿Esta seguro que desea continuar?"}).onOk((()=>{q({roleID:a.value}).then((()=>{o("deleted"),u({type:"positive",message:"Rol eliminado con éxito"})})).catch((e=>{console.log(e),u({type:"negative",message:`Error eliminando rol: ${e.message}`})}))}))}return{permissionsList:w,role:s,selectedPermissions:l,rolePermissions:p,deleteRoleIntent:y,creationRolesData:c,allowedRoleIdsForCreation:d}}});var q=a(74260),y=a(10151),R=a(25589),Z=a(24554),D=a(5363),h=a(28886),k=a(65869),C=a(72448),I=a(99367),Q=a(2165),V=a(7518),E=a.n(V);const _=(0,q.Z)(f,[["render",p]]),W=_;E()(f,"components",{QCard:y.Z,QCardSection:R.Z,QIcon:Z.Z,QTooltip:D.Z,QToggle:h.Z,QSeparator:k.Z,QSelect:C.Z,QCardActions:I.Z,QBtn:Q.Z});const x=(0,l.aZ)({components:{PermissionsManagerVue:W},setup(){const{roles:e}=(0,g.dc)(),o=(0,v.iH)(),a=(0,v.Fl)((()=>{if(o.value)return o.value.id})),{dialog:l,notify:s}=(0,i.Z)();function r(e){(0,t.ET)((0,t.hJ)(n.db,"roles"),e).then((()=>{s({type:"positive",message:"Rol creado con éxito"})})).catch((e=>{console.log(e),s({type:"negative",message:"Error creando rol."})}))}function c(){o.value=void 0}function d(){l({title:"Crear rol",message:"Nombre del rol (Mínimo 3 caracteres)",prompt:{model:"",isValid:e=>e.length>2,type:"text"},cancel:"Cancelar",persistent:!0}).onOk((e=>{const o={name:e,permissions:[]};r(o)}))}return{roles:e,selectedRole:o,selectedRoleID:a,createRoleDialog:d,handleRoleDeletion:c}}});var F=a(24379),j=a(39570),z=a(13747),P=a(62025);const U=(0,q.Z)(x,[["render",r]]),A=U;E()(x,"components",{QPage:F.Z,QToolbar:j.Z,QIcon:Z.Z,QToolbarTitle:z.Z,QSpace:P.Z,QBtn:Q.Z,QSelect:C.Z})}}]);