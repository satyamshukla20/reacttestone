import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
    
    const [friends,setfriends]=useState(data);
    
    const handlerfunction=()=>{setfriends([]);
   }

  return<main>
     <section className ="container">
       <h3>{data.length} birthdays today</h3>
       {friends.map((friend)=>{return <List lid={friend.id} lname={friend.name} lage={friend.age} limage={friend.image} />})}
       
       <button onClick={handlerfunction}>Clear All</button>
     </section>
  </main>
}

export default App;
