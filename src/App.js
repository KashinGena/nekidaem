import logo from './logo.svg';
import './App.css';
import Column from './components/Column/Column';

 const tasks ={
   'ON_HOLD':[{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"}],
   'IN_PROGRESS':[{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"}],
   'NEEDS_REVIEW':[{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"}],
   'APPROVED':[{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"}]
 }
 
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app__inner">
          <Column title="ON-HOLD" color='#fb7e46' tasks={tasks['ON_HOLD']}/>
          <Column title="IN-PROGRESS" color='#2a92bf' tasks={tasks['IN_PROGRESS']}/>
          <Column title="NEEDS-REVIEW" color='#f4ce46' tasks={tasks['NEEDS_REVIEW']}/>
          <Column title="APPROVED" color='#00b961' tasks={tasks['NEEDS_REVIEW']}/>
        </div>
      </div>

    </div>
  );
}

export default App;
