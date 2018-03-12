var CT = require('./modules/country-list');
var AM = require('./modules/account-manager');
var EM = require('./modules/email-dispatcher');

module.exports = function(db) {

  var express = require('express');
  var path = require('path');
  var favicon = require('serve-favicon');
  var logger = require('morgan');

  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var backendServices = require('./routes/backendServices');
  var http = require('http');
  var session = require('express-session');
  var errorHandler = require('errorhandler');
  var MongoStore = require('connect-mongo')(session);
  var mongoose = require('mongoose');

  var app = express();


  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  // uncomment after placing your favicon in /public
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.locals.pretty = true;
  app.use('/public', express.static(__dirname + '/public'));

  app.use('/backendServices', backendServices(db));
  // app.get('/signup', function(req,res) {res.sendFile(__dirname + '/public/signup.html'); })
  app.get('/', function(req,res) {
    if (req.session.user == null){
      res.sendFile(__dirname + '/public/index.html');
    }else{
      res.render('/home');
    }
  })

  var dbURL = 'mongodb://MaineMadness:MaineMadness@ds239988.mlab.com:39988/mainemadness';

  app.use(session({
    secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: dbURL })
    })
  );


  app.get('/login', function(req, res){
	// check if the user's credentials are saved in a cookie //
		if (req.cookies.user == undefined || req.cookies.pass == undefined){
			res.render('login', { title: 'MaineMadness - Login To Your Account' });
		}	else{
	// attempt automatic login //
			AM.autoLogin(req.cookies.user, req.cookies.pass, function(o){
				if (o != null){
				    req.session.user = o;
					res.redirect('/home');
				}	else{
					res.render('login', { title: 'MaineMadness - Login To Your Account' });
				}
			});
		}
	});

	app.post('/login', function(req, res){
		AM.manualLogin(req.body['user'], req.body['pass'], function(e, o){
			if (!o){
				res.status(400).send(e);
			}	else{
				req.session.user = o;
				if (req.body['remember-me'] == 'true'){
					res.cookie('user', o.user, { maxAge: 900000 });
					res.cookie('pass', o.pass, { maxAge: 900000 });
				}
				res.status(200).send(o);
			}
		});
	});
  // logged-in user homepage //

  app.get('/bracket', function(req,res) {
    // var bracket_data = null;
    if (req.session.user == null){
      // if user is not logged-in redirect back to login page //
      res.redirect('/');
    }	else{
      AM.getBracket({
        id: req.session.user._id
      }, function(e, o){
        if (e){
          console.log("error getting bracket");
          console.log(e);
          // res.status(400).send('error-getting-bracket');
        }	else{
          // console.log(o);
          console.log('testing bracket');
          console.log(o.bracket);
          res.render('bracket', {
            user_bracket: o.bracket,
            user_ponts: o.points
          });
          // res.send(o);
          // res.status(200).send('ok');
        }
      });

    }
  });

  app.post('/bracket', function(req, res){
    if (req.session.user == null){
      res.redirect('/');
    }	else{
      if(req.body['bracket'] != undefined){
        AM.updateBracket({
          id: req.session.user._id,
          bracket	: req.body['bracket']
        }, function(e, o){
          if (e){
            res.status(400).send('error-updating-account');
          }	else{
            req.session.user = o;
            res.status(200).send('ok');
          }
        });
      }
    }
  });

  	app.get('/home', function(req, res) {
  		if (req.session.user == null){
  	// if user is not logged-in redirect back to login page //
  			res.redirect('/');
  		}	else{
  			res.render('home', {
  				title : 'My Account - Maine Madness',
  				udata : req.session.user
  			});
  		}
  	});

  	app.post('/home', function(req, res){
  		if (req.session.user == null){
  			res.redirect('/');
  		}	else{
  			AM.updateAccount({
  				id		: req.session.user._id,
  				name	: req.body['name'],
  				email	: req.body['email'],
  				pass	: req.body['pass'],
  			}, function(e, o){
  				if (e){
  					res.status(400).send('error-updating-account');
  				}	else{
  					req.session.user = o;
  			// update the user's login cookies if they exists //
  					if (req.cookies.user != undefined && req.cookies.pass != undefined){
  						res.cookie('user', o.user, { maxAge: 900000 });
  						res.cookie('pass', o.pass, { maxAge: 900000 });
  					}
  					res.status(200).send('ok');
  				}
  			});
  		}
  	});

  	app.post('/logout', function(req, res){
  		res.clearCookie('user');
  		res.clearCookie('pass');
  		req.session.destroy(function(e){ res.status(200).send('ok'); });
  	})

  // creating new accounts //

  	app.get('/signup', function(req, res) {
  		res.render('signup', {  title: 'Signup', countries : CT });
  	});

  	app.post('/signup', function(req, res){
  		AM.addNewAccount({
  			name 	: req.body['name'],
  			email 	: req.body['email'],
  			user 	: req.body['user'],
  			pass	: req.body['pass'],
  			bracket: req.body['bracket'],
        points: req.body['points']
  		}, function(e){
  			if (e){
  				res.status(400).send(e);
  			}	else{
  				res.status(200).send('ok');
  			}
  		});
  	});

    // password reset //

    	app.post('/lost-password', function(req, res){
    	// look up the user's account via their email //
    		AM.getAccountByEmail(req.body['email'], function(o){
    			if (o){
    				EM.dispatchResetPasswordLink(o, function(e, m){
    				// this callback takes a moment to return //
    				// TODO add an ajax loader to give user feedback //
    					if (!e){
    						res.status(200).send('ok');
    					}	else{
    						for (k in e) console.log('ERROR : ', k, e[k]);
    						res.status(400).send('unable to dispatch password reset');
    					}
    				});
    			}	else{
    				res.status(400).send('email-not-found');
    			}
    		});
    	});

    	app.get('/reset-password', function(req, res) {
    		var email = req.query["e"];
    		var passH = req.query["p"];
    		AM.validateResetLink(email, passH, function(e){
    			if (e != 'ok'){
    				res.redirect('/');
    			} else{
    	// save the user's email in a session instead of sending to the client //
    				req.session.reset = { email:email, passHash:passH };
    				res.render('reset', { title : 'Reset Password' });
    			}
    		})
    	});

    	app.post('/reset-password', function(req, res) {
    		var nPass = req.body['pass'];
    	// retrieve the user's email from the session to lookup their account and reset password //
    		var email = req.session.reset.email;
    	// destory the session immediately after retrieving the stored email //
    		req.session.destroy();
    		AM.updatePassword(email, nPass, function(e, o){
    			if (o){
    				res.status(200).send('ok');
    			}	else{
    				res.status(400).send('unable to update password');
    			}
    		})
    	});

    // view & delete accounts //

    	app.get('/print', function(req, res) {
    		AM.getAllRecords( function(e, accounts){
    			res.render('print', { title : 'Account List', accts : accounts });
    		})
    	});

    	app.post('/delete', function(req, res){
    		AM.deleteAccount(req.body.id, function(e, obj){
    			if (!e){
    				res.clearCookie('user');
    				res.clearCookie('pass');
    				req.session.destroy(function(e){ res.status(200).send('ok'); });
    			}	else{
    				res.status(400).send('record not found');
    			}
    	    });
    	});

    	app.get('/reset', function(req, res) {
    		AM.delAllRecords(function(){
    			res.redirect('/print');
    		});
    	});


  app.get('*', function(req,res) {res.sendFile(__dirname + '/public/index.html'); })



  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });


  // require('./routes/routes')(app);

  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });

  return app;
}
