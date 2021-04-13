import html from '../core.js'
import { connect } from '../store.js'

function TodoItem({ todo, index, editIndex }) {
    return html `
        <li class="${todo.complete && 'completed'} 
            ${editIndex === index && 'editing'}">
            <div class="view">
                <input class="toggle" type="checkbox"${todo.complete && 'checked'} 
                onchange="dispatch('toggle',${index})"
                >
                <label onclick="dispatch('Editor', ${index})">${todo.title}</label>
                <button class="destroy" onclick="dispatch('destroy', ${index})"c></button>
            </div>
        <input class="edit" value="${todo.title}" autofocus
            onkeyup="event.keyCode === 13 && dispatch('SaveEdit', this.value.trim())" || console.log('a:a')"
            onblur="dispatch('SaveEdit', this.value.trim())"
        >
        </li> 
    `
}
export default connect()(TodoItem)