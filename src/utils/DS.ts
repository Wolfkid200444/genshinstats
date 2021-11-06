import crypto from 'crypto';
    
export function DS(this: any, { body, query }: any): string {
    return getOsDS('6s25p5ox5y14umn1p61aqyyvbvvl3lrt')
    function getOsDS(salt: string) {
        const time = Math.floor(Date.now() / 1000)
        const random = randomString(6)
      
        const c = crypto
          .createHash('md5')
          .update(`salt=${salt}&t=${time}&r=${random}`)
          .digest('hex')
        return `${time},${random},${c}`
      }
    
    function randomString(e: number) {
        const s = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        const res = []
        for (let i = 0; i < e; ++i) {
          res.push(s[Math.floor(Math.random() * s.length)])
        }
        return res.join('')
      }
}