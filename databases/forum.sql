CREATE DATABASE hoop_squad_db;
USE hoop_squad_db;

CREATE TABLE registration (
    id integer PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    email TEXT NOT NULL,
    new_password VARCHAR(60),
    confirm_password VARCHAR(60),
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO registration (username, email, new_password, confirm_password)
VALUES
--Profile 1
('garbage_man', 'trash_day_errday_@hotmail.com', 'gimme_yo_trash', 'gimme_yo_trash'),
--Profile 2
('SuperKABOOM', 'BOMBuhman321@hotmail.com', 'EXPLODaBoi', 'EXPLODaBoi'),
--Profile 3
('fl4shbl4ck', 'puty0gl4ss3s0n@hotmail.com', 'fl4shm4n14', 'fl4shm4n14'),
--Profile 4
('DeMhAnDz', 'IgOtDaMaGiCtOuCh@hotmail.com', 'GeTdEeZhAnDz', 'GeTdEeZhAnDz'),
--Profile 5
('priiimetiiime', 'graaandstaaagemaaasteeer@hotmail.com', 'leeegeeend#1!', 'leeegeeend#1!');
