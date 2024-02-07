import React from 'react'
import  {AppContext} from './context/contextApi'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import SearchReasult from './components/SearchReasult'
import VideoDetails from './components/VideoDetail'




const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/searchReasult/:searchQuery' element={<SearchReasult />} />
            <Route path='/video/:id' element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>      
    </AppContext>
  )
}

export default App;
