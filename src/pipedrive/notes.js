const axios = require("axios").default;
const FormData = require('form-data');
const url = require('url');
const addNoteRequest= require('./api/addNoteRequest');

var addNoteToPerson = function (content, personId, config) {
    let request = JSON.parse(JSON.stringify(addNoteRequest));
    request['content']=content;
    request['person_id']=personId;
    return addNote(request,config);
}

var addNote = async function (addNoteRequest,config) {
    const form = new FormData();
    for(const property in addNoteRequest){
        form.append(property, addNoteRequest[property])
    }
    const params = new url.URLSearchParams({ api_token: config['apiToken'] });

    return await axios.post(config['baseUrl'] + "/v1/notes",form,
                {
                    params:params,
                    headers:form.getHeaders()
                }
            ).then(function(response){
                return response.data;
            }).catch(function(error){
                console.error(error)
            })
    
}

module.exports={addNoteToPerson}