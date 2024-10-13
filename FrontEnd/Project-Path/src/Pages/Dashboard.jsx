import Nav from '../Component/Nav';
import StudentCard from '../Component/StudentCard'
function Dashboard() {
  return <>
  <section className='w-full flex '>
  <Nav/>
  <section className="p-8 md:w-4/5 xs:w-full">
  <h2 className='font-bold text-2xl p-5'>UserName</h2>
  <div className='flex justify-around flex-wrap gap-2 '>
    
    
    <StudentCard descrptn={""} title={"Projects"} img={"https://i.ibb.co/sF0S9qt/project.png"} link={"/tablestd"}/>

   
    <StudentCard descrptn={""} title={"Students"} img={"https://i.ibb.co/rZN4dHG/student-1.png"} link={"/tablestd"} />

    
  </div>
  </section>
  </section>
  </>
}

export default Dashboard
