import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
  return (
    <div
      className="Counter"
      onClick={() => onIncrement(index)}
      onContextMenu={(e) => { //onContextMenu : 오른쪽 마우스 눌렀을때 메뉴가 열리는 이벤트
        e.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={() => onSetColor(index)}
      style={{
        backgroundColor: color
      }}
    >
      {number}      
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

Counter.defaultProps = {
  index:0,
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defiend'),
  onDecrement: () => console.warn('onDecrement not defiend'),
  onSetColor: () => console.warn('onSetColor not defiend')
};

export default Counter;