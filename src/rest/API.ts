import fetch, { Headers } from 'node-fetch';
import { UserInfo } from '../structure/Stats';

export class API {
    async fetchStats(uid: string): Promise<UserInfo> {
        const url = 'https://api-os-takumi.mihoyo.com/'

        // return await fetch(url)
        // .then((res) => res.json());

    }
}