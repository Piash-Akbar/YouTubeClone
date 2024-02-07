import React,{createContext,useEffect,useState} from "react";
import {fetchDataFromApi} from '../utils/api';

export const Context = createContext();

export const AppContext = (props) => {
    const [loading,setLoading] =useState(false);
    const [searchResults,setSearcResults] = useState([]);
    const [selectCatagories,setSelectCatagories] = useState(false);
    const [mobileMenu,setMobileMenu] = useState(false);


    useEffect(()=>{
        fetchSelectedCategoryData(selectCatagories)

    },[selectCatagories])

    const fetchSelectedCategoryData = (query) =>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearcResults(contents);
            setLoading(false);
        })

    }

  return (
    <Context.Provider value={{
        loading,
        setLoading,
        searchResults,
        setSearcResults,
        selectCatagories,
        setSelectCatagories,
        mobileMenu,
        setMobileMenu
    }}>
        {props.children}
    </Context.Provider>
  )
};

// export default AppContext