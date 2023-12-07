function Progress({ progress }) {
  return (
    <div
      className='card__progress--result'
      style={{ width: +progress + '%' }}
    ></div>
  );
}

export default Progress;
