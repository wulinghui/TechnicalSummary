yum install -y gcc make gcc-c++ openssl-devel wget
wget https://nodejs.org/dist/v9.3.0/node-v9.3.0.tar.gz
tar -xf node-v9.3.0.tar.gz
cd node-v9.3.0
./configure
make && make install
node -v