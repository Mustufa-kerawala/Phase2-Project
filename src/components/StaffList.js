import React, {useEffect, useState} from 'react';
import {Staff} from './Staff';


function StaffList() {

    const [staffData, setStaffData] = useState([]);


    useEffect(() => {
        getData();
    }, []);
    
    
    // function for getting data from json server for each staff
    function getData() {
        fetch('http://localhost:3001/Staff')
        .then(response => response.json())
        .then(data => setStaffData(data))
        .catch(error => console.log(error));
    }


    console.log(staffData);
    
    return (
    
            <div>
                <Staff staffData={staffData}/>

                
            </div>
        
    );
}


export {StaffList};