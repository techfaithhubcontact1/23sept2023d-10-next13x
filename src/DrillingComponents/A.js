//1. Import Area
import React from 'react'
import B from './B';


//1. Defination Area
export default function A(pa) {
    console.log(pa.defination);
    return (
         <>
            <div>A</div>
            <B def={pa.defination}></B>
         </>
    )
}
