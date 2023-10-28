const Eclipse = {
  createElement: (type, props, ...children) => {
    return { type, props: { ...props, children } };
  },

  render: (element, container) => {
    if (typeof element === "string" || typeof element === "number") {
      container.appendChild(document.createTextNode(element));
      return;
    }

    const dom = document.createElement(element.type);

    Object.keys(element.props || {}).forEach((name) => {
      if (name !== "children") {
        dom[name] = element.props[name];
      }
    });

    if (element.props.children) {
      element.props.children.forEach((child) => {
        Eclipse.render(child, dom);
      });
    }

    container.appendChild(dom);
  },
};

export default Eclipse