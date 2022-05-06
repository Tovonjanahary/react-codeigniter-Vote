import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();
        (async function getData() {
            const { data } = await axios.get(url,{signal: abortCont.signal});
            setData(data);
            setLoading(false);
        })();
        return () => abortCont.abort();
    },[url]);

    return { data, loading };
}

export default useFetch;