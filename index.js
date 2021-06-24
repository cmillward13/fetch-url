const fetch = require('fetch')
const core = require('@actions/core')


const reDeploy = async ()=>{
    const url = core.getInput('url', {required:true});   
    
    await fetch(url)
    core.setOutput('completed', true)

};

reDeploy();
