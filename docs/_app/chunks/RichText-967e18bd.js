import{S as g,i as L,s as x,e as v,c as A,a as z,d as m,b as R,F as o,f as E,r as D,u as T,w as S,x as k,I as j,B as X,J as H,M,O,P as F,Q as G,Z as C,_ as U,l as I,$ as p,H as b}from"./vendor-6f98b0e1.js";import{c as h}from"./contexts-7e42e2fb.js";import{s as _}from"./sizes-d64c58d1.js";function q(i){let e;const l=i[5].default,t=M(l,i,i[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&16)&&O(t,l,s,s[4],e?G(l,s[4],r,null):F(s[4]),null)},i(s){e||(k(t,s),e=!0)},o(s){T(t,s),e=!1},d(s){t&&t.d(s)}}}function w(i){let e,l=C(i[0])+"",t;return{c(){e=new U,t=I(),this.h()},l(s){e=p(s),t=I(),this.h()},h(){e.a=t},m(s,r){e.m(l,s,r),E(s,t,r)},p(s,r){r&1&&l!==(l=C(s[0])+"")&&e.p(l)},i:b,o:b,d(s){s&&m(t),s&&e.d()}}}function B(i){let e,l,t,s,r;const f=[w,q],c=[];function u(a,n){return a[0]?0:1}return l=u(i),t=c[l]=f[l](i),{c(){e=v("div"),t.c(),this.h()},l(a){e=A(a,"DIV",{class:!0});var n=z(e);t.l(n),n.forEach(m),this.h()},h(){R(e,"class",s=""+((i[3].class||"")+" duk-rich-text")),o(e,"duk-rich-text--small",i[1]===_.RICH_TEXT.SMALL),o(e,"duk-rich-text--large",i[1]===_.RICH_TEXT.LARGE),o(e,"duk-rich-text--xl",i[1]===_.RICH_TEXT.XL),o(e,"duk-rich-text--xxl",i[1]===_.RICH_TEXT.XXL),o(e,"duk-rich-text--hero",i[2]===h.RICH_TEXT.HERO),o(e,"duk-rich-text--card",i[2]===h.RICH_TEXT.CARD)},m(a,n){E(a,e,n),c[l].m(e,null),r=!0},p(a,[n]){let d=l;l=u(a),l===d?c[l].p(a,n):(D(),T(c[d],1,1,()=>{c[d]=null}),S(),t=c[l],t?t.p(a,n):(t=c[l]=f[l](a),t.c()),k(t,1),t.m(e,null)),(!r||n&8&&s!==(s=""+((a[3].class||"")+" duk-rich-text")))&&R(e,"class",s),n&10&&o(e,"duk-rich-text--small",a[1]===_.RICH_TEXT.SMALL),n&10&&o(e,"duk-rich-text--large",a[1]===_.RICH_TEXT.LARGE),n&10&&o(e,"duk-rich-text--xl",a[1]===_.RICH_TEXT.XL),n&10&&o(e,"duk-rich-text--xxl",a[1]===_.RICH_TEXT.XXL),n&12&&o(e,"duk-rich-text--hero",a[2]===h.RICH_TEXT.HERO),n&12&&o(e,"duk-rich-text--card",a[2]===h.RICH_TEXT.CARD)},i(a){r||(k(t),r=!0)},o(a){T(t),r=!1},d(a){a&&m(e),c[l].d()}}}function J(i,e,l){let{$$slots:t={},$$scope:s}=e,{markdown:r}=e,{size:f=_.RICH_TEXT.DEFAULT}=e;const c=j("DUK:rich-text:context");return i.$$set=u=>{l(3,e=X(X({},e),H(u))),"markdown"in u&&l(0,r=u.markdown),"size"in u&&l(1,f=u.size),"$$scope"in u&&l(4,s=u.$$scope)},e=H(e),[r,f,c,e,s,t]}class V extends g{constructor(e){super();L(this,e,J,B,x,{markdown:0,size:1})}}export{V as R};
