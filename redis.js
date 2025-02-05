const redis = require('redis');
const client = redis.createClient();

// Set a string value
client.set('mystring', 'Hello, Redis!', (err, reply) => {
    if (err) throw err;
    console.log(reply); // Should print "OK"
});
// Get the string value
client.get('mystring', (err, reply) => {
    if (err) throw err;
    console.log(reply); // Should print "Hello, Redis!"
});