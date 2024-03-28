import React from 'react'

function Navbar() {
    return (
        <div className='fixed w-full pt-5 pb-10 flex justify-between items-center'>
            <h1 className='ml-8 font-NswFoundation text-3xl text-zinc-200 uppercase -tracking-tight font-extrabold border-b-2 border-teal-300 border-dashed pb-2'>
                Contactopia
            </h1>
            <div className="account py-3 flex justify-center items-center">
                <div className="border-l-2 border-zinc-300 pl-5 pr-10 w-full info flex gap-4 justify-center items-center">
                    <div className="text">
                        <h3 className="name text-zinc-200 text-xl">
                            username
                        </h3>
                        <h3 className='userT text-zinc-400 text-lg'>
                            user_type
                        </h3>
                    </div>
                    <div className="loginIcon h-[46px] w-[46px] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' data-name="Layer 1" viewBox="0 0 29 29" id="user"><path d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar