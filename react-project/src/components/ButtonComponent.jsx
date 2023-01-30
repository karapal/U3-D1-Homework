function clickMe(){
    alert('You Clicked');
}

export default function App() {
    return (
        <div>
            <button onClick={clickMe}>
                Click Me
            </button>
        </div>
    );
}