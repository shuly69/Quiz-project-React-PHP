function QuizItem({
  children,
  nextStepElement,
  correct,
  setResultNum,
  resultNum,
}) {
  return (
    <li
      onClick={(event) => {
        nextStepElement();
        if (correct === event.target.textContent) {
          setResultNum((resultNum += 1));
        }
      }}
      className='card__items'
    >
      {children}
    </li>
  );
}

export default QuizItem;
