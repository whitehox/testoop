let Admin = require("../admin");
let mockDb = {
    "users": [
        {
            "id": 1,
            "username": "whitehox",
            "email": "oketegah@gmail.com",
            "password": "11861538da",
            "access": "user"
        }
    ],
    "admin": [
        {
            "id": 1,
            "username": "white",
            "email": "whitehox@gmail.com",
            "password": "1234",
            "access": "admin"
        },
        {
            "id": 3,
            "username": "uchenna",
            "email": "u@gmail.com",
            "password": "45678",
            "access": "admin"
        }
    ],
    "orders": [
        {
            "timeOfOrder": "9:7",
            "dateOfOrder": "18/3/2019",
            "id": 1,
            "products": [
                "rice",
                "beans"
            ],
            "userid": 2,
            "updatedOn": "4/3/2019 at 13:3"
        }
    ]
};
Admin.prototype.deleteSingleUser = function(id, accountType) {
    return Admin.prototype.deleteSingleUser(id, accountType);
};
Admin.prototype.deleteAllUsers = function(access) {
    this.access = access;
    let response = "";
    if (this.access === "admin") {
        response = "All users have been deleted";
    }
    else {
        response = "Only admin is allowed to delete users data";
    }
    return response;
};
module.exports = Admin;