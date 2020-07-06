-- -----------------------------------------------------
-- Table ROL
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ROL (
  IdRol INT NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(45) NULL,
  Descripcion VARCHAR(45) NULL,
  Estado CHAR(1) NULL,
  PRIMARY KEY (IdRol))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table USUARIO
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS USUARIO (
  IdUsuario INT NOT NULL AUTO_INCREMENT,
  Usuario VARCHAR(45) NULL,
  Password VARCHAR(45) NULL,
  Nombre VARCHAR(45) NULL,
  Apellidos VARCHAR(45) NULL,
  FechaNacimiento DATETIME NULL,
  Estado CHAR(1) NULL,
  IdRol INT NULL,
  Sexo CHAR(1) NULL,
  PRIMARY KEY (IdUsuario),
  INDEX UsuarioRol_idx (IdRol ASC) ,
  CONSTRAINT UsuarioRol
    FOREIGN KEY (IdRol)
    REFERENCES ROL (IdRol)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table PLAN
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS PLAN (
  IdPlan INT NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(45) NULL,
  Descripcion VARCHAR(45) NULL,
  Precio DECIMAL(8,2) NULL,
  Descuento VARCHAR(45) NULL,
  Estado CHAR(1) NULL,
  PRIMARY KEY (IdPlan))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table USUARIO_PLAN
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS USUARIO_PLAN (
  IdUsuarioPlan INT NOT NULL AUTO_INCREMENT,
  IdUsuario INT NULL,
  IdPlan INT NULL,
  Fecha DATETIME NULL,
  Estado CHAR(1) NULL,
  PRIMARY KEY (IdUsuarioPlan),
  INDEX Usuario_Plan_idx (IdUsuario ASC) ,
  INDEX UsuarioPlan_Plan_idx (IdPlan ASC) ,
  CONSTRAINT UsuarioPlan_Usuario
    FOREIGN KEY (IdUsuario)
    REFERENCES USUARIO (IdUsuario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT UsuarioPlan_Plan
    FOREIGN KEY (IdPlan)
    REFERENCES PLAN (IdPlan)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table KARAOKE
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS KARAOKE (
  IdKaraoke INT NOT NULL AUTO_INCREMENT,
  IdUsuario INT NULL,
  Estado CHAR(1) NULL,
  Fecha DATETIME NULL,
  PRIMARY KEY (IdKaraoke),
  INDEX Karaoke_Usuario_idx (IdUsuario ASC) ,
  CONSTRAINT Karaoke_Usuario
    FOREIGN KEY (IdUsuario)
    REFERENCES USUARIO (IdUsuario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table KARAOKE_DETALLE
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS KARAOKE_DETALLE (
  IdKaraokeDetalle INT NOT NULL AUTO_INCREMENT,
  IdKaraoke INT NULL,
  IdUsuario INT NULL,
  Fecha DATETIME NULL,
  Estado CHAR(1) NULL,
  PRIMARY KEY (IdKaraokeDetalle),
  INDEX Karaoke_Detalle_idx (IdKaraoke ASC) ,
  CONSTRAINT Karaoke_Detalle
    FOREIGN KEY (IdKaraoke)
    REFERENCES KARAOKE (IdKaraoke)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

