import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// import Home from './Home/Home'
import "./app.scss"
import ReactPlayer from 'react-player'
// import Watch from './Watch/Watch'
import Signup from './Components/Authentication/Registation/Signup'
import GoSingup from './Components/Authentication/Registation/GoSingup'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Watch from './Watch/Watch'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth'
import CheckPayment from './Components/Payment/CheckPayment'
import Series from './Components/Series/Series'

// ..
AOS.init()
const App = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route exact path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        } />
        <Route path='/movies' element={<Home type="movies" />} />
        <Route path='/series' element={
          <Series></Series>
          // <Home type="series" />

        } />
        <Route path='/movie/:id' element={<Watch />} />
        <Route path='/check' element={<CheckPayment />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<GoSingup />} />
      </Routes>
    </QueryClientProvider>


  )
}

export default App





{/* <Watch /> */ }
{/* <Signup></Signup> */ }
{/* <GoSingup /> */ }