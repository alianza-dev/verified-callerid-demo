#!/bin/bash
source ./configuration.sh
node app.js --keyFilename ${key_file_name} --keyAlias ${key_alias} --to ${to_number} --cid ${cid_number} --sipUsername ${sip_username} --sipPassword ${sip_password} --outputFilename ./data1.csv
sipp sbcrtp.p2.sac.alianza.com:5065 -bind_local -p 7777 -r 1 -l 1 -m 1 -sf verified_cid_with_token.xml -inf data1.csv
