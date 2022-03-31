import React, { useState } from 'react';
import { client, urlFor } from '../../client';
import { AiTwotoneDelete } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const Post= ( {post} ) =>{
    const navigate = useNavigate();

    const { postedBy, image, _id , like } = post;

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

        <div className="col-lg-12 mt-2 mb-2 post--layout--glass">

          <div className="post--card p-2">

            <div className="post--user-name--delete">
            <nav className="navbar p-2">
              <div className="container-fluid  navbar-light  rounded-2">
                  <Link to={`/userprofile/${postedBy?._id}`} className="text-decoration-none">
                  <a className="navbar-brand" href="#">
                    <img src={postedBy?.image} alt="" width="45" height="45" 
                    className="d-inline-block align-text-top rounded-circle justify-content-center"/>
                      <span className="ms-auto mx-2 mt-3"> {postedBy?.userName} </span> 
                  </a>
                </Link>
                <a href="#">
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
                </a>
              </div>
            </nav>

            </div>

            <div className="container parent">
              <div className="post--photo">
                {image && (
                <img className="rounded-lg" src={(urlFor(image).width(250).url())} alt="user-post" /> )}
              </div>
              <div className="post--content">
                  <h5 className="code text-start">
                    {post?.title}
                  </h5>

                  <p className="text-start">
                    {post?.about}
                  </p>
              </div>
            </div>
            <div className="down--nav--bar p-2 mt-1">

            <nav class="navbar navbar-light rounded-2">
                <form class="container-fluid justify-content-spacebetween">
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
                
                </form>
            </nav>
            </div>

          </div>
        </div>
        </>



    )
}
export default Post;