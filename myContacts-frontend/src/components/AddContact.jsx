import React from 'react'

class AddContact extends React.Component{

    render(){
        return(
            <div className='h-screen w-full bg-[#184452] pt-1'>
                <h1 className="font-['Neue_Montreal'] mt-40 px-20 text-zinc-100 text-4xl font-bold -tracking-tighter">User's Contact</h1>
                <div className='ContactAdd mt-12 w-full flex justify-center'>
                    <div className="box bg-[#245566] w-[90%] rounded-xl">
                        <div className="addContact m-7">
                            <h3 className=' text-zinc-200 font-PlayFair text-2xl font-semibold -tracking-tight'>Add Contact</h3>
                            <div className="form my-7 flex justify-between items-center">
                                {["Name", "Email"].map((item, index)=>{
                                    return(
                                        <input className="field w-[48%] h-[5vh] border-t-violet-300 border-b-2 bg-[#2C6073] placeholder:italic placeholder:text-slate-300 pl-4 font-PlayFair font-semibold text-slate-100 rounded-md" type='text' name={item} placeholder={item}>
                                            
                                        </input>
                                    )
                                })}
                            </div>
                            <div className="mt-12 w-full h-14 relative">
                                <div className="btn rounded-2xl bg-red-400 p-4 h-full absolute right-0 flex justify-center items-center font-PlayFair font-bold text-zinc-100 -tracking-tighter">
                                    Add Contact
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddContact