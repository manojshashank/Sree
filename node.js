const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

let locations = {
  Kompally: { connected: { Suchitra: 5 }, coordinates: { lat: 17.4833, lon: 78.4815 } },
  Suchitra: { connected: { Kompally: 5, ECIL: 7 }, coordinates: { lat: 17.5001, lon: 78.5253 } },
  ECIL: { connected: { Suchitra: 7, Ghatkesar: 6 }, coordinates: { lat: 17.4884, lon: 78.5500 } },
  Ghatkesar: { connected: { ECIL: 6 }, coordinates: { lat: 17.4191, lon: 78.6606 } },
};

function dijkstra(graph, startNode, endNode) {
  // Implementation of Dijkstra's algorithm here
}

app.post('/findPath', (req, res) => {
  const { source, destination } = req.body;
  const path = dijkstra(locations, source, destination);
  res.json({ path });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
