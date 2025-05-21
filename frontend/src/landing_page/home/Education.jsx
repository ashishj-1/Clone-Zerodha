import EducationImg from '../../assets/images/education.svg';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={EducationImg} alt='Education' style={{width:"70%"}}/>
                </div>
                    <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration: "none"}}>Versity <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                    <p className='mt-5'>TraidingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: "none"}}>TrainingQ&A <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'></div>
            </div>
        </div>
     );
}

export default Education;