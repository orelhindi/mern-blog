import { createBrowserRouter } from "react-router-dom"
import { About } from "../pages/About"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { Projects } from "../pages/Projects"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

export { router }
