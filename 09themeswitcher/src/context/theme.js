import { createContext, useContext } from "react";

export  const ThemeContext = createContext({
    theme:'light',
    toggleTheme: () => {
        console.log("this is a default function  and plz read notes....");
    }
})

export const ThemeContextProvider= ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}