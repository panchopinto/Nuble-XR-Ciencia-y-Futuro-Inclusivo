// Acceso privado — Ñuble XR
// Configuración de acceso (personaliza antes de publicar)
const CONFIG = {
  // Hash SHA-256 del código de acceso (ejemplo: PanchoPintoYBelenAcuna)
  accessCodeHash: "3bdb5332730e51e13685e5f1390cbd86d9634658d3f156689a3d056028a47c70",
  // Whitelist de correos permitidos
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
    // OK
    localStorage.setItem("nxr_auth","1");
    localStorage.setItem("nxr_email", email);
    document.body.classList.remove("gated");
    const gate = document.getElementById("gate"); if(gate) gate.style.display = "none";
  },
  init(){
    const ok = localStorage.getItem("nxr_auth")==="1";
    if(!ok){
      document.body.classList.add("gated");
      const gate = document.getElementById("gate"); if(gate) gate.style.display = "flex";
    }
  }
};

document.addEventListener("DOMContentLoaded", ()=>Gate.init());
