import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getAuth, Auth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import serviceAccount from "./my-assignment4-firebase-adminsdk-fbsvc-eaa0f79613.json";

initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
  projectId: "my-assignment4",
});

const auth: Auth = getAuth();
const db: Firestore = getFirestore();

export { auth, db };
