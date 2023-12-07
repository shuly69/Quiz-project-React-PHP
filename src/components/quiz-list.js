import { useEffect, useState } from 'react';
import Progress from './progress-bar';
import QuizItem from './quiz-item';
import Result from './result';

function QuizList({
  nextStep,
  currentStep,
  progress,
  setProgress,
  result,
  setResult,
  dataItem,
}) {
  const [resultNum, setResultNum] = useState(0);

  const nextStepElement = () => {
    setProgress((progress += 33.33));
    nextStep((currentStep += 1));
    if (currentStep == 3) {
      setResult(true);
    }
  };
  let step = dataItem[currentStep];
  let correct = step && step.correct;
  return (
    <div className='card'>
      <div className='card__progress'>
        <Progress progress={progress} />
      </div>
      <h3 className='card__title'>{step && step.question}</h3>
      {step && (
        <ul className='card__wrapper'>
          {step.variants.map((item, key) => {
            return (
              <QuizItem
                currentStep={currentStep}
                nextStepElement={nextStepElement}
                key={key}
                resultNum={resultNum}
                setResultNum={setResultNum}
                correct={correct}
              >
                {item}
              </QuizItem>
            );
          })}
        </ul>
      )}
      {result && (
        <Result
          resultNum={resultNum}
          nextStep={nextStep}
          result={setResult}
          setProgress={setProgress}
          setResultNum={setResultNum}
        />
      )}
    </div>
  );
}

export default QuizList;
