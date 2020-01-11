I'm assuming you have some sort of jsonor or restApi server running.
By any means you do not have a server up just google/youtube how to run a json server.
PS i will be posting a article soon upon this reason.
Let's get started.


# Json Server

> ./backend/db.json

* In the current project folder, create a backend directory

This is where we'll store our server data.

* Now Create a db.json

Ok, so technically use json syntax when dealing with the server.
Json works by using "key": "value" pairs, witch is the same as "name": "Tech Savvy".

Inside db file, start off by inserting curly braces ```{}```, the first object within this block is ```user```, this user "key" object creates a table with its array of objects "value".
Now insert each "key": "value" pairs within this array object is.
Each "key": "value" pair is the data you'll be collecting.

```ruby
{
    "user": [
        {
            "id": 1,
            "name": "Tech Savvy",
            "Status": ["Hello World"]
        }
    ]
}

```


# Creating A Interface

> src/app/user.model.ts

In this file, export a User class.
Within the blocks of this User class, insert the "key": "value" of the data you'll be collecting, whitch is on the server your either running or will be.

Now bare with me, the "key" may be somthing like "age", "name", "isMarried", ect.

While the "value" is the primative type of its "key" such as number, string, boolean.





```
```