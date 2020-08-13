Blockly.Python['turtle_color'] = function(block) {
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'color('+ value_color + ')\n';
  return code;
};