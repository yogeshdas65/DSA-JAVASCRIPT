let data ={
    name:'anil',
    age:28,
    mail:"abc@test.com",
    getName:function(){
       return this.name;
    }
}
data.contact=12345;
data.name="peter"

for(x in data){
    console.warn(data[x])
}
// peter
// 28
// abc@test.com
// [Function: getName]
// 12345

for(x in data){
    console.warn(x)
}
// name
// age
// mail
// getName
// contact

console.warn(Object.keys(data)) // [ 'name', 'age', 'mail', 'getName', 'contact' ]
console.warn(Object.values(data)) // [ 'peter', 28, 'abc@test.com', [Function: getName], 12345 ]

console.warn(Object.entries(data)) 
//   [
//     [ 'name', 'peter' ],
//     [ 'age', 28 ],
//     [ 'mail', 'abc@test.com' ],
//     [ 'getName', [Function: getName] ],
//     [ 'contact', 12345 ]
//   ]