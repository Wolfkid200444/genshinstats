import { DS } from './utils/DS'
import { getHeaders  } from './utils/getHeaders'
import { getServer } from './utils/getServerType'
import { request } from './rest/API'
import {
    UserInfo
} from './structure';

interface Options {
    cookie: string
}

export class GenshinStats {
    private server: typeof getServer
    private headers: typeof getHeaders    
    private request: typeof request
    private DS: typeof DS
    private cookie: string


    constructor(options: Options) {
        this.cookie = options.cookie
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