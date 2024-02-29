'use client'
import React, { useState, useEffect } from 'react';
import ProfileDashboard from '@/app/components/ProfileDashboard/ProfileDashboard';
import './Historical.css';
import ProfileDashboardMob from '@/app/components/ProfileDashboardMob/ProfileDashboardMob';
import Link from 'next/link';
import HistoricalCards from './HistoricalCards';
import { Alert, Tooltip, Pagination } from "flowbite-react";


const Historical = () => {
    const perPage = 7; // Number of cards per page
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const data = [
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 2, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 2, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 2, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 2, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 2, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 2, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 2, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 2, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 2, social: 'twitter' },
        { prediction: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and', date: '2023-06-14', time: "14:08", status: 1, social: 'twitter' },
    ];

    const renderExtraCards = () => {
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        const visibleExtraCards = data.slice(startIndex, endIndex);
        return visibleExtraCards.map((item, index) => (
            <HistoricalCards
                key={index} // Don't forget to add a unique key prop when mapping
                prediction={item.prediction}
                date={item.date}
                time={item.time}
                status={item.status}
                social={item.social}
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

    return (
        <>
            <div className='responsive-container-padding-dashboard lg:mb-20 relative-hero-padding lg:py-10 poppins lg:px-20 px-0 py-3'>
                <div className='hidden lg:block '>
                    <ProfileDashboard></ProfileDashboard>
                </div>
                <div className='lg:hidden block'>
                    <div className='text-white poppins lg:hidden block'>
                        <div className=''>
                            <ProfileDashboardMob></ProfileDashboardMob>
                        </div>
                        <div className='mt-4 bg-[#111111] w-full  flex-col py-6 flex justify-center items-center rounded-[20px]'>
                            <p className='font-semibold text-xl'>Historical Data</p>
                        </div>
                        <div className='flex pb-4 items-center justify-center bg-[#111111]'>
                            <div>
                                <p className='text-xs font-normal'>Total Predictions</p>
                            </div>
                            <div className='ml-4'>
                                <p className='text-base font-semibold'>750 / 1000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex bg-[#111111] lg:bg-[transparent] lg:mt-6 px-8 lg:px-0  text-white'>
                    <div className='p-8 hidden lg:flex flex-col justify-between w-[30%] bg-[#111111] rounded-[25px]'>
                        <div>
                            <Link href="/merge" >
                                <div className='bg-[#2D2D2D] transform transition-all duration-300 ease-in-out hover:border-[#1FED8B] rounded-[15px] justify-start items-center border border-[#5A5A5A] flex px-4 py-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <rect width="30" height="30" rx="8" fill="#464646" />
                                        <path d="M24 14C24 14.7911 23.7588 15.5645 23.3069 16.2223C22.8549 16.8801 22.2126 17.3928 21.461 17.6955C20.7095 17.9983 19.8825 18.0775 19.0847 17.9231C18.2869 17.7688 17.554 17.3878 16.9789 16.8284C16.9671 16.817 16.9557 16.8052 16.9447 16.7931L12.8414 12.2871C12.4944 11.9559 12.0547 11.7318 11.5773 11.6429C11.0998 11.5539 10.6061 11.6041 10.1578 11.787C9.70962 11.97 9.32694 12.2776 9.05783 12.6713C8.78872 13.065 8.64516 13.5272 8.64516 14C8.64516 14.4728 8.78872 14.935 9.05783 15.3287C9.32694 15.7224 9.70962 16.03 10.1578 16.213C10.6061 16.3959 11.0998 16.4461 11.5773 16.3571C12.0547 16.2682 12.4944 16.0441 12.8414 15.7129L13.0529 15.4807C13.1245 15.402 13.2114 15.3379 13.3085 15.2919C13.4056 15.2458 13.5111 15.2189 13.6189 15.2125C13.7267 15.2062 13.8348 15.2205 13.9369 15.2548C14.039 15.289 14.1332 15.3425 14.2141 15.4122C14.2949 15.4818 14.3609 15.5663 14.4082 15.6607C14.4555 15.7552 14.4832 15.8578 14.4898 15.9626C14.4963 16.0675 14.4815 16.1726 14.4463 16.2719C14.4111 16.3712 14.3561 16.4628 14.2845 16.5415L14.0553 16.7931C14.0443 16.8052 14.0329 16.817 14.0212 16.8284C13.446 17.3878 12.7131 17.7688 11.9153 17.9231C11.1175 18.0775 10.2905 17.9983 9.53897 17.6955C8.78743 17.3928 8.14508 16.8801 7.69315 16.2223C7.24122 15.5645 7 14.7911 7 14C7 13.2089 7.24122 12.4355 7.69315 11.7777C8.14508 11.1199 8.78743 10.6072 9.53897 10.3045C10.2905 10.0017 11.1175 9.92252 11.9153 10.0769C12.7131 10.2312 13.446 10.6122 14.0212 11.1716C14.0329 11.183 14.0443 11.1948 14.0553 11.2069L18.1586 15.7129C18.5056 16.0441 18.9453 16.2682 19.4228 16.3571C19.9002 16.4461 20.394 16.3959 20.8422 16.213C21.2904 16.03 21.6731 15.7224 21.9422 15.3287C22.2113 14.935 22.3549 14.4728 22.3549 14C22.3549 13.5272 22.2113 13.065 21.9422 12.6713C21.6731 12.2776 21.2904 11.97 20.8422 11.787C20.394 11.6041 19.9002 11.5539 19.4228 11.6429C18.9453 11.7318 18.5056 11.9559 18.1586 12.2871L17.9471 12.5193C17.8025 12.6782 17.5989 12.7746 17.3811 12.7875C17.1634 12.8003 16.9493 12.7285 16.786 12.5878C16.6226 12.4471 16.5235 12.2491 16.5103 12.0374C16.4971 11.8256 16.5709 11.6174 16.7155 11.4585L16.9447 11.2069C16.9557 11.1948 16.9671 11.183 16.9789 11.1716C17.5541 10.6122 18.2869 10.2312 19.0847 10.0769C19.8825 9.92253 20.7095 10.0017 21.461 10.3045C22.2126 10.6072 22.8549 11.1199 23.3068 11.7777C23.7588 12.4355 24 13.2089 24 14Z" fill="white" fill-opacity="0.5" />
                                    </svg>

                                    <p className='text-white opacity-50 text-base font-semibold ml-4'>Collabs</p>

                                </div>
                            </Link>
                            <Link href="/historical">
                                <div className='active-link-history mt-4 rounded-[15px] justify-start items-center border border-[#5A5A5A] flex px-4 py-2'>
                                    <div className='flex justify-center items-center h-[30px] w-[30px] bg-[#464646] rounded-[8px]'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="30" height="30" rx="8" fill="#1FED8B" />
                                            <path d="M14.7622 9.15882C14.8371 8.92849 15.1629 8.92849 15.2378 9.15881L16.0828 11.7596C16.3171 12.4807 16.989 12.9688 17.7472 12.9688H20.4818C20.724 12.9688 20.8247 13.2788 20.6288 13.4211L18.4164 15.0285C17.803 15.4741 17.5464 16.264 17.7807 16.9851L18.6257 19.5859C18.7006 19.8162 18.4369 20.0077 18.241 19.8654L16.0286 18.258C15.4153 17.8124 14.5847 17.8124 13.9714 18.258L11.759 19.8654C11.5631 20.0077 11.2994 19.8162 11.3743 19.5859L12.2193 16.9851C12.4536 16.264 12.197 15.4741 11.5836 15.0285L9.37123 13.4211C9.1753 13.2788 9.276 12.9688 9.51818 12.9688H12.2528C13.011 12.9688 13.6829 12.4807 13.9172 11.7596L14.7622 9.15882Z" stroke="white" stroke-width="1.5" />
                                        </svg>
                                    </div>

                                    <p className='text-white  text-base font-semibold ml-4'>Predictions</p>

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
                                <div className='bg-[#2D2D2D] transform transition-all duration-300 ease-in-out hover:border-[#1FED8B] mt-4 rounded-[15px] justify-start items-center border border-[#5A5A5A] flex px-4 py-2'>
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
                    <div className='lg:ml-6 bg-[#111111] rounded-[25px] w-full lg:py-8 lg:px-28'>
                        <div className='lg:bg-[#2D2D2D] bg-[#191919] justify-between flex rounded-[25px] w-full lg:py-6 lg:px-16 py-8 px-6'>
                            <div className='flex justify-center items-start'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                        <path d="M23.3738 4C14.6828 4 4.0001 11.0621 4.0001 23.0123" stroke="#FC5E77" stroke-width="7" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div className='ml-8'>
                                    <p className='lg:text-3xl font-semibold text-base'>25%</p>
                                    <p className='lg:text-xs font-normal text-xs'>Failure Rate</p>
                                </div>
                            </div>

                            <div className='flex justify-center items-start'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none">
                                        <path d="M23.5457 4C32.2367 4 42.9193 11.0621 42.9193 23.0123" stroke="#1FED8B" stroke-width="7" stroke-linecap="round" />
                                        <path d="M23.5457 42.2031C32.2367 42.2031 42.9193 35.141 42.9193 23.1909" stroke="#1FED8B" stroke-width="7" stroke-linecap="round" />
                                        <path d="M23.3738 42.2031C14.6828 42.2031 4.0001 35.141 4.0001 23.1909" stroke="#1FED8B" stroke-width="7" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div className='ml-8'>
                                    <p className='lg:text-3xl font-semibold text-base'>75%</p>
                                    <p className='lg:text-xs font-normal hidden lg:block'>Success Rate</p>
                                    <p className='lg:text-xs font-normal lg:hidden block text-xs'>Success Rate</p>
                                </div>
                            </div>


                            <div className='lg:flex hidden flex-col justify-between'>
                                <p className='text-xl font-semibold'>750 / 1000</p>
                                <p className='text-xs font-normal'>Total Predictions</p>
                            </div>
                        </div>

                        <div className='bg-[#111111] lg:hidden flex justify-center items-center pt-4 pb-2'>
                            <div className='bg-[#191919] rounded-[8px] px-6 py-2 flex font-normal text-xs '>
                                <p className='opacity-50'>Last 7 Days</p>

                                <div className='ml-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 9.28267L8.79387 12.1917C8.5043 12.4788 8.03481 12.4788 7.74523 12.1917L4.81114 9.28267C4.52157 8.99558 4.52157 8.53012 4.81114 8.24303C5.10071 7.95594 5.5702 7.95594 5.85978 8.24303L7.52805 9.89709L7.52805 4.87185C7.52805 4.46585 7.86003 4.13672 8.26955 4.13672C8.67907 4.13672 9.01105 4.46585 9.01105 4.87185L9.01105 9.89709L10.6795 8.24303C10.9691 7.95594 11.4386 7.95594 11.7281 8.24303C12.0177 8.53012 12.0177 8.99558 11.7281 9.28267Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className='bg-[#191919] px-6 py-2 ml-4 rounded-[8px] flex font-normal text-xs '>
                                <p className='opacity-50'>Sort By</p>

                                <div className='ml-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 9.28267L8.79387 12.1917C8.5043 12.4788 8.03481 12.4788 7.74523 12.1917L4.81114 9.28267C4.52157 8.99558 4.52157 8.53012 4.81114 8.24303C5.10071 7.95594 5.5702 7.95594 5.85978 8.24303L7.52805 9.89709L7.52805 4.87185C7.52805 4.46585 7.86003 4.13672 8.26955 4.13672C8.67907 4.13672 9.01105 4.46585 9.01105 4.87185L9.01105 9.89709L10.6795 8.24303C10.9691 7.95594 11.4386 7.95594 11.7281 8.24303C12.0177 8.53012 12.0177 8.99558 11.7281 9.28267Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className=' history-mobile-scroller'>
                            {/* <div className='flex flex-col w-full bg-[#191919] rounded-[15px] mt-4 py-6 px-6' >
                                <div>
                                    <p className='font-semibold lg:text-sm text-xs opacity-50'>Prediction</p>
                                </div>
                                <div className='lg:mt-2 mt-3'>
                                    <p className='font-semibold lg:text-base text-sm'>Lorem ipsum is placeholder text commonly used in the graphic, print, and</p>
                                </div>
                                <div className='mt-3 lg:hidden block'>
                                    <p className='opacity-50 text-sm font-semibold'>Twitter    14/06/2024   14 : 06</p>
                                </div>
                                <div className='flex justify-between mt-4'>
                                    <div className='flex justify-center items-center'>
                                        <div >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="34" viewBox="0 0 48 34" fill="none">
                                                <rect x="0.75" y="0.75" width="46.5" height="32.5" rx="11.25" fill="url(#paint0_linear_208_7325)" stroke="#1FED8B" stroke-width="1.5" />
                                                <path d="M17 17.85L20.6416 20.5129C21.0283 20.7957 21.5613 20.7645 21.9124 20.4385L31 12" stroke="white" stroke-width="4" stroke-linecap="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_208_7325" x1="24" y1="15.5" x2="24" y2="63.5" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#1FED8B" />
                                                        <stop offset="1" stop-color="#1FED8B" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className='ml-10 hidden lg:block'>
                                            <p className='text-sm font-semibold opacity-50'>Twitter    14/06/2024   14 : 06</p>
                                        </div>
                                    </div>

                                    <div>
                                        <svg className='transform transition-all duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                            <rect x="1.5" y="1.5" width="28" height="28" rx="10.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9229 9.61478L22.2275 14.9655C22.751 15.4935 22.751 16.3497 22.2275 16.8777L16.9229 22.2281C16.3993 22.7562 15.5506 22.7562 15.027 22.2281C14.5035 21.7001 14.5035 20.8439 15.027 20.3159L18.0433 17.2738L8.8796 17.2737C8.13924 17.2737 7.53906 16.6684 7.53906 15.9216C7.53906 15.1748 8.13924 14.5695 8.8796 14.5695L18.0433 14.5695L15.027 11.527C14.5035 10.999 14.5035 10.1428 15.027 9.61478C15.5506 9.08674 16.3993 9.08674 16.9229 9.61478Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col w-full bg-[#191919] rounded-[15px] mt-4 py-6 px-6' >
                                <div>
                                    <p className='font-semibold lg:text-sm text-xs opacity-50'>Prediction</p>
                                </div>
                                <div className='lg:mt-2 mt-3'>
                                    <p className='font-semibold lg:text-base text-sm'>Lorem ipsum is placeholder text commonly used in the graphic, print, and</p>
                                </div>
                                <div className='mt-3 lg:hidden block'>
                                    <p className='opacity-50 text-sm font-semibold'>Twitter    14/06/2024   14 : 06</p>
                                </div>
                                <div className='flex justify-between mt-4'>
                                    <div className='flex justify-center items-center'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="34" viewBox="0 0 48 34" fill="none">
                                                <rect x="0.75" y="0.75" width="46.5" height="32.5" rx="11.25" fill="url(#paint0_linear_241_4508)" stroke="#FF2A4C" stroke-width="1.5" />
                                                <path d="M28.7891 11.5957L19.5967 20.7881" stroke="white" stroke-width="4" stroke-linecap="round" />
                                                <path d="M28.7891 20.7891L19.5967 11.5967" stroke="white" stroke-width="4" stroke-linecap="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_241_4508" x1="24" y1="15.5" x2="24" y2="63.5" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FF2A4C" />
                                                        <stop offset="1" stop-color="#111F19" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className='ml-10 hidden lg:block'>
                                            <p className='text-sm font-semibold opacity-50'>Twitter    14/06/2024   14 : 06</p>
                                        </div>
                                    </div>

                                    <div>
                                        <svg className='transform transition-all duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                            <rect x="1.5" y="1.5" width="28" height="28" rx="10.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9229 9.61478L22.2275 14.9655C22.751 15.4935 22.751 16.3497 22.2275 16.8777L16.9229 22.2281C16.3993 22.7562 15.5506 22.7562 15.027 22.2281C14.5035 21.7001 14.5035 20.8439 15.027 20.3159L18.0433 17.2738L8.8796 17.2737C8.13924 17.2737 7.53906 16.6684 7.53906 15.9216C7.53906 15.1748 8.13924 14.5695 8.8796 14.5695L18.0433 14.5695L15.027 11.527C14.5035 10.999 14.5035 10.1428 15.027 9.61478C15.5506 9.08674 16.3993 9.08674 16.9229 9.61478Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col w-full bg-[#191919] rounded-[15px] mt-4 mb-8 py-6 px-6' >
                                <div>
                                    <p className='font-semibold lg:text-sm text-xs opacity-50'>Prediction</p>
                                </div>
                                <div className='lg:mt-2 mt-3'>
                                    <p className='font-semibold lg:text-base text-sm'>Lorem ipsum is placeholder text commonly used in the graphic, print, and</p>
                                </div>
                                <div className='mt-3 lg:hidden block'>
                                    <p className='opacity-50 text-sm font-semibold'>Twitter    14/06/2024   14 : 06</p>
                                </div>
                                <div className='flex justify-between mt-4'>
                                    <div className='flex justify-center items-center'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="34" viewBox="0 0 48 34" fill="none">
                                                <rect x="0.75" y="0.75" width="46.5" height="32.5" rx="11.25" fill="url(#paint0_linear_208_7325)" stroke="#1FED8B" stroke-width="1.5" />
                                                <path d="M17 17.85L20.6416 20.5129C21.0283 20.7957 21.5613 20.7645 21.9124 20.4385L31 12" stroke="white" stroke-width="4" stroke-linecap="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_208_7325" x1="24" y1="15.5" x2="24" y2="63.5" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#1FED8B" />
                                                        <stop offset="1" stop-color="#1FED8B" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className='ml-10 hidden lg:block'>
                                            <p className='text-sm font-semibold opacity-50'>Twitter    14/06/2024   14 : 06</p>
                                        </div>
                                    </div>

                                    <div>
                                        <svg className='transform transition-all duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                            <rect x="1.5" y="1.5" width="28" height="28" rx="10.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9229 9.61478L22.2275 14.9655C22.751 15.4935 22.751 16.3497 22.2275 16.8777L16.9229 22.2281C16.3993 22.7562 15.5506 22.7562 15.027 22.2281C14.5035 21.7001 14.5035 20.8439 15.027 20.3159L18.0433 17.2738L8.8796 17.2737C8.13924 17.2737 7.53906 16.6684 7.53906 15.9216C7.53906 15.1748 8.13924 14.5695 8.8796 14.5695L18.0433 14.5695L15.027 11.527C14.5035 10.999 14.5035 10.1428 15.027 9.61478C15.5506 9.08674 16.3993 9.08674 16.9229 9.61478Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div> */}
                            {renderExtraCards()}

                            <div className='lg:hidden flex mt-8 justify-center items-center'>
                                <Pagination previousLabel={LeftSvg()} nextLabel={RightSvg()} className='custom-pagination' currentPage={currentPage} totalPages={Math.ceil(Math.max(data.length) / perPage)} onPageChange={onPageChange} />
                            </div>
                        </div>


                        <div className='hidden lg:flex justify-between p-2 mt-6'>
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
        </>
    )
}

export default Historical