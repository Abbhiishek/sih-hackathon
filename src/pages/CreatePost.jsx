import React, { useState } from 'react'; 
import { client } from '../client'; 
import Spinner from '../Components/Spinner'; 
import { AiOutlineCloudUpload } from 'react-icons/ai'; 
import { useNavigate } from 'react-router-dom'; 
import { MdDelete } from 'react-icons/md'; 
import NavBar from '../Components/Dashboard/dashboard-Navbar'; 
 
 
export default function App({user}) { 
  const [title, setTitle] = useState(''); 
  const [about, setAbout] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const [fields, setFields] = useState(); 
  const [imageAsset, setImageAsset] = useState(); 
  const [wrongImageType, setWrongImageType] = useState(false); 
  const navigate = useNavigate(); 
 
 
 
  const uploadImage = (e) => { 
    const selectedFile = e.target.files[0]; 
    // uploading asset to sanity 
    if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff') { 
      setWrongImageType(false); 
      setLoading(true); 
      client.assets 
        .upload('image', selectedFile, { contentType: selectedFile.type, filename: selectedFile.name }) 
        .then((document) => { 
          setImageAsset(document); 
          setLoading(false); 
        }) 
        .catch((error) => { 
           
        }); 
    } else { 
      setLoading(false); 
      setWrongImageType(true); 
    } 
  }; 
  const savePost = () => { 
    if (title && about &&  imageAsset?._id ) { 
      const doc = { 
        _type: 'post', 
        title, 
        about, 
        image: { 
          _type: 'image', 
          asset: { 
            _type: 'reference', 
            _ref: imageAsset?._id, 
          }, 
        }, 
        userId: user._id, 
        postedBy: { 
          _type: 'postedBy', 
          _ref: user._id, 
        } 
      }; 
      client.create(doc).then(() => { 
        navigate(`/userprofile/${user?._id}`); 
      }); 
    } else { 
      setFields(true); 
 
      setTimeout( 
        () => { 
          setFields(false); 
        }, 
        2000, 
      ); 
    } 
  }; 
    return( 
        <> 
        <NavBar/> 
        {fields && ( 
            <h4 className= " container code text-danger">Pls Fill All The Inputs</h4> 
        )} 
 
        <div className="container mt-5 create--post--form"> 
           
           <div className="row"> 
 
               <div className="container col-lg-6"> 
                   <div className="image-input bg-secondary  rounded-2" > 
                       <div className="d-flex align-items-center justify-content-center border border-dark bg-light upload--photo--section"> 
                        {loading && <Spinner/>} 
                        {wrongImageType && <p>Wrong Image Type or Unable to Procces the File !</p> } 
                        {!imageAsset ? ( 
                            <label > 
                                <div className="conatiner justify-content-center" > 
                                    <div className="container justify-content-center"> 
                                            <AiOutlineCloudUpload /> 
                                            <p className="code text-info">Click to Upload a File!</p> 
                                    </div> 
                                    <div className="container justify-content-center"> 
                                             
                                            <p className="code text-dark">Supported File Type : JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB</p> 
                                    </div> 
                                </div> 
                                <input 
                                        type="file" 
                                        name="upload-image" 
                                        onChange={uploadImage} 
                                        className=" mb-5" width="0px" height="0px" 
                                        /> 
                                    </label> 
                                ):( 
                            <div className=" "> 
                                <img 
                                src={imageAsset?.url} 
                                alt="uploaded-pic" 
                                className="mt-2 pt-2 pb-2 img-thumbnail" 
                                width="420px" 
                                /> 
                                <br /> 
                                <button 
                                type="button" 
                                className="delete--but--createpost btn btn-outline-danger rounded-pill" 
                                onClick={() => setImageAsset(null)} 
                                    ><MdDelete /> 
                                </button> 
                            </div> 
                        )} 
                    </div> 
 
                   </div> 
               </div> 
 
               <div className="col-lg-6 form--data--create--post p-4"> 
                   <h2>Write Your Post 🧐</h2> 
                   <br /> 
 
 
                   {user && ( 
                        <div className="rounded-lg "> 
                        <img 
                            src={user?.image} 
                            className=" rounded-circle mb-3" 
                            alt="user-profile" 
                        /> 
                        <p className="code">{user?.userName}</p> 
                        </div> 
                    )} 
 
                    <textarea 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Add your title" 
                        className="form-control form-control-lg mb-3" 
                    /> 
 
                    <textarea  
                    type="text"  
                    className="form-control form-control-lg"  
                    rows="3" 
                    value={about} 
                    onChange={(e) => setAbout(e.target.value)} 
                    placeholder="Tell everyone what your Post is about" 
                         
                         
    /> 
                     
             
 
                    <div className="flex flex-col"> 
                        <div className="flex justify-end items-end mt-5"> 
                        <button 
                            type="button" 
                            onClick={savePost} 
                            className="btn btn-outline-primary" 
                        > 
                            Post 
                        </button> 
                        </div> 
                    </div> 
                    </div> 
                </div> 
                     
 
 
 
        </div> 
         
         
        </> 
 
 
    ) 
}