(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(19),s=a.n(i),l=(a(80),a(6)),o=a(7),c=a(9),u=a(8),d=a(10),m=a(4),h=a(145),p=a(130),b=a(142),v=a(72),g=a.n(v),f=a(15),E=a.n(f),O=a(2),j=a(132),y=a(147),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleTab=function(e){a.props.handleTab(e.target.id)},a.handleTab=a.handleTab.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(O.B,{className:"mr-auto",navbar:!0},r.a.createElement(O.C,{onClick:this.handleTab},r.a.createElement(y.a,{to:"/music",id:"song",className:"nav-link",activeClassName:"activeLink"},"Music")),r.a.createElement(O.C,{onClick:this.handleTab},r.a.createElement(y.a,{to:"/movies",id:"movie",className:"nav-link",activeClassName:"activeLink"},"Movies")),r.a.createElement(O.C,{onClick:this.handleTab},r.a.createElement(y.a,{to:"/books",id:"audiobook",className:"nav-link",activeClassName:"activeLink"},"Books")),r.a.createElement(O.C,{onClick:this.handleTab},r.a.createElement(y.a,{to:"/about",id:"about",className:"nav-link",activeClassName:"activeLink"},"About Us")))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({term:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.search()},a.handleSignOut=function(){a.props.handleSignOut()},a.toggle=function(){a.setState({dropdownOpen:!a.state.dropdownOpen})},a.search=a.search.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a.toggle=a.toggle.bind(Object(m.a)(Object(m.a)(a))),a.state={term:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"search",value:function(){var e=this.state.term;this.props.searchCallback(this.props.currentTab,e),this.setState({term:"",dropdownOpen:!1})}},{key:"render",value:function(){var e=r.a.createElement("i",{className:"d-none fa fa-spinner fa-spin fa-fw","aria-hidden":"true"});this.props.isLoading&&(e=r.a.createElement("i",{className:"fa fa-spinner fa-spin fa-fw","aria-hidden":"true"}));var t="";return t=this.props.isMain?r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement(O.c,{isOpen:this.state.dropdownOpen,toggle:this.toggle},r.a.createElement(O.q,{caret:!0,color:"primary"},this.props.currentUser.displayName),r.a.createElement(O.p,null,r.a.createElement(O.o,null,r.a.createElement(y.a,{to:"/favorites",id:"favorites"},"Favorites")),r.a.createElement(O.o,{onClick:this.handleSignOut},"Sign Out"))))):r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement(O.u,{onChange:this.handleChange,id:"search-input",className:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search"})),r.a.createElement("div",{className:"col"},r.a.createElement(O.b,{onClick:this.search,id:"search-button",outline:!0,color:"success",className:"my-2 my-sm-0"},e,"Search")),r.a.createElement("div",{className:"col"},r.a.createElement(O.c,{isOpen:this.state.dropdownOpen,toggle:this.toggle},r.a.createElement(O.q,{caret:!0,color:"primary"},this.props.currentUser.displayName),r.a.createElement(O.p,null,r.a.createElement(O.o,null,r.a.createElement(y.a,{to:"/favorites",id:"favorites"},"Favorites")),r.a.createElement(O.o,{onClick:this.handleSignOut},"Sign Out"))))),r.a.createElement(O.r,{onSubmit:this.handleSubmit},t)}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(m.a)(Object(m.a)(a))),a.state={isOpen:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.props.currentTab;return r.a.createElement(O.D,{className:"navbar-expand-md navbar-dark fixed-top bg-dark"},r.a.createElement(j.a,{to:"/",className:"navbar-brand"},"Muse N' News"),r.a.createElement(O.E,{onClick:this.toggle}),r.a.createElement(O.m,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(k,{handleTab:this.props.handleTab}),r.a.createElement(w,{searchCallback:this.props.searchCallback,isLoading:this.props.isLoading,currentTab:e,currentUser:this.props.currentUser,handleSignOut:this.props.handleSignOut,isMain:this.props.isMain})))}}]),t}(n.Component),C=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],N=function(e){for(var t,a=e.genre_ids,n=[],r=function(e){n[e]=C.filter(function(t){return t.id===a[e]})[0].name},i=0;i<a.length;i++)r(i);return t=null===e.poster_path?"img/no-poster.jpg":"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),{id:e.id,title:e.title,mediaType:"movie",releaseDate:e.release_date,overview:e.overview,poster:t,src:t,voteAverage:e.vote_average,genre:n.join(", "),isFavorite:e.isFavorite}},T=a(144),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFavorites=function(){a.props.handleFavorites(a.props.obj)},a.handleFavorites=a.handleFavorites.bind(Object(m.a)(Object(m.a)(a))),a.state={redirect:!1},a.handleNews=a.handleNews.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleNews",value:function(){this.setState({redirect:!0})}},{key:"render",value:function(){var e,t=this.props.obj,a=r.a.createElement(O.b,{color:"btn",onClick:this.handleNews},"See Related News"),n=r.a.createElement(O.b,{color:"btn btn-success",onClick:this.handleFavorites},"Add to favorites");if(t.isFavorite&&(n=r.a.createElement(O.b,{color:"btn btn-danger",onClick:this.handleFavorites},"Remove from favorites")),e="song"===t.mediaType?r.a.createElement(O.d,{className:"mb-4"},r.a.createElement(O.e,null,r.a.createElement("div",{className:"col-sm-auto"},r.a.createElement("img",{className:"pb-3",src:t.image,alt:t.title})),r.a.createElement("div",{className:"col-sm"},r.a.createElement(O.g,{className:"card-title"},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"}," ",t.title," ")),r.a.createElement(O.f,null,"Album: ",t.album),r.a.createElement(O.f,null,"Type: ",t.mediaType),r.a.createElement(O.f,null,"Genre: ",t.genre),r.a.createElement(O.f,null,r.a.createElement("cite",null,r.a.createElement("a",{href:t.artistUrl,target:"_blank",rel:"noopener noreferrer"},t.artistName)," ",t.releaseDate," ",t.country)),n,a))):"audiobook"===t.mediaType?r.a.createElement(O.d,{className:"mb-4"},r.a.createElement(O.e,null,r.a.createElement("div",{className:"col-sm-auto"},r.a.createElement("img",{className:"pb-3",src:t.image,alt:t.title})),r.a.createElement("div",{className:"col-sm"},r.a.createElement(O.g,{className:"card-title"},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"}," ",t.title," ")),r.a.createElement(O.f,null,"Type: ",t.mediaType),r.a.createElement(O.f,null,"Genre: ",t.genre),r.a.createElement(O.f,null,r.a.createElement("cite",null,r.a.createElement("a",{href:t.artistUrl,target:"_blank",rel:"noopener noreferrer"},t.artistName)," ",t.releaseDate," ",t.country)),r.a.createElement(O.f,null,"Description: ",t.description),n,a))):r.a.createElement(O.d,{className:"mb-4"},r.a.createElement(O.e,null,r.a.createElement("div",{className:"col-sm-auto"},r.a.createElement("img",{className:"pb-3 img-fluid",src:t.poster,alt:t.title})),r.a.createElement("div",{className:"col-sm"},r.a.createElement(O.g,{className:"card-title"},r.a.createElement("p",null," ",t.title," ")),r.a.createElement(O.f,null,"Genre: ",t.genre),r.a.createElement(O.f,null,"Release Date: ",t.releaseDate," "),r.a.createElement(O.f,null,"Description: ",t.overview),r.a.createElement(O.f,null,"Rating: ",t.voteAverage),n,a))),this.state.redirect){var i="/"+t.mediaType+"/"+t.title+"/news";return r.a.createElement(T.a,{push:!0,to:i})}return r.a.createElement("div",{className:"col-lg-4 col-md-6 col-xs-3 d-flex"},e)}}]),t}(n.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.title,t=this.props.subtitle;return r.a.createElement("div",null,r.a.createElement(O.v,{id:"header",fluid:!0},r.a.createElement(O.n,{fluid:!0},r.a.createElement("h1",{id:"title",className:"display-3 title"},e),r.a.createElement("p",{id:"subtitle",className:"lead title"},t))))}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){0===this.props.objs.length&&void 0!==this.props.searchCallback&&"movie"!==this.props.option&&this.props.searchCallback(this.props.option,"pop")}},{key:"render",value:function(){var e;return this.props.showAlert&&(e=r.a.createElement("div",{id:"alert-message"},r.a.createElement(O.a,{id:"inner-message",color:"success"},"Added to favorites!"))),r.a.createElement("div",null,r.a.createElement(M,{title:this.props.title,subtitle:this.props.subtitle}),r.a.createElement("div",{id:"main-content"},r.a.createElement("div",{id:"content"},e,r.a.createElement(I,{objs:this.props.objs,handleFavorites:this.props.handleFavorites,favFlag:this.props.favFlag}))))}}]),t}(n.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.objs;return t=t.map(function(t){var a=t;return e.props.favFlag||(a="track"===t.wrapperType?function(e){return{id:e.trackId,album:e.collectionName,artistName:e.artistName,artistUrl:e.artistViewUrl,country:e.country,genre:e.primaryGenreName,image:e.artworkUrl100,isFavorite:e.isFavorite,mediaType:e.kind,previewUrl:e.previewUrl,releaseDate:e.releaseDate.substring(0,10),title:e.trackName,url:e.trackViewUrl,wrapperType:e.wrapperType}}(t):"audiobook"===t.wrapperType?function(e){return{id:e.collectionId,artistName:e.artistName,artistUrl:e.artistViewUrl,country:e.country,description:e.description,genre:e.primaryGenreName,image:e.artworkUrl100,isFavorite:e.isFavorite,mediaType:e.wrapperType,previewUrl:e.previewUrl,releaseDate:e.releaseDate.substring(0,10),title:e.collectionName,url:e.collectionViewUrl,wrapperType:e.wrapperType}}(t):N(t)),r.a.createElement(F,{key:a.id,obj:a,handleFavorites:e.props.handleFavorites})}),r.a.createElement("div",{className:"row"},t)}}]),t}(n.Component),U=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{title:this.props.title,subtitle:this.props.subtitle,objs:this.props.objs,handleFavorites:this.props.handleFavorites,favFlag:this.props.favFlag})}}]),t}(n.Component),L=(a(133),a(41)),A=a.n(L),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(m.a)(Object(m.a)(a))),a.previous=a.previous.bind(Object(m.a)(Object(m.a)(a))),a.goToIndex=a.goToIndex.bind(Object(m.a)(Object(m.a)(a))),a.onExiting=a.onExiting.bind(Object(m.a)(Object(m.a)(a))),a.onExited=a.onExited.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.props.objs.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.objs.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=this.props.objs.map(function(e){return N(e)}),n=a.map(function(t){return r.a.createElement(O.l,{onExiting:e.onExiting,onExited:e.onExited,key:t.id,className:A.a.contain},r.a.createElement("img",{className:A.a.image,src:t.poster,alt:t.title}),r.a.createElement(O.i,{className:A.a.caption,captionText:t.overview,captionHeader:t.title}))});return r.a.createElement("div",null,r.a.createElement(M,{title:this.props.title,subtitle:this.props.subtitle}),r.a.createElement("div",{id:"main-content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"content"},r.a.createElement(O.h,{activeIndex:t,next:this.next,previous:this.previous},r.a.createElement(O.k,{items:a,activeIndex:t,onClickHandler:this.goToIndex}),n,r.a.createElement(O.j,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(O.j,{direction:"next",directionText:"Next",onClickHandler:this.next}))))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a.toggle=a.toggle.bind(Object(m.a)(Object(m.a)(a))),a.state={value:"",dropdownOpen:!1,movies:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.filterGenre(this.state.value),e.preventDefault()}},{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"filterGenre",value:function(e){var t=this,a="https://api.themoviedb.org/3/discover/movie?api_key=06281c636bf07bf7ba505c2c83932760&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=".concat(e);this.setState({isLoading:!0}),fetch(a).then(function(e){return e.json()}).then(function(e){t.setState({movies:e.results})}).catch(function(e){console.log("Error: ".concat(e))}).then(function(){t.setState({isLoading:!1})})}},{key:"render",value:function(){var e;return e=0===this.state.movies.length?r.a.createElement(I,{objs:this.props.objs,handleFavorites:this.props.handleFavorites}):r.a.createElement(I,{objs:this.state.movies,handleFavorites:this.props.handleFavorites}),r.a.createElement("div",null,r.a.createElement(M,{title:this.props.title,subtitle:this.props.subtitle}),r.a.createElement("div",{id:"main-content"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Filter by Genre:",r.a.createElement("select",{value:this.state.value,onChange:this.handleChange},r.a.createElement("option",{value:"28"},"Action"),r.a.createElement("option",{value:"12"},"Adventure"),r.a.createElement("option",{value:"16"},"Animation"),r.a.createElement("option",{value:"35"},"Comedy"),r.a.createElement("option",{value:"80"},"Crime"),r.a.createElement("option",{value:"99"},"Documentary"),r.a.createElement("option",{value:"18"},"Drama"),r.a.createElement("option",{value:"10751"},"Family"),r.a.createElement("option",{value:"14"},"Fantasy"),r.a.createElement("option",{value:"36"},"History"),r.a.createElement("option",{value:"27"},"Horror"),r.a.createElement("option",{value:"10402"},"Music"),r.a.createElement("option",{value:"9648"},"Mystery"),r.a.createElement("option",{value:"10749"},"Romance"),r.a.createElement("option",{value:"878"},"Science Fiction"),r.a.createElement("option",{value:"10770"},"TV Movie"),r.a.createElement("option",{value:"53"},"Thriller"),r.a.createElement("option",{value:"10752"},"War"),r.a.createElement("option",{value:"37"},"Western"))),r.a.createElement("input",{type:"submit",value:"Submit"}))),r.a.createElement("div",{id:"content"},e)))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={articles:[],title:"",isLoading:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.media;this.setState({title:this.props.match.params.title});var a=this.props.match.params.title,n="https://newsapi.org/v2/everything?q=+".concat(a,"+").concat(t,"&apiKey=63a831797dfe4bb1a78236b43eac06de");this.setState({isLoading:!0}),fetch(n).then(function(e){return e.json()}).then(function(t){e.setState({articles:t.articles})}).catch(function(e){console.log("Error: ".concat(e))}).then(function(){e.setState({isLoading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{title:"News",subtitle:"Read articles related to "+this.state.title}),r.a.createElement("div",{id:"main-content"},r.a.createElement("div",{id:"content"},r.a.createElement(R,{objs:this.state.articles}))))}}]),t}(n.Component),R=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.objs.map(function(e){var t=function(e){return{id:e.title,title:e.title,mediaType:"news",source:e.source,author:e.author,descrip:e.description,url:e.url,urlToImage:e.urlToImage,datePublished:e.publishedAt,content:e.content,isFavorite:e.isFavorite}}(e);return r.a.createElement(W,{key:t.id,obj:t})});return r.a.createElement("div",{className:"row"},e)}}]),t}(n.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.obj;return r.a.createElement(O.d,{className:"mb-4"},r.a.createElement(O.e,null,r.a.createElement("div",{className:"col-sm-auto"},r.a.createElement("img",{className:"pb-3 img-fluid",src:e.urlToImage,alt:e.title})),r.a.createElement("div",{className:"col-sm"},r.a.createElement(O.g,{className:"card-title"},r.a.createElement("p",null," ",e.title," ")),r.a.createElement(O.f,null,"Author: ",e.author),r.a.createElement(O.f,null,"Published On: ",e.datePublished," "),r.a.createElement(O.f,null,"Description: ",e.descript),r.a.createElement(O.f,null,r.a.createElement("a",{href:e.url},"Link to read")))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name,n=e.target.value,r={};r[t]=n,a.setState(r)},a.handleSignUp=function(e){e.preventDefault(),a.props.handleSignUp(a.state.email,a.state.password,a.state.passwordRepeat,a.state.username)},a.handleSignIn=function(e){e.preventDefault(),a.props.handleSignIn(a.state.email,a.state.password)},a.swap=function(){a.setState({signup:!a.state.signup})},a.state={signup:!0,email:void 0,password:void 0,passwordRepeat:void 0,username:void 0},a.swap=a.swap.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=r.a.createElement("i",{className:"d-none fa fa-spinner fa-spin fa-fw","aria-hidden":"true"});return this.props.isLoading&&(e=r.a.createElement("i",{className:"fa fa-spinner fa-spin fa-fw","aria-hidden":"true"})),this.state.signup?r.a.createElement(O.r,null,r.a.createElement(O.s,null,r.a.createElement(O.w,{for:"email-field"},"Email"),r.a.createElement(O.u,{onInput:this.handleChange,type:"email",name:"email",id:"email-field",placeholder:"Email"})),r.a.createElement(O.s,null,r.a.createElement(O.w,{for:"password-field"},"Password"),r.a.createElement(O.u,{onInput:this.handleChange,type:"password",name:"password",id:"password-field",placeholder:"Password"})),r.a.createElement(O.s,null,r.a.createElement(O.w,{for:"password-repeat-field"},"Repeat Password"),r.a.createElement(O.u,{onInput:this.handleChange,type:"password",name:"passwordRepeat",id:"password-repeat-field",placeholder:"Password"})),r.a.createElement(O.s,null,r.a.createElement(O.w,{for:"username-field"},"Username"),r.a.createElement(O.u,{onInput:this.handleChange,type:"text",name:"username",id:"username-field",placeholder:"Enter a cool username"})),r.a.createElement(O.b,{color:"primary",onClick:this.handleSignUp},e,"Sign Up"),r.a.createElement(O.t,{color:"muted"},"Already have an account? Sign in ",r.a.createElement(j.a,{to:"/",onClick:this.swap},"here"),".")):r.a.createElement(O.r,null,r.a.createElement(O.s,null,r.a.createElement(O.w,{for:"email-field"},"Email"),r.a.createElement(O.u,{onInput:this.handleChange,type:"email",name:"email",id:"email-field",placeholder:"Email"})),r.a.createElement(O.s,null,r.a.createElement(O.w,{for:"password-field"},"Password"),r.a.createElement(O.u,{onInput:this.handleChange,type:"password",name:"password",id:"password-field",placeholder:"Password"})),r.a.createElement(O.b,{color:"primary",onClick:this.handleSignIn},e,"Sign In"),r.a.createElement(O.t,{color:"muted"},"Don't have an account? Sign up ",r.a.createElement(j.a,{to:"/",onClick:this.swap},"here"),"."))}}]),t}(n.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{title:"Welcome to ".concat("Muse N' News","."),subtitle:"".concat("Find music, movies, books, and more of your favorite genre."," Sign up today!")}),r.a.createElement("div",{className:"container"},this.props.errorMessage&&r.a.createElement("p",{className:"alert alert-danger"},this.props.errorMessage),r.a.createElement(G,{handleSignUp:this.props.handleSignUp,handleSignIn:this.props.handleSignIn,errorMessage:this.props.errorMessage,isLoading:this.props.isLoading})))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.props.closeModalCallback()}},{key:"render",value:function(){return r.a.createElement(O.x,{isOpen:this.props.showModal,toggle:this.toggle,className:this.props.className},r.a.createElement(O.A,{toggle:this.toggle},"Modal title"),r.a.createElement(O.y,null,this.props.error),r.a.createElement(O.z,null,r.a.createElement(O.b,{color:"danger",onClick:this.toggle},"Close")))}}]),t}(n.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{title:this.props.title,subtitle:this.props.subtitle}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"lead title"},"The 'Muse n News' is a web app for browsing through movies, audiobooks and songs. After signing up/signing in, you can look through the three different types of entertainment options provided.",r.a.createElement("br",null),r.a.createElement("br",null),"Features:",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"The landing page will show you a carousel of all the top trending movies"),r.a.createElement("li",null,"Every movie, song and audiobook card has an option to add the card to favorites. Favorites can be found in the drop down menu under your username."),r.a.createElement("li",null,"Every card also has a see related news option which, on clicking, will show you news articles related to the card."),r.a.createElement("li",null,"A search option is also available on each tab (movies, music, books) for you to search for the thing you're looking for.")),r.a.createElement("br",null))),r.a.createElement("footer",null,"\xa9 2018 - Yulong Tan,  Katie Clark , Elias Mendel,  Anushka Raheja | Powered by:",r.a.createElement("a",{href:"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html"}," iTunes Search API"),",",r.a.createElement("a",{href:"https://developers.themoviedb.org/3/getting-started/introduction"}," The Movie Database API"),", and",r.a.createElement("a",{href:"https://newsapi.org/"}," The News API")))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).search=function(e,t){var n;""!==t?(n="song"===e||"audiobook"===e?"https://itunes.apple.com/search?entity=".concat(e,"&term=").concat(t,"&limit=50"):"https://api.themoviedb.org/3/search/movie?api_key=06281c636bf07bf7ba505c2c83932760&language=en-US&query=".concat(t,"&page=1&include_adult=true"),a.setState({isLoading:!0}),fetch(n).then(function(e){return e.json()}).then(function(t){"song"===e?a.setState({musicCards:t.results}):"audiobook"===e?a.setState({bookCards:t.results}):a.setState({movieCards:t.results})}).catch(function(e){console.log("Error: ".concat(e)),a.setState({showModal:!0,modalError:e.message})}).then(function(){a.setState({isLoading:!1})})):a.setState({showModal:!0,modalError:"Search cannot be empty. Please try again"})},a.handleFavorites=function(e){var t=e.mediaType,n=a.state.musicCards;("audiobook"===t?n=a.state.bookCards:"movie"===t&&(n=a.state.movieCards),e.isFavorite)?(e.isFavorite=!1,E.a.database().ref("favorites/".concat(a.state.user.uid,"/").concat(e.firebaseId)).set(null)):(e.isFavorite=!0,E.a.database().ref("favorites/".concat(a.state.user.uid)).push(e),a.setState({showAlert:!0}),g.a.remove(n,function(t){return e.id===t.trackId||e.id===t.collectionId||e.id===t.id}),setTimeout(function(){a.setState({showAlert:!1})},3e3))},a.handleTab=function(e){a.setState({currentTab:e})},a.handleSignUp=function(e,t,n,r){a.setState({errorMessage:null}),t===n?(a.setState({isLoading:!0}),E.a.auth().createUserWithEmailAndPassword(e,t).then(function(e){return e.user}).then(function(e){e.updateProfile({displayName:r}).then(function(){a.setState({displayName:r,isLoading:!1})}).catch(function(e){a.setState({errorMessage:e.message})})}).catch(function(e){a.setState({errorMessage:e.message})})):a.setState({errorMessage:"passwords do not match"})},a.handleSignIn=function(e,t){a.setState({errorMessage:null,isLoading:!0}),E.a.auth().signInWithEmailAndPassword(e,t).then(function(){a.setState({isLoading:!1})}).catch(function(e){a.setState({errorMessage:e.message})})},a.handleSignOut=function(){a.setState({errorMessage:null}),E.a.auth().signOut().catch(function(e){a.setState({error:e.message})})},a.closeModal=function(){a.setState({showModal:!a.state.showModal})},a.search=a.search.bind(Object(m.a)(Object(m.a)(a))),a.handleFavorites=a.handleFavorites.bind(Object(m.a)(Object(m.a)(a))),a.handleTab=a.handleTab.bind(Object(m.a)(Object(m.a)(a))),a.closeModal=a.closeModal.bind(Object(m.a)(Object(m.a)(a))),a.state={musicCards:[],movieCards:[],bookCards:[],favoriteCards:[],homeMovies:[],currentTab:"home",showModal:!1,showAlert:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.authUnregFunc=E.a.auth().onAuthStateChanged(function(t){if(t){e.setState({user:t,loading:!1});e.setState({isLoading:!0}),fetch("https://api.themoviedb.org/3/movie/popular?api_key=06281c636bf07bf7ba505c2c83932760&language=en-US&page=1").then(function(e){return e.json()}).then(function(t){e.setState({homeMovies:t.results}),0===e.state.movieCards.length&&e.setState({movieCards:t.results})}).catch(function(e){console.log(e)}).then(function(){e.setState({isLoading:!1})}),e.favRef=E.a.database().ref("favorites/".concat(e.state.user.uid)),e.favRef.on("value",function(t){e.setState({favoriteCards:t.val()})})}else e.setState({user:null,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.authUnregFunc(),this.favRef.off()}},{key:"render",value:function(){var e=this;if(!this.state.user)return r.a.createElement(H,{handleSignUp:this.handleSignUp,handleSignIn:this.handleSignIn,errorMessage:this.state.errorMessage,isLoading:this.state.isLoading});var t;return this.state.showModal&&(t=r.a.createElement(V,{showModal:this.state.showModal,closeModalCallback:this.closeModal,error:this.state.modalError})),r.a.createElement("div",null,t,r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement("div",null,r.a.createElement(S,{isMain:!0,searchCallback:e.search,handleTab:e.handleTab,isLoading:e.state.isLoading,currentTab:e.state.currentTab,currentUser:e.state.user,handleSignOut:e.handleSignOut}),r.a.createElement(D,Object.assign({},t,{title:"Looking for entertainment?",subtitle:"Find music, movies, books, and more of your favorite genre.",objs:e.state.homeMovies})))}}),r.a.createElement(p.a,{path:"/music",render:function(t){return r.a.createElement("div",null,r.a.createElement(S,{searchCallback:e.search,handleTab:e.handleTab,isLoading:e.state.isLoading,currentTab:e.state.currentTab,currentUser:e.state.user,handleSignOut:e.handleSignOut,isMain:!1}),r.a.createElement(x,Object.assign({},t,{title:"Music",subtitle:"Find your favorite songs, artists, and bands.",objs:e.state.musicCards,handleFavorites:e.handleFavorites,searchCallback:e.search,option:"song",showAlert:e.state.showAlert})))}}),r.a.createElement(p.a,{path:"/movies",render:function(t){return r.a.createElement("div",null,r.a.createElement(S,{searchCallback:e.search,handleTab:e.handleTab,isLoading:e.state.isLoading,currentTab:e.state.currentTab,currentUser:e.state.user,handleSignOut:e.handleSignOut,isMain:!1}),r.a.createElement(_,Object.assign({},t,{title:"Movies",subtitle:"Find the movie you've been looking for.",objs:e.state.movieCards,handleFavorites:e.handleFavorites,searchCallback:e.search,option:"movie",showAlert:e.state.showAlert})))}}),r.a.createElement(p.a,{path:"/books",render:function(t){return r.a.createElement("div",null,r.a.createElement(S,{searchCallback:e.search,handleTab:e.handleTab,isLoading:e.state.isLoading,currentTab:e.state.currentTab,currentUser:e.state.user,handleSignOut:e.handleSignOut,isMain:!1}),r.a.createElement(x,Object.assign({},t,{title:"Books",subtitle:"Listen to your favorite book series through audiobooks.",objs:e.state.bookCards,handleFavorites:e.handleFavorites,searchCallback:e.search,option:"audiobook",showAlert:e.state.showAlert})))}}),r.a.createElement(p.a,{path:"/favorites",render:function(t){var a;return e.state.favoriteCards&&(a=(a=Object.keys(e.state.favoriteCards)).map(function(t){var a=e.state.favoriteCards[t];return a.firebaseId=t,a})),null!==a&&void 0!==a||(a=[]),r.a.createElement("div",null,r.a.createElement(S,{searchCallback:e.search,handleTab:e.handleTab,isLoading:e.state.isLoading,currentTab:e.state.currentTab,currentUser:e.state.user,handleSignOut:e.handleSignOut,isMain:!0}),r.a.createElement(U,Object.assign({},t,{title:"Favorites",subtitle:"Here are your favorites",objs:a,handleFavorites:e.handleFavorites,favFlag:!0})))}}),r.a.createElement(p.a,{path:"/:media/:title/news",render:function(t){return r.a.createElement("div",null,r.a.createElement(S,{searchCallback:e.search,handleTab:e.handleTab,isLoading:e.state.isLoading,currentTab:e.state.currentTab,currentUser:e.state.user,handleSignOut:e.handleSignOut,isMain:!0}),r.a.createElement(P,Object.assign({},t,{searchCallback:e.search,handleFavorites:e.handleFavorites,option:"news"})))}}),r.a.createElement(p.a,{path:"/about",render:function(t){return r.a.createElement("div",null,r.a.createElement(S,{searchCallback:e.search,handleTab:e.handleTab,isLoading:e.state.isLoading,currentTab:e.state.currentTab,currentUser:e.state.user,handleSignOut:e.handleSignOut,isMain:!0}),r.a.createElement(B,Object.assign({},t,{title:"About Us",subtitle:"Get to know more about us"})))}}),r.a.createElement(b.a,{to:"/"})))}}]),t}(n.Component),z=a(146),K=(a(136),a(138),a(74)),J=a.t(K,2);E.a.initializeApp(J),s.a.render(r.a.createElement(z.a,null,r.a.createElement(q,null)),document.getElementById("root"))},41:function(e,t,a){e.exports={caption:"yoFyS-QOqCdMW6ia0d7UG",image:"_1_W3Bj86Ke9ouWO28gVN-9",contain:"_35Iuk4RUIgexk4N2CrJCQq"}},74:function(e){e.exports={apiKey:"AIzaSyARIuEBgRNU3mxAVywagOALgpxHioELz1c",authDomain:"final-project-b9c84.firebaseapp.com",databaseURL:"https://final-project-b9c84.firebaseio.com",projectId:"final-project-b9c84",storageBucket:"final-project-b9c84.appspot.com",messagingSenderId:"141207566970"}},75:function(e,t,a){e.exports=a(141)}},[[75,2,1]]]);
//# sourceMappingURL=main.6c23c900.chunk.js.map