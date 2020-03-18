import React from "react";
import useResources from "../hooks/useResources";

const UserList = props => {
  const users = useResources(props.resource);
  return (
    <div className={"ui ordered list"}>
      {users.map(user => <div key={user.id} className={"item"}>{user.name}</div>)}
    </div>
  )
};

export default UserList;
