import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheet';

function App() {
  return (
    <div className="App">
      <MarksSheet studentName="Ravi" telMarks="94" engMarks="96" hinMarks="85" mathsMarks="92" sciMarks="94" socMarks="98"></MarksSheet>
      <MarksSheet studentName="Prasad" telMarks="92" engMarks="90" hinMarks="84" mathsMarks="78" sciMarks="32" socMarks="89"></MarksSheet>
      <MarksSheet studentName="Manikanta" telMarks="84" engMarks="86" hinMarks="34" mathsMarks="72" sciMarks="16" socMarks="96"></MarksSheet>
      <MarksSheet studentName="Durga Prasad" telMarks="88" engMarks="93" hinMarks="77" mathsMarks="85" sciMarks="81" socMarks="87"></MarksSheet>
      <MarksSheet studentName="Sai" telMarks="94" engMarks="96" hinMarks="22" mathsMarks="92" sciMarks="94" socMarks="98"></MarksSheet>
    </div>
  );
}

export default App;
