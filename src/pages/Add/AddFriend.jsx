import React from 'react'
import { useState } from 'react';

function AddFriend() {

//fetch all users from our database
const [searchInput, setSearchInput] = useState("");

function handleSearch(){
    //if user exists, list that user and have add button etc 
    //if user doesn't, say user not found
   
};

  return (
    <div>
        <input 
        type="text" 
        placeholder="Search friend's user"
        onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button onClick={handleSearch} >Search</button>
    </div>
  )
};

export default AddFriend;