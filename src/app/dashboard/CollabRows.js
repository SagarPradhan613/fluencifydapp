import './Dashboard.css'

const CollabRows = ({ project, date, roi, buyVolume }) => {
    return (
        <>
            <tr className='bg-[#191919]  text-white poppins font-semibold text-base'>
                <td className="py-6  px-8 rounded-tl-[10px] rounded-bl-[10px]">{project}</td>
                <td className="">{date}</td>
                <td className="">{roi}</td>
                <td className="">{buyVolume}</td>
                <td className="rounded-tr-[10px] rounded-br-[10px]">
                    <svg className='transform transition-all duration-300 ease-in-out hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <rect x="1.5" y="1.5" width="24" height="24" rx="8.5" fill="#1FED8B" stroke="#1FED8B" stroke-width="3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7433 8.37618L19.3635 13.0365C19.8194 13.4964 19.8194 14.2421 19.3635 14.702L14.7433 19.362C14.2873 19.8219 13.5481 19.8219 13.0921 19.362C12.6361 18.9021 12.6361 18.1564 13.0921 17.6965L15.7191 15.0469L7.73788 15.0469C7.09305 15.0469 6.57031 14.5196 6.57031 13.8692C6.57031 13.2188 7.09305 12.6915 7.73788 12.6915L15.7191 12.6915L13.0921 10.0417C12.6361 9.58175 12.6361 8.83609 13.0921 8.37618C13.5481 7.91627 14.2873 7.91627 14.7433 8.37618Z" fill="white" />
                    </svg>
                </td>
            </tr>
        </>
    )
}

export default CollabRows;