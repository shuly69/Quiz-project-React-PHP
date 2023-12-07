function Result({ resultNum, nextStep, result, setProgress, setResultNum }) {
  return (
    <div className='result'>
      <h3 className='result__title'>Поздравляем!</h3>
      <p className='result__text'>Вы набрали {resultNum} из 3</p>
      <button
        className='result__button'
        onClick={() => {
          nextStep(0);
          result(false);
          setProgress(0);
          setResultNum(0);
        }}
      >
        Начать заново
      </button>
    </div>
  );
}

export default Result;
