import React, {Component} from 'react';
import './ListGroup.css';


class ListGroup extends Component {
    render() {
        return (
<div className="list">
  <h3>Steps For First Time Home Buyers </h3>
<ul className="list-group">
<li className="list-group-item">1. Determine How Much House You Can Afford with our <a href="/calculator">Calculator</a>.
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span>
  </li>
  <li className="list-group-item">2. Save Enough Money for the Down Payment.
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span>
  </li>
  <li className="list-group-item">3. Find the right home for you <a href="https://www.zillow.com " target="_blank" rel="noopener noreferrer">Zillow.com </a>is a great resource to view estimated home values
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span>
  </li>
  <li className="list-group-item">4. Find only the 5 star <a href="/search">Mortgage Bankers</a>.
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span></li>
  <li className="list-group-item">5.Get Prequalified and Preapproved for credit for Your Mortgage.
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span></li>
 
  <li className="list-group-item">6. Look for the best <a href="/search">Real Estate Agent</a>.
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span></li>
  <li className="list-group-item">7. Find the right home for you <a href="https://www.zillow.com " target="_blank" rel="noopener noreferrer">Zillow.com </a>is a great resource to view estimated home values.
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span></li>
  <li className="list-group-item">8. Get a Home Inspection. Find the 5 star <a href="/search">Home Inspector</a>.
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span></li>
  <li className="list-group-item">8.Have the <a href="/search">Home Appraised</a>.
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span></li>
  <li className="list-group-item">9. Coordinate the Paperwork and Close the Sale! 
  <span class="badge badge-primary">Complete</span>
  <span class="badge badge-danger">In Progress</span></li>
</ul>

   </div>

        );
    }
}

export default ListGroup;