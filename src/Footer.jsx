import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <footer className="pt-4 px-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              Company Name
              <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
            </div>
            <div className="col-6 col-md">
              <h5>Tools</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="/">Cool tool</a></li>
                <li><a className="text-muted" href="/">Random tool</a></li>
                <li><a className="text-muted" href="/">Team tool</a></li>
                <li><a className="text-muted" href="/">Tools for People</a></li>
                <li><a className="text-muted" href="/">Another tool</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>See also</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="/">This</a></li>
                <li><a className="text-muted" href="/">That one</a></li>
                <li><a className="text-muted" href="/">Yet another that</a></li>
                <li><a className="text-muted" href="/">Finally ...</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="/">Our Team</a></li>
                <li><a className="text-muted" href="/">Find us</a></li>
                <li><a className="text-muted" href="/">Privacy</a></li>
                <li><a className="text-muted" href="/">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
 
export default Footer;