var stylus = require('stylus'),
    path = require('path');

exports = module.exports = plugin;

/**
 * Library version.
 */

exports.version = require(path.join(__dirname, './package.json')).version;

/**
 * Stylus path.
 */

exports.path = path.join(__dirname, 'lib');

/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */

function plugin() {
  return function (yeticss) {
    yeticss.include(exports.path);
  };
}

