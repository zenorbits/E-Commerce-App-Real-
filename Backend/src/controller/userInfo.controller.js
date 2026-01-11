const { default: mongoose } = require('mongoose');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


const getUserInfo = async (req, res) => {

    try {

        const { page, limit } = req.query;

        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 20;


        const skip = (pageNum - 1) * limitNum;

        const users = await userModel.find({}).select({ password: 0, token: 0 }).limit(limitNum).skip(skip);

        const totalUsers = await userModel.countDocuments();
        const totalPages = Math.ceil(totalUsers / limitNum);

        res.status(200).json({
            message: 'User Found Successfully',
            users,
            currentPage: pageNum,
            limit: limitNum,
            totalUsers,
            totalPages
        });


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
};


module.exports = getUserInfo