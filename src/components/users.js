import React from "react";

const Users = ({name, tasks}) => {

  return (
    <div>
      <h3>{name} <span>{tasks}</span> </h3>
   
    </div>
  );
};

export default Users;

