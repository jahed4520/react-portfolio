import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import code from '../public/code.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jahedul Islam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' px-10 mb-20 dark:bg-gray-900 md:px-20 lg:px-40'>
       <section className='min-h-screen mb-12'>
        <nav className=' py-8 mb-12 flex justify-between'>
          <h1 className='text-2xl font-md dark:text-white'>Jahedul Islam</h1>
          <ul className=' flex items-center'>
            <li className=' text-2xl cursor-pointer dark:text-white' onClick={()=>{setdarkMode(!darkMode)}}><BsFillMoonStarsFill /></li>
            <li className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-10 cursor-pointer'><a href="#">Resume</a></li>
          </ul>
        </nav>
        <div className=' text-center p-10'>
          <h2 className=' text-4xl font-medium py-2 text-teal-600'>Jahedul Islam</h2>
          <h3 className=' text-2xl py-2 dark:text-white'>Web Developer & Designer.</h3>
          <p className=' text-lg mx-auto py-5 leading-8 text-gray-800 dark:text-white lg:max-w-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, modi optio repellendus repudiandae qui dicta!</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 text-gray-600 py-3 cursor-pointer dark:text-white'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
          <Image src={deved} layout="fill" objectFit='cover'/>
        </div>
       </section>
       <section>
        <div>
          <h3 className=' text-3xl py-1 dark:text-white'>Servicer I offer</h3>
          <p className=' text-md text-gray-800 py-2 leading-6 dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur culpa molestiae excepturi voluptatem recusandae repudiandae nemo ullam omnis voluptatibus eum odit, soluta adipisci veniam? Cupiditate iure ipsa consequuntur asperiores? Facere harum aliquam iste ad in vitae non molestiae cumque.
          </p>
          <p className='dark:text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, temporibus molestias. Vero atque at cum perferendis repudiandae beatae laudantium consequatur.
          </p>
        </div>
        <div>
          <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={design} width={100} height={100}/>
            <h3 className=' text-lg font-medium pt-8 pb-2 '>Beautiful Design</h3>
            <p className=' py-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores laboriosam perferendis iure perspiciatis ipsam vitae qui corporis illum nemo!
            </p>
            <h4 className=' text-teal-600 py-4'>Tools I Use</h4>
            <p className=' text-gray-800 py-1'>Figma</p>
            <p className=' text-gray-800 py-1'>Adobe</p>
            <p className=' text-gray-800 py-1'>Illustrator</p>
          </div>
          <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={consulting} width={100} height={100}/>
            <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Consulting</h3>
            <p className=' py-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores laboriosam perferendis iure perspiciatis ipsam vitae qui corporis illum nemo!
            </p>
            <h4 className=' text-teal-600 py-4'>Tools I Use</h4>
            <p className=' text-gray-800 py-1'>Figma</p>
            <p className=' text-gray-800 py-1'>Adobe</p>
            <p className=' text-gray-800 py-1'>Illustrator</p>
          </div>
          <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={code} width={100} height={100}/>
            <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Code</h3>
            <p className=' py-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores laboriosam perferendis iure perspiciatis ipsam vitae qui corporis illum nemo!
            </p>
            <h4 className=' text-teal-600 py-4'>Tools I Use</h4>
            <p className=' text-gray-800 py-1'>Figma</p>
            <p className=' text-gray-800 py-1'>Adobe</p>
            <p className=' text-gray-800 py-1'>Illustrator</p>
          </div>
        </div>
       </section>
       <section>
        <div>
          <h3 className=' text-3xl py-1 dark:text-white'>Portfolio</h3>
          <p className=' text-md text-gray-800 py-2 leading-6 dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur culpa molestiae excepturi voluptatem recusandae repudiandae nemo ullam omnis voluptatibus eum odit, soluta adipisci veniam? Cupiditate iure ipsa consequuntur asperiores? Facere harum aliquam iste ad in vitae non molestiae cumque.
          </p>
          <p className='dark:text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, temporibus molestias. Vero atque at cum perferendis repudiandae beatae laudantium consequatur.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive" 
              src={web1} />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive" 
            src={web2} />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
             className="rounded-lg object-cover"
             width={"100%"}
             height={"100%"}
             layout="responsive"
             src={web3} />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web4} />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image 
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web5} />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image 
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web6} />
          </div>
        </div>
       </section>
      </main>
    </div>
  )
}
