mongoimport --host=127.0.0.1 --db blog --collection users --file ./db/users.json --jsonArray --drop
mongoimport --host=127.0.0.1 --db blog --collection articles --file ./db/articles.json --jsonArray --drop
