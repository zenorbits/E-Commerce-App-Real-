import React from 'react'
import profilePhoto from '../../assets/MeraPhoto.jpeg'
const Dashboard = () => {
    return (
        <div className='w-screen'>
            <div className="main bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full h-screen text-white p-5">
                <div className="title-profilename flex justify-between items-center p-6">
                    <div className="title text-2xl font-extrabold">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="profilename flex gap-4 items-center">
                        <div className="photo w-12 h-12  rounded-full  object-center overflow-hidden"> <img src={profilePhoto} alt="" className=' object-cover overflow-hidden h-12 w-12'/></div>
                        <div className="name font-extrabold text-2xl"> Sanchit Pathak</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard