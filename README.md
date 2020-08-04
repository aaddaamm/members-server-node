# guilds-server-node

This server is built using Type-ORM and express.

you need to create a postgres DB called guilds. then create a .env file with connection information.

```
CREATE DATABASE "guilds";
```

```
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = user
TYPEORM_PASSWORD = password
TYPEORM_DATABASE = guilds
TYPEORM_PORT = 5432
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = entity/*.js,modules/**/entity/*.js
TYPEORM_MIGRATIONS = src/migration/**/*.ts
TYPEORM_SUBSCRIBERS = src/subscriber/**/*.ts
```