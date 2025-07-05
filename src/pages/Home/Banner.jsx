import React from 'react';
import hero_image from '../../assets/image/big-deliveryman.png';

const Banner = () => {
    return (
        <div className='lg:px-[120px] md:px-[50px] px-[20px] w-full lg:h-[89vh] h-[100%] lg:py-0 md:py-[40px] py-[30px] hero-banner lg:flex lg:items-center lg:justify-between'>
            <div>
                <h4 className='lg:font-bold font-semibold lg:text-[45px] md:text-[35px] text-[30px] text-[#03373D] lg:leading-[55px] md:leading-[40px] leading-[35px]'>
                    We Make Sure Your {""}
                    <br className='lg:inline-block hidden' />
                    <span className='text-[#ACC857]'>
                        Parcel Arrives
                    </span> On Time
                    <br /> - No Fuss.
                </h4>
                <p className='text-[#606060] lg:pt-[10px] md:pt-[8px] pt-[6px] lg:pb-[30px] md:pb-[25px] pb-[20px]'>
                    Parcel delivery refers to the service of transporting packages from a <br className='lg:inline-block hidden' /> sender to a recipient, typically involving a delivery timeframe.
                </p>

                <button className='lg:px-[35px] md:px-[25px] px-[20px] lg:py-[12px] md:py-[9px] py-[8px] bg-[#ACC857] hover:bg-[#9bb256] duration-500 text-[#fff] rounded-full capitalize btn border-[2px] border-[#fff]'>
                    Learn More
                </button>
            </div>
            <div className='lg:pt-0 md:pt-[40px] pt-[35px]'>
                <img src={hero_image} alt="" />
            </div>
        </div>
    );
};

export default Banner;