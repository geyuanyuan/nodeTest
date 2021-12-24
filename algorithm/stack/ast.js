/**
 * 将高维数组变成对象
 * [1,2,[3,4]]
 * obj = {
 * children:[
 *  {value:1},
 *  {value:2},
 *  children:[
 *      value:3,
 *      value:4
 *  ]
 * ]
 * }
 */

function convert(arr){
    /**
     * 分析 递归
     * 递归  有重复的逻辑
     * 
     */
    var result = []
    for(let i = 0; i<arr.length;i++){
        if(typeof arr[i] === 'number'){
            result.push({
                value:arr[i]
            })
        }else if(Array.isArray(arr[i])){
            result.push({
                children:convert(arr[i])
            })
        }
    }

    
    return result
}
console.log( JSON.stringify(  convert([1,2,[3,4]])))
