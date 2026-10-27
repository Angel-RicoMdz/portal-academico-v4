document.addEventListener('DOMContentLoaded', () => {
 const search = document.querySelector('#buscar-cursos');
 const cards = [...document.querySelectorAll('#course-grid .course-card')];
 const empty = document.querySelector('#course-empty');
 const filterCards = () => {
  const q = (search?.value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  let n=0;
  cards.forEach(card=>{const s=card.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();const show=s.includes(q);card.hidden=!show;if(show)n++});
  if(empty)empty.hidden=n!==0;
 };
 search?.addEventListener('input',filterCards);
 const sel=document.querySelector('#filtrar-curso');
 if(sel){sel.innerHTML='<option value="todos">Todas las asignaturas</option>'+cards.map(c=>`<option value="${c.getAttribute('href').split('/').pop().replace('.html','')}">${c.querySelector('h3').textContent}</option>`).join('');}
 const resources=[...document.querySelectorAll('.resource-item')];
 const filt=()=>{
  const q=(document.querySelector('#buscar-materiales')?.value||'').toLowerCase();
  const course=sel?.value||'todos'; const type=document.querySelector('#filtrar-tipo')?.value||'todos';let visible=0;
  resources.forEach(r=>{const show=(course==='todos'||r.dataset.course===course)&&(type==='todos'||r.dataset.type===type)&&(r.textContent.toLowerCase().includes(q)||(r.dataset.keywords||'').includes(q));r.hidden=!show;if(show)visible++});
  document.querySelector('#resource-empty').hidden=visible!==0;
 };
 ['buscar-materiales','filtrar-curso','filtrar-tipo'].forEach(id=>document.getElementById(id)?.addEventListener(id==='buscar-materiales'?'input':'change',filt));
 document.querySelector('#current-year').textContent=new Date().getFullYear();
 const theme=document.querySelector('#theme-toggle');
 theme?.addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark'});
 const menu=document.querySelector('#menu-toggle'); const nav=document.querySelector('#nav');
 menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
});
