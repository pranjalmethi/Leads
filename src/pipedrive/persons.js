const axios = require("axios").default;
const FormData = require('form-data');
const url = require('url');
var updatePersonRequest = require('./api/updatePersonRequest');

var searchPersonByName = async function (name, config) {
    let params = new url.URLSearchParams({ api_token: config['apiToken']});
    let fields = ['name'];
    params.append('term',name);
    params.append('fields',fields);
    params.append('exact_match',false);

    
    return await axios.get(config['baseUrl'] + "/v1/persons/search",
    {
        params:params,
    }
    ).then((response) => {
        return response.data
    }).catch((error) => {
        return error
    })
}
var searchPersonById = async function (personId, config) {
    const params = new url.URLSearchParams({ api_token: config['apiToken'] });
    return await axios.get(config['baseUrl'] + "/v1/persons/" + personId,
    {
        params:params,
    }
    ).then((response) => {
        return response.data
    }).catch((error) => {
        return error
    })
}

var updatePerson = async function (personId,updatePersonRequest, config) {
    console.log('Request:'+updatePersonRequest)
    const params = new url.URLSearchParams({ api_token: config['apiToken'] });

    return axios.put(config['baseUrl'] + "/v1/persons/" + personId,
                updatePersonRequest,                
                {
                    params:params
                }
            ).then((response) => {
                return response.data;
            })
}

module.exports={searchPersonById,searchPersonByName,updatePerson};