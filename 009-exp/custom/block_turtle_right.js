Blockly.Blocks['turtle_right'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("set angle of turn right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("设置向右转的角度");
 this.setHelpUrl("");
  }
};