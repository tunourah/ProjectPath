import Nav from '../Component/Nav';
import Card from '../Component/Card';

function Dashboard() {
  return (
    <>
      <section className='w-full flex'>
        <Nav />
        <section className="p-8 md:w-4/5 xs:w-full">
          <h2 className='font-bold text-2xl p-5'>UserName</h2>
          <div className='flex justify-around flex-wrap gap-2'>
            <Card 
              title="Projects" 
              imgSrc="https://i.ibb.co/rtzrftR/students.jpg" 
              link="/projects"
            />
            <Card 
              title="Students" 
              imgSrc="https://i.ibb.co/R4G2WJ2/student.jpg" 
              link="/students"
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Dashboard;
