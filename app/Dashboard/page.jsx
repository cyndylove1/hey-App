'use client'
import '../globals.css'
import '../styles.css'
import {signOut, useSession} from "next-auth/react"



export default function Dashboard() {
    const {session} = useSession() 
    // const session = await getServerSession()
    // if(session){
    //     redirect("/")
    // }
    return(
        <div>
            <div className="dashboard">
                <div className='dash'>
                    {session ?(
                        <>
                         <li>user</li>
                        <li>user</li>
                    {/* <div className='dashed'>
                        <button className='dash-btn'>LogOut</button>

                    </div> */}

                        </>
                    ):(
                        <>
                        {session.user?.email}

                        <div className='dashed'>
                            <button className='dash-btn' onClick={()=>(
                                signOut()
                            )}>LogOut</button>

                     </div>
                        
                        </>
                    )}
                   
                    
                   
                </div>
                
                
                
                
                
            </div>
        </div>
    )
}