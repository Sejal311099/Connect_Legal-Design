import React from 'react'
import '../../assets/css/clientreview.css'
import starimages from '../../assets/images/group-81.png';
import clientimg1 from '../../assets/images/group-82.png';
import clientname1 from '../../assets/images/group-83.png';
import reviewmsg from '../../assets/images/review-client.png';

const ClientReview5 = () => {
  return (
    <div className='client-review-container'>
    <div className='client-review'>
        <img src={reviewmsg} alt="review Msg" />            
    </div>
    <div className='cleints-personal'>
        <div className='client-img'>
            <div className='images-client1'>
                <img src={clientimg1} alt="client-img" />
            </div>
            <div className='name-client1'>
                <img src={clientname1} alt="client-img" />
            </div>
        </div> 
        <div className='rating-section'>
            <div className='star-images'>
                <img src={starimages} alt="client-img" />
            </div>
        </div>
    </div>
</div>
  )
}

export default ClientReview5;
