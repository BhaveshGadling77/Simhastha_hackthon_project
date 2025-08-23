import {useContext, createContext} from "react";

export const dataContext = createContext({
    data:null
})

export const dataProvide = data.Provider;
export default function useData() {
    return useContext(dataContext)
}