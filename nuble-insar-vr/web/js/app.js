AFRAME.registerComponent('layer-switcher', {
  init: function(){
    const mesh = document.querySelector('#mesh');
    const legP = document.querySelector('#legendP');
    const legD = document.querySelector('#legendD');
    const setTex = id => mesh.setAttribute('material','src','#'+id);

    document.querySelector('#btn-phase').addEventListener('click', ()=>{
      setTex('tex-phase'); legP.setAttribute('visible', true); legD.setAttribute('visible', false);
    });
    document.querySelector('#btn-coh').addEventListener('click', ()=>{
      setTex('tex-coh'); legP.setAttribute('visible', false); legD.setAttribute('visible', false);
    });
    document.querySelector('#btn-disp').addEventListener('click', ()=>{
      setTex('tex-disp'); legP.setAttribute('visible', false); legD.setAttribute('visible', true);
    });
  }
});
document.addEventListener('DOMContentLoaded', ()=>{
  const terrain = document.querySelector('#terrain');
  if (terrain) terrain.setAttribute('layer-switcher','');
});