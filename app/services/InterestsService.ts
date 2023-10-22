import { apiUrl, getInterests } from "../url";

export default class InterestsService{
    static async getInterests(): Promise<any> {
        
        const tok = await sessionStorage.getItem('token');
        
        return fetch(apiUrl + getInterests,
            {
                method: 'get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tok?.toString()}`
                },
            }
        ).then(resp => { return resp.json(); })
            .catch(err => { return err });
    }
}