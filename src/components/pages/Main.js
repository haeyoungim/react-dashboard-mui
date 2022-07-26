import hello from '../../assets/hello.svg';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from "react";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

function Main ({props,isDarkMode,toggleDarkMode}) {

    const { children } = props;

    return (
        <>

            <DashboardLayoutRoot>

                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%',
                        fontSize:14,
                        fontWeight: 700,
                        color: '#000000'
                    }}
                >
                    {children}

                    <Box className="main_greeting">
                    <img src={hello} alt="hello" />

                    <h1>👋Dashboard</h1>
                    <p>토이프로젝트 입니다.😁</p>
                        <button
                            type="button"
                            onClick={toggleDarkMode}
                            isDarkMode={isDarkMode}
                        >
                            {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
                        </button>
                    </Box>
                </Box>

            </DashboardLayoutRoot>


        </>
    );
};

export default Main;
//
//
// import React from 'react';
//
// import {Switch} from 'react-router-dom';
// import { FaHeart, FaBars } from 'react-icons/fa';
// import reactLogo from '../../assets/logo.jpg';
//
// const Main = ({
//                   collapsed,
//                   rtl,
//                   image,
//                   handleToggleSidebar,
//                   handleCollapsedChange,
//                   handleRtlChange,
//                   handleImageChange,
//               }) => {
//
//     return (
//         <main>
//             <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
//                 <FaBars />
//             </div>
//             <header>
//
//
//                 <div className="social-bagdes">
//                     <a
//                         href="https://github.com/azouaoui-med/react-pro-sidebar"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <img
//                             alt="GitHub stars"
//                             src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
//                         />
//                     </a>
//                     <a
//                         href="https://github.com/azouaoui-med/react-pro-sidebar"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <img
//                             alt="GitHub forks"
//                             src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
//                         />
//                     </a>
//                 </div>
//             </header>
//             <div className="block ">
//                 <Switch
//                     height={16}
//                     width={30}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                     onChange={handleCollapsedChange}
//                     checked={collapsed}
//                     onColor="#219de9"
//                     offColor="#bbbbbb"
//                 />
//
//             </div>
//             <div className="block">
//                 <Switch
//                     height={16}
//                     width={30}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                     onChange={handleRtlChange}
//                     checked={rtl}
//                     onColor="#219de9"
//                     offColor="#bbbbbb"
//                 />
//
//             </div>
//             <div className="block">
//                 <Switch
//                     height={16}
//                     width={30}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                     onChange={handleImageChange}
//                     checked={image}
//                     onColor="#219de9"
//                     offColor="#bbbbbb"
//                 />
//
//             </div>
//
//             <footer>
//                 <small>
//                     © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
//                     <a target="_blank" rel="noopener noreferrer" href="https://azouaoui.netlify.com">
//                         Mohamed Azouaoui
//                     </a>
//                 </small>
//                 <br />
//                 <div className="social-bagdes">
//                     <a href="https://github.com/azouaoui-med" target="_blank" rel="noopener noreferrer">
//                         <img
//                             alt="GitHub followers"
//                             src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
//                         />
//                     </a>
//                     <a href="https://twitter.com/azouaoui_med" target="_blank" rel="noopener noreferrer">
//                         <img
//                             alt="Twitter Follow"
//                             src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social"
//                         />
//                     </a>
//                 </div>
//             </footer>
//         </main>
//     );
// };

// export default Main;