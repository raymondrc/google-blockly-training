Blockly.Python['turtle_setup'] = function(block) {
  var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'screen = Screen()\n';
  code += 'screen.setup (' + value_width + ',' + value_height + ', startx=None, starty=None)\n';
  return code;
};