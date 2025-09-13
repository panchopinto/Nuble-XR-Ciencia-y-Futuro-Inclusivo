
window.NXRQuiz=(function(){let d=[],i=0,s=0,a=[];async function l(u){const r=await fetch(u);d=await r.json();i=0;s=0;a=[];n();h();}
function h(){document.getElementById('quizModal').style.display='flex';}
function H(){document.getElementById('quizModal').style.display='none';}
function n(){const b=document.getElementById('quizBox');if(i>=d.length){b.innerHTML=`<h3>Resultado</h3><p>Puntaje: ${s} / ${d.length}</p><div class="row"><button onclick="NXRQuiz.exportCSV()">Exportar CSV</button><button onclick="NXRQuiz.hide()">Cerrar</button></div>`;return;}
const q=d[i];b.innerHTML=`<h3>${q.prompt}</h3><ol>${q.options.map((o,k)=>`<li><label><input type="radio" name="opt" value="${k}"> ${o}</label></li>`).join('')}</ol><div class="row"><button onclick="NXRQuiz.submit()">Responder</button></div>`;}
function t(){const p=document.querySelector('input[name="opt"]:checked');if(!p)return alert('Selecciona una opción');const q=d[i];const v=Number(p.value);const ok=v===q.answer;if(ok)s++;a.push({id:q.id,picked:v,correct:q.answer});i++;n();}
function e(){const head="id,picked,correct\n";const rows=a.map(x=>`${x.id},${x.picked},${x.correct}`).join("\n");const blob=new Blob([head+rows],{type:"text/csv"});const url=URL.createObjectURL(blob);const A=document.createElement('a');A.href=url;A.download="quiz_respuestas.csv";A.click();URL.revokeObjectURL(url);}
return{load:l,show:h,hide:H,submit:t,exportCSV:e};})();