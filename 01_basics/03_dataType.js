"use strict"
// official documentation of javascript
//  https://tc39.es/ecma262/#sec-abstract-operations

// data type
// string
// number
// boolean
// null
// undefine


// conversion

let score = 35

console.log(score , "    ")
console.log(typeof(score) , "    type of is number  ")
console.log(typeof("33") , "     of is string ")


console.log(typeof(   Number ("33") ) ,    " converted  string/'33/'  into  number ")

console.log(typeof(   Number ("a33a") ) ,    " 33a converted  string/'33/'  into  number    but but value is NaN   not a number ")
console.log(          Number("33aa")  ,     "value is NaN")
//   value conversion time   dont relay string to nummber conversion

console.log(          Number(null)  ,     "convert  Number(null)   is o")
console.log(          Number(undefined)  ,     "convert  Number(undefined)   is NaN")
console.log(          Number("rekh raj")  ,     "convert  Number(  pure string )   is NaN")

console.log(          Boolean(-555)  ,     "convert  Number(  pure string )   is NaN")
//  conversion notes
//  Number( ??)
// 33 => number
//  "33ab" => Nan
// true  =>  1
// 
//  Boolean(???)
//  1  => true
// 0  =>  false
//  "rekh" => true
//  "" => false
// null => false
// undefine => false
//  555  or -555 => true

//  note  browser normaly string me value deta hai


// *********************  OPERATIONS  **********************


// (2**3)   power 3
//  21%4    remaing 1
//  2/3      0.666666666

//  string operations   
//  "1" + "2"       => 12
//  1+ "2"           => 12
//  "1" + "2"  + "3"  => 123
//  1 + 2 + "3"       => 33   ? ? read https://tc39.es/ecma262/#sec-abstract-operations

//  prefix postfix increment
//   y  =  x++     first value assign to y   then x increaded by 1
//   y  =  ++x     first x value increased by 1  than assign to y
//                  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment