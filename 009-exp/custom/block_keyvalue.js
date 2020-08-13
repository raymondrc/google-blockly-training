Blockly.Blocks['key_value_pair'] = {
  init: function() {
    this.appendValueInput("KEY")
        .setCheck(null)
        .appendField("key");
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, null);
 this.setTooltip("创建一对键值");
 this.setHelpUrl("");
  }
};