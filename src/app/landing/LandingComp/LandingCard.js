'use client'
import './Landing.css';
import { useState, useEffect } from 'react';
import { Alert, Tooltip } from "flowbite-react";
import Link from 'next/link';

const LandingCards = ({ ranking,cardIndex }) => {
    const [walletAdress, setWalletAddress] = useState("0000000000000000");
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
    const [badge, setBadge] = useState("");
    const [badgeMob, setBadgeMob] = useState("");
    const [rankNumber,setRankNumber] = useState(0)

    useEffect(() => {
        if (ranking === 1) {
            setBadge('Images/landing1.png');
            setBadgeMob('Images/landingmob1.png')
        } else if (ranking === 2) {
            setBadge('Images/landingbadge2.png');
            setBadgeMob('Images/landingmob2.png')
        } else if (ranking === 3) {
            setBadge('Images/landing3.png');
            setBadgeMob('Images/landingmob3.png')
        } else {
            setBadge("");
            setBadgeMob("");
        }
    }, []);


    return (
        <>
            <div className='lg:flex block'>
                <div className='profile relative md:justify-center md:items-center bg-[#191919] lg:rounded-[25px] lg:w-[30%] rounded-t-[25px] w-full mr-4 flex py-6 pl-4 pr-6'>
                    <div className=''>
                        <img src='Images/dashboardprofile.png' className='w-[90px] h-[90px]'></img>
                    </div>
                    <div className='absolute lg:hidden left-[-5%] top-10'>
                        <img src={badgeMob}></img>
                    </div>
                    <div className='flex justify-start items-start flex-col ml-4'>
                        <div className='mb-4 mt-1'>
                            <p className='font-semibold text-xl whitespace-nowrap'>Nathaneal Down</p>
                        </div>
                        <div className='flex justify-between'>
                            <Tooltip className='bg-[black]' animation="duration-500" content="0000000000000000">
                                <div onClick={() => { CopyWalletAddress() }} className='transform transition-transform duration-300 ease-in-out hover:scale-110'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <rect width="30" height="30" rx="8" fill="#2D2D2D" />
                                        <path d="M19.8333 11.75V11.2C19.8333 10.4299 19.8333 10.0449 19.6759 9.75076C19.5374 9.49204 19.3164 9.28169 19.0447 9.14987C18.7357 9 18.3312 9 17.5222 9H11.3111C10.5021 9 10.0977 9 9.78868 9.14987C9.51689 9.28169 9.29592 9.49204 9.15744 9.75076C9 10.0449 9 10.4299 9 11.2V11.75M9 11.75V17.8C9 18.5701 9 18.9551 9.15744 19.2493C9.29592 19.508 9.51689 19.7183 9.78868 19.8501C10.0977 20 10.5021 20 11.3111 20H19.6889C20.4978 20 20.9024 20 21.2113 19.8501C21.4831 19.7183 21.7041 19.508 21.8426 19.2493C22 18.9551 22 18.5701 22 17.8V13.95C22 13.1799 22 12.7949 21.8426 12.5008C21.7041 12.242 21.4831 12.0317 21.2113 11.8999C20.9024 11.75 20.4978 11.75 19.6889 11.75H9ZM22 14.5H20.5556C19.7578 14.5 19.1111 15.1156 19.1111 15.875C19.1111 16.6344 19.7578 17.25 20.5556 17.25H22" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </Tooltip>
                            <div className='flex ml-4'>
                                <img src='Images/twitterlogo.png' className='transform transition-transform duration-300 ease-in-out hover:scale-110'></img>
                                <svg className='mx-2 transform transition-transform duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <rect width="30" height="30" rx="8" fill="#2D2D2D" />
                                    <path d="M19.9639 10.0922C19.0632 9.67887 18.0972 9.37436 17.0873 9.19995C17.0689 9.19658 17.0505 9.205 17.041 9.22182C16.9168 9.44277 16.7792 9.73102 16.6828 9.95758C15.5966 9.79495 14.5159 9.79495 13.4519 9.95758C13.3555 9.72598 13.2129 9.44277 13.0881 9.22182C13.0786 9.20556 13.0603 9.19715 13.0419 9.19995C12.0325 9.3738 11.0665 9.67831 10.1652 10.0922C10.1574 10.0955 10.1507 10.1012 10.1463 10.1084C8.31409 12.8457 7.81218 15.5157 8.0584 18.1525C8.05952 18.1654 8.06676 18.1778 8.07679 18.1856C9.28561 19.0733 10.4566 19.6123 11.6058 19.9695C11.6242 19.9751 11.6436 19.9684 11.6554 19.9532C11.9272 19.582 12.1695 19.1906 12.3773 18.7789C12.3896 18.7548 12.3779 18.7262 12.3528 18.7167C11.9684 18.5709 11.6024 18.3931 11.2504 18.1912C11.2225 18.1749 11.2203 18.1351 11.2459 18.116C11.32 18.0605 11.3941 18.0028 11.4648 17.9444C11.4776 17.9338 11.4955 17.9315 11.5105 17.9383C13.8234 18.9943 16.3274 18.9943 18.613 17.9383C18.6281 17.931 18.6459 17.9332 18.6593 17.9439C18.73 18.0022 18.8041 18.0605 18.8788 18.116C18.9044 18.1351 18.9027 18.1749 18.8749 18.1912C18.5228 18.397 18.1568 18.5709 17.7719 18.7161C17.7468 18.7256 17.7357 18.7548 17.7479 18.7789C17.9602 19.19 18.2025 19.5814 18.4693 19.9527C18.4805 19.9684 18.5005 19.9751 18.5189 19.9695C19.6737 19.6123 20.8446 19.0733 22.0535 18.1856C22.064 18.1778 22.0707 18.166 22.0718 18.1531C22.3665 15.1046 21.5783 12.4565 19.9823 10.109C19.9784 10.1012 19.9717 10.0955 19.9639 10.0922ZM12.7227 16.5469C12.0263 16.5469 11.4526 15.9076 11.4526 15.1225C11.4526 14.3374 12.0152 13.6981 12.7227 13.6981C13.4357 13.6981 14.0039 14.343 13.9928 15.1225C13.9928 15.9076 13.4301 16.5469 12.7227 16.5469ZM17.4187 16.5469C16.7224 16.5469 16.1486 15.9076 16.1486 15.1225C16.1486 14.3374 16.7112 13.6981 17.4187 13.6981C18.1318 13.6981 18.6999 14.343 18.6888 15.1225C18.6888 15.9076 18.1318 16.5469 17.4187 16.5469Z" fill="white" fill-opacity="0.5" />
                                </svg>
                                <svg className='transform transition-transform duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <rect width="30" height="30" rx="8" fill="#2D2D2D" />
                                    <path d="M20.1712 9.04573L8.27686 13.6976C7.89425 13.8482 7.91088 14.4004 8.31014 14.5175L11.3378 15.4211L12.469 19.0188C12.5855 19.4037 13.0679 19.5041 13.334 19.2196L14.8978 17.6132L17.9587 19.8722C18.3413 20.1567 18.8737 19.9391 18.9568 19.4873L20.9864 9.71506C21.0862 9.26326 20.6204 8.86166 20.1712 9.04573ZM18.674 11.2043L13.1511 16.1239C13.1012 16.1741 13.0679 16.2411 13.0512 16.308L12.835 18.2156C12.8183 18.2825 12.7352 18.2825 12.7185 18.2323L11.8369 15.3877C11.8036 15.2538 11.8535 15.1199 11.9699 15.053L18.491 10.9868C18.6574 10.8864 18.8071 11.0872 18.674 11.2043Z" fill="white" fill-opacity="0.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='stats bg-[#191919] justify-around lg:flex block relative px-4 pb-6 lg:px-0 lg:pb-0 rounded-b-[25px] lg:rounded-[25px] lg:w-[70%] w-full'>
                    <div className='absolute hidden lg:block left-[-4%] top-1/2 transform  -translate-y-1/2'>
                        <img src={badge}></img>
                    </div>


                    <div className='lg:flex block items-center justify-around text-center'>
                        <div className='flex justify-center w-full'>
                            <div className='bg-[#2D2D2D] lg:px-6 rounded-[15px] lg:py-6 px-6 py-2 rank-container'>
                                <p className='lg:font-normal lg:text-sm font-normal text-xs opacity-50'>Rank</p>
                                <p className='lg:font-semibold lg:text-lg text-base font-semibold'>{`# ${cardIndex}`}</p>
                            </div>
                            <div className='lg:px-6 rounded-[15px] ml-3 lg:py-6 px-6 py-2 gradiant-roi-box flex justify-center items-center text-center roi-container lg:block'>
                                <p className='lg:font-normal lg:text-sm font-normal text-xs whitespace-nowrap'>ROI ( % )</p>
                                <p className='lg:font-semibold lg:text-lg text-base font-semibold ml-4 lg:ml-0'>425%</p>
                            </div>
                        </div>

                        {/* desktop volume */}
                        <div className='lg:flex hidden'>
                            <div className='bg-[#2D2D2D]  px-6 ml-3 rounded-[15px] py-6 date-container'>
                                <p className='lg:font-normal  lg:text-sm font-normal text-xs opacity-50 whitespace-nowrap'>Last 7 Days Vol. ( $ )</p>
                                <p className='lg:font-semibold lg:text-lg text-base font-semibold'>45894.04$</p>
                            </div>
                            <div className='bg-[#2D2D2D] px-6 ml-3 rounded-[15px] py-6 price-container'>
                                <p className='lg:font-normal lg:text-sm font-normal text-xs opacity-50 whitespace-nowrap'>Total Buy Volume</p>
                                <p className='lg:font-semibold lg:text-lg text-base font-semibold'>2248765780</p>
                            </div>
                        </div>
                        {/* mobile volume */}
                        <div className='lg:hidden block '>
                            <div className='flex w-full px-6 rounded-t-[15px] py-4 mt-4 justify-between items-center bg-[#2D2D2D] '>
                                <div className='text-left'>
                                    <p className='text-xs font-normal opacity-50'>Last 7 Days <br></br> Vol. ( $ )</p>
                                </div>
                                <div className='text-left'>
                                    <p className='text-base font-semibold'>45894.04$</p>
                                </div>
                            </div>
                            <div className='flex rounded-b-[15px] w-full px-6 py-4 pt-2 justify-between items-center bg-[#2D2D2D] '>
                                <div className='text-left'>
                                    <p className='text-xs font-normal opacity-50'>Total Buy  <br></br> Volume</p>
                                </div>
                                <div className='text-left'>
                                    <p className='text-base font-semibold'>2248765780</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-4  lg:mt-0 justify-between w-full items-center'>
                            <div className='bg-[#2D2D2D] px-6 lg:ml-3 border-[#1FED8B] border rounded-[15px] py-6 flex justify-between items-center text-left lg:text-center lg:block collab-box'>
                                <p className='lg:font-normal hidden lg:block lg:text-sm font-normal text-xs opacity-50 whitespace-nowrap'>Cost per Collab</p>
                                <p className='lg:font-normal lg:hidden block lg:text-sm font-normal text-xs opacity-50 whitespace-nowrap'>Cost per <br></br> Collab</p>
                                <p className='lg:font-semibold lg:text-lg text-base font-semibold'>4500$</p>
                            </div>
                            <Link href='/merge' className='ml-3 list-button-container transform transition-transform duration-300 ease-in-out hover:scale-110'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <path d="M1.5 17C1.5 8.43959 8.43959 1.5 17 1.5L26 1.5C34.5604 1.5 41.5 8.43959 41.5 17L41.5 26C41.5 34.5604 34.5604 41.5 26 41.5L17 41.5C8.43959 41.5 1.5 34.5604 1.5 26L1.5 17Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4772 13.3345L30.8352 20.7565C31.5614 21.4889 31.5614 22.6764 30.8352 23.4089L23.4772 30.8304C22.751 31.5629 21.5737 31.5629 20.8475 30.8304C20.1213 30.098 20.1213 28.9104 20.8475 28.178L25.0313 23.9582L12.3204 23.9582C11.2934 23.9582 10.4609 23.1185 10.4609 22.0827C10.4609 21.0468 11.2934 20.2071 12.3204 20.2071L25.0313 20.2071L20.8475 15.9869C20.1213 15.2545 20.1213 14.0669 20.8475 13.3345C21.5737 12.602 22.751 12.602 23.4772 13.3345Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingCards;