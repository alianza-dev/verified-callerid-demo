# Introduction
This tool is intended to be used as a demo of the verified callerId pass-thru 
functionality built into the Alianza CVP.  It is based on SIPp for SIP 
interactions.  It does not actually play any audio once a test call is 
connected, and it is therefore recommended that the test call be 
declined.  This is to test and prove only the SIP signalling.  It uses a small 
NodeJs application to create the X-AZ-Identity header token.  One script is 
provided to run the test with the token provided and the other to run it 
without the token.

# Usage
Steps to use:
1. Make sure you have these pre-requisites installed: 
    1. `nodejs` and `npm`
    1. `sipp`
1. Run `npm install` in the folder to which this repo is cloned.
1. Obtain the private key to used in generating the X-AZ-Identity token.
1. Obtain the sip credentials to be used in placing the test calls.
1. Place the sip credentials in a file called `sip_credentials.sh` in the folder in which the repo is cloned.  Please refer to the provided `sip_credentials.sh.sample` file for the formatting of this file, or just copy the sample file and rename it.
1. Modify the export lines of the `configuration.sh` file as needed for the following:
    1. `to_number` - the number to which the test calls should be placed
    1. `cid_number` - the callerId number to be provided
    1. `key_file_name` - the name of the file containing the private key (prior step)
    1. `key_alias` - the alias by which the public key will be found
    1. `sip_proxy_server` - the address of the sip proxy
1. Run the test script

# Test scripts
There are two test scripts provided:
1. `run_test_with_no_token.sh` - perform test call without providing an X-AZ-Identity token; used to verify functionality without verified callerId pass-thru
1. `run_test_with_token.sh` - perform test call providing an X-AZ-Identity token; used to verify functionality of verified callerId pass-thru
