export default class Controller {
  constructor() {

  }


  getGPUspec(){
    //canvas set
    const is_canvas = $('canvas').length > 0;
    const $canvas = is_canvas ? $('canvas') : $('<canvas id="gpu" style="display:none;"></canvas>');
    if(!is_canvas)$('body').append($canvas);
    const gl = $canvas.get(0).getContext("experimental-webgl");
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    let renderer = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : '';
    if(!is_canvas)$canvas.remove();
    return renderer;
  }


  getGPULevel(){
    const gpu = this.getGPUspec();
    if(gpu == '')return -1;
    if(gpu.indexOf('Intel') > -1)return 0;
    else return 1;
  }
}
