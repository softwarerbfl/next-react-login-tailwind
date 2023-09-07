'use client'
import React, { createContext, useReducer, useState } from "react";
import { Box, Button, Modal, Typography } from '@mui/material';

export const ModalContext = createContext<(param: ActionType) => void>(() => {});

interface ModalContent {
    title: string;
    description: string;
    isCorrect: boolean;
    cancel: boolean;
}

interface ModalProviderProps {
    children: React.ReactNode;
}

interface ActionType extends ModalContent{
    type : string
}

function modalReducer(state : ModalContent, action:ActionType){

    switch(action.type){
        case 'open':{
            return {
                title:action.title,
                description:action.description,
                isCorrect: action.isCorrect,
                cancel: action.cancel

            }
        }
        case 'close':{
            return {
                title:action.title,
                description:action.description,
                isCorrect: false,
                cancel: action.cancel
            }
        }
        default:{
            throw Error("Unkown action : "+ action.type)
        }
    }

}


export const initialModal : ModalContent={
    title: "",
    description: "",
    isCorrect: false,
    cancel: false
};
export default function ModalProvider({ children }: ModalProviderProps) {
    // const [modal, setModal] = useState<ModalContent>({
    //     title: "",
    //     description: "",
    //     isCorrect: false,
    //     cancel: false
    // });

    const [state, dispatch] = useReducer(modalReducer,initialModal)

    // const func = (param: ModalContent) => {
    //     setModal({
    //         isCorrect: param.isCorrect,
    //         cancel: false,
    //         title: param.title,
    //         description: param.description
    //     });
    // }

    const func1 = () => {
        dispatch({
            type:'close',
            isCorrect: false,
            cancel: false,
            title:'',
            description: ''
        });
    }

    return (
        <ModalContext.Provider
            value={dispatch}
        >
            {children}
            <Modal
                open={state.isCorrect}
                sx={{
                    position: 'fixed',
                    top: '50px',
                    left: '50px',
                    width: '300px',
                    minHeight: '100px',
                    backgroundColor: 'white'
                }}
            >
                <Box>
                    <Typography variant="h6" component="h2">
                        {state.title}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {state.description}
                    </Typography>
                    <Button onClick={func1}>닫기</Button>
                </Box>
            </Modal>
        </ModalContext.Provider>
    )
}
