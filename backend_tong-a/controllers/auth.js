<<<<<<< HEAD
const User = require('../models/User');

exports.register = async (req, res, next) => {
    try{
        const {name, email, password, role} = req.body;

        //Create user
        const user = await User.create({
            name,
            email,
            password,
            role
        });

        //Create token
        //const token = user.getSignedJwtToken();

        //res.status(200).json({success: true, token});

        sendTokenResponse(user, 200, res);
    } catch(err) {
        res.status(400).json({success: false});
        
        console.log(err.stack);
    }
};

exports.login=async(req,res,next)=>{
    try{
    const {email,password}=req.body;

    //Validate email&password
    if(!email ||!password){
        return res.status(400).json({success:false,
            msg:'Please provide an email and password'
        });
    }

    //CHeck for user
    const user=await User.findOne({email}).select('+password');

    if(!user){
        return res.status(400).json({success:false,
            msg:'Invalid credentials'
        });
    }

    //Check if password matches
    const isMatch = await user.matchPassword(password);

    if(!isMatch){
        return res.status(401).json({success:false,
            msg:'Invalid credentials'
        });
    }

    //Create token
    // const token=user.getSignedJwtToken();
    // res.status(200).json({success:true,token});
    sendTokenResponse(user,200,res);
}catch(err){
    return res.status(401).json({success:false, msg:'Cannot convert email or password to string'});
}
};

const sendTokenResponse = (user, statusCode, res) => {
    //Create Token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly:true
    };

    if(process.env.NODE_ENV === 'production'){
        options.secure = true;
    }

    res.status(statusCode).cookie('token', token, options).json({success: true, token})
}

exports.getMe = async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({success: true, data: user});
};


exports.logout =async(req,res,next)=>{
    res.cookie('token','none',{
        expires: new Date(Date.now()+ 10*1000),httpOnly:true
    });

    res.status(200).json({success:true,data:{}});
};
||||||| 1c25602
=======
const User = require('../models/User');

exports.register = async (req, res, next) => {
    try{
        const {name, email, password, role} = req.body;

        //Create user
        const user = await User.create({
            name,
            email,
            password,
            role
        });

        //Create token
        //const token = user.getSignedJwtToken();

        //res.status(200).json({success: true, token});

        sendTokenResponse(user, 200, res);
    } catch(err) {

        res.status(400).json({success: false});
        
        console.log(err.stack);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        console.log('Login attempt:', { email, password }); // Log the email and password being received

        // Validate email and password
        if (!email || !password) {
            console.log('Missing email or password'); // Log when email or password is missing
            return res.status(400).json({
                success: false,
                msg: 'Please provide an email and password',
            });
        }

        // Check for user in the database
        const user = await User.findOne({ email }).select('+password');
        console.log('User found:', user); // Log user object (or null if not found)

        if (!user) {
            console.log('No user found for this email'); // Log when no user is found
            return res.status(400).json({
                success: false,
                msg: 'Invalid credentials',
            });
        }

        // Check if the password matches
        const isMatch = await user.matchPassword(password);
        console.log('Password match result:', isMatch); // Log password match result

        if (!isMatch) {
            console.log('Password does not match'); // Log when password doesn't match
            return res.status(401).json({
                success: false,
                msg: 'Invalid credentials',
            });
        }

        // If everything is successful, create and send token
        sendTokenResponse(user, 200, res);
        console.log('here'); // Log when password doesn't match
    } catch (err) {
        console.error('Login error:', err); // Log the error to the console
        return res.status(500).json({
            success: false,
            msg: 'An error occurred during login. Please try again.',
        });
    }
};

const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();
    console.log('Generated JWT token:', token); // Log the token
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const options = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res.status(statusCode).cookie('token', token, options).json({ success: true, token });
};


exports.getMe = async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({success: true, data: user});
};


exports.logout =async(req,res,next)=>{
    res.cookie('token','none',{
        expires: new Date(Date.now()+ 10*1000),httpOnly:true
    });

    res.status(200).json({success:true,data:{}});
};
>>>>>>> test/patcharamon
