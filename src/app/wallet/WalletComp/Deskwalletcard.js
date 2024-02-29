'use client'
import { useState } from 'react';
import './Wallet.css'


const Deskwalletcard = ({ wallet, pl, totalBuy, price }) => {
    const TruncatedText = ({ text }) => {
        const truncatedText =
            text.length > 10
                ? `${text.slice(0, 7)}...${text.slice(-3)}`
                : text;

        return (
            <div className="truncate">
                <span>{truncatedText}</span>
            </div>
        );
    };


    const handleCopyClick = () => {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        // Set the value of the textarea to the text you want to copy
        textarea.value = wallet;
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
            <div class="grid grid-cols-5 gap-4 lg:grid-cols-9 justify-center items-center rounded-[15px] bg-[#191919]">
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs flex  p-4 ">
                    {/* <p>0x14565...861</p> */}
                    <TruncatedText text={wallet} />
                    <div className='ml-3' onClick={handleCopyClick}>
                        <svg className='hover:scale-110 transform transition-transform duration-300 ease-in' xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <g opacity="0.5">
                                <rect x="0.75" y="0.75" width="8.5" height="8.5" rx="2.25" fill="#191919" stroke="white" stroke-width="1.5" />
                                <rect x="3.75" y="4.75" width="8.5" height="8.5" rx="2.25" fill="#191919" stroke="white" stroke-width="1.5" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs   p-4 ">
                    <div className='border rounded-[10px] px-12 py-2 border-[#1FED8B] w-[70%] flex justify-center items-center whitespace-nowrap'>
                        {pl}
                        <div className='ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <rect x="-1.5" y="-1.5" width="10" height="10" rx="5" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 10 10)" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96704 5.90129L6.72319 3.67676C6.50175 3.45722 6.14273 3.45722 5.92129 3.67676L3.67757 5.90129C3.45614 6.12082 3.45614 6.47677 3.67757 6.6963C3.89901 6.91584 4.25803 6.91584 4.47947 6.6963L5.75521 5.43144L5.75521 9.27426C5.75521 9.58474 6.00908 9.83643 6.32224 9.83643C6.6354 9.83643 6.88927 9.58474 6.88927 9.27426L6.88927 5.43144L8.16514 6.6963C8.38658 6.91584 8.7456 6.91584 8.96704 6.6963C9.18848 6.47676 9.18848 6.12082 8.96704 5.90129Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1 lg:hidden   p-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <rect x="1.5" y="1.5" width="24" height="24" rx="8.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7433 8.37618L19.3635 13.0365C19.8194 13.4964 19.8194 14.2421 19.3635 14.702L14.7433 19.362C14.2873 19.8219 13.5481 19.8219 13.0921 19.362C12.6361 18.9021 12.6361 18.1564 13.0921 17.6965L15.7191 15.0469L7.73788 15.0469C7.09305 15.0469 6.57031 14.5196 6.57031 13.8692C6.57031 13.2188 7.09305 12.6915 7.73788 12.6915L15.7191 12.6915L13.0921 10.0417C12.6361 9.58175 12.6361 8.83609 13.0921 8.37618C13.5481 7.91627 14.2873 7.91627 14.7433 8.37618Z" fill="white" />
                    </svg>
                </div>
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs  table-long-text whitespace-nowrap p-4 ">{totalBuy}</div>
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs  p-4 table-long-text whitespace-nowrap ">{price}</div>
                <div class="lg:col-span-1 hidden lg:block  p-4 ">
                    <svg className='transform transition-all duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <rect x="1.5" y="1.5" width="24" height="24" rx="8.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7433 8.37618L19.3635 13.0365C19.8194 13.4964 19.8194 14.2421 19.3635 14.702L14.7433 19.362C14.2873 19.8219 13.5481 19.8219 13.0921 19.362C12.6361 18.9021 12.6361 18.1564 13.0921 17.6965L15.7191 15.0469L7.73788 15.0469C7.09305 15.0469 6.57031 14.5196 6.57031 13.8692C6.57031 13.2188 7.09305 12.6915 7.73788 12.6915L15.7191 12.6915L13.0921 10.0417C12.6361 9.58175 12.6361 8.83609 13.0921 8.37618C13.5481 7.91627 14.2873 7.91627 14.7433 8.37618Z" fill="white" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Deskwalletcard;