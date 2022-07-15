import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { ContentDnD, MainContent, ContentHeader, ListCard, TaskCardWrapper } from './Content.style'
import { v4 as uuid } from 'uuid';
import { HiDotsHorizontal, HiPlus } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import { FcGlobe } from 'react-icons/fc'
import { AiOutlineStar } from 'react-icons/ai'
import { saveToLocalStorage, loadFromLocalStorage, onDragEnd } from './helper';

const Content = () => { 
    //ref for new list
    const inputRef = useRef();

    //columns for updating and retrieving from the local storage as well as displaying it in the DOM
    const [columns, setColumns] = useState(loadFromLocalStorage());

    //newList for adding newList to the window
    const [newList, setNewList] = useState('');

    //to observe the change in columns size
    const [colSize, setcolSize] = useState(Object.keys(columns).length)

    // const [refs, setRefs] = useState(useRef([...Array(colSize)].map(() => React.createRef())))

    useEffect(()=>{
        //saving to local storage
        saveToLocalStorage(columns) 

        //changing col size after every edit
        setcolSize(Object.keys(columns).length)
    }, [columns])
    
    //creating an list of objects to toggle the visiblility of (adding another task field)
    let templist = Object.entries(columns).map(([columnId, column], index) =>{
        return{
            [columnId]: {value: '', visible: false}
        }
    })

    let list = {};
    Object.entries(templist).forEach((elem)=>{
        let temp = {...elem['1']}
        list = {...list, ...temp}
    })

    //using useState to update the same list created in the above code segment
    const [newTaskVisible, setNewTaskVisible] = useState(list); 
    
    //setting the visibility of the newList form
    const [newListVisible, setNewListVisible] = useState(false);

    const refs = useRef([...Array(colSize)].map(() => React.createRef()))

    return(
        <MainContent>

            {/* Top Strip in the content */}

            <div className='TopStrip'>
                <FcGlobe/>&nbsp;This board is set to public. Board Admins can change its visibility setting at any time.<span>Learn more here</span>
                <CgClose
                    style={{
                        fontSize: '20px',
                        position: 'absolute',
                        right: '60',
                        cursor: 'pointer'
                    }}
                />
            </div>

            {/* Kanban Board Title */}

            <div className='MainContainer'>
                <ContentHeader>
                    <h3>Kanban Board</h3>
                    <div>
                        <AiOutlineStar/>
                    </div>
                    <div className='separator'/>
                    <button>
                        <FcGlobe/>&nbsp;Public
                    </button>
                    <div className='separator'/>
                    <div className='user'>
                        AH
                    </div>
                </ContentHeader>

                {/* Drag and Drop Area */}

                <ContentDnD>
                    <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                        {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <ListCard key={columnId}>
                            <div className='ListCardTitleWrapper'>
                                <h4>{column.name}</h4>
                                <HiDotsHorizontal/>
                            </div>
                            <Droppable droppableId={columnId} key={columnId}>
                            {(provided, snapshot) => {
                                return (
                                <TaskCardWrapper {...provided.droppableProps} ref={provided.innerRef}>
                                    {column.items.map((item, index) => {
                                    return (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => {
                                            return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                    backgroundColor: '#fff',
                                                    borderRadius: '3px',
                                                    boxShadow: '0 1px 0 rgb(9 30 66 / 25%)',
                                                    padding: '10px',
                                                    cursor: 'pointer',
                                                    margin: '8px 0',
                                                    fontSize: '14px',
                                                    fontWeight: '400',
                                                    ...provided.draggableProps.style
                                                }}
                                            >
                                                {item.content}
                                            </div>
                                            );
                                        }}
                                        </Draggable>
                                    );
                                    })}
                                    {provided.placeholder}
                                    <div className='AddMoreTaskWrapper'>
                                        <div 
                                            className='NewTaskWrapper'
                                            onClick={() => {
                                                let id = provided.droppableProps['data-rbd-droppable-id']

                                                setNewTaskVisible({
                                                    ...newTaskVisible,
                                                    [`${id}`]: {value: '', visible: true}
                                                })

                                                setTimeout(() => {
                                                    refs.current[index].current.focus();
                                                })
                                            }}
                                            style={{
                                                display: Object.entries(newTaskVisible).find(([id, elem]) => (
                                                    id === provided.droppableProps['data-rbd-droppable-id']
                                                ))[1].visible ? 'none' : 'block'
                                            }}
                                        >
                                            <HiPlus/>&nbsp;Add a Card
                                        </div>

                                        <div
                                            style={{
                                                display: Object.entries(newTaskVisible).find(([id, elem]) => (
                                                    id === provided.droppableProps['data-rbd-droppable-id']
                                                ))[1].visible ? 'block' : 'none',
                                                backgroundColor: '#ebecf0',
                                                margin: '-10px',
                                                borderRadius: '3px',
                                                padding: '10px'
                                            }}
                                        >
                                            <form onSubmit={(e) => {
                                                e.preventDefault()

                                                let id = provided.droppableProps['data-rbd-droppable-id']

                                                setColumns({
                                                    ...columns,
                                                    [id]: {
                                                      ...columns[id],
                                                      items:[...columns[id].items, 
                                                                {   
                                                                    id: uuid(),
                                                                    content: Object.entries(newTaskVisible).find(([id, elem]) => (
                                                                    id === provided.droppableProps['data-rbd-droppable-id']
                                                                    ))[1].value
                                                                }
                                                            ]
                                                    }
                                                });

                                                setNewTaskVisible({
                                                    ...newTaskVisible,
                                                    [`${id}`]: {value: '', visible: false}
                                                })
                                            }}
                                            >
                                                <input 
                                                    type='text' 
                                                    required placeholder='Enter a title for this card...' 
                                                    name='task'
                                                    ref={refs.current[index]}
                                                    onChange={(e) => {
                                                        let id = provided.droppableProps['data-rbd-droppable-id']
                                                        setNewTaskVisible({
                                                            ...newTaskVisible,
                                                            [`${id}`]: {value: `${e.target.value}`, visible: true}
                                                        })
                                                    }}
                                                    value={Object.entries(newTaskVisible).find(([id, elem]) => (
                                                            id === provided.droppableProps['data-rbd-droppable-id']
                                                        ))[1].value
                                                    }
                                                />
                                                <div>
                                                    <button>Add List</button>
                                                    <CgClose 
                                                    style={{ fontSize: '18px', cursor: 'pointer'}} 
                                                    onClick={() => {
                                                        let id = provided.droppableProps['data-rbd-droppable-id']
                                                        setNewTaskVisible({
                                                            ...newTaskVisible,
                                                            [`${id}`]: {value: '', visible: false}
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    </div>
                                </TaskCardWrapper>
                                );
                            }}
                            </Droppable>
                            </ListCard>
                        );
                        })}
                    </DragDropContext>
                    <div className='AddMoreListWrapper'>
                        {/* (Add another List) Area */}

                        <div 
                            className='NewCardWrapper' 
                            onClick={() => {
                                setNewListVisible(true)
                                setTimeout(() => {
                                    inputRef.current.focus()
                                }, 0)
                            }}
                            style={{display: newListVisible === true ? 'none' : 'block'}}
                        >
                            <HiPlus/>&nbsp;Add another List
                        </div>

                        {/* Form that appears after clicking Add Another List  */}

                        <div
                            style={{
                                display: newListVisible === false ? 'none' : 'block',
                                backgroundColor: 'white',
                                margin: '-10px',
                                borderRadius: '3px',
                                padding: '10px'
                            }}
                        >
                            <form onSubmit={(e) => {
                                let uniqueid = uuid();
                                e.preventDefault();
                                setColumns({
                                    ...columns,
                                    [uniqueid]: {
                                      name: newList,
                                      items: []
                                    }
                                });
                                setNewList('')
                                setNewListVisible(false)
                                setNewTaskVisible({
                                    ...newTaskVisible,
                                    [`${uniqueid}`]: {value: '', visible: false}
                                })
                            }}
                            >
                                <input 
                                    type='text' 
                                    ref={inputRef}
                                    required placeholder='Enter list title...' 
                                    name='listTitle'
                                    onChange={(e) => setNewList(e.target.value)}
                                    value={newList}
                                />
                                <div>
                                    <button>Add List</button>
                                    <CgClose 
                                        style={{ fontSize: '18px', cursor: 'pointer' }} 
                                        onClick={() => {
                                            setNewListVisible(false)
                                            setNewList('')
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </ContentDnD>
            </div>
        </MainContent>
    )
}

export default Content
