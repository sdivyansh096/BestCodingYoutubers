import './App.css';
import Youtubers from './components/Youtubers';
import reviews from './data';

function App() {
  return (
    <div className="flex flex-col w-[100vw] min-h-[100vh] justify-center items-center bg-gray-200 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold"> Best Coding Youtubers</h1>
      </div>
    <div className="bg-green-500 h-[4px] w-1/5 mt-1 mx-auto"></div>
     <Youtubers reviews={reviews}/>
    </div>
  );
}

export default App;
