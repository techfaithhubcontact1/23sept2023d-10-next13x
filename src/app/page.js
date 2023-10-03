//1. Import Area

import A from "@/DrillingComponents/A";

// Import DefaultImport from 'some library/location'
// import Image from 'next/image'
// import styles from './page.module.css'
// import Footer from "@/Components/Footer";
// import Header from "@/Components/Header";
// import Main from "@/Components/Main";

//2. Defination Area
function Home() {
    return (
        <>
          <main>
            Home Page
            <A defination="Prop Drilling is tranfer Message inside Nested A to Z components, and Get a message Z component"></A>
              
          </main>
          
        </>
       
    )
}


//3. Export Area 
//3.1 default export 
export default Home;