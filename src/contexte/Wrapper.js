import { createContext } from "react";

export const GlobalContexte = createContext();

export default function Wrapper({children}) {
    return <GlobalContexte.Provider>{children}</GlobalContexte.Provider>
}