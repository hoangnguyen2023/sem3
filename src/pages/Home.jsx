import React from 'react'
import Find from '../components/Find'
// import CreateCV from '../components/CreateCV'
import Customer from '../components/Customer'
import Banner from '../components/Banner'
import Job from '../pages/Job'
import TopCompany from '../components/TopCompany'
import Count from '../components/Count'


const Home = () => {
  return (
    <div>
      <Banner />
      <Find />
      <Count/>
      <Customer />
      <TopCompany />
    
    </div>
  )
}

export default Home
