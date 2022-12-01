import Head from 'next/head'
import Header from '../components/Header'
import {GetStaticProps} from "next";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkingExperience from "../components/WorkingExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import {HomeModernIcon} from "@heroicons/react/24/solid";
import {Experience, PageInfo, Project, Skill, Social} from "../typings";
import {fetchPageInfo} from "../utils/fetchPageInfo";
import {fetchExperiences} from "../utils/fetchExperiences";
import {fetchSkills} from "../utils/fetchSkills";
import {fetchProjects} from "../utils/fetchProjects";
import {fetchSocials} from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({skills, pageInfo, socials, experiences, projects}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/80 scroll-smooth">
      <Head>
        <title>{pageInfo.name} - Portfolio</title>
      </Head>
      
      <Header socials={socials}/>
      
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
      
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      
      <section id="experience" className="snap-center">
        <WorkingExperience experiences={experiences}/>
      </section>
      
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>
      
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>
      
      <section id="contact-me" className="snap-start">
        <ContactMe {...{pageInfo}}/>
      </section>
      
      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer flex items-center justify-center">
          <div className="p-1 bg-amber-300 h-10 w-10 rounded-full grayscale hover:grayscale-0 flex justify-center items-center text-gray-500 hover:text-black">
            <HomeModernIcon className="h-5 w-5"/>
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 10,
  }
}
