import aboutImg from '../asset/about.svg'

const About2 = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto '>
        <div className='flex felx-col md:flex-row justify-between items-center gap-20   '>
            <div className=' p-14 md:w-1/2'>
                <img src={aboutImg} alt='about'/> 
            </div>
            <div className='md:w-1/2'>
                <h3 className='text-3xl md:text-4xl text-primary dark:text-secondary font-bold lg:w-1/2 mb-5 leading-normal '>About Me</h3>
                <p className=' text-lg mb-7 text-third'> I am Amanuel Tegegne, a dedicated Full Stack Developer with a strong
            foundation in software engineering from Wollo University. My
            expertise lies in the MERN stack (MongoDB, Express.js, React, and
            Node.js), and I have experience working with ORM tools for
            PostgreSQL and MySQL. I specialize in both front-end and back-end
            development, creating seamless web applications.Additionally, I
            possess a solid understanding of UX/UI principles, which allows me
            to enhance the overall user experience in my projects.</p>
                </div>
        </div>
    </div>
  )
}

export default About2