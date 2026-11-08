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

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(import.meta.env.VITE_AUTH_API + '/auth/login', fetchOptions);
    return loginResult;
  }
  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetch = {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    };
    const result = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
    );
    return result;
  }
  return {getUserByToken}
}

export {useMedia};
export {useAuthentication};
export {useUser};
