import React from 'react';
import '../App.css';


export const AdminUserReportCard = () => {
    const [status, setStatus] = React.useState("Not Done")

    const onOptionChange = e => {
        setStatus(e.target.value)
    }

    return(
        <div>
            <div className='grid h-screen w-full place-items-center bg-background'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-11">
                    <div className="p-5 shadow-lg">
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Location</p>
                            <input type="text" value="SW1 2nd Floor" disabled className='bg-[#D9D9D9]'></input>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Subject of Object</p>
                            <input type="text" value="Table" disabled className='bg-[#D9D9D9]'></input>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Description of Problem</p>
                            <textarea type="text" value="The table plugs are not working hello hdjfhsjdkhf akjshdkjshkjh k" disabled className='bg-[#D9D9D9] h-[129px] w-[300px] resize-none p-[10px] text-[#333] rounded'></textarea>
                        </div>
                        <div className='mb-5 mt-5 flex justify-center align-middle'>
                            <a href="#" className='font-normal text-blue-500 underline decoration-solid hover:text-blue-700'>Image</a>
                        </div>
                        <div className='mb-1'>
                            <h3 className='text-gray-700 pl-[10px]'>Report Status</h3>
                            
                            <div className='flex justify-center align-middle'>
                                <input
                                type="radio"
                                name="status"
                                value="Not Done"
                                id="nd"
                                checked={status === "Not Done"}
                                onChange={onOptionChange}
                                className='m-1 accent-red-700'
                                />
                                <label htmlFor="regular" className='mr-3 text-[#333]'>Unassessed</label>

                                <input
                                type="radio"
                                name="status"
                                value="Looked At"
                                id="la"
                                checked={status === "Looked At"}
                                onChange={onOptionChange}
                                className='m-1 accent-yellow-300'
                                />
                                <label htmlFor="medium" className='mr-3 text-[#333]'>Pending</label>

                                <input
                                type="radio"
                                name="status"
                                value="Done"
                                id="d"
                                checked={status === "Done"}
                                onChange={onOptionChange}
                                className='m-1 accent-green-700'
                                />
                                <label htmlFor="large" className='mr-3 text-[#333]'>Fixed</label>
                            </div>

                        </div>

                        <div className='flex justify-center items-center mt-7'>
                            <a href="#" className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#043C6C] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[270px] h-[40px]">
                                Submit
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-[2.2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>






    )
}

