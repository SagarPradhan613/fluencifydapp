'use client'
import React, { useState, useEffect } from 'react';
import './ProfileDashboard.css';
import { Alert, Tooltip, } from "flowbite-react";


const ProfileDashboard = () => {
    const [walletAdress, setWalletAddress] = useState("0000000000000000");
    const [dropDown, setDropDown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Last 7 Days');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropDown(false); // Close the dropdown after selecting an option
    };

    // const [showAlert, setShowAlert] = useState(false);



    const CopyWalletAddress = () => {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        // Set the value of the textarea to the text you want to copy
        textarea.value = walletAdress;
        // Append the textarea to the DOM
        document.body.appendChild(textarea);
        // Select the text inside the textarea
        textarea.select();
        // Execute the copy command
        document.execCommand('copy');
        // Remove the textarea from the DOM
        document.body.removeChild(textarea);
        // setShowAlert(true);

        // setTimeout(() => {
        //   setShowAlert(false);
        // }, 2000);
    }
    return (
        <>
            <div className='lg:flex  lg:max-h-[230px] justify-between'>
                {/* profile card for desktop */}
                <div className='lg:flex hidden lg:max-w-[500px] p-4 lg:p-8 resposnive-profile-padding bg-[#111111] rounded-[25px] justify-between  '>
                    <div className='w-1/4 lg:w-full'>
                        <img src='Images/dashboardprofile.png' className='h-full'></img>
                    </div>
                    <div className='lg:mx-6 py-2 flex flex-col justify-between '>
                        <div className='hidden lg:block'>
                            <p className='poppins-heading'>Nathaneal<br></br> Down</p>
                        </div>
                        <div className='lg:hidden block'>
                            <p className='poppins-heading whitespace-nowrap'>Nathaneal Down</p>
                        </div>
                        <div className='flex gap-3 justify-between  '>
                            {/* <div className='flex'>
                                <div>
                                    <img className='social-logo transform transition-transform duration-300 ease-in-out hover:scale-110  ' src='Images/twitterlogo.png'></img>
                                </div>
                                <div>
                                    <img className='social-logo mx-2 transform transition-transform duration-300 ease-in-out hover:scale-110  ' src='Images/discordlogo.png' ></img>
                                </div>
                                <div>
                                    <img className='social-logo transform transition-transform duration-300 ease-in-out hover:scale-110  ' src='Images/telegramlogo.png'></img>
                                </div>
                                <Tooltip className='bg-[black]  p-0 m-0' animation="duration-500" content="0000000000000000">
                                    <img className='social-logo ml-4 transform  transition-transform duration-300 ease-in-out hover:scale-110 h-full' src='Images/walletlogo.png' ></img>
                                </Tooltip>
                            </div> */}
                            <div className='flex gap-2'>
                                <div className='flex justify-center items-center'>
                                    <img className='social-logo transform transition-transform duration-300 ease-in-out hover:scale-110  ' src='Images/twitterlogo.png'></img>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img className='social-logo transform transition-transform duration-300 ease-in-out hover:scale-110  ' src='Images/discordlogo.png' ></img>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img className='social-logo transform transition-transform duration-300 ease-in-out hover:scale-110  ' src='Images/telegramlogo.png'></img>
                                </div>
                            </div>
                            <div className='flex'>
                                <Tooltip className='flex justify-center bg-[black] items-center' content="0000000000000000">
                                    <img onClick={() => { CopyWalletAddress() }} className='social-logo transform  transition-transform duration-300 ease-in-out hover:scale-110 h-full' src='Images/walletlogo.png' ></img>
                                </Tooltip>
                            </div>

                        </div>
                    </div>
                </div>

                {/* profile card for mobile */}
                <div className='lg:hidden flex bg-[#191919] px-4 py-6 rounded-[25px]'>
                    <div className=' w-1/4'>
                        <img src='Images/dashboardprofile.png'></img>
                    </div>
                    <div className='flex flex-col justify-between items-center w-3/4 '>
                        <div>
                            <p className='poppins-heading whitespace-nowrap'>Nathaneal Down</p>
                        </div>
                        <div className='flex justify-center w-full '>
                            <div className='flex'>
                                <img className='social-logo mr-6' src='Images/walletlogo.png' ></img>
                            </div>
                            <div className='flex'>
                                <img className='social-logo' src='Images/twitterlogo.png'></img>
                                <img className='social-logo mx-2' src='Images/discordlogo.png' ></img>
                                <img className='social-logo' src='Images/telegramlogo.png'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* stats for desktop */}
                <div className='lg:flex hidden p-8 bg-[#111111] rounded-[25px] md:mx-6'>
                    <div className='greenBoxDash py-4 px-6 flex justify-between items-center'>
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex flex-col justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.40839 0C1.94155 0 0.752441 1.18911 0.752441 2.65594V20.1852C0.752441 20.7719 1.22808 21.2476 1.81482 21.2476H5.00195C5.58869 21.2476 6.06433 20.7719 6.06433 20.1852V8.5328L17.0044 19.4728C17.4193 19.8877 18.0919 19.8877 18.5068 19.4728L20.7604 17.2192C21.1753 16.8043 21.1753 16.1317 20.7604 15.7168L10.3556 5.31189H20.9376C21.5244 5.31189 22 4.83625 22 4.24951V1.06238C22 0.475643 21.5244 0 20.9376 0H3.40839Z" fill="url(#paint0_linear_271_5706)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_271_5706" x1="1" y1="2.5" x2="1" y2="34" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="white" stop-opacity="0.82" />
                                            <stop offset="1" stop-color="white" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <p className='poppins font-semibold mt-4 text-[10px]  text-white'>Last 7 Days </p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='poppins-heading'>425%</p>
                                <p className='text-white font-semibold text-sm'>ROI ( % )</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between h-full ml-10'>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white font-semibold text-sm poppins'>0.18 %</p>
                                <p className='poppins font-semibold mt-1 text-[12px]  text-white whitespace-nowrap'>Last Month</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white font-semibold text-xl poppins whitespace-nowrap'>24.18 %</p>
                                <p className='poppins font-semibold mt-1 text-[12px]  text-white whitespace-nowrap'>Last Year</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between ml-4 border-solid border border-[#2D2D2D] py-4 px-6 rounded-[15px]'>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='poppins text-white font-semibold text-xl px-[5px]'>600%</p>
                            <p className='poppins text-white opacity-50 font-normal text-xs'>Max ROI %</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='poppins text-white font-semibold text-xl px-[5px]'>0.18%</p>
                            <p className='poppins text-white opacity-50 font-normal text-xs'>Min ROI %</p>
                        </div>
                    </div>
                </div>

                {/* stats for mobile */}
                <div>
                    <div className='flex lg:hidden greenBoxDash '>

                    </div>
                    <div>

                    </div>
                </div>

                <div className='flex flex-col p-8 bg-[#111111] w-1/3 rounded-[25px]'>
                    <div className='bg-[#2D2D2D] flex py-3 px-5 rounded-[15px] justify-between'>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-xs text-white opacity-50 whitespace-nowrap'>Buy Volume</p>
                            <p className='text-white font-semibold text-lg whitespace-nowrap mt-2'>22487 $</p>
                        </div>
                        <div className='relative flex flex-col justify-center'>
                            <div className='flex flex-col justify-center items-center mx-4'>
                                <div onClick={() => { setDropDown(!dropDown) }} className='bg-[#191919] w-[112px] rounded-[8px] flex justify-center items-center px-4 py-2'>
                                    <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>{selectedOption}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 9.28267L8.79387 12.1917C8.5043 12.4788 8.03481 12.4788 7.74523 12.1917L4.81114 9.28267C4.52157 8.99558 4.52157 8.53012 4.81114 8.24303C5.10071 7.95594 5.5702 7.95594 5.85978 8.24303L7.52805 9.89709L7.52805 4.87185C7.52805 4.46585 7.86003 4.13672 8.26955 4.13672C8.67907 4.13672 9.01105 4.46585 9.01105 4.87185L9.01105 9.89709L10.6795 8.24303C10.9691 7.95594 11.4386 7.95594 11.7281 8.24303C12.0177 8.53012 12.0177 8.99558 11.7281 9.28267Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            {dropDown ?
                                <>
                                    <div className='absolute w-[115px] top-12 bg-[#191919] gap-2 p-4 rounded-[8px] left-4 flex flex-col justify-start z-50'>
                                        <div className='flex items-center' onClick={() => handleOptionClick('Last 7 Days')}>
                                            <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>Last 7 Days </p>
                                        </div>
                                        <div className='flex items-center' onClick={() => handleOptionClick('This Month')}>
                                            <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>This Month </p>
                                        </div>
                                        <div className='flex items-center ' onClick={() => handleOptionClick('Last Month')}>
                                            <p className='opacity-50 mr-2 text-[10px] font-normal text-white whitespace-nowrap'>Last Month </p>
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
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-xs text-white opacity-50 whitespace-nowrap'>Collabs</p>
                            <p className='text-white font-semibold text-lg whitespace-nowrap mt-2'>07</p>
                        </div>
                    </div>
                    <div className='bg-[#2D2D2D] flex py-3 px-5 mt-4 rounded-[15px] justify-between'>
                        <div className='flex justify-center items-center'>
                            <p className='text-xs opacity-50 text-white'>Avg Cost per <br></br> Collab</p>
                            <p className='text-white font-semibold text-lg whitespace-nowrap mt-2 ml-4'>4500 $</p>
                        </div>
                        <div className=''>
                            <svg className='transform transition-transform duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                <path d="M1.5 17C1.5 8.43959 8.43959 1.5 17 1.5L26 1.5C34.5604 1.5 41.5 8.43959 41.5 17L41.5 26C41.5 34.5604 34.5604 41.5 26 41.5L17 41.5C8.43959 41.5 1.5 34.5604 1.5 26L1.5 17Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4772 13.3345L30.8352 20.7565C31.5614 21.4889 31.5614 22.6764 30.8352 23.4089L23.4772 30.8304C22.751 31.5629 21.5737 31.5629 20.8475 30.8304C20.1213 30.098 20.1213 28.9104 20.8475 28.178L25.0313 23.9582L12.3204 23.9582C11.2934 23.9582 10.4609 23.1185 10.4609 22.0827C10.4609 21.0468 11.2934 20.2071 12.3204 20.2071L25.0313 20.2071L20.8475 15.9869C20.1213 15.2545 20.1213 14.0669 20.8475 13.3345C21.5737 12.602 22.751 12.602 23.4772 13.3345Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 p-8 bg-[#111111] rounded-[25px] flex'>
                <div className='bg-[#2D2D2D] w-1/3 rounded-[15px] flex justify-between px-6 py-4'>
                    <div className='flex justify-center items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="#2D2D2D" />
                            <path d="M21.1571 12.5349V11.9482C21.1571 11.1268 21.1571 10.7161 20.9892 10.4024C20.8415 10.1264 20.6058 9.90203 20.3159 9.76142C19.9863 9.60156 19.5548 9.60156 18.6919 9.60156H12.0667C11.2038 9.60156 10.7724 9.60156 10.4428 9.76142C10.1529 9.90203 9.91721 10.1264 9.7695 10.4024C9.60156 10.7161 9.60156 11.1268 9.60156 11.9482V12.5349M9.60156 12.5349V18.9882C9.60156 19.8096 9.60156 20.2204 9.7695 20.5341C9.91721 20.8101 10.1529 21.0344 10.4428 21.175C10.7724 21.3349 11.2038 21.3349 12.0667 21.3349H21.003C21.8659 21.3349 22.2974 21.3349 22.627 21.175C22.9169 21.0344 23.1526 20.8101 23.3003 20.5341C23.4682 20.2204 23.4682 19.8096 23.4682 18.9882V14.8816C23.4682 14.0602 23.4682 13.6494 23.3003 13.3357C23.1526 13.0597 22.9169 12.8354 22.627 12.6948C22.2974 12.5349 21.8659 12.5349 21.003 12.5349H9.60156ZM23.4682 15.4682H21.9275C21.0765 15.4682 20.3867 16.1249 20.3867 16.9349C20.3867 17.7449 21.0765 18.4016 21.9275 18.4016H23.4682" stroke="#1FED8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='font-normal text-xs text-white opacity-50 poppins ml-4'>Wallets <br></br>following</p>
                    </div>
                    <div className='flex justify-center align-middle items-center'>
                        <p className='poppins-para mr-6'>7856248</p>
                        <svg className='transform transition-transform duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <rect x="1.5" y="1.5" width="34" height="34" rx="10.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2 11.4727L26.5314 17.859C27.1562 18.4893 27.1562 19.5111 26.5314 20.1413L20.2 26.5273C19.5752 27.1576 18.5621 27.1576 17.9373 26.5273C17.3124 25.8971 17.3124 24.8752 17.9373 24.245L21.5373 20.614L10.6 20.614C9.71634 20.614 9 19.8915 9 19.0002C9 18.1089 9.71634 17.3863 10.6 17.3863L21.5373 17.3863L17.9373 13.755C17.3124 13.1248 17.3124 12.1029 17.9373 11.4727C18.5621 10.8424 19.5752 10.8424 20.2 11.4727Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='bg-[#2D2D2D] mx-6 w-1/3 rounded-[15px] flex justify-between px-6 py-4'>
                    <div className='flex justify-center items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17" fill="none">
                            <path d="M8.196 1H4.1646C3.9553 1 3.76815 1.13036 3.6956 1.32668L1.24882 7.94774C1.12816 8.27424 1.36973 8.62105 1.71782 8.62105H3.12078C3.46258 8.62105 3.70362 8.95636 3.59472 9.28035L1.64879 15.0698C1.48223 15.5653 2.09187 15.9518 2.469 15.5898L10.1034 8.26069C10.4283 7.94879 10.2076 7.4 9.75718 7.4H7.23257C6.88323 7.4 6.64157 7.05088 6.7646 6.72392L8.66397 1.67608C8.787 1.34912 8.54534 1 8.196 1Z" stroke="#1FED8B" stroke-width="1.5" />
                        </svg>
                        <p className='font-normal text-xs text-white opacity-50 poppins ml-4'>Prediction<br></br>Accuracy</p>
                    </div>
                    <div className='flex justify-center align-middle items-center'>
                        <p className='poppins-para mr-6'>89%</p>
                        <svg className='transform transition-transform duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <rect x="1.5" y="1.5" width="34" height="34" rx="10.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2 11.4727L26.5314 17.859C27.1562 18.4893 27.1562 19.5111 26.5314 20.1413L20.2 26.5273C19.5752 27.1576 18.5621 27.1576 17.9373 26.5273C17.3124 25.8971 17.3124 24.8752 17.9373 24.245L21.5373 20.614L10.6 20.614C9.71634 20.614 9 19.8915 9 19.0002C9 18.1089 9.71634 17.3863 10.6 17.3863L21.5373 17.3863L17.9373 13.755C17.3124 13.1248 17.3124 12.1029 17.9373 11.4727C18.5621 10.8424 19.5752 10.8424 20.2 11.4727Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='bg-[#2D2D2D] w-1/3 rounded-[15px] flex justify-between px-6 py-4'>
                    <div className='flex justify-center items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="#2D2D2D" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2873 12.0911C10.0821 10.4497 11.3619 9 13.016 9H21.3645C23.2845 9 24.6136 10.9178 23.9394 12.7156L22.4394 16.7156C22.0369 17.7889 21.0108 18.5 19.8645 18.5H13.516C12.1291 18.5 10.9593 17.4673 10.7873 16.0911L10.2873 12.0911ZM13.016 10.5C12.2642 10.5 11.6824 11.159 11.7757 11.905L12.2757 15.905C12.3539 16.5306 12.8856 17 13.516 17H19.8645C20.3855 17 20.8519 16.6768 21.0349 16.1889L22.5349 12.1889C22.8413 11.3717 22.2372 10.5 21.3645 10.5H13.016Z" fill="#1FED8B" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.02892 8.5446C8.14247 8.14625 8.55744 7.91538 8.95579 8.02892C10.1416 8.36693 11.024 9.36163 11.2181 10.5793L12.3719 17.8142C12.4093 18.049 12.5056 18.2705 12.6518 18.458C12.9185 18.8002 13.3281 19.0002 13.762 19.0002H19.7502C20.1644 19.0002 20.5002 19.336 20.5002 19.7502C20.5002 20.1644 20.1644 20.5002 19.7502 20.5002H13.762C12.8659 20.5002 12.0198 20.087 11.4688 19.3803C11.1669 18.9929 10.9679 18.5354 10.8906 18.0504L9.73685 10.8155C9.63452 10.1738 9.16952 9.64959 8.5446 9.47146C8.14625 9.35792 7.91538 8.94295 8.02892 8.5446Z" fill="#1FED8B" />
                            <path d="M14.75 21.75C14.75 22.3023 14.3023 22.75 13.75 22.75C13.1977 22.75 12.75 22.3023 12.75 21.75C12.75 21.1977 13.1977 20.75 13.75 20.75C14.3023 20.75 14.75 21.1977 14.75 21.75Z" fill="#1FED8B" />
                            <path d="M19.75 21.75C19.75 22.3023 19.3023 22.75 18.75 22.75C18.1977 22.75 17.75 22.3023 17.75 21.75C17.75 21.1977 18.1977 20.75 18.75 20.75C19.3023 20.75 19.75 21.1977 19.75 21.75Z" fill="#1FED8B" />
                        </svg>
                        <p className='font-normal text-xs text-white opacity-50 poppins ml-4'>Total Buy<br></br>Volume</p>
                    </div>
                    <div className='flex justify-center align-middle items-center'>
                        <p className='poppins-para mr-6'>$3,897,528</p>
                        <svg className='transform transition-transform duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <rect x="1.5" y="1.5" width="34" height="34" rx="10.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2 11.4727L26.5314 17.859C27.1562 18.4893 27.1562 19.5111 26.5314 20.1413L20.2 26.5273C19.5752 27.1576 18.5621 27.1576 17.9373 26.5273C17.3124 25.8971 17.3124 24.8752 17.9373 24.245L21.5373 20.614L10.6 20.614C9.71634 20.614 9 19.8915 9 19.0002C9 18.1089 9.71634 17.3863 10.6 17.3863L21.5373 17.3863L17.9373 13.755C17.3124 13.1248 17.3124 12.1029 17.9373 11.4727C18.5621 10.8424 19.5752 10.8424 20.2 11.4727Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDashboard