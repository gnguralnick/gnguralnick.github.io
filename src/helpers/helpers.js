export function smoothScrollHelper(targetID) {
    const element = document.getElementById(targetID);
    element.scrollIntoView({behavior: 'smooth'});
}