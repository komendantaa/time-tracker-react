import React from 'react';

import Header from './header/Header';
import Menu from './menu/Menu';

class Main extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="row">
          <Header {...this.props}/>
          <Menu />
          {children}
        </div>
      </main>
    );
  }
}

export default Main;
