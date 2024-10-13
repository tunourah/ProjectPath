import { Link } from "react-router-dom";
import Nav from '../Component/Nav';
import StudentCard from '../Component/StudentCard'
function Dashboard() {
  return <>
  <section className='w-full flex '>
  <Nav/>
  <section className="p-8 md:w-4/5 xs:w-full">
  <h2 className='font-bold text-2xl p-5'>UserName</h2>
  <div className='flex justify-around flex-wrap gap-2 '>
    <Link to="">
    
    <StudentCard descrptn={""} title={"Projects"} img={"https://i.ibb.co/sF0S9qt/project.png"} />

    </Link>
    <Link to="">
    <StudentCard descrptn={""} title={"Students"} img={"https://i.ibb.co/rZN4dHG/student-1.png"} />

    </Link>
  </div>
  </section>
  </section>
  </>
}

export default Dashboard;
