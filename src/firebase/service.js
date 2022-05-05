import firebase, { db } from "../firebase/confiq";

export const addDocument = (collection, data) => {
  db.collection(collection).add({
    ...data,
    createAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
