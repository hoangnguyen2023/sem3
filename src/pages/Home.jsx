import React from 'react'
import Find from '../components/Find'
import CreateCV from '../components/CreateCV'
import Customer from '../components/Customer'
import Jobnew from './Jobnew'
import Banner from '../components/Banner'
import Job from '../pages/Job'
import TopCompany from '../components/TopCompany'

const Home = () => {
  return (
    <div>
      <Banner />
      <Find />
      <Job />
      <CreateCV />
      <Customer />
      <TopCompany />
      <Jobnew />
    </div>
  )
}

export default Home
