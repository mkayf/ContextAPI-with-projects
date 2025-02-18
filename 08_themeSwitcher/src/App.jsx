import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
    const [themeMode, setThemeMode] = useState('light');

    const lightTheme = () => {
      setThemeMode('light');
    }

    const darkTheme = () => {
      setThemeMode('dark');
    }

    let htmlElement = document.querySelector('html');
    useEffect(() => {
      htmlElement.classList.remove('light', 'dark');
      htmlElement.classList.add(themeMode);
    }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <Themebtn/>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
