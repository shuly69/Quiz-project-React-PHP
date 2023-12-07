import { useEffect, useState } from 'react';
import './App.css';
import QuizList from './components/quiz-list';

function App() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(false);
  const [dataItem, setDataItem] = useState([]);
  useEffect(() => {
    fetch('http://localhost/react-php/backend/get-api-quiz')
      .then((response) => response.json())
      .then((json) => setDataItem(json));
  }, []);
  return (
    <div className='App'>
      <QuizList
        dataItem={dataItem}
        currentStep={step}
        nextStep={setStep}
        progress={progress}
        setProgress={setProgress}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
