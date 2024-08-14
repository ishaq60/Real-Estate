import React, { useContext } from 'react';
import { AuthContext } from '../FirebaseProvder/FirebaseAuthProvider';

const UseAuth = () => {
    const all =useContext(AuthContext)
    return (
        all
    );
};

export default UseAuth;