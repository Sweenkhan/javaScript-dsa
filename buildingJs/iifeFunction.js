//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
 


( function yourName(data) {
    console.log("My name is sween khan." ) 
    console.log(data.toUpperCase())
})(data);                                                         // always end with semi-colon after invoked the function


( (name) => {
   console.log(`My name is ${name}.`)
} )("raje")