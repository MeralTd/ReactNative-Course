import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { createUser } from '../util/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function singupHandler({email, password}){
    setIsAuthenticating(true);
    try{
      await createUser(email, password);

    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user. Please check your credentials on try again later!"
      );
    }
    setIsAuthenticating(false)
  }

  if(isAuthenticating){
    return <LoadingOverlay  message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={singupHandler} />;
}

export default SignupScreen;