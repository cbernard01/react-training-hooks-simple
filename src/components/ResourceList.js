import React, {useEffect, useState} from "react";
import axios from "axios";

const ResourceList = props => {
  const [resources, setResources] = useState([]);

  const fetchResources = async resource => {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    if (props.resource === "") return;

    fetchResources(props.resource).then();
  }, [props.resource]);

  return (
    <div className={"ui ordered list"}>
      {resources.map(record => <div key={record.id} className={"item"}>{record.title}</div>)}
    </div>
  )
};

export default ResourceList;
