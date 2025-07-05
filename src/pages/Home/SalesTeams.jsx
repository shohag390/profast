import React from 'react';
import iconeOne from '../../assets/brands/amazon_vector.png';
import iconeTwo from '../../assets/brands/amazon.png';
import iconeThree from '../../assets/brands/start-people 1.png';
import iconeFour from '../../assets/brands/moonstar.png';
import iconeFive from '../../assets/brands/randstad.png';
import iconeSix from '../../assets/brands/start.png';


const sales = [
    {
        id: 1,
        icone: iconeFour
    },
    {
        id: 2,
        icone: iconeTwo
    },
    {
        id: 3,
        icone: iconeThree
    },
    {
        id: 4,
        icone: iconeOne
    },
    {
        id: 5,
        icone: iconeSix
    },
    {
        id: 6,
        icone: iconeFive
    },
]

const SalesTeams = () => {
    return (
        <div className='lg:px-[120px] md:px-[50px] px-[20px] lg:pt-[50px] md:pt-[45px] pt-[35px]'>
            <h4 className='font-bold lg:text-[20px] md:text-[18px] text-[16px] text-center text-[#03373D]'>
                We've helped thousands of sales teams
            </h4>

            <div className='flex justify-between items-center flex-wrap lg:gap-[25px] md:gap-[20px] gap-[15px] lg:pt-[25px] md:pt-[20px] pt-[15px]'>
                {
                    sales?.map((item) => (
                        <div key={item?.id} className=''>
                            <img src={item?.icone} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className='border-b-[2px] border-dashed border-[#8080809e] lg:pt-[50px] md:pt-[45px] pt-[35px]'></div>
        </div>
    );
};

export default SalesTeams;