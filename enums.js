"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyUser = exports.Permissions = void 0;
var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions || (exports.Permissions = Permissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (exports.LoyaltyUser = LoyaltyUser = {}));
