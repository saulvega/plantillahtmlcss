const videosList = [
    {
        video: 'video/video1.mp4',
        title: 'Video de ejemplo',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptatem, tempore atque nam odit iste nobis fuga quibusdam impedit culpa minus labore reiciendis qui blanditiis inventore quaerat pariatur ratione. Repellendus.'

    },
    {
        video: 'video/video2.mp4',
        title: 'Video de ejemplo 2',
        description: 'Descripción del video 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptatem, tempore atque nam odit iste nobis fuga quibusdam impedit culpa minus labore reiciendis qui blanditiis inventore quaerat pariatur ratione. Repellendus.'
    },
    {
        video: 'video/video3.mp4',
        title: 'Video de ejemplo 3',
        description: 'Descripción del video 3'
    },
    {
        video: 'video/video4.mp4',
        title: 'Video de ejemplo 4',
        description: 'Descripción del video 4'
    },
    {
        video: 'video/video1.mp4',
        title: 'Video de ejemplo',
        description: 'Descripción del video 1'
    },
    {
        video: 'video/video2.mp4',
        title: 'Video de ejemplo 2',
        description: 'Descripción del video 2'
    },
    {
        video: 'video/video3.mp4',
        title: 'Video de ejemplo 3',
        description: 'Descripción del video 3'
    },
    {
        video: 'video/video4.mp4',
        title: 'Video de ejemplo 4',
        description: 'Descripción del video 4'
    },
    {
        video: 'video/video1.mp4',
        title: 'Video de ejemplo',
        description: 'Descripción del video 1'
    },
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
    var { video, title } = item;
    return (
        `<div class="list active">
            <video src=${video} class="list-video"></video>
            <h3 class="list-title">${title}</h3>
            </div>`
    )
}).join('')

const descriptionElements = document.querySelectorAll('.description');

document.getElementById('videosList').innerHTML = videosList.map((item) => {
    var { video, title } = item;
    return (
        `<div class="list active">
        <video src=${video} class="list-video"></video>
        <h3 class="list-title">${title}</h3>
        </div>`
    )
}).join('')

let videoList = document.querySelectorAll('.video-list-contenidoV .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
    vid.onclick = () => {
        videoList.forEach(remove => { remove.classList.remove('active') });
        vid.classList.add('active');
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;
        let description = videosList.find(video => video.title === title).description;
        document.querySelector('.main-video-contenidoV .main-video').src = src;
        document.querySelector('.main-video-contenidoV .main-video').play();
        document.querySelector('.main-video-contenidoV .main-vid-title').innerHTML = title;
        document.querySelector('.main-video-contenidoV .description').innerHTML = description;
    };
});

