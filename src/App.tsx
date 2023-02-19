import React, { useState } from 'react';
import MultiDropdown, { Option } from './components/MultiDropdown/MultiDropdown';

const App: React.FC = () => {
  const options = [
    { key: 'msk', value: 'Moscow' },
    { key: 'spb', value: 'Saint Petersburg' },
    { key: 'ekb', value: 'Yekaterinburg' },
  ];

  const [value, setValue] = useState([options[0]]);

  const handleChange = (newValue: Option[]) => {
    setValue(newValue);
  };

  const pluralizeOptions = (values: Option[]) => {
    if (values.length === 0) {
      return 'Select city';
    } else if (values.length === 1) {
      return values[0].value;
    } else {
      return `Выбрано: ${values.length}`;
    }
  };

  return (
    <div>
      <MultiDropdown
        options={options}
        value={value}
        onChange={handleChange}
        pluralizeOptions={pluralizeOptions}
      />
    </div>
  );
};

export default App;