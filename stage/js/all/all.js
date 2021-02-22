/*!
 * fullPage 3.0.9
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(zt,jt){"use strict";var Pt="fullpage-wrapper",Dt="."+Pt,Vt="fp-responsive",Wt="fp-notransition",Yt="fp-destroyed",Ft="fp-enabled",Ut="fp-viewing",Xt="active",Kt="."+Xt,_t="fp-completely",$t="fp-section",qt="."+$t,Qt=qt+Kt,Gt="fp-tableCell",Jt="."+Gt,Zt="fp-auto-height",en="fp-normal-scroll",tn="fp-nav",nn="#"+tn,on="fp-tooltip",rn="fp-slide",ln="."+rn,an=ln+Kt,sn="fp-slides",cn="."+sn,un="fp-slidesContainer",fn="."+un,dn="fp-table",vn="fp-slidesNav",pn="."+vn,hn=pn+" a",e="fp-controlArrow",gn="."+e,mn="fp-prev",Sn=gn+".fp-prev",wn=gn+".fp-next";function bn(e,t){zt.console&&zt.console[e]&&zt.console[e]("fullPage: "+t)}function yn(e,t){return(t=1<arguments.length?t:jt)?t.querySelectorAll(e):null}function En(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=En(e[r],o[r]))}return e}function Ln(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function xn(){return"innerHeight"in zt?zt.innerHeight:jt.documentElement.offsetHeight}function An(){return zt.innerWidth}function Tn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!qn(o,t);)o=o[n];return o}function kn(e,t){return n(e,t,"previousElementSibling")}function On(e,t){return n(e,t,"nextElementSibling")}function Mn(e){return e.previousElementSibling}function Cn(e){return e.nextElementSibling}function Hn(e){return e[e.length-1]}function In(e,t){e=i(e)?e[0]:e;for(var n=null!=t?yn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function Bn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function Rn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Nn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function zn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function jn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||jt.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function Pn(e,t){o(e,t,!0)}function Dn(e,t){for("string"==typeof t&&(t=Gn(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function Vn(e){for(var t=jt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function Wn(e,t){return e&&1===e.nodeType?qn(e,t)?e:Wn(e.parentNode,t):null}function Yn(e,t){r(e,e.nextSibling,t)}function Fn(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=Gn(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Un(){var e=jt.documentElement;return(zt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Xn(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function Kn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function _n(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function $n(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof zt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=jt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function qn(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Qn(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Gn(e){var t=jt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Jn(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)(qn(o,t)||null==t)&&r.push(o),o=o[n];return r}function Zn(e,t){return a(e,t,"nextElementSibling")}function eo(e,t){return a(e,t,"previousElementSibling")}return zt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||zt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),zt.fp_utils={$:yn,deepExtend:En,hasClass:Ln,getWindowHeight:xn,css:Tn,until:n,prevUntil:kn,nextUntil:On,prev:Mn,next:Cn,last:Hn,index:In,getList:l,hide:Bn,show:Rn,isArrayOrList:i,addClass:Nn,removeClass:zn,appendTo:jn,wrap:o,wrapAll:Pn,wrapInner:Dn,unwrap:Vn,closest:Wn,after:Yn,before:Fn,insertBefore:r,getScrollTop:Un,siblings:Xn,preventDefault:Kn,isFunction:_n,trigger:$n,matches:qn,toggle:Qn,createElementFromHTML:Gn,remove:Jn,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:Zn,prevAll:eo,showError:bn},function(e,E){var n=E&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(E.licenseKey)||-1<jt.domain.indexOf("alvarotrigo.com"),r=yn("html, body"),u=yn("html")[0],L=yn("body")[0];if(!Ln(u,Ft)){var h={};E=En({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:zt.fp_scrolloverflow?zt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?yn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},E);var x,i,c,f,a=!1,o=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),l="ontouchstart"in zt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,d="string"==typeof e?yn(e)[0]:e,A=xn(),s=An(),T=!1,t=!0,k=!0,v=[],p={m:{up:!0,down:!0,left:!0,right:!0}};p.k=En({},p.m);var g,m,S,w,b,O,M,y,C,H=zt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},I={touchmove:"ontouchmove"in zt?"touchmove":H.move,touchstart:"ontouchstart"in zt?"touchstart":H.down},B='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',R=!1;try{var N=Object.defineProperty({},"passive",{get:function(){R=!0}});zt.addEventListener("testPassive",null,N),zt.removeEventListener("testPassive",null,N)}catch(e){}var z,j,P,D=En({},E),V=!1,W=!0,Y=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];Ct(),zt.fp_easings=En(zt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),d&&(h.version="3.0.8",h.setAutoScrolling=Z,h.setRecordHistory=ee,h.setScrollingSpeed=te,h.setFitToSection=ne,h.setLockAnchors=function(e){E.lockAnchors=e},h.setMouseWheelScrolling=oe,h.setAllowScrolling=re,h.setKeyboardScrolling=le,h.moveSectionUp=ae,h.moveSectionDown=se,h.silentMoveTo=ce,h.moveTo=ue,h.moveSlideRight=fe,h.moveSlideLeft=de,h.fitToSection=xe,h.reBuild=ve,h.setResponsive=he,h.getFullpageData=function(){return E},h.destroy=function(e){Z(!1,"internal"),re(!0),ie(!1),le(!1),Nn(d,Yt),[b,w,m,O,M,C,S,P].forEach(function(e){clearTimeout(e)}),zt.removeEventListener("scroll",Le),zt.removeEventListener("hashchange",qe),zt.removeEventListener("resize",at),jt.removeEventListener("keydown",Ge),jt.removeEventListener("keyup",Je),["click","touchstart"].forEach(function(e){jt.removeEventListener(e,ge)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){jt.removeEventListener(e,Se,!0)}),e&&(Tt(0),yn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",d).forEach(function(e){Ve(e,"src")}),yn("img[data-srcset]").forEach(function(e){Ve(e,"srcset")}),Jn(yn(nn+", "+pn+", "+gn)),Tn(yn(qt),{height:"","background-color":"",padding:""}),Tn(yn(ln),{width:""}),Tn(d,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Tn(r,{overflow:"",height:""}),zn(u,Ft),zn(L,Vt),L.className.split(/\s+/).forEach(function(e){0===e.indexOf(Ut)&&zn(L,e)}),yn(qt+", "+ln).forEach(function(e){E.scrollOverflowHandler&&E.scrollOverflow&&E.scrollOverflowHandler.remove(e),zn(e,dn+" "+Xt+" "+_t);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Ln(e,$t)&&!V&&e.removeAttribute("data-anchor")}),ft(d),[Jt,fn,cn].forEach(function(e){yn(e,d).forEach(function(e){Vn(e)})}),Tn(d,{"-webkit-transition":"none",transition:"none"}),zt.scrollTo(0,0),[$t,rn,un].forEach(function(e){zn(yn("."+e),e)}))},h.getActiveSection=function(){return new Rt(yn(Qt)[0])},h.getActiveSlide=function(){return je(yn(an,yn(Qt)[0])[0])},h.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<yn(E.sectionSelector,d).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<yn(E.sectionSelector,d).length;t++)e.push(0);return e}(),options:E,setAutoScrolling:Z},h.shared={afterRenderActions:Ee,isNormalScrollElement:!1},zt.fullpage_api=h,E.$&&Object.keys(h).forEach(function(e){E.$.fn.fullpage[e]=h[e]}),E.css3&&(E.css3=function(){var e,t=jt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",jt.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=zt.getComputedStyle(t).getPropertyValue(n[o]));return jt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),E.scrollBar=E.scrollBar||E.hybrid,function(){if(!E.anchors.length){var e="[data-anchor]",t=yn(E.sectionSelector.split(",").join(e+",")+e,d);t.length&&t.length===yn(qt).length&&(V=!0,t.forEach(function(e){E.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!E.navigationTooltips.length){var n="[data-tooltip]",o=yn(E.sectionSelector.split(",").join(n+",")+n,d);o.length&&o.forEach(function(e){E.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Tn(d,{height:"100%",position:"relative"}),Nn(d,Pt),Nn(u,Ft),A=xn(),zn(d,Yt),Nn(yn(E.sectionSelector,d),$t),Nn(yn(E.slideSelector,d),rn);for(var e=yn(qt),t=0;t<e.length;t++){var n=t,o=e[t],r=yn(ln,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),s=o,(c=n)||null!=yn(Qt)[0]||Nn(s,Xt),f=yn(Qt)[0],Tn(s,{height:A+"px"}),E.paddingTop&&Tn(s,{"padding-top":E.paddingTop}),E.paddingBottom&&Tn(s,{"padding-bottom":E.paddingBottom}),void 0!==E.sectionsColor[c]&&Tn(s,{"background-color":E.sectionsColor[c]}),void 0!==E.anchors[c]&&s.setAttribute("data-anchor",E.anchors[c]),l=o,a=n,void 0!==E.anchors[a]&&Ln(l,Xt)&&dt(E.anchors[a],a),E.menu&&E.css3&&null!=Wn(yn(E.menu)[0],Dt)&&yn(E.menu).forEach(function(e){L.appendChild(e)}),0<i?be(o,r,i):E.verticalCentered&&pt(o)}var l,a,s,c;E.fixedElements&&E.css3&&yn(E.fixedElements).forEach(function(e){L.appendChild(e)}),E.navigation&&function(){var e=jt.createElement("div");e.setAttribute("id",tn);var t=jt.createElement("ul");e.appendChild(t),jn(e,L);var n=yn(nn)[0];Nn(n,"fp-"+E.navigationPosition),E.showActiveTooltip&&Nn(n,"fp-show-active");for(var o="",r=0;r<yn(qt).length;r++){var i="";E.anchors.length&&(i=E.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ye(r,"Section")+"</span><span></span></a>";var l=E.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+on+" fp-"+E.navigationPosition+'">'+l+"</div>"),o+="</li>"}yn("ul",n)[0].innerHTML=o,Nn(yn("a",yn("li",yn(nn)[0])[In(yn(Qt)[0],qt)]),Xt)}(),yn('iframe[src*="youtube.com/embed/"]',d).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),E.scrollOverflow&&(g=E.scrollOverflowHandler.init(E))}(),re(!0),ie(!0),Z(E.autoScrolling,"internal"),ct(),Lt(),"complete"===jt.readyState&&$e(),zt.addEventListener("load",$e),E.scrollOverflow||Ee(),function(){for(var e=1;e<4;e++)C=setTimeout(we,350*e)}(),zt.addEventListener("scroll",Le),zt.addEventListener("hashchange",qe),zt.addEventListener("focus",nt),zt.addEventListener("blur",ot),zt.addEventListener("resize",at),jt.addEventListener("keydown",Ge),jt.addEventListener("keyup",Je),["click","touchstart"].forEach(function(e){jt.addEventListener(e,ge)}),E.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){me(e,!1)}),["mouseleave","touchend"].forEach(function(e){me(e,!0)})));var F=!1,U=0,X=0,K=0,_=0,$=0,q=(new Date).getTime(),Q=0,G=0,J=A;return h}function Z(e,t){e||Tt(0),Mt("autoScrolling",e,t);var n=yn(Qt)[0];if(E.autoScrolling&&!E.scrollBar)Tn(r,{overflow:"hidden",height:"100%"}),ee(D.recordHistory,"internal"),Tn(d,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Tt(n.offsetTop);else if(Tn(r,{overflow:"visible",height:"initial"}),ee(!!E.autoScrolling&&D.recordHistory,"internal"),Tn(d,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Pe(n.offsetTop);o.element.scrollTo(0,o.options)}}function ee(e,t){Mt("recordHistory",e,t)}function te(e,t){Mt("scrollingSpeed",e,t)}function ne(e,t){Mt("fitToSection",e,t)}function oe(e){e?(function(){var e,t="";zt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in jt.createElement("div")?"wheel":void 0!==jt.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!R&&{passive:!1};"DOMMouseScroll"==n?jt[e](t+"MozMousePixelScroll",He,o):jt[e](t+n,He,o)}(),d.addEventListener("mousedown",Ze),d.addEventListener("mouseup",et)):(jt.addEventListener?(jt.removeEventListener("mousewheel",He,!1),jt.removeEventListener("wheel",He,!1),jt.removeEventListener("MozMousePixelScroll",He,!1)):jt.detachEvent("onmousewheel",He),d.removeEventListener("mousedown",Ze),d.removeEventListener("mouseup",et))}function re(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ot(t,e,"m")}):Ot(t,"all","m")}function ie(e){e?(oe(!0),function(){if(o||l){E.autoScrolling&&(L.removeEventListener(I.touchmove,Te,{passive:!1}),L.addEventListener(I.touchmove,Te,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(I.touchstart,Me),e.removeEventListener(I.touchmove,ke,{passive:!1}),e.addEventListener(I.touchstart,Me),e.addEventListener(I.touchmove,ke,{passive:!1})}}()):(oe(!1),function(){if(o||l){E.autoScrolling&&(L.removeEventListener(I.touchmove,ke,{passive:!1}),L.removeEventListener(I.touchmove,Te,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(I.touchstart,Me),e.removeEventListener(I.touchmove,ke,{passive:!1})}}())}function le(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ot(t,e,"k")}):(Ot(t,"all","k"),E.keyboardScrolling=t)}function ae(){var e=kn(yn(Qt)[0],qt);e||!E.loopTop&&!E.continuousVertical||(e=Hn(yn(qt))),null!=e&&Re(e,null,!0)}function se(){var e=On(yn(Qt)[0],qt);e||!E.loopBottom&&!E.continuousVertical||(e=yn(qt)[0]),null!=e&&Re(e,null,!1)}function ce(e,t){te(0,"internal"),ue(e,t),te(D.scrollingSpeed,"internal")}function ue(e,t){var n=mt(e);void 0!==t?St(e,t):null!=n&&Re(n)}function fe(e){Ie("right",e)}function de(e){Ie("left",e)}function ve(e){if(!Ln(d,Yt)){T=!0,A=xn(),s=An();for(var t=yn(qt),n=0;n<t.length;++n){var o=t[n],r=yn(cn,o)[0],i=yn(ln,o);E.verticalCentered&&Tn(yn(Jt,o),{height:ht(o)+"px"}),Tn(o,{height:A+"px"}),1<i.length&&it(r,yn(an,r)[0])}E.scrollOverflow&&g.createScrollBarForAll();var l=In(yn(Qt)[0],qt);l&&ce(l+1),T=!1,_n(E.afterResize)&&e&&E.afterResize.call(d,zt.innerWidth,zt.innerHeight),_n(E.afterReBuild)&&!e&&E.afterReBuild.call(d)}}function pe(){return Ln(L,Vt)}function he(e){var t=pe();e?t||(Z(!1,"internal"),ne(!1,"internal"),Bn(yn(nn)),Nn(L,Vt),_n(E.afterResponsive)&&E.afterResponsive.call(d,e),E.scrollOverflow&&g.createScrollBarForAll()):t&&(Z(D.autoScrolling,"internal"),ne(D.autoScrolling,"internal"),Rn(yn(nn)),zn(L,Vt),_n(E.afterResponsive)&&E.afterResponsive.call(d,e))}function ge(e){var t=e.target;t&&Wn(t,nn+" a")?function(e){Kn(e);var t=In(Wn(this,nn+" li"));Re(yn(qt)[t])}.call(t,e):qn(t,".fp-tooltip")?function(){$n(Mn(this),"click")}.call(t):qn(t,gn)?function(){var e=Wn(this,qt);Ln(this,mn)?p.m.left&&de(e):p.m.right&&fe(e)}.call(t,e):qn(t,hn)||null!=Wn(t,hn)?function(e){Kn(e);var t=yn(cn,Wn(this,qt))[0],n=yn(ln,t)[In(Wn(this,"li"))];it(t,n)}.call(t,e):Wn(t,E.menu+" [data-menuanchor]")&&function(e){!yn(E.menu)[0]||!E.lockAnchors&&E.anchors.length||(Kn(e),ue(this.getAttribute("data-menuanchor")))}.call(t,e)}function me(e,t){jt["fp_"+e]=t,jt.addEventListener(e,Se,!0)}function Se(e){var t=e.type,o=!1,r=E.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==jt||!i)return ie(!0),void(r&&E.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(W=!1,setTimeout(function(){W=!0},800)),("mouseenter"!==t||W)&&(E.normalScrollElements.split(",").forEach(function(e){if(!o){var t=qn(i,e),n=Wn(i,e);(t||n)&&(h.shared.isNormalScrollElement||(ie(!1),r&&E.scrollOverflowHandler.setIscroll(i,!1)),h.shared.isNormalScrollElement=!0,o=!0)}}),!o&&h.shared.isNormalScrollElement&&(ie(!0),r&&E.scrollOverflowHandler.setIscroll(i,!0),h.shared.isNormalScrollElement=!1))}function we(){var e=xn(),t=An();A===e&&s===t||(A=e,s=t,ve(!0))}function be(e,t,n){var o=100*n,r=100/n,i=jt.createElement("div");i.className=sn,Pn(t,i);var l,a,s=jt.createElement("div");s.className=un,Pn(t,s),Tn(yn(fn,e),{width:o+"%"}),1<n&&(E.controlArrows&&(l=e,a=[Gn('<div class="fp-controlArrow fp-prev"></div>'),Gn('<div class="fp-controlArrow fp-next"></div>')],Yn(yn(cn,l)[0],a),"#fff"!==E.controlArrowColor&&(Tn(yn(wn,l),{"border-color":"transparent transparent transparent "+E.controlArrowColor}),Tn(yn(Sn,l),{"border-color":"transparent "+E.controlArrowColor+" transparent transparent"})),E.loopHorizontal||Bn(yn(Sn,l))),E.slidesNavigation&&function(e,t){jn(Gn('<div class="'+vn+'"><ul></ul></div>'),e);var n=yn(pn,e)[0];Nn(n,"fp-"+E.slidesNavPosition);for(var o=0;o<t;o++){var r=yn(ln,e)[o];jn(Gn('<li><a href="#"><span class="fp-sr-only">'+ye(o,"Slide",r)+"</span><span></span></a></li>"),yn("ul",n)[0])}Tn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Nn(yn("a",yn("li",n)[0]),Xt)}(e,n)),t.forEach(function(e){Tn(e,{width:r+"%"}),E.verticalCentered&&pt(e)});var c=yn(an,e)[0];null!=c&&(0!==In(yn(Qt),qt)||0===In(yn(Qt),qt)&&0!==In(c))?At(c,"internal"):Nn(t[0],Xt)}function ye(e,t,n){var o="Section"===t?E.anchors[e]:n.getAttribute("data-anchor");return E.navigationTooltips[e]||o||t+" "+(e+1)}function Ee(){var e,t,n=yn(Qt)[0];Nn(n,_t),Ye(n),We(),Ue(n),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e=Qe(),t=mt(e.section),e.section&&t&&(void 0===t||In(t)!==In(f))||!_n(E.afterLoad)||Ne("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:In(n,qt)}),_n(E.afterRender)&&Ne("afterRender")}function Le(){var e,t,n,o,r,i;if(!T&&(!E.autoScrolling||E.scrollBar)){var l=Un(),a=(i=U<(r=l)?"down":"up",Q=U=r,i),s=0,c=l+xn()/2,u=L.offsetHeight-xn()===l,f=yn(qt);if(u)s=f.length-1;else if(l)for(var d=0;d<f.length;++d)f[d].offsetTop<=c&&(s=d);else s=0;if(t=a,n=yn(Qt)[0].offsetTop,o=n+xn(),("up"!=t?n<=Un():o>=Un()+xn())&&(Ln(yn(Qt)[0],_t)||(Nn(yn(Qt)[0],_t),zn(Xn(yn(Qt)[0]),_t))),!Ln(e=f[s],Xt)){F=!0;var v,p,h=yn(Qt)[0],g=In(h,qt)+1,m=vt(e),S=e.getAttribute("data-anchor"),w=In(e,qt)+1,b=yn(an,e)[0],y={activeSection:h,sectionIndex:w-1,anchorLink:S,element:e,leavingSection:g,direction:m};b&&(p=b.getAttribute("data-anchor"),v=In(b)),k&&(Nn(e,Xt),zn(Xn(e),Xt),_n(E.onLeave)&&Ne("onLeave",y),_n(E.afterLoad)&&Ne("afterLoad",y),Ke(h),Ye(e),Ue(e),dt(S,w-1),E.anchors.length&&(x=S),bt(v,p,S)),clearTimeout(O),O=setTimeout(function(){F=!1},100)}E.fitToSection&&(clearTimeout(M),M=setTimeout(function(){E.fitToSection&&yn(Qt)[0].offsetHeight<=A&&xe()},E.fitToSectionDelay))}}function xe(){k&&(T=!0,Re(yn(Qt)[0]),T=!1)}function Ae(e){if(p.m[e]){var t="down"===e?se:ae;if(E.scrollOverflow){var n=E.scrollOverflowHandler.scrollable(yn(Qt)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!E.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Te(e){E.autoScrolling&&Oe(e)&&p.m.up&&Kn(e)}function ke(e){var t=Wn(e.target,qt)||yn(Qt)[0];if(Oe(e)){E.autoScrolling&&Kn(e);var n=xt(e);_=n.y,$=n.x,yn(cn,t).length&&Math.abs(K-$)>Math.abs(X-_)?!a&&Math.abs(K-$)>An()/100*E.touchSensitivity&&($<K?p.m.right&&fe(t):p.m.left&&de(t)):E.autoScrolling&&k&&Math.abs(X-_)>zt.innerHeight/100*E.touchSensitivity&&(_<X?Ae("down"):X<_&&Ae("up"))}}function Oe(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Me(e){if(E.fitToSection&&(z=!1),Oe(e)){var t=xt(e);X=t.y,K=t.x}}function Ce(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function He(e){var t=(new Date).getTime(),n=Ln(yn(".fp-completely")[0],en);if(!p.m.down&&!p.m.up)return Kn(e),!1;if(E.autoScrolling&&!c&&!n){var o=(e=e||zt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<v.length&&v.shift(),v.push(Math.abs(o)),E.scrollBar&&Kn(e);var a=t-q;if(q=t,200<a&&(v=[]),k){var s=Ce(v,10);Ce(v,70)<=s&&l&&Ae(r<0?"down":"up")}return!1}E.fitToSection&&(z=!1)}function Ie(e,t){var n=null==t?yn(Qt)[0]:t,o=yn(cn,n)[0];if(!(null==o||a||yn(ln,o).length<2)){var r=yn(an,o)[0],i=null;if(null==(i="left"===e?kn(r,ln):On(r,ln))){if(!E.loopHorizontal)return;var l=Xn(r);i="left"===e?l[l.length-1]:l[0]}a=!h.test.isTesting,it(o,i,e)}}function Be(){for(var e=yn(an),t=0;t<e.length;t++)At(e[t],"internal")}function Re(e,t,n){if(null!=e){var o,r,i,l,a,s,c,u,f,d={element:e,callback:t,isMovementUp:n,dtop:(r=(o=e).offsetHeight,i=o.offsetTop,a=Q<(l=i),s=l-A+r,c=E.bigSectionsDestination,A<r?(a||c)&&"bottom"!==c||(l=s):(a||T&&null==Cn(o))&&(l=s),Q=l),yMovement:vt(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:In(e,qt),activeSlide:yn(an,e)[0],activeSection:yn(Qt)[0],leavingSection:In(yn(Qt),qt)+1,localIsResizing:T};if(!(d.activeSection==e&&!T||E.scrollBar&&Un()===d.dtop&&!Ln(e,Zt))){if(null!=d.activeSlide&&(u=d.activeSlide.getAttribute("data-anchor"),f=In(d.activeSlide)),!d.localIsResizing){var v=d.yMovement;if(void 0!==n&&(v=n?"up":"down"),d.direction=v,_n(E.onLeave)&&!1===Ne("onLeave",d))return}E.autoScrolling&&E.continuousVertical&&void 0!==d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&((p=d).isMovementUp?Fn(yn(Qt)[0],Zn(p.activeSection,qt)):Yn(yn(Qt)[0],eo(p.activeSection,qt).reverse()),Tt(yn(Qt)[0].offsetTop),Be(),p.wrapAroundElements=p.activeSection,p.dtop=p.element.offsetTop,p.yMovement=vt(p.element),d=p),d.localIsResizing||Ke(d.activeSection),E.scrollOverflow&&E.scrollOverflowHandler.beforeLeave(),Nn(e,Xt),zn(Xn(e),Xt),Ye(e),E.scrollOverflow&&E.scrollOverflowHandler.onLeave(),k=h.test.isTesting,bt(f,u,d.anchorLink,d.sectionIndex),function(e){var t=E.scrollingSpeed<700,n=t?700:E.scrollingSpeed;if(E.css3&&E.autoScrolling&&!E.scrollBar){var o="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";gt(o,!0),E.scrollingSpeed?(clearTimeout(w),w=setTimeout(function(){De(e),k=!t},E.scrollingSpeed)):De(e)}else{var r=Pe(e.dtop);h.test.top=-e.dtop+"px",Ht(r.element,r.options,E.scrollingSpeed,function(){E.scrollBar?setTimeout(function(){De(e)},30):(De(e),k=!t)})}t&&(clearTimeout(P),P=setTimeout(function(){k=!0},n))}(d),x=d.anchorLink,dt(d.anchorLink,d.sectionIndex)}}var p}function Ne(e,t){var n,o,r,i,l=(o=e,r=t,(i=E.v2compatible?{afterRender:function(){return[d]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:ze(yn(Qt)[0]),slide:je(yn(an,yn(Qt)[0])[0])}},onLeave:function(){return{origin:ze(r.activeSection),destination:ze(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:ze(r.section),origin:je(r.prevSlide),destination:je(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(E.v2compatible){if(!1===E[e].apply(l[0],l.slice(1)))return!1}else if($n(d,e,l),!1===E[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function ze(e){return e?new Rt(e):null}function je(e){return e?new Nt(e):null}function Pe(e){var t={};return E.autoScrolling&&!E.scrollBar?(t.options=-e,t.element=yn(Dt)[0]):(t.options=e,t.element=zt),t}function De(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?Fn(yn(qt)[0],t.wrapAroundElements):Yn(yn(qt)[yn(qt).length-1],t.wrapAroundElements),Tt(yn(Qt)[0].offsetTop),Be()),_n(E.afterLoad)&&!e.localIsResizing&&Ne("afterLoad",e),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e.localIsResizing||Ue(e.element),Nn(e.element,_t),zn(Xn(e.element),_t),We(),k=!0,_n(e.callback)&&e.callback()}function Ve(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function We(){var e=yn(".fp-auto-height")[0]||pe()&&yn(".fp-auto-height-responsive")[0];E.lazyLoading&&e&&yn(qt+":not("+Kt+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<A&&0<n||2<o&&o<A)&&Ye(e)})}function Ye(o){E.lazyLoading&&yn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",_e(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(Ve(n,e),n.addEventListener("load",function(){Fe(o)}))}),qn(n,"source")){var e=Wn(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){Fe(o)})}})}function Fe(e){E.scrollOverflow&&(clearTimeout(j),j=setTimeout(function(){Ln(L,Vt)||g.createScrollBar(e)},200))}function Ue(e){var t=_e(e);yn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),yn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Xe(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Xe(e)}})}function Xe(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Ke(e){var t=_e(e);yn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),yn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function _e(e){var t=yn(an,e);return t.length&&(e=t[0]),e}function $e(){var e=Qe(),t=e.section,n=e.slide;t&&(E.animateAnchor?St(t,n):ce(t,n))}function qe(){if(!F&&!E.lockAnchors){var e=Qe(),t=e.section,n=e.slide,o=void 0===x,r=void 0===x&&void 0===n&&!a;t&&t.length&&(t&&t!==x&&!o||r||!a&&i!=n)&&St(t,n)}}function Qe(){var e,t,n=zt.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function Ge(e){clearTimeout(y);var t=jt.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=jt.activeElement,u=tt(_e(yn(Qt)[0]));function f(e){return Kn(e),u[0]?u[0].focus():null}(t=e,n=tt(jt),o=n.indexOf(jt.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=je(Wn(i,ln)),a=ze(Wn(i,qt)),l||a)&&(c?null==Wn(c,Qt+","+Qt+" "+an)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&Kn(e))}(e):qn(t,"textarea")||qn(t,"input")||qn(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!E.keyboardScrolling||!E.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&Kn(e),c=e.ctrlKey,y=setTimeout(function(){!function(e){var t=e.shiftKey,n=jt.activeElement,o=qn(n,"video")||qn(n,"audio");if(k||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:p.k.up&&ae();break;case 32:if(t&&p.k.up&&!o){ae();break}case 40:case 34:p.k.down&&(32===e.keyCode&&o||se());break;case 36:p.k.up&&ue(1);break;case 35:p.k.down&&ue(yn(qt).length);break;case 37:p.k.left&&de();break;case 39:p.k.right&&fe()}}(e)},150))}function Je(e){t&&(c=e.ctrlKey)}function Ze(e){2==e.which&&(G=e.pageY,d.addEventListener("mousemove",rt))}function et(e){2==e.which&&d.removeEventListener("mousemove",rt)}function tt(e){return[].slice.call(yn(B,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function nt(){t=!0}function ot(){c=t=!1}function rt(e){E.autoScrolling&&(k&&(e.pageY<G&&p.m.up?ae():e.pageY>G&&p.m.down&&se()),G=e.pageY)}function it(e,t,n){var o,r,i=Wn(e,qt),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:In(t),section:i,sectionIndex:In(i,qt),anchorLink:i.getAttribute("data-anchor"),slidesNav:yn(pn,i)[0],slideAnchor:Et(t),prevSlide:yn(an,i)[0],prevSlideIndex:In(yn(an,i)[0]),localIsResizing:T};l.xMovement=(o=l.prevSlideIndex,r=l.slideIndex,o==r?"none":r<o?"left":"right"),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(k=!1),E.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&_n(E.onSlideLeave)&&!1===Ne("onSlideLeave",l)?a=!1:(Nn(t,Xt),zn(Xn(t),Xt),l.localIsResizing||(Ke(l.prevSlide),Ye(t)),!E.loopHorizontal&&E.controlArrows&&(Qn(yn(Sn,i),0!==l.slideIndex),Qn(yn(wn,i),null!=Cn(t))),Ln(i,Xt)&&!l.localIsResizing&&bt(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(E.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";h.test.translate3dH[t.sectionIndex]=r,Tn(ut(yn(fn,e)),kt(r)),b=setTimeout(function(){n&&lt(t)},E.scrollingSpeed)}else h.test.left[t.sectionIndex]=Math.round(o.left),Ht(e,Math.round(o.left),E.scrollingSpeed,function(){n&&lt(t)})}(e,l,!0))}function lt(e){var t,n;t=e.slidesNav,n=e.slideIndex,E.slidesNavigation&&null!=t&&(zn(yn(Kt,t),Xt),Nn(yn("a",yn("li",t)[n]),Xt)),e.localIsResizing||(_n(E.afterSlideLoad)&&Ne("afterSlideLoad",e),k=!0,Ue(e.destiny)),a=!1}function at(){T=!0,clearTimeout(m),m=setTimeout(function(){for(var e=0;e<4;e++)S=setTimeout(st,200*e)},200)}function st(){if(ct(),o){var e=jt.activeElement;if(!qn(e,"textarea")&&!qn(e,"input")&&!qn(e,"select")){var t=xn();Math.abs(t-J)>20*Math.max(J,t)/100&&(ve(!0),J=t)}}else we()}function ct(){var e=E.responsive||E.responsiveWidth,t=E.responsiveHeight,n=e&&zt.innerWidth<e,o=t&&zt.innerHeight<t;e&&t?he(n||o):e?he(n):t&&he(o)}function ut(e){var t="all "+E.scrollingSpeed+"ms "+E.easingcss3;return zn(e,Wt),Tn(e,{"-webkit-transition":t,transition:t})}function ft(e){return Nn(e,Wt)}function dt(e,t){var n,o,r;n=e,yn(E.menu).forEach(function(e){E.menu&&null!=e&&(zn(yn(Kt,e),Xt),Nn(yn('[data-menuanchor="'+n+'"]',e),Xt))}),o=e,r=t,E.navigation&&null!=yn(nn)[0]&&(zn(yn(Kt,yn(nn)[0]),Xt),Nn(o?yn('a[href="#'+o+'"]',yn(nn)[0]):yn("a",yn("li",yn(nn)[0])[r]),Xt))}function vt(e){var t=In(yn(Qt)[0],qt),n=In(e,qt);return t==n?"none":n<t?"up":"down"}function pt(e){if(!Ln(e,dn)){var t=jt.createElement("div");t.className=Gt,t.style.height=ht(e)+"px",Nn(e,dn),Dn(e,t)}}function ht(e){var t=A;if(E.paddingTop||E.paddingBottom){var n=e;Ln(n,$t)||(n=Wn(e,qt));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=A-o}return t}function gt(e,t){t?ut(d):ft(d),Tn(d,kt(e)),h.test.translate3d=e,setTimeout(function(){zn(d,Wt)},10)}function mt(e){var t=yn(qt+'[data-anchor="'+e+'"]',d)[0];if(!t){var n=void 0!==e?e-1:0;t=yn(qt)[n]}return t}function St(e,t){var n=mt(e);if(null!=n){var o,r,i,l=(null==(i=yn(ln+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=yn(ln,r)[o]),i);Et(n)===x||Ln(n,Xt)?wt(l):Re(n,function(){wt(l)})}}function wt(e){null!=e&&it(Wn(e,cn),e)}function bt(e,t,n,o){var r="";E.anchors.length&&!E.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),yt(r+"/"+(i=t))):(null!=e&&(i=t),yt(n))),Lt()}function yt(e){if(E.recordHistory)location.hash=e;else if(o||l)zt.history.replaceState(void 0,void 0,"#"+e);else{var t=zt.location.href.split("#")[0];zt.location.replace(t+"#"+e)}}function Et(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=In(e);return null==t&&(t=n),t}function Lt(){var e=yn(Qt)[0],t=yn(an,e)[0],n=Et(e),o=Et(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+Ut+"-[^\\s]+\\b","g");L.className=L.className.replace(i,""),Nn(L,Ut+"-"+r)}function xt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,l&&Oe(e)&&E.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function At(e,t){te(0,"internal"),void 0!==t&&(T=!0),it(Wn(e,cn),e),void 0!==t&&(T=!1),te(D.scrollingSpeed,"internal")}function Tt(e){var t=Math.round(e);if(E.css3&&E.autoScrolling&&!E.scrollBar)gt("translate3d(0px, -"+t+"px, 0px)",!1);else if(E.autoScrolling&&!E.scrollBar)Tn(d,{top:-t+"px"}),h.test.top=-t+"px";else{var n=Pe(t);It(n.element,n.options)}}function kt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ot(t,e,n){"all"!==e?p[n][e]=t:Object.keys(p[n]).forEach(function(e){p[n][e]=t})}function Mt(e,t,n){E[e]=t,"internal"!==n&&(D[e]=t)}function Ct(){var e=E.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(bn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),bn("error","https://github.com/alvarotrigo/fullPage.js#options.")),Ln(u,Ft)?bn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(E.continuousVertical&&(E.loopTop||E.loopBottom)&&(E.continuousVertical=!1,bn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!E.scrollOverflow||!E.scrollBar&&E.autoScrolling||bn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!E.continuousVertical||!E.scrollBar&&E.autoScrolling||(E.continuousVertical=!1,bn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),E.scrollOverflow&&null==E.scrollOverflowHandler&&(E.scrollOverflow=!1,bn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),Y.forEach(function(e){E[e]&&bn("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),E.anchors.forEach(function(t){var e=[].slice.call(yn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(yn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){bn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&bn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function Ht(t,n,o,r){var e,i=(e=t).self!=zt&&Ln(e,sn)?e.scrollLeft:!E.autoScrolling||E.scrollBar?Un():e.offsetTop,l=n-i,a=0;z=!0;var s=function(){if(z){var e=n;a+=20,o&&(e=zt.fp_easings[E.easing](a,i,l,o)),It(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function It(e,t){!E.autoScrolling||E.scrollBar||e.self!=zt&&Ln(e,sn)?e.self!=zt&&Ln(e,sn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function Bt(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=In(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Rt(e){Bt.call(this,e,qt)}function Nt(e){Bt.call(this,e,ln)}Ct()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
//# sourceMappingURL=fullpage.min.js.map

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationTooltips: ['Home Decorationss', 'Different Styles', 'Author'],
    onLeave: (origin, destination, direction) => {
        const section = destination.item,
            title = section.querySelector('h1'),
            tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1 });
        if (destination.index === 1) {
            const chairs = document.querySelectorAll('.chair'),
                description = document.querySelector('.description');
            tl
                .fromTo(chairs, 0.7, { x: '100%' }, { x: '-5%' })
                .fromTo(description, 0.7, { y: '50', opacity: 0 }, { y: '0', opacity: 1 })
                .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
                .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
                .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 })
        };
        if (destination.index === 2) {
            const Author = document.querySelector('.author');
            tl
                .fromTo(Author, 0.7, { x: '-100%', opacity: 0 }, { x: '-50%', opacity: 1 })
        }
    },
    controlArrows: true,
})