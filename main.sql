CREATE TABLE shopping (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `completed` TINYINT NOT NULL,
    `created` DATE NULL
);

CREATE TABLE shopping_item (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `item` TEXT,
    `weight` INTEGER NOT NULL,
    `weightType` INTEGER NOT NULL,
    `listId` INTEGER NOT NULL,
    FOREIGN KEY (listId) REFERENCES shopping (id),
    FOREIGN KEY (weightType) REFERENCES weight_type (id)
);

CREATE TABLE recipe (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `name` TEXT
);

CREATE TABLE recipe_instruction (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `instruction` TEXT,
    `recipeId` INTEGER NOT NULL,
    FOREIGN KEY (recipeId) REFERENCES recipe (id)
);

CREATE TABLE recipe_item (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `item` TEXT,
    `weight` INTEGER NOT NULL,
    `weightType` INTEGER NOT NULL,
    `recipeId` INTEGER NOT NULL,
    FOREIGN KEY (recipeId) REFERENCES recipe (id),
    FOREIGN KEY (weightType) REFERENCES weight_type (id)
);

CREATE TABLE weight_type (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `name` TEXT,
    `divisibleBy` INTEGER NOT NULL,
    `divisible` TINYINT
);

CREATE TABLE fridge_item (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `name` TEXT,
    `weight` INTEGER NOT NULL,
    `weightType` INTEGER NOT NULL,
    FOREIGN KEY (weightType) REFERENCES weight_type (id)
);

INSERT INTO weight_type (name, divisibleBy, divisible) VALUES ('kilo', 1000, 1), ('litre', 1000, 1), ('individual', 1, 0);

INSERT INTO recipe (name) VALUES ('Cheese Omelette');
INSERT INTO recipe_item (item, weight, weightType, recipeId) VALUES
    ('egg', 3, 3, 1),
    ('cheese', 50, 1, 1),
    ('butter', 5, 1, 1);
INSERT INTO recipe_instruction (instruction, recipeid) VALUES
    ('Grate cheese', 1),
    ('Crack eggs into bowl', 1),
    ('Add salt and pepper into bowl', 1),
    ('Mix eggs with fork', 1),
    ('Add grated cheese to bowl', 1),
    ('Put butter into frying pan', 1),
    ('Turn on hob and put pan on to melt butter', 1),
    ('Once butter melted, add egg mix to pan', 1),
    ('Cook egg mix till sides are close to solid', 1),
    ('Turn over omelette to cook other side', 1),
    ('Serve once cooked', 1);
