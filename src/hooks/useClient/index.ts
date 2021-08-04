import { useMemo } from 'react';
import Client from './client';

export function useClient(): [Client, typeof setDeliverier] {
    let deliverier: Deliverier = {};
    function setDeliverier(_del: Deliverier) {
        deliverier = { ...deliverier, ..._del };
    }

    function dispatch({ data }: any) {
        const serverResponse = JSON.parse(data) as ServerResponse;
        deliverier[serverResponse.type](serverResponse);
    }

    const client = useMemo(() => {
        const _client = new Client();
        _client.open(dispatch);
        return _client;
    }, []);

    return [client, setDeliverier];
}

export default useClient;

