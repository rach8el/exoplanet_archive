
import React, { useState } from "react";

const initialData = [
  { name: '11 UMi b', discovery_facility: '2.0m Alfred Jensch Telescope'},
  { name: '17 Sco b', discovery_facility: 'Lick Observatory'},
  { name: '91 Aqr b', discovery_facility: 'Lick Observatory'},
  { name: 'COCONUTS-2b', discovery_facility: 'NASA Infrared Telescope Facility (IRTF)'},
  { name: '14 Her b', discovery_facility: 'W. M. Keck Observatory'},
  { name: 'DP Leo b', discovery_facility: 'Yunnan Astronomical Observatory'},
  { name: 'HAT-P-64b', discovery_facility: 'HATNet'},
  { name: 'HD220689b', discovery_facility: 'La Silla Observatory'},
];

function Sheet() {
  const [data] = useState(initialData);

  return (
    <table border="1" style={{ 
        borderCollapse: "separate", 
        margin: "20px auto" }}>
      <thead>
        <tr>
          <th>Planet Name</th>
          <th>Discovery Facility</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            <td style={{ 
                padding: "8px 30px", 
                background: "lightgrey",
                }}>
              {row.name}
            </td>
            <td style={{ 
                padding: "8px 20px", 
                background: "white",
                 }}>
                
              {row.discovery_facility}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Sheet;

