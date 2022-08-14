import axios from 'axios';
import Head from 'next/head'
import Hero from '../components/hero/hero'
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Books from '../components/books/books';

export default function Home({repos}) {

  

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero profilePicture={'/profile.jpg'}></Hero>
      <div className='main-content px-5 pt-2 pb-5'>
        <Projects repos={repos}/>
        <About/>
        <Books />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
      `http://localhost:3000/test-data.json`
  );
  return {
      props: {
          repos: res.data.items.splice(0, 6),
      }
  }
};