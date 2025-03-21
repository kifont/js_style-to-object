'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((line) => line.trim())
    .reduce((result, line) => {
      const [key, value] = line.split(':').map((part) => part.trim());

      if (key && value) {
        result[key] = value;
      }

      return result;
    }, {});

  return styles;
}

module.exports = convertToObject;
