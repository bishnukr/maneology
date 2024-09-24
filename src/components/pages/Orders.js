import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { DLT } from "../../redux/actions/action";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const history = useNavigate();
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // const total = () => {
  //   let price = 0;
  //   getdata.map((ele) => {
  //     price = ele.price * ele.qnty + price;
  //     console.log(price);
  //   });
  //   setPrice(price);
  // };

  // useEffect(() => {
  //   total();
  // }, [total]);

  return (
    <>
      <div className="container py-2">
        <Table responsive>
          <thead>
            <tr style={{ border: "1px solid #000", textAlign: "center" }}>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Id
              </th>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Product Name
              </th>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Total
              </th>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Order Date
              </th>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Status
              </th>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {getdata.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      {item.id}
                    </td>

                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      {item.title}
                    </td>
                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      {item.price}
                    </td>
                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      {formattedDate}
                    </td>
                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      Processing
                    </td>
                    <th
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      Cencel
                    </th>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Orders;
