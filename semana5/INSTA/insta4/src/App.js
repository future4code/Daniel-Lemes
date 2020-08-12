import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Daniel from "./img/daniel.jpg";
import Lucas from "./img/lcm.png";
import Inventar from "./img/inventar.png";
class App extends React.Component {
  render () {
    return (
      <div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Daniel'}
            fotoUsuario={ Daniel } 
            fotoPost={Inventar}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Lucas'}
            fotoUsuario={Lucas}
            fotoPost={Lucas}
          />
        </div>

      </div>

    );
  }
}

export default App;
