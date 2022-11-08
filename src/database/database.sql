CREATE DATABASE authtodos


CREATE TABLE users(
  id uuid DEFAULT uuid_generate_v4(),
  username VARCHAR(255) UNIQUE NOT NULL,
  pass VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)

);

CREATE TABLE todos(
  todo_id SERIAL,
  user_id UUID,
  todo_desc VARCHAR(255) NOT NULL,
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) references users(id)
 
);