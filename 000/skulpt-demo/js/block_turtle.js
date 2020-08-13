Blockly.Blocks['import_turtle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import turtle library");
    this.setNextStatement(true, null);
 this.setTooltip("导入turtle库文件");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_color_of_turtle'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("set color of turtle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("为小乌龟设置颜色");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['forward'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("设置小乌龟的前进举例");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['right'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("设置小乌龟的右转距离");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['shape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("shape")
        .appendField(new Blockly.FieldDropdown([["turtle","'turtle'"], ["arrow","'arrow'"], ["circle","'circle'"], ["square","'square'"], ["triangle","'triangle'"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("设置画板上显示图像");
 this.setHelpUrl("");
  }
};