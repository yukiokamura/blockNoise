import Stats from 'stats-js';
import ua from './ua/Controller.es6';
// import objectFitImages from 'object-fit-images';
export default class Base{
  constructor(c){
    this.is_mediaquery = c.is_mediaquery;
    this.is_release = c.is_release;
    this.is_sp = window.ontouchstart===null;
    window.config.is_sp = this.is_sp;
    this.is_stats = c.is_stats;




    this.off_log();
    this.setDevice();
    this.setStats();
  }

  setDevice(){
    if(this.is_mediaquery)return;

    if(this.is_sp){
      $('html').addClass('touch')
    }else{
      $('html').removeClass('touch')
    }
  }

  get_isSP(){
    return this.is_sp;
  }

  off_log(){
    if(!this.is_release)return;
    console = {
      log:e=>{

      }
    }
  }

  setStats(){
    if(this.is_release || !this.is_stats)return;
    this.stats = new Stats();
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    document.body.appendChild( this.stats.domElement );
    this.requestFlame();
  }

  requestFlame(){
    this.__flame = requestAnimationFrame(this.requestFlame.bind(this));
    this.stats.begin();
    window.updates.map(update=>{
      update.cb();
    })
    this.stats.end();
  }

  getUserAgentController(){
    return new ua();
  }

}
