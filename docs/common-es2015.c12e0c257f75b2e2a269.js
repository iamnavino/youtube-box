(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{l5mm:function(e,n,c){"use strict";c.d(n,"a",(function(){return t}));var r=c("HDdC"),u=c("D0XW"),o=c("Y7HM");function t(e=0,n=u.a){return(!Object(o.a)(e)||e<0)&&(e=0),n&&"function"==typeof n.schedule||(n=u.a),new r.a(c=>(c.add(n.schedule(s,e,{subscriber:c,counter:0,period:e})),c))}function s(e){const{subscriber:n,counter:c,period:r}=e;n.next(c),this.schedule({subscriber:n,counter:c+1,period:r},r)}}}]);