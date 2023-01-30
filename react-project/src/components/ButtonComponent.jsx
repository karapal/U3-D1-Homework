function clickMe(){
    alert('You Clicked');
}

export default function ButtonComponent(props) {
    return (
        <div>
            <button onClick={clickMe}>
                {props.label}
            </button>
        </div>
    );
}