import { Link} from 'react-router';

const SingleView = ({item}) => {

  if (!item) {
    return null;
  }

  return (
    <Link to="/single" state={item}>
      Show
    </Link>
  );
};

export default SingleView;
