interface Table {
    title: string;
    list: Array<Item>;
}

interface Item {
    name: string;
    url: string;
    target?: string;
    content?: JSX.Element;
}