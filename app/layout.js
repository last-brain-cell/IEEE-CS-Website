import "./globals.css"
import { Inter } from 'next/font/google'
import Footer from "./Components/shared/Footer/footer";
import MyNavbar from "./Components/shared/Navbar/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IEEE Computer Society, MUJ',
  description: 'Official Website of IEEE Computer Society, MUJ',
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
            <div className="main">
                <header>
                <MyNavbar />
                </header>
                {children}
                <footer>
                    <Footer />
                </footer>
            </div>
        </body>
      </html>
  )
}