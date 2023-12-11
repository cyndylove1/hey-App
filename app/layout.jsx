import './globals.css'
import './styles.css'
import Navbar from './Navbar/page'
import { AuthProvider } from './Providers'
// import { getServerSession } from 'next-auth'
import { Roboto } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './footer/page'
import Head from 'next/head'

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
  
});
export const metadata = {
  title:"HeyWallet App",
  description:"Generated by HeyWallet App"
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

      </Head>
      <body className={roboto.className}>
        
        <AuthProvider>
          <Navbar/>
          {children}
          <Footer/>

        </AuthProvider>
        
        
       
        </body>
    </html>
  )
}
