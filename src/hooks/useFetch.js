import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url, reload) {
    const[data, setData] = useState(null);
    useEffect(() => {
        axios.get(url)
            .then(response => { setData(response.data.data); })
    }, [reload])
    
    return { data }
}