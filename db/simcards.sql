CREATE DATABASE IF NOT EXISTS dust;
USE dust;

CREATE USER 'dust'@'localhost' IDENTIFIED BY 'votre_mot_de_passe';
GRANT ALL PRIVILEGES ON dust.* TO 'dust'@'localhost';

FLUSH PRIVILEGES;
DELETE FROM SIMCards;
CREATE TABLE IF NOT EXISTS SIMCards (
    ICCID VARCHAR(20) PRIMARY KEY,
    MSISDN VARCHAR(15) UNIQUE,
    PINCode VARCHAR(4),
    PUKCode VARCHAR(8),
    Tag VARCHAR(50),
    AccessPointName VARCHAR(50),
    IPAddr VARCHAR(15) UNIQUE,
    Status ENUM('ACTIVATED', 'DEACTIVATED'),
    CreationDate DATE
);

DELIMITER //

CREATE PROCEDURE GenerateRandomData()
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE generatedICCID VARCHAR(20);
    DECLARE generatedMSISDN VARCHAR(15);
    DECLARE generatedIP VARCHAR(15);

    WHILE i <= 5000 DO
        -- GÃ©nÃ©rer un ICCID unique
        REPEAT
            SET generatedICCID = CONCAT('89', FLOOR(RAND() * 100000000000000000));
        UNTIL NOT EXISTS (SELECT * FROM SIMCards WHERE ICCID = generatedICCID) END REPEAT;

        -- GÃ©nÃ©rer un MSISDN unique
        REPEAT
            SET generatedMSISDN = CONCAT('06', LPAD(FLOOR(RAND() * 100000000), 8, '0'));
        UNTIL NOT EXISTS (SELECT * FROM SIMCards WHERE MSISDN = generatedMSISDN) END REPEAT;

        -- GÃ©nÃ©rer une IP unique
        REPEAT
            SET generatedIP = CONCAT('192.168.', FLOOR(RAND() * 256), '.', FLOOR(RAND() * 256));
        UNTIL NOT EXISTS (SELECT * FROM SIMCards WHERE IPAddr = generatedIP) END REPEAT;

        INSERT INTO SIMCards (ICCID, MSISDN, PINCode, PUKCode, Tag, AccessPointName, IPAddr, Status, CreationDate)
        VALUES (
            generatedICCID,
            generatedMSISDN,
            LPAD(FLOOR(RAND() * 10000), 4, '0'),
            LPAD(FLOOR(RAND() * 100000000), 8, '0'),
            CONCAT('Tag', i),
            CONCAT('APN', i),
            generatedIP,
            IF(RAND() > 0.5, 'ACTIVATED', 'DEACTIVATED'),
            NOW() - INTERVAL FLOOR(RAND() * 365) DAY
        );

        SET i = i + 1;
    END WHILE;
END //

DELIMITER ;

-- Appeler la procÃ©dure pour gÃ©nÃ©rer des donnÃ©es
CALL GenerateRandomData();
