import * as React from 'react';
import Blob from './svg/Blob';
import BlobLines from './svg/BlobLines';

interface Props {
    children: React.ReactNode,
    select: boolean
}

const Wrapper: React.FunctionComponent<Props> = (props:Props) => {
  const { children, select } = props;
  return (
    <div>
      <Blob />
      {children}
      {!select && <BlobLines />}
    </div>
  );
};

export default Wrapper;
