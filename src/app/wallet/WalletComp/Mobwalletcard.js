import './Wallet.css'

const Mobwalletcard = ({ wallet, pl, totalBuy, price }) => {
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
    return (
        <>
            <div class="grid grid-cols-5 gap-4 lg:grid-cols-9 justify-center items-center rounded-[15px] bg-[#191919]">
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs min-h-[100px] p-4 ">
                    <div>
                        <p className='font-semibold text-xs opacity-50'>Wallets</p>
                    </div>
                    <div>
                        <TruncatedText className='whitespace-nowrap font-semibold text-base mt-2' text={wallet}></TruncatedText>
                    </div>
                </div>
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs  p-4 ">
                    <div>
                        <p className='font-semibold text-xs opacity-50'>Profit / Loss %</p>
                    </div>
                    <div>
                        <div className='border rounded-[10px] mt-2 px-12 py-2 border-[#1FED8B] w-[70%] flex justify-center items-center whitespace-nowrap'>
                            {pl}
                            <div className='ml-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <rect x="-1.5" y="-1.5" width="10" height="10" rx="5" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 10 10)" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96704 5.90129L6.72319 3.67676C6.50175 3.45722 6.14273 3.45722 5.92129 3.67676L3.67757 5.90129C3.45614 6.12082 3.45614 6.47677 3.67757 6.6963C3.89901 6.91584 4.25803 6.91584 4.47947 6.6963L5.75521 5.43144L5.75521 9.27426C5.75521 9.58474 6.00908 9.83643 6.32224 9.83643C6.6354 9.83643 6.88927 9.58474 6.88927 9.27426L6.88927 5.43144L8.16514 6.6963C8.38658 6.91584 8.7456 6.91584 8.96704 6.6963C9.18848 6.47676 9.18848 6.12082 8.96704 5.90129Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1 lg:hidden   p-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <rect x="1.5" y="1.5" width="24" height="24" rx="8.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7433 8.37618L19.3635 13.0365C19.8194 13.4964 19.8194 14.2421 19.3635 14.702L14.7433 19.362C14.2873 19.8219 13.5481 19.8219 13.0921 19.362C12.6361 18.9021 12.6361 18.1564 13.0921 17.6965L15.7191 15.0469L7.73788 15.0469C7.09305 15.0469 6.57031 14.5196 6.57031 13.8692C6.57031 13.2188 7.09305 12.6915 7.73788 12.6915L15.7191 12.6915L13.0921 10.0417C12.6361 9.58175 12.6361 8.83609 13.0921 8.37618C13.5481 7.91627 14.2873 7.91627 14.7433 8.37618Z" fill="white" />
                    </svg>
                </div>
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs  table-long-text whitespace-nowrap p-4 ">
                    <div>
                        <p className='font-semibold text-xs opacity-50'>Total Buy Vol.( $ )</p>
                    </div>
                    <div>
                        <p className='font-semibold text-base mt-2'>{totalBuy}</p>
                    </div>
                </div>
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs  p-4 table-long-text whitespace-nowrap ">
                    <div>
                        <p className='font-semibold text-xs opacity-50'>Total Buy Vol</p>
                    </div>
                    <div>
                        <p className='font-semibold text-base whitespace-nowrap mt-2'>{price}</p>
                    </div>
                </div>
                <div class="lg:col-span-1 hidden lg:block  p-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <rect x="1.5" y="1.5" width="24" height="24" rx="8.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7433 8.37618L19.3635 13.0365C19.8194 13.4964 19.8194 14.2421 19.3635 14.702L14.7433 19.362C14.2873 19.8219 13.5481 19.8219 13.0921 19.362C12.6361 18.9021 12.6361 18.1564 13.0921 17.6965L15.7191 15.0469L7.73788 15.0469C7.09305 15.0469 6.57031 14.5196 6.57031 13.8692C6.57031 13.2188 7.09305 12.6915 7.73788 12.6915L15.7191 12.6915L13.0921 10.0417C12.6361 9.58175 12.6361 8.83609 13.0921 8.37618C13.5481 7.91627 14.2873 7.91627 14.7433 8.37618Z" fill="white" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Mobwalletcard;