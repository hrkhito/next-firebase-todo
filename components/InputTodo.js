import React, { useState } from 'react'
import db from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const InputTodo = () => {

  const [todo,setTodo]=useState("");

  const onClickAdd=async(e)=>{

    e.preventDefault();

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "todos"), {
      todo: todo,
      timestamp: serverTimestamp(),
      isDelete: false,
    });

    // db.collection("todos").add({ id: null, todo: todo, timestamp: serverTimestamp() }).then(docRef => {
    //   db.collection("todos").doc(docRef.id).update({
    //       id: docRef.id
    //   }).then(() => {
    //       // success
    //   }).catch(error => {
    //   // error
    //   })
    //   }).catch(error => {
    //       // error
    //   })

    setTodo("");
  }

  return (
    <div>
      <input placeholder="追加してください" type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}
