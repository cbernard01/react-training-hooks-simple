import {useEffect, useState} from "react";
import axios from "axios";


const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async resource => {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    if (resource === "") return;

    fetchResources(resource).then();
  }, [resource]);

  return resources;
};

export default useResources;
