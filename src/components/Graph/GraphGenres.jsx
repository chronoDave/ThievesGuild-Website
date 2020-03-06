import React from 'react';
import groupBy from 'lodash.groupby';

// Core
import GraphBase from './GraphBase';

// Utils
import { filterData } from '../../utils';

// Data
import dataGames from '../../public/data/games_full.json';

import { legend } from './legend';

/**
 * - Filter data [-1σ, ∞]
 * - Populate date fields based on first_release_data
 */
const filteredData = filterData(dataGames)
  .sort((a, b) => {
    if (a.first_release_date < b.first_release_date) return -1;
    if (a.first_release_date > b.first_release_date) return 1;
    return 0;
  })
  .map(item => ({
    year: new Date(item.first_release_date * 1000).getFullYear(),
    ...item
  }));
const dataByYear = groupBy(filteredData, 'year');
const dataGenres = [
  ...new Set(filteredData
    .map(item => item.genres)
    .flat()
    .filter(item => item))
];

// Datasets
const datasetsGenres = dataGenres
  .map(genre => {
    const legendGenre = legend.genres[genre];

    return ({
      // General
      fill: false,
      lineTension: 0,
      label: legendGenre.label,
      backgroundColor: legendGenre.border,
      borderColor: legendGenre.color,
      // Data
      data: Object
        .keys(dataByYear)
        .map(year => dataByYear[year]
          .filter(item => item.genres)
          .filter(item => item.genres.includes(parseInt(genre, 10)))
          .length)
    });
  });

const datasetTotal = {
  label: 'Total',
  type: 'bar',
  data: Object
    .values(dataByYear)
    .map(item => item.length)
};

const GraphGenres = () => (
  <GraphBase
    type="line"
    title="Genre distribution of popular games between 1995 and 2019"
    labels={Object.keys(dataByYear)}
    datasets={[
      ...datasetsGenres,
      datasetTotal
    ]}
  />
);

export default GraphGenres;
