import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as l}from"./index.DhYZZe0J.js";function b({title:f,tags:x,backgroundImage:o,mobileBackgroundImage:p,positionX:i="30%",positionY:c="50%",alt:h}){const d=l.useRef(null),m=l.useRef(null);return l.useEffect(()=>{const s=d.current,r=m.current;if(!s||!r)return;const u=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting?(r.style.willChange="transform",window.addEventListener("scroll",t)):(r.style.willChange="auto",window.removeEventListener("scroll",t))})},{threshold:0});u.observe(s);function t(){const n=window.pageYOffset,a=.3;r.style.transform=`translate3d(0, ${n*a}px, 0)`}return()=>{u.disconnect(),window.removeEventListener("scroll",t)}},[]),e.jsxs("div",{ref:d,className:"relative flex flex-col justify-center items-center text-center h-screen mb-8 md:-mx-16 -mx-8 overflow-hidden","data-pagefind-body":!0,children:[e.jsxs("div",{ref:m,className:"absolute inset-0",style:{willChange:"transform"},children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-no-repeat md:hidden",style:{backgroundImage:`url(${p})`,backgroundPosition:`${i} ${c}`,top:"-20%",height:"120%"},"aria-hidden":"true"}),e.jsx("div",{className:"absolute inset-0 bg-cover bg-no-repeat hidden md:block",style:{backgroundImage:`url(${o})`,backgroundPosition:`${i} ${c}`,top:"-20%",height:"120%"},"aria-hidden":"true"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("h1",{className:"prose prose-slate uppercase font-overpass-mono text-[rgb(245,245,245)] text-4xl fade-in-up delay-150",children:f}),e.jsx("div",{className:"flex gap-2 mt-2 fade-in-up delay-300 justify-center",children:x.map(s=>e.jsx("p",{className:"font-overpass-mono text-xl",children:e.jsx("a",{className:"bg-slate-600 text-[rgb(245,245,245)] bg-opacity-50 px-2 py-1 rounded no-underline",href:`../tags/${s}`,children:s})},s))})]}),e.jsx("img",{src:o,alt:h,className:"sr-only"})]})}export{b as default};