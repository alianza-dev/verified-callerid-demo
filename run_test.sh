#!/bin/bash
to_number=18016333861
cid_number=18017689999
key_file_name=captioncall_verified_callerid_prod.key
key_alias=captioncall_verified_callerid_prod
sip_username=mrw_softphone_3
sip_password=alianza
node app.js --keyFilename ${key_file_name} --keyAlias ${key_alias} --to ${to_number} --cid ${cid_number} --sipUsername ${sip_username} --sipPassword ${sip_password} --outputFilename ./data1.csv
sipp sbcrtp.p2.sac.alianza.com:5065 -bind_local -p 7777 -r 1 -l 1 -m 1 -sf verified_cid.xml -inf data1.csv
