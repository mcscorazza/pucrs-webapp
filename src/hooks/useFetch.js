import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url, reload) {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
    
    const[data, setData] = useState(null);

    useEffect(() => {
        axios.get(url, config)
            .then(response => { setData(response.data.data); })
    }, [reload])
    
    return { data }
}