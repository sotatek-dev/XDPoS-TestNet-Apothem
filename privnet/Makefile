account-new:
	../build/bin/XDC account new --datadir node$(node) --keystore node$(node)/keystore --password node$(node)/password

bootnode-new:
	../build/bin/bootnode -genkey boot.key

bootnode:
	../build/bin/bootnode -nodekey boot.key -verbosity 9 -addr :30310

init:
	../build/bin/XDC --datadir node$(node)/ init genesis.json

reset:
	rm -rf node$(node)/XDC

reset-all:
	make reset node=1
	make reset node=2
	make reset node=3

init-all:
	make init node=1
	make init node=2
	make init node=3

node-1:
	../build/bin/XDC --syncmode "full" --verbosity 4 \
	--datadir node1/ --mine --rpc --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3,dpos,posv,XDPoS --rpcaddr 0.0.0.0 --rpccorsdomain "*" \
	--unlock '0xd7842239c9ad194500630fffed179cc521f52046' --password ./password \
	--rpcport 8545 --port 30311 --wsport 8601 \
	--bootnodes 'enode://ca5011e0d456b54fc03023527bbf9506989f77bcc391cf313043934d9264cb7a62a712cd2e1918b15fc70fc22de50a8053b6bc4f6007d1c51ac3cb385cf6e267@127.0.0.1:30310'

node-2:
	../build/bin/XDC --syncmode "full" \
	--datadir node2/ --mine --rpc --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3,dpos,posv,XDPoS --rpcaddr 0.0.0.0 --rpccorsdomain "*" \
	--unlock '0x121a8897d579c641afcfad38e4e489de8b26aa1b' --password ./password \
	--rpcport 8502 --port 30312 --wsport 8602 \
	--bootnodes 'enode://ca5011e0d456b54fc03023527bbf9506989f77bcc391cf313043934d9264cb7a62a712cd2e1918b15fc70fc22de50a8053b6bc4f6007d1c51ac3cb385cf6e267@127.0.0.1:30310'

node-3:
	../build/bin/XDC --syncmode "full" \
	--datadir node3/ --mine --rpc --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3,dpos,posv,XDPoS --rpcaddr 0.0.0.0 --rpccorsdomain "*" \
	--unlock '0xf8dae8ddb969e50de90c589306418a504f0c299a' --password ./password \
	--rpcport 8503 --port 30313 --wsport 8603 \
	--bootnodes 'enode://ca5011e0d456b54fc03023527bbf9506989f77bcc391cf313043934d9264cb7a62a712cd2e1918b15fc70fc22de50a8053b6bc4f6007d1c51ac3cb385cf6e267@127.0.0.1:30310'
