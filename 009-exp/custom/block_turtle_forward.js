Blockly.Blocks['turtle_forward'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("forward distance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("设置小乌龟前进的距离，以像素为单位");
 this.setHelpUrl("");
  }
};