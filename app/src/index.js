import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import Recorder from './components/Recorder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      // eslint-disable-next-line react/no-unused-state
      audioText: 'click the microphone to record some audio!',
      // eslint-disable-next-line react/no-unused-state
      audioBlob: null,
    };
  }

  handleLoading = () => {
    if (this.state.loading) {
      return <CircularProgress color="secondary" />;
    }
    return <Recorder microphoneStarted={this.microphoneStarted} sendAudioBlob={this.getAudioBlob} />;
  }

microphoneStarted = () => {
  this.setState({
    // eslint-disable-next-line react/no-unused-state
    audioText: 'listening...',
  });
}

getAudioBlob = (blob) => {
  this.setState({
    // eslint-disable-next-line react/no-unused-state
    audioBlob: blob,
  });
  this.sendRequest();
}

sendRequest = () => {
  console.log('sending a request to IBM...');
}

render() {
  return (
    <div className="container">
      {this.handleLoading()}
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('main'));
