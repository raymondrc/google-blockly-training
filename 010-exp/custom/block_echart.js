Blockly.Blocks['echart_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("init the echart");
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['echart_title'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set title");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['echart_legend'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set legend");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['echart_tooltip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set tooltip");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['echart_series'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set the series");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['echart_options'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set options of echart");
    this.appendValueInput("title")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("title");
    this.appendValueInput("legend")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("legend");
    this.appendValueInput("tooltip")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("tooltip");
    this.appendValueInput("xaxis")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("xaxis");
    this.appendValueInput("yaxis")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("yaxis");
    this.appendValueInput("series")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("series");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['echart_setoptions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("final step steoptions");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("options");
    this.setPreviousStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['echart_xaxis'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set the x axis");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['echart_yaxis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set the y axis");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};