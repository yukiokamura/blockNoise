
varying vec2 vUv;

uniform float time;


void main() {
  vUv = uv;
  vec4 projected = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  gl_Position = projected;
}
