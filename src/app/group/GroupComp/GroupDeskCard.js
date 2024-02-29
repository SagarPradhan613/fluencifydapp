import './Group.css'

const GroupDeskCard = ({group,roi,last7days,totalBuy}) => {
    return (
        <>
            <div class="grid grid-cols-5 gap-4 lg:grid-cols-9 justify-center items-center rounded-[15px] bg-[#191919]">
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs  p-4 ">{group}</div>
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs  p-4 ">{roi}</div>
                <div class=" lg:col-span-1 lg:hidden   p-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <rect x="1.5" y="1.5" width="24" height="24" rx="8.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7433 8.37618L19.3635 13.0365C19.8194 13.4964 19.8194 14.2421 19.3635 14.702L14.7433 19.362C14.2873 19.8219 13.5481 19.8219 13.0921 19.362C12.6361 18.9021 12.6361 18.1564 13.0921 17.6965L15.7191 15.0469L7.73788 15.0469C7.09305 15.0469 6.57031 14.5196 6.57031 13.8692C6.57031 13.2188 7.09305 12.6915 7.73788 12.6915L15.7191 12.6915L13.0921 10.0417C12.6361 9.58175 12.6361 8.83609 13.0921 8.37618C13.5481 7.91627 14.2873 7.91627 14.7433 8.37618Z" fill="white" />
                    </svg>
                </div>
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs  table-long-text whitespace-nowrap p-4 ">{last7days}</div>
                <div class="lg:col-span-2 col-span-2 font-semibold lg:text-xs  p-4 table-long-text whitespace-nowrap ">{totalBuy}</div>
                <div class=" lg:col-span-1 hidden lg:block  p-4 ">
                    <svg className='transform transition-all duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <rect x="1.5" y="1.5" width="24" height="24" rx="8.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7433 8.37618L19.3635 13.0365C19.8194 13.4964 19.8194 14.2421 19.3635 14.702L14.7433 19.362C14.2873 19.8219 13.5481 19.8219 13.0921 19.362C12.6361 18.9021 12.6361 18.1564 13.0921 17.6965L15.7191 15.0469L7.73788 15.0469C7.09305 15.0469 6.57031 14.5196 6.57031 13.8692C6.57031 13.2188 7.09305 12.6915 7.73788 12.6915L15.7191 12.6915L13.0921 10.0417C12.6361 9.58175 12.6361 8.83609 13.0921 8.37618C13.5481 7.91627 14.2873 7.91627 14.7433 8.37618Z" fill="white" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default GroupDeskCard;