import React, { Component } from 'react';
import Addasset from './components/addasset.js';
import Add1 from './components/add1.js';
import Add2 from './components/add2.js';
import Add3 from './components/add3.js';
import Add4 from './components/add4.js';
import Claim1 from './components/claim1.js';
import Claim2 from './components/claim2.js';
import Claim3 from './components/claim3.js';
import Claim4 from './components/claim4.js';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      addasset: {},
      add1: {},
      add2: {},
      add3: {},
      add4: {},
      addsummarydata: {},
      claim1: {},
      claim2: {},
      claim3: {},
      claim4: {},
      claimsummarydata: {}
    }

    this.addInfo = this.addInfo.bind(this);
    this.backStep = this.backStep.bind(this);
    this.goNext = this.goNext.bind(this);
    this.skipStep = this.skipStep.bind(this);
    this.getAddSummary = this.getAddSummary.bind(this);
    this.getClaimSummary = this.getClaimSummary.bind(this);
  }

  goNext(data, page) {
    // Need this to fix the decimal because floating point numbers make computers upset
    // console.log(data);
    // console.log(page);
    console.log(this.state);
    let fixednumber = Number((this.state.step + 0.1).toFixed(1));
    this.setState({step: fixednumber, [page]: data});
  }

  addInfo(data, type) {
    this.setState({addasset: data, step: type});
    //console.log(data);
  }

  backStep() {
    if (this.state.step === 1 || this.state.step === 2) {
      this.setState({step: 0});
    }
    if (this.state.step % 1 !== 0) {
      // Need this to fix the decimal because floating point numbers make computers upset
      let fixednumber = Number((this.state.step - 0.1).toFixed(1));
      this.setState({step: fixednumber});
    }
  }

  skipStep() {
    //Same as next, just no data save
    let fixednumber = Number((this.state.step + 0.1).toFixed(1));
    this.setState({step: fixednumber});
  }

  getAddSummary() {
    let summarydata = {
      'State': this.state.addasset.addasset.State,
      'address': this.state.addasset.addasset.address,
      'apns': this.state.addasset.addasset.apns,
      'assetname': this.state.addasset.addasset.assetname,
      'address': this.state.addasset.addasset.address,
      'city': this.state.addasset.addasset.city,
      'county': this.state.addasset.addasset.county,
      'note': this.state.addasset.addasset.note,
      'type': this.state.addasset.addasset.type,
      'aquisition': this.state.add1.aquisition,
      'purchaseprice': this.state.add1.purchaseprice,
      'holding': this.state.add1.currentholding,
      'operating': this.state.add1.currentoperating
    }
    this.setState({
      addsummarydata: summarydata
    })
  }

  getClaimSummary() {
    //console.log(this.state);
    let summarydata = {
      'State': this.state.addasset.addasset.State,
      'address': this.state.addasset.addasset.address,
      'apns': this.state.addasset.addasset.apns,
      'assetname': this.state.addasset.addasset.assetname,
      'address': this.state.addasset.addasset.address,
      'city': this.state.addasset.addasset.city,
      'county': this.state.addasset.addasset.county,
      'note': this.state.addasset.addasset.note,
      'type': this.state.addasset.addasset.type,
      'aquisition': this.state.claim2.aquisition,
      'purchaseprice': this.state.claim2.purchaseprice,
      'holding': this.state.claim2.currentholding,
      'operating': this.state.claim2.currentoperating
    }
    this.setState({
      claimsummarydata: summarydata
    })
  }

  render() {
    //console.log(this.state);
    return (
      <div className="App">
        <div className="modal_backdrop">
          {!this.state.step && <Addasset addinfo={this.addInfo} data={this.state.addasset}/>}

          {this.state.step === 1 && <Add1 goback={this.backStep} gonext={this.goNext} data={this.state.add1}/>}
          {this.state.step === 1.1 && <Add2 goback={this.backStep} gonext={this.goNext} data={this.state.add2}/>}
          {this.state.step === 1.2 && <Add3 goback={this.backStep} gonext={this.goNext} data={this.state.add3} skipstep={this.skipStep}/>}
          {this.state.step === 1.3 && <Add4 goback={this.backStep} data={this.state.add4} getsummary={this.getAddSummary} summarydata={this.state.addsummarydata}/>}

          {this.state.step === 2 && <Claim1 goback={this.backStep} gonext={this.goNext}/>}
          {this.state.step === 2.1 && <Claim2 goback={this.backStep} gonext={this.goNext} data={this.state.claim2}/>}
          {this.state.step === 2.2 && <Claim3 goback={this.backStep} gonext={this.goNext} data={this.state.claim3}/>}
          {this.state.step === 2.3 && <Claim4 goback={this.backStep} data={this.state.claim4} getsummary={this.getClaimSummary} summarydata={this.state.claimsummarydata}/>}
        </div>
      </div>
    );
  }
}

export default App;
