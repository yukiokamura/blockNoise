export default class Array {
  constructor() {

  }


  randomsort(arr = []){
    return arr.sort(e=>{
      return Math.random() - 0.5
    })
  }


  randomget(arr = []){
    const r = ~~(Math.random()*arr.length);
    return arr[r]
  }

}
