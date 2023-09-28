import {useState,useEffect, createContext, useContext} from 'react'
import axios from 'axios';

export const ApiDataContext= createContext();
export const ApiDataProvider = ({children}) => {
    const [apiData,setApiData] = useState([])
    const [officeData,setOfficeData] = useState([])

    useEffect(()=>{
      const getApiData = ()=>{
        axios
          .get("http://127.0.0.1:8000/api/")
          .then((r)=>{
            console.log(r.data.company)
            const {data} = r.data
            setApiData(data)
            setOfficeData(r?.data?.company)
          })
      }
      getApiData()
    },[])
  return (
    <ApiDataContext.Provider value={{apiData, officeData }}>
        {children}
    </ApiDataContext.Provider>
  )
}

export const useApiData=()=>{
    return useContext(ApiDataContext);
}

