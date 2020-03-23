# Catalogue of favourite movies

Simple app for adding and geting random film.

## Install
    npm install
## Run the app
    node app.js

App runs on http://127.0.0.1:3000/
# API
All requests have to be JSON type.
Mark `*` mean required filed.
### Request

`GET /`
    Allow check if server works properly (except '/').
### Response
    server is on

### Request

`POST /film/`
    Adding new film to db:
    requirements:
    
- a list of genres (only predefined ones from db file) (required, array of predefined strings)
- title (required, string, max 255 characters)
- year (required, number)
- runtime (required, number)
- director (required, string, max 255 characters)
- actors (optional, string)
- plot (optional, string)
- posterUrl (optional, string)

example: 

    {
        "title": "Beetlejuice",
        "year": "1988",
        "runtime": "92",
        "genres": [
        "Comedy",
        "Fantasy"
        ],
        "director": "Tim Burton",
        "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
        "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
    }
### Response
    Valid: {}
    Error: {error: "missing|invalid request properties"}
