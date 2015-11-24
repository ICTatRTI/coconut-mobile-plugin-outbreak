//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Hc.apply(null,arguments)}function b(a){Hc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ca(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Jc.length>0)for(c in Jc)d=Jc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Kc===!1&&(Kc=!0,a.updateOffset(this),Kc=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){return 0>a?Math.ceil(a):Math.floor(a)}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=p(b)),c}function r(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function s(){}function t(a){return a?a.toLowerCase().replace("_","-"):a}function u(a){for(var b,c,d,e,f=0;f<a.length;){for(e=t(a[f]).split("-"),b=e.length,c=t(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=v(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&r(e,c,!0)>=b-1)break;b--}f++}return null}function v(a){var b=null;if(!Lc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Ic._abbr,require("./locale/"+a),w(b)}catch(c){}return Lc[a]}function w(a,b){var c;return a&&(c="undefined"==typeof b?y(a):x(a,b),c&&(Ic=c)),Ic._abbr}function x(a,b){return null!==b?(b.abbr=a,Lc[a]=Lc[a]||new s,Lc[a].set(b),w(a),Lc[a]):(delete Lc[a],null)}function y(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Ic;if(!c(a)){if(b=v(a))return b;a=[a]}return u(a)}function z(a,b){var c=a.toLowerCase();Mc[c]=Mc[c+"s"]=Mc[b]=a}function A(a){return"string"==typeof a?Mc[a]||Mc[a.toLowerCase()]:void 0}function B(a){var b,c,d={};for(c in a)f(a,c)&&(b=A(c),b&&(d[b]=a[c]));return d}function C(b,c){return function(d){return null!=d?(E(this,b,d),a.updateOffset(this,c),this):D(this,b)}}function D(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function E(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function F(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=A(a),"function"==typeof this[a])return this[a](b);return this}function G(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function H(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Qc[a]=e),b&&(Qc[b[0]]=function(){return G(e.apply(this,arguments),b[1],b[2])}),c&&(Qc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function I(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function J(a){var b,c,d=a.match(Nc);for(b=0,c=d.length;c>b;b++)Qc[d[b]]?d[b]=Qc[d[b]]:d[b]=I(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function K(a,b){return a.isValid()?(b=L(b,a.localeData()),Pc[b]=Pc[b]||J(b),Pc[b](a)):a.localeData().invalidDate()}function L(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Oc.lastIndex=0;d>=0&&Oc.test(a);)a=a.replace(Oc,c),Oc.lastIndex=0,d-=1;return a}function M(a){return"function"==typeof a&&"[object Function]"===Object.prototype.toString.call(a)}function N(a,b,c){dd[a]=M(b)?b:function(a){return a&&c?c:b}}function O(a,b){return f(dd,a)?dd[a](b._strict,b._locale):new RegExp(P(a))}function P(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=q(a)}),c=0;c<a.length;c++)ed[a[c]]=d}function R(a,b){Q(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function S(a,b,c){null!=b&&f(ed,a)&&ed[a](b,c._a,c,a)}function T(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function U(a){return this._months[a.month()]}function V(a){return this._monthsShort[a.month()]}function W(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function X(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),T(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function Y(b){return null!=b?(X(this,b),a.updateOffset(this,!0),this):D(this,"Month")}function Z(){return T(this.year(),this.month())}function $(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[gd]<0||c[gd]>11?gd:c[hd]<1||c[hd]>T(c[fd],c[gd])?hd:c[id]<0||c[id]>24||24===c[id]&&(0!==c[jd]||0!==c[kd]||0!==c[ld])?id:c[jd]<0||c[jd]>59?jd:c[kd]<0||c[kd]>59?kd:c[ld]<0||c[ld]>999?ld:-1,j(a)._overflowDayOfYear&&(fd>b||b>hd)&&(b=hd),j(a).overflow=b),a}function _(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function aa(a,b){var c=!0;return g(function(){return c&&(_(a+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ba(a,b){od[a]||(_(b),od[a]=!0)}function ca(a){var b,c,d=a._i,e=pd.exec(d);if(e){for(j(a).iso=!0,b=0,c=qd.length;c>b;b++)if(qd[b][1].exec(d)){a._f=qd[b][0];break}for(b=0,c=rd.length;c>b;b++)if(rd[b][1].exec(d)){a._f+=(e[6]||" ")+rd[b][0];break}d.match(ad)&&(a._f+="Z"),va(a)}else a._isValid=!1}function da(b){var c=sd.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ca(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ea(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fa(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ga(a){return ha(a)?366:365}function ha(a){return a%4===0&&a%100!==0||a%400===0}function ia(){return ha(this.year())}function ja(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Da(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ka(a){return ja(a,this._week.dow,this._week.doy).week}function la(){return this._week.dow}function ma(){return this._week.doy}function na(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function oa(a){var b=ja(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function pa(a,b,c,d,e){var f,g=6+e-d,h=fa(a,0,1+g),i=h.getUTCDay();return e>i&&(i+=7),c=null!=c?1*c:e,f=1+g+7*(b-1)-i+c,{year:f>0?a:a-1,dayOfYear:f>0?f:ga(a-1)+f}}function qa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function ra(a,b,c){return null!=a?a:null!=b?b:c}function sa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ta(a){var b,c,d,e,f=[];if(!a._d){for(d=sa(a),a._w&&null==a._a[hd]&&null==a._a[gd]&&ua(a),a._dayOfYear&&(e=ra(a._a[fd],d[fd]),a._dayOfYear>ga(e)&&(j(a)._overflowDayOfYear=!0),c=fa(e,0,a._dayOfYear),a._a[gd]=c.getUTCMonth(),a._a[hd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[id]&&0===a._a[jd]&&0===a._a[kd]&&0===a._a[ld]&&(a._nextDay=!0,a._a[id]=0),a._d=(a._useUTC?fa:ea).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[id]=24)}}function ua(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ra(b.GG,a._a[fd],ja(Da(),1,4).year),d=ra(b.W,1),e=ra(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ra(b.gg,a._a[fd],ja(Da(),f,g).year),d=ra(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=pa(c,d,e,g,f),a._a[fd]=h.year,a._dayOfYear=h.dayOfYear}function va(b){if(b._f===a.ISO_8601)return void ca(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=L(b._f,b._locale).match(Nc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(O(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Qc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),S(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[id]<=12&&b._a[id]>0&&(j(b).bigHour=void 0),b._a[id]=wa(b._locale,b._a[id],b._meridiem),ta(b),$(b)}function wa(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function xa(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],va(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function ya(a){if(!a._d){var b=B(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ta(a)}}function za(a){var b=new n($(Aa(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Aa(a){var b=a._i,e=a._f;return a._locale=a._locale||y(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),o(b)?new n($(b)):(c(e)?xa(a):e?va(a):d(b)?a._d=b:Ba(a),a))}function Ba(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?da(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ta(b)):"object"==typeof f?ya(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ca(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,za(f)}function Da(a,b,c,d){return Ca(a,b,c,d,!1)}function Ea(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Da();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Fa(){var a=[].slice.call(arguments,0);return Ea("isBefore",a)}function Ga(){var a=[].slice.call(arguments,0);return Ea("isAfter",a)}function Ha(a){var b=B(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=y(),this._bubble()}function Ia(a){return a instanceof Ha}function Ja(a,b){H(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+G(~~(a/60),2)+b+G(~~a%60,2)})}function Ka(a){var b=(a||"").match(ad)||[],c=b[b.length-1]||[],d=(c+"").match(xd)||["-",0,0],e=+(60*d[1])+q(d[2]);return"+"===d[0]?e:-e}function La(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Da(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Da(b).local()}function Ma(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Na(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ka(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ma(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?bb(this,Ya(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ma(this)}function Oa(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Pa(a){return this.utcOffset(0,a)}function Qa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ma(this),"m")),this}function Ra(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ka(this._i)),this}function Sa(a){return a=a?Da(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Ta(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ua(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted;var a={};if(m(a,this),a=Aa(a),a._a){var b=a._isUTC?h(a._a):Da(a._a);this._isDSTShifted=this.isValid()&&r(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Va(){return!this._isUTC}function Wa(){return this._isUTC}function Xa(){return this._isUTC&&0===this._offset}function Ya(a,b){var c,d,e,g=a,h=null;return Ia(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=yd.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:q(h[hd])*c,h:q(h[id])*c,m:q(h[jd])*c,s:q(h[kd])*c,ms:q(h[ld])*c}):(h=zd.exec(a))?(c="-"===h[1]?-1:1,g={y:Za(h[2],c),M:Za(h[3],c),d:Za(h[4],c),h:Za(h[5],c),m:Za(h[6],c),s:Za(h[7],c),w:Za(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=_a(Da(g.from),Da(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ha(g),Ia(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Za(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function $a(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function _a(a,b){var c;return b=La(b,a),a.isBefore(b)?c=$a(a,b):(c=$a(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function ab(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ba(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ya(c,d),bb(this,e,a),this}}function bb(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&E(b,"Date",D(b,"Date")+g*d),h&&X(b,D(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function cb(a,b){var c=a||Da(),d=La(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(b&&b[f]||this.localeData().calendar(f,this,Da(c)))}function db(){return new n(this)}function eb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this>+a):(c=o(a)?+a:+Da(a),c<+this.clone().startOf(b))}function fb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+a>+this):(c=o(a)?+a:+Da(a),+this.clone().endOf(b)<c)}function gb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function hb(a,b){var c;return b=A(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this===+a):(c=+Da(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function ib(a,b,c){var d,e,f=La(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=A(b),"year"===b||"month"===b||"quarter"===b?(e=jb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:p(e)}function jb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function kb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function lb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():K(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function mb(b){var c=K(this,b||a.defaultFormat);return this.localeData().postformat(c)}function nb(a,b){return this.isValid()?Ya({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.from(Da(),a)}function pb(a,b){return this.isValid()?Ya({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function qb(a){return this.to(Da(),a)}function rb(a){var b;return void 0===a?this._locale._abbr:(b=y(a),null!=b&&(this._locale=b),this)}function sb(){return this._locale}function tb(a){switch(a=A(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function ub(a){return a=A(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function vb(){return+this._d-6e4*(this._offset||0)}function wb(){return Math.floor(+this/1e3)}function xb(){return this._offset?new Date(+this):this._d}function yb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function zb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Ab(){return k(this)}function Bb(){return g({},j(this))}function Cb(){return j(this).overflow}function Db(a,b){H(0,[a,a.length],0,b)}function Eb(a,b,c){return ja(Da([a,11,31+b-c]),b,c).week}function Fb(a){var b=ja(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Gb(a){var b=ja(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Hb(){return Eb(this.year(),1,4)}function Ib(){var a=this.localeData()._week;return Eb(this.year(),a.dow,a.doy)}function Jb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Kb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Lb(a){return this._weekdays[a.day()]}function Mb(a){return this._weekdaysShort[a.day()]}function Nb(a){return this._weekdaysMin[a.day()]}function Ob(a){var b,c,d;for(this._weekdaysParse=this._weekdaysParse||[],b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Da([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Pb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Kb(a,this.localeData()),this.add(a-b,"d")):b}function Qb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Rb(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Sb(a,b){H(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Tb(a,b){return b._meridiemParse}function Ub(a){return"p"===(a+"").toLowerCase().charAt(0)}function Vb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wb(a,b){b[ld]=q(1e3*("0."+a))}function Xb(){return this._isUTC?"UTC":""}function Yb(){return this._isUTC?"Coordinated Universal Time":""}function Zb(a){return Da(1e3*a)}function $b(){return Da.apply(null,arguments).parseZone()}function _b(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function bc(){return this._invalidDate}function cc(a){return this._ordinal.replace("%d",a)}function dc(a){return a}function ec(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function gc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function hc(a,b,c,d){var e=y(),f=h().set(d,b);return e[c](f,a)}function ic(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return hc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=hc(a,f,c,e);return g}function jc(a,b){return ic(a,b,"months",12,"month")}function kc(a,b){return ic(a,b,"monthsShort",12,"month")}function lc(a,b){return ic(a,b,"weekdays",7,"day")}function mc(a,b){return ic(a,b,"weekdaysShort",7,"day")}function nc(a,b){return ic(a,b,"weekdaysMin",7,"day")}function oc(){var a=this._data;return this._milliseconds=Wd(this._milliseconds),this._days=Wd(this._days),this._months=Wd(this._months),a.milliseconds=Wd(a.milliseconds),a.seconds=Wd(a.seconds),a.minutes=Wd(a.minutes),a.hours=Wd(a.hours),a.months=Wd(a.months),a.years=Wd(a.years),this}function pc(a,b,c,d){var e=Ya(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function qc(a,b){return pc(this,a,b,1)}function rc(a,b){return pc(this,a,b,-1)}function sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*sc(vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=p(f/1e3),i.seconds=a%60,b=p(a/60),i.minutes=b%60,c=p(b/60),i.hours=c%24,g+=p(c/24),e=p(uc(g)),h+=e,g-=sc(vc(e)),d=p(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function uc(a){return 4800*a/146097}function vc(a){return 146097*a/4800}function wc(a){var b,c,d=this._milliseconds;if(a=A(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*q(this._months/12)}function yc(a){return function(){return this.as(a)}}function zc(a){return a=A(a),this[a+"s"]()}function Ac(a){return function(){return this._data[a]}}function Bc(){return p(this.days()/7)}function Cc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Dc(a,b,c){var d=Ya(a).abs(),e=ke(d.as("s")),f=ke(d.as("m")),g=ke(d.as("h")),h=ke(d.as("d")),i=ke(d.as("M")),j=ke(d.as("y")),k=e<le.s&&["s",e]||1===f&&["m"]||f<le.m&&["mm",f]||1===g&&["h"]||g<le.h&&["hh",g]||1===h&&["d"]||h<le.d&&["dd",h]||1===i&&["M"]||i<le.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Cc.apply(null,k)}function Ec(a,b){return void 0===le[a]?!1:void 0===b?le[a]:(le[a]=b,!0)}function Fc(a){var b=this.localeData(),c=Dc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Gc(){var a,b,c,d=me(this._milliseconds)/1e3,e=me(this._days),f=me(this._months);a=p(d/60),b=p(a/60),d%=60,a%=60,c=p(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Hc,Ic,Jc=a.momentProperties=[],Kc=!1,Lc={},Mc={},Nc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Oc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pc={},Qc={},Rc=/\d/,Sc=/\d\d/,Tc=/\d{3}/,Uc=/\d{4}/,Vc=/[+-]?\d{6}/,Wc=/\d\d?/,Xc=/\d{1,3}/,Yc=/\d{1,4}/,Zc=/[+-]?\d{1,6}/,$c=/\d+/,_c=/[+-]?\d+/,ad=/Z|[+-]\d\d:?\d\d/gi,bd=/[+-]?\d+(\.\d{1,3})?/,cd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,dd={},ed={},fd=0,gd=1,hd=2,id=3,jd=4,kd=5,ld=6;H("M",["MM",2],"Mo",function(){return this.month()+1}),H("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),H("MMMM",0,0,function(a){return this.localeData().months(this,a)}),z("month","M"),N("M",Wc),N("MM",Wc,Sc),N("MMM",cd),N("MMMM",cd),Q(["M","MM"],function(a,b){b[gd]=q(a)-1}),Q(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[gd]=e:j(c).invalidMonth=a});var md="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),nd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),od={};a.suppressDeprecationWarnings=!1;var pd=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],rd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],sd=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),H(0,["YY",2],0,function(){return this.year()%100}),H(0,["YYYY",4],0,"year"),H(0,["YYYYY",5],0,"year"),H(0,["YYYYYY",6,!0],0,"year"),z("year","y"),N("Y",_c),N("YY",Wc,Sc),N("YYYY",Yc,Uc),N("YYYYY",Zc,Vc),N("YYYYYY",Zc,Vc),Q(["YYYYY","YYYYYY"],fd),Q("YYYY",function(b,c){c[fd]=2===b.length?a.parseTwoDigitYear(b):q(b)}),Q("YY",function(b,c){c[fd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return q(a)+(q(a)>68?1900:2e3)};var td=C("FullYear",!1);H("w",["ww",2],"wo","week"),H("W",["WW",2],"Wo","isoWeek"),z("week","w"),z("isoWeek","W"),N("w",Wc),N("ww",Wc,Sc),N("W",Wc),N("WW",Wc,Sc),R(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=q(a)});var ud={dow:0,doy:6};H("DDD",["DDDD",3],"DDDo","dayOfYear"),z("dayOfYear","DDD"),N("DDD",Xc),N("DDDD",Tc),Q(["DDD","DDDD"],function(a,b,c){c._dayOfYear=q(a)}),a.ISO_8601=function(){};var vd=aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return this>a?this:a}),wd=aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return a>this?this:a});Ja("Z",":"),Ja("ZZ",""),N("Z",ad),N("ZZ",ad),Q(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ka(a)});var xd=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var yd=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,zd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ya.fn=Ha.prototype;var Ad=ab(1,"add"),Bd=ab(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Cd=aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});H(0,["gg",2],0,function(){return this.weekYear()%100}),H(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Db("gggg","weekYear"),Db("ggggg","weekYear"),Db("GGGG","isoWeekYear"),Db("GGGGG","isoWeekYear"),z("weekYear","gg"),z("isoWeekYear","GG"),N("G",_c),N("g",_c),N("GG",Wc,Sc),N("gg",Wc,Sc),N("GGGG",Yc,Uc),N("gggg",Yc,Uc),N("GGGGG",Zc,Vc),N("ggggg",Zc,Vc),R(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=q(a)}),R(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),H("Q",0,0,"quarter"),z("quarter","Q"),N("Q",Rc),Q("Q",function(a,b){b[gd]=3*(q(a)-1)}),H("D",["DD",2],"Do","date"),z("date","D"),N("D",Wc),N("DD",Wc,Sc),N("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),Q(["D","DD"],hd),Q("Do",function(a,b){b[hd]=q(a.match(Wc)[0],10)});var Dd=C("Date",!0);H("d",0,"do","day"),H("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),H("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),H("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),H("e",0,0,"weekday"),H("E",0,0,"isoWeekday"),z("day","d"),z("weekday","e"),z("isoWeekday","E"),N("d",Wc),N("e",Wc),N("E",Wc),N("dd",cd),N("ddd",cd),N("dddd",cd),R(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),R(["d","e","E"],function(a,b,c,d){b[d]=q(a)});var Ed="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Fd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Gd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");H("H",["HH",2],0,"hour"),H("h",["hh",2],0,function(){return this.hours()%12||12}),Sb("a",!0),Sb("A",!1),z("hour","h"),N("a",Tb),N("A",Tb),N("H",Wc),N("h",Wc),N("HH",Wc,Sc),N("hh",Wc,Sc),Q(["H","HH"],id),Q(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),Q(["h","hh"],function(a,b,c){b[id]=q(a),j(c).bigHour=!0});var Hd=/[ap]\.?m?\.?/i,Id=C("Hours",!0);H("m",["mm",2],0,"minute"),z("minute","m"),N("m",Wc),N("mm",Wc,Sc),Q(["m","mm"],jd);var Jd=C("Minutes",!1);H("s",["ss",2],0,"second"),z("second","s"),N("s",Wc),N("ss",Wc,Sc),Q(["s","ss"],kd);var Kd=C("Seconds",!1);H("S",0,0,function(){return~~(this.millisecond()/100)}),H(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),H(0,["SSS",3],0,"millisecond"),H(0,["SSSS",4],0,function(){return 10*this.millisecond()}),H(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),H(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),H(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),H(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),H(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),z("millisecond","ms"),N("S",Xc,Rc),N("SS",Xc,Sc),N("SSS",Xc,Tc);var Ld;for(Ld="SSSS";Ld.length<=9;Ld+="S")N(Ld,$c);for(Ld="S";Ld.length<=9;Ld+="S")Q(Ld,Wb);var Md=C("Milliseconds",!1);H("z",0,0,"zoneAbbr"),H("zz",0,0,"zoneName");var Nd=n.prototype;Nd.add=Ad,Nd.calendar=cb,Nd.clone=db,Nd.diff=ib,Nd.endOf=ub,Nd.format=mb,Nd.from=nb,Nd.fromNow=ob,Nd.to=pb,Nd.toNow=qb,Nd.get=F,Nd.invalidAt=Cb,Nd.isAfter=eb,Nd.isBefore=fb,Nd.isBetween=gb,Nd.isSame=hb,Nd.isValid=Ab,Nd.lang=Cd,Nd.locale=rb,Nd.localeData=sb,Nd.max=wd,Nd.min=vd,Nd.parsingFlags=Bb,Nd.set=F,Nd.startOf=tb,Nd.subtract=Bd,Nd.toArray=yb,Nd.toObject=zb,Nd.toDate=xb,Nd.toISOString=lb,Nd.toJSON=lb,Nd.toString=kb,Nd.unix=wb,Nd.valueOf=vb,Nd.year=td,Nd.isLeapYear=ia,Nd.weekYear=Fb,Nd.isoWeekYear=Gb,Nd.quarter=Nd.quarters=Jb,Nd.month=Y,Nd.daysInMonth=Z,Nd.week=Nd.weeks=na,Nd.isoWeek=Nd.isoWeeks=oa,Nd.weeksInYear=Ib,Nd.isoWeeksInYear=Hb,Nd.date=Dd,Nd.day=Nd.days=Pb,Nd.weekday=Qb,Nd.isoWeekday=Rb,Nd.dayOfYear=qa,Nd.hour=Nd.hours=Id,Nd.minute=Nd.minutes=Jd,Nd.second=Nd.seconds=Kd,
Nd.millisecond=Nd.milliseconds=Md,Nd.utcOffset=Na,Nd.utc=Pa,Nd.local=Qa,Nd.parseZone=Ra,Nd.hasAlignedHourOffset=Sa,Nd.isDST=Ta,Nd.isDSTShifted=Ua,Nd.isLocal=Va,Nd.isUtcOffset=Wa,Nd.isUtc=Xa,Nd.isUTC=Xa,Nd.zoneAbbr=Xb,Nd.zoneName=Yb,Nd.dates=aa("dates accessor is deprecated. Use date instead.",Dd),Nd.months=aa("months accessor is deprecated. Use month instead",Y),Nd.years=aa("years accessor is deprecated. Use year instead",td),Nd.zone=aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Oa);var Od=Nd,Pd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Qd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Rd="Invalid date",Sd="%d",Td=/\d{1,2}/,Ud={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Vd=s.prototype;Vd._calendar=Pd,Vd.calendar=_b,Vd._longDateFormat=Qd,Vd.longDateFormat=ac,Vd._invalidDate=Rd,Vd.invalidDate=bc,Vd._ordinal=Sd,Vd.ordinal=cc,Vd._ordinalParse=Td,Vd.preparse=dc,Vd.postformat=dc,Vd._relativeTime=Ud,Vd.relativeTime=ec,Vd.pastFuture=fc,Vd.set=gc,Vd.months=U,Vd._months=md,Vd.monthsShort=V,Vd._monthsShort=nd,Vd.monthsParse=W,Vd.week=ka,Vd._week=ud,Vd.firstDayOfYear=ma,Vd.firstDayOfWeek=la,Vd.weekdays=Lb,Vd._weekdays=Ed,Vd.weekdaysMin=Nb,Vd._weekdaysMin=Gd,Vd.weekdaysShort=Mb,Vd._weekdaysShort=Fd,Vd.weekdaysParse=Ob,Vd.isPM=Ub,Vd._meridiemParse=Hd,Vd.meridiem=Vb,w("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=aa("moment.lang is deprecated. Use moment.locale instead.",w),a.langData=aa("moment.langData is deprecated. Use moment.localeData instead.",y);var Wd=Math.abs,Xd=yc("ms"),Yd=yc("s"),Zd=yc("m"),$d=yc("h"),_d=yc("d"),ae=yc("w"),be=yc("M"),ce=yc("y"),de=Ac("milliseconds"),ee=Ac("seconds"),fe=Ac("minutes"),ge=Ac("hours"),he=Ac("days"),ie=Ac("months"),je=Ac("years"),ke=Math.round,le={s:45,m:45,h:22,d:26,M:11},me=Math.abs,ne=Ha.prototype;ne.abs=oc,ne.add=qc,ne.subtract=rc,ne.as=wc,ne.asMilliseconds=Xd,ne.asSeconds=Yd,ne.asMinutes=Zd,ne.asHours=$d,ne.asDays=_d,ne.asWeeks=ae,ne.asMonths=be,ne.asYears=ce,ne.valueOf=xc,ne._bubble=tc,ne.get=zc,ne.milliseconds=de,ne.seconds=ee,ne.minutes=fe,ne.hours=ge,ne.days=he,ne.weeks=Bc,ne.months=ie,ne.years=je,ne.humanize=Fc,ne.toISOString=Gc,ne.toString=Gc,ne.toJSON=Gc,ne.locale=rb,ne.localeData=sb,ne.toIsoString=aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Gc),ne.lang=Cd,H("X",0,0,"unix"),H("x",0,0,"valueOf"),N("x",_c),N("X",bd),Q("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),Q("x",function(a,b,c){c._d=new Date(q(a))}),a.version="2.10.6",b(Da),a.fn=Od,a.min=Fa,a.max=Ga,a.utc=h,a.unix=Zb,a.months=jc,a.isDate=d,a.locale=w,a.invalid=l,a.duration=Ya,a.isMoment=o,a.weekdays=lc,a.parseZone=$b,a.localeData=y,a.isDuration=Ia,a.monthsShort=kc,a.weekdaysMin=nc,a.defineLocale=x,a.weekdaysShort=mc,a.normalizeUnits=A,a.relativeTimeThreshold=Ec;var oe=a;return oe});//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map// Generated by CoffeeScript 1.9.3
var Case, FacilityHierarchy, GeoHierarchy,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

GeoHierarchy = (function() {
  function GeoHierarchy() {}

  GeoHierarchy.fetch = function(options) {
    return Coconut.database.get("Geo Hierarchy")["catch"](function(error) {
      console.error(error);
      return options.error(error);
    }).then(function(result) {
      return options.success(result);
    });
  };

  GeoHierarchy.levels = ["REGION", "DISTRICT", "SHEHIA"];

  GeoHierarchy.swahiliDistrictName = function(district) {
    return GeoHierarchy.englishToSwahiliDistrictMapping[district] || district;
  };

  GeoHierarchy.englishDistrictName = function(district) {
    return _(GeoHierarchy.englishToSwahiliDistrictMapping).invert()[district] || district;
  };

  GeoHierarchy.load = function(options) {
    return GeoHierarchy.fetch({
      error: function(error) {
        console.error("Error loading Geo Hierarchy: " + (JSON.stringify(error)));
        return options.error(error);
      },
      success: function(result) {
        var addChildren, addLevelProperties;
        GeoHierarchy.hierarchy = result.hierarchy;
        GeoHierarchy.databaseObject = result;
        GeoHierarchy.root = {
          parent: null
        };
        addLevelProperties = function(node) {
          var levelClimber;
          levelClimber = node;
          node[levelClimber.level] = levelClimber.name;
          while (levelClimber.parent !== null) {
            levelClimber = levelClimber.parent;
            node[levelClimber.level] = levelClimber.name;
          }
          return node;
        };
        addChildren = function(node, values, levelNumber) {
          var key, value;
          if (_(values).isArray()) {
            node.children = (function() {
              var i, len, results1;
              results1 = [];
              for (i = 0, len = values.length; i < len; i++) {
                value = values[i];
                result = {
                  parent: node,
                  level: this.levels[levelNumber],
                  name: value,
                  children: null
                };
                results1.push(result = addLevelProperties(result));
              }
              return results1;
            }).call(GeoHierarchy);
            return node;
          } else {
            node.children = (function() {
              var results1;
              results1 = [];
              for (key in values) {
                value = values[key];
                result = {
                  parent: node,
                  level: this.levels[levelNumber],
                  name: key
                };
                result = addLevelProperties(result);
                results1.push(addChildren(result, value, levelNumber + 1));
              }
              return results1;
            }).call(GeoHierarchy);
            return node;
          }
        };
        addChildren(GeoHierarchy.root, GeoHierarchy.hierarchy, 0);
        return Coconut.database.get("district_language_mapping")["catch"](function(error) {
          console.error(error);
          return options != null ? options.error() : void 0;
        }).then(function(result) {
          this.englishToSwahiliDistrictMapping = result.english_to_swahili;
          return options != null ? options.success() : void 0;
        });
      }
    });
  };

  GeoHierarchy.findInNodes = function(nodes, requiredProperties) {
    var node, results;
    results = _(nodes).where(requiredProperties);
    if (_(results).isEmpty()) {
      if (nodes != null) {
        results = (function() {
          var i, len, results1;
          results1 = [];
          for (i = 0, len = nodes.length; i < len; i++) {
            node = nodes[i];
            results1.push(GeoHierarchy.findInNodes(node.children, requiredProperties));
          }
          return results1;
        })();
      }
      results = _.chain(results).flatten().compact().value();
      if (_(results).isEmpty()) {
        return [];
      }
    }
    return results;
  };

  GeoHierarchy.find = function(name, level) {
    return GeoHierarchy.findInNodes(GeoHierarchy.root.children, {
      name: name ? name.toUpperCase() : void 0,
      level: level ? level.toUpperCase() : void 0
    });
  };

  GeoHierarchy.findFirst = function(name, level) {
    var result;
    result = GeoHierarchy.find(name, level);
    if (result != null) {
      return result[0];
    } else {
      return {};
    }
  };

  GeoHierarchy.findAllForLevel = function(level) {
    return GeoHierarchy.findInNodes(GeoHierarchy.root.children, {
      level: level
    });
  };

  GeoHierarchy.findChildrenNames = function(targetLevel, parentName) {
    var indexOfTargetLevel, nodeResult, parentLevel;
    indexOfTargetLevel = _(this.levels).indexOf(targetLevel);
    parentLevel = this.levels[indexOfTargetLevel - 1];
    nodeResult = GeoHierarchy.findInNodes(GeoHierarchy.root.children, {
      name: parentName,
      level: parentLevel
    });
    if (_(nodeResult).isEmpty()) {
      return [];
    }
    if (nodeResult.length > 2) {
      console.error("More than one match");
    }
    return _(nodeResult[0].children).pluck("name");
  };

  GeoHierarchy.findAllDescendantsAtLevel = function(name, sourceLevel, targetLevel) {
    var getLevelDescendants, sourceNode;
    getLevelDescendants = function(node) {
      var childNode;
      if (node.level === targetLevel) {
        return node;
      }
      return (function() {
        var i, len, ref, results1;
        ref = node.children;
        results1 = [];
        for (i = 0, len = ref.length; i < len; i++) {
          childNode = ref[i];
          results1.push(getLevelDescendants(childNode));
        }
        return results1;
      })();
    };
    sourceNode = GeoHierarchy.find(name, sourceLevel);
    return _.flatten(getLevelDescendants(sourceNode[0]));
  };

  GeoHierarchy.findShehia = function(targetShehia) {
    return GeoHierarchy.find(targetShehia, "SHEHIA");
  };

  GeoHierarchy.findOneShehia = function(targetShehia) {
    var shehia;
    shehia = GeoHierarchy.findShehia(targetShehia);
    switch (shehia.length) {
      case 0:
        return null;
      case 1:
        return shehia[0];
      default:
        return console.error("Multiple Shehia's found for " + targetShehia);
    }
  };

  GeoHierarchy.findAllShehiaNamesFor = function(name, level) {
    return _.pluck(GeoHierarchy.findAllDescendantsAtLevel(name, level, "SHEHIA"), "name");
  };

  GeoHierarchy.findAllDistrictsFor = function(name, level) {
    return _.pluck(GeoHierarchy.findAllDescendantsAtLevel(name, level, "DISTRICT"), "name");
  };

  GeoHierarchy.allRegions = function() {
    return _.pluck(GeoHierarchy.findAllForLevel("REGION"), "name");
  };

  GeoHierarchy.allDistricts = function() {
    return _.pluck(GeoHierarchy.findAllForLevel("DISTRICT"), "name");
  };

  GeoHierarchy.allShehias = function() {
    return _.pluck(GeoHierarchy.findAllForLevel("SHEHIA"), "name");
  };

  GeoHierarchy.allUniqueShehiaNames = function() {
    return _(_.pluck(GeoHierarchy.findAllForLevel("SHEHIA"), "name")).uniq();
  };

  GeoHierarchy.all = function(geographicHierarchy) {
    return _.pluck(GeoHierarchy.findAllForLevel(geographicHierarchy.toUpperCase()), "name");
  };

  GeoHierarchy.update = function(region, district, shehias) {
    GeoHierarchy.hierarchy[region][district] = shehias;
    GeoHierarchy.databaseObject.hierarchy = GeoHierarchy.hierarchy;
    return Coconut.database.put(GeoHierarchy.databaseObject).error(function(error) {
      console.error(error);
      return typeof options !== "undefined" && options !== null ? typeof options.error === "function" ? options.error() : void 0 : void 0;
    }).then(function() {
      return typeof options !== "undefined" && options !== null ? typeof options.success === "function" ? options.success() : void 0 : void 0;
    });
  };

  GeoHierarchy.getZoneForDistrict = function(district) {
    var districtHierarchy, region;
    districtHierarchy = GeoHierarchy.find(district, "DISTRICT");
    if (districtHierarchy.length === 1) {
      region = GeoHierarchy.find(district, "DISTRICT")[0].REGION;
      return GeoHierarchy.getZoneForRegion(region);
    }
    return null;
  };

  GeoHierarchy.getZoneForRegion = function(region) {
    if (region.match(/PEMBA/)) {
      return "PEMBA";
    } else {
      return "UNGUJA";
    }
  };

  GeoHierarchy.districtsForZone = function(zone) {
    return _.chain(GeoHierarchy.allRegions()).map(function(region) {
      if (GeoHierarchy.getZoneForRegion(region) === zone) {
        return GeoHierarchy.findAllDistrictsFor(region, "REGION");
      }
    }).flatten().compact().value();
  };

  return GeoHierarchy;

})();

GeoHierarchy.load({
  success: function() {
    return console.log("GeoHierarchy Loaded");
  }
});

FacilityHierarchy = (function() {
  function FacilityHierarchy() {}

  FacilityHierarchy.fetch = function(options) {
    return Coconut.database.get("Facility Hierarchy")["catch"](function(error) {
      console.error(error);
      return options.error(error);
    }).then(function(result) {
      return options.success(result);
    });
  };

  FacilityHierarchy.load = function(options) {
    return FacilityHierarchy.fetch({
      success: function(result) {
        FacilityHierarchy.hierarchy = result.hierarchy;
        FacilityHierarchy.databaseObject = result;
        return options.success();
      },
      error: function(error) {
        console.error("Error loading Facility Hierarchy: " + (JSON.stringify(error)));
        return options.error(error);
      }
    });
  };

  FacilityHierarchy.allDistricts = function() {
    return _.keys(FacilityHierarchy.hierarchy).sort();
  };

  FacilityHierarchy.allFacilities = function() {
    return _.chain(FacilityHierarchy.hierarchy).values().flatten().pluck("facility").value();
  };

  FacilityHierarchy.getDistrict = function(facility) {
    var result;
    if (facility) {
      facility = facility.trim();
    }
    result = null;
    _.each(FacilityHierarchy.hierarchy, function(facilityData, district) {
      if (_.chain(facilityData).pluck("facility").contains(facility).value()) {
        return result = district;
      }
    });
    if (result) {
      return result;
    }
    _.each(FacilityHierarchy.hierarchy, function(facilityData, district) {
      if (_.chain(facilityData).pluck("aliases").flatten().compact().contains(facility).value()) {
        return result = district;
      }
    });
    return result;
  };

  FacilityHierarchy.getZone = function(facility) {
    var district, districtHierarchy, region;
    district = FacilityHierarchy.getDistrict(facility);
    districtHierarchy = GeoHierarchy.find(district, "DISTRICT");
    if (districtHierarchy.length === 1) {
      region = GeoHierarchy.find(district, "DISTRICT")[0].REGION;
      if (region.match(/PEMBA/)) {
        return "PEMBA";
      } else {
        return "UNGUJA";
      }
    }
    return null;
  };

  FacilityHierarchy.facilities = function(district) {
    return _.pluck(FacilityHierarchy.hierarchy[district], "facility");
  };

  FacilityHierarchy.facilitiesForDistrict = function(district) {
    return FacilityHierarchy.facilities(district);
  };

  FacilityHierarchy.facilitiesForZone = function(zone) {
    var districtsInZone;
    districtsInZone = GeoHierarchy.districtsForZone(zone);
    _.chain(districtsInZone).map(function(district) {
      return FacilityHierarchy.facilities(district);
    }).flatten().value();
    return FacilityHierarchy.facilities(district);
  };

  FacilityHierarchy.numbers = function(district, facility) {
    var foundFacility;
    foundFacility = _(FacilityHierarchy.hierarchy[district]).find(function(result) {
      return result.facility === facility;
    });
    return foundFacility["mobile_numbers"];
  };

  FacilityHierarchy.update = function(district, targetFacility, numbers, options) {
    var facilityIndex;
    console.log(numbers);
    facilityIndex = -1;
    _(FacilityHierarchy.hierarchy[district]).find(function(facility) {
      facilityIndex++;
      return facility['facility'] === targetFacility;
    });
    if (facilityIndex === -1) {
      FacilityHierarchy.hierarchy[district].push({
        facility: targetFacility,
        mobile_numbers: numbers
      });
    } else {
      FacilityHierarchy.hierarchy[district][facilityIndex] = {
        facility: targetFacility,
        mobile_numbers: numbers
      };
    }
    FacilityHierarchy.databaseObject.hierarchy = FacilityHierarchy.hierarchy;
    return Coconut.database.put(FacilityHierarchy.databaseObject)["catch"](error)(function() {
      return console.error(error);
    }).then(response)(function() {
      FacilityHierarchy.databaseObject._rev = response.rev;
      return options != null ? options.success() : void 0;
    });
  };

  FacilityHierarchy.facilityType = function(facilityName) {
    var result;
    result = null;
    _.each(FacilityHierarchy.hierarchy, function(facilities, district) {
      var facility;
      if (result === null) {
        facility = _.find(facilities, function(facility) {
          return facility.facility === facilityName;
        });
        if (facility) {
          return result = facility.type.toUpperCase();
        }
      }
    });
    return result;
  };

  FacilityHierarchy.allPrivateFacilities = function() {
    return _.chain(FacilityHierarchy.hierarchy).values().flatten().filter(function(facility) {
      return facility.type === "private";
    }).pluck("facility").value();
  };

  return FacilityHierarchy;

})();

FacilityHierarchy.load({
  success: function() {
    return console.log("FacilityHierarchy loaded");
  }
});

_(["shehias_high_risk", "shehias_received_irs"]).each(function(docId) {
  return Coconut.database.get(docId)["catch"](function(error) {
    return console.error(JSON.stringify(error));
  }).then(function(result) {
    Coconut[docId] = result;
    return console.log("Loaded " + docId);
  });
});

Case = (function() {
  function Case(options) {
    this.spreadsheetRowString = bind(this.spreadsheetRowString, this);
    this.spreadsheetRow = bind(this.spreadsheetRow, this);
    this.daysFromSMSToCompleteHousehold = bind(this.daysFromSMSToCompleteHousehold, this);
    this.timeFromSMSToCompleteHousehold = bind(this.timeFromSMSToCompleteHousehold, this);
    this.timeFromFacilityToCompleteHousehold = bind(this.timeFromFacilityToCompleteHousehold, this);
    this.daysFromCaseNotificationToCompleteFacility = bind(this.daysFromCaseNotificationToCompleteFacility, this);
    this.timeFromCaseNotificationToCompleteFacility = bind(this.timeFromCaseNotificationToCompleteFacility, this);
    this.timeFromSMSToCaseNotification = bind(this.timeFromSMSToCaseNotification, this);
    this.moreThan48HoursSinceFacilityNotifed = bind(this.moreThan48HoursSinceFacilityNotifed, this);
    this.moreThan24HoursSinceFacilityNotifed = bind(this.moreThan24HoursSinceFacilityNotifed, this);
    this.hoursSinceFacilityNotified = bind(this.hoursSinceFacilityNotified, this);
    this.timeSinceFacilityNotified = bind(this.timeSinceFacilityNotified, this);
    this.timeFacilityNotified = bind(this.timeFacilityNotified, this);
    this.daysBetweenPositiveResultAndNotification = bind(this.daysBetweenPositiveResultAndNotification, this);
    this.fetchResults = bind(this.fetchResults, this);
    this.resultsAsArray = bind(this.resultsAsArray, this);
    this.hasCompleteNeighborHouseholdMembers = bind(this.hasCompleteNeighborHouseholdMembers, this);
    this.completeNeighborHouseholdMembers = bind(this.completeNeighborHouseholdMembers, this);
    this.completeNeighborHouseholds = bind(this.completeNeighborHouseholds, this);
    this.hasAdditionalPositiveCasesAtIndexHousehold = bind(this.hasAdditionalPositiveCasesAtIndexHousehold, this);
    this.hasCompleteIndexCaseHouseholdMembers = bind(this.hasCompleteIndexCaseHouseholdMembers, this);
    this.completeIndexCaseHouseholdMembers = bind(this.completeIndexCaseHouseholdMembers, this);
    this.followedUp = bind(this.followedUp, this);
    this.indexCaseHasNoTravelHistory = bind(this.indexCaseHasNoTravelHistory, this);
    this.indexCaseHasTravelHistory = bind(this.indexCaseHasTravelHistory, this);
    this.followedUpWithin48Hours = bind(this.followedUpWithin48Hours, this);
    this.notFollowedUpAfter48Hours = bind(this.notFollowedUpAfter48Hours, this);
    this.notCompleteFacilityAfter24Hours = bind(this.notCompleteFacilityAfter24Hours, this);
    this.hasCompleteFacility = bind(this.hasCompleteFacility, this);
    this.complete = bind(this.complete, this);
    this.questionStatus = bind(this.questionStatus, this);
    this.locationBy = bind(this.locationBy, this);
    this.highRiskShehia = bind(this.highRiskShehia, this);
    this.toJSON = bind(this.toJSON, this);
    this.fetch = bind(this.fetch, this);
    this.caseID = options != null ? options.caseID : void 0;
    if (options != null ? options.results : void 0) {
      this.loadFromResultDocs(options.results);
    }
  }

  Case.prototype.loadFromResultDocs = function(resultDocs) {
    var ref, ref1, userRequiresDeidentification;
    this.caseResults = resultDocs;
    this.questions = [];
    this["Household Members"] = [];
    this["Neighbor Households"] = [];
    userRequiresDeidentification = (((ref = Coconut.currentUser) != null ? ref.hasRole("reports") : void 0) || Coconut.currentUser === null) && !((ref1 = Coconut.currentUser) != null ? ref1.hasRole("admin") : void 0);
    return _.each(resultDocs, (function(_this) {
      return function(resultDoc) {
        var dateOfPositiveResults, day, dayMonthYearMatch, month, ref2, year;
        if (resultDoc.toJSON != null) {
          resultDoc = resultDoc.toJSON();
        }
        if (userRequiresDeidentification) {
          _.each(resultDoc, function(value, key) {
            if ((value != null) && _.contains(Coconut.identifyingAttributes, key)) {
              return resultDoc[key] = b64_sha1(value);
            }
          });
        }
        if (resultDoc.question) {
          if (_this.caseID == null) {
            _this.caseID = resultDoc["MalariaCaseID"];
          }
          if (_this.caseID !== resultDoc["MalariaCaseID"]) {
            throw "Inconsistent Case ID";
          }
          _this.questions.push(resultDoc.question);
          if (resultDoc.question === "Household Members") {
            return _this["Household Members"].push(resultDoc);
          } else if (resultDoc.question === "Household" && resultDoc.Reasonforvisitinghousehold === "Index Case Neighbors") {
            return _this["Neighbor Households"].push(resultDoc);
          } else {
            if (resultDoc.question === "Facility") {
              dateOfPositiveResults = resultDoc.DateofPositiveResults;
              if (dateOfPositiveResults != null) {
                dayMonthYearMatch = dateOfPositiveResults.match(/^(\d\d).(\d\d).(20\d\d)/);
                if (dayMonthYearMatch) {
                  ref2 = dayMonthYearMatch.slice(1), day = ref2[0], month = ref2[1], year = ref2[2];
                  if (day > 31 || month > 12) {
                    console.error("Invalid DateOfPositiveResults: " + _this);
                  } else {
                    resultDoc.DateofPositiveResults = year + "-" + month + "-" + day;
                  }
                }
              }
            }
            if (_this[resultDoc.question] != null) {
              if (_this[resultDoc.question].complete === "true" && (resultDoc.complete !== "true")) {
                console.log("Using the result marked as complete");
                return;
              } else if (_this[resultDoc.question].complete && resultDoc.complete) {
                console.warn("Duplicate complete entries for case: " + _this.caseID);
              }
            }
            return _this[resultDoc.question] = resultDoc;
          }
        } else {
          if (_this.caseID == null) {
            _this.caseID = resultDoc["caseid"];
          }
          if (_this.caseID !== resultDoc["caseid"]) {
            console.log(resultDoc);
            console.log(resultDocs);
            throw "Inconsistent Case ID. Working on " + _this.caseID + " but current doc has " + resultDoc["caseid"] + ": " + (JSON.stringify(resultDoc));
          }
          _this.questions.push("USSD Notification");
          return _this["USSD Notification"] = resultDoc;
        }
      };
    })(this));
  };

  Case.prototype.fetch = function(options) {
    return Coconut.database.query("cases/cases", {
      key: this.caseID,
      include_docs: true
    })["catch"](function(error) {
      return options != null ? options.error() : void 0;
    }).then((function(_this) {
      return function(result) {
        _this.loadFromResultDocs(_.pluck(result.rows, "doc"));
        return options != null ? options.success() : void 0;
      };
    })(this));
  };

  Case.prototype.toJSON = function() {
    var returnVal;
    returnVal = {};
    _.each(this.questions, (function(_this) {
      return function(question) {
        return returnVal[question] = _this[question];
      };
    })(this));
    return returnVal;
  };

  Case.prototype.deIdentify = function(result) {};

  Case.prototype.flatten = function(questions) {
    var returnVal;
    if (questions == null) {
      questions = this.questions;
    }
    returnVal = {};
    _.each(questions, (function(_this) {
      return function(question) {
        var type;
        type = question;
        return _.each(_this[question], function(value, field) {
          if (_.isObject(value)) {
            return _.each(value, function(arrayValue, arrayField) {
              return returnVal[question + "-" + field + ": " + arrayField] = arrayValue;
            });
          } else {
            return returnVal[question + ":" + field] = value;
          }
        });
      };
    })(this));
    return returnVal;
  };

  Case.prototype.LastModifiedAt = function() {
    return _.chain(this.toJSON()).map(function(question) {
      return question.lastModifiedAt;
    }).max(function(lastModifiedAt) {
      return lastModifiedAt != null ? lastModifiedAt.replace(/[- :]/g, "") : void 0;
    }).value();
  };

  Case.prototype.Questions = function() {
    return _.keys(this.toJSON()).join(", ");
  };

  Case.prototype.MalariaCaseID = function() {
    return this.caseID;
  };

  Case.prototype.user = function() {
    var ref, ref1, ref2, userId;
    return userId = ((ref = this.Household) != null ? ref.user : void 0) || ((ref1 = this.Facility) != null ? ref1.user : void 0) || ((ref2 = this["Case Notification"]) != null ? ref2.user : void 0);
  };

  Case.prototype.facility = function() {
    var ref, ref1;
    return ((ref = this["USSD Notification"]) != null ? ref.hf : void 0) || ((ref1 = this["Case Notification"]) != null ? ref1.FacilityName : void 0);
  };

  Case.prototype.validShehia = function() {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
    if (((ref = this.Household) != null ? ref.Shehia : void 0) && GeoHierarchy.findOneShehia(this.Household.Shehia)) {
      return (ref1 = this.Household) != null ? ref1.Shehia : void 0;
    } else if (((ref2 = this.Facility) != null ? ref2.Shehia : void 0) && GeoHierarchy.findOneShehia(this.Facility.Shehia)) {
      return (ref3 = this.Facility) != null ? ref3.Shehia : void 0;
    } else if (((ref4 = this["Case Notification"]) != null ? ref4.Shehia : void 0) && GeoHierarchy.findOneShehia((ref5 = this["Case Notification"]) != null ? ref5.Shehia : void 0)) {
      return (ref6 = this["Case Notification"]) != null ? ref6.Shehia : void 0;
    } else if (((ref7 = this["USSD Notification"]) != null ? ref7.shehia : void 0) && GeoHierarchy.findOneShehia((ref8 = this["USSD Notification"]) != null ? ref8.shehia : void 0)) {
      return (ref9 = this["USSD Notification"]) != null ? ref9.shehia : void 0;
    }
    return null;
  };

  Case.prototype.shehia = function() {
    var ref, ref1, ref2, returnVal;
    returnVal = this.validShehia();
    if (returnVal != null) {
      return returnVal;
    }
    console.warn("No valid shehia found for case: " + (this.MalariaCaseID()) + " result will be either null or unknown");
    return ((ref = this.Household) != null ? ref.Shehia : void 0) || ((ref1 = this.Facility) != null ? ref1.Shehia : void 0) || ((ref2 = this["USSD Notification"]) != null ? ref2.shehia : void 0);
  };

  Case.prototype.district = function() {
    var district, ref, ref1, ref2, shehia;
    shehia = this.validShehia();
    if (shehia != null) {
      return GeoHierarchy.findOneShehia(shehia).DISTRICT;
    } else {
      console.warn((this.MalariaCaseID()) + ": No valid shehia found, using district of reporting health facility (which may not be where the patient lives)");
      district = GeoHierarchy.swahiliDistrictName((ref = this["USSD Notification"]) != null ? ref.facility_district : void 0);
      if (_(GeoHierarchy.allDistricts()).include(district)) {
        return district;
      } else {
        console.warn((this.MalariaCaseID()) + ": The reported district (" + district + ") used for the reporting facility is not a valid district. Looking up the district for the health facility name.");
        district = GeoHierarchy.swahiliDistrictName(FacilityHierarchy.getDistrict((ref1 = this["USSD Notification"]) != null ? ref1.hf : void 0));
        if (_(GeoHierarchy.allDistricts()).include(district)) {
          return district;
        } else {
          console.warn((this.MalariaCaseID()) + ": The health facility name (" + ((ref2 = this["USSD Notification"]) != null ? ref2.hf : void 0) + ") is not valid. Giving up and returning UNKNOWN.");
          return "UNKNOWN";
        }
      }
    }
  };

  Case.prototype.highRiskShehia = function(date) {
    if (!date) {
      date = moment().startOf('year').format("YYYY-MM");
    }
    return _(Coconut.shehias_high_risk[date]).contains(this.shehia());
  };

  Case.prototype.locationBy = function(geographicLevel) {
    if (geographicLevel.match(/district/i)) {
      return this.district();
    }
    if (geographicLevel.match(/shehia/i)) {
      return this.validShehia();
    }
  };

  Case.prototype.possibleQuestions = function() {
    return ["Case Notification", "Facility", "Household", "Household Members"];
  };

  Case.prototype.questionStatus = function() {
    var result;
    result = {};
    _.each(this.possibleQuestions(), (function(_this) {
      return function(question) {
        var ref;
        if (question === "Household Members") {
          result["Household Members"] = true;
          return _.each(_this["Household Members"] != null, function(member) {
            if (member.complete === "false") {
              return result["Household Members"] = false;
            }
          });
        } else {
          return result[question] = ((ref = _this[question]) != null ? ref.complete : void 0) === "true";
        }
      };
    })(this));
    return result;
  };

  Case.prototype.complete = function() {
    return this.questionStatus()["Household Members"] === true;
  };

  Case.prototype.hasCompleteFacility = function() {
    var ref;
    return ((ref = this.Facility) != null ? ref.complete : void 0) === "true";
  };

  Case.prototype.notCompleteFacilityAfter24Hours = function() {
    return this.moreThan24HoursSinceFacilityNotifed() && !this.hasCompleteFacility();
  };

  Case.prototype.notFollowedUpAfter48Hours = function() {
    return this.moreThan48HoursSinceFacilityNotifed() && !this.followedUp();
  };

  Case.prototype.followedUpWithin48Hours = function() {
    return !this.notFollowedUpAfter48Hours();
  };

  Case.prototype.indexCaseHasTravelHistory = function() {
    var ref, ref1;
    return ((ref = this.Facility) != null ? (ref1 = ref.TravelledOvernightinpastmonth) != null ? ref1.match(/Yes/) : void 0 : void 0) || false;
  };

  Case.prototype.indexCaseHasNoTravelHistory = function() {
    return !this.indexCaseHasTravelHistory();
  };

  Case.prototype.followedUp = function() {
    var ref, ref1;
    return ((ref = this.Household) != null ? ref.complete : void 0) === "true" || ((ref1 = this.Facility) != null ? ref1.Hassomeonefromthesamehouseholdrecentlytestedpositiveatahealthfacility : void 0) === "Yes";
  };

  Case.prototype.location = function(type) {
    var ref, ref1;
    return (ref = GeoHierarchy.findOneShehia((ref1 = this.toJSON()["Case Notification"]) != null ? ref1["FacilityName"] : void 0)) != null ? ref[type.toUpperCase()] : void 0;
  };

  Case.prototype.withinLocation = function(location) {
    return this.location(location.type) === location.name;
  };

  Case.prototype.completeIndexCaseHouseholdMembers = function() {
    return _(this["Household Members"]).filter((function(_this) {
      return function(householdMember) {
        return householdMember.HeadofHouseholdName === _this["Household"].HeadofHouseholdName && householdMember.complete === "true";
      };
    })(this));
  };

  Case.prototype.hasCompleteIndexCaseHouseholdMembers = function() {
    return this.completeIndexCaseHouseholdMembers().length > 0;
  };

  Case.prototype.positiveCasesAtIndexHousehold = function() {
    return _(this.completeIndexCaseHouseholdMembers()).filter(function(householdMember) {
      return householdMember.MalariaTestResult === "PF" || householdMember.MalariaTestResult === "Mixed";
    });
  };

  Case.prototype.hasAdditionalPositiveCasesAtIndexHousehold = function() {
    return this.positiveCasesAtIndexHousehold().length > 0;
  };

  Case.prototype.completeNeighborHouseholds = function() {
    return _(this["Neighbor Households"]).filter((function(_this) {
      return function(household) {
        return household.complete === "true";
      };
    })(this));
  };

  Case.prototype.completeNeighborHouseholdMembers = function() {
    return _(this["Household Members"]).filter((function(_this) {
      return function(householdMember) {
        return householdMember.HeadofHouseholdName !== _this["Household"].HeadofHouseholdName && householdMember.complete === "true";
      };
    })(this));
  };

  Case.prototype.hasCompleteNeighborHouseholdMembers = function() {
    return this.completeIndexCaseHouseholdMembers().length > 0;
  };

  Case.prototype.positiveCasesAtNeighborHouseholds = function() {
    return _(this.completeNeighborHouseholdMembers()).filter(function(householdMember) {
      return householdMember.MalariaTestResult === "PF" || householdMember.MalariaTestResult === "Mixed";
    });
  };

  Case.prototype.positiveCasesAtIndexHouseholdAndNeighborHouseholds = function() {
    return _(this["Household Members"]).filter((function(_this) {
      return function(householdMember) {
        return householdMember.MalariaTestResult === "PF" || householdMember.MalariaTestResult === "Mixed";
      };
    })(this));
  };

  Case.prototype.numberPositiveCasesAtIndexHouseholdAndNeighborHouseholds = function() {
    return this.positiveCasesAtIndexHouseholdAndNeighborHouseholds().length;
  };

  Case.prototype.numberHouseholdOrNeighborMembers = function() {
    return this["Household Members"].length;
  };

  Case.prototype.numberHouseholdOrNeighborMembersTested = function() {
    return _(this["Household Members"]).filter((function(_this) {
      return function(householdMember) {
        return householdMember.MalariaTestResult === "NPF";
      };
    })(this)).length;
  };

  Case.prototype.positiveCasesIncludingIndex = function() {
    if (this["Facility"]) {
      return this.positiveCasesAtIndexHouseholdAndNeighborHouseholds().concat(_.extend(this["Facility"], this["Household"]));
    } else if (this["USSD Notification"]) {
      return this.positiveCasesAtIndexHouseholdAndNeighborHouseholds().concat(_.extend(this["USSD Notification"], this["Household"], {
        MalariaCaseID: this.MalariaCaseID()
      }));
    }
  };

  Case.prototype.indexCasePatientName = function() {
    var ref, ref1, ref2;
    if (((ref = this["Facility"]) != null ? ref.complete : void 0) === "true") {
      return this["Facility"].FirstName + " " + this["Facility"].LastName;
    }
    if (this["USSD Notification"] != null) {
      return (ref1 = this["USSD Notification"]) != null ? ref1.name : void 0;
    }
    if (this["Case Notification"] != null) {
      return (ref2 = this["Case Notification"]) != null ? ref2.Name : void 0;
    }
  };

  Case.prototype.indexCaseDiagnosisDate = function() {
    var date, ref;
    if (((ref = this["Facility"]) != null ? ref.DateofPositiveResults : void 0) != null) {
      date = this["Facility"].DateofPositiveResults;
      if (date.match(/^20\d\d/)) {
        return moment(this["Facility"].DateofPositiveResults).format("YYYY-MM-DD");
      } else {
        return moment(this["Facility"].DateofPositiveResults, "DD-MM-YYYY").format("YYYY-MM-DD");
      }
    } else if (this["USSD Notification"] != null) {
      return moment(this["USSD Notification"].date).format("YYYY-MM-DD");
    }
  };

  Case.prototype.householdMembersDiagnosisDate = function() {
    var returnVal;
    returnVal = [];
    return _.each(this["Household Members"] != null, function(member) {
      if (member.MalariaTestResult === "PF" || member.MalariaTestResult === "Mixed") {
        return returnVal.push(member.lastModifiedAt);
      }
    });
  };

  Case.prototype.resultsAsArray = function() {
    return _.chain(this.possibleQuestions()).map((function(_this) {
      return function(question) {
        return _this[question];
      };
    })(this)).flatten().compact().value();
  };

  Case.prototype.fetchResults = function(options) {
    var count, results;
    results = _.map(this.resultsAsArray(), (function(_this) {
      return function(result) {
        var returnVal;
        returnVal = new Result();
        returnVal.id = result._id;
        return returnVal;
      };
    })(this));
    count = 0;
    _.each(results, function(result) {
      return result.fetch({
        success: function() {
          count += 1;
          if (count >= results.length) {
            return options.success(results);
          }
        }
      });
    });
    return results;
  };

  Case.prototype.updateCaseID = function(newCaseID) {
    return this.fetchResults({
      success: function(results) {
        return _.each(results, function(result) {
          if (result.attributes.MalariaCaseID == null) {
            throw "No MalariaCaseID";
          }
          return result.save({
            MalariaCaseID: newCaseID
          });
        });
      }
    });
  };

  Case.prototype.issuesRequiringCleaning = function() {
    var issues, questionTypes, ref, resultCount;
    resultCount = {};
    questionTypes = "USSD Notification, Case Notification, Facility, Household, Household Members".split(/, /);
    _.each(questionTypes, function(questionType) {
      return resultCount[questionType] = 0;
    });
    _.each(this.caseResults, function(result) {
      if (result.caseid != null) {
        resultCount["USSD Notification"]++;
      }
      if (result.question != null) {
        return resultCount[result.question]++;
      }
    });
    issues = [];
    _.each(questionTypes.slice(0, 4), function(questionType) {
      if (resultCount[questionType] > 1) {
        return issues.push(resultCount[questionType] + " " + questionType + "s");
      }
    });
    if (!this.followedUp()) {
      issues.push("Not followed up");
    }
    if (this.caseResults.length === 1) {
      issues.push("Orphaned result");
    }
    if (!((this["Case Notification"] != null) || ((ref = this["Case Notification"]) != null ? ref.length : void 0) === 0)) {
      issues.push("Missing case notification");
    }
    return issues;
  };

  Case.prototype.allResultsByQuestion = function() {
    var returnVal;
    returnVal = {};
    _.each("USSD Notification, Case Notification, Facility, Household".split(/, /), function(question) {
      return returnVal[question] = [];
    });
    _.each(this.caseResults, function(result) {
      if (result["question"] != null) {
        return returnVal[result["question"]].push(result);
      } else if (result.hf != null) {
        return returnVal["USSD Notification"].push(result);
      }
    });
    return returnVal;
  };

  Case.prototype.redundantResults = function() {
    var redundantResults;
    redundantResults = [];
    return _.each(this.allResultsByQuestion, function(results, question) {
      return console.log(_.sort(results, "createdAt"));
    });
  };

  Case.prototype.daysBetweenPositiveResultAndNotification = function() {
    var date, dateOfPositiveResults, notificationDate, ref;
    dateOfPositiveResults = ((ref = this["Facility"]) != null ? ref.DateofPositiveResults : void 0) != null ? (date = this["Facility"].DateofPositiveResults, date.match(/^20\d\d/) ? moment(this["Facility"].DateofPositiveResults).format("YYYY-MM-DD") : moment(this["Facility"].DateofPositiveResults, "DD-MM-YYYY").format("YYYY-MM-DD")) : void 0;
    notificationDate = this["USSD Notification"] != null ? this["USSD Notification"].date : void 0;
    if ((dateOfPositiveResults != null) && (notificationDate != null)) {
      return Math.abs(moment(dateOfPositiveResults).diff(notificationDate, 'days'));
    }
  };

  Case.prototype.timeFacilityNotified = function() {
    if (this["USSD Notification"] != null) {
      return this["USSD Notification"].date;
    } else {
      return null;
    }
  };

  Case.prototype.timeSinceFacilityNotified = function() {
    var timeFacilityNotified;
    timeFacilityNotified = this.timeFacilityNotified();
    if (timeFacilityNotified != null) {
      return moment().diff(timeFacilityNotified);
    } else {
      return null;
    }
  };

  Case.prototype.hoursSinceFacilityNotified = function() {
    var timeSinceFacilityNotified;
    timeSinceFacilityNotified = this.timeSinceFacilityNotified();
    if (timeSinceFacilityNotified != null) {
      return moment.duration(timeSinceFacilityNotified).asHours();
    } else {
      return null;
    }
  };

  Case.prototype.moreThan24HoursSinceFacilityNotifed = function() {
    return this.hoursSinceFacilityNotified() > 24;
  };

  Case.prototype.moreThan48HoursSinceFacilityNotifed = function() {
    return this.hoursSinceFacilityNotified() > 48;
  };

  Case.prototype.timeFromSMSToCaseNotification = function() {
    var ref, ref1;
    if ((this["Case Notification"] != null) && (this["USSD Notification"] != null)) {
      return moment((ref1 = this["Case Notification"]) != null ? ref1.createdAt : void 0).diff((ref = this["USSD Notification"]) != null ? ref.date : void 0);
    }
  };

  Case.prototype.timeFromCaseNotificationToCompleteFacility = function() {
    var ref, ref1;
    if (((ref = this["Facility"]) != null ? ref.complete : void 0) === "true" && (this["Case Notification"] != null)) {
      return moment(this["Facility"].lastModifiedAt.replace(/\+0\d:00/, "")).diff((ref1 = this["Case Notification"]) != null ? ref1.createdAt : void 0);
    }
  };

  Case.prototype.daysFromCaseNotificationToCompleteFacility = function() {
    var ref;
    if (((ref = this["Facility"]) != null ? ref.complete : void 0) === "true" && (this["Case Notification"] != null)) {
      return moment.duration(this.timeFromCaseNotificationToCompleteFacility()).asDays();
    }
  };

  Case.prototype.timeFromFacilityToCompleteHousehold = function() {
    var ref, ref1;
    if (((ref = this["Household"]) != null ? ref.complete : void 0) === "true" && (this["Facility"] != null)) {
      return moment(this["Household"].lastModifiedAt.replace(/\+0\d:00/, "")).diff((ref1 = this["Facility"]) != null ? ref1.lastModifiedAt : void 0);
    }
  };

  Case.prototype.timeFromSMSToCompleteHousehold = function() {
    var ref, ref1;
    if (((ref = this["Household"]) != null ? ref.complete : void 0) === "true" && (this["USSD Notification"] != null)) {
      return moment(this["Household"].lastModifiedAt.replace(/\+0\d:00/, "")).diff((ref1 = this["USSD Notification"]) != null ? ref1.date : void 0);
    }
  };

  Case.prototype.daysFromSMSToCompleteHousehold = function() {
    var ref;
    if (((ref = this["Household"]) != null ? ref.complete : void 0) === "true" && (this["USSD Notification"] != null)) {
      return moment.duration(this.timeFromSMSToCompleteHousehold()).asDays();
    }
  };

  Case.prototype.spreadsheetRow = function(question) {
    var spreadsheetRowObjectForResult;
    if (Coconut.spreadsheetHeader == null) {
      console.error("Must call loadSpreadsheetHeader at least once before calling spreadsheetRow");
    }
    spreadsheetRowObjectForResult = function(fields, result) {
      if (result != null) {
        return _(fields).map((function(_this) {
          return function(field) {
            if (result[field] != null) {
              if (_.contains(Coconut.identifyingAttributes, field)) {
                return b64_sha1(result[field]);
              } else {
                return result[field];
              }
            } else {
              return "";
            }
          };
        })(this));
      } else {
        return null;
      }
    };
    if (question === "Household Members") {
      return _(this[question]).map(function(householdMemberResult) {
        return spreadsheetRowObjectForResult(Coconut.spreadsheetHeader[question], householdMemberResult);
      });
    } else {
      return spreadsheetRowObjectForResult(Coconut.spreadsheetHeader[question], this[question]);
    }
  };

  Case.prototype.spreadsheetRowString = function(question) {
    var result;
    if (question === "Household Members") {
      return _(this.spreadsheetRow(question)).map(function(householdMembersRows) {
        var result;
        result = _(householdMembersRows).map(function(data) {
          return "\"" + data + "\"";
        }).join(",");
        if (result !== "") {
          return result += "--EOR--";
        }
      }).join("");
    } else {
      result = _(this.spreadsheetRow(question)).map(function(data) {
        return "\"" + data + "\"";
      }).join(",");
      if (result !== "") {
        return result += "--EOR--";
      }
    }
  };

  return Case;

})();

Case.loadSpreadsheetHeader = function(options) {
  if (Coconut.spreadsheetHeader) {
    return options.success();
  } else {
    return Coconut.database.get("spreadsheet_header")["catch"](function(error) {
      console.error(error);
      return options != null ? options.error() : void 0;
    }).then((function(_this) {
      return function(result) {
        Coconut.spreadsheetHeader = result.fields;
        return options.success();
      };
    })(this));
  }
};

Case.updateCaseSpreadsheetDocs = function(options) {
  var caseSpreadsheetData, changeSequence, updateCaseSpreadsheetDocs;
  caseSpreadsheetData = {
    _id: "CaseSpreadsheetData"
  };
  changeSequence = 0;
  updateCaseSpreadsheetDocs = function(changeSequence, caseSpreadsheetData) {
    return Case.updateCaseSpreadsheetDocsSince({
      changeSequence: changeSequence,
      error: function(error) {
        console.log("Error updating CaseSpreadsheetData:");
        console.log(error);
        return typeof options.error === "function" ? options.error() : void 0;
      },
      success: function(numberCasesChanged, lastChangeSequenceProcessed) {
        console.log("Updated CaseSpreadsheetData");
        caseSpreadsheetData.lastChangeSequenceProcessed = lastChangeSequenceProcessed;
        console.log(caseSpreadsheetData);
        return Coconut.database.saveDoc(caseSpreadsheetData, {
          success: function() {
            console.log(numberCasesChanged);
            if (numberCasesChanged > 0) {
              return Case.updateCaseSpreadsheetDocs(options);
            } else {
              return options != null ? typeof options.success === "function" ? options.success() : void 0 : void 0;
            }
          }
        });
      }
    });
  };
  return Coconut.database.openDoc("CaseSpreadsheetData", {
    success: function(result) {
      caseSpreadsheetData = result;
      changeSequence = result.lastChangeSequenceProcessed;
      return updateCaseSpreadsheetDocs(changeSequence, caseSpreadsheetData);
    },
    error: function(error) {
      console.log("Couldn't find 'CaseSpreadsheetData' using defaults: changeSequence: " + changeSequence);
      return updateCaseSpreadsheetDocs(changeSequence, caseSpreadsheetData);
    }
  });
};

Case.updateCaseSpreadsheetDocsSince = function(options) {
  return Case.loadSpreadsheetHeader({
    success: function() {
      return $.ajax({
        url: "/" + (Coconut.config.database_name()) + "/_changes",
        dataType: "json",
        data: {
          since: options.changeSequence,
          include_docs: true,
          limit: 100000
        },
        error: (function(_this) {
          return function(error) {
            console.log("Error downloading changes after " + options.changeSequence + ":");
            console.log(error);
            return typeof options.error === "function" ? options.error(error) : void 0;
          };
        })(this),
        success: (function(_this) {
          return function(changes) {
            var changedCases, lastChangeSequence, ref;
            changedCases = _(changes.results).chain().map(function(change) {
              if ((change.doc.MalariaCaseID != null) && (change.doc.question != null)) {
                return change.doc.MalariaCaseID;
              }
            }).compact().uniq().value();
            lastChangeSequence = (ref = changes.results.pop()) != null ? ref.seq : void 0;
            return Case.updateSpreadsheetForCases({
              caseIDs: changedCases,
              error: function(error) {
                console.log("Error updating " + changedCases.length + " cases, lastChangeSequence: " + lastChangeSequence);
                return console.log(error);
              },
              success: function() {
                console.log("Updated " + changedCases.length + " cases, lastChangeSequence: " + lastChangeSequence);
                return options.success(changedCases.length, lastChangeSequence);
              }
            });
          };
        })(this)
      });
    }
  });
};

Case.updateSpreadsheetForCases = function(options) {
  var docsToSave, finished, questions;
  docsToSave = [];
  questions = "USSD Notification,Case Notification,Facility,Household,Household Members".split(",");
  if (options.caseIDs.length === 0) {
    options.success();
  }
  finished = _.after(options.caseIDs.length, function() {
    return Coconut.database.bulkSave({
      docs: docsToSave
    }, {
      error: function(error) {
        return console.log(error);
      },
      success: function() {
        return options.success();
      }
    });
  });
  return _(options.caseIDs).each(function(caseID) {
    var malariaCase;
    malariaCase = new Case({
      caseID: caseID
    });
    return malariaCase.fetch({
      error: function(error) {
        return console.log(error);
      },
      success: function() {
        var docId, spreadsheet_row_doc;
        docId = "spreadsheet_row_" + caseID;
        spreadsheet_row_doc = {
          _id: docId
        };
        return Coconut.database.openDoc(docId, {
          success: function(result) {
            spreadsheet_row_doc = result;
            _(questions).each(function(question) {
              return spreadsheet_row_doc[question] = malariaCase.spreadsheetRowString(question);
            });
            docsToSave.push(spreadsheet_row_doc);
            return finished();
          },
          error: function() {
            _(questions).each(function(question) {
              return spreadsheet_row_doc[question] = malariaCase.spreadsheetRowString(question);
            });
            docsToSave.push(spreadsheet_row_doc);
            return finished();
          }
        });
      }
    });
  });
};
