FROM mysql:latest

COPY setup.sh /mysql/setup.sh
COPY simcards.sql /mysql/setup.sql
RUN chmod 777 /mysql/setup.sh
RUN /mysql/setup.sh