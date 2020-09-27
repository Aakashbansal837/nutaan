import React from "react";

const Discount = () => {
  const dsc = [
    {
      disc: "FLAT 30%",
      bgClr:
        "linear-gradient(66deg, rgba(161,240,161,1) 24%, rgba(82,230,61,1) 74%)",
    },
    {
      disc: "FLAT 30%",
      bgClr:
        "linear-gradient(66deg, rgba(224,146,223,1) 42%, rgba(228,14,237,1) 88%)",
    },
    {
      disc: "FLAT 30%",
      bgClr:
        "linear-gradient(66deg, rgba(255,248,0,1) 29%, rgba(251,219,16,1) 86%)",
    },
  ];
  return (
    <div className="hmpg-discount">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hmpg-discount-head">Shop by Discounts</div>
          </div>

          {dsc.map((dt) => {
            return (
              <div className="col-4">
                <div
                  className="hmpg-discount-main"
                  style={{ background: dt.bgClr }}
                >
                  {dt.disc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discount;
