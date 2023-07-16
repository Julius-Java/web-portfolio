import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai"
import image from "../public/assets/dev-ed-wave.png"
import code from "../public/assets/code.png"
import consulting from "../public/assets/consulting.png"
import web1 from "../public/assets/web1.png"
import web2 from "../public/assets/web2.png"
import web3 from "../public/assets/web3.png"
import web4 from "../public/assets/web4.png"
import web5 from "../public/assets/web5.png"
import { useState, useEffect } from "react"

export const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const elements = document.documentElement;

    switch (darkMode) {
      case true:
        elements.classList.add("dark")
        break;
      case false:
        elements.classList.remove("dark")
        break;
      default:
        break;
    }
  }, [darkMode])

  const themeToggle = darkMode ? (<BsFillSunFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-lg md:text-2xl dark:text-white" />) : (<BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-lg md:text-2xl dark:text-white" />)


  return (
    <main className="min-h-screen transition-colors duration-200 bg-white dark:bg-gray-800 px-5 sm:px-10 md:px-20 lg:px-40">
      <nav className="py-5 mb-12 flex items-center justify-end">
        <h1 className="mr-auto text-lg sm:text-2xl font-burtons dark:text-white">Julius~Java</h1>
        <ul className="flex items-center">
          <li>{themeToggle}</li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-2 rounded-md ml-3 sm:ml-8" href="">Resume</a></li>
        </ul>
      </nav>

      <section className="py-5 sm:py-10 text-center">
        <h2 className="mb-3 text-3xl text-teal-600 font-medium sm:text-5xl md:text-6xl">Julius Emmanuel</h2>
        <h3 className="mb-3 text-lg font-semibold dark:text-white md:text-3xl">Front End Web Developer</h3>
        <p className="text-md leading-8 text-gray-800 dark:text-white md:text-lg max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse omnis odio, dolorum laboriosam dicta.</p>
      </section>

      <section className="text-3xl sm:text-5xl flex justify-center dark:text-white gap-8 sm:gap-16 py-3 text-gray-600 mb-3">
        <AiFillGithub className="cursor-pointer" />
        <AiFillTwitterCircle className="cursor-pointer" />
        <AiFillLinkedin className="cursor-pointer" />
      </section>

      <section className="relative bg-gradient-to-b from-teal-500 rounded-full w-48 h-48 sm:w-80 sm:h-80 sm mx-auto overflow-hidden mb-4">
        <img src={image} className="object-cover w-full h-full" alt="" />
      </section>

      <section className="dark:text-white">
        <article className="mb-2">
          <h4 className="text-3xl font-semibold">Services</h4>
          <p className="text-md leading-8 text-gray-800 mb-3 dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quisquam sequi hic quibusdam asperiores dolorem voluptas animi possimus alias qui.</p>

          <p className="text-md leading-8 text-gray-800 mb-3 dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, reprehenderit!</p>
        </article>

        <div className="flex flex-col gap-5 md:flex md:flex-row md:gap-10">
          <div className="text-center shadow-xl p-5 sm:p-10 rounded-xl my-5 sm:my-10 dark:bg-white dark:text-gray-800">
            <img src={code} width={100} height={100} className="mb-3 mx-auto" alt="" />
            <h3 className="mb-2 font-medium">Lorem, ipsum dolor.</h3>
            <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi.</p>
            <h4 className="mb-2 text-teal-600 font-semibold">Tools</h4>
            <p className="text-gray-800 mb-2">VS Code</p>
            <p className="text-gray-800 mb-2">Git</p>
            <p className="text-gray-800 mb-2">GitHub</p>
          </div>
          <div className="text-center shadow-xl p-5 sm:p-10 rounded-xl my-5 sm:my-10 dark:bg-white dark:text-gray-800">
            <img src={consulting} width={100} height={100} className="mb-3 mx-auto" alt="" />
            <h3 className="mb-2 font-medium">Lorem, ipsum dolor.</h3>
            <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi.</p>
            <h4 className="mb-2 text-teal-600 font-semibold">Tools</h4>
            <p className="text-gray-800 mb-2">VS Code</p>
            <p className="text-gray-800 mb-2">Git</p>
            <p className="text-gray-800 mb-2">GitHub</p>
          </div>
        </div>
      </section>

      <section>
        <article>
          <h3 className="text-3xl font-semibold dark:text-white">Portfolio</h3>
          <p className="text-md leading-8 text-gray-800 mb-3 dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quisquam sequi hic quibusdam asperiores dolorem voluptas animi possimus alias qui.</p>
        </article>

        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:gap-10">
          <div className="basis-1/3 flex-1"><img src={web1} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt="" /></div>
          <div className="basis-1/3 flex-1"><img src={web2} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt="" /></div>
          <div className="basis-1/3 flex-1"><img src={web3} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt="" /></div>
          <div className="basis-1/3 flex-1"><img src={web4} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt="" /></div>
          <div className="basis-1/3 flex-1 mb-5"><img src={web5} className="rounded-lg object-cover" width={"100%"} height={"100%"} alt="" /></div>
        </div>
      </section>
    </main>
  )
}
