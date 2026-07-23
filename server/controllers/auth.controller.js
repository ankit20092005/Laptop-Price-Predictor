import {
    registerUser,
    loginUser
} from "../services/auth.service.js";

export const register = async (req, res) => {

    try {

        const result = await registerUser(req.body);

        res.status(201).json({
            success: true,
            message: "Registration Successful",
            ...result
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};

export const login = async (req, res) => {

    try {

        const result = await loginUser(req.body);

        res.json({
            success: true,
            ...result
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};

export const getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};