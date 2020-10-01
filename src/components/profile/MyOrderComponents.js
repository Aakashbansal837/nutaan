import React from "react";
import { Button } from "@material-ui/core";

export const OrderDetailsHead = ({ viewOrderDetails }) => {
  return (
    <div className="profile-order-head">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div
              className="profile-order-detail-head"
              onClick={() => viewOrderDetails(-1)}
            >
              <span>
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              </span>
              <span>Back to all orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const OrderHead = () => {
  return (
    <div className="profile-order-head">
      <div className="container">
        <div className="row">
          <div className="d-none d-md-block col-md-8 col-lg-7 px-0">
            <div className="profile-order-head-text">
              View your order history here
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-5 px-0">
            <div className="profile-order-head-filter">
              <div className="container">
                <div className="row">
                  <div className="col-8 col-sm-8 col-md-12 col-lg-6 px-0">
                    <div className="profile-order-head-filter-text">
                      <b>4 orders</b> placed in
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-12 col-lg-6 px-0">
                    <select className="custom-select profile-order-head-filter-data">
                      <option selected>last week</option>
                      <option value="1">last month</option>
                      <option value="2">last quarter</option>
                      <option value="3">last year</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OrderContent = ({ data, openParentModal }) => {
  return (
    <>
      <div className="col-4 col-sm-3 col-md-3 col-lg-2">
        <div className="profile-order-main-content-img">
          <img src={data.img} alt="item" />
        </div>
      </div>
      <div className="col-8 col-sm-8 col-md-8 col-lg-5 px-0">
        <div className="profile-order-main-content-name">{data.name}</div>
        <div className="profile-order-main-content-disc">{data.disc}</div>
        <div className="profile-order-main-content-detail">
          <span>Qty: {data.qty}</span>
          <span>Size : {data.size} </span>
        </div>
        <div className="profile-order-main-content-price">{data.price}</div>
      </div>

      <div className="col-12 col-sm-12 col-md-12 col-lg-5 pr-0">
        <div className="profile-order-main-content-track">
          <div
            className="profile-order-main-content-track-status"
            style={{
              color: data.status == "Dispatched" ? "#2aa838" : "#212121",
            }}
          >
            {data.status} {data.date}
          </div>
          <div className="profile-order-main-content-track-status-disc">
            {data.statusDisc}
          </div>
          <div className="profile-order-main-content-track-btn">
            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-5 pl-0">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle profile-order-main-content-track-btn-button "
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Track Item
                  </button>

                  <div className="dropdown-menu dropdown-menu-right">
                    <button
                      className="dropdown-item"
                      type="button"
                      data-toggle="modal"
                      data-target="#returnProductModal"
                      onClick={() => openParentModal(data)}
                    >
                      Return
                    </button>
                    <button
                      className="dropdown-item"
                      type="button"
                      data-toggle="modal"
                      data-target="#returnProductModal"
                      onClick={() => openParentModal(data)}
                    >
                      Exchange
                    </button>
                    <button className="dropdown-item" type="button">
                      Cancel return
                    </button>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 pl-0">
                  <button
                    className="btn btn-outline-secondary profile-order-main-content-track-btn-button"
                    type="button"
                    data-toggle="modal"
                    data-target="#requestFitting"
                    onClick={() => openParentModal(data)}
                  >
                    Request Fitting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const PopUpOrderContent = ({ data }) => {
  return (
    <>
      <div className="col-4 col-sm-3 col-md-3 col-lg-2">
        <div className="profile-order-main-content-img">
          <img src={data.img} alt="item" />
        </div>
      </div>
      <div className="col-8 col-sm-8 col-md-8 col-lg-5 px-0">
        <div className="profile-order-main-content-name">{data.name}</div>
        <div className="profile-order-main-content-disc">{data.disc}</div>
        <div className="profile-order-main-content-detail">
          <span>Qty: {data.qty}</span>
          <span>Size : {data.size} </span>
        </div>
        <div className="profile-order-main-content-price">{data.price}</div>
      </div>

      <div className="col-12 col-sm-12 col-md-12 col-lg-5 pr-0">
        <div className="profile-order-main-content-track">
          <div
            className="profile-order-main-content-track-status"
            style={{
              color: data.status == "Dispatched" ? "#2aa838" : "#212121",
            }}
          >
            {data.status} {data.date}
          </div>
          <div className="profile-order-main-content-track-status-disc">
            {data.statusDisc}
          </div>
          <div className="profile-order-main-content-track-btn">
            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-5 pl-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const OrderData = ({ orders, openOrderModal, viewOrderDetails }) => {
  return (
    <div>
      {orders.map((or, index) => (
        <div className="profile-order-main">
          <div className="profile-order-main-head">
            <div className="container">
              <div className="row">
                <div className="col-5 col-sm-4 col-md-4 col-lg-2">
                  <div className="profile-order-main-head-title">placed on</div>
                  <div className="profile-order-main-head-data">
                    {or.placedOn}
                  </div>
                </div>
                <div className="d-none d-md-block col-md-4 col-lg-2">
                  <div className="profile-order-main-head-title">ship to</div>
                  <div className="profile-order-main-head-data">
                    {or.shipTO}
                  </div>
                </div>
                <div className="d-none d-sm-block col-sm-3 col-md-4 col-lg-5">
                  <div className="profile-order-main-head-title">Total</div>
                  <div className="profile-order-main-head-data">{or.total}</div>
                </div>
                <div className="col-7 col-sm-5 col-md-12 col-lg-3">
                  <div className="profile-order-main-head-btn">
                    <Button
                      className="profile-order-main-head-btn-button"
                      variant="outlined"
                      color="secondary"
                      onClick={() => viewOrderDetails(index)}
                    >
                      Order Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {or.data.map((dt, index) => (
            <div className="profile-order-main-content">
              <div className="container">
                <div className="row">
                  <OrderContent data={dt} openParentModal={openOrderModal} />
                  <div className="col-12 ">
                    <div
                      className={
                        index != or.data.length - 1 ? "shopping-divider" : ""
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Orders = ({ items, opendetailsModal }) => {
  return (
    <div>
      {items.data.map((dt, index) => (
        <div className="profile-order-main">
          <div className="profile-order-main-content">
            <div className="container">
              <div className="row">
                <OrderContent data={dt} openParentModal={opendetailsModal} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const OrderDetailsPayment = ({ item }) => {
  return (
    <>
      <div className="profile-order-detail-payment">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="profile-order-detail-payment-head">
                payment information
              </div>
            </div>
            <div className="col-12 px-0">
              <div className="shopping-divider"></div>
            </div>
            <div className="col-12">
              <div className="profile-order-detail-payment-main">
                <div className="profile-order-detail-payment-main-title">
                  payment Method
                </div>
                <div className="profile-order-detail-payment-main-data profile-order-detail-payment-main-data-dt">
                  {item.paymentMethod}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="profile-order-detail-payment-main">
                <div className="profile-order-detail-payment-main-title">
                  Payment Amount
                </div>
                <div className="profile-order-detail-payment-main-data">
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt">
                          Base Amount
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt-right">
                          {item.paymentDetails.base}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt">
                          Discounts
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt-right">
                          -{item.paymentDetails.discount}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt">
                          Shipping Fee
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt-right">
                          {item.paymentDetails.fee}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt">
                          Tailoring Adjustments
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt-right">
                          {item.paymentDetails.adjustment}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt-dark">
                          Amount Payable
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="profile-order-detail-payment-main-data-dt-dark-right">
                          {item.paymentDetails.amount}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const OrderProfileDetailsDelivery = ({ item }) => {
  return (
    <>
      <div className="profile-order-detail-delivery">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="profile-order-detail-delivery-head">
                Delivery information
              </div>
            </div>
            <div className="col-12 px-0">
              <div className="shopping-divider"></div>
            </div>
            <div className="col-12">
              <div className="profile-order-detail-delivery-main">
                <div className="profile-order-detail-delivery-main-title">
                  Delivery Method
                </div>
                <div className="profile-order-detail-delivery-main-data">
                  {item.deliveryMethod}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="profile-order-detail-delivery-main">
                <div className="profile-order-detail-delivery-main-title">
                  Shipping Address
                </div>
                <div className="profile-order-detail-delivery-main-data">
                  {item.detail.name} &nbsp;-&nbsp;Mobile
                  {item.detail.phone}
                  <br />
                  {item.detail.address}
                  <br />
                  {item.detail.city},{item.detail.state}&nbsp;-&nbsp;
                  {item.detail.pin}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const OrderDetails = ({ item, openOrderModal }) => {
  return (
    <div className="profile-order-detail-main">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                  <div className="profile-order-detail-main-header">
                    Order Details
                  </div>
                  <div className="profile-order-detail-main-header-disc">
                    Placed on {item.placedOn} &nbsp;Order{item.id}
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                  <div className="profile-order-detail-main-header-btn">
                    <Button
                      className="profile-order-detail-main-header-btn-button"
                      variant="outlined"
                      color="secondary"
                    >
                      View Invoice
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 d-block d-md-none px-0">
            <Orders items={item} opendetailsModal={openOrderModal} />
          </div>

          <div className="d-none d-md-block col-md-12 col-lg-6 px-0">
            <OrderProfileDetailsDelivery item={item} />
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 px-0">
            <OrderDetailsPayment item={item} />
          </div>

          <div className="col-12 col-sm-12 d-block d-md-none px-0">
            <OrderProfileDetailsDelivery item={item} />
          </div>

          <div className="d-none d-md-block col-md-12 col-lg-12 px-0">
            <Orders items={item} opendetailsModal={openOrderModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
