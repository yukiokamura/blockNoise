import Base from './Base/Controller.es6';
import Device from './Util/Device/Controller.es6';
export default class Controller extends Base{
  constructor() {
    super();
  }


  init(){
    this.name = 'UIController';
    this.device = new Device();
    console.log(this.device.getGPULevel());
  }



  setEvent(){
    super.__setUpdateFlag(false)
  }


  reset(){

  }


  update(){
    console.log('update');
  }








}
