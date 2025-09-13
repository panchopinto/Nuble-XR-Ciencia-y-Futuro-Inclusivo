AFRAME.registerComponent('layer-switcher', {
  init: function(){
    const mesh = document.querySelector('#mesh');
    const setTex = id => mesh.setAttribute('material','src','#'+id);
    const ov1 = document.querySelector('#ov-ice-t1');
    const ov2 = document.querySelector('#ov-ice-t2');
    const ovC = document.querySelector('#ov-ice-ch');
    const legend = document.querySelector('#legend');

    document.querySelector('#btn-t1').addEventListener('click', ()=>setTex('tex-t1'));
    document.querySelector('#btn-t2').addEventListener('click', ()=>setTex('tex-t2'));
    document.querySelector('#btn-ice1').addEventListener('click', ()=>ov1.setAttribute('visible', !ov1.getAttribute('visible')));
    document.querySelector('#btn-ice2').addEventListener('click', ()=>ov2.setAttribute('visible', !ov2.getAttribute('visible')));
    document.querySelector('#btn-ich').addEventListener('click', ()=>{
      const v = !ovC.getAttribute('visible');
      ovC.setAttribute('visible', v);
      legend.setAttribute('visible', v);
    });
  }
});
document.addEventListener('DOMContentLoaded', ()=>{
  const terrain = document.querySelector('#terrain');
  if (terrain) terrain.setAttribute('layer-switcher','');
});