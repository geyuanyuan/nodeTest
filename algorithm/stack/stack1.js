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
    let stack1=[]
    let stack2=[]

    // for(let i=0;i<str.length;i++){
    //     let currentStr = str[i]
    //     console.log(currentStr);
        
    // }
    // 如果是[abc]这种 每次步长不是1  所以用while 

    var left = str
    while(left){
        
        left = left.substr(0,1)
    }


}

convert('2[1[b]2[c]]')