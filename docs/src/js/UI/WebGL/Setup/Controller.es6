import ImgController from './Img/Controller.es6';
import BaseController from './Base/Controller.es6';
export default class Controller {
  constructor($dom = null,is_autoRender = false,imgpath = [],textureParam = {mag:THREE.LinearFilter,min:THREE.LinearFilter}) {
    this.imgPath = imgpath;
    this.textureParam = textureParam;
    this.$dom = $dom;
    this.is_autoRender = is_autoRender;
    this.init();
  }

  init(){
    if(this.imgPath.length > 0){
      this.imgController = new ImgController(this.imgPath,this.textureParam);
    }
    this.base = new BaseController(this.$dom,this.is_autoRender);

  }
}
