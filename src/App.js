import {useState} from "react";
import Main from "./components/pages/Main"
import {BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardNavbar from '../src/components/navbar/Navbar';
import DashboardSidebar from '../src/components/sidebar/Sidebar';
import UserGroupList from "./components/pages/UserGroupList";


function App() {

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (

            <div className="App">
                <BrowserRouter>
                    <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
                    <DashboardSidebar
                        onClose={() => setSidebarOpen(false)}
                        open={isSidebarOpen}
                    />

                    <Routes>
                        <Route exact path="/" element={<Main/>}></Route>
                        <Route path="/main" element={<Main/>}></Route>
                        <Route path="/userGroupList" element={<UserGroupList/>}> </Route>
                    </Routes>
                </BrowserRouter>
            </div>
    )
}

export default App;

