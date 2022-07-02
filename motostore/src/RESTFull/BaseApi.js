import axios from 'axios';

export default function RESTFullapiBaseServer(enpoint, method='GET', paramObj=null, body){

    let token = localStorage.getItem('token');

    return axios({
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Content-Length': 255,
            'Accept': 'application/json',
            "x-powered-by": "CORS Anywhere",
            'Access-Control-Allow-Origin': true,
        },
        method : method,
        url : 'http://localhost:8080/api/user/login',
        params : paramObj,
        data : body,
    });
}