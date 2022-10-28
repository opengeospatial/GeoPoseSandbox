// GeoPoseSandbox ThreeJS Bundle

// threejs.org/license
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).THREE={})}(this,(function(t){"use strict";void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52)),void 0===Number.isInteger&&(Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}),void 0===Math.sign&&(Math.sign=function(t){return t<0?-1:t>0?1:+t}),"name"in Function.prototype==!1&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}}),void 0===Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e});var e=function(t){var e,n=Object.prototype,i=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,i){var r=e&&e.prototype instanceof v?e:v,a=Object.create(r.prototype),o=new L(i||[]);return a._invoke=function(t,e,n){var i=h;return function(r,a){if(i===p)throw new Error("Generator is already running");if(i===f){if("throw"===r)throw a;return C()}for(n.method=r,n.arg=a;;){var o=n.delegate;if(o){var s=T(o,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var c=u(t,e,n);if("normal"===c.type){if(i=n.done?f:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=f,n.method="throw",n.arg=c.arg)}}}(t,n,o),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",p="executing",f="completed",m={};function v(){}function g(){}function y(){}var x={};x[a]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(R([])));b&&b!==n&&i.call(b,a)&&(x=b);var w=y.prototype=v.prototype=Object.create(x);function M(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(r,a,o,s){var c=u(t[r],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return n("throw",t,o,s)}))}s(c.arg)}var r;this._invoke=function(t,i){function a(){return new e((function(e,r){n(t,i,e,r)}))}return r=r?r.then(a,a):a()}}function T(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=u(i,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,m;var a=r.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function R(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=w.constructor=y,y.constructor=g,g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},M(S.prototype),S.prototype[o]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,i,r,a){void 0===a&&(a=Promise);var o=new S(l(e,n,i,r),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},M(w),c(w,s,"Generator"),w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=R,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(i,r){return s.type="throw",s.arg=t,n.next=i,r&&(n.method="next",n.arg=e),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;A(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:R(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),m}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}var n="125",i=100,r=300,a=301,o=302,s=303,c=304,l=306,u=307,h=1e3,d=1001,p=1002,f=1003,m=1004,v=1005,g=1006,y=1007,x=1008,_=1009,b=1012,w=1014,M=1015,S=1016,T=1020,E=1022,A=1023,L=1026,R=1027,C=33776,P=33777,O=33778,I=33779,D=35840,N=35841,B=35842,z=35843,F=37492,H=37496,G=2300,U=2301,k=2302,V=2400,W=2401,j=2402,q=2500,X=2501,Y=3e3,Z=3001,J=3007,Q=3002,K=3004,$=3005,tt=3006,et=7680,nt=35044,it=35048,rt="300 es";function at(t,e,n,i,r,a,o){try{var s=t[a](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,r)}function ot(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function st(t,e,n){return e&&ot(t.prototype,e),n&&ot(t,n),t}function ct(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function lt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ut(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ht(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ut(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function dt(){}Object.assign(dt.prototype,{addEventListener:function(t,e){void 0===this._listeners&&(this._listeners={});var n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e)},hasEventListener:function(t,e){if(void 0===this._listeners)return!1;var n=this._listeners;return void 0!==n[t]&&-1!==n[t].indexOf(e)},removeEventListener:function(t,e){if(void 0!==this._listeners){var n=this._listeners[t];if(void 0!==n){var i=n.indexOf(e);-1!==i&&n.splice(i,1)}}},dispatchEvent:function(t){if(void 0!==this._listeners){var e=this._listeners[t.type];if(void 0!==e){t.target=this;for(var n=e.slice(0),i=0,r=n.length;i<r;i++)n[i].call(this,t)}}}});for(var pt=[],ft=0;ft<256;ft++)pt[ft]=(ft<16?"0":"")+ft.toString(16);var mt,vt=1234567,gt={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(pt[255&t]+pt[t>>8&255]+pt[t>>16&255]+pt[t>>24&255]+"-"+pt[255&e]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[63&n|128]+pt[n>>8&255]+"-"+pt[n>>16&255]+pt[n>>24&255]+pt[255&i]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},damp:function(t,e,n,i){return gt.lerp(t,e,1-Math.exp(-n*i))},pingpong:function(t,e){return void 0===e&&(e=1),e-Math.abs(gt.euclideanModulo(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return void 0!==t&&(vt=t%2147483647),((vt=16807*vt%2147483647)-1)/2147483646},degToRad:function(t){return t*gt.DEG2RAD},radToDeg:function(t){return t*gt.RAD2DEG},isPowerOfTwo:function(t){return 0==(t&t-1)&&0!==t},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){var a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((e+i)/2),u=o((e+i)/2),h=a((e-i)/2),d=o((e-i)/2),p=a((i-e)/2),f=o((i-e)/2);switch(r){case"XYX":t.set(s*u,c*h,c*d,s*l);break;case"YZY":t.set(c*d,s*u,c*h,s*l);break;case"ZXZ":t.set(c*h,c*d,s*u,s*l);break;case"XZX":t.set(s*u,c*f,c*p,s*l);break;case"YXY":t.set(c*p,s*u,c*f,s*l);break;case"ZYZ":t.set(c*f,c*p,s*u,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}},yt=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),Object.defineProperty(this,"isVector2",{value:!0}),this.x=t,this.y=e}var e=t.prototype;return e.set=function(t,e){return this.x=t,this.y=e,this},e.setScalar=function(t){return this.x=t,this.y=t,this},e.setX=function(t){return this.x=t,this},e.setY=function(t){return this.y=t,this},e.setComponent=function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this},e.getComponent=function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}},e.clone=function(){return new this.constructor(this.x,this.y)},e.copy=function(t){return this.x=t.x,this.y=t.y,this},e.add=function(t,e){return void 0!==e?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)},e.addScalar=function(t){return this.x+=t,this.y+=t,this},e.addVectors=function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this},e.addScaledVector=function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this},e.sub=function(t,e){return void 0!==e?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)},e.subScalar=function(t){return this.x-=t,this.y-=t,this},e.subVectors=function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this},e.multiply=function(t){return this.x*=t.x,this.y*=t.y,this},e.multiplyScalar=function(t){return this.x*=t,this.y*=t,this},e.divide=function(t){return this.x/=t.x,this.y/=t.y,this},e.divideScalar=function(t){return this.multiplyScalar(1/t)},e.applyMatrix3=function(t){var e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this},e.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},e.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},e.clamp=function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this},e.clampScalar=function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this},e.clampLength=function(t,e){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))},e.floor=function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},e.ceil=function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},e.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},e.roundToZero=function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},e.negate=function(){return this.x=-this.x,this.y=-this.y,this},e.dot=function(t){return this.x*t.x+this.y*t.y},e.cross=function(t){return this.x*t.y-this.y*t.x},e.lengthSq=function(){return this.x*this.x+this.y*this.y},e.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},e.manhattanLength=function(){return Math.abs(this.x)+Math.abs(this.y)},e.normalize=function(){return this.divideScalar(this.length()||1)},e.angle=function(){var t=Math.atan2(-this.y,-this.x)+Math.PI;return t},e.distanceTo=function(t){return Math.sqrt(this.distanceToSquared(t))},e.distanceToSquared=function(t){var e=this.x-t.x,n=this.y-t.y;return e*e+n*n},e.manhattanDistanceTo=function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},e.setLength=function(t){return this.normalize().multiplyScalar(t)},e.lerp=function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this},e.lerpVectors=function(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this},e.equals=function(t){return t.x===this.x&&t.y===this.y},e.fromArray=function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this},e.toArray=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t},e.fromBufferAttribute=function(t,e,n){return void 0!==n&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this},e.rotateAround=function(t,e){var n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this},e.random=function(){return this.x=Math.random(),this.y=Math.random(),this},st(t,[{key:"width",get:function(){return this.x},set:function(t){this.x=t}},{key:"height",get:function(){return this.y},set:function(t){this.y=t}}]),t}(),xt=function(){function t(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}var e=t.prototype;return e.set=function(t,e,n,i,r,a,o,s,c){var l=this.elements;return l[0]=t,l[1]=i,l[2]=o,l[3]=e,l[4]=r,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this},e.identity=function(){return this.set(1,0,0,0,1,0,0,0,1),this},e.clone=function(){return(new this.constructor).fromArray(this.elements)},e.copy=function(t){var e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this},e.extractBasis=function(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this},e.setFromMatrix4=function(t){var e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this},e.multiply=function(t){return this.multiplyMatrices(this,t)},e.premultiply=function(t){return this.multiplyMatrices(t,this)},e.multiplyMatrices=function(t,e){var n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],h=n[2],d=n[5],p=n[8],f=i[0],m=i[3],v=i[6],g=i[1],y=i[4],x=i[7],_=i[2],b=i[5],w=i[8];return r[0]=a*f+o*g+s*_,r[3]=a*m+o*y+s*b,r[6]=a*v+o*x+s*w,r[1]=c*f+l*g+u*_,r[4]=c*m+l*y+u*b,r[7]=c*v+l*x+u*w,r[2]=h*f+d*g+p*_,r[5]=h*m+d*y+p*b,r[8]=h*v+d*x+p*w,this},e.multiplyScalar=function(t){var e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this},e.determinant=function(){var t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8];return e*a*l-e*o*c-n*r*l+n*o*s+i*r*c-i*a*s},e.invert=function(){var t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=l*a-o*c,h=o*s-l*r,d=c*r-a*s,p=e*u+n*h+i*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);var f=1/p;return t[0]=u*f,t[1]=(i*c-l*n)*f,t[2]=(o*n-i*a)*f,t[3]=h*f,t[4]=(l*e-i*s)*f,t[5]=(i*r-o*e)*f,t[6]=d*f,t[7]=(n*s-c*e)*f,t[8]=(a*e-n*r)*f,this},e.transpose=function(){var t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},e.getNormalMatrix=function(t){return this.setFromMatrix4(t).copy(this).invert().transpose()},e.transposeIntoArray=function(t){var e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this},e.setUvTransform=function(t,e,n,i,r,a,o){var s=Math.cos(r),c=Math.sin(r);return this.set(n*s,n*c,-n*(s*a+c*o)+a+t,-i*c,i*s,-i*(-c*a+s*o)+o+e,0,0,1),this},e.scale=function(t,e){var n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this},e.rotate=function(t){var e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],a=i[3],o=i[6],s=i[1],c=i[4],l=i[7];return i[0]=e*r+n*s,i[3]=e*a+n*c,i[6]=e*o+n*l,i[1]=-n*r+e*s,i[4]=-n*a+e*c,i[7]=-n*o+e*l,this},e.translate=function(t,e){var n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this},e.equals=function(t){for(var e=this.elements,n=t.elements,i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0},e.fromArray=function(t,e){void 0===e&&(e=0);for(var n=0;n<9;n++)this.elements[n]=t[n+e];return this},e.toArray=function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);var n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t},t}(),_t={getDataURL:function(t){if(/^data:/i.test(t.src))return t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;var e;if(t instanceof HTMLCanvasElement)e=t;else{void 0===mt&&(mt=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),mt.width=t.width,mt.height=t.height;var n=mt.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mt}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}},bt=0;function wt(t,e,n,i,r,a,o,s,c,l){void 0===t&&(t=wt.DEFAULT_IMAGE),void 0===e&&(e=wt.DEFAULT_MAPPING),void 0===n&&(n=d),void 0===i&&(i=d),void 0===r&&(r=g),void 0===a&&(a=x),void 0===o&&(o=A),void 0===s&&(s=_),void 0===c&&(c=1),void 0===l&&(l=Y),Object.defineProperty(this,"id",{value:bt++}),this.uuid=gt.generateUUID(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=s,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}function Mt(t){return"undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?_t.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}wt.DEFAULT_IMAGE=void 0,wt.DEFAULT_MAPPING=r,wt.prototype=Object.assign(Object.create(dt.prototype),{constructor:wt,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){var e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];var n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var i=this.image;if(void 0===i.uuid&&(i.uuid=gt.generateUUID()),!e&&void 0===t.images[i.uuid]){var r;if(Array.isArray(i)){r=[];for(var a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Mt(i[a].image)):r.push(Mt(i[a]))}else r=Mt(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==r)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case h:t.x=t.x-Math.floor(t.x);break;case d:t.x=t.x<0?0:1;break;case p:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case h:t.y=t.y-Math.floor(t.y);break;case d:t.y=t.y<0?0:1;break;case p:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}}),Object.defineProperty(wt.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}});var St=function(){function t(t,e,n,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),void 0===i&&(i=1),Object.defineProperty(this,"isVector4",{value:!0}),this.x=t,this.y=e,this.z=n,this.w=i}var e=t.prototype;return e.set=function(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this},e.setScalar=function(t){return this.x=t,this.y=t,this.z=t,this.w=t,this},e.setX=function(t){return this.x=t,this},e.setY=function(t){return this.y=t,this},e.setZ=function(t){return this.z=t,this},e.setW=function(t){return this.w=t,this},e.setComponent=function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this},e.getComponent=function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}},e.clone=function(){return new this.constructor(this.x,this.y,this.z,this.w)},e.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this},e.add=function(t,e){return void 0!==e?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)},e.addScalar=function(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this},e.addVectors=function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this},e.addScaledVector=function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this},e.sub=function(t,e){return void 0!==e?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)},e.subScalar=function(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this},e.subVectors=function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this},e.multiply=function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this},e.multiplyScalar=function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},e.applyMatrix4=function(t){var e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this},e.divideScalar=function(t){return this.multiplyScalar(1/t)},e.setAxisAngleFromQuaternion=function(t){this.w=2*Math.acos(t.w);var e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this},e.setAxisAngleFromRotationMatrix=function(t){var e,n,i,r,a=.01,o=.1,s=t.elements,c=s[0],l=s[4],u=s[8],h=s[1],d=s[5],p=s[9],f=s[2],m=s[6],v=s[10];if(Math.abs(l-h)<a&&Math.abs(u-f)<a&&Math.abs(p-m)<a){if(Math.abs(l+h)<o&&Math.abs(u+f)<o&&Math.abs(p+m)<o&&Math.abs(c+d+v-3)<o)return this.set(1,0,0,0),this;e=Math.PI;var g=(c+1)/2,y=(d+1)/2,x=(v+1)/2,_=(l+h)/4,b=(u+f)/4,w=(p+m)/4;return g>y&&g>x?g<a?(n=0,i=.707106781,r=.707106781):(i=_/(n=Math.sqrt(g)),r=b/n):y>x?y<a?(n=.707106781,i=0,r=.707106781):(n=_/(i=Math.sqrt(y)),r=w/i):x<a?(n=.707106781,i=.707106781,r=0):(n=b/(r=Math.sqrt(x)),i=w/r),this.set(n,i,r,e),this}var M=Math.sqrt((m-p)*(m-p)+(u-f)*(u-f)+(h-l)*(h-l));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-f)/M,this.z=(h-l)/M,this.w=Math.acos((c+d+v-1)/2),this},e.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this},e.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this},e.clamp=function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this},e.clampScalar=function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this},e.clampLength=function(t,e){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))},e.floor=function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},e.ceil=function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},e.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},e.roundToZero=function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},e.negate=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},e.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},e.lengthSq=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},e.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.manhattanLength=function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},e.normalize=function(){return this.divideScalar(this.length()||1)},e.setLength=function(t){return this.normalize().multiplyScalar(t)},e.lerp=function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this},e.lerpVectors=function(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this},e.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w},e.fromArray=function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this},e.toArray=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t},e.fromBufferAttribute=function(t,e,n){return void 0!==n&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this},e.random=function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this},st(t,[{key:"width",get:function(){return this.z},set:function(t){this.z=t}},{key:"height",get:function(){return this.w},set:function(t){this.w=t}}]),t}(),Tt=function(t){function e(e,n,i){var r;return r=t.call(this)||this,Object.defineProperty(lt(r),"isWebGLRenderTarget",{value:!0}),r.width=e,r.height=n,r.scissor=new St(0,0,e,n),r.scissorTest=!1,r.viewport=new St(0,0,e,n),i=i||{},r.texture=new wt(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),r.texture.image={},r.texture.image.width=e,r.texture.image.height=n,r.texture.generateMipmaps=void 0!==i.generateMipmaps&&i.generateMipmaps,r.texture.minFilter=void 0!==i.minFilter?i.minFilter:g,r.depthBuffer=void 0===i.depthBuffer||i.depthBuffer,r.stencilBuffer=void 0!==i.stencilBuffer&&i.stencilBuffer,r.depthTexture=void 0!==i.depthTexture?i.depthTexture:null,r}ct(e,t);var n=e.prototype;return n.setSize=function(t,e){this.width===t&&this.height===e||(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},n.clone=function(){return(new this.constructor).copy(this)},n.copy=function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},n.dispose=function(){this.dispatchEvent({type:"dispose"})},e}(dt),Et=function(t){function e(e,n,i){var r;return r=t.call(this,e,n,i)||this,Object.defineProperty(lt(r),"isWebGLMultisampleRenderTarget",{value:!0}),r.samples=4,r}return ct(e,t),e.prototype.copy=function(e){return t.prototype.copy.call(this,e),this.samples=e.samples,this},e}(Tt),At=function(){function t(t,e,n,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),void 0===i&&(i=1),Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=t,this._y=e,this._z=n,this._w=i}t.slerp=function(t,e,n,i){return n.copy(t).slerp(e,i)},t.slerpFlat=function(t,e,n,i,r,a,o){var s=n[i+0],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a+0],d=r[a+1],p=r[a+2],f=r[a+3];if(u!==f||s!==h||c!==d||l!==p){var m=1-o,v=s*h+c*d+l*p+u*f,g=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){var x=Math.sqrt(y),_=Math.atan2(x,v*g);m=Math.sin(m*_)/x,o=Math.sin(o*_)/x}var b=o*g;if(s=s*m+h*b,c=c*m+d*b,l=l*m+p*b,u=u*m+f*b,m===1-o){var w=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=w,c*=w,l*=w,u*=w}}t[e]=s,t[e+1]=c,t[e+2]=l,t[e+3]=u},t.multiplyQuaternionsFlat=function(t,e,n,i,r,a){var o=n[i],s=n[i+1],c=n[i+2],l=n[i+3],u=r[a],h=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+l*u+s*d-c*h,t[e+1]=s*p+l*h+c*u-o*d,t[e+2]=c*p+l*d+o*h-s*u,t[e+3]=l*p-o*u-s*h-c*d,t};var e=t.prototype;return e.set=function(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this},e.clone=function(){return new this.constructor(this._x,this._y,this._z,this._w)},e.copy=function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this},e.setFromEuler=function(t,e){if(!t||!t.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(i/2),u=o(r/2),h=s(n/2),d=s(i/2),p=s(r/2);switch(a){case"XYZ":this._x=h*l*u+c*d*p,this._y=c*d*u-h*l*p,this._z=c*l*p+h*d*u,this._w=c*l*u-h*d*p;break;case"YXZ":this._x=h*l*u+c*d*p,this._y=c*d*u-h*l*p,this._z=c*l*p-h*d*u,this._w=c*l*u+h*d*p;break;case"ZXY":this._x=h*l*u-c*d*p,this._y=c*d*u+h*l*p,this._z=c*l*p+h*d*u,this._w=c*l*u-h*d*p;break;case"ZYX":this._x=h*l*u-c*d*p,this._y=c*d*u+h*l*p,this._z=c*l*p-h*d*u,this._w=c*l*u+h*d*p;break;case"YZX":this._x=h*l*u+c*d*p,this._y=c*d*u+h*l*p,this._z=c*l*p-h*d*u,this._w=c*l*u-h*d*p;break;case"XZY":this._x=h*l*u-c*d*p,this._y=c*d*u-h*l*p,this._z=c*l*p+h*d*u,this._w=c*l*u+h*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return!1!==e&&this._onChangeCallback(),this},e.setFromAxisAngle=function(t,e){var n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this},e.setFromRotationMatrix=function(t){var e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],s=e[9],c=e[2],l=e[6],u=e[10],h=n+o+u;if(h>0){var d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(l-s)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){var p=2*Math.sqrt(1+n-o-u);this._w=(l-s)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){var f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(s+l)/f}else{var m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(s+l)/m,this._z=.25*m}return this._onChangeCallback(),this},e.setFromUnitVectors=function(t,e){var n=t.dot(e)+1;return n<1e-6?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()},e.angleTo=function(t){return 2*Math.acos(Math.abs(gt.clamp(this.dot(t),-1,1)))},e.rotateTowards=function(t,e){var n=this.angleTo(t);if(0===n)return this;var i=Math.min(1,e/n);return this.slerp(t,i),this},e.identity=function(){return this.set(0,0,0,1)},e.invert=function(){return this.conjugate()},e.conjugate=function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},e.dot=function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},e.lengthSq=function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},e.length=function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},e.normalize=function(){var t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this},e.multiply=function(t,e){return void 0!==e?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)},e.premultiply=function(t){return this.multiplyQuaternions(t,this)},e.multiplyQuaternions=function(t,e){var n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,s=e._y,c=e._z,l=e._w;return this._x=n*l+a*o+i*c-r*s,this._y=i*l+a*s+r*o-n*c,this._z=r*l+a*c+n*s-i*o,this._w=a*l-n*o-i*s-r*c,this._onChangeCallback(),this},e.slerp=function(t,e){if(0===e)return this;if(1===e)return this.copy(t);var n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;var s=1-o*o;if(s<=Number.EPSILON){var c=1-e;return this._w=c*a+e*this._w,this._x=c*n+e*this._x,this._y=c*i+e*this._y,this._z=c*r+e*this._z,this.normalize(),this._onChangeCallback(),this}var l=Math.sqrt(s),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this},e.equals=function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},e.fromArray=function(t,e){return void 0===e&&(e=0),this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this},e.toArray=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t},e.fromBufferAttribute=function(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this},e._onChange=function(t){return this._onChangeCallback=t,this},e._onChangeCallback=function(){},st(t,[{key:"x",get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},{key:"y",get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},{key:"z",get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},{key:"w",get:function(){return this._w},set:function(t){this._w=t,this._onChangeCallback()}}]),t}(),Lt=function(){function t(t,e,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),Object.defineProperty(this,"isVector3",{value:!0}),this.x=t,this.y=e,this.z=n}var e=t.prototype;return e.set=function(t,e,n){return void 0===n&&(n=this.z),this.x=t,this.y=e,this.z=n,this},e.setScalar=function(t){return this.x=t,this.y=t,this.z=t,this},e.setX=function(t){return this.x=t,this},e.setY=function(t){return this.y=t,this},e.setZ=function(t){return this.z=t,this},e.setComponent=function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this},e.getComponent=function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},e.clone=function(){return new this.constructor(this.x,this.y,this.z)},e.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},e.add=function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},e.addScalar=function(t){return this.x+=t,this.y+=t,this.z+=t,this},e.addVectors=function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this},e.addScaledVector=function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this},e.sub=function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},e.subScalar=function(t){return this.x-=t,this.y-=t,this.z-=t,this},e.subVectors=function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this},e.multiply=function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},e.multiplyScalar=function(t){return this.x*=t,this.y*=t,this.z*=t,this},e.multiplyVectors=function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this},e.applyEuler=function(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ct.setFromEuler(t))},e.applyAxisAngle=function(t,e){return this.applyQuaternion(Ct.setFromAxisAngle(t,e))},e.applyMatrix3=function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this},e.applyNormalMatrix=function(t){return this.applyMatrix3(t).normalize()},e.applyMatrix4=function(t){var e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this},e.applyQuaternion=function(t){var e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,s=t.w,c=s*e+a*i-o*n,l=s*n+o*e-r*i,u=s*i+r*n-a*e,h=-r*e-a*n-o*i;return this.x=c*s+h*-r+l*-o-u*-a,this.y=l*s+h*-a+u*-r-c*-o,this.z=u*s+h*-o+c*-a-l*-r,this},e.project=function(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)},e.unproject=function(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)},e.transformDirection=function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()},e.divide=function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},e.divideScalar=function(t){return this.multiplyScalar(1/t)},e.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},e.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},e.clamp=function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this},e.clampScalar=function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this},e.clampLength=function(t,e){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))},e.floor=function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},e.ceil=function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},e.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},e.roundToZero=function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},e.negate=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},e.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},e.lengthSq=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},e.manhattanLength=function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},e.normalize=function(){return this.divideScalar(this.length()||1)},e.setLength=function(t){return this.normalize().multiplyScalar(t)},e.lerp=function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this},e.lerpVectors=function(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this},e.cross=function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)},e.crossVectors=function(t,e){var n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,s=e.z;return this.x=i*s-r*o,this.y=r*a-n*s,this.z=n*o-i*a,this},e.projectOnVector=function(t){var e=t.lengthSq();if(0===e)return this.set(0,0,0);var n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)},e.projectOnPlane=function(t){return Rt.copy(this).projectOnVector(t),this.sub(Rt)},e.reflect=function(t){return this.sub(Rt.copy(t).multiplyScalar(2*this.dot(t)))},e.angleTo=function(t){var e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;var n=this.dot(t)/e;return Math.acos(gt.clamp(n,-1,1))},e.distanceTo=function(t){return Math.sqrt(this.distanceToSquared(t))},e.distanceToSquared=function(t){var e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i},e.manhattanDistanceTo=function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},e.setFromSpherical=function(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)},e.setFromSphericalCoords=function(t,e,n){var i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this},e.setFromCylindrical=function(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)},e.setFromCylindricalCoords=function(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this},e.setFromMatrixPosition=function(t){var e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this},e.setFromMatrixScale=function(t){var e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this},e.setFromMatrixColumn=function(t,e){return this.fromArray(t.elements,4*e)},e.setFromMatrix3Column=function(t,e){return this.fromArray(t.elements,3*e)},e.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},e.fromArray=function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this},e.toArray=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t},e.fromBufferAttribute=function(t,e,n){return void 0!==n&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this},e.random=function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this},t}(),Rt=new Lt,Ct=new At,Pt=function(){function t(t,e){Object.defineProperty(this,"isBox3",{value:!0}),this.min=void 0!==t?t:new Lt(1/0,1/0,1/0),this.max=void 0!==e?e:new Lt(-1/0,-1/0,-1/0)}var e=t.prototype;return e.set=function(t,e){return this.min.copy(t),this.max.copy(e),this},e.setFromArray=function(t){for(var e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0,s=0,c=t.length;s<c;s+=3){var l=t[s],u=t[s+1],h=t[s+2];l<e&&(e=l),u<n&&(n=u),h<i&&(i=h),l>r&&(r=l),u>a&&(a=u),h>o&&(o=h)}return this.min.set(e,n,i),this.max.set(r,a,o),this},e.setFromBufferAttribute=function(t){for(var e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0,s=0,c=t.count;s<c;s++){var l=t.getX(s),u=t.getY(s),h=t.getZ(s);l<e&&(e=l),u<n&&(n=u),h<i&&(i=h),l>r&&(r=l),u>a&&(a=u),h>o&&(o=h)}return this.min.set(e,n,i),this.max.set(r,a,o),this},e.setFromPoints=function(t){this.makeEmpty();for(var e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},e.setFromCenterAndSize=function(t,e){var n=Dt.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this},e.setFromObject=function(t){return this.makeEmpty(),this.expandByObject(t)},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){return this.min.copy(t.min),this.max.copy(t.max),this},e.makeEmpty=function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},e.isEmpty=function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},e.getCenter=function(t){return void 0===t&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new Lt),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},e.getSize=function(t){return void 0===t&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new Lt),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)},e.expandByPoint=function(t){return this.min.min(t),this.max.max(t),this},e.expandByVector=function(t){return this.min.sub(t),this.max.add(t),this},e.expandByScalar=function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},e.expandByObject=function(t){t.updateWorldMatrix(!1,!1);var e=t.geometry;void 0!==e&&(null===e.boundingBox&&e.computeBoundingBox(),Nt.copy(e.boundingBox),Nt.applyMatrix4(t.matrixWorld),this.union(Nt));for(var n=t.children,i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this},e.containsPoint=function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)},e.containsBox=function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z},e.getParameter=function(t,e){return void 0===e&&(console.warn("THREE.Box3: .getParameter() target is now required"),e=new Lt),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))},e.intersectsBox=function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},e.intersectsSphere=function(t){return this.clampPoint(t.center,Dt),Dt.distanceToSquared(t.center)<=t.radius*t.radius},e.intersectsPlane=function(t){var e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant},e.intersectsTriangle=function(t){if(this.isEmpty())return!1;this.getCenter(kt),Vt.subVectors(this.max,kt),Bt.subVectors(t.a,kt),zt.subVectors(t.b,kt),Ft.subVectors(t.c,kt),Ht.subVectors(zt,Bt),Gt.subVectors(Ft,zt),Ut.subVectors(Bt,Ft);var e=[0,-Ht.z,Ht.y,0,-Gt.z,Gt.y,0,-Ut.z,Ut.y,Ht.z,0,-Ht.x,Gt.z,0,-Gt.x,Ut.z,0,-Ut.x,-Ht.y,Ht.x,0,-Gt.y,Gt.x,0,-Ut.y,Ut.x,0];return!!Ot(e,Bt,zt,Ft,Vt)&&(!!Ot(e=[1,0,0,0,1,0,0,0,1],Bt,zt,Ft,Vt)&&(Wt.crossVectors(Ht,Gt),Ot(e=[Wt.x,Wt.y,Wt.z],Bt,zt,Ft,Vt)))},e.clampPoint=function(t,e){return void 0===e&&(console.warn("THREE.Box3: .clampPoint() target is now required"),e=new Lt),e.copy(t).clamp(this.min,this.max)},e.distanceToPoint=function(t){return Dt.copy(t).clamp(this.min,this.max).sub(t).length()},e.getBoundingSphere=function(t){return void 0===t&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=.5*this.getSize(Dt).length(),t},e.intersect=function(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this},e.union=function(t){return this.min.min(t.min),this.max.max(t.max),this},e.applyMatrix4=function(t){return this.isEmpty()||(It[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),It[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),It[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),It[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),It[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),It[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),It[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),It[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(It)),this},e.translate=function(t){return this.min.add(t),this.max.add(t),this},e.equals=function(t){return t.min.equals(this.min)&&t.max.equals(this.max)},t}();function Ot(t,e,n,i,r){for(var a=0,o=t.length-3;a<=o;a+=3){jt.fromArray(t,a);var s=r.x*Math.abs(jt.x)+r.y*Math.abs(jt.y)+r.z*Math.abs(jt.z),c=e.dot(jt),l=n.dot(jt),u=i.dot(jt);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}var It=[new Lt,new Lt,new Lt,new Lt,new Lt,new Lt,new Lt,new Lt],Dt=new Lt,Nt=new Pt,Bt=new Lt,zt=new Lt,Ft=new Lt,Ht=new Lt,Gt=new Lt,Ut=new Lt,kt=new Lt,Vt=new Lt,Wt=new Lt,jt=new Lt,qt=new Pt,Xt=function(){function t(t,e){this.center=void 0!==t?t:new Lt,this.radius=void 0!==e?e:-1}var e=t.prototype;return e.set=function(t,e){return this.center.copy(t),this.radius=e,this},e.setFromPoints=function(t,e){var n=this.center;void 0!==e?n.copy(e):qt.setFromPoints(t).getCenter(n);for(var i=0,r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){return this.center.copy(t.center),this.radius=t.radius,this},e.isEmpty=function(){return this.radius<0},e.makeEmpty=function(){return this.center.set(0,0,0),this.radius=-1,this},e.containsPoint=function(t){return t.distanceToSquared(this.center)<=this.radius*this.radius},e.distanceToPoint=function(t){return t.distanceTo(this.center)-this.radius},e.intersectsSphere=function(t){var e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e},e.intersectsBox=function(t){return t.intersectsSphere(this)},e.intersectsPlane=function(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius},e.clampPoint=function(t,e){var n=this.center.distanceToSquared(t);return void 0===e&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),e=new Lt),e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e},e.getBoundingBox=function(t){return void 0===t&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new Pt),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)},e.applyMatrix4=function(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this},e.translate=function(t){return this.center.add(t),this},e.equals=function(t){return t.center.equals(this.center)&&t.radius===this.radius},t}(),Yt=new Lt,Zt=new Lt,Jt=new Lt,Qt=new Lt,Kt=new Lt,$t=new Lt,te=new Lt,ee=function(){function t(t,e){this.origin=void 0!==t?t:new Lt,this.direction=void 0!==e?e:new Lt(0,0,-1)}var e=t.prototype;return e.set=function(t,e){return this.origin.copy(t),this.direction.copy(e),this},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},e.at=function(t,e){return void 0===e&&(console.warn("THREE.Ray: .at() target is now required"),e=new Lt),e.copy(this.direction).multiplyScalar(t).add(this.origin)},e.lookAt=function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},e.recast=function(t){return this.origin.copy(this.at(t,Yt)),this},e.closestPointToPoint=function(t,e){void 0===e&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),e=new Lt),e.subVectors(t,this.origin);var n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)},e.distanceToPoint=function(t){return Math.sqrt(this.distanceSqToPoint(t))},e.distanceSqToPoint=function(t){var e=Yt.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yt.copy(this.direction).multiplyScalar(e).add(this.origin),Yt.distanceToSquared(t))},e.distanceSqToSegment=function(t,e,n,i){Zt.copy(t).add(e).multiplyScalar(.5),Jt.copy(e).sub(t).normalize(),Qt.copy(this.origin).sub(Zt);var r,a,o,s,c=.5*t.distanceTo(e),l=-this.direction.dot(Jt),u=Qt.dot(this.direction),h=-Qt.dot(Jt),d=Qt.lengthSq(),p=Math.abs(1-l*l);if(p>0)if(a=l*u-h,s=c*p,(r=l*h-u)>=0)if(a>=-s)if(a<=s){var f=1/p;o=(r*=f)*(r+l*(a*=f)+2*u)+a*(l*r+a+2*h)+d}else a=c,o=-(r=Math.max(0,-(l*a+u)))*r+a*(a+2*h)+d;else a=-c,o=-(r=Math.max(0,-(l*a+u)))*r+a*(a+2*h)+d;else a<=-s?o=-(r=Math.max(0,-(-l*c+u)))*r+(a=r>0?-c:Math.min(Math.max(-c,-h),c))*(a+2*h)+d:a<=s?(r=0,o=(a=Math.min(Math.max(-c,-h),c))*(a+2*h)+d):o=-(r=Math.max(0,-(l*c+u)))*r+(a=r>0?c:Math.min(Math.max(-c,-h),c))*(a+2*h)+d;else a=l>0?-c:c,o=-(r=Math.max(0,-(l*a+u)))*r+a*(a+2*h)+d;return n&&n.copy(this.direction).multiplyScalar(r).add(this.origin),i&&i.copy(Jt).multiplyScalar(a).add(Zt),o},e.intersectSphere=function(t,e){Yt.subVectors(t.center,this.origin);var n=Yt.dot(this.direction),i=Yt.dot(Yt)-n*n,r=t.radius*t.radius;if(i>r)return null;var a=Math.sqrt(r-i),o=n-a,s=n+a;return o<0&&s<0?null:o<0?this.at(s,e):this.at(o,e)},e.intersectsSphere=function(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius},e.distanceToPlane=function(t){var e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;var n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null},e.intersectPlane=function(t,e){var n=this.distanceToPlane(t);return null===n?null:this.at(n,e)},e.intersectsPlane=function(t){var e=t.distanceToPoint(this.origin);return 0===e||t.normal.dot(this.direction)*e<0},e.intersectBox=function(t,e){var n,i,r,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),l>=0?(r=(t.min.y-h.y)*l,a=(t.max.y-h.y)*l):(r=(t.max.y-h.y)*l,a=(t.min.y-h.y)*l),n>a||r>i?null:((r>n||n!=n)&&(n=r),(a<i||i!=i)&&(i=a),u>=0?(o=(t.min.z-h.z)*u,s=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,s=(t.min.z-h.z)*u),n>s||o>i?null:((o>n||n!=n)&&(n=o),(s<i||i!=i)&&(i=s),i<0?null:this.at(n>=0?n:i,e)))},e.intersectsBox=function(t){return null!==this.intersectBox(t,Yt)},e.intersectTriangle=function(t,e,n,i,r){Kt.subVectors(e,t),$t.subVectors(n,t),te.crossVectors(Kt,$t);var a,o=this.direction.dot(te);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Qt.subVectors(this.origin,t);var s=a*this.direction.dot($t.crossVectors(Qt,$t));if(s<0)return null;var c=a*this.direction.dot(Kt.cross(Qt));if(c<0)return null;if(s+c>o)return null;var l=-a*Qt.dot(te);return l<0?null:this.at(l/o,r)},e.applyMatrix4=function(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this},e.equals=function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)},t}(),ne=function(){function t(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}var e=t.prototype;return e.set=function(t,e,n,i,r,a,o,s,c,l,u,h,d,p,f,m){var v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=r,v[5]=a,v[9]=o,v[13]=s,v[2]=c,v[6]=l,v[10]=u,v[14]=h,v[3]=d,v[7]=p,v[11]=f,v[15]=m,this},e.identity=function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},e.clone=function(){return(new t).fromArray(this.elements)},e.copy=function(t){var e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this},e.copyPosition=function(t){var e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this},e.setFromMatrix3=function(t){var e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this},e.extractBasis=function(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},e.makeBasis=function(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this},e.extractRotation=function(t){var e=this.elements,n=t.elements,i=1/ie.setFromMatrixColumn(t,0).length(),r=1/ie.setFromMatrixColumn(t,1).length(),a=1/ie.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},e.makeRotationFromEuler=function(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(i),c=Math.sin(i),l=Math.cos(r),u=Math.sin(r);if("XYZ"===t.order){var h=a*l,d=a*u,p=o*l,f=o*u;e[0]=s*l,e[4]=-s*u,e[8]=c,e[1]=d+p*c,e[5]=h-f*c,e[9]=-o*s,e[2]=f-h*c,e[6]=p+d*c,e[10]=a*s}else if("YXZ"===t.order){var m=s*l,v=s*u,g=c*l,y=c*u;e[0]=m+y*o,e[4]=g*o-v,e[8]=a*c,e[1]=a*u,e[5]=a*l,e[9]=-o,e[2]=v*o-g,e[6]=y+m*o,e[10]=a*s}else if("ZXY"===t.order){var x=s*l,_=s*u,b=c*l,w=c*u;e[0]=x-w*o,e[4]=-a*u,e[8]=b+_*o,e[1]=_+b*o,e[5]=a*l,e[9]=w-x*o,e[2]=-a*c,e[6]=o,e[10]=a*s}else if("ZYX"===t.order){var M=a*l,S=a*u,T=o*l,E=o*u;e[0]=s*l,e[4]=T*c-S,e[8]=M*c+E,e[1]=s*u,e[5]=E*c+M,e[9]=S*c-T,e[2]=-c,e[6]=o*s,e[10]=a*s}else if("YZX"===t.order){var A=a*s,L=a*c,R=o*s,C=o*c;e[0]=s*l,e[4]=C-A*u,e[8]=R*u+L,e[1]=u,e[5]=a*l,e[9]=-o*l,e[2]=-c*l,e[6]=L*u+R,e[10]=A-C*u}else if("XZY"===t.order){var P=a*s,O=a*c,I=o*s,D=o*c;e[0]=s*l,e[4]=-u,e[8]=c*l,e[1]=P*u+D,e[5]=a*l,e[9]=O*u-I,e[2]=I*u-O,e[6]=o*l,e[10]=D*u+P}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},e.makeRotationFromQuaternion=function(t){return this.compose(ae,t,oe)},e.lookAt=function(t,e,n){var i=this.elements;return le.subVectors(t,e),0===le.lengthSq()&&(le.z=1),le.normalize(),se.crossVectors(n,le),0===se.lengthSq()&&(1===Math.abs(n.z)?le.x+=1e-4:le.z+=1e-4,le.normalize(),se.crossVectors(n,le)),se.normalize(),ce.crossVectors(le,se),i[0]=se.x,i[4]=ce.x,i[8]=le.x,i[1]=se.y,i[5]=ce.y,i[9]=le.y,i[2]=se.z,i[6]=ce.z,i[10]=le.z,this},e.multiply=function(t,e){return void 0!==e?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)},e.premultiply=function(t){return this.multiplyMatrices(t,this)},e.multiplyMatrices=function(t,e){var n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],h=n[9],d=n[13],p=n[2],f=n[6],m=n[10],v=n[14],g=n[3],y=n[7],x=n[11],_=n[15],b=i[0],w=i[4],M=i[8],S=i[12],T=i[1],E=i[5],A=i[9],L=i[13],R=i[2],C=i[6],P=i[10],O=i[14],I=i[3],D=i[7],N=i[11],B=i[15];return r[0]=a*b+o*T+s*R+c*I,r[4]=a*w+o*E+s*C+c*D,r[8]=a*M+o*A+s*P+c*N,r[12]=a*S+o*L+s*O+c*B,r[1]=l*b+u*T+h*R+d*I,r[5]=l*w+u*E+h*C+d*D,r[9]=l*M+u*A+h*P+d*N,r[13]=l*S+u*L+h*O+d*B,r[2]=p*b+f*T+m*R+v*I,r[6]=p*w+f*E+m*C+v*D,r[10]=p*M+f*A+m*P+v*N,r[14]=p*S+f*L+m*O+v*B,r[3]=g*b+y*T+x*R+_*I,r[7]=g*w+y*E+x*C+_*D,r[11]=g*M+y*A+x*P+_*N,r[15]=g*S+y*L+x*O+_*B,this},e.multiplyScalar=function(t){var e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this},e.determinant=function(){var t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],s=t[9],c=t[13],l=t[2],u=t[6],h=t[10],d=t[14];return t[3]*(+r*s*u-i*c*u-r*o*h+n*c*h+i*o*d-n*s*d)+t[7]*(+e*s*d-e*c*h+r*a*h-i*a*d+i*c*l-r*s*l)+t[11]*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*l-n*c*l)+t[15]*(-i*o*l-e*s*u+e*o*h+i*a*u-n*a*h+n*s*l)},e.transpose=function(){var t,e=this.elements;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},e.setPosition=function(t,e,n){var i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this},e.invert=function(){var t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],h=t[10],d=t[11],p=t[12],f=t[13],m=t[14],v=t[15],g=u*m*c-f*h*c+f*s*d-o*m*d-u*s*v+o*h*v,y=p*h*c-l*m*c-p*s*d+a*m*d+l*s*v-a*h*v,x=l*f*c-p*u*c+p*o*d-a*f*d-l*o*v+a*u*v,_=p*u*s-l*f*s-p*o*h+a*f*h+l*o*m-a*u*m,b=e*g+n*y+i*x+r*_;if(0===b)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);var w=1/b;return t[0]=g*w,t[1]=(f*h*r-u*m*r-f*i*d+n*m*d+u*i*v-n*h*v)*w,t[2]=(o*m*r-f*s*r+f*i*c-n*m*c-o*i*v+n*s*v)*w,t[3]=(u*s*r-o*h*r-u*i*c+n*h*c+o*i*d-n*s*d)*w,t[4]=y*w,t[5]=(l*m*r-p*h*r+p*i*d-e*m*d-l*i*v+e*h*v)*w,t[6]=(p*s*r-a*m*r-p*i*c+e*m*c+a*i*v-e*s*v)*w,t[7]=(a*h*r-l*s*r+l*i*c-e*h*c-a*i*d+e*s*d)*w,t[8]=x*w,t[9]=(p*u*r-l*f*r-p*n*d+e*f*d+l*n*v-e*u*v)*w,t[10]=(a*f*r-p*o*r+p*n*c-e*f*c-a*n*v+e*o*v)*w,t[11]=(l*o*r-a*u*r-l*n*c+e*u*c+a*n*d-e*o*d)*w,t[12]=_*w,t[13]=(l*f*i-p*u*i+p*n*h-e*f*h-l*n*m+e*u*m)*w,t[14]=(p*o*i-a*f*i-p*n*s+e*f*s+a*n*m-e*o*m)*w,t[15]=(a*u*i-l*o*i+l*n*s-e*u*s-a*n*h+e*o*h)*w,this},e.scale=function(t){var e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this},e.getMaxScaleOnAxis=function(){var t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))},e.makeTranslation=function(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this},e.makeRotationX=function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this},e.makeRotationY=function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this},e.makeRotationZ=function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this},e.makeRotationAxis=function(t,e){var n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,s=t.z,c=r*a,l=r*o;return this.set(c*a+n,c*o-i*s,c*s+i*o,0,c*o+i*s,l*o+n,l*s-i*a,0,c*s-i*o,l*s+i*a,r*s*s+n,0,0,0,0,1),this},e.makeScale=function(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this},e.makeShear=function(t,e,n){return this.set(1,e,n,0,t,1,n,0,t,e,1,0,0,0,0,1),this},e.compose=function(t,e,n){var i=this.elements,r=e._x,a=e._y,o=e._z,s=e._w,c=r+r,l=a+a,u=o+o,h=r*c,d=r*l,p=r*u,f=a*l,m=a*u,v=o*u,g=s*c,y=s*l,x=s*u,_=n.x,b=n.y,w=n.z;return i[0]=(1-(f+v))*_,i[1]=(d+x)*_,i[2]=(p-y)*_,i[3]=0,i[4]=(d-x)*b,i[5]=(1-(h+v))*b,i[6]=(m+g)*b,i[7]=0,i[8]=(p+y)*w,i[9]=(m-g)*w,i[10]=(1-(h+f))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this},e.decompose=function(t,e,n){var i=this.elements,r=ie.set(i[0],i[1],i[2]).length(),a=ie.set(i[4],i[5],i[6]).length(),o=ie.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],re.copy(this);var s=1/r,c=1/a,l=1/o;return re.elements[0]*=s,re.elements[1]*=s,re.elements[2]*=s,re.elements[4]*=c,re.elements[5]*=c,re.elements[6]*=c,re.elements[8]*=l,re.elements[9]*=l,re.elements[10]*=l,e.setFromRotationMatrix(re),n.x=r,n.y=a,n.z=o,this},e.makePerspective=function(t,e,n,i,r,a){void 0===a&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var o=this.elements,s=2*r/(e-t),c=2*r/(n-i),l=(e+t)/(e-t),u=(n+i)/(n-i),h=-(a+r)/(a-r),d=-2*a*r/(a-r);return o[0]=s,o[4]=0,o[8]=l,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this},e.makeOrthographic=function(t,e,n,i,r,a){var o=this.elements,s=1/(e-t),c=1/(n-i),l=1/(a-r),u=(e+t)*s,h=(n+i)*c,d=(a+r)*l;return o[0]=2*s,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*l,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this},e.equals=function(t){for(var e=this.elements,n=t.elements,i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0},e.fromArray=function(t,e){void 0===e&&(e=0);for(var n=0;n<16;n++)this.elements[n]=t[n+e];return this},e.toArray=function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);var n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t},t}(),ie=new Lt,re=new ne,ae=new Lt(0,0,0),oe=new Lt(1,1,1),se=new Lt,ce=new Lt,le=new Lt,ue=function(){function t(e,n,i,r){void 0===e&&(e=0),void 0===n&&(n=0),void 0===i&&(i=0),void 0===r&&(r=t.DefaultOrder),Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}var e=t.prototype;return e.set=function(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._order=i||this._order,this._onChangeCallback(),this},e.clone=function(){return new this.constructor(this._x,this._y,this._z,this._order)},e.copy=function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this},e.setFromRotationMatrix=function(t,e,n){var i=gt.clamp,r=t.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(e=e||this._order){case"XYZ":this._y=Math.asin(i(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-i(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(i(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-i(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(i(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-i(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,!1!==n&&this._onChangeCallback(),this},e.setFromQuaternion=function(t,e,n){return he.makeRotationFromQuaternion(t),this.setFromRotationMatrix(he,e,n)},e.setFromVector3=function(t,e){return this.set(t.x,t.y,t.z,e||this._order)},e.reorder=function(t){return de.setFromEuler(this),this.setFromQuaternion(de,t)},e.equals=function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},e.fromArray=function(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this},e.toArray=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t},e.toVector3=function(t){return t?t.set(this._x,this._y,this._z):new Lt(this._x,this._y,this._z)},e._onChange=function(t){return this._onChangeCallback=t,this},e._onChangeCallback=function(){},st(t,[{key:"x",get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},{key:"y",get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},{key:"z",get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},{key:"order",get:function(){return this._order},set:function(t){this._order=t,this._onChangeCallback()}}]),t}();ue.DefaultOrder="XYZ",ue.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var he=new ne,de=new At,pe=function(){function t(){this.mask=1}var e=t.prototype;return e.set=function(t){this.mask=1<<t|0},e.enable=function(t){this.mask|=1<<t|0},e.enableAll=function(){this.mask=-1},e.toggle=function(t){this.mask^=1<<t|0},e.disable=function(t){this.mask&=~(1<<t|0)},e.disableAll=function(){this.mask=0},e.test=function(t){return 0!=(this.mask&t.mask)},t}(),fe=0,me=new Lt,ve=new At,ge=new ne,ye=new Lt,xe=new Lt,_e=new Lt,be=new At,we=new Lt(1,0,0),Me=new Lt(0,1,0),Se=new Lt(0,0,1),Te={type:"added"},Ee={type:"removed"};function Ae(){Object.defineProperty(this,"id",{value:fe++}),this.uuid=gt.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DefaultUp.clone();var t=new Lt,e=new ue,n=new At,i=new Lt(1,1,1);e._onChange((function(){n.setFromEuler(e,!1)})),n._onChange((function(){e.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ae.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new pe,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}Ae.DefaultUp=new Lt(0,1,0),Ae.DefaultMatrixAutoUpdate=!0,Ae.prototype=Object.assign(Object.create(dt.prototype),{constructor:Ae,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return ve.setFromAxisAngle(t,e),this.quaternion.multiply(ve),this},rotateOnWorldAxis:function(t,e){return ve.setFromAxisAngle(t,e),this.quaternion.premultiply(ve),this},rotateX:function(t){return this.rotateOnAxis(we,t)},rotateY:function(t){return this.rotateOnAxis(Me,t)},rotateZ:function(t){return this.rotateOnAxis(Se,t)},translateOnAxis:function(t,e){return me.copy(t).applyQuaternion(this.quaternion),this.position.add(me.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(we,t)},translateY:function(t){return this.translateOnAxis(Me,t)},translateZ:function(t){return this.translateOnAxis(Se,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(ge.copy(this.matrixWorld).invert())},lookAt:function(t,e,n){t.isVector3?ye.copy(t):ye.set(t,e,n);var i=this.parent;this.updateWorldMatrix(!0,!1),xe.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ge.lookAt(xe,ye,this.up):ge.lookAt(ye,xe,this.up),this.quaternion.setFromRotationMatrix(ge),i&&(ge.extractRotation(i.matrixWorld),ve.setFromRotationMatrix(ge),this.quaternion.premultiply(ve.invert()))},add:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Te)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}var n=this.children.indexOf(t);return-1!==n&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Ee)),this},clear:function(){for(var t=0;t<this.children.length;t++){var e=this.children[t];e.parent=null,e.dispatchEvent(Ee)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),ge.copy(this.matrixWorld).invert(),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),ge.multiply(t.parent.matrixWorld)),t.applyMatrix4(ge),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(var n=0,i=this.children.length;n<i;n++){var r=this.children[n].getObjectByProperty(t,e);if(void 0!==r)return r}},getWorldPosition:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new Lt),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new At),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xe,t,_e),t},getWorldScale:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new Lt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xe,be,t),t},getWorldDirection:function(t){void 0===t&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new Lt),this.updateWorldMatrix(!0,!1);var e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);for(var e=this.children,n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(!1!==this.visible){t(this);for(var e=this.children,n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}},traverseAncestors:function(t){var e=this.parent;null!==e&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);for(var e=this.children,n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){var n=this.parent;if(!0===t&&null!==n&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e)for(var i=this.children,r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)},toJSON:function(t){var e=void 0===t||"string"==typeof t,n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var i={};function r(e,n){return void 0===e[n.uuid]&&(e[n.uuid]=n.toJSON(t)),n.uuid}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),!0===this.castShadow&&(i.castShadow=!0),!0===this.receiveShadow&&(i.receiveShadow=!0),!1===this.visible&&(i.visible=!1),!1===this.frustumCulled&&(i.frustumCulled=!1),0!==this.renderOrder&&(i.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON()),this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);var a=this.geometry.parameters;if(void 0!==a&&void 0!==a.shapes){var o=a.shapes;if(Array.isArray(o))for(var s=0,c=o.length;s<c;s++){var l=o[s];r(t.shapes,l)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){for(var u=[],h=0,d=this.material.length;h<d;h++)u.push(r(t.materials,this.material[h]));i.material=u}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(var p=0;p<this.children.length;p++)i.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(var f=0;f<this.animations.length;f++){var m=this.animations[f];i.animations.push(r(t.animations,m))}}if(e){var v=M(t.geometries),g=M(t.materials),y=M(t.textures),x=M(t.images),_=M(t.shapes),b=M(t.skeletons),w=M(t.animations);v.length>0&&(n.geometries=v),g.length>0&&(n.materials=g),y.length>0&&(n.textures=y),x.length>0&&(n.images=x),_.length>0&&(n.shapes=_),b.length>0&&(n.skeletons=b),w.length>0&&(n.animations=w)}return n.object=i,n;function M(t){var e=[];for(var n in t){var i=t[n];delete i.metadata,e.push(i)}return e}},clone:function(t){return(new this.constructor).copy(this,t)},copy:function(t,e){if(void 0===e&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(var n=0;n<t.children.length;n++){var i=t.children[n];this.add(i.clone())}return this}});var Le=new Lt,Re=new Lt,Ce=new xt,Pe=function(){function t(t,e){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=void 0!==t?t:new Lt(1,0,0),this.constant=void 0!==e?e:0}var e=t.prototype;return e.set=function(t,e){return this.normal.copy(t),this.constant=e,this},e.setComponents=function(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this},e.setFromNormalAndCoplanarPoint=function(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this},e.setFromCoplanarPoints=function(t,e,n){var i=Le.subVectors(n,e).cross(Re.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},e.normalize=function(){var t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},e.negate=function(){return this.constant*=-1,this.normal.negate(),this},e.distanceToPoint=function(t){return this.normal.dot(t)+this.constant},e.distanceToSphere=function(t){return this.distanceToPoint(t.center)-t.radius},e.projectPoint=function(t,e){return void 0===e&&(console.warn("THREE.Plane: .projectPoint() target is now required"),e=new Lt),e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)},e.intersectLine=function(t,e){void 0===e&&(console.warn("THREE.Plane: .intersectLine() target is now required"),e=new Lt);var n=t.delta(Le),i=this.normal.dot(n);if(0===i)return 0===this.distanceToPoint(t.start)?e.copy(t.start):void 0;var r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?void 0:e.copy(n).multiplyScalar(r).add(t.start)},e.intersectsLine=function(t){var e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0},e.intersectsBox=function(t){return t.intersectsPlane(this)},e.intersectsSphere=function(t){return t.intersectsPlane(this)},e.coplanarPoint=function(t){return void 0===t&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new Lt),t.copy(this.normal).multiplyScalar(-this.constant)},e.applyMatrix4=function(t,e){var n=e||Ce.getNormalMatrix(t),i=this.coplanarPoint(Le).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this},e.translate=function(t){return this.constant-=t.dot(this.normal),this},e.equals=function(t){return t.normal.equals(this.normal)&&t.constant===this.constant},t}(),Oe=new Lt,Ie=new Lt,De=new Lt,Ne=new Lt,Be=new Lt,ze=new Lt,Fe=new Lt,He=new Lt,Ge=new Lt,Ue=new Lt,ke=function(){function t(t,e,n){this.a=void 0!==t?t:new Lt,this.b=void 0!==e?e:new Lt,this.c=void 0!==n?n:new Lt}t.getNormal=function(t,e,n,i){void 0===i&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new Lt),i.subVectors(n,e),Oe.subVectors(t,e),i.cross(Oe);var r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)},t.getBarycoord=function(t,e,n,i,r){Oe.subVectors(i,e),Ie.subVectors(n,e),De.subVectors(t,e);var a=Oe.dot(Oe),o=Oe.dot(Ie),s=Oe.dot(De),c=Ie.dot(Ie),l=Ie.dot(De),u=a*c-o*o;if(void 0===r&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new Lt),0===u)return r.set(-2,-1,-1);var h=1/u,d=(c*s-o*l)*h,p=(a*l-o*s)*h;return r.set(1-d-p,p,d)},t.containsPoint=function(t,e,n,i){return this.getBarycoord(t,e,n,i,Ne),Ne.x>=0&&Ne.y>=0&&Ne.x+Ne.y<=1},t.getUV=function(t,e,n,i,r,a,o,s){return this.getBarycoord(t,e,n,i,Ne),s.set(0,0),s.addScaledVector(r,Ne.x),s.addScaledVector(a,Ne.y),s.addScaledVector(o,Ne.z),s},t.isFrontFacing=function(t,e,n,i){return Oe.subVectors(n,e),Ie.subVectors(t,e),Oe.cross(Ie).dot(i)<0};var e=t.prototype;return e.set=function(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this},e.setFromPointsAndIndices=function(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this},e.getArea=function(){return Oe.subVectors(this.c,this.b),Ie.subVectors(this.a,this.b),.5*Oe.cross(Ie).length()},e.getMidpoint=function(t){return void 0===t&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new Lt),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},e.getNormal=function(e){return t.getNormal(this.a,this.b,this.c,e)},e.getPlane=function(t){return void 0===t&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new Pe),t.setFromCoplanarPoints(this.a,this.b,this.c)},e.getBarycoord=function(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)},e.getUV=function(e,n,i,r,a){return t.getUV(e,this.a,this.b,this.c,n,i,r,a)},e.containsPoint=function(e){return t.containsPoint(e,this.a,this.b,this.c)},e.isFrontFacing=function(e){return t.isFrontFacing(this.a,this.b,this.c,e)},e.intersectsBox=function(t){return t.intersectsTriangle(this)},e.closestPointToPoint=function(t,e){void 0===e&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),e=new Lt);var n,i,r=this.a,a=this.b,o=this.c;Be.subVectors(a,r),ze.subVectors(o,r),He.subVectors(t,r);var s=Be.dot(He),c=ze.dot(He);if(s<=0&&c<=0)return e.copy(r);Ge.subVectors(t,a);var l=Be.dot(Ge),u=ze.dot(Ge);if(l>=0&&u<=l)return e.copy(a);var h=s*u-l*c;if(h<=0&&s>=0&&l<=0)return n=s/(s-l),e.copy(r).addScaledVector(Be,n);Ue.subVectors(t,o);var d=Be.dot(Ue),p=ze.dot(Ue);if(p>=0&&d<=p)return e.copy(o);var f=d*c-s*p;if(f<=0&&c>=0&&p<=0)return i=c/(c-p),e.copy(r).addScaledVector(ze,i);var m=l*p-d*u;if(m<=0&&u-l>=0&&d-p>=0)return Fe.subVectors(o,a),i=(u-l)/(u-l+(d-p)),e.copy(a).addScaledVector(Fe,i);var v=1/(m+f+h);return n=f*v,i=h*v,e.copy(r).addScaledVector(Be,n).addScaledVector(ze,i)},e.equals=function(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)},t}(),Ve={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},We={h:0,s:0,l:0},je={h:0,s:0,l:0};function qe(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}function Xe(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function Ye(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}var Ze=function(){function t(t,e,n){return Object.defineProperty(this,"isColor",{value:!0}),void 0===e&&void 0===n?this.set(t):this.setRGB(t,e,n)}var e=t.prototype;return e.set=function(t){return t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t),this},e.setScalar=function(t){return this.r=t,this.g=t,this.b=t,this},e.setHex=function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,this},e.setRGB=function(t,e,n){return this.r=t,this.g=e,this.b=n,this},e.setHSL=function(t,e,n){if(t=gt.euclideanModulo(t,1),e=gt.clamp(e,0,1),n=gt.clamp(n,0,1),0===e)this.r=this.g=this.b=n;else{var i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=qe(r,i,t+1/3),this.g=qe(r,i,t),this.b=qe(r,i,t-1/3)}return this},e.setStyle=function(t){function e(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}var n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){var i,r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){var o=parseFloat(i[1])/360,s=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[4]),this.setHSL(o,s,c)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){var l=n[1],u=l.length;if(3===u)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,this;if(6===u)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this},e.setColorName=function(t){var e=Ve[t];return void 0!==e?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this},e.clone=function(){return new this.constructor(this.r,this.g,this.b)},e.copy=function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},e.copyGammaToLinear=function(t,e){return void 0===e&&(e=2),this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this},e.copyLinearToGamma=function(t,e){void 0===e&&(e=2);var n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this},e.convertGammaToLinear=function(t){return this.copyGammaToLinear(this,t),this},e.convertLinearToGamma=function(t){return this.copyLinearToGamma(this,t),this},e.copySRGBToLinear=function(t){return this.r=Xe(t.r),this.g=Xe(t.g),this.b=Xe(t.b),this},e.copyLinearToSRGB=function(t){return this.r=Ye(t.r),this.g=Ye(t.g),this.b=Ye(t.b),this},e.convertSRGBToLinear=function(){return this.copySRGBToLinear(this),this},e.convertLinearToSRGB=function(){return this.copyLinearToSRGB(this),this},e.getHex=function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},e.getHexString=function(){return("000000"+this.getHex().toString(16)).slice(-6)},e.getHSL=function(t){void 0===t&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});var e,n,i=this.r,r=this.g,a=this.b,o=Math.max(i,r,a),s=Math.min(i,r,a),c=(s+o)/2;if(s===o)e=0,n=0;else{var l=o-s;switch(n=c<=.5?l/(o+s):l/(2-o-s),o){case i:e=(r-a)/l+(r<a?6:0);break;case r:e=(a-i)/l+2;break;case a:e=(i-r)/l+4}e/=6}return t.h=e,t.s=n,t.l=c,t},e.getStyle=function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},e.offsetHSL=function(t,e,n){return this.getHSL(We),We.h+=t,We.s+=e,We.l+=n,this.setHSL(We.h,We.s,We.l),this},e.add=function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},e.addColors=function(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this},e.addScalar=function(t){return this.r+=t,this.g+=t,this.b+=t,this},e.sub=function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},e.multiply=function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},e.multiplyScalar=function(t){return this.r*=t,this.g*=t,this.b*=t,this},e.lerp=function(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this},e.lerpColors=function(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this},e.lerpHSL=function(t,e){this.getHSL(We),t.getHSL(je);var n=gt.lerp(We.h,je.h,e),i=gt.lerp(We.s,je.s,e),r=gt.lerp(We.l,je.l,e);return this.setHSL(n,i,r),this},e.equals=function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},e.fromArray=function(t,e){return void 0===e&&(e=0),this.r=t[e],this.g=t[e+1],this.b=t[e+2],this},e.toArray=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t},e.fromBufferAttribute=function(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),!0===t.normalized&&(this.r/=255,this.g/=255,this.b/=255),this},e.toJSON=function(){return this.getHex()},t}();Ze.NAMES=Ve,Ze.prototype.r=1,Ze.prototype.g=1,Ze.prototype.b=1;var Je=function(){function t(t,e,n,i,r,a){void 0===a&&(a=0),this.a=t,this.b=e,this.c=n,this.normal=i&&i.isVector3?i:new Lt,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new Ze,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=a}var e=t.prototype;return e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(var e=0,n=t.vertexNormals.length;e<n;e++)this.vertexNormals[e]=t.vertexNormals[e].clone();for(var i=0,r=t.vertexColors.length;i<r;i++)this.vertexColors[i]=t.vertexColors[i].clone();return this},t}(),Qe=0;function Ke(){Object.defineProperty(this,"id",{value:Qe++}),this.uuid=gt.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=et,this.stencilZFail=et,this.stencilZPass=et,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}function $e(t){Ke.call(this),this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}Ke.prototype=Object.assign(Object.create(dt.prototype),{constructor:Ke,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(void 0!==t)for(var e in t){var n=t[e];if(void 0!==n)if("shading"!==e){var i=this[e];void 0!==i?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.")}else console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===n;else console.warn("THREE.Material: '"+e+"' parameter is undefined.")}},toJSON:function(t){var e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{}});var n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(t){var e=[];for(var n in t){var i=t[n];delete i.metadata,e.push(i)}return e}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearcoat&&(n.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,void 0!==this.combine&&(n.combine=this.combine),void 0!==this.envMapIntensity&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.size&&(n.size=this.size),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(n.blending=this.blending),!0===this.flatShading&&(n.flatShading=this.flatShading),0!==this.side&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&0!==this.rotation&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),0!==this.polygonOffsetFactor&&(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(n.morphTargets=!0),!0===this.morphNormals&&(n.morphNormals=!0),!0===this.skinning&&(n.skinning=!0),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),"{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),e){var r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n},clone:function(){return(new this.constructor).copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;var e=t.clippingPlanes,n=null;if(null!==e){var i=e.length;n=new Array(i);for(var r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(Ke.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),$e.prototype=Object.create(Ke.prototype),$e.prototype.constructor=$e,$e.prototype.isMeshBasicMaterial=!0,$e.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};var tn=new Lt,en=new yt;function nn(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=!0===n,this.usage=nt,this.updateRange={offset:0,count:-1},this.version=0}function rn(t,e,n){nn.call(this,new Int8Array(t),e,n)}function an(t,e,n){nn.call(this,new Uint8Array(t),e,n)}function on(t,e,n){nn.call(this,new Uint8ClampedArray(t),e,n)}function sn(t,e,n){nn.call(this,new Int16Array(t),e,n)}function cn(t,e,n){nn.call(this,new Uint16Array(t),e,n)}function ln(t,e,n){nn.call(this,new Int32Array(t),e,n)}function un(t,e,n){nn.call(this,new Uint32Array(t),e,n)}function hn(t,e,n){nn.call(this,new Uint16Array(t),e,n)}function dn(t,e,n){nn.call(this,new Float32Array(t),e,n)}function pn(t,e,n){nn.call(this,new Float64Array(t),e,n)}function fn(t){if(0===t.length)return-1/0;for(var e=t[0],n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}Object.defineProperty(nn.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(nn.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(var i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var a=t[i];void 0===a&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Ze),e[n++]=a.r,e[n++]=a.g,e[n++]=a.b}return this},copyVector2sArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var a=t[i];void 0===a&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new yt),e[n++]=a.x,e[n++]=a.y}return this},copyVector3sArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var a=t[i];void 0===a&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new Lt),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z}return this},copyVector4sArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var a=t[i];void 0===a&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new St),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z,e[n++]=a.w}return this},applyMatrix3:function(t){if(2===this.itemSize)for(var e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXY(e,en.x,en.y);else if(3===this.itemSize)for(var i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this},applyMatrix4:function(t){for(var e=0,n=this.count;e<n;e++)tn.x=this.getX(e),tn.y=this.getY(e),tn.z=this.getZ(e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this},applyNormalMatrix:function(t){for(var e=0,n=this.count;e<n;e++)tn.x=this.getX(e),tn.y=this.getY(e),tn.z=this.getZ(e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this},transformDirection:function(t){for(var e=0,n=this.count;e<n;e++)tn.x=this.getX(e),tn.y=this.getY(e),tn.z=this.getZ(e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}}),rn.prototype=Object.create(nn.prototype),rn.prototype.constructor=rn,an.prototype=Object.create(nn.prototype),an.prototype.constructor=an,on.prototype=Object.create(nn.prototype),on.prototype.constructor=on,sn.prototype=Object.create(nn.prototype),sn.prototype.constructor=sn,cn.prototype=Object.create(nn.prototype),cn.prototype.constructor=cn,ln.prototype=Object.create(nn.prototype),ln.prototype.constructor=ln,un.prototype=Object.create(nn.prototype),un.prototype.constructor=un,hn.prototype=Object.create(nn.prototype),hn.prototype.constructor=hn,hn.prototype.isFloat16BufferAttribute=!0,dn.prototype=Object.create(nn.prototype),dn.prototype.constructor=dn,pn.prototype=Object.create(nn.prototype),pn.prototype.constructor=pn;var mn={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!=typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function vn(t,e){return new mn[t](e)}var gn=0,yn=new ne,xn=new Ae,_n=new Lt,bn=new Pt,wn=new Pt,Mn=new Lt;function Sn(){Object.defineProperty(this,"id",{value:gn++}),this.uuid=gt.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Sn.prototype=Object.assign(Object.create(dt.prototype),{constructor:Sn,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(fn(t)>65535?un:cn)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},hasAttribute:function(t){return void 0!==this.attributes[t]},addGroup:function(t,e,n){void 0===n&&(n=0),this.groups.push({start:t,count:e,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){var e=this.attributes.position;void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0);var n=this.attributes.normal;if(void 0!==n){var i=(new xt).getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}var r=this.attributes.tangent;return void 0!==r&&(r.transformDirection(t),r.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this},rotateY:function(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this},rotateZ:function(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this},translate:function(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this},scale:function(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this},lookAt:function(t){return xn.lookAt(t),xn.updateMatrix(),this.applyMatrix4(xn.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(_n).negate(),this.translate(_n.x,_n.y,_n.z),this},setFromPoints:function(t){for(var e=[],n=0,i=t.length;n<i;n++){var r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dn(e,3)),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Pt);var t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new Lt(-1/0,-1/0,-1/0),new Lt(1/0,1/0,1/0));if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(var n=0,i=e.length;n<i;n++){var r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Xt);var t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new Lt,1/0);if(t){var n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(var i=0,r=e.length;i<r;i++){var a=e[i];wn.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(bn.min,wn.min),bn.expandByPoint(Mn),Mn.addVectors(bn.max,wn.max),bn.expandByPoint(Mn)):(bn.expandByPoint(wn.min),bn.expandByPoint(wn.max))}bn.getCenter(n);for(var o=0,s=0,c=t.count;s<c;s++)Mn.fromBufferAttribute(t,s),o=Math.max(o,n.distanceToSquared(Mn));if(e)for(var l=0,u=e.length;l<u;l++)for(var h=e[l],d=this.morphTargetsRelative,p=0,f=h.count;p<f;p++)Mn.fromBufferAttribute(h,p),d&&(_n.fromBufferAttribute(t,p),Mn.add(_n)),o=Math.max(o,n.distanceToSquared(Mn));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){var t=this.index,e=this.attributes;if(null!==t&&void 0!==e.position&&void 0!==e.normal&&void 0!==e.uv){var n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;void 0===e.tangent&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));for(var s=e.tangent.array,c=[],l=[],u=0;u<o;u++)c[u]=new Lt,l[u]=new Lt;var h=new Lt,d=new Lt,p=new Lt,f=new yt,m=new yt,v=new yt,g=new Lt,y=new Lt,x=this.groups;0===x.length&&(x=[{start:0,count:n.length}]);for(var _=0,b=x.length;_<b;++_)for(var w=x[_],M=w.start,S=M,T=M+w.count;S<T;S+=3)B(n[S+0],n[S+1],n[S+2]);for(var E=new Lt,A=new Lt,L=new Lt,R=new Lt,C=0,P=x.length;C<P;++C)for(var O=x[C],I=O.start,D=I,N=I+O.count;D<N;D+=3)z(n[D+0]),z(n[D+1]),z(n[D+2])}else console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");function B(t,e,n){h.fromArray(i,3*t),d.fromArray(i,3*e),p.fromArray(i,3*n),f.fromArray(a,2*t),m.fromArray(a,2*e),v.fromArray(a,2*n),d.sub(h),p.sub(h),m.sub(f),v.sub(f);var r=1/(m.x*v.y-v.x*m.y);isFinite(r)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(r),y.copy(p).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(r),c[t].add(g),c[e].add(g),c[n].add(g),l[t].add(y),l[e].add(y),l[n].add(y))}function z(t){L.fromArray(r,3*t),R.copy(L);var e=c[t];E.copy(e),E.sub(L.multiplyScalar(L.dot(e))).normalize(),A.crossVectors(R,e);var n=A.dot(l[t])<0?-1:1;s[4*t]=E.x,s[4*t+1]=E.y,s[4*t+2]=E.z,s[4*t+3]=n}},computeVertexNormals:function(){var t=this.index,e=this.getAttribute("position");if(void 0!==e){var n=this.getAttribute("normal");if(void 0===n)n=new nn(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(var i=0,r=n.count;i<r;i++)n.setXYZ(i,0,0,0);var a=new Lt,o=new Lt,s=new Lt,c=new Lt,l=new Lt,u=new Lt,h=new Lt,d=new Lt;if(t)for(var p=0,f=t.count;p<f;p+=3){var m=t.getX(p+0),v=t.getX(p+1),g=t.getX(p+2);a.fromBufferAttribute(e,m),o.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),h.subVectors(s,o),d.subVectors(a,o),h.cross(d),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,g),c.add(h),l.add(h),u.add(h),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(var y=0,x=e.count;y<x;y+=3)a.fromBufferAttribute(e,y+0),o.fromBufferAttribute(e,y+1),s.fromBufferAttribute(e,y+2),h.subVectors(s,o),d.subVectors(a,o),h.cross(d),n.setXYZ(y+0,h.x,h.y,h.z),n.setXYZ(y+1,h.x,h.y,h.z),n.setXYZ(y+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(t&&t.isBufferGeometry){void 0===e&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var n=this.attributes;for(var i in n)if(void 0!==t.attributes[i])for(var r=n[i].array,a=t.attributes[i],o=a.array,s=a.itemSize*e,c=Math.min(o.length,r.length-s),l=0,u=s;l<c;l++,u++)r[u]=o[l];return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t)},normalizeNormals:function(){for(var t=this.attributes.normal,e=0,n=t.count;e<n;e++)Mn.fromBufferAttribute(t,e),Mn.normalize(),t.setXYZ(e,Mn.x,Mn.y,Mn.z)},toNonIndexed:function(){function t(t,e){for(var n=t.array,i=t.itemSize,r=t.normalized,a=new n.constructor(e.length*i),o=0,s=0,c=0,l=e.length;c<l;c++){o=e[c]*i;for(var u=0;u<i;u++)a[s++]=n[o++]}return new nn(a,i,r)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;var e=new Sn,n=this.index.array,i=this.attributes;for(var r in i){var a=t(i[r],n);e.setAttribute(r,a)}var o=this.morphAttributes;for(var s in o){for(var c=[],l=o[s],u=0,h=l.length;u<h;u++){var d=t(l[u],n);c.push(d)}e.morphAttributes[s]=c}e.morphTargetsRelative=this.morphTargetsRelative;for(var p=this.groups,f=0,m=p.length;f<m;f++){var v=p[f];e.addGroup(v.start,v.count,v.materialIndex)}return e},toJSON:function(){var t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){var e=this.parameters;for(var n in e)void 0!==e[n]&&(t[n]=e[n]);return t}t.data={attributes:{}};var i=this.index;null!==i&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});var r=this.attributes;for(var a in r){var o=r[a],s=o.toJSON(t.data);""!==o.name&&(s.name=o.name),t.data.attributes[a]=s}var c={},l=!1;for(var u in this.morphAttributes){for(var h=this.morphAttributes[u],d=[],p=0,f=h.length;p<f;p++){var m=h[p],v=m.toJSON(t.data);""!==m.name&&(v.name=m.name),d.push(v)}d.length>0&&(c[u]=d,l=!0)}l&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);var g=this.groups;g.length>0&&(t.data.groups=JSON.parse(JSON.stringify(g)));var y=this.boundingSphere;return null!==y&&(t.data.boundingSphere={center:y.center.toArray(),radius:y.radius}),t},clone:function(){return(new Sn).copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;var e={};this.name=t.name;var n=t.index;null!==n&&this.setIndex(n.clone(e));var i=t.attributes;for(var r in i){var a=i[r];this.setAttribute(r,a.clone(e))}var o=t.morphAttributes;for(var s in o){for(var c=[],l=o[s],u=0,h=l.length;u<h;u++)c.push(l[u].clone(e));this.morphAttributes[s]=c}this.morphTargetsRelative=t.morphTargetsRelative;for(var d=t.groups,p=0,f=d.length;p<f;p++){var m=d[p];this.addGroup(m.start,m.count,m.materialIndex)}var v=t.boundingBox;null!==v&&(this.boundingBox=v.clone());var g=t.boundingSphere;return null!==g&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Tn=new ne,En=new ee,An=new Xt,Ln=new Lt,Rn=new Lt,Cn=new Lt,Pn=new Lt,On=new Lt,In=new Lt,Dn=new Lt,Nn=new Lt,Bn=new Lt,zn=new yt,Fn=new yt,Hn=new yt,Gn=new Lt,Un=new Lt;function kn(t,e){void 0===t&&(t=new Sn),void 0===e&&(e=new $e),Ae.call(this),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}function Vn(t,e,n,i,r,a,o,s,c,l,u,h){Ln.fromBufferAttribute(r,l),Rn.fromBufferAttribute(r,u),Cn.fromBufferAttribute(r,h);var d=t.morphTargetInfluences;if(e.morphTargets&&a&&d){Dn.set(0,0,0),Nn.set(0,0,0),Bn.set(0,0,0);for(var p=0,f=a.length;p<f;p++){var m=d[p],v=a[p];0!==m&&(Pn.fromBufferAttribute(v,l),On.fromBufferAttribute(v,u),In.fromBufferAttribute(v,h),o?(Dn.addScaledVector(Pn,m),Nn.addScaledVector(On,m),Bn.addScaledVector(In,m)):(Dn.addScaledVector(Pn.sub(Ln),m),Nn.addScaledVector(On.sub(Rn),m),Bn.addScaledVector(In.sub(Cn),m)))}Ln.add(Dn),Rn.add(Nn),Cn.add(Bn)}t.isSkinnedMesh&&(t.boneTransform(l,Ln),t.boneTransform(u,Rn),t.boneTransform(h,Cn));var g=function(t,e,n,i,r,a,o,s){if(null===(1===e.side?i.intersectTriangle(o,a,r,!0,s):i.intersectTriangle(r,a,o,2!==e.side,s)))return null;Un.copy(s),Un.applyMatrix4(t.matrixWorld);var c=n.ray.origin.distanceTo(Un);return c<n.near||c>n.far?null:{distance:c,point:Un.clone(),object:t}}(t,e,n,i,Ln,Rn,Cn,Gn);if(g){s&&(zn.fromBufferAttribute(s,l),Fn.fromBufferAttribute(s,u),Hn.fromBufferAttribute(s,h),g.uv=ke.getUV(Gn,Ln,Rn,Cn,zn,Fn,Hn,new yt)),c&&(zn.fromBufferAttribute(c,l),Fn.fromBufferAttribute(c,u),Hn.fromBufferAttribute(c,h),g.uv2=ke.getUV(Gn,Ln,Rn,Cn,zn,Fn,Hn,new yt));var y=new Je(l,u,h);ke.getNormal(Ln,Rn,Cn,y.normal),g.face=y}return g}kn.prototype=Object.assign(Object.create(Ae.prototype),{constructor:kn,isMesh:!0,copy:function(t){return Ae.prototype.copy.call(this,t),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){var t=this.geometry;if(t.isBufferGeometry){var e=t.morphAttributes,n=Object.keys(e);if(n.length>0){var i=e[n[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var r=0,a=i.length;r<a;r++){var o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{var s=t.morphTargets;void 0!==s&&s.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){var n,i=this.geometry,r=this.material,a=this.matrixWorld;if(void 0!==r&&(null===i.boundingSphere&&i.computeBoundingSphere(),An.copy(i.boundingSphere),An.applyMatrix4(a),!1!==t.ray.intersectsSphere(An)&&(Tn.copy(a).invert(),En.copy(t.ray).applyMatrix4(Tn),null===i.boundingBox||!1!==En.intersectsBox(i.boundingBox))))if(i.isBufferGeometry){var o=i.index,s=i.attributes.position,c=i.morphAttributes.position,l=i.morphTargetsRelative,u=i.attributes.uv,h=i.attributes.uv2,d=i.groups,p=i.drawRange;if(null!==o)if(Array.isArray(r))for(var f=0,m=d.length;f<m;f++)for(var v=d[f],g=r[v.materialIndex],y=Math.max(v.start,p.start),x=Math.min(v.start+v.count,p.start+p.count);y<x;y+=3){var _=o.getX(y),b=o.getX(y+1),w=o.getX(y+2);(n=Vn(this,g,t,En,s,c,l,u,h,_,b,w))&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=v.materialIndex,e.push(n))}else for(var M=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);M<S;M+=3){var T=o.getX(M),E=o.getX(M+1),A=o.getX(M+2);(n=Vn(this,r,t,En,s,c,l,u,h,T,E,A))&&(n.faceIndex=Math.floor(M/3),e.push(n))}else if(void 0!==s)if(Array.isArray(r))for(var L=0,R=d.length;L<R;L++)for(var C=d[L],P=r[C.materialIndex],O=Math.max(C.start,p.start),I=Math.min(C.start+C.count,p.start+p.count);O<I;O+=3){(n=Vn(this,P,t,En,s,c,l,u,h,O,O+1,O+2))&&(n.faceIndex=Math.floor(O/3),n.face.materialIndex=C.materialIndex,e.push(n))}else for(var D=Math.max(0,p.start),N=Math.min(s.count,p.start+p.count);D<N;D+=3){(n=Vn(this,r,t,En,s,c,l,u,h,D,D+1,D+2))&&(n.faceIndex=Math.floor(D/3),e.push(n))}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});var Wn=function(t){function e(e,n,i,r,a,o){var s;void 0===e&&(e=1),void 0===n&&(n=1),void 0===i&&(i=1),void 0===r&&(r=1),void 0===a&&(a=1),void 0===o&&(o=1),(s=t.call(this)||this).type="BoxGeometry",s.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};var c=lt(s);r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);var l=[],u=[],h=[],d=[],p=0,f=0;function m(t,e,n,i,r,a,o,s,m,v,g){for(var y=a/m,x=o/v,_=a/2,b=o/2,w=s/2,M=m+1,S=v+1,T=0,E=0,A=new Lt,L=0;L<S;L++)for(var R=L*x-b,C=0;C<M;C++){var P=C*y-_;A[t]=P*i,A[e]=R*r,A[n]=w,u.push(A.x,A.y,A.z),A[t]=0,A[e]=0,A[n]=s>0?1:-1,h.push(A.x,A.y,A.z),d.push(C/m),d.push(1-L/v),T+=1}for(var O=0;O<v;O++)for(var I=0;I<m;I++){var D=p+I+M*O,N=p+I+M*(O+1),B=p+(I+1)+M*(O+1),z=p+(I+1)+M*O;l.push(D,N,z),l.push(N,B,z),E+=6}c.addGroup(f,E,g),f+=E,p+=T}return m("z","y","x",-1,-1,i,n,e,o,a,0),m("z","y","x",1,-1,i,n,-e,o,a,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,a,4),m("x","y","z",-1,-1,e,n,-i,r,a,5),s.setIndex(l),s.setAttribute("position",new dn(u,3)),s.setAttribute("normal",new dn(h,3)),s.setAttribute("uv",new dn(d,2)),s}return ct(e,t),e}(Sn);function jn(t){var e={};for(var n in t)for(var i in e[n]={},t[n]){var r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}return e}function qn(t){for(var e={},n=0;n<t.length;n++){var i=jn(t[n]);for(var r in i)e[r]=i[r]}return e}var Xn={clone:jn,merge:qn};function Yn(t){Ke.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&(void 0!==t.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}function Zn(){Ae.call(this),this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne}function Jn(t,e,n,i){void 0===t&&(t=50),void 0===e&&(e=1),void 0===n&&(n=.1),void 0===i&&(i=2e3),Zn.call(this),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Yn.prototype=Object.create(Ke.prototype),Yn.prototype.constructor=Yn,Yn.prototype.isShaderMaterial=!0,Yn.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this},Yn.prototype.toJSON=function(t){var e=Ke.prototype.toJSON.call(this,t);for(var n in e.glslVersion=this.glslVersion,e.uniforms={},this.uniforms){var i=this.uniforms[n].value;i&&i.isTexture?e.uniforms[n]={type:"t",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?e.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?e.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?e.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[n]={type:"m4",value:i.toArray()}:e.uniforms[n]={value:i}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;var r={};for(var a in this.extensions)!0===this.extensions[a]&&(r[a]=!0);return Object.keys(r).length>0&&(e.extensions=r),e},Zn.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Zn,isCamera:!0,copy:function(t,e){return Ae.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){void 0===t&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new Lt),this.updateWorldMatrix(!0,!1);var e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){Ae.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(t,e){Ae.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return(new this.constructor).copy(this)}}),Jn.prototype=Object.assign(Object.create(Zn.prototype),{constructor:Jn,isPerspectiveCamera:!0,copy:function(t,e){return Zn.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){var e=.5*this.getFilmHeight()/t;this.fov=2*gt.RAD2DEG*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){var t=Math.tan(.5*gt.DEG2RAD*this.fov);return.5*this.getFilmHeight()/t},getEffectiveFOV:function(){return 2*gt.RAD2DEG*Math.atan(Math.tan(.5*gt.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,a){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=this.near,e=t*Math.tan(.5*gt.DEG2RAD*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(null!==this.view&&this.view.enabled){var o=a.fullWidth,s=a.fullHeight;r+=a.offsetX*i/o,e-=a.offsetY*n/s,i*=a.width/o,n*=a.height/s}var c=this.filmOffset;0!==c&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){var e=Ae.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});var Qn=90;function Kn(t,e,n){if(Ae.call(this),this.type="CubeCamera",!0===n.isWebGLCubeRenderTarget){this.renderTarget=n;var i=new Jn(Qn,1,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new Lt(1,0,0)),this.add(i);var r=new Jn(Qn,1,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new Lt(-1,0,0)),this.add(r);var a=new Jn(Qn,1,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new Lt(0,1,0)),this.add(a);var o=new Jn(Qn,1,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new Lt(0,-1,0)),this.add(o);var s=new Jn(Qn,1,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new Lt(0,0,1)),this.add(s);var c=new Jn(Qn,1,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new Lt(0,0,-1)),this.add(c),this.update=function(t,e){null===this.parent&&this.updateMatrixWorld();var l=t.xr.enabled,u=t.getRenderTarget();t.xr.enabled=!1;var h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,s),n.texture.generateMipmaps=h,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.xr.enabled=l}}else console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.")}function $n(t,e,n,i,r,o,s,c,l,u){t=void 0!==t?t:[],e=void 0!==e?e:a,s=void 0!==s?s:E,wt.call(this,t,e,n,i,r,o,s,c,l,u),this.flipY=!1,this._needsFlipEnvMap=!0}Kn.prototype=Object.create(Ae.prototype),Kn.prototype.constructor=Kn,$n.prototype=Object.create(wt.prototype),$n.prototype.constructor=$n,$n.prototype.isCubeTexture=!0,Object.defineProperty($n.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});var ti=function(t){function e(e,n,i){var r;return Number.isInteger(n)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),n=i),r=t.call(this,e,e,n)||this,Object.defineProperty(lt(r),"isWebGLCubeRenderTarget",{value:!0}),n=n||{},r.texture=new $n(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),r.texture._needsFlipEnvMap=!1,r}ct(e,t);var n=e.prototype;return n.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=A,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;var n={tEquirect:{value:null}},i="\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",r="\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",a=new Wn(5,5,5),o=new Yn({name:"CubemapFromEquirect",uniforms:jn(n),vertexShader:i,fragmentShader:r,side:1,blending:0});o.uniforms.tEquirect.value=e;var s=new kn(a,o),c=e.minFilter;return e.minFilter===x&&(e.minFilter=g),new Kn(1,10,this).update(t,s),e.minFilter=c,s.geometry.dispose(),s.material.dispose(),this},n.clear=function(t,e,n,i){for(var r=t.getRenderTarget(),a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)},e}(Tt);function ei(t,e,n,i,r,a,o,s,c,l,u,h){wt.call(this,null,a,o,s,c,l,i,r,u,h),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=void 0!==c?c:f,this.minFilter=void 0!==l?l:f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}ei.prototype=Object.create(wt.prototype),ei.prototype.constructor=ei,ei.prototype.isDataTexture=!0;var ni=new Xt,ii=new Lt,ri=function(){function t(t,e,n,i,r,a){this.planes=[void 0!==t?t:new Pe,void 0!==e?e:new Pe,void 0!==n?n:new Pe,void 0!==i?i:new Pe,void 0!==r?r:new Pe,void 0!==a?a:new Pe]}var e=t.prototype;return e.set=function(t,e,n,i,r,a){var o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){for(var e=this.planes,n=0;n<6;n++)e[n].copy(t.planes[n]);return this},e.setFromProjectionMatrix=function(t){var e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],o=n[3],s=n[4],c=n[5],l=n[6],u=n[7],h=n[8],d=n[9],p=n[10],f=n[11],m=n[12],v=n[13],g=n[14],y=n[15];return e[0].setComponents(o-i,u-s,f-h,y-m).normalize(),e[1].setComponents(o+i,u+s,f+h,y+m).normalize(),e[2].setComponents(o+r,u+c,f+d,y+v).normalize(),e[3].setComponents(o-r,u-c,f-d,y-v).normalize(),e[4].setComponents(o-a,u-l,f-p,y-g).normalize(),e[5].setComponents(o+a,u+l,f+p,y+g).normalize(),this},e.intersectsObject=function(t){var e=t.geometry;return null===e.boundingSphere&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)},e.intersectsSprite=function(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)},e.intersectsSphere=function(t){for(var e=this.planes,n=t.center,i=-t.radius,r=0;r<6;r++){if(e[r].distanceToPoint(n)<i)return!1}return!0},e.intersectsBox=function(t){for(var e=this.planes,n=0;n<6;n++){var i=e[n];if(ii.x=i.normal.x>0?t.max.x:t.min.x,ii.y=i.normal.y>0?t.max.y:t.min.y,ii.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ii)<0)return!1}return!0},e.containsPoint=function(t){for(var e=this.planes,n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0},t}();function ai(){var t=null,e=!1,n=null,i=null;function r(e,a){n(e,a),i=t.requestAnimationFrame(r)}return{start:function(){!0!==e&&null!==n&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(t){n=t},setContext:function(e){t=e}}}function oi(t,e){var n=e.isWebGL2,i=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),i.get(t)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);var n=i.get(e);n&&(t.deleteBuffer(n.buffer),i.delete(e))},update:function(e,r){if(e.isGLBufferAttribute){var a=i.get(e);(!a||a.version<e.version)&&i.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version})}else{e.isInterleavedBufferAttribute&&(e=e.data);var o=i.get(e);void 0===o?i.set(e,function(e,i){var r=e.array,a=e.usage,o=t.createBuffer();t.bindBuffer(i,o),t.bufferData(i,r,a),e.onUploadCallback();var s=5126;return r instanceof Float32Array?s=5126:r instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):r instanceof Uint16Array?e.isFloat16BufferAttribute?n?s=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):s=5123:r instanceof Int16Array?s=5122:r instanceof Uint32Array?s=5125:r instanceof Int32Array?s=5124:r instanceof Int8Array?s=5120:r instanceof Uint8Array&&(s=5121),{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:e.version}}(e,r)):o.version<e.version&&(!function(e,i,r){var a=i.array,o=i.updateRange;t.bindBuffer(r,e),-1===o.count?t.bufferSubData(r,0,a):(n?t.bufferSubData(r,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):t.bufferSubData(r,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1)}(o.buffer,e,r),o.version=e.version)}}}}var si=function(t){function e(e,n,i,r){var a;void 0===e&&(e=1),void 0===n&&(n=1),void 0===i&&(i=1),void 0===r&&(r=1),(a=t.call(this)||this).type="PlaneGeometry",a.parameters={width:e,height:n,widthSegments:i,heightSegments:r};for(var o=e/2,s=n/2,c=Math.floor(i),l=Math.floor(r),u=c+1,h=l+1,d=e/c,p=n/l,f=[],m=[],v=[],g=[],y=0;y<h;y++)for(var x=y*p-s,_=0;_<u;_++){var b=_*d-o;m.push(b,-x,0),v.push(0,0,1),g.push(_/c),g.push(1-y/l)}for(var w=0;w<l;w++)for(var M=0;M<c;M++){var S=M+u*w,T=M+u*(w+1),E=M+1+u*(w+1),A=M+1+u*w;f.push(S,T,A),f.push(T,E,A)}return a.setIndex(f),a.setAttribute("position",new dn(m,3)),a.setAttribute("normal",new dn(v,3)),a.setAttribute("uv",new dn(g,2)),a}return ct(e,t),e}(Sn),ci={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",color_vertex:"#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",common:"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",clearcoat_pars_fragment:"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",transmissionmap_fragment:"#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",transmissionmap_pars_fragment:"#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",uv_pars_fragment:"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",shadow_vert:"#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},li={common:{diffuse:{value:new Ze(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ze(15658734)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new xt}}},ui={basic:{uniforms:qn([li.common,li.specularmap,li.envmap,li.aomap,li.lightmap,li.fog]),vertexShader:ci.meshbasic_vert,fragmentShader:ci.meshbasic_frag},lambert:{uniforms:qn([li.common,li.specularmap,li.envmap,li.aomap,li.lightmap,li.emissivemap,li.fog,li.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ci.meshlambert_vert,fragmentShader:ci.meshlambert_frag},phong:{uniforms:qn([li.common,li.specularmap,li.envmap,li.aomap,li.lightmap,li.emissivemap,li.bumpmap,li.normalmap,li.displacementmap,li.fog,li.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ci.meshphong_vert,fragmentShader:ci.meshphong_frag},standard:{uniforms:qn([li.common,li.envmap,li.aomap,li.lightmap,li.emissivemap,li.bumpmap,li.normalmap,li.displacementmap,li.roughnessmap,li.metalnessmap,li.fog,li.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ci.meshphysical_vert,fragmentShader:ci.meshphysical_frag},toon:{uniforms:qn([li.common,li.aomap,li.lightmap,li.emissivemap,li.bumpmap,li.normalmap,li.displacementmap,li.gradientmap,li.fog,li.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ci.meshtoon_vert,fragmentShader:ci.meshtoon_frag},matcap:{uniforms:qn([li.common,li.bumpmap,li.normalmap,li.displacementmap,li.fog,{matcap:{value:null}}]),vertexShader:ci.meshmatcap_vert,fragmentShader:ci.meshmatcap_frag},points:{uniforms:qn([li.points,li.fog]),vertexShader:ci.points_vert,fragmentShader:ci.points_frag},dashed:{uniforms:qn([li.common,li.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ci.linedashed_vert,fragmentShader:ci.linedashed_frag},depth:{uniforms:qn([li.common,li.displacementmap]),vertexShader:ci.depth_vert,fragmentShader:ci.depth_frag},normal:{uniforms:qn([li.common,li.bumpmap,li.normalmap,li.displacementmap,{opacity:{value:1}}]),vertexShader:ci.normal_vert,fragmentShader:ci.normal_frag},sprite:{uniforms:qn([li.sprite,li.fog]),vertexShader:ci.sprite_vert,fragmentShader:ci.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null}},vertexShader:ci.background_vert,fragmentShader:ci.background_frag},cube:{uniforms:qn([li.envmap,{opacity:{value:1}}]),vertexShader:ci.cube_vert,fragmentShader:ci.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ci.equirect_vert,fragmentShader:ci.equirect_frag},distanceRGBA:{uniforms:qn([li.common,li.displacementmap,{referencePosition:{value:new Lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ci.distanceRGBA_vert,fragmentShader:ci.distanceRGBA_frag},shadow:{uniforms:qn([li.lights,li.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ci.shadow_vert,fragmentShader:ci.shadow_frag}};function hi(t,e,n,i,r){var a,o,s=new Ze(0),c=0,u=null,h=0,d=null;function p(t,e){n.buffers.color.setClear(t.r,t.g,t.b,e,r)}return{getClearColor:function(){return s},setClearColor:function(t,e){void 0===e&&(e=1),s.set(t),p(s,c=e)},getClearAlpha:function(){return c},setClearAlpha:function(t){p(s,c=t)},render:function(n,r,f,m){var v=!0===r.isScene?r.background:null;v&&v.isTexture&&(v=e.get(v));var g=t.xr,y=g.getSession&&g.getSession();y&&"additive"===y.environmentBlendMode&&(v=null),null===v?p(s,c):v&&v.isColor&&(p(v,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.isWebGLCubeRenderTarget||v.mapping===l)?(void 0===o&&((o=new kn(new Wn(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:jn(ui.cube.uniforms),vertexShader:ui.cube.vertexShader,fragmentShader:ui.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(t,e,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),v.isWebGLCubeRenderTarget&&(v=v.texture),o.material.uniforms.envMap.value=v,o.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v._needsFlipEnvMap?-1:1,u===v&&h===v.version&&d===t.toneMapping||(o.material.needsUpdate=!0,u=v,h=v.version,d=t.toneMapping),n.unshift(o,o.geometry,o.material,0,0,null)):v&&v.isTexture&&(void 0===a&&((a=new kn(new si(2,2),new Yn({name:"BackgroundMaterial",uniforms:jn(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=v,!0===v.matrixAutoUpdate&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&h===v.version&&d===t.toneMapping||(a.material.needsUpdate=!0,u=v,h=v.version,d=t.toneMapping),n.unshift(a,a.geometry,a.material,0,0,null))}}}function di(t,e,n,i){var r=t.getParameter(34921),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||null!==a,s={},c=d(null),l=c;function u(e){return i.isWebGL2?t.bindVertexArray(e):a.bindVertexArrayOES(e)}function h(e){return i.isWebGL2?t.deleteVertexArray(e):a.deleteVertexArrayOES(e)}function d(t){for(var e=[],n=[],i=[],a=0;a<r;a++)e[a]=0,n[a]=0,i[a]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:n,attributeDivisors:i,object:t,attributes:{},index:null}}function p(){for(var t=l.newAttributes,e=0,n=t.length;e<n;e++)t[e]=0}function f(t){m(t,0)}function m(n,r){var a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;(a[n]=1,0===o[n]&&(t.enableVertexAttribArray(n),o[n]=1),s[n]!==r)&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](n,r),s[n]=r)}function v(){for(var e=l.newAttributes,n=l.enabledAttributes,i=0,r=n.length;i<r;i++)n[i]!==e[i]&&(t.disableVertexAttribArray(i),n[i]=0)}function g(e,n,r,a,o,s){!0!==i.isWebGL2||5124!==r&&5125!==r?t.vertexAttribPointer(e,n,r,a,o,s):t.vertexAttribIPointer(e,n,r,o,s)}function y(){x(),l!==c&&u((l=c).object)}function x(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(r,c,h,y,x){var _=!1;if(o){var b=function(e,n,r){var o=!0===r.wireframe,c=s[e.id];void 0===c&&(c={},s[e.id]=c);var l=c[n.id];void 0===l&&(l={},c[n.id]=l);var u=l[o];void 0===u&&(u=d(i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()),l[o]=u);return u}(y,h,c);l!==b&&u((l=b).object),(_=function(t,e){var n=l.attributes,i=t.attributes,r=0;for(var a in i){var o=n[a],s=i[a];if(void 0===o)return!0;if(o.attribute!==s)return!0;if(o.data!==s.data)return!0;r++}return l.attributesNum!==r||l.index!==e}(y,x))&&function(t,e){var n={},i=t.attributes,r=0;for(var a in i){var o=i[a],s={};s.attribute=o,o.data&&(s.data=o.data),n[a]=s,r++}l.attributes=n,l.attributesNum=r,l.index=e}(y,x)}else{var w=!0===c.wireframe;l.geometry===y.id&&l.program===h.id&&l.wireframe===w||(l.geometry=y.id,l.program=h.id,l.wireframe=w,_=!0)}!0===r.isInstancedMesh&&(_=!0),null!==x&&n.update(x,34963),_&&(!function(r,a,o,s){if(!1===i.isWebGL2&&(r.isInstancedMesh||s.isInstancedBufferGeometry)&&null===e.get("ANGLE_instanced_arrays"))return;p();var c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(var h in l){var d=l[h];if(d>=0){var y=c[h];if(void 0!==y){var x=y.normalized,_=y.itemSize,b=n.get(y);if(void 0===b)continue;var w=b.buffer,M=b.type,S=b.bytesPerElement;if(y.isInterleavedBufferAttribute){var T=y.data,E=T.stride,A=y.offset;T&&T.isInstancedInterleavedBuffer?(m(d,T.meshPerAttribute),void 0===s._maxInstanceCount&&(s._maxInstanceCount=T.meshPerAttribute*T.count)):f(d),t.bindBuffer(34962,w),g(d,_,M,x,E*S,A*S)}else y.isInstancedBufferAttribute?(m(d,y.meshPerAttribute),void 0===s._maxInstanceCount&&(s._maxInstanceCount=y.meshPerAttribute*y.count)):f(d),t.bindBuffer(34962,w),g(d,_,M,x,0,0)}else if("instanceMatrix"===h){var L=n.get(r.instanceMatrix);if(void 0===L)continue;var R=L.buffer,C=L.type;m(d+0,1),m(d+1,1),m(d+2,1),m(d+3,1),t.bindBuffer(34962,R),t.vertexAttribPointer(d+0,4,C,!1,64,0),t.vertexAttribPointer(d+1,4,C,!1,64,16),t.vertexAttribPointer(d+2,4,C,!1,64,32),t.vertexAttribPointer(d+3,4,C,!1,64,48)}else if("instanceColor"===h){var P=n.get(r.instanceColor);if(void 0===P)continue;var O=P.buffer,I=P.type;m(d,1),t.bindBuffer(34962,O),t.vertexAttribPointer(d,3,I,!1,12,0)}else if(void 0!==u){var D=u[h];if(void 0!==D)switch(D.length){case 2:t.vertexAttrib2fv(d,D);break;case 3:t.vertexAttrib3fv(d,D);break;case 4:t.vertexAttrib4fv(d,D);break;default:t.vertexAttrib1fv(d,D)}}}}v()}(r,c,h,y),null!==x&&t.bindBuffer(34963,n.get(x).buffer))},reset:y,resetDefaultState:x,dispose:function(){for(var t in y(),s){var e=s[t];for(var n in e){var i=e[n];for(var r in i)h(i[r].object),delete i[r];delete e[n]}delete s[t]}},releaseStatesOfGeometry:function(t){if(void 0!==s[t.id]){var e=s[t.id];for(var n in e){var i=e[n];for(var r in i)h(i[r].object),delete i[r];delete e[n]}delete s[t.id]}},releaseStatesOfProgram:function(t){for(var e in s){var n=s[e];if(void 0!==n[t.id]){var i=n[t.id];for(var r in i)h(i[r].object),delete i[r];delete n[t.id]}}},initAttributes:p,enableAttribute:f,disableUnusedAttributes:v}}function pi(t,e,n,i){var r,a=i.isWebGL2;this.setMode=function(t){r=t},this.render=function(e,i){t.drawArrays(r,e,i),n.update(i,r,1)},this.renderInstances=function(i,o,s){if(0!==s){var c,l;if(a)c=t,l="drawArraysInstanced";else if(l="drawArraysInstancedANGLE",null===(c=e.get("ANGLE_instanced_arrays")))return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[l](r,i,o,s),n.update(o,r,s)}}}function fi(t,e,n){var i;function r(e){if("highp"===e){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";e="mediump"}return"mediump"===e&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}var a="undefined"!=typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext||"undefined"!=typeof WebGL2ComputeRenderingContext&&t instanceof WebGL2ComputeRenderingContext,o=void 0!==n.precision?n.precision:"highp",s=r(o);s!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",s,"instead."),o=s);var c=!0===n.logarithmicDepthBuffer,l=t.getParameter(34930),u=t.getParameter(35660),h=t.getParameter(3379),d=t.getParameter(34076),p=t.getParameter(34921),f=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),g=u>0,y=a||!!e.get("OES_texture_float");return{isWebGL2:a,getMaxAnisotropy:function(){if(void 0!==i)return i;var n=e.get("EXT_texture_filter_anisotropic");return i=null!==n?t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:g&&y,maxSamples:a?t.getParameter(36183):0}}function mi(t){var e=this,n=null,i=0,r=!1,a=!1,o=new Pe,s=new xt,c={value:null,needsUpdate:!1};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(t,n,i,r){var a=null!==t?t.length:0,l=null;if(0!==a){if(l=c.value,!0!==r||null===l){var u=i+4*a,h=n.matrixWorldInverse;s.getNormalMatrix(h),(null===l||l.length<u)&&(l=new Float32Array(u));for(var d=0,p=i;d!==a;++d,p+=4)o.copy(t[d]).applyMatrix4(h,s),o.normal.toArray(l,p),l[p+3]=o.constant}c.value=l,c.needsUpdate=!0}return e.numPlanes=a,e.numIntersection=0,l}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(t,e,a){var o=0!==t.length||e||0!==i||r;return r=e,n=u(t,a,0),i=t.length,o},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,l()},this.setState=function(e,o,s){var h=e.clippingPlanes,d=e.clipIntersection,p=e.clipShadows,f=t.get(e);if(!r||null===h||0===h.length||a&&!p)a?u(null):l();else{var m=a?0:i,v=4*m,g=f.clippingState||null;c.value=g,g=u(h,o,v,s);for(var y=0;y!==v;++y)g[y]=n[y];f.clippingState=g,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=m}}}function vi(t){var e=new WeakMap;function n(t,e){return e===s?t.mapping=a:e===c&&(t.mapping=o),t}function i(t){var n=t.target;n.removeEventListener("dispose",i);var r=e.get(n);void 0!==r&&(e.delete(n),r.dispose())}return{get:function(r){if(r&&r.isTexture){var a=r.mapping;if(a===s||a===c){if(e.has(r))return n(e.get(r).texture,r.mapping);var o=r.image;if(o&&o.height>0){var l=t.getRenderList(),u=t.getRenderTarget(),h=new ti(o.height/2);return h.fromEquirectangularTexture(t,r),e.set(r,h),t.setRenderTarget(u),t.setRenderList(l),r.addEventListener("dispose",i),n(h.texture,r.mapping)}return null}}return r},dispose:function(){e=new WeakMap}}}function gi(t){var e={};function n(n){if(void 0!==e[n])return e[n];var i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i}return{has:function(t){return null!==n(t)},init:function(t){t.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float")},get:function(t){var e=n(t);return null===e&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e}}}function yi(t,e,n,i){var r={},a=new WeakMap;function o(t){var s=t.target;for(var c in null!==s.index&&e.remove(s.index),s.attributes)e.remove(s.attributes[c]);s.removeEventListener("dispose",o),delete r[s.id];var l=a.get(s);l&&(e.remove(l),a.delete(s)),i.releaseStatesOfGeometry(s),!0===s.isInstancedBufferGeometry&&delete s._maxInstanceCount,n.memory.geometries--}function s(t){var n=[],i=t.index,r=t.attributes.position,o=0;if(null!==i){var s=i.array;o=i.version;for(var c=0,l=s.length;c<l;c+=3){var u=s[c+0],h=s[c+1],d=s[c+2];n.push(u,h,h,d,d,u)}}else{var p=r.array;o=r.version;for(var f=0,m=p.length/3-1;f<m;f+=3){var v=f+0,g=f+1,y=f+2;n.push(v,g,g,y,y,v)}}var x=new(fn(n)>65535?un:cn)(n,1);x.version=o;var _=a.get(t);_&&e.remove(_),a.set(t,x)}return{get:function(t,e){return!0===r[e.id]||(e.addEventListener("dispose",o),r[e.id]=!0,n.memory.geometries++),e},update:function(t){var n=t.attributes;for(var i in n)e.update(n[i],34962);var r=t.morphAttributes;for(var a in r)for(var o=r[a],s=0,c=o.length;s<c;s++)e.update(o[s],34962)},getWireframeAttribute:function(t){var e=a.get(t);if(e){var n=t.index;null!==n&&e.version<n.version&&s(t)}else s(t);return a.get(t)}}}function xi(t,e,n,i){var r,a,o,s=i.isWebGL2;this.setMode=function(t){r=t},this.setIndex=function(t){a=t.type,o=t.bytesPerElement},this.render=function(e,i){t.drawElements(r,i,a,e*o),n.update(i,r,1)},this.renderInstances=function(i,c,l){if(0!==l){var u,h;if(s)u=t,h="drawElementsInstanced";else if(h="drawElementsInstancedANGLE",null===(u=e.get("ANGLE_instanced_arrays")))return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[h](r,c,a,i*o,l),n.update(c,r,l)}}}function _i(t){var e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case 4:e.triangles+=i*(t/3);break;case 1:e.lines+=i*(t/2);break;case 3:e.lines+=i*(t-1);break;case 2:e.lines+=i*t;break;case 0:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function bi(t,e){return t[0]-e[0]}function wi(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Mi(t){for(var e={},n=new Float32Array(8),i=[],r=0;r<8;r++)i[r]=[r,0];return{update:function(r,a,o,s){var c=r.morphTargetInfluences,l=void 0===c?0:c.length,u=e[a.id];if(void 0===u){u=[];for(var h=0;h<l;h++)u[h]=[h,0];e[a.id]=u}for(var d=0;d<l;d++){var p=u[d];p[0]=d,p[1]=c[d]}u.sort(wi);for(var f=0;f<8;f++)f<l&&u[f][1]?(i[f][0]=u[f][0],i[f][1]=u[f][1]):(i[f][0]=Number.MAX_SAFE_INTEGER,i[f][1]=0);i.sort(bi);for(var m=o.morphTargets&&a.morphAttributes.position,v=o.morphNormals&&a.morphAttributes.normal,g=0,y=0;y<8;y++){var x=i[y],_=x[0],b=x[1];_!==Number.MAX_SAFE_INTEGER&&b?(m&&a.getAttribute("morphTarget"+y)!==m[_]&&a.setAttribute("morphTarget"+y,m[_]),v&&a.getAttribute("morphNormal"+y)!==v[_]&&a.setAttribute("morphNormal"+y,v[_]),n[y]=b,g+=b):(m&&!0===a.hasAttribute("morphTarget"+y)&&a.deleteAttribute("morphTarget"+y),v&&!0===a.hasAttribute("morphNormal"+y)&&a.deleteAttribute("morphNormal"+y),n[y]=0)}var w=a.morphTargetsRelative?1:1-g;s.getUniforms().setValue(t,"morphTargetBaseInfluence",w),s.getUniforms().setValue(t,"morphTargetInfluences",n)}}}function Si(t,e,n,i){var r=new WeakMap;function a(t){var e=t.target;e.removeEventListener("dispose",a),n.remove(e.instanceMatrix),null!==e.instanceColor&&n.remove(e.instanceColor)}return{update:function(t){var o=i.render.frame,s=t.geometry,c=e.get(t,s);return r.get(c)!==o&&(e.update(c),r.set(c,o)),t.isInstancedMesh&&(!1===t.hasEventListener("dispose",a)&&t.addEventListener("dispose",a),n.update(t.instanceMatrix,34962),null!==t.instanceColor&&n.update(t.instanceColor,34962)),c},dispose:function(){r=new WeakMap}}}function Ti(t,e,n,i){void 0===t&&(t=null),void 0===e&&(e=1),void 0===n&&(n=1),void 0===i&&(i=1),wt.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=f,this.minFilter=f,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}function Ei(t,e,n,i){void 0===t&&(t=null),void 0===e&&(e=1),void 0===n&&(n=1),void 0===i&&(i=1),wt.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=f,this.minFilter=f,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}ui.physical={uniforms:qn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new yt(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Ze(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:ci.meshphysical_vert,fragmentShader:ci.meshphysical_frag},Ti.prototype=Object.create(wt.prototype),Ti.prototype.constructor=Ti,Ti.prototype.isDataTexture2DArray=!0,Ei.prototype=Object.create(wt.prototype),Ei.prototype.constructor=Ei,Ei.prototype.isDataTexture3D=!0;var Ai=new wt,Li=new Ti,Ri=new Ei,Ci=new $n,Pi=[],Oi=[],Ii=new Float32Array(16),Di=new Float32Array(9),Ni=new Float32Array(4);function Bi(t,e,n){var i=t[0];if(i<=0||i>0)return t;var r=e*n,a=Pi[r];if(void 0===a&&(a=new Float32Array(r),Pi[r]=a),0!==e){i.toArray(a,0);for(var o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function zi(t,e){if(t.length!==e.length)return!1;for(var n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Fi(t,e){for(var n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hi(t,e){var n=Oi[e];void 0===n&&(n=new Int32Array(e),Oi[e]=n);for(var i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Gi(t,e){var n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ui(t,e){var n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zi(n,e))return;t.uniform2fv(this.addr,e),Fi(n,e)}}function ki(t,e){var n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(void 0!==e.r)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zi(n,e))return;t.uniform3fv(this.addr,e),Fi(n,e)}}function Vi(t,e){var n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zi(n,e))return;t.uniform4fv(this.addr,e),Fi(n,e)}}function Wi(t,e){var n=this.cache,i=e.elements;if(void 0===i){if(zi(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Fi(n,e)}else{if(zi(n,i))return;Ni.set(i),t.uniformMatrix2fv(this.addr,!1,Ni),Fi(n,i)}}function ji(t,e){var n=this.cache,i=e.elements;if(void 0===i){if(zi(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Fi(n,e)}else{if(zi(n,i))return;Di.set(i),t.uniformMatrix3fv(this.addr,!1,Di),Fi(n,i)}}function qi(t,e){var n=this.cache,i=e.elements;if(void 0===i){if(zi(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Fi(n,e)}else{if(zi(n,i))return;Ii.set(i),t.uniformMatrix4fv(this.addr,!1,Ii),Fi(n,i)}}function Xi(t,e,n){var i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||Ai,r)}function Yi(t,e,n){var i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Li,r)}function Zi(t,e,n){var i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ri,r)}function Ji(t,e,n){var i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||Ci,r)}function Qi(t,e){var n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ki(t,e){var n=this.cache;zi(n,e)||(t.uniform2iv(this.addr,e),Fi(n,e))}function $i(t,e){var n=this.cache;zi(n,e)||(t.uniform3iv(this.addr,e),Fi(n,e))}function tr(t,e){var n=this.cache;zi(n,e)||(t.uniform4iv(this.addr,e),Fi(n,e))}function er(t,e){var n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nr(t,e){t.uniform1fv(this.addr,e)}function ir(t,e){t.uniform1iv(this.addr,e)}function rr(t,e){t.uniform2iv(this.addr,e)}function ar(t,e){t.uniform3iv(this.addr,e)}function or(t,e){t.uniform4iv(this.addr,e)}function sr(t,e){var n=Bi(e,this.size,2);t.uniform2fv(this.addr,n)}function cr(t,e){var n=Bi(e,this.size,3);t.uniform3fv(this.addr,n)}function lr(t,e){var n=Bi(e,this.size,4);t.uniform4fv(this.addr,n)}function ur(t,e){var n=Bi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hr(t,e){var n=Bi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dr(t,e){var n=Bi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pr(t,e,n){var i=e.length,r=Hi(n,i);t.uniform1iv(this.addr,r);for(var a=0;a!==i;++a)n.safeSetTexture2D(e[a]||Ai,r[a])}function fr(t,e,n){var i=e.length,r=Hi(n,i);t.uniform1iv(this.addr,r);for(var a=0;a!==i;++a)n.safeSetTextureCube(e[a]||Ci,r[a])}function mr(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=function(t){switch(t){case 5126:return Gi;case 35664:return Ui;case 35665:return ki;case 35666:return Vi;case 35674:return Wi;case 35675:return ji;case 35676:return qi;case 5124:case 35670:return Qi;case 35667:case 35671:return Ki;case 35668:case 35672:return $i;case 35669:case 35673:return tr;case 5125:return er;case 35678:case 36198:case 36298:case 36306:case 35682:return Xi;case 35679:case 36299:case 36307:return Zi;case 35680:case 36300:case 36308:case 36293:return Ji;case 36289:case 36303:case 36311:case 36292:return Yi}}(e.type)}function vr(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=function(t){switch(t){case 5126:return nr;case 35664:return sr;case 35665:return cr;case 35666:return lr;case 35674:return ur;case 35675:return hr;case 35676:return dr;case 5124:case 35670:return ir;case 35667:case 35671:return rr;case 35668:case 35672:return ar;case 35669:case 35673:return or;case 35678:case 36198:case 36298:case 36306:case 35682:return pr;case 35680:case 36300:case 36308:case 36293:return fr}}(e.type)}function gr(t){this.id=t,this.seq=[],this.map={}}vr.prototype.updateCache=function(t){var e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),Fi(e,t)},gr.prototype.setValue=function(t,e,n){for(var i=this.seq,r=0,a=i.length;r!==a;++r){var o=i[r];o.setValue(t,e[o.id],n)}};var yr=/(\w+)(\])?(\[|\.)?/g;function xr(t,e){t.seq.push(e),t.map[e.id]=e}function _r(t,e,n){var i=t.name,r=i.length;for(yr.lastIndex=0;;){var a=yr.exec(i),o=yr.lastIndex,s=a[1],c="]"===a[2],l=a[3];if(c&&(s|=0),void 0===l||"["===l&&o+2===r){xr(n,void 0===l?new mr(s,t,e):new vr(s,t,e));break}var u=n.map[s];void 0===u&&xr(n,u=new gr(s)),n=u}}function br(t,e){this.seq=[],this.map={};for(var n=t.getProgramParameter(e,35718),i=0;i<n;++i){var r=t.getActiveUniform(e,i);_r(r,t.getUniformLocation(e,r.name),this)}}function wr(t,e,n){var i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}br.prototype.setValue=function(t,e,n,i){var r=this.map[e];void 0!==r&&r.setValue(t,n,i)},br.prototype.setOptional=function(t,e,n){var i=e[n];void 0!==i&&this.setValue(t,n,i)},br.upload=function(t,e,n,i){for(var r=0,a=e.length;r!==a;++r){var o=e[r],s=n[o.id];!1!==s.needsUpdate&&o.setValue(t,s.value,i)}},br.seqWithValue=function(t,e){for(var n=[],i=0,r=t.length;i!==r;++i){var a=t[i];a.id in e&&n.push(a)}return n};var Mr=0;function Sr(t){switch(t){case Y:return["Linear","( value )"];case Z:return["sRGB","( value )"];case Q:return["RGBE","( value )"];case K:return["RGBM","( value, 7.0 )"];case $:return["RGBM","( value, 16.0 )"];case tt:return["RGBD","( value, 256.0 )"];case J:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Tr(t,e,n){var i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();return i&&""===r?"":"THREE.WebGLShader: gl.getShaderInfoLog() "+n+"\n"+r+function(t){for(var e=t.split("\n"),n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join("\n")}(t.getShaderSource(e))}function Er(t,e){var n=Sr(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Ar(t,e){var n;switch(e){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="OptimizedCineon";break;case 4:n="ACESFilmic";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Lr(t){return""!==t}function Rr(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cr(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Or(t){return t.replace(Pr,Ir)}function Ir(t,e){var n=ci[e];if(void 0===n)throw new Error("Can not resolve #include <"+e+">");return Or(n)}var Dr=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Nr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Br(t){return t.replace(Nr,Fr).replace(Dr,zr)}function zr(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Fr(t,e,n,i)}function Fr(t,e,n,i){for(var r="",a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Hr(t){var e="precision "+t.precision+" float;\nprecision "+t.precision+" int;";return"highp"===t.precision?e+="\n#define HIGH_PRECISION":"mediump"===t.precision?e+="\n#define MEDIUM_PRECISION":"lowp"===t.precision&&(e+="\n#define LOW_PRECISION"),e}function Gr(t,e,n,i){var r,s,c,h,d,p=t.getContext(),f=n.defines,m=n.vertexShader,v=n.fragmentShader,g=function(t){var e="SHADOWMAP_TYPE_BASIC";return 1===t.shadowMapType?e="SHADOWMAP_TYPE_PCF":2===t.shadowMapType?e="SHADOWMAP_TYPE_PCF_SOFT":3===t.shadowMapType&&(e="SHADOWMAP_TYPE_VSM"),e}(n),y=function(t){var e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case a:case o:e="ENVMAP_TYPE_CUBE";break;case l:case u:e="ENVMAP_TYPE_CUBE_UV"}return e}(n),x=function(t){var e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case o:case u:e="ENVMAP_MODE_REFRACTION"}return e}(n),_=function(t){var e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD"}return e}(n),b=t.gammaFactor>0?t.gammaFactor:1,w=n.isWebGL2?"":function(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||"physical"===t.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join("\n")}(n),M=function(t){var e=[];for(var n in t){var i=t[n];!1!==i&&e.push("#define "+n+" "+i)}return e.join("\n")}(f),S=p.createProgram(),T=n.glslVersion?"#version "+n.glslVersion+"\n":"";n.isRawShaderMaterial?((r=[M].filter(Lr).join("\n")).length>0&&(r+="\n"),(s=[w,M].filter(Lr).join("\n")).length>0&&(s+="\n")):(r=[Hr(n),"#define SHADER_NAME "+n.shaderName,M,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+b,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&!1===n.flatShading?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+g:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Lr).join("\n"),s=[w,Hr(n),"#define SHADER_NAME "+n.shaderName,M,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+y:"",n.envMap?"#define "+x:"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+g:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==n.toneMapping?"#define TONE_MAPPING":"",0!==n.toneMapping?ci.tonemapping_pars_fragment:"",0!==n.toneMapping?Ar("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",ci.encodings_pars_fragment,n.map?Er("mapTexelToLinear",n.mapEncoding):"",n.matcap?Er("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Er("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Er("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Er("lightMapTexelToLinear",n.lightMapEncoding):"",(c="linearToOutputTexel",h=n.outputEncoding,d=Sr(h),"vec4 "+c+"( vec4 value ) { return LinearTo"+d[0]+d[1]+"; }"),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].filter(Lr).join("\n")),m=Cr(m=Rr(m=Or(m),n),n),v=Cr(v=Rr(v=Or(v),n),n),m=Br(m),v=Br(v),n.isWebGL2&&!0!==n.isRawShaderMaterial&&(T="#version 300 es\n",r=["#define attribute in","#define varying out","#define texture2D texture"].join("\n")+"\n"+r,s=["#define varying in",n.glslVersion===rt?"":"out highp vec4 pc_fragColor;",n.glslVersion===rt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+s);var E,A,L=T+s+v,R=wr(p,35633,T+r+m),C=wr(p,35632,L);if(p.attachShader(S,R),p.attachShader(S,C),void 0!==n.index0AttributeName?p.bindAttribLocation(S,0,n.index0AttributeName):!0===n.morphTargets&&p.bindAttribLocation(S,0,"position"),p.linkProgram(S),t.debug.checkShaderErrors){var P=p.getProgramInfoLog(S).trim(),O=p.getShaderInfoLog(R).trim(),I=p.getShaderInfoLog(C).trim(),D=!0,N=!0;if(!1===p.getProgramParameter(S,35714)){D=!1;var B=Tr(p,R,"vertex"),z=Tr(p,C,"fragment");console.error("THREE.WebGLProgram: shader error: ",p.getError(),"35715",p.getProgramParameter(S,35715),"gl.getProgramInfoLog",P,B,z)}else""!==P?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",P):""!==O&&""!==I||(N=!1);N&&(this.diagnostics={runnable:D,programLog:P,vertexShader:{log:O,prefix:r},fragmentShader:{log:I,prefix:s}})}return p.deleteShader(R),p.deleteShader(C),this.getUniforms=function(){return void 0===E&&(E=new br(p,S)),E},this.getAttributes=function(){return void 0===A&&(A=function(t,e){for(var n={},i=t.getProgramParameter(e,35721),r=0;r<i;r++){var a=t.getActiveAttrib(e,r).name;n[a]=t.getAttribLocation(e,a)}return n}(p,S)),A},this.destroy=function(){i.releaseStatesOfProgram(this),p.deleteProgram(S),this.program=void 0},this.name=n.shaderName,this.id=Mr++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=C,this}function Ur(t,e,n,i,r,a){var o=[],s=i.isWebGL2,c=i.logarithmicDepthBuffer,h=i.floatVertexTextures,d=i.maxVertexUniforms,p=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function g(t){var e;return t&&t.isTexture?e=t.encoding:t&&t.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),e=t.texture.encoding):e=Y,e}return{getParameters:function(r,o,v,y,x){var _,b,w=y.fog,M=r.isMeshStandardMaterial?y.environment:null,S=e.get(r.envMap||M),T=m[r.type],E=x.isSkinnedMesh?function(t){var e=t.skeleton.bones;if(h)return 1024;var n=d,i=Math.floor((n-20)/4),r=Math.min(i,e.length);return r<e.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+e.length+" bones. This GPU supports "+r+"."),0):r}(x):0;if(null!==r.precision&&(f=i.getMaxPrecision(r.precision))!==r.precision&&console.warn("THREE.WebGLProgram.getParameters:",r.precision,"not supported, using",f,"instead."),T){var A=ui[T];_=A.vertexShader,b=A.fragmentShader}else _=r.vertexShader,b=r.fragmentShader;var L=t.getRenderTarget();return{isWebGL2:s,shaderID:T,shaderName:r.type,vertexShader:_,fragmentShader:b,defines:r.defines,isRawShaderMaterial:!0===r.isRawShaderMaterial,glslVersion:r.glslVersion,precision:f,instancing:!0===x.isInstancedMesh,instancingColor:!0===x.isInstancedMesh&&null!==x.instanceColor,supportsVertexTextures:p,outputEncoding:null!==L?g(L.texture):t.outputEncoding,map:!!r.map,mapEncoding:g(r.map),matcap:!!r.matcap,matcapEncoding:g(r.matcap),envMap:!!S,envMapMode:S&&S.mapping,envMapEncoding:g(S),envMapCubeUV:!!S&&(S.mapping===l||S.mapping===u),lightMap:!!r.lightMap,lightMapEncoding:g(r.lightMap),aoMap:!!r.aoMap,emissiveMap:!!r.emissiveMap,emissiveMapEncoding:g(r.emissiveMap),bumpMap:!!r.bumpMap,normalMap:!!r.normalMap,objectSpaceNormalMap:1===r.normalMapType,tangentSpaceNormalMap:0===r.normalMapType,clearcoatMap:!!r.clearcoatMap,clearcoatRoughnessMap:!!r.clearcoatRoughnessMap,clearcoatNormalMap:!!r.clearcoatNormalMap,displacementMap:!!r.displacementMap,roughnessMap:!!r.roughnessMap,metalnessMap:!!r.metalnessMap,specularMap:!!r.specularMap,alphaMap:!!r.alphaMap,gradientMap:!!r.gradientMap,sheen:!!r.sheen,transmissionMap:!!r.transmissionMap,combine:r.combine,vertexTangents:r.normalMap&&r.vertexTangents,vertexColors:r.vertexColors,vertexUvs:!!(r.map||r.bumpMap||r.normalMap||r.specularMap||r.alphaMap||r.emissiveMap||r.roughnessMap||r.metalnessMap||r.clearcoatMap||r.clearcoatRoughnessMap||r.clearcoatNormalMap||r.displacementMap||r.transmissionMap),uvsVertexOnly:!(r.map||r.bumpMap||r.normalMap||r.specularMap||r.alphaMap||r.emissiveMap||r.roughnessMap||r.metalnessMap||r.clearcoatNormalMap||r.transmissionMap||!r.displacementMap),fog:!!w,useFog:r.fog,fogExp2:w&&w.isFogExp2,flatShading:r.flatShading,sizeAttenuation:r.sizeAttenuation,logarithmicDepthBuffer:c,skinning:r.skinning&&E>0,maxBones:E,useVertexTexture:h,morphTargets:r.morphTargets,morphNormals:r.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:r.dithering,shadowMapEnabled:t.shadowMap.enabled&&v.length>0,shadowMapType:t.shadowMap.type,toneMapping:r.toneMapped?t.toneMapping:0,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:r.premultipliedAlpha,alphaTest:r.alphaTest,doubleSided:2===r.side,flipSided:1===r.side,depthPacking:void 0!==r.depthPacking&&r.depthPacking,index0AttributeName:r.index0AttributeName,extensionDerivatives:r.extensions&&r.extensions.derivatives,extensionFragDepth:r.extensions&&r.extensions.fragDepth,extensionDrawBuffers:r.extensions&&r.extensions.drawBuffers,extensionShaderTextureLOD:r.extensions&&r.extensions.shaderTextureLOD,rendererExtensionFragDepth:s||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:s||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:s||n.has("EXT_shader_texture_lod"),customProgramCacheKey:r.customProgramCacheKey()}},getProgramCacheKey:function(e){var n=[];if(e.shaderID?n.push(e.shaderID):(n.push(e.fragmentShader),n.push(e.vertexShader)),void 0!==e.defines)for(var i in e.defines)n.push(i),n.push(e.defines[i]);if(!1===e.isRawShaderMaterial){for(var r=0;r<v.length;r++)n.push(e[v[r]]);n.push(t.outputEncoding),n.push(t.gammaFactor)}return n.push(e.customProgramCacheKey),n.join()},getUniforms:function(t){var e,n=m[t.type];if(n){var i=ui[n];e=Xn.clone(i.uniforms)}else e=t.uniforms;return e},acquireProgram:function(e,n){for(var i,a=0,s=o.length;a<s;a++){var c=o[a];if(c.cacheKey===n){++(i=c).usedTimes;break}}return void 0===i&&(i=new Gr(t,n,e,r),o.push(i)),i},releaseProgram:function(t){if(0==--t.usedTimes){var e=o.indexOf(t);o[e]=o[o.length-1],o.pop(),t.destroy()}},programs:o}}function kr(){var t=new WeakMap;return{get:function(e){var n=t.get(e);return void 0===n&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e)},update:function(e,n,i){t.get(e)[n]=i},dispose:function(){t=new WeakMap}}}function Vr(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wr(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jr(t){var e=[],n=0,i=[],r=[],a={id:-1};function o(i,r,o,s,c,l){var u=e[n],h=t.get(o);return void 0===u?(u={id:i.id,object:i,geometry:r,material:o,program:h.program||a,groupOrder:s,renderOrder:i.renderOrder,z:c,group:l},e[n]=u):(u.id=i.id,u.object=i,u.geometry=r,u.material=o,u.program=h.program||a,u.groupOrder=s,u.renderOrder=i.renderOrder,u.z=c,u.group=l),n++,u}return{opaque:i,transparent:r,init:function(){n=0,i.length=0,r.length=0},push:function(t,e,n,a,s,c){var l=o(t,e,n,a,s,c);(!0===n.transparent?r:i).push(l)},unshift:function(t,e,n,a,s,c){var l=o(t,e,n,a,s,c);(!0===n.transparent?r:i).unshift(l)},finish:function(){for(var t=n,i=e.length;t<i;t++){var r=e[t];if(null===r.id)break;r.id=null,r.object=null,r.geometry=null,r.material=null,r.program=null,r.group=null}},sort:function(t,e){i.length>1&&i.sort(t||Vr),r.length>1&&r.sort(e||Wr)}}}function qr(t){var e=new WeakMap;return{get:function(n,i){var r,a=e.get(n);return void 0===a?(r=new jr(t),e.set(n,new WeakMap),e.get(n).set(i,r)):void 0===(r=a.get(i))&&(r=new jr(t),a.set(i,r)),r},dispose:function(){e=new WeakMap}}}function Xr(){var t={};return{get:function(e){if(void 0!==t[e.id])return t[e.id];var n;switch(e.type){case"DirectionalLight":n={direction:new Lt,color:new Ze};break;case"SpotLight":n={position:new Lt,direction:new Lt,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Lt,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Lt,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new Lt,halfWidth:new Lt,halfHeight:new Lt}}return t[e.id]=n,n}}}var Yr=0;function Zr(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function Jr(t,e){for(var n,i=new Xr,r=(n={},{get:function(t){if(void 0!==n[t.id])return n[t.id];var e;switch(t.type){case"DirectionalLight":case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3}}return n[t.id]=e,e}}),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},o=0;o<9;o++)a.probe.push(new Lt);var s=new Lt,c=new ne,l=new ne;return{setup:function(n){for(var o=0,s=0,c=0,l=0;l<9;l++)a.probe[l].set(0,0,0);var u=0,h=0,d=0,p=0,f=0,m=0,v=0,g=0;n.sort(Zr);for(var y=0,x=n.length;y<x;y++){var _=n[y],b=_.color,w=_.intensity,M=_.distance,S=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)o+=b.r*w,s+=b.g*w,c+=b.b*w;else if(_.isLightProbe)for(var T=0;T<9;T++)a.probe[T].addScaledVector(_.sh.coefficients[T],w);else if(_.isDirectionalLight){var E=i.get(_);if(E.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){var A=_.shadow,L=r.get(_);L.shadowBias=A.bias,L.shadowNormalBias=A.normalBias,L.shadowRadius=A.radius,L.shadowMapSize=A.mapSize,a.directionalShadow[u]=L,a.directionalShadowMap[u]=S,a.directionalShadowMatrix[u]=_.shadow.matrix,m++}a.directional[u]=E,u++}else if(_.isSpotLight){var R=i.get(_);if(R.position.setFromMatrixPosition(_.matrixWorld),R.color.copy(b).multiplyScalar(w),R.distance=M,R.coneCos=Math.cos(_.angle),R.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),R.decay=_.decay,_.castShadow){var C=_.shadow,P=r.get(_);P.shadowBias=C.bias,P.shadowNormalBias=C.normalBias,P.shadowRadius=C.radius,P.shadowMapSize=C.mapSize,a.spotShadow[d]=P,a.spotShadowMap[d]=S,a.spotShadowMatrix[d]=_.shadow.matrix,g++}a.spot[d]=R,d++}else if(_.isRectAreaLight){var O=i.get(_);O.color.copy(b).multiplyScalar(w),O.halfWidth.set(.5*_.width,0,0),O.halfHeight.set(0,.5*_.height,0),a.rectArea[p]=O,p++}else if(_.isPointLight){var I=i.get(_);if(I.color.copy(_.color).multiplyScalar(_.intensity),I.distance=_.distance,I.decay=_.decay,_.castShadow){var D=_.shadow,N=r.get(_);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,N.shadowCameraNear=D.camera.near,N.shadowCameraFar=D.camera.far,a.pointShadow[h]=N,a.pointShadowMap[h]=S,a.pointShadowMatrix[h]=_.shadow.matrix,v++}a.point[h]=I,h++}else if(_.isHemisphereLight){var B=i.get(_);B.skyColor.copy(_.color).multiplyScalar(w),B.groundColor.copy(_.groundColor).multiplyScalar(w),a.hemi[f]=B,f++}}p>0&&(e.isWebGL2||!0===t.has("OES_texture_float_linear")?(a.rectAreaLTC1=li.LTC_FLOAT_1,a.rectAreaLTC2=li.LTC_FLOAT_2):!0===t.has("OES_texture_half_float_linear")?(a.rectAreaLTC1=li.LTC_HALF_1,a.rectAreaLTC2=li.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=o,a.ambient[1]=s,a.ambient[2]=c;var z=a.hash;z.directionalLength===u&&z.pointLength===h&&z.spotLength===d&&z.rectAreaLength===p&&z.hemiLength===f&&z.numDirectionalShadows===m&&z.numPointShadows===v&&z.numSpotShadows===g||(a.directional.length=u,a.spot.length=d,a.rectArea.length=p,a.point.length=h,a.hemi.length=f,a.directionalShadow.length=m,a.directionalShadowMap.length=m,a.pointShadow.length=v,a.pointShadowMap.length=v,a.spotShadow.length=g,a.spotShadowMap.length=g,a.directionalShadowMatrix.length=m,a.pointShadowMatrix.length=v,a.spotShadowMatrix.length=g,z.directionalLength=u,z.pointLength=h,z.spotLength=d,z.rectAreaLength=p,z.hemiLength=f,z.numDirectionalShadows=m,z.numPointShadows=v,z.numSpotShadows=g,a.version=Yr++)},setupView:function(t,e){for(var n=0,i=0,r=0,o=0,u=0,h=e.matrixWorldInverse,d=0,p=t.length;d<p;d++){var f=t[d];if(f.isDirectionalLight){var m=a.directional[n];m.direction.setFromMatrixPosition(f.matrixWorld),s.setFromMatrixPosition(f.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(h),n++}else if(f.isSpotLight){var v=a.spot[r];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(h),v.direction.setFromMatrixPosition(f.matrixWorld),s.setFromMatrixPosition(f.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(h),r++}else if(f.isRectAreaLight){var g=a.rectArea[o];g.position.setFromMatrixPosition(f.matrixWorld),g.position.applyMatrix4(h),l.identity(),c.copy(f.matrixWorld),c.premultiply(h),l.extractRotation(c),g.halfWidth.set(.5*f.width,0,0),g.halfHeight.set(0,.5*f.height,0),g.halfWidth.applyMatrix4(l),g.halfHeight.applyMatrix4(l),o++}else if(f.isPointLight){var y=a.point[i];y.position.setFromMatrixPosition(f.matrixWorld),y.position.applyMatrix4(h),i++}else if(f.isHemisphereLight){var x=a.hemi[u];x.direction.setFromMatrixPosition(f.matrixWorld),x.direction.transformDirection(h),x.direction.normalize(),u++}}},state:a}}function Qr(t,e){var n=new Jr(t,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:function(){n.setup(i)},setupLightsView:function(t){n.setupView(i,t)},pushLight:function(t){i.push(t)},pushShadow:function(t){r.push(t)}}}function Kr(t,e){var n=new WeakMap;return{get:function(i,r){var a;return void 0===r&&(r=0),!1===n.has(i)?(a=new Qr(t,e),n.set(i,[]),n.get(i).push(a)):r>=n.get(i).length?(a=new Qr(t,e),n.get(i).push(a)):a=n.get(i)[r],a},dispose:function(){n=new WeakMap}}}function $r(t){Ke.call(this),this.type="MeshDepthMaterial",this.depthPacking=3200,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}function ta(t){Ke.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new Lt,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}$r.prototype=Object.create(Ke.prototype),$r.prototype.constructor=$r,$r.prototype.isMeshDepthMaterial=!0,$r.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this},ta.prototype=Object.create(Ke.prototype),ta.prototype.constructor=ta,ta.prototype.isMeshDistanceMaterial=!0,ta.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};function ea(t,e,n){var i=new ri,r=new yt,a=new yt,o=new St,s=[],c=[],l={},u={0:1,1:0,2:2},h=new Yn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),d=h.clone();d.defines.HORIZONTAL_PASS=1;var p=new Sn;p.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var m=new kn(p,h),v=this;function y(n,i){var r=e.update(m);h.uniforms.shadow_pass.value=n.map.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,t.setRenderTarget(n.mapPass),t.clear(),t.renderBufferDirect(i,null,r,h,m,null),d.uniforms.shadow_pass.value=n.mapPass.texture,d.uniforms.resolution.value=n.mapSize,d.uniforms.radius.value=n.radius,t.setRenderTarget(n.map),t.clear(),t.renderBufferDirect(i,null,r,d,m,null)}function x(t,e,n){var i=t<<0|e<<1|n<<2,r=s[i];return void 0===r&&(r=new $r({depthPacking:3201,morphTargets:t,skinning:e}),s[i]=r),r}function _(t,e,n){var i=t<<0|e<<1|n<<2,r=c[i];return void 0===r&&(r=new ta({morphTargets:t,skinning:e}),c[i]=r),r}function b(e,n,i,r,a,o,s){var c=null,h=x,d=e.customDepthMaterial;if(!0===r.isPointLight&&(h=_,d=e.customDistanceMaterial),void 0===d){var p=!1;!0===i.morphTargets&&(p=n.morphAttributes&&n.morphAttributes.position&&n.morphAttributes.position.length>0);var f=!1;!0===e.isSkinnedMesh&&(!0===i.skinning?f=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",e)),c=h(p,f,!0===e.isInstancedMesh)}else c=d;if(t.localClippingEnabled&&!0===i.clipShadows&&0!==i.clippingPlanes.length){var m=c.uuid,v=i.uuid,g=l[m];void 0===g&&(g={},l[m]=g);var y=g[v];void 0===y&&(y=c.clone(),g[v]=y),c=y}return c.visible=i.visible,c.wireframe=i.wireframe,c.side=3===s?null!==i.shadowSide?i.shadowSide:i.side:null!==i.shadowSide?i.shadowSide:u[i.side],c.clipShadows=i.clipShadows,c.clippingPlanes=i.clippingPlanes,c.clipIntersection=i.clipIntersection,c.wireframeLinewidth=i.wireframeLinewidth,c.linewidth=i.linewidth,!0===r.isPointLight&&!0===c.isMeshDistanceMaterial&&(c.referencePosition.setFromMatrixPosition(r.matrixWorld),c.nearDistance=a,c.farDistance=o),c}function w(n,r,a,o,s){if(!1!==n.visible){if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&3===s)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);var c=e.update(n),l=n.material;if(Array.isArray(l))for(var u=c.groups,h=0,d=u.length;h<d;h++){var p=u[h],f=l[p.materialIndex];if(f&&f.visible){var m=b(n,c,f,o,a.near,a.far,s);t.renderBufferDirect(a,null,c,m,n,p)}}else if(l.visible){var v=b(n,c,l,o,a.near,a.far,s);t.renderBufferDirect(a,null,c,v,n,null)}}for(var g=n.children,y=0,x=g.length;y<x;y++)w(g[y],r,a,o,s)}}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(e,s,c){if(!1!==v.enabled&&(!1!==v.autoUpdate||!1!==v.needsUpdate)&&0!==e.length){var l=t.getRenderTarget(),u=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),d=t.state;d.setBlending(0),d.buffers.color.setClear(1,1,1,1),d.buffers.depth.setTest(!0),d.setScissorTest(!1);for(var p=0,m=e.length;p<m;p++){var x=e[p],_=x.shadow;if(void 0!==_){if(!1!==_.autoUpdate||!1!==_.needsUpdate){r.copy(_.mapSize);var b=_.getFrameExtents();if(r.multiply(b),a.copy(_.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(a.x=Math.floor(n/b.x),r.x=a.x*b.x,_.mapSize.x=a.x),r.y>n&&(a.y=Math.floor(n/b.y),r.y=a.y*b.y,_.mapSize.y=a.y)),null===_.map&&!_.isPointLightShadow&&3===this.type){var M={minFilter:g,magFilter:g,format:A};_.map=new Tt(r.x,r.y,M),_.map.texture.name=x.name+".shadowMap",_.mapPass=new Tt(r.x,r.y,M),_.camera.updateProjectionMatrix()}if(null===_.map){var S={minFilter:f,magFilter:f,format:A};_.map=new Tt(r.x,r.y,S),_.map.texture.name=x.name+".shadowMap",_.camera.updateProjectionMatrix()}t.setRenderTarget(_.map),t.clear();for(var T=_.getViewportCount(),E=0;E<T;E++){var L=_.getViewport(E);o.set(a.x*L.x,a.y*L.y,a.x*L.z,a.y*L.w),d.viewport(o),_.updateMatrices(x,E),i=_.getFrustum(),w(s,c,_.camera,x,this.type)}_.isPointLightShadow||3!==this.type||y(_,c),_.needsUpdate=!1}}else console.warn("THREE.WebGLShadowMap:",x,"has no shadow.")}v.needsUpdate=!1,t.setRenderTarget(l,u,h)}}}function na(t,e,n){var r,a,o=n.isWebGL2;var s=new function(){var e=!1,n=new St,i=null,r=new St(0,0,0,0);return{setMask:function(n){i===n||e||(t.colorMask(n,n,n,n),i=n)},setLocked:function(t){e=t},setClear:function(e,i,a,o,s){!0===s&&(e*=o,i*=o,a*=o),n.set(e,i,a,o),!1===r.equals(n)&&(t.clearColor(e,i,a,o),r.copy(n))},reset:function(){e=!1,i=null,r.set(-1,0,0,0)}}},c=new function(){var e=!1,n=null,i=null,r=null;return{setTest:function(t){t?B(2929):z(2929)},setMask:function(i){n===i||e||(t.depthMask(i),n=i)},setFunc:function(e){if(i!==e){if(e)switch(e){case 0:t.depthFunc(512);break;case 1:t.depthFunc(519);break;case 2:t.depthFunc(513);break;case 3:t.depthFunc(515);break;case 4:t.depthFunc(514);break;case 5:t.depthFunc(518);break;case 6:t.depthFunc(516);break;case 7:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);i=e}},setLocked:function(t){e=t},setClear:function(e){r!==e&&(t.clearDepth(e),r=e)},reset:function(){e=!1,n=null,i=null,r=null}}},l=new function(){var e=!1,n=null,i=null,r=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(t){e||(t?B(2960):z(2960))},setMask:function(i){n===i||e||(t.stencilMask(i),n=i)},setFunc:function(e,n,o){i===e&&r===n&&a===o||(t.stencilFunc(e,n,o),i=e,r=n,a=o)},setOp:function(e,n,i){o===e&&s===n&&c===i||(t.stencilOp(e,n,i),o=e,s=n,c=i)},setLocked:function(t){e=t},setClear:function(e){l!==e&&(t.clearStencil(e),l=e)},reset:function(){e=!1,n=null,i=null,r=null,a=null,o=null,s=null,c=null,l=null}}},u={},h=null,d=null,p=null,f=null,m=null,v=null,g=null,y=null,x=null,_=!1,b=null,w=null,M=null,S=null,T=null,E=t.getParameter(35661),A=!1,L=0,R=t.getParameter(7938);-1!==R.indexOf("WebGL")?(L=parseFloat(/^WebGL (\d)/.exec(R)[1]),A=L>=1):-1!==R.indexOf("OpenGL ES")&&(L=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),A=L>=2);var C=null,P={},O=new St,I=new St;function D(e,n,i){var r=new Uint8Array(4),a=t.createTexture();t.bindTexture(e,a),t.texParameteri(e,10241,9728),t.texParameteri(e,10240,9728);for(var o=0;o<i;o++)t.texImage2D(n+o,0,6408,1,1,0,6408,5121,r);return a}var N={};function B(e){!0!==u[e]&&(t.enable(e),u[e]=!0)}function z(e){!1!==u[e]&&(t.disable(e),u[e]=!1)}N[3553]=D(3553,3553,1),N[34067]=D(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),B(2929),c.setFunc(3),k(!1),V(1),B(2884),U(0);var F=((r={})[100]=32774,r[101]=32778,r[102]=32779,r);if(o)F[103]=32775,F[104]=32776;else{var H=e.get("EXT_blend_minmax");null!==H&&(F[103]=H.MIN_EXT,F[104]=H.MAX_EXT)}var G=((a={})[200]=0,a[201]=1,a[202]=768,a[204]=770,a[210]=776,a[208]=774,a[206]=772,a[203]=769,a[205]=771,a[209]=775,a[207]=773,a);function U(e,n,r,a,o,s,c,l){if(0!==e){if(d||(B(3042),d=!0),5===e)o=o||n,s=s||r,c=c||a,n===f&&o===g||(t.blendEquationSeparate(F[n],F[o]),f=n,g=o),r===m&&a===v&&s===y&&c===x||(t.blendFuncSeparate(G[r],G[a],G[s],G[c]),m=r,v=a,y=s,x=c),p=e,_=null;else if(e!==p||l!==_){if(f===i&&g===i||(t.blendEquation(32774),f=i,g=i),l)switch(e){case 1:t.blendFuncSeparate(1,771,1,771);break;case 2:t.blendFunc(1,1);break;case 3:t.blendFuncSeparate(0,0,769,771);break;case 4:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}else switch(e){case 1:t.blendFuncSeparate(770,771,1,771);break;case 2:t.blendFunc(770,1);break;case 3:t.blendFunc(0,769);break;case 4:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}m=null,v=null,y=null,x=null,p=e,_=l}}else d&&(z(3042),d=!1)}function k(e){b!==e&&(e?t.frontFace(2304):t.frontFace(2305),b=e)}function V(e){0!==e?(B(2884),e!==w&&(1===e?t.cullFace(1029):2===e?t.cullFace(1028):t.cullFace(1032))):z(2884),w=e}function W(e,n,i){e?(B(32823),S===n&&T===i||(t.polygonOffset(n,i),S=n,T=i)):z(32823)}function j(e){void 0===e&&(e=33984+E-1),C!==e&&(t.activeTexture(e),C=e)}return{buffers:{color:s,depth:c,stencil:l},enable:B,disable:z,useProgram:function(e){return h!==e&&(t.useProgram(e),h=e,!0)},setBlending:U,setMaterial:function(t,e){2===t.side?z(2884):B(2884);var n=1===t.side;e&&(n=!n),k(n),1===t.blending&&!1===t.transparent?U(0):U(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);var i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),W(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits)},setFlipSided:k,setCullFace:V,setLineWidth:function(e){e!==M&&(A&&t.lineWidth(e),M=e)},setPolygonOffset:W,setScissorTest:function(t){t?B(3089):z(3089)},activeTexture:j,bindTexture:function(e,n){null===C&&j();var i=P[C];void 0===i&&(i={type:void 0,texture:void 0},P[C]=i),i.type===e&&i.texture===n||(t.bindTexture(e,n||N[e]),i.type=e,i.texture=n)},unbindTexture:function(){var e=P[C];void 0!==e&&void 0!==e.type&&(t.bindTexture(e.type,null),e.type=void 0,e.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage2D:function(){try{t.texImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage3D:function(){try{t.texImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},scissor:function(e){!1===O.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),O.copy(e))},viewport:function(e){!1===I.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),I.copy(e))},reset:function(){u={},C=null,P={},h=null,d=null,p=null,f=null,m=null,v=null,g=null,y=null,x=null,_=!1,b=null,w=null,M=null,S=null,T=null,s.reset(),c.reset(),l.reset()}}}function ia(t,e,n,i,r,a,o){var s,c,l,u=r.isWebGL2,h=r.maxTextures,p=r.maxCubemapSize,y=r.maxTextureSize,x=r.maxSamples,_=new WeakMap,C=!1;try{C="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(t){}function P(t,e){return C?new OffscreenCanvas(t,e):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function O(t,e,n,i){var r=1;if((t.width>i||t.height>i)&&(r=i/Math.max(t.width,t.height)),r<1||!0===e){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){var a=e?gt.floorPowerOfTwo:Math.floor,o=a(r*t.width),s=a(r*t.height);void 0===l&&(l=P(o,s));var c=n?P(o,s):l;return c.width=o,c.height=s,c.getContext("2d").drawImage(t,0,0,o,s),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+o+"x"+s+")."),c}return"data"in t&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+")."),t}return t}function I(t){return gt.isPowerOfTwo(t.width)&&gt.isPowerOfTwo(t.height)}function D(t,e){return t.generateMipmaps&&e&&t.minFilter!==f&&t.minFilter!==g}function N(e,n,r,a){t.generateMipmap(e),i.get(n).__maxMipLevel=Math.log(Math.max(r,a))*Math.LOG2E}function B(n,i,r){if(!1===u)return i;if(null!==n){if(void 0!==t[n])return t[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}var a=i;return 6403===i&&(5126===r&&(a=33326),5131===r&&(a=33325),5121===r&&(a=33321)),6407===i&&(5126===r&&(a=34837),5131===r&&(a=34843),5121===r&&(a=32849)),6408===i&&(5126===r&&(a=34836),5131===r&&(a=34842),5121===r&&(a=32856)),33325!==a&&33326!==a&&34842!==a&&34836!==a||e.get("EXT_color_buffer_float"),a}function z(t){return t===f||t===m||t===v?9728:9729}function F(e){var n=e.target;n.removeEventListener("dispose",F),function(e){var n=i.get(e);if(void 0===n.__webglInit)return;t.deleteTexture(n.__webglTexture),i.remove(e)}(n),n.isVideoTexture&&_.delete(n),o.memory.textures--}function H(e){var n=e.target;n.removeEventListener("dispose",H),function(e){var n=i.get(e),r=i.get(e.texture);if(!e)return;void 0!==r.__webglTexture&&t.deleteTexture(r.__webglTexture);e.depthTexture&&e.depthTexture.dispose();if(e.isWebGLCubeRenderTarget)for(var a=0;a<6;a++)t.deleteFramebuffer(n.__webglFramebuffer[a]),n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer[a]);else t.deleteFramebuffer(n.__webglFramebuffer),n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&t.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer&&t.deleteRenderbuffer(n.__webglColorRenderbuffer),n.__webglDepthRenderbuffer&&t.deleteRenderbuffer(n.__webglDepthRenderbuffer);i.remove(e.texture),i.remove(e)}(n),o.memory.textures--}var G=0;function U(t,e){var r=i.get(t);if(t.isVideoTexture&&function(t){var e=o.render.frame;_.get(t)!==e&&(_.set(t,e),t.update())}(t),t.version>0&&r.__version!==t.version){var a=t.image;if(void 0===a)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(!1!==a.complete)return void X(r,t,e);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}n.activeTexture(33984+e),n.bindTexture(3553,r.__webglTexture)}function k(e,r){var o=i.get(e);e.version>0&&o.__version!==e.version?function(e,i,r){if(6!==i.image.length)return;q(e,i),n.activeTexture(33984+r),n.bindTexture(34067,e.__webglTexture),t.pixelStorei(37440,i.flipY),t.pixelStorei(37441,i.premultiplyAlpha),t.pixelStorei(3317,i.unpackAlignment);for(var o=i&&(i.isCompressedTexture||i.image[0].isCompressedTexture),s=i.image[0]&&i.image[0].isDataTexture,c=[],l=0;l<6;l++)c[l]=o||s?s?i.image[l].image:i.image[l]:O(i.image[l],!1,!0,p);var h,d=c[0],f=I(d)||u,m=a.convert(i.format),v=a.convert(i.type),g=B(i.internalFormat,m,v);if(j(34067,i,f),o){for(var y=0;y<6;y++){h=c[y].mipmaps;for(var x=0;x<h.length;x++){var _=h[x];i.format!==A&&i.format!==E?null!==m?n.compressedTexImage2D(34069+y,x,g,_.width,_.height,0,_.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+y,x,g,_.width,_.height,0,m,v,_.data)}}e.__maxMipLevel=h.length-1}else{h=i.mipmaps;for(var b=0;b<6;b++)if(s){n.texImage2D(34069+b,0,g,c[b].width,c[b].height,0,m,v,c[b].data);for(var w=0;w<h.length;w++){var M=h[w].image[b].image;n.texImage2D(34069+b,w+1,g,M.width,M.height,0,m,v,M.data)}}else{n.texImage2D(34069+b,0,g,m,v,c[b]);for(var S=0;S<h.length;S++){var T=h[S];n.texImage2D(34069+b,S+1,g,m,v,T.image[b])}}e.__maxMipLevel=h.length}D(i,f)&&N(34067,i,d.width,d.height);e.__version=i.version,i.onUpdate&&i.onUpdate(i)}(o,e,r):(n.activeTexture(33984+r),n.bindTexture(34067,o.__webglTexture))}var V=((s={})[1e3]=10497,s[1001]=33071,s[1002]=33648,s),W=((c={})[1003]=9728,c[1004]=9984,c[1005]=9986,c[1006]=9729,c[1007]=9985,c[1008]=9987,c);function j(n,a,o){o?(t.texParameteri(n,10242,V[a.wrapS]),t.texParameteri(n,10243,V[a.wrapT]),32879!==n&&35866!==n||t.texParameteri(n,32882,V[a.wrapR]),t.texParameteri(n,10240,W[a.magFilter]),t.texParameteri(n,10241,W[a.minFilter])):(t.texParameteri(n,10242,33071),t.texParameteri(n,10243,33071),32879!==n&&35866!==n||t.texParameteri(n,32882,33071),a.wrapS===d&&a.wrapT===d||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(n,10240,z(a.magFilter)),t.texParameteri(n,10241,z(a.minFilter)),a.minFilter!==f&&a.minFilter!==g&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));var s=e.get("EXT_texture_filter_anisotropic");if(s){if(a.type===M&&null===e.get("OES_texture_float_linear"))return;if(a.type===S&&null===(u||e.get("OES_texture_half_float_linear")))return;(a.anisotropy>1||i.get(a).__currentAnisotropy)&&(t.texParameterf(n,s.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,r.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy)}}function q(e,n){void 0===e.__webglInit&&(e.__webglInit=!0,n.addEventListener("dispose",F),e.__webglTexture=t.createTexture(),o.memory.textures++)}function X(e,i,r){var o=3553;i.isDataTexture2DArray&&(o=35866),i.isDataTexture3D&&(o=32879),q(e,i),n.activeTexture(33984+r),n.bindTexture(o,e.__webglTexture),t.pixelStorei(37440,i.flipY),t.pixelStorei(37441,i.premultiplyAlpha),t.pixelStorei(3317,i.unpackAlignment);var s,c=function(t){return!u&&(t.wrapS!==d||t.wrapT!==d||t.minFilter!==f&&t.minFilter!==g)}(i)&&!1===I(i.image),l=O(i.image,c,!1,y),h=I(l)||u,p=a.convert(i.format),m=a.convert(i.type),v=B(i.internalFormat,p,m);j(o,i,h);var x=i.mipmaps;if(i.isDepthTexture)v=6402,u?v=i.type===M?36012:i.type===w?33190:i.type===T?35056:33189:i.type===M&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),i.format===L&&6402===v&&i.type!==b&&i.type!==w&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),i.type=b,m=a.convert(i.type)),i.format===R&&6402===v&&(v=34041,i.type!==T&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),i.type=T,m=a.convert(i.type))),n.texImage2D(3553,0,v,l.width,l.height,0,p,m,null);else if(i.isDataTexture)if(x.length>0&&h){for(var _=0,S=x.length;_<S;_++)s=x[_],n.texImage2D(3553,_,v,s.width,s.height,0,p,m,s.data);i.generateMipmaps=!1,e.__maxMipLevel=x.length-1}else n.texImage2D(3553,0,v,l.width,l.height,0,p,m,l.data),e.__maxMipLevel=0;else if(i.isCompressedTexture){for(var C=0,P=x.length;C<P;C++)s=x[C],i.format!==A&&i.format!==E?null!==p?n.compressedTexImage2D(3553,C,v,s.width,s.height,0,s.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,C,v,s.width,s.height,0,p,m,s.data);e.__maxMipLevel=x.length-1}else if(i.isDataTexture2DArray)n.texImage3D(35866,0,v,l.width,l.height,l.depth,0,p,m,l.data),e.__maxMipLevel=0;else if(i.isDataTexture3D)n.texImage3D(32879,0,v,l.width,l.height,l.depth,0,p,m,l.data),e.__maxMipLevel=0;else if(x.length>0&&h){for(var z=0,F=x.length;z<F;z++)s=x[z],n.texImage2D(3553,z,v,p,m,s);i.generateMipmaps=!1,e.__maxMipLevel=x.length-1}else n.texImage2D(3553,0,v,p,m,l),e.__maxMipLevel=0;D(i,h)&&N(o,i,l.width,l.height),e.__version=i.version,i.onUpdate&&i.onUpdate(i)}function Y(e,r,o,s){var c=a.convert(r.texture.format),l=a.convert(r.texture.type),u=B(r.texture.internalFormat,c,l);n.texImage2D(s,0,u,r.width,r.height,0,c,l,null),t.bindFramebuffer(36160,e),t.framebufferTexture2D(36160,o,s,i.get(r.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function Z(e,n,i){if(t.bindRenderbuffer(36161,e),n.depthBuffer&&!n.stencilBuffer){var r=33189;if(i){var o=n.depthTexture;o&&o.isDepthTexture&&(o.type===M?r=36012:o.type===w&&(r=33190));var s=Q(n);t.renderbufferStorageMultisample(36161,s,r,n.width,n.height)}else t.renderbufferStorage(36161,r,n.width,n.height);t.framebufferRenderbuffer(36160,36096,36161,e)}else if(n.depthBuffer&&n.stencilBuffer){if(i){var c=Q(n);t.renderbufferStorageMultisample(36161,c,35056,n.width,n.height)}else t.renderbufferStorage(36161,34041,n.width,n.height);t.framebufferRenderbuffer(36160,33306,36161,e)}else{var l=a.convert(n.texture.format),u=a.convert(n.texture.type),h=B(n.texture.internalFormat,l,u);if(i){var d=Q(n);t.renderbufferStorageMultisample(36161,d,h,n.width,n.height)}else t.renderbufferStorage(36161,h,n.width,n.height)}t.bindRenderbuffer(36161,null)}function J(e){var n=i.get(e),r=!0===e.isWebGLCubeRenderTarget;if(e.depthTexture){if(r)throw new Error("target.depthTexture not supported in Cube render targets");!function(e,n){if(n&&n.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,e),!n.depthTexture||!n.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(n.depthTexture).__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),U(n.depthTexture,0);var r=i.get(n.depthTexture).__webglTexture;if(n.depthTexture.format===L)t.framebufferTexture2D(36160,36096,3553,r,0);else{if(n.depthTexture.format!==R)throw new Error("Unknown depthTexture format");t.framebufferTexture2D(36160,33306,3553,r,0)}}(n.__webglFramebuffer,e)}else if(r){n.__webglDepthbuffer=[];for(var a=0;a<6;a++)t.bindFramebuffer(36160,n.__webglFramebuffer[a]),n.__webglDepthbuffer[a]=t.createRenderbuffer(),Z(n.__webglDepthbuffer[a],e,!1)}else t.bindFramebuffer(36160,n.__webglFramebuffer),n.__webglDepthbuffer=t.createRenderbuffer(),Z(n.__webglDepthbuffer,e,!1);t.bindFramebuffer(36160,null)}function Q(t){return u&&t.isWebGLMultisampleRenderTarget?Math.min(x,t.samples):0}var K=!1,$=!1;this.allocateTextureUnit=function(){var t=G;return t>=h&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+h),G+=1,t},this.resetTextureUnits=function(){G=0},this.setTexture2D=U,this.setTexture2DArray=function(t,e){var r=i.get(t);t.version>0&&r.__version!==t.version?X(r,t,e):(n.activeTexture(33984+e),n.bindTexture(35866,r.__webglTexture))},this.setTexture3D=function(t,e){var r=i.get(t);t.version>0&&r.__version!==t.version?X(r,t,e):(n.activeTexture(33984+e),n.bindTexture(32879,r.__webglTexture))},this.setTextureCube=k,this.setupRenderTarget=function(e){var r=i.get(e),s=i.get(e.texture);e.addEventListener("dispose",H),s.__webglTexture=t.createTexture(),o.memory.textures++;var c=!0===e.isWebGLCubeRenderTarget,l=!0===e.isWebGLMultisampleRenderTarget,h=I(e)||u;if(!u||e.texture.format!==E||e.texture.type!==M&&e.texture.type!==S||(e.texture.format=A,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),c){r.__webglFramebuffer=[];for(var d=0;d<6;d++)r.__webglFramebuffer[d]=t.createFramebuffer()}else if(r.__webglFramebuffer=t.createFramebuffer(),l)if(u){r.__webglMultisampledFramebuffer=t.createFramebuffer(),r.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,r.__webglColorRenderbuffer);var p=a.convert(e.texture.format),f=a.convert(e.texture.type),m=B(e.texture.internalFormat,p,f),v=Q(e);t.renderbufferStorageMultisample(36161,v,m,e.width,e.height),t.bindFramebuffer(36160,r.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,r.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),e.depthBuffer&&(r.__webglDepthRenderbuffer=t.createRenderbuffer(),Z(r.__webglDepthRenderbuffer,e,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(c){n.bindTexture(34067,s.__webglTexture),j(34067,e.texture,h);for(var g=0;g<6;g++)Y(r.__webglFramebuffer[g],e,36064,34069+g);D(e.texture,h)&&N(34067,e.texture,e.width,e.height),n.bindTexture(34067,null)}else n.bindTexture(3553,s.__webglTexture),j(3553,e.texture,h),Y(r.__webglFramebuffer,e,36064,3553),D(e.texture,h)&&N(3553,e.texture,e.width,e.height),n.bindTexture(3553,null);e.depthBuffer&&J(e)},this.updateRenderTargetMipmap=function(t){var e=t.texture;if(D(e,I(t)||u)){var r=t.isWebGLCubeRenderTarget?34067:3553,a=i.get(e).__webglTexture;n.bindTexture(r,a),N(r,e,t.width,t.height),n.bindTexture(r,null)}},this.updateMultisampleRenderTarget=function(e){if(e.isWebGLMultisampleRenderTarget)if(u){var n=i.get(e);t.bindFramebuffer(36008,n.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,n.__webglFramebuffer);var r=e.width,a=e.height,o=16384;e.depthBuffer&&(o|=256),e.stencilBuffer&&(o|=1024),t.blitFramebuffer(0,0,r,a,0,0,r,a,o,9728),t.bindFramebuffer(36160,n.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(t,e){t&&t.isWebGLRenderTarget&&(!1===K&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),K=!0),t=t.texture),U(t,e)},this.safeSetTextureCube=function(t,e){t&&t.isWebGLCubeRenderTarget&&(!1===$&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),$=!0),t=t.texture),k(t,e)}}function ra(t,e,n){var i=n.isWebGL2;return{convert:function(t){var n;if(t===_)return 5121;if(1017===t)return 32819;if(1018===t)return 32820;if(1019===t)return 33635;if(1010===t)return 5120;if(1011===t)return 5122;if(t===b)return 5123;if(1013===t)return 5124;if(t===w)return 5125;if(t===M)return 5126;if(t===S)return i?5131:null!==(n=e.get("OES_texture_half_float"))?n.HALF_FLOAT_OES:null;if(1021===t)return 6406;if(t===E)return 6407;if(t===A)return 6408;if(1024===t)return 6409;if(1025===t)return 6410;if(t===L)return 6402;if(t===R)return 34041;if(1028===t)return 6403;if(1029===t)return 36244;if(1030===t)return 33319;if(1031===t)return 33320;if(1032===t)return 36248;if(1033===t)return 36249;if(t===C||t===P||t===O||t===I){if(null===(n=e.get("WEBGL_compressed_texture_s3tc")))return null;if(t===C)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===P)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===O)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===I)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===D||t===N||t===B||t===z){if(null===(n=e.get("WEBGL_compressed_texture_pvrtc")))return null;if(t===D)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===N)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===B)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===z)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===t)return null!==(n=e.get("WEBGL_compressed_texture_etc1"))?n.COMPRESSED_RGB_ETC1_WEBGL:null;if((t===F||t===H)&&null!==(n=e.get("WEBGL_compressed_texture_etc"))){if(t===F)return n.COMPRESSED_RGB8_ETC2;if(t===H)return n.COMPRESSED_RGBA8_ETC2_EAC}return 37808===t||37809===t||37810===t||37811===t||37812===t||37813===t||37814===t||37815===t||37816===t||37817===t||37818===t||37819===t||37820===t||37821===t||37840===t||37841===t||37842===t||37843===t||37844===t||37845===t||37846===t||37847===t||37848===t||37849===t||37850===t||37851===t||37852===t||37853===t?null!==(n=e.get("WEBGL_compressed_texture_astc"))?t:null:36492===t?null!==(n=e.get("EXT_texture_compression_bptc"))?t:null:t===T?i?34042:null!==(n=e.get("WEBGL_depth_texture"))?n.UNSIGNED_INT_24_8_WEBGL:null:void 0}}}function aa(t){void 0===t&&(t=[]),Jn.call(this),this.cameras=t}function oa(){Ae.call(this),this.type="Group"}function sa(){this._targetRay=null,this._grip=null,this._hand=null}function ca(t,e){var n=this,i=null,r=1,a=null,o="local-floor",s=null,c=[],l=new Map,u=new Jn;u.layers.enable(1),u.viewport=new St;var h=new Jn;h.layers.enable(2),h.viewport=new St;var d=[u,h],p=new aa;p.layers.enable(1),p.layers.enable(2);var f=null,m=null;function v(t){var e=l.get(t.inputSource);e&&e.dispatchEvent({type:t.type,data:t.inputSource})}function g(){l.forEach((function(t,e){t.disconnect(e)})),l.clear(),f=null,m=null,t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),M.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function y(t){for(var e=i.inputSources,n=0;n<c.length;n++)l.set(e[n],c[n]);for(var r=0;r<t.removed.length;r++){var a=t.removed[r],o=l.get(a);o&&(o.dispatchEvent({type:"disconnected",data:a}),l.delete(a))}for(var s=0;s<t.added.length;s++){var u=t.added[s],h=l.get(u);h&&h.dispatchEvent({type:"connected",data:u})}}this.enabled=!1,this.isPresenting=!1,this.getController=function(t){var e=c[t];return void 0===e&&(e=new sa,c[t]=e),e.getTargetRaySpace()},this.getControllerGrip=function(t){var e=c[t];return void 0===e&&(e=new sa,c[t]=e),e.getGripSpace()},this.getHand=function(t){var e=c[t];return void 0===e&&(e=new sa,c[t]=e),e.getHandSpace()},this.setFramebufferScaleFactor=function(t){r=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(t){o=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return i},this.setSession=function(){var t,s=(t=regeneratorRuntime.mark((function t(s){var c,l,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(i=s)){t.next=24;break}if(i.addEventListener("select",v),i.addEventListener("selectstart",v),i.addEventListener("selectend",v),i.addEventListener("squeeze",v),i.addEventListener("squeezestart",v),i.addEventListener("squeezeend",v),i.addEventListener("end",g),i.addEventListener("inputsourceschange",y),!0===(c=e.getContextAttributes()).xrCompatible){t.next=14;break}return t.next=14,e.makeXRCompatible();case 14:return l={antialias:c.antialias,alpha:c.alpha,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:r},u=new XRWebGLLayer(i,e,l),i.updateRenderState({baseLayer:u}),t.next=19,i.requestReferenceSpace(o);case 19:a=t.sent,M.setContext(i),M.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"});case 24:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function o(t){at(a,i,r,o,s,"next",t)}function s(t){at(a,i,r,o,s,"throw",t)}o(void 0)}))});return function(t){return s.apply(this,arguments)}}();var x=new Lt,_=new Lt;function b(t,e){null===e?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.matrix),t.matrixWorldInverse.copy(t.matrixWorld).invert()}this.getCamera=function(t){p.near=h.near=u.near=t.near,p.far=h.far=u.far=t.far,f===p.near&&m===p.far||(i.updateRenderState({depthNear:p.near,depthFar:p.far}),f=p.near,m=p.far);var e=t.parent,n=p.cameras;b(p,e);for(var r=0;r<n.length;r++)b(n[r],e);t.matrixWorld.copy(p.matrixWorld),t.matrix.copy(p.matrix),t.matrix.decompose(t.position,t.quaternion,t.scale);for(var a=t.children,o=0,s=a.length;o<s;o++)a[o].updateMatrixWorld(!0);return 2===n.length?function(t,e,n){x.setFromMatrixPosition(e.matrixWorld),_.setFromMatrixPosition(n.matrixWorld);var i=x.distanceTo(_),r=e.projectionMatrix.elements,a=n.projectionMatrix.elements,o=r[14]/(r[10]-1),s=r[14]/(r[10]+1),c=(r[9]+1)/r[5],l=(r[9]-1)/r[5],u=(r[8]-1)/r[0],h=(a[8]+1)/a[0],d=o*u,p=o*h,f=i/(-u+h),m=f*-u;e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(m),t.translateZ(f),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.copy(t.matrixWorld).invert();var v=o+f,g=s+f,y=d-m,b=p+(i-m),w=c*s/g*v,M=l*s/g*v;t.projectionMatrix.makePerspective(y,b,w,M,v,g)}(p,u,h):p.projectionMatrix.copy(u.projectionMatrix),p};var w=null;var M=new ai;M.setAnimationLoop((function(e,n){if(null!==(s=n.getViewerPose(a))){var r=s.views,o=i.renderState.baseLayer;t.setFramebuffer(o.framebuffer);var l=!1;r.length!==p.cameras.length&&(p.cameras.length=0,l=!0);for(var u=0;u<r.length;u++){var h=r[u],f=o.getViewport(h),m=d[u];m.matrix.fromArray(h.transform.matrix),m.projectionMatrix.fromArray(h.projectionMatrix),m.viewport.set(f.x,f.y,f.width,f.height),0===u&&p.matrix.copy(m.matrix),!0===l&&p.cameras.push(m)}}for(var v=i.inputSources,g=0;g<c.length;g++){var y=c[g],x=v[g];y.update(x,n,a)}w&&w(e,n)})),this.setAnimationLoop=function(t){w=t},this.dispose=function(){}}function la(t){function e(e,n){e.opacity.value=n.opacity,n.color&&e.diffuse.value.copy(n.color),n.emissive&&e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(e.map.value=n.map),n.alphaMap&&(e.alphaMap.value=n.alphaMap),n.specularMap&&(e.specularMap.value=n.specularMap);var i,r,a=t.get(n).envMap;if(a){e.envMap.value=a,e.flipEnvMap.value=a.isCubeTexture&&a._needsFlipEnvMap?-1:1,e.reflectivity.value=n.reflectivity,e.refractionRatio.value=n.refractionRatio;var o=t.get(a).__maxMipLevel;void 0!==o&&(e.maxMipLevel.value=o)}n.lightMap&&(e.lightMap.value=n.lightMap,e.lightMapIntensity.value=n.lightMapIntensity),n.aoMap&&(e.aoMap.value=n.aoMap,e.aoMapIntensity.value=n.aoMapIntensity),n.map?i=n.map:n.specularMap?i=n.specularMap:n.displacementMap?i=n.displacementMap:n.normalMap?i=n.normalMap:n.bumpMap?i=n.bumpMap:n.roughnessMap?i=n.roughnessMap:n.metalnessMap?i=n.metalnessMap:n.alphaMap?i=n.alphaMap:n.emissiveMap?i=n.emissiveMap:n.clearcoatMap?i=n.clearcoatMap:n.clearcoatNormalMap?i=n.clearcoatNormalMap:n.clearcoatRoughnessMap&&(i=n.clearcoatRoughnessMap),void 0!==i&&(i.isWebGLRenderTarget&&(i=i.texture),!0===i.matrixAutoUpdate&&i.updateMatrix(),e.uvTransform.value.copy(i.matrix)),n.aoMap?r=n.aoMap:n.lightMap&&(r=n.lightMap),void 0!==r&&(r.isWebGLRenderTarget&&(r=r.texture),!0===r.matrixAutoUpdate&&r.updateMatrix(),e.uv2Transform.value.copy(r.matrix))}function n(e,n){e.roughness.value=n.roughness,e.metalness.value=n.metalness,n.roughnessMap&&(e.roughnessMap.value=n.roughnessMap),n.metalnessMap&&(e.metalnessMap.value=n.metalnessMap),n.emissiveMap&&(e.emissiveMap.value=n.emissiveMap),n.bumpMap&&(e.bumpMap.value=n.bumpMap,e.bumpScale.value=n.bumpScale,1===n.side&&(e.bumpScale.value*=-1)),n.normalMap&&(e.normalMap.value=n.normalMap,e.normalScale.value.copy(n.normalScale),1===n.side&&e.normalScale.value.negate()),n.displacementMap&&(e.displacementMap.value=n.displacementMap,e.displacementScale.value=n.displacementScale,e.displacementBias.value=n.displacementBias),t.get(n).envMap&&(e.envMapIntensity.value=n.envMapIntensity)}return{refreshFogUniforms:function(t,e){t.fogColor.value.copy(e.color),e.isFog?(t.fogNear.value=e.near,t.fogFar.value=e.far):e.isFogExp2&&(t.fogDensity.value=e.density)},refreshMaterialUniforms:function(t,i,r,a){i.isMeshBasicMaterial?e(t,i):i.isMeshLambertMaterial?(e(t,i),function(t,e){e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap)}(t,i)):i.isMeshToonMaterial?(e(t,i),function(t,e){e.gradientMap&&(t.gradientMap.value=e.gradientMap);e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap);e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1));e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate());e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}(t,i)):i.isMeshPhongMaterial?(e(t,i),function(t,e){t.specular.value.copy(e.specular),t.shininess.value=Math.max(e.shininess,1e-4),e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap);e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1));e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate());e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}(t,i)):i.isMeshStandardMaterial?(e(t,i),i.isMeshPhysicalMaterial?function(t,e){n(t,e),t.reflectivity.value=e.reflectivity,t.clearcoat.value=e.clearcoat,t.clearcoatRoughness.value=e.clearcoatRoughness,e.sheen&&t.sheen.value.copy(e.sheen);e.clearcoatMap&&(t.clearcoatMap.value=e.clearcoatMap);e.clearcoatRoughnessMap&&(t.clearcoatRoughnessMap.value=e.clearcoatRoughnessMap);e.clearcoatNormalMap&&(t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),t.clearcoatNormalMap.value=e.clearcoatNormalMap,1===e.side&&t.clearcoatNormalScale.value.negate());t.transmission.value=e.transmission,e.transmissionMap&&(t.transmissionMap.value=e.transmissionMap)}(t,i):n(t,i)):i.isMeshMatcapMaterial?(e(t,i),function(t,e){e.matcap&&(t.matcap.value=e.matcap);e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1));e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate());e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}(t,i)):i.isMeshDepthMaterial?(e(t,i),function(t,e){e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}(t,i)):i.isMeshDistanceMaterial?(e(t,i),function(t,e){e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias);t.referencePosition.value.copy(e.referencePosition),t.nearDistance.value=e.nearDistance,t.farDistance.value=e.farDistance}(t,i)):i.isMeshNormalMaterial?(e(t,i),function(t,e){e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1));e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate());e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}(t,i)):i.isLineBasicMaterial?(function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity}(t,i),i.isLineDashedMaterial&&function(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale}(t,i)):i.isPointsMaterial?function(t,e,n,i){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.size.value=e.size*n,t.scale.value=.5*i,e.map&&(t.map.value=e.map);e.alphaMap&&(t.alphaMap.value=e.alphaMap);var r;e.map?r=e.map:e.alphaMap&&(r=e.alphaMap);void 0!==r&&(!0===r.matrixAutoUpdate&&r.updateMatrix(),t.uvTransform.value.copy(r.matrix))}(t,i,r,a):i.isSpriteMaterial?function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.rotation.value=e.rotation,e.map&&(t.map.value=e.map);e.alphaMap&&(t.alphaMap.value=e.alphaMap);var n;e.map?n=e.map:e.alphaMap&&(n=e.alphaMap);void 0!==n&&(!0===n.matrixAutoUpdate&&n.updateMatrix(),t.uvTransform.value.copy(n.matrix))}(t,i):i.isShadowMaterial?(t.color.value.copy(i.color),t.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function ua(t){var e,n=void 0!==(t=t||{}).canvas?t.canvas:((e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")).style.display="block",e),i=void 0!==t.context?t.context:null,r=void 0!==t.alpha&&t.alpha,a=void 0===t.depth||t.depth,o=void 0===t.stencil||t.stencil,s=void 0!==t.antialias&&t.antialias,c=void 0===t.premultipliedAlpha||t.premultipliedAlpha,l=void 0!==t.preserveDrawingBuffer&&t.preserveDrawingBuffer,u=void 0!==t.powerPreference?t.powerPreference:"default",h=void 0!==t.failIfMajorPerformanceCaveat&&t.failIfMajorPerformanceCaveat,d=null,p=null,f=[];this.domElement=n,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Y,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var m=this,v=!1,g=null,y=0,x=0,b=null,w=null,T=-1,E=null,L=new St,R=new St,C=null,P=n.width,O=n.height,I=1,D=null,N=null,B=new St(0,0,P,O),z=new St(0,0,P,O),F=!1,H=new ri,G=!1,U=!1,k=new ne,V=new Lt,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function j(){return null===b?I:1}var q,X,Z,J,Q,K,$,tt,et,nt,it,rt,at,ot,st,ct,lt,ut,ht,dt,pt,ft=i;function mt(t,e){for(var i=0;i<t.length;i++){var r=t[i],a=n.getContext(r,e);if(null!==a)return a}return null}try{var vt={alpha:r,depth:a,stencil:o,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if(n.addEventListener("webglcontextlost",Mt,!1),n.addEventListener("webglcontextrestored",Tt,!1),null===ft){var xt=["webgl2","webgl","experimental-webgl"];if(!0===m.isWebGL1Renderer&&xt.shift(),null===(ft=mt(xt,vt)))throw mt(xt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}void 0===ft.getShaderPrecisionFormat&&(ft.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(t){throw console.error("THREE.WebGLRenderer: "+t.message),t}function _t(){q=new gi(ft),X=new fi(ft,q,t),q.init(X),dt=new ra(ft,q,X),(Z=new na(ft,q,X)).scissor(R.copy(z).multiplyScalar(I).floor()),Z.viewport(L.copy(B).multiplyScalar(I).floor()),J=new _i(ft),Q=new kr,K=new ia(ft,q,Z,Q,X,dt,J),$=new vi(m),tt=new oi(ft,X),pt=new di(ft,q,tt,X),et=new yi(ft,tt,J,pt),nt=new Si(ft,et,tt,J),lt=new Mi(ft),st=new mi(Q),it=new Ur(m,$,q,X,pt,st),rt=new la(Q),at=new qr(Q),ot=new Kr(q,X),ct=new hi(m,$,Z,nt,c),ut=new pi(ft,q,J,X),ht=new xi(ft,q,J,X),J.programs=it.programs,m.capabilities=X,m.extensions=q,m.properties=Q,m.renderLists=at,m.state=Z,m.info=J}_t();var bt=new ca(m,ft);this.xr=bt;var wt=new ea(m,nt,X.maxTextureSize);function Mt(t){t.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1,_t()}function Et(t){var e=t.target;e.removeEventListener("dispose",Et),function(t){At(t),Q.remove(t)}(e)}function At(t){var e=Q.get(t).program;void 0!==e&&it.releaseProgram(e)}this.shadowMap=wt,this.getContext=function(){return ft},this.getContextAttributes=function(){return ft.getContextAttributes()},this.forceContextLoss=function(){var t=q.get("WEBGL_lose_context");t&&t.loseContext()},this.forceContextRestore=function(){var t=q.get("WEBGL_lose_context");t&&t.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(t){void 0!==t&&(I=t,this.setSize(P,O,!1))},this.getSize=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),t=new yt),t.set(P,O)},this.setSize=function(t,e,i){bt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(P=t,O=e,n.width=Math.floor(t*I),n.height=Math.floor(e*I),!1!==i&&(n.style.width=t+"px",n.style.height=e+"px"),this.setViewport(0,0,t,e))},this.getDrawingBufferSize=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),t=new yt),t.set(P*I,O*I).floor()},this.setDrawingBufferSize=function(t,e,i){P=t,O=e,I=i,n.width=Math.floor(t*i),n.height=Math.floor(e*i),this.setViewport(0,0,t,e)},this.getCurrentViewport=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),t=new St),t.copy(L)},this.getViewport=function(t){return t.copy(B)},this.setViewport=function(t,e,n,i){t.isVector4?B.set(t.x,t.y,t.z,t.w):B.set(t,e,n,i),Z.viewport(L.copy(B).multiplyScalar(I).floor())},this.getScissor=function(t){return t.copy(z)},this.setScissor=function(t,e,n,i){t.isVector4?z.set(t.x,t.y,t.z,t.w):z.set(t,e,n,i),Z.scissor(R.copy(z).multiplyScalar(I).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(t){Z.setScissorTest(F=t)},this.setOpaqueSort=function(t){D=t},this.setTransparentSort=function(t){N=t},this.getClearColor=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),t=new Ze),t.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(t,e,n){var i=0;(void 0===t||t)&&(i|=16384),(void 0===e||e)&&(i|=256),(void 0===n||n)&&(i|=1024),ft.clear(i)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Mt,!1),n.removeEventListener("webglcontextrestored",Tt,!1),at.dispose(),ot.dispose(),Q.dispose(),$.dispose(),nt.dispose(),pt.dispose(),bt.dispose(),Ct.stop()},this.renderBufferImmediate=function(t,e){pt.initAttributes();var n=Q.get(t);t.hasPositions&&!n.position&&(n.position=ft.createBuffer()),t.hasNormals&&!n.normal&&(n.normal=ft.createBuffer()),t.hasUvs&&!n.uv&&(n.uv=ft.createBuffer()),t.hasColors&&!n.color&&(n.color=ft.createBuffer());var i=e.getAttributes();t.hasPositions&&(ft.bindBuffer(34962,n.position),ft.bufferData(34962,t.positionArray,35048),pt.enableAttribute(i.position),ft.vertexAttribPointer(i.position,3,5126,!1,0,0)),t.hasNormals&&(ft.bindBuffer(34962,n.normal),ft.bufferData(34962,t.normalArray,35048),pt.enableAttribute(i.normal),ft.vertexAttribPointer(i.normal,3,5126,!1,0,0)),t.hasUvs&&(ft.bindBuffer(34962,n.uv),ft.bufferData(34962,t.uvArray,35048),pt.enableAttribute(i.uv),ft.vertexAttribPointer(i.uv,2,5126,!1,0,0)),t.hasColors&&(ft.bindBuffer(34962,n.color),ft.bufferData(34962,t.colorArray,35048),pt.enableAttribute(i.color),ft.vertexAttribPointer(i.color,3,5126,!1,0,0)),pt.disableUnusedAttributes(),ft.drawArrays(4,0,t.count),t.count=0},this.renderBufferDirect=function(t,e,n,i,r,a){null===e&&(e=W);var o=r.isMesh&&r.matrixWorld.determinant()<0,s=Nt(t,e,i,r);Z.setMaterial(i,o);var c=n.index,l=n.attributes.position;if(null===c){if(void 0===l||0===l.count)return}else if(0===c.count)return;var u,h=1;!0===i.wireframe&&(c=et.getWireframeAttribute(n),h=2),(i.morphTargets||i.morphNormals)&&lt.update(r,n,i,s),pt.setup(r,i,s,n,c);var d=ut;null!==c&&(u=tt.get(c),(d=ht).setIndex(u));var p=null!==c?c.count:l.count,f=n.drawRange.start*h,m=n.drawRange.count*h,v=null!==a?a.start*h:0,g=null!==a?a.count*h:1/0,y=Math.max(f,v),x=Math.min(p,f+m,v+g)-1,_=Math.max(0,x-y+1);if(0!==_){if(r.isMesh)!0===i.wireframe?(Z.setLineWidth(i.wireframeLinewidth*j()),d.setMode(1)):d.setMode(4);else if(r.isLine){var b=i.linewidth;void 0===b&&(b=1),Z.setLineWidth(b*j()),r.isLineSegments?d.setMode(1):r.isLineLoop?d.setMode(2):d.setMode(3)}else r.isPoints?d.setMode(0):r.isSprite&&d.setMode(4);if(r.isInstancedMesh)d.renderInstances(y,_,r.count);else if(n.isInstancedBufferGeometry){var w=Math.min(n.instanceCount,n._maxInstanceCount);d.renderInstances(y,_,w)}else d.render(y,_)}},this.compile=function(t,e){(p=ot.get(t)).init(),t.traverseVisible((function(t){t.isLight&&t.layers.test(e.layers)&&(p.pushLight(t),t.castShadow&&p.pushShadow(t))})),p.setupLights();var n=new WeakMap;t.traverse((function(e){var i=e.material;if(i)if(Array.isArray(i))for(var r=0;r<i.length;r++){var a=i[r];!1===n.has(a)&&(Dt(a,t,e),n.set(a))}else!1===n.has(i)&&(Dt(i,t,e),n.set(i))}))};var Rt=null;var Ct=new ai;function Pt(t,e,n,i){if(!1!==t.visible){if(t.layers.test(e.layers))if(t.isGroup)n=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(e);else if(t.isLight)p.pushLight(t),t.castShadow&&p.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||H.intersectsSprite(t)){i&&V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);var r=nt.update(t),a=t.material;a.visible&&d.push(t,r,a,n,V.z,null)}}else if(t.isImmediateRenderObject)i&&V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k),d.push(t,null,t.material,n,V.z,null);else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.frame!==J.render.frame&&(t.skeleton.update(),t.skeleton.frame=J.render.frame),!t.frustumCulled||H.intersectsObject(t))){i&&V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);var o=nt.update(t),s=t.material;if(Array.isArray(s))for(var c=o.groups,l=0,u=c.length;l<u;l++){var h=c[l],f=s[h.materialIndex];f&&f.visible&&d.push(t,o,f,n,V.z,h)}else s.visible&&d.push(t,o,s,n,V.z,null)}for(var m=t.children,v=0,g=m.length;v<g;v++)Pt(m[v],e,n,i)}}function Ot(t,e,n){for(var i=!0===e.isScene?e.overrideMaterial:null,r=0,a=t.length;r<a;r++){var o=t[r],s=o.object,c=o.geometry,l=null===i?o.material:i,u=o.group;if(n.isArrayCamera)for(var h=n.cameras,d=0,f=h.length;d<f;d++){var m=h[d];s.layers.test(m.layers)&&(Z.viewport(L.copy(m.viewport)),p.setupLightsView(m),It(s,e,m,c,l,u))}else It(s,e,n,c,l,u)}}function It(t,e,n,i,r,a){if(t.onBeforeRender(m,e,n,i,r,a),t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),t.isImmediateRenderObject){var o=Nt(n,e,r,t);Z.setMaterial(r),pt.reset(),function(t,e){t.render((function(t){m.renderBufferImmediate(t,e)}))}(t,o)}else m.renderBufferDirect(n,e,i,r,t,a);t.onAfterRender(m,e,n,i,r,a)}function Dt(t,e,n){!0!==e.isScene&&(e=W);var i=Q.get(t),r=p.state.lights,a=p.state.shadowsArray,o=r.state.version,s=it.getParameters(t,r.state,a,e,n),c=it.getProgramCacheKey(s),l=i.program,u=!0;if(i.environment=t.isMeshStandardMaterial?e.environment:null,i.fog=e.fog,i.envMap=$.get(t.envMap||i.environment),void 0===l)t.addEventListener("dispose",Et);else if(l.cacheKey!==c)At(t);else if(i.lightsStateVersion!==o)u=!1;else{if(void 0!==s.shaderID)return;u=!1}u&&(s.uniforms=it.getUniforms(t),t.onBeforeCompile(s,m),l=it.acquireProgram(s,c),i.program=l,i.uniforms=s.uniforms,i.outputEncoding=s.outputEncoding);var h=i.uniforms;(t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(i.numClippingPlanes=st.numPlanes,i.numIntersection=st.numIntersection,h.clippingPlanes=st.uniform),i.needsLights=function(t){return t.isMeshLambertMaterial||t.isMeshToonMaterial||t.isMeshPhongMaterial||t.isMeshStandardMaterial||t.isShadowMaterial||t.isShaderMaterial&&!0===t.lights}(t),i.lightsStateVersion=o,i.needsLights&&(h.ambientLightColor.value=r.state.ambient,h.lightProbe.value=r.state.probe,h.directionalLights.value=r.state.directional,h.directionalLightShadows.value=r.state.directionalShadow,h.spotLights.value=r.state.spot,h.spotLightShadows.value=r.state.spotShadow,h.rectAreaLights.value=r.state.rectArea,h.ltc_1.value=r.state.rectAreaLTC1,h.ltc_2.value=r.state.rectAreaLTC2,h.pointLights.value=r.state.point,h.pointLightShadows.value=r.state.pointShadow,h.hemisphereLights.value=r.state.hemi,h.directionalShadowMap.value=r.state.directionalShadowMap,h.directionalShadowMatrix.value=r.state.directionalShadowMatrix,h.spotShadowMap.value=r.state.spotShadowMap,h.spotShadowMatrix.value=r.state.spotShadowMatrix,h.pointShadowMap.value=r.state.pointShadowMap,h.pointShadowMatrix.value=r.state.pointShadowMatrix);var d=i.program.getUniforms(),f=br.seqWithValue(d.seq,h);i.uniformsList=f}function Nt(t,e,n,i){!0!==e.isScene&&(e=W),K.resetTextureUnits();var r=e.fog,a=n.isMeshStandardMaterial?e.environment:null,o=null===b?m.outputEncoding:b.texture.encoding,s=$.get(n.envMap||a),c=Q.get(n),l=p.state.lights;if(!0===G&&(!0===U||t!==E)){var u=t===E&&n.id===T;st.setState(n,t,u)}n.version===c.__version?n.fog&&c.fog!==r||c.environment!==a||c.needsLights&&c.lightsStateVersion!==l.state.version?Dt(n,e,i):void 0===c.numClippingPlanes||c.numClippingPlanes===st.numPlanes&&c.numIntersection===st.numIntersection?(c.outputEncoding!==o||c.envMap!==s)&&Dt(n,e,i):Dt(n,e,i):(Dt(n,e,i),c.__version=n.version);var h,d,f=!1,v=!1,g=!1,y=c.program,x=y.getUniforms(),_=c.uniforms;if(Z.useProgram(y.program)&&(f=!0,v=!0,g=!0),n.id!==T&&(T=n.id,v=!0),f||E!==t){if(x.setValue(ft,"projectionMatrix",t.projectionMatrix),X.logarithmicDepthBuffer&&x.setValue(ft,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),E!==t&&(E=t,v=!0,g=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshStandardMaterial||n.envMap){var w=x.map.cameraPosition;void 0!==w&&w.setValue(ft,V.setFromMatrixPosition(t.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)&&x.setValue(ft,"isOrthographic",!0===t.isOrthographicCamera),(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.isShadowMaterial||n.skinning)&&x.setValue(ft,"viewMatrix",t.matrixWorldInverse)}if(n.skinning){x.setOptional(ft,i,"bindMatrix"),x.setOptional(ft,i,"bindMatrixInverse");var S=i.skeleton;if(S){var L=S.bones;if(X.floatVertexTextures){if(null===S.boneTexture){var R=Math.sqrt(4*L.length);R=gt.ceilPowerOfTwo(R),R=Math.max(R,4);var C=new Float32Array(R*R*4);C.set(S.boneMatrices);var P=new ei(C,R,R,A,M);S.boneMatrices=C,S.boneTexture=P,S.boneTextureSize=R}x.setValue(ft,"boneTexture",S.boneTexture,K),x.setValue(ft,"boneTextureSize",S.boneTextureSize)}else x.setOptional(ft,S,"boneMatrices")}}return(v||c.receiveShadow!==i.receiveShadow)&&(c.receiveShadow=i.receiveShadow,x.setValue(ft,"receiveShadow",i.receiveShadow)),v&&(x.setValue(ft,"toneMappingExposure",m.toneMappingExposure),c.needsLights&&(d=g,(h=_).ambientLightColor.needsUpdate=d,h.lightProbe.needsUpdate=d,h.directionalLights.needsUpdate=d,h.directionalLightShadows.needsUpdate=d,h.pointLights.needsUpdate=d,h.pointLightShadows.needsUpdate=d,h.spotLights.needsUpdate=d,h.spotLightShadows.needsUpdate=d,h.rectAreaLights.needsUpdate=d,h.hemisphereLights.needsUpdate=d),r&&n.fog&&rt.refreshFogUniforms(_,r),rt.refreshMaterialUniforms(_,n,I,O),br.upload(ft,c.uniformsList,_,K)),n.isShaderMaterial&&!0===n.uniformsNeedUpdate&&(br.upload(ft,c.uniformsList,_,K),n.uniformsNeedUpdate=!1),n.isSpriteMaterial&&x.setValue(ft,"center",i.center),x.setValue(ft,"modelViewMatrix",i.modelViewMatrix),x.setValue(ft,"normalMatrix",i.normalMatrix),x.setValue(ft,"modelMatrix",i.matrixWorld),y}Ct.setAnimationLoop((function(t){bt.isPresenting||Rt&&Rt(t)})),"undefined"!=typeof window&&Ct.setContext(window),this.setAnimationLoop=function(t){Rt=t,bt.setAnimationLoop(t),null===t?Ct.stop():Ct.start()},this.render=function(t,e){var n,i;if(void 0!==arguments[2]&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),n=arguments[2]),void 0!==arguments[3]&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),i=arguments[3]),void 0===e||!0===e.isCamera){if(!0!==v){pt.resetDefaultState(),T=-1,E=null,!0===t.autoUpdate&&t.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld(),!0===bt.enabled&&!0===bt.isPresenting&&(e=bt.getCamera(e)),!0===t.isScene&&t.onBeforeRender(m,t,e,n||b),(p=ot.get(t,f.length)).init(),f.push(p),k.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),H.setFromProjectionMatrix(k),U=this.localClippingEnabled,G=st.init(this.clippingPlanes,U,e),(d=at.get(t,e)).init(),Pt(t,e,0,m.sortObjects),d.finish(),!0===m.sortObjects&&d.sort(D,N),!0===G&&st.beginShadows();var r=p.state.shadowsArray;wt.render(r,t,e),p.setupLights(),p.setupLightsView(e),!0===G&&st.endShadows(),!0===this.info.autoReset&&this.info.reset(),void 0!==n&&this.setRenderTarget(n),ct.render(d,t,e,i);var a=d.opaque,o=d.transparent;a.length>0&&Ot(a,t,e),o.length>0&&Ot(o,t,e),!0===t.isScene&&t.onAfterRender(m,t,e),null!==b&&(K.updateRenderTargetMipmap(b),K.updateMultisampleRenderTarget(b)),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1),f.pop(),p=f.length>0?f[f.length-1]:null,d=null}}else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")},this.setFramebuffer=function(t){g!==t&&null===b&&ft.bindFramebuffer(36160,t),g=t},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderList=function(){return d},this.setRenderList=function(t){d=t},this.getRenderTarget=function(){return b},this.setRenderTarget=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=0),b=t,y=e,x=n,t&&void 0===Q.get(t).__webglFramebuffer&&K.setupRenderTarget(t);var i=g,r=!1;if(t){var a=Q.get(t).__webglFramebuffer;t.isWebGLCubeRenderTarget?(i=a[e],r=!0):i=t.isWebGLMultisampleRenderTarget?Q.get(t).__webglMultisampledFramebuffer:a,L.copy(t.viewport),R.copy(t.scissor),C=t.scissorTest}else L.copy(B).multiplyScalar(I).floor(),R.copy(z).multiplyScalar(I).floor(),C=F;if(w!==i&&(ft.bindFramebuffer(36160,i),w=i),Z.viewport(L),Z.scissor(R),Z.setScissorTest(C),r){var o=Q.get(t.texture);ft.framebufferTexture2D(36160,36064,34069+e,o.__webglTexture,n)}},this.readRenderTargetPixels=function(t,e,n,i,r,a,o){if(t&&t.isWebGLRenderTarget){var s=Q.get(t).__webglFramebuffer;if(t.isWebGLCubeRenderTarget&&void 0!==o&&(s=s[o]),s){var c=!1;s!==w&&(ft.bindFramebuffer(36160,s),c=!0);try{var l=t.texture,u=l.format,h=l.type;if(u!==A&&dt.convert(u)!==ft.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");var d=h===S&&(q.has("EXT_color_buffer_half_float")||X.isWebGL2&&q.has("EXT_color_buffer_float"));if(!(h===_||dt.convert(h)===ft.getParameter(35738)||h===M&&(X.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float"))||d))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");36053===ft.checkFramebufferStatus(36160)?e>=0&&e<=t.width-i&&n>=0&&n<=t.height-r&&ft.readPixels(e,n,i,r,dt.convert(u),dt.convert(h),a):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{c&&ft.bindFramebuffer(36160,w)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")},this.copyFramebufferToTexture=function(t,e,n){void 0===n&&(n=0);var i=Math.pow(2,-n),r=Math.floor(e.image.width*i),a=Math.floor(e.image.height*i),o=dt.convert(e.format);K.setTexture2D(e,0),ft.copyTexImage2D(3553,n,o,t.x,t.y,r,a,0),Z.unbindTexture()},this.copyTextureToTexture=function(t,e,n,i){void 0===i&&(i=0);var r=e.image.width,a=e.image.height,o=dt.convert(n.format),s=dt.convert(n.type);K.setTexture2D(n,0),ft.pixelStorei(37440,n.flipY),ft.pixelStorei(37441,n.premultiplyAlpha),ft.pixelStorei(3317,n.unpackAlignment),e.isDataTexture?ft.texSubImage2D(3553,i,t.x,t.y,r,a,o,s,e.image.data):e.isCompressedTexture?ft.compressedTexSubImage2D(3553,i,t.x,t.y,e.mipmaps[0].width,e.mipmaps[0].height,o,e.mipmaps[0].data):ft.texSubImage2D(3553,i,t.x,t.y,o,s,e.image),0===i&&n.generateMipmaps&&ft.generateMipmap(3553),Z.unbindTexture()},this.initTexture=function(t){K.setTexture2D(t,0),Z.unbindTexture()},this.resetState=function(){Z.reset(),pt.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function ha(t){ua.call(this,t)}aa.prototype=Object.assign(Object.create(Jn.prototype),{constructor:aa,isArrayCamera:!0}),oa.prototype=Object.assign(Object.create(Ae.prototype),{constructor:oa,isGroup:!0}),Object.assign(sa.prototype,{constructor:sa,getHandSpace:function(){return null===this._hand&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return null===this._targetRay&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return null===this._grip&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return null!==this._targetRay&&this._targetRay.dispatchEvent(t),null!==this._grip&&this._grip.dispatchEvent(t),null!==this._hand&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this},update:function(t,e,n){var i=null,r=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(t&&"visible-blurred"!==e.session.visibilityState)if(c&&t.hand){a=!0;for(var l,u=ht(t.hand.values());!(l=u()).done;){var h=l.value,d=e.getJointPose(h,n);if(void 0===c.joints[h.jointName]){var p=new oa;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[h.jointName]=p,c.add(p)}var f=c.joints[h.jointName];null!==d&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=d.radius),f.visible=null!==d}var m=c.joints["index-finger-tip"],v=c.joints["thumb-tip"],g=m.position.distanceTo(v.position);c.inputState.pinching&&g>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&g<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else null!==o&&null!==(i=e.getPose(t.targetRaySpace,n))&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale)),null!==s&&t.gripSpace&&null!==(r=e.getPose(t.gripSpace,n))&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale));return null!==o&&(o.visible=null!==i),null!==s&&(s.visible=null!==r),null!==c&&(c.visible=null!==a),this}}),Object.assign(ca.prototype,dt.prototype),ha.prototype=Object.assign(Object.create(ua.prototype),{constructor:ha,isWebGL1Renderer:!0});var da=function(){function t(t,e){Object.defineProperty(this,"isFogExp2",{value:!0}),this.name="",this.color=new Ze(t),this.density=void 0!==e?e:25e-5}var e=t.prototype;return e.clone=function(){return new t(this.color,this.density)},e.toJSON=function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}},t}(),pa=function(){function t(t,e,n){Object.defineProperty(this,"isFog",{value:!0}),this.name="",this.color=new Ze(t),this.near=void 0!==e?e:1,this.far=void 0!==n?n:1e3}var e=t.prototype;return e.clone=function(){return new t(this.color,this.near,this.far)},e.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}},t}(),fa=function(t){function e(){var e;return e=t.call(this)||this,Object.defineProperty(lt(e),"isScene",{value:!0}),e.type="Scene",e.background=null,e.environment=null,e.fog=null,e.overrideMaterial=null,e.autoUpdate=!0,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:lt(e)})),e}ct(e,t);var n=e.prototype;return n.copy=function(e,n){return t.prototype.copy.call(this,e,n),null!==e.background&&(this.background=e.background.clone()),null!==e.environment&&(this.environment=e.environment.clone()),null!==e.fog&&(this.fog=e.fog.clone()),null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},n.toJSON=function(e){var n=t.prototype.toJSON.call(this,e);return null!==this.background&&(n.object.background=this.background.toJSON(e)),null!==this.environment&&(n.object.environment=this.environment.toJSON(e)),null!==this.fog&&(n.object.fog=this.fog.toJSON()),n},e}(Ae);function ma(t,e){this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.usage=nt,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gt.generateUUID()}Object.defineProperty(ma.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(ma.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(var i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},clone:function(t){void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=gt.generateUUID()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);var e=new ma(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),this.stride);return e.setUsage(this.usage),e},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=gt.generateUUID()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var va,ga=new Lt;function ya(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=!0===i}function xa(t){Ke.call(this),this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}Object.defineProperties(ya.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}}),Object.assign(ya.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(var e=0,n=this.data.count;e<n;e++)ga.x=this.getX(e),ga.y=this.getY(e),ga.z=this.getZ(e),ga.applyMatrix4(t),this.setXYZ(e,ga.x,ga.y,ga.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");for(var e=[],n=0;n<this.count;n++)for(var i=n*this.data.stride+this.offset,r=0;r<this.itemSize;r++)e.push(this.data.array[i+r]);return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ya(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");for(var e=[],n=0;n<this.count;n++)for(var i=n*this.data.stride+this.offset,r=0;r<this.itemSize;r++)e.push(this.data.array[i+r]);return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}),xa.prototype=Object.create(Ke.prototype),xa.prototype.constructor=xa,xa.prototype.isSpriteMaterial=!0,xa.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};var _a=new Lt,ba=new Lt,wa=new Lt,Ma=new yt,Sa=new yt,Ta=new ne,Ea=new Lt,Aa=new Lt,La=new Lt,Ra=new yt,Ca=new yt,Pa=new yt;function Oa(t){if(Ae.call(this),this.type="Sprite",void 0===va){va=new Sn;var e=new ma(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);va.setIndex([0,1,2,0,2,3]),va.setAttribute("position",new ya(e,3,0,!1)),va.setAttribute("uv",new ya(e,2,3,!1))}this.geometry=va,this.material=void 0!==t?t:new xa,this.center=new yt(.5,.5)}function Ia(t,e,n,i,r,a){Ma.subVectors(t,n).addScalar(.5).multiply(i),void 0!==r?(Sa.x=a*Ma.x-r*Ma.y,Sa.y=r*Ma.x+a*Ma.y):Sa.copy(Ma),t.copy(e),t.x+=Sa.x,t.y+=Sa.y,t.applyMatrix4(Ta)}Oa.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Oa,isSprite:!0,raycast:function(t,e){null===t.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ba.setFromMatrixScale(this.matrixWorld),Ta.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wa.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&ba.multiplyScalar(-wa.z);var n,i,r=this.material.rotation;0!==r&&(i=Math.cos(r),n=Math.sin(r));var a=this.center;Ia(Ea.set(-.5,-.5,0),wa,a,ba,n,i),Ia(Aa.set(.5,-.5,0),wa,a,ba,n,i),Ia(La.set(.5,.5,0),wa,a,ba,n,i),Ra.set(0,0),Ca.set(1,0),Pa.set(1,1);var o=t.ray.intersectTriangle(Ea,Aa,La,!1,_a);if(null!==o||(Ia(Aa.set(-.5,.5,0),wa,a,ba,n,i),Ca.set(0,1),null!==(o=t.ray.intersectTriangle(Ea,La,Aa,!1,_a)))){var s=t.ray.origin.distanceTo(_a);s<t.near||s>t.far||e.push({distance:s,point:_a.clone(),uv:ke.getUV(_a,Ea,Aa,La,Ra,Ca,Pa,new yt),face:null,object:this})}},copy:function(t){return Ae.prototype.copy.call(this,t),void 0!==t.center&&this.center.copy(t.center),this.material=t.material,this}});var Da=new Lt,Na=new Lt;function Ba(){Ae.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Ba.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Ba,isLOD:!0,copy:function(t){Ae.prototype.copy.call(this,t,!1);for(var e=t.levels,n=0,i=e.length;n<i;n++){var r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e){void 0===e&&(e=0),e=Math.abs(e);var n,i=this.levels;for(n=0;n<i.length&&!(e<i[n].distance);n++);return i.splice(n,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){var e=this.levels;if(e.length>0){var n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){Da.setFromMatrixPosition(this.matrixWorld);var n=t.ray.origin.distanceTo(Da);this.getObjectForDistance(n).raycast(t,e)}},update:function(t){var e=this.levels;if(e.length>1){Da.setFromMatrixPosition(t.matrixWorld),Na.setFromMatrixPosition(this.matrixWorld);var n,i,r=Da.distanceTo(Na)/t.zoom;for(e[0].object.visible=!0,n=1,i=e.length;n<i&&r>=e[n].distance;n++)e[n-1].object.visible=!1,e[n].object.visible=!0;for(this._currentLevel=n-1;n<i;n++)e[n].object.visible=!1}},toJSON:function(t){var e=Ae.prototype.toJSON.call(this,t);!1===this.autoUpdate&&(e.object.autoUpdate=!1),e.object.levels=[];for(var n=this.levels,i=0,r=n.length;i<r;i++){var a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance})}return e}});var za=new Lt,Fa=new St,Ha=new St,Ga=new Lt,Ua=new ne;function ka(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),kn.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ne,this.bindMatrixInverse=new ne}function Va(){Ae.call(this),this.type="Bone"}ka.prototype=Object.assign(Object.create(kn.prototype),{constructor:ka,isSkinnedMesh:!0,copy:function(t){return kn.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var t=new St,e=this.geometry.attributes.skinWeight,n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);var r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){kn.prototype.updateMatrixWorld.call(this,t),"attached"===this.bindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():"detached"===this.bindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(t,e){var n=this.skeleton,i=this.geometry;Fa.fromBufferAttribute(i.attributes.skinIndex,t),Ha.fromBufferAttribute(i.attributes.skinWeight,t),za.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(var r=0;r<4;r++){var a=Ha.getComponent(r);if(0!==a){var o=Fa.getComponent(r);Ua.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Ga.copy(za).applyMatrix4(Ua),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}),Va.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Va,isBone:!0});var Wa=new ne,ja=new ne;function qa(t,e){void 0===t&&(t=[]),void 0===e&&(e=[]),this.uuid=gt.generateUUID(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(qa.prototype,{init:function(){var t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),0===e.length)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(var n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ne)}},calculateInverses:function(){this.boneInverses.length=0;for(var t=0,e=this.bones.length;t<e;t++){var n=new ne;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(var t=0,e=this.bones.length;t<e;t++){var n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(var i=0,r=this.bones.length;i<r;i++){var a=this.bones[i];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}},update:function(){for(var t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture,r=0,a=t.length;r<a;r++){var o=t[r]?t[r].matrixWorld:ja;Wa.multiplyMatrices(o,e[r]),Wa.toArray(n,16*r)}null!==i&&(i.needsUpdate=!0)},clone:function(){return new qa(this.bones,this.boneInverses)},getBoneByName:function(t){for(var e=0,n=this.bones.length;e<n;e++){var i=this.bones[e];if(i.name===t)return i}},dispose:function(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(t,e){this.uuid=t.uuid;for(var n=0,i=t.bones.length;n<i;n++){var r=t.bones[n],a=e[r];void 0===a&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Va),this.bones.push(a),this.boneInverses.push((new ne).fromArray(t.boneInverses[n]))}return this.init(),this},toJSON:function(){var t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;for(var e=this.bones,n=this.boneInverses,i=0,r=e.length;i<r;i++){var a=e[i];t.bones.push(a.uuid);var o=n[i];t.boneInverses.push(o.toArray())}return t}});var Xa=new ne,Ya=new ne,Za=[],Ja=new kn;function Qa(t,e,n){kn.call(this,t,e),this.instanceMatrix=new nn(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}function Ka(t){Ke.call(this),this.type="LineBasicMaterial",this.color=new Ze(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}Qa.prototype=Object.assign(Object.create(kn.prototype),{constructor:Qa,isInstancedMesh:!0,copy:function(t){return kn.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),null!==t.instanceColor&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this},getColorAt:function(t,e){e.fromArray(this.instanceColor.array,3*t)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,16*t)},raycast:function(t,e){var n=this.matrixWorld,i=this.count;if(Ja.geometry=this.geometry,Ja.material=this.material,void 0!==Ja.material)for(var r=0;r<i;r++){this.getMatrixAt(r,Xa),Ya.multiplyMatrices(n,Xa),Ja.matrixWorld=Ya,Ja.raycast(t,Za);for(var a=0,o=Za.length;a<o;a++){var s=Za[a];s.instanceId=r,s.object=this,e.push(s)}Za.length=0}},setColorAt:function(t,e){null===this.instanceColor&&(this.instanceColor=new nn(new Float32Array(3*this.count),3)),e.toArray(this.instanceColor.array,3*t)},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,16*t)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Ka.prototype=Object.create(Ke.prototype),Ka.prototype.constructor=Ka,Ka.prototype.isLineBasicMaterial=!0,Ka.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};var $a=new Lt,to=new Lt,eo=new ne,no=new ee,io=new Xt;function ro(t,e){void 0===t&&(t=new Sn),void 0===e&&(e=new Ka),Ae.call(this),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}ro.prototype=Object.assign(Object.create(Ae.prototype),{constructor:ro,isLine:!0,copy:function(t){return Ae.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){var t=this.geometry;if(t.isBufferGeometry)if(null===t.index){for(var e=t.attributes.position,n=[0],i=1,r=e.count;i<r;i++)$a.fromBufferAttribute(e,i-1),to.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=$a.distanceTo(to);t.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(t,e){var n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(null===n.boundingSphere&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,!1!==t.ray.intersectsSphere(io)){eo.copy(i).invert(),no.copy(t.ray).applyMatrix4(eo);var a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,s=new Lt,c=new Lt,l=new Lt,u=new Lt,h=this.isLineSegments?2:1;if(n.isBufferGeometry){var d=n.index,p=n.attributes.position;if(null!==d)for(var f=d.array,m=0,v=f.length-1;m<v;m+=h){var g=f[m],y=f[m+1];if(s.fromBufferAttribute(p,g),c.fromBufferAttribute(p,y),!(no.distanceSqToSegment(s,c,u,l)>o)){u.applyMatrix4(this.matrixWorld);var x=t.ray.origin.distanceTo(u);x<t.near||x>t.far||e.push({distance:x,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else for(var _=0,b=p.count-1;_<b;_+=h){if(s.fromBufferAttribute(p,_),c.fromBufferAttribute(p,_+1),!(no.distanceSqToSegment(s,c,u,l)>o)){u.applyMatrix4(this.matrixWorld);var w=t.ray.origin.distanceTo(u);w<t.near||w>t.far||e.push({distance:w,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},updateMorphTargets:function(){var t=this.geometry;if(t.isBufferGeometry){var e=t.morphAttributes,n=Object.keys(e);if(n.length>0){var i=e[n[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var r=0,a=i.length;r<a;r++){var o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{var s=t.morphTargets;void 0!==s&&s.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var ao=new Lt,oo=new Lt;function so(t,e){ro.call(this,t,e),this.type="LineSegments"}function co(t,e){ro.call(this,t,e),this.type="LineLoop"}function lo(t){Ke.call(this),this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}so.prototype=Object.assign(Object.create(ro.prototype),{constructor:so,isLineSegments:!0,computeLineDistances:function(){var t=this.geometry;if(t.isBufferGeometry)if(null===t.index){for(var e=t.attributes.position,n=[],i=0,r=e.count;i<r;i+=2)ao.fromBufferAttribute(e,i),oo.fromBufferAttribute(e,i+1),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+ao.distanceTo(oo);t.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}),co.prototype=Object.assign(Object.create(ro.prototype),{constructor:co,isLineLoop:!0}),lo.prototype=Object.create(Ke.prototype),lo.prototype.constructor=lo,lo.prototype.isPointsMaterial=!0,lo.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};var uo=new ne,ho=new ee,po=new Xt,fo=new Lt;function mo(t,e){void 0===t&&(t=new Sn),void 0===e&&(e=new lo),Ae.call(this),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}function vo(t,e,n,i,r,a,o){var s=ho.distanceSqToPoint(t);if(s<n){var c=new Lt;ho.closestPointToPoint(t,c),c.applyMatrix4(i);var l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:o})}}function go(t,e,n,i,r,a,o,s,c){wt.call(this,t,e,n,i,r,a,o,s,c),this.format=void 0!==o?o:E,this.minFilter=void 0!==a?a:g,this.magFilter=void 0!==r?r:g,this.generateMipmaps=!1;var l=this;"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback((function e(){l.needsUpdate=!0,t.requestVideoFrameCallback(e)}))}function yo(t,e,n,i,r,a,o,s,c,l,u,h){wt.call(this,null,a,o,s,c,l,i,r,u,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}function xo(t,e,n,i,r,a,o,s,c){wt.call(this,t,e,n,i,r,a,o,s,c),this.needsUpdate=!0}function _o(t,e,n,i,r,a,o,s,c,l){if((l=void 0!==l?l:L)!==L&&l!==R)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===n&&l===L&&(n=b),void 0===n&&l===R&&(n=T),wt.call(this,null,i,r,a,o,s,l,n,c),this.image={width:t,height:e},this.magFilter=void 0!==o?o:f,this.minFilter=void 0!==s?s:f,this.flipY=!1,this.generateMipmaps=!1}mo.prototype=Object.assign(Object.create(Ae.prototype),{constructor:mo,isPoints:!0,copy:function(t){return Ae.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){var n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(null===n.boundingSphere&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,!1!==t.ray.intersectsSphere(po)){uo.copy(i).invert(),ho.copy(t.ray).applyMatrix4(uo);var a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a;if(n.isBufferGeometry){var s=n.index,c=n.attributes.position;if(null!==s)for(var l=s.array,u=0,h=l.length;u<h;u++){var d=l[u];fo.fromBufferAttribute(c,d),vo(fo,d,o,i,t,e,this)}else for(var p=0,f=c.count;p<f;p++)fo.fromBufferAttribute(c,p),vo(fo,p,o,i,t,e,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},updateMorphTargets:function(){var t=this.geometry;if(t.isBufferGeometry){var e=t.morphAttributes,n=Object.keys(e);if(n.length>0){var i=e[n[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var r=0,a=i.length;r<a;r++){var o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{var s=t.morphTargets;void 0!==s&&s.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}),go.prototype=Object.assign(Object.create(wt.prototype),{constructor:go,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){var t=this.image;!1==="requestVideoFrameCallback"in t&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}),yo.prototype=Object.create(wt.prototype),yo.prototype.constructor=yo,yo.prototype.isCompressedTexture=!0,xo.prototype=Object.create(wt.prototype),xo.prototype.constructor=xo,xo.prototype.isCanvasTexture=!0,_o.prototype=Object.create(wt.prototype),_o.prototype.constructor=_o,_o.prototype.isDepthTexture=!0;var bo=function(t){function e(e,n,i,r){var a;void 0===e&&(e=1),void 0===n&&(n=8),void 0===i&&(i=0),void 0===r&&(r=2*Math.PI),(a=t.call(this)||this).type="CircleGeometry",a.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);var o=[],s=[],c=[],l=[],u=new Lt,h=new yt;s.push(0,0,0),c.push(0,0,1),l.push(.5,.5);for(var d=0,p=3;d<=n;d++,p+=3){var f=i+d/n*r;u.x=e*Math.cos(f),u.y=e*Math.sin(f),s.push(u.x,u.y,u.z),c.push(0,0,1),h.x=(s[p]/e+1)/2,h.y=(s[p+1]/e+1)/2,l.push(h.x,h.y)}for(var m=1;m<=n;m++)o.push(m,m+1,0);return a.setIndex(o),a.setAttribute("position",new dn(s,3)),a.setAttribute("normal",new dn(c,3)),a.setAttribute("uv",new dn(l,2)),a}return ct(e,t),e}(Sn),wo=function(t){function e(e,n,i,r,a,o,s,c){var l;void 0===e&&(e=1),void 0===n&&(n=1),void 0===i&&(i=1),void 0===r&&(r=8),void 0===a&&(a=1),void 0===o&&(o=!1),void 0===s&&(s=0),void 0===c&&(c=2*Math.PI),(l=t.call(this)||this).type="CylinderGeometry",l.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c};var u=lt(l);r=Math.floor(r),a=Math.floor(a);var h=[],d=[],p=[],f=[],m=0,v=[],g=i/2,y=0;function x(t){for(var i=m,a=new yt,o=new Lt,l=0,v=!0===t?e:n,x=!0===t?1:-1,_=1;_<=r;_++)d.push(0,g*x,0),p.push(0,x,0),f.push(.5,.5),m++;for(var b=m,w=0;w<=r;w++){var M=w/r*c+s,S=Math.cos(M),T=Math.sin(M);o.x=v*T,o.y=g*x,o.z=v*S,d.push(o.x,o.y,o.z),p.push(0,x,0),a.x=.5*S+.5,a.y=.5*T*x+.5,f.push(a.x,a.y),m++}for(var E=0;E<r;E++){var A=i+E,L=b+E;!0===t?h.push(L,L+1,A):h.push(L+1,L,A),l+=3}u.addGroup(y,l,!0===t?1:2),y+=l}return function(){for(var t=new Lt,o=new Lt,l=0,x=(n-e)/i,_=0;_<=a;_++){for(var b=[],w=_/a,M=w*(n-e)+e,S=0;S<=r;S++){var T=S/r,E=T*c+s,A=Math.sin(E),L=Math.cos(E);o.x=M*A,o.y=-w*i+g,o.z=M*L,d.push(o.x,o.y,o.z),t.set(A,x,L).normalize(),p.push(t.x,t.y,t.z),f.push(T,1-w),b.push(m++)}v.push(b)}for(var R=0;R<r;R++)for(var C=0;C<a;C++){var P=v[C][R],O=v[C+1][R],I=v[C+1][R+1],D=v[C][R+1];h.push(P,O,D),h.push(O,I,D),l+=6}u.addGroup(y,l,0),y+=l}(),!1===o&&(e>0&&x(!0),n>0&&x(!1)),l.setIndex(h),l.setAttribute("position",new dn(d,3)),l.setAttribute("normal",new dn(p,3)),l.setAttribute("uv",new dn(f,2)),l}return ct(e,t),e}(Sn),Mo=function(t){function e(e,n,i,r,a,o,s){var c;return void 0===e&&(e=1),void 0===n&&(n=1),void 0===i&&(i=8),void 0===r&&(r=1),void 0===a&&(a=!1),void 0===o&&(o=0),void 0===s&&(s=2*Math.PI),(c=t.call(this,0,e,n,i,r,a,o,s)||this).type="ConeGeometry",c.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:s},c}return ct(e,t),e}(wo),So=function(t){function e(e,n,i,r){var a;void 0===i&&(i=1),void 0===r&&(r=0),(a=t.call(this)||this).type="PolyhedronGeometry",a.parameters={vertices:e,indices:n,radius:i,detail:r};var o=[],s=[];function c(t,e,n,i){for(var r=i+1,a=[],o=0;o<=r;o++){a[o]=[];for(var s=t.clone().lerp(n,o/r),c=e.clone().lerp(n,o/r),u=r-o,h=0;h<=u;h++)a[o][h]=0===h&&o===r?s:s.clone().lerp(c,h/u)}for(var d=0;d<r;d++)for(var p=0;p<2*(r-d)-1;p++){var f=Math.floor(p/2);p%2==0?(l(a[d][f+1]),l(a[d+1][f]),l(a[d][f])):(l(a[d][f+1]),l(a[d+1][f+1]),l(a[d+1][f]))}}function l(t){o.push(t.x,t.y,t.z)}function u(t,n){var i=3*t;n.x=e[i+0],n.y=e[i+1],n.z=e[i+2]}function h(t,e,n,i){i<0&&1===t.x&&(s[e]=t.x-1),0===n.x&&0===n.z&&(s[e]=i/2/Math.PI+.5)}function d(t){return Math.atan2(t.z,-t.x)}return function(t){for(var e=new Lt,i=new Lt,r=new Lt,a=0;a<n.length;a+=3)u(n[a+0],e),u(n[a+1],i),u(n[a+2],r),c(e,i,r,t)}(r),function(t){for(var e=new Lt,n=0;n<o.length;n+=3)e.x=o[n+0],e.y=o[n+1],e.z=o[n+2],e.normalize().multiplyScalar(t),o[n+0]=e.x,o[n+1]=e.y,o[n+2]=e.z}(i),function(){for(var t=new Lt,e=0;e<o.length;e+=3){t.x=o[e+0],t.y=o[e+1],t.z=o[e+2];var n=d(t)/2/Math.PI+.5,i=(r=t,Math.atan2(-r.y,Math.sqrt(r.x*r.x+r.z*r.z))/Math.PI+.5);s.push(n,1-i)}var r;(function(){for(var t=new Lt,e=new Lt,n=new Lt,i=new Lt,r=new yt,a=new yt,c=new yt,l=0,u=0;l<o.length;l+=9,u+=6){t.set(o[l+0],o[l+1],o[l+2]),e.set(o[l+3],o[l+4],o[l+5]),n.set(o[l+6],o[l+7],o[l+8]),r.set(s[u+0],s[u+1]),a.set(s[u+2],s[u+3]),c.set(s[u+4],s[u+5]),i.copy(t).add(e).add(n).divideScalar(3);var p=d(i);h(r,u+0,t,p),h(a,u+2,e,p),h(c,u+4,n,p)}})(),function(){for(var t=0;t<s.length;t+=6){var e=s[t+0],n=s[t+2],i=s[t+4],r=Math.max(e,n,i),a=Math.min(e,n,i);r>.9&&a<.1&&(e<.2&&(s[t+0]+=1),n<.2&&(s[t+2]+=1),i<.2&&(s[t+4]+=1))}}()}(),a.setAttribute("position",new dn(o,3)),a.setAttribute("normal",new dn(o.slice(),3)),a.setAttribute("uv",new dn(s,2)),0===r?a.computeVertexNormals():a.normalizeNormals(),a}return ct(e,t),e}(Sn),To=function(t){function e(e,n){var i;void 0===e&&(e=1),void 0===n&&(n=0);var r=(1+Math.sqrt(5))/2,a=1/r,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a];return(i=t.call(this,o,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,n)||this).type="DodecahedronGeometry",i.parameters={radius:e,detail:n},i}return ct(e,t),e}(So),Eo=new Lt,Ao=new Lt,Lo=new Lt,Ro=new ke,Co=function(t){function e(e,n){var i;if((i=t.call(this)||this).type="EdgesGeometry",i.parameters={thresholdAngle:n},n=void 0!==n?n:1,!0===e.isGeometry)return console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),lt(i);for(var r=Math.pow(10,4),a=Math.cos(gt.DEG2RAD*n),o=e.getIndex(),s=e.getAttribute("position"),c=o?o.count:s.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[],f=0;f<c;f+=3){o?(l[0]=o.getX(f),l[1]=o.getX(f+1),l[2]=o.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);var m=Ro.a,v=Ro.b,g=Ro.c;if(m.fromBufferAttribute(s,l[0]),v.fromBufferAttribute(s,l[1]),g.fromBufferAttribute(s,l[2]),Ro.getNormal(Lo),h[0]=Math.round(m.x*r)+","+Math.round(m.y*r)+","+Math.round(m.z*r),h[1]=Math.round(v.x*r)+","+Math.round(v.y*r)+","+Math.round(v.z*r),h[2]=Math.round(g.x*r)+","+Math.round(g.y*r)+","+Math.round(g.z*r),h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(var y=0;y<3;y++){var x=(y+1)%3,_=h[y],b=h[x],w=Ro[u[y]],M=Ro[u[x]],S=_+"_"+b,T=b+"_"+_;T in d&&d[T]?(Lo.dot(d[T].normal)<=a&&(p.push(w.x,w.y,w.z),p.push(M.x,M.y,M.z)),d[T]=null):S in d||(d[S]={index0:l[y],index1:l[x],normal:Lo.clone()})}}for(var E in d)if(d[E]){var A=d[E],L=A.index0,R=A.index1;Eo.fromBufferAttribute(s,L),Ao.fromBufferAttribute(s,R),p.push(Eo.x,Eo.y,Eo.z),p.push(Ao.x,Ao.y,Ao.z)}return i.setAttribute("position",new dn(p,3)),i}return ct(e,t),e}(Sn),Po=function(t,e,n){n=n||2;var i,r,a,o,s,c,l,u=e&&e.length,h=u?e[0]*n:t.length,d=Oo(t,0,h,n,!0),p=[];if(!d||d.next===d.prev)return p;if(u&&(d=function(t,e,n,i){var r,a,o,s=[];for(r=0,a=e.length;r<a;r++)(o=Oo(t,e[r]*i,r<a-1?e[r+1]*i:t.length,i,!1))===o.next&&(o.steiner=!0),s.push(Vo(o));for(s.sort(Ho),r=0;r<s.length;r++)Go(s[r],n),n=Io(n,n.next);return n}(t,e,d,n)),t.length>80*n){i=a=t[0],r=o=t[1];for(var f=n;f<h;f+=n)(s=t[f])<i&&(i=s),(c=t[f+1])<r&&(r=c),s>a&&(a=s),c>o&&(o=c);l=0!==(l=Math.max(a-i,o-r))?1/l:0}return Do(d,p,n,i,r,l),p};function Oo(t,e,n,i,r){var a,o;if(r===function(t,e,n,i){for(var r=0,a=e,o=n-i;a<n;a+=i)r+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return r}(t,e,n,i)>0)for(a=e;a<n;a+=i)o=$o(a,t[a],t[a+1],o);else for(a=n-i;a>=e;a-=i)o=$o(a,t[a],t[a+1],o);return o&&Xo(o,o.next)&&(ts(o),o=o.next),o}function Io(t,e){if(!t)return t;e||(e=t);var n,i=t;do{if(n=!1,i.steiner||!Xo(i,i.next)&&0!==qo(i.prev,i,i.next))i=i.next;else{if(ts(i),(i=e=i.prev)===i.next)break;n=!0}}while(n||i!==e);return e}function Do(t,e,n,i,r,a,o){if(t){!o&&a&&function(t,e,n,i){var r=t;do{null===r.z&&(r.z=ko(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){var e,n,i,r,a,o,s,c,l=1;do{for(n=t,t=null,a=null,o=0;n;){for(o++,i=n,s=0,e=0;e<l&&(s++,i=i.nextZ);e++);for(c=l;s>0||c>0&&i;)0!==s&&(0===c||!i||n.z<=i.z)?(r=n,n=n.nextZ,s--):(r=i,i=i.nextZ,c--),a?a.nextZ=r:t=r,r.prevZ=a,a=r;n=i}a.nextZ=null,l*=2}while(o>1)}(r)}(t,i,r,a);for(var s,c,l=t;t.prev!==t.next;)if(s=t.prev,c=t.next,a?Bo(t,i,r,a):No(t))e.push(s.i/n),e.push(t.i/n),e.push(c.i/n),ts(t),t=c.next,l=c.next;else if((t=c)===l){o?1===o?Do(t=zo(Io(t),e,n),e,n,i,r,a,2):2===o&&Fo(t,e,n,i,r,a):Do(Io(t),e,n,i,r,a,1);break}}}function No(t){var e=t.prev,n=t,i=t.next;if(qo(e,n,i)>=0)return!1;for(var r=t.next.next;r!==t.prev;){if(Wo(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&qo(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Bo(t,e,n,i){var r=t.prev,a=t,o=t.next;if(qo(r,a,o)>=0)return!1;for(var s=r.x<a.x?r.x<o.x?r.x:o.x:a.x<o.x?a.x:o.x,c=r.y<a.y?r.y<o.y?r.y:o.y:a.y<o.y?a.y:o.y,l=r.x>a.x?r.x>o.x?r.x:o.x:a.x>o.x?a.x:o.x,u=r.y>a.y?r.y>o.y?r.y:o.y:a.y>o.y?a.y:o.y,h=ko(s,c,e,n,i),d=ko(l,u,e,n,i),p=t.prevZ,f=t.nextZ;p&&p.z>=h&&f&&f.z<=d;){if(p!==t.prev&&p!==t.next&&Wo(r.x,r.y,a.x,a.y,o.x,o.y,p.x,p.y)&&qo(p.prev,p,p.next)>=0)return!1;if(p=p.prevZ,f!==t.prev&&f!==t.next&&Wo(r.x,r.y,a.x,a.y,o.x,o.y,f.x,f.y)&&qo(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(;p&&p.z>=h;){if(p!==t.prev&&p!==t.next&&Wo(r.x,r.y,a.x,a.y,o.x,o.y,p.x,p.y)&&qo(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;f&&f.z<=d;){if(f!==t.prev&&f!==t.next&&Wo(r.x,r.y,a.x,a.y,o.x,o.y,f.x,f.y)&&qo(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function zo(t,e,n){var i=t;do{var r=i.prev,a=i.next.next;!Xo(r,a)&&Yo(r,i,i.next,a)&&Qo(r,a)&&Qo(a,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(a.i/n),ts(i),ts(i.next),i=t=a),i=i.next}while(i!==t);return Io(i)}function Fo(t,e,n,i,r,a){var o=t;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&jo(o,s)){var c=Ko(o,s);return o=Io(o,o.next),c=Io(c,c.next),Do(o,e,n,i,r,a),void Do(c,e,n,i,r,a)}s=s.next}o=o.next}while(o!==t)}function Ho(t,e){return t.x-e.x}function Go(t,e){if(e=function(t,e){var n,i=e,r=t.x,a=t.y,o=-1/0;do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){var s=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(s<=r&&s>o){if(o=s,s===r){if(a===i.y)return i;if(a===i.next.y)return i.next}n=i.x<i.next.x?i:i.next}}i=i.next}while(i!==e);if(!n)return null;if(r===o)return n;var c,l=n,u=n.x,h=n.y,d=1/0;i=n;do{r>=i.x&&i.x>=u&&r!==i.x&&Wo(a<h?r:o,a,u,h,a<h?o:r,a,i.x,i.y)&&(c=Math.abs(a-i.y)/(r-i.x),Qo(i,t)&&(c<d||c===d&&(i.x>n.x||i.x===n.x&&Uo(n,i)))&&(n=i,d=c)),i=i.next}while(i!==l);return n}(t,e)){var n=Ko(e,t);Io(e,e.next),Io(n,n.next)}}function Uo(t,e){return qo(t.prev,t,e.prev)<0&&qo(e.next,t,t.next)<0}function ko(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Vo(t){var e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function Wo(t,e,n,i,r,a,o,s){return(r-o)*(e-s)-(t-o)*(a-s)>=0&&(t-o)*(i-s)-(n-o)*(e-s)>=0&&(n-o)*(a-s)-(r-o)*(i-s)>=0}function jo(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Yo(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(Qo(t,e)&&Qo(e,t)&&function(t,e){var n=t,i=!1,r=(t.x+e.x)/2,a=(t.y+e.y)/2;do{n.y>a!=n.next.y>a&&n.next.y!==n.y&&r<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next}while(n!==t);return i}(t,e)&&(qo(t.prev,t,e.prev)||qo(t,e.prev,e))||Xo(t,e)&&qo(t.prev,t,t.next)>0&&qo(e.prev,e,e.next)>0)}function qo(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Xo(t,e){return t.x===e.x&&t.y===e.y}function Yo(t,e,n,i){var r=Jo(qo(t,e,n)),a=Jo(qo(t,e,i)),o=Jo(qo(n,i,t)),s=Jo(qo(n,i,e));return r!==a&&o!==s||(!(0!==r||!Zo(t,n,e))||(!(0!==a||!Zo(t,i,e))||(!(0!==o||!Zo(n,t,i))||!(0!==s||!Zo(n,e,i)))))}function Zo(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Jo(t){return t>0?1:t<0?-1:0}function Qo(t,e){return qo(t.prev,t,t.next)<0?qo(t,e,t.next)>=0&&qo(t,t.prev,e)>=0:qo(t,e,t.prev)<0||qo(t,t.next,e)<0}function Ko(t,e){var n=new es(t.i,t.x,t.y),i=new es(e.i,e.x,e.y),r=t.next,a=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,a.next=i,i.prev=a,i}function $o(t,e,n,i){var r=new es(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ts(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function es(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ns={area:function(t){for(var e=t.length,n=0,i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return.5*n},isClockWise:function(t){return ns.area(t)<0},triangulateShape:function(t,e){var n=[],i=[],r=[];is(t),rs(n,t);var a=t.length;e.forEach(is);for(var o=0;o<e.length;o++)i.push(a),a+=e[o].length,rs(n,e[o]);for(var s=Po(n,i),c=0;c<s.length;c+=3)r.push(s.slice(c,c+3));return r}};function is(t){var e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function rs(t,e){for(var n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var as=function(t){function e(e,n){var i;(i=t.call(this)||this).type="ExtrudeGeometry",i.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];for(var r=lt(i),a=[],o=[],s=0,c=e.length;s<c;s++){l(e[s])}function l(t){var e=[],i=void 0!==n.curveSegments?n.curveSegments:12,s=void 0!==n.steps?n.steps:1,c=void 0!==n.depth?n.depth:100,l=void 0===n.bevelEnabled||n.bevelEnabled,u=void 0!==n.bevelThickness?n.bevelThickness:6,h=void 0!==n.bevelSize?n.bevelSize:u-2,d=void 0!==n.bevelOffset?n.bevelOffset:0,p=void 0!==n.bevelSegments?n.bevelSegments:3,f=n.extrudePath,m=void 0!==n.UVGenerator?n.UVGenerator:os;void 0!==n.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),c=n.amount);var v,g,y,x,_,b=!1;f&&(v=f.getSpacedPoints(s),b=!0,l=!1,g=f.computeFrenetFrames(s,!1),y=new Lt,x=new Lt,_=new Lt),l||(p=0,u=0,h=0,d=0);var w=t.extractPoints(i),M=w.shape,S=w.holes;if(!ns.isClockWise(M)){M=M.reverse();for(var T=0,E=S.length;T<E;T++){var A=S[T];ns.isClockWise(A)&&(S[T]=A.reverse())}}for(var L=ns.triangulateShape(M,S),R=M,C=0,P=S.length;C<P;C++){var O=S[C];M=M.concat(O)}function I(t,e,n){return e||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.clone().multiplyScalar(n).add(t)}var D=M.length,N=L.length;function B(t,e,n){var i,r,a,o=t.x-e.x,s=t.y-e.y,c=n.x-t.x,l=n.y-t.y,u=o*o+s*s,h=o*l-s*c;if(Math.abs(h)>Number.EPSILON){var d=Math.sqrt(u),p=Math.sqrt(c*c+l*l),f=e.x-s/d,m=e.y+o/d,v=((n.x-l/p-f)*l-(n.y+c/p-m)*c)/(o*l-s*c),g=(i=f+o*v-t.x)*i+(r=m+s*v-t.y)*r;if(g<=2)return new yt(i,r);a=Math.sqrt(g/2)}else{var y=!1;o>Number.EPSILON?c>Number.EPSILON&&(y=!0):o<-Number.EPSILON?c<-Number.EPSILON&&(y=!0):Math.sign(s)===Math.sign(l)&&(y=!0),y?(i=-s,r=o,a=Math.sqrt(u)):(i=o,r=s,a=Math.sqrt(u/2))}return new yt(i/a,r/a)}for(var z=[],F=0,H=R.length,G=H-1,U=F+1;F<H;F++,G++,U++)G===H&&(G=0),U===H&&(U=0),z[F]=B(R[F],R[G],R[U]);for(var k,V=[],W=z.concat(),j=0,q=S.length;j<q;j++){var X=S[j];k=[];for(var Y=0,Z=X.length,J=Z-1,Q=Y+1;Y<Z;Y++,J++,Q++)J===Z&&(J=0),Q===Z&&(Q=0),k[Y]=B(X[Y],X[J],X[Q]);V.push(k),W=W.concat(k)}for(var K=0;K<p;K++){for(var $=K/p,tt=u*Math.cos($*Math.PI/2),et=h*Math.sin($*Math.PI/2)+d,nt=0,it=R.length;nt<it;nt++){var rt=I(R[nt],z[nt],et);It(rt.x,rt.y,-tt)}for(var at=0,ot=S.length;at<ot;at++){var st=S[at];k=V[at];for(var ct=0,lt=st.length;ct<lt;ct++){var ut=I(st[ct],k[ct],et);It(ut.x,ut.y,-tt)}}}for(var ht=h+d,dt=0;dt<D;dt++){var pt=l?I(M[dt],W[dt],ht):M[dt];b?(x.copy(g.normals[0]).multiplyScalar(pt.x),y.copy(g.binormals[0]).multiplyScalar(pt.y),_.copy(v[0]).add(x).add(y),It(_.x,_.y,_.z)):It(pt.x,pt.y,0)}for(var ft=1;ft<=s;ft++)for(var mt=0;mt<D;mt++){var vt=l?I(M[mt],W[mt],ht):M[mt];b?(x.copy(g.normals[ft]).multiplyScalar(vt.x),y.copy(g.binormals[ft]).multiplyScalar(vt.y),_.copy(v[ft]).add(x).add(y),It(_.x,_.y,_.z)):It(vt.x,vt.y,c/s*ft)}for(var gt=p-1;gt>=0;gt--){for(var xt=gt/p,_t=u*Math.cos(xt*Math.PI/2),bt=h*Math.sin(xt*Math.PI/2)+d,wt=0,Mt=R.length;wt<Mt;wt++){var St=I(R[wt],z[wt],bt);It(St.x,St.y,c+_t)}for(var Tt=0,Et=S.length;Tt<Et;Tt++){var At=S[Tt];k=V[Tt];for(var Rt=0,Ct=At.length;Rt<Ct;Rt++){var Pt=I(At[Rt],k[Rt],bt);b?It(Pt.x,Pt.y+v[s-1].y,v[s-1].x+_t):It(Pt.x,Pt.y,c+_t)}}}function Ot(t,e){for(var n=t.length;--n>=0;){var i=n,r=n-1;r<0&&(r=t.length-1);for(var a=0,o=s+2*p;a<o;a++){var c=D*a,l=D*(a+1);Nt(e+i+c,e+r+c,e+r+l,e+i+l)}}}function It(t,n,i){e.push(t),e.push(n),e.push(i)}function Dt(t,e,n){Bt(t),Bt(e),Bt(n);var i=a.length/3,o=m.generateTopUV(r,a,i-3,i-2,i-1);zt(o[0]),zt(o[1]),zt(o[2])}function Nt(t,e,n,i){Bt(t),Bt(e),Bt(i),Bt(e),Bt(n),Bt(i);var o=a.length/3,s=m.generateSideWallUV(r,a,o-6,o-3,o-2,o-1);zt(s[0]),zt(s[1]),zt(s[3]),zt(s[1]),zt(s[2]),zt(s[3])}function Bt(t){a.push(e[3*t+0]),a.push(e[3*t+1]),a.push(e[3*t+2])}function zt(t){o.push(t.x),o.push(t.y)}!function(){var t=a.length/3;if(l){for(var e=0,n=D*e,i=0;i<N;i++){var o=L[i];Dt(o[2]+n,o[1]+n,o[0]+n)}n=D*(e=s+2*p);for(var c=0;c<N;c++){var u=L[c];Dt(u[0]+n,u[1]+n,u[2]+n)}}else{for(var h=0;h<N;h++){var d=L[h];Dt(d[2],d[1],d[0])}for(var f=0;f<N;f++){var m=L[f];Dt(m[0]+D*s,m[1]+D*s,m[2]+D*s)}}r.addGroup(t,a.length/3-t,0)}(),function(){var t=a.length/3,e=0;Ot(R,e),e+=R.length;for(var n=0,i=S.length;n<i;n++){var o=S[n];Ot(o,e),e+=o.length}r.addGroup(t,a.length/3-t,1)}()}return i.setAttribute("position",new dn(a,3)),i.setAttribute("uv",new dn(o,2)),i.computeVertexNormals(),i}return ct(e,t),e.prototype.toJSON=function(){var t=Sn.prototype.toJSON.call(this);return function(t,e,n){if(n.shapes=[],Array.isArray(t))for(var i=0,r=t.length;i<r;i++){var a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);void 0!==e.extrudePath&&(n.options.extrudePath=e.extrudePath.toJSON());return n}(this.parameters.shapes,this.parameters.options,t)},e}(Sn),os={generateTopUV:function(t,e,n,i,r){var a=e[3*n],o=e[3*n+1],s=e[3*i],c=e[3*i+1],l=e[3*r],u=e[3*r+1];return[new yt(a,o),new yt(s,c),new yt(l,u)]},generateSideWallUV:function(t,e,n,i,r,a){var o=e[3*n],s=e[3*n+1],c=e[3*n+2],l=e[3*i],u=e[3*i+1],h=e[3*i+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],m=e[3*a],v=e[3*a+1],g=e[3*a+2];return Math.abs(s-u)<.01?[new yt(o,1-c),new yt(l,1-h),new yt(d,1-f),new yt(m,1-g)]:[new yt(s,1-c),new yt(u,1-h),new yt(p,1-f),new yt(v,1-g)]}};var ss=function(t){function e(e,n){var i;void 0===e&&(e=1),void 0===n&&(n=0);var r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1];return(i=t.call(this,a,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,n)||this).type="IcosahedronGeometry",i.parameters={radius:e,detail:n},i}return ct(e,t),e}(So),cs=function(t){function e(e,n,i,r){var a;void 0===n&&(n=12),void 0===i&&(i=0),void 0===r&&(r=2*Math.PI),(a=t.call(this)||this).type="LatheGeometry",a.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=gt.clamp(r,0,2*Math.PI);for(var o=[],s=[],c=[],l=1/n,u=new Lt,h=new yt,d=0;d<=n;d++)for(var p=i+d*l*r,f=Math.sin(p),m=Math.cos(p),v=0;v<=e.length-1;v++)u.x=e[v].x*f,u.y=e[v].y,u.z=e[v].x*m,s.push(u.x,u.y,u.z),h.x=d/n,h.y=v/(e.length-1),c.push(h.x,h.y);for(var g=0;g<n;g++)for(var y=0;y<e.length-1;y++){var x=y+g*e.length,_=x,b=x+e.length,w=x+e.length+1,M=x+1;o.push(_,b,M),o.push(b,w,M)}if(a.setIndex(o),a.setAttribute("position",new dn(s,3)),a.setAttribute("uv",new dn(c,2)),a.computeVertexNormals(),r===2*Math.PI)for(var S=a.attributes.normal.array,T=new Lt,E=new Lt,A=new Lt,L=n*e.length*3,R=0,C=0;R<e.length;R++,C+=3)T.x=S[C+0],T.y=S[C+1],T.z=S[C+2],E.x=S[L+C+0],E.y=S[L+C+1],E.z=S[L+C+2],A.addVectors(T,E).normalize(),S[C+0]=S[L+C+0]=A.x,S[C+1]=S[L+C+1]=A.y,S[C+2]=S[L+C+2]=A.z;return a}return ct(e,t),e}(Sn),ls=function(t){function e(e,n){var i;void 0===e&&(e=1),void 0===n&&(n=0);return(i=t.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,n)||this).type="OctahedronGeometry",i.parameters={radius:e,detail:n},i}return ct(e,t),e}(So);function us(t,e,n){Sn.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n};var i=[],r=[],a=[],o=[],s=1e-5,c=new Lt,l=new Lt,u=new Lt,h=new Lt,d=new Lt;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");for(var p=e+1,f=0;f<=n;f++)for(var m=f/n,v=0;v<=e;v++){var g=v/e;t(g,m,l),r.push(l.x,l.y,l.z),g-s>=0?(t(g-s,m,u),h.subVectors(l,u)):(t(g+s,m,u),h.subVectors(u,l)),m-s>=0?(t(g,m-s,u),d.subVectors(l,u)):(t(g,m+s,u),d.subVectors(u,l)),c.crossVectors(h,d).normalize(),a.push(c.x,c.y,c.z),o.push(g,m)}for(var y=0;y<n;y++)for(var x=0;x<e;x++){var _=y*p+x,b=y*p+x+1,w=(y+1)*p+x+1,M=(y+1)*p+x;i.push(_,b,M),i.push(b,w,M)}this.setIndex(i),this.setAttribute("position",new dn(r,3)),this.setAttribute("normal",new dn(a,3)),this.setAttribute("uv",new dn(o,2))}us.prototype=Object.create(Sn.prototype),us.prototype.constructor=us;var hs=function(t){function e(e,n,i,r,a,o){var s;void 0===e&&(e=.5),void 0===n&&(n=1),void 0===i&&(i=8),void 0===r&&(r=1),void 0===a&&(a=0),void 0===o&&(o=2*Math.PI),(s=t.call(this)||this).type="RingGeometry",s.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:o},i=Math.max(3,i);for(var c=[],l=[],u=[],h=[],d=e,p=(n-e)/(r=Math.max(1,r)),f=new Lt,m=new yt,v=0;v<=r;v++){for(var g=0;g<=i;g++){var y=a+g/i*o;f.x=d*Math.cos(y),f.y=d*Math.sin(y),l.push(f.x,f.y,f.z),u.push(0,0,1),m.x=(f.x/n+1)/2,m.y=(f.y/n+1)/2,h.push(m.x,m.y)}d+=p}for(var x=0;x<r;x++)for(var _=x*(i+1),b=0;b<i;b++){var w=b+_,M=w,S=w+i+1,T=w+i+2,E=w+1;c.push(M,S,E),c.push(S,T,E)}return s.setIndex(c),s.setAttribute("position",new dn(l,3)),s.setAttribute("normal",new dn(u,3)),s.setAttribute("uv",new dn(h,2)),s}return ct(e,t),e}(Sn),ds=function(t){function e(e,n){var i;void 0===n&&(n=12),(i=t.call(this)||this).type="ShapeGeometry",i.parameters={shapes:e,curveSegments:n};var r=[],a=[],o=[],s=[],c=0,l=0;if(!1===Array.isArray(e))h(e);else for(var u=0;u<e.length;u++)h(e[u]),i.addGroup(c,l,u),c+=l,l=0;function h(t){var e=a.length/3,i=t.extractPoints(n),c=i.shape,u=i.holes;!1===ns.isClockWise(c)&&(c=c.reverse());for(var h=0,d=u.length;h<d;h++){var p=u[h];!0===ns.isClockWise(p)&&(u[h]=p.reverse())}for(var f=ns.triangulateShape(c,u),m=0,v=u.length;m<v;m++){var g=u[m];c=c.concat(g)}for(var y=0,x=c.length;y<x;y++){var _=c[y];a.push(_.x,_.y,0),o.push(0,0,1),s.push(_.x,_.y)}for(var b=0,w=f.length;b<w;b++){var M=f[b],S=M[0]+e,T=M[1]+e,E=M[2]+e;r.push(S,T,E),l+=3}}return i.setIndex(r),i.setAttribute("position",new dn(a,3)),i.setAttribute("normal",new dn(o,3)),i.setAttribute("uv",new dn(s,2)),i}return ct(e,t),e.prototype.toJSON=function(){var t=Sn.prototype.toJSON.call(this);return function(t,e){if(e.shapes=[],Array.isArray(t))for(var n=0,i=t.length;n<i;n++){var r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}(this.parameters.shapes,t)},e}(Sn);var ps=function(t){function e(e,n,i,r,a,o,s){var c;void 0===e&&(e=1),void 0===n&&(n=8),void 0===i&&(i=6),void 0===r&&(r=0),void 0===a&&(a=2*Math.PI),void 0===o&&(o=0),void 0===s&&(s=Math.PI),(c=t.call(this)||this).type="SphereGeometry",c.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));for(var l=Math.min(o+s,Math.PI),u=0,h=[],d=new Lt,p=new Lt,f=[],m=[],v=[],g=[],y=0;y<=i;y++){var x=[],_=y/i,b=0;0==y&&0==o?b=.5/n:y==i&&l==Math.PI&&(b=-.5/n);for(var w=0;w<=n;w++){var M=w/n;d.x=-e*Math.cos(r+M*a)*Math.sin(o+_*s),d.y=e*Math.cos(o+_*s),d.z=e*Math.sin(r+M*a)*Math.sin(o+_*s),m.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),g.push(M+b,1-_),x.push(u++)}h.push(x)}for(var S=0;S<i;S++)for(var T=0;T<n;T++){var E=h[S][T+1],A=h[S][T],L=h[S+1][T],R=h[S+1][T+1];(0!==S||o>0)&&f.push(E,A,R),(S!==i-1||l<Math.PI)&&f.push(A,L,R)}return c.setIndex(f),c.setAttribute("position",new dn(m,3)),c.setAttribute("normal",new dn(v,3)),c.setAttribute("uv",new dn(g,2)),c}return ct(e,t),e}(Sn),fs=function(t){function e(e,n){var i;void 0===e&&(e=1),void 0===n&&(n=0);return(i=t.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,n)||this).type="TetrahedronGeometry",i.parameters={radius:e,detail:n},i}return ct(e,t),e}(So),ms=function(t){function e(e,n){var i;void 0===n&&(n={});var r=n.font;if(!r||!r.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Sn||lt(i);var a=r.generateShapes(e,n.size);return n.depth=void 0!==n.height?n.height:50,void 0===n.bevelThickness&&(n.bevelThickness=10),void 0===n.bevelSize&&(n.bevelSize=8),void 0===n.bevelEnabled&&(n.bevelEnabled=!1),(i=t.call(this,a,n)||this).type="TextGeometry",i}return ct(e,t),e}(as),vs=function(t){function e(e,n,i,r,a){var o;void 0===e&&(e=1),void 0===n&&(n=.4),void 0===i&&(i=8),void 0===r&&(r=6),void 0===a&&(a=2*Math.PI),(o=t.call(this)||this).type="TorusGeometry",o.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);for(var s=[],c=[],l=[],u=[],h=new Lt,d=new Lt,p=new Lt,f=0;f<=i;f++)for(var m=0;m<=r;m++){var v=m/r*a,g=f/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(v),d.y=(e+n*Math.cos(g))*Math.sin(v),d.z=n*Math.sin(g),c.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),u.push(m/r),u.push(f/i)}for(var y=1;y<=i;y++)for(var x=1;x<=r;x++){var _=(r+1)*y+x-1,b=(r+1)*(y-1)+x-1,w=(r+1)*(y-1)+x,M=(r+1)*y+x;s.push(_,b,M),s.push(b,w,M)}return o.setIndex(s),o.setAttribute("position",new dn(c,3)),o.setAttribute("normal",new dn(l,3)),o.setAttribute("uv",new dn(u,2)),o}return ct(e,t),e}(Sn),gs=function(t){function e(e,n,i,r,a,o){var s;void 0===e&&(e=1),void 0===n&&(n=.4),void 0===i&&(i=64),void 0===r&&(r=8),void 0===a&&(a=2),void 0===o&&(o=3),(s=t.call(this)||this).type="TorusKnotGeometry",s.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:a,q:o},i=Math.floor(i),r=Math.floor(r);for(var c=[],l=[],u=[],h=[],d=new Lt,p=new Lt,f=new Lt,m=new Lt,v=new Lt,g=new Lt,y=new Lt,x=0;x<=i;++x){var _=x/i*a*Math.PI*2;P(_,a,o,e,f),P(_+.01,a,o,e,m),g.subVectors(m,f),y.addVectors(m,f),v.crossVectors(g,y),y.crossVectors(v,g),v.normalize(),y.normalize();for(var b=0;b<=r;++b){var w=b/r*Math.PI*2,M=-n*Math.cos(w),S=n*Math.sin(w);d.x=f.x+(M*y.x+S*v.x),d.y=f.y+(M*y.y+S*v.y),d.z=f.z+(M*y.z+S*v.z),l.push(d.x,d.y,d.z),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(x/i),h.push(b/r)}}for(var T=1;T<=i;T++)for(var E=1;E<=r;E++){var A=(r+1)*(T-1)+(E-1),L=(r+1)*T+(E-1),R=(r+1)*T+E,C=(r+1)*(T-1)+E;c.push(A,L,C),c.push(L,R,C)}function P(t,e,n,i,r){var a=Math.cos(t),o=Math.sin(t),s=n/e*t,c=Math.cos(s);r.x=i*(2+c)*.5*a,r.y=i*(2+c)*o*.5,r.z=i*Math.sin(s)*.5}return s.setIndex(c),s.setAttribute("position",new dn(l,3)),s.setAttribute("normal",new dn(u,3)),s.setAttribute("uv",new dn(h,2)),s}return ct(e,t),e}(Sn),ys=function(t){function e(e,n,i,r,a){var o;void 0===n&&(n=64),void 0===i&&(i=1),void 0===r&&(r=8),void 0===a&&(a=!1),(o=t.call(this)||this).type="TubeGeometry",o.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:a};var s=e.computeFrenetFrames(n,a);o.tangents=s.tangents,o.normals=s.normals,o.binormals=s.binormals;var c=new Lt,l=new Lt,u=new yt,h=new Lt,d=[],p=[],f=[],m=[];function v(t){h=e.getPointAt(t/n,h);for(var a=s.normals[t],o=s.binormals[t],u=0;u<=r;u++){var f=u/r*Math.PI*2,m=Math.sin(f),v=-Math.cos(f);l.x=v*a.x+m*o.x,l.y=v*a.y+m*o.y,l.z=v*a.z+m*o.z,l.normalize(),p.push(l.x,l.y,l.z),c.x=h.x+i*l.x,c.y=h.y+i*l.y,c.z=h.z+i*l.z,d.push(c.x,c.y,c.z)}}return function(){for(var t=0;t<n;t++)v(t);v(!1===a?n:0),function(){for(var t=0;t<=n;t++)for(var e=0;e<=r;e++)u.x=t/n,u.y=e/r,f.push(u.x,u.y)}(),function(){for(var t=1;t<=n;t++)for(var e=1;e<=r;e++){var i=(r+1)*(t-1)+(e-1),a=(r+1)*t+(e-1),o=(r+1)*t+e,s=(r+1)*(t-1)+e;m.push(i,a,s),m.push(a,o,s)}}()}(),o.setIndex(m),o.setAttribute("position",new dn(d,3)),o.setAttribute("normal",new dn(p,3)),o.setAttribute("uv",new dn(f,2)),o}return ct(e,t),e.prototype.toJSON=function(){var t=Sn.prototype.toJSON.call(this);return t.path=this.parameters.path.toJSON(),t},e}(Sn),xs=function(t){function e(e){var n;if((n=t.call(this)||this).type="WireframeGeometry",!0===e.isGeometry)return console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),lt(n);var i=[],r=[0,0],a={},o=new Lt;if(null!==e.index){var s=e.attributes.position,c=e.index,l=e.groups;0===l.length&&(l=[{start:0,count:c.count,materialIndex:0}]);for(var u=0,h=l.length;u<h;++u)for(var d=l[u],p=d.start,f=p,m=p+d.count;f<m;f+=3)for(var v=0;v<3;v++){var g=c.getX(f+v),y=c.getX(f+(v+1)%3);r[0]=Math.min(g,y),r[1]=Math.max(g,y);var x=r[0]+","+r[1];void 0===a[x]&&(a[x]={index1:r[0],index2:r[1]})}for(var _ in a){var b=a[_];o.fromBufferAttribute(s,b.index1),i.push(o.x,o.y,o.z),o.fromBufferAttribute(s,b.index2),i.push(o.x,o.y,o.z)}}else for(var w=e.attributes.position,M=0,S=w.count/3;M<S;M++)for(var T=0;T<3;T++){var E=3*M+T;o.fromBufferAttribute(w,E),i.push(o.x,o.y,o.z);var A=3*M+(T+1)%3;o.fromBufferAttribute(w,A),i.push(o.x,o.y,o.z)}return n.setAttribute("position",new dn(i,3)),n}return ct(e,t),e}(Sn),_s=Object.freeze({__proto__:null,BoxGeometry:Wn,BoxBufferGeometry:Wn,CircleGeometry:bo,CircleBufferGeometry:bo,ConeGeometry:Mo,ConeBufferGeometry:Mo,CylinderGeometry:wo,CylinderBufferGeometry:wo,DodecahedronGeometry:To,DodecahedronBufferGeometry:To,EdgesGeometry:Co,ExtrudeGeometry:as,ExtrudeBufferGeometry:as,IcosahedronGeometry:ss,IcosahedronBufferGeometry:ss,LatheGeometry:cs,LatheBufferGeometry:cs,OctahedronGeometry:ls,OctahedronBufferGeometry:ls,ParametricGeometry:us,ParametricBufferGeometry:us,PlaneGeometry:si,PlaneBufferGeometry:si,PolyhedronGeometry:So,PolyhedronBufferGeometry:So,RingGeometry:hs,RingBufferGeometry:hs,ShapeGeometry:ds,ShapeBufferGeometry:ds,SphereGeometry:ps,SphereBufferGeometry:ps,TetrahedronGeometry:fs,TetrahedronBufferGeometry:fs,TextGeometry:ms,TextBufferGeometry:ms,TorusGeometry:vs,TorusBufferGeometry:vs,TorusKnotGeometry:gs,TorusKnotBufferGeometry:gs,TubeGeometry:ys,TubeBufferGeometry:ys,WireframeGeometry:xs});function bs(t){Ke.call(this),this.type="ShadowMaterial",this.color=new Ze(0),this.transparent=!0,this.setValues(t)}function ws(t){Yn.call(this,t),this.type="RawShaderMaterial"}function Ms(t){Ke.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}function Ss(t){Ms.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=gt.clamp(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}function Ts(t){Ke.call(this),this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function Es(t){Ke.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function As(t){Ke.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function Ls(t){Ke.call(this),this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function Rs(t){Ke.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ze(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function Cs(t){Ka.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}bs.prototype=Object.create(Ke.prototype),bs.prototype.constructor=bs,bs.prototype.isShadowMaterial=!0,bs.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.color.copy(t.color),this},ws.prototype=Object.create(Yn.prototype),ws.prototype.constructor=ws,ws.prototype.isRawShaderMaterial=!0,Ms.prototype=Object.create(Ke.prototype),Ms.prototype.constructor=Ms,Ms.prototype.isMeshStandardMaterial=!0,Ms.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this},Ss.prototype=Object.create(Ms.prototype),Ss.prototype.constructor=Ss,Ss.prototype.isMeshPhysicalMaterial=!0,Ss.prototype.copy=function(t){return Ms.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new Ze).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this},Ts.prototype=Object.create(Ke.prototype),Ts.prototype.constructor=Ts,Ts.prototype.isMeshPhongMaterial=!0,Ts.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},Es.prototype=Object.create(Ke.prototype),Es.prototype.constructor=Es,Es.prototype.isMeshToonMaterial=!0,Es.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},As.prototype=Object.create(Ke.prototype),As.prototype.constructor=As,As.prototype.isMeshNormalMaterial=!0,As.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},Ls.prototype=Object.create(Ke.prototype),Ls.prototype.constructor=Ls,Ls.prototype.isMeshLambertMaterial=!0,Ls.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},Rs.prototype=Object.create(Ke.prototype),Rs.prototype.constructor=Rs,Rs.prototype.isMeshMatcapMaterial=!0,Rs.prototype.copy=function(t){return Ke.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},Cs.prototype=Object.create(Ka.prototype),Cs.prototype.constructor=Cs,Cs.prototype.isLineDashedMaterial=!0,Cs.prototype.copy=function(t){return Ka.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Ps=Object.freeze({__proto__:null,ShadowMaterial:bs,SpriteMaterial:xa,RawShaderMaterial:ws,ShaderMaterial:Yn,PointsMaterial:lo,MeshPhysicalMaterial:Ss,MeshStandardMaterial:Ms,MeshPhongMaterial:Ts,MeshToonMaterial:Es,MeshNormalMaterial:As,MeshLambertMaterial:Ls,MeshDepthMaterial:$r,MeshDistanceMaterial:ta,MeshBasicMaterial:$e,MeshMatcapMaterial:Rs,LineDashedMaterial:Cs,LineBasicMaterial:Ka,Material:Ke}),Os={arraySlice:function(t,e,n){return Os.isTypedArray(t)?new t.constructor(t.subarray(e,void 0!==n?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:"number"==typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){for(var e=t.length,n=new Array(e),i=0;i!==e;++i)n[i]=i;return n.sort((function(e,n){return t[e]-t[n]})),n},sortedArray:function(t,e,n){for(var i=t.length,r=new t.constructor(i),a=0,o=0;o!==i;++a)for(var s=n[a]*e,c=0;c!==e;++c)r[o++]=t[s+c];return r},flattenJSON:function(t,e,n,i){for(var r=1,a=t[0];void 0!==a&&void 0===a[i];)a=t[r++];if(void 0!==a){var o=a[i];if(void 0!==o)if(Array.isArray(o))do{void 0!==(o=a[i])&&(e.push(a.time),n.push.apply(n,o)),a=t[r++]}while(void 0!==a);else if(void 0!==o.toArray)do{void 0!==(o=a[i])&&(e.push(a.time),o.toArray(n,n.length)),a=t[r++]}while(void 0!==a);else do{void 0!==(o=a[i])&&(e.push(a.time),n.push(o)),a=t[r++]}while(void 0!==a)}},subclip:function(t,e,n,i,r){void 0===r&&(r=30);var a=t.clone();a.name=e;for(var o=[],s=0;s<a.tracks.length;++s){for(var c=a.tracks[s],l=c.getValueSize(),u=[],h=[],d=0;d<c.times.length;++d){var p=c.times[d]*r;if(!(p<n||p>=i)){u.push(c.times[d]);for(var f=0;f<l;++f)h.push(c.values[d*l+f])}}0!==u.length&&(c.times=Os.convertArray(u,c.times.constructor),c.values=Os.convertArray(h,c.values.constructor),o.push(c))}a.tracks=o;for(var m=1/0,v=0;v<a.tracks.length;++v)m>a.tracks[v].times[0]&&(m=a.tracks[v].times[0]);for(var g=0;g<a.tracks.length;++g)a.tracks[g].shift(-1*m);return a.resetDuration(),a},makeClipAdditive:function(t,e,n,i){void 0===e&&(e=0),void 0===n&&(n=t),void 0===i&&(i=30),i<=0&&(i=30);for(var r=n.tracks.length,a=e/i,o=function(e){var i=n.tracks[e],r=i.ValueTypeName;if("bool"===r||"string"===r)return"continue";var o=t.tracks.find((function(t){return t.name===i.name&&t.ValueTypeName===r}));if(void 0===o)return"continue";var s=0,c=i.getValueSize();i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(s=c/3);var l=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(l=u/3);var h=i.times.length-1,d=void 0;if(a<=i.times[0]){var p=s,f=c-s;d=Os.arraySlice(i.values,p,f)}else if(a>=i.times[h]){var m=h*c+s,v=m+c-s;d=Os.arraySlice(i.values,m,v)}else{var g=i.createInterpolant(),y=s,x=c-s;g.evaluate(a),d=Os.arraySlice(g.resultBuffer,y,x)}"quaternion"===r&&(new At).fromArray(d).normalize().conjugate().toArray(d);for(var _=o.times.length,b=0;b<_;++b){var w=b*u+l;if("quaternion"===r)At.multiplyQuaternionsFlat(o.values,w,d,0,o.values,w);else for(var M=u-2*l,S=0;S<M;++S)o.values[w+S]-=d[S]}},s=0;s<r;++s)o(s);return t.blendMode=X,t}};function Is(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==i?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}function Ds(t,e,n,i){Is.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}function Ns(t,e,n,i){Is.call(this,t,e,n,i)}function Bs(t,e,n,i){Is.call(this,t,e,n,i)}function zs(t,e,n,i){if(void 0===t)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===e||0===e.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Os.convertArray(e,this.TimeBufferType),this.values=Os.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}function Fs(t,e,n){zs.call(this,t,e,n)}function Hs(t,e,n,i){zs.call(this,t,e,n,i)}function Gs(t,e,n,i){zs.call(this,t,e,n,i)}function Us(t,e,n,i){Is.call(this,t,e,n,i)}function ks(t,e,n,i){zs.call(this,t,e,n,i)}function Vs(t,e,n,i){zs.call(this,t,e,n,i)}function Ws(t,e,n,i){zs.call(this,t,e,n,i)}function js(t,e,n,i){void 0===e&&(e=-1),void 0===i&&(i=q),this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=gt.generateUUID(),this.duration<0&&this.resetDuration()}function qs(t){if(void 0===t.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");var e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return Hs;case"quaternion":return ks;case"bool":case"boolean":return Fs;case"string":return Vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(t.type);if(void 0===t.times){var n=[],i=[];Os.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Is.prototype,{evaluate:function(t){var e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{var a;n:{i:if(!(t<i)){for(var o=n+2;;){if(void 0===i){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,t<(i=e[++n]))break e}a=e.length;break n}if(t>=r)break t;var s=e[1];t<s&&(n=2,r=s);for(var c=n-2;;){if(void 0===r)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===c)break;if(i=r,t>=(r=e[--n-1]))break e}a=n,n=0}for(;n<a;){var l=n+a>>>1;t<e[l]?a=l:n=l+1}if(i=e[n],void 0===(r=e[n-1]))return this._cachedIndex=0,this.beforeStart_(0,t,i);if(void 0===i)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){for(var e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i,a=0;a!==i;++a)e[a]=n[r+a];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),Object.assign(Is.prototype,{beforeStart_:Is.prototype.copySampleValue_,afterEnd_:Is.prototype.copySampleValue_}),Ds.prototype=Object.assign(Object.create(Is.prototype),{constructor:Ds,DefaultSettings_:{endingStart:V,endingEnd:V},intervalChanged_:function(t,e,n){var i=this.parameterPositions,r=t-2,a=t+1,o=i[r],s=i[a];if(void 0===o)switch(this.getSettings_().endingStart){case W:r=t,o=2*e-n;break;case j:o=e+i[r=i.length-2]-i[r+1];break;default:r=t,o=n}if(void 0===s)switch(this.getSettings_().endingEnd){case W:a=t,s=2*n-e;break;case j:a=1,s=n+i[1]-i[0];break;default:a=t-1,s=e}var c=.5*(n-e),l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(s-n),this._offsetPrev=r*l,this._offsetNext=a*l},interpolate_:function(t,e,n,i){for(var r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=t*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),f=p*p,m=f*p,v=-h*m+2*h*f-h*p,g=(1+h)*m+(-1.5-2*h)*f+(-.5+h)*p+1,y=(-1-d)*m+(1.5+d)*f+.5*p,x=d*m-d*f,_=0;_!==o;++_)r[_]=v*a[l+_]+g*a[c+_]+y*a[s+_]+x*a[u+_];return r}}),Ns.prototype=Object.assign(Object.create(Is.prototype),{constructor:Ns,interpolate_:function(t,e,n,i){for(var r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=t*o,c=s-o,l=(n-e)/(i-e),u=1-l,h=0;h!==o;++h)r[h]=a[c+h]*u+a[s+h]*l;return r}}),Bs.prototype=Object.assign(Object.create(Is.prototype),{constructor:Bs,interpolate_:function(t){return this.copySampleValue_(t-1)}}),Object.assign(zs,{toJSON:function(t){var e,n=t.constructor;if(void 0!==n.toJSON)e=n.toJSON(t);else{e={name:t.name,times:Os.convertArray(t.times,Array),values:Os.convertArray(t.values,Array)};var i=t.getInterpolation();i!==t.DefaultInterpolation&&(e.interpolation=i)}return e.type=t.ValueTypeName,e}}),Object.assign(zs.prototype,{constructor:zs,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:U,InterpolantFactoryMethodDiscrete:function(t){return new Bs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Ns(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new Ds(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){var e;switch(t){case G:e=this.InterpolantFactoryMethodDiscrete;break;case U:e=this.InterpolantFactoryMethodLinear;break;case k:e=this.InterpolantFactoryMethodSmooth}if(void 0===e){var n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return G;case this.InterpolantFactoryMethodLinear:return U;case this.InterpolantFactoryMethodSmooth:return k}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(0!==t)for(var e=this.times,n=0,i=e.length;n!==i;++n)e[n]+=t;return this},scale:function(t){if(1!==t)for(var e=this.times,n=0,i=e.length;n!==i;++n)e[n]*=t;return this},trim:function(t,e){for(var n=this.times,i=n.length,r=0,a=i-1;r!==i&&n[r]<t;)++r;for(;-1!==a&&n[a]>e;)--a;if(++a,0!==r||a!==i){r>=a&&(r=(a=Math.max(a,1))-1);var o=this.getValueSize();this.times=Os.arraySlice(n,r,a),this.values=Os.arraySlice(this.values,r*o,a*o)}return this},validate:function(){var t=!0,e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);var n=this.times,i=this.values,r=n.length;0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);for(var a=null,o=0;o!==r;o++){var s=n[o];if("number"==typeof s&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,s),t=!1;break}if(null!==a&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,s,a),t=!1;break}a=s}if(void 0!==i&&Os.isTypedArray(i))for(var c=0,l=i.length;c!==l;++c){var u=i[c];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,u),t=!1;break}}return t},optimize:function(){for(var t=Os.arraySlice(this.times),e=Os.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===k,r=t.length-1,a=1,o=1;o<r;++o){var s=!1,c=t[o];if(c!==t[o+1]&&(1!==o||c!==t[0]))if(i)s=!0;else for(var l=o*n,u=l-n,h=l+n,d=0;d!==n;++d){var p=e[l+d];if(p!==e[u+d]||p!==e[h+d]){s=!0;break}}if(s){if(o!==a){t[a]=t[o];for(var f=o*n,m=a*n,v=0;v!==n;++v)e[m+v]=e[f+v]}++a}}if(r>0){t[a]=t[r];for(var g=r*n,y=a*n,x=0;x!==n;++x)e[y+x]=e[g+x];++a}return a!==t.length?(this.times=Os.arraySlice(t,0,a),this.values=Os.arraySlice(e,0,a*n)):(this.times=t,this.values=e),this},clone:function(){var t=Os.arraySlice(this.times,0),e=Os.arraySlice(this.values,0),n=new(0,this.constructor)(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}),Fs.prototype=Object.assign(Object.create(zs.prototype),{constructor:Fs,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:G,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Hs.prototype=Object.assign(Object.create(zs.prototype),{constructor:Hs,ValueTypeName:"color"}),Gs.prototype=Object.assign(Object.create(zs.prototype),{constructor:Gs,ValueTypeName:"number"}),Us.prototype=Object.assign(Object.create(Is.prototype),{constructor:Us,interpolate_:function(t,e,n,i){for(var r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-e)/(i-e),c=t*o,l=c+o;c!==l;c+=4)At.slerpFlat(r,0,a,c-o,a,c,s);return r}}),ks.prototype=Object.assign(Object.create(zs.prototype),{constructor:ks,ValueTypeName:"quaternion",DefaultInterpolation:U,InterpolantFactoryMethodLinear:function(t){return new Us(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0}),Vs.prototype=Object.assign(Object.create(zs.prototype),{constructor:Vs,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:G,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Ws.prototype=Object.assign(Object.create(zs.prototype),{constructor:Ws,ValueTypeName:"vector"}),Object.assign(js,{parse:function(t){for(var e=[],n=t.tracks,i=1/(t.fps||1),r=0,a=n.length;r!==a;++r)e.push(qs(n[r]).scale(i));var o=new js(t.name,t.duration,e,t.blendMode);return o.uuid=t.uuid,o},toJSON:function(t){for(var e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode},r=0,a=n.length;r!==a;++r)e.push(zs.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){for(var r=e.length,a=[],o=0;o<r;o++){var s=[],c=[];s.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);var l=Os.getKeyframeOrder(s);s=Os.sortedArray(s,1,l),c=Os.sortedArray(c,1,l),i||0!==s[0]||(s.push(r),c.push(c[0])),a.push(new Gs(".morphTargetInfluences["+e[o].name+"]",s,c).scale(1/n))}return new js(t,-1,a)},findByName:function(t,e){var n=t;if(!Array.isArray(t)){var i=t;n=i.geometry&&i.geometry.animations||i.animations}for(var r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){for(var i={},r=/^([\w-]*?)([\d]+)$/,a=0,o=t.length;a<o;a++){var s=t[a],c=s.name.match(r);if(c&&c.length>1){var l=c[1],u=i[l];u||(i[l]=u=[]),u.push(s)}}var h=[];for(var d in i)h.push(js.CreateFromMorphTargetSequence(d,i[d],e,n));return h},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;for(var n=function(t,e,n,i,r){if(0!==n.length){var a=[],o=[];Os.flattenJSON(n,a,o,i),0!==a.length&&r.push(new t(e,a,o))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode,s=t.length||-1,c=t.hierarchy||[],l=0;l<c.length;l++){var u=c[l].keys;if(u&&0!==u.length)if(u[0].morphTargets){var h={},d=void 0;for(d=0;d<u.length;d++)if(u[d].morphTargets)for(var p=0;p<u[d].morphTargets.length;p++)h[u[d].morphTargets[p]]=-1;for(var f in h){for(var m=[],v=[],g=0;g!==u[d].morphTargets.length;++g){var y=u[d];m.push(y.time),v.push(y.morphTarget===f?1:0)}i.push(new Gs(".morphTargetInfluence["+f+"]",m,v))}s=h.length*(a||1)}else{var x=".bones["+e[l].name+"]";n(Ws,x+".position",u,"pos",i),n(ks,x+".quaternion",u,"rot",i),n(Ws,x+".scale",u,"scl",i)}}return 0===i.length?null:new js(r,s,i,o)}}),Object.assign(js.prototype,{resetDuration:function(){for(var t=0,e=0,n=this.tracks.length;e!==n;++e){var i=this.tracks[e];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this},trim:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){for(var t=!0,e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){for(var t=[],e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new js(this.name,this.duration,t,this.blendMode)},toJSON:function(){return js.toJSON(this)}});var Xs={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Ys(t,e,n){var i=this,r=!1,a=0,o=0,s=void 0,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(t){o++,!1===r&&void 0!==i.onStart&&i.onStart(t,a,o),r=!0},this.itemEnd=function(t){a++,void 0!==i.onProgress&&i.onProgress(t,a,o),a===o&&(r=!1,void 0!==i.onLoad&&i.onLoad())},this.itemError=function(t){void 0!==i.onError&&i.onError(t)},this.resolveURL=function(t){return s?s(t):t},this.setURLModifier=function(t){return s=t,this},this.addHandler=function(t,e){return c.push(t,e),this},this.removeHandler=function(t){var e=c.indexOf(t);return-1!==e&&c.splice(e,2),this},this.getHandler=function(t){for(var e=0,n=c.length;e<n;e+=2){var i=c[e],r=c[e+1];if(i.global&&(i.lastIndex=0),i.test(t))return r}return null}}var Zs=new Ys;function Js(t){this.manager=void 0!==t?t:Zs,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Js.prototype,{load:function(){},loadAsync:function(t,e){var n=this;return new Promise((function(i,r){n.load(t,i,e,r)}))},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});var Qs={};function Ks(t){Js.call(this,t)}function $s(t){Js.call(this,t)}function tc(t){Js.call(this,t)}function ec(t){Js.call(this,t)}function nc(t){Js.call(this,t)}function ic(t){Js.call(this,t)}function rc(t){Js.call(this,t)}function ac(){this.type="Curve",this.arcLengthDivisions=200}function oc(t,e,n,i,r,a,o,s){ac.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=a||2*Math.PI,this.aClockwise=o||!1,this.aRotation=s||0}function sc(t,e,n,i,r,a){oc.call(this,t,e,n,n,i,r,a),this.type="ArcCurve"}function cc(){var t=0,e=0,n=0,i=0;function r(r,a,o,s){t=r,e=o,n=-3*r+3*a-2*o-s,i=2*r-2*a+o+s}return{initCatmullRom:function(t,e,n,i,a){r(e,n,a*(n-t),a*(i-e))},initNonuniformCatmullRom:function(t,e,n,i,a,o,s){var c=(e-t)/a-(n-t)/(a+o)+(n-e)/o,l=(n-e)/o-(i-e)/(o+s)+(i-n)/s;r(e,n,c*=o,l*=o)},calc:function(r){var a=r*r;return t+e*r+n*a+i*(a*r)}}}Ks.prototype=Object.assign(Object.create(Js.prototype),{constructor:Ks,load:function(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var r=this,a=Xs.get(t);if(void 0!==a)return r.manager.itemStart(t),setTimeout((function(){e&&e(a),r.manager.itemEnd(t)}),0),a;if(void 0===Qs[t]){var o,s=t.match(/^data:(.*?)(;base64)?,(.*)$/);if(s){var c=s[1],l=!!s[2],u=s[3];u=decodeURIComponent(u),l&&(u=atob(u));try{var h,d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":for(var p=new Uint8Array(u.length),f=0;f<u.length;f++)p[f]=u.charCodeAt(f);h="blob"===d?new Blob([p.buffer],{type:c}):p.buffer;break;case"document":var m=new DOMParser;h=m.parseFromString(u,c);break;case"json":h=JSON.parse(u);break;default:h=u}setTimeout((function(){e&&e(h),r.manager.itemEnd(t)}),0)}catch(e){setTimeout((function(){i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t)}),0)}}else{for(var v in Qs[t]=[],Qs[t].push({onLoad:e,onProgress:n,onError:i}),(o=new XMLHttpRequest).open("GET",t,!0),o.addEventListener("load",(function(e){var n=this.response,i=Qs[t];if(delete Qs[t],200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Xs.add(t,n);for(var a=0,o=i.length;a<o;a++){var s=i[a];s.onLoad&&s.onLoad(n)}r.manager.itemEnd(t)}else{for(var c=0,l=i.length;c<l;c++){var u=i[c];u.onError&&u.onError(e)}r.manager.itemError(t),r.manager.itemEnd(t)}}),!1),o.addEventListener("progress",(function(e){for(var n=Qs[t],i=0,r=n.length;i<r;i++){var a=n[i];a.onProgress&&a.onProgress(e)}}),!1),o.addEventListener("error",(function(e){var n=Qs[t];delete Qs[t];for(var i=0,a=n.length;i<a;i++){var o=n[i];o.onError&&o.onError(e)}r.manager.itemError(t),r.manager.itemEnd(t)}),!1),o.addEventListener("abort",(function(e){var n=Qs[t];delete Qs[t];for(var i=0,a=n.length;i<a;i++){var o=n[i];o.onError&&o.onError(e)}r.manager.itemError(t),r.manager.itemEnd(t)}),!1),void 0!==this.responseType&&(o.responseType=this.responseType),void 0!==this.withCredentials&&(o.withCredentials=this.withCredentials),o.overrideMimeType&&o.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain"),this.requestHeader)o.setRequestHeader(v,this.requestHeader[v]);o.send(null)}return r.manager.itemStart(t),o}Qs[t].push({onLoad:e,onProgress:n,onError:i})},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}}),$s.prototype=Object.assign(Object.create(Js.prototype),{constructor:$s,load:function(t,e,n,i){var r=this,a=new Ks(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)},parse:function(t){for(var e=[],n=0;n<t.length;n++){var i=js.parse(t[n]);e.push(i)}return e}}),tc.prototype=Object.assign(Object.create(Js.prototype),{constructor:tc,load:function(t,e,n,i){var r=this,a=[],o=new yo,s=new Ks(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials);var c=0;function l(l){s.load(t[l],(function(t){var n=r.parse(t,!0);a[l]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},6===(c+=1)&&(1===n.mipmapCount&&(o.minFilter=g),o.image=a,o.format=n.format,o.needsUpdate=!0,e&&e(o))}),n,i)}if(Array.isArray(t))for(var u=0,h=t.length;u<h;++u)l(u);else s.load(t,(function(t){var n=r.parse(t,!0);if(n.isCubemap){for(var i=n.mipmaps.length/n.mipmapCount,s=0;s<i;s++){a[s]={mipmaps:[]};for(var c=0;c<n.mipmapCount;c++)a[s].mipmaps.push(n.mipmaps[s*n.mipmapCount+c]),a[s].format=n.format,a[s].width=n.width,a[s].height=n.height}o.image=a}else o.image.width=n.width,o.image.height=n.height,o.mipmaps=n.mipmaps;1===n.mipmapCount&&(o.minFilter=g),o.format=n.format,o.needsUpdate=!0,e&&e(o)}),n,i);return o}}),ec.prototype=Object.assign(Object.create(Js.prototype),{constructor:ec,load:function(t,e,n,i){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var r=this,a=Xs.get(t);if(void 0!==a)return r.manager.itemStart(t),setTimeout((function(){e&&e(a),r.manager.itemEnd(t)}),0),a;var o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function s(){o.removeEventListener("load",s,!1),o.removeEventListener("error",c,!1),Xs.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(e){o.removeEventListener("load",s,!1),o.removeEventListener("error",c,!1),i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",s,!1),o.addEventListener("error",c,!1),"data:"!==t.substr(0,5)&&void 0!==this.crossOrigin&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}),nc.prototype=Object.assign(Object.create(Js.prototype),{constructor:nc,load:function(t,e,n,i){var r=new $n,a=new ec(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);var o=0;function s(n){a.load(t[n],(function(t){r.images[n]=t,6===++o&&(r.needsUpdate=!0,e&&e(r))}),void 0,i)}for(var c=0;c<t.length;++c)s(c);return r}}),ic.prototype=Object.assign(Object.create(Js.prototype),{constructor:ic,load:function(t,e,n,i){var r=this,a=new ei,o=new Ks(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,(function(t){var n=r.parse(t);n&&(void 0!==n.image?a.image=n.image:void 0!==n.data&&(a.image.width=n.width,a.image.height=n.height,a.image.data=n.data),a.wrapS=void 0!==n.wrapS?n.wrapS:d,a.wrapT=void 0!==n.wrapT?n.wrapT:d,a.magFilter=void 0!==n.magFilter?n.magFilter:g,a.minFilter=void 0!==n.minFilter?n.minFilter:g,a.anisotropy=void 0!==n.anisotropy?n.anisotropy:1,void 0!==n.encoding&&(a.encoding=n.encoding),void 0!==n.flipY&&(a.flipY=n.flipY),void 0!==n.format&&(a.format=n.format),void 0!==n.type&&(a.type=n.type),void 0!==n.mipmaps&&(a.mipmaps=n.mipmaps,a.minFilter=x),1===n.mipmapCount&&(a.minFilter=g),a.needsUpdate=!0,e&&e(a,n))}),n,i),a}}),rc.prototype=Object.assign(Object.create(Js.prototype),{constructor:rc,load:function(t,e,n,i){var r=new wt,a=new ec(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,(function(n){r.image=n;var i=t.search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/);r.format=i?E:A,r.needsUpdate=!0,void 0!==e&&e(r)}),n,i),r}}),Object.assign(ac.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){var n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t){void 0===t&&(t=5);for(var e=[],n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t){void 0===t&&(t=5);for(var e=[],n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){var t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(void 0===t&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var e,n=[],i=this.getPoint(0),r=0;n.push(0);for(var a=1;a<=t;a++)r+=(e=this.getPoint(a/t)).distanceTo(i),n.push(r),i=e;return this.cacheArcLengths=n,n},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){var n,i=this.getLengths(),r=0,a=i.length;n=e||t*i[a-1];for(var o,s=0,c=a-1;s<=c;)if((o=i[r=Math.floor(s+(c-s)/2)]-n)<0)s=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(i[r=c]===n)return r/(a-1);var l=i[r];return(r+(n-l)/(i[r+1]-l))/(a-1)},getTangent:function(t,e){var n=1e-4,i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);var a=this.getPoint(i),o=this.getPoint(r),s=e||(a.isVector2?new yt:new Lt);return s.copy(o).sub(a).normalize(),s},getTangentAt:function(t,e){var n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){for(var n=new Lt,i=[],r=[],a=[],o=new Lt,s=new ne,c=0;c<=t;c++){var l=c/t;i[c]=this.getTangentAt(l,new Lt),i[c].normalize()}r[0]=new Lt,a[0]=new Lt;var u=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),p<=u&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(var f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();var m=Math.acos(gt.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(s.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(!0===e){var v=Math.acos(gt.clamp(r[0].dot(r[t]),-1,1));v/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(v=-v);for(var g=1;g<=t;g++)r[g].applyMatrix4(s.makeRotationAxis(i[g],v*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){var t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}),oc.prototype=Object.create(ac.prototype),oc.prototype.constructor=oc,oc.prototype.isEllipseCurve=!0,oc.prototype.getPoint=function(t,e){for(var n=e||new yt,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=a?0:i),!0!==this.aClockwise||a||(r===i?r=-i:r-=i);var o=this.aStartAngle+t*r,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(0!==this.aRotation){var l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=s-this.aX,d=c-this.aY;s=h*l-d*u+this.aX,c=h*u+d*l+this.aY}return n.set(s,c)},oc.prototype.copy=function(t){return ac.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},oc.prototype.toJSON=function(){var t=ac.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t},oc.prototype.fromJSON=function(t){return ac.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},sc.prototype=Object.create(oc.prototype),sc.prototype.constructor=sc,sc.prototype.isArcCurve=!0;var lc=new Lt,uc=new cc,hc=new cc,dc=new cc;function pc(t,e,n,i){void 0===t&&(t=[]),void 0===e&&(e=!1),void 0===n&&(n="centripetal"),void 0===i&&(i=.5),ac.call(this),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}function fc(t,e,n,i,r){var a=.5*(i-e),o=.5*(r-n),s=t*t;return(2*n-2*i+a+o)*(t*s)+(-3*n+3*i-2*a-o)*s+a*t+n}function mc(t,e,n,i){return function(t,e){var n=1-t;return n*n*e}(t,e)+function(t,e){return 2*(1-t)*t*e}(t,n)+function(t,e){return t*t*e}(t,i)}function vc(t,e,n,i,r){return function(t,e){var n=1-t;return n*n*n*e}(t,e)+function(t,e){var n=1-t;return 3*n*n*t*e}(t,n)+function(t,e){return 3*(1-t)*t*t*e}(t,i)+function(t,e){return t*t*t*e}(t,r)}function gc(t,e,n,i){void 0===t&&(t=new yt),void 0===e&&(e=new yt),void 0===n&&(n=new yt),void 0===i&&(i=new yt),ac.call(this),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}function yc(t,e,n,i){void 0===t&&(t=new Lt),void 0===e&&(e=new Lt),void 0===n&&(n=new Lt),void 0===i&&(i=new Lt),ac.call(this),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}function xc(t,e){void 0===t&&(t=new yt),void 0===e&&(e=new yt),ac.call(this),this.type="LineCurve",this.v1=t,this.v2=e}function _c(t,e){void 0===t&&(t=new Lt),void 0===e&&(e=new Lt),ac.call(this),this.type="LineCurve3",this.v1=t,this.v2=e}function bc(t,e,n){void 0===t&&(t=new yt),void 0===e&&(e=new yt),void 0===n&&(n=new yt),ac.call(this),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}function wc(t,e,n){void 0===t&&(t=new Lt),void 0===e&&(e=new Lt),void 0===n&&(n=new Lt),ac.call(this),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}function Mc(t){void 0===t&&(t=[]),ac.call(this),this.type="SplineCurve",this.points=t}pc.prototype=Object.create(ac.prototype),pc.prototype.constructor=pc,pc.prototype.isCatmullRomCurve3=!0,pc.prototype.getPoint=function(t,e){void 0===e&&(e=new Lt);var n,i,r=e,a=this.points,o=a.length,s=(o-(this.closed?0:1))*t,c=Math.floor(s),l=s-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:0===l&&c===o-1&&(c=o-2,l=1),this.closed||c>0?n=a[(c-1)%o]:(lc.subVectors(a[0],a[1]).add(a[0]),n=lc);var u=a[c%o],h=a[(c+1)%o];if(this.closed||c+2<o?i=a[(c+2)%o]:(lc.subVectors(a[o-1],a[o-2]).add(a[o-1]),i=lc),"centripetal"===this.curveType||"chordal"===this.curveType){var d="chordal"===this.curveType?.5:.25,p=Math.pow(n.distanceToSquared(u),d),f=Math.pow(u.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(i),d);f<1e-4&&(f=1),p<1e-4&&(p=f),m<1e-4&&(m=f),uc.initNonuniformCatmullRom(n.x,u.x,h.x,i.x,p,f,m),hc.initNonuniformCatmullRom(n.y,u.y,h.y,i.y,p,f,m),dc.initNonuniformCatmullRom(n.z,u.z,h.z,i.z,p,f,m)}else"catmullrom"===this.curveType&&(uc.initCatmullRom(n.x,u.x,h.x,i.x,this.tension),hc.initCatmullRom(n.y,u.y,h.y,i.y,this.tension),dc.initCatmullRom(n.z,u.z,h.z,i.z,this.tension));return r.set(uc.calc(l),hc.calc(l),dc.calc(l)),r},pc.prototype.copy=function(t){ac.prototype.copy.call(this,t),this.points=[];for(var e=0,n=t.points.length;e<n;e++){var i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},pc.prototype.toJSON=function(){var t=ac.prototype.toJSON.call(this);t.points=[];for(var e=0,n=this.points.length;e<n;e++){var i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t},pc.prototype.fromJSON=function(t){ac.prototype.fromJSON.call(this,t),this.points=[];for(var e=0,n=t.points.length;e<n;e++){var i=t.points[e];this.points.push((new Lt).fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},gc.prototype=Object.create(ac.prototype),gc.prototype.constructor=gc,gc.prototype.isCubicBezierCurve=!0,gc.prototype.getPoint=function(t,e){void 0===e&&(e=new yt);var n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vc(t,i.x,r.x,a.x,o.x),vc(t,i.y,r.y,a.y,o.y)),n},gc.prototype.copy=function(t){return ac.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},gc.prototype.toJSON=function(){var t=ac.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},gc.prototype.fromJSON=function(t){return ac.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},yc.prototype=Object.create(ac.prototype),yc.prototype.constructor=yc,yc.prototype.isCubicBezierCurve3=!0,yc.prototype.getPoint=function(t,e){void 0===e&&(e=new Lt);var n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vc(t,i.x,r.x,a.x,o.x),vc(t,i.y,r.y,a.y,o.y),vc(t,i.z,r.z,a.z,o.z)),n},yc.prototype.copy=function(t){return ac.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},yc.prototype.toJSON=function(){var t=ac.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},yc.prototype.fromJSON=function(t){return ac.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},xc.prototype=Object.create(ac.prototype),xc.prototype.constructor=xc,xc.prototype.isLineCurve=!0,xc.prototype.getPoint=function(t,e){void 0===e&&(e=new yt);var n=e;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},xc.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},xc.prototype.getTangent=function(t,e){var n=e||new yt;return n.copy(this.v2).sub(this.v1).normalize(),n},xc.prototype.copy=function(t){return ac.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},xc.prototype.toJSON=function(){var t=ac.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},xc.prototype.fromJSON=function(t){return ac.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},_c.prototype=Object.create(ac.prototype),_c.prototype.constructor=_c,_c.prototype.isLineCurve3=!0,_c.prototype.getPoint=function(t,e){void 0===e&&(e=new Lt);var n=e;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},_c.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},_c.prototype.copy=function(t){return ac.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},_c.prototype.toJSON=function(){var t=ac.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},_c.prototype.fromJSON=function(t){return ac.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},bc.prototype=Object.create(ac.prototype),bc.prototype.constructor=bc,bc.prototype.isQuadraticBezierCurve=!0,bc.prototype.getPoint=function(t,e){void 0===e&&(e=new yt);var n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(mc(t,i.x,r.x,a.x),mc(t,i.y,r.y,a.y)),n},bc.prototype.copy=function(t){return ac.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},bc.prototype.toJSON=function(){var t=ac.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},bc.prototype.fromJSON=function(t){return ac.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},wc.prototype=Object.create(ac.prototype),wc.prototype.constructor=wc,wc.prototype.isQuadraticBezierCurve3=!0,wc.prototype.getPoint=function(t,e){void 0===e&&(e=new Lt);var n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(mc(t,i.x,r.x,a.x),mc(t,i.y,r.y,a.y),mc(t,i.z,r.z,a.z)),n},wc.prototype.copy=function(t){return ac.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},wc.prototype.toJSON=function(){var t=ac.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},wc.prototype.fromJSON=function(t){return ac.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},Mc.prototype=Object.create(ac.prototype),Mc.prototype.constructor=Mc,Mc.prototype.isSplineCurve=!0,Mc.prototype.getPoint=function(t,e){void 0===e&&(e=new yt);var n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,s=i[0===a?a:a-1],c=i[a],l=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(fc(o,s.x,c.x,l.x,u.x),fc(o,s.y,c.y,l.y,u.y)),n},Mc.prototype.copy=function(t){ac.prototype.copy.call(this,t),this.points=[];for(var e=0,n=t.points.length;e<n;e++){var i=t.points[e];this.points.push(i.clone())}return this},Mc.prototype.toJSON=function(){var t=ac.prototype.toJSON.call(this);t.points=[];for(var e=0,n=this.points.length;e<n;e++){var i=this.points[e];t.points.push(i.toArray())}return t},Mc.prototype.fromJSON=function(t){ac.prototype.fromJSON.call(this,t),this.points=[];for(var e=0,n=t.points.length;e<n;e++){var i=t.points[e];this.points.push((new yt).fromArray(i))}return this};var Sc=Object.freeze({__proto__:null,ArcCurve:sc,CatmullRomCurve3:pc,CubicBezierCurve:gc,CubicBezierCurve3:yc,EllipseCurve:oc,LineCurve:xc,LineCurve3:_c,QuadraticBezierCurve:bc,QuadraticBezierCurve3:wc,SplineCurve:Mc});function Tc(){ac.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}function Ec(t){Tc.call(this),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}function Ac(t){Ec.call(this,t),this.uuid=gt.generateUUID(),this.type="Shape",this.holes=[]}function Lc(t,e){void 0===e&&(e=1),Ae.call(this),this.type="Light",this.color=new Ze(t),this.intensity=e}function Rc(t,e,n){Lc.call(this,t,n),this.type="HemisphereLight",this.position.copy(Ae.DefaultUp),this.updateMatrix(),this.groundColor=new Ze(e)}function Cc(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ri,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}function Pc(){Cc.call(this,new Jn(50,1,.5,500)),this.focus=1}function Oc(t,e,n,i,r,a){Lc.call(this,t,e),this.type="SpotLight",this.position.copy(Ae.DefaultUp),this.updateMatrix(),this.target=new Ae,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(t){this.intensity=t/Math.PI}}),this.distance=void 0!==n?n:0,this.angle=void 0!==i?i:Math.PI/3,this.penumbra=void 0!==r?r:0,this.decay=void 0!==a?a:1,this.shadow=new Pc}function Ic(){Cc.call(this,new Jn(90,1,.5,500)),this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new Lt(1,0,0),new Lt(-1,0,0),new Lt(0,0,1),new Lt(0,0,-1),new Lt(0,1,0),new Lt(0,-1,0)],this._cubeUps=[new Lt(0,1,0),new Lt(0,1,0),new Lt(0,1,0),new Lt(0,1,0),new Lt(0,0,1),new Lt(0,0,-1)]}function Dc(t,e,n,i){Lc.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(t){this.intensity=t/(4*Math.PI)}}),this.distance=void 0!==n?n:0,this.decay=void 0!==i?i:1,this.shadow=new Ic}function Nc(t,e,n,i,r,a){void 0===t&&(t=-1),void 0===e&&(e=1),void 0===n&&(n=1),void 0===i&&(i=-1),void 0===r&&(r=.1),void 0===a&&(a=2e3),Zn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}function Bc(){Cc.call(this,new Nc(-5,5,5,-5,.5,500))}function zc(t,e){Lc.call(this,t,e),this.type="DirectionalLight",this.position.copy(Ae.DefaultUp),this.updateMatrix(),this.target=new Ae,this.shadow=new Bc}function Fc(t,e){Lc.call(this,t,e),this.type="AmbientLight"}function Hc(t,e,n,i){Lc.call(this,t,e),this.type="RectAreaLight",this.width=void 0!==n?n:10,this.height=void 0!==i?i:10}Tc.prototype=Object.assign(Object.create(ac.prototype),{constructor:Tc,add:function(t){this.curves.push(t)},closePath:function(){var t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new xc(e,t))},getPoint:function(t){for(var e=t*this.getLength(),n=this.getCurveLengths(),i=0;i<n.length;){if(n[i]>=e){var r=n[i]-e,a=this.curves[i],o=a.getLength(),s=0===o?0:1-r/o;return a.getPointAt(s)}i++}return null},getLength:function(){var t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var t=[],e=0,n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){void 0===t&&(t=40);for(var e=[],n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){void 0===t&&(t=12);for(var e,n=[],i=0,r=this.curves;i<r.length;i++)for(var a=r[i],o=a&&a.isEllipseCurve?2*t:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?t*a.points.length:t,s=a.getPoints(o),c=0;c<s.length;c++){var l=s[c];e&&e.equals(l)||(n.push(l),e=l)}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n},copy:function(t){ac.prototype.copy.call(this,t),this.curves=[];for(var e=0,n=t.curves.length;e<n;e++){var i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){var t=ac.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(var e=0,n=this.curves.length;e<n;e++){var i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){ac.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(var e=0,n=t.curves.length;e<n;e++){var i=t.curves[e];this.curves.push((new Sc[i.type]).fromJSON(i))}return this}}),Ec.prototype=Object.assign(Object.create(Tc.prototype),{constructor:Ec,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(var e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){var n=new xc(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){var r=new bc(this.currentPoint.clone(),new yt(t,e),new yt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,a){var o=new gc(this.currentPoint.clone(),new yt(t,e),new yt(n,i),new yt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this},splineThru:function(t){var e=new Mc([this.currentPoint.clone()].concat(t));return this.curves.push(e),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,a){var o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(t+o,e+s,n,i,r,a),this},absarc:function(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this},ellipse:function(t,e,n,i,r,a,o,s){var c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,a,o,s),this},absellipse:function(t,e,n,i,r,a,o,s){var c=new oc(t,e,n,i,r,a,o,s);if(this.curves.length>0){var l=c.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(c);var u=c.getPoint(1);return this.currentPoint.copy(u),this},copy:function(t){return Tc.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){var t=Tc.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return Tc.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}}),Ac.prototype=Object.assign(Object.create(Ec.prototype),{constructor:Ac,getPointsHoles:function(t){for(var e=[],n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){Ec.prototype.copy.call(this,t),this.holes=[];for(var e=0,n=t.holes.length;e<n;e++){var i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){var t=Ec.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(var e=0,n=this.holes.length;e<n;e++){var i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){Ec.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(var e=0,n=t.holes.length;e<n;e++){var i=t.holes[e];this.holes.push((new Ec).fromJSON(i))}return this}}),Lc.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Lc,isLight:!0,copy:function(t){return Ae.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){var e=Ae.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}),Rc.prototype=Object.assign(Object.create(Lc.prototype),{constructor:Rc,isHemisphereLight:!0,copy:function(t){return Lc.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}),Object.assign(Cc.prototype,{_projScreenMatrix:new ne,_lightPositionWorld:new Lt,_lookTarget:new Lt,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){var e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,a=this._lightPositionWorld;a.setFromMatrixPosition(t.matrixWorld),e.position.copy(a),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var t={};return 0!==this.bias&&(t.bias=this.bias),0!==this.normalBias&&(t.normalBias=this.normalBias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}),Pc.prototype=Object.assign(Object.create(Cc.prototype),{constructor:Pc,isSpotLightShadow:!0,updateMatrices:function(t){var e=this.camera,n=2*gt.RAD2DEG*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),Cc.prototype.updateMatrices.call(this,t)}}),Oc.prototype=Object.assign(Object.create(Lc.prototype),{constructor:Oc,isSpotLight:!0,copy:function(t){return Lc.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),Ic.prototype=Object.assign(Object.create(Cc.prototype),{constructor:Ic,isPointLightShadow:!0,updateMatrices:function(t,e){void 0===e&&(e=0);var n=this.camera,i=this.matrix,r=this._lightPositionWorld,a=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),a.copy(n.position),a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(a),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}}),Dc.prototype=Object.assign(Object.create(Lc.prototype),{constructor:Dc,isPointLight:!0,copy:function(t){return Lc.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}),Nc.prototype=Object.assign(Object.create(Zn.prototype),{constructor:Nc,isOrthographicCamera:!0,copy:function(t,e){return Zn.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,a){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,s=i-e;if(null!==this.view&&this.view.enabled){var c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a=(r+=c*this.view.offsetX)+c*this.view.width,s=(o-=l*this.view.offsetY)-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,s,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){var e=Ae.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}),Bc.prototype=Object.assign(Object.create(Cc.prototype),{constructor:Bc,isDirectionalLightShadow:!0,updateMatrices:function(t){Cc.prototype.updateMatrices.call(this,t)}}),zc.prototype=Object.assign(Object.create(Lc.prototype),{constructor:zc,isDirectionalLight:!0,copy:function(t){return Lc.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),Fc.prototype=Object.assign(Object.create(Lc.prototype),{constructor:Fc,isAmbientLight:!0}),Hc.prototype=Object.assign(Object.create(Lc.prototype),{constructor:Hc,isRectAreaLight:!0,copy:function(t){return Lc.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){var e=Lc.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});var Gc=function(){function t(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(var t=0;t<9;t++)this.coefficients.push(new Lt)}var e=t.prototype;return e.set=function(t){for(var e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this},e.zero=function(){for(var t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this},e.getAt=function(t,e){var n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],n*i*1.092548),e.addScaledVector(a[5],i*r*1.092548),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],n*r*1.092548),e.addScaledVector(a[8],.546274*(n*n-i*i)),e},e.getIrradianceAt=function(t,e){var n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],1.023328*i),e.addScaledVector(a[2],1.023328*r),e.addScaledVector(a[3],1.023328*n),e.addScaledVector(a[4],.858086*n*i),e.addScaledVector(a[5],.858086*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],.858086*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e},e.add=function(t){for(var e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this},e.addScaledSH=function(t,e){for(var n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this},e.scale=function(t){for(var e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this},e.lerp=function(t,e){for(var n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this},e.equals=function(t){for(var e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0},e.copy=function(t){return this.set(t.coefficients)},e.clone=function(){return(new this.constructor).copy(this)},e.fromArray=function(t,e){void 0===e&&(e=0);for(var n=this.coefficients,i=0;i<9;i++)n[i].fromArray(t,e+3*i);return this},e.toArray=function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);for(var n=this.coefficients,i=0;i<9;i++)n[i].toArray(t,e+3*i);return t},t.getBasisAt=function(t,e){var n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)},t}();function Uc(t,e){Lc.call(this,void 0,e),this.type="LightProbe",this.sh=void 0!==t?t:new Gc}function kc(t){Js.call(this,t),this.textures={}}Uc.prototype=Object.assign(Object.create(Lc.prototype),{constructor:Uc,isLightProbe:!0,copy:function(t){return Lc.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){var e=Lc.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}}),kc.prototype=Object.assign(Object.create(Js.prototype),{constructor:kc,load:function(t,e,n,i){var r=this,a=new Ks(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)},parse:function(t){var e=this.textures;function n(t){return void 0===e[t]&&console.warn("THREE.MaterialLoader: Undefined texture",t),e[t]}var i=new Ps[t.type];if(void 0!==t.uuid&&(i.uuid=t.uuid),void 0!==t.name&&(i.name=t.name),void 0!==t.color&&void 0!==i.color&&i.color.setHex(t.color),void 0!==t.roughness&&(i.roughness=t.roughness),void 0!==t.metalness&&(i.metalness=t.metalness),void 0!==t.sheen&&(i.sheen=(new Ze).setHex(t.sheen)),void 0!==t.emissive&&void 0!==i.emissive&&i.emissive.setHex(t.emissive),void 0!==t.specular&&void 0!==i.specular&&i.specular.setHex(t.specular),void 0!==t.shininess&&(i.shininess=t.shininess),void 0!==t.clearcoat&&(i.clearcoat=t.clearcoat),void 0!==t.clearcoatRoughness&&(i.clearcoatRoughness=t.clearcoatRoughness),void 0!==t.fog&&(i.fog=t.fog),void 0!==t.flatShading&&(i.flatShading=t.flatShading),void 0!==t.blending&&(i.blending=t.blending),void 0!==t.combine&&(i.combine=t.combine),void 0!==t.side&&(i.side=t.side),void 0!==t.opacity&&(i.opacity=t.opacity),void 0!==t.transparent&&(i.transparent=t.transparent),void 0!==t.alphaTest&&(i.alphaTest=t.alphaTest),void 0!==t.depthTest&&(i.depthTest=t.depthTest),void 0!==t.depthWrite&&(i.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(i.colorWrite=t.colorWrite),void 0!==t.stencilWrite&&(i.stencilWrite=t.stencilWrite),void 0!==t.stencilWriteMask&&(i.stencilWriteMask=t.stencilWriteMask),void 0!==t.stencilFunc&&(i.stencilFunc=t.stencilFunc),void 0!==t.stencilRef&&(i.stencilRef=t.stencilRef),void 0!==t.stencilFuncMask&&(i.stencilFuncMask=t.stencilFuncMask),void 0!==t.stencilFail&&(i.stencilFail=t.stencilFail),void 0!==t.stencilZFail&&(i.stencilZFail=t.stencilZFail),void 0!==t.stencilZPass&&(i.stencilZPass=t.stencilZPass),void 0!==t.wireframe&&(i.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(i.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(i.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(i.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.rotation&&(i.rotation=t.rotation),1!==t.linewidth&&(i.linewidth=t.linewidth),void 0!==t.dashSize&&(i.dashSize=t.dashSize),void 0!==t.gapSize&&(i.gapSize=t.gapSize),void 0!==t.scale&&(i.scale=t.scale),void 0!==t.polygonOffset&&(i.polygonOffset=t.polygonOffset),void 0!==t.polygonOffsetFactor&&(i.polygonOffsetFactor=t.polygonOffsetFactor),void 0!==t.polygonOffsetUnits&&(i.polygonOffsetUnits=t.polygonOffsetUnits),void 0!==t.skinning&&(i.skinning=t.skinning),void 0!==t.morphTargets&&(i.morphTargets=t.morphTargets),void 0!==t.morphNormals&&(i.morphNormals=t.morphNormals),void 0!==t.dithering&&(i.dithering=t.dithering),void 0!==t.vertexTangents&&(i.vertexTangents=t.vertexTangents),void 0!==t.visible&&(i.visible=t.visible),void 0!==t.toneMapped&&(i.toneMapped=t.toneMapped),void 0!==t.userData&&(i.userData=t.userData),void 0!==t.vertexColors&&("number"==typeof t.vertexColors?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),void 0!==t.uniforms)for(var r in t.uniforms){var a=t.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=(new Ze).setHex(a.value);break;case"v2":i.uniforms[r].value=(new yt).fromArray(a.value);break;case"v3":i.uniforms[r].value=(new Lt).fromArray(a.value);break;case"v4":i.uniforms[r].value=(new St).fromArray(a.value);break;case"m3":i.uniforms[r].value=(new xt).fromArray(a.value);break;case"m4":i.uniforms[r].value=(new ne).fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(void 0!==t.defines&&(i.defines=t.defines),void 0!==t.vertexShader&&(i.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(i.fragmentShader=t.fragmentShader),void 0!==t.extensions)for(var o in t.extensions)i.extensions[o]=t.extensions[o];if(void 0!==t.shading&&(i.flatShading=1===t.shading),void 0!==t.size&&(i.size=t.size),void 0!==t.sizeAttenuation&&(i.sizeAttenuation=t.sizeAttenuation),void 0!==t.map&&(i.map=n(t.map)),void 0!==t.matcap&&(i.matcap=n(t.matcap)),void 0!==t.alphaMap&&(i.alphaMap=n(t.alphaMap)),void 0!==t.bumpMap&&(i.bumpMap=n(t.bumpMap)),void 0!==t.bumpScale&&(i.bumpScale=t.bumpScale),void 0!==t.normalMap&&(i.normalMap=n(t.normalMap)),void 0!==t.normalMapType&&(i.normalMapType=t.normalMapType),void 0!==t.normalScale){var s=t.normalScale;!1===Array.isArray(s)&&(s=[s,s]),i.normalScale=(new yt).fromArray(s)}return void 0!==t.displacementMap&&(i.displacementMap=n(t.displacementMap)),void 0!==t.displacementScale&&(i.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(i.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(i.roughnessMap=n(t.roughnessMap)),void 0!==t.metalnessMap&&(i.metalnessMap=n(t.metalnessMap)),void 0!==t.emissiveMap&&(i.emissiveMap=n(t.emissiveMap)),void 0!==t.emissiveIntensity&&(i.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(i.specularMap=n(t.specularMap)),void 0!==t.envMap&&(i.envMap=n(t.envMap)),void 0!==t.envMapIntensity&&(i.envMapIntensity=t.envMapIntensity),void 0!==t.reflectivity&&(i.reflectivity=t.reflectivity),void 0!==t.refractionRatio&&(i.refractionRatio=t.refractionRatio),void 0!==t.lightMap&&(i.lightMap=n(t.lightMap)),void 0!==t.lightMapIntensity&&(i.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(i.aoMap=n(t.aoMap)),void 0!==t.aoMapIntensity&&(i.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(i.gradientMap=n(t.gradientMap)),void 0!==t.clearcoatMap&&(i.clearcoatMap=n(t.clearcoatMap)),void 0!==t.clearcoatRoughnessMap&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),void 0!==t.clearcoatNormalMap&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),void 0!==t.clearcoatNormalScale&&(i.clearcoatNormalScale=(new yt).fromArray(t.clearcoatNormalScale)),void 0!==t.transmission&&(i.transmission=t.transmission),void 0!==t.transmissionMap&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});var Vc={decodeText:function(t){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t);for(var e="",n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(t){return e}},extractUrlBase:function(t){var e=t.lastIndexOf("/");return-1===e?"./":t.substr(0,e+1)}};function Wc(){Sn.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}function jc(t,e,n,i){"number"==typeof n&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),nn.call(this,t,e,n),this.meshPerAttribute=i||1}function qc(t){Js.call(this,t)}Wc.prototype=Object.assign(Object.create(Sn.prototype),{constructor:Wc,isInstancedBufferGeometry:!0,copy:function(t){return Sn.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var t=Sn.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}),jc.prototype=Object.assign(Object.create(nn.prototype),{constructor:jc,isInstancedBufferAttribute:!0,copy:function(t){return nn.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){var t=nn.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}),qc.prototype=Object.assign(Object.create(Js.prototype),{constructor:qc,load:function(t,e,n,i){var r=this,a=new Ks(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)},parse:function(t){var e={},n={};function i(t,i){if(void 0!==e[i])return e[i];var r=t.interleavedBuffers[i],a=function(t,e){if(void 0!==n[e])return n[e];var i=t.arrayBuffers[e],r=new Uint32Array(i).buffer;return n[e]=r,r}(t,r.buffer),o=new ma(vn(r.type,a),r.stride);return o.uuid=r.uuid,e[i]=o,o}var r=t.isInstancedBufferGeometry?new Wc:new Sn,a=t.data.index;if(void 0!==a){var o=vn(a.type,a.array);r.setIndex(new nn(o,1))}var s=t.data.attributes;for(var c in s){var l=s[c],u=void 0;if(l.isInterleavedBufferAttribute){u=new ya(i(t.data,l.data),l.itemSize,l.offset,l.normalized)}else{var h=vn(l.type,l.array);u=new(l.isInstancedBufferAttribute?jc:nn)(h,l.itemSize,l.normalized)}void 0!==l.name&&(u.name=l.name),r.setAttribute(c,u)}var d=t.data.morphAttributes;if(d)for(var p in d){for(var f=d[p],m=[],v=0,g=f.length;v<g;v++){var y=f[v],x=void 0;if(y.isInterleavedBufferAttribute)x=new ya(i(t.data,y.data),y.itemSize,y.offset,y.normalized);else x=new nn(vn(y.type,y.array),y.itemSize,y.normalized);void 0!==y.name&&(x.name=y.name),m.push(x)}r.morphAttributes[p]=m}t.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);var _=t.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!==_)for(var b=0,w=_.length;b!==w;++b){var M=_[b];r.addGroup(M.start,M.count,M.materialIndex)}var S=t.data.boundingSphere;if(void 0!==S){var T=new Lt;void 0!==S.center&&T.fromArray(S.center),r.boundingSphere=new Xt(T,S.radius)}return t.name&&(r.name=t.name),t.userData&&(r.userData=t.userData),r}});var Xc=function(t){function e(e){return t.call(this,e)||this}ct(e,t);var n=e.prototype;return n.load=function(t,e,n,i){var r=this,a=""===this.path?Vc.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;var o=new Ks(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,(function(n){var a=null;try{a=JSON.parse(n)}catch(e){return void 0!==i&&i(e),void console.error("THREE:ObjectLoader: Can't parse "+t+".",e.message)}var o=a.metadata;void 0!==o&&void 0!==o.type&&"geometry"!==o.type.toLowerCase()?r.parse(a,e):console.error("THREE.ObjectLoader: Can't load "+t)}),n,i)},n.parse=function(t,e){var n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,(function(){void 0!==e&&e(c)})),o=this.parseTextures(t.textures,a),s=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,s,n),l=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,l),void 0!==e){var u=!1;for(var h in a)if(a[h]instanceof HTMLImageElement){u=!0;break}!1===u&&e(c)}return c},n.parseShapes=function(t){var e={};if(void 0!==t)for(var n=0,i=t.length;n<i;n++){var r=(new Ac).fromJSON(t[n]);e[r.uuid]=r}return e},n.parseSkeletons=function(t,e){var n={},i={};if(e.traverse((function(t){t.isBone&&(i[t.uuid]=t)})),void 0!==t)for(var r=0,a=t.length;r<a;r++){var o=(new qa).fromJSON(t[r],i);n[o.uuid]=o}return n},n.parseGeometries=function(t,e){var n,i={};if(void 0!==t)for(var r=new qc,a=0,o=t.length;a<o;a++){var s=void 0,c=t[a];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":s=new _s[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":s=new _s[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":s=new _s[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":s=new _s[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":s=new _s[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":s=new _s[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":s=new _s[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":s=new _s[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":s=new _s[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":s=new _s[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":s=new _s[c.type]((new Sc[c.path.type]).fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":s=new _s[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":s=new _s[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":n=[];for(var l=0,u=c.shapes.length;l<u;l++){var h=e[c.shapes[l]];n.push(h)}s=new _s[c.type](n,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":n=[];for(var d=0,p=c.shapes.length;d<p;d++){var f=e[c.shapes[d]];n.push(f)}var m=c.options.extrudePath;void 0!==m&&(c.options.extrudePath=(new Sc[m.type]).fromJSON(m)),s=new _s[c.type](n,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":s=r.parse(c);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}s.uuid=c.uuid,void 0!==c.name&&(s.name=c.name),!0===s.isBufferGeometry&&void 0!==c.userData&&(s.userData=c.userData),i[c.uuid]=s}return i},n.parseMaterials=function(t,e){var n={},i={};if(void 0!==t){var r=new kc;r.setTextures(e);for(var a=0,o=t.length;a<o;a++){var s=t[a];if("MultiMaterial"===s.type){for(var c=[],l=0;l<s.materials.length;l++){var u=s.materials[l];void 0===n[u.uuid]&&(n[u.uuid]=r.parse(u)),c.push(n[u.uuid])}i[s.uuid]=c}else void 0===n[s.uuid]&&(n[s.uuid]=r.parse(s)),i[s.uuid]=n[s.uuid]}}return i},n.parseAnimations=function(t){var e={};if(void 0!==t)for(var n=0;n<t.length;n++){var i=t[n],r=js.parse(i);e[r.uuid]=r}return e},n.parseImages=function(t,e){var n,i=this,r={};function a(t){if("string"==typeof t){var e=t;return function(t){return i.manager.itemStart(t),n.load(t,(function(){i.manager.itemEnd(t)}),void 0,(function(){i.manager.itemError(t),i.manager.itemEnd(t)}))}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e)?e:i.resourcePath+e)}return t.data?{data:vn(t.type,t.data),width:t.width,height:t.height}:null}if(void 0!==t&&t.length>0){var o=new Ys(e);(n=new ec(o)).setCrossOrigin(this.crossOrigin);for(var s=0,c=t.length;s<c;s++){var l=t[s],u=l.url;if(Array.isArray(u)){r[l.uuid]=[];for(var h=0,d=u.length;h<d;h++){var p=a(u[h]);null!==p&&(p instanceof HTMLImageElement?r[l.uuid].push(p):r[l.uuid].push(new ei(p.data,p.width,p.height)))}}else{var f=a(l.url);null!==f&&(r[l.uuid]=f)}}}return r},n.parseTextures=function(t,e){function n(t,e){return"number"==typeof t?t:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",t),e[t])}var i={};if(void 0!==t)for(var r=0,a=t.length;r<a;r++){var o=t[r];void 0===o.image&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),void 0===e[o.image]&&console.warn("THREE.ObjectLoader: Undefined image",o.image);var s=void 0,c=e[o.image];Array.isArray(c)?(s=new $n(c),6===c.length&&(s.needsUpdate=!0)):(s=c&&c.data?new ei(c.data,c.width,c.height):new wt(c),c&&(s.needsUpdate=!0)),s.uuid=o.uuid,void 0!==o.name&&(s.name=o.name),void 0!==o.mapping&&(s.mapping=n(o.mapping,Yc)),void 0!==o.offset&&s.offset.fromArray(o.offset),void 0!==o.repeat&&s.repeat.fromArray(o.repeat),void 0!==o.center&&s.center.fromArray(o.center),void 0!==o.rotation&&(s.rotation=o.rotation),void 0!==o.wrap&&(s.wrapS=n(o.wrap[0],Zc),s.wrapT=n(o.wrap[1],Zc)),void 0!==o.format&&(s.format=o.format),void 0!==o.type&&(s.type=o.type),void 0!==o.encoding&&(s.encoding=o.encoding),void 0!==o.minFilter&&(s.minFilter=n(o.minFilter,Jc)),void 0!==o.magFilter&&(s.magFilter=n(o.magFilter,Jc)),void 0!==o.anisotropy&&(s.anisotropy=o.anisotropy),void 0!==o.flipY&&(s.flipY=o.flipY),void 0!==o.premultiplyAlpha&&(s.premultiplyAlpha=o.premultiplyAlpha),void 0!==o.unpackAlignment&&(s.unpackAlignment=o.unpackAlignment),i[o.uuid]=s}return i},n.parseObject=function(t,e,n,i){var r,a,o;function s(t){return void 0===e[t]&&console.warn("THREE.ObjectLoader: Undefined geometry",t),e[t]}function c(t){if(void 0!==t){if(Array.isArray(t)){for(var e=[],i=0,r=t.length;i<r;i++){var a=t[i];void 0===n[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),e.push(n[a])}return e}return void 0===n[t]&&console.warn("THREE.ObjectLoader: Undefined material",t),n[t]}}switch(t.type){case"Scene":r=new fa,void 0!==t.background&&Number.isInteger(t.background)&&(r.background=new Ze(t.background)),void 0!==t.fog&&("Fog"===t.fog.type?r.fog=new pa(t.fog.color,t.fog.near,t.fog.far):"FogExp2"===t.fog.type&&(r.fog=new da(t.fog.color,t.fog.density)));break;case"PerspectiveCamera":r=new Jn(t.fov,t.aspect,t.near,t.far),void 0!==t.focus&&(r.focus=t.focus),void 0!==t.zoom&&(r.zoom=t.zoom),void 0!==t.filmGauge&&(r.filmGauge=t.filmGauge),void 0!==t.filmOffset&&(r.filmOffset=t.filmOffset),void 0!==t.view&&(r.view=Object.assign({},t.view));break;case"OrthographicCamera":r=new Nc(t.left,t.right,t.top,t.bottom,t.near,t.far),void 0!==t.zoom&&(r.zoom=t.zoom),void 0!==t.view&&(r.view=Object.assign({},t.view));break;case"AmbientLight":r=new Fc(t.color,t.intensity);break;case"DirectionalLight":r=new zc(t.color,t.intensity);break;case"PointLight":r=new Dc(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":r=new Hc(t.color,t.intensity,t.width,t.height);break;case"SpotLight":r=new Oc(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":r=new Rc(t.color,t.groundColor,t.intensity);break;case"LightProbe":r=(new Uc).fromJSON(t);break;case"SkinnedMesh":r=new ka(a=s(t.geometry),o=c(t.material)),void 0!==t.bindMode&&(r.bindMode=t.bindMode),void 0!==t.bindMatrix&&r.bindMatrix.fromArray(t.bindMatrix),void 0!==t.skeleton&&(r.skeleton=t.skeleton);break;case"Mesh":r=new kn(a=s(t.geometry),o=c(t.material));break;case"InstancedMesh":a=s(t.geometry),o=c(t.material);var l=t.count,u=t.instanceMatrix;(r=new Qa(a,o,l)).instanceMatrix=new nn(new Float32Array(u.array),16);break;case"LOD":r=new Ba;break;case"Line":r=new ro(s(t.geometry),c(t.material));break;case"LineLoop":r=new co(s(t.geometry),c(t.material));break;case"LineSegments":r=new so(s(t.geometry),c(t.material));break;case"PointCloud":case"Points":r=new mo(s(t.geometry),c(t.material));break;case"Sprite":r=new Oa(c(t.material));break;case"Group":r=new oa;break;case"Bone":r=new Va;break;default:r=new Ae}if(r.uuid=t.uuid,void 0!==t.name&&(r.name=t.name),void 0!==t.matrix?(r.matrix.fromArray(t.matrix),void 0!==t.matrixAutoUpdate&&(r.matrixAutoUpdate=t.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(void 0!==t.position&&r.position.fromArray(t.position),void 0!==t.rotation&&r.rotation.fromArray(t.rotation),void 0!==t.quaternion&&r.quaternion.fromArray(t.quaternion),void 0!==t.scale&&r.scale.fromArray(t.scale)),void 0!==t.castShadow&&(r.castShadow=t.castShadow),void 0!==t.receiveShadow&&(r.receiveShadow=t.receiveShadow),t.shadow&&(void 0!==t.shadow.bias&&(r.shadow.bias=t.shadow.bias),void 0!==t.shadow.normalBias&&(r.shadow.normalBias=t.shadow.normalBias),void 0!==t.shadow.radius&&(r.shadow.radius=t.shadow.radius),void 0!==t.shadow.mapSize&&r.shadow.mapSize.fromArray(t.shadow.mapSize),void 0!==t.shadow.camera&&(r.shadow.camera=this.parseObject(t.shadow.camera))),void 0!==t.visible&&(r.visible=t.visible),void 0!==t.frustumCulled&&(r.frustumCulled=t.frustumCulled),void 0!==t.renderOrder&&(r.renderOrder=t.renderOrder),void 0!==t.userData&&(r.userData=t.userData),void 0!==t.layers&&(r.layers.mask=t.layers),void 0!==t.children)for(var h=t.children,d=0;d<h.length;d++)r.add(this.parseObject(h[d],e,n,i));if(void 0!==t.animations)for(var p=t.animations,f=0;f<p.length;f++){var m=p[f];r.animations.push(i[m])}if("LOD"===t.type){void 0!==t.autoUpdate&&(r.autoUpdate=t.autoUpdate);for(var v=t.levels,g=0;g<v.length;g++){var y=v[g],x=r.getObjectByProperty("uuid",y.object);void 0!==x&&r.addLevel(x,y.distance)}}return r},n.bindSkeletons=function(t,e){0!==Object.keys(e).length&&t.traverse((function(t){if(!0===t.isSkinnedMesh&&void 0!==t.skeleton){var n=e[t.skeleton];void 0===n?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(n,t.bindMatrix)}}))},n.setTexturePath=function(t){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(t)},e}(Js),Yc={UVMapping:r,CubeReflectionMapping:a,CubeRefractionMapping:o,EquirectangularReflectionMapping:s,EquirectangularRefractionMapping:c,CubeUVReflectionMapping:l,CubeUVRefractionMapping:u},Zc={RepeatWrapping:h,ClampToEdgeWrapping:d,MirroredRepeatWrapping:p},Jc={NearestFilter:f,NearestMipmapNearestFilter:m,NearestMipmapLinearFilter:v,LinearFilter:g,LinearMipmapNearestFilter:y,LinearMipmapLinearFilter:x};function Qc(t){"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Js.call(this,t),this.options={premultiplyAlpha:"none"}}function Kc(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}Qc.prototype=Object.assign(Object.create(Js.prototype),{constructor:Qc,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var r=this,a=Xs.get(t);if(void 0!==a)return r.manager.itemStart(t),setTimeout((function(){e&&e(a),r.manager.itemEnd(t)}),0),a;var o={};o.credentials="anonymous"===this.crossOrigin?"same-origin":"include",fetch(t,o).then((function(t){return t.blob()})).then((function(t){return createImageBitmap(t,r.options)})).then((function(n){Xs.add(t,n),e&&e(n),r.manager.itemEnd(t)})).catch((function(e){i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t)})),r.manager.itemStart(t)}}),Object.assign(Kc.prototype,{moveTo:function(t,e){return this.currentPath=new Ec,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(t){for(var e=[],n=0,i=t.length;n<i;n++){var r=t[n],a=new Ac;a.curves=r.curves,e.push(a)}return e}function i(t,e){for(var n=e.length,i=!1,r=n-1,a=0;a<n;r=a++){var o=e[r],s=e[a],c=s.x-o.x,l=s.y-o.y;if(Math.abs(l)>Number.EPSILON){if(l<0&&(o=e[a],c=-c,s=e[r],l=-l),t.y<o.y||t.y>s.y)continue;if(t.y===o.y){if(t.x===o.x)return!0}else{var u=l*(t.x-o.x)-c*(t.y-o.y);if(0===u)return!0;if(u<0)continue;i=!i}}else{if(t.y!==o.y)continue;if(s.x<=t.x&&t.x<=o.x||o.x<=t.x&&t.x<=s.x)return!0}}return i}var r,a,o,s=ns.isClockWise,c=this.subPaths;if(0===c.length)return[];if(!0===e)return n(c);var l=[];if(1===c.length)return a=c[0],(o=new Ac).curves=a.curves,l.push(o),l;var u=!s(c[0].getPoints());u=t?!u:u;var h,d,p=[],f=[],m=[],v=0;f[v]=void 0,m[v]=[];for(var g=0,y=c.length;g<y;g++)r=s(h=(a=c[g]).getPoints()),(r=t?!r:r)?(!u&&f[v]&&v++,f[v]={s:new Ac,p:h},f[v].s.curves=a.curves,u&&v++,m[v]=[]):m[v].push({h:a,p:h[0]});if(!f[0])return n(c);if(f.length>1){for(var x=!1,_=[],b=0,w=f.length;b<w;b++)p[b]=[];for(var M=0,S=f.length;M<S;M++)for(var T=m[M],E=0;E<T.length;E++){for(var A=T[E],L=!0,R=0;R<f.length;R++)i(A.p,f[R].p)&&(M!==R&&_.push({froms:M,tos:R,hole:E}),L?(L=!1,p[R].push(A)):x=!0);L&&p[M].push(A)}_.length>0&&(x||(m=p))}for(var C=0,P=f.length;C<P;C++){o=f[C].s,l.push(o);for(var O=0,I=(d=m[C]).length;O<I;O++)o.holes.push(d[O].h)}return l}});var $c,tl=function(){function t(t){Object.defineProperty(this,"isFont",{value:!0}),this.type="Font",this.data=t}return t.prototype.generateShapes=function(t,e){void 0===e&&(e=100);for(var n=[],i=function(t,e,n){for(var i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,a=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[],s=0,c=0,l=0;l<i.length;l++){var u=i[l];if("\n"===u)s=0,c-=a;else{var h=el(u,r,s,c,n);s+=h.offsetX,o.push(h.path)}}return o}(t,e,this.data),r=0,a=i.length;r<a;r++)Array.prototype.push.apply(n,i[r].toShapes());return n},t}();function el(t,e,n,i,r){var a=r.glyphs[t]||r.glyphs["?"];if(a){var o,s,c,l,u,h,d,p,f=new Kc;if(a.o)for(var m=a._cachedOutline||(a._cachedOutline=a.o.split(" ")),v=0,g=m.length;v<g;){switch(m[v++]){case"m":o=m[v++]*e+n,s=m[v++]*e+i,f.moveTo(o,s);break;case"l":o=m[v++]*e+n,s=m[v++]*e+i,f.lineTo(o,s);break;case"q":c=m[v++]*e+n,l=m[v++]*e+i,u=m[v++]*e+n,h=m[v++]*e+i,f.quadraticCurveTo(u,h,c,l);break;case"b":c=m[v++]*e+n,l=m[v++]*e+i,u=m[v++]*e+n,h=m[v++]*e+i,d=m[v++]*e+n,p=m[v++]*e+i,f.bezierCurveTo(u,h,d,p,c,l)}}return{offsetX:a.ha*e,path:f}}console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".")}function nl(t){Js.call(this,t)}nl.prototype=Object.assign(Object.create(Js.prototype),{constructor:nl,load:function(t,e,n,i){var r=this,a=new Ks(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,(function(t){var n;try{n=JSON.parse(t)}catch(e){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),n=JSON.parse(t.substring(65,t.length-2))}var i=r.parse(n);e&&e(i)}),n,i)},parse:function(t){return new tl(t)}});var il={getContext:function(){return void 0===$c&&($c=new(window.AudioContext||window.webkitAudioContext)),$c},setContext:function(t){$c=t}};function rl(t){Js.call(this,t)}function al(t,e,n){Uc.call(this,void 0,n);var i=(new Ze).set(t),r=(new Ze).set(e),a=new Lt(i.r,i.g,i.b),o=new Lt(r.r,r.g,r.b),s=Math.sqrt(Math.PI),c=s*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}function ol(t,e){Uc.call(this,void 0,e);var n=(new Ze).set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}rl.prototype=Object.assign(Object.create(Js.prototype),{constructor:rl,load:function(t,e,n,i){var r=this,a=new Ks(r.manager);a.setResponseType("arraybuffer"),a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,(function(n){try{var a=n.slice(0);il.getContext().decodeAudioData(a,(function(t){e(t)}))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}}),al.prototype=Object.assign(Object.create(Uc.prototype),{constructor:al,isHemisphereLightProbe:!0,copy:function(t){return Uc.prototype.copy.call(this,t),this},toJSON:function(t){return Uc.prototype.toJSON.call(this,t)}}),ol.prototype=Object.assign(Object.create(Uc.prototype),{constructor:ol,isAmbientLightProbe:!0,copy:function(t){return Uc.prototype.copy.call(this,t),this},toJSON:function(t){return Uc.prototype.toJSON.call(this,t)}});var sl=new ne,cl=new ne;function ll(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Jn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Jn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(ll.prototype,{update:function(t){var e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;var n,i,r=t.projectionMatrix.clone(),a=e.eyeSep/2,o=a*e.near/e.focus,s=e.near*Math.tan(gt.DEG2RAD*e.fov*.5)/e.zoom;cl.elements[12]=-a,sl.elements[12]=a,n=-s*e.aspect+o,i=s*e.aspect+o,r.elements[0]=2*e.near/(i-n),r.elements[8]=(i+n)/(i-n),this.cameraL.projectionMatrix.copy(r),n=-s*e.aspect-o,i=s*e.aspect-o,r.elements[0]=2*e.near/(i-n),r.elements[8]=(i+n)/(i-n),this.cameraR.projectionMatrix.copy(r)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(cl),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(sl)}});var ul=function(){function t(t){this.autoStart=void 0===t||t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}var e=t.prototype;return e.start=function(){this.startTime=hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},e.stop=function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},e.getElapsedTime=function(){return this.getDelta(),this.elapsedTime},e.getDelta=function(){var t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var e=hl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t},t}();function hl(){return("undefined"==typeof performance?Date:performance).now()}var dl=new Lt,pl=new At,fl=new Lt,ml=new Lt,vl=function(t){function e(){var e;return(e=t.call(this)||this).type="AudioListener",e.context=il.getContext(),e.gain=e.context.createGain(),e.gain.connect(e.context.destination),e.filter=null,e.timeDelta=0,e._clock=new ul,e}ct(e,t);var n=e.prototype;return n.getInput=function(){return this.gain},n.removeFilter=function(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},n.getFilter=function(){return this.filter},n.setFilter=function(t){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},n.getMasterVolume=function(){return this.gain.gain.value},n.setMasterVolume=function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this},n.updateMatrixWorld=function(e){t.prototype.updateMatrixWorld.call(this,e);var n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(dl,pl,fl),ml.set(0,0,-1).applyQuaternion(pl),n.positionX){var r=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(dl.x,r),n.positionY.linearRampToValueAtTime(dl.y,r),n.positionZ.linearRampToValueAtTime(dl.z,r),n.forwardX.linearRampToValueAtTime(ml.x,r),n.forwardY.linearRampToValueAtTime(ml.y,r),n.forwardZ.linearRampToValueAtTime(ml.z,r),n.upX.linearRampToValueAtTime(i.x,r),n.upY.linearRampToValueAtTime(i.y,r),n.upZ.linearRampToValueAtTime(i.z,r)}else n.setPosition(dl.x,dl.y,dl.z),n.setOrientation(ml.x,ml.y,ml.z,i.x,i.y,i.z)},e}(Ae),gl=function(t){function e(e){var n;return(n=t.call(this)||this).type="Audio",n.listener=e,n.context=e.context,n.gain=n.context.createGain(),n.gain.connect(e.getInput()),n.autoplay=!1,n.buffer=null,n.detune=0,n.loop=!1,n.loopStart=0,n.loopEnd=0,n.offset=0,n.duration=void 0,n.playbackRate=1,n.isPlaying=!1,n.hasPlaybackControl=!0,n.source=null,n.sourceType="empty",n._startedAt=0,n._progress=0,n._connected=!1,n.filters=[],n}ct(e,t);var n=e.prototype;return n.getOutput=function(){return this.gain},n.setNodeSource=function(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this},n.setMediaElementSource=function(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this},n.setMediaStreamSource=function(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this},n.setBuffer=function(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this},n.play=function(t){if(void 0===t&&(t=0),!0!==this.isPlaying){if(!1!==this.hasPlaybackControl){this._startedAt=this.context.currentTime+t;var e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}console.warn("THREE.Audio: this Audio has no playback control.")}else console.warn("THREE.Audio: Audio is already playing.")},n.pause=function(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")},n.stop=function(){if(!1!==this.hasPlaybackControl)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")},n.connect=function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this},n.disconnect=function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this},n.getFilters=function(){return this.filters},n.setFilters=function(t){return t||(t=[]),!0===this._connected?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this},n.setDetune=function(t){if(this.detune=t,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},n.getDetune=function(){return this.detune},n.getFilter=function(){return this.getFilters()[0]},n.setFilter=function(t){return this.setFilters(t?[t]:[])},n.setPlaybackRate=function(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")},n.getPlaybackRate=function(){return this.playbackRate},n.onEnded=function(){this.isPlaying=!1},n.getLoop=function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},n.setLoop=function(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")},n.setLoopStart=function(t){return this.loopStart=t,this},n.setLoopEnd=function(t){return this.loopEnd=t,this},n.getVolume=function(){return this.gain.gain.value},n.setVolume=function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this},e}(Ae),yl=new Lt,xl=new At,_l=new Lt,bl=new Lt,wl=function(t){function e(e){var n;return(n=t.call(this,e)||this).panner=n.context.createPanner(),n.panner.panningModel="HRTF",n.panner.connect(n.gain),n}ct(e,t);var n=e.prototype;return n.getOutput=function(){return this.panner},n.getRefDistance=function(){return this.panner.refDistance},n.setRefDistance=function(t){return this.panner.refDistance=t,this},n.getRolloffFactor=function(){return this.panner.rolloffFactor},n.setRolloffFactor=function(t){return this.panner.rolloffFactor=t,this},n.getDistanceModel=function(){return this.panner.distanceModel},n.setDistanceModel=function(t){return this.panner.distanceModel=t,this},n.getMaxDistance=function(){return this.panner.maxDistance},n.setMaxDistance=function(t){return this.panner.maxDistance=t,this},n.setDirectionalCone=function(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this},n.updateMatrixWorld=function(e){if(t.prototype.updateMatrixWorld.call(this,e),!0!==this.hasPlaybackControl||!1!==this.isPlaying){this.matrixWorld.decompose(yl,xl,_l),bl.set(0,0,1).applyQuaternion(xl);var n=this.panner;if(n.positionX){var i=this.context.currentTime+this.listener.timeDelta;n.positionX.linearRampToValueAtTime(yl.x,i),n.positionY.linearRampToValueAtTime(yl.y,i),n.positionZ.linearRampToValueAtTime(yl.z,i),n.orientationX.linearRampToValueAtTime(bl.x,i),n.orientationY.linearRampToValueAtTime(bl.y,i),n.orientationZ.linearRampToValueAtTime(bl.z,i)}else n.setPosition(yl.x,yl.y,yl.z),n.setOrientation(bl.x,bl.y,bl.z)}},e}(gl),Ml=function(){function t(t,e){void 0===e&&(e=2048),this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}var e=t.prototype;return e.getFrequencyData=function(){return this.analyser.getByteFrequencyData(this.data),this.data},e.getAverageFrequency=function(){for(var t=0,e=this.getFrequencyData(),n=0;n<e.length;n++)t+=e[n];return t/e.length},t}();function Sl(t,e,n){var i,r,a;switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Sl.prototype,{accumulate:function(t,e){var n=this.buffer,i=this.valueSize,r=t*i+i,a=this.cumulativeWeight;if(0===a){for(var o=0;o!==i;++o)n[r+o]=n[o];a=e}else{var s=e/(a+=e);this._mixBufferRegion(n,r,0,s,i)}this.cumulativeWeight=a},accumulateAdditive:function(t){var e=this.buffer,n=this.valueSize,i=n*this._addIndex;0===this.cumulativeWeightAdditive&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){var e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){var s=e*this._origIndex;this._mixBufferRegion(n,i,s,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(var c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}},saveOriginalState:function(){var t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(var r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){var t=3*this.valueSize;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){for(var t=this._addIndex*this.valueSize,e=t+this.valueSize,n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){for(var t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize,n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(var a=0;a!==r;++a)t[e+a]=t[n+a]},_slerp:function(t,e,n,i){At.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){var a=this._workIndex*r;At.multiplyQuaternionsFlat(t,a,t,e,t,n),At.slerpFlat(t,e,t,e,t,a,i)},_lerp:function(t,e,n,i,r){for(var a=1-i,o=0;o!==r;++o){var s=e+o;t[s]=t[s]*a+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(var a=0;a!==r;++a){var o=e+a;t[o]=t[o]+t[n+a]*i}}});var Tl="\\[\\]\\.:\\/",El=new RegExp("[\\[\\]\\.:\\/]","g"),Al="[^\\[\\]\\.:\\/]",Ll="[^"+Tl.replace("\\.","")+"]",Rl=/((?:WC+[\/:])*)/.source.replace("WC",Al),Cl=/(WCOD+)?/.source.replace("WCOD",Ll),Pl=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Al),Ol=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Al),Il=new RegExp("^"+Rl+Cl+Pl+Ol+"$"),Dl=["material","materials","bones"];function Nl(t,e,n){var i=n||Bl.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}function Bl(t,e,n){this.path=e,this.parsedPath=n||Bl.parseTrackName(e),this.node=Bl.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}function zl(){this.uuid=gt.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var t={};this._indicesByUUID=t;for(var e=0,n=arguments.length;e!==n;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var i=this;this.stats={objects:{get total(){return i._objects.length},get inUse(){return this.total-i.nCachedObjects_}},get bindingsPerObject(){return i._bindings.length}}}Object.assign(Nl.prototype,{getValue:function(t,e){this.bind();var n=this._targetGroup.nCachedObjects_,i=this._bindings[n];void 0!==i&&i.getValue(t,e)},setValue:function(t,e){for(var n=this._bindings,i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}),Object.assign(Bl,{Composite:Nl,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new Bl.Composite(t,e,n):new Bl(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(El,"")},parseTrackName:function(t){var e=Il.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);var n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(void 0!==i&&-1!==i){var r=n.nodeName.substring(i+1);-1!==Dl.indexOf(r)&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(null===n.propertyName||0===n.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||""===e||"."===e||-1===e||e===t.name||e===t.uuid)return t;if(t.skeleton){var n=t.skeleton.getBoneByName(e);if(void 0!==n)return n}if(t.children){var i=function t(n){for(var i=0;i<n.length;i++){var r=n[i];if(r.name===e||r.uuid===e)return r;var a=t(r.children);if(a)return a}return null}(t.children);if(i)return i}return null}}),Object.assign(Bl.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,e){t[e]=this.node[this.propertyName]},function(t,e){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)t[e++]=n[i]},function(t,e){t[e]=this.resolvedProperty[this.propertyIndex]},function(t,e){this.resolvedProperty.toArray(t,e)}],SetterByBindingTypeAndVersioning:[[function(t,e){this.targetObject[this.propertyName]=t[e]},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)n[i]=t[e++]},function(t,e){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0},function(t,e){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty[this.propertyIndex]=t[e]},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty.fromArray(t,e)},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,e){this.bind(),this.getValue(t,e)},setValue:function(t,e){this.bind(),this.setValue(t,e)},bind:function(){var t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=Bl.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,t){if(n){var a=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(var o=0;o<t.length;o++)if(t[o].name===a){a=o;break}break;default:if(void 0===t[n])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n]}if(void 0!==a){if(void 0===t[a])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[a]}}var s=t[i];if(void 0!==s){var c=this.Versioning.None;this.targetObject=t,void 0!==t.needsUpdate?c=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(c=this.Versioning.MatrixWorldNeedsUpdate);var l=this.BindingType.Direct;if(void 0!==r){if("morphTargetInfluences"===i){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==t.morphTargetDictionary[r]&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else void 0!==s.fromArray&&void 0!==s.toArray?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}else{var u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",t)}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),Object.assign(Bl.prototype,{_getValue_unbound:Bl.prototype.getValue,_setValue_unbound:Bl.prototype.setValue}),Object.assign(zl.prototype,{isAnimationObjectGroup:!0,add:function(){for(var t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o=void 0,s=t.length,c=this.nCachedObjects_,l=0,u=arguments.length;l!==u;++l){var h=arguments[l],d=h.uuid,p=e[d];if(void 0===p){p=s++,e[d]=p,t.push(h);for(var f=0,m=a;f!==m;++f)r[f].push(new Bl(h,n[f],i[f]))}else if(p<c){o=t[p];var v=--c,g=t[v];e[g.uuid]=p,t[p]=g,e[d]=v,t[v]=h;for(var y=0,x=a;y!==x;++y){var _=r[y],b=_[v],w=_[p];_[p]=b,void 0===w&&(w=new Bl(h,n[y],i[y])),_[v]=w}}else t[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){for(var t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=0,o=arguments.length;a!==o;++a){var s=arguments[a],c=s.uuid,l=e[c];if(void 0!==l&&l>=r){var u=r++,h=t[u];e[h.uuid]=l,t[l]=h,e[c]=u,t[u]=s;for(var d=0,p=i;d!==p;++d){var f=n[d],m=f[u],v=f[l];f[l]=m,f[u]=v}}}this.nCachedObjects_=r},uncache:function(){for(var t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=t.length,o=0,s=arguments.length;o!==s;++o){var c=arguments[o],l=c.uuid,u=e[l];if(void 0!==u)if(delete e[l],u<r){var h=--r,d=t[h],p=--a,f=t[p];e[d.uuid]=u,t[u]=d,e[f.uuid]=h,t[h]=f,t.pop();for(var m=0,v=i;m!==v;++m){var g=n[m],y=g[h],x=g[p];g[u]=y,g[h]=x,g.pop()}}else{var _=--a,b=t[_];_>0&&(e[b.uuid]=u),t[u]=b,t.pop();for(var w=0,M=i;w!==M;++w){var S=n[w];S[u]=S[_],S.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){var n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(void 0!==i)return r[i];var a=this._paths,o=this._parsedPaths,s=this._objects,c=s.length,l=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(u);for(var h=l,d=s.length;h!==d;++h){var p=s[h];u[h]=new Bl(p,t,e)}return u},unsubscribe_:function(t){var e=this._bindingsIndicesByPath,n=e[t];if(void 0!==n){var i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,s=a[o];e[t[o]]=n,a[n]=s,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});var Fl=function(){function t(t,e,n,i){void 0===n&&(n=null),void 0===i&&(i=e.blendMode),this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;for(var r=e.tracks,a=r.length,o=new Array(a),s={endingStart:V,endingEnd:V},c=0;c!==a;++c){var l=r[c].createInterpolant(null);o[c]=l,l.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}var e=t.prototype;return e.play=function(){return this._mixer._activateAction(this),this},e.stop=function(){return this._mixer._deactivateAction(this),this.reset()},e.reset=function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},e.isRunning=function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},e.isScheduled=function(){return this._mixer._isActiveAction(this)},e.startAt=function(t){return this._startTime=t,this},e.setLoop=function(t,e){return this.loop=t,this.repetitions=e,this},e.setEffectiveWeight=function(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()},e.getEffectiveWeight=function(){return this._effectiveWeight},e.fadeIn=function(t){return this._scheduleFading(t,0,1)},e.fadeOut=function(t){return this._scheduleFading(t,1,0)},e.crossFadeFrom=function(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){var i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this},e.crossFadeTo=function(t,e,n){return t.crossFadeFrom(this,e,n)},e.stopFading=function(){var t=this._weightInterpolant;return null!==t&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},e.setEffectiveTimeScale=function(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()},e.getEffectiveTimeScale=function(){return this._effectiveTimeScale},e.setDuration=function(t){return this.timeScale=this._clip.duration/t,this.stopWarping()},e.syncWith=function(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()},e.halt=function(t){return this.warp(this._effectiveTimeScale,0,t)},e.warp=function(t,e,n){var i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;null===o&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);var s=o.parameterPositions,c=o.sampleValues;return s[0]=r,s[1]=r+n,c[0]=t/a,c[1]=e/a,this},e.stopWarping=function(){var t=this._timeScaleInterpolant;return null!==t&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},e.getMixer=function(){return this._mixer},e.getClip=function(){return this._clip},e.getRoot=function(){return this._localRoot||this._mixer._root},e._update=function(t,e,n,i){if(this.enabled){var r=this._startTime;if(null!==r){var a=(t-r)*n;if(a<0||0===n)return;this._startTime=null,e=n*a}e*=this._updateTimeScale(t);var o=this._updateTime(e),s=this._updateWeight(t);if(s>0){var c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case X:for(var u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(s);break;case q:default:for(var d=0,p=c.length;d!==p;++d)c[d].evaluate(o),l[d].accumulate(i,s)}}}else this._updateWeight(t)},e._updateWeight=function(t){var e=0;if(this.enabled){e=this.weight;var n=this._weightInterpolant;if(null!==n){var i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),0===i&&(this.enabled=!1))}}return this._effectiveWeight=e,e},e._updateTimeScale=function(t){var e=0;if(!this.paused){e=this.timeScale;var n=this._timeScaleInterpolant;if(null!==n)e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),0===e?this.paused=!0:this.timeScale=e)}return this._effectiveTimeScale=e,e},e._updateTime=function(t){var e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,a=2202===n;if(0===t)return-1===r?i:a&&1==(1&r)?e-i:i;if(2200===n){-1===r&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else{if(!(i<0)){this.time=i;break t}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(-1===r&&(t>=0?(r=0,this._setEndings(!0,0===this.repetitions,a)):this._setEndings(0===this.repetitions,!0,a)),i>=e||i<0){var o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);var s=this.repetitions-r;if(s<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(1===s){var c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&1==(1&r))return e-i}return i},e._setEndings=function(t,e,n){var i=this._interpolantSettings;n?(i.endingStart=W,i.endingEnd=W):(i.endingStart=t?this.zeroSlopeAtStart?W:V:j,i.endingEnd=e?this.zeroSlopeAtEnd?W:V:j)},e._scheduleFading=function(t,e,n){var i=this._mixer,r=i.time,a=this._weightInterpolant;null===a&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);var o=a.parameterPositions,s=a.sampleValues;return o[0]=r,s[0]=e,o[1]=r+t,s[1]=n,this},t}();function Hl(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Hl.prototype=Object.assign(Object.create(dt.prototype),{constructor:Hl,_bindAction:function(t,e){var n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];void 0===l&&(l={},c[s]=l);for(var u=0;u!==r;++u){var h=i[u],d=h.name,p=l[d];if(void 0!==p)a[u]=p;else{if(void 0!==(p=a[u])){null===p._cacheIndex&&(++p.referenceCount,this._addInactiveBinding(p,s,d));continue}var f=e&&e._propertyBindings[u].binding.parsedPath;++(p=new Sl(Bl.create(n,d,f),h.ValueTypeName,h.getValueSize())).referenceCount,this._addInactiveBinding(p,s,d),a[u]=p}o[u].resultBuffer=p.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){var e=(t._localRoot||this._root).uuid,n=t._clip.uuid,i=this._actionsByClip[n];this._bindAction(t,i&&i.knownActions[0]),this._addInactiveAction(t,n,e)}for(var r=t._propertyBindings,a=0,o=r.length;a!==o;++a){var s=r[a];0==s.useCount++&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){for(var e=t._propertyBindings,n=0,i=e.length;n!==i;++n){var r=e[n];0==--r.useCount&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;var t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){var e=t._cacheIndex;return null!==e&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){var i=this._actions,r=this._actionsByClip,a=r[e];if(void 0===a)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{var o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t},_removeInactiveAction:function(t){var e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;var r=t._clip.uuid,a=this._actionsByClip,o=a[r],s=o.knownActions,c=s[s.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),t._byClipCacheIndex=null,delete o.actionByRoot[(t._localRoot||this._root).uuid],0===s.length&&delete a[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){for(var e=t._propertyBindings,n=0,i=e.length;n!==i;++n){var r=e[n];0==--r.referenceCount&&this._removeInactiveBinding(r)}},_lendAction:function(t){var e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){var e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){var i=this._bindingsByRootAndName,r=this._bindings,a=i[e];void 0===a&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){var e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],s=e[e.length-1],c=t._cacheIndex;s._cacheIndex=c,e[c]=s,e.pop(),delete o[r],0===Object.keys(o).length&&delete a[i]},_lendBinding:function(t){var e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){var e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){var t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return void 0===n&&((n=new Ns(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer)).__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){var e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){var i=e||this._root,r=i.uuid,a="string"==typeof t?js.findByName(i,t):t,o=null!==a?a.uuid:t,s=this._actionsByClip[o],c=null;if(void 0===n&&(n=null!==a?a.blendMode:q),void 0!==s){var l=s.actionByRoot[r];if(void 0!==l&&l.blendMode===n)return l;c=s.knownActions[0],null===a&&(a=c._clip)}if(null===a)return null;var u=new Fl(this,a,e,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u},existingAction:function(t,e){var n=e||this._root,i=n.uuid,r="string"==typeof t?js.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return void 0!==o&&o.actionByRoot[i]||null},stopAllAction:function(){for(var t=this._actions,e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this},update:function(t){t*=this.timeScale;for(var e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1,o=0;o!==n;++o){e[o]._update(i,t,r,a)}for(var s=this._bindings,c=this._nActiveBindings,l=0;l!==c;++l)s[l].apply(a);return this},setTime:function(t){this.time=0;for(var e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){var e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(void 0!==r){for(var a=r.knownActions,o=0,s=a.length;o!==s;++o){var c=a[o];this._deactivateAction(c);var l=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=l,e[l]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){var e=t.uuid,n=this._actionsByClip;for(var i in n){var r=n[i].actionByRoot[e];void 0!==r&&(this._deactivateAction(r),this._removeInactiveAction(r))}var a=this._bindingsByRootAndName[e];if(void 0!==a)for(var o in a){var s=a[o];s.restoreOriginalState(),this._removeInactiveBinding(s)}},uncacheAction:function(t,e){var n=this.existingAction(t,e);null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))}});var Gl=function(){function t(t){"string"==typeof t&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}return t.prototype.clone=function(){return new t(void 0===this.value.clone?this.value:this.value.clone())},t}();function Ul(t,e,n){ma.call(this,t,e),this.meshPerAttribute=n||1}function kl(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}function Vl(t,e,n,i){this.ray=new ee(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new pe,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Wl(t,e){return t.distance-e.distance}function jl(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),!0===i)for(var r=t.children,a=0,o=r.length;a<o;a++)jl(r[a],e,n,!0)}Ul.prototype=Object.assign(Object.create(ma.prototype),{constructor:Ul,isInstancedInterleavedBuffer:!0,copy:function(t){return ma.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){var e=ma.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){var e=ma.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}),Object.defineProperty(kl.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(kl.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}}),Object.assign(Vl.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(t,e,n){var i=n||[];return jl(t,this,i,e),i.sort(Wl),i},intersectObjects:function(t,e,n){var i=n||[];if(!1===Array.isArray(t))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(var r=0,a=t.length;r<a;r++)jl(t[r],this,i,e);return i.sort(Wl),i}});var ql=function(){function t(t,e,n){return void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),this.radius=t,this.phi=e,this.theta=n,this}var e=t.prototype;return e.set=function(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this},e.makeSafe=function(){var t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this},e.setFromVector3=function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},e.setFromCartesianCoords=function(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(gt.clamp(e/this.radius,-1,1))),this},t}(),Xl=function(){function t(t,e,n){return this.radius=void 0!==t?t:1,this.theta=void 0!==e?e:0,this.y=void 0!==n?n:0,this}var e=t.prototype;return e.set=function(t,e,n){return this.radius=t,this.theta=e,this.y=n,this},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this},e.setFromVector3=function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},e.setFromCartesianCoords=function(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this},t}(),Yl=new yt,Zl=function(){function t(t,e){Object.defineProperty(this,"isBox2",{value:!0}),this.min=void 0!==t?t:new yt(1/0,1/0),this.max=void 0!==e?e:new yt(-1/0,-1/0)}var e=t.prototype;return e.set=function(t,e){return this.min.copy(t),this.max.copy(e),this},e.setFromPoints=function(t){this.makeEmpty();for(var e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},e.setFromCenterAndSize=function(t,e){var n=Yl.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){return this.min.copy(t.min),this.max.copy(t.max),this},e.makeEmpty=function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},e.isEmpty=function(){return this.max.x<this.min.x||this.max.y<this.min.y},e.getCenter=function(t){return void 0===t&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new yt),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},e.getSize=function(t){return void 0===t&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new yt),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)},e.expandByPoint=function(t){return this.min.min(t),this.max.max(t),this},e.expandByVector=function(t){return this.min.sub(t),this.max.add(t),this},e.expandByScalar=function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},e.containsPoint=function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)},e.containsBox=function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y},e.getParameter=function(t,e){return void 0===e&&(console.warn("THREE.Box2: .getParameter() target is now required"),e=new yt),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))},e.intersectsBox=function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)},e.clampPoint=function(t,e){return void 0===e&&(console.warn("THREE.Box2: .clampPoint() target is now required"),e=new yt),e.copy(t).clamp(this.min,this.max)},e.distanceToPoint=function(t){return Yl.copy(t).clamp(this.min,this.max).sub(t).length()},e.intersect=function(t){return this.min.max(t.min),this.max.min(t.max),this},e.union=function(t){return this.min.min(t.min),this.max.max(t.max),this},e.translate=function(t){return this.min.add(t),this.max.add(t),this},e.equals=function(t){return t.min.equals(this.min)&&t.max.equals(this.max)},t}(),Jl=new Lt,Ql=new Lt,Kl=function(){function t(t,e){this.start=void 0!==t?t:new Lt,this.end=void 0!==e?e:new Lt}var e=t.prototype;return e.set=function(t,e){return this.start.copy(t),this.end.copy(e),this},e.clone=function(){return(new this.constructor).copy(this)},e.copy=function(t){return this.start.copy(t.start),this.end.copy(t.end),this},e.getCenter=function(t){return void 0===t&&(console.warn("THREE.Line3: .getCenter() target is now required"),t=new Lt),t.addVectors(this.start,this.end).multiplyScalar(.5)},e.delta=function(t){return void 0===t&&(console.warn("THREE.Line3: .delta() target is now required"),t=new Lt),t.subVectors(this.end,this.start)},e.distanceSq=function(){return this.start.distanceToSquared(this.end)},e.distance=function(){return this.start.distanceTo(this.end)},e.at=function(t,e){return void 0===e&&(console.warn("THREE.Line3: .at() target is now required"),e=new Lt),this.delta(e).multiplyScalar(t).add(this.start)},e.closestPointToPointParameter=function(t,e){Jl.subVectors(t,this.start),Ql.subVectors(this.end,this.start);var n=Ql.dot(Ql),i=Ql.dot(Jl)/n;return e&&(i=gt.clamp(i,0,1)),i},e.closestPointToPoint=function(t,e,n){var i=this.closestPointToPointParameter(t,e);return void 0===n&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new Lt),this.delta(n).multiplyScalar(i).add(this.start)},e.applyMatrix4=function(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this},e.equals=function(t){return t.start.equals(this.start)&&t.end.equals(this.end)},t}();function $l(t){Ae.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}$l.prototype=Object.create(Ae.prototype),$l.prototype.constructor=$l,$l.prototype.isImmediateRenderObject=!0;var tu=new Lt,eu=function(t){function e(e,n){var i;(i=t.call(this)||this).light=e,i.light.updateMatrixWorld(),i.matrix=e.matrixWorld,i.matrixAutoUpdate=!1,i.color=n;for(var r=new Sn,a=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],o=0,s=1;o<32;o++,s++){var c=o/32*Math.PI*2,l=s/32*Math.PI*2;a.push(Math.cos(c),Math.sin(c),1,Math.cos(l),Math.sin(l),1)}r.setAttribute("position",new dn(a,3));var u=new Ka({fog:!1,toneMapped:!1});return i.cone=new so(r,u),i.add(i.cone),i.update(),i}ct(e,t);var n=e.prototype;return n.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()},n.update=function(){this.light.updateMatrixWorld();var t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),tu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(tu),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)},e}(Ae),nu=new Lt,iu=new ne,ru=new ne,au=function(t){function e(e){for(var n,i=ou(e),r=new Sn,a=[],o=[],s=new Ze(0,0,1),c=new Ze(0,1,0),l=0;l<i.length;l++){var u=i[l];u.parent&&u.parent.isBone&&(a.push(0,0,0),a.push(0,0,0),o.push(s.r,s.g,s.b),o.push(c.r,c.g,c.b))}r.setAttribute("position",new dn(a,3)),r.setAttribute("color",new dn(o,3));var h=new Ka({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});return(n=t.call(this,r,h)||this).type="SkeletonHelper",n.isSkeletonHelper=!0,n.root=e,n.bones=i,n.matrix=e.matrixWorld,n.matrixAutoUpdate=!1,n}return ct(e,t),e.prototype.updateMatrixWorld=function(e){var n=this.bones,i=this.geometry,r=i.getAttribute("position");ru.copy(this.root.matrixWorld).invert();for(var a=0,o=0;a<n.length;a++){var s=n[a];s.parent&&s.parent.isBone&&(iu.multiplyMatrices(ru,s.matrixWorld),nu.setFromMatrixPosition(iu),r.setXYZ(o,nu.x,nu.y,nu.z),iu.multiplyMatrices(ru,s.parent.matrixWorld),nu.setFromMatrixPosition(iu),r.setXYZ(o+1,nu.x,nu.y,nu.z),o+=2)}i.getAttribute("position").needsUpdate=!0,t.prototype.updateMatrixWorld.call(this,e)},e}(so);function ou(t){var e=[];t&&t.isBone&&e.push(t);for(var n=0;n<t.children.length;n++)e.push.apply(e,ou(t.children[n]));return e}var su=function(t){function e(e,n,i){var r,a=new ps(n,4,2),o=new $e({wireframe:!0,fog:!1,toneMapped:!1});return(r=t.call(this,a,o)||this).light=e,r.light.updateMatrixWorld(),r.color=i,r.type="PointLightHelper",r.matrix=r.light.matrixWorld,r.matrixAutoUpdate=!1,r.update(),r}ct(e,t);var n=e.prototype;return n.dispose=function(){this.geometry.dispose(),this.material.dispose()},n.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)},e}(kn),cu=new Lt,lu=new Ze,uu=new Ze,hu=function(t){function e(e,n,i){var r;(r=t.call(this)||this).light=e,r.light.updateMatrixWorld(),r.matrix=e.matrixWorld,r.matrixAutoUpdate=!1,r.color=i;var a=new ls(n);a.rotateY(.5*Math.PI),r.material=new $e({wireframe:!0,fog:!1,toneMapped:!1}),void 0===r.color&&(r.material.vertexColors=!0);var o=a.getAttribute("position"),s=new Float32Array(3*o.count);return a.setAttribute("color",new nn(s,3)),r.add(new kn(a,r.material)),r.update(),r}ct(e,t);var n=e.prototype;return n.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()},n.update=function(){var t=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var e=t.geometry.getAttribute("color");lu.copy(this.light.color),uu.copy(this.light.groundColor);for(var n=0,i=e.count;n<i;n++){var r=n<i/2?lu:uu;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}t.lookAt(cu.setFromMatrixPosition(this.light.matrixWorld).negate())},e}(Ae),du=function(t){function e(e,n,i,r){var a;void 0===e&&(e=10),void 0===n&&(n=10),void 0===i&&(i=4473924),void 0===r&&(r=8947848),i=new Ze(i),r=new Ze(r);for(var o=n/2,s=e/n,c=e/2,l=[],u=[],h=0,d=0,p=-c;h<=n;h++,p+=s){l.push(-c,0,p,c,0,p),l.push(p,0,-c,p,0,c);var f=h===o?i:r;f.toArray(u,d),d+=3,f.toArray(u,d),d+=3,f.toArray(u,d),d+=3,f.toArray(u,d),d+=3}var m=new Sn;m.setAttribute("position",new dn(l,3)),m.setAttribute("color",new dn(u,3));var v=new Ka({vertexColors:!0,toneMapped:!1});return(a=t.call(this,m,v)||this).type="GridHelper",a}return ct(e,t),e}(so),pu=function(t){function e(e,n,i,r,a,o){var s;void 0===e&&(e=10),void 0===n&&(n=16),void 0===i&&(i=8),void 0===r&&(r=64),void 0===a&&(a=4473924),void 0===o&&(o=8947848),a=new Ze(a),o=new Ze(o);for(var c=[],l=[],u=0;u<=n;u++){var h=u/n*(2*Math.PI),d=Math.sin(h)*e,p=Math.cos(h)*e;c.push(0,0,0),c.push(d,0,p);var f=1&u?a:o;l.push(f.r,f.g,f.b),l.push(f.r,f.g,f.b)}for(var m=0;m<=i;m++)for(var v=1&m?a:o,g=e-e/i*m,y=0;y<r;y++){var x=y/r*(2*Math.PI),_=Math.sin(x)*g,b=Math.cos(x)*g;c.push(_,0,b),l.push(v.r,v.g,v.b),x=(y+1)/r*(2*Math.PI),_=Math.sin(x)*g,b=Math.cos(x)*g,c.push(_,0,b),l.push(v.r,v.g,v.b)}var w=new Sn;w.setAttribute("position",new dn(c,3)),w.setAttribute("color",new dn(l,3));var M=new Ka({vertexColors:!0,toneMapped:!1});return(s=t.call(this,w,M)||this).type="PolarGridHelper",s}return ct(e,t),e}(so),fu=new Lt,mu=new Lt,vu=new Lt,gu=function(t){function e(e,n,i){var r;(r=t.call(this)||this).light=e,r.light.updateMatrixWorld(),r.matrix=e.matrixWorld,r.matrixAutoUpdate=!1,r.color=i,void 0===n&&(n=1);var a=new Sn;a.setAttribute("position",new dn([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));var o=new Ka({fog:!1,toneMapped:!1});return r.lightPlane=new ro(a,o),r.add(r.lightPlane),(a=new Sn).setAttribute("position",new dn([0,0,0,0,0,1],3)),r.targetLine=new ro(a,o),r.add(r.targetLine),r.update(),r}ct(e,t);var n=e.prototype;return n.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()},n.update=function(){fu.setFromMatrixPosition(this.light.matrixWorld),mu.setFromMatrixPosition(this.light.target.matrixWorld),vu.subVectors(mu,fu),this.lightPlane.lookAt(mu),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(mu),this.targetLine.scale.z=vu.length()},e}(Ae),yu=new Lt,xu=new Zn,_u=function(t){function e(e){var n,i=new Sn,r=new Ka({color:16777215,vertexColors:!0,toneMapped:!1}),a=[],o=[],s={},c=new Ze(16755200),l=new Ze(16711680),u=new Ze(43775),h=new Ze(16777215),d=new Ze(3355443);function p(t,e,n){f(t,n),f(e,n)}function f(t,e){a.push(0,0,0),o.push(e.r,e.g,e.b),void 0===s[t]&&(s[t]=[]),s[t].push(a.length/3-1)}return p("n1","n2",c),p("n2","n4",c),p("n4","n3",c),p("n3","n1",c),p("f1","f2",c),p("f2","f4",c),p("f4","f3",c),p("f3","f1",c),p("n1","f1",c),p("n2","f2",c),p("n3","f3",c),p("n4","f4",c),p("p","n1",l),p("p","n2",l),p("p","n3",l),p("p","n4",l),p("u1","u2",u),p("u2","u3",u),p("u3","u1",u),p("c","t",h),p("p","c",d),p("cn1","cn2",d),p("cn3","cn4",d),p("cf1","cf2",d),p("cf3","cf4",d),i.setAttribute("position",new dn(a,3)),i.setAttribute("color",new dn(o,3)),(n=t.call(this,i,r)||this).type="CameraHelper",n.camera=e,n.camera.updateProjectionMatrix&&n.camera.updateProjectionMatrix(),n.matrix=e.matrixWorld,n.matrixAutoUpdate=!1,n.pointMap=s,n.update(),n}return ct(e,t),e.prototype.update=function(){var t=this.geometry,e=this.pointMap;xu.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),bu("c",e,t,xu,0,0,-1),bu("t",e,t,xu,0,0,1),bu("n1",e,t,xu,-1,-1,-1),bu("n2",e,t,xu,1,-1,-1),bu("n3",e,t,xu,-1,1,-1),bu("n4",e,t,xu,1,1,-1),bu("f1",e,t,xu,-1,-1,1),bu("f2",e,t,xu,1,-1,1),bu("f3",e,t,xu,-1,1,1),bu("f4",e,t,xu,1,1,1),bu("u1",e,t,xu,.7,1.1,-1),bu("u2",e,t,xu,-.7,1.1,-1),bu("u3",e,t,xu,0,2,-1),bu("cf1",e,t,xu,-1,0,1),bu("cf2",e,t,xu,1,0,1),bu("cf3",e,t,xu,0,-1,1),bu("cf4",e,t,xu,0,1,1),bu("cn1",e,t,xu,-1,0,-1),bu("cn2",e,t,xu,1,0,-1),bu("cn3",e,t,xu,0,-1,-1),bu("cn4",e,t,xu,0,1,-1),t.getAttribute("position").needsUpdate=!0},e}(so);function bu(t,e,n,i,r,a,o){yu.set(r,a,o).unproject(i);var s=e[t];if(void 0!==s)for(var c=n.getAttribute("position"),l=0,u=s.length;l<u;l++)c.setXYZ(s[l],yu.x,yu.y,yu.z)}var wu,Mu,Su,Tu=new Pt,Eu=function(t){function e(e,n){var i;void 0===n&&(n=16776960);var r=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),a=new Float32Array(24),o=new Sn;return o.setIndex(new nn(r,1)),o.setAttribute("position",new nn(a,3)),(i=t.call(this,o,new Ka({color:n,toneMapped:!1}))||this).object=e,i.type="BoxHelper",i.matrixAutoUpdate=!1,i.update(),i}ct(e,t);var n=e.prototype;return n.update=function(t){if(void 0!==t&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),void 0!==this.object&&Tu.setFromObject(this.object),!Tu.isEmpty()){var e=Tu.min,n=Tu.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}},n.setFromObject=function(t){return this.object=t,this.update(),this},n.copy=function(t){return so.prototype.copy.call(this,t),this.object=t.object,this},e}(so),Au=function(t){function e(e,n){var i;void 0===n&&(n=16776960);var r=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),a=new Sn;return a.setIndex(new nn(r,1)),a.setAttribute("position",new dn([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),(i=t.call(this,a,new Ka({color:n,toneMapped:!1}))||this).box=e,i.type="Box3Helper",i.geometry.computeBoundingSphere(),i}return ct(e,t),e.prototype.updateMatrixWorld=function(e){var n=this.box;n.isEmpty()||(n.getCenter(this.position),n.getSize(this.scale),this.scale.multiplyScalar(.5),t.prototype.updateMatrixWorld.call(this,e))},e}(so),Lu=function(t){function e(e,n,i){var r;void 0===n&&(n=1),void 0===i&&(i=16776960);var a=i,o=new Sn;o.setAttribute("position",new dn([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3)),o.computeBoundingSphere(),(r=t.call(this,o,new Ka({color:a,toneMapped:!1}))||this).type="PlaneHelper",r.plane=e,r.size=n;var s=new Sn;return s.setAttribute("position",new dn([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3)),s.computeBoundingSphere(),r.add(new kn(s,new $e({color:a,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1}))),r}return ct(e,t),e.prototype.updateMatrixWorld=function(e){var n=-this.plane.constant;Math.abs(n)<1e-8&&(n=1e-8),this.scale.set(.5*this.size,.5*this.size,n),this.children[0].material.side=n<0?1:0,this.lookAt(this.plane.normal),t.prototype.updateMatrixWorld.call(this,e)},e}(ro),Ru=new Lt,Cu=function(t){function e(e,n,i,r,a,o){var s;return(s=t.call(this)||this).type="ArrowHelper",void 0===e&&(e=new Lt(0,0,1)),void 0===n&&(n=new Lt(0,0,0)),void 0===i&&(i=1),void 0===r&&(r=16776960),void 0===a&&(a=.2*i),void 0===o&&(o=.2*a),void 0===wu&&((wu=new Sn).setAttribute("position",new dn([0,0,0,0,1,0],3)),(Mu=new wo(0,.5,1,5,1)).translate(0,-.5,0)),s.position.copy(n),s.line=new ro(wu,new Ka({color:r,toneMapped:!1})),s.line.matrixAutoUpdate=!1,s.add(s.line),s.cone=new kn(Mu,new $e({color:r,toneMapped:!1})),s.cone.matrixAutoUpdate=!1,s.add(s.cone),s.setDirection(e),s.setLength(i,a,o),s}ct(e,t);var n=e.prototype;return n.setDirection=function(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ru.set(t.z,0,-t.x).normalize();var e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ru,e)}},n.setLength=function(t,e,n){void 0===e&&(e=.2*t),void 0===n&&(n=.2*e),this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()},n.setColor=function(t){this.line.material.color.set(t),this.cone.material.color.set(t)},n.copy=function(e){return t.prototype.copy.call(this,e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this},e}(Ae),Pu=function(t){function e(e){var n;void 0===e&&(e=1);var i=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=new Sn;r.setAttribute("position",new dn(i,3)),r.setAttribute("color",new dn([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));var a=new Ka({vertexColors:!0,toneMapped:!1});return(n=t.call(this,r,a)||this).type="AxesHelper",n}return ct(e,t),e}(so),Ou=new Float32Array(1),Iu=new Int32Array(Ou.buffer),Du={toHalfFloat:function(t){Ou[0]=t;var e=Iu[0],n=e>>16&32768,i=e>>12&2047,r=e>>23&255;return r<103?n:r>142?(n|=31744,n|=(255==r?0:1)&&8388607&e):r<113?n|=((i|=2048)>>114-r)+(i>>113-r&1):(n|=r-112<<10|i>>1,n+=1&i)}},Nu=Math.pow(2,8),Bu=[.125,.215,.35,.446,.526,.582],zu=5+Bu.length,Fu=20,Hu=((Su={})[3e3]=0,Su[3001]=1,Su[3002]=2,Su[3004]=3,Su[3005]=4,Su[3006]=5,Su[3007]=6,Su),Gu=new $e({side:1,depthWrite:!1,depthTest:!1}),Uu=new kn(new Wn,Gu),ku=new Nc,Vu=eh(),Wu=Vu._lodPlanes,ju=Vu._sizeLods,qu=Vu._sigmas,Xu=new Ze,Yu=null,Zu=(1+Math.sqrt(5))/2,Ju=1/Zu,Qu=[new Lt(1,1,1),new Lt(-1,1,1),new Lt(1,1,-1),new Lt(-1,1,-1),new Lt(0,Zu,Ju),new Lt(0,Zu,-Ju),new Lt(Ju,0,Zu),new Lt(-Ju,0,Zu),new Lt(Zu,Ju,0),new Lt(-Zu,Ju,0)];function Ku(t){var e=Math.max(t.r,t.g,t.b),n=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return t.multiplyScalar(Math.pow(2,-n)),(n+128)/255}var $u=function(){function t(t){var e,n,i;this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=(e=Fu,n=new Float32Array(e),i=new Lt(0,1,0),new ws({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i},inputEncoding:{value:Hu[3e3]},outputEncoding:{value:Hu[3e3]}},vertexShader:"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}var e=t.prototype;return e.fromScene=function(t,e,n,i){void 0===e&&(e=0),void 0===n&&(n=.1),void 0===i&&(i=100),Yu=this._renderer.getRenderTarget();var r=this._allocateTargets();return this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r},e.fromEquirectangular=function(t){return this._fromTexture(t)},e.fromCubemap=function(t){return this._fromTexture(t)},e.compileCubemapShader=function(){null===this._cubemapShader&&(this._cubemapShader=ah(),this._compileMaterial(this._cubemapShader))},e.compileEquirectangularShader=function(){null===this._equirectShader&&(this._equirectShader=rh(),this._compileMaterial(this._equirectShader))},e.dispose=function(){this._blurMaterial.dispose(),null!==this._cubemapShader&&this._cubemapShader.dispose(),null!==this._equirectShader&&this._equirectShader.dispose();for(var t=0;t<Wu.length;t++)Wu[t].dispose()},e._cleanup=function(t){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Yu),t.scissorTest=!1,ih(t,0,0,t.width,t.height)},e._fromTexture=function(t){Yu=this._renderer.getRenderTarget();var e=this._allocateTargets(t);return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e},e._allocateTargets=function(t){var e={magFilter:f,minFilter:f,generateMipmaps:!1,type:_,format:1023,encoding:th(t)?t.encoding:Q,depthBuffer:!1},n=nh(e);return n.depthBuffer=!t,this._pingPongRenderTarget=nh(e),n},e._compileMaterial=function(t){var e=new kn(Wu[0],t);this._renderer.compile(e,ku)},e._sceneToCubeUV=function(t,e,n,i){var r=new Jn(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.outputEncoding,u=s.toneMapping;s.getClearColor(Xu),s.toneMapping=0,s.outputEncoding=Y,s.autoClear=!1;var h=!1,d=t.background;if(d){if(d.isColor){Gu.color.copy(d).convertSRGBToLinear(),t.background=null;var p=Ku(Gu.color);Gu.opacity=p,h=!0}}else{Gu.color.copy(Xu).convertSRGBToLinear();var f=Ku(Gu.color);Gu.opacity=f,h=!0}for(var m=0;m<6;m++){var v=m%3;0==v?(r.up.set(0,a[m],0),r.lookAt(o[m],0,0)):1==v?(r.up.set(0,0,a[m]),r.lookAt(0,o[m],0)):(r.up.set(0,a[m],0),r.lookAt(0,0,o[m])),ih(i,v*Nu,m>2?Nu:0,Nu,Nu),s.setRenderTarget(i),h&&s.render(Uu,r),s.render(t,r)}s.toneMapping=u,s.outputEncoding=l,s.autoClear=c},e._textureToCubeUV=function(t,e){var n=this._renderer;t.isCubeTexture?null==this._cubemapShader&&(this._cubemapShader=ah()):null==this._equirectShader&&(this._equirectShader=rh());var i=t.isCubeTexture?this._cubemapShader:this._equirectShader,r=new kn(Wu[0],i),a=i.uniforms;a.envMap.value=t,t.isCubeTexture||a.texelSize.value.set(1/t.image.width,1/t.image.height),a.inputEncoding.value=Hu[t.encoding],a.outputEncoding.value=Hu[e.texture.encoding],ih(e,0,0,3*Nu,2*Nu),n.setRenderTarget(e),n.render(r,ku)},e._applyPMREM=function(t){var e=this._renderer,n=e.autoClear;e.autoClear=!1;for(var i=1;i<zu;i++){var r=Math.sqrt(qu[i]*qu[i]-qu[i-1]*qu[i-1]),a=Qu[(i-1)%Qu.length];this._blur(t,i-1,i,r,a)}e.autoClear=n},e._blur=function(t,e,n,i,r){var a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)},e._halfBlur=function(t,e,n,i,r,a,o){var s=this._renderer,c=this._blurMaterial;"latitudinal"!==a&&"longitudinal"!==a&&console.error("blur direction must be either latitudinal or longitudinal!");var l=new kn(Wu[i],c),u=c.uniforms,h=ju[n]-1,d=isFinite(r)?Math.PI/(2*h):2*Math.PI/39,p=r/d,f=isFinite(r)?1+Math.floor(3*p):Fu;f>Fu&&console.warn("sigmaRadians, "+r+", is too large and will clip, as it requested "+f+" samples when the maximum is set to "+Fu);for(var m=[],v=0,g=0;g<Fu;++g){var y=g/p,x=Math.exp(-y*y/2);m.push(x),0==g?v+=x:g<f&&(v+=2*x)}for(var _=0;_<m.length;_++)m[_]=m[_]/v;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=m,u.latitudinal.value="latitudinal"===a,o&&(u.poleAxis.value=o),u.dTheta.value=d,u.mipInt.value=8-n,u.inputEncoding.value=Hu[t.texture.encoding],u.outputEncoding.value=Hu[t.texture.encoding];var b=ju[i];ih(e,3*Math.max(0,Nu-2*b),(0===i?0:2*Nu)+2*b*(i>4?i-8+4:0),3*b,2*b),s.setRenderTarget(e),s.render(l,ku)},t}();function th(t){return void 0!==t&&t.type===_&&(t.encoding===Y||t.encoding===Z||t.encoding===J)}function eh(){for(var t=[],e=[],n=[],i=8,r=0;r<zu;r++){var a=Math.pow(2,i);e.push(a);var o=1/a;r>4?o=Bu[r-8+4-1]:0==r&&(o=0),n.push(o);for(var s=1/(a-1),c=-s/2,l=1+s/2,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=new Float32Array(108),d=new Float32Array(72),p=new Float32Array(36),f=0;f<6;f++){var m=f%3*2/3-1,v=f>2?0:-1,g=[m,v,0,m+2/3,v,0,m+2/3,v+1,0,m,v,0,m+2/3,v+1,0,m,v+1,0];h.set(g,18*f),d.set(u,12*f);var y=[f,f,f,f,f,f];p.set(y,6*f)}var x=new Sn;x.setAttribute("position",new nn(h,3)),x.setAttribute("uv",new nn(d,2)),x.setAttribute("faceIndex",new nn(p,1)),t.push(x),i>4&&i--}return{_lodPlanes:t,_sizeLods:e,_sigmas:n}}function nh(t){var e=new Tt(3*Nu,3*Nu,t);return e.texture.mapping=l,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ih(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rh(){return new ws({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:new yt(1,1)},inputEncoding:{value:Hu[3e3]},outputEncoding:{value:Hu[3e3]}},vertexShader:"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function ah(){return new ws({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Hu[3e3]},outputEncoding:{value:Hu[3e3]}},vertexShader:"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function oh(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),pc.call(this,t),this.type="catmullrom",this.closed=!0}function sh(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),pc.call(this,t),this.type="catmullrom"}function ch(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),pc.call(this,t),this.type="catmullrom"}ac.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(ac.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Object.assign(Ec.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}}),oh.prototype=Object.create(pc.prototype),sh.prototype=Object.create(pc.prototype),ch.prototype=Object.create(pc.prototype),Object.assign(ch.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}}),du.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},au.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Object.assign(Js.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Vc.extractUrlBase(t)}}),Js.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Object.assign(Zl.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(Pt.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(Xt.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}}),ri.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)},Kl.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)},Object.assign(gt,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),gt.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),gt.ceilPowerOfTwo(t)}}),Object.assign(xt.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}}),Object.assign(ne.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),(new Lt).setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,a){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,a)},getInverse:function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}}),Pe.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)},Object.assign(At.prototype,{multiplyVector3:function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}}),Object.assign(ee.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}}),Object.assign(ke.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}}),Object.assign(ke,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ke.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ke.getNormal(t,e,n,i)}}),Object.assign(Ac.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new as(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ds(this,t)}}),Object.assign(yt.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Lt.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(St.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Ae.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(Ae.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.assign(kn.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}),Object.defineProperties(kn.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Object.defineProperties(Ba.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(qa.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),ka.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Object.defineProperty(ac.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}}),Jn.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),void 0!==e&&(this.filmGauge=e),this.setFocalLength(t)},Object.defineProperties(Lc.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}}),Object.defineProperties(nn.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===it},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(it)}}}),Object.assign(nn.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(!0===t?it:nt),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(Sn.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?"index"===t?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new nn(arguments[1],arguments[2])))},addDrawCall:function(t,e,n){void 0!==n&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(Sn.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.defineProperties(Wc.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}}),Object.defineProperties(Vl.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}}),Object.defineProperties(ma.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===it},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}}),Object.assign(ma.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(!0===t?it:nt),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(as.prototype,{getArrays:function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")}}),Object.assign(fa.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}}),Object.defineProperties(Gl.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),Object.defineProperties(Ke.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ze}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===t}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}}),Object.defineProperties(Ts.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(Ss.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}}),Object.defineProperties(Yn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}}),Object.assign(ua.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(ua.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=!0===t?Z:Y}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(ea.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Tt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}}),Object.defineProperties(gl.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var e=this;return(new rl).load(t,(function(t){e.setBuffer(t)})),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}}),Ml.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},Kn.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)},Kn.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)};var lh={merge:function(t,e,n){var i;console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."),e.isMesh&&(e.matrixAutoUpdate&&e.updateMatrix(),i=e.matrix,e=e.geometry),t.merge(e,i,n)},center:function(t){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),t.center()}};_t.crossOrigin=void 0,_t.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var r=new rc;r.setCrossOrigin(this.crossOrigin);var a=r.load(t,n,void 0,i);return e&&(a.mapping=e),a},_t.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var r=new nc;r.setCrossOrigin(this.crossOrigin);var a=r.load(t,n,void 0,i);return e&&(a.mapping=e),a},_t.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},_t.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};var uh={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:n}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=n),t.ACESFilmicToneMapping=4,t.AddEquation=i,t.AddOperation=2,t.AdditiveAnimationBlendMode=X,t.AdditiveBlending=2,t.AlphaFormat=1021,t.AlwaysDepth=1,t.AlwaysStencilFunc=519,t.AmbientLight=Fc,t.AmbientLightProbe=ol,t.AnimationClip=js,t.AnimationLoader=$s,t.AnimationMixer=Hl,t.AnimationObjectGroup=zl,t.AnimationUtils=Os,t.ArcCurve=sc,t.ArrayCamera=aa,t.ArrowHelper=Cu,t.Audio=gl,t.AudioAnalyser=Ml,t.AudioContext=il,t.AudioListener=vl,t.AudioLoader=rl,t.AxesHelper=Pu,t.AxisHelper=function(t){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Pu(t)},t.BackSide=1,t.BasicDepthPacking=3200,t.BasicShadowMap=0,t.BinaryTextureLoader=function(t){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new ic(t)},t.Bone=Va,t.BooleanKeyframeTrack=Fs,t.BoundingBoxHelper=function(t,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Eu(t,e)},t.Box2=Zl,t.Box3=Pt,t.Box3Helper=Au,t.BoxBufferGeometry=Wn,t.BoxGeometry=Wn,t.BoxHelper=Eu,t.BufferAttribute=nn,t.BufferGeometry=Sn,t.BufferGeometryLoader=qc,t.ByteType=1010,t.Cache=Xs,t.Camera=Zn,t.CameraHelper=_u,t.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")},t.CanvasTexture=xo,t.CatmullRomCurve3=pc,t.CineonToneMapping=3,t.CircleBufferGeometry=bo,t.CircleGeometry=bo,t.ClampToEdgeWrapping=d,t.Clock=ul,t.ClosedSplineCurve3=oh,t.Color=Ze,t.ColorKeyframeTrack=Hs,t.CompressedTexture=yo,t.CompressedTextureLoader=tc,t.ConeBufferGeometry=Mo,t.ConeGeometry=Mo,t.CubeCamera=Kn,t.CubeReflectionMapping=a,t.CubeRefractionMapping=o,t.CubeTexture=$n,t.CubeTextureLoader=nc,t.CubeUVReflectionMapping=l,t.CubeUVRefractionMapping=u,t.CubicBezierCurve=gc,t.CubicBezierCurve3=yc,t.CubicInterpolant=Ds,t.CullFaceBack=1,t.CullFaceFront=2,t.CullFaceFrontBack=3,t.CullFaceNone=0,t.Curve=ac,t.CurvePath=Tc,t.CustomBlending=5,t.CustomToneMapping=5,t.CylinderBufferGeometry=wo,t.CylinderGeometry=wo,t.Cylindrical=Xl,t.DataTexture=ei,t.DataTexture2DArray=Ti,t.DataTexture3D=Ei,t.DataTextureLoader=ic,t.DataUtils=Du,t.DecrementStencilOp=7683,t.DecrementWrapStencilOp=34056,t.DefaultLoadingManager=Zs,t.DepthFormat=L,t.DepthStencilFormat=R,t.DepthTexture=_o,t.DirectionalLight=zc,t.DirectionalLightHelper=gu,t.DiscreteInterpolant=Bs,t.DodecahedronBufferGeometry=To,t.DodecahedronGeometry=To,t.DoubleSide=2,t.DstAlphaFactor=206,t.DstColorFactor=208,t.DynamicBufferAttribute=function(t,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new nn(t,e).setUsage(it)},t.DynamicCopyUsage=35050,t.DynamicDrawUsage=it,t.DynamicReadUsage=35049,t.EdgesGeometry=Co,t.EdgesHelper=function(t,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new so(new Co(t.geometry),new Ka({color:void 0!==e?e:16777215}))},t.EllipseCurve=oc,t.EqualDepth=4,t.EqualStencilFunc=514,t.EquirectangularReflectionMapping=s,t.EquirectangularRefractionMapping=c,t.Euler=ue,t.EventDispatcher=dt,t.ExtrudeBufferGeometry=as,t.ExtrudeGeometry=as,t.Face3=Je,t.Face4=function(t,e,n,i,r,a,o){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new Je(t,e,n,r,a,o)},t.FaceColors=1,t.FileLoader=Ks,t.FlatShading=1,t.Float16BufferAttribute=hn,t.Float32Attribute=function(t,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new dn(t,e)},t.Float32BufferAttribute=dn,t.Float64Attribute=function(t,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new pn(t,e)},t.Float64BufferAttribute=pn,t.FloatType=M,t.Fog=pa,t.FogExp2=da,t.Font=tl,t.FontLoader=nl,t.FrontSide=0,t.Frustum=ri,t.GLBufferAttribute=kl,t.GLSL1="100",t.GLSL3=rt,t.GammaEncoding=J,t.GeometryUtils=lh,t.GreaterDepth=6,t.GreaterEqualDepth=5,t.GreaterEqualStencilFunc=518,t.GreaterStencilFunc=516,t.GridHelper=du,t.Group=oa,t.HalfFloatType=S,t.HemisphereLight=Rc,t.HemisphereLightHelper=hu,t.HemisphereLightProbe=al,t.IcosahedronBufferGeometry=ss,t.IcosahedronGeometry=ss,t.ImageBitmapLoader=Qc,t.ImageLoader=ec,t.ImageUtils=_t,t.ImmediateRenderObject=$l,t.IncrementStencilOp=7682,t.IncrementWrapStencilOp=34055,t.InstancedBufferAttribute=jc,t.InstancedBufferGeometry=Wc,t.InstancedInterleavedBuffer=Ul,t.InstancedMesh=Qa,t.Int16Attribute=function(t,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new sn(t,e)},t.Int16BufferAttribute=sn,t.Int32Attribute=function(t,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new ln(t,e)},t.Int32BufferAttribute=ln,t.Int8Attribute=function(t,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new rn(t,e)},t.Int8BufferAttribute=rn,t.IntType=1013,t.InterleavedBuffer=ma,t.InterleavedBufferAttribute=ya,t.Interpolant=Is,t.InterpolateDiscrete=G,t.InterpolateLinear=U,t.InterpolateSmooth=k,t.InvertStencilOp=5386,t.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")},t.KeepStencilOp=et,t.KeyframeTrack=zs,t.LOD=Ba,t.LatheBufferGeometry=cs,t.LatheGeometry=cs,t.Layers=pe,t.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")},t.LessDepth=2,t.LessEqualDepth=3,t.LessEqualStencilFunc=515,t.LessStencilFunc=513,t.Light=Lc,t.LightProbe=Uc,t.Line=ro,t.Line3=Kl,t.LineBasicMaterial=Ka,t.LineCurve=xc,t.LineCurve3=_c,t.LineDashedMaterial=Cs,t.LineLoop=co,t.LinePieces=1,t.LineSegments=so,t.LineStrip=0,t.LinearEncoding=Y,t.LinearFilter=g,t.LinearInterpolant=Ns,t.LinearMipMapLinearFilter=1008,t.LinearMipMapNearestFilter=1007,t.LinearMipmapLinearFilter=x,t.LinearMipmapNearestFilter=y,t.LinearToneMapping=1,t.Loader=Js,t.LoaderUtils=Vc,t.LoadingManager=Ys,t.LogLuvEncoding=3003,t.LoopOnce=2200,t.LoopPingPong=2202,t.LoopRepeat=2201,t.LuminanceAlphaFormat=1025,t.LuminanceFormat=1024,t.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t.Material=Ke,t.MaterialLoader=kc,t.Math=gt,t.MathUtils=gt,t.Matrix3=xt,t.Matrix4=ne,t.MaxEquation=104,t.Mesh=kn,t.MeshBasicMaterial=$e,t.MeshDepthMaterial=$r,t.MeshDistanceMaterial=ta,t.MeshFaceMaterial=function(t){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),t},t.MeshLambertMaterial=Ls,t.MeshMatcapMaterial=Rs,t.MeshNormalMaterial=As,t.MeshPhongMaterial=Ts,t.MeshPhysicalMaterial=Ss,t.MeshStandardMaterial=Ms,t.MeshToonMaterial=Es,t.MinEquation=103,t.MirroredRepeatWrapping=p,t.MixOperation=1,t.MultiMaterial=function(t){return void 0===t&&(t=[]),console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),t.isMultiMaterial=!0,t.materials=t,t.clone=function(){return t.slice()},t},t.MultiplyBlending=4,t.MultiplyOperation=0,t.NearestFilter=f,t.NearestMipMapLinearFilter=1005,t.NearestMipMapNearestFilter=1004,t.NearestMipmapLinearFilter=v,t.NearestMipmapNearestFilter=m,t.NeverDepth=0,t.NeverStencilFunc=512,t.NoBlending=0,t.NoColors=0,t.NoToneMapping=0,t.NormalAnimationBlendMode=q,t.NormalBlending=1,t.NotEqualDepth=7,t.NotEqualStencilFunc=517,t.NumberKeyframeTrack=Gs,t.Object3D=Ae,t.ObjectLoader=Xc,t.ObjectSpaceNormalMap=1,t.OctahedronBufferGeometry=ls,t.OctahedronGeometry=ls,t.OneFactor=201,t.OneMinusDstAlphaFactor=207,t.OneMinusDstColorFactor=209,t.OneMinusSrcAlphaFactor=205,t.OneMinusSrcColorFactor=203,t.OrthographicCamera=Nc,t.PCFShadowMap=1,t.PCFSoftShadowMap=2,t.PMREMGenerator=$u,t.ParametricBufferGeometry=us,t.ParametricGeometry=us,t.Particle=function(t){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Oa(t)},t.ParticleBasicMaterial=function(t){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new lo(t)},t.ParticleSystem=function(t,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new mo(t,e)},t.ParticleSystemMaterial=function(t){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new lo(t)},t.Path=Ec,t.PerspectiveCamera=Jn,t.Plane=Pe,t.PlaneBufferGeometry=si,t.PlaneGeometry=si,t.PlaneHelper=Lu,t.PointCloud=function(t,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new mo(t,e)},t.PointCloudMaterial=function(t){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new lo(t)},t.PointLight=Dc,t.PointLightHelper=su,t.Points=mo,t.PointsMaterial=lo,t.PolarGridHelper=pu,t.PolyhedronBufferGeometry=So,t.PolyhedronGeometry=So,t.PositionalAudio=wl,t.PropertyBinding=Bl,t.PropertyMixer=Sl,t.QuadraticBezierCurve=bc,t.QuadraticBezierCurve3=wc,t.Quaternion=At,t.QuaternionKeyframeTrack=ks,t.QuaternionLinearInterpolant=Us,t.REVISION=n,t.RGBADepthPacking=3201,t.RGBAFormat=A,t.RGBAIntegerFormat=1033,t.RGBA_ASTC_10x10_Format=37819,t.RGBA_ASTC_10x5_Format=37816,t.RGBA_ASTC_10x6_Format=37817,t.RGBA_ASTC_10x8_Format=37818,t.RGBA_ASTC_12x10_Format=37820,t.RGBA_ASTC_12x12_Format=37821,t.RGBA_ASTC_4x4_Format=37808,t.RGBA_ASTC_5x4_Format=37809,t.RGBA_ASTC_5x5_Format=37810,t.RGBA_ASTC_6x5_Format=37811,t.RGBA_ASTC_6x6_Format=37812,t.RGBA_ASTC_8x5_Format=37813,t.RGBA_ASTC_8x6_Format=37814,t.RGBA_ASTC_8x8_Format=37815,t.RGBA_BPTC_Format=36492,t.RGBA_ETC2_EAC_Format=H,t.RGBA_PVRTC_2BPPV1_Format=z,t.RGBA_PVRTC_4BPPV1_Format=B,t.RGBA_S3TC_DXT1_Format=P,t.RGBA_S3TC_DXT3_Format=O,t.RGBA_S3TC_DXT5_Format=I,t.RGBDEncoding=tt,t.RGBEEncoding=Q,t.RGBEFormat=1023,t.RGBFormat=E,t.RGBIntegerFormat=1032,t.RGBM16Encoding=$,t.RGBM7Encoding=K,t.RGB_ETC1_Format=36196,t.RGB_ETC2_Format=F,t.RGB_PVRTC_2BPPV1_Format=N,t.RGB_PVRTC_4BPPV1_Format=D,t.RGB_S3TC_DXT1_Format=C,t.RGFormat=1030,t.RGIntegerFormat=1031,t.RawShaderMaterial=ws,t.Ray=ee,t.Raycaster=Vl,t.RectAreaLight=Hc,t.RedFormat=1028,t.RedIntegerFormat=1029,t.ReinhardToneMapping=2,t.RepeatWrapping=h,t.ReplaceStencilOp=7681,t.ReverseSubtractEquation=102,t.RingBufferGeometry=hs,t.RingGeometry=hs,t.SRGB8_ALPHA8_ASTC_10x10_Format=37851,t.SRGB8_ALPHA8_ASTC_10x5_Format=37848,t.SRGB8_ALPHA8_ASTC_10x6_Format=37849,t.SRGB8_ALPHA8_ASTC_10x8_Format=37850,t.SRGB8_ALPHA8_ASTC_12x10_Format=37852,t.SRGB8_ALPHA8_ASTC_12x12_Format=37853,t.SRGB8_ALPHA8_ASTC_4x4_Format=37840,t.SRGB8_ALPHA8_ASTC_5x4_Format=37841,t.SRGB8_ALPHA8_ASTC_5x5_Format=37842,t.SRGB8_ALPHA8_ASTC_6x5_Format=37843,t.SRGB8_ALPHA8_ASTC_6x6_Format=37844,t.SRGB8_ALPHA8_ASTC_8x5_Format=37845,t.SRGB8_ALPHA8_ASTC_8x6_Format=37846,t.SRGB8_ALPHA8_ASTC_8x8_Format=37847,t.Scene=fa,t.SceneUtils=uh,t.ShaderChunk=ci,t.ShaderLib=ui,t.ShaderMaterial=Yn,t.ShadowMaterial=bs,t.Shape=Ac,t.ShapeBufferGeometry=ds,t.ShapeGeometry=ds,t.ShapePath=Kc,t.ShapeUtils=ns,t.ShortType=1011,t.Skeleton=qa,t.SkeletonHelper=au,t.SkinnedMesh=ka,t.SmoothShading=2,t.Sphere=Xt,t.SphereBufferGeometry=ps,t.SphereGeometry=ps,t.Spherical=ql,t.SphericalHarmonics3=Gc,t.Spline=ch,t.SplineCurve=Mc,t.SplineCurve3=sh,t.SpotLight=Oc,t.SpotLightHelper=eu,t.Sprite=Oa,t.SpriteMaterial=xa,t.SrcAlphaFactor=204,t.SrcAlphaSaturateFactor=210,t.SrcColorFactor=202,t.StaticCopyUsage=35046,t.StaticDrawUsage=nt,t.StaticReadUsage=35045,t.StereoCamera=ll,t.StreamCopyUsage=35042,t.StreamDrawUsage=35040,t.StreamReadUsage=35041,t.StringKeyframeTrack=Vs,t.SubtractEquation=101,t.SubtractiveBlending=3,t.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t.TangentSpaceNormalMap=0,t.TetrahedronBufferGeometry=fs,t.TetrahedronGeometry=fs,t.TextBufferGeometry=ms,t.TextGeometry=ms,t.Texture=wt,t.TextureLoader=rc,t.TorusBufferGeometry=vs,t.TorusGeometry=vs,t.TorusKnotBufferGeometry=gs,t.TorusKnotGeometry=gs,t.Triangle=ke,t.TriangleFanDrawMode=2,t.TriangleStripDrawMode=1,t.TrianglesDrawMode=0,t.TubeBufferGeometry=ys,t.TubeGeometry=ys,t.UVMapping=r,t.Uint16Attribute=function(t,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new cn(t,e)},t.Uint16BufferAttribute=cn,t.Uint32Attribute=function(t,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new un(t,e)},t.Uint32BufferAttribute=un,t.Uint8Attribute=function(t,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new an(t,e)},t.Uint8BufferAttribute=an,t.Uint8ClampedAttribute=function(t,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new on(t,e)},t.Uint8ClampedBufferAttribute=on,t.Uniform=Gl,t.UniformsLib=li,t.UniformsUtils=Xn,t.UnsignedByteType=_,t.UnsignedInt248Type=T,t.UnsignedIntType=w,t.UnsignedShort4444Type=1017,t.UnsignedShort5551Type=1018,t.UnsignedShort565Type=1019,t.UnsignedShortType=b,t.VSMShadowMap=3,t.Vector2=yt,t.Vector3=Lt,t.Vector4=St,t.VectorKeyframeTrack=Ws,t.Vertex=function(t,e,n){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new Lt(t,e,n)},t.VertexColors=2,t.VideoTexture=go,t.WebGL1Renderer=ha,t.WebGLCubeRenderTarget=ti,t.WebGLMultisampleRenderTarget=Et,t.WebGLRenderTarget=Tt,t.WebGLRenderTargetCube=function(t,e,n){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new ti(t,n)},t.WebGLRenderer=ua,t.WebGLUtils=ra,t.WireframeGeometry=xs,t.WireframeHelper=function(t,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new so(new xs(t.geometry),new Ka({color:void 0!==e?e:16777215}))},t.WrapAroundEnding=j,t.XHRLoader=function(t){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Ks(t)},t.ZeroCurvatureEnding=V,t.ZeroFactor=200,t.ZeroSlopeEnding=W,t.ZeroStencilOp=0,t.sRGBEncoding=Z,Object.defineProperty(t,"__esModule",{value:!0})}));



/** Defines a Logic Event */
       class Event {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Event instance.
	 * @param type The event type.
	 * @param owner The event owner.
	 * @param data The event data. */
	constructor(type, owner, data) {


		// ---------------------------------------------------------- PUBLIC FIELDS

		/** Marks the object as an Event. */
		this.isEvent = true;
		this._type = type;
		this._owner = owner;
		this._data = data;
		this._listeners = [];
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The event type. */
	get type() { return this._type; }

	/** The event owner. */
	get owner() { return this._owner; }

	/** The event data. */
	get data() { return this._data; }

	/** The event listeners. */
	get listeners() { return this._listeners; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Adds a listener for the event.
	 * @param listener The listener function to add. */
	add(listener) {
		if (!this._listeners.includes(listener))
			this._listeners.push(listener);
	}


	/** Removes a listener for the event.
	 * @param listener The listener function to add. */
	removes(listener) {
		this._listeners = this._listeners.filter((l) => { return l != listener; });
	}


	/** Triggers the event.
	 * @param target The object that triggers the event.
	 * @param data Additional event data. */
	trigger(target, data) {
		for (let listener of this._listeners) {
			let captured = listener(this, target, data);
			if (captured)
				break; // If captured, stop broadcasting the event
		}
	}
}



/** Contains the metadata of a data type.
 * Provides a way to handle reflection and serialization in different contexts
 * (even after the code is transpiled to Javascript). */
       class Type {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Type class.
	 * @param name The name of the data type.
	 * @param innerType The Javascript type.
	 * @param parent The parent data type. */
	constructor(name, innerType, parent) {

		// Store the given name and add this instance to the global record
		this._name = name;
		if (!Type._record[name])
			Type._record[name] = this;
		else
			throw Error('Repeated data type name: "' + name + '"');

		// If there is a parent type, store the reference and create a link
		if (parent) {
			this._parent = parent;
			this._parent.children.push(this);
		}

		// Initialize the list of child types
		this._children = [];

		// Initialize the list of instances of the data type
		// this._instances = [];
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The global list of Type instances. */
	static get record() { return this._record; }

	/** The name of the data type. */
	get name() { return this._name; }

	/** The list of instances of the data type. */
	get instances() { return this._instances; }

	/** The parent data type. */
	get parent() { return this._parent; }

	/** The children data types. */
	get children() { return this._children; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Check if the type is (or inherits from) another.
	 * @param type The type to check against.
	 * @returns A boolean indicating whether the types are the same or not. */
	is(type) {
		let t = this;
		while (t) {
			if (t == type)
				return true;
			t = t._parent;
		}
		return false;
	}
}

// --------------------------------------------------------- PRIVATE FIELDS

/** The global list of Type instances. */
Type._record = {};








/** Defines a data item (often called a datum) in a graph structure .
 * Provides a way to store information in a complex way. */
       class Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Item class.
	 * @param name The name of the data item.
	 * @param parent The parent data item. */
	constructor(name, parent) {

		// Obtain the type of item from the static property
		let type = this.constructor["type"], className = this.constructor.name;
		if (type && type instanceof Type)
			this._type = type;
		else
			throw Error("No type data defined for class '" + className +
				"'. Remember to add it through the 'type' static property.");

		// Check the name of the item
		if (name && typeof (name) && name.length > 0)
			this._name = name;
		else
			name = type.name;

		// If there is a parent type, store the reference and create a link
		if (parent && parent instanceof Item) {
			this._parent = parent;
			parent._children.add(this);
		}

		// Initialize the list of children and of linked items
		this._children = new Collection([Item.type], this);
		this._links = new Collection([Item.type], this);

		// Create the events
		this._onModified = new Event("modified", this);
		this._onPreUpdate = new Event("pre-update", this);
		this._onPostUpdate = new Event("post-update", this);

		// Set the update state to false and set the update time
		this.updated = false;
		this._updateTime = Date.now();

		// Register this instance in the list of instances of the data type
		// this._type.register(this);

		// Trigger the onCreation event
		Item.onCreation.trigger(this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The type of the data item. */
	get type() { return this._type; }

	/** The name of the data item. */
	get name() { return this._name; }

	/** The parent of the data item. */
	get parent() { return this._parent; }

	/** The child data items. */
	get children() { return this._children; }

	/** The linked data items. */
	get links() { return this._links; }

	/** The update state of the item. */
	get updated() { return this._updated; }
	set updated(value) {

		// If the value is the same as the current update state
		if (this._updated == value)
			return;

		// Set the update state and update the time
		this._updated = value;
		this._updateTime = Date.now();

		// Trigger the "modified" event
		this.onModified.trigger(this, value);
		Item.onModified.trigger(this, value);

		// Show a message on console
		// console.log("Needs update: " + this._name);

		// Propagate the event upwards in the hierarchy and to the links
		if (value == false) {
			if (this._parent)
				this._parent.updated = false;
			for (let link of this._links)
				link.updated = false;
		}
	}

	/** The last update time. */
	get updateTime() { return this._updateTime; }

	/** A global event triggered when the item is modified. */
	get onModified() { return this._onModified; }

	/** An event triggered before the item is updated. */
	get onPreUpdate() { return this._onPreUpdate; }

	/** An event triggered after the item is updated. */
	get onPostUpdate() { return this._onPostUpdate; }

	/** A global event triggered when a item is modified. */
	static get onModified() { return Item._onModified; }

	/** An event triggered before a item is updated. */
	static get onPreUpdate() { return Item._onPreUpdate; }

	/** An event triggered after a item is updated. */
	static get onPostUpdate() { return Item._onPostUpdate; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Item instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Trigger the pre-update event 
		this._onPreUpdate.trigger(this);
		Item._onPreUpdate.trigger(this);

		// Update the children
		for (let child of this._children)
			child.update(deltaTime, forced);

		// Mark this item as updated
		this._updated = true;

		// Trigger the post-update event 
		this._onPostUpdate.trigger(this);
		Item._onPostUpdate.trigger(this);
	}


	destroy() {
		if (this._parent)
			this._parent._children.remove(this);
		while (this.children.count > 0)
			this._children[0].destroy();
	}

	/** Serializes the Item instance.
	 * @param format The serialization format.
	 * @return The serialized data. */
	serialize(format) {
		return Serialization.serialize(this, format);
	}


	/** Deserializes the Item instance.
	 * @param data The data to deserialize. */
	deserialize(data = {}) { Serialization.deserialize(this, data); }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Item class. */
Item.type = new Type("item", Item);

/** A global event triggered when a data item is modified. */
Item._onModified = new Event("modified");

/** A global event triggered before a data item is updated. */
Item._onPreUpdate = new Event("pre-update");

/** A global event triggered when a data item is updated. */
Item._onPostUpdate = new Event("post-update");


// ---------------------------------------------------------- PUBLIC EVENTS

/** A global event triggered when a data item is created. */
Item.onCreation = new Event("creation");








/** Manages the GeoPose Sandbox. */
       class GeoPoseSandbox extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseSandbox instance.
	 * @param data The initialization data. */
	constructor(data) {

		// Call the parent class constructor
		super("root");

		// Create the child items
		this._spaces = new Collection([Space.type], this);
		this._users = new Collection([User.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// Add the instance to the list
		GeoPoseSandbox._instances.push(this);

		// Create the basic data items, if not defined
		if (this._spaces.count == 0)
			this._spaces.add(new Space("DefaultSpace", this));
		if (this._users.count == 0)
			this._users.add(new User("DefaultUser", this));

		// Show a initialization message on console
		console.log(GeoPoseSandbox.id + " " +
			GeoPoseSandbox.version + " Initialized");
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the GeoPose Sandbox. */
	static get id() { return "GeoPose Sandbox"; }

	/** The version number of the GeoPose Sandbox. */
	static get version() { return "0.1"; }

	/** The list of GeoPoseSandbox instances. */
	static get instances() {
		return GeoPoseSandbox._instances;
	}

	/** The list of GeoPoseSandbox instances. */
	static get autoInit() { return GeoPoseSandbox._autoInit; }
	static set autoInit(value) { GeoPoseSandbox._autoInit = value; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get spaces() { return this._spaces; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get users() { return this._users; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Initializes a new GeoPoseSandbox instance.
	 * @param params The initialization parameters.
	 * @returns The new GeoPoseSandbox instance. */
	static init(params = {}) { return new GeoPoseSandbox(params); }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseWidget class. */
GeoPoseSandbox.type = new Type("root", GeoPoseSandbox, Item.type);

// --------------------------------------------------------- PRIVATE FIELDS

/** The global list of GeoPoseSandbox instances. */
GeoPoseSandbox._instances = [];

/** Indicates if the GeoPose Sandbox should be automatically initialized.
 * This value is true by default to allow custom HTML elements. */
GeoPoseSandbox._autoInit = true;


// When the page is completely loaded, unless otherwise specified otherwise, 
// automatically initialize the Sandbox (to allow the use of custom 
// HTML elements).
window.addEventListener("load", () => {
	if (GeoPoseSandbox.autoInit && GeoPoseSandbox.instances.length == 0)
		GeoPoseSandbox.init();
});




/** Defines a collection of data items. */
       class Collection {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Collection instance.
	 * @param types The types of items in the collection.
	 * @param owner The owner the data collection. */
	constructor(types, owner) {

		// Check the 
		this._types = types;

		// Store the owner of the data collection
		this._owner = owner;

		// Initialize the array of items
		this._items = [];
		this._count = 0;
	}


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The number of items of the data collection. */
	get count() { return this._count; }

	/** The owner of the data collection. */
	get owner() { return this._owner; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets a data item by index.
	 * @param index The index of the item to get.
	 * @returns The item with the specified index. */
	getByIndex(index) {
		if (index >= 0 && index < this._items.length)
			return this._items[index];
		return undefined;
	}


	/** Gets a data item by name.
	 * @param index The name of the item to get.
	 * @returns The item with the specified name. */
	getByName(name) {
		for (let item of this._items)
			if (item.name == name)
				return item;
		return undefined;
	}


	/** Adds a new item to the end of the list.
	 * @param item The item to add.
	 * @param position The position where to add the item (by default, at the
	 * end). Negative values imply counting from the end of the list.
	 * @returns The added item.  */
	add(item, position) {

		// If no position is defined, just add it to the end of the array
		if (position == undefined)
			this._items.push(item);
		else { // Otherwise, calculate the index from the position
			let index = 0, size = this._items.length;
			if (position > 0) {
				index = position;
				if (index > size)
					index = size; // Prevent out_of_bounds errors
			}
			else { // Negative values imply counting backwards
				index = size - position;
				if (index < 0)
					index = 0; // Prevent out_of_bounds errors
			}

			// Insert the item in the right position
			this._items.splice(index, 0, item);
		}

		// Remember to increase the counter 
		this._count++;
	}


	/** Removes an item from the list.
	 * @param item The item to remove. */
	remove(item) {
		for (let itemIndex = 0; itemIndex < this._count; itemIndex++) {
			if (this._items[itemIndex] == item) {
				this._items.splice(itemIndex, 1);
				itemIndex--;
				this._count--;
			}
		}
	}


	[Symbol.iterator]() {
		let pointer = 0, items = this._items;
		return {
			next() {
				if (pointer < items.length)
					return { done: false, value: items[pointer++] };
				else
					return { done: true, value: null };
			}
		};
	}
}



/** Provides multiple methods to serialize and deserialize data items. */
       class Serialization {

	/** Serializes a Item instance into an object.
	 * @param item The item to serialize.
	 * @param item The format to use in the serialization.
	 * @return The serialized data. */
	static serialize(item, format) {
		let data = {};

		return data;
	}


	/** Deserializes generic data into a data Item.
	 * @param item The data item to store the data.
	 * @param data The data to deserialize. */
	static deserialize(item, data) {

		// If the data is a string, check if it is JSON or CSV data
		if (typeof data == "string") {

			// Start parsing it as a CSV string
			let parsed;
			try {
				parsed = Serialization.fromCSV(data);
			}
			catch (_a) { }
			if (!parsed)
				try {
					parsed = Serialization.fromCSV(data);
				}
				catch (_b) { }
			if (!parsed)
				try {
					parsed = Serialization.fromJSON(data);
				}
				catch (_c) { }
			if (!parsed)
				return; // If no system has been successful
			data = parsed;
		}

		// If the data is an array, try to parse it value by value
		if (Array.isArray(data)) {
			for (let [index, dataPart] of data) {
				if (index >= item.children.count)
					return;
				item.children[index].deserialize(dataPart);
			}
		}

		// If the data is an object, analyze it key by key
		else
			for (let key in data) {
				let dataPart = data[key];
				if (dataPart == undefined)
					continue;
				let child = item.children.getByName(key);
				if (child)
					child.deserialize(dataPart);
			}
	}

	/** Parses a string.
	* @param s The string to parse.
	* @returns The CSV data. */
	static fromWords(s, separator = ' ') {
		let data = [];

		return data;
	}

	/** Parses a CSV (Comma-Separated-Values) string.
	 * @param s The string to parse.
	 * @returns The parsed data. */
	static fromCSV(s) {
		let data = [];

		return data;
	}



	/** Parses a JSON (JavaScript-Object-Notation) string.
	 * @param s The string to parse.
	 * @returns The parsed data. */
	static fromJSON(s) { return JSON.parse(s); }


	/** Converts an object into a CSV (Comma-Separated-Values) string.
	 * @param data The data object to convert.
	 * @returns The CSV representation of the object. */
	static toCSV(data) {

		// Returns the resulting string
		let string = "";

		// Returns the resulting string
		return string;
	}


	/** Converts an object into a JSON (JavaScript-Object-Notation) string.
	 * @param data The data object to convert.
	 * @returns The JSON representation of the object. */
	static toJSON(data, maxIndentation = 0) {

		// Returns the resulting string
		let string = "";

		// Returns the resulting string
		return string;
	}


	/** Serializes a data item into a string.
	 * @param item The data item to serialize to a string.
	 * @return The resulting string. */
	static toString(item) {
		let s = "";

		return s;
	}
}

       var SerializationFormat;
(function (SerializationFormat) {
	SerializationFormat[SerializationFormat["CSV"] = 0] = "CSV";
	SerializationFormat[SerializationFormat["JSON"] = 1] = "JSON";
	SerializationFormat[SerializationFormat["XML"] = 2] = "XML";
})(SerializationFormat || (SerializationFormat = {}));





/** Defines a complex data item. */
       class Complex extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the complex class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Indicates whether all the the values are the default or not. */
	get isDefault() {
		for (let component of this._components)
			if (!component.isDefault)
				return false;
		return true;
	}

	/** Indicates whether the value is undefined or not. */
	get isUndefined() {
		for (let component of this._components)
			if (!component.isUndefined)
				return false;
		return true;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Complex class. */
Complex.type = new Type("complex", Complex, Item.type);






/** Defines a simple data item. */
       class Simple extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Simple class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		/** The valid values of the simple data item. */
		this._validValues = undefined;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The current value of the Simple data type.*/
	get value() {
		if (this._value == undefined)
			return this._defaultValue;
		return this._value;
	}
	set value(newValue) {
		if (this._value == newValue)
			return;
		if (!this.checkValue(newValue))
			throw Error('Invalid value "' + newValue + '" for: ' + this.name);
		this._value = newValue;
		this.updated = false;

		// Show a message on console
		// console.log("Value: " + this._name + " = " + this._value);
	}

	/** The default value of the Simple data type. */
	get defaultValue() { return this._defaultValue; }
	set defaultValue(newDefaultValue) {
		if (this._defaultValue == newDefaultValue)
			return;
		if (!this.checkValue(newDefaultValue))
			throw Error('Invalid default value "' + newDefaultValue +
				'" for: ' + this._name);
		this._defaultValue = newDefaultValue;
		this.updated = false;
	}

	/** The valid values of the Simple data type.*/
	get validValues() { return this._validValues; }
	set validValues(newValidValues) {
		this._validValues = newValidValues;
		if (!this.checkValue(this._value))
			throw Error('Invalid value "' +
				this._value + '" for: ' + this._name);
	}

	/** The index of the value in the valid Simple data type. */
	get validValueIndex() {
		if (this.validValues != undefined && this.value != undefined)
			return this.validValues.indexOf(this.value);
		return undefined;
	}

	/** Indicates whether the value is the default or not. */
	get isDefault() { return (this._value == this._defaultValue); }

	/** Indicates whether the value is undefined or not. */
	get isUndefined() { return (this._value == undefined); }

	/** An event triggered if the value is modified. */
	get onModified() { return this._onModified; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Obtains the value of the Simple data type
	 * @return The value of the Type. */
	valueOf() { return this.value; }


	/** Checks if the value is valid for the Simple data type,
	 * @param value The value to check.
	 * @returns A boolean value indicating whether the value is valid or not. */
	checkValue(value) {

		// Accept undefined values
		if (value == undefined)
			return true;

		// Check the list of valid values
		if (this._validValues && !this._validValues.includes(value))
			return false;

		// If the value has not been rejected, return true
		return true;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Simple class. */
Simple.type = new Type("simple", Simple, Item.type);






/** Defines a Numeric data item. */
       class Number extends Simple {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Number class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Set the values of the properties
		this._value = undefined;
		this._defaultValue = 0;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The minimum possible value of Number. */
	get min() { return this._min; }
	set min(newMin) {
		if (newMin == undefined) {
			this._min = newMin;
			return;
		}
		if (this._max != undefined && newMin > this._max)
			this._max = newMin;
		if (this._value != undefined && this._value < newMin)
			this._value = newMin;
		this._min = newMin;
		this.updated = false;
	}

	/** The maximum possible value of the Number. */
	get max() { return this._max; }
	set max(newMax) {
		if (newMax == undefined) {
			this._max = newMax;
			return;
		}
		if (this._min != undefined && newMax < this._min)
			this._min = newMax;
		if (this._value != undefined && this._value > newMax)
			this._value = newMax;
		this._max = newMax;
		this.updated = false;
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Serializes the Number instance.
	 * @return The serialized data. */
	serialize() { return this._value; }


	/** Deserializes the Number instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this.min = data.min;
			this.max = data.max;
			this.defaultValue = data.defaultValue;
			this.value = data.value;
		}
		else if (typeof data !== "number")
			this.value = parseFloat(data);
		else
			this.value = data;
	}


	/** Checks if the value is valid for this Number instance.
	 * @param value The value to check.
	 * @returns A boolean value indicating whether the value is valid or not. */
	checkValue(value) {

		// Check the range 
		if (this._min != undefined && value < this._min)
			return false;
		if (this._max != undefined && value > this._max)
			return false;

		// If the value has not been rejected, check the 
		return super.checkValue(value);
	}


	/** Obtains the string representation of the Number instance.
	 * @returns The string representation of the Number instance. */
	toString() { return this.value.toFixed() || ""; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Number class. */
Number.type = new Type("number", Number, Simple.type);






/** Defines an RGBA color. */
       class Color extends Complex {


	// ------------------------------------------------------------ CONSTRUCTOR

	/** Initializes a new instance of the Color class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._r = new Number("r", this, { min: 0, max: 1, defaultValue: 0 });
		this._g = new Number("g", this, { min: 0, max: 1, defaultValue: 0 });
		this._b = new Number("b", this, { min: 0, max: 1, defaultValue: 0 });
		this._a = new Number("a", this, { min: 0, max: 1, defaultValue: 1 });

		// Define the components of the Complex type
		this._components = [this._r, this._g, this._b, this._a];

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The red component of the color. */
	get r() { return this._r; }

	/** The green component of the color. */
	get g() { return this._g; }

	/** The blue component of the color. */
	get b() { return this._b; }

	/** The alpha component of the color. */
	get a() { return this._a; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Color instance.
	* @returns An object with the values of the Color instance. */
	getValues() {
		return { r: this._r.value, g: this._g.value, b: this._b.value,
			a: this._a.value };
	}


	/** Sets the values of the Color instance.
	 * @param r The value of the Red component.
	 * @param g The value of the Green component.
	 * @param b The value of the Blue component.
	 * @param a The value of the Alpha component. */
	setValues(r = 0, g = 0, b = 0, a = 1) {
		this._r.value = r;
		this._g.value = g;
		this._b.value = b;
		this._a.value = a;
	}


	/** Obtains the string representation of the Color instance.
	 * @returns The string representation of the Color instance. */
	toString() {
		return "rgb(" + this._r + ", " + this._g + ", " + this._b + ")";
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Color class. */
Color.type = new Type("color", Color, Complex.type);








/** Defines the Euler orientation.
 * @see https://en.wikipedia.org/wiki/Euler_angles */
       class Euler extends Complex {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Euler class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent constructor
		super(name, parent);

		// Create the child items
		this._x = new Angle("x", this, 0);
		this._y = new Angle("y", this, 0);
		this._z = new Angle("z", this, 0);
		this._order = new String("order", this, "XYZ");

		// Define the components of the Complex type
		this._components = [this._x, this._y, this._z];

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in the X axis. */
	get x() { return this._x; }

	/** The Angle in the Y axis. */
	get y() { return this._y; }

	/** The Angle in the Z axis. */
	get z() { return this._z; }

	/** The order of application of axis rotation. */
	get order() { return this._order; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Euler instance.
	* @returns An object with the values of the Euler instance. */
	getValues() {
		return { x: this._x.value, y: this._y.value, z: this._z.value };
	}


	/** Sets the values of the Euler instance.
	 * @param x The value in the X axis.
	 * @param y The value in the Y axis.
	 * @param z The value in the Z axis. */
	setValues(x = 0, y = 0, z = 0) {
		this._x.value = x;
		this._y.value = y;
		this._z.value = z;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Euler class. */
Euler.type = new Type("euler", Euler, Complex.type);






/** Defines a String data item. */
       class String extends Simple {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the String class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The regular expression values of the string.*/
	get validRegEx() { return this._validRegEx; }
	set validRegEx(newValidRegEx) {
		this._validRegEx = newValidRegEx;
		if (!this._value)
			return;
		if (!this.checkValue(this._value))
			throw Error('Invalid value "' + this._value + '" for: ' + this.name);
		this._onModified.trigger(this);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Deserializes the String instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this._validValues = data.validValues;
			this._validRegEx = data.validRegEx;
			this._defaultValue = data.default; // Check the default value
			data = this.value = data.value;
		}
		if (typeof data !== "string")
			data = JSON.stringify(data);
		this.value = data;
	}


	/** Checks if the value is valid for this String instance.
	 * @param value The value to check.
	 * @returns A boolean value indicating whether the value is valid or not. */
	checkValue(value) {

		// Check the regular expression
		if (this._validRegEx && !this._validRegEx.test(value))
			return false;

		// If the value has not been rejected, check the 
		return super.checkValue(value);
	}


	/** Obtains the string representation of the Number instance.
	 * @returns The string representation of the Number instance. */
	toString() { return this.value || ""; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the String class. */
String.type = new Type("string", String, Simple.type);






/** Defines a numeric Measure item. */
       class Measure extends Number {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Type class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Store the units of the Measure
		let units = this.constructor["units"], className = this.constructor.name;
		if (units)
			this._units = units;
		else
			throw Error("No units defined for class '" + className + "'.");
		this._unitIndex = 0;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The current unit of the measure. */
	get unit() { return this._units[this._unitIndex]; }

	/** The units of the measure. */
	get units() { return this._units; }

	/** The value of the measure in the selected unit.*/
	get unitIndex() { return this._unitIndex; }
	set unitIndex(u) {
		this._unitIndex = u;
		this._onModified.trigger(this);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Measure class. */
Measure.type = new Type("measure", Measure, Number.type);


/** Defines a Measurement Unit. */
       class MeasurementUnit {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the MeasurementUnit class.
	 * @param id The id of the Measurement Unit.
	 * @param abbrevs The abbreviations of the Measurement Unit.
	 * @param factor The relative conversion factor of the Measurement Unit.
	 * @param default The default value of the Measurement Unit.
	 * @param min The minimum possible value of the Measurement Unit.
	 * @param max The maximum possible value of the Measurement Unit. */
	constructor(id, abbrevs, factor = 1, defaultValue, min, max) {
		this._id = id;
		this._abbrevs = abbrevs;
		this._factor = factor;
		this._default = defaultValue;
		this._min = min;
		this._max = max;
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the Measurement Unit. */
	get id() { return this._id; }

	/** The list of abbreviations of the Measurement Unit. */
	get abbrevs() { return this._abbrevs; }

	/** The relative conversion factor of the Measurement Unit. */
	get factor() { return this._factor; }

	/** The default value of the Measurement Unit. */
	get default() { return this._default; }

	/** The minimum possible value of the Measurement Unit. */
	get min() { return this._min; }

	/** The maximum possible value of the Measurement Unit. */
	get max() { return this._max; }
}






/** Defines a angular measurement. */
       class Angle extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Angle class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Angle class. */
Angle.type = new Type("angle", Angle, Measure.type);

/** The measurement units associated to the Angle class. */
Angle.units = [
	new MeasurementUnit("degrees", ["deg", "d", "º"], 1),
	new MeasurementUnit("radians", ["rad", "RAD"], Math.PI / 180)
];






/** Defines a four-dimensional complex number to describe rotations. */
       class Quaternion extends Complex {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Quaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent constructor
		super(name, parent);

		// Create the children items
		this._x = new Number("x", this, 0);
		this._y = new Number("y", this, 0);
		this._z = new Number("z", this, 0);
		this._w = new Number("w", this, 1);

		// Define the components of the Complex type
		this._components = [this._x, this._y, this._z, this._w];

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Quaternion instance.
	 * @returns An object with the values of the Quaternion instance. */
	getValues() {
		return { x: this._x.value, y: this._y.value, z: this._z.value,
			w: this._w.value };
	}


	/** Sets the values of the Quaternion instance.
	 * @param x The value of the quaternion vector in the X(i) axis.
	 * @param y The value of the quaternion vector in the Y(j) axis.
	 * @param z The value of the quaternion vector in the Z(k) axis.
	 * @param w The rotation half-angle around the quaternion vector. */
	setValues(x = 0, y = 0, z = 0, w = 1) {
		this._x.value = x;
		this._y.value = y;
		this._y.value = z;
		this._w.value = w;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Quaternion class. */
Quaternion.type = new Type("quaternion", Quaternion, Complex.type);






/** Defines a three-dimensional vector. */
       class Vector extends Complex {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Vector3 class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._x = new Distance("x", this);
		this._y = new Distance("y", this);
		this._z = new Distance("z", this);

		// Define the components of the Complex type
		this._components = [this._x, this._y, this._z];

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The vector component in the X axis. */
	get x() { return this._x; }

	/** The vector component in the Y axis. */
	get y() { return this._y; }

	/** The vector component in the Z axis. */
	get z() { return this._z; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Vector instance.
	* @returns An object with the values of the Vector instance. */
	getValues() {
		return { x: this._x.value, y: this._y.value, z: this._z.value };
	}


	/** Sets the values of the Vector instance.
	 * @param x The vector component in the X axis.
	 * @param y The vector component in the Y axis.
	 * @param z The vector component in the Z axis. */
	setValues(x = 0, y = 0, z = 0) {
		this._x.value = x;
		this._y.value = y;
		this._z.value = z;
	}


	/** Obtains the string representation of the Vector instance.
	 * @returns The string representation of the Vector instance. */
	toString() { return this._components.join(", "); }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Vector class. */
Vector.type = new Type("vector", Vector, Complex.type);





/** Defines a length measurement. */
       class Distance extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Distance class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Distance class. */
Distance.type = new Type("distance", Distance, Measure.type);

/** The measurement units associated to the Distance class. */
Distance.units = [
	new MeasurementUnit("meters", ["m", "ms"], 1),
	new MeasurementUnit("centimeters", ["cm", "cms"], 0.01),
	new MeasurementUnit("millimeters", ["mm", "mms"], 0.001),
	new MeasurementUnit("kilometers", ["km", "kms"], 1000)
];





/** Defines a dimensional measurement. */
       class Size extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Size class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Sizes can not have negative values
		this._value = 0;
		this._min = 0;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Size class. */
Size.type = new Type("size", Size, Measure.type);

/** The measurement units associated to the Size class. */
Size.units = [
	new MeasurementUnit("meters", ["m", "ms"], 1),
	new MeasurementUnit("centimeters", ["cm", "cms"], 0.01),
	new MeasurementUnit("millimeters", ["mm", "mms"], 0.001),
	new MeasurementUnit("kilometers", ["km", "kms"], 1000)
];





/** Defines a temporal measurement. */
       class Time extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Time class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the time class. */
Time.type = new Type("Time", Time, Measure.type);

/** The measurement units associated to the Time class. */
Time.units = [
	new MeasurementUnit("seconds", ["s", "sec"], 1),
	new MeasurementUnit("minutes", ["m", "mins"], 1 / 60),
	new MeasurementUnit("hours", ["h"], 1 / 3600),
	new MeasurementUnit("milliseconds", ["ms", "millisecs"], 1000),
];






/** Defines a three dimensional shape. */
       class Shape extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Shape instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._shaded = new String("shaded", this);
		this._color = new String("color", this);
		this._texture = new String("texture", this);
		this._emissive = new String("color", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Indicates if the Shape should be shaded or not. */
	get shaded() { return this._shaded; }

	/** The color of the Shape. */
	get color() { return this._color; }

	/** The diffuse texture of the Shape. */
	get texture() { return this._texture; }

	/** The emissive texture of the Shape. */
	get emissive() { return this._emissive; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Shape class. */
Shape.type = new Type("shape", Shape, Item.type);







/** Defines a three-dimensional box Shape (global). */
       class Box extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Box instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._width = new Size("width", this);
		this._depth = new Size("depth", this);
		this._height = new Size("height", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The size of the box the X axis. */
	get width() { return this._width; }

	/** The size of the box in the Y axis. */
	get height() { return this._height; }

	/** The size of the box the Z axis. */
	get depth() { return this._depth; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Box class. */
Box.type = new Type("box", Box, Shape.type);






/** Defines a three-dimensional ellipsoid shape. */
       class Ellipsoid extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Ellipsoid instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._radiusX = new Size("radiusX", this);
		this._radiusY = new Size("radiusY", this);
		this._radiusZ = new Size("radiusZ", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The radius in the X axis. */
	get radiusX() { return this._radiusX; }

	/** The radius in the Y axis. */
	get radiusY() { return this._radiusY; }

	/** The radius in the Z axis. */
	get radiusZ() { return this._radiusZ; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Ellipsoid class. */
Ellipsoid.type = new Type("ellipsoid", Ellipsoid, Shape.type);






/** Defines a three-dimensional spherical Shape. */
       class Sphere extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Sphere instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._radius = new Size("radius", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in all axes. */
	get radius() { return this._radius; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Sphere class. */
Sphere.type = new Type("sphere", Sphere, Shape.type);






/** Defines a boolean data item. */
       class Boolean extends Simple {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Boolean class.
	 * @param name The name of the data type.
	 * @param parent The parent data type.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Set the values of the properties
		this._value = undefined;
		this._defaultValue = false;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Serializes the Boolean instance.
	 * @return The serialized data. */
	serialize() { return this._value; }


	/** Deserializes the Boolean instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this.defaultValue = data.default;
			this.value = data.value;
		}
		else if (typeof data !== "boolean")
			this.value = (data == "false" || data == 0) ? false : true;
		else
			this.value = data;
	}


	/** Obtains the string representation of the Boolean instance.
	 * @returns The string representation of the Boolean instance. */
	toString() { return this.value ? "true" : "false"; }


	/** Obtains the primitive value of the Boolean instance.
	 * @returns The primitive value of the Boolean instance. */
	valueOf() { return this.value; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Boolean class. */
Boolean.type = new Type("boolean", Boolean, Simple.type);





/** Defines the basic class of a Pose Extension. */
       class Extension extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Extension class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Extension class. */
Extension.type = new Type("extension", Extension, Item.type);






/** Defines a reference frame. */
       class Frame extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Frame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._shape = new Shape("shape", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the reference frame. */
	get shape() { return this._shape; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Frame class. */
Frame.type = new Type("frame", Frame, Item.type);








/** Defines a geodetic (elliptical) frame. */
       class GeodeticFrame extends Frame {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeodeticFrame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._equatorialRadius = new Distance("equatorialRadius", this, data.equatorialRadius || 6378137.0);
		this._polarRadius = new Distance("polarRadius", this, data.equatorialRadius || 6356752.314245);
		this._flattening = new Number("flattening", this, data.z || 0);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// TODO Map projections
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The equatorial radius (the semi-major axis). */
	get equatorialRadius() { return this._equatorialRadius; }

	/** The polar radius (the semi-minor axis). */
	get polarRadius() { return this._polarRadius; }

	/** The flattening factor. */
	get flattening() { return this._flattening; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticFrame class. */
GeodeticFrame.type = new Type("geodetic-frame", GeodeticFrame, Frame.type);


GeodeticFrame.defaultFrame = new GeodeticFrame("Earth", undefined);








/** Defines a Pose of an object. */
       class Pose extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		// this._position = new Position("position", this);
		// this._orientation = new Orientation("orientation", this);
		this._childPoses = new Collection([Pose.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Pose. */
	get position() { return this._position; }

	/** The orientation of the Pose. */
	get orientation() { return this._orientation; }

	/** The parent Pose. */
	get parent() { return this._parentPose; }

	/** The child Poses. */
	get childPoses() { return this._childPoses; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
Pose.type = new Type("pose", Pose, Item.type);






/** Defines a basic position within a reference frame. */
       class Position extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Location class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._relativeValues = new Vector("relativeValues", this);
		this._absoluteValues = new Vector("absoluteValues", this);
		this._verticalVector = new Vector("verticalVector", this);
		this._forwardVector = new Vector("forwardVector", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative position. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute position. */
	get absoluteValues() { return this._absoluteValues; }

	/** The vertical vector. */
	get verticalVector() { return this._verticalVector; }

	/** The forward vector. */
	get forwardVector() { return this._forwardVector; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Position class. */
Position.type = new Type("position", Position, Item.type);






/** Define the basic class of a three dimensional orientation. */
       class Orientation extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Orientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._relativeValues = new Quaternion("relativeValues", this);
		this._absoluteValues = new Quaternion("absoluteValues", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative orientation. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute orientation. */
	get absoluteValues() { return this._absoluteValues; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Orientation class. */
Orientation.type = new Type("orientation", Orientation, Item.type);








/** Defines the GeoPose of an object. */
       class GeoPose extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child nodes
		this._frame = new GeodeticFrame("frame", this);
		this._extensions = new Collection([Extension.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the GeoPose. */
	get frame() { return this._frame; }

	/** The extensions of the GeoPose. */
	get extensions() { return this._extensions; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
GeoPose.type = new Type("geopose", GeoPose, Pose.type);








/** Defines an orientation based on an axis vector and an angle. */
       class AxisAngleOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the AxisAngleOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._axis = new Vector("axis", this, data);
		this._angle = new Angle("angle", this, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The axis vector. */
	get axis() { return this._axis; }

	/** The angle around the axis. */
	get angle() { return this._angle; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the AxisAngleOrientation class. */
AxisAngleOrientation.type = new Type("axis-angle-orientation", AxisAngleOrientation, Orientation.type);








/** Defines an orientation with a target. */
       class LookAtOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._targetName = new String("target", this);
		this._targetPosition = new Vector("position", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target to point towards. */
	get targetName() { return this._targetName; }

	/** The target position. */
	get targetPosition() { return this._targetPosition; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the LookAtOrientation class. */
LookAtOrientation.type = new Type("look-at-orientation", LookAtOrientation, Orientation.type);







/** Defines an orientation based on a 3x3 rotation matrix. */
       class MatrixOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the MatrixOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._values = new Number("values", this, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The numeric values of the rotation matrix. */
	get values() { return this._values; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the MatrixOrientation class. */
MatrixOrientation.type = new Type("matrix-orientation", MatrixOrientation, Orientation.type);







/** Defines an orientation with a quaternion. */
       class QuaternionOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the QuaternionOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._x = new Number("x", this);
		this._y = new Number("y", this);
		this._z = new Number("z", this);
		this._w = new Number("w", this, { value: 1, defaultValue: 1 });

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the QuaternionOrientation class. */
QuaternionOrientation.type = new Type("quaternion-orientation", QuaternionOrientation, Orientation.type);






/** Defines a Tait-Bryan orientation with Yaw, Pitch and Roll angles. */
       class TaitBryanOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	/** Initializes a new instance of the TaitBryanOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._yaw = new Angle("yaw", this);
		this._pitch = new Angle("pitch", this);
		this._roll = new Angle("roll", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in degrees around the equator of the globe. */
	get yaw() { return this._yaw; }

	/** The Angle in degrees around the prime meridian of the globe. */
	get pitch() { return this._pitch; }

	/** The vertical distance relative to the surface to the globe. */
	get roll() { return this._roll; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the TaitBryanOrientation class. */
TaitBryanOrientation.type = new Type("Tait-Bryan-orientation", TaitBryanOrientation, Orientation.type);









/** Defines a Euclidean pose with a quaternion orientation. */
       class EuclideanPoseQuaternion extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPoseQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Euclidean Pose. */
	get position() {
		return this._position;
	}

	/** The orientation of the Euclidean Pose. */
	get orientation() {
		return this._orientation;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPoseQuaternion class. */
EuclideanPoseQuaternion.type = new Type("euclidean-pose-quaternion", EuclideanPoseQuaternion, Pose.type);







/** Defines a position in an euclidean coordinate system. */
       class EuclideanPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._x = new Distance("x", this);
		this._y = new Distance("y", this);
		this._z = new Distance("z", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The distance from the origin in the X axis. */
	get x() { return this._x; }

	/** The distance from the origin in the Y axis. */
	get y() { return this._y; }

	/** The distance from the origin in the Z axis. */
	get z() { return this._z; }

	/** Updates the Item instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		console.log("EuclideanPosition");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPosition class. */
EuclideanPosition.type = new Type("euclidean-position", EuclideanPosition, Position.type);







/** Defines a Euclidean pose with Yaw-Pitch-Roll orientation. */
       class EuclideanPoseYPR extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPoseYPR class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new TaitBryanOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Euclidean Pose. */
	get position() {
		return this._position;
	}

	/** The orientation of the Euclidean Pose. */
	get orientation() {
		return this._orientation;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPoseYPR class. */
EuclideanPoseYPR.type = new Type("euclidean-basic-ypr", EuclideanPoseYPR, Pose.type);







/** Defines a basic GeoPose with Quaternion-based orientation. */
       class GeoPoseBasicQuaternion extends GeoPose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPoseBasicQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new GeodeticPosition("position", this);
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the GeoPose. */
	get position() { return this._position; }

	/** The orientation of the GeoPose. */
	get orientation() { return this._orientation; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicQuaternion class. */
GeoPoseBasicQuaternion.type = new Type("geopose-basic-quaternion", GeoPoseBasicQuaternion, GeoPose.type);









/** Defines a position in geodetic (elliptical) coordinate system.
* (Based on SPICE and Local Tangent Plane - East North Up). */
       class GeodeticPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._longitude = new Angle("longitude", this);
		this._latitude = new Angle("latitude", this);
		this._altitude = new Distance("h", this);

		// Store the frame
		if (!data)
			data = {};
		this._frame = data.frame || GeodeticFrame.defaultFrame;
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The vertical distance relative to the surface to the ellipsoid. */
	get frame() { return this._frame; }

	/** The angle around the equator of the ellipsoid. */
	get longitude() { return this._longitude; }

	/** The angle around the prime meridian of the ellipsoid. */
	get latitude() { return this._latitude; }

	/** The vertical distance relative to the surface to the ellipsoid. */
	get altitude() { return this._altitude; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPosition.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the base class function
		super.update(deltaTime, forced);

		// Calculate the relative location
		let lng = -this._longitude.value * (Math.PI / 180), lat = this._latitude.value * (Math.PI / 180), alt = this._altitude.value + this._frame.equatorialRadius.value, lngSin = Math.sin(lng), lngCos = Math.cos(lng), latSin = Math.sin(lat), latCos = Math.cos(lat);

		this.relativeValues.x.value = (lngCos * latCos * alt);
		this.relativeValues.y.value = (latSin * alt);
		this.relativeValues.z.value = (lngSin * latCos * alt);

		// Calculate the vertical vector
		this.verticalVector.x.value = 0;
		this.verticalVector.y.value = (-lng);
		this.verticalVector.z.value = (lat - Math.PI / 2);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticPosition class. */
GeodeticPosition.type = new Type("geodetic-position", GeodeticPosition, Position.type);







/** Defines a basic GeoPose with Tait-Bryan (Yaw-Pitch-Roll) orientation. */
       class GeoPoseBasicYPR extends GeoPose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new GeodeticPosition("position", this);
		this._orientation = new TaitBryanOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the GeoPose. */
	get position() { return this._position; }

	/** The orientation of the GeoPose. */
	get orientation() { return this._orientation; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicYPR class. */
GeoPoseBasicYPR.type = new Type("geopose-basic-ypr", GeoPoseBasicYPR, GeoPose.type);






/** Defines a position in an orbital coordinate system. */
       class OrbitalPosition extends Position {

	// --------------------------------------------------------- PRIVATE FIELDS

	// TODO


	// ------------------------------------------------------- PUBLIC ACCESSORS

	// TODO


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the OrbitalPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		// TODO

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the OrbitalPosition class. */
OrbitalPosition.type = new Type("orbital-position", OrbitalPosition, Position.type);









/** Defines an Interaction Space. */
       class Space extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child nodes
		this._entity = new SpaceEntity(this.name);
		this._subspaces = new Collection([Space.type], this);
		this._presences = new Collection([Presence.type], this);
		this._widgets = new Collection([Widget.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity() { return this._entity; }

	/** The subspaces of the space. */
	get subspaces() { return this._subspaces; }

	/** The user presences in the space. */
	get presences() { return this._presences; }

	/** The widgets of the space. */
	get widgets() { return this._widgets; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the space.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the parent class update function
		super.update(deltaTime, forced);

		// Show a message on console
		// console.log("Space Updated");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Space class. */
Space.type = new Type("space", Space, Item.type);








/** Defines a logic entity. */
       class Entity extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Entity instance.
	 * @param name The name of the item.
	 * @param parent The parent item.
	 * @param representation The representation of the entity. */
	constructor(name, parent, representation) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._pose = new Pose("pose", this);

		// Check the representation
		if (representation)
			this._representation = representation;
		else
			this._representation = new THREE.Object3D();
		this._representation.name = this.name;

		// Create the association with the parent entity
		if (parent && parent.representation) {
			let parentEntity = parent;
			parentEntity._representation.add(this._representation);
			console.log("Parenting: " + this.name + " to " + parentEntity.name);
		}
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the entity. */
	get representation() { return this._representation; }

	/** The pose of the entity. */
	get pose() { return this._pose; }
	set pose(p) {
		if (this._pose)
			this._pose.destroy();
		this._pose = p;
		this.updated = false;
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		if (!this._pose.updated && this._pose.position) {
			this._pose.position.update();

			let p = this._pose.position.relativeValues;
			this._representation.position.set(p.x.value, p.y.value, p.z.value);
			console.log("Positioning " + this._name + ": " +
				p.x.value + ", " + p.y.value + ", " + p.z.value);

			let v = this._pose.position.verticalVector;
			let vertical = new THREE.Vector3(v.x.value, v.y.value, v.z.value);
			this.representation.rotation.setFromVector3(vertical);

		}

		// 
		console.log("Updated: " + this.name);

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Entity class. */
Entity.type = new Type("entity", Entity, Item.type);






/** Defines a Space entity. */
       class SpaceEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new SpaceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, new THREE.Scene());

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add a light
		this._representation.add(new THREE.AmbientLight(0x888888, 0.5));

		// TEMPORAL
		let light = new THREE.DirectionalLight(0xffffff);
		light.position.z = 3;
		this._representation.add(light);
		this._representation.add(new THREE.Mesh(new THREE.SphereGeometry(100000, 64, 64), new THREE.MeshPhongMaterial({ color: 0x00ff00 })));

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the SpaceEntity class. */
SpaceEntity.type = new Type("space-entity", SpaceEntity, Entity.type);








/** Defines the user Presence in an interaction space. */
       class Presence extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Presence instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._entity = new PresenceEntity(name + "Entity", this);
		// The space node is not initialized here because it is actually a link

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity associated with this presence. */
	get entity() { return this._entity; }

	/** The space associated with the presence. */
	get space() { return this._space; }
	set space(space) { this._space = space; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Presence class. */
Presence.type = new Type("presence", Presence, Item.type);







/** Defines a user Presence entity. */
       class PresenceEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PresenceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._fieldOfView = new Number("fov", this, { defaultValue: 45 });
		this._aspectRatio = new Number("aspect", this, { defaultValue: 1 });
		this._nearPlane = new Number("near", this, { defaultValue: 0.001 });
		this._farPlane = new Number("far", this, { defaultValue: 100000000 });

		// Deserialize the initialization data
		if (data !== undefined)
			this.deserialize(data);

		// Create the representation
		this._representation = new THREE.PerspectiveCamera(this._fieldOfView.value, this._aspectRatio.value, this._nearPlane.value, this._farPlane.value);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The field of view of the Camera. */
	get fieldOfView() { return this._fieldOfView; }

	/** The aspect ratio of the Camera. */
	get aspectRatio() { return this._aspectRatio; }

	/** The near plane of the Camera frustum. */
	get nearPlane() { return this._nearPlane; }

	/** The far plane of the Camera frustum. */
	get farPlane() { return this._farPlane; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Show a message on console
		console.log("Updated PresenceEntity");

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		let camera = this._representation;
		let updateMatrix = false;

		if (!this._fieldOfView.updated) {
			camera.fov = this._fieldOfView.value;
			updateMatrix = true;
		}
		if (!this._aspectRatio.updated) {
			camera.aspect = this._aspectRatio.value;
			updateMatrix = true;
		}
		if (!this._nearPlane.updated) {
			camera.near = this._nearPlane.value;
			updateMatrix = true;
		}
		if (!this._farPlane.updated) {
			camera.far = this._farPlane.value;
			updateMatrix = true;
		}

		// Update the projection matrix, if required
		if (updateMatrix)
			camera.updateProjectionMatrix();


		// Call the base class function
		super.update(deltaTime, forced);

		// TEMPORAL
		// if (camera.position.z == 0) {
		// console.log("REPOSITIONED CAMERA");
		// camera.position.z = 100000000;
		camera.lookAt(0, 0, 0);
		// }

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the PresenceEntity class. */
PresenceEntity.type = new Type("presence-entity", PresenceEntity, Entity.type);








/** Defines an user interaction widget. */
       class Widget extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Widget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._widgets = new Collection([Widget.type], this);

		// Check the parent node and get the parent entity
		if (!parent || !(parent.type.is(Layer.type)
			|| parent.type.is(Widget.type)))
			throw Error("Invalid parent for Widget " + name);
		this._parentEntity = parent.entity;

		// Create the entity
		this._entity = new Entity(this.name, this._parentEntity);
		this._entity.links.add(this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}



	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity() { return this._entity; }

	/** The list of child widgets. */
	get widgets() { return this._widgets; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Widget instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the parent class update function
		super.update(deltaTime, forced);

		// Update the associated entity
		this._entity.update(deltaTime, forced);

		// Show a message on console
		console.log("Widget Updated");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
Widget.type = new Type("widget", Widget, Item.type);







/** Defines an user interaction (view) layer . */
       class Layer extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Layer instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param presence The user presence associated with the layer. */
	constructor(name, parent, presence) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._widgets = new Collection([Widget.type], this);
		this._presence = presence;
		this._space = presence.space;
		this._presence.links.add(this);
		this._space.links.add(this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The widgets of the layer. */
	get widgets() { return this._widgets; }

	/** The Interaction Space associated to the layer. */
	get space() { return this._space; }

	/** The user Presence in the layer. */
	get presence() { return this._presence; }

	/** The entity associated to the layer. */
	get entity() { return this._space.entity; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the layer.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Update the space	and the presence of the user within it
		this.space.update(deltaTime, forced);
		this.presence.update(deltaTime, forced);

		// Update the widgets, the space and the user presence
		for (let widget of this.widgets)
			widget.update(deltaTime, forced);

		// Call the parent class update function
		super.update(deltaTime, forced);

		// Show a message on console
		console.log("Layer Updated");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Layer class. */
Layer.type = new Type("layer", Layer, Item.type);










/** Defines a user. */
       class User extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new User class instance.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._presences = new Collection([Presence.type], this);
		this._views = new Collection([View.type], this);

		// Deserialize the initialization data
		if (data !== undefined)
			this.deserialize(data);

		// Create the defaults presences and views
		if (this._presences.count == 0) {
			let spaces = this.parent.spaces;
			for (let space of spaces) {
				let presence = new Presence("DefaultPresence", this);
				presence.space = space;
				this.presences.add(presence);
			}
		}
		if (this._views.count == 0)
			this._views.add(new View("DefaultView", this));
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The presences of the user in the interaction spaces. */
	get presences() { return this._presences; }

	/** The point of views of the user. */
	get views() { return this._views; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the User class. */
User.type = new Type("user", User, Item.type);













/** Defines a User Interaction View. */
       class View extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new View instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		/** The time between updates. */
		this._deltaTime = 0;

		/** The last update time. */
		this._lastTime = 0;

		/** The Frames Per Second counter. */
		this._fpsCounter = 0;

		/** The Frames Per Second timer. */
		this._fpsTimer = 0;

		/** The current Frames Per Second value. */
		this._fpsValue = 0;

		/** The list of Frames Per Second values. */
		this._fpsValues = [];

		/** The maximum size of the array of Frames Per Second values. */
		this._fpsValuesMaxSize = 100;

		// Create the sub nodes
		this._width = new Number("width", this, { default: 100, min: 0 });
		this._height = new Number("height", this, { default: 100, min: 0 });
		this._state = new String("state", this, { default: "Maximized",
			validValues: "Normal, Maximized, FullScreen, VR, AR" });
		this._layers = new Collection([Layer.type], this);


		// Create the viewport WebGL renderer
		this._element = View.createDomElement("div", this.name + "View", undefined, 'CoEditAR-View');
		this._canvas = View.createDomElement("canvas", this.name + "Canvas", this._element, 'CoEditAR-Canvas', 'width:100%; height:100%;');
		this._viewport = new ViewPort(this._canvas, this.update.bind(this));

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// If there is no layer, create a default ones
		if (this._layers.count == 0) {
			let presences = this.parent.presences;
			for (let presence of presences) {
				this.layers.add(new Layer("Layer", this, presence));
			}
		}

		// Set a connection to the resize event
		this.resize();
		window.onresize = (e) => { this.resize(); };
		this._state.onModified.add(() => { this.resize(); });

		// TEMPORAL Switch to fullscreen with a double click
		// this._element.addEventListener("dblclick", () =>{
		// 	this._state.value = "FullScreen";
		// });
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The main element of the view. */
	get element() { return this._element; }

	/** The canvas element of the view. */
	get canvas() { return this._canvas; }

	/** The state of the view. */
	get state() { return this._state; }

	/** The width of the view. */
	get width() { return this._width; }

	/** The height of the view. */
	get height() { return this._height; }

	/** The layers of the view. */
	get layers() { return this._layers; }

	/** The current Frames Per Second value. */
	get fpsValue() { return this._fpsValue; }

	/** The list of Frames Per Second values. */
	get fpsValues() { return this._fpsValues; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the view instance.
	 * @param time The time (in milliseconds) since the last call. */
	update(time = 0) {

		// Update the delta time and Frames Per Second counter
		time /= 1000; // Convert the time to seconds
		this._deltaTime = time - this._lastTime;
		this._lastTime = time;
		this._fpsTimer += this._deltaTime;
		this._fpsCounter++;
		if (this._fpsTimer >= 1) {
			this._fpsValue = this._fpsCounter;
			if (this._fpsValues.length >= this._fpsValuesMaxSize)
				this._fpsValues.shift();
			this._fpsValues.push(this._fpsValue);
			this._fpsTimer %= 1;
			this._fpsCounter = 0;

			// Show a message on console
			// console.log("FPS: " + this._fpsValue);
		}



		// Update and render the layers
		for (let layer of this._layers) {
			layer.update(this._deltaTime);
			this._viewport.render(layer.presence);
		}
	}


	/** Resizes the view. */
	resize() {

		// If the user has left the FullScreen mode, switch to the previous value
		if (this._state.updated && this._state.value == "FullScreen")
			if (!document.fullscreenElement)
				this._state.value = "Maximized";

		// Update the state of the view
		if (!this._state.updated) {
			switch (this._state.value) {
				case "Normal":
					this._element.style.position = "initial";
					break;
				case "Maximized":
					this._element.style.position = "fixed";
					this._element.style.top = "0";
					this._element.style.left = "0";
					this._element.style.width = "100vw";
					this._element.style.height = "100vh";
					break;
				case "FullScreen":
					if (!document.fullscreenElement)
						this._element.requestFullscreen();
					this._element.style.width = "100vw";
					this._element.style.height = "100vh";
					break;
			}

			// Mark the state item as updated
			this._state.updated = true;
		}

		// Set the size of the viewport
		this._width.value = this._element.clientWidth;
		this._height.value = this._element.clientHeight;
		this._viewport.resize(this._width.value, this._height.value);
		let aspectRatio = this._width.value / this._height.value;

		// Update the camera properties of the associated presences
		for (let layer of this._layers) {
			layer.presence.entity.aspectRatio.value = aspectRatio;
			layer.presence.entity.update();
		}
	}


	/** Creates a DOM element
	 * @param type The type of the element (its tag name)
	 * @param id The id of the element.
	 * @param parent The parent of the element.
	 * @param classes The classes of the element.
	 * @param style The style of the element.
	 * @param content The HTML content of the element.
	 * @returns The generated element. */
	static createDomElement(type, id, parent, classes, style, content) {

		// Create the element
		let element = document.createElement(type);

		// Set the properties of the element
		if (id)
			element.id = id;
		if (classes)
			element.className = classes;
		if (style)
			element.style.cssText = style;
		if (content)
			element.innerHTML = content;

		// Set the parent of element
		((parent) ? parent : document.body).appendChild(element);

		// Return the generated element
		return element;
	}


	/** Creates a CSS rule.
	 * @param selector The CSS selector
	 * @param rule The css rule
	 * @param override Indicates whether to override rules or not. */
	static addCssRule(selector, rule, override = false) {

		// If there is no stylesheet, create it
		if (document.styleSheets.length == 0)
			document.head.append(document.createElement('style'));
		let stylesheet = document.styleSheets[0];

		// Check if the rule exists
		let rules = stylesheet.cssRules, ruleIndex, ruleCount = rules.length;
		for (ruleIndex = 0; ruleIndex < ruleCount; ruleIndex++) {
			if (rules[ruleIndex].cssText.startsWith(selector)) {
				if (override)
					rules[ruleIndex].cssText = selector + " " + rule;
				else
					return;
			}
		}

		// If no rule was fond, create i and add it at the end
		stylesheet.insertRule(selector + " " + rule, ruleCount);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the View class. */
View.type = new Type("view", View, Item.type);




/** Defines a Viewport. */
       class ViewPort {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ViewPort instance.
	 * @param canvas The canvas of the viewport.
	 * @param updateFunction The callback for the. */
	constructor(canvas, updateFunction) {

		// Store the canvas instance
		this._canvas = canvas;

		// Create the renderer
		this._renderer = new THREE.WebGLRenderer({ canvas: this._canvas,
			antialias: true, logarithmicDepthBuffer: true });
		this._renderer.setPixelRatio(window.devicePixelRatio);
		this._renderer.xr.enabled = true;
		this._renderer.setAnimationLoop(updateFunction);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The canvas element of the viewport. */
	get canvas() { return this._canvas; }

	/** The renderer of the viewport. */
	get renderer() { return this._renderer; }

	/** The width of the viewport. */
	get width() { return this._width; }

	/** The height of the viewport. */
	get height() { return this._height; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Resizes the viewport.
	 * @param width The new width of the viewport.
	 * @param height The new height of the viewport. */
	resize(width, height) {
		this._width = width;
		this._height = height;
		this._renderer.setSize(width, height);
	}


	/** Renders the viewport.
	 * @param presence The presence of a user in a interaction space */
	render(presence) {

		// Clear the renderer
		this._renderer.setClearColor(0xff0000);
		this._renderer.clear();

		// Render the
		this._renderer.render(presence.space.entity.representation, presence.entity.representation);
	}
}





/** Defines an logic behavior, */
       class Behavior extends Item {


	// ------------------------------------------------------- PROTECTED FIELDS

	// ------------------------------------------------------- PUBLIC ACCESSORS

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Behavior instance.
	 * @param name The name of the logic behavior.
	 * @param parent The parent item.*/
	constructor(name, parent) {

		// Call the base class constructor
		super(name, parent);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Behavior class. */
Behavior.type = new Type("behavior", Behavior, Item.type);






/** Defines a Arrow entity. */
       class ArrowEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ArrowEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent) {

		// Call the base class constructor
		super(name, parent);

		// Create 
		let radius = 100000, length = 500000;
		let material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
		let center = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 16), material);
		let body = new THREE.Mesh(new THREE.CylinderGeometry(radius / 2, radius / 2, length), material);
		let point = new THREE.Mesh(new THREE.ConeGeometry(radius, radius * 2, 16, 16), material);

		body.position.x = length / 2;
		body.rotateZ(-Math.PI / 2);
		point.position.x = length;
		point.rotateZ(-Math.PI / 2);

		this._representation.add(center, body, point);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the ShapeEntity class. */
ArrowEntity.type = new Type("arrow-entity", ArrowEntity, Entity.type);









/** Defines a Atmosphere Entity. */
       class AtmosphereEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new AtmosphereEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);
		this._clouds = new String("clouds", this);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(10000000, 64, 64), new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true }));
		this._representation.add(this._mesh);

	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the terrain. */
	get ellipsoid() { return this._ellipsoid; }

	/** The normal texture of the terrain. */
	get clouds() { return this._clouds; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the AtmosphereEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Show a message on console
		console.log("Updated AtmosphereEntity");

		if (!this._ellipsoid.updated) {
			this._mesh.scale.set(this._ellipsoid.radiusX.value * 1.01, this._ellipsoid.radiusY.value * 1.01, this._ellipsoid.radiusZ.value * 1.01);
		}

		if (!this._clouds.updated && this._clouds.value) {
			console.log("clouds");
			const texture = new THREE.TextureLoader().load(this._clouds.value);
			this._mesh.material.alphaMap = texture;
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the AtmosphereEntity class. */
AtmosphereEntity.type = new Type("atmosphere-entity", AtmosphereEntity, Entity.type);








/** Defines a Background Entity. */
       class BackgroundEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new BackgroundEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._shape = new Ellipsoid("shape", this, data);
		this._texture = new String("texture", this);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }));
		this._representation.add(this._mesh);
		this._mesh.renderOrder = -100;

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape() { return this._shape; }

	/** The shape of the component. */
	get texture() { return this._texture; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the BackgroundEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		if (!this._shape.updated) {
			this._mesh.scale.set(this._shape.radiusX.value, this._shape.radiusY.value, this._shape.radiusZ.value);
		}

		if (!this._texture.updated) {
			let textureURL = this._texture.value;
			if (textureURL) {
				const texture = new THREE.TextureLoader().load(textureURL);
				this._mesh.material = new THREE.MeshBasicMaterial({
					map: texture, side: THREE.BackSide
				});
			}
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the BackgroundEntity class. */
BackgroundEntity.type = new Type("background-entity", BackgroundEntity, Entity.type);








/** Defines a Graticule Entity. */
       class GraticuleEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GraticuleEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._lines = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.SphereGeometry(1, 36, 18), 0.001), new THREE.LineBasicMaterial({ color: 0xffffff }));
		// this._representation.add(this._lines);1

		let DEG2RAD = (Math.PI / 180), width = 0.001;
		let red = new THREE.MeshBasicMaterial({ color: 0x880000 });
		let green = new THREE.MeshBasicMaterial({ color: 0x008800 });
		let white = new THREE.MeshBasicMaterial({ color: 0xffffff });

		let torus = new THREE.TorusGeometry(1, width, 8, 36);
		let equator = new THREE.Mesh(torus, red);
		equator.rotateX(Math.PI / 2);
		this._representation.add(equator);
		let greenwich = new THREE.Mesh(torus, green);
		this._representation.add(greenwich);

		// Create the meridian lines
		for (let lat = 10; lat < 90; lat += 10) {
			let a = lat * DEG2RAD, sin = Math.sin(a), cos = Math.cos(a);
			let meridian = new THREE.TorusGeometry(cos, width, 8, 36);
			let meridianP = new THREE.Mesh(meridian, white), meridianN = new THREE.Mesh(meridian, white);
			meridianP.rotateX(Math.PI / 2);
			meridianN.rotateX(Math.PI / 2);
			meridianP.position.y = sin;
			meridianN.position.y = -sin;
			this._representation.add(meridianP, meridianN);
		}

		// Create the parallel lines
		for (let lng = 10; lng < 180; lng += 10) {
			let parallel = new THREE.Mesh(torus, white);
			parallel.rotateY(lng * DEG2RAD);
			this._representation.add(parallel);
		}

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the graticule. */
	get ellipsoid() { return this._ellipsoid; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GraticuleEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Show a message on console
		// console.log("Updated GraticuleEntity")

		if (!this._ellipsoid.updated) {
			this._representation.scale.set(this._ellipsoid.radiusX.value * 1.005, this._ellipsoid.radiusY.value * 1.01, this._ellipsoid.radiusZ.value * 1.01);
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GraticuleEntity class. */
GraticuleEntity.type = new Type("graticule-entity", GraticuleEntity, Entity.type);






/** Defines a Grid entity. */
       class GridEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GridEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent, radius = 1) {

		// Call the base class constructor
		super(name, parent);

		let size = 1000000;
		1;
		// Create the grid
		let grid = new THREE.GridHelper(size);
		this.representation.add(grid);

		let width = 1000;
		let red = new THREE.MeshPhongMaterial({ color: 0xff0000 });
		let green = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

		let axis = new THREE.CylinderGeometry(size / 50, size / 50, size);

		let xAxis = new THREE.Mesh(axis, red);
		xAxis.rotateX(Math.PI / 2);
		grid.add(xAxis);

		let yAxis = new THREE.Mesh(axis, green);
		yAxis.rotateZ(Math.PI / 2);
		grid.add(yAxis);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GridEntity class. */
GridEntity.type = new Type("grid-entity", GridEntity, Entity.type);






/** Defines a Shape entity. */
       class ShapeEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ShapeEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent, radius = 1) {

		// Call the base class constructor
		super(name, parent);

		// Create 
		this.representation.add(new THREE.Mesh(new THREE.ConeGeometry(100000, 100000, 64, 64), new THREE.MeshLambertMaterial({ color: 0xffff00 })));

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the ShapeEntity class. */
ShapeEntity.type = new Type("shape-entity", ShapeEntity, Entity.type);









/** Defines a Terrain Entity. */
       class TerrainEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TerrainEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);
		this._diffuse = new String("diffuse", this);
		this._normal = new String("normal", this);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshPhongMaterial({ color: 0xffffff }));
		this._representation.add(this._mesh);

	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the terrain. */
	get ellipsoid() { return this._ellipsoid; }

	/** The diffuse texture of the terrain. */
	get diffuse() { return this._diffuse; }

	/** The normal texture of the terrain. */
	get normal() { return this._normal; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TerrainEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Show a message on console
		// console.log("Updated TerrainEntity")

		if (!this._ellipsoid.updated) {
			this._mesh.scale.set(this._ellipsoid.radiusX.value, this._ellipsoid.radiusY.value, this._ellipsoid.radiusZ.value);
		}

		if (!this._diffuse.updated && this._diffuse.value) {
			const texture = new THREE.TextureLoader().load(this._diffuse.value);
			this._mesh.material.map = texture;
		}

		if (!this._normal.updated && this._normal.value) {
			const texture = new THREE.TextureLoader().load(this._normal.value);
			this._mesh.material.normalMap = texture;
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the TerrainEntity class. */
TerrainEntity.type = new Type("terrain-entity", TerrainEntity, Entity.type);






/** Defines a widget for the background. */
       class BackgroundWidget extends Widget {



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		if (data.radius) {
			data.radiusX = data.radius;
			data.radiusY = data.radius;
			data.radiusZ = data.radius;
		}

		// Add the shape Component
		let mesh = new BackgroundEntity(name + "Mesh", this._entity, data);

		console.log(mesh);
		// = new ShapeEntity(this._name, this._parentEntity);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
BackgroundWidget.type = new Type("background-widget", BackgroundWidget, Widget.type);








/** Defines a widget for a GeoPose. */
       class GeoPoseWidget extends Widget {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Add the entities
		this._grid = new GridEntity(this._name + "Grid", this._entity);
		this._arrow = new ArrowEntity(this._name + "Arrow", this._entity);

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The arrow of the widget. */
	get arrow() { return this._arrow; }

	/** The grid of the widget. */
	get grid() { return this._arrow; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
GeoPoseWidget.type = new Type("GeoPose-widget", GeoPoseWidget, Widget.type);









/** Defines a widget for a planet. */
       class PlanetWidget extends Widget {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	// get planet(): PlanetComponent { return this._planet; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Add the shape Component
		this._terrain = new TerrainEntity(name + "Terrain", this._entity, data);
		this._atmosphere = new AtmosphereEntity(name + "Atmosphere", this._entity, data);
		this._graticule = new GraticuleEntity(name + "Graticule", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
PlanetWidget.type = new Type("planet-widget", PlanetWidget, Widget.type);

