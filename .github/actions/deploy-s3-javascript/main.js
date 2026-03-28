const core = require('@actions/core');
const GitHub = require('@actions/github');
const exec = require('@actions/exec')


function run() {
  core.notice('Hellow From my custom JS Action')  
}

run();