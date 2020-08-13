Blockly.JavaScript['dict_element'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['create_dict_with_container'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['create_dict_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
        // Blockly.JavaScript.ORDER_COMMA) || 'null';
        Blockly.JavaScript.ORDER_NONE) || 'null';
  }
  var code = '{' + elements.join(', ') + '}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};