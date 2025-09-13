AFRAME.registerComponent('ar-placement', {
  init: function(){
    const sceneEl = this.el.sceneEl;
    const map = document.getElementById('map');
    const reticle = document.getElementById('reticle');

    sceneEl.addEventListener('enter-vr', () => {
      if (sceneEl.is('ar-mode')) {
        sceneEl.renderer.xr.addEventListener('sessionstart', () => {
          const session = sceneEl.renderer.xr.getSession();
          session.requestReferenceSpace('viewer').then((refSpace)=>{
            session.requestHitTestSource({ space: refSpace }).then((hitTestSource)=>{
              sceneEl.addEventListener('beforexrframe', (e)=>{
                const frame = e.detail;
                const refSpaceLocal = sceneEl.renderer.xr.getReferenceSpace();
                const viewerPose = frame.getViewerPose(refSpaceLocal);
                if (!viewerPose) return;
                const results = frame.getHitTestResults(hitTestSource);
                if (results.length){
                  const pose = results[0].getPose(refSpaceLocal);
                  reticle.object3D.position.set(pose.transform.position.x, pose.transform.position.y, pose.transform.position.z);
                  reticle.object3D.quaternion.set(pose.transform.orientation.x, pose.transform.orientation.y, pose.transform.orientation.z, pose.transform.orientation.w);
                  reticle.setAttribute('visible', true);
                }
              });
              // Tap to place
              sceneEl.addEventListener('click', ()=>{
                if (!reticle.getAttribute('visible')) return;
                map.object3D.position.copy(reticle.object3D.position);
                map.object3D.quaternion.copy(reticle.object3D.quaternion);
                map.setAttribute('visible', true);
              });
            });
          });
        });
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', ()=>{
  const scene = document.querySelector('a-scene');
  scene.setAttribute('ar-placement','');
});