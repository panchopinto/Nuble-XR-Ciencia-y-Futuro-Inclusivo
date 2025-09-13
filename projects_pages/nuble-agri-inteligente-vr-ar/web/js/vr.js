AFRAME.registerComponent('layer-switcher', {
  init: function(){
    const mesh = document.querySelector('#mesh');
    const legend = document.querySelector('#legend');
    const setTex = id => mesh.setAttribute('material','src','#'+id);
    document.querySelector('#btn-m1').addEventListener('click', ()=>{ setTex('tex-m1'); legend.setAttribute('visible', false); });
    document.querySelector('#btn-m2').addEventListener('click', ()=>{ setTex('tex-m2'); legend.setAttribute('visible', false); });
    document.querySelector('#btn-an').addEventListener('click', ()=>{ setTex('tex-an'); legend.setAttribute('visible', true); });
  }
});
document.addEventListener('DOMContentLoaded', ()=>{
  const terrain = document.querySelector('#terrain');
  if (terrain) terrain.setAttribute('layer-switcher','');
});