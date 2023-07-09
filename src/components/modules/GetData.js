import { useState, useEffect } from "react";

const Data = () => {
  const [apiResponse, SetApiResponse] = useState({});

  async function GetData() {
    const API_URL = "https://opentdb.com/api.php?amount=5&encode=base64";

    try {
      const response = await fetch(API_URL, { mode: "cors" });

      if (!response.ok) throw new Error(response.status);

      const data = await response.json();

      if (data.response_code !== 0) throw new Error(data.response_code);

      SetApiResponse({ data: data, error: false });
    } catch (e) {
      console.error(e);

      SetApiResponse({ data: false, error: e.message });
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      GetData();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return apiResponse;
};

export { Data };
