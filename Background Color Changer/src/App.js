import './App.css';

function App() {

  const handelfunction=(e)=>{
    const body=document.querySelector('body');
    body.style.background=getcolor();
    e.target.style.background=getcolor();
  }

  function getcolor(){
    let letter='0123456789ABCDEF';
    let color='#';

    for(let i=0; i<6; i++){
      color+=letter[Math.floor(Math.random()*16)];
    }
    return color;
  }

  return (
    < >
        <div className='container'>
          <h1>Random Background Changer</h1>
          <button className='btn' onClick={handelfunction}>Click me </button>
        </div>
    </>
  );
}

export default App;
