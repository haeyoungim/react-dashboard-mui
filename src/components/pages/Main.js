import hello from '../../assets/hello.svg';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from "react";

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

export const Main = (props) => {

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

                    </Box>
                </Box>

            </DashboardLayoutRoot>


        </>
    );
};

export default Main;
