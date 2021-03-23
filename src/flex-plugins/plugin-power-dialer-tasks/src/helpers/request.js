const request = async (path, manager, params) =>{
    const body = {
        ...params,
        Token: manager.store.getState().flex.session.ssoTokenPayload.token
    };

    const options = {
        method: 'POST',
        body: new URLSearchParams(body),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    };

    const { REACT_APP_SERVICE_BASE_URL: serviceBaseUrl } =  process.env;

    const resp = await fetch(`https://${serviceBaseUrl}/${path}`, options)
    return (await resp.json())
}

export {
    request
}