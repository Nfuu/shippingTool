(this["webpackJsonpmap-scratch"]=this["webpackJsonpmap-scratch"]||[]).push([[0],{268:function(t,e,r){},269:function(t,e,r){},272:function(t,e,r){},274:function(t,e,r){},275:function(t,e,r){},414:function(t,e,r){"use strict";r.r(e);var c=r(0),n=r.n(c),a=r(48),o=r.n(a),l=(r(268),r(4)),i=(r(269),r(421)),s=r(422),j=r(439),u=r(78),d=r.n(u),b=r(25),h=(r(271),r(272),r(3)),f=function(t){var e=Object(c.useState)([0,0]),r=Object(l.a)(e,2),n=r[0],a=r[1],o=function(){var t=Object(c.useState)(null),e=Object(l.a)(t,2),r=e[0],n=e[1];return Object(c.useEffect)((function(){Object(b.a)("https://gist.githubusercontent.com/Nfuu/bd1bf080322618e46ad6a5552d646105/raw/ports.csv").then(n)}),[]),r}(),u=function(){var t=Object(c.useState)(null),e=Object(l.a)(t,2),r=e[0],n=e[1];return Object(c.useEffect)((function(){Object(b.a)("https://gist.githubusercontent.com/Nfuu/43b07a35f49cb3b74c1a93ed2c809961/raw/flows.csv").then(n)}),[]),r}(),f=function(){var t=Object(c.useState)(null),e=Object(l.a)(t,2),r=e[0],n=e[1];return Object(c.useEffect)((function(){Object(b.a)("https://gist.githubusercontent.com/Nfuu/56d12817f6462bf7cd782d423b86ac11/raw/country_nodes.csv").then(n)}),[]),r}(),x=function(){var t=Object(c.useState)(null),e=Object(l.a)(t,2),r=e[0],n=e[1];return Object(c.useEffect)((function(){Object(b.a)("https://gist.githubusercontent.com/Nfuu/4e4596e8863543d99182de35c7855660/raw/country_flows.csv").then(n)}),[]),r}();if(!o||!u||!f||!x)return Object(h.jsx)("pre",{children:"Loading..."});var O=o,m=u,p=f,g=x;"Ports"!==t.levelSelected&&(O=p,m=g);var y=function(){var e=Object(i.a)();return b.c(e.getPanes().overlayPane).selectAll("*").remove(),d.a.svg({clickable:!0}).addTo(e),Object(c.useEffect)((function(){var r=m.filter((function(e){return+e.Year===t.yearSelected&&e.Commodity===t.commoditySelected})),c=O.filter((function(e){return+e.Year===t.yearSelected&&e.Commodity===t.commoditySelected}));t.setPortData(O),t.setFlowData(m);var o=b.c(e.getPanes().overlayPane),l=o.select("svg").attr("pointer-events","auto"),i=l.append("g"),s=l.append("g"),j=o.append("div").attr("id","portTooltip").style("left",n[0]+30+"px").style("top",n[1]+30+"px");var u=s.selectAll("circle").attr("class","Dots").data(c).join("circle").attr("id","Ports").attr("fill",(function(t){return+t.flow<0?"#38B2AC":"tomato"})).attr("stroke","black").attr("fill-opacity",.4).attr("cx",(function(t){return e.latLngToLayerPoint([t.lat,t.lon]).x})).attr("cy",(function(t){return e.latLngToLayerPoint([t.lat,t.lon]).y})).attr("r",(function(e){var r=+e.flow>0?e.flow:-e.flow;return"Ports"===t.levelSelected?+r:+r/3})).on("mouseover",(function(c,n){b.c(this).attr("fill-opacity",1).style("cursor","pointer");var a=+n.flow,o=a>0?a.toFixed(2):-a.toFixed(2),l=+n.flow>0?"Export":"Import";j.html('<p style="font-size: 1.5em"><b>'.concat(n.Port,"</b></p>\n            <p>").concat(l,": ").concat(o," megatonnes</p>\n            <p><b>Click</b> to see more details.</p>")).style("opacity",1);var s=n.Port;if(n.flow>0)var u=r.filter((function(t){return t.source===s}));else u=r.filter((function(t){return t.target===s}));var d=i.selectAll("path").data(u);d.enter().append("path").attr("class","links").attr("id",(function(t){return t.flow>0?t.target:t.source})).attr("d",(function(t){var r=O.filter((function(e){return e.Port===t.source})),c=O.filter((function(e){return e.Port===t.target}));return function(t,r){var c=e.latLngToLayerPoint(t),n=e.latLngToLayerPoint(r),a=c.x-n.x,o=c.y-n.y,l=.4,i=.1;if(o<0)var s=[l*a,i*o,l*a,i*o];else s=[i*a,l*o,i*a,l*o];return"M"+c.x+","+c.y+"C"+(c.x-s[0])+","+(c.y-s[1])+" "+(n.x+s[2])+","+(n.y+s[3])+" "+n.x+","+n.y}([r[0].lat,r[0].lon],[c[0].lat,c[0].lon])})).style("fill","none").style("stroke",(function(t){return"Export"===l?"tomato":"#38B2AC"})).style("stroke-width",(function(e){var r=+e.flow>0?e.flow:-e.flow;return"Ports"===t.levelSelected?r+"px":r/2+"px"})).style("opacity",.6),d.exit().remove()})).on("mouseleave",(function(t,e){b.c(this).transition().duration("150").attr("fill-opacity",.4).style("cursor","default"),j.style("opacity",0).style("left","0px").style("top","0px"),i.selectAll("path").remove()})).on("click",(function(e,r){a([Object(b.b)(e)[0],Object(b.b)(e)[1]]),t.onSelectPort(r)})).on("mousemove",(function(t,e){j.style("left",Object(b.b)(t)[0]+30+"px").style("top",Object(b.b)(t)[1]+30+"px")}));e.on("zoomend",(function(){return u.attr("cx",(function(t){return e.latLngToLayerPoint([t.lat,t.lon]).x})).attr("cy",(function(t){return e.latLngToLayerPoint([t.lat,t.lon]).y}))}))}),[e]),null};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(s.a,{id:"mainMap",style:{height:"100%"},center:[5,18],zoom:2,scrollWheelZoom:!0,children:[Object(h.jsx)(j.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"}),Object(h.jsx)(y,{})]})})},x=(r(274),r(275),r(437)),O=r(423),m=r(434),p=r(438),g=r(444),y=r(425),w=r(426),v=r(231),S=r(232),P=r(238),C=r(229),F=r(104),M=r(424),L=function(t){var e=t.flowData.filter((function(e){return+e.Year===t.year&&e.Commodity===t.commodity&&e.source===t.sourcePort}));return e.sort((function(t,e){return parseFloat(e.flow)-parseFloat(t.flow)})),console.log(e.slice(0,10)),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(O.a,{height:"50%",width:"100%",children:[Object(h.jsx)(M.a,{fontSize:"sm",color:"gray.500",textAlign:"center",children:"Biggest export partners (Trade volume in Mt)"}),Object(h.jsx)(y.a,{width:"100%",height:"90%",children:Object(h.jsxs)(w.a,{data:e.slice(0,10),layout:"vertical",children:[Object(h.jsx)(v.a,{type:"number"}),Object(h.jsx)(S.a,{type:"category",hide:!0}),Object(h.jsx)(P.a,{dataKey:"flow",fill:"tomato",children:Object(h.jsx)(C.a,{dataKey:"target",position:"insideLeft",style:{fontSize:"0.8em",fill:"white"}})}),Object(h.jsx)(F.a,{})]})})]})})},T=function(t){var e=t.flowData;if(!e)return null;var r=e.filter((function(e){return+e.Year===t.year&&e.Commodity===t.commodity&&e.target===t.targetPort}));return r.sort((function(t,e){return parseFloat(e.flow)-parseFloat(t.flow)})),console.log(r.slice(0,10)),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(O.a,{height:"50%",width:"100%",children:[Object(h.jsx)(M.a,{fontSize:"sm",color:"gray.500",textAlign:"center",children:"Biggest import partners (Trade volume in Mt)"}),Object(h.jsx)(y.a,{width:"100%",height:"90%",children:Object(h.jsxs)(w.a,{data:r.slice(0,10),layout:"vertical",children:[Object(h.jsx)(v.a,{type:"number"}),Object(h.jsx)(S.a,{type:"category",hide:!0}),Object(h.jsx)(P.a,{dataKey:"flow",fill:"#38B2AC",children:Object(h.jsx)(C.a,{dataKey:"source",position:"insideLeft",style:{fontSize:"0.8em",fill:"white"}})}),Object(h.jsx)(F.a,{})]})})]})})},k=function(t){return t*(Math.PI/180)},D=function(t){var e=function(){var t=Object(c.useState)(null),e=Object(l.a)(t,2),r=e[0],n=e[1];return Object(c.useEffect)((function(){Object(b.a)("https://gist.githubusercontent.com/Nfuu/3d9519a9c80c0149c2accf244a88c4d8/raw/mines.csv").then(n)}),[]),r}();if(!e)return Object(h.jsx)("pre",{children:"Loading..."});var r=t.sourcePort;if(e.forEach((function(t){t.Distance=function(t,e,r,c){var n=k(r-t),a=k(c-e),o=Math.sin(n/2)*Math.sin(n/2)+Math.cos(k(t))*Math.cos(k(r))*Math.sin(a/2)*Math.sin(a/2);return 2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))*6371}(r.lat,r.lon,t.Latitude,t.Longitude)})),e.sort((function(t,e){return parseFloat(t.Distance)-parseFloat(e.Distance)})),"Thermal"===t.commodity)var n=e.filter((function(t){return"TRUE"===t.Thermal}));else n="Metallurgical"===t.commodity?e.filter((function(t){return"TRUE"===t.Metallurgical})):e;var a=n.slice(0,10);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(O.a,{height:"50%",width:"100%",children:[Object(h.jsx)(M.a,{fontSize:"sm",color:"gray.500",textAlign:"center",children:"Closest mines (Output in Mt, sorted by distance)"}),Object(h.jsx)(y.a,{width:"100%",height:"90%",children:Object(h.jsxs)(w.a,{data:a,layout:"vertical",children:[Object(h.jsx)(v.a,{type:"number"}),Object(h.jsx)(S.a,{type:"category",hide:!0}),Object(h.jsx)(P.a,{dataKey:"Output",fill:"tomato",children:Object(h.jsx)(C.a,{dataKey:"Output",position:"insideLeft",style:{fontSize:"0.8em",fill:"white"}})}),Object(h.jsx)(F.a,{})]})})]})})},E=function(){return null},A=function(t){var e=t.clickedPort,r=e.Port;if(+e.flow>0)var c="Export";else c="Import";return"Export"===c?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(g.b,{height:"100%",children:[Object(h.jsx)(D,{sourcePort:t.clickedPort,commodity:t.commoditySelected}),Object(h.jsx)(L,{sourcePort:r,flowData:t.flowData,portData:t.portData,year:t.yearSelected,level:t.levelSelected,commodity:t.commoditySelected})]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(g.b,{height:"100%",children:[Object(h.jsx)(T,{targetPort:r,flowData:t.flowData,portData:t.portData,year:t.yearSelected,level:t.levelSelected,commodity:t.commoditySelected}),Object(h.jsx)(E,{})]})})},I=r(440),z=function(t){var e=Object(c.useState)(2020),r=Object(l.a)(e,2),n=r[0],a=r[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(g.b,{width:"100%",spacing:2,children:[Object(h.jsx)(M.a,{fontSize:"3xl",color:"gray.600",children:n}),Object(h.jsxs)(I.a,{width:"80%","aria-label":"yearSlider",defaultValue:2020,min:2017,max:2020,step:1,onChangeEnd:function(e){return function(e){a(e),t.onSelectYear(n)}(e)},children:[Object(h.jsx)(I.d,{bg:"teal.200",children:Object(h.jsx)(I.b,{bg:"teal.400"})}),Object(h.jsx)(I.c,{boxSize:4,bgColor:"gray.200"})]})]})})},R=r(239),B=r(442),K=function(t){var e=Object(c.useState)("Thermal"),r=Object(l.a)(e,2),n=r[0],a=r[1];return Object(h.jsx)(R.a,{onChange:function(e){a(e),t.onSelectCommodity(e)},value:n,children:Object(h.jsxs)(g.a,{direction:"row",color:"gray.600",children:[Object(h.jsx)(B.a,{value:"Total",children:"Total"}),Object(h.jsx)(B.a,{value:"Thermal",children:"Thermal"}),Object(h.jsx)(B.a,{value:"Metallurgical",children:"Metallurgical"})]})})},N=r(445),Y=function(t){var e=+t.mtAmount,r=Math.abs(e.toFixed(2));return Object(h.jsx)(m.a,{children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(N.b,{color:"gray.600",children:"Exports/Imports in megatonnes:"}),Object(h.jsx)(N.c,{children:"".concat(r," Mt")})]})})},W=function(t){var e=Math.abs((2.86*+t.mtAmount).toFixed(2));return Object(h.jsx)(m.a,{children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(N.b,{color:"gray.600",children:"CO2 emissions if coal burned:"}),Object(h.jsx)(N.c,{children:"".concat(e," Mt CO2e")})]})})},_=function(t){var e=Object(c.useState)("Ports"),r=Object(l.a)(e,2),n=r[0],a=r[1];return Object(h.jsx)(R.a,{onChange:function(e){a(e),t.onSelectLevel(e)},value:n,children:Object(h.jsxs)(g.a,{direction:"row",color:"gray.600",children:[Object(h.jsx)(B.a,{value:"Countries",children:"Country"}),Object(h.jsx)(B.a,{value:"Ports",children:"Ports"})]})})},q=r(435),J=r(436),U=function(t){var e=t.clickedPort,r=e.Port;if(+e.flow>0)var c="Export",n="tomato";else c="Import",n="#38B2AC";return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(q.a,{display:"flex",alignItems:"center",children:Object(h.jsxs)(g.b,{children:[Object(h.jsx)(M.a,{fontSize:"2xl",color:"gray.600",textAlign:"center",children:r}),Object(h.jsx)(J.a,{borderRadius:"full",px:"2",bgColor:n,color:"white",children:c})]})})})};var H=function(){var t=Object(c.useState)({Port:"Select a port or country",flow:0}),e=Object(l.a)(t,2),r=e[0],n=e[1],a=Object(c.useState)(2020),o=Object(l.a)(a,2),i=o[0],s=o[1],j=Object(c.useState)("Thermal"),u=Object(l.a)(j,2),d=u[0],b=u[1],y=Object(c.useState)("Ports"),w=Object(l.a)(y,2),v=w[0],S=w[1],P=Object(c.useState)(null),C=Object(l.a)(P,2),F=C[0],M=C[1],L=Object(c.useState)(null),T=Object(l.a)(L,2),k=T[0],D=T[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"outerContainer",children:Object(h.jsxs)(x.a,{maxHeight:"900px",maxWidth:"1600px",w:"100vw",h:"100vh",templateRows:"repeat(20, 1fr)",templateColumns:"repeat(5, 1fr)",gap:"4",children:[Object(h.jsx)(x.b,{colStart:1,colEnd:1,rowStart:1,rowEnd:4,children:Object(h.jsx)(O.a,{width:"100%",height:"100%",bg:"white",borderRadius:"lg",borderWidth:"5pt",borderColor:r.flow>0?"tomato":"#38B2AC",color:"black",shadow:"2xl",alignItems:"center",justifyContent:"center",display:"flex",children:Object(h.jsx)(U,{clickedPort:r})})}),Object(h.jsx)(x.b,{colStart:1,colEnd:1,rowStart:4,rowEnd:21,children:Object(h.jsx)(O.a,{width:"100%",height:"100%",bg:"white",borderRadius:"lg",color:"black",shadow:"2xl",alignItems:"center",justifyContent:"center",padding:"10",display:"flex",children:Object(h.jsx)(A,{clickedPort:r,portData:F,flowData:k,yearSelected:i,commoditySelected:d,levelSelected:v})})}),Object(h.jsx)(x.b,{rowSpan:3,colSpan:1,children:Object(h.jsx)(O.a,{width:"100%",height:"100%",bg:"white",borderRadius:"lg",color:"black",shadow:"2xl",alignItems:"center",justifyContent:"center",display:"flex",children:Object(h.jsx)(Y,{mtAmount:r.flow})})}),Object(h.jsx)(x.b,{rowSpan:3,colSpan:1,children:Object(h.jsx)(O.a,{width:"100%",height:"100%",bg:"white",borderRadius:"lg",color:"black",shadow:"2xl",alignItems:"center",justifyContent:"center",display:"flex",children:Object(h.jsx)(W,{mtAmount:r.flow})})}),Object(h.jsx)(x.b,{rowSpan:3,colSpan:2,children:Object(h.jsxs)(O.a,{width:"100%",height:"100%",bg:"white",borderRadius:"lg",color:"black",shadow:"2xl",alignItems:"center",overflow:"hidden",display:"flex",children:[Object(h.jsx)(O.a,{width:"50%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex",children:Object(h.jsx)(z,{onSelectYear:function(t){return s(t)}})}),Object(h.jsx)(m.a,{height:"50px",children:Object(h.jsx)(p.a,{orientation:"vertical"})}),Object(h.jsx)(O.a,{width:"50%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex",children:Object(h.jsxs)(g.b,{spacing:2,children:[Object(h.jsx)(K,{onSelectCommodity:function(t){return b(t)}}),Object(h.jsx)(p.a,{orientation:"horizontal"}),Object(h.jsx)(_,{onSelectLevel:function(t){return S(t)}})]})})]})}),Object(h.jsx)(x.b,{rowSpan:17,colSpan:4,children:Object(h.jsx)(O.a,{width:"100%",height:"100%",bg:"white",borderRadius:"2xl",color:"black",shadow:"2xl",alignItems:"center",overflow:"hidden",children:Object(h.jsx)(f,{onSelectPort:function(t){return n(t)},yearSelected:i,commoditySelected:d,levelSelected:v,setPortData:function(t){return M(t)},setFlowData:function(t){return D(t)}})})})]})})})},V=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,447)).then((function(e){var r=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;r(t),c(t),n(t),a(t),o(t)}))},Z=r(443);o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(Z.a,{children:Object(h.jsx)(H,{})})}),document.getElementById("root")),V()}},[[414,1,2]]]);
//# sourceMappingURL=main.2dbe4dd4.chunk.js.map