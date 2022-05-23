import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';



type Props = {

}

const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default Home