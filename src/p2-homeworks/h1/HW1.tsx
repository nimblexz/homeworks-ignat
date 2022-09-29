import React from 'react'
import Message from "./Message";

export const messageData = {
    avatar: 'https://hollywood-actors.ru/wp-content/uploads/kristina-svit25.jpg',
    name: 'Emil',
    message: 'yarn start нажимал',
    time: '19:40',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
