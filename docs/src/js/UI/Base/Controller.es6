export default class Controller {
  constructor(param) {
    this.__init();
    this.__setEvent();

  }


  __init(){
    this.init();
    this.setEvent();
  }


  __setEvent(){
    this.__setUpdate();
  }


  __setUpdate(){

    window.updates.push({
      id:this.name,
      cb:e=>{
        this.__update()
      }
    });
  }
  
  
  __setUpdateFlag(flag = false){
    this.__is_update = flag;
  }


  __update(){
    if(this.__is_update)this.update();

  }









}
