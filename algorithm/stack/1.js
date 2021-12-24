var str = 'aaaabbbbbbbbbbb'
//输出重复最多的字母
var i = 0;
var j = 1;

while(i<=str.length-1){
   if(str[i]!=str[j]){
       console.log(`第${i}和第${j}连续相同，是${str[i]},重复了${j-i}次数`);
       i = j
   }
   j++
}