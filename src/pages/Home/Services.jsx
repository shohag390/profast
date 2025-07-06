import React from 'react';
import image from '../../assets/image/service.png';
import SectionHeader from '../../components/SectionHeader';


const services = [
    {
        id: 1,
        icone: image,
        header: "Express & Delivery",
        paragraph: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6"
    },
    {
        id: 2,
        icone: image,
        header: "Nationwide Delivery",
        paragraph: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6"
    },
    {
        id: 3,
        icone: image,
        header: "Fulfillment Solution",
        paragraph: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6"
    },
    {
        id: 4,
        icone: image,
        header: "Cash on Delivery",
        paragraph: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6"
    },
    {
        id: 5,
        icone: image,
        header: "Corporate Service",
        paragraph: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6"
    },
    {
        id: 6,
        icone: image,
        header: "Parcel Return",
        paragraph: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6"
    }
]



const Services = () => {
    return (
        <div className='lg:px-[120px] md:px-[50px] px-[20px] lg:py-[50px] md:py-[45px] py-[35px] bg-[#03373D]'>
            <SectionHeader header={"Our Services"} paragraph={"Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."} headerColor={"#fff"} paraColor={"#DADADA"} />

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[25px] md:gap-[20px] gap-[15px] lg:pt-[25px] md:pt-[20px] pt-[15px]'>
                {
                    services?.map((item) => (
                        <div key={item?.id} className='lg:p-[30px] md:p-[25px] p-[20px] bg-[#fff] rounded-md flex flex-col items-center text-center'>
                            <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-linear-to-t from-[#eeedfc00] to-[#EEEDFC]'>
                                <img className='h-[35px]' src={item?.icone} alt="icone" />
                            </div>
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

export default Services;