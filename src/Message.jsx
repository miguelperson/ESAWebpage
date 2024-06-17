function Message() {
    const name = 'Miguel';
    if(name)
        return <h1>Hello {name} place holder</h1>;
    return <h1>You have no name bitch</h1>
}

export default Message;