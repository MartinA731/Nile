import React from 'react'
import { GoogleLogin } from 'react-google-login';

const clientID = '';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);

        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin>
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            </GoogleLogin>
        </div>
    );
}

export default Login;

export const refreshTokenSetup = (res) => {
    // timing done to renew the access token for google login
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        
        console.log('newAuthRes:', newAuthRes);
        console.log('new auth token', newAuthRes.id_token);
        
        setTimeout(refreshToken, refreshTiming);
    };

    setTimeout(refreshToken, refreshTiming);
}