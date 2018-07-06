import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Information!</h1>
      <p>The info is {props.info}</p>
  </div>
);

/*
const withAdminWarn = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This shows if isAdmin is true</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};
*/
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ?
      ( <WrappedComponent {...props}/> ) :
      ( <h1> DENIED! Login, bitch. </h1> )}
    </div>
  )
};

//const AdminInfo = withAdminWarn(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="much crazy" />, document.getElementById('app'))

ReactDOM.render(<AuthInfo isAuthenticated={true} info="much crazy" />, document.getElementById('app'))
