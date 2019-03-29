import React, { Component } from 'react';

class Ohdrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
        operating: [
            {'Operating Company' : ''}, {'Operating Company E-Mail': ''}, {'Officer First Name': ''}, {'Officer Last Name' : ''}, {'Address': ''}, {'Address 2': ''},
            {'City' : ''}, {'State': ''}, {'Zip Code': ''}, {'Country': ''}, {'Work Number': ''}, {'Cell Number': ''}, {'Fax Number': ''}           
        ],
        holding: [
            {'Contract Owner' : ''}, {'E-Mail': ''}, {'Officer First Name': ''}, {'Officer Last Name' : ''}, {'Address': ''}, {'Address 2': ''},
            {'City' : ''}, {'State': ''}, {'Zip Code': ''}, {'Country': ''}, {'Work Number': ''}, {'Cell Number': ''}, {'Fax Number': ''}           
        ]
    }

    this.sendClose = this.sendClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  sendClose() {
    this.props.closed();
  }

  handleChange(e, itemindex) {
    var data = [];

    if (this.props.type === "operating") {
        data = [...this.state.operating];
    } 
    
    if (this.props.type === "holding") {
        data = [...this.state.holding];
    }

    data[itemindex] = {[e.target.name]: e.target.value};

    this.setState({[this.props.type]: data});
  }

  saveData() {
    var data = [];

    if (this.props.type === "operating") {
        data = [...this.state.operating];
    } 
    
    if (this.props.type === "holding") {
        data = [...this.state.holding];
    }

    data = this.state[this.props.type];

    this.props.savedata(this.props.type, data);
  }

  componentDidMount() {
    if (this.props.currentdata.length > 0) {
        this.setState({[this.props.type]: this.props.currentdata});
    }
  }

  render() {
    return (
        <div className="ohdrop">
            <div className="topbar topbar_orange ohdrop_title">
                {(this.props.type === "operating") ? "Operating Company" : "Holding Company"}
                <div className="closebutton" onClick={this.sendClose}>×</div>
            </div>
            <div className="ohdropcontent">
                <select>
                    <option name="theiroptions">Their Options</option>
                </select>
                <h1>
                    <strong>New</strong> Operating Company
                </h1>
                <div className="ohdropfieldswrap">
                    {
                        (this.props.type === "operating") 
                        
                        ? 

                        this.state.operating.map(item => {
                            let itemindex = this.state.operating.indexOf(item);
                            let key = Object.keys(item)[0];
                            //console.log(this.state.oc[itemindex][key]);
                            return <div className="ohdropfield" key={key}><div>{key}</div><input type="text" name={key} value={this.state.operating[itemindex][key]} onChange={(e) => this.handleChange(e, itemindex)}/></div>
                        }) 
                        
                        : 

                        this.state.holding.map(item => {
                            let itemindex = this.state.holding.indexOf(item);
                            let key = Object.keys(item)[0];
                            return <div className="ohdropfield" key={key}><div>{key}</div><input type="text" name={key} value={this.state.holding[itemindex][key]} onChange={(e) => this.handleChange(e, itemindex)}/></div>
                        })
                    }
                </div>
                <div className="modalfooter">
                    <div></div>
                    <div className="buttonwrap">
                        <div className="submitbtn smallbtn" onClick={this.saveData}>Save</div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Ohdrop;
