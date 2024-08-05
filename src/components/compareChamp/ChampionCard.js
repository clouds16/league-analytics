import React from "react";
import { Card, ListGroup, Form } from "react-bootstrap";
import useChampionStats from "../../hooks/useChampionStats";

function ChampionCard({
  champion,
  level,
  setLevel,
  otherChampion,
  otherLevel,
  isAatrox,
}) {
  const { getStatColor, formatStat } = useChampionStats();

  if (!champion || !otherChampion) {
    return <div>Loading champion data...</div>;
  }

  const renderChampionStats = () => {
    const relevantStats = [
      "health",
      "mana",
      "armor",
      "magicResistance",
      "attackDamage",
      "attackSpeed",
    ];

    return relevantStats.map((key) => {
      if (key in champion.stats) {
        const color = getStatColor(
          champion.stats[key],
          otherChampion.stats[key],
          level,
          otherLevel,
          isAatrox
        );

        const formattedStat = formatStat(champion.stats[key], level);

        return (
          <ListGroup.Item key={key} style={{ backgroundColor: color }}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
            {formattedStat}
          </ListGroup.Item>
        );
      }
      return null;
    });
  };

  return (
    <Card>
      <Card.Img
        variant="top"
        src={champion.icon}
        style={{ width: "64px", height: "64px", margin: "10px auto" }}
      />
      <Card.Body>
        <Card.Title>{champion.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {champion.title}
        </Card.Subtitle>
        <Form.Group className="mb-3">
          <Form.Label>Champion Level</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="18"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
          />
        </Form.Group>
      </Card.Body>
      <ListGroup variant="flush">{renderChampionStats()}</ListGroup>
    </Card>
  );
}

export default ChampionCard;
