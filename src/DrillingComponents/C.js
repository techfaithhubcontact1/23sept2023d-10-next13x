import React from 'react'
import D from './D'

export default function C(pc) {
    console.log(pc)
    return (
         <>
            <div>C</div>
            <D def={pc.def}></D>
         </>
    )
}
