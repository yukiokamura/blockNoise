export default class ImgController {
  constructor(imgpath,param,cb = e=>{}) {
    this.loader = new THREE.TextureLoader();
    this.param = param;
    const p = [];
    for (const path of imgpath) {
      p.push(this.load(path));
    }
    Promise.all(p).then(e=>{
      this.texture = e;
      cb();
    })
  }

  load(path){
    return new Promise((r,reject)=>{
      this.loader.load(path,e=>{
        e.magFilter = this.param.mag;
        e.minFilter = this.param.min;
        r(e);
      })
    })
  }
}
