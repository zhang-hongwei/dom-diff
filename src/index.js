import { createElement } from './element';

let url1 = createElement('ul', { class: 'list' }, [
    createElement('li', { class: 'item1' }, [1]),
    createElement('li', { class: 'item2' }, [2]),
    createElement('li', { class: 'item3' }, [3])
]);

let root = url1.render();

document.body.appendChild(root);
