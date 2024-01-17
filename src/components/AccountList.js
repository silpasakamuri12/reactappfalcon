import React, { useEffect } from 'react';
import 'uswds/dist/css/uswds.min.css';
import "~uswds/dist/js/uswds.min.js";

const SortableUSWDSTable = () => {
  useEffect(() => {
    // Initialize the USWDS components after the component is mounted
    window.USWDS.init();
  }, []);

  const handleAction = (action) => {
    // Handle the action (e.g., Edit or Delete)
    console.log(`Handling ${action} action`);
  };

  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="tablet:grid-col">
          <table className="usa-table usa-table--sort">
            <thead>
              <tr>
                <th scope="col" data-sort="string">Account Number</th>
                <th scope="col" data-sort="string">Customer Name</th>
                <th scope="col" data-sort="string">Original</th>
                <th scope="col" data-sort="string">Predicted</th>
                <th scope="col" data-sort="number">Scores</th>
                <th scope="col" data-sort="action">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345</td>
                <td>John Doe</td>
                <td>Data1</td>
                <td>Data1</td>
                <td>95</td>
                <td>
                  <button className="usa-button" onClick={() => handleAction('Edit')}>Edit</button>
                  <button className="usa-button" onClick={() => handleAction('Delete')}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>67890</td>
                <td>Jane Smith</td>
                <td>Data2</td>
                <td>Data2</td>
                <td>85</td>
                <td>
                  <button className="usa-button" onClick={() => handleAction('Edit')}>Edit</button>
                  <button className="usa-button" onClick={() => handleAction('Delete')}>Delete</button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SortableUSWDSTable;
