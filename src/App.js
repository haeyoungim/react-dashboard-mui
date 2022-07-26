import {useState} from "react";
import Main from "./components/main/Main"
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import DashboardNavbar from '../src/components/navbar/Navbar';
import DashboardSidebar from '../src/components/sidebar/Sidebar';
import UserGroupList from "./components/main/UserGroupList";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import reset from 'styled-reset';
import {darkTheme, lightTheme} from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}  
  body {        
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
  }  
`;


function App() {

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>

            <div className="App">
                <BrowserRouter>
                    <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
                    <DashboardSidebar
                        onClose={() => setSidebarOpen(false)}
                        open={isSidebarOpen}
                    />
                    {/*<Layout setLocale={setInterval} />*/}
                    <Switch>
                        <GlobalStyle/>
                        <Route exact path="/"><Main isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/></Route>
                        <Route path="/main"><Main/></Route>
                        <Route path="/userGroupList"> <UserGroupList/></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    )
}

export default App;

