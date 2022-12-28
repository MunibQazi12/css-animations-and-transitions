# CSS Animations and Transitions
This repository is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness. No dependencies.

## Core Features
Highly optimized for touch devices.
Mouse drag supports for desktops.
Full screen support.
Accessibility support.
Next-generation browser support.
Better performance on mobile devices.
And many more.

#### Blinking Moving Stars Animation
This animation describes that blinking moving stars animation with the infinite movement into the web page.

###### Usage
The usage of this animation is too simple.

######## CSS
body {
    background-color: black;
    height: 100vh;
    overflow: hidden;
}

.firefly {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 0.4vw;
		height: 0.4vw;
		margin: -0.2vw 0 0 9.8vw;
		animation: ease 200s alternate infinite;
		pointer-events: none;
}

.firefly::before, .firefly::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transform-origin: -10vw;
}

.firefly::before {
		background: black;
		opacity: 0.4;
		animation: drift ease alternate infinite;
}

.firefly::after {
		background: white;
		opacity: 0;
		box-shadow: 0 0 0vw 0vw yellow;
		animation: drift ease alternate infinite, flash ease infinite;
}
  
.firefly:nth-child(1) {
		animation-name: move1;
}

.firefly:nth-child(1)::before {
		animation-duration: 9s;
}

.firefly:nth-child(1)::after {
		animation-duration: 9s, 6198ms;
		animation-delay: 0ms, 2158ms;
}
  
@keyframes move1 {
		0% {
	  	transform: translateX(-19vw) translateY(17vh) scale(0.41);
		}

		5% {
	  	transform: translateX(-14vw) translateY(-13vh) scale(0.94);
		}
	
		10% {
			transform: translateX(45vw) translateY(-25vh) scale(0.77);
		}

		15% {
	  	transform: translateX(46vw) translateY(-33vh) scale(0.93);
		}

		20% {
	  	transform: translateX(47vw) translateY(5vh) scale(0.62);
		}

		25% {
	  	transform: translateX(-32vw) translateY(4vh) scale(0.29);
		}

		30% {
	  	transform: translateX(-47vw) translateY(2vh) scale(0.69);
		}

		35% {
	  	transform: translateX(24vw) translateY(-3vh) scale(0.69);
		}

		40% {
	  	transform: translateX(-36vw) translateY(-43vh) scale(0.94);
		}

		45% {
	  	transform: translateX(46vw) translateY(-29vh) scale(0.51);
		}

		50% {
	  	transform: translateX(2vw) translateY(13vh) scale(0.28);
		}

		55% {
	  	transform: translateX(-22vw) translateY(-16vh) scale(0.65);
		}

		60% {
	  	transform: translateX(45vw) translateY(-42vh) scale(0.26);
		}

		65% {
	  	transform: translateX(24vw) translateY(-4vh) scale(0.79);
		}

		70% {
	  	transform: translateX(-22vw) translateY(-19vh) scale(0.56);
		}

		75% {
	  	transform: translateX(-34vw) translateY(46vh) scale(0.42);
		}

		80% {
	  	transform: translateX(14vw) translateY(-30vh) scale(0.31);
		}

		85% {
	 		transform: translateX(39vw) translateY(42vh) scale(0.92);
		}

		90% {
	  	transform: translateX(16vw) translateY(-5vh) scale(0.46);
		}

		95% {
	  	transform: translateX(8vw) translateY(31vh) scale(0.86);
		}

		100% {
	  	transform: translateX(23vw) translateY(20vh) scale(0.92);
		}
}

.firefly:nth-child(2) {
		animation-name: move2;
}


.firefly:nth-child(2)::before {
		animation-duration: 12s;
}

.firefly:nth-child(2)::after {
		animation-duration: 12s, 6429ms;
		animation-delay: 0ms, 3658ms;
}
  
@keyframes move2 {
	0% {
	  	transform: translateX(35vw) translateY(-16vh) scale(0.43);
	}

	4.7619047619% {
	  	transform: translateX(-39vw) translateY(-7vh) scale(0.98);
	}

	9.5238095238% {
	  	transform: translateX(44vw) translateY(-31vh) scale(0.95);
	}

	14.2857142857% {
	  	transform: translateX(11vw) translateY(-23vh) scale(0.59);
	}

	19.0476190476% {
	  	transform: translateX(28vw) translateY(-39vh) scale(0.8);
	}

	23.8095238095% {
	  	transform: translateX(22vw) translateY(47vh) scale(0.38);
	}

	28.5714285714% {
	  	transform: translateX(-39vw) translateY(45vh) scale(0.37);
	}

	33.3333333333% {
	  	transform: translateX(29vw) translateY(-30vh) scale(0.73);
	}

	38.0952380952% {
	  	transform: translateX(-1vw) translateY(-45vh) scale(0.97);
	}

	42.8571428571% {
	  	transform: translateX(-49vw) translateY(12vh) scale(0.34);
	}

	47.619047619% {
	  	transform: translateX(-49vw) translateY(27vh) scale(0.35);
	}

	52.380952381% {
	  	transform: translateX(-27vw) translateY(-48vh) scale(0.53);
	}

	57.1428571429% {
	  	transform: translateX(14vw) translateY(19vh) scale(0.93);
	}

	61.9047619048% {
	  	transform: translateX(27vw) translateY(8vh) scale(0.4);
	}

	66.6666666667% {
	  	transform: translateX(-21vw) translateY(-33vh) scale(0.54);
	}

	71.4285714286% {
	  	transform: translateX(3vw) translateY(-2vh) scale(1);
	}

	76.1904761905% {
	  	transform: translateX(-13vw) translateY(-9vh) scale(0.58);
	}

	80.9523809524% {
	  	transform: translateX(32vw) translateY(-10vh) scale(0.55);
	}

	85.7142857143% {
	  	transform: translateX(43vw) translateY(9vh) scale(0.33);
	}

	90.4761904762% {
	  	transform: translateX(1vw) translateY(7vh) scale(0.49);
	}

	95.2380952381% {
	  	transform: translateX(28vw) translateY(-17vh) scale(0.27);
	}

	100% {
	  	transform: translateX(15vw) translateY(-37vh) scale(0.72);
	}
}

.firefly:nth-child(3) {
	animation-name: move3;
}

.firefly:nth-child(3)::before {
	animation-duration: 18s;
}

.firefly:nth-child(3)::after {
	animation-duration: 18s, 5994ms;
	animation-delay: 0ms, 6857ms;
}
  
@keyframes move3 {
	0% {
	  	transform: translateX(-39vw) translateY(13vh) scale(0.29);
	}

	5.8823529412% {
	 	transform: translateX(-20vw) translateY(-29vh) scale(0.51);
	}

	11.7647058824% {
	  	transform: translateX(42vw) translateY(10vh) scale(0.54);
	}

	17.6470588235% {
	  	transform: translateX(-34vw) translateY(28vh) scale(0.57);
	}

	23.5294117647% {
	  	transform: translateX(9vw) translateY(48vh) scale(0.94);
	}

	29.4117647059% {
	  	transform: translateX(29vw) translateY(44vh) scale(0.9);
	}

	35.2941176471% {
	  	transform: translateX(42vw) translateY(-17vh) scale(0.83);
	}

	41.1764705882% {
	  	transform: translateX(50vw) translateY(39vh) scale(0.58);
	}

	47.0588235294% {
	  	transform: translateX(-6vw) translateY(10vh) scale(0.82);
	}

	52.9411764706% {
	  	transform: translateX(39vw) translateY(31vh) scale(0.83);
	}

	58.8235294118% {
	  	transform: translateX(-23vw) translateY(38vh) scale(0.42);
	}

	64.7058823529% {
	  	transform: translateX(-27vw) translateY(-18vh) scale(0.93);
	}

	70.5882352941% {
	  	transform: translateX(11vw) translateY(2vh) scale(0.29);
	}

	76.4705882353% {
	  	transform: translateX(27vw) translateY(-17vh) scale(0.94);
	}
	
	82.3529411765% {
	  	transform: translateX(-18vw) translateY(-25vh) scale(0.37);
	}

	88.2352941176% {
	  	transform: translateX(-35vw) translateY(46vh) scale(0.77);
	}

	94.1176470588% {
	  	transform: translateX(-37vw) translateY(-30vh) scale(0.48);
	}

	100% {
	  	transform: translateX(38vw) translateY(44vh) scale(0.54);
	}
}

.firefly:nth-child(4) {
	animation-name: move4;
}
.firefly:nth-child(4)::before {
	animation-duration: 11s;
}

.firefly:nth-child(4)::after {
	animation-duration: 11s, 10487ms;
	animation-delay: 0ms, 5043ms;
}
  
@keyframes move4 {
	0% {
	  	transform: translateX(-1vw) translateY(20vh) scale(0.67);
	}

	4.1666666667% {
	  	transform: translateX(22vw) translateY(-28vh) scale(0.46);
	}

	8.3333333333% {
	  	transform: translateX(7vw) translateY(46vh) scale(0.46);
	}

	12.5% {
	  	transform: translateX(33vw) translateY(25vh) scale(0.38);
	}

	16.6666666667% {
	  	transform: translateX(8vw) translateY(-34vh) scale(0.42);
	}

	20.8333333333% {
	  	transform: translateX(2vw) translateY(46vh) scale(0.57);
	}

	25% {
	  	transform: translateX(21vw) translateY(-12vh) scale(0.83);
	}

	29.1666666667% {
	  	transform: translateX(23vw) translateY(48vh) scale(0.78);
	}

	33.3333333333% {
	  	transform: translateX(-1vw) translateY(-45vh) scale(0.97);
	}

	37.5% {
	  	transform: translateX(-3vw) translateY(11vh) scale(0.46);
	}

	41.6666666667% {
	  	transform: translateX(-10vw) translateY(-27vh) scale(0.94);
	}

	45.8333333333% {
	  	transform: translateX(12vw) translateY(41vh) scale(0.53);
	}

	50% {
	  	transform: translateX(1vw) translateY(-27vh) scale(0.49);
	}

	54.1666666667% {
	  	transform: translateX(-48vw) translateY(39vh) scale(0.5);
	}

	58.3333333333% {
	  	transform: translateX(-23vw) translateY(-2vh) scale(0.74);
	}

	62.5% {
	  	transform: translateX(-4vw) translateY(24vh) scale(0.91);
	}

	66.6666666667% {
	  	transform: translateX(33vw) translateY(10vh) scale(0.88);
	}

	70.8333333333% {
	  	transform: translateX(-29vw) translateY(37vh) scale(0.69);
	}

	75% {
	  	transform: translateX(-46vw) translateY(-22vh) scale(0.72);
	}

	79.1666666667% {
	  	transform: translateX(41vw) translateY(38vh) scale(0.67);
	}

	83.3333333333% {
	  	transform: translateX(11vw) translateY(24vh) scale(0.69);
	}

	87.5% {
	  	transform: translateX(23vw) translateY(-17vh) scale(0.47);
	}

	91.6666666667% {
	  	transform: translateX(20vw) translateY(-40vh) scale(1);
	}

	95.8333333333% {
	  	transform: translateX(40vw) translateY(2vh) scale(0.89);
	}

	100% {
	  	transform: translateX(-35vw) translateY(19vh) scale(0.65);
	}
}

.firefly:nth-child(5) {
	animation-name: move5;
}

.firefly:nth-child(5)::before {
	animation-duration: 16s;
}
 
.firefly:nth-child(5)::after {
	animation-duration: 16s, 7322ms;
	animation-delay: 0ms, 3400ms;
}
  
@keyframes move5 {
	0% {
	  	transform: translateX(-1vw) translateY(8vh) scale(0.67);
	}

	4.7619047619% {
	  	transform: translateX(-28vw) translateY(29vh) scale(0.34);
	}

	9.5238095238% {
	  	transform: translateX(12vw) translateY(-30vh) scale(0.91);
	}

	14.2857142857% {
	  	transform: translateX(-23vw) translateY(-47vh) scale(0.51);
	}

	19.0476190476% {
	  	transform: translateX(-16vw) translateY(21vh) scale(0.74);
	}

	23.8095238095% {
	  	transform: translateX(-27vw) translateY(16vh) scale(0.96);
	}

	28.5714285714% {
	  	transform: translateX(-8vw) translateY(-5vh) scale(0.42);
	}

	33.3333333333% {
	  	transform: translateX(-2vw) translateY(-34vh) scale(0.77);
	}

	38.0952380952% {
	  	transform: translateX(-47vw) translateY(44vh) scale(0.37);
	}

	42.8571428571% {
	  	transform: translateX(32vw) translateY(-24vh) scale(0.89);
	}

	47.619047619% {
	  	transform: translateX(-20vw) translateY(46vh) scale(0.37);
	}

	52.380952381% {
	  	transform: translateX(27vw) translateY(4vh) scale(0.34);
	}

	57.1428571429% {
	  	transform: translateX(-46vw) translateY(-33vh) scale(0.99);
	}

	61.9047619048% {
	  	transform: translateX(27vw) translateY(-49vh) scale(0.58);
	}

	66.6666666667% {
	  	transform: translateX(-28vw) translateY(-7vh) scale(0.78);
	}

	71.4285714286% {
	  	transform: translateX(-42vw) translateY(-2vh) scale(1);
	}

	76.1904761905% {
	  	transform: translateX(-11vw) translateY(45vh) scale(0.63);
	}

	80.9523809524% {
	  	transform: translateX(40vw) translateY(-4vh) scale(0.65);
	}

	85.7142857143% {
	  	transform: translateX(15vw) translateY(20vh) scale(0.97);
	}

	90.4761904762% {
	  	transform: translateX(18vw) translateY(-46vh) scale(0.75);
	}

	95.2380952381% {
	  	transform: translateX(-37vw) translateY(-19vh) scale(0.62);
	}

	100% {
	  	transform: translateX(-43vw) translateY(42vh) scale(0.92);
	}
}

.firefly:nth-child(6) {
	animation-name: move6;
}
 
.firefly:nth-child(6)::before {
	animation-duration: 16s;
}

.firefly:nth-child(6)::after {
	animation-duration: 16s, 7305ms;
	animation-delay: 0ms, 5427ms;
}

  
@keyframes move6 {
	0% {
	  	transform: translateX(-5vw) translateY(28vh) scale(0.86);
	}

	4.1666666667% {
	  	transform: translateX(-45vw) translateY(20vh) scale(0.55);
	}

	8.3333333333% {
	  	transform: translateX(36vw) translateY(-43vh) scale(0.87);
	}

	12.5% {
	  	transform: translateX(-2vw) translateY(0vh) scale(0.61);
	}

	16.6666666667% {
	  	transform: translateX(12vw) translateY(-12vh) scale(0.82);
	}

	20.8333333333% {
	  	transform: translateX(-38vw) translateY(-43vh) scale(0.74);
	}

	25% {
	  	transform: translateX(40vw) translateY(-4vh) scale(0.6);
	}

	29.1666666667% {
	  	transform: translateX(-28vw) translateY(-42vh) scale(0.98);
	}

	33.3333333333% {
	  	transform: translateX(12vw) translateY(9vh) scale(0.5);
	}

	37.5% {
	  	transform: translateX(-10vw) translateY(43vh) scale(0.9);
	}

	41.6666666667% {
	  	transform: translateX(-42vw) translateY(-5vh) scale(0.39);
	}

	45.8333333333% {
	  	transform: translateX(-24vw) translateY(25vh) scale(0.84);
	}

	50% {
	  	transform: translateX(10vw) translateY(16vh) scale(0.26);
	}

	54.1666666667% {
	  	transform: translateX(-32vw) translateY(-13vh) scale(0.91);
	}

	58.3333333333% {
	  	transform: translateX(-3vw) translateY(23vh) scale(0.67);
	}

	62.5% {
	  	transform: translateX(16vw) translateY(-23vh) scale(0.32);
	}

	66.6666666667% {
	 	transform: translateX(-17vw) translateY(8vh) scale(0.57);
	}

	70.8333333333% {
	  	transform: translateX(19vw) translateY(14vh) scale(0.5);
	}

	75% {
	  	transform: translateX(29vw) translateY(-6vh) scale(0.29);
	}

	79.1666666667% {
	  	transform: translateX(-19vw) translateY(22vh) scale(0.45);
	}

	83.3333333333% {
	  	transform: translateX(42vw) translateY(18vh) scale(0.67);
	}

	87.5% {
	  	transform: translateX(-38vw) translateY(27vh) scale(0.71);
	}

	91.6666666667% {
	  	transform: translateX(3vw) translateY(-28vh) scale(0.54);
	}

	95.8333333333% {
	  	transform: translateX(-27vw) translateY(-16vh) scale(0.94);
	}

	100% {
	  	transform: translateX(-42vw) translateY(-21vh) scale(0.85);
	}
}

.firefly:nth-child(7) {
	animation-name: move7;
}

.firefly:nth-child(7)::before {
	animation-duration: 11s;
}

.firefly:nth-child(7)::after {
	animation-duration: 11s, 9802ms;
	animation-delay: 0ms, 5040ms;
}
  
@keyframes move7 {
	0% {
	  	transform: translateX(-47vw) translateY(43vh) scale(0.26);
	}

	5.5555555556% {
	  	transform: translateX(-37vw) translateY(15vh) scale(0.49);
	}

	11.1111111111% {
	  	transform: translateX(-3vw) translateY(0vh) scale(0.85);
	}

	16.6666666667% {
	  	transform: translateX(1vw) translateY(38vh) scale(0.92);
	}

	22.2222222222% {
	  	transform: translateX(0vw) translateY(-23vh) scale(0.3);
	}

	27.7777777778% {
	  	transform: translateX(27vw) translateY(-21vh) scale(0.94);
	}

	33.3333333333% {
	  	transform: translateX(-28vw) translateY(-35vh) scale(0.78);
	}

	38.8888888889% {
	  	transform: translateX(-7vw) translateY(39vh) scale(0.33);
	}

	44.4444444444% {
	  	transform: translateX(-15vw) translateY(36vh) scale(0.29);
	}

	50% {
	  	transform: translateX(-13vw) translateY(36vh) scale(0.72);
	}

	55.5555555556% {
	  	transform: translateX(35vw) translateY(22vh) scale(0.87);
	}

	61.1111111111% {
	  	transform: translateX(9vw) translateY(-34vh) scale(0.96);
	}

	66.6666666667% {
	  	transform: translateX(-40vw) translateY(-10vh) scale(0.29);
	}

	72.2222222222% {
	  	transform: translateX(-2vw) translateY(-7vh) scale(0.57);
	}

	77.7777777778% {
	  	transform: translateX(1vw) translateY(14vh) scale(0.53);
	}

	83.3333333333% {
	  	transform: translateX(-26vw) translateY(-6vh) scale(0.51);
	}

	88.8888888889% {
	  	transform: translateX(4vw) translateY(-34vh) scale(0.56);
	}

	94.4444444444% {
	  	transform: translateX(-38vw) translateY(-30vh) scale(0.28);
	}

	100% {
	  	transform: translateX(33vw) translateY(38vh) scale(0.49);
	}
}

  .firefly:nth-child(8) {
	animation-name: move8;
  }
  .firefly:nth-child(8)::before {
	animation-duration: 17s;
  }
  .firefly:nth-child(8)::after {
	animation-duration: 17s, 8687ms;
	animation-delay: 0ms, 3848ms;
  }
  
  @keyframes move8 {
	0% {
	  transform: translateX(36vw) translateY(37vh) scale(0.91);
	}
	4.5454545455% {
	  transform: translateX(5vw) translateY(-15vh) scale(0.88);
	}
	9.0909090909% {
	  transform: translateX(-37vw) translateY(5vh) scale(0.97);
	}
	13.6363636364% {
	  transform: translateX(14vw) translateY(19vh) scale(0.98);
	}
	18.1818181818% {
	  transform: translateX(47vw) translateY(6vh) scale(0.6);
	}
	22.7272727273% {
	  transform: translateX(-45vw) translateY(46vh) scale(0.75);
	}
	27.2727272727% {
	  transform: translateX(-5vw) translateY(-9vh) scale(0.36);
	}
	31.8181818182% {
	  transform: translateX(43vw) translateY(28vh) scale(0.6);
	}
	36.3636363636% {
	  transform: translateX(-26vw) translateY(27vh) scale(0.96);
	}
	40.9090909091% {
	  transform: translateX(47vw) translateY(6vh) scale(0.81);
	}
	45.4545454545% {
	  transform: translateX(35vw) translateY(29vh) scale(0.85);
	}
	50% {
	  transform: translateX(-43vw) translateY(8vh) scale(0.3);
	}
	54.5454545455% {
	  transform: translateX(-26vw) translateY(27vh) scale(0.91);
	}
	59.0909090909% {
	  transform: translateX(44vw) translateY(-11vh) scale(0.35);
	}
	63.6363636364% {
	  transform: translateX(22vw) translateY(17vh) scale(0.94);
	}
	68.1818181818% {
	  transform: translateX(34vw) translateY(-22vh) scale(0.99);
	}
	72.7272727273% {
	  transform: translateX(-43vw) translateY(-34vh) scale(0.45);
	}
	77.2727272727% {
	  transform: translateX(39vw) translateY(41vh) scale(0.59);
	}
	81.8181818182% {
	  transform: translateX(9vw) translateY(-3vh) scale(0.64);
	}
	86.3636363636% {
	  transform: translateX(24vw) translateY(0vh) scale(0.34);
	}
	90.9090909091% {
	  transform: translateX(24vw) translateY(8vh) scale(0.88);
	}
	95.4545454545% {
	  transform: translateX(-22vw) translateY(-9vh) scale(0.98);
	}
	100% {
	  transform: translateX(9vw) translateY(33vh) scale(0.69);
	}
  }
  .firefly:nth-child(9) {
	animation-name: move9;
  }
  .firefly:nth-child(9)::before {
	animation-duration: 13s;
  }
  .firefly:nth-child(9)::after {
	animation-duration: 13s, 6378ms;
	animation-delay: 0ms, 1418ms;
  }
  
  @keyframes move9 {
	0% {
	  transform: translateX(-3vw) translateY(-27vh) scale(0.47);
	}
	5% {
	  transform: translateX(-32vw) translateY(-9vh) scale(0.52);
	}
	10% {
	  transform: translateX(42vw) translateY(-3vh) scale(0.56);
	}
	15% {
	  transform: translateX(-21vw) translateY(-1vh) scale(0.64);
	}
	20% {
	  transform: translateX(-13vw) translateY(10vh) scale(0.48);
	}
	25% {
	  transform: translateX(3vw) translateY(26vh) scale(0.45);
	}
	30% {
	  transform: translateX(-9vw) translateY(9vh) scale(0.88);
	}
	35% {
	  transform: translateX(38vw) translateY(39vh) scale(0.31);
	}
	40% {
	  transform: translateX(8vw) translateY(-42vh) scale(0.56);
	}
	45% {
	  transform: translateX(-41vw) translateY(36vh) scale(0.67);
	}
	50% {
	  transform: translateX(28vw) translateY(37vh) scale(0.76);
	}
	55% {
	  transform: translateX(-15vw) translateY(5vh) scale(0.77);
	}
	60% {
	  transform: translateX(-24vw) translateY(8vh) scale(0.27);
	}
	65% {
	  transform: translateX(-38vw) translateY(22vh) scale(0.76);
	}
	70% {
	  transform: translateX(-17vw) translateY(-40vh) scale(0.52);
	}
	75% {
	  transform: translateX(3vw) translateY(19vh) scale(0.28);
	}
	80% {
	  transform: translateX(4vw) translateY(-47vh) scale(0.79);
	}
	85% {
	  transform: translateX(43vw) translateY(-43vh) scale(0.54);
	}
	90% {
	  transform: translateX(11vw) translateY(-22vh) scale(0.97);
	}
	95% {
	  transform: translateX(-7vw) translateY(-3vh) scale(0.49);
	}
	100% {
	  transform: translateX(43vw) translateY(7vh) scale(0.39);
	}
  }
  .firefly:nth-child(10) {
	animation-name: move10;
  }
  .firefly:nth-child(10)::before {
	animation-duration: 17s;
  }
  .firefly:nth-child(10)::after {
	animation-duration: 17s, 8854ms;
	animation-delay: 0ms, 6738ms;
  }
  
  @keyframes move10 {
	0% {
	  transform: translateX(-24vw) translateY(-11vh) scale(0.75);
	}
	4.1666666667% {
	  transform: translateX(-28vw) translateY(26vh) scale(0.46);
	}
	8.3333333333% {
	  transform: translateX(-35vw) translateY(-14vh) scale(0.44);
	}
	12.5% {
	  transform: translateX(-34vw) translateY(-19vh) scale(0.42);
	}
	16.6666666667% {
	  transform: translateX(35vw) translateY(4vh) scale(0.79);
	}
	20.8333333333% {
	  transform: translateX(6vw) translateY(35vh) scale(0.95);
	}
	25% {
	  transform: translateX(-30vw) translateY(-41vh) scale(0.46);
	}
	29.1666666667% {
	  transform: translateX(5vw) translateY(2vh) scale(0.99);
	}
	33.3333333333% {
	  transform: translateX(-26vw) translateY(33vh) scale(0.75);
	}
	37.5% {
	  transform: translateX(-16vw) translateY(30vh) scale(0.56);
	}
	41.6666666667% {
	  transform: translateX(4vw) translateY(48vh) scale(0.85);
	}
	45.8333333333% {
	  transform: translateX(-45vw) translateY(-33vh) scale(0.37);
	}
	50% {
	  transform: translateX(7vw) translateY(-15vh) scale(0.51);
	}
	54.1666666667% {
	  transform: translateX(-41vw) translateY(-38vh) scale(0.51);
	}
	58.3333333333% {
	  transform: translateX(48vw) translateY(-9vh) scale(0.93);
	}
	62.5% {
	  transform: translateX(0vw) translateY(-38vh) scale(0.64);
	}
	66.6666666667% {
	  transform: translateX(-36vw) translateY(-15vh) scale(0.49);
	}
	70.8333333333% {
	  transform: translateX(-8vw) translateY(11vh) scale(0.62);
	}
	75% {
	  transform: translateX(-21vw) translateY(39vh) scale(0.9);
	}
	79.1666666667% {
	  transform: translateX(-21vw) translateY(17vh) scale(0.28);
	}
	83.3333333333% {
	  transform: translateX(-26vw) translateY(-30vh) scale(0.53);
	}
	87.5% {
	  transform: translateX(18vw) translateY(-38vh) scale(0.83);
	}
	91.6666666667% {
	  transform: translateX(-23vw) translateY(-33vh) scale(0.48);
	}
	95.8333333333% {
	  transform: translateX(10vw) translateY(10vh) scale(0.34);
	}
	100% {
	  transform: translateX(-31vw) translateY(-37vh) scale(0.57);
	}
  }
  .firefly:nth-child(11) {
	animation-name: move11;
  }
  .firefly:nth-child(11)::before {
	animation-duration: 13s;
  }
  .firefly:nth-child(11)::after {
	animation-duration: 13s, 10210ms;
	animation-delay: 0ms, 7088ms;
  }
  
  @keyframes move11 {
	0% {
	  transform: translateX(9vw) translateY(-30vh) scale(0.58);
	}
	4.5454545455% {
	  transform: translateX(-36vw) translateY(-44vh) scale(0.58);
	}
	9.0909090909% {
	  transform: translateX(-42vw) translateY(41vh) scale(0.94);
	}
	13.6363636364% {
	  transform: translateX(45vw) translateY(-43vh) scale(0.57);
	}
	18.1818181818% {
	  transform: translateX(26vw) translateY(-10vh) scale(0.5);
	}
	22.7272727273% {
	  transform: translateX(-9vw) translateY(-5vh) scale(0.37);
	}
	27.2727272727% {
	  transform: translateX(-33vw) translateY(-22vh) scale(0.32);
	}
	31.8181818182% {
	  transform: translateX(-12vw) translateY(8vh) scale(0.93);
	}
	36.3636363636% {
	  transform: translateX(25vw) translateY(-23vh) scale(0.32);
	}
	40.9090909091% {
	  transform: translateX(-32vw) translateY(-25vh) scale(0.39);
	}
	45.4545454545% {
	  transform: translateX(16vw) translateY(-5vh) scale(0.76);
	}
	50% {
	  transform: translateX(-48vw) translateY(45vh) scale(0.55);
	}
	54.5454545455% {
	  transform: translateX(-7vw) translateY(-27vh) scale(0.32);
	}
	59.0909090909% {
	  transform: translateX(18vw) translateY(-16vh) scale(0.97);
	}
	63.6363636364% {
	  transform: translateX(-7vw) translateY(-2vh) scale(0.67);
	}
	68.1818181818% {
	  transform: translateX(1vw) translateY(42vh) scale(0.26);
	}
	72.7272727273% {
	  transform: translateX(10vw) translateY(-27vh) scale(0.43);
	}
	77.2727272727% {
	  transform: translateX(2vw) translateY(17vh) scale(0.68);
	}
	81.8181818182% {
	  transform: translateX(-3vw) translateY(30vh) scale(0.28);
	}
	86.3636363636% {
	  transform: translateX(-19vw) translateY(37vh) scale(0.27);
	}
	90.9090909091% {
	  transform: translateX(-25vw) translateY(-29vh) scale(0.98);
	}
	95.4545454545% {
	  transform: translateX(3vw) translateY(-6vh) scale(0.47);
	}
	100% {
	  transform: translateX(-1vw) translateY(-4vh) scale(0.78);
	}
  }
  .firefly:nth-child(12) {
	animation-name: move12;
  }
  .firefly:nth-child(12)::before {
	animation-duration: 14s;
  }
  .firefly:nth-child(12)::after {
	animation-duration: 14s, 10001ms;
	animation-delay: 0ms, 5612ms;
  }
  
  @keyframes move12 {
	0% {
	  transform: translateX(-25vw) translateY(-8vh) scale(0.69);
	}
	4.347826087% {
	  transform: translateX(-48vw) translateY(42vh) scale(0.35);
	}
	8.6956521739% {
	  transform: translateX(-18vw) translateY(-7vh) scale(0.75);
	}
	13.0434782609% {
	  transform: translateX(6vw) translateY(-8vh) scale(0.54);
	}
	17.3913043478% {
	  transform: translateX(10vw) translateY(18vh) scale(0.36);
	}
	21.7391304348% {
	  transform: translateX(48vw) translateY(33vh) scale(0.86);
	}
	26.0869565217% {
	  transform: translateX(-18vw) translateY(-34vh) scale(0.86);
	}
	30.4347826087% {
	  transform: translateX(-23vw) translateY(7vh) scale(0.93);
	}
	34.7826086957% {
	  transform: translateX(21vw) translateY(-17vh) scale(0.85);
	}
	39.1304347826% {
	  transform: translateX(-15vw) translateY(-30vh) scale(0.45);
	}
	43.4782608696% {
	  transform: translateX(39vw) translateY(-20vh) scale(0.3);
	}
	47.8260869565% {
	  transform: translateX(6vw) translateY(-43vh) scale(0.71);
	}
	52.1739130435% {
	  transform: translateX(-10vw) translateY(-4vh) scale(0.63);
	}
	56.5217391304% {
	  transform: translateX(-42vw) translateY(2vh) scale(0.41);
	}
	60.8695652174% {
	  transform: translateX(47vw) translateY(-26vh) scale(0.35);
	}
	65.2173913043% {
	  transform: translateX(-11vw) translateY(-24vh) scale(0.86);
	}
	69.5652173913% {
	  transform: translateX(-43vw) translateY(-38vh) scale(0.4);
	}
	73.9130434783% {
	  transform: translateX(8vw) translateY(-45vh) scale(0.86);
	}
	78.2608695652% {
	  transform: translateX(-43vw) translateY(31vh) scale(0.3);
	}
	82.6086956522% {
	  transform: translateX(-25vw) translateY(50vh) scale(0.83);
	}
	86.9565217391% {
	  transform: translateX(39vw) translateY(-47vh) scale(0.47);
	}
	91.3043478261% {
	  transform: translateX(-24vw) translateY(17vh) scale(0.73);
	}
	95.652173913% {
	  transform: translateX(41vw) translateY(-40vh) scale(0.54);
	}
	100% {
	  transform: translateX(-17vw) translateY(30vh) scale(0.89);
	}
  }
  .firefly:nth-child(13) {
	animation-name: move13;
  }
  .firefly:nth-child(13)::before {
	animation-duration: 10s;
  }
  .firefly:nth-child(13)::after {
	animation-duration: 10s, 5635ms;
	animation-delay: 0ms, 1909ms;
  }
  
  @keyframes move13 {
	0% {
	  transform: translateX(-39vw) translateY(32vh) scale(1);
	}
	5% {
	  transform: translateX(49vw) translateY(20vh) scale(0.52);
	}
	10% {
	  transform: translateX(45vw) translateY(-7vh) scale(0.7);
	}
	15% {
	  transform: translateX(-29vw) translateY(38vh) scale(0.39);
	}
	20% {
	  transform: translateX(-7vw) translateY(-38vh) scale(0.89);
	}
	25% {
	  transform: translateX(15vw) translateY(0vh) scale(0.79);
	}
	30% {
	  transform: translateX(6vw) translateY(-18vh) scale(0.4);
	}
	35% {
	  transform: translateX(-25vw) translateY(26vh) scale(0.89);
	}
	40% {
	  transform: translateX(49vw) translateY(2vh) scale(0.93);
	}
	45% {
	  transform: translateX(6vw) translateY(31vh) scale(0.36);
	}
	50% {
	  transform: translateX(14vw) translateY(29vh) scale(0.29);
	}
	55% {
	  transform: translateX(1vw) translateY(-34vh) scale(0.28);
	}
	60% {
	  transform: translateX(-31vw) translateY(-23vh) scale(0.59);
	}
	65% {
	  transform: translateX(35vw) translateY(1vh) scale(0.4);
	}
	70% {
	  transform: translateX(-30vw) translateY(20vh) scale(0.86);
	}
	75% {
	  transform: translateX(-18vw) translateY(-33vh) scale(0.71);
	}
	80% {
	  transform: translateX(6vw) translateY(-24vh) scale(0.75);
	}
	85% {
	  transform: translateX(-11vw) translateY(-41vh) scale(0.56);
	}
	90% {
	  transform: translateX(39vw) translateY(-19vh) scale(0.57);
	}
	95% {
	  transform: translateX(9vw) translateY(6vh) scale(0.28);
	}
	100% {
	  transform: translateX(40vw) translateY(1vh) scale(1);
	}
  }
  .firefly:nth-child(14) {
	animation-name: move14;
  }
  .firefly:nth-child(14)::before {
	animation-duration: 12s;
  }
  .firefly:nth-child(14)::after {
	animation-duration: 12s, 10416ms;
	animation-delay: 0ms, 4797ms;
  }
  
  @keyframes move14 {
	0% {
	  transform: translateX(-36vw) translateY(-45vh) scale(0.6);
	}
	5% {
	  transform: translateX(38vw) translateY(44vh) scale(0.51);
	}
	10% {
	  transform: translateX(28vw) translateY(8vh) scale(0.96);
	}
	15% {
	  transform: translateX(37vw) translateY(41vh) scale(0.56);
	}
	20% {
	  transform: translateX(7vw) translateY(-48vh) scale(0.31);
	}
	25% {
	  transform: translateX(26vw) translateY(-20vh) scale(0.92);
	}
	30% {
	  transform: translateX(20vw) translateY(10vh) scale(0.57);
	}
	35% {
	  transform: translateX(-18vw) translateY(25vh) scale(0.95);
	}
	40% {
	  transform: translateX(-43vw) translateY(-21vh) scale(0.56);
	}
	45% {
	  transform: translateX(31vw) translateY(10vh) scale(0.81);
	}
	50% {
	  transform: translateX(32vw) translateY(-1vh) scale(0.39);
	}
	55% {
	  transform: translateX(45vw) translateY(-20vh) scale(0.46);
	}
	60% {
	  transform: translateX(21vw) translateY(-37vh) scale(0.42);
	}
	65% {
	  transform: translateX(-39vw) translateY(-42vh) scale(0.29);
	}
	70% {
	  transform: translateX(32vw) translateY(-10vh) scale(0.92);
	}
	75% {
	  transform: translateX(-23vw) translateY(44vh) scale(0.62);
	}
	80% {
	  transform: translateX(-21vw) translateY(-5vh) scale(0.96);
	}
	85% {
	  transform: translateX(-45vw) translateY(13vh) scale(0.51);
	}
	90% {
	  transform: translateX(14vw) translateY(-41vh) scale(0.75);
	}
	95% {
	  transform: translateX(9vw) translateY(-18vh) scale(0.41);
	}
	100% {
	  transform: translateX(14vw) translateY(-47vh) scale(0.67);
	}
  }
  .firefly:nth-child(15) {
	animation-name: move15;
  }
  .firefly:nth-child(15)::before {
	animation-duration: 10s;
  }
  .firefly:nth-child(15)::after {
	animation-duration: 10s, 9467ms;
	animation-delay: 0ms, 6185ms;
  }
  
  @keyframes move15 {
	0% {
	  transform: translateX(-20vw) translateY(24vh) scale(0.83);
	}
	5.8823529412% {
	  transform: translateX(32vw) translateY(-47vh) scale(0.78);
	}
	11.7647058824% {
	  transform: translateX(9vw) translateY(-42vh) scale(0.73);
	}
	17.6470588235% {
	  transform: translateX(-29vw) translateY(-8vh) scale(0.55);
	}
	23.5294117647% {
	  transform: translateX(-31vw) translateY(-1vh) scale(0.59);
	}
	29.4117647059% {
	  transform: translateX(43vw) translateY(-40vh) scale(0.26);
	}
	35.2941176471% {
	  transform: translateX(47vw) translateY(50vh) scale(0.75);
	}
	41.1764705882% {
	  transform: translateX(-14vw) translateY(6vh) scale(0.91);
	}
	47.0588235294% {
	  transform: translateX(-21vw) translateY(-15vh) scale(0.77);
	}
	52.9411764706% {
	  transform: translateX(6vw) translateY(-21vh) scale(0.3);
	}
	58.8235294118% {
	  transform: translateX(-41vw) translateY(43vh) scale(0.26);
	}
	64.7058823529% {
	  transform: translateX(-35vw) translateY(-23vh) scale(0.94);
	}
	70.5882352941% {
	  transform: translateX(9vw) translateY(-47vh) scale(0.85);
	}
	76.4705882353% {
	  transform: translateX(-48vw) translateY(-19vh) scale(0.75);
	}
	82.3529411765% {
	  transform: translateX(5vw) translateY(8vh) scale(0.71);
	}
	88.2352941176% {
	  transform: translateX(36vw) translateY(50vh) scale(0.46);
	}
	94.1176470588% {
	  transform: translateX(-10vw) translateY(40vh) scale(0.8);
	}
	100% {
	  transform: translateX(47vw) translateY(-33vh) scale(0.3);
	}
  }
  .firefly:nth-child(16) {
	animation-name: move16;
  }
  .firefly:nth-child(15)::before {
	animation-duration: 10s;
  }
  .firefly:nth-child(15)::after {
	animation-duration: 10s, 9467ms;
	animation-delay: 0ms, 6185ms;
  }
  
  @keyframes move16 {
	0% {
	  transform: translateX(-30vw) translateY(34vh) scale(0.8);
	}
	5.8823529412% {
	  transform: translateX(42vw) translateY(-57vh) scale(0.7);
	}
	11.7647058824% {
	  transform: translateX(10vw) translateY(-52vh) scale(0.7);
	}
	17.6470588235% {
	  transform: translateX(-39vw) translateY(-8vh) scale(0.5);
	}
	23.5294117647% {
	  transform: translateX(-41vw) translateY(-2vh) scale(0.5);
	}
	29.4117647059% {
	  transform: translateX(53vw) translateY(-50vh) scale(0.2);
	}
	35.2941176471% {
	  transform: translateX(57vw) translateY(60vh) scale(0.7);
	}
	41.1764705882% {
	  transform: translateX(-34vw) translateY(7vh) scale(0.9);
	}
	47.0588235294% {
	  transform: translateX(-41vw) translateY(-16vh) scale(0.7);
	}
	52.9411764706% {
	  transform: translateX(3vw) translateY(-41vh) scale(0.3);
	}
	58.8235294118% {
	  transform: translateX(-51vw) translateY(23vh) scale(0.2);
	}
	64.7058823529% {
	  transform: translateX(-25vw) translateY(-26vh) scale(0.9);
	}
	70.5882352941% {
	  transform: translateX(2vw) translateY(-4vh) scale(0.8);
	}
	76.4705882353% {
	  transform: translateX(-38vw) translateY(-15vh) scale(0.7);
	}
	82.3529411765% {
	  transform: translateX(1vw) translateY(3vh) scale(0.7);
	}
	88.2352941176% {
	  transform: translateX(36vw) translateY(50vh) scale(0.4);
	}
	94.1176470588% {
	  transform: translateX(-10vw) translateY(40vh) scale(0.8);
	}
	100% {
	  transform: translateX(37vw) translateY(-53vh) scale(0.3);
	}
  }
  .firefly:nth-child(17) {
	animation-name: move15;
  }
  .firefly:nth-child(17)::before {
	animation-duration: 10s;
  }
  .firefly:nth-child(17)::after {
	animation-duration: 10s, 9467ms;
	animation-delay: 0ms, 6185ms;
  }
  
  @keyframes move17 {
	0% {
	  transform: translateX(-20vw) translateY(24vh) scale(0.83);
	}
	5.8823529412% {
	  transform: translateX(32vw) translateY(-47vh) scale(0.78);
	}
	11.7647058824% {
	  transform: translateX(9vw) translateY(-42vh) scale(0.73);
	}
	17.6470588235% {
	  transform: translateX(-29vw) translateY(-8vh) scale(0.55);
	}
	23.5294117647% {
	  transform: translateX(-31vw) translateY(-1vh) scale(0.59);
	}
	29.4117647059% {
	  transform: translateX(43vw) translateY(-40vh) scale(0.26);
	}
	35.2941176471% {
	  transform: translateX(47vw) translateY(50vh) scale(0.75);
	}
	41.1764705882% {
	  transform: translateX(-14vw) translateY(6vh) scale(0.91);
	}
	47.0588235294% {
	  transform: translateX(-21vw) translateY(-15vh) scale(0.77);
	}
	52.9411764706% {
	  transform: translateX(6vw) translateY(-21vh) scale(0.3);
	}
	58.8235294118% {
	  transform: translateX(-41vw) translateY(43vh) scale(0.26);
	}
	64.7058823529% {
	  transform: translateX(-35vw) translateY(-23vh) scale(0.94);
	}
	70.5882352941% {
	  transform: translateX(9vw) translateY(-47vh) scale(0.85);
	}
	76.4705882353% {
	  transform: translateX(-48vw) translateY(-19vh) scale(0.75);
	}
	82.3529411765% {
	  transform: translateX(5vw) translateY(8vh) scale(0.71);
	}
	88.2352941176% {
	  transform: translateX(36vw) translateY(50vh) scale(0.46);
	}
	94.1176470588% {
	  transform: translateX(-10vw) translateY(40vh) scale(0.8);
	}
	100% {
	  transform: translateX(47vw) translateY(-33vh) scale(0.3);
	}
  }
  .firefly:nth-child(18) {
	animation-name: move15;
  }
  .firefly:nth-child(18)::before {
	animation-duration: 10s;
  }
  .firefly:nth-child(18)::after {
	animation-duration: 10s, 9467ms;
	animation-delay: 0ms, 6185ms;
  }
  
  @keyframes move18 {
	0% {
	  transform: translateX(-20vw) translateY(24vh) scale(0.83);
	}
	5.8823529412% {
	  transform: translateX(32vw) translateY(-47vh) scale(0.78);
	}
	11.7647058824% {
	  transform: translateX(9vw) translateY(-42vh) scale(0.73);
	}
	17.6470588235% {
	  transform: translateX(-29vw) translateY(-8vh) scale(0.55);
	}
	23.5294117647% {
	  transform: translateX(-31vw) translateY(-1vh) scale(0.59);
	}
	29.4117647059% {
	  transform: translateX(43vw) translateY(-40vh) scale(0.26);
	}
	35.2941176471% {
	  transform: translateX(47vw) translateY(50vh) scale(0.75);
	}
	41.1764705882% {
	  transform: translateX(-14vw) translateY(6vh) scale(0.91);
	}
	47.0588235294% {
	  transform: translateX(-21vw) translateY(-15vh) scale(0.77);
	}
	52.9411764706% {
	  transform: translateX(6vw) translateY(-21vh) scale(0.3);
	}
	58.8235294118% {
	  transform: translateX(-41vw) translateY(43vh) scale(0.26);
	}
	64.7058823529% {
	  transform: translateX(-35vw) translateY(-23vh) scale(0.94);
	}
	70.5882352941% {
	  transform: translateX(9vw) translateY(-47vh) scale(0.85);
	}
	76.4705882353% {
	  transform: translateX(-48vw) translateY(-19vh) scale(0.75);
	}
	82.3529411765% {
	  transform: translateX(5vw) translateY(8vh) scale(0.71);
	}
	88.2352941176% {
	  transform: translateX(36vw) translateY(50vh) scale(0.46);
	}
	94.1176470588% {
	  transform: translateX(-10vw) translateY(40vh) scale(0.8);
	}
	100% {
	  transform: translateX(47vw) translateY(-33vh) scale(0.3);
	}
  }
  .firefly:nth-child(19) {
	animation-name: move15;
  }
  .firefly:nth-child(19)::before {
	animation-duration: 10s;
  }
  .firefly:nth-child(19)::after {
	animation-duration: 10s, 9467ms;
	animation-delay: 0ms, 6185ms;
  }
  
  @keyframes move19 {
	0% {
	  transform: translateX(-20vw) translateY(24vh) scale(0.83);
	}
	5.8823529412% {
	  transform: translateX(32vw) translateY(-47vh) scale(0.78);
	}
	11.7647058824% {
	  transform: translateX(9vw) translateY(-42vh) scale(0.73);
	}
	17.6470588235% {
	  transform: translateX(-29vw) translateY(-8vh) scale(0.55);
	}
	23.5294117647% {
	  transform: translateX(-31vw) translateY(-1vh) scale(0.59);
	}
	29.4117647059% {
	  transform: translateX(43vw) translateY(-40vh) scale(0.26);
	}
	35.2941176471% {
	  transform: translateX(47vw) translateY(50vh) scale(0.75);
	}
	41.1764705882% {
	  transform: translateX(-14vw) translateY(6vh) scale(0.91);
	}
	47.0588235294% {
	  transform: translateX(-21vw) translateY(-15vh) scale(0.77);
	}
	52.9411764706% {
	  transform: translateX(6vw) translateY(-21vh) scale(0.3);
	}
	58.8235294118% {
	  transform: translateX(-41vw) translateY(43vh) scale(0.26);
	}
	64.7058823529% {
	  transform: translateX(-35vw) translateY(-23vh) scale(0.94);
	}
	70.5882352941% {
	  transform: translateX(9vw) translateY(-47vh) scale(0.85);
	}
	76.4705882353% {
	  transform: translateX(-48vw) translateY(-19vh) scale(0.75);
	}
	82.3529411765% {
	  transform: translateX(5vw) translateY(8vh) scale(0.71);
	}
	88.2352941176% {
	  transform: translateX(36vw) translateY(50vh) scale(0.46);
	}
	94.1176470588% {
	  transform: translateX(-10vw) translateY(40vh) scale(0.8);
	}
	100% {
	  transform: translateX(47vw) translateY(-33vh) scale(0.3);
	}
  }
  .firefly:nth-child(20) {
	animation-name: move15;
  }
  .firefly:nth-child(20)::before {
	animation-duration: 10s;
  }
  .firefly:nth-child(20)::after {
	animation-duration: 10s, 9467ms;
	animation-delay: 0ms, 6185ms;
  }
  
  @keyframes move20 {
	0% {
	  transform: translateX(-30vw) translateY(14vh) scale(0.83);
	}
	5.8823529412% {
	  transform: translateX(22vw) translateY(-67vh) scale(0.78);
	}
	11.7647058824% {
	  transform: translateX(1vw) translateY(-2vh) scale(0.73);
	}
	17.6470588235% {
	  transform: translateX(-19vw) translateY(-7vh) scale(0.55);
	}
	23.5294117647% {
	  transform: translateX(-31vw) translateY(-1vh) scale(0.59);
	}
	29.4117647059% {
	  transform: translateX(43vw) translateY(-40vh) scale(0.26);
	}
	35.2941176471% {
	  transform: translateX(47vw) translateY(50vh) scale(0.75);
	}
	41.1764705882% {
	  transform: translateX(-14vw) translateY(6vh) scale(0.91);
	}
	47.0588235294% {
	  transform: translateX(-21vw) translateY(-15vh) scale(0.77);
	}
	52.9411764706% {
	  transform: translateX(6vw) translateY(-21vh) scale(0.3);
	}
	58.8235294118% {
	  transform: translateX(-41vw) translateY(43vh) scale(0.26);
	}
	64.7058823529% {
	  transform: translateX(-35vw) translateY(-23vh) scale(0.94);
	}
	70.5882352941% {
	  transform: translateX(9vw) translateY(-47vh) scale(0.85);
	}
	76.4705882353% {
	  transform: translateX(-48vw) translateY(-19vh) scale(0.75);
	}
	82.3529411765% {
	  transform: translateX(5vw) translateY(8vh) scale(0.71);
	}
	88.2352941176% {
	  transform: translateX(36vw) translateY(50vh) scale(0.46);
	}
	94.1176470588% {
	  transform: translateX(-10vw) translateY(40vh) scale(0.8);
	}
	100% {
	  transform: translateX(47vw) translateY(-33vh) scale(0.3);
	}
  }
  @keyframes drift {
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
  }
  @keyframes flash {
	0%, 30%, 100% {
	  opacity: 0;
	  box-shadow: 0 0 0vw 0vw yellow;
	}
	5% {
	  opacity: 1;
	  box-shadow: 0 0 2vw 0.4vw yellow;
	}
  }
  .pulse:hover, 
  .pulse:focus {
	animation: pulse 1s;
	box-shadow: 0 0 0 1em transparent;
  }
  
  @keyframes pulse {
	0% { box-shadow: 0 0 0 0 #eec400; }
  }
  
