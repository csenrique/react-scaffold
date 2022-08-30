import React from 'react';
import ReactDOM from 'react-dom/client';





class App extends React.Component {
  
  render() {
    //console.log(valor);

    return(
      <React.Fragment>
    <h1>Hola React!!!!!!</h1>
    <h2>Hola denuevo</h2>  
    </React.Fragment>
      );
  }
}

//const useState = React.useState;

function Contador() {

  const [valor, funcion] = React.useState(32);

  return (
    <div>
      <span>{valor}</span>
    </div>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App /> 
      {/* <OtroSaludo />   */}
      <Contador />
    </React.StrictMode>
  );

//render(<App />, document.getElementById('app'));
