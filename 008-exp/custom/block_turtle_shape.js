Blockly.Blocks['turtle_shape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["turtle","'turtle'"], ["arrow","'arrow'"], ["triangle","'triangle'"]]), "shape selection");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("选取小乌龟的显示形状");
 this.setHelpUrl("");
  }
};