import React, { Component } from 'react';
import GreenCheck from '../img/greencheck.png';
import GreyCheck from '../img/greycheck.png';

class Add1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.back = this.back.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  back() {
    this.props.goback();
  }

  nextStep() {
    this.props.gonext(this.state, "add3");
  }

  render() {
    return (
        <div className="modalwrap modal_big">
            <div className="topbar topbar_orange">
                Add Asset <a>- Summary</a>
                <div className="closebutton" onClick={this.handleClose}>×</div>
            </div>
            <div className="modal_contentwrap">
              <div className="summarytitle">XYZ Property</div>
              <div className="summarymain">
                <div className="summarymain_top">
                  <div className="summarymain_pic">
                  ?
                    <div>Las Vegas, NV 89102</div>
                  </div>
                  <div className="summarymain_top_right">
                    <div className="summarymain_top_right_left">
                      <h2>Property Address</h2>
                      <h3>321 Test Ave Suite #100</h3>
                      <h3>Las Vegas, NV</h3>
                      <h3>89101</h3>
                      <div>
                        <h2>Clark County</h2>
                      </div>
                    </div>
                    <div className="summarymain_top_right_right">
                      <div>
                        <h2>Original Aquisition Date</h2>
                        <h3>10/20/2019</h3>
                      </div>
                      <div>
                        <h2>Original Purchase Price</h2>
                        <h1>$10,985,500</h1>
                      </div>
                      <div>
                        <h4><strong>Note -</strong> Secured by Mixed Use Commercial Property</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dualwrap2">
                  <div className="summaryochc">
                    <strong>Operating Company:</strong> awdawd
                  </div>
                  <div className="summaryochc">
                    <strong>Holding Company:</strong> awdawd
                  </div>
                </div>
              </div>
              <div className="documentswrap">
                <div className="documentitem di_uploaded di_small">
                  <div>Title Insurance Policy</div>
                  <img alt="" src={GreenCheck} />
                </div>
                <div className="documentitem di_uploaded di_small">
                  <div>Vesting Deed</div>
                  <img alt="" src={GreenCheck} />
                </div>
                <div className="documentitem di_nouploaded di_small">
                  <div>Other Documents</div>
                  <img alt="" src={GreyCheck} />
                </div>
                <div className="documentitem di_uploaded di_big">
                  <div>State Documentation</div>
                  <img alt="" src={GreenCheck} />
                </div>
                <div className="documentitem di_nouploaded di_big">
                  <div>Offering Memorandum</div>
                  <img alt="" src={GreyCheck} />
                </div>
              </div>
              <div className="apnfooter">
                <strong>APN #: </strong> 123-3231-231319, 123-3231-231319, 123-3231-231319, 123-3231-231319, 123-3231-231319, 123-3231-231319
              </div>
              <div className="modalfooter">
                  <div className="submitbtn submitorange top20" onClick={this.back}>Back</div>
                  <div className="submitbtn top20" onClick={this.nextStep}>Create Asset</div>
              </div>
            </div>
        </div>
    );
  }
}

export default Add1;
