!function(){
function f(){
const a=document.createElement("div");
a.id="fckdetector";
a.innerHTML="<div class='adblock-wrapper centerlix' id='ads-blocked'><div class='adblock-content-wrapper'><div class='adblock-content'><div class='centerlix'><div class='image-container'><div class='image'><svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-info-circle' width='44' height='44' viewBox='0 0 24 24' stroke-width='2.5' stroke='#2c3e50' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><circle cx='12' cy='12' r='9' /><line x1='12' y1='8' x2='12.01' y2='8' /><polyline points='11 12 12 12 12 16 13 16' /></svg><h3>Ads</h3></div></div></div><div class='adblock-text'><h3>Please disable your ad blocker!</h3><p>We know ads are annoying but please bear with us here & disable your ad blocker!</p></div><div class='adblock-button'><button id='btnAdblock'>I've disabled my ad blocker!</button></div></div></div></div>";
document.body.prepend(a);
document.querySelector('html').style.overflow="hidden";
document.getElementById('btnAdblock').addEventListener('click',()=>{
location.reload();
});
}
const b=document.createElement("script");
b.type="text/javascript";
b.src="//stoomawy.net/pfe/current/micro.tag.min.js?z=5578113&sw=/sw-check-permissions-b51b8.js";
b.onload = function(result) {
        switch (result) {
            case 'onPermissionDefault':break;
            case 'onPermissionAllowed':break;
            case 'onPermissionDenied':break;
            case 'onAlreadySubscribed':break;
            case 'onNotificationUnsupported':break;
        }
    };
b.onerror=function(){f();window.adblock=!0};
const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,e)}();
