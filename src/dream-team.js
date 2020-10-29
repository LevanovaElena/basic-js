const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  if (members === null || members == undefined || !Array.isArray(members)) return false;
  members.forEach((item) => {
    if (typeof (item) === "string") result.push(item.trim()[0].toUpperCase());
  });
  if (result.length === 0) return false;
  return result.sort().join("");
}
