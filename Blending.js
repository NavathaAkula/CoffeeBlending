import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blending = ({ data, setData }) => {
  const handleBlend = () => {
    const selectedRegions = data.filter(item => item.selected);

    if (selectedRegions.length > 2) {
      alert('You can select a maximum of 2 regions.');
      return;
    }

    const updatedData = data.map(item => {
      if (item.selected) {
        const beansUsed = 3;
        if (item.available >= beansUsed) {
          return { ...item, available: item.available - beansUsed, selected: false };
        } else {
          alert(`Insufficient beans for ${item.type}`);
        }
      }
      return item;
    });

    setData(updatedData);
  };

  const toggleSelection = (index) => {
    setData(prevData =>
      prevData.map((item, i) => i === index ? { ...item, selected: !item.selected } : item)
    );
  };

  return (
    <div>
      <h2>Blending Table</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Region</th>
            <th>Available Beans (lbs)</th>
            <th>Select for Blend</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td className="available-beans">{item.available}</td>
              <td>
                <input 
                  type="checkbox" 
                  checked={item.selected || false} 
                  onChange={() => toggleSelection(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={handleBlend}>Blend</button>
    </div>
  );
};

export default Blending;