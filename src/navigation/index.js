import React, { useState } from 'react';
import LogInScreen from '../screens/LogInScreen';
//import MainScreen from '../screens/MainScreen';
import authService from '../services/auth';
import axios from 'axios';
import MainNavigation from './mainNavigation';

export default function RootNavigation() {
    const [isAuth, setIsAuth] = useState(false);

    const handleLogin = (data) => {
        authService.logIn(data).then((token) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setIsAuth(true);
        })
        .catch(console.log);
    }

    if (isAuth) {
        return <MainNavigation />
    } else {
        return <LogInScreen handleLogin={ handleLogin }/>
    }
}