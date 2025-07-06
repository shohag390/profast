import React from 'react';

const SectionHeader = ({ header, paragraph, headerColor, paraColor }) => {
    return (
        <div className='flex flex-col items-center'>
            <h4 style={{ color: `${headerColor}` }} className='text-[25px] lg:font-bold font-semibold text-center'>
                {header}
            </h4>
            <p style={{ color: `${paraColor}` }} className='w-[50%] text-center'>
                {paragraph}
            </p>
        </div>
    );
};

export default SectionHeader;