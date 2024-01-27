console.log("yo bruh")
const root=document.getElementById('root');

function customRender(ReactElement,root){
    const newElement=document.createElement('a');
    for (const attribute in ReactElement.props) {
        newElement.setAttribute(attribute,ReactElement.props[attribute]);
    }
    newElement.innerHTML=ReactElement.children;
    console.log(newElement);
    root.appendChild(newElement);
}

// let ReactElement=(<a href="https://google.com" target="_blank">This will take you to google</a>) ->not javascript this is jsx not understood by the browser
// root.innerHTML=ReactElement;
let ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'This will take you to google'
}
customRender(ReactElement,root);
