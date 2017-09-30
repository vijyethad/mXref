import * as types from './action-types';
import fetch from 'isomorphic-fetch'

export const recieveTableList = (json) => {
  return dispatch ({
    type: types.RECIEVE_TABLE_LIST,
    tableList: json
  });
}

export const fetchTableList = dispatch => {
  console.log('inside fetchTableList action');
    return fetch(`http://mxref-proxy.cloudhub.io/retrieve/`, {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type,header-type',
        'Header-Type': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         "mXRefRequest":{
            "TblValues":{
               "ACTION":"Retrieve",
               "ENTITY":"TableList",
               "TBL_NAME":null
            }
         }
      })
    })
      .then(response => response.json())
      .then(json => console.log(json))
}
