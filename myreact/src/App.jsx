import React, { useEffect, useState } from 'react'
import firebase from "firebase/compat/app";
import 'firebase/compat/database';

function App() {
  const [lol,setlol]=useState("");
  const [dat,setdat]=useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyCGzJJ061uFEIym90w78pSe-xGq7q9ZIIE",
    authDomain: "helloworld-c5a69.firebaseapp.com",
    databaseURL: "https://helloworld-c5a69-default-rtdb.firebaseio.com",
    projectId: "helloworld-c5a69",
    storageBucket: "helloworld-c5a69.appspot.com",
    messagingSenderId: "495733919404",
    appId: "1:495733919404:web:cd6da4ec18701ba6f6d909"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const ajaira=()=>{
    const db = firebase.database(app);

    db.ref('Names').push(lol);
    setlol("");
  }
  const getdata=()=>{
    const db = firebase.database(app);
    db.ref('Names').on('value',(snapshot)=>{
      let items=[];
      snapshot.forEach((snap)=>{
        items.push(snap.val());
      });
      setdat(items);
    });
  }
  useEffect(()=>{
    getdata();
  },[])
  return (
    <>
    <div className='container'>
    <div className='box'>
      <h1>Task Manager</h1>
      <input type='text' placeholder='Enter Task' autoComplete='off' required={true} onChange={(e)=>console.log(setlol(e.target.value))}/>
      <br/>
      <button onClick={ajaira}>SAVE</button>
    </div>
    </div>
    {
      dat.map((item,index)=>{
        return(
          <div className='box1' key={index}>
            <h1>{item}</h1>
          </div>
        )
      })
    }
    </>
  )
}

export default App
