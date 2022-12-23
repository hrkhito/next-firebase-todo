import React from 'react'
import { UseFirebase } from '../hooks/UseFirebase'
import firestore from '../firebase'
import { deleteDoc, doc } from "firebase/firestore"

export const TodosGet = () => {

  const { documents } = UseFirebase("Todos")

  const handleClick=async id =>{

    console.log(id);

    const docRef = doc(firestore, "Todos", id);

    await deleteDoc(docRef)

  }

  return (
    <div>
      {documents.map((document)=>{
        return (
          <div key={document.id}>
            <p>{document.title}</p>
            <button onClick={() => handleClick(document.id)}>削除</button>
          </div>
        )
      })}
    </div>
  )
}
