import React from 'react';

const Select = (props) => {
  const [item] = React.useState([
    "Jakarta",
    "Bogor",
    "Depok",
    "Tangerang",
    "Bekasi",
  ]);

  const lokasi = props.item || item
  const handleChange = (event) => {
    window.alert(event.target.value);
  }
  return (
    <div>
      <select onChange={handleChange}>
          {
            lokasi.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              )
            })
          }
      </select>
    </div>
  );
};

export default Select;