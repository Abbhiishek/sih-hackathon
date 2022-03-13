
  
  export const feedQuery = `*[_type == "post"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        title,
        about,
        postedBy->{
          _id,
          userName,
          image
        },
        like[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  
  export const DeveloperQuery = `*[_type == "developer"] | order(_createdAt asc) {
    image{
      asset->{
        url
      }
    },
        _id,
        name,
        about,
        social,
        experience
      } `;
  export const TestimonialQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        name,
        about,
        review,
      } `;
  
  export const postDetailQuery = (postid) => {
    const query = `*[_type == "pin" && _id == '${postid}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      postedBy->{
        _id,
        userName,
        image
      },
      like[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  export const postDetailMorePostQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      title,
      about,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const postSearchQuery = (searchTerm) => {
    const query = `*[_type == "post" && title match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              title,
              about,
              postedBy->{
                _id,
                userName,
                image
              },
              like[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };
  
  export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;


    // _id , _type , userName , userEmail , image
  };
  
  export const userCreatedPostQuery = (userId) => {
    const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      title,
      about,
      postedBy->{
        _id,
        userName,
        image
      },
      like[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const userLikedPostQuery = (userId) => {
    const query = `*[_type == 'post' && '${userId}' in like[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      title,
      about,
      postedBy->{
        _id,
        userName,
        image
      },
      like[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };