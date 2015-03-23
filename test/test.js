var nock    = require('nock');
var request = require('request');
var scope   = nock('http://www.google.com')
              .get('/')
              .reply(200, 'Hello from Google!');

describe('php server', function(){

	it('get google',function(done){
		request('http://www.google.com', function (error, response, body) {
   			if (!error && response.statusCode == 200) {
				done();
   			}
		});
	});
});
