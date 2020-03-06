#### Data

De data gebruikt voor [Genres](./genres) en [Populariteit](./populariteit) zijn opgehaald uit de [IGDB](https://www.igdb.com/discover) via de [API](https://api-docs.igdb.com/#about).

De volgende endpoints en parameters zijn gebruikt:

```
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

De implementatie en datasets zijn te vinden op [GitHub](https://github.com/chronoDave/ThievesGuild-Scrape).

#### Implementatie

Om de datasets bruikbaar te maken is de dataset gefiltert op `total_rating_count`, waarbij de waarde binnen [-1σ, ∞] (SD = 95) ligt. Voor de implementatie, zie [GitHub](https://github.com/chronoDave/ThievesGuild-Scrape/blob/master/src/utils.js).

#### Genres

Voor de [Genres](./genres) pagina is de dataset gesorteerd op `first_release_date`, `year` en `genres`. Vervolgens zijn de hoeveelheid games onder dezelfde genre bij elkaar opgeteld.

Voor de totale hoeveelheid games per jaar is de hoeveelheid games per genre bij elkaar opgeteld. Voor de implementatie, zie [GitHub](https://github.com/chronoDave/ThievesGuild-Website).

#### Populariteit

Voor de [Populariteit](./popularity) pagina is de dataset gesorteerd op `total_rating`, waar vervolgens de top 50 games zijn geselecteerd.
