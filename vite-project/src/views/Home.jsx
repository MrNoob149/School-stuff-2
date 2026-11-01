import {useEffect, useState} from 'react';
import MediaRow from "./MediaRow.jsx";
import SingleView from './SingleView.jsx';
import Single from './Single.jsx'
import {fetchData} from "../utils/fetchData.js";


const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
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
  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created</th>
          <th>Size</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {mediaArray.map((item) => (
          <MediaRow key={item.media_id} item={item} />
        ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;


