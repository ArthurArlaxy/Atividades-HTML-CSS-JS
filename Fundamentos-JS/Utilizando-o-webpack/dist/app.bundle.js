(()=>{var t={353:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,r="millisecond",n="second",s="minute",i="hour",u="day",a="week",o="month",c="quarter",f="year",h="date",d="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},M=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},y={s:M,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+M(n,2,"0")+":"+M(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,o),i=r-s<0,u=e.clone().add(n+(i?-1:1),o);return+(-(n+(r-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:a,d:u,D:h,h:i,m:s,s:n,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",D={};D[m]=v;var p="$isDayjsObject",g=function(t){return t instanceof b||!(!t||!t[p])},S=function t(e,r,n){var s;if(!e)return m;if("string"==typeof e){var i=e.toLowerCase();D[i]&&(s=i),r&&(D[i]=r,s=i);var u=e.split("-");if(!s&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,s=a}return!n&&s&&(m=s),s||!n&&m},w=function(t,e){if(g(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new b(r)},O=y;O.l=S,O.i=g,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function v(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var M=v.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return O},M.isValid=function(){return!(this.$d.toString()===d)},M.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},M.isAfter=function(t,e){return w(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<w(t)},M.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var r=this,c=!!O.u(e)||e,d=O.p(t),l=function(t,e){var n=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return c?n:n.endOf(u)},$=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,M=this.$M,y=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case f:return c?l(1,0):l(31,11);case o:return c?l(1,M):l(0,M+1);case a:var D=this.$locale().weekStart||0,p=(v<D?v+7:v)-D;return l(c?y-p:y+(6-p),M);case u:case h:return $(m+"Hours",0);case i:return $(m+"Minutes",1);case s:return $(m+"Seconds",2);case n:return $(m+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var a,c=O.p(t),d="set"+(this.$u?"UTC":""),l=(a={},a[u]=d+"Date",a[h]=d+"Date",a[o]=d+"Month",a[f]=d+"FullYear",a[i]=d+"Hours",a[s]=d+"Minutes",a[n]=d+"Seconds",a[r]=d+"Milliseconds",a)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===f){var v=this.clone().set(h,1);v.$d[l]($),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[O.p(t)]()},M.add=function(r,c){var h,d=this;r=Number(r);var l=O.p(c),$=function(t){var e=w(d);return O.w(e.date(e.date()+Math.round(t*r)),d)};if(l===o)return this.set(o,this.$M+r);if(l===f)return this.set(f,this.$y+r);if(l===u)return $(1);if(l===a)return $(7);var v=(h={},h[s]=t,h[i]=e,h[n]=1e3,h)[l]||1,M=this.$d.getTime()+r*v;return O.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=O.z(this),i=this.$H,u=this.$m,a=this.$M,o=r.weekdays,c=r.months,f=r.meridiem,h=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},l=function(t){return O.s(i%12||12,t,"0")},v=f||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace($,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return O.s(e.$y,4,"0");case"M":return a+1;case"MM":return O.s(a+1,2,"0");case"MMM":return h(r.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return O.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,o,2);case"ddd":return h(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return O.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return v(i,u,!0);case"A":return v(i,u,!1);case"m":return String(u);case"mm":return O.s(u,2,"0");case"s":return String(e.$s);case"ss":return O.s(e.$s,2,"0");case"SSS":return O.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(r,h,d){var l,$=this,v=O.p(h),M=w(r),y=(M.utcOffset()-this.utcOffset())*t,m=this-M,D=function(){return O.m($,M)};switch(v){case f:l=D()/12;break;case o:l=D();break;case c:l=D()/3;break;case a:l=(m-y)/6048e5;break;case u:l=(m-y)/864e5;break;case i:l=m/e;break;case s:l=m/t;break;case n:l=m/1e3;break;default:l=m}return d?l:O.a(l)},M.daysInMonth=function(){return this.endOf(o).$D},M.$locale=function(){return D[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},M.clone=function(){return O.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},v}(),_=b.prototype;return w.prototype=_,[["$ms",r],["$s",n],["$m",s],["$H",i],["$W",u],["$M",o],["$y",f],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,b,w),t.$i=!0),w},w.locale=S,w.isDayjs=g,w.unix=function(t){return w(1e3*t)},w.en=D[m],w.Ls=D,w.p={},w}()}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(353);alert(`Hoje é ${r.n(t)()().format("DD-MM-YYYY")}`)})()})();