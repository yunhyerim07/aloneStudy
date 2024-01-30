import { useEffect, useState } from 'react';
import Warn from './Warn';

export default function App() {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // mount 시점, deps update 시점에 실행할 작업 (componentDidMount)
    let timer:number;
    if (text.length === 0) {
      setIsValid(true);
    } else {
      timer = setTimeout(() => {
        console.log('[effect] 유효성 검사중..');
        setIsValid(text.trim().length >= 10);
      }, 500);
    }
    return () => {
      // unmount 시점, deps update 직전에 실행할 작업(componentWillUnmount)
      console.log('[cleanup]');
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <>
      <form>
        <textarea
          name="text"
          value={text}
          type="text"
          placeholder="10자 이상 작성하세요"
          onChange={textChangeHandler}
          onBlur={() => setIsValid(true)}
        />
        <button type="button">확인</button>
      </form>
      {!isValid && <Warn />}
    </>
  );
}
