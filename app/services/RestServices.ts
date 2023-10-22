

export  const  Get = async (url:string) : Promise<any >=> {   

    const tok = await sessionStorage.getItem('token');
    console.log('get item ', tok)
        return fetch(url,
            {
                method: 'Get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${tok?.toString()}`,
                },
                
            },
        ).then(resp => { return resp.json(); })
            .catch(err => { return err });
}