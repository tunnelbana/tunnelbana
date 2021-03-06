const { createSelectors } = require("signalbox");

const cameras = require("./cameras");
const cells = require("./cells");
const connections = require("./connections");
const hexagons = require("./hexagons");
const journeys = require("./journeys");
const robots = require("./robots");
const stations = require("./stations");
const terrains = require("./terrains");
const tracks = require("./tracks");
const trains = require("./trains");
const viewport = require("./viewport");

export const select = {
  cameras: cameras.selectors,
  cells: cells.selectors,
  connections: connections.selectors,
  hexagons: hexagons.selectors,
  journeys: journeys.selectors,
  robots: robots.selectors,
  stations: stations.selectors,
  terrains: terrains.selectors,
  tracks: tracks.selectors,
  trains: trains.selectors,
  viewport: viewport.selectors,
};

const selectors = createSelectors(select, { stateAccessor: (s, entity) => s.get(entity) });

export default selectors;

