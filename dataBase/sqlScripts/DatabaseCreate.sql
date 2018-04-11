CREATE database broadcast_system;
-- tables
-- Table: devices
use broadcast_system;
CREATE TABLE devices (
    device_id int NOT NULL,
    name varchar(50) NOT NULL,
    push_token varchar(50) NULL,
    ip_address varchar(50) NULL,
    users_user_id int NOT NULL,
    CONSTRAINT devices_pk PRIMARY KEY (device_id)
);

-- Table: files
CREATE TABLE files (
    file_id int NOT NULL AUTO_INCREMENT,
    file_name varchar(50) NOT NULL,
    link_to_file varchar(50) NOT NULL,
    file_hash varchar(255) NOT NULL,
    CONSTRAINT files_pk PRIMARY KEY (file_id)
);

-- Table: groups
CREATE TABLE groups (
    group_id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    info int NOT NULL,
    CONSTRAINT groups_pk PRIMARY KEY (group_id)
);

-- Table: groups_have_files
CREATE TABLE groups_have_files (
    id_groups_have_files int NOT NULL AUTO_INCREMENT,
    files_file_id int NOT NULL,
    groups_group_id int NOT NULL,
    CONSTRAINT groups_have_files_pk PRIMARY KEY (id_groups_have_files)
);

-- Table: logs
CREATE TABLE logs (
    log_id int NOT NULL AUTO_INCREMENT,
    action varchar(50) NOT NULL,
    date datetime NOT NULL,
    comment varchar(50) NULL,
    files_file_id int NOT NULL,
    users_user_id int NOT NULL,
    CONSTRAINT logs_pk PRIMARY KEY (log_id)
);

-- Table: roles
CREATE TABLE roles (
    role_id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    description varchar(50) NOT NULL,
    CONSTRAINT roles_pk PRIMARY KEY (role_id)
);

-- Table: users
CREATE TABLE users (
    user_id int NOT NULL AUTO_INCREMENT,
    login varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    email varchar(50) NULL,
    CONSTRAINT users_pk PRIMARY KEY (user_id)
);

-- Table: users_groups
CREATE TABLE users_groups (
    users_groups_id int NOT NULL AUTO_INCREMENT,
    groups_group_id int NOT NULL,
    users_user_id int NOT NULL,
    CONSTRAINT users_groups_pk PRIMARY KEY (users_groups_id)
);

-- Table: users_have_roles
CREATE TABLE users_have_roles (
    id_users_have_roles int NOT NULL AUTO_INCREMENT,
    roles_role_id int NOT NULL,
    users_user_id int NOT NULL,
    CONSTRAINT users_have_roles_pk PRIMARY KEY (id_users_have_roles)
);

-- foreign keys
-- Reference: connector_groups (table: users_groups)
ALTER TABLE users_groups ADD CONSTRAINT connector_groups FOREIGN KEY connector_groups (groups_group_id)
    REFERENCES groups (group_id);

-- Reference: connector_users (table: users_groups)
ALTER TABLE users_groups ADD CONSTRAINT connector_users FOREIGN KEY connector_users (users_user_id)
    REFERENCES users (user_id);

-- Reference: devices_users (table: devices)
ALTER TABLE devices ADD CONSTRAINT devices_users FOREIGN KEY devices_users (users_user_id)
    REFERENCES users (user_id);

-- Reference: groups_have_files_files (table: groups_have_files)
ALTER TABLE groups_have_files ADD CONSTRAINT groups_have_files_files FOREIGN KEY groups_have_files_files (files_file_id)
    REFERENCES files (file_id);

-- Reference: groups_have_files_groups (table: groups_have_files)
ALTER TABLE groups_have_files ADD CONSTRAINT groups_have_files_groups FOREIGN KEY groups_have_files_groups (groups_group_id)
    REFERENCES groups (group_id);

-- Reference: logs_files (table: logs)
ALTER TABLE logs ADD CONSTRAINT logs_files FOREIGN KEY logs_files (files_file_id)
    REFERENCES files (file_id);

-- Reference: logs_users (table: logs)
ALTER TABLE logs ADD CONSTRAINT logs_users FOREIGN KEY logs_users (users_user_id)
    REFERENCES users (user_id);

-- Reference: users_have_roles_roles (table: users_have_roles)
ALTER TABLE users_have_roles ADD CONSTRAINT users_have_roles_roles FOREIGN KEY users_have_roles_roles (roles_role_id)
    REFERENCES roles (role_id);

-- Reference: users_have_roles_users (table: users_have_roles)
ALTER TABLE users_have_roles ADD CONSTRAINT users_have_roles_users FOREIGN KEY users_have_roles_users (users_user_id)
    REFERENCES users (user_id);

-- End of file.

