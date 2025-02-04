import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBTabPane,
MDBTabContent, MDBSelect, MDBSelectInput, MDBSelectOption, MDBSelectOptions } from "mdbreact";

class Checkout extends Component {
state={
  activePill: "1",
}

togglePills = tab => {
  if (this.state.activePill !== tab) {
    this.setState({
      ctivePill: tab
    });
  }
}

selectNextTab = () => {
  this.setState({
    activePill: (+this.state.activePill + 1).toString()
  });
}

render() {
  const { activePill } = this.state;

return (
    <MDBContainer>
      <MDBRow className="my-2" center>
        <MDBCard className="w-100">
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="8" className="mb-4">
                <MDBNav pills color="primary" className="nav-justified">
                  <MDBNavItem>
                    <MDBNavLink to="#" className={activePill==="1" ? "active" : "" } onClick={()=> this.togglePills("1")}
                      >
                      <strong>1. Billing</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" className={activePill==="2" ? "active" : "" } onClick={()=> this.togglePills("2")}
                      >
                      <strong>2. Addons</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" className={activePill==="3" ? "active" : "" } onClick={()=> this.togglePills("3")}
                      >
                      <strong>3. Payment</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent className="pt-4" activeItem={activePill}>
                  <MDBTabPane tabId="1">
                    <form>
                      <MDBRow>
                        <MDBCol md="6" className="mb-4">
                          <label htmlFor="firstName">First name</label>
                          <input type="text" id="firstName" className="form-control" />
                        </MDBCol>
                        <MDBCol md="6" className="mb-2">
                          <label htmlFor="lastName">Last name</label>
                          <input type="text" id="lastName" className="form-control" />
                        </MDBCol>
                        <MDBCol>
                          <div className="input-group mb-4">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control py-0" placeholder="Username" aria-describedby="basic-addon1" />
                          </div>
                          <label htmlFor="email">Email (optional)</label>
                          <input type="text" id="email" className="form-control mb-4" placeholder="youremail@example.com" />
                          <label htmlFor="address">Address</label>
                          <input type="text" id="address" className="form-control mb-4" placeholder="1234 Main St" />
                          <label htmlFor="address-2">Address 2 (optional)</label>
                          <input type="text" id="address-2" className="form-control mb-4" placeholder="Apartment or suite" />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol lg="4" md="12" className="mb-4">
                          <label htmlFor="country">Country</label>
                          <select className="custom-select d-block w-100" id="country" required>
                            <option>Choose...</option>
                            <option>United States</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-4">
                          <label htmlFor="state">State</label>
                          <select className="custom-select d-block w-100" id="state" required>
                            <option>Choose...</option>
                            <option>California</option>
                          </select>
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-4">
                          <label htmlFor="zip">Zip</label>
                          <input type="text" className="form-control" id="zip" required />
                          <div className="invalid-feedback">
                            Zip code required.
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <div className="mb-1">
                        <input type="checkbox" className="form-check-input filled-in" id="chekboxRules" />
                        <label className="form-check-label" htmlFor="chekboxRules">I accept the terms and conditions</label>
                      </div>
                      <div className="mb-1">
                        <input type="checkbox" className="form-check-input filled-in" id="safeTheInfo" />
                        <label className="form-check-label" htmlFor="safeTheInfo">Save this information for next time</label>
                      </div>
                      <div className="mb-1">
                        <input type="checkbox" className="form-check-input filled-in" id="subscribeNewsletter" />
                        <label className="form-check-label" htmlFor="subscribeNewsletter">Subscribe to the newsletter</label>
                      </div>
                      <hr />
                      <MDBBtn color="primary" size="lg" block onClick={this.selectNextTab}>Next step</MDBBtn>
                    </form>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <MDBRow>
                      <MDBCol md="5" className="mb-4">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="" className="img-fluid z-depth-1-half" />
                      </MDBCol>
                      <MDBCol md="7" className="mb-4">
                        <h5 className="mb-3 h5">Additional premium support</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ea ut aperiam corrupti,
                          dolorem.</p>
                        <MDBSelect>
                          <MDBSelectInput selected="Choose your option" />
                          <MDBSelectOptions>
                            <MDBSelectOption disabled>Choose a period of time</MDBSelectOption>
                            <MDBSelectOption value="1">+6 months : 200$</MDBSelectOption>
                            <MDBSelectOption value="2">+12 months: 400$</MDBSelectOption>
                            <MDBSelectOption value="3">+18 months: 800$</MDBSelectOption>
                            <MDBSelectOption value="3">+24 months: 1200$</MDBSelectOption>
                          </MDBSelectOptions>
                        </MDBSelect>
                        <MDBBtn color="primary">Add premium support to the cart</MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    <hr className="mb-5" />
                    <MDBRow>
                      <MDBCol md="5" className="mb-4">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/44.jpg" alt="" className="img-fluid z-depth-1-half" />
                      </MDBCol>
                      <MDBCol md="7" className="mb-4">
                        <h5 className="mb-3 h5">MDB Membership</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ea ut aperiam corrupti,
                          dolorem.</p>
                        <MDBSelect>
                          <MDBSelectInput selected="Choose your option" />
                          <MDBSelectOptions>
                            <MDBSelectOption disabled>Choose a period of time</MDBSelectOption>
                            <MDBSelectOption value="1">+6 months : 200$</MDBSelectOption>
                            <MDBSelectOption value="2">+12 months: 400$</MDBSelectOption>
                            <MDBSelectOption value="3">+18 months: 800$</MDBSelectOption>
                            <MDBSelectOption value="3">+24 months: 1200$</MDBSelectOption>
                          </MDBSelectOptions>
                        </MDBSelect>
                        <MDBBtn color="primary">Add MDB Membership to the cart</MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    <hr className="mb-4" />
                    <MDBBtn color="primary" size="lg" block onClick={this.selectNextTab}>Next step</MDBBtn>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <div className="d-block my-3">
                      <div className="mb-2">
                        <input name="group2" type="radio" className="form-check-input with-gap" id="radioWithGap4" required />
                        <label className="form-check-label" htmlFor="radioWithGap4">Credit card</label>
                      </div>
                      <div className="mb-2">
                        <input iname="group2" type="radio" className="form-check-input with-gap" id="radioWithGap5"
                          required />
                        <label className="form-check-label" htmlFor="radioWithGap5">Debit card</label>
                      </div>
                      <div className="mb-2">
                        <input name="group2" type="radio" className="form-check-input with-gap" id="radioWithGap6" required />
                        <label className="form-check-label" htmlFor="radioWithGap6">Paypal</label>
                      </div>
                      <MDBRow>
                        <MDBCol md="6" className="mb-3">
                          <label htmlFor="cc-name123">Name on card</label>
                          <input type="text" className="form-control" id="cc-name123" required />
                          <small className="text-muted">Full name as displayed on card</small>
                          <div className="invalid-feedback">
                            Name on card is required
                          </div>
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                          <label htmlFor="cc-number123">Credit card number</label>
                          <input type="text" className="form-control" id="cc-number123" required />
                          <div className="invalid-feedback">
                            Credit card number is required
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="3" className="mb-3">
                          <label htmlFor="cc-name123">Expiration</label>
                          <input type="text" className="form-control" id="cc-name123" required />
                          <div className="invalid-feedback">
                            Name on card is required
                          </div>
                        </MDBCol>
                        <MDBCol md="3" className="mb-3">
                          <label htmlFor="cc-cvv123">CVV</label>
                          <input type="text" className="form-control" id="cc-cvv123" required />
                          <div className="invalid-feedback">
                            Security code required
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <hr className="mb-4" />
                      <MDBBtn color="primary" size="lg" block>Place order</MDBBtn>
                    </div>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBCol>
              <MDBCol lg="4" className="mb-4">
                <MDBBtn color="primary" size="lg" block>
                  Place order
                </MDBBtn>
                <MDBCard>
                  <MDBCardBody>
                    <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">Summary</h4>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="8">
                        MDBootstrap UI KIT (jQuery version) - License 6-10 poeple + unlimited projects
                      </MDBCol>
                      <MDBCol sm="4">
                        $ 2000
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="8">
                        Premium support - 2 years
                      </MDBCol>
                      <MDBCol sm="4">
                        $ 200
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="8">
                        MDB Membership - 2 years
                      </MDBCol>
                      <MDBCol sm="4">
                        $ 100
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="8">
                        <strong>Total</strong>
                      </MDBCol>
                      <MDBCol sm="4">
                        <strong>$ 2300</strong>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default Checkout;