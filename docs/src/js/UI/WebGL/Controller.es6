import Base from "../Base/Controller.es6";
import T_Base from "./Setup/Controller.es6";

import Obj from "./Obj/Controller.es6";
import Loader from "./Loader/TextureLoad.es6";
import PostEffect from "./PostEffect/Controller.es6";

export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "WebGLController";
    this.T_base = new T_Base($(".canvas"));
    this.postEffect = new PostEffect();
    this.tpp = new TPP(this.T_base.base.renderer, this.postEffect.postParams);
    const img = config.imgs.filter(item => item.name == "opImg")[0];
    this.loader = new Loader(img.src, texture => {
      this.obj = new Obj(texture);
      this.T_base.base.scene.add(this.obj.mesh);

      this.postEffect.show();
    });
  }

  setEvent() {
    super.__setUpdateFlag(true);

    $(window).on("resize", e => {
      this.T_base.base.onWindowResize();
    });
  }

  reset() {}

  update() {
    if (this.obj) {
      this.T_base.base.render(true, this.tpp);
    }
  }
}
