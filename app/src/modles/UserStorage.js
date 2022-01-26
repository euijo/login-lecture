class UserStorage{
    static #user = {
        id : ["gigisdf", "go2342", "김사랑"],
        password : ["1111", "2222", "333333"],
        name : ["김장선", "와나나", "박지"]
    };

    static getUers(...fileds){
        const users = this.#user;
        const newUsers = fileds.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#user;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
}

module.exports = UserStorage;

