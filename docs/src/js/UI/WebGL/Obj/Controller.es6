import Base from "../../Base/Controller.es6";

import frag from "./Shader/shader.frag";
import vert from "./Shader/shader.vert";

import * as Util from "./Util/setups.es6";
export default class Controller extends Base {
  constructor(texture) {
    super();

    this.texture = texture;
    this.ready();
  }

  init() {
    this.name = "Obj";
  }

  ready() {
    const size = {
      w: 1024 * 0.25,
      h: 1024 * 0.25 * 0.5
    };
    console.log(this.texture);
    const uniform = {
      time: { value: 0.0, type: "f" },
      resolution: {
        value: new THREE.Vector2(size.w * 2, size.h * 2),
        type: "v2"
      },
      uTex: { value: this.texture, type: "t" },
      imgResolution: {
        value: new THREE.Vector2(
          this.texture.image.naturalWidth * 2,
          this.texture.image.naturalHeight * 2
        ),
        type: "v2"
      }
    };

    const geo = Util.getPlaneGeometory(size);
    const mate = Util.getMaterial(uniform, vert, frag);
    this.mesh = new THREE.Mesh(geo, mate);
  }

  setEvent() {
    super.__setUpdateFlag(false);
  }

  reset() {}

  update() {
    console.log("update");
  }
}
