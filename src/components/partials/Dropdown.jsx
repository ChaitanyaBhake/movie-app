import React, { useState } from 'react';

const Dropdown = ({ title, options, func }) => {
    const [selected, setSelected] = useState(false);

    const handleSelection = (e) => {
        setSelected(true);
        func(e);
    };

    return (
        <div className="select">
           
            <select defaultValue="0" onChange={handleSelection} name="format" id="format">
                <option value="0" disabled={selected}>
                    {title}
                </option>
                {options.map((o, index) => (
                    <option key={index} value={o}>
                        {o.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;