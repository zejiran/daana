(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3niX":function(e,t,i){"use strict";t.__esModule=!0,t.flush=function(){var e=n.cssRules();return n.flush(),e},t.default=void 0;var r,s=i("q1tI");var n=new(((r=i("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,i;function r(t){var i;return(i=e.call(this,t)||this).prevProps={},i}i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,r.dynamic=function(e){return e.map((function(e){var t=e[0],i=e[1];return n.computeId(t,i)})).join(" ")};var s=r.prototype;return s.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},s.componentWillUnmount=function(){n.remove(this.props)},s.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&n.remove(this.prevProps),n.add(this.props),this.prevProps=this.props),null},r}(s.Component);t.default=o},"9kyW":function(e,t,i){"use strict";e.exports=function(e){for(var t=5381,i=e.length;i;)t=33*t^e.charCodeAt(--i);return t>>>0}},MX0m:function(e,t,i){e.exports=i("3niX")},Rjm8:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/donor/DonorHistory",function(){return i("yeka")}])},SevZ:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var r=n(i("9kyW")),s=n(i("bVZc"));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,i=t.styleSheet,r=void 0===i?null:i,n=t.optimizeForSpeed,o=void 0!==n&&n,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var i=this.getIdAndRules(e),r=i.styleId,s=i.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var n=s.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=n,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var r=this._fromServer&&this._fromServer[i];r?(r.parentNode.removeChild(r),delete this._fromServer[i]):(this._indices[i].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[i]),delete this._instancesCounts[i]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return i[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,i){if(!i)return"jsx-"+t;var s=String(i),n=t+s;return e[n]||(e[n]="jsx-"+(0,r.default)(t+"-"+s)),e[n]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(i,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var s=i+r;return t[s]||(t[s]=r.replace(e,i)),t[s]}},t.getIdAndRules=function(e){var t=this,i=e.children,r=e.dynamic,s=e.id;if(r){var n=this.computeId(s,r);return{styleId:n,rules:Array.isArray(i)?i.map((function(e){return t.computeSelector(n,e)})):[this.computeSelector(n,i)]}}return{styleId:this.computeId(s),rules:Array.isArray(i)?i:[i]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},bVZc:function(e,t,i){"use strict";(function(e){function i(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},n=function(){function e(e){var t=void 0===e?{}:e,i=t.name,n=void 0===i?"stylesheet":i,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,d=void 0===l?"undefined"!==typeof window:l;o(s(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=d,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var u=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=u?u.getAttribute("content"):null}var t,n,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"===typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(n){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,i){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return i?n.insertBefore(r,i):n.appendChild(r),r},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,n),a&&i(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=n}).call(this,i("8oxB"))},yeka:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return u}));var r=i("MX0m"),s=i.n(r),n=i("8Kt/"),o=i.n(n),a=i("YFqc"),c=i.n(a),l=i("q1tI"),d=i.n(l).a.createElement;function u(){return d("div",{className:"jsx-2180113262 container"},d(o.a,null,d("title",{className:"jsx-2180113262"},"Donor history"),d("link",{rel:"icon",href:"/favicon.ico",className:"jsx-2180113262"})),d("main",{className:"jsx-2180113262"},d("h1",{className:"jsx-2180113262 title"},"Contributions you have made in"," ",d(c.a,{href:"/posts/first"},d("a",{className:"jsx-2180113262"},"Daana."))),d("p",{className:"jsx-2180113262 description"},"Here are ",d("span",{className:"jsx-2180113262 donor"},"all")," the "," ",d("span",{className:"jsx-2180113262 receiver"},"contributions")," you have made."),d("a",{className:"jsx-2180113262 grid"},d("div",{className:"jsx-2180113262 card"},d("h3",{className:"jsx-2180113262"},"Name Organization"),d("img",{src:"/logo-daana.png",alt:"Organization Logo",className:"jsx-2180113262 org"}),d("p",{className:"jsx-2180113262 description"},"You contributed:"," ",d("span",{className:"jsx-2180113262 donor"},"$XXX,XXX"),"."),d("p",{className:"jsx-2180113262 description"},"It is used on:"," ",d("span",{className:"jsx-2180113262 receiver"},"ACTIVITY"),".")),d("div",{className:"jsx-2180113262 card"},d("h3",{className:"jsx-2180113262"},"Name Organization"),d("img",{src:"/logo-daana.png",alt:"Organization Logo",className:"jsx-2180113262 org"}),d("p",{className:"jsx-2180113262 description"},"You contributed:"," ",d("span",{className:"jsx-2180113262 donor"},"$XXX,XXX"),"."),d("p",{className:"jsx-2180113262 description"},"It is used on:"," ",d("span",{className:"jsx-2180113262 receiver"},"ACTIVITY"),".")))),d("footer",{className:"jsx-2180113262"},d("a",{className:"jsx-2180113262"},d("img",{src:"/logo-daana.png",alt:"Daana Logo",className:"jsx-2180113262 logo"}),"- a project for"," ",d("img",{src:"/hackthechain.png",alt:"Hack the Chain Logo",className:"jsx-2180113262 logo"}))),d(s.a,{id:"3564741036"},[".container.jsx-2180113262{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".org.jsx-2180113262{height:5em;margin:0;}","main.jsx-2180113262{padding:7rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-2180113262{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-2180113262 img.jsx-2180113262{margin-left:0.5rem;}","footer.jsx-2180113262 a.jsx-2180113262{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px;}","a.jsx-2180113262{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-2180113262 a.jsx-2180113262{color:#f36900;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-2180113262 a.jsx-2180113262:hover,.title.jsx-2180113262 a.jsx-2180113262:focus,.title.jsx-2180113262 a.jsx-2180113262:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-2180113262{margin:0;line-height:1.15;font-size:4rem;}",".title.jsx-2180113262,.description.jsx-2180113262{text-align:center;}",".description.jsx-2180113262{line-height:1.5;font-size:1.5rem;}","code.jsx-2180113262{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",".grid.jsx-2180113262{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1000px;margin-top:3rem;}",".card.jsx-2180113262{margin:1rem;-webkit-flex-basis:90%;-ms-flex-preferred-size:90%;flex-basis:90%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".cardReceiver.jsx-2180113262{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".cardDonor.jsx-2180113262{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".card.jsx-2180113262:hover,.card.jsx-2180113262:focus,.card.jsx-2180113262:active{color:#f36900;border-color:#f36900;}",".cardDonor.jsx-2180113262:hover,.cardDonor.jsx-2180113262:focus,.cardDonor.jsx-2180113262:active{color:#29f300;border-color:#29f300;}",".cardReceiver.jsx-2180113262:hover,.cardReceiver.jsx-2180113262:focus,.cardReceiver.jsx-2180113262:active{color:#9600f3;border-color:#9600f3;}",".card.jsx-2180113262 h3.jsx-2180113262{margin:0 0 1rem 0;font-size:1.5rem;}",".card.jsx-2180113262 p.jsx-2180113262{margin:0;font-size:1.25rem;line-height:1.5;}",".cardReceiver.jsx-2180113262 h3.jsx-2180113262{margin:0 0 1rem 0;font-size:1.5rem;}",".cardReceiver.jsx-2180113262 p.jsx-2180113262{margin:0;font-size:1.25rem;line-height:1.5;}",".cardDonor.jsx-2180113262 h3.jsx-2180113262{margin:0 0 1rem 0;font-size:1.5rem;}",".cardDonor.jsx-2180113262 p.jsx-2180113262{margin:0;font-size:1.25rem;line-height:1.5;}",".donor.jsx-2180113262:hover,.donor.jsx-2180113262:focus,.donor.jsx-2180113262:active{color:#29f300;border-color:#29f300;}",".receiver.jsx-2180113262:hover,.receiver.jsx-2180113262:focus,.receiver.jsx-2180113262:active{color:#9600f3;border-color:#9600f3;}",".logo.jsx-2180113262{height:2em;}","@media (max-width:600px){.grid.jsx-2180113262{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]),d(s.a,{id:"3379920139"},["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}","*{box-sizing:border-box;}"]))}}},[["Rjm8",0,2,1,3]]]);