import React ,{ useEffect, useState } from 'react';
import { FcMindMap } from 'react-icons/fc';



const EditNode = () => {
    return(
        <form>
        <div className=' w-full justify-center'>
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col gap-y-5 py-5 rounded-md px-10 bg-sky-100">
                
                <div className=' self-center'>
                <FcMindMap size="30"/></div>
                <div className='w-full grid justify-items-center'>
                <h1 className='text-xl text-sky-700 font-bold'>Edit Node</h1>
                </div>
              
                <div className='w-full'>
                <div className='text-sky-700 font-semibold '>Name</div>
                <input
                    className="form-input rounded-md border-none py-3 px-16"    
                    />
                <div className='pt-4 text-sky-700 font-semibold'>Detail</div>
                <input
                    className="form-input rounded-md border-none py-3 px-16"    
                    />
                <div className='pt-4 text-sky-700 font-semibold '>Owner</div>
                <input
                    className="form-input rounded-md border-none py-3 px-16"    
                    />
                </div>
                <div className='flex grid-cols-2 gap-6 place-content-end'>
                <div> 
                    <button className="rounded-xl bg-sky-700">
                    <div className="text-lg text-white px-4 ">
                    Save
                    </div>
                 </button>
                </div>
                <div>
                    <button className="rounded-xl bg-sky-700 ">
                    <div className="text-lg text-white px-4 ">
                    Cancel
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

export default EditNode