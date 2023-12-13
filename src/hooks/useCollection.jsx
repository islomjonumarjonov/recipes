import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

export function useCollection(col) {
  const [documents, setDocuments] = useState();

  const c = collection(db, col);

  useEffect(() => {
    onSnapshot(c, (snapshot) => {
      const docs = [];
      snapshot.docs.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(docs);
    });
  }, [col]);
  return { documents };
}

export default useCollection;

// const docs = [];
//       querySnapshot.docs.forEach((doc) => {
//         docs.push({ ...doc.data(), id: doc.id });
// });
