AFRAME.registerComponent('layer-switcher', {
  init: function(){
    const mesh = document.querySelector('#mesh');
    const setTex = id => mesh.setAttribute('material','src','#'+id);
    const togg = id => {
      const el = document.querySelector(id);
      el.setAttribute('visible', !el.getAttribute('visible'));
    };
    document.querySelector('#btn-t1').addEventListener('click', ()=>setTex('tex-t1'));
    document.querySelector('#btn-t2').addEventListener('click', ()=>setTex('tex-t2'));
    document.querySelector('#btn-w1').addEventListener('click', ()=>togg('#ov-water-t1'));
    document.querySelector('#btn-w2').addEventListener('click', ()=>togg('#ov-water-t2'));
    document.querySelector('#btn-wet').addEventListener('click', ()=>togg('#ov-wetlands'));
  }
});
document.addEventListener('DOMContentLoaded', ()=>{
  const terrain = document.querySelector('#terrain');
  if (terrain) terrain.setAttribute('layer-switcher','');
});