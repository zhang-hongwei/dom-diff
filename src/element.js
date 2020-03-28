import utils from './utils';
class Element {
    constructor(tagName, attrs, children) {
        this.tagName = tagName;
        this.attrs = attrs;
        this.children = children || [];
    }

    render() {
        let element = document.createElement(this.tagName);
        for (let attr in this.attrs) {
            utils.setAttr(element, attr, this.attrs[attr]);
        }

        // 先序深度遍历
        this.children.forEach((child, key) => {
            let childElement =
                child instanceof Element
                    ? child.render(child)
                    : document.createTextNode(child);
            element.appendChild(childElement);
        });

        return element;
    }
}

function createElement(tagName, attrs, children) {
    return new Element(tagName, attrs, children);
}

export { createElement };
