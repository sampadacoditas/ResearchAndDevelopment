import {GoogleLogin} from "react-google-login"

const clientId="169032020209-4n6qrcqku3kscjaofjqon8k2uc5vhb42.apps.googleusercontent.com"

function Logout()
{
    const onSuccess=()=>{
        console.log("Log out successful")
    }

    return (
        <div className="signInButton">
            <GoogleLogin 
            clientId={clientId}
            buttonText="Logout"
            onSuccess={onSuccess}
            />


        </div>
    )
}
export default Logout