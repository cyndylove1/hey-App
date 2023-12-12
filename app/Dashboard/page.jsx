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
                

                        {/* <div className='dashed'>
                        
                        </div> */}
                        
                    
                    
                   
                    
                   
                </div>
                
                
                
                
                
            </div>
        </div>
    )
}