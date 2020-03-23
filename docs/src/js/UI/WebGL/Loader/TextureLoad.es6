import Base from "../../Base/Controller.es6";
export default class Controller extends Base {
  constructor(path, cb) {
    super();

    this.load(path, cb);
  }

  init() {
    this.name = "TextureLoad";
  }

  setEvent() {
    super.__setUpdateFlag(false);
  }

  reset() {}

  update() {
    console.log("update");
  }

  load(path, cb) {
    const loader = new THREE.TextureLoader();
    loader.load(path, texture => {
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearFilter;
      cb(texture);
    });
  }
}
