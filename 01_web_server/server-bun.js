import {serve} from 'bun';

serve ({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === "/") {
            return new Response("Hello black    nigger", {status: 200})
        } else if (url.pathname === "/ice-tea") {
            return new Response("Thank you for ordering ice tea", {status: 200})
        } else {
            return new Response("Not found OOPSSS!", {status: 404})
        }   
    } ,
    port: 3000,
    hostname:'127.0.0.1'   
})
