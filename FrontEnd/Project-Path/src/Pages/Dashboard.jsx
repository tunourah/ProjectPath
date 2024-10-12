import { Link } from "react-router-dom";
import Nav from '../Component/Nav';
function Dashboard() {
  return <>
  <section className='w-full flex '>
  <Nav/>
  <section className="p-8 md:w-4/5 xs:w-full">
  <h2 className='font-bold text-2xl p-5'>UserName</h2>
  <div className='flex justify-around flex-wrap gap-2 '>
    <Link to="">
    <div className="w-[330px] h-[180px] rounded-md border-solid border-2 border-[#26dec6] pr-5 flex items-center justify-center">
    <img src="https://i.ibb.co/rtzrftR/students.jpg" alt="" srcset="" className='w-1/5 pb-12'/>
    <h2 className='font-bold text-4xl'>Projects</h2>
    </div>
    </Link>
    <Link to="">
    <div className="w-[330px] h-[180px] rounded-md border-solid border-2 border-[#26dec6] pr-5 flex items-center justify-center">
    <img src="https://i.ibb.co/R4G2WJ2/student.jpg" alt="" srcset="" className='w-1/5 pb-12'/>
    <h2 className=' font-bold text-4xl'>Students</h2>
    </div>
    </Link>
  </div>
  </section>
  </section>
  </>;
}

export default Dashboard;
