// code your solution here

// i did it like this at first 

// function superbowlWin(array){
//     for (const o of array) {
//         if(o.result=== "W")
//         return o.year
//     }
// }


function superbowlWin(array){

    const result=array.find(e=>e.result==="W")

    return result? result.year : undefined
}