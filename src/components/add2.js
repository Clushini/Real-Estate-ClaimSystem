import React, { Component } from 'react';

class Add1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: [{'Title Insurance Policy': ''}, {'Vesting Deed': ''}, {'State Documentation': ''}, {'Other': ''}]
    }

    this.back = this.back.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  back() {
    this.props.goback();
  }

  nextStep() {
    this.props.gonext(this.state, "add2");
  }

  render() {
    return (
        <div className="modalwrap modal_big">
            <div className="topbar topbar_orange">
                Add Asset <a>- Step 2</a>
                <div className="closebutton" onClick={this.handleClose}>×</div>
            </div>
            <div className="modal_contentwrap bigpad">
              <h1 className="h1bigfont">Please upload your proof of title documents here</h1>
              <h2 className="h1bigfont">Maximum upload size 25MB</h2>
              <div className="pad40"></div>
              <div className="flexwrap_spacebetween">
                {
                  this.state.documents.map(item => {
                    let key = Object.keys(item)[0];
                    return  <div key={key}>
                              <h3>{key}</h3>
                              <div className="uploadwrap">
                                <div>Drag & Drop Files Here</div>
                                <div className="darkbluebtn">Upload File</div>
                              </div>
                            </div>
                  })
                }
              </div>
              <div className="modalfooter">
                <div>

                </div>
                <div className="buttonwrap">
                  <div className="submitbtn submitorange top20" onClick={this.back}>Back</div>
                  <div className="submitbtn top20" onClick={this.nextStep}>Next</div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Add1;
