import React from "react";
import { imageArray } from "../../constants";
import { ReturnProductModal } from "./ReturnProductModal";
import {
  OrderHead,
  OrderDetails,
  OrderDetailsHead,
  OrderData,
} from "./MyOrderComponents";

const MyOrder = ({ viewDetail, setViewDetail }) => {
  const orders = [
    {
      id: "#404-786836",
      placedOn: "26 July 2020",
      shipTO: "Maria Trofimova",
      total: "₹2,398",
      deliveryMethod: "Flat-rate door delivery",
      detail: {
        name: "Abbie Wilson",
        phone: "8374384783",
        address: "12/F Golden Avenue",
        city: "Salt Lake City",
        state: "Ohio",
        pin: "123456",
      },
      paymentMethod: "Debit Card  -  7813",
      paymentDetails: {
        base: "₹ 3598",
        discount: " ₹ 299",
        fee: "₹ 100",
        adjustment: "₹ 150",
        amount: "₹ 3549",
      },
      data: [
        {
          img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          name: "Nutaan",
          disc: "Women Pink Handblock Bird Print Straight Kurta",
          qty: "1",
          size: "Free Size",
          price: "₹1,199",
          status: "Dispatched",
          statusDisc: "Package was successfully handed over",
          date: "31 July 2020",
        },
        {
          img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          name: "Nutaan",
          disc: "Women Pink Handblock Bird Print Straight Kurta",
          qty: "1",
          size: "Free Size",
          price: "₹1,199",
          status: "Delivered",
          statusDisc: "Package was successfully handed over",
          date: "31 July 2020",
        },
      ],
    },
    {
      id: "#404-786836",
      placedOn: "26 July 2020",
      shipTO: "Maria Trofimova",
      total: "₹2,398",
      deliveryMethod: "Flat-rate door delivery",
      detail: {
        name: "Abbie Wilson",
        phone: "8374384783",
        address: "12/F Golden Avenue",
        city: "Salt Lake City",
        state: "Ohio",
        pin: "123456",
      },
      paymentMethod: "Debit Card  -  7813",
      paymentDetails: {
        base: "₹ 3598",
        discount: " ₹ 299",
        fee: "₹ 100",
        adjustment: "₹ 150",
        amount: "₹ 3549",
      },
      data: [
        {
          img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          name: "Nutaan",
          disc: "Women Pink Handblock Bird Print Straight Kurta",
          qty: "1",
          size: "Free Size",
          price: "₹1,199",
          status: "Exchanged",
          statusDisc: "Duplicate item was successfully delivered",
          date: "31 July 2020",
        },
      ],
    },
    {
      id: "#404-786836",
      placedOn: "26 July 2020",
      shipTO: "Maria Trofimova",
      total: "₹2,398",
      deliveryMethod: "Flat-rate door delivery",
      detail: {
        name: "Abbie Wilson",
        phone: "8374384783",
        address: "12/F Golden Avenue",
        city: "Salt Lake City",
        state: "Ohio",
        pin: "123456",
      },
      paymentMethod: "Debit Card  -  7813",
      paymentDetails: {
        base: "₹ 3598",
        discount: " ₹ 299",
        fee: "₹ 100",
        adjustment: "₹ 150",
        amount: "₹ 3549",
      },
      data: [
        {
          img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          name: "Nutaan",
          disc: "Women Pink Handblock Bird Print Straight Kurta",
          qty: "1",
          size: "Free Size",
          price: "₹1,199",
          status: "Returned",
          statusDisc: "Package was successfully handed over",
          date: "31 July 2020",
        },
      ],
    },
  ];
  const [modalId, setModalId] = React.useState("");
  const [modalData, setModalData] = React.useState({});

  const openModal = (m_id, selectedData) => {
    setModalId(m_id);
    setModalData(selectedData);
  };
  return (
    <div className="profile-order">
      <ReturnProductModal productId={modalId} selectedData={modalData} />
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            {viewDetail == -1 ? (
              <OrderHead />
            ) : (
              <OrderDetailsHead viewOrderDetails={setViewDetail} />
            )}
          </div>
          <div className="col-12 px-0">
            {viewDetail == -1 ? (
              <OrderData
                orders={orders}
                openOrderModal={openModal}
                viewOrderDetails={(value) => setViewDetail(value)}
              />
            ) : (
              <OrderDetails
                item={viewDetail == -1 ? {} : orders[viewDetail]}
                openOrderModal={openModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
