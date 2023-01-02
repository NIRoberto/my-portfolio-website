import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  // updateDoc,
  // deleteDoc,
} from "firebase/firestore";

import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";

export default function useFetchBlog() {
  const [blogs, setBlogs] = useState([]);
  const [queryData, setQeury] = useState([]);

  useEffect(() => {
    function fetchData() {
      const q = query(collection(db, "blogs"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let blogsArray = [];
        querySnapshot.forEach((doc) => {
          blogsArray.push({ ...doc.data(), id: doc.id });
        });
        setBlogs(blogsArray);
      });
      return () => unsub();
    }
    function fetchQ() {
      const q = query(collection(db, "queries"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let queriesArray = [];
        querySnapshot.forEach((doc) => {
          queriesArray.push({ ...doc.data(), id: doc.id });
        });
        setQeury(queriesArray);
      });
      return () => unsub();
    }
    fetchData();
    fetchQ();
  }, []);
  return { blogs, queryData };
}
