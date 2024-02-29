'use client'
import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import ProfileDashboard from '../components/ProfileDashboard/ProfileDashboard'
import Link from 'next/link'
import CollabRows from './CollabRows';
import { Alert, Tooltip, Pagination } from "flowbite-react";


const Dashboard = () => {
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
            <CollabRows
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
            <div className='responsive-container-padding-dashboard poppins mb-20 relative-hero-padding lg:py-10 lg:px-20 px-10 py-3'>
                <ProfileDashboard></ProfileDashboard>
                <div className='lg:flex mt-6 hidden'>
                    <div className='p-8 flex flex-col justify-between w-[30%] bg-[#111111] rounded-[25px]'>
                        <div>
                            <Link href="/merge" >
                                <div className='active-link-collab transform transition-all duration-300 ease-in-out hover:border-[#1FED8B] rounded-[15px] justify-start items-center border border-[#5A5A5A] flex px-4 py-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <rect width="30" height="30" rx="8" fill="#1FED8B" />
                                        <path d="M24 14C24 14.7911 23.7588 15.5645 23.3069 16.2223C22.8549 16.8801 22.2126 17.3928 21.461 17.6955C20.7095 17.9983 19.8825 18.0775 19.0847 17.9231C18.2869 17.7688 17.554 17.3878 16.9789 16.8284C16.9671 16.817 16.9557 16.8052 16.9447 16.7931L12.8414 12.2871C12.4944 11.9559 12.0547 11.7318 11.5773 11.6429C11.0998 11.5539 10.6061 11.6041 10.1578 11.787C9.70962 11.97 9.32694 12.2776 9.05783 12.6713C8.78872 13.065 8.64516 13.5272 8.64516 14C8.64516 14.4728 8.78872 14.935 9.05783 15.3287C9.32694 15.7224 9.70962 16.03 10.1578 16.213C10.6061 16.3959 11.0998 16.4461 11.5773 16.3571C12.0547 16.2682 12.4944 16.0441 12.8414 15.7129L13.0529 15.4807C13.1245 15.402 13.2114 15.3379 13.3085 15.2919C13.4056 15.2458 13.5111 15.2189 13.6189 15.2125C13.7267 15.2062 13.8348 15.2205 13.9369 15.2548C14.039 15.289 14.1332 15.3425 14.2141 15.4122C14.2949 15.4818 14.3609 15.5663 14.4082 15.6607C14.4555 15.7552 14.4832 15.8578 14.4898 15.9626C14.4963 16.0675 14.4815 16.1726 14.4463 16.2719C14.4111 16.3712 14.3561 16.4628 14.2845 16.5415L14.0553 16.7931C14.0443 16.8052 14.0329 16.817 14.0212 16.8284C13.446 17.3878 12.7131 17.7688 11.9153 17.9231C11.1175 18.0775 10.2905 17.9983 9.53897 17.6955C8.78743 17.3928 8.14508 16.8801 7.69315 16.2223C7.24122 15.5645 7 14.7911 7 14C7 13.2089 7.24122 12.4355 7.69315 11.7777C8.14508 11.1199 8.78743 10.6072 9.53897 10.3045C10.2905 10.0017 11.1175 9.92252 11.9153 10.0769C12.7131 10.2312 13.446 10.6122 14.0212 11.1716C14.0329 11.183 14.0443 11.1948 14.0553 11.2069L18.1586 15.7129C18.5056 16.0441 18.9453 16.2682 19.4228 16.3571C19.9002 16.4461 20.394 16.3959 20.8422 16.213C21.2904 16.03 21.6731 15.7224 21.9422 15.3287C22.2113 14.935 22.3549 14.4728 22.3549 14C22.3549 13.5272 22.2113 13.065 21.9422 12.6713C21.6731 12.2776 21.2904 11.97 20.8422 11.787C20.394 11.6041 19.9002 11.5539 19.4228 11.6429C18.9453 11.7318 18.5056 11.9559 18.1586 12.2871L17.9471 12.5193C17.8025 12.6782 17.5989 12.7746 17.3811 12.7875C17.1634 12.8003 16.9493 12.7285 16.786 12.5878C16.6226 12.4471 16.5235 12.2491 16.5103 12.0374C16.4971 11.8256 16.5709 11.6174 16.7155 11.4585L16.9447 11.2069C16.9557 11.1948 16.9671 11.183 16.9789 11.1716C17.5541 10.6122 18.2869 10.2312 19.0847 10.0769C19.8825 9.92253 20.7095 10.0017 21.461 10.3045C22.2126 10.6072 22.8549 11.1199 23.3068 11.7777C23.7588 12.4355 24 13.2089 24 14Z" fill="white" />
                                    </svg>

                                    <p className='text-white  text-base font-semibold ml-4'>Collabs</p>

                                </div>
                            </Link>
                            <Link href="/historical">
                                <div className='bg-[#2D2D2D] transform transition-all duration-300 ease-in-out hover:border-[#1FED8B] mt-4 rounded-[15px] justify-start items-center border border-[#5A5A5A] flex px-4 py-2'>
                                    <div className='flex justify-center items-center h-[30px] w-[30px] bg-[#464646] rounded-[8px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                            <path d="M6.76224 1.15882C6.83707 0.928486 7.16293 0.928488 7.23776 1.15881L8.08282 3.75963C8.3171 4.48067 8.98902 4.96885 9.74717 4.96885H12.4818C12.724 4.96885 12.8247 5.27875 12.6288 5.4211L10.4164 7.02849C9.80303 7.47412 9.54638 8.26401 9.78066 8.98505L10.6257 11.5859C10.7006 11.8162 10.4369 12.0077 10.241 11.8654L8.02862 10.258C7.41527 9.81236 6.58473 9.81236 5.97138 10.258L3.75899 11.8654C3.56306 12.0077 3.29944 11.8162 3.37428 11.5859L4.21934 8.98505C4.45362 8.26401 4.19697 7.47412 3.58361 7.02849L1.37123 5.4211C1.1753 5.27875 1.276 4.96885 1.51818 4.96885H4.25283C5.01098 4.96885 5.6829 4.48067 5.91718 3.75963L6.76224 1.15882Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" />
                                        </svg>
                                    </div>

                                    <p className='text-white opacity-50 text-base font-semibold ml-4'>Predictions</p>

                                </div>
                            </Link>
                            <Link href="/group">
                                <div className='bg-[#2D2D2D] transform transition-all duration-300 ease-in-out hover:border-[#1FED8B] mt-4 rounded-[15px] justify-start items-center border border-[#5A5A5A] flex px-4 py-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <rect width="30" height="30" rx="8" fill="#464646" />
                                        <path d="M20 12.8333L23 14.5L20 16.1667M20 12.8333L15.5 15.3333L11 12.8333M20 12.8333L23 11.1667L15.5 7L8 11.1667L11 12.8333M20 16.1667L23 17.8333L15.5 22L8 17.8333L11 16.1667M20 16.1667L15.5 18.6667L11 16.1667M11 12.8333L8 14.5L11 16.1667" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className='text-white opacity-50 text-base font-semibold ml-4'>Groups</p>

                                </div>
                            </Link>
                            <Link href="/wallet">
                                <div className='bg-[#2D2D2D] transform transition-all duration-300 ease-in-out hover:border-[#1FED8B]  mt-4 rounded-[15px] justify-start items-center border border-[#5A5A5A] flex px-4 py-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <rect width="30" height="30" rx="8" fill="#464646" />
                                        <path d="M19.8333 11.75V11.2C19.8333 10.4299 19.8333 10.0449 19.6759 9.75076C19.5374 9.49204 19.3164 9.28169 19.0447 9.14987C18.7357 9 18.3312 9 17.5222 9H11.3111C10.5021 9 10.0977 9 9.78868 9.14987C9.51689 9.28169 9.29592 9.49204 9.15744 9.75076C9 10.0449 9 10.4299 9 11.2V11.75M22 14.5H20.5556C19.7578 14.5 19.1111 15.1156 19.1111 15.875C19.1111 16.6344 19.7578 17.25 20.5556 17.25H22M9 11.75V17.8C9 18.5701 9 18.9551 9.15744 19.2493C9.29592 19.508 9.51689 19.7183 9.78868 19.8501C10.0977 20 10.5021 20 11.3111 20H19.6889C20.4978 20 20.9024 20 21.2113 19.8501C21.4831 19.7183 21.7041 19.508 21.8426 19.2493C22 18.9551 22 18.5701 22 17.8V13.95C22 13.1799 22 12.7949 21.8426 12.5008C21.7041 12.242 21.4831 12.0317 21.2113 11.8999C20.9024 11.75 20.4978 11.75 19.6889 11.75H9Z" fill="#464646" />
                                        <path d="M19.8333 11.75V11.2C19.8333 10.4299 19.8333 10.0449 19.6759 9.75076C19.5374 9.49204 19.3164 9.28169 19.0447 9.14987C18.7357 9 18.3312 9 17.5222 9H11.3111C10.5021 9 10.0977 9 9.78868 9.14987C9.51689 9.28169 9.29592 9.49204 9.15744 9.75076C9 10.0449 9 10.4299 9 11.2V11.75M9 11.75V17.8C9 18.5701 9 18.9551 9.15744 19.2493C9.29592 19.508 9.51689 19.7183 9.78868 19.8501C10.0977 20 10.5021 20 11.3111 20H19.6889C20.4978 20 20.9024 20 21.2113 19.8501C21.4831 19.7183 21.7041 19.508 21.8426 19.2493C22 18.9551 22 18.5701 22 17.8V13.95C22 13.1799 22 12.7949 21.8426 12.5008C21.7041 12.242 21.4831 12.0317 21.2113 11.8999C20.9024 11.75 20.4978 11.75 19.6889 11.75H9ZM22 14.5H20.5556C19.7578 14.5 19.1111 15.1156 19.1111 15.875C19.1111 16.6344 19.7578 17.25 20.5556 17.25H22" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className='text-white opacity-50 text-base font-semibold ml-4'>Wallets</p>

                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center items-center mt-10'>
                            <img className='trans-img' src='Images/transparent-logo.png'></img>
                        </div>
                    </div>
                    <div className='ml-6 bg-[#111111] rounded-[25px] w-full py-14 px-14'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='poppins text-white text-3xl font-semibold'>Collabs</p>
                            </div>
                            <div className='relative flex flex-col justify-center'>
                                <div className='flex'>
                                    <div onClick={() => { setDropDown(!dropDown) }} className='flex bg-[#191919] justify-between px-4 py-2 items-center rounded-[10px]'>
                                        <div className='mr-5  justify-center items-center poppins font-normal text-[10px]'>
                                            <p className='text-white opacity-50'>{selectedOption}</p>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                <path d="M8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 9.28267L8.79387 12.1917C8.5043 12.4788 8.03481 12.4788 7.74523 12.1917L4.81114 9.28267C4.52157 8.99558 4.52157 8.53012 4.81114 8.24303C5.10071 7.95594 5.5702 7.95594 5.85978 8.24303L7.52805 9.89709L7.52805 4.87185C7.52805 4.46585 7.86003 4.13672 8.26955 4.13672C8.67907 4.13672 9.01105 4.46585 9.01105 4.87185L9.01105 9.89709L10.6795 8.24303C10.9691 7.95594 11.4386 7.95594 11.7281 8.24303C12.0177 8.53012 12.0177 8.99558 11.7281 9.28267Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div onClick={() => { setDropDown2(!dropDown2) }} className='flex bg-[#191919] justify-between px-4 py-2 items-center ml-8 rounded-[10px]'>
                                        <div className='mr-5  justify-center items-center poppins font-normal text-[10px]'>
                                            <p className='text-white opacity-50'>{selectedOption2}</p>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                <path d="M8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 9.28267L8.79387 12.1917C8.5043 12.4788 8.03481 12.4788 7.74523 12.1917L4.81114 9.28267C4.52157 8.99558 4.52157 8.53012 4.81114 8.24303C5.10071 7.95594 5.5702 7.95594 5.85978 8.24303L7.52805 9.89709L7.52805 4.87185C7.52805 4.46585 7.86003 4.13672 8.26955 4.13672C8.67907 4.13672 9.01105 4.46585 9.01105 4.87185L9.01105 9.89709L10.6795 8.24303C10.9691 7.95594 11.4386 7.95594 11.7281 8.24303C12.0177 8.53012 12.0177 8.99558 11.7281 9.28267Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {dropDown ?
                                    <>
                                        <div className='absolute w-[115px] left-0 lg:left-0 top-10 bg-[#191919] gap-2 p-4 rounded-[8px]  flex flex-col justify-start z-50'>
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
                                        <div className='absolute w-[115px] right-0 lg:-right-2 top-10 bg-[#191919] gap-2 p-4 rounded-[8px]  flex flex-col justify-start z-50'>
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

                        </div>
                        <div className='table-container p-5 mt-4'>
                            <div className="">
                                <table className="min-w-full border-separate border-spacing-y-3 mb-10">
                                    <thead className=''>
                                        <tr className='text-left '>
                                            <th className="text-white  opacity-50 bg-[#111111] poppins font-semibold text-sm py-6 px-8 ">Project</th>
                                            <th className="text-white opacity-50 bg-[#111111] poppins font-semibold text-sm">Date</th>
                                            <th className="text-white opacity-50 bg-[#111111] poppins font-semibold text-sm">ROI ( % )</th>
                                            <th className="text-white opacity-50 bg-[#111111] poppins font-semibold text-sm">Buy Volume ( $ )</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderExtraCards()}
                                    </tbody>
                                </table>

                                <div className=' flex justify-between p-2'>
                                    <div className='flex justify-center items-center'>
                                        <div onClick={goToFirstPage} className='bg-[#2D2D2D] hover:bg-[#1FED8B] transition duration-300 ease py-3 px-4 rounded-[15px] text-white'>
                                            <p>01</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <Pagination previousLabel={LeftSvg()} nextLabel={RightSvg()} className='custom-pagination' currentPage={currentPage} totalPages={Math.ceil(Math.max(data.length) / perPage)} onPageChange={onPageChange} />
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div onClick={goToLastPage} className='bg-[#2D2D2D] hover:bg-[#1FED8B] transition duration-300 ease py-3 px-4 rounded-[15px] text-white'>
                                            {lastPage}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Dashboard