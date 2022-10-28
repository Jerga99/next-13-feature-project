
import "../styles/globals.css"
import Navigation from "./shared/Navbar"
import WordGenerator from "./shared/WordGenerator"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="container">
        <Navigation />
        {children}
        <WordGenerator />
      </body>
    </html>
  )
}
