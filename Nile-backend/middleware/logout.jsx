import React from 'react'
import { GoogleLogin } from 'react-google-login';

const clientID = '';

function Logout() {
    const onSuccess = () => {
        console.log('[Logout successful]');
    };

    return (
        <div>
            <GoogleLogout>
                clientId={clientID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            </GoogleLogout>
        </div>
    );
}

export default Logout;
