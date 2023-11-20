import React from 'react';

function Staff({ staffData}) {
    return (
        <ul>
            {staffData.map(staff => {
                <li >
                    Name: {staff.firstName} {staff.lastName}, Email: {staff.email}, Gender: {staff.gender}, Salary: {staff.salary}, Taxes: {staff.taxes}
                </li>
            })}
        </ul>
    );
}

export  {Staff};