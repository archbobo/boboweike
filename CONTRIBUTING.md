## Contributing

To contribute you will first need to fork the repo and make some adjustments to get it up and running on your local
machine. Below are the steps to follow in order for you to get dotfyle to run on your local machine.

### 1. Create a `.env` file

```
cp .env.example .env
```

Provide your own values as needed.

### 2. Setup PostgreSQL.

Starting the docker container

```
docker compose up -d
```

see `docker-compose.yaml`

### 3. Create a new GitHub OAuth Application

[Follow this link][new-oauth] to create a new app filling the following required details on creation:

```
Homepage URL: http://localhost:3000
Authorization callback URL: http://localhost:3000/api/auth/callback/github
```

Once completed, you will be redirected to the application page settings, from there create the client secret by clicking
on `Generate a new client secret` button.

Next, copy the client secret generated and the client ID into the `.env` file, replacing `<client_id>` and
`<client_secret>`, respectively:

```
GITHUB_ID=<client_id>
GITHUB_SECRET=<client_secret>
```

### 4. Setup uploadthing for file uploads

Go to [uploadthing.com](https://uploadthing.com/dashboard) and create a project, then copy in the secrets into your `.env`.

### 5. Install dependencies

Use `pnpm` to install dependencies.

```
pnpm install
```

### 6. Push Database Schema and Seed

```
pnpm db:push
pnpm db:seed
```

### Running the dev server

Finally, you can run the dev server:

```
pnpm dev
```

### Sync data

Once the server is running you can seed and sync data

1. Navigate to [http://localhost:3000/api/auth/signin](http://localhost:3000/api/auth/signin) to authenticate with GitHub OAuth.

#### Tips

if you ever need to blow away everything in your data and reseed run:

```
pnpm refresh
```

[new-oauth]: https://github.com/settings/applications/new

#### Dependencies

UI Library: [shadcn](https://ui.shadcn.com/)
