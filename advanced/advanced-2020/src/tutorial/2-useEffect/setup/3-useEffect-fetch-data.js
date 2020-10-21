import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

//second arguement
const UseEffectFetchData = () => {
const [users, setUsers] = useState([])

const getUsers = async() =>{
  const response = await fetch(url);
  const users = await response.json();
  setUsers(users)
   console.log(users)
}
useEffect(()=>{
  getUsers();
}, []);

  return(<> 
    <h1>Fetch Data</h1>
    <h3>Github Users</h3>
    <ul className='users'>
    {users.map((user) =>{
      const {id, login, avatar_url, html_url} = user
      return ( 
      <li key={id}>
          <img src={avatar_url} alt={login}/>
    <div>{login}
    <a href={html_url}>profile</a>
    </div>
      </li>
      );
    })}
    </ul>
  </>
  );
};

export default UseEffectFetchData;
