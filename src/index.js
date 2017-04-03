var format = require('biguint-format');
const FlakeId = require('flake-idgen');

function SnowFlake(datacenter) {
    this.idgen = new FlakeId({ datacenter, worker: 0 });
}

SnowFlake.prototype.newoid = function(prefix) {
    return `${prefix}${format(this.idgen.next(),'hex')}`;
};

module.exports.SnowFlake = SnowFlake;