// call apply
function fn(){
    console.log('this'+JSON.stringify(this));
    console.log(arguments);
  }
  // fn(1,2,3)
  let obj = {
    name:'obj'
  }
  // fn.call(obj,1,2,3)
  Function.prototype.myCall = function(){
    //把argument类数组转成数组
    let res = [].slice.call(arguments)
    let self = res.shift()
    self.fn = this
    self.fn(...res)
    delete(self.fn)
  }
  
  fn.myCall(obj,8,9)