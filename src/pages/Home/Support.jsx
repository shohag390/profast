import React from 'react';
import imageOne from '../../assets/image/live-tracking.png';
import imageTwo from '../../assets/image/safe-delivery.png';



const support = [
    {
        id: 1,
        image: imageOne,
        heading: "Live Parcel Tracking",
        paragraph: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
    },
    {
        id: 2,
        image: imageTwo,
        heading: "100% Safe Delivery",
        paragraph: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
    },
    {
        id: 3,
        image: imageTwo,
        heading: "24/7 Call Center Support",
        paragraph: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
    },
]

const Support = () => {
    return (
        <div className='lg:px-[120px] md:px-[50px] px-[20px] lg:pt-[50px] md:pt-[45px] pt-[35px] flex flex-col lg:gap-[25px] md:gap-[20px] gap-[15px]'>
            {
                support?.map((item) => (
                    <div key={item?.id} className='lg:p-[30px] md:p-[25px] p-[20px] bg-[#fff] rounded-md flex lg:flex-row flex-col items-center lg:gap-[25px] md:gap-[20px] gap-[15px]'>
                        <div className='lg:w-[20%] lg:border-r-[2px] lg:border-b-0 border-b-[2px] border-dashed border-[#8080809e]'>
                            <img src={item?.image} alt="" />
                        </div>
                        <div className='lg:w-[80%] text-justify'>
                            <h4 className='lg:text-[20px] md:text-[18px] text-[16px] lg:font-semibold font-medium lg:pt-[8px] md:pt-[6px] pt-[5px] lg:pb-[10px] md:pb-[8px] pb-[6px]'>
                                {item?.heading}
                            </h4>
                            <p className='text-[#606060]'>
                                {item?.paragraph}
                            </p>
                        </div>
                    </div>
                ))
            }
            <div className='border-b-[2px] border-dashed border-[#8080809e] lg:pt-[50px] md:pt-[45px] pt-[35px]'></div>
        </div>
    );
};

export default Support;