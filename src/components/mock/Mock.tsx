import React from 'react';
import { connect } from 'react-redux';

import './Mock.css';

import { fetchMockData } from '../../actions';

interface Props {
  data: any;
  fetchMockData: any;
}

class MockComponent extends React.Component<Props> {
  componentDidMount(): void {
    this.props.fetchMockData();
  }

  render() {
    return <div>{JSON.stringify(this.props.data)}</div>;
  }
}

function mapStateToProps({ mocks /* , ownProps */ }: any) {
  return {
    data: mocks.all,
  };
}
export default connect(mapStateToProps, { fetchMockData })(MockComponent);
