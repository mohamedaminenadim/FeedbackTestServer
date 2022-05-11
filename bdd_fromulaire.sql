create database formulaire;
use formulaire;
create table clients(
	client_id int(5) not null auto_increment primary key,
    client_nom varchar(30),
    client_prenom varchar(30),
    client_email varchar(50)
);

create table avis(
	avis_id int(5) not null auto_increment primary key,
    avis_client int(5) not null,
    avis_resultat bool
);

alter table avis add constraint fk_aviscli foreign key (avis_client) references clients(client_id);

select * from clients;