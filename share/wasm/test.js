const wrapper = require("./wrapper.js");

function test() {
    tree_depth = 2;
    eid = 1;
    num_participants = 1 << tree_depth;
    keypairs = [];
    public_keys = [];
    for(var i =0; i < num_participants; ++i) {
        keypair = wrapper.generate_voter_keypair();
        keypairs.push(keypair);
        public_keys.push(keypair.public_key);
    }
    election = wrapper.init_election(tree_depth, public_keys);
    vote_data = wrapper.vote(tree_depth, 0, public_keys,
        election.rt, election.eid, keypairs[0].secret_key,
        election.public_key, election.r1cs_proving_key, election.r1cs_verification_key);
    console.log(vote_data)
}
setTimeout(test, 300);