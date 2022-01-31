const config = {
    user : 'foo',
    password : 'foo',
    server : '127.0.0.1',
    database  : 'Dummy', //need to build Products table
    options : {
        trustedConnection: true,
        enableArithPort: true,
        instancename : "U7NQIHP" //need to find instance name
    },
    port : 1433  //need to find own port
}

module.exports = config;