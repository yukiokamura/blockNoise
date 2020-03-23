import Base from "../Base/Controller.es6";
import T_Base from "./Setup/Controller.es6";

import Obj from "./Obj/Controller.es6";
import Loader from "./Loader/TextureLoad.es6";

export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "WebGLController";
    this.T_base = new T_Base($(".canvas"));

    this.loader = new Loader("./assets/png/img-01.png", texture => {
      this.obj = new Obj(texture);
      this.T_base.base.scene.add(this.obj.mesh);
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
      this.T_base.base.render();
    }
  }
}
