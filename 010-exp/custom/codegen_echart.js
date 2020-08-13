Blockly.JavaScript['echart_init'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'myechart = echarts.init(document.getElementById(\'myechart\'));\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['echart_title'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['echart_legend'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['echart_tooltip'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'tooltip: {}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['echart_series'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['echart_options'] = function(block) {
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  var value_legend = Blockly.JavaScript.valueToCode(block, 'legend', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tooltip = Blockly.JavaScript.valueToCode(block, 'tooltip', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xaxis = Blockly.JavaScript.valueToCode(block, 'xaxis', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yaxis = Blockly.JavaScript.valueToCode(block, 'yaxis', Blockly.JavaScript.ORDER_ATOMIC);
  var value_series = Blockly.JavaScript.valueToCode(block, 'series', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '{ ';
  code += value_title + ',\n ';
  code += value_legend + ',\n ';
  code += value_tooltip + ',\n ';
  code += value_xaxis + ',\n ';
  code += value_yaxis + ',\n ';
  code += value_series + '\n';
  code += '}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['echart_setoptions'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'myechart.setOption(' + value_name + ')\n';
  return code;
};

Blockly.JavaScript['echart_xaxis'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['echart_yaxis'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
   var code = 'yAxis: {}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};