import { useEffect , useState } from "react";
import axios from "axios";
//import { BASE_URL } from "../constants/urls";


const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    useEffect(()=>{
        axios
        .get(url,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "jenifer-kindermann-guimaraes"
            }
        })
        .then((response)=> {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert('Ocorreu um erro, tente novamente')
        })
    }, [url])
    return (data)
}

export default useRequestData