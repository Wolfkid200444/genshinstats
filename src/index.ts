import { DS } from './utils/DS'
import { getHeaders  } from './utils/getHeaders'
import { getServer } from './utils/getServerType'
import { request } from './rest/API'
import {
    UserInfo
} from './structure';


export class GenshinStats {
    server!: typeof getServer
    headers!: typeof getHeaders    
    request!: typeof request
    DS!: typeof DS
    cookie!: string


    constructor() {
        this.cookie = ''
        this.server = getServer
        this.headers = getHeaders
        this.request = request
        this.DS = DS
    }

    async getUserInfo(uid: number): Promise<UserInfo> {
        const server = 'os';
        const data = await this.request('get', 'index', {
            role_id: uid,
            server,
          })
        return data
    }

}