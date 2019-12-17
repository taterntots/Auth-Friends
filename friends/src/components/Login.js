import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Login(props) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        isFetching: false
    })

    console.log(credentials);

    const login = event => {
        event.preventDefault();
        setCredentials({ 
            isFetching: true
        })
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
    }

    const handleChange = event => {
        event.preventDefault();
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
                {credentials.isFetching && 'logging in'}
            </form>
        </div>
    )
}

export default Login;