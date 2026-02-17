// Shim for ordered-object-literal to avoid TypeError in AsyncAPI validation under CRA
function orderedObjectLiteral(input) {
  return input;
}

module.exports = orderedObjectLiteral;
module.exports.default = orderedObjectLiteral;
