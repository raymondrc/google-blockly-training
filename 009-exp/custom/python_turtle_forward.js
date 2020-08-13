Blockly.Python['turtle_forward'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'forward(' + value_name + ')\n';
  return code;
};