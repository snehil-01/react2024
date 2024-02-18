import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import {ThemeContextProvider } from "./context/theme.js";
import Demo from "./components/Demo.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    if(theme=='dark')setTheme('light');
    else setTheme('dark');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(theme);
  },[theme]) 

  return (
    <>
    <Demo/>
      <ThemeContextProvider  value={{theme,toggleTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />        {/* Since you have a provider, regardless of the provider having a value or not, the context won't use the default. If the context can't find a provider, it'll fallback to the default. this means that if we are wrapping using provoder  value is must and if the component is not in provider and still tries to useContext on that provider then only default value will be used.*/}
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
