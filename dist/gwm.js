!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";var t=new Date,k=t.getFullYear(),D=9<=t.getMonth()?t.getMonth()+1:"0"+(t.getMonth()+1),E=10<=t.getDate()?t.getDate():"0"+t.getDate(),M=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),r=function t(e){var n=e.txt,i=void 0===n?""+k+D+E+" 内部资料 请勿外传":n,o=e.x,r=void 0===o?0:o,a=e.y,h=void 0===a?50:a,s=e.font,c=void 0===s?"microsoft yahe":s,d=e.color,u=void 0===d?"#000":d,l=e.fontSize,f=void 0===l?12:l,v=e.alpha,m=void 0===v?.1:v,w=e.width,g=void 0===w?158:w,p=e.height,b=void 0===p?100:p,y=e.angle,x=void 0===y?-15:y;M(this,t),this.txt=i,this.width=g,this.height=b,this.x=r,this.y=h,this.font=c,this.fontSize=f,this.color=u,this.alpha=m,this.angle=x},a=function(){function i(t){M(this,i);var e=(this.watermark=t).width,n=t.height;this.canvas=document.createElement("canvas"),this.canvas.setAttribute("width",e),this.canvas.setAttribute("height",n)}return n(i,[{key:"render",value:function(){var t=this.watermark,e=t.txt,n=t.x,i=t.y,o=t.width,r=t.height,a=t.font,h=t.color,s=t.fontSize,c=t.alpha,d=t.angle,u=this.canvas.getContext("2d");return u.clearRect(0,0,o,r),u.textBaseline="top",u.textAlign="left",u.fillStyle=h,u.globalAlpha=c,u.font=s+"px "+a,u.translate(n,i),u.rotate(Math.PI/180*d),u.translate(-n,-i-s),u.fillText(e,n,i+s),this.canvas.toDataURL()}}]),i}();var f=function(o,r){return Object.keys(r).forEach(function(t){return e=o,i=r[n=t],void(e.style[n]=i);var e,n,i})},h=function(){function e(t){M(this,e),this.watermark=t}return n(e,[{key:"_createItem",value:function(){var t=this.watermark,e=t.txt,n=t.x,i=t.y,o=t.font,r=t.color,a=t.fontSize,h=t.alpha,s=t.angle,c=t.width,d=t.height,u=document.createElement("div");f(u,{position:"relative",width:c,height:d,flex:"0 0 "+c+"px",overflow:"hidden",pointerEvents:"none"});var l=document.createElement("span");return l.innerHTML=e,f(l,{position:"absolute",top:i+"px",left:n+"px",fontFamily:o,fontSize:a+"px",color:r,lineHeight:1.5,opacity:h,fontWeight:400,transform:"rotate("+s+"deg)",transformOrigin:"0 0",userSelect:"none",whiteSpace:"nowrap",overflow:"hidden"}),u.appendChild(l),u}},{key:"render",value:function(){var t=this.watermark,e=t.width,n=t.height,i=document.documentElement||document.body,o=i.clientWidth,r=i.clientHeight,a=Math.ceil(o/e),h=Math.ceil(r/n),s=document.createElement("div");f(s,{display:"flex",flexWrap:"wrap",width:e*a+"px",height:n*h+"px"});for(var c=0;c<a*h;c++)s.appendChild(this._createItem());return s}}]),e}(),s=function(){function e(t){M(this,e),this.watermark=t}return n(e,[{key:"render",value:function(){var t=this.watermark,e=t.txt,n=t.x,i=t.y,o=t.width,r=t.height,a=t.color,h=t.font,s=t.fontSize,c='<svg xmlns="http://www.w3.org/2000/svg" width="'+o+'px" height="'+r+'px">\n                <text x="'+n+'px" y="'+i+'px" dy="'+s+'px"\n                    text-anchor="start"\n                    stroke="'+a+'"\n                    stroke-opacity="'+t.alpha+'"\n                    fill="none"\n                    transform="rotate('+t.angle+","+n+" "+i+')"\n                    font-weight="100"\n                    font-size="'+s+'"\n                    font-family="'+h+'"\n                    >\n                    '+e+"\n                </text>\n            </svg>";return"data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(c)))}}]),e}(),c="__gwm_"+ +new Date,o=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,e=function(t){return t.disconnect()},d="canvas",u="element",i=function(){function t(){M(this,t)}return n(t,[{key:"creation",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.opts=t,this.cancel();var e=t.mode,n=t.watch;this.gwmDom=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.gwmDom?t.gwmDom:document.getElementById(c);e&&document.body.removeChild(e);var n=document.createElement("div");return f(n,{position:"fixed",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",zIndex:-100,backgroundRepeat:"no-repeat"}),n.id=c,n}(this);var i=function(t,e){var n=[d,"svg",u],i=null;switch(t&&(t=t.toLowerCase(),t=0<=n.indexOf(t)?t:""),t||(t="canvas"),t){case d:i=new a(e);break;case"svg":i=new s(e);break;default:i=new h(e)}return i}(e,new r(t)).render();e===u?this.gwmDom.appendChild(i):this.gwmDom.style.background='url("'+i+'")';var o=document.body.firstChild;o?document.body.insertBefore(this.gwmDom,o):document.body.appendChild(this.gwmDom),!1!==n&&(this.observer=this.observing())}},{key:"observing",value:function(){var t=this;return function(e,n){if(!o)return!1;var t=new o(function(t){return t.forEach(function(t){return t.removedNodes.forEach(function(t){return t===e&&n()})})});t.observe(document.body,{childList:!0});var i=new o(n);return i.observe(e,{characterData:!0,attributes:!0,childList:!0,subtree:!0}),{bodyObserver:t,observer:i}}(this.gwmDom,function(){return t.creation(t.opts)})}},{key:"cancel",value:function(){this.observer&&(e(this.observer.bodyObserver),e(this.observer.observer))}}]),t}();window.gwm=new i});
