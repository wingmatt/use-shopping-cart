# NextJS Example for use-shopping-cart

This example fetches data from your Stripe account to display products.

## Get Started

Clone the repo

```
git clone git@github.com:dayhaysoos/use-shopping-cart.git
```

Navigate into the example directory

```
cd example
```

## Install the dependencies:

```
npm install

or

yarn install
```

## Set your Stripe information as environment variables

[NextJS uses .env files to set private environment variables](https://nextjs.org/docs/basic-features/environment-variables). Copy the .env.local.example file in this directory and rename the copy to .env.local. 

Go to your [Stripe dashboard's test API Keys section](https://dashboard.stripe.com/test/apikeys), and enter your publishable and secret keys into the `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` variables in the newly-created file.

## Create Stripe Products & Prices

This example fetches product & price information directly from your Stripe account, so you will need to [build some test products in your Stripe Dashboard](https://dashboard.stripe.com/test/products) in order to see the example working as intended.

Standard pricing models without metered usage are supported. Prices can be one-time or recurring.

## Start the project

```
npm dev

or

yarn dev
```

Open or Click the url http://localhost:3000 to view it in the browser.