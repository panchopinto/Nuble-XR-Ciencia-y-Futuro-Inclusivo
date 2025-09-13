// Toggle base textures and overlays
AFRAME.registerComponent('layer-switcher', {
  init: function(){
    const mesh = document.querySelector('#mesh');
    const gain = document.querySelector('#overlay-gain');
    const loss = document.querySelector('#overlay-loss');
    const setTex = id => mesh.setAttribute('material','src','#'+id);

    document.querySelector('#btn-t1').addEventListener('click', ()=>setTex('tex-t1'));
    document.querySelector('#btn-t2').addEventListener('click', ()=>setTex('tex-t2'));
    document.querySelector('#btn-delta').addEventListener('click', ()=>setTex('tex-delta'));
    document.querySelector('#btn-gain').addEventListener('click', ()=>gain.setAttribute('visible', !(gain.getAttribute('visible'))));
    document.querySelector('#btn-loss').addEventListener('click', ()=>loss.setAttribute('visible', !(loss.getAttribute('visible'))));
  }
});
document.addEventListener('DOMContentLoaded', ()=>{
  const terrain = document.querySelector('#terrain');
  if (terrain) terrain.setAttribute('layer-switcher','');
});