import React, { useEffect, useState } from 'react';
const Second: React.FC = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    console.log('최초');
  }, []);
  return (
    <div>
      <div>{test}</div>
      <button onClick={() => setTest(test + 1)}>버튼</button>
    </div>
  );
};

export default Second;
