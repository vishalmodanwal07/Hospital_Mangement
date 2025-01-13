import jwt from 'jsonwebtoken';
import { ApiError } from '../src/utils/ApiError.js';


export const verifyToken = (req, res, next) => {
    try {
        let token;
        const authHeader = req.headers.authorization;

        // Check if the Authorization header is present and starts with "Bearer "
        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.split(" ")[1]; // Extract the token from the header

            if (!token) {
                // If token is not found, throw an unauthorized error
                return res.status(401).json(new ApiError(401, 'Unauthorized access denied'));
            }

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Attach the decoded user to the request object
            console.log("The decoded user is:", req.user);

            next(); // Proceed to the next middleware
        } else {
            // If no authorization header is provided
            return res.status(401).json(new ApiError(401, 'No Token, Unauthorized access denied'));
        }
    } catch (error) {
        // Handle token verification errors
        return res.status(400).json(new ApiError(400, error?.message || "Token is not valid"));
    }
};
