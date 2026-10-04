const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.car-card');
filters.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    cards.forEach(card=>{
      card.style.display=(filter==='all'||card.dataset.category===filter)?'block':'none';
    });
  });
});

const form=document.getElementById('appointmentForm');
const message=document.getElementById('formMessage');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const nombre=data.get('nombre');
  message.textContent=`¡Gracias, ${nombre}! Tu solicitud fue registrada. Un asesor de Imperio Auto se pondrá en contacto contigo.`;
  form.reset();
});

const backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>backTop.classList.toggle('show',window.scrollY>500));
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
