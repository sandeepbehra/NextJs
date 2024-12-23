
'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";




// ---------------------#7 Basic Routing, #8 Linking and Navigation ---------------------------
// login and about folder used 






// export default function Home() {

// const router = useRouter()


//   return (
//     <div >
//       <main >
//         <h1>This is main page</h1><br></br>
//         <p>Navigating by linking</p><br></br>
//         <Link href={'/login'}>Go to login page</Link><br></br><br></br>
//         <Link href={'/about'}>Go to about page</Link><br></br><br></br>
//         <p>Navigating by buttons</p><br></br>
//         <button onClick={()=>router.push('/login')}>go to login</button><br></br><br></br>
//         <button onClick={()=>router.push('/about')}>go to about</button><br></br>
        
        
//      </main>
    
//     </div>
//   );
// }




























// ---------------------------------------#2 Events , Functions  and state-----------------------
// export default function Home() {

// function Display()
// {
//   alert(" call by Sandeep")
// }


//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <h1>This is main page</h1>
//         <button onClick={Display}>Clickme</button>
//         {/* <button onClick={()=>alert("Button Clicked")}>Clickme</button> */}
//         {/* <User></User> */}


//         {/* call a component as function */}
//         {User()}
//      </main>
    
//     </div>
//   );



// function User(){
//   return(
//     <div>
//       <h1>inner component</h1>
//       <p>this part of inner component</p>
//     </div>
//   )
// }

// }















// ---------------------------------------#1 First Program-----------------------
// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <h1>This is main</h1>
//         <User name ="Sandeep"></User>
//         <User name ="Yuvraj"></User>
//         <User name ="Shyam"></User>
//         <User name ="Shivam"></User>
//      </main>
    
//     </div>
//   );
// }



// function User(props){

//   return(
//     <div>
//       <h1>This is {props.name} component</h1>
//     </div>
//   )
// }