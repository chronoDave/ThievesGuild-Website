#### Data source

The data for [Genres](./genres) and [Popularity](./popularity) are obtained from [IGDB](https://www.igdb.com/discover) using their [API](https://api-docs.igdb.com/#about).

The following endpoints were used:

```
!block!
// Games
Url:
 - https://api-v3.igdb.com/games
Fields:
  - rating
  - rating_count
  - aggregated_rating
  - aggregated_rating_count
  - total_rating
  - total_rating_count
  - first_release_date
  - hypes
  - name
  - franchise
  - genres
  - involved_companies
  - platforms
  - popularity
  - cover
Limit:
 - 150
Offset:
  - 33 * 150 (4950)
Where:
  - category = 0 & first_release_date > 788918400 & popularity > 1 & rating_count > 1 & version_parent = null
Sort:
  - first_release_date

// Cover
Url:
 - https://api-v3.igdb.com/covers
Fields:
  - url
Limit:
  - 150
Where:
  - covers.map(cover => id = cover).join(' | ')
```

Implementation can be found in [@gsz/scraper](https://github.com/chronoDave/ThievesGuild-GZS/blob/master/packages/gzs-scraper/src/utils.js).

The datasets can be found here: [Games](https://raw.githubusercontent.com/chronoDave/ThievesGuild-GZS/master/packages/gzs-react/src/static/json/response.json), [Cover](https://raw.githubusercontent.com/chronoDave/ThievesGuild-GZS/master/packages/gzs-react/src/static/json/cover.json).

#### Implementation

To shrink the dataset (and make the data more meaningful), only games where the `total_rating_count` is within [-1σ, ∞] are selected (SD = 95). For implementation, see [@gzs/utils](https://github.com/chronoDave/ThievesGuild-GZS/blob/master/packages/gzs-utils/src/index.js).

##### Genres

For the [Genres graph](./genres), the dataset is sorted by `first_release_date`. The dataset is then grouped by `year` and `genres`. Then, the `genres` are counted for each year. This method does include duplicate genres.

For the total bar, all `genres` are added up, excluding duplicates (games with multiple genres).

For implemtentation, see [@gzs/react - GraphGenres.jsx](https://github.com/chronoDave/ThievesGuild-GZS/blob/master/packages/gzs-react/src/modules/Graph/GraphGenres.jsx) and [@gzs/react - Popularity.page.jsx](https://github.com/chronoDave/ThievesGuild-GZS/blob/master/packages/gzs-react/src/pages/Popularity.page.jsx).

##### Popularity

For the [Popularity page](./popularity), the dataset is sorted by `total_rating`, from which the top 50 games are selected.