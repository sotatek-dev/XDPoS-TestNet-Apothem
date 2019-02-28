#!/bin/bash

project_name='my'

rm -rf $HOME/.puppeth/$project_name

DPOS_CUSTOM_GENESIS_FILE=genesis.json
Bin_NAME=XDC
PROJECT_DIR="${GOPATH}/src/github.com/XinFinOrg/XDPoS-TestNet-Apothem"
numMN=3

ACCOUNTS[1]='d7842239c9ad194500630fffed179cc521f52046'
ACCOUNTS[2]='121a8897d579c641afcfad38e4e489de8b26aa1b'
ACCOUNTS[3]='f8dae8ddb969e50de90c589306418a504f0c299a'
ACCOUNTS[4]='139c90249B85bEFff2A958BdE4326DE1C92caC1C'

DPoS_PUPPETH_ARGS="$project_name\n2\n3\n\n\n${ACCOUNTS[$numMN]}\n"

for ((i = 1; i <= $numMN; i++)) {
  DPoS_PUPPETH_ARGS+="${ACCOUNTS[$i]}\n"
}
DPoS_PUPPETH_ARGS+="\n\n\n\n"

for _ in `seq 1 2`;
do
  for ((i = 1; i <= $numMN; i++)) {
    DPoS_PUPPETH_ARGS+="${ACCOUNTS[$i]}\n"
  }
  DPoS_PUPPETH_ARGS+="\n\n"
done

DPoS_PUPPETH_ARGS+="${ACCOUNTS[1]}\n"

DPoS_PUPPETH_ARGS+="${ACCOUNTS[4]}\n\n"

#GENERATE RANDOM ID for the network
DPoS_PUPPETH_ARGS+="\n"

#GENERATE CUSTOM GENESIS FILE
DPoS_PUPPETH_ARGS+="2\n2\n$DPOS_CUSTOM_GENESIS_FILE\n"

echo "[*] PUPPETH_ARG = $DPoS_PUPPETH_ARGS"

printf $DPoS_PUPPETH_ARGS | ${PROJECT_DIR}/build/bin/puppeth
