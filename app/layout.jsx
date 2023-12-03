import './globals.css'
import './styles.css'
import Navbar from './Navbar/page'
import { Roboto } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './footer/page'

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
  
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
        <Footer/>
       
        </body>
    </html>
  )
}
