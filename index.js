const core = require('@actions/core')
const url = core.getInput('url', {required:true});

const reDeploy = async ()=>{
    
    console.log(url)
    await fetch(url)
    core.setOutput('completed', true)

};

reDeploy();
