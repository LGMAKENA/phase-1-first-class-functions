function receivesAFunction (cb){
   cb ()
}

function returnsANamedFunction() {
return function named(){console.log("anything")}
}


function returnsAnAnonymousFunction () {
    return () => console.log("anything");}