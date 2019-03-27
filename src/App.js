import React, { Component } from 'react';
import Addasset from './components/addasset.js';
import Add1 from './components/add1.js';
import Add2 from './components/add2.js';
import Claim1 from './components/claim1.js';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      addasset: {},
      add1: {},
      add2: {}
    }

    this.addInfo = this.addInfo.bind(this);
    this.backStep = this.backStep.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  goNext(data, page) {
    this.setState({step: this.state.step + 0.1, [page]: data});
  }

  addInfo(data, type) {
    this.setState({addasset: data, step: type});
  }

  backStep() {
    if (this.state.step === 1 || this.state.step === 2) {
      this.setState({step: 0});
    }
    if (this.state.step % 1 !== 0) {
      this.setState({step: this.state.step - 0.1});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="modal_backdrop">
          {!this.state.step && <Addasset addinfo={this.addInfo} data={this.state.addasset}/>}
          {this.state.step === 1 && <Add1 goback={this.backStep} gonext={this.goNext} data={this.state.add1}/>}
          {this.state.step === 1.1 && <Add2 goback={this.backStep} gonext={this.goNext} data={this.state.add2}/>}



          {this.state.step === 2 && <Claim1 goback={this.backStep} />}
        </div>
      </div>
    );
  }
}

export default App;
