import React, { useState, useEffect } from 'react';

const DashboardHome = () => {
    let [user, setUser] = useState(0)
    useEffect(() => {
        // let totalUser = APICALL
        // setUser(totalUser.length)
    }, [])
    return (
        <div>
            <h2 className="my-3 text-primary">Welcome to Dashboard</h2>
            <div >
                <h4>Total registered User: {user}</h4>
            </div>
            <div>
                <h4>Total Number of Shop : 1000</h4>
            </div>
            <div>
                <h4>Total Number of Products: 1000</h4>
            </div>
        </div>
    );
};

export default DashboardHome;