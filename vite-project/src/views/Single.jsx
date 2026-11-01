import { useNavigate, useLocation } from "react-router";

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const item = state?.item

  if (!item) {
    return <p>No item selected</p>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
      {item.media_type.startsWith('image/') ? (
        <img
          src={item.filename}
          alt={item.title}/>
      ) : item.media_type.startsWith('video/')? (
        <video
          src={item.filename}
          title={item.title}/>
      ) : (
        <p>Unsupported data type</p>
      )}
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Single
