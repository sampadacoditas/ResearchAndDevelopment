import {GoogleLogin} from "react-google-login"
import styles from "./LoginButton.module.scss"
const clientId="169032020209-4n6qrcqku3kscjaofjqon8k2uc5vhb42.apps.googleusercontent.com"

function LoginButton()
{
    const onSuccess=(res:any)=>{
        console.log("Login Success Current User",res.profileObj)
    }
    const onFailure=(res:any)=>{
        console.log("Login Failed! res:",res)
    }
    return (
        <div className={styles.signInButton}>
            <GoogleLogin 
            clientId={clientId}
            buttonText="SignIn With Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />


        </div>
    )
}
export default LoginButton