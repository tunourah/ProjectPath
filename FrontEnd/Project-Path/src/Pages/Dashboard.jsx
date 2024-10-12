
import Nav from '../Component/Nav';
function Dashboard() {
  return <>
  <section className='w-full flex '>
  <Nav/>
  <section className="p-8 w-4/5">
  <h2 className='font-bold text-2xl'>UserName</h2>
  <div className='flex justify-around '>
    <div className="w-[350px] rounded-md border-solid border-2 border-[#26dec6]">
    <img src="https://i.ibb.co/R4G2WJ2/student.jpg" alt="" srcset="" className='w-'/>
    <h2 className='font-bold text-2xl'>Projects</h2>
    </div>
    <div className="w-[350px] rounded-md ">
    <img src="https://i.ibb.co/R4G2WJ2/student.jpg" alt="" srcset="" />
    <h2 className='font-bold text-2xl'>Students</h2>
    </div>
  </div>
  </section>
  </section>
  </>;
}

export default Dashboard;
