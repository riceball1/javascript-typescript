// https://bigfrontend.dev/problem/undefined-to-null

/*
One of the differences between null and undefined is how they are treated differently in JSON.stringify().

JSON.stringify({a: null})      // '{"a":null}'
JSON.stringify({a: undefined}) // '{}'

JSON.stringify([null])         // '[null]'
JSON.stringify([undefined])    // '[null]'
This difference might create troubles if there are missing alignments between client and server. It might be helpful to enforce using only one of them.

You are asked to implement undefinedToNull() to return a copy that has all undefined replaced with null.

undefinedToNull({a: undefined, b: 'BFE.dev'})
// {a: null, b: 'BFE.dev'}

undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']})
// {a: ['BFE.dev', null, 'bigfrontend.dev']}
*/

/**
 * @param {any} arg
 * @returns any
 */

/*

Notes about my first attempt:

- I tried to first iterate over the arg using a for..in loop
- I checked the type of is an object then iterated over that, but I think I should have used another type of check first, see the code after for the correct solution

*/
function undefinedToNullX(arg) {
    for (let key in arg) {
        if (typeof arg[ key ] === 'object') {
            for (let i = 0; i < arg[ key ].length; i++) {
                if (arg[ key ][ i ] === undefined) {
                    arg[ key ][ i ] = null;
                }
            }
        }
        if (arg[ key ] === undefined) {
            arg[ key ] = null;
        }
    }
    return arg;
}

function undefinedToNull(arg) {

    if (arg === undefined) {
        return null;
    } else if (Array.isArray(arg)) {
        // maps over each element in the array
        return arg.map(undefinedToNull);
    } else if (Object.prototype.toString.call(arg) === '[object Object]') {
        // arg is an object
        // the following iterates over the object
        // The Object.keys method is used to get an array of all the keys in the object. The reduce method is then used to iterate over each key in the object, and build a new object with the same keys, but with any undefined values replaced by null.
        // Note: there could be other methods instead of reduce, such as for... in or Object.entries()
        return Object.keys(arg).reduce((acc, currentKey) => ({
            ...acc,
            [ currentKey ]: undefinedToNull(arg[ currentKey ]),
        }), {});
    }

    return arg; // final updated object
}



let a = undefinedToNull({ a: undefined, b: 'BFE.dev' })
console.log(a) // {a: null, b: 'BFE.dev'}

let b = undefinedToNull({ a: [ 'BFE.dev', undefined, 'bigfrontend.dev' ] })
console.log(b) // {a: ['BFE.dev', null, 'bigfrontend.dev']}

let c = undefinedToNull({ a: undefined, b: { c: { d: undefined, e: [ 'BFE.dev', undefined ] } } })
console.log(c)