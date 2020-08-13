Blockly.Python['import_turtle'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\nfrom turtle import * \n';
  return code;
};

Blockly.Python['set_color_of_turtle'] = function(block) {
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble Python into code variable.
  var code = 'color(0xff0000)\n';
  return code;
};

Blockly.Python['set_color_of_turtle'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'color('+ value_name+ ')\n';
  return code;
};

Blockly.Python['forward'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'forward' + '(' + value_name + ')'+' \n';
  return code;
};

Blockly.Python['right'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'right' + '(' + value_name + ')'+' \n';
  return code;
};

Blockly.Python['shape'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'shape' + '(' + dropdown_name + ')'+' \n';
  return code;
};
