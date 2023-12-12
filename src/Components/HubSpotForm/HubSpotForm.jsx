import React, { useState } from 'react';
import HubspotForm from 'react-hubspot-form';

const HubSpotForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      {!showForm && (
        <button onClick={handleButtonClick} className="btn btn-lg info-btn px-lg-4 px-2">Request More Info</button>
      )}
      {showForm && (
        <HubspotForm
         region= "na1"
    portalId= "23983658"
    formId= "86a81acc-d34b-4005-b36a-72bf52f49f2c"
          onSubmit={() => console.log('Form submitted')}
          onReady={(form) => console.log('Form ready', form)}
          loading={<div>Loading...</div>}
        />
      )}
    </div>
  );
};

export default HubSpotForm;
