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
let blogsArray = [];
   async function fetchData() {
      const q = await query(collection(db, "blogs"));
      const unsub = await onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          blogsArray.push({ ...doc.data(), id: doc.id });
        });
        setBlogs(blogsArray);
        console.log(blogs);        
      });
      return () => unsub();
    }
   async function fetchQ() {
      const q = await query(collection(db, "queries"));
      const unsub = await onSnapshot(q, (querySnapshot) => {
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
  },[]);
  return { blogs, queryData };
}
