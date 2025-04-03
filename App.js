import React, { useState } from 'react';
import InventoryTable from './InventoryTable';
import Blending from './Blending';
import { inventoryData } from './inventoryData';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  const [data, setData] = useState(inventoryData);
  const [showInventory, setShowInventory] = useState(true);

  return (
    <div className="container">
      <h1>Coffee Roasting Inventory</h1>
      {showInventory ? <InventoryTable data={data} /> : <Blending data={data} setData={setData} />}
      <button 
        className="btn btn-success mt-3" 
        style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
        onClick={() => setShowInventory(!showInventory)}
      >
        {showInventory ? 'Go to Blending' : 'Go to Inventory'}
      </button>
    </div>
  );
}

export default App;
