import React, { Component } from 'react';
import Ohdrop from './ohdrop.js';

class Add1 extends Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
  }

  back() {
    this.props.goback();
  }

  render() {
    return (
        <div className="modalwrap modal_big">
            <div className="topbar topbar_orange">
                Add Asset <a>- Step 2</a>
                <div className="closebutton" onClick={this.handleClose}>×</div>
            </div>
            <div className="modal_contentwrap bigpad">

                Add asset step 2
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
