(this.webpackJsonpcryptodash=this.webpackJsonpcryptodash||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1),c=n.n(i),o=n(21),a=n.n(o),s=(n(31),n(9)),u=n(10),l=n(12),f=n(11),d=(n(32),n(2)),b=n(3);function j(){var t=Object(d.a)(["\n\tpadding: 40px;\n"]);return j=function(){return t},t}var v=b.b.div(j()),p=n(7),h=n(6),x=n(4),O=n.n(x),C=n(8),g=n(18),m=n(5),y=n.n(m),k=n(16),F=n.n(k),S=n(39);S.setApiKey("c485eb9ba8fbe9dc9b022772852f51f60fe7ed709819e9e8bbc511d9108ab9c0");var A=c.a.createContext(),w=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).addCoin=function(t){var e=Object(g.a)(r.state.favorites);e.length<10&&(e.push(t),r.setState({favorites:e}))},r.changeChartSelect=function(t){r.setState({timeInterval:t,historical:null},r.fetchHistorical)},r.confirmFavorites=function(){var t=r.state.favorites[0];r.setState({firstVisit:!1,page:"dashboard",currentFavorite:t,prices:null,historical:null},(function(){r.fetchPrices(),r.fetchHistorical()})),localStorage.setItem("cryptoDash",JSON.stringify({favorites:r.state.favorites,currentFavorite:t}))},r.fetchCoins=Object(C.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.coinList();case 2:e=t.sent.Data,r.setState({coinList:e});case 4:case"end":return t.stop()}}),t)}))),r.fetchHistorical=Object(C.a)(O.a.mark((function t(){var e,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.state.firstVisit){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,r.historical();case 4:e=t.sent,n=[{name:r.state.currentFavorite,data:e.map((function(t,e){return[F()().subtract(Object(h.a)({},r.state.timeInterval,10-e)).valueOf(),t.USD]}))}],r.setState({historical:n});case 7:case"end":return t.stop()}}),t)}))),r.fetchPrices=Object(C.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.state.firstVisit){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,r.prices();case 4:e=(e=t.sent).filter((function(t){return Object.keys(t).length})),r.setState({prices:e});case 7:case"end":return t.stop()}}),t)}))),r.historical=function(){for(var t=[],e=10;e>0;e--)t.push(S.priceHistorical(r.state.currentFavorite,["USD"],F()().subtract(Object(h.a)({},r.state.timeInterval,e)).toDate()));return Promise.all(t)},r.isInFavorites=function(t){return y.a.includes(r.state.favorites,t)},r.prices=Object(C.a)(O.a.mark((function t(){var e,n,i,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[],n=0,i=r.state.favorites.length;case 2:if(!(n<i)){t.next=16;break}return t.prev=3,t.next=6,S.priceFull(r.state.favorites[n],"USD");case 6:c=t.sent,e.push(c),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.warn("Fetch price error: ",t.t0);case 13:n++,t.next=2;break;case 16:return t.abrupt("return",e);case 17:case"end":return t.stop()}}),t,null,[[3,10]])}))),r.removeCoin=function(t){var e=Object(g.a)(r.state.favorites);r.setState({favorites:y.a.pull(e,t)})},r.setCurrentFavorite=function(t){r.setState({currentFavorite:t,historical:null},r.fetchHistorical),localStorage.setItem("cryptoDash",JSON.stringify(Object(p.a)(Object(p.a)({},JSON.parse(localStorage.getItem("cryptoDash"))),{},{currentFavorite:t})))},r.setFilteredCoins=function(t){return r.setState({filteredCoins:t})},r.setPage=function(t){return r.setState({page:t})},r.state=Object(p.a)(Object(p.a)({page:"dashboard",favorites:["BTC","ETH","XMR","DOGE"]},r.savedSettings()),{},{setPage:r.setPage,addCoin:r.addCoin,changeChartSelect:r.changeChartSelect,confirmFavorites:r.confirmFavorites,isInFavorites:r.isInFavorites,removeCoin:r.removeCoin,setCurrentFavorite:r.setCurrentFavorite,setFilteredCoins:r.setFilteredCoins,timeInterval:"months"}),r}return Object(u.a)(n,[{key:"savedSettings",value:function(){var t=JSON.parse(localStorage.getItem("cryptoDash"));return t?{favorites:t.favorites,currentFavorite:t.currentFavorite}:{page:"settings",firstVisit:!0}}},{key:"componentDidMount",value:function(){this.fetchCoins(),this.fetchPrices(),this.fetchHistorical()}},{key:"render",value:function(){return Object(r.jsx)(A.Provider,{value:this.state,children:this.props.children})}}]),n}(i.Component);function D(){var t=Object(d.a)(["\n\t\t\tdisplay: none;\n\t\t"]);return D=function(){return t},t}function B(){var t=Object(d.a)(["\n\t\t\ttext-shadow: 0px 0px 10px #03ff03, 0px 0px 25px #03ff03;\n\t\t"]);return B=function(){return t},t}function I(){var t=Object(d.a)(["\n\t","\n\t","\n\tcursor: pointer;\n"]);return I=function(){return t},t}function L(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tmargin-bottom: 40px;\n\tgrid-template-columns: 180px auto 100px 100px;\n"]);return L=function(){return t},t}function P(){var t=Object(d.a)(["\n\tfont-size: 1.5em;\n"]);return P=function(){return t},t}var H=b.b.div(P()),T=b.b.div(L()),V=b.b.div(I(),(function(t){return t.active&&Object(b.a)(B())}),(function(t){return t.hidden&&Object(b.a)(D())}));function E(t){var e=t.name;return Object(r.jsx)(A.Consumer,{children:function(t){var n,i=t.firstVisit,c=t.page,o=t.setPage;return Object(r.jsx)(V,{active:c===e,onClick:function(){return o(e)},hidden:i&&"dashboard"===e,children:(n=e,n.charAt(0).toUpperCase()+n.substr(1))})}})}var N=function(){return Object(r.jsxs)(T,{children:[Object(r.jsx)(H,{children:"CryptoDash"}),Object(r.jsx)("div",{}),Object(r.jsx)(E,{active:!0,name:"dashboard"}),Object(r.jsx)(E,{name:"settings"})]})},W=function(t){var e=t.children;return Object(r.jsx)(A.Consumer,{children:function(t){var n=t.coinList,i=t.prices,c=t.firstVisit;return n?c||i?Object(r.jsx)("div",{children:e}):Object(r.jsx)("div",{children:"Loading prices\u2026"}):Object(r.jsx)("div",{children:"Loading coins\u2026"})}})},G=function(t){var e=t.name,n=t.children;return Object(r.jsx)(A.Consumer,{children:function(t){return t.page!==e?null:Object(r.jsx)("div",{children:n})}})},M="#09f010";document.body.style.background="#e1eaee",document.body.style.color="#061a44";var U="background-color: ".concat("white"),z="background-color: ".concat("white"),J=("background-color: ".concat(M),"box-shadow: 0px 0px 5px 1px ".concat("#a9b6ff")),R="box-shadow: 0px 0px 4px 2px #5fff17",K="font-size: 1.0em";function X(){var t=Object(d.a)(["\n\tpointer-events: none;\n\topacity: 0.4;\n"]);return X=function(){return t},t}function $(){var t=Object(d.a)(["\n\t&:hover {\n\t\tcursor: pointer;\n\t\t",";\n\t}\n"]);return $=function(){return t},t}function q(){var t=Object(d.a)(["\n\t&:hover {\n\t\tcursor: pointer;\n\t\t",";\n\t}\n"]);return q=function(){return t},t}function Q(){var t=Object(d.a)(["\n\t",";\n\t",";\n\tpadding: 10px;\n"]);return Q=function(){return t},t}var Y=b.b.div(Q(),J,U),Z=Object(b.b)(Y)(q(),R),_=Object(b.b)(Z)($(),"box-shadow: 0px 0px 2px 2px #e41111"),tt=Object(b.b)(Y)(X());function et(){var t=Object(d.a)(["\n\t\t\theight: 200px;\n\t\t\tmargin: auto;\n\t\t\tdisplay: block;\n\t\t"]);return et=function(){return t},t}function nt(){var t=Object(d.a)(["\n\theight: 50px;\n\t","\n"]);return nt=function(){return t},t}var rt=b.b.img(nt(),(function(t){return t.spotlight&&Object(b.a)(et())})),it=function(t){var e=t.coin,n=t.spotlight;return Object(r.jsx)(rt,{spotlight:n,src:"http://cryptocompare.com/".concat(e.ImageUrl),alt:e.Symbol})};function ct(){var t=Object(d.a)(["\n\ttext-align: center;\n"]);return ct=function(){return t},t}var ot=b.b.h2(ct()),at=function(){return Object(r.jsx)(A.Consumer,{children:function(t){var e=t.currentFavorite,n=t.coinList;return Object(r.jsxs)(Y,{children:[Object(r.jsx)(ot,{children:n[e].CoinName}),Object(r.jsx)(it,{coin:n[e],spotlight:!0})]})}})},st=n(17),ut=n.n(st);function lt(){var t=Object(d.a)(["\n\t",";\n\t",";\n\tcolor: #1163c9;\n\tborder: 1px solid;\n\tmargin: 5px;\n\tfloat: right;\n"]);return lt=function(){return t},t}var ft=b.b.select(lt(),z,K),dt=function(t){return{title:{text:""},yAxis:{title:{text:"Price"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:t,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}},bt={colors:["#61d936","#552ccb","#1163c9","#04A1EE","#08C6E0","#146B9E","#F376C1","#1B2839"],chart:{backgroundColor:"white",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"white",plotBorderColor:"#CCCCCC",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"},title:{style:{color:"#C0C0C0"}}},credits:{enabled:!1},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}};ut.a.Highcharts.setOptions(bt);var jt=function(){return Object(r.jsx)(A.Consumer,{children:function(t){var e=t.historical,n=t.changeChartSelect;return Object(r.jsxs)(Y,{children:[Object(r.jsxs)(ft,{defaultValue:"months",onChange:function(t){return n(t.target.value)},children:[Object(r.jsx)("option",{value:"days",children:"Days"}),Object(r.jsx)("option",{value:"weeks",children:"Weeks"}),Object(r.jsx)("option",{value:"months",children:"Months"})]}),e?Object(r.jsx)(ut.a,{config:dt(e)}):Object(r.jsx)("div",{children:"Loading Historical Data"})]})}})};function vt(){var t=Object(d.a)(["\n\tjustify-self: right;\n\tdisplay: none;\n\t",":hover & {\n\t\tdisplay: block;\n\t\tcolor: red;\n\t}\n"]);return vt=function(){return t},t}function pt(){var t=Object(d.a)(["\n\tjustify-self: right;\n"]);return pt=function(){return t},t}function ht(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n"]);return ht=function(){return t},t}var xt=b.b.div(ht()),Ot=b.b.div(pt()),Ct=b.b.div(vt(),_),gt=function(t){var e=t.name,n=t.symbol,i=t.topSection;return Object(r.jsxs)(xt,{children:[Object(r.jsx)("div",{children:e}),i?Object(r.jsx)(Ct,{children:"X"}):Object(r.jsx)(Ot,{children:n})]})};function mt(){var t=Object(d.a)(["\n\t\t\t",";\n\t\t\tpointer-events: none;\n\t\t"]);return mt=function(){return t},t}function yt(){var t=Object(d.a)(["\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: repeat(3, 1fr);\n\t\t\tgrid-gap: 10px;\n\t\t\t","\n\t\t\tjustify-items: right;\n\t\t"]);return yt=function(){return t},t}function kt(){var t=Object(d.a)(["\n\t","\n\n\t","\n"]);return kt=function(){return t},t}function Ft(){var t=Object(d.a)(["\n\t\t\t\t\tcolor: green;\n\t\t\t  "]);return Ft=function(){return t},t}function St(){var t=Object(d.a)(["\n\t\t\t\t\tcolor: red;\n\t\t\t  "]);return St=function(){return t},t}function At(){var t=Object(d.a)(["\n\t","\n"]);return At=function(){return t},t}function wt(){var t=Object(d.a)(["\n\t","\n"]);return wt=function(){return t},t}function Dt(){var t=Object(d.a)(["\n\tjustify-self: right;\n"]);return Dt=function(){return t},t}function Bt(){var t=Object(d.a)(["\n\tjustify-self: left;\n"]);return Bt=function(){return t},t}var It=b.b.div(Bt()),Lt=b.b.div(Dt()),Pt=b.b.div(wt(),"font-size: 2em"),Ht=b.b.div(At(),(function(t){return t.red?Object(b.a)(St()):Object(b.a)(Ft())})),Tt=function(t){var e=t.data;return Object(r.jsx)(Lt,{children:Object(r.jsxs)(Ht,{red:e.CHANGEPCT24HOUR<0,children:[Vt(e.CHANGEPCT24HOUR),"%"]})})},Vt=function(t){return+(t+"").slice(0,7)},Et=Object(b.b)(Z)(kt(),(function(t){return t.compact&&Object(b.a)(yt(),"font-size: .75em")}),(function(t){return t.currentFavorite&&Object(b.a)(mt(),R)})),Nt=function(t){var e=t.sym,n=t.data,i=t.currentFavorite,c=t.setCurrentFavorite;return Object(r.jsxs)(Et,{currentFavorite:i,onClick:c,children:[Object(r.jsxs)(xt,{children:[Object(r.jsxs)("div",{children:[" ",e," "]}),Object(r.jsx)(Tt,{data:n})]}),Object(r.jsxs)(Pt,{children:["$",Vt(n.PRICE)]})]})},Wt=function(t){var e=t.sym,n=t.data,i=t.currentFavorite,c=t.setCurrentFavorite;return Object(r.jsxs)(Et,{compact:!0,currentFavorite:i,onClick:c,children:[Object(r.jsxs)(It,{children:[" ",e," "]}),Object(r.jsx)(Tt,{data:n}),Object(r.jsxs)("div",{children:["$",Vt(n.PRICE)]})]})},Gt=function(t){var e=t.price,n=t.index,i=Object.keys(e)[0],c=e[i].USD,o=n<5?Nt:Wt;return Object(r.jsx)(A.Consumer,{children:function(t){var e=t.currentFavorite,n=t.setCurrentFavorite;return Object(r.jsx)(o,{sym:i,data:c,currentFavorite:e===i,setCurrentFavorite:function(){return n(i)}})}})};function Mt(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(5, 1fr);\n\tgrid-gap: 15px;\n\tmargin-top: 40px;\n"]);return Mt=function(){return t},t}var Ut=b.b.div(Mt()),zt=function(){return Object(r.jsx)(A.Consumer,{children:function(t){var e=t.prices;return Object(r.jsx)(Ut,{children:e.map((function(t,e){return Object(r.jsx)(Gt,{price:t,index:e},"priceTile-".concat(e))}))})}})};function Jt(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tmargin-top: 20px;\n\tgrid-gap: 15px;\n\tgrid-template-columns: 1fr 3fr;\n"]);return Jt=function(){return t},t}var Rt=b.b.div(Jt()),Kt=function(){return Object(r.jsxs)(G,{name:"dashboard",children:[Object(r.jsx)(zt,{}),Object(r.jsxs)(Rt,{children:[Object(r.jsx)(at,{}),Object(r.jsx)(jt,{})]})]})};var Xt=function(){return Object(r.jsx)(A.Consumer,{children:function(t){return t.firstVisit?Object(r.jsx)("div",{children:"Welcome to CryptoDash, please select your favorite coins to begin."}):null}})};function $t(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tjustify-content: center;\n"]);return $t=function(){return t},t}function qt(){var t=Object(d.a)(["\n\tmargin: 20px;\n\tcolor: ",";\n\t",";\n\tpadding: 5px;\n\tcursor: pointer;\n\t&:hover {\n\t\t","\n\t}\n"]);return qt=function(){return t},t}var Qt=b.b.div(qt(),M,"font-size: 1.5em",R),Yt=b.b.div($t());var Zt=function(){return Object(r.jsx)(A.Consumer,{children:function(t){var e=t.confirmFavorites;return Object(r.jsx)(Yt,{children:Object(r.jsx)(Qt,{onClick:e,children:"Confirm Favorites"})})}})},_t=n(25),te=n.n(_t);function ee(){var t=Object(d.a)(["\n\t",";\n\t",";\n\tborder: 1px solid;\n\tcolor: #1163c9;\n\theight: 25px;\n\tplace-self: center left;\n"]);return ee=function(){return t},t}function ne(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 200px 1fr;\n"]);return ne=function(){return t},t}var re=b.b.div(ne()),ie=b.b.input(ee(),z,K),ce=y.a.debounce((function(t,e,n){var r=Object.keys(n),i=r.map((function(t){return n[t].CoinName})),c=r.concat(i),o=te.a.filter(t,c,{}).map((function(t){return t.string}));e(y.a.pickBy(n,(function(t,e){var n=t.coinName;return y.a.includes(o,e)||y.a.includes(o,n)})))}),750),oe=function(){return Object(r.jsx)(A.Consumer,{children:function(t){var e=t.setFilteredCoins,n=t.coinList;return Object(r.jsxs)(re,{children:[Object(r.jsx)("h2",{children:"Search all coins"}),Object(r.jsx)(ie,{onKeyUp:function(t){return function(t,e,n){var r=t.target.value;r?ce(r,e,n):e(null)}(t,e,n)}})]})}})};function ae(t,e,n,r){return t?function(){return r(e)}:function(){return n(e)}}var se=function(t){var e=t.coinKey,n=t.topSection;return Object(r.jsx)(A.Consumer,{children:function(t){var i=t.coinList,c=t.addCoin,o=t.removeCoin,a=t.isInFavorites,s=i[e],u=Z;return n?u=_:a(e)&&(u=tt),Object(r.jsxs)(u,{onClick:ae(n,e,c,o),children:[Object(r.jsx)(gt,{name:s.CoinName,symbol:s.Symbol,topSection:n}),Object(r.jsx)(it,{coin:s})]})}})};function ue(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n\tgrid-gap: 15px;\n\tmargin-top: 40px;\n"]);return ue=function(){return t},t}var le=b.b.div(ue()),fe=function(t,e,n,r){return n?e:function(t,e){return e&&Object.keys(e)||Object.keys(t).slice(0,100)}(t,r)},de=function(t){var e=t.topSection;return Object(r.jsx)(A.Consumer,{children:function(t){var n=t.coinList,i=t.favorites,c=t.filteredCoins;return Object(r.jsx)(le,{children:fe(n,i,e,c).map((function(t){return Object(r.jsx)(se,{coinKey:t,topSection:e},t)}))})}})};var be=function(){return Object(r.jsxs)(G,{name:"settings",children:[Object(r.jsx)(Xt,{}),Object(r.jsx)(de,{topSection:!0}),Object(r.jsx)(Zt,{}),Object(r.jsx)(oe,{}),Object(r.jsx)(de,{})]})},je=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(v,{children:Object(r.jsxs)(w,{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(W,{children:[Object(r.jsx)(be,{}),Object(r.jsx)(Kt,{})]})]})})}}]),n}(i.Component),ve=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),i(t),c(t),o(t)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(je,{})}),document.getElementById("root")),ve()}},[[41,1,2]]]);
//# sourceMappingURL=main.de14215b.chunk.js.map