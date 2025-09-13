
window.NXRCells=(function(){let d=[],i=0,T=null,r=0;async function l(u){const R=await fetch(u);d=await R.json();i=0;n();h();}
function h(){document.getElementById('cellsModal').style.display='flex';}
function H(){document.getElementById('cellsModal').style.display='none';c();}
function n(){const b=document.getElementById('cellsBox');const s=d[i];if(!s){b.innerHTML=`<h3>¡Completado!</h3><div class="row"><button onclick="NXRCells.hide()">Cerrar</button></div>`;return;}
b.innerHTML=`<h3>${s.title}</h3><p>${s.task}</p>${s.pie_tip?`<p style="color:#9bdcff">TIP PIE: ${s.pie_tip}</p>`:''}${s.timer?`<p>Tiempo: <span id="time">${s.timer}</span> s</p>`:''}<div class="row">${i>0?`<button onclick="NXRCells.prev()">← Anterior</button>`:''}<button onclick="NXRCells.next()">Siguiente →</button></div>`;
if(s.timer){a(s.timer);}}
function a(S){r=S;const el=document.getElementById('time');c();T=setInterval(()=>{r--;if(el)el.textContent=r;if(r<=0)next();},1000);}
function c(){if(T){clearInterval(T);T=null;}}
function next(){c();i++;n();}
function prev(){c();i=Math.max(0,i-1);n();}
return{load:l,show:h,hide:H,next,prev};})();