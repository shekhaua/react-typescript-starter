import React from 'react';
import './PageLayout.css';

const PageLayout: React.FC = ({ children }) => {
  return <div id="layout-wrapper">{children}</div>;
};

export default PageLayout;
