(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ee9414f"],{"6d67":function(e,t,r){"use strict";var a=r("5ca1"),n=r("0a49")(1);a(a.P+a.F*!r("2f21")([].map,!0),"Array",{map:function(e){return n(this,e,arguments[1])}})},"75fc":function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r("a745"),n=r.n(a),o=r("db2a");function i(e){if(n()(e))return Object(o["a"])(e)}var s=r("67bb"),d=r.n(s),c=r("c8bb"),l=r.n(c),u=r("774e"),m=r.n(u);function p(e){if("undefined"!==typeof d.a&&l()(Object(e)))return m()(e)}var f=r("e630");function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e){return i(e)||p(e)||Object(f["a"])(e)||h()}},d5c7:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("section",{staticClass:"add-btn"},[r("a-breadcrumb",{staticClass:"title"},[r("a-breadcrumb-item",{staticClass:"font-menu"},[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/index")}}},[e._v("首页")])]),r("a-breadcrumb-item",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/productLine")}}},[e._v(e._s(e.productName)+"-产品线")])]),r("a-breadcrumb-item",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/listProject?productId="+e.productId+"&productName="+e.productName)}}},[e._v(e._s(e.projectName)+"-工程")])]),r("a-breadcrumb-item",[e._v("\n                权限管理\n            ")])],1),r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("\n            添加成员\n        ")])],1),r("a-divider",{staticClass:"divider"}),r("section",{staticClass:"content"},[r("a-table",{attrs:{columns:e.userColumns,bordered:"","data-source":e.tabledata,"row-key":function(e){return e.id},pagination:e.pagination,loading:e.loading},scopedSlots:e._u([{key:"operation",fn:function(t,a){return[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"确定要删除吗？"},on:{confirm:function(t){return e.handleDelete(a)}}},[r("a",{attrs:{href:"javascript:;",type:"primary"}},[e._v(" 删除 ")])])]}}])})],1),r("a-drawer",{attrs:{title:e.formModal.title,visible:e.formModal.show,width:"720","body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[r("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.formData.id}],expression:"['id',{initialValue:formData.id}]"}]})],1),"add"===e.formModal.option?r("a-form-item",{attrs:{label:"用户名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"用户名称必填!"}],initialValue:e.formData.name}],expression:"['name',{rules: [{ required: true, message: '用户名称必填!'}], initialValue: formData.name}]"}],attrs:{placeholder:"请输入用户邮箱前缀"}})],1):e._e(),r("a-form-item",{attrs:{label:"角色"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isAdmin",{initialValue:e.formData.isAdmin}],expression:"['isAdmin', {initialValue: formData.isAdmin}]"}]},[r("a-radio",{attrs:{value:1}},[e._v("\n                        管理员\n                    ")]),r("a-radio",{attrs:{value:0}},[e._v("\n                        成员\n                    ")])],1)],1),0===e.form.getFieldValue("isAdmin")?r("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.envId},pagination:!1,"data-source":e.rolesdata},scopedSlots:e._u([{key:"read",fn:function(t,a,n){return[r("a-checkbox",{attrs:{checked:t},on:{change:function(t){return e.onChange(a,n,"read")}}})]}},{key:"write",fn:function(t,a,n){return[r("a-checkbox",{attrs:{checked:t},on:{change:function(t){return e.onChange(a,n,"write")}}})]}}],null,!1,2216865449)}):e._e()],1),r("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[r("a-button",{style:{marginRight:"8px"},on:{click:e.onClose}},[e._v("\n            取消\n            ")]),r("a-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("\n            提交\n            ")])],1)],1)],1)},n=[],o=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("28a5"),r("96cf"),r("3b8d")),i=r("75fc"),s=r("bd86");r("7f7f"),r("6d67");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={data:function(){return{userColumns:[{title:"用户名",dataIndex:"userName",align:"center"},{title:"角色",dataIndex:"isAdmin",align:"center",customRender:function(e){return e?"管理员":"成员"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},align:"center"}],columns:[{title:"环境名称",dataIndex:"envName",align:"center"},{title:"读取权限",dataIndex:"read",align:"center",scopedSlots:{customRender:"read"}},{title:"写入权限",dataIndex:"write",align:"center",scopedSlots:{customRender:"write"}}],tabledata:[],rolesdata:[],pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(e,t){return"显示 ".concat(t[0]," ~ ").concat(t[1]," 条记录，共 ").concat(e," 条记录")}},loading:!1,formModal:{},formData:{},form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:17}},productName:"",projectName:""}},created:function(){var e=JSON.parse(localStorage.getItem("rcc-info"));this.projectName=e.projectName,this.projectId=e.projectId,this.productName=e.productName,this.productId=e.productId,this.getUserlist()},methods:{handleAdd:function(){this.formModal={show:!0,title:"添加成员",option:"add"},this.getRoleList(),this.formData={}},onClose:function(){this.formModal.show=!1},getUserlist:function(){var e=this;this.$api.project.getUserList({projectId:this.projectId}).then((function(t){e.tabledata=t.data}))},getRoleList:function(){var e=this;this.$api.env.getEnvList({projectId:this.projectId}).then((function(t){e.rolesdata=t.data.dataList.map((function(e){return{envName:e.name,envId:e.id,read:!1,write:!1}}))}))},handleEdit:function(e){var t=this;this.$api.role.getUserRoles(e.productId,e.projectId,e.userId).then((function(e){var r=e.data.itemList.map((function(e){return c(c({},e),{},{read:0!==e.priType,write:2===e.priType})}));t.form.setFieldsValue({isAdmin:e.data.isAdmin}),t.rolesdata=Object(i["a"])(r)})),this.formModal={show:!0,title:"编辑权限",option:"edit",userName:e.userName}},handleDelete:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=[],r.push(t.userId),this.$api.project.deleteProjectMember(t.productId,t.projectId,r).then((function(e){0===e.status?(a.$message.success("删除成功"),a.getUserlist()):a.$message.error(e.msg)}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleOk:function(){var e=this;this.form.validateFields((function(t){if(!t){var r=e.rolesdata.map((function(e){return{envId:e.envId,envName:e.envName,priType:e.read+e.write}})),a={};a="add"===e.formModal.option?{isAdmin:e.form.getFieldValue("isAdmin"),memberNameList:e.form.getFieldValue("name").split(","),envPriDtoList:r}:{isAdmin:e.form.getFieldValue("isAdmin"),envPriDtoList:r,memberNameList:[e.formModal.userName]},e.$api.role.addUser(e.productId,e.projectId,a).then((function(t){0===t.status?(e.$message.success("操作成功!"),e.formModal.show=!1,e.form.resetFields(),e.getUserlist()):e.$message.error(t.msg)}))}}))},onChange:function(e,t,r){"write"===r?e.write?this.rolesdata[t].write=!1:(this.rolesdata[t].read=!0,this.rolesdata[t].write=!0):e.read?(this.rolesdata[t].read=!1,this.rolesdata[t].write=!1):this.rolesdata[t].read=!0},routerTo:function(e){this.$router.push(e)}}},u=l,m=r("2877"),p=Object(m["a"])(u,a,n,!1,null,null,null);t["default"]=p.exports}}]);