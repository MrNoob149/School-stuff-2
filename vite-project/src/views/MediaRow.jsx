import { Link } from 'react-router'
import { useUserContext } from '../hooks/contextHooks.js';
import "tailwindcss";

const MediaRow = (props) => {
  const { item } = props;
  const { user } = useUserContext();
  const checkUser = user && (user.user_id === item.user_id && user.role === 'admin')
  return (
    <tr key={item.media_id}>
      <td>
        <Link to="/single" state={{item}}>
          <img src={item.thumbnail} alt={item.title} />
        </Link>
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      {checkUser && (
        <td>
          <button className="p-(10px) m-(10px 0) bg:#363636 color-white .border-none .cursor-pointer"
                  onClick={() => (console.log("'modify", item))}>
          Modify
          </button>
          <button className="p-(10px) m-(10px 0) bg:#363636 color-white .border-none .cursor-pointer"
                  onClick={() => (console.log("delete", item))}>
          Delete
          </button>

        </td>
      )}

    </tr>
  );
};

export default MediaRow;
