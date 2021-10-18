var updatePersonRequest = require('./src/pipedrive/api/updatePersonRequest');
const pipedrive=require('./src/pipedrive/index');
const pipedriveConfig = require('./config/pipedrive.json'); 
var config=JSON.parse(JSON.stringify(pipedriveConfig));
config['apiToken']="d0c58d439f5f6aed75fac6d0bd6e4a9692dd59b5";

pipedrive.notesApi.addNoteToPerson("Hey! a note has been added",1,config).then((data)=>{
    console.log(data);
}).catch((error) =>{
    console.log(error)
})

pipedrive.personsApi.searchPersonById('1',config).then((data)=>{
    console.log(JSON.stringify(data));
}).catch((error) =>{
    console.log(error)
})

let request = JSON.parse(JSON.stringify(updatePersonRequest));
request['name']="Pranjal Methi";
pipedrive.personsApi.updatePerson(1,request,config).then((data)=>{
    console.log(JSON.stringify(data));
}).catch((error) =>{
    console.log(error)
})


pipedrive.personsApi.searchPersonByName("Pranjal Methi",config).then((data)=>{
    console.log(JSON.stringify(data));
}).catch((error) => {
    console.log(error)
})
