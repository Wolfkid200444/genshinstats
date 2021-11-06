import axios, { Method } from 'axios';
import { UserInfo } from '../structure/Stats';
// using has reference from https://github.com/genshin-kit/genshin-kit/blob/master/packages/core/src/module/request.ts#L6

export async function request(this: any, method: Method, path: string, data?: any ) {
    let query, body
    if (method.toLowerCase() === 'get') {
      query = data
    } else {
      body = data
    }
  
    return (
      await axios({
        method,
        url: path.startsWith('http') ? path : `https://api-os-takumi.mihoyo.com/game_record/genshin/api/${path}`,
        headers: this.getHeaders({ query, body }),
        data: body,
        params: query,
        ...(this.serverType === 'os' ? { withCredentials: true } : {}),
      })
    ).data as any
  }