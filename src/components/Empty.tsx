import React from 'react';
import './Empty.css';

interface Props {
  name: string;
}

const EmptyFC: React.FC<Props> = ({ name }) => {
  return <div>Empty component</div>;
};

export default EmptyFC;

class EmptyClass extends React.Component<Props> {
  render() {
    return <div>Empty component</div>;
  }
}

// export default EmptyClass;
