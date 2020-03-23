
// #pragma glslify: easeout = require(glsl-easings/cubic-out)

varying vec2 vUv;

uniform sampler2D uTex;

uniform vec2 resolution;
uniform vec2 imgResolution;


vec2 formatImg(vec2 r,vec2 i){
  vec2 ratio = vec2(
    min((r.x / r.y) / (i.x / i.y), 1.0),
    min((r.y / r.x) / (i.y / i.x), 1.0)
  );
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
  return uv;
}

void main(void){
  
  vec2 uv = formatImg(resolution,imgResolution);

  
  gl_FragColor = texture2D(uTex,uv);
}
