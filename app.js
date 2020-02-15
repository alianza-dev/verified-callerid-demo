const jwt = require('jsonwebtoken');
const fs = require('fs');
const node_getopt = require('node-getopt');

function parseCommandArgs() {
    let argsParser = node_getopt.create([
        [ '', 'keyFilename=PRIVATE_KEY_FILE', 'private key file' ],
        [ '', 'keyAlias=KEY ALIAS', 'key alias name' ],
        [ '', 'to=TO_NUMBER', 'to number' ],
        [ '', 'cid=CALLER_ID_NUMBER', 'callerId number' ],
        [ '', 'sipUsername=SIP_USERNAME', 'sip username' ],
        [ '', 'sipPassword=SIP_PASSWORD', 'sip password' ],
        [ '', 'outputFilename=OUTPUT_FILE_NAME', 'output filename' ]
    ]).bindHelp();

    return argsParser.parseSystem();
}


//jwt.sign(payload, ) 

args = parseCommandArgs();

//console.log('args = ' + JSON.stringify(args));

let privateKey = fs.readFileSync(args.options.keyFilename);
let payload = {};
payload.dest = {};
payload.dest.tn = [];
payload.dest.tn.push(args.options.to);
payload.iat = Math.floor(Date.now() / 1000) - 30;
payload.orig = {};
payload.orig.tn = args.options.cid;

let token = jwt.sign(payload, privateKey, { algorithm: 'RS512', keyid: args.options.keyAlias, header: { typ: 'passport' } });

let output = '';
output += 'SEQUENTIAL\n';
output += args.options.cid + ';';
output += args.options.to + ';';
output += '[authentication username=' + args.options.sipUsername + '  password=' + args.options.sipPassword + '];';
output += token;

fs.writeFileSync(args.options.outputFilename, output);
