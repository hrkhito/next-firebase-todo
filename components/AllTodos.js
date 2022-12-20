import React, { useEffect } from 'react'
import { useState } from 'react'
import db from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export const AllTodos = () => {

  const [allTodos,setAllTodos]=useState([]);

  useEffect(()=>{

    const postData=collection(db,"todos");
    const q=query(postData,orderBy("timestamp","desc"));

    // リアルタイムでデータを取得
    onSnapshot(q,(querySnapshot)=>{
      setAllTodos(querySnapshot.docs.map((doc)=>doc.data()));
    })

  },[])

  return (
    <div>
      {allTodos.map((allTodo)=>{
        return (
          <p key={allTodo.timestamp}>{allTodo.todo}</p>
        )
      })}
    </div>
  )
}
