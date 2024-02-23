import React from "react";

export default function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Java',
        tempo: '03:00:00'
    }]
    return (
        <aside>
            <h2> Estudos do dia </h2>
            <ul>
                <li>
                    {tarefas.map((item, index) => (
                        <li key={index}>
                            <h3>{item.tarefa}</h3>
                            <span>{item.tempo}</span>
                        </li>
                    ))}
                </li>
            </ul>
        </aside>  
    )
}