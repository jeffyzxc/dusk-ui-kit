import{S as y,i as j,s as S,I as E,e as _,w as I,k as D,c as m,a as g,x as q,d,m as A,b as f,g as C,L as h,y as O,N as T,O as V,P as $,q as k,o as v,B as z,F as B}from"../../../chunks/vendor-d12779ea.js";import{p as F}from"../../../chunks/stores-1196b7a1.js";import{S as H}from"../../../chunks/Sidebar-33a8ded8.js";import"../../../chunks/Heading-c847ed7e.js";import"../../../chunks/sizes-a81beea9.js";import"../../../chunks/states-ef331a9d.js";import"../../../chunks/paths-4b3c6e7e.js";const L=s=>({group:s&1}),w=s=>({group:s[0]});function N(s){let a,r,t,l,n,c;t=new H({props:{title:s[1],group:s[0]}});const u=s[5].default,o=E(u,s,s[4],w);return{c(){a=_("div"),r=_("aside"),I(t.$$.fragment),l=D(),n=_("div"),o&&o.c(),this.h()},l(e){a=m(e,"DIV",{class:!0});var i=g(a);r=m(i,"ASIDE",{class:!0});var p=g(r);q(t.$$.fragment,p),p.forEach(d),l=A(i),n=m(i,"DIV",{role:!0,class:!0});var b=g(n);o&&o.l(b),b.forEach(d),i.forEach(d),this.h()},h(){f(r,"class","w-full lg:w-1/4 px-2 lg:pr-20"),f(n,"role","main"),f(n,"class","w-full lg:w-3/4 pt-1 px-2"),f(a,"class","flex flex-row flex-wrap py-4")},m(e,i){C(e,a,i),h(a,r),O(t,r,null),h(a,l),h(a,n),o&&o.m(n,null),c=!0},p(e,[i]){const p={};i&2&&(p.title=e[1]),i&1&&(p.group=e[0]),t.$set(p),o&&o.p&&(!c||i&17)&&T(o,u,e,e[4],c?$(u,e[4],i,L):V(e[4]),w)},i(e){c||(k(t.$$.fragment,e),k(o,e),c=!0)},o(e){v(t.$$.fragment,e),v(o,e),c=!1},d(e){e&&d(a),z(t),o&&o.d(e)}}}async function R({params:s,stuff:a}){return{props:{group:Object.keys(a.components).filter(t=>t===s.group).reduce((t,l)=>(t=a.components[l],t),{})}}}function P(s,a,r){let t,l,n;B(s,F,e=>r(3,n=e));let{$$slots:c={},$$scope:u}=a,{group:o}=a;return s.$$set=e=>{"group"in e&&r(0,o=e.group),"$$scope"in e&&r(4,u=e.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&r(2,t=n.params.group),s.$$.dirty&4&&r(1,l=t.charAt(0).toUpperCase()+t.slice(1))},[o,l,t,n,u,c]}class W extends y{constructor(a){super();j(this,a,P,N,S,{group:0})}}export{W as default,R as load};
