import BodyComponent from './components/BodyComponent/BodyComponent'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <div className="container mx-auto">
        {/* header Section */}
        <section >
          <div className='poppins'>
            <Navbar></Navbar>
          </div>
          <div className='sora'>
            <Header></Header>
          </div>
        </section>

        {/* Body Section */}
        <section className='bg-[#EBF0F5] py-32 sora'>
          <BodyComponent></BodyComponent>
        </section>

        {/* footer Section */}
        <section className='sora'>
          <Footer></Footer>
        </section>
      </div>
    </>
  )
}

export default App