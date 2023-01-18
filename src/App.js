import Card from './Component/Card';
import Footer from './Component/Footer';
import Nav_v from './Component/Nav';
import BasicExample from './Component/Nav';

function App() {
  return (
    <>
      <Nav_v />
      <div className='container mt-5'>
        <div className='h_v'>
          <span>Doddapaneni Vinay Singh</span>
        </div>
        <p className='mt-5 mb-5'>A dedicated and energetic individual seeking to join an organization as a software engineer to
          contribute to greater society by helping deliver quality software while applying technical and
          interpersonal skills.</p>
        <div className='row'>
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
