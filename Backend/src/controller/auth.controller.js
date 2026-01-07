const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');

//user auth

const userRegister = async (req, res) => {

    try {
        const { username, email, password, inviteCode } = req.body;

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const role  = inviteCode===process.env.ADMIN_INVITE?'admin':'user';

        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
            role
        });


        const token = jwt.sign({
            id: newUser._id,
            role: newUser.role
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '1h'
            }
        )

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });


        res.status(201).json({
            message: 'User Registered Successfully',
            token,
            user: { id: newUser._id, username: newUser.username, email: newUser.email,role:newUser.role }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }

}

const userlogin = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: 'User Does not exists'
            });
        }

        const isPassword = await bcrypt.compare(password, user.password);

        if (!isPassword) {
            return res.status(401).json({
                message: 'Invalid credentials'
            })
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '1h'
            }
        )

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        })


        res.status(200).json({
            message: 'User Logged in successfull',
            token,
            user: { id: user._id, username: user.username, email: user.email, role: user.role }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

const userLogout = async (req, res) => {

    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
    return res.status(200).json({
        message: 'User Logged Out Successfully'
    })
}



module.exports = { userRegister, userlogin, userLogout }