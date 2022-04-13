import React, { useState } from 'react'; 
import {client} from '../../client' 
import { MdDelete } from 'react-icons/md'; 
import { AiOutlineCloudUpload } from 'react-icons/ai'; 
import Spinner from '../Spinner'; 
 
 
export default function App(){ 
    const [about, setAbout] = useState(''); 
    const [reviewername, setReviewername] = useState(''); 
    const [givereview, setGivereview] = useState(''); 
    const [loading, setLoading] = useState(false); 
    const [fields, setFields] = useState(); 
    const [imageAsset, setImageAsset] = useState(); 
    const [wrongImageType, setWrongImageType] = useState(false); 
 
 
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

              console.log('Upload failed:', error.message); 

               

            }); 
        } else { 
          setLoading(false); 
          setWrongImageType(true); 
        } 
      }; 
 
      const saveReview = () => { 
        if (about && reviewername && givereview && imageAsset?._id ) { 
          const doc = { 
            _type: 'testimonial', 
            about, 
            name : reviewername, 
            review : givereview, 
            image: { 
              _type: 'image', 
              asset: { 
                _type: 'reference', 
                _ref: imageAsset?._id, 
              }, 
            } 
          }; 
          client.create(doc).then(() => { 
            alert("Thanks For Your Review \n Looking Forward to It !") 
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
        <div className=" give--review--section pt-5"> 
        <div className=" container givereview  "> 
 
            <h2 className="pt-5 code">Give Us Review <span className="celebration--icon">📨</span> </h2> 
 
 
        <div className="row p-5 d-flex justify-content-around"> 
            <div className="col-lg-6 pt-3"> 
            {fields && ( 
            <h4 className= " container code text-danger">Pls Fill All The Inputs</h4> 
            )} 
 
                <form> 
                <input 
                        type="text" 
                        value={reviewername} 
                        onChange={(e) => setReviewername(e.target.value)} 
                        placeholder="Enter Your Name" 
                        className="form-control  mb-3" 
                        required 

                        maxLength="20" 
 

                    /> 
                <input 
                    type="text" 
                    value={about} 
                    onChange={(e) => setAbout(e.target.value)} 
                    placeholder="Your Position" 
                    className="form-control  mb-3" 
                    required 
maxlength="200" 

                /> 
 
                <textarea  
                type="text"  
                className="form-control form-control-lg"  
                rows="3" 
                value={givereview} 
                onChange={(e) => setGivereview(e.target.value)} 
                placeholder="Tell us what you feel about this project !" 
                required 

                maxlength="200" 
/> 
                </form> 
                <button 
                type="button" 
                onClick={saveReview} 
                className="btn btn-outline-dark mt-5" 
            > 
                Review 
            </button> 
 
            </div> 
 
 
            <div className="col-lg-4 p-2"> 
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
                        className=" mb-5"  
                        /> 
                    </label> 
                ):( 
            <div className=" "> 
                <img 
                src={imageAsset?.url} 
                alt="uploaded-pic" 
                className="mt-2 pt-2 pb-2 h-75 img-thumbnail" 
 
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
        </div> 
 
      ) 
}