
import Nav from '../Component/Nav';
function Dashboard() {
  return <>
  <section className='w-full flex '>
  <Nav/>
  <section className="p-8">
  <h2 className='font-bold text-2xl'>UserName</h2>
  <div className='flex justify-around'>
    <div className="w-2/6 rounded-md border-solid border-2 border-[#26dec6]"></div>
    <div className="w-2/6 rounded-md"></div>
  </div>
  </section>
  </section>
  </>
}

export default Dashboard;
