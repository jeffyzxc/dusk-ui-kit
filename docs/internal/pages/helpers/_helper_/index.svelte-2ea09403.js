import{_ as W}from"../../../chunks/preload-helper-f9a853e0.js";import{S as X,i as Y,s as Z,w as S,k as O,l as U,x as P,m as B,y as D,g as $,o as v,p as A,q as b,B as N,d as m,F as ee,e as C,t as d,c as y,a as H,h as g,M as h,j as J,n as F,b as te,H as le,ah as se}from"../../../chunks/vendor-c405bb7e.js";import{S as re}from"../../../chunks/@ui-kit-example-9885f584.js";import{R as L}from"../../../chunks/RichText-8eedaaea.js";import{p as ne}from"../../../chunks/stores-5ae78fcc.js";import"../../../chunks/sizes-55dbb9c2.js";function K(i,t,s){const r=i.slice();return r[5]=t[s],r[7]=s,r}function ae(i){let t,s=i[0].params.helper+"",r,l,f,n,a,e,p,c,w,o="{",_,R,x=i[0].params.helper+"",E,q,M="}",I,V,z;return{c(){t=C("h1"),r=d(s),l=O(),f=C("h2"),n=d("Usage"),a=O(),e=C("pre"),p=d(`
    `),c=C("code"),w=d(`
      import `),_=d(o),R=d(" "),E=d(x),q=d(" "),I=d(M),V=d(` from "@dusk-network/helpers";
    `),z=d(`
  `)},l(u){t=y(u,"H1",{});var k=H(t);r=g(k,s),k.forEach(m),l=B(u),f=y(u,"H2",{});var G=H(f);n=g(G,"Usage"),G.forEach(m),a=B(u),e=y(u,"PRE",{});var T=H(e);p=g(T,`
    `),c=y(T,"CODE",{});var j=H(c);w=g(j,`
      import `),_=g(j,o),R=g(j," "),E=g(j,x),q=g(j," "),I=g(j,M),V=g(j,` from "@dusk-network/helpers";
    `),j.forEach(m),z=g(T,`
  `),T.forEach(m)},m(u,k){$(u,t,k),h(t,r),$(u,l,k),$(u,f,k),h(f,n),$(u,a,k),$(u,e,k),h(e,p),h(e,c),h(c,w),h(c,_),h(c,R),h(c,E),h(c,q),h(c,I),h(c,V),h(e,z)},p(u,k){k&1&&s!==(s=u[0].params.helper+"")&&J(r,s),k&1&&x!==(x=u[0].params.helper+"")&&J(E,x)},d(u){u&&m(t),u&&m(l),u&&m(f),u&&m(a),u&&m(e)}}}function oe(i){let t,s;return{c(){t=C("h2"),s=d("Examples")},l(r){t=y(r,"H2",{});var l=H(t);s=g(l,"Examples"),l.forEach(m)},m(r,l){$(r,t,l),h(t,s)},d(r){r&&m(t)}}}function fe(i){let t,s;return t=new L({props:{class:"w-full max-w-full mb-10",$$slots:{default:[ce]},$$scope:{ctx:i}}}),{c(){S(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,l){D(t,r,l),s=!0},p(r,l){const f={};l&256&&(f.$$scope={dirty:l,ctx:r}),t.$set(f)},i(r){s||(b(t.$$.fragment,r),s=!0)},o(r){v(t.$$.fragment,r),s=!1},d(r){N(t,r)}}}function ie(i){let t,s,r=Object.entries(i[2]),l=[];for(let n=0;n<r.length;n+=1)l[n]=Q(K(i,r,n));const f=n=>v(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=U()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);t=U()},m(n,a){for(let e=0;e<l.length;e+=1)l[e].m(n,a);$(n,t,a),s=!0},p(n,a){if(a&6){r=Object.entries(n[2]);let e;for(e=0;e<r.length;e+=1){const p=K(n,r,e);l[e]?(l[e].p(p,a),b(l[e],1)):(l[e]=Q(p),l[e].c(),b(l[e],1),l[e].m(t.parentNode,t))}for(F(),e=r.length;e<l.length;e+=1)f(e);A()}},i(n){if(!s){for(let a=0;a<r.length;a+=1)b(l[a]);s=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)v(l[a]);s=!1},d(n){le(l,n),n&&m(t)}}}function ce(i){let t,s;return{c(){t=C("p"),s=d("No examples found!")},l(r){t=y(r,"P",{});var l=H(t);s=g(l,"No examples found!"),l.forEach(m)},m(r,l){$(r,t,l),h(t,s)},d(r){r&&m(t)}}}function Q(i){let t,s,r,l,f;var n=i[5][1];function a(e){return{}}return n&&(s=new n(a())),l=new se({props:{code:i[1][i[5][i[7]]],langtag:!0}}),{c(){t=C("div"),s&&S(s.$$.fragment),r=O(),S(l.$$.fragment),this.h()},l(e){t=y(e,"DIV",{class:!0});var p=H(t);s&&P(s.$$.fragment,p),p.forEach(m),r=B(e),P(l.$$.fragment,e),this.h()},h(){te(t,"class","my-10")},m(e,p){$(e,t,p),s&&D(s,t,null),$(e,r,p),D(l,e,p),f=!0},p(e,p){if(n!==(n=e[5][1])){if(s){F();const w=s;v(w.$$.fragment,1,0,()=>{N(w,1)}),A()}n?(s=new n(a()),S(s.$$.fragment),b(s.$$.fragment,1),D(s,t,null)):s=null}const c={};p&6&&(c.code=e[1][e[5][e[7]]]),l.$set(c)},i(e){f||(s&&b(s.$$.fragment,e),b(l.$$.fragment,e),f=!0)},o(e){s&&v(s.$$.fragment,e),v(l.$$.fragment,e),f=!1},d(e){e&&m(t),s&&N(s),e&&m(r),N(l,e)}}}function ue(i){let t,s,r,l,f,n,a,e;t=new L({props:{class:"w-full max-w-full mb-10",$$slots:{default:[ae]},$$scope:{ctx:i}}}),r=new L({props:{class:"w-full max-w-full mb-10",$$slots:{default:[oe]},$$scope:{ctx:i}}});const p=[ie,fe],c=[];function w(o,_){return o[2]?0:1}return f=w(i),n=c[f]=p[f](i),{c(){S(t.$$.fragment),s=O(),S(r.$$.fragment),l=O(),n.c(),a=U()},l(o){P(t.$$.fragment,o),s=B(o),P(r.$$.fragment,o),l=B(o),n.l(o),a=U()},m(o,_){D(t,o,_),$(o,s,_),D(r,o,_),$(o,l,_),c[f].m(o,_),$(o,a,_),e=!0},p(o,[_]){const R={};_&257&&(R.$$scope={dirty:_,ctx:o}),t.$set(R);const x={};_&256&&(x.$$scope={dirty:_,ctx:o}),r.$set(x);let E=f;f=w(o),f===E?c[f].p(o,_):(F(),v(c[E],1,1,()=>{c[E]=null}),A(),n=c[f],n?n.p(o,_):(n=c[f]=p[f](o),n.c()),b(n,1),n.m(a.parentNode,a))},i(o){e||(b(t.$$.fragment,o),b(r.$$.fragment,o),b(n),e=!0)},o(o){v(t.$$.fragment,o),v(r.$$.fragment,o),v(n),e=!1},d(o){N(t,o),o&&m(s),N(r,o),o&&m(l),c[f].d(o),o&&m(a)}}}async function ke(){return{props:{Examples:await W(()=>import("../../../chunks/index-c3d25d28.js"),["chunks/index-c3d25d28.js","assets/index-9b9e0e4a.css","chunks/vendor-c405bb7e.js","assets/vendor-47c9022a.css","chunks/Card-0ea18203.js","assets/Card-bfabaf8c.css","chunks/sizes-55dbb9c2.js","chunks/CookieBanner-e1dffd52.js","assets/CookieBanner-601a153b.css","chunks/icons-b9ac513f.js","chunks/RichText-8eedaaea.js","assets/RichText-d869fe0e.css"]),Code:re}}}function me(i,t,s){let r,l,f;ee(i,ne,e=>s(0,f=e));let{Examples:n}=t,{Code:a}=t;return i.$$set=e=>{"Examples"in e&&s(3,n=e.Examples),"Code"in e&&s(4,a=e.Code)},i.$$.update=()=>{i.$$.dirty&9&&s(2,r=n.helpers&&n.helpers[f.params.helper]),i.$$.dirty&17&&s(1,l=a.helpers&&a.helpers[f.params.helper])},[f,l,r,n,a]}class be extends X{constructor(t){super();Y(this,t,me,ue,Z,{Examples:3,Code:4})}}export{be as default,ke as load};
