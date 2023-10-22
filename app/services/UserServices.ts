import { apiUrl, getUserUrl } from '../url';
import { Get } from './RestServices';


export default class UserService {

    static async getUser(userMail: string): Promise<any> {

        return Get(apiUrl + getUserUrl+ userMail);
        
        //const tok = await sessionStorage.getItem('token');
        // return fetch(apiUrl + getUserUrl+ userMail,
        //     {
        //         method: 'Get',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //             'Authorization' : `Bearer ${tok?.toString()}`,
        //         },
                
        //     },
        // ).then(resp => { return resp.json(); })
        //     .catch(err => { return err });
    }
}