//This is a priate function.

//Addition function.
function add(a,b){
    return (a+b);
}

//Subtraction function.
function sub(a,b){
    return (a-b);
}


//To export the function, we use the module.exports object.
module.exports = {
    addFun: add,   //
    subFun: sub
}

//console.log(sub(9,6))