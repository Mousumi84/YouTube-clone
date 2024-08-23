const baseurl='https://www.googleapis.com/youtube/v3';

const API_key='AIzaSyBgIq-XNi50ZI_Ym8fhLZQelkKYRMHxhnQ';


//1---------------Fetch Video---------------------------
async function fetchVideo(searchquery,maxresult) {
    try {
        const response=await fetch(
            baseurl+
            "/search"+
            "?part=snippet"+
            `&key=${API_key}`+
            `&q=${searchquery}`+
            `&maxResults=${maxresult}`
        );

        const data=await response.json();
        console.log("fetchVideo",data);
       
        renderfetchvdo(data);
    } catch (error) {
        console.log(error);
    }
}

//fetchVideo('javascript tutorial ',20);



//2---------------Fetch Search Video---------------------------
async function fetchSearchVideo(searchquery,maxresult) {
    try {
        const response=await fetch(
            baseurl+
            "/search"+
            "?part=snippet"+
            `&key=${API_key}`+
            `&q=${searchquery}`+
            `&maxResults=${maxresult}`
        );

        const data=await response.json();
        console.log("fetchSearchVideo",data);
       
        rendersrchvdo(data,searchquery);
    } catch (error) {
        console.log(error);
    }
}

//fetchSearchVideo('javascript tutorial ',20);




//3---------------Fetch Search Video---------------------------
async function fetchMiniVideo(searchquery,maxresult) {
    try {
        const response=await fetch(
            baseurl+
            "/search"+
            "?part=snippet"+
            `&key=${API_key}`+
            `&q=${searchquery}`+
            `&maxResults=${maxresult}`
        );

        const data=await response.json();
        console.log("fetchMiniVideo",data);
       
        renderminivdo(data);
    } catch (error) {
        console.log(error);
    }
}

//fetchMiniVideo('javascript tutorial ',20);



//4------------------------Fetch Channel--------------------
/*
async function fetchChannel(cnlId) {
    try {
        const response=await fetch(
            baseurl+
            "/channels"+
            `?key=${API_key}`+
            "&part=snippet"+
            `&id=${cnlId}`
        );

        const data=await response.json();
        console.log(data);
        
        renderfetchChannel(data);
    } catch (error) {
        console.log(error);
    }
}

//fetchChannel();
*/


//5------------------------Fetch Selected Video--------------------
async function fetchSelectedVideo(vdoId,name) {
    try {
        const response=await fetch(
            baseurl+
            "/videos"+
            `?key=${API_key}`+
            `&id=${vdoId}`+
            "&part=snippet"+
            "&part=statistics"
        );

        const data=await response.json();
        console.log("fetchSelectedVideo",data);

        renderPlayer(data,name,vdoId);

    } catch (error) {
        console.log(error);
    }
}

//fetchSelVideo('axepn8QqxRk');




//6------------------------Fetch Comment--------------------
async function fetchComments(vdoId,maxresult) {
    try {
        const response=await fetch(
            baseurl+
            "/commentThreads"+
            "?part=snippet"+
            `&key=${API_key}`+
            `&videoId=${vdoId}`+
            `&maxResults=${maxresult}`
        );

        const data=await response.json();
        console.log("fetchComments",data);

        renderComment(data);

    } catch (error) {
        console.log(error);
    }
}

//fetchomments('axepn8QqxRk',20);


