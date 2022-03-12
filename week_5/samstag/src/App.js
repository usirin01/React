import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function Home() {
  return <h1>HOME</h1>
}
function About() {
  return <h1>About</h1>
}
function Contact() {
  return <h1>Contact</h1>
}
function App() {
  return (
    <BrowserRouter>
      MERHABA
      <div>
        <h1>ROUTER DENEME</h1>
        <ul>
          <li>
            <Link exact to="/">
              home
            </Link>
          </li>
          <li>
            <Link to="/About">about</Link>
          </li>
          <li>
            <Link to="/Contact">contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
