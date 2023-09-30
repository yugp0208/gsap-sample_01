//scss
import '../scss/style.scss'

//gsap 
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const headline = document.querySelector('.headline');

const tl = gsap.timeline();

tl.fromTo(hero, 1, {height:'0%'},{ height:'80%'})
.fromTo(
    hero,1.2,
    {width:'100%'},
    {width:"80%"}
)
.fromTo(
    slider,
    1.2,
    {y:'-100%'},
    {y:"0%"},
    '-=1.2'
)
.fromTo(
    logo,
    0.5,
    {opacity:0,x:30},
    {opacity:1,x:0},
    "-=0.5"
)
.fromTo(
    menu,
    0.5,
    {opacity:0,x:30},
    {opacity:1,x:0},
    "-=0.5"
)
.fromTo(
    headline,
    0.5,
    {opacity:0,x:0},
    {opacity:1,x:30},
    "-=0.5"
);