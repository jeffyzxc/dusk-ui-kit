import{_ as M}from"../../../chunks/preload-helper-f9a853e0.js";import{S as Q,i as W,s as X,j as y,k as O,l as T,m as P,n as I,o as H,f as h,u as b,w as V,x as g,v as N,d as m,D as Y,e as D,t as k,c as R,a as S,g as v,I as $,h as G,r as q,b as Z,E as ee,a5 as te}from"../../../chunks/vendor-e738772d.js";import{S as le}from"../../../chunks/@ui-kit-example-d69e01a7.js";import{R as z}from"../../../chunks/RichText-9a611717.js";import{p as se}from"../../../chunks/stores-7f7ae515.js";import"../../../chunks/sizes-430d7b1e.js";function J(i,t,s){const r=i.slice();return r[5]=t[s],r[7]=s,r}function re(i){let t,s=i[0].params.helper+"",r,l,f,a,o,e,c,_,E="{",n,p,w=i[0].params.helper+"",j,C,A="}",U,B;return{c(){t=D("h1"),r=k(s),l=O(),f=D("h2"),a=k("Usage"),o=O(),e=D("pre"),c=D("code"),_=k("import "),n=k(E),p=k(" "),j=k(w),C=k(" "),U=k(A),B=k(' from "@dusk-network/helpers";')},l(u){t=R(u,"H1",{});var d=S(t);r=v(d,s),d.forEach(m),l=I(u),f=R(u,"H2",{});var L=S(f);a=v(L,"Usage"),L.forEach(m),o=I(u),e=R(u,"PRE",{});var F=S(e);c=R(F,"CODE",{});var x=S(c);_=v(x,"import "),n=v(x,E),p=v(x," "),j=v(x,w),C=v(x," "),U=v(x,A),B=v(x,' from "@dusk-network/helpers";'),x.forEach(m),F.forEach(m)},m(u,d){h(u,t,d),$(t,r),h(u,l,d),h(u,f,d),$(f,a),h(u,o,d),h(u,e,d),$(e,c),$(c,_),$(c,n),$(c,p),$(c,j),$(c,C),$(c,U),$(c,B)},p(u,d){d&1&&s!==(s=u[0].params.helper+"")&&G(r,s),d&1&&w!==(w=u[0].params.helper+"")&&G(j,w)},d(u){u&&m(t),u&&m(l),u&&m(f),u&&m(o),u&&m(e)}}}function ae(i){let t,s;return{c(){t=D("h2"),s=k("Examples")},l(r){t=R(r,"H2",{});var l=S(t);s=v(l,"Examples"),l.forEach(m)},m(r,l){h(r,t,l),$(t,s)},d(r){r&&m(t)}}}function ne(i){let t,s;return t=new z({props:{class:"w-full max-w-full mb-10",$$slots:{default:[fe]},$$scope:{ctx:i}}}),{c(){y(t.$$.fragment)},l(r){P(t.$$.fragment,r)},m(r,l){H(t,r,l),s=!0},p(r,l){const f={};l&256&&(f.$$scope={dirty:l,ctx:r}),t.$set(f)},i(r){s||(g(t.$$.fragment,r),s=!0)},o(r){b(t.$$.fragment,r),s=!1},d(r){N(t,r)}}}function oe(i){let t,s,r=Object.entries(i[2]),l=[];for(let a=0;a<r.length;a+=1)l[a]=K(J(i,r,a));const f=a=>b(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();t=T()},l(a){for(let o=0;o<l.length;o+=1)l[o].l(a);t=T()},m(a,o){for(let e=0;e<l.length;e+=1)l[e].m(a,o);h(a,t,o),s=!0},p(a,o){if(o&6){r=Object.entries(a[2]);let e;for(e=0;e<r.length;e+=1){const c=J(a,r,e);l[e]?(l[e].p(c,o),g(l[e],1)):(l[e]=K(c),l[e].c(),g(l[e],1),l[e].m(t.parentNode,t))}for(q(),e=r.length;e<l.length;e+=1)f(e);V()}},i(a){if(!s){for(let o=0;o<r.length;o+=1)g(l[o]);s=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)b(l[o]);s=!1},d(a){ee(l,a),a&&m(t)}}}function fe(i){let t,s;return{c(){t=D("p"),s=k("No examples found!")},l(r){t=R(r,"P",{});var l=S(t);s=v(l,"No examples found!"),l.forEach(m)},m(r,l){h(r,t,l),$(t,s)},d(r){r&&m(t)}}}function K(i){let t,s,r,l,f;var a=i[5][1];function o(e){return{}}return a&&(s=new a(o())),l=new te({props:{code:i[1][i[5][i[7]]],langtag:!0}}),{c(){t=D("div"),s&&y(s.$$.fragment),r=O(),y(l.$$.fragment),this.h()},l(e){t=R(e,"DIV",{class:!0});var c=S(t);s&&P(s.$$.fragment,c),c.forEach(m),r=I(e),P(l.$$.fragment,e),this.h()},h(){Z(t,"class","my-10")},m(e,c){h(e,t,c),s&&H(s,t,null),h(e,r,c),H(l,e,c),f=!0},p(e,c){if(a!==(a=e[5][1])){if(s){q();const E=s;b(E.$$.fragment,1,0,()=>{N(E,1)}),V()}a?(s=new a(o()),y(s.$$.fragment),g(s.$$.fragment,1),H(s,t,null)):s=null}const _={};c&6&&(_.code=e[1][e[5][e[7]]]),l.$set(_)},i(e){f||(s&&g(s.$$.fragment,e),g(l.$$.fragment,e),f=!0)},o(e){s&&b(s.$$.fragment,e),b(l.$$.fragment,e),f=!1},d(e){e&&m(t),s&&N(s),e&&m(r),N(l,e)}}}function ie(i){let t,s,r,l,f,a,o,e;t=new z({props:{class:"w-full max-w-full mb-10",$$slots:{default:[re]},$$scope:{ctx:i}}}),r=new z({props:{class:"w-full max-w-full mb-10",$$slots:{default:[ae]},$$scope:{ctx:i}}});const c=[oe,ne],_=[];function E(n,p){return n[2]?0:1}return f=E(i),a=_[f]=c[f](i),{c(){y(t.$$.fragment),s=O(),y(r.$$.fragment),l=O(),a.c(),o=T()},l(n){P(t.$$.fragment,n),s=I(n),P(r.$$.fragment,n),l=I(n),a.l(n),o=T()},m(n,p){H(t,n,p),h(n,s,p),H(r,n,p),h(n,l,p),_[f].m(n,p),h(n,o,p),e=!0},p(n,[p]){const w={};p&257&&(w.$$scope={dirty:p,ctx:n}),t.$set(w);const j={};p&256&&(j.$$scope={dirty:p,ctx:n}),r.$set(j);let C=f;f=E(n),f===C?_[f].p(n,p):(q(),b(_[C],1,1,()=>{_[C]=null}),V(),a=_[f],a?a.p(n,p):(a=_[f]=c[f](n),a.c()),g(a,1),a.m(o.parentNode,o))},i(n){e||(g(t.$$.fragment,n),g(r.$$.fragment,n),g(a),e=!0)},o(n){b(t.$$.fragment,n),b(r.$$.fragment,n),b(a),e=!1},d(n){N(t,n),n&&m(s),N(r,n),n&&m(l),_[f].d(n),n&&m(o)}}}async function de(){return{props:{Examples:await M(()=>import("../../../chunks/index-4674b630.js"),["chunks/index-4674b630.js","assets/index-b9b0b737.css","chunks/vendor-e738772d.js","assets/vendor-47c9022a.css","chunks/states-12006b77.js","assets/states-06e2bf10.css","chunks/sizes-430d7b1e.js","chunks/Footer-acc50ef4.js","assets/Footer-6d3772ff.css","chunks/types-b021224a.js","chunks/RichText-9a611717.js","assets/RichText-fd9e4817.css","chunks/widths-b0b003db.js","chunks/Content-07fa3bb3.js","assets/Content-fb9161b9.css"]),Code:le}}}function ce(i,t,s){let r,l,f;Y(i,se,e=>s(0,f=e));let{Examples:a}=t,{Code:o}=t;return i.$$set=e=>{"Examples"in e&&s(3,a=e.Examples),"Code"in e&&s(4,o=e.Code)},i.$$.update=()=>{i.$$.dirty&9&&s(2,r=a.helpers&&a.helpers[f.params.helper]),i.$$.dirty&17&&s(1,l=o.helpers&&o.helpers[f.params.helper])},[f,l,r,a,o]}class ge extends Q{constructor(t){super();W(this,t,ce,ie,X,{Examples:3,Code:4})}}export{ge as default,de as load};