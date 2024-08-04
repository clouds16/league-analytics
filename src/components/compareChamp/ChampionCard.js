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
        const backgroundColor = getStatColor(
          champion.stats[key],
          otherChampion.stats[key],
          level,
          otherLevel,
          isAatrox
        );
        return (
          <ListGroup.Item key={key} style={{ backgroundColor }}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
            {formatStat(champion.stats[key], level)}
          </ListGroup.Item>
        );
      }
      return null;
    });
  };

  return (
    <Card>
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <img
          src={champion.icon}
          alt={`${champion.name} icon`}
          style={{ width: "12.5%", height: "auto" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{champion.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {champion.title}
        </Card.Subtitle>
        <Form.Group className="mb-3">
          <Form.Label>Champion Level</Form.Label>
          <Form.Select
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
          >
            {[...Array(18)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Level {i + 1}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Card.Body>
      <ListGroup variant="flush">{renderChampionStats()}</ListGroup>
    </Card>
  );
}

export default ChampionCard;
