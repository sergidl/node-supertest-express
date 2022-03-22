import users from '../data/users.js'
function userController(user) {

	const resul=users.find(element => element.username==user)

	return resul
}
export default userController