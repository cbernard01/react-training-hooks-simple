import React from "react";
import useResources from "../hooks/useResources";


const ResourceList = props => {
  const resources = useResources(props.resource);
  return (
    <div className={"ui ordered list"}>
      {resources.map(record => <div key={record.id} className={"item"}>{record.title}</div>)}
    </div>
  )
};

export default ResourceList;
