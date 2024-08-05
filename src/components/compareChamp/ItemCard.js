import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import useItemStats from "../../hooks/useItemStats";

function ItemCard({ items }) {
  const { formatStatValue } = useItemStats();

  if (items.length === 0) {
    return <div>No items selected</div>;
  }

  const renderItemStats = (item) => {
    return Object.entries(item.stats).map(([key, value]) => {
      if (value.flat !== 0 || value.percent !== 0) {
        const formattedValue = formatStatValue(value);

        return (
          <ListGroup.Item key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
            {formattedValue}
          </ListGroup.Item>
        );
      }
      return null;
    });
  };

  return (
    <div>
      {items.map((item, index) => (
        <Card key={index} className="mb-3">
          <Card.Img
            variant="top"
            src={item.icon}
            style={{ width: "64px", height: "64px", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Cost: {item.shop.prices.total} gold
            </Card.Subtitle>
          </Card.Body>
          <ListGroup variant="flush">{renderItemStats(item)}</ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default ItemCard;
