import React from "react";

function Vastu() {
  const tips = [
    "Bedroom should be in the Southwest direction for stability.",
    "Main entrance facing East brings prosperity.",
    "Kitchen in Southeast direction promotes good health."
  ];

  return (
    <div className="p-8 bg-yellow-100">
      <h2 className="text-3xl font-bold mb-4">Vastu Tips</h2>
      <ul className="list-decimal ml-8">
        {tips.map((tip, i) => (
          <li key={i} className="mb-2">{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Vastu;
