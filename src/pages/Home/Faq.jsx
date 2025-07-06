import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import FaqItem from '../../components/FaqItem';

const faq = [
    {
        id: 1,
        header: "How does this posture corrector work?",
        paragraph: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    {
        id: 2,
        header: "Is it suitable for all ages and body types?",
        paragraph: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    {
        id: 3,
        header: "Does it really help with back pain and posture improvement?",
        paragraph: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    {
        id: 4,
        header: "Does it have smart features like vibration alerts?",
        paragraph: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    {
        id: 5,
        header: "How will I be notified when the product is back in stock?",
        paragraph: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    }
]

const Faq = () => {

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className='lg:px-[120px] md:px-[50px] px-[20px] lg:py-[50px] md:py-[45px] py-[35px]'>
            <SectionHeader header={"Frequently Asked Question (FAQ)"} paragraph={"Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!"} headerColor={"#03373D"} paraColor={"#606060"} />

            <div className='grid grid-cols-1 lg:gap-[25px] md:gap-[20px] gap-[15px] lg:pt-[25px] md:pt-[20px] pt-[15px]'>
                {
                    faq?.map((item, index) => <FaqItem
                        key={item?.id}
                        item={item}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(index)}
                    />)
                }
            </div>


        </div >
    );
};

export default Faq;
