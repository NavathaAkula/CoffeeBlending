import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InventoryTable = ({ data }) => {
  return (
    <div>
      <h2>Inventory Management</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Coffee Bean Type</th>
            <th>Subscription Demand (lbs/week)</th>
            <th>Prior Week Sales (lbs)</th>
            <th>This Week Sales (lbs)</th>
            <th>Total Demand (lbs)</th>
            <th>Amount to Roast (lbs)</th>
            <th>Available Beans (lbs)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const totalDemand = item.subscription + item.prior + item.current;
            return (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.subscription}</td>
                <td>{item.prior}</td>
                <td>{item.current}</td>
                <td>{totalDemand}</td>
                <td>{totalDemand}</td>
                <td className="available-beans">{item.available}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;