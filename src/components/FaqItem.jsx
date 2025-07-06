import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const FaqItem = ({ item, isOpen, onClick }) => {
    return (
        <div className='p-[20px] bg-[#fff] rounded-md flex flex-col'>
            <div className='flex items-center justify-between'>
                <h4 className='lg:text-[20px] md:text-[18px] text-[16px] lg:font-semibold font-medium'>
                    {item?.header}
                </h4>
                <button onClick={onClick}>
                    {!isOpen ? <FiPlus className='text-[25px]' /> : <FiMinus className='text-[25px]' />}
                </button>
            </div >
            <p className={`text-[#606060] ${!isOpen ? "hidden" : "inline-block"}`}>
                {item?.paragraph}
            </p>
        </div >
    );
};

export default FaqItem;