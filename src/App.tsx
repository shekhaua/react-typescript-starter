import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import { PageLayout } from './shared/components/page-layout';
import { HomeComponent } from './components/home';
import { MockComponent } from './components/mock';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/mock" exact component={MockComponent} />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
