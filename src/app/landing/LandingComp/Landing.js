'use client'
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Landing.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { Alert, Tooltip, Pagination } from "flowbite-react";
import LandingCards from './LandingCard';

const Landing = () => {
  // const perPageFirstPage = 7; // Number of cards per page on the first page
  // const perPageOtherPages = 10; // Number of cards per page on other pages
  // const [currentPage, setCurrentPage] = useState(1);

  const perPage = 7; // Number of cards per page
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };




  const renderRankedCards = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const visibleRankedCards = RankedCardData.slice(startIndex, endIndex);
    return visibleRankedCards.map((rank, index) => (
      <LandingCards key={index} ranking={rank} cardIndex={rank} />
    ));
  };

  const renderExtraCards = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const visibleExtraCards = cardData.slice(startIndex, endIndex);
    return visibleExtraCards.map((rank, index) => (
      <LandingCards key={index} cardIndex={rank} />
    ));
  };

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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1.5,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: false, // Set to null to hide the previous arrow
    nextArrow: false, // Set to null to hide the next arrow
    arrow: false,
    dots: false,
  };


  

  const RankedCardData = [1, 2, 3]; // Sample ranked card data
  const cardData = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // Sample extra card data

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
const lastPage = Math.ceil(Math.max(RankedCardData.length, cardData.length) / perPage);

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
      {/* {showAlert ?
        <>
          <Alert color="info">
            <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
          </Alert>
        </>
        :
        null} */}
      <div className='poppins text-white responsive-container-padding-dashboard mb-20 relative-hero-padding lg:py-10 lg:px-20 px-10 py-3 '>
        <div className='lg:flex justify-center items-center lg:pl-20 lg:py-1 py-10 rounded-[25px] bg-[#111111] block w-full'>
          <div className='lg:w-1/2 w-full quantico lg:text-7xl text-4xl font-normal  lg:py-16 justify-center items-center text-center lg:justify-start lg:items-start lg:text-left'>
            <p>Pick the <span className='text-[#1FED8B]'>right</span>  <br></br>And <span className='text-[#1FED8B]'>Better</span> </p>

            <div className='lg:hidden flex mt-2 mb-6 justify-center items-center w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="14" viewBox="0 0 58 14" fill="none">
                <path d="M1.53421 6.24731V10.9892H0V0.451613H6.27492V1.80645H1.53421V4.89247H5.3544V6.24731H1.53421Z" fill="white" />
                <path d="M9.0564 10.9892L7.27671 9.98064V0H8.7649V9.67957H10.606V10.9892H9.0564Z" fill="white" />
                <path d="M11.4556 10.0559V3.46237H12.9438V9.75484H16.4879V3.46237H17.976V11.0645H16.8561L16.4879 10.4473L15.3986 11.0645H13.2353L11.4556 10.0559Z" fill="white" />
                <path d="M25.7999 9.67957V10.9892H21.5195L19.7398 9.98064V4.3957L21.5195 3.3871H24.0202L25.7999 4.3957V7.73763H21.228V9.67957H25.7999ZM21.228 4.69677V6.42796H24.3117V4.69677H21.228Z" fill="white" />
                <path d="M34.0799 4.3957V10.9892H32.5917V4.69677H29.0476V10.9892H27.5595V3.3871H28.6794L29.0476 4.0043L30.1369 3.3871H32.3002L34.0799 4.3957Z" fill="white" />
                <path d="M37.3318 4.77204V9.67957H41.5969V10.9892H37.6233L35.8436 9.98064V4.47097L37.6233 3.46237H41.5969V4.77204H37.3318Z" fill="white" />
                <path d="M44.5372 3.46237V10.9892H43.049V3.46237H44.5372ZM42.9723 1.61075V0H44.6139V1.61075H42.9723Z" fill="white" />
                <path d="M45.6853 4.77204V3.46237H47.0968V1.0086L48.8765 0H50.426V1.30968H48.585V3.46237H50.426V4.77204H48.585V10.9892H47.0968V4.77204H45.6853Z" fill="white" />
                <path d="M52.2774 14L53.6122 10.643L50.6511 3.46237H52.1393L54.3179 8.8215H54.3486L56.5118 3.46237H58L53.7349 14H52.2774Z" fill="white" />
              </svg>
            </div>


            <div className='mt-16 hidden lg:block'>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="25" viewBox="0 0 102 25" fill="none">
                <path d="M2.68279 11.1336V19.5844H0V0.804837H10.9726V3.21935H2.68279V8.71908H9.36295V11.1336H2.68279Z" fill="white" />
                <path d="M15.8364 19.5844L12.7244 17.7869V0H15.3267V17.2504H18.5461V19.5844H15.8364Z" fill="white" />
                <path d="M20.0319 17.9211V6.17043H22.6342V17.3845H28.8314V6.17043H31.4337V19.7185H29.4753L28.8314 18.6186L26.9267 19.7185H23.1439L20.0319 17.9211Z" fill="white" />
                <path d="M45.1149 17.2504V19.5844H37.63L34.5179 17.7869V7.83376L37.63 6.03629H42.0029L45.1149 7.83376V13.7896H37.1202V17.2504H45.1149ZM37.1202 8.37032V11.4555H42.5126V8.37032H37.1202Z" fill="white" />
                <path d="M59.5937 7.83376V19.5844H56.9913V8.37032H50.7941V19.5844H48.1918V6.03629H50.1502L50.7941 7.13623L52.6989 6.03629H56.4816L59.5937 7.83376Z" fill="white" />
                <path d="M65.2801 8.50445V17.2504H72.7383V19.5844H65.7899L62.6778 17.7869V7.9679L65.7899 6.17043H72.7383V8.50445H65.2801Z" fill="white" />
                <path d="M77.8798 6.17043V19.5844H75.2775V6.17043H77.8798ZM75.1434 2.87059V0H78.014V2.87059H75.1434Z" fill="white" />
                <path d="M79.8875 8.50445V6.17043H82.3557V1.79747L85.4677 0H88.1773V2.33403H84.958V6.17043H88.1773V8.50445H84.958V19.5844H82.3557V8.50445H79.8875Z" fill="white" />
                <path d="M91.4147 24.95L93.7488 18.9674L88.571 6.17043H91.1733L94.9828 15.7212H95.0365L98.8192 6.17043H101.422L93.9634 24.95H91.4147Z" fill="white" />
              </svg>
            </div>
          </div>

          <div className='lg:w-1/2  w-full h-full'>
            <div>
              <Slider {...settings}>
                <div className=' bg-[#111111] responsive-img-slider-size'>
                  <img src='Images/hdsliderimg1.png' className='h-full w-full'></img>
                </div>
                <div className=' bg-[#111111] responsive-img-slider-size'>
                  <img src='Images/hdsliderimg1.png' className='h-full w-full'></img>
                </div>
                <div className=' bg-[#111111] responsive-img-slider-size'>
                  <img src='Images/hdsliderimg1.png' className='h-full w-full'></img>
                </div>
                <div className=' bg-[#111111] responsive-img-slider-size'>
                  <img src='Images/hdsliderimg1.png' className='h-full w-full'></img>
                </div>
                <div className=' bg-[#111111] responsive-img-slider-size'>
                  <img src='Images/hdsliderimg1.png' className='h-full w-full'></img>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* ranked cards */}
        {currentPage > 1 ? <></> : <div className='bg-[#0B0B0B] lg:p-4 rounded-[15px] justify-center items-center mt-10'>
          <div className='w-full flex flex-col gap-6 rounded-[25px] pb-6 lg:pb-0  pt-6 lg:pt-0 bg-[#0B0B0B]  px-0 lg:px-0'>
            {renderRankedCards()}
          </div>
        </div>}
        

        {/* extra cards */}
        <div className='flex lg:p-4 flex-col mt-8 gap-6'>
          {renderExtraCards()}
        </div>


        {/* desktop pagination */}
        <div className='lg:flex hidden w-full px-10 mt-10 justify-between'>
          <div onClick={goToFirstPage} className='bg-[#2D2D2D] hover:bg-[#1FED8B] transition duration-300 ease p-4 rounded-[15px] font-semibold text-lg'>
            01
          </div>
          <div className='flex justify-center items-center'>
            <Pagination previousLabel={LeftSvg()} nextLabel={RightSvg()} className='custom-pagination' currentPage={currentPage} totalPages={Math.ceil(Math.max(RankedCardData.length, cardData.length) / perPage)} onPageChange={onPageChange}  />
          </div>
          <div className='bg-[#2D2D2D] hover:bg-[#1FED8B] transition duration-300 ease p-4 rounded-[15px] font-semibold text-lg' onClick={goToLastPage}>
          {lastPage}
          </div>
        </div>

        {/* mobile pagination */}
        <div className='lg:hidden flex mt-8 justify-center items-center'>
           <Pagination previousLabel={LeftSvg()} nextLabel={RightSvg()} className='custom-pagination' currentPage={currentPage} totalPages={Math.ceil(Math.max(RankedCardData.length, cardData.length) / perPage)} onPageChange={onPageChange}  />
        </div>


      </div>
    </>
  )
}

export default Landing
