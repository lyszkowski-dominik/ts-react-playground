import React from 'react';

interface AppProps {
  color?: string;
}

const Func = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};

export default Func;
