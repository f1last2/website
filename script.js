// CURSOR
const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)})();

// HAMBURGER MENU
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobile-menu');
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link=>{
  link.addEventListener('click',()=>{
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.to('#nav',{opacity:1,duration:.8,delay:.2,ease:'power2.out'});
document.querySelectorAll('.card').forEach((c,i)=>{
  gsap.fromTo(c,{opacity:0,y:30},{opacity:1,y:0,duration:.7,ease:'power2.out',
    scrollTrigger:{trigger:c,start:'top 88%',toggleActions:'play none none none'},delay:(i%3)*.1});
});
gsap.fromTo('.label',{opacity:0,y:10},{opacity:1,y:0,duration:.6,delay:.5});
gsap.fromTo('h1',{opacity:0,y:16},{opacity:1,y:0,duration:.7,delay:.65});
gsap.fromTo('h2.sub',{opacity:0,y:12},{opacity:1,y:0,duration:.6,delay:.8});
gsap.fromTo('.hero-text p',{opacity:0,y:10},{opacity:1,y:0,duration:.6,delay:.95});
gsap.fromTo('.btn-row',{opacity:0,y:10},{opacity:1,y:0,duration:.6,delay:1.1});
gsap.fromTo('.hero-badges',{opacity:0,y:8},{opacity:1,y:0,duration:.5,delay:1.25});
gsap.fromTo('.photo-wrap',{opacity:0,x:-20},{opacity:1,x:0,duration:.8,delay:.4});