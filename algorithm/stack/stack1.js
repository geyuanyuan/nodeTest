/**
 * 2[1[b]2[c]]
 * 写成
 * bccbcc
 */
function convert(str){
    /**
     * 解析字符串 
     * 数字 
     * [  
     * ]
     * 需要分别处理
     * 数字栈  
     * 符号栈 
     * [ 入栈
     * ] 出栈
     */
    let stack1=[''] //存放数字
    let stack2=[''] //存放字符串

    // for(let i=0;i<str.length;i++){
    //     let currentStr = str[i]
    //     console.log(currentStr);
        
    // }
    // 如果是[abc]这种 每次步长不是1  所以用while 

    var left = str
    while(left){
        if(/^\d+/.test(left)){
            let num = left.match(/^(\d+)/)[0]
            left = left.substring(num.length,left.length)
            stack1.push(num)
            stack2.push('')
            // console.log(left)
            // console.log(stack1,stack2)
        }else if(/^[a-zA-Z]+/.test(left)){
            let str = left.match(/^([a-zA-Z]+)/)[0]
            left = left.substring(str.length,left.length)
            // stack2.push(str)
            stack2[stack2.length-1] = str
            // console.log(left)
            // console.log(stack1,stack2)
        }else if(left.startsWith('[')){
            left = left.substring(1,left.length)
            // console.log(left)
        }else if(left.startsWith(']')){
            left = left.substring(1,left.length)
            let delNum = stack1.pop()
            let delStr = stack2.pop()
            if(delStr){
                // console.log(delStr.repeat(delNum))
                stack2[stack2.length-1]+= delStr.repeat(delNum)
            }
            // console.log(left)
            // console.log(stack1,stack2)
        }
    }
    // console.log(stack2,stack1)
    return stack2[0]
}

console.log(convert('2[3[b]2[ac]]'))