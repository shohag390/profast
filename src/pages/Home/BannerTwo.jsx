import React from 'react';
import image from '../../assets/image/location-merchant.png';


const BannerTwo = () => {
    return (
        <div className='lg:px-[120px] md:px-[50px] px-[20px] lg:py-[50px] md:py-[45px] py-[35px]'>
            <div className='bg-[#03373D] h-full rounded-md banner_two flex lg:flex-row flex-col items-center justify-between lg:p-[50px] md:p-[25px] p-[20px]'>
                <div>
                    <h4 className='text-[25px] leading-[34px] lg:font-bold font-semibold text-[#fff]'>
                        Merchant and Customer Satisfaction <br /> is Our First Priority
                    </h4>
                    <p className='text-[#DADADA] pt-[8px]'>
                        We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.
                    </p>
                    <div className='flex items-center gap-[15px] pt-[30px]'>
                        <button className='lg:px-[35px] md:px-[25px] px-[20px] lg:py-[12px] md:py-[9px] py-[8px] bg-[#ACC857] hover:bg-[#9bb256] duration-500 text-[#fff] rounded-full capitalize btn border-[2px] border-[#fff]'>
                            Become a Merchant
                        </button>
                        <button className='lg:px-[35px] md:px-[25px] px-[20px] lg:py-[12px] md:py-[9px] py-[8px] hover:bg-[#ACC857] duration-500 text-[#ACC857] hover:text-[#fff] rounded-full capitalize btn border-[2px] border-[#ACC857]'>
                            Earn with Profast Courier
                        </button>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerTwo;