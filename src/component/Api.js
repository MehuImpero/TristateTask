var MainURL = "https://evermed.in/";


class ApiFetch {
    PostData = (apiurl, myObj, method) => {
      var API_URL = MainURL + apiurl;
        console.log("API ---> " + API_URL)
        console.log("OBJ ---> " + JSON.stringify(myObj))
        return fetch(API_URL, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:myObj,
        })
            .then((response) => response.json())
            .then((responseJson) => {
              
              //  console.log(JSON.stringify(responseJson))
                return responseJson;
            }).catch((error) => {
                console.log(error.responseJson)
                return error;
            });
    }
    PostDataWithToken = (apiurl, myObj, method, Token) => {
        var API_URL = MainURL + apiurl;
        console.log("API ---> " + API_URL)
        console.log("OBJ ---> " + JSON.stringify(myObj))
        console.log("Token ---> " + JSON.stringify(Token))
        return fetch(API_URL, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                'authorization':  'Bearer '+Token
            },
            body:myObj,
        })
            .then((response) => response.json())
            .then((responseJson) => {
              //  console.log(responseJson)
                return responseJson;
            }).catch((error) => {
                console.log(error.responseJson)
                return error;
            });
    }
    PostDataForToken = (apiurl, method, Token) => {
        var API_URL = MainURL + apiurl;
        console.log("API ---> " + API_URL)
        console.log("Token ---> " + JSON.stringify(Token))
        return fetch(API_URL, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                'authorization':  'Bearer '+Token
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
              //  console.log(responseJson)
                return responseJson;
            }).catch((error) => {
                console.log(error.responseJson)
                return error;
            });
    }


    PostDataWithHeaderWithMultipart = (apiurl, myObj, method, Bearer) => {
    var API_URL = MainURL + apiurl;
        console.log("API ---> " + API_URL)
        console.log("OBJ ---> " + JSON.stringify(myObj))
        return fetch(API_URL, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body:myObj,
        })
            .then((response) => response.json())
            .then((responseJson) => {
               // console.log(responseJson)
                return responseJson;
            }).catch((error) => {
                console.log(error.responseJson)
                return error;
            });
    }
    
    GetDataWithHeader = (apiurl, Bearer) => {
        var API_URL = MainURL + apiurl;
        console.log("API ---> " + API_URL)
        return fetch(API_URL, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
               // console.log(responseJson)
                return responseJson;
            }).catch((error) => {
                console.log(error.responseJson)
                return error.responseJson;
            });
    }
}
const apiFetch = new ApiFetch();
export default apiFetch;