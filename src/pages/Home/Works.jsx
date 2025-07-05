import React from 'react';
import image from '../../assets/image/bookingIcon.png'

const works = [
    {
        id: 1,
        icone: image,
        header: "Booking Pick & Drop",
        paragraph: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
        id: 2,
        icone: image,
        header: "Cash On Delivery",
        paragraph: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
        id: 3,
        icone: image,
        header: "Delivery Hub",
        paragraph: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
        id: 4,
        icone: image,
        header: "Booking SME & Corporate",
        paragraph: "From personal packages to business shipments — we deliver on time, every time."
    },
]


const Works = () => {
    return (
        <div className='lg:px-[120px] md:px-[50px] px-[20px] lg:py-[50px] md:py-[45px] py-[35px]'>
            <h4 className='text-[25px] lg:font-bold font-semibold text-[#03373D]'>
                How it Works
            </h4>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[25px] md:gap-[20px] gap-[15px] lg:pt-[25px] md:pt-[20px] pt-[15px]'>
                {
                    works?.map((item) => (
                        <div key={item?.id} className='lg:p-[30px] md:p-[25px] p-[20px] bg-[#fff] rounded-md'>
                            <img src={item?.icone} alt="" />
                            <h4 className='lg:text-[20px] md:text-[18px] text-[16px] lg:font-semibold font-medium lg:pt-[8px] md:pt-[6px] pt-[5px] lg:pb-[10px] md:pb-[8px] pb-[6px]'>
                                {item?.header}
                            </h4>
                            <p className='text-[#606060]'>
                                {item?.paragraph}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Works;