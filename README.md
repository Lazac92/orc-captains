# In this repo

## Technology
This repo contains a Strapi CMS + API server (`server`) and a Nuxt SPA (`client`).

## Theme
The application is for managing and list Orc captains from the game Shadow Of Mordor.


## Run the server

```
  cd server
  npm install
  npm run serve
```

## Run the client

```
  cd client
  npm install
  npm run serve
```


## Usage
The `server` will start on http://localhost:1337/.

Admin credentials:
```
root.admin@example.com
Password123
```
After logging in, you can:
1. add `Captains` to the database, or manage existing ones. 
2. Create and manage `Pages`

### Create `Captains`
1. Enter the `title`
2. insert `image`
3. save
4. publish

### Create `Pages`
1. Enter the page title
2. change the page URL if needed
3. Enter the content (multiple short texts and/or images)
4. save
5. publish


`Client` will be available on http://localhost:3000/.

After opening it, the list of the `Captains` will appear.

You can add one of the page URLs to the end of the address to reach a subpage (ie: http://localhost:3000/second-page). 
