import { getSigmaOne } from 'tg-utils/src/utils';

export const filterData = data => {
  const sigmaOne = getSigmaOne(data);

  return data
    .filter(item => item.total_rating_count >= Math.floor(sigmaOne));
};
