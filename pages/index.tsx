import Head from 'next/head'
import Header from '../components/Header'
import {NextPage} from "next";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Masadamsahid's Portfolio</title>
      </Head>
      
      <Header/>
      
      {/* HERO */}
      <section id="hero" className="snap-start">
        <Hero/>
      </section>
      
      {/* About */}
      <section id="about" className="snap-center">
        <About/>
      </section>
      
      {/* Experience */}
      
      {/* Skills */}
      
      {/* Project */}
      
      {/* Contact Me */}
      
    </div>
  )
}

export default Home;
