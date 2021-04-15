const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);			
			video.currentTime = parseFloat(video.duration * rawPercentScrolled).toPrecision(3);
            let aDiv = document.getElementById('a-div')
            if (rawPercentScrolled > 0.1 && rawPercentScrolled < 0.33) {
                if (!aDiv.classList.contains('animated')) {
                    aDiv.classList.add('animated');
                };
            }
            else {
                if (aDiv.classList.contains('animated')) {
                    aDiv.classList.remove('animated');
                }
            }
            let bDiv = document.getElementById('b-div')
            if (rawPercentScrolled > 0.38 && rawPercentScrolled < 0.63) {
                if (!bDiv.classList.contains('animated')) {
                    bDiv.classList.add('animated');
                };
            }
            else {
                if (bDiv.classList.contains('animated')) {
                    bDiv.classList.remove('animated');
                }
            }
            let cDiv = document.getElementById('c-div')
            if (rawPercentScrolled > 0.68 && rawPercentScrolled < 0.91) {
                if (!cDiv.classList.contains('animated')) {
                    cDiv.classList.add('animated');
                };
            }
            else {
                if (cDiv.classList.contains('animated')) {
                    cDiv.classList.remove('animated');
                }
            }
            if (rawPercentScrolled < .99 && !video.classList.contains('unstick')) {
                video.classList.add('unstick');
            }
            else if (rawPercentScrolled > .99 && video.classList.contains('unstick')) {
                video.classList.remove('unstick');
            }
            if (rawPercentScrolled > .99 && !aDiv.classList.contains('d-none') && !bDiv.classList.contains('d-none')) {
                aDiv.classList.add('d-none');
                bDiv.classList.add('d-none');
            }
            else if (rawPercentScrolled < .99 && aDiv.classList.contains('d-none') && bDiv.classList.contains('d-none')) {
                aDiv.classList.remove('d-none');
                bDiv.classList.remove('d-none');
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
    document.getElementsByClassName('before')[0].style.transform = "translateY(" + moveAfter + "px)";
}

const box = document.querySelector('.box');

document.addEventListener('scroll', function () {
    const messageText = isInViewport(box) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

}, {
    passive: true
});

