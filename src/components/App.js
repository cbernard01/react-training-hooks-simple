import React, {useState} from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("");

  return (
    <div className={"ui container"} style={{marginTop: "20px"}}>
      <div className={"ui grid"}>
        <div className="two column row">
          <div className="column">
            <button
              className={"ui button primary"}
              onClick={() => setResource("posts")}
            >
              Post
            </button>
            <button
              className={"ui button default"}
              onClick={() => setResource("todos")}
            >
              Todos
            </button>
          </div>
          <div className="column">
            <ResourceList resource={resource}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
