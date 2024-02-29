import React from 'react'
import Dashboard from '../../dashboard/Dashboard'
import MobileDashboard from '../../MobileDashboard/MobileDashboard'


const MergePage = () => {

    return (
        <>
            <div className='lg:block hidden'>
                <Dashboard></Dashboard>
            </div>
            <div className="lg:hidden block">
               <MobileDashboard></MobileDashboard>
            </div>
        </>
    )
}

export default MergePage