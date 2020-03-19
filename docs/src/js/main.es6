require('babel-polyfill');
import {config} from './Common/config.es6';
import Init from './Common/Base.es6';
import UIController from './UI/Controller.es6';
$(window).on('load',e=>{

  window.config = config;

  //requestAnimationFrame
  window.updates = [];


  new Init(config);
  new UIController();
})
