import asyncHandler from "./asyncHandler.js";

const test = asyncHandler((req, res, next) => {
    console.log("catch")
    // res.status(404).send("LỖI MẸ RỒI");
    next();
    // throw new Error("HAHAHAA");
});


export {test};