let APIURL = '';

switch (window.location.hostname) {
    //this is the local host name of my react app
    case 'localhost' || '127.0.0.1':
        //this is the local host name of my server/api
        APIURL = 'http://localhost:3001';
        break;
        //this is the deployed react application 
    case 'bd-veglogapi.herokuapp.com':
        //this is the full url of my deployed server/API
        APIURL = 'https://bd-veglogapi.herokuapp.com';
        break;
    default:
            console.log('cant reach an API');
};

export default APIURL;
