import { Link} from 'react-router';
import Likes from '../components/Likes.jsx';

const SingleView = ({item}) => {

  if (!item) {
    return null;
  }

  return (
    <div>
    <Link to="/single" state={item}>Show</Link>
      <Likes mediaid={item.media_id}/>
    </div>
  );
};

export default SingleView;
