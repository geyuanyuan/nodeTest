/**
 * 斐波那契数列
 */
//第一版本 递归

function simpleFib(n){
    console.count('simpleFib')
    if(n ===0){
        return 1
    }else if(n ===1 ){
        return 1
    }else {
        return fib(n-1)+fib(n-2)
    }
}


// 优化版本加缓存
function fib(n){
    console.count('cacheFib');
    let cache = [1,1]
    if(n ===0){
        return 1
    }else if(n ===1 ){
        return 1
    }else {
        if(!cache[n]){
            let res = fib(n-1)+fib(n-2)
            cache[n] = res
            return res
        }else{
            return cache[n]
        }
        
    }
}

// console.log(fib(0),fib(1),fib(2),fib(3));
console.log(fib(5))
console.log(simpleFib(5))

