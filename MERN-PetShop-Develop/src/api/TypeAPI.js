import { useState, useEffect } from 'react';
import axios from 'axios';
import apidomin from './config'
function TypeApi() {
  const [types, setTypes] = useState([]);

  const getTypes = async () => {
    const res = await axios.get(apidomin+'/api/type');
    setTypes(res.data);
  };
  useEffect(() => {
    getTypes();
  }, []);
  return {
    type: [types, setTypes],
  };
}

export default TypeApi;
