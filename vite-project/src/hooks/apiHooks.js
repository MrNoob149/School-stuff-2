import {useEffect, useState} from "react";
import {fetchData} from "../utils/fetchData.js";

const useMedia = () => {
  const {mediaArray} = useMedia();
  const [setMediaArray] = useState([]);
  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData('/test.json');
        setMediaArray(json);
      } catch (error) {
        console.log("error detected", error)
      }
    };
    getMedia();
  }, []);
  console.log(mediaArray);
  return {mediaArray};
};

export {useMedia};
