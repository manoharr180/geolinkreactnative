import { apiUrl, loginUrl } from '../url';
export default class LoginService {

    static async login(userName, pass){
         return await fetch("http://localhost/GeoLinks.API/api/auth/login",
            {
                method: 'post',
                body: JSON.stringify({ "mailId": userName,"PhoneNumber":"", "Password": pass }),
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json',
                    'Connection' : 'keep-alive'
                },
            }
        ).then(resp => 
            { 
                return resp; 
            })
        .catch(err => { 
            console.log(err)
            debugger
            return err 
        });
           // return response.json();
    }
}