function receivesAFunction(callback){
var Spy = "I love to Spy on people"
callback(Spy)
}

function returnsANamedFunction(){
     beforeAll();

   return namedFunction;
} 
function beforeAll() {

    console.log ("beforeAll");
}
   const namedFunction = () => {
    console.log(`Chadr`);

    console.log("I am taking my Chadr on a walk.")
}

const returnsAnAnonymousFunction = function () {
    beforeAll();
  
    return function () {
      console.log("I am within the anonymous function");
    };
  };
  
  function beforeAll() {
    console.log("beforeAll");
  }
