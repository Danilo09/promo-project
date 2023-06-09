# Hello everyone!

### Resume:

This project was built with the intention of delivering a small application containing a product on the homepage, routers to other pages, a form with its rules for login and registration, a graphic with 3 cities and a button that brings status images of common errors .

## Getting Started

First, run the development server:

```bash

npm install
npm run dev

```

Second, run the API that contains the endpoints necessary to the form works correctly

The API was built in PHP and wordpress, so its necessary install the wordpress project with some steps:

First, download wordpress: https://br.wordpress.org/download/

After, follow these steps:

- Download Wamp or Xamp or Mamp to be able to run the api locally.

- Put the wordpress downloaded into the htdocs.

- In wp-content/themes/ put the api folder.

After config wordpress settings:

- In Appearence activate theme API.

- In plugins/ adicionar novo plugin / search for: JWT Authentication for WP-API

Follow theses tips to have no problems with Cors: https://br.wordpress.org/plugins/jwt-authentication-for-wp-rest-api/

- Inside .htacess add:

```bash

RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]

```

To add the secret key edit your wp-config.php file and add a new constant called JWT_AUTH_SECRET_KEY

```bash

define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');

```

You can use a string from here https://api.wordpress.org/secret-key/1.1/salt/

```bash

define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');

```

To enable the CORs Support edit your wp-config.php file and add a new constant called JWT_AUTH_CORS_ENABLE

```bash

define('JWT_AUTH_CORS_ENABLE', true);

```

After all, just change the URL API in service.js to your url api.
