import { BaseService } from '../../services/baseServices'
import { TDetailsUser } from './user.type'

class UserClass extends BaseService {
	async getDetailsUser(): Promise<TDetailsUser> {
		return await this.instance.get(`data`)
	}
}
const userClass = new UserClass()
export default userClass
