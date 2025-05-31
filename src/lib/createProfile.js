import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const createProfile = async (user, dob, gender, accountType) => {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      dob: dob,
      gender: gender,
      role: accountType,
      createdAt: new Date(),
    });
    return true;
  }
  console.log("profile already exists");
  return false;
};
