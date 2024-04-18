import { GoogleLogin } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
console.log(clientId)

function GoogleLoginButton() {
    const onSuccess = (res: any) => {
        console.log("Login success! Current User: ", res.profileObj)
    }

    const onFailure = (res: any) => {
        console.log("Login failure! Current Details: ", res)
    }

  return (
    <div id="signInButton">
        <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
            isSignedIn={true}
        />
    </div>
  )
}

export default GoogleLoginButton