# shop

# Shop

# Foreword

So, I am planning to build an online shop of some kind of shop that operates offline
I wanna keep it simple for now.
Backend is going to be REST API written in typescipt, and also planning to write the frontend part in ReactJs using Typescript.
Aim of the project is to get to practice coding after a long time, so I am making myself a challenge to write a somewhat functional app in Typescipt.
first, I am gonna start with backend. First step on building a backend server, I think is to know what exactly I want it to be like, so below I am gonna make a list of bare-minimum functionality of the shop.

## Homepage

### Dynamic Editable list of products shown in homepage:

1. Id: Product
2. Image with fixed size with aspect ration of 16:10

---

### Catalog/Search

So I came to conclusion, that catalog is the same as searching

1. Search by name
2. Search by manufacturer
3. Search by category (processors, fans, power supplies, monitors)
4. Search manufacturers products by categories
5. Sort: 1. Lowest and highest price 2. In the range of price specified by user 3. Amount of sales 4. Rating 5. On Sale 6. Manufacturer

---

## Product

1. Get all info about product by id
2. Buy a product -registred
   User must provide following info upon buying a product:
   1. Shipping address
   2. Postal code
   3. Phone number to contact
3. Report a product -registred
4. Write a review of a product -registred
5. Write some textual review
6. Optional: add photos of the product
7.
8. Rate a product -registred
9. Add product to wishlist
10. Add product to basket

a process of writing a review for now would be as following:

1. Customer can write a review only for a product that they have bought
2. So, review field will be available for anyone, but upon clicking it, a request will be sent to server to check if customer has bought this product or not Or i can make it so that before rendering product page, alongside requesting info of the product, another request will be sent if the user is logged in, to check if user has it in the list of bought items

## User

1. Register with unique username and password
2. Login
3. User has a wishlist
4. User has a list of items that they have bought
5. User can set information that is needed to buy a product, before buying it.
6. User can delete an account

## Admin

1. There is an account, root account that cannot be deleted.
   Credentials are as following: username: admin password: admin
2. Admin account can add product categories("laptop", "gpu", "monitor")
3. Admin account can add manufacturers, the same thing as 2.
4. Admin can create characteristics for product categories, that where product categories differ from manufacturer:
   It is gonna work as following: first admin adds a category, then specifies what kind of fields of characteristics does this category have, example:
   admin adds a category of laptops, then adds fields called "monitor resolution", "processor", "gpu","disk" and any other imaginable fields.
5. Admin can add a product, the process is as following:
   First specifies products category(beverages), then manufacturer, then creates specifications for the product("1L", "2L" and etc)
   Specifications is basically different versions of the same product - amount of specifications is not limited 1. admin must specify which of the specifications gonna be the default one, default specification of the product is gonna have a required field of title that is gonna be shown in the title of the product, the price and the pictures shown for the product is also taken from the default specification. 2. specifications have separate price, separate name("1L" "2L" etc), optionally separate images, specifications can have an optional field of sale price. Specifications also have a required field of extraSpecs where admin gives information about the product/separate specification ("material", "expiration perioed", "ram" "disk" "processor" fields of laptop for example). extra specs is required only for default specifiation of the product
