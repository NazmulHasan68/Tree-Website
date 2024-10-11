#E-commerce MERN Stack project

## course plan

## ENvironment setup

## Express server setup

# Basic setup
    1. Course plan
    2. Environment setup
    3. Create express server ---> express
    4. HTTP request and response
    5. nodemon and morgan package --->nodemon, morgan
    6. postman / insomenia 
    7. Middleware  => client ----/profile/---> IsloggedIn (req, res, next) -------->server ---> body-parser
    8. Express Error Handling Middleware
    9. How to handle HTTP errors -> (http-errors)
    10. How to secure API -> XSS-clean(=>cross google), express-rate-limit(requst limit cheack)
    11. Environment variable and gitignore
    12. MVC Architecture  - MVC = Model view controller
    13. connect to MongoDB database
    14. Schema & model for user
    15. create seed route for testing
    16. GET /api/users --> isAdmin --> getAllusers --> searchByName + pagination functionlity
    17. responseHandler controller for error or success
    18. GET /api/users/:id -->get a single user by id
    19. How to create services in the backend
    20. DELETE /api/users/:id --> delete a single user by id
    21. Refactoring and reusability , dynamic
    22. deleteImage helper
    23. POST / api/ users/ register --> proces the registetion create an user (email - verification - jwt)
                                    1. create jwt 
                                    2. setup server and prepare email
                                    3. send mail with nodemailer
                                    4. validation input ----> npm i express-validator/joy
    25. filtering file by size and types 
    26 Should store image as String or buffer                               
    27. POST/ api/ users/ verify ---> verify + register into database
    28. and express validator middleware
    29. and multer middleware for file upload
    30. PUT / api/user/:id --> update a single user by id
    31. lgoin - authentication and authorization
    32. Middlewares ---> isLoggedIN, isLoggedOut, isAdmin
    33. GET /api/auth/refresh -> refresh the token
    34. input validation when signed in and refacetoring
    35. PUT/api/users/ban-user ----->ban user
    36. PUT / api/user/unban-user ----> unban user
    37. PUT / api/ users/ update-password ---> update the password
    38. PUT / api/ users / reset-password ---> reset the password
    39. Post / api/ users/ forget-password ----> 
    40. POST/ api/auth/refresh-token --->verify the token and give access to order routes
    41. refactoring
    42. modular code strcure
    43. winston logger library
    
    44. category Model and Input category
    45. category CURD -- create category
                GET : api/categories
                GET : api/categories/:slug
    46. category CURD -- Read category
    47. category CURD -- Update Category
    48. category CURD -- Delete category

    49. Product API - Product Model
    50. Product API - create seed route for testing product
    51. Product API - create Product POST api/products
    52. Product API - Read Product GET api/products--- GET api/product
    53. Product API - update Product
    54. Product API - Delete Product



    http - method/verbs - GET, POST, PUT, 
    http headers : content-type, cookies
    body - data

    satus cose - 200= success / 404/ 500 / 400
    http headers -cookies
    body - json HTML data

    nodemailer : bzkf etsu ovxq vdyi
    (excaildraw.com)- edito

    cloudinary - file -> form-data with multer -> cloudinary#   T r e e - W e b s i t e  
 