export default class Url {
  constructor() {

  }


  getParam(url=location.href){
    const searchindex = url.indexOf('?');
    if(searchindex == -1)return {}
    const search = url.substr(searchindex+1).split('&');
    const r = {};
    search.map((e,i)=>{
      const keys = e.split('=');
      r[keys[0]] = keys[1];
    })
    return r;
  }


  setParam(key,value,url=location.href){
    const p = this.getParam(url);
    p[key] = value;
    let new_url = this.removeParam() + '?';
    for (var k in p) {
      if (p.hasOwnProperty(k)) {
        new_url +=  k + '=' + p[k]+'&'
      }
    }
    return {
      url:new_url.slice(0,-1),
      param:this.getParam(new_url.slice(0,-1))
    }
  }


  removeParam(url = location.href){
    const searchindex = url.indexOf('?');
    if(searchindex == -1)return url;
    const search = url.split('?');
    return search[0];
  }
}
