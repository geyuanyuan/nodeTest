//阻塞主线程的SLEEP
let num =0
function sleepTime(n){
    const sleep  = Date.now() + n*1000
    while(sleep>Date.now()){
        // console.log(num ++,Date.now());
    }
    return
}
console.time('A')
sleepTime(3)
console.timeEnd('A')
