CREATE TABLE business (
    id integer NOT NULL,
    uuid text,
    name text NOT NULL,
    address text, 
    address2 text,
    city text,
    state text,
    zip varchar(128),
    country text,
    phone text,
    website text, 
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);