export function getPlaneGeometory(size) {
  return new THREE.PlaneBufferGeometry(size.w, size.h);
}

export function getMaterial(uniform, vert, frag) {
  return new THREE.ShaderMaterial({
    uniforms: uniform,
    vertexShader: vert,
    fragmentShader: frag
  });
}
