const is = module.exports === exports
console.log(is)
// __dirname
// __filename
// exports
// module
// require
// this

const path = require('path')

/**
 * __dirname
 * __filename
 */

const a = __dirname === path.dirname(__filename) // true

/**
 * exports
 */


const aa = exports === module.exports // true

/**
 * module
 * moduleObj.children
 * moduleObj.exports
 * moduleObj.filename
 * moduleObj.id
 * moduleObj.loaded
 * moduleObj.parent
 * moduleObj.path
 * moduleObj.paths
 */
const moduleObj  = module


/**
 * require
 */


console.log('cjs load')