import { useSelector } from "react-redux";
import { selectCounter, selectStep } from "../../redux/counter/selector";
import s from "./Counter.module.css";

export const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const handlePlusClick = () => {};
  const handleMinusClick = () => {};
  const handleResetClick = () => {};
  const handleChangeStep = () => {};
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1> {counter} </h1>
        <input value={step} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button onClick={handleMinusClick}>minus</button>
          <button onClick={handleResetClick}>reset</button>
          <button onClick={handlePlusClick}>plus</button>
        </div>
      </div>
    </div>
  );
};
