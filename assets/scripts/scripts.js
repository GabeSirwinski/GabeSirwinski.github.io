const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);			
			video.currentTime = parseFloat(video.duration * (rawPercentScrolled-.2)).toPrecision(3);
            let aDiv = document.getElementById('a-div')
            if (rawPercentScrolled > 0.3 && rawPercentScrolled < 0.75) {
                if (!aDiv.classList.contains('animated')) {
                    aDiv.classList.add('animated');
                };
            }
            else {
                if (aDiv.classList.contains('animated')) {
                    aDiv.classList.remove('animated');
                }
            }
            if (rawPercentScrolled < .99 && !video.classList.contains('unstick')) {
                video.classList.add('unstick');
            }
            else if (rawPercentScrolled > .99 && video.classList.contains('unstick')) {
                video.classList.remove('unstick');
            }
            if (rawPercentScrolled > .99 && !aDiv.classList.contains('d-none')) {
                aDiv.classList.add('d-none');
            }
            else if (rawPercentScrolled < .99 && aDiv.classList.contains('d-none')) {
                aDiv.classList.remove('d-none');
            }
            
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}


registerVideo("#bound-one", "#bound-one video");

function isInViewport(el) {
    const rect = el.getBoundingClientRect(); 
    const top = rect.top;
    const bottom = rect.bottom - document.documentElement.clientHeight;
    const height = document.documentElement.clientHeight;
    const moveAfter = ((top * 100) / height) * 3;
    const moveBefore = (((Math.abs(bottom) * 100) / height) * 3);
    document.getElementsByClassName('after')[0].style.transform = "translateY(" + moveAfter + "px)";
}

const box = document.querySelector('.box');

document.addEventListener('scroll', function () {
    const messageText = isInViewport(box) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

}, {
    passive: true
});

function isInViewportA(el) {
    const rect = el.getBoundingClientRect(); 
    const top = rect.top;
    const bottom = rect.bottom - document.documentElement.clientHeight;
    const height = document.documentElement.clientHeight;
    const moveAfter = ((top * 100) / height) * 3;
    const moveBefore = (((Math.abs(bottom) * 100) / height) * 3);
    document.getElementsByClassName('before')[0].style.transform = "translateY(" + moveAfter + "px)";
}

const box1 = document.querySelector('.box1');

document.addEventListener('scroll', function () {
    const messageText = isInViewportA(box1) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

}, {
    passive: true
});

