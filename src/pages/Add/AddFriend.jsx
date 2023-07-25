import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function AddFriend() {
  const user = useSelector((state) => state.user);
  const friends = useSelector((state) => state.usersCrud.friends);
  const dispatch = useDispatch();
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