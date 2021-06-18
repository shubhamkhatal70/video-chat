import React from 'react';

const MessageDisplayer = (props) => {
  return (
    <div className='message_displayer'>
      {props.message}
    </div>
  );
};

export default MessageDisplayer;
