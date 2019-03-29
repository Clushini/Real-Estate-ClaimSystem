import React, { Component } from 'react';

class Add1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.back = this.back.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.skipStep = this.skipStep.bind(this);
  }

  back() {
    this.props.goback();
  }

  nextStep() {
    this.props.gonext(this.state, "add3");
  }

  skipStep() {
    this.props.skipstep();
  }

  render() {
    return (
        <div className="modalwrap modal_big">
            <div className="topbar topbar_orange">
                Add Asset <a>- Step 3</a>
                <div className="closebutton" onClick={this.handleClose}>×</div>
            </div>
            <div className="modal_contentwrap bigpad">
              <h1 className="h1smallfont">
                Let us do the work for you! Upload your Asset's Offering Memorandum and we will populate your new Asset File at no charge. We will notify you when it’s ready.
              </h1>
              <h2 className="h1bigfont">Maximum upload size 25MB per Document</h2>
              <div className="pad40"></div>
              <div className="flexwrap_center">
                <div>
                  <h3>OM</h3>
                  <div className="uploadwrap">
                    <div>Drag & Drop Files Here</div>
                    <div className="darkbluebtn">Upload File</div>
                  </div>
                </div>
              </div>
              <div className="modalfooter">
                <div>
                </div>
                <div className="buttonwrap">
                    <div className="submitbtn submitorange top20" onClick={this.back}>Back</div>
                    <div className="submitbtn submitgrey top20" onClick={this.skipStep}>Skip</div>
                    <div className="submitbtn top20" onClick={this.nextStep}>Next</div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Add1;
