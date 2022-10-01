function MoneyInput () {
    return (
        <form className="money-input" onSubmit={() => {}}>
            <p>Input Money:</p>
            <input type="text" placeholder="i.e. 5000"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default MoneyInput;