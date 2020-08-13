Blockly.Python['turtle_setup'] = function(block) {
  var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'screen = Screen()\n';
  code += 'screen.setup(' + value_width + ',' + value_height + ')\n'
  return code;
};

Blockly.Python['turtle_for_or_back_ward'] = function(block) {
  var dropdown_select = block.getFieldValue('select');
  var value_distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_select + '(' + value_distance + ')\n';
  return code;
};

Blockly.Python['turtle_turn_right_or_left'] = function(block) {
  var dropdown_select = block.getFieldValue('select');
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_select + '(' + value_angle + ')\n';
  return code;
};

Blockly.Python['turtle_shape'] = function(block) {
  var dropdown_select = block.getFieldValue('select');
  // TODO: Assemble Python into code variable.
  var code = 'shape(' + dropdown_select + ')\n';
  return code;
};

Blockly.Python['turtle_pen_up_and_down'] = function(block) {
  var dropdown_select = block.getFieldValue('select');
  // TODO: Assemble Python into code variable.
  var code = 'pen' + dropdown_select + '()\n';
  return code;
};

Blockly.Python['turtle_color'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'color(' + value_name + ')\n';
  return code;
};

Blockly.Python['turtle_circle'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'circle(' + value_name + ')\n';
  return code;
};

Blockly.Python['turtle_speed'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'speed(' + value_name + ')\n';
  return code;
};

Blockly.Python['turtle_begin_fill'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'begin_fill()\n';
  return code;
};

Blockly.Python['turtle_end_fill'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'end_fill()\n';
  return code;
};

Blockly.Python['turtle_goto'] = function(block) {
  var value_pos_x = Blockly.Python.valueToCode(block, 'pos x', Blockly.Python.ORDER_ATOMIC);
  var value_pos_y = Blockly.Python.valueToCode(block, 'pos y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'goto(' + value_pos_x + ', ' + value_pos_y + ')\n';
  return code;
};

Blockly.Python['turtle_stamp'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'stamp()\n';
  return code;
};

Blockly.Python['turtle_pos'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pos()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['turtle_init'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from turtle import *\n';
  return code;
};

Blockly.Python['turtle_bg_color'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'screen.bgcolor(' + value_name + ')\n';
  return code;
};