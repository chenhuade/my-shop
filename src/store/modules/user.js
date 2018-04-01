import request from 'superagent'
import jsonp from "superagent-jsonp"

/**
 * 
 * {
    "UserToken":null,
    "Code":200,
    "Message":null,
    "Data":{
        "Userid":null,
        "HeadImage":null,
        "Name":"1",
        "Phone":null,
        "Password":null,
        "Type":0,
        "LocateTime":0,
        "CommissionLevel":0,
        "CommissionLevelUpdateTime":0,
        "HomeNumber":null,
        "Gender":0,
        "Occupation":null,
        "DetailedAddress":null,
        "Birthday":null,
        "InviterUserid":null,
        "Wxuuid":null,
        "Wxopenid":null,
        "WxName":null,
        "WxHeadImage":null,
        "Lon":0,
        "Lat":0,
        "ExitTime":0,
        "ExitReason":null,
        "State":0,
        "Remarks":null,
        "PayPassword":null
    }
}
 */

const state = {
  UserToken: '',
  Name: ''
}

const getters = {
  currentUser: state => {
    return {
      Name: state.Name,
      UserToken: state.UserToken
    }
  }
}

const mutations = {
  setUser (state, payload) {
    state.UserToken = payload.Data.UserToken
    state.Name = payload.Data.Name
  }
}

const actions = {
  login ({commit}, payload) {
    return new Promise((resolve, reject) =>{
      request
        .get('http://syw4353050001.my3w.com/wechat/api/user/userApi.asmx/Login')
        .use(jsonp(
          {
            callbackName: 'getJson'
          }
        ))
        .query({'phone': payload.phone, 'password': payload.password, 'wxopenid':'1'})
        .then(res => {
          console.log(JSON.stringify(res))
          res = res.body
          if(res.Code == 200) {
            commit('setUser', res)
            resolve(res)
          } else {
            alert(res.Message)
          }
        }, err => {
          console.log(JSON.stringify(err))
          reject(err)
        })

    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}