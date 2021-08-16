import * as React from 'react';
import Blob from './svg/Blob';

interface Props {
    children: React.ReactNode,
}

const Wrapper: React.FunctionComponent<Props> = (props:Props) => {
  const { children } = props;
  return (
    <div>
      <Blob />
      {children}
    </div>
  );
};

export default Wrapper;
