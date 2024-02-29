'use client'
import React, { useState, useEffect } from 'react';
import './Collab.css';
import ProfileDashboardMob from '@/app/components/ProfileDashboardMob/ProfileDashboardMob';
import { Alert, Tooltip, Pagination } from "flowbite-react";
import MobCollabRows from './MobCollabRows';

const Collab = () => {
    const perPage = 7; // Number of cards per page
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const data = [
        { project: 'Project 1', date: '2023-06-14 14:06', roi: '65.075%', buyVolume: '$456.046854' },
        { project: 'Project 2', date: '2023-06-14 14:08', roi: '75.123%', buyVolume: '$543.879632' },
        { project: 'Project 3', date: '2023-06-14 14:10', roi: '80.245%', buyVolume: '$789.124567' },
        { project: 'Project 4', date: '2023-06-14 14:12', roi: '60.987%', buyVolume: '$987.632145' },
        { project: 'Project 5', date: '2023-06-14 14:14', roi: '70.342%', buyVolume: '$654.987321' },
        { project: 'Project 6', date: '2023-06-14 14:16', roi: '85.678%', buyVolume: '$321.456987' },
        { project: 'Project 7', date: '2023-06-14 14:18', roi: '55.876%', buyVolume: '$852.369741' },
        { project: 'Project 8', date: '2023-06-14 14:20', roi: '72.345%', buyVolume: '$147.258369' },
        { project: 'Project 9', date: '2023-06-14 14:22', roi: '68.934%', buyVolume: '$963.741852' },
        { project: 'Project 10', date: '2023-06-14 14:24', roi: '77.456%', buyVolume: '$852.369741' },
        { project: 'Project 11', date: '2023-06-14 14:26', roi: '63.987%', buyVolume: '$741.852963' },
        { project: 'Project 12', date: '2023-06-14 14:28', roi: '79.254%', buyVolume: '$369.741852' },
        { project: 'Project 13', date: '2023-06-14 14:30', roi: '73.498%', buyVolume: '$852.369741' },
        { project: 'Project 14', date: '2023-06-14 14:32', roi: '66.342%', buyVolume: '$963.741852' },
        { project: 'Project 15', date: '2023-06-14 14:34', roi: '81.245%', buyVolume: '$852.369741' },
        { project: 'Project 16', date: '2023-06-14 14:36', roi: '69.783%', buyVolume: '$741.852963' },
        { project: 'Project 17', date: '2023-06-14 14:38', roi: '75.624%', buyVolume: '$369.741852' },
        { project: 'Project 18', date: '2023-06-14 14:40', roi: '78.932%', buyVolume: '$852.369741' },
        { project: 'Project 19', date: '2023-06-14 14:42', roi: '62.451%', buyVolume: '$963.741852' },
        { project: 'Project 20', date: '2023-06-14 14:44', roi: '71.895%', buyVolume: '$852.369741' },
    ];

    const renderExtraCards = () => {
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        const visibleExtraCards = data.slice(startIndex, endIndex);
        return visibleExtraCards.map((item, index) => (
            <MobCollabRows
                key={index} // Don't forget to add a unique key prop when mapping
                project={item.project}
                date={item.date}
                roi={item.roi}
                buyVolume={item.buyVolume}
            />
        ));
    };

    const RightSvg = () => {
        return (
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7529 1.19532L24.1376 9.65291C24.9651 10.4876 24.9651 11.8408 24.1376 12.6754L15.7529 21.1325C14.9254 21.9672 13.5837 21.9672 12.7563 21.1325C11.9288 20.2979 11.9288 18.9446 12.7563 18.11L17.5238 13.3014L3.03933 13.3014C1.86908 13.3014 0.92041 12.3445 0.92041 11.1642C0.92041 9.9838 1.86908 9.02691 3.03933 9.02691L17.5238 9.02692L12.7563 4.21786C11.9288 3.38321 11.9288 2.02997 12.7563 1.19532C13.5837 0.360672 14.9254 0.360672 15.7529 1.19532Z" fill="white" />
            </svg>
        )
    };

    const LeftSvg = () => {
        return (
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.7529 1.19532L24.1376 9.65291C24.9651 10.4876 24.9651 11.8408 24.1376 12.6754L15.7529 21.1325C14.9254 21.9672 13.5837 21.9672 12.7563 21.1325C11.9288 20.2979 11.9288 18.9446 12.7563 18.11L17.5238 13.3014L3.03933 13.3014C1.86908 13.3014 0.92041 12.3445 0.92041 11.1642C0.92041 9.9838 1.86908 9.02691 3.03933 9.02691L17.5238 9.02692L12.7563 4.21786C11.9288 3.38321 11.9288 2.02997 12.7563 1.19532C13.5837 0.360672 14.9254 0.360672 15.7529 1.19532Z" fill="white" />
            </svg>
        );
    };

    // Calculate the last page number
    const lastPage = Math.ceil(Math.max(data.length) / perPage);

    // Handler for clicking on the first page button
    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    // Handler for clicking on the last page button
    const goToLastPage = () => {
        setCurrentPage(lastPage);
    };

    const [dropDown, setDropDown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Last 7 Days');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropDown(false); // Close the dropdown after selecting an option
    };

    const [dropDown2, setDropDown2] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState('Sort By');

    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
        setDropDown2(false); // Close the dropdown after selecting an option
    };


    return (
        <>
            <div className='text-white poppins'>
                <ProfileDashboardMob></ProfileDashboardMob>
                <div className='mt-4 bg-[#111111] w-full  flex-col py-6 flex justify-center items-center rounded-[20px]'>
                    <p className='font-semibold text-xl'>Collabs</p>

                    <div className='relative flex flex-col justify-center'>
                        <div className='flex mt-4 justify-center items-center'>
                            <div onClick={() => { setDropDown(!dropDown) }} className='bg-[#191919] flex justify-between px-2 py-3 rounded-[8px] items-center'>
                                <p className='opacity-50'>{selectedOption}</p>
                                <div className='ml-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 9.28267L8.79387 12.1917C8.5043 12.4788 8.03481 12.4788 7.74523 12.1917L4.81114 9.28267C4.52157 8.99558 4.52157 8.53012 4.81114 8.24303C5.10071 7.95594 5.5702 7.95594 5.85978 8.24303L7.52805 9.89709L7.52805 4.87185C7.52805 4.46585 7.86003 4.13672 8.26955 4.13672C8.67907 4.13672 9.01105 4.46585 9.01105 4.87185L9.01105 9.89709L10.6795 8.24303C10.9691 7.95594 11.4386 7.95594 11.7281 8.24303C12.0177 8.53012 12.0177 8.99558 11.7281 9.28267Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div onClick={() => { setDropDown2(!dropDown2) }} className='bg-[#191919] ml-4 flex justify-between px-2 py-3 rounded-[8px] items-center'>
                                <p className='opacity-50'>{selectedOption2}</p>
                                <div className='ml-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 9.28267L8.79387 12.1917C8.5043 12.4788 8.03481 12.4788 7.74523 12.1917L4.81114 9.28267C4.52157 8.99558 4.52157 8.53012 4.81114 8.24303C5.10071 7.95594 5.5702 7.95594 5.85978 8.24303L7.52805 9.89709L7.52805 4.87185C7.52805 4.46585 7.86003 4.13672 8.26955 4.13672C8.67907 4.13672 9.01105 4.46585 9.01105 4.87185L9.01105 9.89709L10.6795 8.24303C10.9691 7.95594 11.4386 7.95594 11.7281 8.24303C12.0177 8.53012 12.0177 8.99558 11.7281 9.28267Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {dropDown ?
                            <>
                                <div className='absolute w-[115px] left-0 lg:left-0 top-20 bg-[#191919] gap-2 p-4 rounded-[8px]  flex flex-col justify-start z-50'>
                                    <div className='flex items-center' onClick={() => handleOptionClick('Last 7 Days')}>
                                        <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>Last 7 Days</p>
                                    </div>
                                    <div className='flex items-center' onClick={() => handleOptionClick('This Month')}>
                                        <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>This Month</p>
                                    </div>
                                    <div className='flex items-center ' onClick={() => handleOptionClick('Last Month')}>
                                        <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>Last Month</p>
                                    </div>
                                    <div className='flex items-center' onClick={() => handleOptionClick('This Year')}>
                                        <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>This Year</p>
                                    </div>
                                    <div className='flex items-center' onClick={() => handleOptionClick('Last Year')}>
                                        <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>Last Year</p>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }

                        {dropDown2 ?
                            <>
                                <div className='absolute w-[115px] right-0 lg:-right-2 top-20 bg-[#191919] gap-2 p-4 rounded-[8px]  flex flex-col justify-start z-50'>
                                    <div className='flex items-center' onClick={() => handleOptionClick2('Date (New)')}>
                                        <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>Date (New)</p>
                                    </div>
                                    <div className='flex items-center' onClick={() => handleOptionClick2('Date (Old)')}>
                                        <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>Date (Old)</p>
                                    </div>
                                    <div className='flex items-center ' onClick={() => handleOptionClick2('ROI')}>
                                        <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>ROI</p>
                                    </div>
                                    <div className='flex items-center ' onClick={() => handleOptionClick2('Volume')}>
                                        <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>Volume</p>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }
                    </div>



                    <div className='h-[50vh] overflow-scroll mt-4'>
                        {renderExtraCards()}

                        <div className='lg:hidden flex mt-8 justify-center items-center'>
                            <Pagination previousLabel={LeftSvg()} nextLabel={RightSvg()} className='custom-pagination' currentPage={currentPage} totalPages={Math.ceil(Math.max(data.length) / perPage)} onPageChange={onPageChange} />
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}


export default Collab