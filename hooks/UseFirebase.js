import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import firestore from '../firebase'

export const UseFirebase = (data) => {

  const [documents, setDocuments] = useState([])

  useEffect(()=>{
    const docRef = collection(firestore, data)
    const q = query(docRef,orderBy("timestamp","desc"))

    const unsub = onSnapshot(q, snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })
      setDocuments(results)
    })
  
    return () => unsub()

  },[data])

  return {documents}
}
