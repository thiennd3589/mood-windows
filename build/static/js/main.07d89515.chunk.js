(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,n){e.exports=n(88)},56:function(e,t,n){},57:function(e,t,n){},65:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),i=n.n(c),o=(n(56),n(12)),s=n(13),u=n(14),l=n(15),d=(n(57),n(10)),h=n(9),p=n(92),m=n(91),f=n(30),g=n.n(f);n(62);g.a.initializeApp({apiKey:"AIzaSyBelC1esFXUokFC1ZjAY-UaoQ4qkSk_LDE",authDomain:"mood-windows.firebaseapp.com",databaseURL:"https://mood-windows.firebaseio.com",projectId:"mood-windows",storageBucket:"mood-windows.appspot.com",messagingSenderId:"660285859384",appId:"1:660285859384:web:89788eb5cff6e2d50168cd",measurementId:"G-VYY1L8ZZNE"});var b=g.a.firestore(),v=Object(h.a)([function(e){return e.song}],(function(e){return e.embedIDs})),S=n(93),O=n(94),E=(n(65),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).prevSong=function(){return 0===e.state.currentSong?e.setState({currentSong:e.state.embedIDs.length-1}):e.setState({currentSong:e.state.currentSong-1})},e.nextSong=function(){return e.state.currentSong===e.state.embedIDs.length-1?e.setState({currentSong:0}):e.setState({currentSong:e.state.currentSong+1})},e.state={embedIDs:[{id:"ZW677U88"},{id:"ZW6FEDOA"},{id:"ZW78WAEC"},{id:"ZW7AUOCI"},{id:"ZW9ABCWU"}],currentSong:0},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.props.embedIDs;if(e[0].id===this.state.embedIDs[0].id)return null;this.setState({embedIDs:e})}},{key:"componentDidMount",value:function(){var e=this.props.embedIDs;this.setState({embedIDs:e,currentSong:parseInt(Math.random()*e.length)})}},{key:"render",value:function(){var e=this.props.embedIDs;return r.a.createElement("div",{id:"sound"},r.a.createElement("button",{className:"prev",onClick:this.prevSong},r.a.createElement(S.a,{style:{fontSize:"2rem"}})),r.a.createElement("iframe",{scrolling:"yes",width:"40%",height:"50",src:"https://zingmp3.vn/embed/song/".concat(e[this.state.currentSong].id,"?start=true"),frameBorder:"0",allowFullScreen:!0,title:"song"}),r.a.createElement("button",{className:"next",onClick:this.nextSong},r.a.createElement(O.a,{style:{fontSize:"2rem",backgroundColor:"none"}})))}}]),n}(r.a.Component)),w=Object(h.b)({embedIDs:v}),y=Object(d.b)(w)(E),j=Object(h.a)([function(e){return e.search}],(function(e){return e.gif})),C=(n(68),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).setGifSize=function(){var t=e.props,n=t.gif,a=(t.getSize,e.state.width<600?e.state.width-100:n.width),r=a*n.height/n.width;return r+300>=e.state.height&&(a=(r=window.innerHeight-300)*n.width/n.height),console.log(n.height,n.width),console.log(r,a),{url:n.url,height:r,width:a}},e.onResize=function(){window.onresize=function(){e.setState({width:window.innerWidth,height:window.innerHeight})}},e.state={width:window.innerWidth,height:window.innerHeight},e}return Object(s.a)(n,[{key:"render",value:function(){this.onResize();var e=this.setGifSize(),t=e.url,n=e.width,a=e.height;return r.a.createElement("div",{className:"video-container"},r.a.createElement("img",{className:"gif",src:t,style:{width:n,height:a},alt:"gif",crossOrigin:"anonymous"}))}}]),n}(r.a.PureComponent)),k=Object(h.b)({gif:j}),_=Object(d.b)(k)(C),G=n(23),x="GET_GIF_DATA_START",I="GET_GIF_DATA_SUCCESS",N="GET_GIF_DATA_FAILURE",T=function(e){return{type:I,payload:e}},A={GET_SONG_START:"GET_SONG_START",GET_SONG_SUCCESS:"GET_SONG_SUCCESS",GET_SONG_FAILURE:"GET_SONG_FAILURE",GET_CURRENT_SONG:"GET_CURRENT_SONG"},U=(n(69),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",result:""},e.onClick=function(t){var n=e.props,a=n.searchStart,r=n.getSongStart,c=t.target.innerHTML;a(encodeURI("pixel "+c.toLowerCase()+" art")),r(c.toLowerCase())},e.onChange=function(t){e.setState(Object(G.a)({},t.target.name,t.target.value))},e.searchHandle=function(){var t=e.props.searchStart;if(""===e.state.search)return alert("What's your mood? Let me know.");t(encodeURI("pixel "+e.state.search+" art"))},e.iconClickHandle=function(){for(var e=document.querySelectorAll(".hyphen"),t=0;t<e.length;t++)e[t].classList.toggle("hyphen-".concat(t+1));document.querySelector(".nav-moods").classList.toggle("nav-moods-visible"),document.querySelectorAll(".nav-moods p").forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/6+.3,"s")}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav-container"},r.a.createElement("p",{className:"nav-name"},"YOUR MOOD"),r.a.createElement("div",{className:"nav-icon",onClick:this.iconClickHandle},r.a.createElement("div",{className:"hyphen"}),r.a.createElement("div",{className:"hyphen"}),r.a.createElement("div",{className:"hyphen"}))),r.a.createElement("div",{className:"nav-moods"},r.a.createElement("p",{name:"relax",onClick:this.onClick},"Relax"),r.a.createElement("p",{name:"happy",onClick:this.onClick},"Happy"),r.a.createElement("p",{name:"sad",onClick:this.onClick},"Sad"),r.a.createElement("p",{name:"chill out",onClick:this.onClick},"Chill"),r.a.createElement("p",{name:"peacefull",onClick:this.onClick},"Peacefull")))}}]),n}(r.a.Component)),D=Object(d.b)(null,(function(e){return{searchStart:function(t){return e(function(e){return{type:x,payload:e}}(t))},getSongStart:function(t){return e(function(e){return{type:A.GET_SONG_START,payload:e}}(t))}}}))(U),R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.gif,t={backgroundImage:"url(".concat(e.url,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"bg-image",style:t}),r.a.createElement(D,null),r.a.createElement(p.a,{className:"gif"},r.a.createElement(m.a,{key:1e3*Math.random(),classNames:"example",timeout:{enter:1e3,exit:1e3}},r.a.createElement(_,null))),r.a.createElement(y,null))}}]),n}(r.a.PureComponent),W=Object(h.b)({gif:j}),z=Object(d.b)(W)(R),L=(n(70),n(11)),Z=n(49),F=n(17),H={gif:{url:"https://media3.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif?cid=5dedc193b0590200add75644fe04a41f97d5af20b8075334&rid=giphy.gif",width:480,height:360},error:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(F.a)({},e,{gif:t.payload});case N:return Object(F.a)({},e,{error:t.payload});default:return e}},B={width:500,embedIDs:[{id:"ZW677U88"},{id:"ZW6FEDOA"},{id:"ZW78WAEC"},{id:"ZW7AUOCI"},{id:"ZW9ABCWU"}],error:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.GET_SIZE:return Object(F.a)({},e,{width:t.payload});case A.GET_SONG_SUCCESS:return Object(F.a)({},e,{embedIDs:t.payload});case A.GET_SONG_FAILURE:return Object(F.a)({},e,{error:t.payload});default:return e}},K=Object(L.c)({search:q,song:M}),P=n(5),Y=n.n(P),J=n(6),V=n(48),X=n.n(V),Q=Y.a.mark(te),$=Y.a.mark(ne),ee=Y.a.mark(ae);function te(e){var t,n,a,r,c;return Y.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,i.prev=1,i.next=4,X.a.get("https://api.giphy.com/v1/gifs/search?q=".concat(t,"&api_key=HZa43wqKKV10JRWCquas0lXxW5CzfRK1&limit=20"));case 4:return n=i.sent,i.next=7,n.data.data;case 7:return a=i.sent,i.next=10,parseInt(20*Math.random());case 10:return r=i.sent,i.next=13,{url:a[r].images.downsized_large.url,width:a[r].images.downsized_large.width,height:a[r].images.downsized_large.height};case 13:return c=i.sent,i.next=16,Object(J.c)(T(c));case 16:i.next=22;break;case 18:return i.prev=18,i.t0=i.catch(1),i.next=22,Object(J.c)((o=i.t0,{type:N,payload:o}));case 22:case"end":return i.stop()}var o}),Q,null,[[1,18]])}function ne(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(x,te);case 2:case"end":return e.stop()}}),$)}function ae(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([Object(J.b)(ne)]);case 2:case"end":return e.stop()}}),ee)}var re=Y.a.mark(oe),ce=Y.a.mark(se),ie=Y.a.mark(ue);function oe(e){var t,n,a;return Y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,b.collection("song");case 4:return n=r.sent,r.next=7,n.where(t,"==",!0).get();case 7:return a=r.sent,r.next=10,Object(J.c)((i=a.docs,{type:A.GET_SONG_SUCCESS,payload:i}));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),r.next=16,Object(J.c)((c=r.t0,{type:A.GET_SONG_FAILURE,payload:c}));case 16:case"end":return r.stop()}var c,i}),re,null,[[1,12]])}function se(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(A.GET_SONG_START,oe);case 2:case"end":return e.stop()}}),ce)}function ue(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([Object(J.b)(se)]);case 2:case"end":return e.stop()}}),ie)}var le=Y.a.mark(de);function de(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([Object(J.b)(ae),Object(J.b)(ue)]);case 2:case"end":return e.stop()}}),le)}var he=de,pe=Object(Z.a)(),me=[pe],fe=Object(L.e)(K,L.a.apply(void 0,me));pe.run(he);var ge=fe;i.a.render(r.a.createElement(d.a,{store:ge},r.a.createElement(z,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.07d89515.chunk.js.map