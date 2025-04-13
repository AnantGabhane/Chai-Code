https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

- Array object, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

- v8 engine is what powers the node js in the background

- holes(undefined values in the array) are very expensive in js 

Array types :
- SMI (small integer)
- packed element 
- Double (float, string, function)

- if an array is downgraded to holes then you cannot upgrade it to packed
- SMI > double > packed 
- H_SMI > H_Double > H_Packed

