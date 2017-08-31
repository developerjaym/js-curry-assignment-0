'use strict'
const obj = {
    'data': 'hello',
    'key': 8979
}
const funnnnnn = ({data : val}) =>
{
    console.log(val)
    return;
}
//funnnnnn(obj)

const obj2 = {
    'weird key': 'lol',
    valid: 'cool'
}
console.log(obj2.valid)
console.log(obj2['weird key'])


const odb = {
    name: 'Mike',
    number: '1'
}

const arr = ['name', 'location']
/*const arr2 = arr.map((query)=>{
    return odb[query]//changes the element in the array to odb.query or odb[query] (like odb.name == mike, odb.location == undefined)
}).filter((val)=>val !== undefined)//remove undefined stuff
console.log(arr)
console.log(arr2)
    //map doesn't change the size of the array, only the elements in it
    //filter changes teh size of the array, but not the remaining elements
*/

console.log(arr.map((query)=>{
    return {
        [query]: odb[query]
    }
}).filter((val)=>val!==undefined))
