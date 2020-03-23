uniform vec2 resolution;

uniform float blockSize;
uniform float threshold;
uniform float time;
uniform float slideWidth;
uniform float opacity;

uniform sampler2D backbuffer;

float rnd(vec2 n){
    float a = 0.129898;
    float b = 0.78233;
    float c = 437.585453;
    float dt= dot(n ,vec2(a, b));
    float sn= mod(dt, 3.14);
    return fract(sin(sn) * c);
}

varying vec2 vUv;


void main(void){
  
  float vertical = floor((gl_FragCoord.t) / blockSize) * blockSize;

  float n1 = rnd(vec2(vertical, time * 0.1));
  float s = step(n1, threshold);
  float n2 = rnd(vec2(time)) * 2.0 - 1.0;
  float t = n2 * slideWidth;

  vec4 color = texture2D(backbuffer, vUv + vec2(s * t, 0.0));
  float c_r = texture2D(backbuffer, vUv + vec2(s * t, 0.0)).r;
  float c_g = texture2D(backbuffer, vUv + vec2(s * t, 0.0)).g;
  float c_b = texture2D(backbuffer, vUv + vec2(s * t, 0.0)).b;

  
  gl_FragColor = vec4(c_r,c_g,c_b,color.a * opacity);
}
