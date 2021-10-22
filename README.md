# EventTracker

This is a basic crud/curd project where the crud/curd takes place on the front end.  I originally was planning to do a major project with this with Garbage Pail Kids as the theme, but I ended up having a migraine so I changed it to migraines.  I plan on doing a big GPK project soon.

# Lessons Learned
* Creating a SQL database with MySQLWorkbench.
* Mapping an entity to a SQL table.
* Using JUnit tests to test if mapping is correct.
* Using Postman
* Creating basic front end crud/curd operations.

API Routes

get all migraines ☞ "migraine"

get migraines by range of intensity ☞ "migraine/search/intensity/{low}/{high}"

Save migraine to the tracker ☞ "migraine"

Find migraine by ID ☞ "migraine/{id}"

Delete migraine ☞ "migraine/{id}"

Update migraine ☞ "migraine/{id}"

Current access

http://52.73.75.43:8080/Migraine

# Problems
When I went to recreate my project I had problems with running my program because I kept getting an access denied with my database because I changed it.


# Updated
Doing full CRUD/CURD was quite difficult and I ended up having to google and copy much of the code because I didnt have an example of update and delete on the front end.  

I am overall pretty happy with how this turned out.  I like how the pain scale is limited to 1-10, something i didnt know how to do before but was extremely basic.  The biggest challenge in my experience was to get the headings for my dynamically created table.  I ended up using an id on table body instead of table and adding my own table heading on the html. I know there is a way to do this on the js with arrays but i didnt quite understand it and it is something that I am going to look into.
