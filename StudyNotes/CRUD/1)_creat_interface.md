I'm assuming you have some sort of jsonor or restApi server running.
By any means you do not have a server up just google/youtube how to run a json server.
PS i will be posting a article soon upon this reason.
Let's get started.


# Json Server

> ./backend/db.json

In the current project folder, create a backend directory, this is where we'll store our server data witch is our db.json.

So technically we use json syntax when dealing with server side.
Json works by using ```"key": "value"``` pairs, same as ```"name": "Tech Savvy"```.

Inside our db file, we create a block ```{ }```, within this block is a object.
A simple question such as "What data am I collecting" and "from who am I collecting it from" is really half the battle.

You can name it as you like,
For the sack of this artcle, and the project it's built upon.

The Object name is ```"users"```, this object is a "key", we most likely now or in the future have mutiple users. 
So the best why to manage this is by creating a table and each key represents the header while each value represents the data.

We can accomplish this by adding a array of objects as the "value".
Each object within this array will store is own data and simplier words the users data. 

Now, here is where we insert each "key": "value" pair of data we'll be collecting
from the object.

> Remember Json only uses "key": "Value" pairs
```ruby
{
    "user": [
        {
            "id": 1,
            "name": "Tech Savvy",
            "Status": ["I wonder is this data being collected"]
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