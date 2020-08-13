Blockly.Blocks['turtle_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setup the turtle fig size");
    this.appendValueInput("width")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width");
    this.appendValueInput("height")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};