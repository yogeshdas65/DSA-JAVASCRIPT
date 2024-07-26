let data = new Map([
    ["name" , "yogesh"],
    [true , "boolean-value"],
    [12, "twelve"]
])
// data.set("newName")
// console.log(data.get(12))
// console.log(data.size)
// console.log(data.has("name"))
// console.log(data.get(12))
//  console.log(data)
// data.clear()

// for( x of data){
//     console.log(x[0] , x[1])
// }
// data.forEach((key,value)=>{
// console.log(value)
// })
 
if(data.has("name")){
    data.delete("name")
}
console.log(data)



