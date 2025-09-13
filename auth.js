// Acceso privado — Ñuble XR
const CONFIG = {
  accessCodeHash: "3bdb5332730e51e13685e5f1390cbd86d9634658d3f156689a3d056028a47c70",
  allowedEmails: [
    "franciscopinto@liceosannicolas.cl",
    "belenacuna@liceosannicolas.cl",
    "belen.acpe@gmail.com",
    "franciscoandresp@gmail.com"
  ]
};

const Gate = {
  async sha256(str){
    const enc = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest("SHA-256", enc);
    return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,"0")).join("");
  },
  async submit(){
    const email = document.getElementById("gate-email").value.trim().toLowerCase();
    const code = document.getElementById("gate-code").value.trim();
    if(!CONFIG.allowedEmails.includes(email)){ alert("Correo no autorizado"); return; }
    const h = await Gate.sha256(code);
    if(h !== CONFIG.accessCodeHash){ alert("Código incorrecto"); return; }
    localStorage.setItem("nxr_auth","1");
    localStorage.setItem("nxr_email", email);
    document.body.classList.remove("gated");
    const gate = document.getElementById("gate"); if(gate) gate.style.display = "none";
    Gate.showAdminLink && Gate.showAdminLink();
  }
};

// Base público (GitHub Pages del repo)
window.NXR_PUBLIC_BASE = "https://panchopinto.github.io/Nuble-XR-Ciencia-y-Futuro-Inclusivo";

// Linker: rehace los links "Ver proyecto" para usar PUBLIC_BASE
window.NXR_Linker = {
  apply(){
    const base = window.NXR_PUBLIC_BASE || '';
    document.querySelectorAll('a[data-proj-folder]').forEach(a => {
      const folder = a.getAttribute('data-proj-folder');
      a.href = base.replace(/\/$/,'') + '/projects_pages/' + folder + '/index.html';
    });
  }
};

// Modo demo protegido
window.NXR_Protect = (function(){
  function apply(){
    const on = localStorage.getItem('nxr_protect')==='1';
    document.body.classList.toggle('protected', on);
  }
  function enable(){ localStorage.setItem('nxr_protect','1'); apply(); }
  function disable(){ localStorage.removeItem('nxr_protect'); apply(); }
  return {apply, enable, disable};
})();

// Mostrar link admin si autenticado
Gate.showAdminLink = function(){
  const link = document.getElementById("admin-link");
  if(link){ link.style.display = "block"; }
};

document.addEventListener("DOMContentLoaded", ()=>{
  if(localStorage.getItem("nxr_auth")==="1"){ Gate.showAdminLink(); }
  try{ NXR_Protect.apply(); }catch(e){}
  try{ NXR_Linker.apply(); }catch(e){}
});

// Exponer para acciones.html
window.NXR_CONFIG = CONFIG;
window.NXR_Gate = Gate;
