#!/usr/bin/env node
var ConfigRunner = require('../src/ConfigRunner.js');
var path = require('path');

var assets = false;
if(process.argv[3] == '--assets') {
	assets = true;
}

var runner = new ConfigRunner(process.argv[2],assets);

var configPath = './aws-upload.conf.js';

var config = require(path.resolve(configPath));

runner.setConfig(config);

runner.run();
