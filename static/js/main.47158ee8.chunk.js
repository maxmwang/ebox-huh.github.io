(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){e.exports=n(138)},117:function(e,t,n){},125:function(e,t,n){},134:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),s=(n(117),n(10)),o=n.n(s),u=n(20),l=n(14),p=n(27),m=(n(125),n(25)),f=n(83),d=n(82),h=n.n(d);f.a.initializeApp({apiKey:"AIzaSyBeotHm7O-r4F2YUedhn9WMZrTI5U0Hs_M",authDomain:"anman-list.firebaseapp.com",databaseURL:"https://anman-list-default-rtdb.firebaseio.com",projectId:"anman-list",storageBucket:"anman-list.appspot.com",messagingSenderId:"763409917320",appId:"1:763409917320:web:6034f95cf87d62d8b9463d"});var b=f.a.database();function E(e,t){b.ref("passwords/").update(Object(m.a)({},e,h()(t)))}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.ref("passwords/".concat(t)).once("value",function(e){n=e.exists()});case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(e,t){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark(function e(t,n){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.ref("passwords/".concat(t)).once("value",function(e){a=e.val()});case 2:return e.abrupt("return",h()(n)===a);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function g(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark(function e(t){var n,a,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.ref("tokens/".concat(t)).once("value",function(e){n=e.val()});case 2:if(!n){e.next=4;break}return e.abrupt("return",n);case 4:for(a="",r=window.crypto.getRandomValues(new Uint32Array(4)),c=0;c<r.length;c++)a+=c>0?"-":"",a+=r[c].toString(16);return b.ref("tokens/").update(Object(m.a)({},t,a)),e.abrupt("return",a);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e,t){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(o.a.mark(function e(t,n){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,b.ref("tokens/".concat(t)).once("value",function(e){a=e.val()});case 4:return e.abrupt("return",a===n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(e,t,n){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark(function e(t,n,a){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.ref("".concat(t,"/").concat(n,"s/").concat(a)).once("value",function(e){r=e.val()});case 2:return e.abrupt("return",r);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var S=n(180),N=n(179),R=n(176),B=n(190),L=n(178),U=n(175),z=n(177),A=n(140),M=n(59),P=n.n(M),H=n(58),T=n.n(H);n(91);function V(e,t){switch(t){case"enter":return!0;case"leave":default:return!1}}var F=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(""),m=Object(l.a)(s,2),f=m[0],d=m[1],h=Object(a.useState)(""),b=Object(l.a)(h,2),E=b[0],k=b[1],O=Object(a.useState)(""),g=Object(l.a)(O,2),j=g[0],w=g[1],x=Object(a.useReducer)(function(e,t){return!e},!0),C=Object(l.a)(x,2),I=C[0],M=C[1],H=Object(a.useReducer)(V,!1),F=Object(l.a)(H,2),W=F[0],K=F[1],D=Object(a.useReducer)(V,!1),G=Object(l.a)(D,2),J=G[0],Y=G[1],Z=function(e,t){"username"===e?(i(t),k("")):"password"===e&&(d(t),w(""))},_=function(e){"username"===e?k(""):"password"===e&&w("")},q=function(){var t=Object(u.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==c){t.next=5;break}return k("Invalid username."),t.abrupt("return");case 5:return t.next=7,v(c);case 7:if(t.sent){t.next=10;break}return k("Username does not exist."),t.abrupt("return");case 10:if(""!==f){t.next=15;break}return w("Invalid password."),t.abrupt("return");case 15:return t.next=17,y(c,f);case 17:if(t.sent){t.next=20;break}return w("Incorrect password."),t.abrupt("return");case 20:return t.next=22,e.logIn(c);case 22:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)(function(){!function(){var t=Object(u.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.isValid();case 2:if(!t.sent){t.next=4;break}Object(p.b)("/home");case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()}),r.a.createElement("div",{className:"LoginSignup",onKeyPress:function(e){"Enter"===e.key&&q()}},r.a.createElement(A.a,{variant:"h5"},"LOGIN"),r.a.createElement("br",null),r.a.createElement(U.a,{error:Boolean(E)},r.a.createElement(B.a,null,"Username"),r.a.createElement(R.a,{className:"input",value:c,onClick:function(){return _("username")},onChange:function(e){return Z("username",e.target.value)}}),r.a.createElement(z.a,{color:"secondary"},E||" ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(U.a,{error:Boolean(j)},r.a.createElement(B.a,null,"Password"),r.a.createElement(R.a,{className:"input",error:Boolean(j),type:I?"password":"text",value:f,onClick:function(){return _("password")},onChange:function(e){return Z("password",e.target.value)},endAdornment:r.a.createElement(L.a,{position:"end"},r.a.createElement(N.a,{onClick:M},I?r.a.createElement(T.a,null):r.a.createElement(P.a,null)))}),r.a.createElement(z.a,{color:"secondary"},j||" ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{className:"button",variant:W?"contained":"outlined",color:"primary",onClick:q,onMouseEnter:function(){return K("enter")},onMouseLeave:function(){return K("leave")}},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{className:"button",variant:J?"outlined":"text",color:"primary",onClick:function(){return Object(p.b)("/signup")},onMouseEnter:function(){return Y("enter")},onMouseLeave:function(){return Y("leave")}},"Sign Up"))},W=(n(134),n(183)),K=n(187),D=n(182),G=n(189),J=n(99),Y=n.n(J),Z=(n(136),n(100)),_=n(70),q=n(71),Q=n(42),X=n(72),$=n(73),ee=n(52),te=(n(92),n(181)),ne=n(102),ae=n.n(ne),re=n(101),ce=n.n(re),ie=n(53),se=n.n(ie),oe=n(54),ue=n.n(oe);function le(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(ee.a)(e);if(t){var r=Object(ee.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object($.a)(this,n)}}var pe=function(e){Object(X.a)(n,e);var t=le(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).state={original:{title:a.props.title,link:a.props.link,season:a.props.season,episode:a.props.episode,chapter:a.props.chapter},new:{title:a.props.title,link:a.props.link,season:a.props.season,episode:a.props.episode,chapter:a.props.chapter}},a.itemHasUpdated=a.itemHasUpdated.bind(Object(Q.a)(a)),a.updateItem=a.updateItem.bind(Object(Q.a)(a)),a}return Object(q.a)(n,[{key:"copyLink",value:function(){navigator.clipboard.writeText(this.state.new.link),this.props.toggleSnackbar()}},{key:"itemHasUpdated",value:function(){var e=this.state.original,t=this.state.new;return!(!e.title||e.title===t.title)||(!(!e.link||e.link===t.link)||(!(!e.season||e.season===t.season)||(!(!e.episode||e.episode===t.episode)||!(!e.chapter||e.chapter===t.chapter))))}},{key:"updateItem",value:function(){this.itemHasUpdated()&&this.props.update(this.state.new.title,this.state.new)}},{key:"handleInput",value:function(e,t){if("epch"===e&&(e="manga"===this.props.type?"chapter":"episode"),["season","episode","chapter"].includes(e)){if(isNaN(Number(t)))return;(t=Number(t))<0&&(t=0),console.log(t)}this.setState(function(n){return{new:Object(Z.a)({},n.new,Object(m.a)({},e,t))}}),console.log(this.state)}},{key:"renderSeasonCounter",value:function(){var e=this;return r.a.createElement(te.a,{item:!0,xs:!0,container:!0,direction:"column",justify:"center"},r.a.createElement(te.a,{item:!0},r.a.createElement(N.a,{size:"small",onClick:function(){return e.handleInput("season",e.state.new.season+1)}},r.a.createElement(se.a,null))),r.a.createElement(te.a,{item:!0},r.a.createElement(A.a,{variant:"overline"},this.state.new.season)),r.a.createElement(te.a,{item:!0},r.a.createElement(N.a,{size:"small",onClick:function(){return e.handleInput("season",e.state.new.season-1)}},r.a.createElement(ue.a,null))))}},{key:"renderEpisodeChapterCounter",value:function(){var e=this;return r.a.createElement(te.a,{item:!0,xs:!0,container:!0,direction:"column",justify:"center"},r.a.createElement(te.a,{item:!0},r.a.createElement(N.a,{size:"small",onClick:function(){return e.handleInput("epch","manga"===e.props.type?e.state.new.chapter+1:e.state.new.episode+1)}},r.a.createElement(se.a,null))),r.a.createElement(te.a,{item:!0},r.a.createElement(A.a,{variant:"overline"},"manga"===this.props.type?this.state.new.chapter:this.state.new.episode)),r.a.createElement(te.a,{item:!0},r.a.createElement(N.a,{size:"small",onClick:function(){return e.handleInput("epch","manga"===e.props.type?e.state.chapter-1:e.state.new.episode-1)}},r.a.createElement(ue.a,null))))}},{key:"render",value:function(){var e=this;return r.a.createElement(D.a,{className:"Item"},r.a.createElement(te.a,{container:!0,direction:"row",className:"cell"},r.a.createElement(te.a,{item:!0,xs:9,container:!0,direction:"column",className:"contentText"},r.a.createElement(te.a,{item:!0,style:{width:"100%"}},r.a.createElement(A.a,{noWrap:!0,variant:"h6"},this.state.new.title)),r.a.createElement("br",null),r.a.createElement(te.a,{item:!0,container:!0,direction:"row"},r.a.createElement(te.a,{item:!0,xs:!0},r.a.createElement(A.a,{noWrap:!0,variant:"body2",color:"primary",onClick:function(){return e.copyLink()}},r.a.createElement("a",{className:"link"},this.state.new.link))))),r.a.createElement(te.a,{item:!0,xs:2,container:!0},"manga"===this.props.type?r.a.createElement("div",null):this.renderSeasonCounter(),this.renderEpisodeChapterCounter()),r.a.createElement(te.a,{item:!0,xs:1,container:!0,justify:"center",alignItems:"center"},r.a.createElement(N.a,{disabled:!this.itemHasUpdated(),onClick:this.updateItem},r.a.createElement(ce.a,null)),r.a.createElement(N.a,{disabled:!this.itemHasUpdated(),onClick:this.updateItem},r.a.createElement(ae.a,null)))))}}]),n}(r.a.Component),me=n(186);function fe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(ee.a)(e);if(t){var r=Object(ee.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object($.a)(this,n)}}var de=function(e){Object(X.a)(n,e);var t=fe(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).state={title:a.props.title||"",link:a.props.link||"",season:a.props.season||1,episode:a.props.episode||1,chapter:a.props.chapter||1,titleError:!1,linkError:!1},a.submit=a.submit.bind(Object(Q.a)(a)),a}return Object(q.a)(n,[{key:"handleInput",value:function(e,t){if("epch"===e&&(e="manga"===this.props.type?"chapter":"episode"),["season","episode","chapter"].includes(e)){if(isNaN(Number(t)))return;(t=Number(t))<0&&(t=0)}this.setState(Object(m.a)({},e,t))}},{key:"handleInputClick",value:function(e){this.setState({titleError:"title"!==e&&this.state.titleError,linkError:"link"!==e&&this.state.linkError})}},{key:"submit",value:function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.title){e.next=3;break}return this.setState({titleError:!0}),e.abrupt("return");case 3:if(this.state.link){e.next=6;break}return this.setState({linkError:!0}),e.abrupt("return");case 6:if("manga"!==this.props.type){e.next=11;break}return e.next=9,this.props.submitManga(this.state.title,{chapter:this.state.chapter,link:this.state.link});case 9:e.next=13;break;case 11:return e.next=13,this.props.submitAnime(this.state.title,{season:this.state.season,episode:this.state.episode,link:this.state.link});case 13:this.setState({title:"",link:"",season:1,episode:1,chapter:1,titleError:!1,linkError:!1});case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderSeasonCounter",value:function(){var e=this;return r.a.createElement(te.a,{item:!0,xs:!0,container:!0,direction:"column",justify:"center"},r.a.createElement(te.a,{item:!0},r.a.createElement(N.a,{size:"small",onClick:function(){return e.handleInput("season",e.state.season+1)}},r.a.createElement(se.a,null))),r.a.createElement(te.a,{item:!0},r.a.createElement(me.a,{variant:"outlined",size:"small",style:{width:"90%"},inputProps:{style:{textAlign:"center",padding:"10.5px 7px"}},value:this.state.season,onChange:function(t){return e.handleInput("season",t.target.value)}})),r.a.createElement(te.a,{item:!0},r.a.createElement(N.a,{size:"small",onClick:function(){return e.handleInput("season",e.state.season-1)}},r.a.createElement(ue.a,null))))}},{key:"renderEpisodeChapterCounter",value:function(){var e=this;return r.a.createElement(te.a,{item:!0,xs:!0,container:!0,direction:"column",justify:"center"},r.a.createElement(te.a,{item:!0},r.a.createElement(N.a,{size:"small",onClick:function(){return e.handleInput("epch","manga"===e.props.type?e.state.chapter+1:e.state.episode+1)}},r.a.createElement(se.a,null))),r.a.createElement(te.a,{item:!0},r.a.createElement(me.a,{variant:"outlined",size:"small",style:{width:"90%",maxWidth:"50px"},inputProps:{style:{textAlign:"center",padding:"10.5px 7px"}},value:"manga"===this.props.type?this.state.chapter:this.state.episode,onChange:function(t){return e.handleInput("epch",t.target.value)}})),r.a.createElement(te.a,{item:!0},r.a.createElement(N.a,{size:"small",onClick:function(){return e.handleInput("epch","manga"===e.props.type?e.state.chapter-1:e.state.episode-1)}},r.a.createElement(ue.a,null))))}},{key:"render",value:function(){var e=this;return r.a.createElement(D.a,{className:"Item",style:{borderStyle:"solid",borderWidth:"1px",borderColor:"#5F527A"}},r.a.createElement(te.a,{container:!0,direction:"row",className:"cell"},r.a.createElement(te.a,{item:!0,xs:10,container:!0,direction:"column",className:"contentText"},r.a.createElement(te.a,{item:!0,container:!0,direciton:"row",alignItems:"center"},r.a.createElement(me.a,{label:"Title",error:this.state.titleError,variant:"outlined",style:{width:"90%"},value:this.state.title,onClick:function(){return e.handleInputClick("title")},onChange:function(t){return e.handleInput("title",t.target.value)}})),r.a.createElement("br",null),r.a.createElement(te.a,{item:!0,container:!0,direction:"row",alignItems:"center"},r.a.createElement(me.a,{label:"Link",error:this.state.linkError,variant:"outlined",size:"small",style:{width:"75%",margin:"0 5% 0 0"},value:this.state.link,onClick:function(){return e.handleInputClick("link")},onChange:function(t){return e.handleInput("link",t.target.value)}}),r.a.createElement(S.a,{variant:"outlined",onClick:this.submit},"Add"))),r.a.createElement(te.a,{item:!0,xs:!0,container:!0},"manga"===this.props.type?r.a.createElement("div",null):this.renderSeasonCounter(),this.renderEpisodeChapterCounter())))}}]),n}(r.a.Component);var he=function(e){var t=Object(a.useState)(void 0),n=Object(l.a)(t,2),c=n[0],i=n[1];if(Object(a.useEffect)(function(){!function(){var t=Object(u.a)(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e.username,e.tab,"ongoing");case 2:n=t.sent,Y()(c,n)||i(n);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()}),!c)return r.a.createElement("div",{className:"ItemList"},r.a.createElement(de,{type:e.mediaType}));for(var s=[],p=0,m=Object.entries(c);p<m.length;p++){var f=m[p],d=Object(l.a)(f,2),h=d[0],b=d[1];s.push({title:h,season:b.season,episode:b.episode,chapter:b.chapter,link:b.link})}return r.a.createElement("div",{className:"ItemList"},r.a.createElement(de,{type:e.mediaType}),s.map(function(t){return r.a.createElement(pe,{key:t.title,title:t.title,season:t.season,episode:t.episode,chapter:t.chapter,link:t.link,type:e.mediaType,toggleSnackbar:e.toggleSnackbar})}))};var be=function(e){var t=Object(a.useState)("anime"),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(a.useReducer)(function(e,t){return!e},!1),m=Object(l.a)(s,2),f=m[0],d=m[1],h=function(){var t=Object(u.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.isValid();case 2:if(t.sent){t.next=4;break}Object(p.b)("/login");case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)(function(){!function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()}),r.a.createElement("div",{className:"Home"},r.a.createElement(D.a,null,r.a.createElement(K.a,{value:c,onChange:function(e,t){return i(t)},centered:!0},r.a.createElement(W.a,{value:"anime",label:"anime"}),r.a.createElement(W.a,{value:"manga",label:"manga"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{className:"signout",variant:"outlined",color:"primary",onClick:function(){e.signOut(),Object(p.b)("/login")}},"Sign Out"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(he,{username:e.username,tab:c,type:"ongoing",refresh:h,toggleSnackbar:d}),r.a.createElement(G.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:f,autoHideDuration:3e3,onClose:d,message:"Link copied."}))};function Ee(e,t){switch(t){case"enter":return!0;case"leave":default:return!1}}var ve=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(""),m=Object(l.a)(s,2),f=m[0],d=m[1],h=Object(a.useState)(""),b=Object(l.a)(h,2),k=b[0],y=b[1],O=Object(a.useState)(""),g=Object(l.a)(O,2),j=g[0],w=g[1],x=Object(a.useState)(""),C=Object(l.a)(x,2),I=C[0],M=C[1],H=Object(a.useState)(""),V=Object(l.a)(H,2),F=V[0],W=V[1],K=Object(a.useReducer)(function(e,t){return!e},!0),D=Object(l.a)(K,2),G=D[0],J=D[1],Y=Object(a.useReducer)(function(e,t){return!e},!0),Z=Object(l.a)(Y,2),_=Z[0],q=Z[1],Q=Object(a.useReducer)(Ee,!1),X=Object(l.a)(Q,2),$=X[0],ee=X[1],te=Object(a.useReducer)(Ee,!1),ne=Object(l.a)(te,2),ae=ne[0],re=ne[1],ce=function(e,t){"username"===e?(i(t),w("")):"password"===e?(d(t),M("")):"confirm"===e&&(y(t),W(""))},ie=function(e){"username"===e?w(""):"password"===e?M(""):"confirm"===e&&W("")},se=function(){var t=Object(u.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==c){t.next=5;break}return w("Invalid username."),t.abrupt("return");case 5:return t.next=7,v(c);case 7:if(!t.sent){t.next=10;break}return w("Username already taken."),t.abrupt("return");case 10:if(""!==f){t.next=15;break}return M("Invalid password."),t.abrupt("return");case 15:if(f===k){t.next=18;break}return M("Passwords don't match."),t.abrupt("return");case 18:return E(c,f),t.next=21,e.logIn(c);case 21:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)(function(){!function(){var t=Object(u.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.isValid();case 2:if(!t.sent){t.next=4;break}Object(p.b)("/home");case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()}),r.a.createElement("div",{className:"LoginSignup",onKeyPress:function(e){"Enter"===e.key&&se()}},r.a.createElement(A.a,{variant:"h5"},"SIGN UP"),r.a.createElement("br",null),r.a.createElement(U.a,{error:Boolean(j)},r.a.createElement(B.a,null,"Username"),r.a.createElement(R.a,{className:"input",value:c,onClick:function(){return ie("username")},onChange:function(e){return ce("username",e.target.value)}}),r.a.createElement(z.a,{color:"secondary"},j||" ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(U.a,{error:Boolean(I)},r.a.createElement(B.a,null,"Password"),r.a.createElement(R.a,{className:"input",error:Boolean(I),type:G?"password":"text",value:f,onClick:function(){return ie("password")},onChange:function(e){return ce("password",e.target.value)},endAdornment:r.a.createElement(L.a,{position:"end"},r.a.createElement(N.a,{onClick:J},G?r.a.createElement(T.a,null):r.a.createElement(P.a,null)))}),r.a.createElement(z.a,{color:"secondary"},I||" ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(U.a,{error:Boolean(F)},r.a.createElement(B.a,null,"Confirm Password"),r.a.createElement(R.a,{className:"input",error:Boolean(F),type:_?"password":"text",value:k,onClick:function(){return ie("confirm")},onChange:function(e){return ce("confirm",e.target.value)},endAdornment:r.a.createElement(L.a,{position:"end"},r.a.createElement(N.a,{onClick:q},_?r.a.createElement(T.a,null):r.a.createElement(P.a,null)))}),r.a.createElement(z.a,{color:"secondary"},F||" ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{className:"button",variant:ae?"contained":"outlined",color:"primary",onClick:se,onMouseEnter:function(){return re("enter")},onMouseLeave:function(){return re("leave")}},"Sign up"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{className:"button",variant:$?"outlined":"",color:"primary",onClick:function(){return Object(p.b)("/login")},onMouseEnter:function(){return ee("enter")},onMouseLeave:function(){return ee("leave")}},"Login"))};var ke=function(e){var t=Object(a.useState)(localStorage.getItem("username")),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(localStorage.getItem("token")),f=Object(l.a)(s,2),d=f[0],h=f[1],E=function(){var e=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,i(t),h(n),localStorage.setItem("username",t),localStorage.setItem("token",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(){!function(e){b.ref("tokens/").update(Object(m.a)({},e,null))}(c),i(void 0),h(void 0),localStorage.removeItem("username"),localStorage.removeItem("token")},k=function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(c,d);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(p.a,null,r.a.createElement(be,{path:"/home",username:c,token:d,signOut:function(){return v()},isValid:function(){return k()}}),r.a.createElement(F,{default:!0,path:"/login",logIn:function(e){return E(e)},isValid:function(){return k()}}),r.a.createElement(ve,{path:"/signup",logIn:function(e){return E(e)},isValid:function(){return k()}}))},ye=n(103),Oe=n(184),ge=n(185),je=Object(ye.a)({palette:{type:"dark",primary:{main:"#987CCF"},secondary:{main:"#EE99FF"},background:{default:"#222639",paper:"#1B1E2E"}}});i.a.render(r.a.createElement(Oe.a,{theme:je},r.a.createElement(ge.a,null),r.a.createElement(ke,null)),document.getElementById("root"))},91:function(e,t,n){},92:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.47158ee8.chunk.js.map