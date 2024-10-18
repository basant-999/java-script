
function countVowel(str){
    let count = 0;

    for(const char of str){
        if(char==="a"|| char==="i"|| char==="e"|| char==="o"|| char==="u"){

            count++;
        }
    }
    return count;

}