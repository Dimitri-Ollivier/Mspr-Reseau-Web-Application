CREATE TABLE mspr.`User` (
                             Name varchar(100) NOT NULL,
                             Surname varchar(100) NOT NULL,
                             IP varchar(100) NULL,
                             Password varchar(100) NULL,
                             `Key` varchar(100) NULL,
                             ID INT auto_increment NOT NULL,
                             Email varchar(200) NULL,
                             CONSTRAINT User_pk PRIMARY KEY (ID)
)
    ENGINE=InnoDB
    DEFAULT CHARSET=utf8mb4
    COLLATE=utf8mb4_general_ci;