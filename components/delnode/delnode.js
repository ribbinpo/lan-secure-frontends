import React ,{ useEffect, useState } from 'react';
import { FcMindMap } from 'react-icons/fc';



const DelNode = () => {
    return(
        <form>
        <div className=' w-full justify-center'>
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col gap-y-5 py-5 rounded-md px-10 bg-sky-100">
                
                <div className=' self-center'>
                <FcMindMap size="30"/></div>
                <div className='w-full grid justify-items-center'>
                <h1 className='text-xl text-sky-700 font-bold'>Delete Node</h1>
                </div>
              
                <div className='w-full'>
                <div className="form-input rounded-md border-none py-3 px-36 bg-white text-sky-700">
                    Delete node PSU005 ?
                </div>
                </div>
                <div className='flex grid-cols-2 gap-6 place-content-end'>
                <div> 
                    <button className="rounded-xl bg-sky-700">
                    <div className="text-lg text-white px-6">
                    Yes
                    </div>
                 </button>
                </div>
                <div>
                    <button className="rounded-xl bg-sky-700 ">
                    <div className="text-lg text-white px-6">
                    No
                    </div>
                 </button>
                </div>
                </div>
    
                </div>
            
            </div>
            </div>
            </form>
    );
};

export default DelNode