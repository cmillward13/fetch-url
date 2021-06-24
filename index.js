const core = require('@actions/core')
const url = core.getInput('url', {required:true});

const reDeploy = async ()=>{
    
    await fetch(url)
    core.setOutput('completed', true)

};

reDeploy();
