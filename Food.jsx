function Food(){
    const food1='Orange'
    const food2='Banana'
    return(
        <li>
            <ul>
                <li>Mango</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
                <li>Apple</li>


            </ul>
        </li>

    );
}
export default Food