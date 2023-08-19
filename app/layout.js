import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "./Components/Footer/footer";
import MyNavbar from "./Components/shared/Navbar/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IEEE Computer Society, MUJ',
  description: 'Official Website of IEEE Computer Society, MUJ',
}

export default function RootLayout({ children }) {

    return (
      <html lang="en">
        <body className={inter.className}>{children}
            <header>
                <MyNavbar />
            </header>
            <footer>
                {/*<Footer />*/}
            </footer>
        </body>
      </html>
  )
}
