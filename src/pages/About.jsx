import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Pricing</h1>
      <p className="lead">Lorem ipsum dolor sit amet. Et facilis expedita a voluptate voluptatem sit nesciunt ratione? Quo tempora ullam vel iste assumenda et recusandae Quis ut perspiciatis quaerat ea debitis quibusdam aut vitae distinctio.</p>
      </div>

      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>42 users included</li>
                <li>7 GB of storage</li>
                <li>Email ipsum</li>
                <li>Et facilis expedita</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Quis ut</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$16 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>42 users included</li>
                <li>7 GB of storage</li>
                <li>Email ipsum</li>
                <li>Et facilis expedita</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Perspiciatis quaerat</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$32 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>42 users included</li>
                <li>7 GB of storage</li>
                <li>Email ipsum</li>
                <li>Et facilis expedita</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Tuibusdam</button>
            </div>
          </div>
          </div>
        </div>

      </> 
    );
  }
}
 
export default About;