import React, { useState } from 'react'
import db from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

export const InputTodo = () => {

  const [todo,setTodo]=useState("");

  const onClickAdd=(e)=>{

    e.preventDefault();

    addDoc(collection(db,"todos"),{
      todo: todo,
      timestamp: serverTimestamp(),
    })

    setTodo("");
  }

  return (
    <div>
      <input placeholder="追加してください" type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}
