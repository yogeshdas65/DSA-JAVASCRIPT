function checkAnagram(str1, str2) {
    let Objstr1 = {}
    if (str1.length !== str2.length) {
        return "Please Enter same length of Anagram Word"
    }
    for (ch of str1) {
        console.log(ch)
        Objstr1[ch] = (Objstr1[ch] || 0 ) + 1
    }
    console.log(Objstr1)
    for(ch of str2){
        console.log(Objstr1[ch])
        if(!Objstr1[ch]){
            return false
        }
        Objstr1[ch]--
        console.log("loop-2",Objstr1)
    }
    return true
}
console.log(checkAnagram("hello", "elloh"))