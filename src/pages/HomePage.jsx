import HeroImage from '../assets/images/hero.svg'
import AboutImage from '../assets/images/about.svg'

import Project1 from '../assets/images/proyek-1.webp'
import Project2 from '../assets/images/proyek-2.webp'
import Project3 from '../assets/images/proyek-3.webp'
import Project4 from '../assets/images/proyek-4.webp'
import Project5 from '../assets/images/proyek-5.webp'

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Rijal Azhar Dwi <span className="font-bold text-sky-400 underline">Ardani</span></h1>
            <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium obcaecati? Sint quasi deleniti voluptatum distinctio molestiae consequatur iste. Dolore tempora quae expedita nemo iure temporibus, velit ut maxime sequi.</p>
            <a href="#about" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
              Tentang Saya <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0"/>
          </div>
        </div>
        
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id="about">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto"/>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Rijal Azhar Dwi <span className="font-bold text-sky-400 underline">Ardani</span></h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium obcaecati? Sint quasi deleniti voluptatum distinctio molestiae consequatur iste. Dolore tempora quae expedita nemo iure temporibus, velit ut maxime sequi.</p>
          </div>
        </div>

        <div className="experiences pt-32" id="experiences">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Experiences</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti enim eius in voluptas voluptates pariatur eos nostrum commodi tempore odio!</p>
          <div className="experiences-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Experiences 1</h3>
              <p className="text-white text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur possimus excepturi qui fuga animi optio, natus eum iusto repellendus praesentium.</p>
            </div>
            <div className="box  bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Experiences 2</h3>
              <p className="text-white text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur possimus excepturi qui fuga animi optio, natus eum iusto repellendus praesentium.</p>
            </div>
            <div className="box  bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Experiences 3</h3>
              <p className="text-white text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur possimus excepturi qui fuga animi optio, natus eum iusto repellendus praesentium.</p>
            </div>
          </div>
        </div>

        <div className="project pt-20" id="project">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Project</h1>
          <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, voluptatem.</p>
          <div className="project-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img src={Project1} alt="Proyek Image" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 1</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit dolore illum! Ad, quidem facilis!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Project2} alt="Proyek Image" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 2</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit dolore illum! Ad, quidem facilis!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Project3} alt="Proyek Image" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 3</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit dolore illum! Ad, quidem facilis!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Project4} alt="Proyek Image" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 4</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit dolore illum! Ad, quidem facilis!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Project5} alt="Proyek Image" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 5</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit dolore illum! Ad, quidem facilis!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage