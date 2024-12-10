## TABELLE
-movies
-reviews

## MOVIES
-id | int AI PK 
-title | varchar(255) 
-director | varchar(255) 
-genre | varchar(255) 
-release_year | year 
-abstract | text 
-image | varchar(255)

## REVIEWS
-id | int AI PK 
-movie_id | int 
-name | varchar(255) 
-vote | tinyint 
-text | text