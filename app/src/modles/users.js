const {response} = require("express");
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const body = this.body;
        const {id, password} = await UserStorage.getUserInfo(body.id);

        if(id){
            if(id === body.id && password === body.password){
                return {success : true};
            }
            return {success : false, msg : "비밀번호가 틀렸습니다."};
        }
        return {success : false, msg : "존제하지 않는 아이디 입니다."};
    }

    register(){
        const body = this.body;
        const response = UserStorage.save(this.body);
        return response;
    }
}
module.exports = User;