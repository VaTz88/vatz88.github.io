!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(){}function r(e,t){for(const n in t)e[n]=t[n];return e}function s(e){return e()}function c(){return Object.create(null)}function i(e){e.forEach(s)}function a(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e,t){const n=e.subscribe(t);return n.unsubscribe?()=>n.unsubscribe():n}function d(e,t,n){e.$$.on_destroy.push(u(t,n))}function f(e,t,n){return e[1]?r({},r(t.$$scope.ctx,e[1](n?n(t):{}))):t.$$scope.ctx}function m(e){return null==e?"":e}new Set;function p(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function w(){return v(" ")}function b(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}let C;function M(e){C=e}const _=[],k=[],S=[],j=[],z=Promise.resolve();let R=!1;function O(){R||(R=!0,z.then(q))}function T(e){S.push(e)}function q(){const e=new Set;do{for(;_.length;){const e=_.shift();M(e),V(e.$$)}for(;k.length;)k.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];e.has(n)||(n(),e.add(n))}S.length=0}while(_.length);for(;j.length;)j.pop()();R=!1}function V(e){null!==e.fragment&&(e.update(e.dirty),i(e.before_update),e.fragment&&e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(T))}const L=new Set;let A;function P(){A={r:0,c:[],p:A}}function E(){A.r||i(A.c),A=A.p}function H(e,t){e&&e.i&&(L.delete(e),e.i(t))}function J(e,t,n,o){if(e&&e.o){if(L.has(e))return;L.add(e),A.c.push(()=>{L.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let X;function N(e){e&&e.c()}function W(e,t,n){const{fragment:o,on_mount:r,on_destroy:c,after_update:l}=e.$$;o&&o.m(t,n),T(()=>{const t=r.map(s).filter(a);c?c.push(...t):i(t),e.$$.on_mount=[]}),l.forEach(T)}function Y(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx={})}function B(e,t,n,r,s,a){const l=C;M(e);const u=t.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:o,not_equal:s,bound:c(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:c(),dirty:null};let f=!1;var m;d.ctx=n?n(e,u,(t,n,o=n)=>(d.ctx&&s(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),f&&function(e,t){e.$$.dirty||(_.push(e),O(),e.$$.dirty=c()),e.$$.dirty[t]=!0}(e,t)),n)):u,d.update(),f=!0,i(d.before_update),d.fragment=!!r&&r(d.ctx),t.target&&(t.hydrate?d.fragment&&d.fragment.l((m=t.target,Array.from(m.childNodes))):d.fragment&&d.fragment.c(),t.intro&&H(e.$$.fragment),W(e,t.target,t.anchor),q()),M(l)}"function"==typeof HTMLElement&&(X=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){Y(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class I{$destroy(){Y(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const D=[];function F(e,t=o){let n;const r=[];function s(t){if(l(e,t)&&(e=t,n)){const t=!D.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),D.push(n,e)}if(t){for(let e=0;e<D.length;e+=2)D[e][0](D[e+1]);D.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=o){const a=[c,i];return r.push(a),1===r.length&&(n=t(s)||o),c(e),()=>{const e=r.indexOf(a);-1!==e&&r.splice(e,1),0===r.length&&(n(),n=null)}}}}const G={dark:"dark",light:"light"},K="(prefers-color-scheme:light)",Q="not all"!==window.matchMedia(K).media,U=F(Q&&window.matchMedia(K).matches?G.light:G.dark);Q&&window.matchMedia(K).addListener(({matches:e})=>{const t=e?G.light:G.dark;U.set(t)});n(1);function Z(e){let t,n,r,s,c,i;return{c(){t=g("div"),n=g("img"),s=w(),c=g("div"),c.innerHTML="<h1>Vatsal Joshi</h1>",x(n,"id","profile-pic"),n.src!==(r="/public/vatsal-joshi.png")&&x(n,"src","/public/vatsal-joshi.png"),x(n,"alt","Vatsal Joshi"),y(n,"transform","rotateX("+e.picRotateValue.x+"deg) rotateY("+e.picRotateValue.y+"deg)"),x(n,"class","svelte-weqr8n"),x(t,"class","fx-item fx-grow-zero ripple-ring svelte-weqr8n"),x(c,"class","fx-item fx-grow-zero"),i=b(t,"click",ee)},m(e,o){h(e,t,o),p(t,n),h(e,s,o),h(e,c,o)},p(e,t){e.picRotateValue&&y(n,"transform","rotateX("+t.picRotateValue.x+"deg) rotateY("+t.picRotateValue.y+"deg)")},i:o,o:o,d(e){e&&$(t),e&&$(s),e&&$(c),i()}}}function ee(){window.navigator.vibrate&&window.navigator.vibrate(50),U.update(e=>e===G.dark?G.light:G.dark)}function te(e,t,n){let o={x:0,y:0};function r(e,t){n("picRotateValue",o={...o,[e]:t})}const s=window.matchMedia("(pointer:fine)").matches;return window.matchMedia("(prefers-reduced-motion:reduce)").matches||s&&window.document.addEventListener("mousemove",(function(e){!function(e,t){const n={};function s(e,t){n[e]&&window.clearTimeout(n[e]),r(e,t),n[e]=window.setTimeout(()=>{0!==o[e]?r(e,0):window.clearTimeout(n[e])},200)}Math.sign(e)===Math.sign(o.x)?Math.sign(e)*e>Math.sign(o.x)*o.x&&s("x",e):s("x",e),Math.sign(t)===Math.sign(o.y)?Math.sign(t)*t>Math.sign(o.y)*o.y&&s("y",t):s("y",t)}(2*e.movementY,2*e.movementX)})),{picRotateValue:o}}var ne=class extends I{constructor(e){super(),B(this,e,te,Z,l,{})}};function oe(e){let t;return{c(){t=g("div"),t.innerHTML='<p>I&#39;m a JavaScript and Web enthusiast, living in Banglore, India.</p> \n    <p>\n      Pseudo blogger at\n      <a target="_blank" href="https://blog.vatz88.in" rel="noopener">\n        blog.vatz88.in\n      </a></p> \n    <p>\n      Connect with me\n      <a target="_blank" href="https://twitter.com/vatz88" rel="noopener">\n        @vatz88\n      </a></p>',x(t,"class","fx-item fx-grow-zero")},m(e,n){h(e,t,n)},p:o,i:o,o:o,d(e){e&&$(t)}}}var re=class extends I{constructor(e){super(),B(this,e,null,oe,l,{})}};n(2);function se(e){let t;return{c(){t=g("footer"),t.innerHTML='<p>\n    Site build with\n    <a href="https://svelte.dev">Svelte</a></p> \n  <p>\n    Source code can be found at\n    <a target="_blank" href="https://github.com/vatz88/vatz88.github.io" rel="noopener">\n      github.com/vatz88/vatz88.github.io\n    </a></p>',x(t,"class","fx-item fx-grow-zero svelte-slmics")},m(e,n){h(e,t,n)},p:o,i:o,o:o,d(e){e&&$(t)}}}var ce=class extends I{constructor(e){super(),B(this,e,null,se,l,{})}};n(3);function ie(e){let t,n,o,s,c;const i=e.$$slots.default,a=function(e,t,n){if(e){const o=f(e,t,n);return e[0](o)}}(i,e,null);return{c(){t=g("div"),n=g("div"),a&&a.c(),x(n,"class","modal svelte-evd45o"),x(t,"class",o=m(`modal-container ${e.$theme}`)+" svelte-evd45o"),c=b(t,"click",e.onModalClose)},m(e,o){h(e,t,o),p(t,n),a&&a.m(n,null),s=!0},p(e,n){a&&a.p&&e.$$scope&&a.p(function(e,t,n,o){return e[1]?r({},r(t.$$scope.changed||{},e[1](o?o(n):{}))):t.$$scope.changed||{}}(i,n,e,null),f(i,n,null)),(!s||e.$theme&&o!==(o=m(`modal-container ${n.$theme}`)+" svelte-evd45o"))&&x(t,"class",o)},i(e){s||(H(a,e),s=!0)},o(e){J(a,e),s=!1},d(e){e&&$(t),a&&a.d(e),c()}}}function ae(e,t,n){let o;d(e,U,e=>n("$theme",o=e));let{onClose:r=function(){}}=t;let{$$slots:s={},$$scope:c}=t;return e.$set=e=>{"onClose"in e&&n("onClose",r=e.onClose),"$$scope"in e&&n("$$scope",c=e.$$scope)},{onClose:r,onModalClose:function(e){2===e.eventPhase&&r()},$theme:o,$$slots:s,$$scope:c}}var le=class extends I{constructor(e){super(),B(this,e,ae,ie,l,{onClose:0})}};n(4);function ue(e){let t,n,r,s,c,a,l,u,d,f,m;return{c(){t=g("div"),n=g("div"),n.innerHTML='<iframe src="https://docs.google.com/viewer?srcid=17SJXhb048iAt1bTxOR14O4VyAuik6nuqgC3-W1Sl740&amp;pid=explorer&amp;efh=false&amp;a=v&amp;chrome=false&amp;embedded=true" title="Vatsal&#39;s resume" class="svelte-18jmoqr"></iframe>',r=w(),s=g("div"),c=g("div"),a=g("div"),l=g("button"),l.textContent="Download",u=w(),d=g("div"),f=g("button"),f.textContent="Close",x(n,"class","fx-item"),x(l,"class","resume-action-btn svelte-18jmoqr"),x(a,"class","fx-item fx-grow-zero"),x(f,"class","resume-action-btn svelte-18jmoqr"),x(d,"class","fx-item fx-grow-zero"),x(c,"class","fx-container resume-action-buttons svelte-18jmoqr"),x(s,"class","fx-item fx-grow-zero"),x(t,"class","fx-container direction-column resume-container svelte-18jmoqr"),m=[b(l,"click",de),b(f,"click",e.onClose)]},m(e,o){h(e,t,o),p(t,n),p(t,r),p(t,s),p(s,c),p(c,a),p(a,l),p(c,u),p(c,d),p(d,f)},p:o,i:o,o:o,d(e){e&&$(t),i(m)}}}function de(){window.location="https://docs.google.com/document/d/17SJXhb048iAt1bTxOR14O4VyAuik6nuqgC3-W1Sl740/export?format=pdf",gtag("event","resume download")}function fe(e,t,n){let{onClose:o=function(){}}=t;return e.$set=e=>{"onClose"in e&&n("onClose",o=e.onClose)},{onClose:o}}var me=class extends I{constructor(e){super(),B(this,e,fe,ue,l,{onClose:0})}};n(5);function pe(e){let t;const n=new le({props:{onClose:e.closeResumeModal,$$slots:{default:[he]},$$scope:{ctx:e}}});return{c(){N(n.$$.fragment)},m(e,o){W(n,e,o),t=!0},p(e,t){const o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),n.$set(o)},i(e){t||(H(n.$$.fragment,e),t=!0)},o(e){J(n.$$.fragment,e),t=!1},d(e){Y(n,e)}}}function he(e){let t;const n=new me({props:{onClose:e.closeResumeModal}});return{c(){N(n.$$.fragment)},m(e,o){W(n,e,o),t=!0},p:o,i(e){t||(H(n.$$.fragment,e),t=!0)},o(e){J(n.$$.fragment,e),t=!1},d(e){Y(n,e)}}}function $e(e){let t,n,o,r,s,c,i;const a=new ne({}),l=new re({}),u=new ce({});let d=e.showResume&&pe(e);return{c(){t=g("div"),N(a.$$.fragment),n=w(),N(l.$$.fragment),o=w(),N(u.$$.fragment),s=w(),d&&d.c(),c=v(""),x(t,"itemscope",""),x(t,"itemtype","https://schema.org/Person"),x(t,"class",r="App fx-container direction-column align-center "+e.$theme+" svelte-1mv77iv")},m(e,r){h(e,t,r),W(a,t,null),p(t,n),W(l,t,null),p(t,o),W(u,t,null),h(e,s,r),d&&d.m(e,r),h(e,c,r),i=!0},p(e,n){(!i||e.$theme&&r!==(r="App fx-container direction-column align-center "+n.$theme+" svelte-1mv77iv"))&&x(t,"class",r),n.showResume?d?(d.p(e,n),H(d,1)):(d=pe(n),d.c(),H(d,1),d.m(c.parentNode,c)):d&&(P(),J(d,1,1,()=>{d=null}),E())},i(e){i||(H(a.$$.fragment,e),H(l.$$.fragment,e),H(u.$$.fragment,e),H(d),i=!0)},o(e){J(a.$$.fragment,e),J(l.$$.fragment,e),J(u.$$.fragment,e),J(d),i=!1},d(e){e&&$(t),Y(a),Y(l),Y(u),e&&$(s),d&&d.d(e),e&&$(c)}}}function ge(e,t,n){let o;d(e,U,e=>n("$theme",o=e));let r=!1;function s(){"#resume"===window.location.hash.toLowerCase()&&(n("showResume",r=!0),gtag("event","resume view",{non_interaction:!0}))}return window.onhashchange=s,s(),{showResume:r,closeResumeModal:function(){n("showResume",r=!1),history.pushState("",document.title,window.location.pathname+window.location.search)},$theme:o}}new class extends I{constructor(e){super(),B(this,e,ge,$e,l,{})}}({target:document.body});const ve=["font-size: 44px","color: #757575"].join(";");console.log("%cvatz88",ve)}]);
//# sourceMappingURL=main.93faf12cf460b52a19ed.js.map