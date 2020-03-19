export default class Controller{
  constructor(){
    this.ua = navigator.userAgent.toLowerCase();
    this.ver = navigator.appVersion.toLowerCase();
  }

  isIE(){
    const isMSIE = this.ua.indexOf('msie') > -1 && this.ua.indexOf('opera') == -1;
    const isIE11 = this.ua.indexOf('trident/7') > -1
    return isMSIE || isIE11;
  }

  isEdge(){
    return this.ua.indexOf('edge') > -1
  }

  isChrome(){
    return this.ua.indexOf('chrome') > -1 && this.ua.indexOf('edge') == -1;
  }

  isFireFox(){
    return this.ua.indexOf('firefox') > -1
  }

  isSafari(){
    return this.ua.indexOf('safari') > -1 && this.ua.indexOf('chrome') == -1
  }

  isOpera(){
    return this.ua.indexOf('opera') > -1
  }

  isiPhone(){
    return this.ua.indexOf('iphone') > -1
  }

  isAndroid(){
    return this.ua.indexOf('android') > -1
  }
}
