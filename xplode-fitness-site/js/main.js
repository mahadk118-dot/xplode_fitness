const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',e=>{if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(c=>{const n=+c.dataset.n,s=c.dataset.s||'',p=c.dataset.p||'',t=performance.now();const f=x=>{const k=Math.min((x-t)/1200,1),v=Math.round(n*(1-Math.pow(1-k,3)));c.innerHTML=p+v+(s?'<i>'+s+'</i>':'');if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)});io.unobserve(e.target)}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const links=[...document.querySelectorAll('nav ul a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>so.observe(s));
document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const t=`Hi Xplode Fitness, I'm ${d.get('n')} (${d.get('p')}). Interested in: ${d.get('i')}. ${d.get('m')||''}`;window.open('https://wa.me/923332654340?text='+encodeURIComponent(t),'_blank','noopener')});
