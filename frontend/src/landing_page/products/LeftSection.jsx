import googleImage from "../../assets/images/googlePlayBadge.svg";
import appleImage from "../../assets/images/appstoreBadge.svg";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={imageURL}/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay}><img src={googleImage}/></a>
                    <a href={appStore}><img src={appleImage} style={{marginLeft:"50px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;