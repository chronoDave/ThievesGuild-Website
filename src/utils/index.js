const getStandardDeviation = (mean, data) => Math.sqrt(
  data
    .map(value => (value - mean) ** 2)
    .reduce((acc, cur) => acc + cur, 0) /
  data.length
);

const getTotalRatingCount = data => data.map(item => item.total_rating_count || 0);
const getTotalRatingCountMean = data => {
  const totalRatingCount = getTotalRatingCount(data);

  return (
    totalRatingCount.reduce((acc, cur) => acc + cur, 0) /
    totalRatingCount.length
  );
};
const getSigmaOne = data => {
  const totalRatingCountMean = getTotalRatingCountMean(data);
  const totalRatingCountData = getTotalRatingCount(data);

  const standardDevidation = getStandardDeviation(
    totalRatingCountMean,
    totalRatingCountData
  );

  return (standardDevidation - (standardDevidation * 0.341));
};

export const filterData = data => {
  const sigmaOne = getSigmaOne(data);

  return data
    .filter(item => item.total_rating_count >= Math.floor(sigmaOne));
};
