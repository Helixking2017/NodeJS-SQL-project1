const config = {
    user : 'foo',
    password : 'foo',
    server : '127.0.0.1',
    database  : 'Products', //need to build Products table
    options : {
        trustedConnection: true,
        enableArithPort: true,
        instancename : "SQL" //need to find instance name
    },
    port : 55892  //need to find own port
}

module.exports = config;