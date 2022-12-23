import React, { useState } from 'react'
import firestore from '../firebase'
import { collection, addDoc } from "firebase/firestore"

export const Form = () => {

  const [title, setTitle] = useState("");

  const handleSubmit = async e => {

    e.preventDefault();

    try {
      const docRef = collection(firestore, "Todos")
      await addDoc(docRef, { title })
    } catch (e) {
      console.log(e)
    }

    setTitle("");

  }  

  return (
    <form onSubmit={handleSubmit}>
      <div className="column">
        <label>
          タイトル:
          <input
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">送信</button>
    </form>
  )
}
