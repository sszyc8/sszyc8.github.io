import"./hoisted.CBXqpLS0.js";import"./index.D_76QRnP.js";function u(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function m(){const t=document.getElementById("randomPosts");if(!t)return;const e=JSON.parse(t.dataset.posts||"[]"),n=t.dataset.collection,r=JSON.parse(t.dataset.favicon||"{}"),a=u([...e]).slice(0,3),d=t.querySelectorAll(".post-item");a.forEach((o,f)=>{const s=d[f];if(s){s.href=`/${n}/${o.slug}/`,s.style.display="block";const c=s.querySelector("img");c&&(c.src=o.image||r.src,c.alt=o.alt,c.className=o.image?"w-full h-full object-cover transition-all duration-300 group-hover:opacity-90":"w-16 h-16 md:w-24 md:h-24 transition-all duration-300 group-hover:opacity-90");const l=s.querySelector("h3");l&&(l.textContent=o.title);const i=s.querySelector("p");i&&(i.textContent=o.description)}})}document.addEventListener("astro:page-load",m);