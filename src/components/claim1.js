import React, { Component } from 'react';

class Claim1 extends Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
  }

  back() {
    this.props.goback();
  }

  render() {
    return (
        <div className="modalwrap modal_addasset">
            <div className="topbar_blue">
                Claim Asset - Step 1
                <div className="closebutton" onClick={this.handleClose}>×</div>
            </div>
            <div className="modal_contentwrap">
                Claim step 1
                <div className="modalfooter">
                    <div className="submitbtn submitorange" onClick={this.back}>Back</div>
                </div>
            </div>
        </div>
    );
  }
}

export default Claim1;
