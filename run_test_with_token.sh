#!/bin/bash
source ./configuration.sh
source ./sip_credentials.sh
node app.js --keyFilename ${key_file_name} --keyAlias ${key_alias} --to ${to_number} --cid ${cid_number} --sipUsername ${sip_username} --sipPassword ${sip_password} --outputFilename ./data1.csv
sipp ${sip_proxy_server} -bind_local -p 7777 -r 1 -l 1 -m 1 -sf verified_cid_with_token.xml -inf data1.csv
