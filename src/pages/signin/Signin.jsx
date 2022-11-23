import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();

    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>
        Login with google
      </button>
    </div>
  );
};

export default Signin;
