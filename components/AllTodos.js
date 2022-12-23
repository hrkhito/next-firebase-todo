import React, { useEffect } from 'react'
import { useState } from 'react'
import db from "../firebase";
import { collection, onSnapshot, orderBy, query, doc, deleteDoc, setDoc } from "firebase/firestore";

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

  const onClickDelete= async (index)=>{

    const postData=collection(db,"todos");
    const q=query(postData,orderBy("timestamp","desc"));

    // リアルタイムでデータを取得
    onSnapshot(q,(querySnapshot)=>{
      const ids=querySnapshot.docs.map((todo)=>todo.id);
      const targetId=ids[index];
      deleteDoc(doc(db, "todos", `${targetId}`))
    })
  }

  return (
    <div>
      {allTodos.map((allTodo,index)=>{
        return (
          <div key={allTodo.timestamp}>
            <p>{allTodo.todo}</p>
            <button onClick={()=>{onClickDelete(index)}}>削除</button>
          </div>
        )
      })}
    </div>
  )
}
