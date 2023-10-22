import { apiUrl, getFriends } from '../url';

interface IFreinds {
    friendProfileId:number;
    fName:string;
    lName:string;
    userName:string;
    bloodGroup: string;
    frndAddedOn:Date;
}

export default class FriendsService {

    static async getFriends(userId: number): Promise<IFreinds[]> {

        const tok = await sessionStorage.getItem('token');

        return fetch(apiUrl + getFriends + userId,
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