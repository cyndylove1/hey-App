'use client'
import { getServerSession } from 'next-auth'
import '../globals.css'
import '../styles.css'
import { redirect } from 'next/navigation'


const Dashboard = async () => {
    const session = await getServerSession();
    if(!session){
        redirect("/")
    }
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
export default Dashboard