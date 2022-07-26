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
// const Sidebar = ({ sidebarOpen, closeSidebar }) => {
//import useState hook to create menu collapse state
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
//import react pro sidebar components



// import icons from react-icon;
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import {makeStyles} from "@material-ui/core/styles";



//create a custom function that will change menucollapse state from false to true and true to false





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





                {/*<SidebarHeader>*/}
                {/*    <div*/}
                {/*        style={{*/}
                {/*            padding: "24px",*/}
                {/*            textTransform: "uppercase",*/}
                {/*            fontWeight: "bold",*/}
                {/*            fontSize: 14,*/}
                {/*            letterSpacing: "1px",*/}
                {/*            overflow: "hidden",*/}
                {/*            textOverflow: "ellipsis",*/}
                {/*            whiteSpace: "nowrap"*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        Toy project*/}
                {/*    </div>*/}
                {/*</SidebarHeader>*/}


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

//
        // <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
        //     <div className='sidebar_title'>
        //         <div className='sidebar_img'>
        //             <img src={logo} alt="logo" />
        //             <h1>토이 프로젝트🤖</h1>
        //         </div>
        //
        //         <i
        //             onClick={() => closeSidebar()}
        //             className="fa fa-times"
        //             id="sidebarIcon"
        //             aria-hidden="true"
        //         ></i>
        //     </div>


        //
        //     {/* === Home === */}
        //     <div className="sidebar_menu">
        //         <div className="sidebar_link active_menu_link">
        //             <i className="fa fa-minus-square"></i>
        //             <a href="/">Home</a>
        //         </div>
        //
        //         {/* === User Group List === */}
        //         <h2>User Group List</h2>
        //         <div className="sidebar_link">
        //             <i className="fa fa-tachometer"></i>
        //             <a href="User">abc</a>
        //         </div>
        //
        //
        //         {/* === UserList === */}
        //         <h2>User List</h2>
        //         <div className="sidebar_link">
        //             <i className="fa-solid fa-user"></i>
        //             <a href="#">def</a>
        //         </div>
        //
        //
        //         {/* === Report === */}
        //         <h2>Report</h2>
        //         <div className="sidebar_link">
        //             <i className="fa-solid fa-user"></i>
        //             <a href="#">ghi</a>
        //         </div>
        //     </div>
        // </div>



//     )
// }
// export default Sidebar;


//
// //import useState hook to create menu collapse state
// import React, { useState } from "react";
//
// //import react pro sidebar components
// import {
//     ProSidebar,
//     Menu,
//     MenuItem,
//     SidebarHeader,
//     SidebarFooter,
//     SidebarContent,
// } from "react-pro-sidebar";
//
//
// // import icons from react-icon;
// import { FaList, FaRegHeart } from "react-icons/fa";
// import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";
//
//
// //import sidebar css from react-pro-sidebar module and our custom css
// import "react-pro-sidebar/dist/css/styles.css";
// import "./Sidebar.css";
//
//
// const Sidebar = () => {
//
//     //create initial menuCollapse state using useState hook
//     const [menuCollapse, setMenuCollapse] = useState(false)
//
//     //create a custom function that will change menucollapse state from false to true and true to false
//     const menuIconClick = () => {
//         //condition checking to change state from true to false and vice versa
//         menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//     };
//
//     return (
//         <>
//             <div id="header">
//                 {/* collapsed props to change menu size using menucollapse state */}
//                 <ProSidebar collapsed={menuCollapse}>
//                     <SidebarHeader>
//                         <div className="logotext">
//                             {/* small and big change using menucollapse state */}
//                             <p>{menuCollapse ? "Logo" : "Toy Project"}</p>
//                         </div>
//                         <div className="closemenu" onClick={menuIconClick}>
//                             {/* changing menu collapse icon on click */}
//                             {menuCollapse ? (
//                                 <FiArrowRightCircle/>
//                             ) : (
//                                 <FiArrowLeftCircle/>
//                             )}
//                         </div>
//                     </SidebarHeader>
//                     <SidebarContent>
//                         <Menu iconShape="square">
//                             <MenuItem active={true} icon={<FiHome />}>
//                                 Dashboard
//                             </MenuItem>
//                             <MenuItem icon={<FaList />}>User Group List</MenuItem>
//                             <MenuItem icon={<FaRegHeart />}>User List</MenuItem>
//                             <MenuItem icon={<RiPencilLine />}>Report</MenuItem>
//                             <MenuItem icon={<BiCog />}>Settings</MenuItem>
//                         </Menu>
//                     </SidebarContent>
//                     <SidebarFooter>
//                         <Menu iconShape="square">
//                             <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
//                         </Menu>
//                     </SidebarFooter>
//                 </ProSidebar>
//             </div>
//         </>
//     );
// };
//
// export default Sidebar;
//
