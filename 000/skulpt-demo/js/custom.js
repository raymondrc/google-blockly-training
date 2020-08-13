Blockly.Blocks["factorial"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("Number")
      .appendField("factorial of ");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("输入一个数字a，计算其阶乘a!");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["factorial"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var functionName = Blockly.JavaScript.provideFunction_("get_factorial", [
    "function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(n) {",
    "   var tmp = 1;",
    "   for (var count = 1; count <= n; count++) {",
    "       tmp = tmp * count; ",
    "   }",
    "   return tmp;",
    "}",
  ]);
  code = functionName + "(" + value_name + ")";
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
