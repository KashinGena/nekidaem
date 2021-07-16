import logo from './logo.svg';
import './App.css';
import Column from './components/ColumnHeader/Column';


function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app__inner">
          <Column title="ON-HOLD" color='#fb7e46'/>
          <Column title="IN-PROGRESS" color='#2a92bf'/>
          <Column title="NEEDS-REVIEW" color='#f4ce46'/>
          <Column title="APPROVED" color='#00b961'/>
        </div>
      </div>

    </div>
  );
}

export default App;
