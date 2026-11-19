import { useState, useEffect } from 'react';
import { useLike } from '../hooks/apiHooks.js';
import { useUserContext } from '../hooks/contextHooks.js';

const Likes = (mediaId) => {
  const [setLike, setLikeCount] = useState(0)
  const [userLike, setuserLike] = useState(null)
  const [user] = useUserContext()

  const {postLike, deleteLike, getLikeCountByMediaId, getLikeByUser} = useLike()

  useEffect(() => {
    const useLikes = async () => {
      try {
        const count = await getLikeCountByMediaId('token');
        setLikeCount(count)
        if (user) {
          const token = localStorage.getItem('token')
          const like = getLikeByUser(mediaId, token)
          setuserLike(like)
        }
      } catch (error) {
        console.log("error")
      }
    };
    useLikes();
  }, [mediaId, user]);

  const handleLike = async () => {
    try {
      const token = localStorage.getItem('token')
      if (userLike) {
        await deleteLike(user.like_id, token)
        setuserLike(null)
        setLikeCount((count) => count -1)
      } else {
        const newlike = await postLike(user.like_id, token)
        setuserLike(newlike)
        setLikeCount((count) => count +1)
      }
      } catch (error) {
      console.log('errior, cannot post like')
    }
  }
  return (
    <div>
      <h1>Like count: {setLike}</h1>
      <button onClick={handleLike} className="p-(10px) m-(10px 0) bg:#363636 color-white .border-none .cursor-pointer">
        {userLike ? "like" :  "♡"}
      </button>
    </div>
  )
}

export default Likes
