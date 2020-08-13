Blockly.Python['turtle_shape'] = function(block) {
  var dropdown_shape_selection = block.getFieldValue('shape selection');
  // TODO: Assemble Python into code variable.
  var code = 'shape(' + dropdown_shape_selection + ')\n';
  return code;
};