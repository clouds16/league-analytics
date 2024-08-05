import React from "react";
import { Form } from "react-bootstrap";

function ItemDropdown({ items, selectedItem, onSelectItem }) {
  return (
    <Form.Select
      value={selectedItem}
      onChange={(e) => onSelectItem(e.target.value)}
    >
      <option value="">Select an item</option>
      {Object.entries(items).map(([id, item]) => (
        <option key={id} value={id}>
          {item.name}
        </option>
      ))}
    </Form.Select>
  );
}

export default ItemDropdown;
