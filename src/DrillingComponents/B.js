import React from 'react'
import C from './C';

export default function B(pb) {
    console.log(pb);
  return (
     <>
        <div>B</div>
        <C def={pb.def}></C>
     </>
  )
}
