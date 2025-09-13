document.addEventListener('DOMContentLoaded', ()=>{
  const ovMask = document.querySelector('#ov-mask');
  const ovHeat = document.querySelector('#ov-heat');
  document.querySelector('#btn-mask').addEventListener('click', ()=>{
    ovMask.setAttribute('visible', !ovMask.getAttribute('visible'));
  });
  document.querySelector('#btn-heat').addEventListener('click', ()=>{
    ovHeat.setAttribute('visible', !ovHeat.getAttribute('visible'));
  });
});