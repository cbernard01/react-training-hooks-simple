import React, {useEffect, useState} from "react";
import ResourceList from "./Resources/ResourceList";
import UserList from "./Users/UserList";
import Button from "./common/Button";

const App = () => {
  const [resource, setResource] = useState("");

  const renderList = () => {
    if (resource === "users") {
      return <UserList resource={resource}/>;
    } else {
      return <ResourceList resource={resource}/>;
    }
  };

  return (
    <div className={"ui container"} style={{marginTop: "20px"}}>
      <div className={"ui grid"}>
        <div className="two column row">
          <div className="column">
            <Button
              buttonClass={`ui button default`}
              onClick={() => setResource("posts")}
              name={"Post"}
            />
            <Button
              buttonClass={`ui button default`}
              onClick={() => setResource("todos")}
              name={"Todos"}
            />
            <Button
              buttonClass={`ui button default`}
              onClick={() => setResource("users")}
              name={"Users"}
            />
          </div>
          <div className="column">
            {renderList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
