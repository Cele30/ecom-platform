## frontend - react && redux && tailwindcss

- ## features

  -checkout
  -promotions
  -search
  -user
  -rating
  -filter
  -active && inactive products
  -ability to select options such as featured, free shiping, reviews allowed
  -Feature categories within navigation or on the homepage
  -Manage categories and sub-categories
  --pagination
  ----stripe payment

- # components
  -Navigation
  -header(showcase - hero)
  -promotions
  -login
  -singup
  -checkout
  -userProfile
  -products
  -footer
  -shopping-cart
  -discounts

## folder structure

/src
|-/assets
|-/components
|-/store (global redux store, slices, actions, reducers)
|-/utils (utilities, helpers, constants)
|-/hooks
|-/pages
|-/App.js (routing, auth)
|-/index.js (entry point)

## backend - firebase

- ## product

  -id
  -name
  -desc
  -SKU
  -categoryID
  -inventoryID
  -price
  -active

- ## product-cateogry

  -id
  -name
  -desc
  -created_at

- ## product-inventory

  -id
  -quantity
  -created_at

- ## user

  -id
  -username
  -first_name
  -last_name
  -email

- ## order-detalis

  -orderId
  -userId
  -totalPrice
  -orderItems: {orderItemId, quantity}
  -created_at
  -city
  -country
  -postal_code
  -address

- ## shopping-cart
  -productId
  -quantity
  -userId
  -created_at
