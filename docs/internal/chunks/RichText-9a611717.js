import{S as L,i as b,s as x,e as v,c as A,a as D,d as T,b as R,H as o,f as C,r as z,u as m,w as O,x as k,R as S,y as G,B as E,M as X,G as K,J as M,K as U,L as j,a2 as H,a3 as F,l as I,a4 as p,F as g}from"./vendor-e738772d.js";import{s as _,c as d}from"./sizes-430d7b1e.js";function q(i){let e;const l=i[5].default,t=K(l,i,i[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&16)&&M(t,l,s,s[4],e?j(l,s[4],r,null):U(s[4]),null)},i(s){e||(k(t,s),e=!0)},o(s){m(t,s),e=!1},d(s){t&&t.d(s)}}}function w(i){let e,l=H(i[0])+"",t;return{c(){e=new F,t=I(),this.h()},l(s){e=p(s),t=I(),this.h()},h(){e.a=t},m(s,r){e.m(l,s,r),C(s,t,r)},p(s,r){r&1&&l!==(l=H(s[0])+"")&&e.p(l)},i:g,o:g,d(s){s&&T(t),s&&e.d()}}}function B(i){let e,l,t,s,r;const f=[w,q],c=[];function u(a,n){return a[0]?0:1}return l=u(i),t=c[l]=f[l](i),{c(){e=v("div"),t.c(),this.h()},l(a){e=A(a,"DIV",{class:!0});var n=D(e);t.l(n),n.forEach(T),this.h()},h(){R(e,"class",s=""+((i[3].class||"")+" duk-rich-text")),o(e,"duk-rich-text--small",i[1]===_.RICH_TEXT.SMALL),o(e,"duk-rich-text--large",i[1]===_.RICH_TEXT.LARGE),o(e,"duk-rich-text--xl",i[1]===_.RICH_TEXT.XL),o(e,"duk-rich-text--xxl",i[1]===_.RICH_TEXT.XXL),o(e,"duk-rich-text--hero",i[2]===d.RICH_TEXT.HERO),o(e,"duk-rich-text--card",i[2]===d.RICH_TEXT.CARD)},m(a,n){C(a,e,n),c[l].m(e,null),r=!0},p(a,[n]){let h=l;l=u(a),l===h?c[l].p(a,n):(z(),m(c[h],1,1,()=>{c[h]=null}),O(),t=c[l],t?t.p(a,n):(t=c[l]=f[l](a),t.c()),k(t,1),t.m(e,null)),(!r||n&8&&s!==(s=""+((a[3].class||"")+" duk-rich-text")))&&R(e,"class",s),n&10&&o(e,"duk-rich-text--small",a[1]===_.RICH_TEXT.SMALL),n&10&&o(e,"duk-rich-text--large",a[1]===_.RICH_TEXT.LARGE),n&10&&o(e,"duk-rich-text--xl",a[1]===_.RICH_TEXT.XL),n&10&&o(e,"duk-rich-text--xxl",a[1]===_.RICH_TEXT.XXL),n&12&&o(e,"duk-rich-text--hero",a[2]===d.RICH_TEXT.HERO),n&12&&o(e,"duk-rich-text--card",a[2]===d.RICH_TEXT.CARD)},i(a){r||(k(t),r=!0)},o(a){m(t),r=!1},d(a){a&&T(e),c[l].d()}}}function J(i,e,l){let{$$slots:t={},$$scope:s}=e,{markdown:r}=e,{size:f=_.RICH_TEXT.DEFAULT}=e;const c=S("DUK:rich-text:context");return G("DUK:accordion:context",d.ACCORDION.RICH_TEXT),i.$$set=u=>{l(3,e=E(E({},e),X(u))),"markdown"in u&&l(0,r=u.markdown),"size"in u&&l(1,f=u.size),"$$scope"in u&&l(4,s=u.$$scope)},e=X(e),[r,f,c,e,s,t]}class y extends L{constructor(e){super();b(this,e,J,B,x,{markdown:0,size:1})}}export{y as R};
