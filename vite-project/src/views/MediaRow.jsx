import { Link } from 'react-router'

const MediaRow = (props) => {
  const { item } = props;
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


    </tr>
  );
};

export default MediaRow;
