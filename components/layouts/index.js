import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="p-10 bg-sky-700" />
      
      <main>{children}</main>
    </>
  )
}