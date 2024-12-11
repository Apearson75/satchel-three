export default class HttpClient {
    private authToken: string;
    private headers: { accept: string; authorization: string; };

    constructor (authToken: string) {
        this.authToken = authToken;
        this.headers = {"accept": "application/smhw.v2021.5+json", "authorization": authToken}
    }

    async get(url: string) {
        const req = await fetch(url, { headers: this.headers });
        if (req.ok) 
            return await req.json(); 
        else 
            return req.statusText;
    }
}