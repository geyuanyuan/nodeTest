const vm = {
    data:{
        message:'hello'
    }
}
function proxy(key){
    Object.defineProperty(vm,key,{
        get(){
            return vm.data[key]
        },
        set(newValue){
            vm.data[key] = newValue
        }
    })
}
// vm.message 代理到vm.data.message
proxy('message')
console.log(vm.message)