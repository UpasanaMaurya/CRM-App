//use coustom hook
import axios from "axios";
import { useEffect, useState } from "react";

export const useGridData = function ({
  url,
  method = "get",
  data = {},
  hasId = false,
}) {
  const [respData, setrespData] = useState([]);
  useEffect(() => {
    const getData = async function () {
      let resp = await axios({ method, url, data });

      hasId && resp.data.forEach((item, index) => (item.id = index));
      setrespData(resp.data);
    };
    getData();
  }, []);
  return respData;
};
