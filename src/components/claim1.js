import React, { Component } from 'react';

class Claim1 extends Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  back() {
    this.props.goback();
  }

  nextStep() {
    this.props.gonext(this.state, "claim1");
  }

  render() {
    return (
        <div className="modalwrap modal_med animated slideInRight faster">
          <div className="topbar topbar_orange">
              Asset Found
              <div className="closebutton" /*onClick={this.handleClose}*/ onClick={this.back}>×</div>
          </div>
          <div className="modal_contentwrap">
            <div className="summarytitle">XYZ Property</div>
            <div className="summarymain summarymain_thin">
            <div className="summarymain_top summarymain_top_small">
                  <div className="summarymain_pic summarymain_pic_small">
                  ?
                    <div>Las Vegas, NV</div>
                  </div>
                  <div className="summarymain_top_right summarymain_top_right_small">
                    <div className="summarymain_top_right_right summarymain_top_right_right_small">
                    <div className="flexheight100">
                      <h2>123 Example Address</h2>
                      <h3>Las Vegas, NV</h3>
                      <h3>Clark County</h3>
                      <h2>110 Units</h2>
                      <h2>88,500Sq. Ft.</h2>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="modalfooter">
              <div className="footerextra">
                <div>
                  <h3><strong>Note - </strong>Secured by Mixed Use Commercial property</h3>
                  <h3>Included in <strong>ABC123 Portfolio</strong></h3>
                  <h3><strong>27</strong> Assets in Portfolio</h3>
                </div>
              </div>
              <div className="buttonwrap pad20">
                <div className="submitbtn submitorange" onClick={this.nextStep}>Claim Asset</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Claim1;