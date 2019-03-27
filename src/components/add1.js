import React, { Component } from 'react';
import Ohdrop from './ohdrop.js';

class Add1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        show: 0,
        type: "",
        aquisition: "",
        purchaseprice: "",
        terms: "All Cash - no PMF",
        operating: [],
        holding: [],
        currentoperating: "Operating Company",
        currentholding: "Holding Company"
    }

    this.back = this.back.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showDrop = this.showDrop.bind(this);
    this.hideDrop = this.hideDrop.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.saveCompanyData = this.saveCompanyData.bind(this);
  }

  nextStep() {
    this.props.gonext(this.state, "add1");
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleClose() {
    //close modal here, not sure what we are doing here yet
    console.log("close logic here");
  }

  back() {
    this.props.goback();
  }

  showDrop(type) {
    if (this.state.show) {
        this.setState({show: 0, type: ""});
    }
    else {
        this.setState({show: 1, type: type});
    }
  }

  hideDrop(e) {
    this.setState({show: 0, type: ""});
  }

  componentDidMount() {
    console.log(this.props.data);
    let dataobj = Object.assign({}, this.props.data);
    this.setState(dataobj);
   }

   saveCompanyData(type, data) {
    // This is probably a totally trash way to get the name, maybe fix in future
    let currentname = data[0][Object.keys(data[0])];
    let current = "current" + this.state.type;
    console.log(data);
    
    if(!currentname) {
        if(this.state.type === "operating") {
            this.setState({currentoperating: "Operating Company"});
        }
        if(this.state.type === "holding") {
            this.setState({currentholding: "Holding Company"});
        }
    }
    else {
        this.setState({[type]: data, [current]: currentname});
    }
   }

  render() {
      let termType = [
          'All Cash - no PMF', 'Cash & PMF', 'Cash & Assumption of existing Debt Package', 'Cash & Seller Carryback with Assumption of Existing Debt Package',
          'Cash & Seller Carryback (Property was F&C of any Debt Package)', 'Cash & Property for Property 1031 Exchange', 'Property for Property 1031 Exchange - No Cash Transfer',
          'Other'
      ];
    return (
        <div className="modalwrap modal_big">
            <div className="topbar topbar_orange">
                Add Asset <a>- Step 1</a>
                <div className="closebutton" onClick={this.handleClose}>×</div>
            </div>
            <div className="modal_contentwrap bigpad">
                <h1>Please select your Operating Company and Holding Company</h1>
                <div className="dualwrap">
                    <div className="width48">
                        <div className="orangeselect" onClick={() => this.showDrop("operating")}>
                            <div>{this.state.currentoperating}</div><div><img src="./img/downarrow.png" /></div>
                        </div>
                        {(this.state.type === "operating") && <Ohdrop type="operating" savedata={this.saveCompanyData} closed={this.hideDrop} currentdata={this.state.operating}/>}
                    </div>
                    <div className="width48">
                        <div className="orangeselect" onClick={() => this.showDrop("holding")}>
                            <div>{this.state.currentholding}</div><div><img src="./img/downarrow.png" /></div>
                        </div>
                        {(this.state.type === "holding") && <Ohdrop type="holding" savedata={this.saveCompanyData} closed={this.hideDrop} currentdata={this.state.holding}/>}
                    </div>
                </div>

                <div className="dualwrap">
                    <div className="width48">
                        <div className="orangetitle">Original Aquisition Date</div>
                        <input className="orangeselect" type="number" value={this.state.aquisition} onChange={this.handleInput} name="aquisition"/>
                    </div>
                    <div className="width48">
                        <div className="orangetitle">Original Purchase Price</div>
                        <input className="orangeselect" type="number" value={this.state.purchaseprice} onChange={this.handleInput} name="purchaseprice"/>
                    </div>
                </div>

                <div className="width100">
                    <div className="orangetitle">Terms</div>
                    <select className="orangeselect width100" onChange={this.handleInput} name="terms">
                        {
                            termType.map(item => {
                                if (item === this.state.terms) {
                                    return <option key={item} name={item} selected>{item}</option>
                                }
                                else {
                                    return <option key={item} name={item}>{item}</option>
                                }
                            })
                        }
                    </select>
                </div>

                <div className="modalfooter">
                    <div className="submitbtn submitorange top20" onClick={this.back}>Back</div>
                    <div className="submitbtn top20" onClick={this.nextStep}>Next</div>
                </div>
            </div>
        </div>
    );
  }
}

export default Add1;
