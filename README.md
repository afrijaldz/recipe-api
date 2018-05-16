# Recipe API

RESTful API for recipes and the ingredients.

## Endpoints

| Method  | Endpoint          | Description                 | Data                  |
|---------|-------------------|-----------------------------|-----------------------|
| GET     | /                 | List of recipes             | `[{}, {}, {}]`        |
| GET     | /:id              | View a recipe               | `{}`                  |
| POST    | /                 | Create a new recipe         | `{"status": ""}`      |
| PUT     | /:id              | Update a recipe             | `{"status": ""}`      |
| DELETE  | /:id              | Delete a recipe             | `{"status": ""}`      |
