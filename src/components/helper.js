import { v4 as uuid } from 'uuid';

export function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('task', serializedState)

    }catch(e){
        console.log(e);
    }
}
 
export function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('task')
        if (serializedState === null) return {};
        return JSON.parse(serializedState);
    }catch(e){
        console.log(e);
        return undefined
    }
}

//dummy data

export const columnsFromLS = {
    [uuid()]: {
        name: 'To Do',
        items: [
            {id: uuid(), content: 'Helpdesk Call AA999'},
            {id: uuid(), content: 'Helpdesk Call BB999'}
        ]
    },
    [uuid()]: {
        name: 'Development',
        items: [
            {id: uuid(), content: 'Helpdesk Call EE999'},
            {id: uuid(), content: 'Helpdesk Call CC999'}
        ]
    },
    [uuid()]: {
        name: 'Testing',
        items: [
            {id: uuid(), content: 'Helpdesk Call DD999'},
        ]
    },
    [uuid()]: {
        name: 'Done',
        items: [
            {id: uuid(), content: 'Helpdesk Call GG999'},
            {id: uuid(), content: 'Helpdesk Call FF999'}
        ]
    }
}

//Function to control the drag events

export const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };
