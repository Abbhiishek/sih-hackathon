import React, { useState } from 'react';
import { client, urlFor } from '../../client';
import { AiTwotoneDelete } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const Post= ( {post} ) =>{
    const navigate = useNavigate();

    const { postedBy, image, _id , like} = post;

    const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    const [savingPost, setSavingPost] = useState(false);


    const DeletePost = (id) => {
        client
          .delete(id)
          .then(() => {
            window.location.reload();
          });
      };

      let alreadyLiked = like?.filter((item) => item?.postedBy?._id === user?.googleId);

      alreadyLiked = alreadyLiked?.length > 0 ? alreadyLiked : [];

    const LikePost = (id) => {
        if (alreadyLiked?.length === 0) {
          setSavingPost(true);
    
          client
            .patch(id)
            .setIfMissing({like: [] })
            .insert('after', 'like[-1]', [{
              _key: uuidv4(),
              userId: user?.googleId,
              postedBy: {
                _type: 'postedBy',
                _ref: user?.googleId,
              },
            }])
            .commit()
            .then(() => {
              window.location.reload();
              setSavingPost(false);
            });
        }
      };

    return(
 < >
        <div onClick={() => navigate(`/post-detail/${_id}`)} >

        {post?.title}
         
        
        {image && (
        <img className="rounded-lg" src={(urlFor(image).width(250).url())} alt="user-post" /> )}

        {post?.about}


      <Link to={`/user-profile/${postedBy?._id}`} className="">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={postedBy?.image}
          alt="user-profile"
        />
        <p className="font-semibold capitalize">{postedBy?.userName}</p>
      </Link>
        </div>
        
        


        {alreadyLiked?.length !== 0 ?(
                <button type="button" className="btn btn-outline-dark">
                  {like?.length} 💓
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    LikePost(_id);
                  }}
                  type="button"
                  className="btn btn-outline-success m-2"
                >
                  {like?.length}{savingPost ? '...' : ' 🤍 '}
                </button>
              )}

          {postedBy?._id === user?.googleId && (
           <button
             type="button"
             onClick={(e) => {
               e.stopPropagation();
               DeletePost(_id);
             }}
             className="btn btn-outline-danger"
           ><AiTwotoneDelete/>
           </button>
           )
        }
        
        </>



    )
}
export default Post;