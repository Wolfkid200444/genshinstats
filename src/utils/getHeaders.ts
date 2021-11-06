export function getHeaders(this: any, { query, body }: any): any {
    return {
        DS: this.DS({ query, body }),
        Origin: 'https://webstatic-sea.hoyolab.com',
        Referer: 'https://webstatic-sea.hoyolab.com/',
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US;q=0.8',
        'x-rpc-language': 'en-US',
        'x-rpc-app_version': '1.5.0',
        'x-rpc-client_type': '5',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
        Cookie: this.cookie,
      };
}