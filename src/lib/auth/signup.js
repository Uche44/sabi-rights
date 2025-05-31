import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";

export const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const data = result.user;
    console.log("user", data);
    return data;
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};
