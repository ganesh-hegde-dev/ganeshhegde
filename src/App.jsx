import Experience from './Experince'
import './App.css'
import Banner from './Banner'
import Skill from './Skil'

function App() {
  const skills = [
    {
      skillName: "MongoDB",
      skillDescription: "Skilled in using MongoDB for efficient data storage, querying, and management in NoSQL environments.",
      skillImage: "https://media.licdn.com/dms/image/D4D12AQETgv5fMiYEXA/article-cover_image-shrink_720_1280/0/1677609185621?e=2147483647&v=beta&t=4Hu56lmQmUTtVSMFDKfipqVq9U1jo41sIJpib0lQoCo"
    },
    {
    skillName: "Express",
    skillDescription: "Skilled in building robust backend applications with Express, creating efficient APIs and handling middleware.",
    skillImage: "https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA"
  },
  
  {
    skillName: "Angular",
    skillDescription: "Experienced in building enterprise-level applications with Angular, focusing on scalability, performance, and maintainable code.",
    skillImage: "https://www.insystechnologies.in/images/a8.png"
  },
  {
    skillName: "React JS",
    skillDescription: "Experienced in building dynamic user interfaces with React, utilizing state management and component-based architecture.",
    skillImage: "https://nordicapis.com/wp-content/uploads/A-Short-Guide-What-Types-of-Apps-Can-Be-Built-With-React.png"
  },{
    skillName: "Node.JS",
    skillDescription: "Experienced in developing server-side applications with Node.js, utilizing asynchronous event-driven architecture for high performance.",
    skillImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw_2cNT1EMdE5IZudq2wji72uEPhih5KV4g&s"
  }]

  return (<>
  <div className='bg'>
  <Banner/>
  <h2 className='tech-heading'>Tech Stack</h2>
  <div className='tech'>
    {skills.map((skill)=>{ return <Skill key={skill.skillName} {...skill}/>} )}
  </div>
 
  <div className='experience'>
  <h2 className='exp-heading p3'>Experience</h2>
    <Experience/>
  </div>
  </div>

 
</>)
}

export default App
