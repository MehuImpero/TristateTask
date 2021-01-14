var MainURL = "https://evermed.in/";


class ApiFetch {

 

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
}
const apiFetch = new ApiFetch();
export default apiFetch;