import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Birds from './pages/Birds';
import Mammals from './pages/Mammals';
import Reptiles from './pages/Reptiles';
import AnimalSummary from './pages/AnimalSummary';
import AnimalDetail from './pages/AnimalDetail';
import { welcomeContent } from './data/data';
import './App.css'

function App() {
    return (
        <div style={{position: 'relative'}}>
            <Routes>
                <Route element={ <Layout />}>
                    <Route
                        path="/"
                        element={
                            <Home
                                title={welcomeContent.home.title}
                                text1={welcomeContent.home.text1}
                                text2={welcomeContent.home.text2}
                                image={welcomeContent.home.image}
                            />
                         }
                    />
                    <Route
                        path="birds"
                        element={
                            <Birds
                                title={welcomeContent.birds.title}
                                text1={welcomeContent.birds.text1}
                                text2={welcomeContent.birds.text2}
                                image={welcomeContent.birds.image}
                            />
                        }
                    />
                    <Route
                        path="mammals"
                        element={
                            <Mammals
                                title={welcomeContent.mammals.title}
                                text1={welcomeContent.mammals.text1}
                                text2={welcomeContent.mammals.text2}
                                image={welcomeContent.mammals.image}
                            />
                        }
                    />
                    <Route
                        path="reptiles"
                        element={
                            <Reptiles
                                title={welcomeContent.reptiles.title}
                                text1={welcomeContent.reptiles.text1}
                                text2={welcomeContent.reptiles.text2}
                                image={welcomeContent.reptiles.image}
                            />
                        }
                    />
                    <Route
                        path=":category/:animalName"
                        element={
                            <AnimalSummary
                                title={"Animal Summary"}
                            />
                        }
                    />
                    <Route
                        path=":category/:animalName/details"
                        element={
                            <AnimalDetail
                                title={"Animal Details"}
                            />
                        }
                    />
                </Route>
            </Routes>
        </div>
    )
}

export default App