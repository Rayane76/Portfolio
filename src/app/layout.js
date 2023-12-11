import 'bootstrap/dist/css/bootstrap.min.css';
import { Open_Sans } from 'next/font/google'

export const metadata = {
  title: 'Hiouani Rayane',
  description: 'Personal portfolio',
}
const open = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className} style={{margin:"0"}}>{children}</body>
    </html>
  )
}
