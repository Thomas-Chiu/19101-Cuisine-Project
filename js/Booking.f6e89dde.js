(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Booking"],{db05:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"booking"}},[n("card",[n("form",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-alert",{attrs:{variant:"warning",show:""}},[e._v("編輯格式提醒 / 日期：yyyy-mm-dd / 時間：hr:min")])],1)],1),n("paper-table",{attrs:{data:e.tableData,columns:e.tableColumns,type:"hover"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[n("td",[e._v(e._s(o.ID))]),o.edit?n("td",[n("fg-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1):n("td",[e._v(e._s(o.name))]),o.edit?n("td",[n("fg-input",{model:{value:e.model.gender,callback:function(t){e.$set(e.model,"gender",t)},expression:"model.gender"}})],1):n("td",[e._v(e._s(o.gender))]),o.edit?n("td",[n("fg-input",{model:{value:e.model.mobile,callback:function(t){e.$set(e.model,"mobile",t)},expression:"model.mobile"}})],1):n("td",[e._v(e._s(o.mobile))]),o.edit?n("td",[n("fg-input",{model:{value:e.model.people,callback:function(t){e.$set(e.model,"people",t)},expression:"model.people"}})],1):n("td",[e._v(e._s(o.people))]),o.edit?n("td",[n("fg-input",{model:{value:e.model.date,callback:function(t){e.$set(e.model,"date",t)},expression:"model.date"}})],1):n("td",[e._v(e._s(o.date))]),o.edit?n("td",[n("fg-input",{model:{value:e.model.time,callback:function(t){e.$set(e.model,"time",t)},expression:"model.time"}})],1):n("td",[e._v(e._s(o.time))]),n("td",{staticClass:"icon-col"},[o.edit?n("div",{staticClass:"btn-edit"},[n("p-button",{attrs:{outline:""},nativeOn:{click:function(t){return e.handleUpdate(o)}}},[e._v("update")]),n("p-button",{attrs:{outline:""},nativeOn:{click:function(t){return e.handleCancel(o)}}},[e._v("cancel")])],1):n("div",{staticClass:"btn-default"},[n("p-button",{attrs:{type:"info",icon:""},nativeOn:{click:function(t){return e.handleEdit(o)}}},[n("i",{staticClass:"ti-pencil-alt"})]),n("p-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger",icon:""},nativeOn:{click:function(t){return e.handleDelete(o)}}},[n("i",{staticClass:"ti-close"})])],1)])]}}])})],1)])],1)},i=[],l=(n("d81d"),n("b0c0"),n("2af9")),a={name:"Booking",components:{PaperTable:l["e"]},data:function(){return{tableColumns:["ID","姓名","性別","電話","人數","訂位日期","訂位時間","編輯 / 刪除"],tableData:[],model:[{name:"",gender:"",mobile:"",people:"",date:"",time:""}]}},methods:{handleEdit:function(e){this.model.name=e.name,this.model.gender=e.gender,this.model.mobile=e.mobile,this.model.people=e.people,this.model.date=e.date,this.model.time=e.time,e.edit=!0},handleDelete:function(e){var t=this;event.preventDefault();var n=confirm("確定要刪除？");n&&this.axios.delete(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_APIURL+"/booking/"+e.id).then((function(e){t.$swal({toast:!0,showConfirmButton:!1,icon:"success",title:"刪除成功",position:"top-end",timer:2e3,timerProgressBar:!0}),setTimeout((function(){location.reload()}),2e3)})).catch((function(e){alert(e.message)}))},handleUpdate:function(e){var t=this;event.preventDefault(),this.axios.patch(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_APIURL+"/booking",{id:e.id,name:this.model.name,gender:this.model.gender,mobile:this.model.mobile,people:this.model.people,date:this.model.date,time:this.model.time}).then((function(e){t.$swal({toast:!0,showConfirmButton:!1,icon:"success",title:"更新成功",position:"top-end",timer:2e3,timerProgressBar:!0}),setTimeout((function(){location.reload()}),2e3)})).catch((function(e){alert("請按照格式，日期: yyyy-mm-dd，時間: hr:min"),console.log(e.message)})),e.edit=!1},handleCancel:function(e){e.edit=!1},toggleSort:function(e){console.log(this.tableData)}},mounted:function(){var e=this;this.axios.get(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_APIURL+"/booking").then((function(t){var n=0;e.tableData=t.data.result.map((function(e){return n++,{id:e.id,ID:n,name:e.name,gender:e.gender,mobile:e.mobile,people:e.people,date:e.date.substr(0,10),time:e.time,edit:!1}}))})).catch((function(e){console.log(e)}))}},d=a,s=n("2877"),c=Object(s["a"])(d,o,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=Booking.f6e89dde.js.map