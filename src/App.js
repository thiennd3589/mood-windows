import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { firestore } from './firebase/firebase.utils';

import SoundWave from './component/sound-wave/sound-wave.component';
import VideoContainer from './component/video-container/video-container.component';
import Navigation from './component/nav-bar/nav-bar.component';
import { gifSelect } from './redux/search/search.selector';






class App extends React.PureComponent {

  componentDidMount() {
    // const {searchDefault} = this.props;
    // searchDefault();
    

  }


  render() {
    const { gif } = this.props;


    const style = {
      backgroundImage: `url(${gif.url})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };


    return (
      <div className="App">
        <div className='bg-image' style={style}></div>
        <Navigation />
        <TransitionGroup className='gif'  >
          <CSSTransition key={Math.random() * 1000} classNames='example' timeout={{ enter: 1000, exit: 1000 }} >
            <VideoContainer />
          </CSSTransition>
        </TransitionGroup>
        <SoundWave />
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  gif: gifSelect
})

export default connect(mapStateToProps)(App);
