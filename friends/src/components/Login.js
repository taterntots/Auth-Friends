import React, { useState } from 'react';

function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        isFetching: false
    })

    console.log(credentials);

    const handleChange = event => {
        event.preventDefault();
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <form>
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