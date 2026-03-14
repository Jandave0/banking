import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Babid",
    lastName: "brochacho",
    email: "babid@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
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
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 12220.54 }, { currentBalance: 3330.12 }]}
      />
    </section>
  );
};

export default Home;
