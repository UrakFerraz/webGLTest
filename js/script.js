

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});


{
				var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

			var threeContainer;
			var camera, scene, renderer;

			var particles, particle, count = 0;

			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();

			function init() {

				threeContainer = document.createElement( 'div' );
				document.querySelector('.headerBg').appendChild( threeContainer );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();

				particles = new Array();

				var PI2 = Math.PI * 2;
				var material = new THREE.ParticleCanvasMaterial( {

					color: 0x5500FF,
					program: function ( context ) {

						context.beginPath();
						context.arc( 0, 0, 1, 0, PI2, true );
						context.fill();

					}

				} );

				var i = 0;

				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

						particle = particles[ i ++ ] = new THREE.Particle( material );
						particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
						particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
						scene.add( particle );

					}

				}

				renderer = new THREE.CanvasRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				threeContainer.appendChild( renderer.domElement );


				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					// event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					// event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;
				camera.lookAt( scene.position );

				var i = 0;

				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

						particle = particles[ i++ ];
						particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
						particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;

					}

				}

				renderer.render( scene, camera );

				count += 0.1;

			}
}


let icon2PhoneWrapper = document.querySelector('.icon2PhoneWrapper');




let icon2PhoneWrapperOptions = {
  iterations: 1,
  iterationStart: 0,
  delay: 0,
  endDelay: 0,
  direction: 'alternate',
  duration: 700,
  fill: 'forwards',
  easing: 'ease-out',
};

var icon2PhoneWrapperKeyframes = [
  {transform: 'rotate(0)'},
  {transform: 'rotate(180deg)'},
  {transform: 'rotate(0)'}
]












function drawIconLine(el) {
	let elem = document.querySelector(el);
	elem.style.animationName = 'dash';
	elem.style.animationDuration = '1.5s';
	elem.style.animationTimingFunction = 'linear';
	elem.style.animationFillMode = 'forwards';
};

function eraseIconLine(el) {
	let elem = document.querySelector(el);
	elem.style.animationName = null;
	elem.style.animationDuration = null;
	elem.style.animationTimingFunction = null;
	elem.style.animationFillMode = null;
	elem.style.animationName = 'noDash';
	elem.style.animationDelay = '100ms';
};








function drawIconCheckmark(el) {
	let elem = document.querySelector(el);
	elem.style.animationName = 'dashCheckmark';
	elem.style.animationDuration = '1s';
	elem.style.animationTimingFunction = 'linear';
	elem.style.animationFillMode = 'forwards';
};


function eraseIconCheckmark(el) {
	let elem = document.querySelector(el);
	elem.style.animationName = null;
	elem.style.animationDuration = null;
	elem.style.animationTimingFunction = null;
	elem.style.animationFillMode = null;
	elem.style.animationName = 'noDashCheckmark';
};











function sectionIconsFix(el) {
  document.querySelector(el).style.position = 'fixed';
  if(el !== '.section3IconsWrapper') {
	  document.querySelector(el).style.top = '200px';
  }
}

function sectionIconsRelative(el) {
  document.querySelector(el).style.position = 'absolute';
}












function sectionIconsReturnScroll() {
	let iconAreas = document.querySelectorAll('.iconsOverflow');
	iconAreas = Array.from(iconAreas);
	console.log(iconAreas);
	iconAreas.forEach((el, index) => {
		el.style.gridRow = 3;
	});
	let item1 = document.querySelector('.section1IconsWrapper');
	let item2 = document.querySelector('.section2IconsWrapper');
	let item3 = document.querySelector('.section3IconsWrapper');
	item1.style.position = 'absolute';
	item2.style.position = 'absolute';
	item3.style.position = 'absolute';
	item1.style.top = 0;
	item2.style.top = 0;
	item3.style.top = 0;

}
















let item1 = document.querySelector('.section1IconsWrapper');
let item2 = document.querySelector('.section2IconsWrapper');
let item3 = document.querySelector('.section3IconsWrapper');

function section2IconsReturnFixed() {
	item2.style.position = 'relative';
	let iconAreas = document.querySelector('.iconsOverflow2');
	iconAreas.style.gridRow = 2;
	item2.style.top = 0;
}

function section1IconsReturnFixed() {
	item1.style.position = 'relative';
	let iconAreas = document.querySelector('.iconsOverflow1');
	iconAreas.style.gridRow = 1;
	item1.style.top = 0;

}

function section3IconsReturnFixed() {
	item1.style.position = 'fixed';
	item2.style.position = 'fixed';
	item1.style.top = '200px';
	item2.style.top = '200px';
	item3.style.position = 'relative';
}

















function selfieFrame1Blink(color) {
	let els = document.querySelectorAll('.smartphoneFrame *');
	els = Array.from(els);
	console.log(els);
	els.forEach((el) => {
		el.style.fill = color;
	});
}




function selfieFrame2Blink(color, op) {
	let els = document.querySelectorAll('.icon2SelfieFrame');
	els = Array.from(els);
	els.forEach((el) => {
		el.style.fill = color;
	});
	document.querySelector('.icon2ClickedEffect').style.opacity = op;
}


















function smile(dasharr, dashoff) {
	let mouth = document.querySelector('.icon3Smile');
	mouth.style.strokeDasharray = dasharr,
	mouth.style.strokeDashoffset = dashoff
};















function fixarIcones() {


	gsap.to(".section1IconsWrapper", {
		scrollTrigger: {
			trigger: ".section1IconsWrapper",
			start: "top 200px",
			end: "100% bottom",

			scrub: true,
			onEnter: () => sectionIconsFix(".section1IconsWrapper"),
			onLeaveBack: () => section1IconsReturnFixed(),
		}
	});


	gsap.to(".section2IconsWrapper", {
		scrollTrigger: {
			trigger: ".section2IconsWrapper",
			start: "top 200px",
			end: "100% bottom",

			scrub: true,
			onEnter: () => sectionIconsFix(".section2IconsWrapper"),
			onLeaveBack: () => section2IconsReturnFixed(),
		}
	});


	gsap.to(".section3IconsWrapper", {
		scrollTrigger: {
			trigger: ".section3IconsWrapper",
			start: "top 200px",
			end: "100% bottom",

			scrub: true,
			onEnter: () => sectionIconsFix(".section3IconsWrapper"),
			onLeaveBack: () => sectionIconsRelative(".section3IconsWrapper"),
			onLeave: () => sectionIconsReturnScroll(),
			onLeaveBack: () => section3IconsReturnFixed(),
		}
	});


};























let xlScreen = window.matchMedia("(min-width: 1400px)");

let xScreen = window.matchMedia("(min-width: 1199px) and (max-width: 1399px)");

let mScreen = window.matchMedia("(min-width: 700px) and (max-width: 1198px)");

let pScreen = window.matchMedia("(min-width: 320px) and (max-width: 699px)");

let wideLaptop = window.matchMedia("(min-height: 600px) and (max-height: 950px)");







function jsResponsivo(xScreen) {
  if (xlScreen.matches) {
  	console.log('tela full hd');


	fixarIcones();


	let heroTitleAnime = gsap.timeline({
		scrollTrigger: {
			trigger: ".heroTitle",
			start: "-170px 20%",
			end: "250% 20%",
			scrub: true,
		},
	})
	.to(".heroTitle", {
		y: 270,
		duration: 2
	})
	.to(".heroTitle", {
		opacity: 0,
		duration: 1
	});



let icon3User = gsap.timeline({
	scrollTrigger: {
		trigger: ".icon3Wrapper",
		onEnter: () => {drawIconLine(".iconCircle3"); scaleNum('.num3')},
		onLeaveBack: () => {eraseIconLine(".iconCircle3"); selfieFrame2Blink('var(--sec1)', 0); smile(6, -3); eraseIconCheckmark('.icon3Checkmark')},
		onLeave: () => {smile(20, 3); drawIconCheckmark('.icon3Checkmark')},
		start: "top 80%",
		end: "bottom 60%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
});

icon3User.to(".icon3BodyWrapper", {
	y: 0,
	duration: 4
})
.to(".icon3CheckmarkSvg", {
	scale: 1,
	duration: 2
});



	let scrollArea1Title = gsap.timeline({
		scrollTrigger: {
			trigger: ".scrollArea1Title",
			start: "100px 60%",
			end: "400% top",
			scrub: true,
			toggleActions: "restart pause reverse pause"
		}
	}).to(".scrollArea1Title", {
		duration:2,
		opacity: 1,
		ease: "power4.inOut"
	})
	.to(".scrollArea1Title", {
		y: '330px',
		duration: 4,
	});


	let scrollArea2Title = gsap.timeline({
		scrollTrigger: {
			trigger: ".scrollArea2Title",
			start: "100px 60%",
			end: "430% top",
			scrub: true,
			toggleActions: "restart pause reverse pause"
		}
	}).to(".scrollArea2Title", {
		duration:2,
		opacity: 1,
		ease: "power4.inOut"
	})
	.to(".scrollArea2Title", {
		y: '300px',
		duration: 4,
	});



	let scrollArea3Title = gsap.timeline({
		scrollTrigger: {
			trigger: ".scrollArea3Title",
			start: "100px 60%",
			end: "230% top",
			scrub: true,
			toggleActions: "restart pause reverse pause"
		}
	}).to(".scrollArea3Title", {
		duration:2,
		opacity: 1,
		ease: "power4.inOut"
	})
	.to(".scrollArea3Title", {
		y: '200px',
		duration: 4,
	});


if (wideLaptop.matches) {

console.log('wide')
		gsap.to(".scrollArea1", {
		scrollTrigger: {
			trigger: ".scrollArea1",
			start: "top top",
			end: "-10% -100%",
			scrub: true,
			pin: ".sectionParallax1ImgWrapper",
			antecipatePin: 1,
		}
	});


	gsap.to(".scrollArea2", {
		scrollTrigger: {
			trigger: ".scrollArea2",
			start: "top top",
			end: "-56% -100%",
			scrub: true,
			pin: ".sectionParallax2ImgWrapper",
			antecipatePin: 1,
		}
	});


	gsap.to(".scrollArea3", {
		scrollTrigger: {
			trigger: ".scrollArea3",
			start: "top top",
			end: "0% -100%",
			scrub: true,
			pin: ".sectionParallax3ImgWrapper",
			antecipatePin: 1,
		}
	});

} else {
	gsap.to(".scrollArea1", {
		scrollTrigger: {
			trigger: ".scrollArea1",
			start: "top top",
			end: "-50% -100%",
			scrub: true,
			pin: ".sectionParallax1ImgWrapper",
			antecipatePin: 1,
		}
	});


	gsap.to(".scrollArea2", {
		scrollTrigger: {
			trigger: ".scrollArea2",
			start: "top top",
			end: "-56% -100%",
			scrub: true,
			pin: ".sectionParallax2ImgWrapper",
			antecipatePin: 1,
		}
	});


	gsap.to(".scrollArea3", {
		scrollTrigger: {
			trigger: ".scrollArea3",
			start: "top top",
			end: "-40% -100%",
			scrub: true,
			pin: ".sectionParallax3ImgWrapper",
			antecipatePin: 1,
		}
	});	
};



  } else if (xScreen.matches) {




let icon3User = gsap.timeline({
	scrollTrigger: {
		trigger: ".icon3Wrapper",
		onEnter: () => {drawIconLine(".iconCircle3"); scaleNum('.num3')},
		onLeaveBack: () => {eraseIconLine(".iconCircle3"); selfieFrame2Blink('var(--sec1)', 0); smile(6, -3); eraseIconCheckmark('.icon3Checkmark')},
		onLeave: () => {smile(20, 3); drawIconCheckmark('.icon3Checkmark')},
		start: "top 80%",
		end: "bottom 60%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
});

icon3User.to(".icon3BodyWrapper", {
	y: 0,
	duration: 4
})
.to(".icon3CheckmarkSvg", {
	scale: 1,
	duration: 2
});



  	console.log('tela hd');

	let scrollArea1Title = gsap.timeline({
		scrollTrigger: {
			trigger: ".scrollArea1Title",
			start: "100px 60%",
			end: "400% top",
			scrub: true,
			toggleActions: "restart pause reverse pause"
		}
	}).to(".scrollArea1Title", {
		duration:2,
		opacity: 1,
		ease: "power4.inOut"
	})
	.to(".scrollArea1Title", {
		y: '430px',
		duration: 4,
	});


	let scrollArea2Title = gsap.timeline({
		scrollTrigger: {
			trigger: ".scrollArea2Title",
			start: "100px 60%",
			end: "430% top",
			scrub: true,
			toggleActions: "restart pause reverse pause"
		}
	}).to(".scrollArea2Title", {
		duration:2,
		opacity: 1,
		ease: "power4.inOut"
	})
	.to(".scrollArea2Title", {
		y: '300px',
		duration: 4,
	});



	let scrollArea3Title = gsap.timeline({
		scrollTrigger: {
			trigger: ".scrollArea3Title",
			start: "100px 60%",
			end: "430% top",
			scrub: true,
			toggleActions: "restart pause reverse pause"
		}
	}).to(".scrollArea3Title", {
		duration:2,
		opacity: 1,
		ease: "power4.inOut"
	})
	.to(".scrollArea3Title", {
		y: '250px',
		duration: 4,
	});



if (wideLaptop.matches) {

console.log('wide')
		gsap.to(".scrollArea1", {
		scrollTrigger: {
			trigger: ".scrollArea1",
			start: "top top",
			end: "5% -100%",
			scrub: true,
			pin: ".sectionParallax1ImgWrapper",
			antecipatePin: 1,
		}
	});


	gsap.to(".scrollArea2", {
		scrollTrigger: {
			trigger: ".scrollArea2",
			start: "top top",
			end: "-56% -100%",
			scrub: true,
			pin: ".sectionParallax2ImgWrapper",
			antecipatePin: 1,
		}
	});


	gsap.to(".scrollArea3", {
		scrollTrigger: {
			trigger: ".scrollArea3",
			start: "top top",
			end: "20% -100%",
			scrub: true,
			pin: ".sectionParallax3ImgWrapper",
			antecipatePin: 1,
		}
	});

} else {
	gsap.to(".scrollArea1", {
		scrollTrigger: {
			trigger: ".scrollArea1",
			start: "top top",
			end: "-30% -100%",
			scrub: true,
			pin: ".sectionParallax1ImgWrapper",
			antecipatePin: 1,
		}
	});


	gsap.to(".scrollArea2", {
		scrollTrigger: {
			trigger: ".scrollArea2",
			start: "top top",
			end: "-40% -100%",
			scrub: true,
			pin: ".sectionParallax2ImgWrapper",
			antecipatePin: 1,
		}
	});


	gsap.to(".scrollArea3", {
		scrollTrigger: {
			trigger: ".scrollArea3",
			start: "top top",
			end: "-20% -100%",
			scrub: true,
			pin: ".sectionParallax3ImgWrapper",
			antecipatePin: 1,
		}
	});
};

  	fixarIcones();


  } else if (mScreen.matches) {
  	console.log('tela tablet');



let icon3User = gsap.timeline({
	scrollTrigger: {
		trigger: ".icon3Wrapper",
		onEnter: () => {drawIconLine(".iconCircle3"); scaleNum('.num3')},
		onLeaveBack: () => {eraseIconLine(".iconCircle3"); selfieFrame2Blink('var(--sec1)', 0); eraseIconCheckmark('.icon3Checkmark')},
		onLeave: () => drawIconCheckmark('.icon3Checkmark'),
		start: "top 80%",
		end: "bottom 60%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
});

icon3User.to(".icon3BodyWrapper", {
	y: 0,
	duration: 4
})
.to(".icon3CheckmarkSvg", {
	scale: 1,
	duration: 2
});



  	let scrollArea1Title = gsap.timeline({
	scrollTrigger: {
		trigger: ".scrollArea1Title",
		start: "100px 60%",
		end: "200% top",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
}).to(".scrollArea1Title", {
	duration:2,
	opacity: 1,
	ease: "power4.inOut"
})
.to(".scrollArea1Title", {
	y: '130px',
	duration: 4,
});


	let scrollArea2Title = gsap.timeline({
		scrollTrigger: {
			trigger: ".scrollArea2Title",
			start: "100px 60%",
			end: "300% top",
			scrub: true,
			toggleActions: "restart pause reverse pause"
		}
	}).to(".scrollArea2Title", {
		duration:2,
		opacity: 1,
		ease: "power4.inOut"
	})
	.to(".scrollArea2Title", {
		y: '150px',
		duration: 4,
	});

	let scrollArea3Title = gsap.timeline({
		scrollTrigger: {
			trigger: ".scrollArea3Title",
			start: "100px 60%",
			end: "300% top",
			scrub: true,
			toggleActions: "restart pause reverse pause"
		}
	}).to(".scrollArea3Title", {
		duration:2,
		opacity: 1,
		ease: "power4.inOut"
	})
	.to(".scrollArea3Title", {
		y: '150px',
		duration: 4,
	});


	gsap.to(".scrollArea1", {
		scrollTrigger: {
			trigger: ".scrollArea1",
			start: "top top",
			end: "13% -100%",
			scrub: true,
			pin: ".sectionParallax1ImgWrapper",
			antecipatePin: 1,
		}
	});


	gsap.to(".scrollArea2", {
		scrollTrigger: {
			trigger: ".scrollArea2",
			start: "top top",
			end: "-13% -100%",
			scrub: true,
			pin: ".sectionParallax2ImgWrapper",
			antecipatePin: 1,
		}
	});

	gsap.to(".scrollArea3", {
		scrollTrigger: {
			trigger: ".scrollArea3",
			start: "top top",
			end: "20% -100%",
			scrub: true,
			pin: ".sectionParallax3ImgWrapper",
			antecipatePin: 1,
		}
	});




  } else if (pScreen.matches) {

let icon3User = gsap.timeline({
	scrollTrigger: {
		trigger: ".icon3Wrapper",
		onEnter: () => {drawIconLine(".iconCircle3"); scaleNum('.num3')},
		onLeaveBack: () => {eraseIconLine(".iconCircle3"); selfieFrame2Blink('var(--sec1)', 0); eraseIconCheckmark('.icon3Checkmark')},
		onLeave: () => drawIconCheckmark('.icon3Checkmark'),
		start: "top 80%",
		end: "bottom 60%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
});

icon3User.to(".icon3BodyWrapper", {
	y: 0,
	duration: 4
})
.to(".icon3CheckmarkSvg", {
	scale: 1,
	duration: 2
});

  	let scrollArea1Title = gsap.timeline({
	scrollTrigger: {
		trigger: ".scrollArea1Title",
		start: "100px 60%",
		end: "200% top",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
}).to(".scrollArea1Title", {
	duration:2,
	opacity: 1,
	ease: "power4.inOut"
})
.to(".scrollArea1Title", {
	y: '130px',
	duration: 4,
});


  	let scrollArea2Title = gsap.timeline({
	scrollTrigger: {
		trigger: ".scrollArea2Title",
		start: "100px 60%",
		end: "200% top",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
}).to(".scrollArea2Title", {
	duration:2,
	opacity: 1,
	ease: "power4.inOut"
})
.to(".scrollArea2Title", {
	y: '130px',
	duration: 4,
});



  	let scrollArea3Title = gsap.timeline({
	scrollTrigger: {
		trigger: ".scrollArea3Title",
		start: "100px 60%",
		end: "200% top",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
}).to(".scrollArea3Title", {
	duration:2,
	opacity: 1,
	ease: "power4.inOut"
})
.to(".scrollArea3Title", {
	y: '130px',
	duration: 4,
});






}










};

jsResponsivo(xScreen);
xScreen.addListener(jsResponsivo);
















































function scaleNum(el) {

	let scaleNumOptions = {
	  iterations: 1,
	  iterationStart: 0,
	  delay: 0,
	  endDelay: 0,
	  direction: 'alternate',
	  duration: 700,
	  fill: 'forwards',
	  easing: 'ease-out',
	};

	let scaleNumKeyframes = [
	  {transform: 'rotate(0)', opacity: 1},
	  {transform: 'scale(3)', opacity: 0}
	];

	document.querySelector(el).animate(scaleNumKeyframes, scaleNumOptions);

}















gsap.to('.iconTexts1', {
	scrollTrigger: {
	trigger: '.icon1Wrapper',
	start: "top 100%",
	end: "bottom 0%",
	toggleActions: "restart pause reverse pause"
	},
	y: 0,
	opacity: 1,
	duration: 1
});



gsap.to('.iconTexts2', {
	scrollTrigger: {
	trigger: '.icon2Wrapper',
	start: "top 100%",
	end: "bottom 0%",
	toggleActions: "restart pause reverse pause"
	},
	y: 0,
	opacity: 1,
	duration: 1
});


gsap.to('.iconTexts3', {
	scrollTrigger: {
	trigger: '.icon3Wrapper',
	start: "top 100%",
	end: "bottom 0%",
	toggleActions: "restart pause reverse pause"
	},
	y: 0,
	opacity: 1,
	duration: 1
});

















let icon1PhoneTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: ".icon1Wrapper",
		onEnter: () => {drawIconLine(".iconCircle1"); scaleNum('.num1')},
		onLeaveBack: () => {eraseIconLine(".iconCircle1"); selfieFrame1Blink('var(--sec1)')},
		onLeave: () => selfieFrame1Blink('var(--sec2)'),
		start: "top 80%",
		end: "bottom 60%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
});



icon1PhoneTimeline.to(".icon1PhoneWrapper", {
	x: 0,
	y: 0,
	rotate: 0,
	duration: 4
})
.to(".icon1PhoneWrapper", {
	x: 30,
	y: 0,
	rotate: 7,
	duration: 3
})
.to(".icon1PhoneWrapper", {
	x: 0,
	y: 0,
	rotate: 0,
	duration: 3
})
.to(".icon1DocG", {
	x: '-30px',
	y: 0,
	rotate: 0,
	duration: 3
})
.to(".icon1DocG", {
	x: 0,
	y: 0,
	rotate: 0,
	duration: 2
})
.to(".icon1DocG", {
	x: 0,
	y: 0,
	rotate: 0,
	duration: 2
});
















let icon1PhoneCard = gsap.timeline({
	scrollTrigger: {
		trigger: ".icon1Wrapper",
		start: "top 55%",
		end: "bottom 60%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
});



icon1PhoneCard.to(".icon1DocP", {
	x: '-15px',
	y: 0,
	rotate: 0,
	duration: 1
})
.to(".icon1DocP", {
	x: 0,
	y: 0,
	rotate: 0,
	duration: 2
})




















let icon2PhoneTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: ".icon2Wrapper",
		onEnter: () => {drawIconLine(".iconCircle2"); scaleNum('.num2')},
		onLeave: () => selfieFrame2Blink('var(--sec2)', 1),
		onLeaveBack: () => {eraseIconLine(".iconCircle2"); selfieFrame2Blink('var(--sec1)', 0)},
		start: "top 80%",
		end: "bottom 60%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
});



icon2PhoneTimeline.to(".icon2PhoneWrapper", {
	x: 0,
	y: 0,
	rotate: '-10deg',
	duration: 4
})
.to(".icon2PhoneWrapper", {
	x: 0,
	y: 0,
	rotate: 0,
	duration: 2
})
.to('.icon2Smile', {
	x: 0,
	y: 0,
	rotate: 0,
	duration: 1,
	opacity: 1
});




























let icon3User = gsap.timeline({
	scrollTrigger: {
		trigger: ".icon3Wrapper",
		onEnter: () => {drawIconLine(".iconCircle3"); scaleNum('.num3')},
		onLeaveBack: () => {eraseIconLine(".iconCircle3"); selfieFrame2Blink('var(--sec1)', 0); smile(6, -3); eraseIconCheckmark('.icon3Checkmark')},
		onLeave: () => {smile(20, 3); drawIconCheckmark('.icon3Checkmark')},
		start: "top 80%",
		end: "bottom 60%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
});

icon3User.to(".icon3BodyWrapper", {
	y: 0,
	duration: 4
})
.to(".icon3CheckmarkSvg", {
	scale: 1,
	duration: 2
});




































gsap.to(".section1Text", {
	scrollTrigger: {
		trigger: ".section1Text",
		start: "top 90%",
		end: "100% 10%",
		scrub: true,
	},
	y: '-240px'
});



gsap.to(".section1TextEffect", {
	scrollTrigger: {
		trigger: ".section1TextEffect",
		start: "top 60%",
		end: "100% 30%",
		scrub: true,
	},
	x: '100%'
});



























gsap.to(".logoFramePart1", {
	scrollTrigger: {
		trigger: ".logoFramePart1",
		start: "-60px 6%",
		end: "-30px 0%",
		scrub: true,
	},
	y: '-17px',
	x: '-10px',
	opacity: 0,
});


gsap.to(".logoFramePart2", {
	scrollTrigger: {
		trigger: ".logoFramePart2",
		start: "-60px 10%",
		end: "-30px 0%",
		scrub: true,
	},
	y: '-17px',
	x: '10px',
	opacity: 0,
});

gsap.to(".logoFramePart3", {
	scrollTrigger: {
		trigger: ".logoFramePart3",
		start: "-60px 6%",
		end: "-30px 0%",
		scrub: true,
	},
	y: '17px',
	x: '-10px',
	opacity: 0,
});

gsap.to(".logoFramePart4", {
	scrollTrigger: {
		trigger: ".logoFramePart4",
		start: "-60px 10%",
		end: "-30px 0%",
		scrub: true,
	},
	y: '17px',
	x: '10px',
	opacity: 0,
});

gsap.to(".logoI", {
	scrollTrigger: {
		trigger: ".logoI",
		start: "-50px 10%",
		end: "-30px 0%",
		scrub: true,
	},
	x: '-16px',
	opacity: 0,
});


gsap.to(".logoD", {
	scrollTrigger: {
		trigger: ".logoD",
		start: "-40px 10%",
		end: "-20px 0%",
		scrub: true,
	},
	x: '-10px',
	opacity: 0,
});



gsap.to(".logoW", {
	scrollTrigger: {
		trigger: ".logoW",
		start: "-40px 10%",
		end: "-20px 0%",
		scrub: true,
	},
	x: '16px',
	opacity: 0,
});


gsap.to(".logoA", {
	scrollTrigger: {
		trigger: ".logoA",
		start: "-40px 10%",
		end: "-20px 0%",
		scrub: true,
	},
	x: '14px',
	opacity: 0,
});

gsap.to(".logoL1", {
	scrollTrigger: {
		trigger: ".logoL1",
		start: "-40px 10%",
		end: "-20px 0%",
		scrub: true,
	},
	x: '12px',
	opacity: 0,
});

gsap.to(".logoL2", {
	scrollTrigger: {
		trigger: ".logoL2",
		start: "-40px 10%",
		end: "-20px 0%",
		scrub: true,
	},
	x: '10px',
	opacity: 0,
});




























gsap.to(".logoFooterFramePart1", {
	scrollTrigger: {
		trigger: ".logoFooterFramePart1",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	y: 0,
	x: 0,
	opacity: 1,
});


gsap.to(".logoFooterFramePart2", {
	scrollTrigger: {
		trigger: ".logoFooterFramePart2",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	y: 0,
	x: 0,
	opacity: 1,
});

gsap.to(".logoFooterFramePart3", {
	scrollTrigger: {
		trigger: ".logoFooterFramePart3",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	y: 0,
	x: 0,
	opacity: 1,
});

gsap.to(".logoFooterFramePart4", {
	scrollTrigger: {
		trigger: ".logoFooterFramePart4",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	y: 0,
	x: 0,
	opacity: 1,
});

gsap.to(".logoFooterI", {
	scrollTrigger: {
		trigger: ".logoFooterI",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	x: 0,
	opacity: 1,
});


gsap.to(".logoFooterD", {
	scrollTrigger: {
		trigger: ".logoFooterD",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	x: 0,
	opacity: 1,
});



gsap.to(".logoFooterW", {
	scrollTrigger: {
		trigger: ".logoFooterW",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	x: 0,
	opacity: 1,
});


gsap.to(".logoFooterA", {
	scrollTrigger: {
		trigger: ".logoFooterA",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	x: 0,
	opacity: 1,
});

gsap.to(".logoFooterL1", {
	scrollTrigger: {
		trigger: ".logoFooterL1",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	x: 0,
	opacity: 1,
});

gsap.to(".logoFooterL2", {
	scrollTrigger: {
		trigger: ".logoFooterL2",
		start: "center 90%",
		end: "0 70%",
		scrub: true,
	},
	x: 0,
	opacity: 1,
});























let heroSubtitleAnime = gsap.timeline({
	scrollTrigger: {
		trigger: ".heroSubtitle",
		start: "-40px 54%",
		end: "30px 54%",
		scrub: true,
	},
})
.to(".heroSubtitle", {
	x: 0,
	y: '40px',
	opacity: 0,
	duration: 4
});








gsap.to(".arrowDown", {
	scrollTrigger: {
		trigger: ".arrowDown",
		start: "-80% 80%",
		end: "80px 70%",
		scrub: true,
	},
	y: '300px',
	opacity: 0,
});























gsap.to(".parallaxSectionSubtitles1", {
	scrollTrigger: {
		trigger: ".parallaxSectionSubtitles1",
		start: "-80% 50%",
		end: "80px 50%",
		scrub: true,
	},
	x: 0,
	opacity: 1,
	ease: "power1.inOut",
});




gsap.to(".parallaxSectionSubtitles2", {
	scrollTrigger: {
		trigger: ".parallaxSectionSubtitles2",
		start: "-80% 50%",
		end: "80px 50%",
		scrub: true,
	},
	x: 0,
	opacity: 1,
	ease: "power1.inOut",
});



gsap.to(".parallaxSectionSubtitles3", {
	scrollTrigger: {
		trigger: ".parallaxSectionSubtitles3",
		start: "-80% 50%",
		end: "80px 50%",
		scrub: true,
	},
	x: 0,
	opacity: 1,
	ease: "power1.inOut",
});





















let sectionParallax1Img = gsap.timeline({
	scrollTrigger: {
		trigger: ".sectionParallax1ImgWrapper",
		start: "top 55%",
		end: "bottom 20%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
}).to(".sectionParallax1ImgWrapper", {
	x: 0,
	duration: 1,
	opacity: 1,
	ease: "power4.inOut"
})
.to(".sectionParallax1ImgWrapper", {
	x: 0,
	duration: 2,
	ease: "power4.inOut"
});





let sectionParallax2Img = gsap.timeline({
	scrollTrigger: {
		trigger: ".sectionParallax2ImgWrapper",
		start: "top 55%",
		end: "bottom 20%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
}).to(".sectionParallax2ImgWrapper", {
	x: 0,
	duration: 1,
	opacity: 1,
	ease: "power4.inOut"
})
.to(".sectionParallax2ImgWrapper", {
	x: 0,
	duration: 2,
	ease: "power4.inOut"
});



let sectionParallax3Img = gsap.timeline({
	scrollTrigger: {
		trigger: ".sectionParallax3ImgWrapper",
		start: "top 55%",
		end: "bottom 20%",
		scrub: true,
		toggleActions: "restart pause reverse pause"
	}
}).to(".sectionParallax3ImgWrapper", {
	x: 0,
	duration: 1,
	opacity: 1,
	ease: "power4.inOut"
})
.to(".sectionParallax3ImgWrapper", {
	x: 0,
	duration: 2,
	ease: "power4.inOut"
});



let blackTagAnime = gsap.timeline({
	scrollTrigger: {
		trigger: ".blackTag",
		start: "40px 45%",
		end: "200px 45%",
		scrub: true,
	},
})
.to(".blackTag", {
	x: 0,
	opacity: 1,
	duration: 4,
	ease: "power4.inOut"
})
.to(".blackTagText", {
	opacity: 1,
	duration: 4,
	ease: "power4.inOut"
});













gsap.to(".parallaxClaimUnit1", {
	scrollTrigger: {
		trigger: ".parallaxClaimsWrapper1",
		start: "top 70%",
		end: "99% 70%",
		scrub: true,
	},
	opacity: 1,
	x: 0,
	ease: "power1.inOut",
	duration: 1,
	stagger: 0.2
});



gsap.to(".parallaxClaimUnit2", {
	scrollTrigger: {
		trigger: ".parallaxClaimsWrapper2",
		start: "top 70%",
		end: "99% 70%",
		scrub: true,
	},
	opacity: 1,
	x: 0,
	ease: "power1.inOut",
	duration: 1,
	stagger: 0.2
});




gsap.to(".parallaxClaimUnit3", {
	scrollTrigger: {
		trigger: ".parallaxClaimsWrapper3",
		start: "top 70%",
		end: "99% 70%",
		scrub: true,
	},
	opacity: 1,
	x: 0,
	ease: "power1.inOut",
	duration: 1,
	stagger: 0.2
});

























gsap.to(".footerCtaWrapper", {
	scrollTrigger: {
		trigger: ".footerCtaWrapper",
		start: "top bottom",
		end: "100px bottom",
		scrub: true,
		ease: "power4.inOut"
	},
	y: 0,
	opacity: 1,
});




gsap.to(".tituloCta", {
	scrollTrigger: {
		trigger: ".tituloCta",
		start: "-40px bottom",
		end: "40px bottom",
		scrub: true,
		ease: "power4.inOut"
	},
	x: 0,
	opacity: 1,
});




gsap.to(".textCta", {
	scrollTrigger: {
		trigger: ".textCta",
		start: "-100px bottom",
		end: "-50px bottom",
		scrub: true,
		ease: "power4.inOut"
	},
	x: 0,
	opacity: 1,
});





gsap.to(".footerCtaBtn", {
	scrollTrigger: {
		trigger: ".footerCtaBtn",
		start: "-300px bottom",
		end: "-190px bottom",
		scrub: true,
		ease: "power4.inOut",
	},
	y: 0,
	opacity: 1,
});