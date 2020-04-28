function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{lCCV:function(t,e,o){"use strict";o.r(e),o.d(e,"TodoModule",(function(){return X}));var n,i,r,c=o("ofXK"),s=o("tyNb"),a=o("XNiG"),u=o("1G5W"),d=o("3Pt+"),b=o("0IaG"),l=o("fXoL"),f=o("kmnG"),m=o("qFsG"),p=o("bTqV"),g=((n=function(){function t(e,o,n){_classCallCheck(this,t),this.fb=e,this.dialogRef=o,this.data=n,this.loginForm=this.fb.group({login:["",d.k.required],password:["",d.k.required]}),this.dialogData=this.data}return _createClass(t,[{key:"onSubmit",value:function(t){this.dialogRef.close(t)}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||n)(l.Nb(d.b),l.Nb(b.d),l.Nb(b.a))},n.\u0275cmp=l.Hb({type:n,selectors:[["app-login-modal"]],decls:11,vars:3,consts:[[3,"formGroup","ngSubmit"],[1,"w-100"],["matInput","","placeholder","min 6","formControlName","login"],["matInput","","placeholder","min 6","formControlName","password"],["mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(t,e){1&t&&(l.Sb(0,"form",0),l.ac("ngSubmit",(function(){return e.onSubmit(e.loginForm.value)})),l.Sb(1,"mat-form-field",1),l.Sb(2,"mat-label"),l.sc(3,"Login"),l.Rb(),l.Ob(4,"input",2),l.Rb(),l.Sb(5,"mat-form-field",1),l.Sb(6,"mat-label"),l.sc(7,"Password"),l.Rb(),l.Ob(8,"input",3),l.Rb(),l.Sb(9,"button",4),l.sc(10),l.Rb(),l.Rb()),2&t&&(l.fc("formGroup",e.loginForm),l.Bb(9),l.fc("disabled",e.loginForm.invalid),l.Bb(1),l.tc(e.dialogData.buttonText))},directives:[d.l,d.h,d.d,f.a,f.d,m.a,d.a,d.g,d.c,p.a],styles:["form[_ngcontent-%COMP%]{text-align:center}.w-100[_ngcontent-%COMP%]{width:100%}"]}),n),h=o("LzQu"),v=o("tk/3"),I=((i=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"getTodoList",value:function(){return this.http.get("".concat(h.a.apiUrlConst,"todo"))}},{key:"postTodo",value:function(t){return this.http.post("".concat(h.a.apiUrlConst,"todo"),t)}},{key:"deleteTodo",value:function(t){return this.http.delete("".concat(h.a.apiUrlConst,"todo/").concat(t))}},{key:"putTodo",value:function(t,e){return this.http.put("".concat(h.a.apiUrlConst,"todo/").concat(t),e)}},{key:"getTodoByUserId",value:function(t){return this.http.get("".concat(h.a.apiUrlConst,"todo/").concat(t))}}]),t}()).\u0275fac=function(t){return new(t||i)(l.Wb(v.b))},i.\u0275prov=l.Jb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),S=o("jGGy"),k=o("5eHb"),y=o("STbY"),T=o("NFeN"),O=((r=function(){function t(e){_classCallCheck(this,t),this.fb=e,this.sendFormValue=new l.n,this.form=this.fb.group({todo:["",d.k.required]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"submitTodoForm",value:function(){this.sendFormValue.emit(this.form.value),this.form.reset()}}]),t}()).\u0275fac=function(t){return new(t||r)(l.Nb(d.b))},r.\u0275cmp=l.Hb({type:r,selectors:[["app-todo-add"]],outputs:{sendFormValue:"sendFormValue"},decls:8,vars:2,consts:[[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","placeholder","Read Book","formControlName","todo"],["mat-mini-fab","","color","primary","type","submit",1,"m-1",3,"disabled"]],template:function(t,e){1&t&&(l.Sb(0,"form",0),l.ac("ngSubmit",(function(){return e.submitTodoForm()})),l.Sb(1,"mat-form-field",1),l.Sb(2,"mat-label"),l.sc(3,"Add Todos"),l.Rb(),l.Ob(4,"input",2),l.Rb(),l.Sb(5,"button",3),l.Sb(6,"small"),l.sc(7,"Submit"),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.fc("formGroup",e.form),l.Bb(5),l.fc("disabled",e.form.invalid))},directives:[d.l,d.h,d.d,f.a,f.d,m.a,d.a,d.g,d.c,p.a],styles:["form[_ngcontent-%COMP%]{text-align:center}"]}),r),C=o("wZkO"),R=o("MutI"),w=o("f0Cb"),L=o("FKr1");function U(t,e){if(1&t&&(l.Sb(0,"div",4),l.Sb(1,"p"),l.sc(2),l.Rb(),l.Rb()),2&t){var o=l.cc();l.Bb(2),l.tc(o.todoItem.todo)}}function _(t,e){if(1&t&&(l.Sb(0,"form",5),l.Sb(1,"mat-form-field",6),l.Sb(2,"mat-label"),l.sc(3,"Edit Todo"),l.Rb(),l.Ob(4,"input",7),l.Rb(),l.Rb()),2&t){var o=l.cc();l.fc("formGroup",o.editForm)}}function M(t,e){if(1&t){var o=l.Tb();l.Sb(0,"button",12),l.ac("click",(function(){l.kc(o);var t=l.cc(2);return t.changeEditMode(t.todoItem)})),l.Sb(1,"mat-icon"),l.sc(2,"edit"),l.Rb(),l.Rb()}}function F(t,e){if(1&t){var o=l.Tb();l.Sb(0,"button",12),l.ac("click",(function(){return l.kc(o),l.cc(2).changeMode()})),l.Sb(1,"mat-icon"),l.sc(2,"keyboard_return"),l.Rb(),l.Rb()}}function x(t,e){if(1&t){var o=l.Tb();l.Sb(0,"button",13),l.ac("click",(function(){return l.kc(o),l.cc(2).editCurrentItem()})),l.Sb(1,"mat-icon"),l.sc(2,"save"),l.Rb(),l.Rb()}if(2&t){var n=l.cc(2);l.fc("disabled",n.editForm.invalid)}}function j(t,e){if(1&t){var o=l.Tb();l.Sb(0,"div",8),l.rc(1,M,3,0,"button",9),l.rc(2,F,3,0,"button",9),l.rc(3,x,3,1,"button",10),l.Sb(4,"button",11),l.ac("click",(function(){l.kc(o);var t=l.cc();return t.deleteCurrentItem(t.todoItem._id)})),l.Sb(5,"mat-icon"),l.sc(6,"delete"),l.Rb(),l.Rb(),l.Rb()}if(2&t){var n=l.cc();l.Bb(1),l.fc("ngIf",!n.editMode),l.Bb(1),l.fc("ngIf",n.editMode),l.Bb(1),l.fc("ngIf",n.editMode)}}var B,N=((B=function(){function t(e){_classCallCheck(this,t),this.fb=e,this.isOptionActive=!1,this.deleteItem=new l.n,this.updateItem=new l.n,this.showOptions=!1,this.editMode=!1,this.editForm=this.fb.group({_id:[""],todo:["",d.k.required]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"deleteCurrentItem",value:function(t){this.deleteItem.emit(t)}},{key:"editCurrentItem",value:function(){this.updateItem.emit(this.editForm.value),this.changeMode()}},{key:"changeEditMode",value:function(t){this.changeMode(),this.editForm.patchValue(t)}},{key:"changeMode",value:function(){this.editMode=!this.editMode}}]),t}()).\u0275fac=function(t){return new(t||B)(l.Nb(d.b))},B.\u0275cmp=l.Hb({type:B,selectors:[["app-todo-list-item"]],inputs:{todoItem:"todoItem",isOptionActive:"isOptionActive"},outputs:{deleteItem:"deleteItem",updateItem:"updateItem"},decls:5,vars:3,consts:[["matLine","",3,"mouseover","mouseleave"],["matLine","",4,"ngIf"],["matLine","",3,"formGroup",4,"ngIf"],["class","d-flex",4,"ngIf"],["matLine",""],["matLine","",3,"formGroup"],[1,"example-full-width"],["matInput","","placeholder","todo","formControlName","todo"],[1,"d-flex"],["mat-icon-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","primary",3,"disabled","click"]],template:function(t,e){1&t&&(l.Sb(0,"mat-list-item",0),l.ac("mouseover",(function(){return e.showOptions=!0}))("mouseleave",(function(){return e.showOptions=!1})),l.rc(1,U,3,1,"div",1),l.rc(2,_,5,1,"form",2),l.rc(3,j,7,3,"div",3),l.Ob(4,"mat-divider"),l.Rb()),2&t&&(l.Bb(1),l.fc("ngIf",!e.editMode),l.Bb(1),l.fc("ngIf",e.editMode),l.Bb(1),l.fc("ngIf",e.isOptionActive&&e.showOptions))},directives:[R.b,L.e,c.j,w.a,d.l,d.h,d.d,f.a,f.d,m.a,d.a,d.g,d.c,p.a,T.a],styles:[".d-flex[_ngcontent-%COMP%]{display:flex}.mat-list-item[_ngcontent-%COMP%]{height:5rem}"]}),B);function G(t,e){if(1&t){var o=l.Tb();l.Qb(0),l.Sb(1,"app-todo-list-item",2),l.ac("updateItem",(function(t){return l.kc(o),l.cc().update(t)}))("deleteItem",(function(t){return l.kc(o),l.cc().delete(t)})),l.Rb(),l.Pb()}if(2&t){var n=e.$implicit,i=l.cc();l.Bb(1),l.fc("todoItem",n)("isOptionActive",i.isOptionActive)}}var P,$=((P=function(){function t(){_classCallCheck(this,t),this.deleteItem=new l.n,this.updateItem=new l.n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"delete",value:function(t){this.deleteItem.emit(t)}},{key:"update",value:function(t){this.updateItem.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||P)},P.\u0275cmp=l.Hb({type:P,selectors:[["app-todo-list"]],inputs:{todoList:"todoList",isOptionActive:"isOptionActive"},outputs:{deleteItem:"deleteItem",updateItem:"updateItem"},decls:5,vars:1,consts:[["mat-subheader",""],[4,"ngFor","ngForOf"],[3,"todoItem","isOptionActive","updateItem","deleteItem"]],template:function(t,e){1&t&&(l.Sb(0,"mat-list"),l.Sb(1,"div",0),l.sc(2,"TODOS"),l.Rb(),l.rc(3,G,2,2,"ng-container",1),l.Ob(4,"mat-divider"),l.Rb()),2&t&&(l.Bb(3),l.fc("ngForOf",e.todoList))},directives:[R.a,R.d,c.i,w.a,N],styles:[""]}),P);function A(t,e){if(1&t){var o=l.Tb();l.Sb(0,"button",10),l.ac("click",(function(){return l.kc(o),l.cc().openLoginDialog()})),l.Sb(1,"mat-icon"),l.sc(2,"input"),l.Rb(),l.sc(3," LOGIN "),l.Rb()}}function V(t,e){if(1&t){var o=l.Tb();l.Sb(0,"button",10),l.ac("click",(function(){return l.kc(o),l.cc().logout()})),l.Sb(1,"mat-icon"),l.sc(2,"output"),l.Rb(),l.Sb(3,"span"),l.sc(4,"LOGOUT"),l.Rb(),l.Rb()}}function D(t,e){if(1&t){var o=l.Tb();l.Sb(0,"button",10),l.ac("click",(function(){return l.kc(o),l.cc().openRegistrationDialog()})),l.Sb(1,"mat-icon"),l.sc(2,"create_new_folder"),l.Rb(),l.Sb(3,"span"),l.sc(4,"REGISTRATION"),l.Rb(),l.Rb()}}var E,q,H,K=[{path:"",component:(E=function(){function t(e,o,n,i){_classCallCheck(this,t),this.todoService=e,this.dialog=o,this.authService=n,this.toastrService=i,this.ngUnsubscribe$=new a.a,this.isUserLoggedIn=!1,this.selectedTabIndex=0}return _createClass(t,[{key:"ngOnInit",value:function(){this.getTodoList(),this.getUserInfo()}},{key:"getUserInfo",value:function(){var t=this;this.isUserLoggedIn=this.authService.isLoggedIn(),this.authService.currentUserSubject$.pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(e){e&&(t.userInfo=e,t.getUserTodo(e._id))}),(function(e){return t.toastrService.error(e.error)}))}},{key:"ngOnDestroy",value:function(){this.ngUnsubscribe$.next(),this.ngUnsubscribe$.complete()}},{key:"getUserTodo",value:function(t){var e=this;this.todoService.getTodoByUserId(t).pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(t){e.todoListPrivate=t,e.selectedTabIndex=1}),(function(t){return e.toastrService.error(t.error)}))}},{key:"getTodoList",value:function(){var t=this;this.todoService.getTodoList().pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(e){t.todoListGlobal=e,t.selectedTabIndex=0}),(function(e){return t.toastrService.error(e.error)}))}},{key:"postTodoFormValue",value:function(t){var e=this;this.todoService.postTodo(Object.assign(Object.assign({},t),{userId:this.userInfo?this.userInfo._id:void 0})).pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(t){e.userInfo?e.getUserTodo(e.userInfo._id):e.getTodoList(),e.toastrService.success("Add Success")}),(function(t){return e.toastrService.error(t.error)}))}},{key:"deleteTodo",value:function(t){var e=this;this.todoService.deleteTodo(t).pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(t){return e.userInfo?e.getUserTodo(e.userInfo._id):e.getTodoList()}),(function(t){return e.toastrService.error(t.error)}))}},{key:"updateTodo",value:function(t){var e=this;this.todoService.putTodo(t._id,t).pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(t){return e.userInfo?e.getUserTodo(e.userInfo._id):e.getTodoList()}),(function(t){return e.toastrService.error(t.error)}))}},{key:"openLoginDialog",value:function(){var t=this;this.dialog.open(g,{data:{buttonText:"Login"}}).beforeClosed().pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(e){return e&&t.login(e)}),(function(e){return t.toastrService.error(e.error)}))}},{key:"openRegistrationDialog",value:function(){var t=this;this.dialog.open(g,{data:{buttonText:"Registration"}}).beforeClosed().pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(e){return e&&t.registrationNewUser(e)}),(function(e){return t.toastrService.error(e.error)}))}},{key:"login",value:function(t){var e=this;this.authService.login(t).pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(o){o.error?e.toastrService.error(o.error):(e.isUserLoggedIn=t,e.toastrService.success("WELCOME USER"))}),(function(t){return e.toastrService.error(t.error)}))}},{key:"logout",value:function(){var t=this;this.authService.logout().pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(e){t.isUserLoggedIn=e,t.userInfo=null,t.selectedTabIndex=0,t.todoListPrivate=null}),(function(e){return t.toastrService.error(e.error)}))}},{key:"registrationNewUser",value:function(t){var e=this;this.authService.registrationNewUser(t).pipe(Object(u.a)(this.ngUnsubscribe$)).subscribe((function(t){return e.toastrService.success(t)}),(function(t){return e.toastrService.error(t.error)}))}}]),t}(),E.\u0275fac=function(t){return new(t||E)(l.Nb(I),l.Nb(b.b),l.Nb(S.a),l.Nb(k.b))},E.\u0275cmp=l.Hb({type:E,selectors:[["app-todo"]],decls:16,vars:10,consts:[[1,"flex-r"],["mat-mini-fab","","color","primary",1,"m-1",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngIf"],[3,"sendFormValue"],[1,"w-80"],["mat-align-tabs","center",3,"selectedIndex","selectedIndexChange"],["label","General Todo"],[3,"todoList","isOptionActive","deleteItem","updateItem"],["label","Private Todo",3,"disabled"],["mat-menu-item","",3,"click"]],template:function(t,e){if(1&t&&(l.Sb(0,"header",0),l.Sb(1,"button",1),l.Sb(2,"mat-icon"),l.sc(3,"menu"),l.Rb(),l.Rb(),l.Sb(4,"mat-menu",null,2),l.rc(6,A,4,0,"button",3),l.rc(7,V,5,0,"button",3),l.rc(8,D,5,0,"button",3),l.Rb(),l.Rb(),l.Sb(9,"app-todo-add",4),l.ac("sendFormValue",(function(t){return e.postTodoFormValue(t)})),l.Rb(),l.Sb(10,"div",5),l.Sb(11,"mat-tab-group",6),l.ac("selectedIndexChange",(function(t){return e.selectedTabIndex=t})),l.Sb(12,"mat-tab",7),l.Sb(13,"app-todo-list",8),l.ac("deleteItem",(function(t){return e.deleteTodo(t)}))("updateItem",(function(t){return e.updateTodo(t)})),l.Rb(),l.Rb(),l.Sb(14,"mat-tab",9),l.Sb(15,"app-todo-list",8),l.ac("deleteItem",(function(t){return e.deleteTodo(t)}))("updateItem",(function(t){return e.updateTodo(t)})),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&t){var o=l.jc(5);l.Bb(1),l.fc("matMenuTriggerFor",o),l.Bb(5),l.fc("ngIf",!e.isUserLoggedIn),l.Bb(1),l.fc("ngIf",e.isUserLoggedIn),l.Bb(1),l.fc("ngIf",!e.isUserLoggedIn),l.Bb(3),l.fc("selectedIndex",e.selectedTabIndex),l.Bb(2),l.fc("todoList",e.todoListGlobal)("isOptionActive",!1),l.Bb(1),l.fc("disabled",!e.isUserLoggedIn),l.Bb(1),l.fc("todoList",e.todoListPrivate)("isOptionActive",!0)}},directives:[p.a,y.c,T.a,y.d,c.j,O,C.b,C.a,$,y.a],styles:["header[_ngcontent-%COMP%]{background:#000;opacity:.5}.flex-r[_ngcontent-%COMP%]{display:flex;justify-content:end}.w-80[_ngcontent-%COMP%]{width:80%;margin-left:auto;margin-right:auto}"]}),E)}],J=((q=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:q}),q.\u0275inj=l.Kb({factory:function(t){return new(t||q)},imports:[[s.a.forChild(K)],s.a]}),q),W=o("PCNd"),X=((H=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:H}),H.\u0275inj=l.Kb({factory:function(t){return new(t||H)},imports:[[c.b,J,W.a,d.j]]}),H)}}]);