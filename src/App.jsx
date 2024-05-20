import Layout from "./layout.jsx"
import Home from "./pages/Home/index.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <Home />
        </Layout>} />

        <Route path="/createvent" element={<Layout>
          <Home />
        </Layout>} />
      </Routes>
    </Router>

  )
}

export default App