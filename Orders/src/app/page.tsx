import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function ResponsiveExample() {
  type DataType = {
    shpiify: string;
    date: string;
    status: string;
    customer: string;
    email: string;
    country: string;
    shipping: string;
    sourse: string;
    order_type: string;
  };

  const data: DataType[] = [
    {
      shpiify: "17713",
      date: "22 Jan 2020",
      status: "pending",
      customer: "Ahmed",
      email: "ahmed.123@mail.com",
      country: "Australia",
      shipping: "Australian Post Api",
      sourse: "ShopifyAU",
      order_type: "Customer",
    },
  ];

  return (
    <div className="p-3" style={{backgroundColor: "#EDF0F7"}}>
      <div className="d-flex justify-content-between align-items-center my-3">
        <h3 className="fw-bold">Orders</h3>
        <button className="btn btn-primary">CREATE NEW</button>
      </div>

      <div className="w-100 py-2 my-3 ">
        <div className="d-flex  justify-content-center align-items-center w-100 rounded p-1 bg-white cust-shadow"  >
        <div className="row w-100">
          <div className="col-sm mb-2">
            <div className="fw-bold">
            What are you looking for?
            </div>
            <div style={{backgroundColor:"#EDF0F7"}} className="form-control d-flex justify-content-center align-items-center">
              <span><i className="bi bi-search"></i></span>
              <input
                  className="border-0 w-100 ms-2 "
                  type="search"
                  placeholder="Search for category,name,comany,etc"
                  aria-label="Search"
                  style={{backgroundColor:"#EDF0F7",outline:"none"}}
                  
                />
            </div>

          </div>
          <div className="col-sm mb-2">
            <div className="row">
            <div className="col-3">
              <div>Category</div>
              <div className="form-control d-flex justify-content-between ">
                  {" "}
                  <span>All</span>
                  <i className="bi bi-chevron-down"></i>{" "}
                </div>

            </div>
            <div className="col-3">
              <div>Status</div>
              <div className="form-control d-flex justify-content-between ">
                  {" "}
                  <span>All</span>
                  <i className="bi bi-chevron-down"></i>{" "}
                </div>

            </div>

            <div className="col-2 d-flex justify-content-center align-items-end ">
            <div className="d-flex justify-content-center align-items-center px-3 "><i className="bi bi-chevron-double-down form-control"></i></div>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-end">
            <button className="btn btn-primary">SEARCH</button>
            </div>
            </div>
          </div>

        </div>



        </div>
        
      </div>

      <div className="py-3 bg-white rounded px-1 my-3 cust-shadow">
        <div className="row mb-2 px-1 ">
          <div className="col-sm mb-2">
          <h4 className="">Product Summery</h4>
          </div>
          <div className="col-sm mb-2 text-center">
          
          <div className="d-flex justify-content-center align-items-center gap-3">
            <div className="">Show</div>
            <div className="form-control d-flex justify-content-between align-items-center gap-2 ">
                  {" "}
                  <span className="fw-bold">ALL COLUMN</span>
                  <i className="bi bi-chevron-down"></i>{" "}
                </div>
            </div>
          </div>
          
          <div className="col-sm text-start mb-2">
          <div className="btn btn-primary">DISPATCH SELECTED</div>
          
          </div>
          <div className="col-sm mb-2 w-75">
            <div className="d-flex justify-content-center align-items-start w-75">
              <div className="active"><i className="bi bi-chevron-left"></i></div>
              <div className="active">1</div>
              <div className="active">2</div>
              <div className="rounded bg-primary active">3</div>
              <div>....</div>
              <div className="active">10</div>
              <div className="active"><i className="bi bi-chevron-right"></i></div>
            </div>
            
          </div>
          
        </div>
        <Table responsive className="text-light table">
          <thead >
            <tr style={{backgroundColor:"#EDF0F7 !important"}}>
              <th>
                <Form.Check inline label="ID" />
              </th>
              <th>SHPIIFY#</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>CUSTOMER</th>
              <th>EMAIL</th>
              <th>COUNTRY</th>
              <th>SHIPPING</th>
              <th>SOURSE</th>
              <th>ORDER TYPE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Check inline label="1077620" checked />
                </td>
                <td>{item.shpiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.order_type}</td>
                <td>
                  <i className="bi bi-pencil-square text-secondary"></i>
                </td>
              </tr>
            ))}
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Check inline label="1077622" />
                </td>
                <td>{item.shpiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.order_type}</td>
                <td>
                  <i className="bi bi-pencil-square text-secondary"></i>
                </td>
              </tr>
            ))}

            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Check inline label="1077623" checked />
                </td>
                <td>{item.shpiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.order_type}</td>
                <td>
                  <i className="bi bi-pencil-square text-secondary"></i>
                </td>
              </tr>
            ))}

            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Check inline label="1077620" />
                </td>
                <td>{item.shpiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.order_type}</td>
                <td>
                  <i className="bi bi-pencil-square text-secondary"></i>
                </td>
              </tr>
            ))}
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Check inline label="1077620 " />
                </td>
                <td>{item.shpiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.order_type}</td>
                <td>
                  <i className="bi bi-pencil-square text-secondary"></i>
                </td>
              </tr>
            ))}
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Check inline label="1077620" />
                </td>
                <td>{item.shpiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.order_type}</td>
                <td>
                  <i className="bi bi-pencil-square text-secondary"></i>
                </td>
              </tr>
            ))}
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Check inline label="1077620" checked/>
                </td>
                <td>{item.shpiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.order_type}</td>
                <td>
                  <i className="bi bi-pencil-square text-secondary"></i>
                </td>
              </tr>
            ))}
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Check inline label="1077620" />
                </td>
                <td>{item.shpiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.order_type}</td>
                <td>
                  <i className="bi bi-pencil-square text-secondary"></i>
                </td>
              </tr>
            ))}
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Form.Check inline label="1077620" />
                </td>
                <td>{item.shpiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.order_type}</td>
                <td>
                  <i className="bi bi-pencil-square text-secondary"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        
      </div>
    </div>
  );
}

export default ResponsiveExample;
