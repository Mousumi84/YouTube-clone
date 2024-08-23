let mainbody=document.getElementById('main-body');
let searchtextbox=document.getElementById('searchtxt');
let card=document.getElementsByClassName('card');
let srch=document.getElementById("srch");
let searchbody=document.getElementById('search-body');
let bricks=document.getElementsByClassName('bricks');
let srchopt=document.getElementsByClassName('srch-opt');
let word=document.getElementById('word'); 
let section=document.getElementsByTagName('section');
let lowbar=document.getElementById('low-bar');
let leftbar=document.getElementById('left-bar');
let leftbarhide=document.getElementById('left-bar-hide');
let menu=document.getElementById('menu');
let playerbody=document.getElementById('play-body'); 
let videoplayer=document.getElementById('video-player');
let videoplaypage=document.getElementById('vdo-play-page');



/*

let array=[
    {
        "kind": "youtube#searchResult",
        "etag": "UH58vK0zZRTPxeoKK9X4p-ksiz8",
        "id": {
            "kind": "youtube#video",
            "videoId": "M2RE3wg_njY"
        },
        "snippet": {
            "publishedAt": "2024-08-15T23:56:32Z",
            "channelId": "UC4zvcd2F0UebXfG4LfygTmQ",
            "title": "Old Vs New Bollywood Mashup 2023 | Superhits Romantic Hindi Songs Mashup Live - DJ MaShUP 2024",
            "description": "Old Vs New Bollywood Mashup 2023 | Superhits Romantic Hindi Songs Mashup Live - DJ MaShUP 2024 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/M2RE3wg_njY/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/M2RE3wg_njY/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/M2RE3wg_njY/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "New Hindi PartyMix",
            "liveBroadcastContent": "live",
            "publishTime": "2024-08-15T23:56:32Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "4931LA0KkqVDISAuxw-EsXd_M6A",
        "id": {
            "kind": "youtube#video",
            "videoId": "G7yfCxFuc18"
        },
        "snippet": {
            "publishedAt": "2024-08-15T01:21:06Z",
            "channelId": "UC4zvcd2F0UebXfG4LfygTmQ",
            "title": "Old Vs New Bollywood Mashup 2024 | Superhits Romantic Hindi Songs Mashup Live - DJ MaShUP 2024",
            "description": "Old Vs New Bollywood Mashup 2024 | Superhits Romantic Hindi Songs Mashup Live - DJ MaShUP 2024 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/G7yfCxFuc18/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/G7yfCxFuc18/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/G7yfCxFuc18/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "New Hindi PartyMix",
            "liveBroadcastContent": "live",
            "publishTime": "2024-08-15T01:21:06Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "aNdMcp_3NqxCf6HWPYXc3suz7SY",
        "id": {
            "kind": "youtube#video",
            "videoId": "IwgwdSptrIk"
        },
        "snippet": {
            "publishedAt": "2024-08-16T01:19:49Z",
            "channelId": "UCVMwrgN1DJ6lf-vd-M3jULA",
            "title": "90s Hits Kumar Sanu &amp; Alka Yagnik Melody Songs💘Udit Narayan Love Songs 💞💞Evergreen Songs💕",
            "description": "oldhindisongs #पुरानेहिन्दीगाने #uditnarayan #alka_yagnik #kumarsanu 90s Hits Kumar Sanu & Alka Yagnik ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/IwgwdSptrIk/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/IwgwdSptrIk/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/IwgwdSptrIk/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Hindi Music NM",
            "liveBroadcastContent": "live",
            "publishTime": "2024-08-16T01:19:49Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "3gVsNh8WjzV7RClJrjPlmneXv4A",
        "id": {
            "kind": "youtube#video",
            "videoId": "TK-fFppuRrU"
        },
        "snippet": {
            "publishedAt": "2024-08-17T08:42:58Z",
            "channelId": "UCJ3hxQABMARVuLTtayAKhYA",
            "title": "Sad Songs 💔💘 Mashup Songs | Arijit Singh Songs | arijitsinghmashup | Slow Motion Song @sweethindi888",
            "description": "Sad Songs | Mashup Songs | Arijit Singh Songs | Arijit Singh Mashup | Slow Motion Song @SWEETHindi88 #Ae Dil Hai Mushkil ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/TK-fFppuRrU/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/TK-fFppuRrU/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/TK-fFppuRrU/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Sweet HiNdi🔔",
            "liveBroadcastContent": "live",
            "publishTime": "2024-08-17T08:42:58Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "hiaf_ST5PhRa8ur9D81XzmpbUGQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "4yaLKNH-pV0"
        },
        "snippet": {
            "publishedAt": "2024-08-17T12:30:05Z",
            "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
            "title": "90s Hits Hindi Songs | 90s Love Songs | Evergreen Bollywood Songs |Old Songs,90s Love Songs Jukebox",
            "description": "Step back into the golden era of Bollywood with this ultimate collection of 90s love songs! Relive the magic of timeless melodies ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/4yaLKNH-pV0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/4yaLKNH-pV0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/4yaLKNH-pV0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Tips Official",
            "liveBroadcastContent": "none",
            "publishTime": "2024-08-17T12:30:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "IoLcKBd69o2ktFk84g4bdaCepu4",
        "id": {
            "kind": "youtube#video",
            "videoId": "nFgsBxw-zWQ"
        },
        "snippet": {
            "publishedAt": "2024-08-01T16:16:53Z",
            "channelId": "UC_A7K2dXFsTMAciGmnNxy-Q",
            "title": "Aayi Nai -Stree 2 | Shraddha Kapoor | Rajkummar Rao | Sachin-Jigar |Pawan Singh,Simran,Divya,Amitabh",
            "description": "Catch Shraddha Kapoor and Rajkummar Rao in their most playful avatars, grooving to this catchy hit! With vocals by Pawan ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/nFgsBxw-zWQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/nFgsBxw-zWQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Saregama Music",
            "liveBroadcastContent": "none",
            "publishTime": "2024-08-01T16:16:53Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "CnWf2-XGhlStPn9foxw6qXHFJSI",
        "id": {
            "kind": "youtube#video",
            "videoId": "5YeyzOBS06k"
        },
        "snippet": {
            "publishedAt": "2024-08-14T01:41:19Z",
            "channelId": "UCVMwrgN1DJ6lf-vd-M3jULA",
            "title": "90’S Old Hindi Songs🌹90s Hits🌹Udit Narayan, Alka Yagnik, Kumar Sanu, Sonu Nigam💖Evergreen Songs",
            "description": "oldhindisongs #पुरानेहिन्दीगाने #uditnarayan #alka_yagnik #kumarsanu 90'S Old Hindi Songs  90s ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/5YeyzOBS06k/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/5YeyzOBS06k/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/5YeyzOBS06k/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Hindi Music NM",
            "liveBroadcastContent": "live",
            "publishTime": "2024-08-14T01:41:19Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "lzgYa1XbYc0dYk6zMyD5GqbTX-0",
        "id": {
            "kind": "youtube#video",
            "videoId": "a8VXFaWWVBs"
        },
        "snippet": {
            "publishedAt": "2024-08-10T07:05:07Z",
            "channelId": "UCVMwrgN1DJ6lf-vd-M3jULA",
            "title": "90’S Old Hindi Songs🌹90s Hits🌹Udit Narayan, Alka Yagnik, Kumar Sanu, Sonu Nigam💖Evergreen Songs",
            "description": "oldhindisongs #पुरानेहिन्दीगाने #uditnarayan #alka_yagnik #kumarsanu 90'S Old Hindi Songs  90s ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/a8VXFaWWVBs/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/a8VXFaWWVBs/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/a8VXFaWWVBs/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Hindi Music NM",
            "liveBroadcastContent": "live",
            "publishTime": "2024-08-10T07:05:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "8jb9g5xfd6rVNX3XJTEkfKSGcYA",
        "id": {
            "kind": "youtube#video",
            "videoId": "Xp8y8zElPGs"
        },
        "snippet": {
            "publishedAt": "2024-07-03T10:30:20Z",
            "channelId": "UCj2j6jkj9kZnUumruhtB8lQ",
            "title": "90’S Old Hindi Songs🥰 90s Love Song😍 Udit Narayan, Alka Yagnik, Kumar Sanu songs Hindi Jukebox songs",
            "description": "90'S Old Hindi Songs   90s Love Song   Udit Narayan, Alka Yagnik, Kumar Sanu songs Hindi Jukebox songs #HindiRDMusic ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Xp8y8zElPGs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Xp8y8zElPGs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Xp8y8zElPGs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "The Rangila TV",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-03T10:30:20Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "1ujj5eXosz-qqtw4UPV3pEWzNLc",
        "id": {
            "kind": "youtube#video",
            "videoId": "ehbbyEGwraI"
        },
        "snippet": {
            "publishedAt": "2024-07-17T12:30:23Z",
            "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
            "title": "90s Hit Love Hindi Songs | Udit Narayan Alka Yagnik &amp; Kumar Sanu | 90s Evergreen Hits Video Jukebox",
            "description": "Fall in love all over again with our '90s Hit Love Hindi Songs' video jukebox! Featuring timeless hits by Udit Narayan, Alka Yagnik, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ehbbyEGwraI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ehbbyEGwraI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ehbbyEGwraI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Tips Official",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-17T12:30:23Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Os5Dwhg8y9P4eWHKu5mXNCMPV5k",
        "id": {
            "kind": "youtube#video",
            "videoId": "m6TU2gykl6g"
        },
        "snippet": {
            "publishedAt": "2024-07-10T12:30:36Z",
            "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
            "title": "90s Evergreen Hits | 90s Hits Hindi Songs |Non Stop 90s Bollywood Video Songs| Romantic Hits Jukebox",
            "description": "Don't Miss Out on these classic hits that defined a generation! Click play and let the magic of the 90s sweep you off your feet!",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/m6TU2gykl6g/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/m6TU2gykl6g/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/m6TU2gykl6g/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Tips Official",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-10T12:30:36Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "sZPb7Ji9cI0h1i0mF827q55RtqI",
        "id": {
            "kind": "youtube#video",
            "videoId": "k3ijQJjUbTs"
        },
        "snippet": {
            "publishedAt": "2024-04-12T10:41:02Z",
            "channelId": "UCUQg_UBQfVjptn7Wqcgzz-w",
            "title": "Badshah X Arijit Singh - Soulmate (Live Video) | Ek THA RAJA",
            "description": "Badshah #ArijitSingh #Soulmate Listen to \"Ek Tha Raja\" album on: Spotify: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/k3ijQJjUbTs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/k3ijQJjUbTs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/k3ijQJjUbTs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Badshah",
            "liveBroadcastContent": "none",
            "publishTime": "2024-04-12T10:41:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "ZgM6eJSm565kPQ4PzjhocPhue1s",
        "id": {
            "kind": "youtube#video",
            "videoId": "rEGns-Hxe6w"
        },
        "snippet": {
            "publishedAt": "2024-07-29T07:56:31Z",
            "channelId": "UCWZw7dOphdH8WuKQNPl2QAA",
            "title": "Hindi Gana🌹Sadabahar Song 💖हिंदी गाने 💔Purane Gane Mp3 💕Filmi Gaane अल्का याग्निक कुमार सानू गीत",
            "description": "Hindi Gana  Sadabahar Song हिंदी गाने Purane Gane Mp3 Filmi Gaane अल्का याग्निक कुमार ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/rEGns-Hxe6w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/rEGns-Hxe6w/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/rEGns-Hxe6w/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ZIVIO",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-29T07:56:31Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "lZtkXPdIoglbtaQHH_wmU4ObDME",
        "id": {
            "kind": "youtube#video",
            "videoId": "rqXT31w73To"
        },
        "snippet": {
            "publishedAt": "2024-08-18T04:02:53Z",
            "channelId": "UCVMwrgN1DJ6lf-vd-M3jULA",
            "title": "Udit Narayan 90s Hit Love Hindi Songs Alka Yagnik &amp; Kumar Sanu 90s Songs #90severgreen #bollywood",
            "description": "oldhindisongs #पुराने हिन्दी गाने #uditnarayan Udit Narayan 90s Hit Love Hindi Songs Alka Yagnik & Kumar ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/rqXT31w73To/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/rqXT31w73To/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/rqXT31w73To/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Hindi Music NM",
            "liveBroadcastContent": "none",
            "publishTime": "2024-08-18T04:02:53Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "9b1BOJaVrDF5N60zLPJwJemYXCE",
        "id": {
            "kind": "youtube#video",
            "videoId": "ah3030zrF3I"
        },
        "snippet": {
            "publishedAt": "2024-04-24T02:28:27Z",
            "channelId": "UCljFTS0V96iZgMip8-LU6QA",
            "title": "90’S Love Hindi Songs🌻🌻90’S Hit Songs 💘 Udit Narayan, Alka Yagnik, Kumar Sanu, Lata Mangeshkar",
            "description": "90'S Love Hindi Songs    90'S Hit Songs Udit Narayan, Alka Yagnik, Kumar Sanu, Lata Mangeshkar.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ah3030zrF3I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ah3030zrF3I/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ah3030zrF3I/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Old Songs 10",
            "liveBroadcastContent": "none",
            "publishTime": "2024-04-24T02:28:27Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "rxroAgAi6WO0c4mCES33Ke1QwLY",
        "id": {
            "kind": "youtube#video",
            "videoId": "hgVycuK3xfY"
        },
        "snippet": {
            "publishedAt": "2024-08-16T01:00:58Z",
            "channelId": "UC8rkD3666yRwbV2XiGic0UQ",
            "title": "ATIF ASLAM Hindi Songs Collection Atif Aslam songs ✨BEST OF ATIF ASLAM SONGS 2023 #atifaslam #hindi",
            "description": "ATIF ASLAM Hindi Songs Collection Atif Aslam songs ✨BEST OF ATIF ASLAM SONGS 2023 #atifaslam #hindi #atifaslam ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/hgVycuK3xfY/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/hgVycuK3xfY/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/hgVycuK3xfY/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Music Plays",
            "liveBroadcastContent": "live",
            "publishTime": "2024-08-16T01:00:58Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "wGHuDgHz_ossYK4qpcoKfAOmtIA",
        "id": {
            "kind": "youtube#video",
            "videoId": "ngFzL8-Uc8I"
        },
        "snippet": {
            "publishedAt": "2024-08-18T03:30:30Z",
            "channelId": "UCwCzdc7VsMsfYJgkl3Gpjpg",
            "title": "90`Hits Romantics Songs 💕| सदाबहार गाने 🌹| Evergreen Bollywood Songs ❤💞| Hindi Songs|Dream Creation",
            "description": "90`Hits Romantics Songs | सदाबहार गाने | Evergreen Bollywood Songs ❤  | Hindi Songs | Dream Creation ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ngFzL8-Uc8I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ngFzL8-Uc8I/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ngFzL8-Uc8I/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Dream Creation",
            "liveBroadcastContent": "none",
            "publishTime": "2024-08-18T03:30:30Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "NarCsEcTfLmigx1VJZCCYwo7g6c",
        "id": {
            "kind": "youtube#video",
            "videoId": "orYf6VDtj_k"
        },
        "snippet": {
            "publishedAt": "2021-08-31T07:00:28Z",
            "channelId": "UC3MLnJtqc_phABBriLRhtgQ",
            "title": "Raataan Lambiyan - Lyric Video |Shershaah|Sidharth, Kiara|Tanishk B.|Jubin|Asees",
            "description": "Kaatun kaise raatan, o saawre? Jiya nahi jaata, sun bawre? The song that has made the entire nation fall in love with it, Raataan ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/orYf6VDtj_k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/orYf6VDtj_k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/orYf6VDtj_k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "SonyMusicIndiaVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2021-08-31T07:00:28Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "3wnNa32d6fuu_PH7GTfXYK9UfYU",
        "id": {
            "kind": "youtube#video",
            "videoId": "G_d6zDlY11U"
        },
        "snippet": {
            "publishedAt": "2024-06-17T09:30:06Z",
            "channelId": "UCu6UVoncA5nWxbjLnxqiUCA",
            "title": "प्यार भरे दिलचस्पी हिन्दी गाने 💘 ll 90&#39;s Love romantic gaane 🌹ll Sadhana saragam best song",
            "description": "प्यार भरे दिलचस्पी हिन्दी गाने ll 90's Love romantic gaane ll Sadhana saragam best song ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/G_d6zDlY11U/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/G_d6zDlY11U/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/G_d6zDlY11U/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "CP Sir GS Research Center",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-17T09:30:06Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "wXp6nuiy_0D9GJbUs9pqo_lP2cI",
        "id": {
            "kind": "youtube#video",
            "videoId": "PehNmcp5Eb8"
        },
        "snippet": {
            "publishedAt": "2024-08-18T03:45:58Z",
            "channelId": "UCBSbSiVJxDx37M6K7RQANpQ",
            "title": "90’S Love Hindi Songs 💘 90’S Hit Songs 💘 Udit Narayan, Alka Yagnik, Kumar Sanu💔Purane Gane Mp3",
            "description": "90'S Love Hindi Songs 90'S Hit Songs Udit Narayan, Alka Yagnik, Kumar Sanu  Purane Gane Mp3#alkayagnik ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PehNmcp5Eb8/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PehNmcp5Eb8/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PehNmcp5Eb8/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Layla Music",
            "liveBroadcastContent": "live",
            "publishTime": "2024-08-18T03:45:58Z"
        }
    }
]

let video={
    "kind": "youtube#videoListResponse",
    "etag": "PscE8e-PtgrtpUoI_dGGf8RDTHg",
    "items": [
        {
            "kind": "youtube#video",
            "etag": "ajmDfYoUafrJZMpOJ_P9O-7TMyY",
            "id": "axepn8QqxRk",
            "snippet": {
                "publishedAt": "2024-05-24T10:30:10Z",
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "title": "Soni Soni | Ishq Vishk Rebound | Rohit Saraf, Pashmina| @DarshanRavalDZ@jonitamusic, Rochak,Gurpreet",
                "description": "\"Soni Soni\" is the ultimate anthem for dance lovers blending irresistible beats with heartfelt lyrics. Perfectly crafted for Gen Z, this track promises to get you moving and feeling the love. Get ready to vibe and groove to your new favorite hit! from the much-awaited movie \"Ishq Vishk Rebound.\" Starring the charming Rohit Saraf and the beautiful Pashmina Roshan, and the mesmerizing voices of Darshan Raval, Jonita Gandhi & Rochak Kohli, this track is set to steal hearts. Lyrics Penned By Gurpreet Saini With music by the talented Rochak Kohli, this track promises a perfect blend of love and melody. Don't miss it!\n\nStay updated with the latest videos from Tips Official, Subscribe on the below link.\nhttp://youtube.com/tipsofficial\n\nSong Details :\nSong Name: Soni Soni \nSingers: Darshan Raval, Jonita Gandhi & Rochak Kohli\nMusic Director: Rochak Kohli\nMusic Producer: Sharan Rawat\nLyricist: Gurpreet Saini\nChoreographer: Vijay Ganguly\nDirector of Photography (Song): Debojeet Ray\nMix and Master by Shadab Rayeen @ New Edge\nAssistant Engineers: Pukhraj & Anup\nCostume Stylist For Dancers: Nidhi Yasha\nDolby Atmos Mix: Shahraaz Khan\n\nMovie Details : \nProducers- Ramesh Taurani and Jaya Taurani\nDirector- Nipun Avinash Dharmadhikari\nLead Cast- Rohit Saraf, Pashmina Roshan, Jibraan Khan, Naila Grrewal\nSecondary Cast- Kusha Kapila, Supriya Pilgaonkar, Akarsh Khurana, Shilpa Vishal Shetty, Shataf Figar, Anita Kulkarni and Sheeba Chadda \nStory and Screenplay writers- Dr. Vinay Chhawal, Vaishali Kamalakar Naik, and Ketan Pedgaonkar\nAdditional Screenplay writers- Akarsh Khurana and Nipun Avinash Dharmadhikari\nDialogue writer- Akarsh Khurana & Lisha Bajaj\nDirector of Photography- Milind Jog\nAudiography & Sound Design- Anirban Sengupta\nMusic- Rochak Kohli \nLyrics- Gurpreet Saini, Kumaar and Gautam G Sharma\nChoreographer- Vijay Ganguly\nEditor- Chandan Arora\nProduction Designer- Nikhil Kovale\nCostume Designers- Abhilasha Devnani & Manisha Melwani\n\nMusic On Tips Music (Tips Industries Ltd.)\n\nLyrics: \nDil Mera Dil Mera \nKi Karan\nMeri Baat Maane Na\n\nKitna Tenu Chahe \nTenu Aaye \nMeri Yaad Na\n\nKehna Tenu Kehna\nIk Tu Hi \nBas Pyaar Hai Mera\n\nKoi Nahi Tere Pehle \nKoi Hona\nTere Baad Na\n\nAkhiyaan Le Jaayein Meri Jaan \nO Soni Soni\nMujhko Bachaye Teri Haan\n\nGall Meri Manja \nTu Meri Banja\nKe Mitthi Mitthi Neendraan Da Khwaab Hai Tu\n\nHai Mera Kya Kasoor\nTu Dendi Ae Sukoon \nJo Utre Na Aisi Woh Sharaab Hai Tu\n\nO Soni Soni\nTu Meri Banja\n\nO Soni Soni\nTu Meri Banja\n\nO Mere Sohneya Chandni Raaton Mein\nMain Toh Aagayi Phir Teri Baaton Mein\n\nKaisi Tu Mere Naal Chaal Chaleya Ve\nDil Tere Naal Naal Chaleya Ve\nAsar Ae Poora Saal Chaleya Ve\nO Sohneya Ve\n\nAkhiyaan Le Jaayein Meri Jaan \nO Soni Soni\nMujhko Bachaye Teri Haan\n\nGall Meri Manja \nTu Mera Banja\nKe Mitthi Mitthi Neendraan Da Khwaab Hai Tu\n\nHai Mera Kya Kasoor\nTu Dinda Ae Sukoon \nJo Utre Na Aisi Woh Sharaab Hai Tu\n\nGall Meri Manja \nTu Meri Banja\nKe Mitthi Mitthi Neendraan Da Khwaab Hai Tu\n\nHai Mera Kya Kasoor\nTu Dindi Ae Sukoon \nJo Utre Na Aisi Woh Sharaab Hai Tu\n\nO Soni Soni\nTu Meri Banja\n\nJoin Us On:\nhttps://www.youtube.com/tipsofficial\nhttps://www.youtube.com/jhankargaane\nhttps://www.youtube.com/90sGaane\nhttps://www.youtube.com/TipsFilms\nhttps://www.youtube.com/TipsPunjabi\nhttps://www.youtube.com/TipsBhojpuri\nhttps://www.youtube.com/TipsMarathi\nhttps://www.youtube.com/bhaktiprem\nhttps://www.youtube.com/volume\nhttps://www.youtube.com/TipsRajasthani\nhttps://www.youtube.com/TipsHaryanvi\nhttps://www.youtube.com/TipsIbadat\nhttps://www.youtube.com/TipsTamil\nhttps://www.youtube.com/TipsGujarati\nhttps://www.youtube.com/TipsTelugu\nhttps://www.youtube.com/TipsMalayalamOfficial\nhttps://www.youtube.com/TipsSindhi\nhttps://www.youtube.com/TipsKannada\n\n#ishqvishkrebound #sonisoni #rohitsaraf #pashminaroshan #darshanraval #jonitagandhi  #roachakkohli  #GurpreetSaini #hindi #hindisongs #bollywoodsongs #bollywoodnewsong  #hindisongs  #newmovie #bollywood  #newbollywoodmovie \nishq vishk rebound, ishq vishk rebound, new song 2024, new song, hindi song, new movie 2024, ishq vishk rebound song",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/axepn8QqxRk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/axepn8QqxRk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/axepn8QqxRk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/axepn8QqxRk/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/axepn8QqxRk/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Tips Official",
                "tags": [
                    "soni soni song",
                    "rohit saraf",
                    "pashmina roshan",
                    "ishq vishk",
                    "ishq vishk rebound",
                    "ishq vishk songs",
                    "ishq vishk rebound movie",
                    "ishq vishk rebound release date",
                    "ishq vishk rebound song",
                    "ishq vishq songs",
                    "new bollywood movie",
                    "latest bollywood movies 2024",
                    "bollywood new movie",
                    "ishq vishk rebound songs",
                    "darshan raval",
                    "darshan raval songs",
                    "darshan raval new song",
                    "jonita gandhi",
                    "jonita gandhi songs",
                    "rochak kohli",
                    "rochak kohli new song",
                    "rohit saraf ishq vishq"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en-IN",
                "localized": {
                    "title": "Soni Soni | Ishq Vishk Rebound | Rohit Saraf, Pashmina| @DarshanRavalDZ@jonitamusic, Rochak,Gurpreet",
                    "description": "\"Soni Soni\" is the ultimate anthem for dance lovers blending irresistible beats with heartfelt lyrics. Perfectly crafted for Gen Z, this track promises to get you moving and feeling the love. Get ready to vibe and groove to your new favorite hit! from the much-awaited movie \"Ishq Vishk Rebound.\" Starring the charming Rohit Saraf and the beautiful Pashmina Roshan, and the mesmerizing voices of Darshan Raval, Jonita Gandhi & Rochak Kohli, this track is set to steal hearts. Lyrics Penned By Gurpreet Saini With music by the talented Rochak Kohli, this track promises a perfect blend of love and melody. Don't miss it!\n\nStay updated with the latest videos from Tips Official, Subscribe on the below link.\nhttp://youtube.com/tipsofficial\n\nSong Details :\nSong Name: Soni Soni \nSingers: Darshan Raval, Jonita Gandhi & Rochak Kohli\nMusic Director: Rochak Kohli\nMusic Producer: Sharan Rawat\nLyricist: Gurpreet Saini\nChoreographer: Vijay Ganguly\nDirector of Photography (Song): Debojeet Ray\nMix and Master by Shadab Rayeen @ New Edge\nAssistant Engineers: Pukhraj & Anup\nCostume Stylist For Dancers: Nidhi Yasha\nDolby Atmos Mix: Shahraaz Khan\n\nMovie Details : \nProducers- Ramesh Taurani and Jaya Taurani\nDirector- Nipun Avinash Dharmadhikari\nLead Cast- Rohit Saraf, Pashmina Roshan, Jibraan Khan, Naila Grrewal\nSecondary Cast- Kusha Kapila, Supriya Pilgaonkar, Akarsh Khurana, Shilpa Vishal Shetty, Shataf Figar, Anita Kulkarni and Sheeba Chadda \nStory and Screenplay writers- Dr. Vinay Chhawal, Vaishali Kamalakar Naik, and Ketan Pedgaonkar\nAdditional Screenplay writers- Akarsh Khurana and Nipun Avinash Dharmadhikari\nDialogue writer- Akarsh Khurana & Lisha Bajaj\nDirector of Photography- Milind Jog\nAudiography & Sound Design- Anirban Sengupta\nMusic- Rochak Kohli \nLyrics- Gurpreet Saini, Kumaar and Gautam G Sharma\nChoreographer- Vijay Ganguly\nEditor- Chandan Arora\nProduction Designer- Nikhil Kovale\nCostume Designers- Abhilasha Devnani & Manisha Melwani\n\nMusic On Tips Music (Tips Industries Ltd.)\n\nLyrics: \nDil Mera Dil Mera \nKi Karan\nMeri Baat Maane Na\n\nKitna Tenu Chahe \nTenu Aaye \nMeri Yaad Na\n\nKehna Tenu Kehna\nIk Tu Hi \nBas Pyaar Hai Mera\n\nKoi Nahi Tere Pehle \nKoi Hona\nTere Baad Na\n\nAkhiyaan Le Jaayein Meri Jaan \nO Soni Soni\nMujhko Bachaye Teri Haan\n\nGall Meri Manja \nTu Meri Banja\nKe Mitthi Mitthi Neendraan Da Khwaab Hai Tu\n\nHai Mera Kya Kasoor\nTu Dendi Ae Sukoon \nJo Utre Na Aisi Woh Sharaab Hai Tu\n\nO Soni Soni\nTu Meri Banja\n\nO Soni Soni\nTu Meri Banja\n\nO Mere Sohneya Chandni Raaton Mein\nMain Toh Aagayi Phir Teri Baaton Mein\n\nKaisi Tu Mere Naal Chaal Chaleya Ve\nDil Tere Naal Naal Chaleya Ve\nAsar Ae Poora Saal Chaleya Ve\nO Sohneya Ve\n\nAkhiyaan Le Jaayein Meri Jaan \nO Soni Soni\nMujhko Bachaye Teri Haan\n\nGall Meri Manja \nTu Mera Banja\nKe Mitthi Mitthi Neendraan Da Khwaab Hai Tu\n\nHai Mera Kya Kasoor\nTu Dinda Ae Sukoon \nJo Utre Na Aisi Woh Sharaab Hai Tu\n\nGall Meri Manja \nTu Meri Banja\nKe Mitthi Mitthi Neendraan Da Khwaab Hai Tu\n\nHai Mera Kya Kasoor\nTu Dindi Ae Sukoon \nJo Utre Na Aisi Woh Sharaab Hai Tu\n\nO Soni Soni\nTu Meri Banja\n\nJoin Us On:\nhttps://www.youtube.com/tipsofficial\nhttps://www.youtube.com/jhankargaane\nhttps://www.youtube.com/90sGaane\nhttps://www.youtube.com/TipsFilms\nhttps://www.youtube.com/TipsPunjabi\nhttps://www.youtube.com/TipsBhojpuri\nhttps://www.youtube.com/TipsMarathi\nhttps://www.youtube.com/bhaktiprem\nhttps://www.youtube.com/volume\nhttps://www.youtube.com/TipsRajasthani\nhttps://www.youtube.com/TipsHaryanvi\nhttps://www.youtube.com/TipsIbadat\nhttps://www.youtube.com/TipsTamil\nhttps://www.youtube.com/TipsGujarati\nhttps://www.youtube.com/TipsTelugu\nhttps://www.youtube.com/TipsMalayalamOfficial\nhttps://www.youtube.com/TipsSindhi\nhttps://www.youtube.com/TipsKannada\n\n#ishqvishkrebound #sonisoni #rohitsaraf #pashminaroshan #darshanraval #jonitagandhi  #roachakkohli  #GurpreetSaini #hindi #hindisongs #bollywoodsongs #bollywoodnewsong  #hindisongs  #newmovie #bollywood  #newbollywoodmovie \nishq vishk rebound, ishq vishk rebound, new song 2024, new song, hindi song, new movie 2024, ishq vishk rebound song"
                },
                "defaultAudioLanguage": "hi"
            },
            "statistics": {
                "viewCount": "57638798",
                "likeCount": "407709",
                "favoriteCount": "0",
                "commentCount": "8188"
            }
        }
    ],
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    }
}

let channel={
    "kind": "youtube#channelListResponse",
    "etag": "pDCp869u8g7h6XShDw-xjuBFc-A",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#channel",
            "etag": "Gl4PFA21yHllH70cWbvZU4JIHaM",
            "id": "UCWv7vMbMWH4-V0ZXdmDpPBA",
            "snippet": {
                "title": "Programming with Mosh",
                "description": "Hi! I'm Mosh 👋, a software engineer with over 20 years of experience.  I'm all about clear, concise, practical coding tutorials – no fluff, just the good stuff! My courses focus on real-world projects and the skills that will get you hired. I've helped millions of students transform their careers. \n\nWant to level up your skills? Subscribe and hit the bell to get notified when I upload new videos!\n",
                "customUrl": "@programmingwithmosh",
                "publishedAt": "2014-10-07T00:40:53Z",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/lCeCb47hCbXWFa0I4gi8uWDHzWSs7sjK4FDmk7lFEUMRNp6QRzIQOkwaKhwv7eNKZacRI2uR=s88-c-k-c0x00ffffff-no-rj",
                        "width": 88,
                        "height": 88
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/lCeCb47hCbXWFa0I4gi8uWDHzWSs7sjK4FDmk7lFEUMRNp6QRzIQOkwaKhwv7eNKZacRI2uR=s240-c-k-c0x00ffffff-no-rj",
                        "width": 240,
                        "height": 240
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/lCeCb47hCbXWFa0I4gi8uWDHzWSs7sjK4FDmk7lFEUMRNp6QRzIQOkwaKhwv7eNKZacRI2uR=s800-c-k-c0x00ffffff-no-rj",
                        "width": 800,
                        "height": 800
                    }
                },
                "localized": {
                    "title": "Programming with Mosh",
                    "description": "Hi! I'm Mosh 👋, a software engineer with over 20 years of experience.  I'm all about clear, concise, practical coding tutorials – no fluff, just the good stuff! My courses focus on real-world projects and the skills that will get you hired. I've helped millions of students transform their careers. \n\nWant to level up your skills? Subscribe and hit the bell to get notified when I upload new videos!\n"
                },
                "country": "US"
            }
        }
    ]
}

let comment={
    "kind": "youtube#commentThreadListResponse",
    "etag": "rW3FaaivaqRHP1VWbgHPZnYv1P0",
    "nextPageToken": "Z2V0X25ld2VzdF9maXJzdC0tQ2dnSWdBUVZGN2ZST0JJRkNJa2dHQUFTQlFpSUlCZ0FFZ1VJaHlBWUFCSUZDS2dnR0FBU0JRaWRJQmdCR0FBaURnb01DUFRYOGJVR0VNajE3Y0FE",
    "pageInfo": {
        "totalResults": 20,
        "resultsPerPage": 20
    },
    "items": [
        {
            "kind": "youtube#commentThread",
            "etag": "w-f4VYaqYVdap-COF6OLsrJ4Wms",
            "id": "UgxD7msptSaPXG9Xqt14AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "OyS8BiCUjodeCmFh4aBN0GEVrJU",
                    "id": "UgxD7msptSaPXG9Xqt14AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Tu Meri Ban Jaa 💙🎶🎵 Soni soni",
                        "textOriginal": "Tu Meri Ban Jaa 💙🎶🎵 Soni soni",
                        "authorDisplayName": "@DarshanRavalDZ",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/-Id_vqDgF4BEy3C31inXZug5E5jorzux1w5lBVuWAP4K0HlHMlEyRTzsd5j6pKRmP4C-A3wYCA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@DarshanRavalDZ",
                        "authorChannelId": {
                            "value": "UCzAn-hBNSTjX-QMnHASZFfA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 21518,
                        "publishedAt": "2024-05-24T10:36:55Z",
                        "updatedAt": "2024-05-24T10:36:55Z"
                    }
                },
                "canReply": false,
                "totalReplyCount": 750,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "KTgpZNK_7nVmPZkiCHamn1ODvp8",
            "id": "UgxENxr12AabiFXmLox4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "UkYaRiXRx0Ew1iQdCa8O7PqBWI4",
                    "id": "UgxENxr12AabiFXmLox4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Who come here to read the comments after the rumour of Hardik and Jasmin 😂",
                        "textOriginal": "Who come here to read the comments after the rumour of Hardik and Jasmin 😂",
                        "authorDisplayName": "@prakashsoni1355",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lQ_51IpMRMBiGEvj2PbsMIj7JF4oXVhFQC5yPvhJQ5toib=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@prakashsoni1355",
                        "authorChannelId": {
                            "value": "UCIx4__tGYsCja3-FY0ND5Pg"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T19:51:36Z",
                        "updatedAt": "2024-08-14T19:51:36Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "BdMqj7AjiLFHcmom1z-zLNfIklY",
            "id": "UgyksI0bDKBADbvOCPB4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "9R4IPYKz7MxeIcZcSzg7Ngwok30",
                    "id": "UgyksI0bDKBADbvOCPB4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "This is national crash of India? I think national crash&#39;s place of only rittik rosan all of time",
                        "textOriginal": "This is national crash of India? I think national crash's place of only rittik rosan all of time",
                        "authorDisplayName": "@Fatetasmin",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/U1iCRNfmU09s_YAKGIlR6rPuKc0jUca_5O3l0ygPepanmu5N-QOnCCgd6gkgM6AjSjayxHhR=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@Fatetasmin",
                        "authorChannelId": {
                            "value": "UCXCIGFL79AE_0e8sfMyCxcQ"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T19:40:48Z",
                        "updatedAt": "2024-08-14T19:40:48Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "lARQO1n_3ZHT2LFPu2C4TQ6l2lc",
            "id": "Ugy4LqvcwoDmO7jlmWV4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "i_4fCe8icse5rEKwFHWY9jD2axA",
                    "id": "Ugy4LqvcwoDmO7jlmWV4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Meri bann ja❤❤",
                        "textOriginal": "Meri bann ja❤❤",
                        "authorDisplayName": "@arunavachakraborty1301",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_ngtbkIpxTXygjyWfNUM1vK6KJRN9xEJ_O4zf9Svuk=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@arunavachakraborty1301",
                        "authorChannelId": {
                            "value": "UC5bNE_c8PwSCqQqYblolppQ"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T18:13:52Z",
                        "updatedAt": "2024-08-14T18:13:52Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "JElnwQZrUt4-h4ig-frIjZWJM28",
            "id": "UgzJ0E3Fo_VmA8Ju5Z54AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "RawBB2pQNDu8W01w7fevG-blNJ8",
                    "id": "UgzJ0E3Fo_VmA8Ju5Z54AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Darshan raval ❤️",
                        "textOriginal": "Darshan raval ❤️",
                        "authorDisplayName": "@Nikhillllllllll_",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/PbfWTpG6Rt7FNf6TkDUo5ZMqvUI0Ev7bPCv6GYmEL0s_-I-szDHW-7xRm3nPRRszAipSLtRedg=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@Nikhillllllllll_",
                        "authorChannelId": {
                            "value": "UCrJ92Nc0oIvYInGJzeCSOyg"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T18:10:14Z",
                        "updatedAt": "2024-08-14T18:10:14Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "nHiLz5NLRliDRykup2-KSiwmyB8",
            "id": "Ugw-uF9L00F0REDvYOh4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "mEAu_9l24weltt7uDD3xVK1bmko",
                    "id": "Ugw-uF9L00F0REDvYOh4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Happy birthday 🎂🎂🎂",
                        "textOriginal": "Happy birthday 🎂🎂🎂",
                        "authorDisplayName": "@Mrmind717",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/-eibmApInqP26LnSQ5LtxhNtNF2rURjpS8leo952tILiRGcDLfnr1lipo8uZxl1eZxW-j0WlgA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@Mrmind717",
                        "authorChannelId": {
                            "value": "UCNLRH_Ay5bvE0Si2UXdseEw"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T16:36:27Z",
                        "updatedAt": "2024-08-14T16:36:27Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "SDdbO_fedq4IN_s6XV5HLItKY3I",
            "id": "UgyJ2gLeHcpFdDckffR4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "yjFOeVjQH2MLjsMYVzyjR7IxmG4",
                    "id": "UgyJ2gLeHcpFdDckffR4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Hello friends",
                        "textOriginal": "Hello friends",
                        "authorDisplayName": "@Mrmind717",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/-eibmApInqP26LnSQ5LtxhNtNF2rURjpS8leo952tILiRGcDLfnr1lipo8uZxl1eZxW-j0WlgA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@Mrmind717",
                        "authorChannelId": {
                            "value": "UCNLRH_Ay5bvE0Si2UXdseEw"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T16:36:05Z",
                        "updatedAt": "2024-08-14T16:36:05Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "VcAov-R7s4Cd89AhbKQMuordGBM",
            "id": "Ugw_UwG07YSMf8DoItt4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "hsnuyUm1WUiHLKirpt7E-YlVehs",
                    "id": "Ugw_UwG07YSMf8DoItt4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Who thought that she is Sargun??",
                        "textOriginal": "Who thought that she is Sargun??",
                        "authorDisplayName": "@frustatedlife7223",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_m_gmD12tC-6xjA_3RuZmCcPHf1EuRBBPCKNU4CMvLx7A=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@frustatedlife7223",
                        "authorChannelId": {
                            "value": "UCgq60_orKgOKOBL036CX2oA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T15:52:10Z",
                        "updatedAt": "2024-08-14T15:52:10Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "BOMNZwSovmBe_0h43QMIpIfVFu8",
            "id": "UgxZ_4mrATCew3h7uU54AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "9ZCZr0fdsUQJ95xqi2Rex4HbtpU",
                    "id": "UgxZ_4mrATCew3h7uU54AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "<a href=\"https://www.youtube.com/watch?v=axepn8QqxRk&amp;t=45\">0:45</a> akhiyaan gulaab song step..",
                        "textOriginal": "0:45 akhiyaan gulaab song step..",
                        "authorDisplayName": "@AditiKumari-q8n",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_njMp9P5pDrqRaj4oHRodXslSma01EB2tIA4mBbGR7rDJoi92M1smujcI3N84wSKYdkGA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@AditiKumari-q8n",
                        "authorChannelId": {
                            "value": "UCz8P7BpP7spC_Q2XcOWGf1A"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 1,
                        "publishedAt": "2024-08-14T14:41:34Z",
                        "updatedAt": "2024-08-14T14:41:34Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "5IpK3cyy7jHRfSyg9Qp1x8ec-ts",
            "id": "UgzDFjYLNXNkiseYAjR4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "_PiOpVE3Og3RbTjY-TJoeXoCLQc",
                    "id": "UgzDFjYLNXNkiseYAjR4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "What a song 🔥😍",
                        "textOriginal": "What a song 🔥😍",
                        "authorDisplayName": "@MTCS_DeekshithaNarasimha",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_kSgzsn-PaGdvyWXb6AMhFa1gscZpG84RXiatevNLqmSu1hqWQ=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@MTCS_DeekshithaNarasimha",
                        "authorChannelId": {
                            "value": "UC1yYlG_od4hIRUvc_77CsWA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T14:08:23Z",
                        "updatedAt": "2024-08-14T14:08:23Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "tMFDfDoBAFc1-SYrgMeElWWn1b4",
            "id": "UgyUZTSSX8AUrGS_3qd4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "zoAmvGf7G4gLiK2sp2BBLDQupnI",
                    "id": "UgyUZTSSX8AUrGS_3qd4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Best dance😮",
                        "textOriginal": "Best dance😮",
                        "authorDisplayName": "@ankitachauhan3034",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_nLOZiVoOnOY9sRG6PEfbeJQZgNEc94Ld_-R0YhapW-QHpFlNNHtQIwpPu8VJKX5wVYKg=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@ankitachauhan3034",
                        "authorChannelId": {
                            "value": "UCUyS_xxQC2CskdX02LXfRFw"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 1,
                        "publishedAt": "2024-08-14T13:58:30Z",
                        "updatedAt": "2024-08-14T13:58:30Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "aiF-TO6FlKvxyxRoh7PQipoV8G4",
            "id": "Ugw6OPXu_4BQyuTPqxh4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "gTy3uJZSq3vxxQIOVPyfuYhAVBo",
                    "id": "Ugw6OPXu_4BQyuTPqxh4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Darshan Raval songs hit different ❤😊😊",
                        "textOriginal": "Darshan Raval songs hit different ❤😊😊",
                        "authorDisplayName": "@reshmashaikh1054",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_m921Q_bBeDk3OTGKcSyFCkmgU8rv8KMI0jmKoxJoS7S5I=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@reshmashaikh1054",
                        "authorChannelId": {
                            "value": "UCCqHifubwFW1XLxCQVbE2bA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T13:35:37Z",
                        "updatedAt": "2024-08-14T13:35:37Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "UEyz79JSWxahZvTWeRU5CgkjEQA",
            "id": "Ugxxj_K6_A2huQxoePh4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "fKv0RawNAPUvJHZ_sf8OJtBj8kU",
                    "id": "Ugxxj_K6_A2huQxoePh4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Uff, can&#39;t get enough of Darshan&#39;s voice in this song! 😍",
                        "textOriginal": "Uff, can't get enough of Darshan's voice in this song! 😍",
                        "authorDisplayName": "@MissRealBolly",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ib3a1ZMwKDrguUU3We1PCRq-BhouMkqamB7xhVu88EEs2SI6Ab48WRSxu9GJ6vYTRd6FMbZgXwg=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@MissRealBolly",
                        "authorChannelId": {
                            "value": "UCHA5J_m9-1HnmKjSrTzeejw"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T12:22:07Z",
                        "updatedAt": "2024-08-14T12:22:07Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "Jlr51iHOp9wFZF-oSFZeAp-Go1Y",
            "id": "UgwGWK_8PG_uHpuDy3t4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "gVUNlPvytKJUUGCXosangdeakf4",
                    "id": "UgwGWK_8PG_uHpuDy3t4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "i am leaving a comment in hope that whenever someone like it. I will be reminded of this masterpiece.",
                        "textOriginal": "i am leaving a comment in hope that whenever someone like it. I will be reminded of this masterpiece.",
                        "authorDisplayName": "@niharika2152",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lenFXCdd5tYV1sjW3qAHVrvpkmnW48ySfabDVnEHlL27s=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@niharika2152",
                        "authorChannelId": {
                            "value": "UCLdpjWn-ReCUElnDCwxFR-w"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T12:20:36Z",
                        "updatedAt": "2024-08-14T12:20:36Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "YmcNjUYa-L-2lO8q5C1QgR7FGLI",
            "id": "UgyoP4SMSEHaMVBdY2t4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "WnAQ_cxiNPKRAhN6KACu_mq5kks",
                    "id": "UgyoP4SMSEHaMVBdY2t4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "<a href=\"https://www.youtube.com/watch?v=axepn8QqxRk&amp;t=82\">1:22</a> my fav part in this song ❤",
                        "textOriginal": "1:22 my fav part in this song ❤",
                        "authorDisplayName": "@rajnishsen129",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/pzK9mOdDDsBgfTmniKhHwlu_54V1cSzKwdbBpQwAcg07VQT9-0uGD1bD5tImSVX9UX-VdaTelw=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@rajnishsen129",
                        "authorChannelId": {
                            "value": "UCYNuANp4nvvXVf3dIB7eOTg"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T12:04:17Z",
                        "updatedAt": "2024-08-14T12:04:17Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "lC41vmFgyhsszlbQLw8PwwQHQOM",
            "id": "Ugy0wXBKhmOB3UBf6Xp4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "bp4xYZ4k2jUlPSnKkibsAtgDC0Q",
                    "id": "Ugy0wXBKhmOB3UBf6Xp4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "♥️",
                        "textOriginal": "♥️",
                        "authorDisplayName": "@anananan1860",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/X2xBRA7tlaiJW40Xs2mE09vEqbOjlip-_-CJuX3NHK3bbbDMmDt4qjrnPe8bflxMI6jy0aWyIA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@anananan1860",
                        "authorChannelId": {
                            "value": "UCDtarGZq05iWQGlssU47mFg"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T10:55:36Z",
                        "updatedAt": "2024-08-14T10:55:36Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "jkLp8cS6y8PZsIskw32fEOfyvpE",
            "id": "UgySKKRUdeqFnfihhzJ4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "oQhPjP0MiHcot5oSGaaggM6BVvM",
                    "id": "UgySKKRUdeqFnfihhzJ4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Lovely soge❤❤",
                        "textOriginal": "Lovely soge❤❤",
                        "authorDisplayName": "@abulhossin6525",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_n0P3r2dt_xOW7IMpld2RrxGBWw0u14CCrewTD_k6rGgh-rAJJjEjQc9tcAQhDqX28vZA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@abulhossin6525",
                        "authorChannelId": {
                            "value": "UCg-hsFOqc5mbEIsIsO7hJPQ"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T10:11:25Z",
                        "updatedAt": "2024-08-14T10:11:25Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "xhwRbmWCW-oZpz-CNZOr1hoa7lg",
            "id": "UgySb6OM0fHQszIdNzd4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "HiP5I5sE81hrsxc9R3cOYssH7iw",
                    "id": "UgySb6OM0fHQszIdNzd4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "100/100 vibes hai ye song par😍<br>Love frm bd🇧🇩",
                        "textOriginal": "100/100 vibes hai ye song par😍\nLove frm bd🇧🇩",
                        "authorDisplayName": "@SamiaSaif-ls3sd",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_meLtS1C8gl1i7ctdw977aqXq65ZlRYz3nJcpNHxhajLNpRpb2AVHlBghoDuIef2xu6gQ=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@SamiaSaif-ls3sd",
                        "authorChannelId": {
                            "value": "UC5499mfLjZLvkR3gJtjITKA"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T09:28:39Z",
                        "updatedAt": "2024-08-14T09:28:39Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "_cHEsnBP5xNgei-fQ7g-QJZIzQQ",
            "id": "UgxFbV6zD9rE9oMj8th4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "W7M15itZR4nFkbQ6sScwbA_-_lU",
                    "id": "UgxFbV6zD9rE9oMj8th4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Aaj hamara birthday but 0 like",
                        "textOriginal": "Aaj hamara birthday but 0 like",
                        "authorDisplayName": "@mkumar.official",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/reg82mzLLul-5yNiuKdF7y6XXr0mbRnuD4pB7hDSw5olYAj7Tg9uu5kI-vSVX4ME2Z6HJN_3gA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@mkumar.official",
                        "authorChannelId": {
                            "value": "UCVhQgs2jazjVqmiVYad4Ilg"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 1,
                        "publishedAt": "2024-08-14T09:08:54Z",
                        "updatedAt": "2024-08-14T09:08:54Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        },
        {
            "kind": "youtube#commentThread",
            "etag": "K-yRogs8Yxk8zsHqR3b7aMvoKck",
            "id": "UgwtJcsuf6sbWzK3HXJ4AaABAg",
            "snippet": {
                "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                "videoId": "axepn8QqxRk",
                "topLevelComment": {
                    "kind": "youtube#comment",
                    "etag": "vanVnRUbTlkdsXyVrm67lMibPU4",
                    "id": "UgwtJcsuf6sbWzK3HXJ4AaABAg",
                    "snippet": {
                        "channelId": "UCJrDMFOdv1I2k8n9oK_V21w",
                        "videoId": "axepn8QqxRk",
                        "textDisplay": "Nice song 😍",
                        "textOriginal": "Nice song 😍",
                        "authorDisplayName": "@MuskanRawani-rr8kk",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_k18TQOefWzLa5SvdJmEE0dDZLfk4am4CaTqv-UUpCP4ll3lucs6Ttsxlbnh6UOy4Y8dw=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl": "http://www.youtube.com/@MuskanRawani-rr8kk",
                        "authorChannelId": {
                            "value": "UC-YXF9cOBK_Wv8yPBrwkHkQ"
                        },
                        "canRate": true,
                        "viewerRating": "none",
                        "likeCount": 0,
                        "publishedAt": "2024-08-14T08:33:57Z",
                        "updatedAt": "2024-08-14T08:33:57Z"
                    }
                },
                "canReply": true,
                "totalReplyCount": 0,
                "isPublic": true
            }
        }
    ]
}

let src={
    "kind": "youtube#searchListResponse",
    "etag": "8YcVmDpblfg6hYdqHpEX9kWMe_Q",
    "nextPageToken": "CA8QAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 43722,
        "resultsPerPage": 15
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "VmgSEIDbII_QLi0FFrePRkLNx-s",
            "id": {
                "kind": "youtube#video",
                "videoId": "q32skvBgxo4"
            },
            "snippet": {
                "publishedAt": "2023-12-14T14:46:31Z",
                "channelId": "UC4SVo0Ue36XCfOyb5Lh1viQ",
                "title": "Learn JavaScript KEY EVENTS in 10+ minutes! ⌨",
                "description": "eventListener = Listen for specific events to create interactive web pages // events: keydown, keyup // document.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/q32skvBgxo4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/q32skvBgxo4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/q32skvBgxo4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bro Code",
                "liveBroadcastContent": "none",
                "publishTime": "2023-12-14T14:46:31Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "-55GrsvPYECAFURBdms-ilGMFRg",
            "id": {
                "kind": "youtube#video",
                "videoId": "_-UBpRUepwc"
            },
            "snippet": {
                "publishedAt": "2021-11-18T04:30:16Z",
                "channelId": "UCl1Umy9WXb3I49JTMG3WoWw",
                "title": "Keyboard Events (onkeydown, onkeyup, onkeypress) in JavaScript in हिंदी /اردو - Class -27",
                "description": "Getting Started With Javascript | Learn Javascript For Beginners Learning the basics of keyboard events with Javascript is very ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_-UBpRUepwc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_-UBpRUepwc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_-UBpRUepwc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Husain Sir",
                "liveBroadcastContent": "none",
                "publishTime": "2021-11-18T04:30:16Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "XKi35W9ZeVDaxoPVQEYHna86IHc",
            "id": {
                "kind": "youtube#video",
                "videoId": "_BVkOvpyRI0"
            },
            "snippet": {
                "publishedAt": "2021-07-27T13:00:29Z",
                "channelId": "UCjX0FtIZBBVD3YoCcxnDC4g",
                "title": "What Does &quot;(e)&quot; Mean in JavaScript? - Event Handler Object Explained",
                "description": "The one thing that always confused me when I was learning JavaScript was what exactly the \"e\" or \"ev\" was when using events on ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_BVkOvpyRI0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_BVkOvpyRI0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_BVkOvpyRI0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "dcode",
                "liveBroadcastContent": "none",
                "publishTime": "2021-07-27T13:00:29Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "HlSM427qnYetFLxZw4GPbVn248M",
            "id": {
                "kind": "youtube#video",
                "videoId": "rATawVg__gY"
            },
            "snippet": {
                "publishedAt": "2023-11-25T15:47:39Z",
                "channelId": "UCoqhuiauEn0DShpi_qu1Wtw",
                "title": "How to check if an object is a KeyboardEvent in JavaScript?",
                "description": "javascript: How to check if an object is a KeyboardEvent in JavaScript? Thanks for taking the time to learn more. In this video I'll go ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/rATawVg__gY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/rATawVg__gY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/rATawVg__gY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Luke Chaffey",
                "liveBroadcastContent": "none",
                "publishTime": "2023-11-25T15:47:39Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "9czKa45uH4iPlhS0sFDAH0QrqC0",
            "id": {
                "kind": "youtube#video",
                "videoId": "Q3ktcptd2yI"
            },
            "snippet": {
                "publishedAt": "2023-04-17T12:00:16Z",
                "channelId": "UCjX0FtIZBBVD3YoCcxnDC4g",
                "title": "How to Interact With the Keyboard - JavaScript Tutorial for Beginners",
                "description": "In today's video, we're going to have a look at interacting with the keyboard using JavaScript within the browser. More specifically ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Q3ktcptd2yI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Q3ktcptd2yI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Q3ktcptd2yI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "dcode",
                "liveBroadcastContent": "none",
                "publishTime": "2023-04-17T12:00:16Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "APTGsSiuzTr2JmcvqZ9pWE631Fs",
            "id": {
                "kind": "youtube#playlist",
                "playlistId": "PL6f7IPPkpDKlHnvkR9ONDJGRTKpAdFjVv"
            },
            "snippet": {
                "publishedAt": "2019-09-30T19:49:09Z",
                "channelId": "UCHCbJo0pCPE5aj6OCvIN_Dw",
                "title": "Bangla DOM(Document Object Model Full Tutorial ES6)",
                "description": "javascript bangla, document object model, DOM bangla tutorial,bangla javascript full playlist, es6, javascript full project, javascript ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Cr-ZWK4aaF4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Cr-ZWK4aaF4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Cr-ZWK4aaF4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Rafee Amin",
                "liveBroadcastContent": "none",
                "publishTime": "2019-09-30T19:49:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "fr1By2ZyLB0NGUSPSMnGz_LzTJ4",
            "id": {
                "kind": "youtube#video",
                "videoId": "hFb_KCpE9S4"
            },
            "snippet": {
                "publishedAt": "2022-09-06T13:18:00Z",
                "channelId": "UCrnj-K18eAzQgazgNw-mRqg",
                "title": "Keyboard Events in JavaScript | Events | JavaScript | CLASS-46 | Telugu | Web Technology",
                "description": "Event : An event is something that happens when user interact with the webpage, such as when he clicked a link or button, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/hFb_KCpE9S4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/hFb_KCpE9S4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/hFb_KCpE9S4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "SB Tech Tuts",
                "liveBroadcastContent": "none",
                "publishTime": "2022-09-06T13:18:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "b1msMlXQq9XmLEx-0ggGkpd8txU",
            "id": {
                "kind": "youtube#video",
                "videoId": "RucwfWwICwc"
            },
            "snippet": {
                "publishedAt": "2020-02-24T13:41:53Z",
                "channelId": "UCqIINOpP76O4yAEK1BC4aog",
                "title": "The Event Object",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/RucwfWwICwc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/RucwfWwICwc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/RucwfWwICwc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Cary Riina",
                "liveBroadcastContent": "none",
                "publishTime": "2020-02-24T13:41:53Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "3J5z9D4C6HSSKOvmsMd2sJ99lW8",
            "id": {
                "kind": "youtube#video",
                "videoId": "BaFC0Xgcp_8"
            },
            "snippet": {
                "publishedAt": "2022-08-27T03:30:02Z",
                "channelId": "UCPi23Ql765_5smMj2-r0X4g",
                "title": "How to handle Key Events in Java | Key Listener in Java | Keyboard Events in Java by Mahesh Huddar",
                "description": "How to handle Key Events in Java | Key Listener in Java | Keyboard Events in Java by Mahesh Huddar The following concepts ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/BaFC0Xgcp_8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/BaFC0Xgcp_8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/BaFC0Xgcp_8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Mahesh Huddar",
                "liveBroadcastContent": "none",
                "publishTime": "2022-08-27T03:30:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "5mc6CkjK2bQhBTK6k3EV2Sq2kCk",
            "id": {
                "kind": "youtube#video",
                "videoId": "lFB1QU4Xv6s"
            },
            "snippet": {
                "publishedAt": "2023-07-05T04:47:08Z",
                "channelId": "UCZQQp1IR9d3OQnTyTn0CSmw",
                "title": "03-Moving object using arrow key | keyboard event handling",
                "description": "In this video we have shown and explain the Movement of Object When Arrow Keys are Pressed in pygame. following keys are ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/lFB1QU4Xv6s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/lFB1QU4Xv6s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/lFB1QU4Xv6s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Dare to Program",
                "liveBroadcastContent": "none",
                "publishTime": "2023-07-05T04:47:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6njyc0YkGktLtiSLsqwO9DX_vQA",
            "id": {
                "kind": "youtube#video",
                "videoId": "bB8-JziGLpo"
            },
            "snippet": {
                "publishedAt": "2023-09-19T15:16:49Z",
                "channelId": "UCmOpHGj4JRWCdXhllVTZCVw",
                "title": "JavaScript Keyboard Events Explained for Beginners",
                "description": "DOM Events and JavaScript Course https://store.thecodecreative.com/dom-events-and-javascript Are you ready to level up your ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/bB8-JziGLpo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/bB8-JziGLpo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/bB8-JziGLpo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "The Code Creative",
                "liveBroadcastContent": "none",
                "publishTime": "2023-09-19T15:16:49Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "YmrNOfWrrjnvg9ET7dU3GCG2x_s",
            "id": {
                "kind": "youtube#video",
                "videoId": "cmrgr0VmAEc"
            },
            "snippet": {
                "publishedAt": "2014-10-08T18:17:20Z",
                "channelId": "UCwviGFzPF2Q22u9aGk6D0Mw",
                "title": "C# Programming 70 - Keyboard Event Handling",
                "description": "Basic look at handling primitive keyboard events.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/cmrgr0VmAEc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/cmrgr0VmAEc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/cmrgr0VmAEc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sir Joseph the Paladin",
                "liveBroadcastContent": "none",
                "publishTime": "2014-10-08T18:17:20Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dElDYTkl4DOItmPU7tvKCaPsSI8",
            "id": {
                "kind": "youtube#video",
                "videoId": "S_CLdlQ6gS8"
            },
            "snippet": {
                "publishedAt": "2022-09-03T13:09:17Z",
                "channelId": "UCrnj-K18eAzQgazgNw-mRqg",
                "title": "Events in JavaScript | Mouse Events in JavaScript | JavaScript | CLASS-45 | Telugu | Web Technology",
                "description": "Event : An event is something that happens when user interact with the webpage, such as when he clicked a link or button, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/S_CLdlQ6gS8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/S_CLdlQ6gS8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/S_CLdlQ6gS8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "SB Tech Tuts",
                "liveBroadcastContent": "none",
                "publishTime": "2022-09-03T13:09:17Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "zeTlQs89b5LIFRdMoWiEex-rGbM",
            "id": {
                "kind": "youtube#video",
                "videoId": "ABaHb1lHpMs"
            },
            "snippet": {
                "publishedAt": "2018-07-21T15:02:29Z",
                "channelId": "UCMB-NDgOHu012G-45azmggw",
                "title": "The event object in JavaScript",
                "description": "This course is part of \"JavaScript - The Complete Guide\" course that you can find on ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ABaHb1lHpMs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ABaHb1lHpMs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ABaHb1lHpMs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "The Coding Base",
                "liveBroadcastContent": "none",
                "publishTime": "2018-07-21T15:02:29Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "bjLAZZ2kwlgy_epyui03OXNGxV8",
            "id": {
                "kind": "youtube#video",
                "videoId": "2vKBqzl6zAU"
            },
            "snippet": {
                "publishedAt": "2019-09-26T14:20:49Z",
                "channelId": "UCKS34cSMNaXaySe2xgXH-3A",
                "title": "Javascript event handling  | Web Technology | Lec-34 | Bhanu Priya",
                "description": "Javascript : Functions event handling with example program.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2vKBqzl6zAU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2vKBqzl6zAU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2vKBqzl6zAU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Education 4u",
                "liveBroadcastContent": "none",
                "publishTime": "2019-09-26T14:20:49Z"
            }
        }
    ]
}
*/

function ago(published) {
    let pub=new Date(published);
    let today=new Date();

    let millisec=pub.getTime();
    let todaymillisec=today.getTime();
    let diffmillisec=todaymillisec-millisec;

    let min=diffmillisec/(1000*60);
    
    if(min>60) {
        let hr=min/60;
        
        if(hr>24) {
            let day=hr/24;

            if(day>7 && day<30) {
                let wk=day/7;

                return parseInt(wk)+" weeks";
            }
            else if(day>30) {
                let mnth=day/30;

                if(mnth>12) {
                    let yr=day/365;
    
                    return parseInt(yr)+" years";
                }

                return parseInt(mnth)+" months"
            } 

            return parseInt(day)+" days";
        }

        return parseInt(hr)+" hours";
    }
    else {
        return parseInt(min)+" minutes";
    }

}

function count(like) {
    if(like>999) {
        let K=like/1000;
       
        if(K>999) {
            let M=K/1000;
            
            if(M>999) {
                let B=M/1000;
                //console.log(M,B);
                return B.toFixed(1)+' B';
            }
            return M.toFixed(1)+' M';
        }
        return K.toFixed(1)+' K';
    }
    return like;
}


fetchVideo('songs ',50);

//------------------Function Rendered Initial---------------------------------------------------------------------------------------------------------------------------------------------

async function renderfetchvdo(data) {        //data
    let items=data?.items;

    videoplaypage.style.display="none";

   let size=items.length;
   for(let i=0;i<size;i++)
    {
        let card=document.createElement('div');
        let clnm=`${items[i]?.id?.videoId}`;
        card.classList.add(clnm, 'card');

     //----fetch chanel-------------------------------------------------
       let channelrespo=await fetch(   
        baseurl+
        "/channels"+
        `?key=${API_key}`+
        "&part=snippet"+
        `&id=${items[i]?.snippet.channelId}`   
        );
       let channel=await channelrespo.json();
       
        card.innerHTML=`<img class="${clnm} img-box" src=${items[i]?.snippet?.thumbnails.high?.url}>
                        <div class="${clnm} content">
                            <img class="${clnm} chnllogo" src=${channel?.items?.[0]?.snippet?.thumbnails?.high.url}></img>            
                            <div class="${clnm} txt-box">    
                                <div class="${clnm} title wrt">${items[i]?.snippet?.title}</div>
                                <div class="${clnm} chnl wrt light">${items[i]?.snippet.channelTitle}</div>
                                <div class="${clnm} spn wrt light">views • ${ago(items[i]?.snippet.publishedAt)} ago</div>
                            </div>
                            <div>
                                <span class="material-symbols-outlined dot">more_vert</span>
                            </div>
                        </div>`;

        mainbody.append(card);


        //------------on click of a card--------
        card.addEventListener("click",(e) => {
            //console.log(e.target);

            let card_id=e.target.classList[0];
            console.log(card_id);

            mainbody.style.display='none';
            lowbar.style.display='none';
            leftbar.style.display='none';
            leftbarhide.style.display="none";
            videoplaypage.style.display="block";

            fetchSelectedVideo(card_id,items[i]?.snippet?.channelTitle); 
        })

    }
}

//renderfetchvdo(array);   



//---------------Debouncing----------------------------------------------------------------
function debouncing(oldFun,time) {
    let id;

    return function(...arg) {
        clearTimeout(id);
        id=setTimeout(() => {
            oldFun(...arg);
        },time);
    }
}

async function search(text) {
    if(!text) {           //blank
        searchtextbox.innerHTML='';
        return;
    }

    else {
        let response=await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&maxResult=14&q=' + text)}`);                //"https://www.googleapis.com/youtube/v3"+"/search"+`?part=snippet&key=${API_key}&q=${text}&maxResults=15`
        let data=await response.json();

        let values=data.contents;
        let words=JSON.parse(values.substring(values.indexOf('['),values.lastIndexOf(']')+1));

        let wrd=document.getElementById('word');
        if(wrd) {
               wrd.remove();
        }
        
        let word=document.createElement('div');
        word.id="word";
        words[1].map(item => {
        
        let srcTxt=document.createElement('div');
        srcTxt.className="srch-opt";
      
        srcTxt.innerHTML=`<i class="fa-solid fa-magnifying-glass"></i>
                          <div> ${item?.[0]}</div>`;
          
            word.append(srcTxt);
        })
        searchtextbox.append(word);        
    }
}

srch.addEventListener("keyup",(e) => {
    searchtextbox.style.display='block';
    betterSearch(e.target.value);
    
});

const betterSearch=debouncing(search,200);

srch.addEventListener("blur",() => {
    searchtextbox.style.display='none';
});



//------------------Function Rendered After Search------------------------------------------------------

async function rendersrchvdo(data,searchquery) {        //data
    let items=data?.items;

    videoplaypage.style.display="none";

        let searchframe=document.createElement("div");
        searchframe.id="searchframe";
        let size=items.length;
        for(let i=0;i<size;i++)
        {
            let clnm=`${items[i]?.id?.videoId ?? items[i]?.id?.playlistId}`;
            console.log("clnm",clnm);
            let bricks=document.createElement('div');
            bricks.classList.add(clnm, 'bricks');
    
          //----fetch chanel-------------------------------------------------
            let channelrespo=await fetch(   
             baseurl+
             "/channels"+
             `?key=${API_key}`+
             "&part=snippet"+
             `&id=${items[i]?.snippet.channelId}`   
            );
            let channel=await channelrespo.json();
        
              bricks.innerHTML=`<div class="${clnm} img-container" style="background-image: url(${items[i]?.snippet?.thumbnails.high?.url});"></div>
                                <div class="${clnm} context">   
                                    <div class="${clnm} title">${items[i]?.snippet?.title}</div>
                                    <div class="${clnm} spn wrt light">views • ${ago(items[i]?.snippet.publishedAt)} ago</div>
                                    <div class="${clnm} chnl">
                                        <img class="${clnm} chnllogo" src=${channel?.items?.[0]?.snippet?.thumbnails?.high.url}></img>
                                        <div class="${clnm} chnl wrt light">${items[i]?.snippet.channelTitle}</div>
                                    </div>
                                    <div class="${clnm} wrt">${items[i]?.snippet.description}</div>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined dot">more_vert</span>
                                </div>`;

            searchframe.append(bricks);

 
            //------------on click of a bricks--------
            bricks.addEventListener("click",(e) => {

                let bricks_id=e.target.classList[0];
                console.log(bricks_id);
        
                searchbody.style.display='none';
                lowbar.style.display='none';
                leftbar.style.display='none';
                leftbarhide.style.display="none";
                videoplaypage.style.display="block";
        
                fetchSelectedVideo(bricks_id,searchquery); 
            
                //renderPlayer(video,searchquery,clnm);
               
            });
            
        }
        searchbody.append(searchframe);
    
}

//rendersrchvdo(array);


srch.addEventListener("keydown",(e) => {
    if(e.key === 'Enter') {
        searchbody.style.display='block';
        searchtextbox.style.display='none';
        mainbody.remove(); 
        
        let searchframe=document.getElementById('searchframe');
        if(searchframe) {
            searchframe.remove();
        }

        fetchSearchVideo(e.target.value,20);
    }
});



//---------------------Video Player Screen---------------------------------------------------------------------------------------------------------------------------------------------------
let vdottl=document.getElementById('vdo-ttl');
let left=document.getElementById('left');
let like=document.getElementById('like');
let vdodes=document.getElementById('vdo-des');
let vdosgst=document.getElementById('vdo-sgst');
let cmtcount=document.getElementById('cmt-count');
let cmtcontainer=document.getElementById('cmnt-container');

let player;
function youtubeVideoPlayer(id) {
    console.log("player",id);

    player=new YT.Player("video-player",{
        height: "500",     
        width: "1000",
        videoId: id,
        events: {
            onReady: function(event) {
                event.target.playVideo();
                console.log("hi",player,id)
            }
        },
    });
    
}

  // Function to load a new video
  function loadVideo(videoId) {
    console.log(player, videoId);
    if (player && player.loadVideoById) {
        console.log("Inside loadVideo");
        player.loadVideoById(videoId); 
    }
}

async function renderPlayer(data,name,vdoid) {           //data /video
    let items=data?.items;             //data

    loadVideo(vdoid);
    youtubeVideoPlayer(vdoid);

    //----fetch chanel-------------------------------------------------
    let channelrespo=await fetch(   
        baseurl+
        "/channels"+
        `?key=${API_key}`+
        "&part=snippet"+
        `&id=${items?.[0]?.snippet.channelId}`   
        );
       let channel=await channelrespo.json();


    vdottl.innerHTML=`${items?.[0]?.snippet?.title}`;
    left.innerHTML=`<img id="cnl-lg" src=${channel?.items?.[0]?.snippet?.thumbnails?.high.url}>
                    <div id="cnl">${items?.[0]?.snippet.channelTitle} <br><span> subscribers</span></div>
                    <button class="btn-1">Subscribe</button>`;

    let likevalues=items?.[0]?.statistics?.likeCount;
    
    like.innerHTML=`<i class="material-symbols-outlined icon">thumb_up</i><span>${count(likevalues)}</span>`;

    let viewCount=items?.[0]?.statistics?.viewCount;

  vdodes.innerHTML=`<div id="cv">
                        <span>${count(viewCount)}</span>   <span>${ago(items?.[0]?.snippet.publishedAt)}</span>
                    </div>
                    <div>${items?.[0]?.snippet.description}</div>`;
            
    cmtcount.innerHTML=`${items?.[0]?.statistics?.commentCount} Comments`;    

    fetchMiniVideo(name,20);

    //renderminivdo(minivideos);

    fetchComments(vdoid,20);

    //renderComment(comment);
}



async function renderminivdo(data) {         //data
     let items=data?.items;

     let miniframe=document.createElement("div");
     miniframe.id="miniframe";
     let size=items.length;
     for(let i=0;i<size;i++)
     {
        let clnm=`${items[i]?.id?.videoId}`;
        let mini=document.createElement('div');
        mini.classList.add(clnm, 'mini');


       //----fetch chanel-------------------------------------------------
         let channelrespo=await fetch(   
          baseurl+
          "/channels"+
          `?key=${API_key}`+
          "&part=snippet"+
          `&id=${items[i]?.snippet.channelId}`   
          );
         let channel=await channelrespo.json();
    
      
           mini.innerHTML=`<div class="${clnm} mini-img" style="background-image: url(${items[i]?.snippet?.thumbnails.high?.url});"></div>
                             <div class="${clnm} mini-context">   
                                 <div class="${clnm}  mini-title">${items[i]?.snippet?.title}</div>
                                 <div class="${clnm} wrt">${items[i]?.snippet.channelTitle}</div>
                                 <div class="${clnm} wrt">views • ${ago(items[i]?.snippet.publishedAt)} ago</div>
                             </div>
                             <div>
                                 <span class="material-symbols-outlined dot">more_vert</span>
                             </div>`;

         miniframe.append(mini);
     }
     vdosgst.append(miniframe);
 
}



function renderComment(comment) {   
    let items=comment?.items;

    let cmtsize=items.length;
    for(let i=0;i<cmtsize;i++) {
        let combox=document.createElement("div");
        combox.id="combox"; 

        combox.innerHTML=`  <img class="profile-img" src=${items[i]?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}>
                            <div class="cmt-profile">
                                <div class="nm-tm">
                                    <div class="profile-nm">${items[i]?.snippet?.topLevelComment?.snippet?.authorDisplayName}</div>
                                    <div class="upload">${ago(items[i]?.snippet?.topLevelComment?.snippet?.publishedAt)} ago</div>
                                </div>
                                <div class="comment">${items[i]?.snippet?.topLevelComment?.snippet?.textDisplay}</div>
                                <div class="cmt-lk-dlk">
                                    <div class="cmt-like tmb"><span class="material-symbols-outlined icon">thumb_up</span><span class="cmt-likeno">${items[i]?.snippet?.topLevelComment?.snippet?.likeCount}</span></div>
                                    <span class="tmb material-symbols-outlined icon">thumb_down</span>
                                    <span>Reply</span>
                                </div>
                            </div>
                            <span class="material-symbols-outlined dot">more_vert</span>`;

        
    cmtcontainer.append(combox);
    }

}
