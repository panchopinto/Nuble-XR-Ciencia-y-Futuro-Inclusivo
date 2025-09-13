AFRAME.registerComponent('layer-switcher', {
  init: function(){
    const mesh = document.querySelector('#mesh');
    const ovM = document.querySelector('#ov-mask');
    const legend = document.querySelector('#legend-ui');
    const setTex = id => mesh.setAttribute('material','src','#'+id);

    document.querySelector('#btn-moist').addEventListener('click', ()=>setTex('tex-moist'));
    document.querySelector('#btn-mask').addEventListener('click', ()=>ovM.setAttribute('visible', !ovM.getAttribute('visible')));
    document.querySelector('#btn-legend').addEventListener('click', ()=>legend.setAttribute('visible', !legend.getAttribute('visible')));
  }
});
document.addEventListener('DOMContentLoaded', ()=>{
  const terrain = document.querySelector('#terrain');
  if (terrain) terrain.setAttribute('layer-switcher','');
});