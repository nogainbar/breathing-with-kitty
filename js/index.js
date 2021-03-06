const landingButton = document.getElementById('landing-button');
const nameSubmitButton = document.getElementById('name-question-button');
const startBreathingCatButton = document.getElementById('start-breathing-cat-button');
const exitFractal = document.getElementById('exit-fractal');
const exitBreathing = document.getElementById('exit-breathing');
const FeelingBetterBtn = document.getElementById('feel-good-button');
const belly = document.getElementById('belly');
const hands = document.getElementById('hands');
const startAgain = document.getElementById('start-again');

const landingPageView = TweenMax.to('.landing-cat-round', 2.5, {css: {'margin-top': '15%', opacity: 1}, ease: Elastic.easeInOut.config(0.5, 0.2), onComplete: function() {
  TweenMax.to('#landing-button', 0.5, { css: { opacity: 1 } });
  TweenMax.to('#landing-text', 0.5, { css: { opacity: 1 } });
  TweenMax.to('#landing-stars', 0.6, { opacity: 1});
} });

const landingToInfo = function() {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('#landing-stars', 0.2, { opacity: 0, display: 'none'}));
  tl.add( TweenMax.to('#landing-material-icon', 0.2, {css: {display: 'none'}} ));
  tl.add( TweenMax.fromTo('#landing-button', 0.4, {scale: 1, backgroundColor: '#5CA1C2'}, {scale: 30, backgroundColor: '#5CA1C2', ease: Power1.easeIn}) );
  tl.add( TweenMax.fromTo('.alt-intro', 0.5, { css: { display: 'none' } }, { css: { display: 'inline-block' }}));
  tl.add( TweenMax.to('.landing', 0.1, {css: {display: 'none'}}) );
  tl.add( TweenMax.to('.mountain1', 0.5, {y: -170}));
  tl.add( TweenMax.to('.mountain2', 0.5, {y: -300}));
  tl.add( TweenMax.to('.mountain4', 0.5, {y: -350}));
  tl.add( TweenMax.to('.alt-info-box', 0.5, {y: 400 , opacity: 1}));
};

const nameToInfoSwitch = function() {
  console.log('button pressed');
  const tl = new TimelineMax();
  tl.add( TweenMax.to('.alt-info-box', 0.2, {css: { visibility: 'hidden', opacity: 0 }}));
  tl.add( TweenMax.to('.breathing-information', 0.2, {css: {visibility: 'visible', opacity: 1 }}));
  tl.add( TweenMax.to('.name', 0, {text: {value: `Hi ${document.cookie}`, delimiter: ' '}, ease: Linear.easeNone} ));
  tl.add( TweenMax.to('.alt-info-box', 0.2, {css: { visibility: 'hidden', opacity: 0 }}));
  tl.add( TweenMax.to('.breathing-information', 0.2, {css: {visibility: 'visible', opacity: 1 }}));
};

const infoToCatView = function() {
  const tl = new TimelineMax();
  tl.add( TweenMax.to('.mountain4', 0.3, {y: 0}));
  tl.add( TweenMax.to('.mountain2', 0.3, {y: 0}));
  tl.add( TweenMax.to('.mountain1', 0.3, {y: 0}));
  tl.add( TweenMax.to('.breathing-information', 0.5, {css: {visibility: 'hidden', opacity: 0}}));
  tl.add( TweenMax.fromTo('.alt-intro', 0.5, { backgroundColor: '#5CA1C2'}, {backgroundColor: '#A5E2DA'} ));
  tl.add(TweenMax.set('.breathing', 0, {backgroundColor: '#A5E2DA'}));
  tl.add( TweenMax.fromTo('.breathing', 0.5, {css: {display: 'none'}}, {css: {display: 'block' }}));
  tl.add( TweenMax.to('.mountain3', 0.5, {y: -370, ease: Power2.easeOut}));
  tl.add( TweenMax.fromTo('.cat', 0.75, {css: {opacity: 0}}, {css: {opacity: 1}}));
  tl.add( TweenMax.to('.belly-press-text', 0.5, {css: {visibility: 'visible', opacity: 1 }}));
};

const fromBreathingToIntro = function() {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.breathing', 0.2, {css: { display: 'none'}}));
  tl.add(TweenMax.to('.alt-intro', 0.2, {css: { display: 'block'}}));
  tl.add( TweenMax.fromTo('.alt-intro', 0.5, {backgroundColor: '#A5E2DA'}, {backgroundColor: '#5CA1C2'}));
  tl.add( TweenMax.to('.mountain1', 0.5, {y: -170}));
  tl.add( TweenMax.to('.mountain2', 0.5, {y: -300}));
  tl.add( TweenMax.to('.mountain4', 0.5, {y: -300}));
  tl.add(TweenMax.to('.breathing-information', 0.2, {css: { display: 'flex', opacity: 1, visibility: 'visible'}}));
};

const changeToFractalView = function() {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.breathing', 0.1, { css: { display: 'none' } }));
  tl.add(TweenMax.fromTo('.fractal', 0.5, { scale: 0.8, css: {'-webkit-filter': 'blur(10px)', opacity: 0 } }, { scale: 1, css: { '-webkit-filter': 'blur(0px)', display: 'block', opacity: 1 }}));
};

const exitFractalView = function() {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.fractal', 0.2, {css: { display: 'none'}}));
  tl.add(TweenMax.to('.breathing', 0.2, {css: { display: 'block'}}));
  tl.add( TweenMax.fromTo('.cat', 0.5, {css: {opacity: 0}}, {css: {opacity: 1}}));
  tl.add( TweenMax.to('.mountain3', 0.5, {y: -370, ease: Power2.easeOut}));
};

const breathingToWelldone = function() {
  const tl = new TimelineMax();
  tl.add( TweenMax.to('.belly-press-text', 0, {css: {visibility: 'hidden', opacity: 0 }}));
  tl.add(TweenMax.to('.cat', 0.5, {opacity: 0}));
  tl.add(TweenMax.to('.mountain3', 1, {y: 500}));
  tl.add(TweenMax.to('.alt-intro', 0.1, {css: { display: 'none'}}));
  tl.add(TweenMax.to('.breathing', 0.1, {css: { display: 'none'}}));
  tl.add(TweenMax.to('.welldone', 0.1, {css: { display: 'flex'}}));
  tl.add(TweenMax.fromTo('.welldone', 0.2, { backgroundColor: '#A5E2DA' }, { backgroundColor: '#494A97' }));
  tl.add( TweenMax.to('.welldone-user', 0, {text: {value: `Well Done ${document.cookie}!`, delimiter: ' '}, ease: Linear.easeNone} ));
  tl.add( TweenMax.to('#welldone-stars', 0.3, { opacity: 1}));
  tl.add( TweenMax.to('.welldone-mountain1', 0.5, {y: -100}));
  tl.add( TweenMax.to('.welldone-mountain2', 0.5, {y: -150}));
  tl.add( TweenMax.to('.welldone-mountain3', 0.5, {y: -170}));
  tl.add( TweenMax.to('#start-again', 0.3, { opacity: 1}));
  tl.add(TweenMax.set('.breathing', 0, {backgroundColor: '#A5E2DA'}));
};

const welldoneToIntro = function() {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.welldone-mountain3', 0.3, {y: 0}));
  tl.add(TweenMax.to('.welldone-mountain2', 0.3, {y: 0}));
  tl.add(TweenMax.to('.welldone-mountain1', 0.3, {y: 0}));
  tl.add(TweenMax.to('.welldone', 0.2, {css: { display: 'none'}}));
  tl.add(TweenMax.to('.alt-intro', 0.2, {css: { display: 'flex'}}));
  tl.add(TweenMax.to('.mountain1', 0.5, {y: -170}));
  tl.add(TweenMax.to('.mountain2', 0.5, {y: -300}));
  tl.add(TweenMax.to('.mountain4', 0.5, {y: -300}));
  tl.add(TweenMax.fromTo('.alt-intro', 0.3, {backgroundColor: '#494A97'}, { backgroundColor: '#5CA1C2'}));
  tl.add(TweenMax.to('.breathing-information', 0.2, {css: { display: 'flex', opacity: 1, visibility: 'visible'}}));
};

const breatheOut = {
  visibility: true,
  scale: 1,
  delay: 2
};

const breatheIn = {
  scale: 1.3,
  delay: 2,
  ease: Power1.easeInOut,
  yoyo: true,
  repeat: -1
};

//Cat movement

const breathe = TweenMax.fromTo('#belly', 5, breatheOut, breatheIn);
const headMovement = TweenMax.fromTo('#head', 5, {y: -0, delay: 2}, {y: -19, delay: 2, ease: Power1.easeInOut, repeat: -1, yoyo: true});

//

hands.addEventListener('click', changeToFractalView);
belly.addEventListener('click', changeToFractalView);
exitBreathing.addEventListener('click', fromBreathingToIntro);
FeelingBetterBtn.addEventListener('click', breathingToWelldone);
exitFractal.addEventListener('click', exitFractalView);
landingButton.addEventListener('click', landingToInfo);
nameSubmitButton.addEventListener('click', nameToInfoSwitch);
startBreathingCatButton.addEventListener('click', infoToCatView);
startAgain.addEventListener('click', welldoneToIntro);
