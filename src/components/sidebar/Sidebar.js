import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar";

import GroupsIcon from '@mui/icons-material/Groups';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import "react-pro-sidebar/dist/css/styles.css";
import MenuIcon from '@mui/icons-material/Menu';
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";



const Sidebar = ({ image, rtl, toggled, handleToggleSidebar }) => {


    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return(
        <>
            <div id="header">
            <ProSidebar
                image={false}
                rtl={rtl}
                collapsed={menuCollapse}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >

                <SidebarHeader>
                    <div
                        // className="logotext"
                        style={{
                            padding: "24px",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            fontSize: 14,
                            letterSpacing: "1px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }}
                    >
                        {/* small and big change using menucollapse state */}
                        <p className="sidebar-title">{menuCollapse ? "Toy" : "Toy Project"}</p>
                    </div>
                    <div className="closemenu" onClick={menuIconClick}>
                        {/* changing menu collapse icon on click */}
                        {menuCollapse ? (
                            <MenuIcon/>
                        ) : (
                            <MenuIcon/>
                        )}
                    </div>
                </SidebarHeader>


                {/*메뉴 사이드바*/}
                <SidebarContent>
                    <Menu iconShape="circle">

                        {/*Dashboard*/}
                        <MenuItem
                            icon={<DashboardIcon />}
                            suffix={<span className="badge red">new</span>}
                        >
                            Dashboard
                            <a href='/main'></a>
                        </MenuItem>

                        {/*User Group List*/}
                        <MenuItem icon={<GroupsIcon />}>
                            User Group List
                            <a href='/userGroupList'>
                            </a>
                            </MenuItem>
                        {/*User List*/}
                        <SubMenu
                            suffix={<span className="badge yellow">1</span>}
                            title="User List"
                            icon={<PersonIcon />}
                        >
                            <MenuItem>메뉴 1</MenuItem>
                            <MenuItem>메뉴 2</MenuItem>
                            <MenuItem>메뉴 3</MenuItem>
                        </SubMenu>

                        {/*Report*/}
                        <SubMenu
                            suffix={<span className="badge yellow">2</span>}
                            title="Report"
                            icon={<ReportIcon />}
                        >
                            <MenuItem>메뉴 1</MenuItem>
                            <MenuItem>메뉴 2</MenuItem>
                            <MenuItem>메뉴 3</MenuItem>
                        </SubMenu>

                        {/*Settings*/}
                        <SubMenu
                            title="Settings"
                            icon={<SettingsIcon />}

                        >
                            <MenuItem>메뉴 1</MenuItem>
                            <MenuItem>메뉴 2</MenuItem>

                            <SubMenu
                                title={`메뉴 3`}
                                suffix={<span className="badge 3"></span>}
                            >
                                <MenuItem>메뉴 3-1</MenuItem>
                                <MenuItem>메뉴 3-2</MenuItem>

                                <SubMenu
                                    title={`메뉴 3-3`}
                                >
                                    <MenuItem>메뉴 3-3-1</MenuItem>
                                    <MenuItem>메뉴 3-3-2</MenuItem>
                                    <MenuItem>메뉴 3-3-3</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: "center" }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: "20px 24px"
                        }}
                    >
                        <a
                            href="localhost:3000/logout"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <LogoutIcon/>
                            <span> Logout </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
            </div>
            </>


    )
}
export default Sidebar;
