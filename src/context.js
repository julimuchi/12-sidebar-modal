import React, { useState, useContext, Children } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = ()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    }
    const openModal = ()=>{
        setIsModalOpen(true)
    }
    const closeModal = ()=>{
        setIsModalOpen(false)
    }

    return <AppContext.Provider 
    value={{
        isModalOpen, 
        isSidebarOpen, 
        openSidebar, 
        closeSidebar, 
        openModal, 
        closeModal
    }}>
    {children}
    </AppContext.Provider>
}
//CUSTOM HOOK
const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}