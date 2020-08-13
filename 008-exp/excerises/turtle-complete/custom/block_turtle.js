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

Blockly.Blocks['turtle_for_or_back_ward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"]]), "select")
        .appendField("by");
    this.appendValueInput("distance")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_turn_right_or_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"]]), "select")
        .appendField("by");
    this.appendValueInput("angle")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_shape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("shape")
        .appendField(new Blockly.FieldDropdown([["turtle","'turtle'"], ["square","'square'"], ["arrow","'arrow'"], ["circle","'circle'"]]), "select");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_pen_up_and_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pen")
        .appendField(new Blockly.FieldDropdown([["up","up"], ["down","down"]]), "select");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_color'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set color to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("可以输入\"red\", \"green\", \"blue\", \"pink\", \"tomato\"等");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_circle'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("circle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_speed'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_begin_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("begin fill");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_end_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("end fill");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_goto'] = {
  init: function() {
    this.appendValueInput("pos x")
        .setCheck(null)
        .appendField("goto");
    this.appendValueInput("pos y")
        .setCheck(null)
        .appendField(",");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_stamp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stamp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_pos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pos");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import turtle and init");
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_bg_color'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set background color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};