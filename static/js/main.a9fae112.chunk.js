(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(21),r=a.n(s),i=a(33),l=(a(99),a(100),a(31)),c=a(22),m=a(23),u=a(26),p=a(24),d=a(27),f=a(17),h=a.n(f),E=a(140),N=a(2),b=a(147),v=a(139),O=a(73),_=a(15),S=a.n(_),I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onEditItem,n=e.onDeleteItem,s=this.props.item,r=s.firstName,i=s.lastName,l=s.position,c=s.phone,m=s.email,u=s.cabinet;return o.a.createElement(v.a,{className:S.a.item,"aria-label":""},o.a.createElement(v.a.Item,null,o.a.createElement("div",{className:S.a.content},o.a.createElement("div",{className:S.a.person},o.a.createElement(E.a,{showUnknownPersonaCoin:!0,text:r+" "+i,secondaryText:l,size:N.c.size72,imageAlt:"Kat Larrson, status unknown"})),o.a.createElement("div",{className:S.a.info},o.a.createElement(b.a,{className:S.a.phone},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",c),o.a.createElement(b.a,{className:S.a.email},"Email: ",m),o.a.createElement(b.a,{className:S.a.cabinet},"\u041a\u0430\u0431\u0438\u043d\u0435\u0442: ",u))),o.a.createElement("div",{className:S.a.controls},o.a.createElement(O.a,{onClick:function(){a(t)},iconName:"Edit",className:S.a.edit}),o.a.createElement(O.a,{onClick:function(){n(t)},iconName:"Delete",className:S.a.delete}))))}}]),t}(n.Component),j=a(148),g=a(138),y=a(144),C=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.list,a=e.onEditItem,n=e.onDeleteItem,s=e.onAppend,r=e.onSortText,i=e.sortStatus,l=i.type;return o.a.createElement("div",null,o.a.createElement("div",{className:h.a.header},o.a.createElement("div",{className:h.a.filter},o.a.createElement(j.a,{className:h.a.btnSort,onClick:function(){r("firstName")},iconProps:{iconName:"firstName"===i.name?l:""},text:"\u0418\u043c\u044f"}),o.a.createElement(j.a,{className:h.a.btnSort,onClick:function(){r("lastName")},iconProps:{iconName:"lastName"===i.name?l:""},text:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),o.a.createElement(j.a,{className:h.a.btnSort,onClick:function(){r("position")},iconProps:{iconName:"position"===i.name?l:""},text:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),o.a.createElement(j.a,{className:h.a.btnSort,onClick:function(){r("email")},iconProps:{iconName:"email"===i.name?l:""},text:"Email"}),o.a.createElement(j.a,{className:h.a.btnSort,onClick:function(){r("cabinet")},iconProps:{iconName:"cabinet"===i.name?l:""},text:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442"})),o.a.createElement("div",{className:h.a.append},o.a.createElement(g.a,{onClick:s,text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}))),o.a.createElement(y.a,{horizontal:!0,className:h.a.personList},t.map((function(e,t){return o.a.createElement(I,{onEditItem:a,onDeleteItem:n,id:t,item:e,key:t})}))))}}]),t}(n.Component),k=a(37),w=function(e){return{type:"UPDATE_LIST",payload:e}},x=function(e){return{type:"SORT_STATUS",payload:e}},P=a(38),D=a.n(P),L=a(83),T=a(82),M=a(149),A={firstName:"\u041b\u0435\u043e\u043d\u0430\u0440\u0434",lastName:"\u0425\u043e\u0444\u0441\u0442\u0435\u0434\u0442\u0435\u0440",position:"\u0424\u0438\u0437\u0438\u043a-\u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u0442\u0435\u043b\u044c\u0449\u0438\u043a",phone:"8 934 232 34 44",email:"leonard.f@ya.ru",cabinet:"05"},q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state=Object(k.a)({},A,{valid:!0}),a.isValid=function(){var e=a.state,t=e.firstName,n=e.lastName,o=e.position,s=e.phone,r=e.email;""!==t&&""!==n&&""!==o&&""!==s&&""!==r?a.setState({valid:!0}):a.setState({valid:!1})},a.onChangeInput=function(e,t){var n={};n[e]=t.target.value,a.setState(n,(function(){a.isValid()}))},a.onSave=function(){var e=a.state,t=e.firstName,n=e.lastName,o=e.position,s=e.phone,r=e.email,i=e.cabinet,l=a.props,c=l.personals,m=l.id,u=l.updateList,p=c.list;p[m]={firstName:t,lastName:n,position:o,phone:s,email:r,cabinet:i},u(p),a.props.onClose()},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.personals,a=e.id,n=Object(l.a)(t.list);n.length===a&&n.push(A);var o=n[a],s=o.firstName,r=o.lastName,i=o.position,c=o.phone,m=o.email,u=o.cabinet;this.setState({firstName:s,lastName:r,position:i,phone:c,email:m,cabinet:u})}},{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,n=t.lastName,s=t.position,r=t.phone,i=t.email,l=t.cabinet,c=t.valid,m=this.props.onClose;return o.a.createElement("div",{className:D.a.form},o.a.createElement("h2",{className:D.a.header},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"),o.a.createElement("div",{className:D.a.inputs},o.a.createElement(T.a,{onChange:function(t){e.onChangeInput("firstName",t)},label:"\u0418\u043c\u044f",value:a,required:!0,errorMessage:""===a?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":""}),o.a.createElement(T.a,{onChange:function(t){e.onChangeInput("lastName",t)},label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:n,required:!0,errorMessage:""===n?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":""}),o.a.createElement(T.a,{onChange:function(t){e.onChangeInput("position",t)},label:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",value:s,required:!0,errorMessage:""===s?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":""}),o.a.createElement(M.a,{onChange:function(t){e.onChangeInput("phone",t)},label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",mask:"m\\ask: (999)999-9999",value:r,required:!0,errorMessage:""===r?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":""}),o.a.createElement(T.a,{onChange:function(t){e.onChangeInput("email",t)},label:"Email",value:i,required:!0,errorMessage:""===i?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":""}),o.a.createElement(T.a,{onChange:function(t){e.onChangeInput("cabinet",t)},value:l,label:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442"})),o.a.createElement("div",{className:D.a.controls},o.a.createElement(g.a,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:this.onSave,allowDisabledFocus:!0,disabled:!c,className:D.a.save}),o.a.createElement(L.a,{text:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",onClick:m})))}}]),t}(n.Component),J=Object(i.b)((function(e){return{personals:e.personals}}),(function(e){return{updateList:function(t){return e(w(t))}}}))(q),U=a(142),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={modalEditIsOpen:!1,editId:null},a.onAppend=function(){var e=a.props.list.length;a.onEditItem(e)},a.onEditItem=function(e){a.setState({editId:e}),a.openModal()},a.onDeleteItem=function(e){var t=Object(l.a)(a.props.list);t.splice(e,1),a.props.updateList(t)},a.onSortText=function(e){var t=a.props,n=t.sortStatus,o=t.updateList,s=t.updateSortStatus,r=Object(l.a)(a.props.list);"Down"===n.type?(r.sort((function(t,a){var n=t[e].toLowerCase(),o=a[e].toLowerCase();return n<o?-1:n>o?1:0})),s({name:e,type:"Up"})):(r.sort((function(t,a){var n=t[e].toLowerCase(),o=a[e].toLowerCase();return n>o?-1:n>o?1:0})),s({name:e,type:"Down"})),o(r)},a.openModal=function(){a.setState({modalEditIsOpen:!a.state.modalEditIsOpen})},a.closeModal=function(){a.setState({modalEditIsOpen:!1})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.editId,t=this.props,a=t.list,n=t.sortStatus;return o.a.createElement("div",null,o.a.createElement(C,{onAppend:this.onAppend,onEditItem:this.onEditItem,onDeleteItem:this.onDeleteItem,onSortText:this.onSortText,sortStatus:n,list:a}),o.a.createElement(U.a,{onDismiss:this.closeModal,isOpen:this.state.modalEditIsOpen,isBlocking:!1},o.a.createElement(J,{onClose:this.closeModal,id:e})))}}]),t}(n.Component),z=Object(i.b)((function(e){return{list:e.personals.list,sortStatus:e.personals.sortStatus}}),(function(e){return{updateList:function(t){return e(w(t))},updateSortStatus:function(t){return e(x(t))}}}))(V),B=a(81);Object(B.a)();var W=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Personal List"))),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"container"},o.a.createElement(z,null))))},X=a(28),K=a(80),R=a.n(K),F={list:[{firstName:"\u0420\u0430\u0434\u0436\u0435\u0448",lastName:"\u041a\u0443\u0442\u0440\u0430\u043f\u0430\u043b\u0438",position:"\u0410\u0441\u0442\u0440\u043e\u043d\u043e\u043c",phone:"8 935 232 34 45",email:"radj.f@ya.ru",cabinet:"34"},{firstName:"\u0428\u0435\u043b\u0434\u043e\u043d",lastName:"\u041a\u0443\u043f\u0435\u0440",position:"\u0424\u0438\u0437\u0438\u043a-\u0442\u0435\u043e\u0440\u0435\u0442\u0438\u043a",phone:"8 934 232 00 21",email:"sheldon.k@ya.ru",cabinet:"01"},{firstName:"\u0413\u043e\u0432\u0430\u0440\u0434",lastName:"\u0412\u043e\u043b\u043e\u0432\u0438\u0446",position:"\u0418\u043d\u0436\u0435\u043d\u0435\u0440",phone:"8 935 334 33 31",email:"govard.k@ya.ru",cabinet:"51"},{firstName:"\u041a\u0440\u0438\u0441\u0442\u0438\u0430\u043d",lastName:"\u0421\u0442\u044e\u0430\u0440\u0442",position:"\u0410\u043a\u0442\u0440\u0438\u0441\u0430",phone:"8 934 301 23 25",email:"krist.k@ya.ru",cabinet:"53"}],sortStatus:{name:"firstName",type:"Down"}},H=Object(X.c)({personals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w().type:return Object(k.a)({},e,{list:Object(l.a)(t.payload)});case x().type:return Object(k.a)({},e,{sortStatus:Object(k.a)({},t.payload)});default:return e}}}),Z=function(){try{var e=localStorage.getItem("personals");if(null===e)return;return JSON.parse(e)}catch(t){return void console.error(t)}}(),G=Object(X.e)(H,Z,Object(X.d)(Object(X.a)((function(e){return function(e){return function(t){return console.info("logger: ",t),e(t)}}})),window.devToolsExtension?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));G.subscribe(R()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("personals",t)}catch(a){return void console.error(a)}}({personals:G.getState().personals})}),1e3));var Q=G;r.a.render(o.a.createElement(i.a,{store:Q},o.a.createElement(W,null)),document.getElementById("root"))},15:function(e,t,a){e.exports={item:"PersonalsItem_item__3NhVn",info:"PersonalsItem_info__1xBOu",edit:"PersonalsItem_edit__1m33N",delete:"PersonalsItem_delete__12W6O",person:"PersonalsItem_person__1ivxz"}},17:function(e,t,a){e.exports={personList:"Personals_personList__5WuSX",header:"Personals_header__3rS05",append:"Personals_append__1k4KH",btnSort:"Personals_btnSort__dw3NZ"}},38:function(e,t,a){e.exports={form:"EditPerson_form__V0CWa",controls:"EditPerson_controls__2uij8",header:"EditPerson_header__5N2ta",save:"EditPerson_save__J_dtq"}},90:function(e,t,a){e.exports=a(101)},99:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.a9fae112.chunk.js.map