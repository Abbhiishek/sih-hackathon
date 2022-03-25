import  Newsletter_image from "../../Images/social-media-art.png"
export default function App(){

    return (
        <>
               
<div className="newsletter-section">

        <div className="container ">
            <div className="row">
                <div className="col-md-6">
                    <img src={Newsletter_image} alt="newsletter" className="img-fluid"/>
                </div>
                <div className="col-md-6 pt-5">
                    <h1 className="mb-5">Subscribe to our newsletter</h1>
                    <p className="code">We share all the updates and the Important Announchment through mailing service.
                        It's Free and relaible and we will never spam you.

                    </p>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            <br />
                            <small id="emailHelp" className="form-text text dark code">We'll never share your email with anyone else.</small>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        </div>

</div>
        </>
    )
}