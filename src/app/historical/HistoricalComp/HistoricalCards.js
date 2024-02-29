import './Historical.css';

const HistoricalCards = ({ prediction, date, status, social, time }) => {
    return (
        <>
            <div className='flex flex-col w-full bg-[#191919] rounded-[15px] mt-4 py-6 px-6' >
                <div>
                    <p className='font-semibold lg:text-sm text-xs opacity-50'>Prediction</p>
                </div>
                <div className='lg:mt-2 mt-3'>
                    <p className='font-semibold lg:text-base text-sm'>{prediction}</p>
                </div>
                <div className='mt-3 lg:hidden block'>
                    <p className='opacity-50 text-sm font-semibold'>{social}    {date}   {time}</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex justify-center items-center'>
                        <div >
                            {status === 1 ?
                                <>
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
                                </>
                                :
                                <>
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
                                </>
                            }

                        </div>
                        <div className='ml-10 hidden lg:block'>
                            <p className='text-sm font-semibold opacity-50'>{social}    {date}   {time}</p>
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
        </>
    )
}

export default HistoricalCards;