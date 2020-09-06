import React from 'react';
import Users from './components/users'

const userList = [

  {
    name: "Ivan",
    tasks:122
  },
  {
    name: "Olhga",
    tasks: 43
  },{
    name: "Borys",
    tasks: 23
  }

];

function App() {
   return (
     <div>
    { userList.map(user =>  <Users {...user}/>)}
      </div>
   )
}

export default App;
