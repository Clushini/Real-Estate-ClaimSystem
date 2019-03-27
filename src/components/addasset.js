import React, { Component } from 'react';

class Addasset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assetname: "", 
      address: "",
      city: "",
      State: "AL",
      county: "",
      type: "Retail Tenant Property",
      apns: [{value: ""}]
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addApn = this.addApn.bind(this);
    this.delApn = this.delApn.bind(this);
    this.updateApn = this.updateApn.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleClose() {
    //close modal here, not sure what we are doing here yet
    console.log("close logic here");
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addApn() {
    let apnobj = {value: ""};
    let stateapns = this.state.apns;
    stateapns.push(apnobj);
    this.setState({apns: stateapns});
  }

  delApn(index) {
    let stateapns = this.state.apns;
    delete stateapns[index];
    this.setState({apns: stateapns});
  }

  updateApn(e) {
    let index = e.target.name;
    let stateapns = this.state.apns;
    stateapns[index].value = e.target.value;
    this.setState({apns: stateapns});
  }

  submit(type) {
    var submittype = 0;
    if (type === "add") {
        submittype = 1;
    }
    else {
        submittype = 2;
    }
    this.props.addinfo({addasset: this.state}, submittype);
  }

  componentDidMount() {
        let dataobj = Object.assign({}, this.props.data.addasset);
        this.setState(dataobj);
  }

  render() {
    const stateAbbreviations = [
        'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
        'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
        'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
        'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
        'VT','VI','VA','WA','WV','WI','WY'
       ];

    let assetTypes = [
        'Retail Tenant Property', 'Office Tenant Property', 'Multi-Family', 'Industrial Tenant Property', 'MHP',
        'Fuel Service Retail Property', 'Medical Tenant Property', 'Mixed Use Commercial Property', 'Fractured Condominium Portfolios',
        'Mini-Storage Property', 'Parking Garage Property', 'Secured Private Notes'
        ];
    return (
        <div className="modalwrap modal_addasset">
            <div className="topbar topbar_blue">
                Add Asset
                <div className="closebutton" onClick={this.handleClose}>×</div>
            </div>
            <div className="modal_contentwrap">

                <div className="inputwrap">
                    <div className="inputtitle">Asset Name</div>
                    <input type="text" placeholder="Asset Name" value={this.state.assetname} onChange={this.handleInput} name="assetname"/>
                </div>

                <div className="inputwrap">
                    <div className="inputtitle">Address</div>
                    <input type="text" placeholder="Address" value={this.state.address} onChange={this.handleInput} name="address"/>
                </div>

                <div className="inputwrap flexdir_row">
                    <div className="inputmid">
                        <div className="inputtitle">City</div>
                        <input type="text" placeholder="City" value={this.state.city} onChange={this.handleInput} name="city"/>
                    </div>
                    <div className="inputsmall">
                        <div className="inputtitle">State</div>
                        <select className="inputstyle select40" onChange={this.handleInput} name="State">
                            {
                                stateAbbreviations.map(item => {
                                    if (this.state.State === item) {
                                        return <option value={item} key={item} selected>{item}</option>;
                                    }
                                    else {
                                        return <option value={item} key={item}>{item}</option>
                                    }
                                })
                            }
                        </select>
                    </div>
                    <div className="inputmid">
                        <div className="inputtitle">County</div>
                        <input type="text" placeholder="County" value={this.state.county} onChange={this.handleInput} name="county"/>
                    </div>
                </div>

                <div className="apnwrap">
                    <div className="apntop">
                        <h3>Assessor’s Parcel # (APNs)</h3>
                        <div className="bluebtn" onClick={this.addApn}>+</div>
                    </div>
                    {
                        this.state.apns.map((item, index) => {
                            return <div className="apnitemwrap" key={index}>
                                        <input /*This is red style to indicate error for input --- className="inputred"*/ type="number" placeholder="Apn #" value={this.state.apns[index].value} onChange={this.updateApn} name={index}/>
                                        <div className="delbtn" onClick={() => this.delApn(index)}>×</div>
                                    </div>
                        })
                    }
                    {/* Here's the error message, need logic ---- <p>Error: This APN is currently registered to another property in our system. If you believe this to be an error, please contact us at admin@uscreonline.com</p> */ <p></p>}
                </div>
                <div className="inputwrap">
                    <div className="inputtitle">Asset Type</div>

                    <select className="inputstyle maxwidth select40" name="type" onChange={this.handleInput}>
                        {
                            assetTypes.map(item => {
                                if (this.state.type === item) {
                                    return <option value={item} key={item} selected>{item}</option>
                                }
                                else {
                                    return <option value={item} key={item}>{item}</option>
                                }
                            })
                        }
                    </select>
                </div>
                <div className="modalfooter">
                    <div className="submitbtn" onClick={() => this.submit("add")}>Add Asset</div>
                    <div className="submitbtn submitorange" onClick={() => this.submit("claim")}>Claim Asset</div>
                </div>
            </div>
        </div>
    );
  }
}

export default Addasset;
