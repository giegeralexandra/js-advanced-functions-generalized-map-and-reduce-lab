// Add your functions here

map()
function map(array, fn){
    let r = []
    for (let i = 0; i < array.length; i++ ) {
    r.push(fn(array[i]))
    }
  return r
}

function reduce(array, fn, starting) {
    let num 
    let i=0
    if (starting){ 
        num = starting 
    } else {
        num = array[0]
        i++
    }

    for (i; i< array.length; i++){
        num = fn(array[i],num)
    }
    return num
}