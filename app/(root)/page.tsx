import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = {firstName: 'Babid'};
  return (
    <section className='home'>
        <div className='home-content'>
        <header className='home-header'>  
        <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="What would you like to do today?"
        />
       <TotalBalanceBox 
        accounts={[]} 
        totalBanks={5} 
        totalCurrentBalance={12345.67} 
       />
       </header>
        </div>
    </section>
  )
}

export default Home