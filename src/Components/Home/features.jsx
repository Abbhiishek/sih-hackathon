import Scholorship_Photo from '../../Images/scholarship-.png'
import Socials_Photo from '../../Images/social-media.png'
import Aichat_Photo from '../../Images/Chatbot.png'
import Scholorship_Gif from '../../Images/Scholorship-gif .gif'
import AICHAT_Gif from '../../Images/AI-CHAT.gif'

export default function App(){



    return(
        <div className="container">
            
            <div id="feature">
            <h1>OverView <span className="celebration--icon">😁</span></h1>
            <p>Thses are the bunch of Features we have come up with. <br /> 
            We have tried our best knowledge to solve some of the problems Statements
            </p>
            <div id="scholorship" className="row overView--Scholorship overview--card mb-4">
                <div className="col-lg-6 pt-5 pb-5">
                    <div ><img src={Scholorship_Photo} className="overview--photo" alt="" width="100%" /></div>
                    
                    </div>
                <div className="col-lg-6">
                    <h2>Scholorship </h2><br />
                    <p className="OverView-card-about"><em> Finding a Scholarship where you can apply can be a tedious process. <br /> But Don't worry! we got you covered. <br /> Our website allows you to easily browse through Scholarships by category.We make it simple for you to search for Scholarships that you qualify for. <br /> We do the work for you, All you need to do is register and complete your profile.</em></p>
                    </div>

                <div className="col-lg-12">
                <img src={Scholorship_Gif} alt=""  className="overview--photo" width="100%"/>
                </div>
            </div>

            <div className="row overView--Socials  overview--card mb-4">
                <div className="col-lg-6  ">
                    <h1>Social Hub</h1><br />
                    <p className="OverView-card-about">
                        <em> Aicteo Provides you a platform to interact with your  
                            <br /> But Don't worry! we got you covered. <br /> 
                            Our website allows you to easily browse through Scholarships by category.We make it simple for you to search for Scholarships that you qualify for.
                             <br /> We do the work for you, All you need to do is register and complete your profile.
                    </em>
                    </p>
                    </div>
                <div className="col-lg-6">
                    <img src={Socials_Photo} alt=""  className="overview--photo" width="100%"/>
                </div>


               
            </div>
            {/* <div className="row overView--Events  overview--card mb-4">
                <div className="col-lg-6 pt-5 pb-5">
                    
                    <img src={Events_Photo} alt="" className="overview--photo" width="100%"/>
                    </div>
                <div className="col-lg-6">
                <h2>Events<span className="celebration--icon">🤩</span></h2><br />
                    <p className="OverView-card-about"><em> Finding a Scholarship where you can apply can be a tedious process. <br /> But Don't worry! we got you covered. <br /> Our website allows you to easily browse through Scholarships by category.We make it simple for you to search for Scholarships that you qualify for. <br /> We do the work for you, All you need to do is register and complete your profile.
                    </em>
                    </p>
                </div>
            </div> */}
            <div className="row overView--Aichat  overview--card mb-4">
                <div className="col-lg-6 ">
                    
                    
                    <h2>AI Chat Bot </h2><br />
                    <p className="OverView-card-about"><em> A chatbot is a computer program that simulates human conversation through voice commands or text chats or both.<br />Chatbot, short for chatterbot, is an artificial intelligence (AI) feature that can be embedded and used through any major messaging application.</em></p>
                    
                </div>
                <div className="col-lg-6 pt-5 pb-5">
                <img src={Aichat_Photo} alt="" className="overview--photo" width="100%" />
                </div>

                <div className="col-lg-6">
                   <img src={AICHAT_Gif} alt="" className="overview--photo" width="100%" />
                </div>
                <div className="col-lg-6">
                      <div className="code">
                       Aicteo Chatbot usses Python with Pytorch and Tensorflow to build a chatbot.
                          
                       </div> 
                </div>
            </div>
            
            
            
            
            
            
             </div> 

          
            
            
            
            
            
            
            
            
        </div>
        

        
    )
}