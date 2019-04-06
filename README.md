# 13-Assignment

## What I was trying to do:
I was trying to make a demo webpage that uses an ORM to create, read and update a SQL database

## Tools used
* Handlebars
* CSS
* JavaScript
* Node
* MySQL

## What I did
The first thing I did was configuring my server.js file, then I set up my database schema, which included an Id primary key, name and a boolean stating whether the sandwich had been eaten. After that I configured the SQL connection, then built my ORM functions for reading the entire database, adding an entry to the database, and updating a select entry within the database. After that I built my router, which connected my ORM functions to different route requests, which were in turn configured to my client side javascript that would issue ajax requests. Lastly, I made the Handlebars HTML and CSS.

## Bugs
I had a few minor bugs in getting Handlebars to load my data, but this went pretty smoothly otherwise.
