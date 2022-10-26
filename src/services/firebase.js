import admin from "firebase-admin";
import config from "../config/config.js";


admin.initializeApp({
  credential: admin.credential.cert(config.development.firebase.certConfig),
});

export const auth = admin.auth();

