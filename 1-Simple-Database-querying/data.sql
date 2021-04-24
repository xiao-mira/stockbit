CREATE TABLE IF NOT EXISTS User (
	ID INTEGER PRIMARY KEY,
	UserName TEXT NOT NULL,
	Parent INTEGER
)

INSERT INTO User (ID, UserName, Parent) VALUES(1, "Ali", 2)
INSERT INTO User (ID, UserName, Parent) VALUES(2, "Budi", 0)
INSERT INTO User (ID, UserName, Parent) VALUES(3, "Cecep", 1)

SELECT child.UserName, parent.UserName
FROM User child LEFT join User Parent 
    ON child.Parent = Parent.ID