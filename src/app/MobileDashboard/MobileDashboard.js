'use client'
import React, { useState, useEffect } from 'react';
import './MobileDashboard.css'
import { Alert, Tooltip } from "flowbite-react";

const MobileDashboard = () => {
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
  return (
    <>
      <div className='px-8 py-5'>
        <div className='bg-[#191919] px-2 py-6 justify-around flex items-center rounded-[25px]'>
          <div>
            <img src='Images/mobprofile.png'></img>
          </div>
          <div className='flex flex-col mr-4 h-full'>
            <div>
              <p className='poppins text-white text-lg font-semibold'>Nathaneal Down</p>
            </div>
            <div className='flex mt-4 justify-between'>
              <div className='mr-5'>
                <Tooltip className='flex justify-center bg-[black] items-center' content="0000000000000000">
                  <svg onClick={() => { CopyWalletAddress() }} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <rect x="0.503906" y="0.810547" width="31.2397" height="31.2397" rx="8" fill="#2D2D2D" />
                    <path d="M21.157 13.0463V12.4735C21.157 11.6716 21.157 11.2707 20.993 10.9644C20.8488 10.695 20.6187 10.4759 20.3357 10.3387C20.014 10.1826 19.5927 10.1826 18.7504 10.1826H12.2826C11.4402 10.1826 11.019 10.1826 10.6972 10.3387C10.4142 10.4759 10.1841 10.695 10.0399 10.9644C9.87598 11.2707 9.87598 11.6716 9.87598 12.4735V13.0463M9.87598 13.0463V19.3463C9.87598 20.1481 9.87598 20.5491 10.0399 20.8554C10.1841 21.1248 10.4142 21.3439 10.6972 21.4811C11.019 21.6372 11.4402 21.6372 12.2826 21.6372H21.0066C21.8489 21.6372 22.2702 21.6372 22.5919 21.4811C22.8749 21.3439 23.105 21.1248 23.2492 20.8554C23.4132 20.5491 23.4132 20.1481 23.4132 19.3463V15.3372C23.4132 14.5353 23.4132 14.1343 23.2492 13.828C23.105 13.5586 22.8749 13.3396 22.5919 13.2023C22.2702 13.0463 21.8489 13.0463 21.0066 13.0463H9.87598ZM23.4132 15.9099H21.909C21.0783 15.9099 20.4049 16.5509 20.4049 17.3417C20.4049 18.1325 21.0783 18.7735 21.909 18.7735H23.4132" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Tooltip>
              </div>
              <div className='flex'>
                <div>
                  <img src='Images/twitterlogo.png'></img>
                </div>
                <div className='mx-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <rect x="0.140625" y="0.810547" width="31.2397" height="31.2397" rx="8" fill="#2D2D2D" />
                    <path d="M20.93 11.3195C19.992 10.8891 18.9861 10.572 17.9345 10.3904C17.9153 10.3869 17.8962 10.3957 17.8863 10.4132C17.7569 10.6433 17.6137 10.9434 17.5133 11.1793C16.3822 11.01 15.2568 11.01 14.1488 11.1793C14.0485 10.9382 13.9 10.6433 13.77 10.4132C13.7602 10.3962 13.741 10.3875 13.7219 10.3904C12.6708 10.5714 11.6649 10.8885 10.7264 11.3195C10.7182 11.323 10.7113 11.3289 10.7066 11.3364C8.79875 14.1868 8.2761 16.9671 8.5325 19.7129C8.53366 19.7263 8.5412 19.7392 8.55164 19.7474C9.81041 20.6718 11.0298 21.233 12.2264 21.605C12.2456 21.6108 12.2659 21.6038 12.2781 21.588C12.5612 21.2015 12.8135 20.7938 13.0299 20.3652C13.0426 20.3401 13.0304 20.3103 13.0043 20.3004C12.6041 20.1486 12.223 19.9634 11.8564 19.7532C11.8274 19.7363 11.825 19.6948 11.8517 19.6749C11.9289 19.6171 12.006 19.557 12.0797 19.4962C12.093 19.4852 12.1116 19.4828 12.1273 19.4898C14.5357 20.5895 17.1432 20.5895 19.5233 19.4898C19.5389 19.4822 19.5575 19.4846 19.5714 19.4957C19.6451 19.5564 19.7223 19.6171 19.8 19.6749C19.8267 19.6948 19.8249 19.7363 19.7959 19.7532C19.4293 19.9675 19.0482 20.1486 18.6474 20.2998C18.6213 20.3097 18.6097 20.3401 18.6224 20.3652C18.8434 20.7932 19.0958 21.2009 19.3736 21.5875C19.3852 21.6038 19.4061 21.6108 19.4253 21.605C20.6278 21.233 21.8471 20.6718 23.1059 19.7474C23.1169 19.7392 23.1239 19.7269 23.125 19.7135C23.4319 16.539 22.611 13.7815 20.9491 11.337C20.9451 11.3289 20.9381 11.323 20.93 11.3195ZM13.3895 18.041C12.6644 18.041 12.0669 17.3753 12.0669 16.5577C12.0669 15.7402 12.6528 15.0744 13.3895 15.0744C14.132 15.0744 14.7237 15.746 14.7121 16.5577C14.7121 17.3753 14.1262 18.041 13.3895 18.041ZM18.2796 18.041C17.5545 18.041 16.957 17.3753 16.957 16.5577C16.957 15.7402 17.5429 15.0744 18.2796 15.0744C19.0221 15.0744 19.6138 15.746 19.6022 16.5577C19.6022 17.3753 19.0221 18.041 18.2796 18.041Z" fill="white" fill-opacity="0.5" />
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <rect x="0.669922" y="0.810547" width="31.2397" height="31.2397" rx="8" fill="#2D2D2D" />
                    <path d="M21.6751 10.2302L9.28928 15.0743C8.89085 15.2311 8.90818 15.8062 9.32393 15.9281L12.4767 16.8691L13.6546 20.6154C13.7759 21.0162 14.2783 21.1207 14.5554 20.8245L16.1838 19.1517L19.3712 21.5041C19.7696 21.8003 20.324 21.5738 20.4106 21.1033L22.524 10.9272C22.6279 10.4568 22.1429 10.0386 21.6751 10.2302ZM20.1161 12.478L14.3649 17.6009C14.3129 17.6532 14.2783 17.7229 14.2609 17.7926L14.0357 19.779C14.0184 19.8487 13.9318 19.8487 13.9145 19.7964L12.9964 16.8342C12.9617 16.6948 13.0137 16.5554 13.135 16.4857L19.9255 12.2515C20.0988 12.147 20.2547 12.3561 20.1161 12.478Z" fill="white" fill-opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-[1.5px] mt-4 rounded-[15px] border-[#1FED8B]'>
          <div className='flex poppins px-2 py-5  rounded-[15px] roi-timeline text-white'>
            <div className=' w-full flex flex-col justify-between items-center text-center'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.90594 0C0.85332 0 0 0.85332 0 1.90594V14.4852C0 14.9062 0.341328 15.2476 0.762378 15.2476H3.04951C3.47056 15.2476 3.81189 14.9062 3.81189 14.4852V6.12351L11.6622 13.9739C11.96 14.2716 12.4427 14.2716 12.7404 13.9739L14.3577 12.3566C14.6554 12.0589 14.6554 11.5762 14.3577 11.2785L6.89109 3.81189H14.4852C14.9062 3.81189 15.2476 3.47056 15.2476 3.04951V0.762378C15.2476 0.341328 14.9062 0 14.4852 0H1.90594Z" fill="url(#paint0_linear_338_9267)" />
                  <defs>
                    <linearGradient id="paint0_linear_338_9267" x1="0.177651" y1="1.79404" x2="0.177651" y2="24.3989" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" stop-opacity="0.82" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <p className='text-white font-normal text-[10px]'>ROI ( % )</p>
              </div>
            </div>




            <div className=' w-full flex flex-col justify-center items-center text-center'>
              <p className='text-white text-base font-semibold'>425%</p>
              <p className='text-[10px] font-normal'>Last 7 Days </p>
            </div>


            <div className=' w-full flex flex-col justify-center items-center text-center'>
              <p className='text-base font-semibold'>0.18 %</p>
              <p className='text-[10px] font-normal'>Last Month</p>
            </div>


            <div className=' w-full flex flex-col justify-center items-center text-center'>
              <p className='text-base font-semibold'>24.18 %</p>
              <p className='text-[10px] font-normal'>Last Year</p>
            </div>

          </div>
          <div className='flex text-white px-2 py-4 '>
            <div className='w-full  flex justify-center items-center text-center  font-normal text-xs opacity-50'>
              <p>ROI% of <br></br> Collabs</p>
            </div>
            <div className='w-full flex flex-col justify-center items-center '>
              <p className='font-semibold text-base'>600%</p>
              <p className='font-normal text-xs opacity-50 mt-1'>Min ROI %</p>
            </div>
            <div className='w-full  flex flex-col justify-center items-center'>
              <p className='font-semibold text-base'>0.18%</p>
              <p className='font-normal text-xs opacity-50 mt-1'>Max ROI %</p>
            </div>
          </div>
        </div>

        <div className='flex px-2 py-5 justify-center bg-[#2D2D2D] text-white mt-4 rounded-[15px]'>
          <div className='w-full flex flex-col justify-center items-center'>
            <div className='bg-[#191919] rounded-[8px] justify-center items-center px-4 py-2 flex'>
              <p className='font-normal whitespace-nowrap text-[10px] opacity-50 mr-3'>Last 7 Days </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 9.28267L8.79387 12.1917C8.5043 12.4788 8.03481 12.4788 7.74523 12.1917L4.81114 9.28267C4.52157 8.99558 4.52157 8.53012 4.81114 8.24303C5.10071 7.95594 5.5702 7.95594 5.85978 8.24303L7.52805 9.89709L7.52805 4.87185C7.52805 4.46585 7.86003 4.13672 8.26955 4.13672C8.67907 4.13672 9.01105 4.46585 9.01105 4.87185L9.01105 9.89709L10.6795 8.24303C10.9691 7.95594 11.4386 7.95594 11.7281 8.24303C12.0177 8.53012 12.0177 8.99558 11.7281 9.28267Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center'>
            <p className='text-xs font-normal opacity-50'>Buy Volume</p>
            <p className='text-base font-semibold'>22487 $</p>
          </div>
          <div className='w-full flex flex-col justify-center items-center'>
            <p className='text-xs font-normal opacity-50'>Collabs</p>
            <p className='text-base font-semibold'>07</p>
          </div>
        </div>

        <div className='flex border-[#1FED8B] border-[1.5px] px-5 py-5 justify-between bg-[#2D2D2D] text-white mt-4 rounded-[15px]'>
          <div className=' flex'>
            <div className='text-xs font-normal opacity-50 flex justify-center items-center'>
              <p>Avg Cost per <br>
              </br>Collab</p>
            </div>
            <div className='flex ml-6 justify-center items-center'>
              <p className='text-xl font-semibold'>4500 $</p>
            </div>
          </div>
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
              <path d="M1.5 15.5C1.5 7.76801 7.76801 1.5 15.5 1.5C23.232 1.5 29.5 7.76801 29.5 15.5C29.5 23.232 23.232 29.5 15.5 29.5C7.76801 29.5 1.5 23.232 1.5 15.5Z" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9258 9.61332L22.2304 14.964C22.7539 15.4921 22.7539 16.3482 22.2304 16.8763L16.9258 22.2267C16.4023 22.7547 15.5535 22.7547 15.03 22.2267C14.5065 21.6986 14.5065 20.8425 15.03 20.3144L18.0462 17.2723L8.88253 17.2723C8.14217 17.2723 7.54199 16.6669 7.54199 15.9201C7.54199 15.1734 8.14217 14.568 8.88253 14.568L18.0462 14.568L15.03 11.5255C14.5065 10.9975 14.5065 10.1414 15.03 9.61332C15.5535 9.08527 16.4023 9.08527 16.9258 9.61332Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className='flex text-white flex-col bg-[#111111] rounded-[25px] px-2 py-2 mt-3'>
          <div className='bg-[#2D2D2D] px-4 py-4 rounded-[15px] flex justify-between'>
            <div className='flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#222222" />
                <path d="M21.1571 12.5349V11.9482C21.1571 11.1268 21.1571 10.7161 20.9892 10.4024C20.8415 10.1264 20.6058 9.90203 20.3159 9.76142C19.9863 9.60156 19.5548 9.60156 18.6919 9.60156H12.0667C11.2038 9.60156 10.7724 9.60156 10.4428 9.76142C10.1529 9.90203 9.91721 10.1264 9.7695 10.4024C9.60156 10.7161 9.60156 11.1268 9.60156 11.9482V12.5349M9.60156 12.5349V18.9882C9.60156 19.8096 9.60156 20.2204 9.7695 20.5341C9.91721 20.8101 10.1529 21.0344 10.4428 21.175C10.7724 21.3349 11.2038 21.3349 12.0667 21.3349H21.003C21.8659 21.3349 22.2974 21.3349 22.627 21.175C22.9169 21.0344 23.1526 20.8101 23.3003 20.5341C23.4682 20.2204 23.4682 19.8096 23.4682 18.9882V14.8816C23.4682 14.0602 23.4682 13.6494 23.3003 13.3357C23.1526 13.0597 22.9169 12.8354 22.627 12.6948C22.2974 12.5349 21.8659 12.5349 21.003 12.5349H9.60156ZM23.4682 15.4682H21.9275C21.0765 15.4682 20.3867 16.1249 20.3867 16.9349C20.3867 17.7449 21.0765 18.4016 21.9275 18.4016H23.4682" stroke="#1FED8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div>
                <p className='text-xs ml-3 font-normal opacity-50'>Wallets <br></br> following</p>
              </div>
            </div>


            <div className='flex justify-center items-center'>
              <p>7856248</p>
              <div className='ml-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <rect x="1.5" y="1.5" width="16" height="16" rx="8" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3734 5.89117L13.6247 9.17064C13.9455 9.49428 13.9455 10.019 13.6247 10.3426L10.3734 13.6219C10.0526 13.9456 9.53234 13.9456 9.21148 13.6219C8.89062 13.2983 8.89062 12.7736 9.21148 12.4499L11.0601 10.5854L5.44369 10.5854C4.98992 10.5854 4.62207 10.2143 4.62207 9.75664C4.62207 9.29894 4.98992 8.92791 5.44369 8.92791L11.0601 8.92791L9.21148 7.06317C8.89062 6.73953 8.89062 6.21481 9.21148 5.89117C9.53234 5.56753 10.0526 5.56753 10.3734 5.89117Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>


          <div className='bg-[#2D2D2D] my-3 px-4 py-4 rounded-[15px] flex justify-between'>
            <div className='flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#222222" />
                <path d="M19.196 7H15.1646C14.9553 7 14.7682 7.13036 14.6956 7.32668L12.2488 13.9477C12.1282 14.2742 12.3697 14.6211 12.7178 14.6211H14.1208C14.4626 14.6211 14.7036 14.9564 14.5947 15.2804L12.6488 21.0698C12.4822 21.5653 13.0919 21.9518 13.469 21.5898L21.1034 14.2607C21.4283 13.9488 21.2076 13.4 20.7572 13.4H18.2326C17.8832 13.4 17.6416 13.0509 17.7646 12.7239L19.664 7.67608C19.787 7.34912 19.5453 7 19.196 7Z" stroke="#1FED8B" stroke-width="1.5" />
              </svg>
              <div>
                <p className='text-xs ml-3 font-normal opacity-50'>Influencing <br></br>Impact</p>
              </div>
            </div>


            <div className='flex justify-center items-center'>
              <p>89%</p>
              <div className='ml-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <rect x="1.5" y="1.5" width="16" height="16" rx="8" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3734 5.89117L13.6247 9.17064C13.9455 9.49428 13.9455 10.019 13.6247 10.3426L10.3734 13.6219C10.0526 13.9456 9.53234 13.9456 9.21148 13.6219C8.89062 13.2983 8.89062 12.7736 9.21148 12.4499L11.0601 10.5854L5.44369 10.5854C4.98992 10.5854 4.62207 10.2143 4.62207 9.75664C4.62207 9.29894 4.98992 8.92791 5.44369 8.92791L11.0601 8.92791L9.21148 7.06317C8.89062 6.73953 8.89062 6.21481 9.21148 5.89117C9.53234 5.56753 10.0526 5.56753 10.3734 5.89117Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>

          <div className='bg-[#2D2D2D] px-4 py-4 rounded-[15px] flex justify-between'>
            <div className='flex justify-center items-center'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#222222" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2873 12.0911C11.0821 10.4497 12.3619 9 14.016 9H22.3645C24.2845 9 25.6136 10.9178 24.9394 12.7156L23.4394 16.7156C23.0369 17.7889 22.0108 18.5 20.8645 18.5H14.516C13.1291 18.5 11.9593 17.4673 11.7873 16.0911L11.2873 12.0911ZM14.016 10.5C13.2642 10.5 12.6824 11.159 12.7757 11.905L13.2757 15.905C13.3539 16.5306 13.8856 17 14.516 17H20.8645C21.3855 17 21.8519 16.6768 22.0349 16.1889L23.5349 12.1889C23.8413 11.3717 23.2372 10.5 22.3645 10.5H14.016Z" fill="#1FED8B" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.02892 8.5446C9.14247 8.14625 9.55744 7.91538 9.95579 8.02892C11.1416 8.36693 12.024 9.36163 12.2181 10.5793L13.3719 17.8142C13.4093 18.049 13.5056 18.2705 13.6518 18.458C13.9185 18.8002 14.3281 19.0002 14.762 19.0002H20.7502C21.1644 19.0002 21.5002 19.336 21.5002 19.7502C21.5002 20.1644 21.1644 20.5002 20.7502 20.5002H14.762C13.8659 20.5002 13.0198 20.087 12.4688 19.3803C12.1669 18.9929 11.9679 18.5354 11.8906 18.0504L10.7369 10.8155C10.6345 10.1738 10.1695 9.64959 9.5446 9.47146C9.14625 9.35792 8.91538 8.94295 9.02892 8.5446Z" fill="#1FED8B" />
                <path d="M15.75 21.75C15.75 22.3023 15.3023 22.75 14.75 22.75C14.1977 22.75 13.75 22.3023 13.75 21.75C13.75 21.1977 14.1977 20.75 14.75 20.75C15.3023 20.75 15.75 21.1977 15.75 21.75Z" fill="#1FED8B" />
                <path d="M20.75 21.75C20.75 22.3023 20.3023 22.75 19.75 22.75C19.1977 22.75 18.75 22.3023 18.75 21.75C18.75 21.1977 19.1977 20.75 19.75 20.75C20.3023 20.75 20.75 21.1977 20.75 21.75Z" fill="#1FED8B" />
              </svg>

              <div>
                <p className='text-xs ml-3 font-normal opacity-50'>Total Buy
                  <br></br> Volume</p>
              </div>
            </div>


            <div className='flex justify-center items-center'>
              <p>$3,897,528</p>
              <div className='ml-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <rect x="1.5" y="1.5" width="16" height="16" rx="8" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3734 5.89117L13.6247 9.17064C13.9455 9.49428 13.9455 10.019 13.6247 10.3426L10.3734 13.6219C10.0526 13.9456 9.53234 13.9456 9.21148 13.6219C8.89062 13.2983 8.89062 12.7736 9.21148 12.4499L11.0601 10.5854L5.44369 10.5854C4.98992 10.5854 4.62207 10.2143 4.62207 9.75664C4.62207 9.29894 4.98992 8.92791 5.44369 8.92791L11.0601 8.92791L9.21148 7.06317C8.89062 6.73953 8.89062 6.21481 9.21148 5.89117C9.53234 5.56753 10.0526 5.56753 10.3734 5.89117Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default MobileDashboard