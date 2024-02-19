import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContexte = createContext();

export default function Wrapper({ children }) {
    const [users, setUsers] = useState();
    const FetchUsers = () => {
        axios.get('/api/user')
        .then(res=>{
            setUsers(res.data);
        })
        .catch(err=>{
            console.log(err.response.data);
        });
    }
    return (
        <GlobalContexte.Provider value={{ FetchUsers, users }}>
            {children}
        </GlobalContexte.Provider>
        );
}