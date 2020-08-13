Blockly.Blocks['turtle_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import turtle library");
    this.setNextStatement(true, null);
 this.setTooltip("导入turtle库");
 this.setHelpUrl("");
  }
};