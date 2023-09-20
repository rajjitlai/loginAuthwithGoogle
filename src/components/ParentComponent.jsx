// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Login from './Login';

const ParentComponent = () => {
    // eslint-disable-next-line no-unused-vars
    const [isAuth, setIsAuth] = useState(false);

    return (
        <div>
            <Login setIsAuth={setIsAuth} />
        </div>
    );
};

export default ParentComponent;
