Blockly.Blocks['turtle_color'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck("String")
        .appendField("set color of turtle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("设置小乌龟的颜色");
 this.setHelpUrl("");
  }
};