import logo from '../../logo.svg';

export function getFavicon(url: string) {
    try {
        let urlEntity = new URL(url);
        return urlEntity.protocol+"//"+urlEntity.host+"/favicon.ico";
    }
    catch {
        console.log("invalid url")
        return logo;
    }
}