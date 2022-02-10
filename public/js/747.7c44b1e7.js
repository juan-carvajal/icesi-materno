"use strict";(self["webpackChunkicesi_materno"]=self["webpackChunkicesi_materno"]||[]).push([[747],{84747:(e,o,a)=>{a.r(o),a.d(o,{default:()=>U});var s=a(83673);const l=(0,s.Uk)(" Administrador de Permisos ");function r(e,o,a,r,t,i){const n=(0,s.up)("q-icon"),c=(0,s.up)("q-toolbar-title"),d=(0,s.up)("q-space"),u=(0,s.up)("q-btn"),m=(0,s.up)("q-toolbar"),p=(0,s.up)("q-select"),g=(0,s.up)("permissions-manager-vue"),v=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(v,{class:"q-ma-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"text-primary q-px-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{name:"verified"}),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[l])),_:1}),(0,s.Wm)(d),(0,s.Wm)(u,{flat:"",round:"",icon:"add",onClick:e.createRoleDialog},null,8,["onClick"])])),_:1}),(0,s.Wm)(p,{modelValue:e.selectedRole,"onUpdate:modelValue":o[0]||(o[0]=o=>e.selectedRole=o),options:e.roles,"option-label":"name",filled:"",label:"Rol"},null,8,["modelValue","options"]),e.selectedRoleID?((0,s.wg)(),(0,s.j4)(g,{key:0,class:"q-pa-sm q-my-sm",roleID:e.selectedRoleID,onDeleted:e.handleRoleDeletion},null,8,["roleID","onDeleted"])):(0,s.kq)("",!0)])),_:1})}var t=a(17079),i=a(48825),n=a(12942),c=a(82942);const d={class:"col-3 text-bold"},u={class:"col-9 q-gutter-sm justify-evenly items-center"},m={class:"row justify-evenly"};function p(e,o,a,l,r,t){const i=(0,s.up)("q-tooltip"),n=(0,s.up)("q-icon"),p=(0,s.up)("q-toggle"),g=(0,s.up)("q-card-section"),v=(0,s.up)("q-separator"),b=(0,s.up)("q-select"),f=(0,s.up)("q-btn"),w=(0,s.up)("q-card-actions"),q=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(q,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.permissionsList,((a,l)=>((0,s.wg)(),(0,s.j4)(g,{class:"row items-center justify-center bg-grey-1 q-ma-md rounded-border",key:l},{default:(0,s.w5)((()=>[(0,s._)("div",d,[(0,s.Uk)((0,c.zw)(a.name)+" ",1),(0,s.Wm)(n,{name:"help"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{style:{"max-width":"25vw"}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(a.description),1)])),_:2},1024)])),_:2},1024)]),(0,s._)("div",u,[(0,s._)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.permissions,((a,r)=>((0,s.wg)(),(0,s.j4)(p,{key:`perm-${l}-${r}`,color:"primary",label:a.label,modelValue:e.rolePermissions,"onUpdate:modelValue":o[0]||(o[0]=o=>e.rolePermissions=o),val:a.value},null,8,["label","modelValue","val"])))),128))])])])),_:2},1024)))),128)),e.role?.permissions.includes("users.write")?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Wm)(v,{inset:""}),(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(b,{modelValue:e.allowedRoleIdsForCreation,"onUpdate:modelValue":o[1]||(o[1]=o=>e.allowedRoleIdsForCreation=o),options:e.creationRolesData,multiple:"","use-chips":"","emit-value":"","map-options":"","input-debounce":250,label:"Roles habilitados para crear"},null,8,["modelValue","options"])])),_:1})],64)):(0,s.kq)("",!0),(0,s.Wm)(w,{vertical:""},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{onClick:e.deleteRoleIntent,icon:"delete",label:"Borrar rol",color:"red"},null,8,["onClick"])])),_:1})])),_:1})}var g=a(9594),v=a(16423),b=a(73439);const f=[{name:"Administrador",permissions:[{label:"Habilitar",value:"admin"}],description:"Este permiso concede acceso a todos los recursos de la aplicación sin restricciones. Debe ser de uso extremadamente limitado."},{name:"Casos",permissions:[{label:"Ver",value:"cases.read"},{label:"Escritura",value:"cases.write"}],description:"Acceso a los casos creados por los usuarios de la aplicación."},{name:"Podcasts",permissions:[{label:"Ver",value:"podcasts.read"},{label:"Escritura",value:"podcasts.write"}],description:"Acceso al módulo de podcasts y aprendizaje para maternas."},{name:"Infografías",permissions:[{label:"Ver",value:"infographics.read"},{label:"Escritura",value:"infographics.write"}],description:"Acceso al módulo de podcasts y aprendizaje para maternas."},{name:"Notificaciones",permissions:[{label:"Ver",value:"notifications.read"},{label:"Escritura",value:"notifications.write"}],description:"Los roles con acceso a notificaciones podrán ver y/o crear notificaciones que serán entregadas por sms a otros usuarios."},{name:"Alertas",permissions:[{label:"Ver",value:"alerts.read"},{label:"Escritura",value:"alerts.write"}],description:"Los roles con acceso a alertas podrán crear alertas globales o focalizada que serán entregadas vía llamada y sms al número de contacto de los usuarios implicados. Esta funcionalidad puede acarrear altos costos con el proveedor de comunicación, por lo que su acceso debe ser extremadamente limitado."},{name:"Registrar usuarios",permissions:[{label:"Escritura",value:"users.write"}],description:"Los roles con acceso a crear usuarios podrán registrar nuevos usuarios."}],w=(0,s.aZ)({props:{roleID:{type:String,required:!0}},emits:["deleted"],setup(e,{emit:o}){const{roleID:a}=(0,g.BK)(e),s=(0,g.iH)([]),{role:l}=(0,v.qs)(a),{roles:r}=(0,v.dc)(),c=(0,g.Fl)((()=>(r.value??[]).map((e=>({label:e.name,value:e.id,f:e.allowedRoleIdsForCreation}))))),d=(0,g.Fl)({get(){return l?.value?.allowedRoleIdsForCreation??[]},set(e){(0,t.r7)((0,t.JU)(n.db,`roles/${a.value}`),{allowedRoleIdsForCreation:e}).then((()=>{u({type:"positive",message:"Rol actualizado con éxito"})})).catch((e=>{console.log(e),u({type:"negative",message:"Error actualizando rol."})}))}}),{notify:u,dialog:m}=(0,i.Z)(),p=(0,g.Fl)({get(){return l.value?l.value.permissions:[]},set(e){(0,t.r7)((0,t.JU)(n.db,`roles/${a.value}`),{permissions:e}).then((()=>{u({type:"positive",message:"Rol actualizado con éxito"})})).catch((e=>{console.log(e),u({type:"negative",message:"Error actualizando rol."})}))}}),w=(0,b.$C)(),q=(0,b.V1)(w,"admin-DeleteRole");function y(){m({title:"Acción destructiva ⚠️",message:"Esta acción no se puede deshacer. ¿Esta seguro que desea continuar?"}).onOk((()=>{q({roleID:a.value}).then((()=>{o("deleted"),u({type:"positive",message:"Rol eliminado con éxito"})})).catch((e=>{console.log(e),u({type:"negative",message:`Error eliminando rol: ${e.message}`})}))}))}return{permissionsList:f,role:l,selectedPermissions:s,rolePermissions:p,deleteRoleIntent:y,creationRolesData:c,allowedRoleIdsForCreation:d}}});var q=a(74260),y=a(10151),R=a(25589),h=a(24554),Z=a(5363),D=a(28886),k=a(65869),C=a(72448),I=a(99367),V=a(2165),Q=a(7518),E=a.n(Q);const _=(0,q.Z)(w,[["render",p]]),W=_;E()(w,"components",{QCard:y.Z,QCardSection:R.Z,QIcon:h.Z,QTooltip:Z.Z,QToggle:D.Z,QSeparator:k.Z,QSelect:C.Z,QCardActions:I.Z,QBtn:V.Z});const x=(0,s.aZ)({components:{PermissionsManagerVue:W},setup(){const{roles:e}=(0,v.dc)(),o=(0,g.iH)(),a=(0,g.Fl)((()=>{if(o.value)return o.value.id})),{dialog:s,notify:l}=(0,i.Z)();function r(e){(0,t.ET)((0,t.hJ)(n.db,"roles"),e).then((()=>{l({type:"positive",message:"Rol creado con éxito"})})).catch((e=>{console.log(e),l({type:"negative",message:"Error creando rol."})}))}function c(){o.value=void 0}function d(){s({title:"Crear rol",message:"Nombre del rol (Mínimo 3 caracteres)",prompt:{model:"",isValid:e=>e.length>2,type:"text"},cancel:"Cancelar",persistent:!0}).onOk((e=>{const o={name:e,permissions:[]};r(o)}))}return{roles:e,selectedRole:o,selectedRoleID:a,createRoleDialog:d,handleRoleDeletion:c}}});var j=a(24379),F=a(39570),z=a(13747),A=a(62025);const P=(0,q.Z)(x,[["render",r]]),U=P;E()(x,"components",{QPage:j.Z,QToolbar:F.Z,QIcon:h.Z,QToolbarTitle:z.Z,QSpace:A.Z,QBtn:V.Z,QSelect:C.Z})}}]);